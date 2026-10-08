import {
  createContext,
  useCallback,
  useContext,
  type ReactNode,
} from "react";
import type { Language, Localized } from "../content/types";
import { resolveLocalized } from "../content/localized";
import { uiStrings, type UIStrings } from "../content/uiStrings";

export type Theme = "light" | "dark";

export const LANG_KEY = "classes:lang";
export const THEME_KEY = "classes:theme";

export interface SettingsValue {
  lang: Language;
  theme: Theme;
  setLang: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
}

const defaultSettings: SettingsValue = {
  lang: "fr",
  theme: "light",
  setLang: () => {},
  setTheme: () => {},
};

export const SettingsContext = createContext<SettingsValue>(defaultSettings);

export function readStored(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStored(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
}

export function detectLang(): Language {
  const stored = readStored(LANG_KEY);
  if (stored === "fr" || stored === "en") return stored;
  if (typeof window === "undefined") return "fr";
  const browserLang = (window.navigator?.language ?? "").toLowerCase();
  return browserLang.startsWith("fr") ? "fr" : "en";
}

export function detectTheme(): Theme {
  return readStored(THEME_KEY) === "dark" ? "dark" : "light";
}

export function useSettings(): SettingsValue {
  return useContext(SettingsContext);
}

export function useLang(): Language {
  return useContext(SettingsContext).lang;
}

export function useText(): (value: Localized) => string {
  const lang = useLang();
  return useCallback(
    (value: Localized) => resolveLocalized(lang, value),
    [lang],
  );
}

export function useUI(): UIStrings {
  return uiStrings[useLang()];
}

export interface SettingsProviderProps {
  children: ReactNode;
  initialLang?: Language;
  initialTheme?: Theme;
}
