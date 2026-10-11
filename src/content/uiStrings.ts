import type { Language, Localized } from "./types";

export interface UIStrings {
  goodJob: string;
  tryAgain: string;
  check: string;
  showSolution: string;
  solution: string;
  vrai: string;
  faux: string;
  solved: string;
  resetProgress: string;
  resetConfirm: string;
  progressOf: (solved: number, total: number) => string;
  blankLabel: (index: number) => string;
  simulator: string;
  testWord: string;
  runSim: string;
  resetSim: string;
  accepted: string;
  rejected: string;
  examplesLabel: string;
  activeStates: string;
  emptyWord: string;
  conceptCheck: string;
  nextStep: string;
  randomStep: string;
  sharedState: string;
  timeline: string;
  resultExpected: string;
  resultActual: string;
  resultSafe: string;
  resultRace: string;
  bufferLabel: string;
  bufferCapacity: string;
  produce: string;
  consume: string;
  bufferFull: string;
  bufferEmpty: string;
  settings: string;
  settingsLabel: string;
  language: string;
  appearance: string;
  themeLight: string;
  themeDark: string;
  login: string;
  comingSoon: string;
  comingSoonBadge: string;
  notebooks: string;
  soon: string;
  footer: string;
  homeKicker: string;
  homeLead: string;
  homeMeta: string;
  statNotebooks: string;
  statWithNotes: string;
  statClasses: string;
  notesInProgress: string;
  openNotebook: string;
  classesCount: (count: number) => string;
  allNotebooks: string;
  classFallback: (index: number) => string;
  noNotesYet: string;
  notesInProgressTitle: string;
  notesInProgressBody: string;
  notFoundText: string;
  backToIndex: string;
}

export const uiNotCorrect: Localized = {
  fr: "Ce n'est pas tout à fait ça. Fais une autre tentative !",
  en: "Not quite — that's not it. Give it another try!",
  uk: "Не зовсім так. Спробуй ще раз!",
};

export const uiStrings: Record<Language, UIStrings> = {
  fr: {
    goodJob: "Bien joué !",
    tryAgain: "Réessayer",
    check: "Vérifier la réponse",
    showSolution: "Voir le corrigé",
    solution: "Corrigé officiel",
    vrai: "Vrai",
    faux: "Faux",
    solved: "résolus",
    resetProgress: "Réinitialiser la progression",
    resetConfirm:
      "Réinitialiser toute la progression de ce carnet ? Chaque exercice résolu sera marqué comme non résolu.",
    progressOf: (solved, total) => `${solved} / ${total} résolus`,
    blankLabel: (index) => `Trou ${index}`,
    simulator: "Simulateur",
    testWord: "Mot à tester",
    runSim: "Exécuter",
    resetSim: "Réinitialiser",
    accepted: "Mot accepté",
    rejected: "Mot refusé",
    examplesLabel: "Exemples :",
    activeStates: "États actifs",
    emptyWord: "mot vide",
    conceptCheck: "Vérifie ta compréhension",
    nextStep: "Étape suivante",
    randomStep: "Pas au hasard",
    sharedState: "État partagé",
    timeline: "Déroulé",
    resultExpected: "Résultat attendu",
    resultActual: "Résultat obtenu",
    resultSafe: "Entrelacement correct",
    resultRace: "Course critique : le résultat change !",
    bufferLabel: "Tampon",
    bufferCapacity: "Capacité",
    produce: "Produire",
    consume: "Consommer",
    bufferFull: "Tampon plein : l'écriture est perdue !",
    bufferEmpty: "Tampon vide : rien à lire !",
    settings: "Réglages",
    settingsLabel: "Ouvrir les réglages",
    language: "Langue",
    appearance: "Apparence",
    themeLight: "Clair",
    themeDark: "Sombre",
    login: "Se connecter",
    comingSoon: "Bientôt disponible !",
    comingSoonBadge: "bientôt disponible",
    notebooks: "Carnets",
    soon: "bientôt",
    footer: "Alina's notes — apprendre en public",
    homeKicker: "Chapitre 1 — bienvenue",
    homeLead:
      "Bienvenue dans mon petit coin d'internet, où je partage mes notes et mon parcours d'apprentissage avec vous. Étudions ensemble !",
    homeMeta:
      "Un grand carnet, un sous-carnet par matière. Choisissez-en un dans l'index et ouvrez-le.",
    statNotebooks: "carnets",
    statWithNotes: "avec des notes",
    statClasses: "classes prévues",
    notesInProgress: "notes en cours",
    openNotebook: "Ouvrir le carnet",
    classesCount: (count) => `${count} classes`,
    allNotebooks: "Tous les carnets",
    classFallback: (index) => `Classe ${index + 1}`,
    noNotesYet: "Les notes de cette classe ne sont pas encore écrites.",
    notesInProgressTitle: "Notes en cours",
    notesInProgressBody:
      "Ce carnet est en cours d'écriture. Revenez bientôt !",
    notFoundText: "Cette page ne fait pas partie du carnet.",
    backToIndex: "← Retour à l'index",
  },
  uk: {
    goodJob: "Молодець!",
    tryAgain: "Спробувати ще раз",
    check: "Перевірити відповідь",
    showSolution: "Показати розв'язок",
    solution: "Офіційний розв'язок",
    vrai: "Правда",
    faux: "Неправда",
    solved: "розв'язано",
    resetProgress: "Скинути прогрес",
    resetConfirm:
      "Скинути весь прогрес цього зошита? Кожну розв'язану вправу буде позначено як нерозв'язану.",
    progressOf: (solved, total) => `${solved} / ${total} розв'язано`,
    blankLabel: (index) => `Пропуск ${index}`,
    simulator: "Симулятор",
    testWord: "Слово для перевірки",
    runSim: "Запустити",
    resetSim: "Скинути",
    accepted: "Слово прийнято",
    rejected: "Слово відхилено",
    examplesLabel: "Приклади:",
    activeStates: "Активні стани",
    emptyWord: "порожнє слово",
    conceptCheck: "Перевір своє розуміння",
    nextStep: "Наступний крок",
    randomStep: "Випадковий крок",
    sharedState: "Спільний стан",
    timeline: "Перебіг",
    resultExpected: "Очікуваний результат",
    resultActual: "Отриманий результат",
    resultSafe: "Коректне чергування",
    resultRace: "Стан гонитви: результат змінюється!",
    bufferLabel: "Буфер",
    bufferCapacity: "Ємність",
    produce: "Виробляти",
    consume: "Споживати",
    bufferFull: "Буфер повний: запис втрачено!",
    bufferEmpty: "Буфер порожній: нічого читати!",
    settings: "Налаштування",
    settingsLabel: "Відкрити налаштування",
    language: "Мова",
    appearance: "Зовнішній вигляд",
    themeLight: "Світла",
    themeDark: "Темна",
    login: "Увійти",
    comingSoon: "Незабаром!",
    comingSoonBadge: "незабаром",
    notebooks: "Зошити",
    soon: "незабаром",
    footer: "Нотатки Аліни — навчаюсь публічно",
    homeKicker: "Розділ 1 — вітаю",
    homeLead:
      "Вітаю у моєму куточку інтернету, де я ділюся своїми нотатками та навчальним шляхом. Навчаймося разом!",
    homeMeta:
      "Один великий зошит, окремий підзошит для кожного предмета. Оберіть один у списку та відкрийте його.",
    statNotebooks: "зошитів",
    statWithNotes: "з нотатками",
    statClasses: "запланованих занять",
    notesInProgress: "нотатки в роботі",
    openNotebook: "Відкрити зошит",
    classesCount: (count) => `${count} занять`,
    allNotebooks: "Усі зошити",
    classFallback: (index) => `Заняття ${index + 1}`,
    noNotesYet: "Нотатки до цього заняття ще не написані.",
    notesInProgressTitle: "Нотатки в роботі",
    notesInProgressBody: "Цей зошит ще пишеться. Завітайте пізніше!",
    notFoundText: "Ця сторінка не є частиною зошита.",
    backToIndex: "← Назад до списку",
  },
  en: {
    goodJob: "Good job!",
    tryAgain: "Try again",
    check: "Check answer",
    showSolution: "Show solution",
    solution: "Official solution",
    vrai: "True",
    faux: "False",
    solved: "solved",
    resetProgress: "Reset progress",
    resetConfirm:
      "Reset all progress for this notebook? Every solved exercise will be marked as unsolved.",
    progressOf: (solved, total) => `${solved} / ${total} solved`,
    blankLabel: (index) => `Blank ${index}`,
    simulator: "Simulator",
    testWord: "Word to test",
    runSim: "Run",
    resetSim: "Reset",
    accepted: "Word accepted",
    rejected: "Word rejected",
    examplesLabel: "Examples:",
    activeStates: "Active states",
    emptyWord: "empty word",
    conceptCheck: "Check your understanding",
    nextStep: "Next step",
    randomStep: "Random step",
    sharedState: "Shared state",
    timeline: "Timeline",
    resultExpected: "Expected result",
    resultActual: "Actual result",
    resultSafe: "Correct interleaving",
    resultRace: "Race condition: the result changed!",
    bufferLabel: "Buffer",
    bufferCapacity: "Capacity",
    produce: "Produce",
    consume: "Consume",
    bufferFull: "Buffer full: the write is lost!",
    bufferEmpty: "Buffer empty: nothing to read!",
    settings: "Settings",
    settingsLabel: "Open settings",
    language: "Language",
    appearance: "Appearance",
    themeLight: "Light",
    themeDark: "Dark",
    login: "Log in",
    comingSoon: "Coming soon!",
    comingSoonBadge: "coming soon",
    notebooks: "Notebooks",
    soon: "soon",
    footer: "Alina's notes — learning in public",
    homeKicker: "Chapter 1 — welcome",
    homeLead:
      "Welcome to my little corner of the internet, where I share my notes and learning journey with you. Let's study together!",
    homeMeta:
      "One big notebook, one sub-notebook per subject. Pick one from the index and open it.",
    statNotebooks: "notebooks",
    statWithNotes: "with notes",
    statClasses: "classes planned",
    notesInProgress: "notes in progress",
    openNotebook: "Open notebook",
    classesCount: (count) => `${count} classes`,
    allNotebooks: "All notebooks",
    classFallback: (index) => `Class ${index + 1}`,
    noNotesYet: "Notes for this class aren't written yet.",
    notesInProgressTitle: "Notes in progress",
    notesInProgressBody:
      "This notebook is being written. Check back soon!",
    notFoundText: "This page isn't part of the notebook.",
    backToIndex: "← Back to the index",
  },
};
