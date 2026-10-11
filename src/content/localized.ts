import type { Language, Localized } from "./types";

export function resolveLocalized(lang: Language, value: Localized): string {
  if (typeof value === "string") return value;
  const localized = value as Record<string, string | undefined>;
  return localized[lang] ?? localized.fr ?? localized.en ?? localized.uk ?? "";
}
