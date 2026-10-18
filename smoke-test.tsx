import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { getSubject, subjects } from "C:/coding/personal projects/classes/src/content/subjects/index.ts";
import { SubjectPage } from "C:/coding/personal projects/classes/src/pages/SubjectPage.tsx";
import { HomePage } from "C:/coding/personal projects/classes/src/pages/HomePage.tsx";
import { NotFoundPage } from "C:/coding/personal projects/classes/src/pages/NotFoundPage.tsx";
import { BlockRenderer } from "C:/coding/personal projects/classes/src/components/BlockRenderer.tsx";
import { AppShell } from "C:/coding/personal projects/classes/src/components/AppShell.tsx";
import { SettingsProvider } from "C:/coding/personal projects/classes/src/components/SettingsProvider.tsx";
import { uiStrings } from "C:/coding/personal projects/classes/src/content/uiStrings.ts";
import { runAutomaton } from "C:/coding/personal projects/classes/src/content/automaton.ts";
import { gradeableIds } from "C:/coding/personal projects/classes/src/content/exerciseStats.ts";
import type { AutomatonSpec, Language, Localized } from "C:/coding/personal projects/classes/src/content/types.ts";
import type { ExerciseProgressValue } from "C:/coding/personal projects/classes/src/hooks/useExerciseProgress.ts";
import { ExerciseProgressContext } from "C:/coding/personal projects/classes/src/hooks/useExerciseProgress.ts";

const LANGS = ["fr", "en", "uk"] as const;

let failed = 0;
const fail = (message: string) => {
  failed++;
  console.log(`FAIL ${message}`);
};
const noop: ExerciseProgressValue = {
  solved: {},
  isSolved: () => false,
  solve: () => undefined,
  reset: () => undefined,
};
const loc = (lang: Language, value: Localized): string =>
  typeof value === "string" ? value : value[lang];
const decode = (html: string): string =>
  html
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

function renderRoute(path: string, element: React.ReactElement, lang: Language) {
  return renderToString(
    createElement(
      SettingsProvider,
      { initialLang: lang },
      createElement(
        MemoryRouter,
        { initialEntries: [path] },
        createElement(
          AppShell,
          null,
          createElement(
            Routes,
            null,
            createElement(Route, { path: "/", element: createElement(HomePage) }),
            createElement(Route, { path: "/:slug", element }),
            createElement(Route, { path: "*", element: createElement(NotFoundPage) }),
          ),
        ),
      ),
    ),
  );
}

function checkPage(label: string, html: string) {
  if (html.includes("undefined")) fail(`${label}: renders "undefined"`);
  if (html.includes("**")) fail(`${label}: raw bold markers`);
  if (html.includes("[object")) fail(`${label}: [object Object] leaked`);
}

for (const subject of subjects) {
  for (const lang of LANGS) {
    try {
      const html = renderRoute(`/${subject.slug}`, createElement(SubjectPage), lang);
      checkPage(`${subject.slug} ${lang} page`, html);
      console.log(`OK page ${subject.slug} ${lang} (${html.length} chars)`);
    } catch (error) {
      fail(`page ${subject.slug} ${lang}: ${error}`);
    }
  }
}

for (const lang of LANGS) {
  try {
    const ui = uiStrings[lang];
    const home = renderRoute("/", createElement(HomePage), lang);
    checkPage(`home ${lang}`, home);
    if (!decode(home).includes(ui.openNotebook)) fail(`home ${lang}: missing "${ui.openNotebook}"`);
    const nf = renderRoute("/nope", createElement(NotFoundPage), lang);
    checkPage(`404 ${lang}`, nf);
    if (!decode(nf).includes(ui.backToIndex)) fail(`404 ${lang}: missing "${ui.backToIndex}"`);
    const homeText = decode(home);
    for (const [key, value] of [
      ["notebooks", ui.notebooks],
      ["footer", ui.footer],
      ["settingsLabel", ui.settingsLabel],
      ["settings", ui.settings],
    ] as const) {
      if (!homeText.includes(value)) fail(`shell ${lang}: missing ${key} "${value}"`);
    }
    if (subjects.some((s) => s.status === "soon") && !homeText.includes(ui.soon))
      fail(`shell ${lang}: missing soon badge "${ui.soon}"`);
    console.log(`OK home+404+shell ${lang}`);
  } catch (error) {
    fail(`home/404 ${lang}: ${error}`);
  }
}

const subject = getSubject("langages-formels")!;

const automatonSpecs = new Map<string, AutomatonSpec>();
for (const subjectClass of subject.classes) {
  for (const block of subjectClass.blocks) {
    if (block.type !== "automaton") continue;
    for (const spec of block.automata) automatonSpecs.set(spec.id, spec);
  }
}
const simulated: [string, string, boolean][] = [
  ["contains-11", "", false],
  ["contains-11", "1", false],
  ["contains-11", "11", true],
  ["contains-11", "011", true],
  ["contains-11", "1010", false],
  ["contains-11", "110", true],
  ["contains-ab", "ab", true],
  ["contains-ab", "aab", true],
  ["contains-ab", "ba", false],
  ["contains-ab", "bb", false],
  ["even-a", "", true],
  ["even-a", "aa", true],
  ["even-a", "a", false],
  ["even-a", "ab", false],
  ["even-a", "aba", true],
];
for (const [id, word, expected] of simulated) {
  const spec = automatonSpecs.get(id);
  if (!spec) {
    fail(`missing automaton spec ${id}`);
    continue;
  }
  const got = runAutomaton(spec, word).accepted;
  if (got !== expected)
    fail(`automaton ${id} "${word}": expected ${expected}, got ${got}`);
}
const afterA = runAutomaton(automatonSpecs.get("contains-ab")!, "a").steps[1].active;
if (afterA.size !== 2)
  fail(`contains-ab NFA after "a" should have 2 active states, got ${afterA.size}`);
console.log(
  `OK automaton simulations (${automatonSpecs.size} specs, ${simulated.length} runs)`,
);

for (const lang of LANGS) {
  const ui = uiStrings[lang];
  const pageHtml = renderRoute("/langages-formels", createElement(SubjectPage), lang);
  checkPage(`langages-formels ${lang} main page`, pageHtml);
  const pageText = decode(pageHtml);
  for (const subjectClass of subject.classes) {
    const label = loc(lang, subjectClass.label!);
    if (!pageText.includes(label)) fail(`tab label missing (${lang}): ${label}`);
  }
  const chip = ui.progressOf(0, gradeableIds(subject).length);
  if (!pageText.includes(chip))
    fail(`header progress chip missing or wrong total (${lang}): ${chip}`);
  const title = loc(lang, subject.classes[0].title);
  if (!pageText.includes(title)) fail(`class title missing (${lang}): ${title}`);
  console.log(`OK langages-formels checks ${lang}`);
}

const systeme2 = getSubject("systeme-2")!;
for (const lang of LANGS) {
  const ui = uiStrings[lang];
  const pageHtml = renderRoute("/systeme-2", createElement(SubjectPage), lang);
  checkPage(`systeme-2 ${lang} main page`, pageHtml);
  const pageText = decode(pageHtml);
  for (const subjectClass of systeme2.classes) {
    const label = loc(lang, subjectClass.label!);
    if (!pageText.includes(label))
      fail(`systeme-2 tab label missing (${lang}): ${label}`);
  }
  const chip = ui.progressOf(0, gradeableIds(systeme2).length);
  if (!pageText.includes(chip))
    fail(`systeme-2 header progress chip missing or wrong total (${lang}): ${chip}`);
  console.log(`OK systeme-2 checks ${lang}`);
}

function Harness({ slug, ci, lang }: { slug: string; ci: number; lang: Language }) {
  const subjectClass = getSubject(slug)!.classes[ci];
  return createElement(
    SettingsProvider,
    { initialLang: lang },
    createElement(
      ExerciseProgressContext.Provider,
      { value: noop },
      createElement(
        "div",
        null,
        subjectClass.parts?.map((part) =>
          createElement("button", { key: part.id }, loc(lang, part.label)),
        ),
        createElement(BlockRenderer, {
          blocks: subjectClass.blocks,
          idPrefix: `${ci}:`,
        }),
      ),
    ),
  );
}

for (const [ci, subjectClass] of subject.classes.entries()) {
  for (const lang of LANGS) {
    try {
      const html = renderToString(createElement(Harness, { slug: "langages-formels", ci, lang }));
      if (!html.includes(`id="part-p1"`) && ci > 0)
        fail(`class${ci} ${lang}: part heading id missing`);
      if (ci > 0 && !html.includes("A1")) fail(`class${ci} ${lang}: exercise badges missing`);
      checkPage(`class${ci} ${lang}`, html);
      for (const part of subjectClass.parts ?? []) {
        if (!decode(html).includes(loc(lang, part.label)))
          fail(`class${ci} ${lang}: part pill label missing: ${loc(lang, part.label)}`);
      }
      console.log(
        `OK harness class${ci} ${lang} "${loc(lang, subjectClass.title)}" (${html.length} chars, parts=${subjectClass.parts?.length ?? 0})`,
      );
    } catch (error) {
      fail(`harness class${ci} ${lang}: ${error}`);
    }
  }
}

for (const [ci, subjectClass] of systeme2.classes.entries()) {
  for (const lang of LANGS) {
    try {
      const html = renderToString(createElement(Harness, { slug: "systeme-2", ci, lang }));
      checkPage(`systeme2 class${ci} ${lang}`, html);
      for (const part of subjectClass.parts ?? []) {
        if (!decode(html).includes(loc(lang, part.label)))
          fail(`systeme2 class${ci} ${lang}: part pill label missing: ${loc(lang, part.label)}`);
      }
      console.log(
        `OK harness systeme2 class${ci} ${lang} "${loc(lang, subjectClass.title)}" (${html.length} chars, parts=${subjectClass.parts?.length ?? 0})`,
      );
    } catch (error) {
      fail(`harness systeme2 class${ci} ${lang}: ${error}`);
    }
  }
}

console.log(failed ? `${failed} RENDER FAILURE(S)` : "ALL PAGES RENDER OK");
