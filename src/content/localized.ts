import type { Language, Localized } from "./types";

export function resolveLocalized(lang: Language, value: Localized): string {
  return typeof value === "string" ? value : value[lang];
}
