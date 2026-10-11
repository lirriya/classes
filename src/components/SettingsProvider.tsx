import { useEffect, useMemo, useState } from "react";
import type { Language } from "../content/types";
import {
  LANG_KEY,
  SettingsContext,
  THEME_KEY,
  detectLang,
  detectTheme,
  writeStored,
  type SettingsProviderProps,
  type Theme,
} from "../hooks/useSettings";

export function SettingsProvider({
  children,
  initialLang,
  initialTheme,
}: SettingsProviderProps) {
  const [lang, setLang] = useState<Language>(() => initialLang ?? detectLang());
  const [theme, setTheme] = useState<Theme>(
    () => initialTheme ?? detectTheme(),
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    writeStored(LANG_KEY, lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeStored(THEME_KEY, theme);
  }, [theme]);

  const value = useMemo(
    () => ({ lang, theme, setLang, setTheme }),
    [lang, theme],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}
