import { useEffect, useRef, useState } from "react";
import type { Language } from "../content/types";
import { useSettings, useUI, type Theme } from "../hooks/useSettings";
import { GearIcon, MoonIcon, SunIcon, UserIcon } from "./icons";
import styles from "./SettingsMenu.module.css";

const LANGUAGES: { value: Language; label: string }[] = [
  { value: "fr", label: "Français" },
  { value: "en", label: "English" },
];

export function SettingsMenu() {
  const { lang, theme, setLang, setTheme } = useSettings();
  const ui = useUI();
  const [open, setOpen] = useState(false);
  const [showSoon, setShowSoon] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const soonTimer = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  useEffect(
    () => () => {
      if (soonTimer.current !== null) {
        window.clearTimeout(soonTimer.current);
      }
    },
    [],
  );

  const handleLogin = () => {
    setShowSoon(true);
    if (soonTimer.current !== null) {
      window.clearTimeout(soonTimer.current);
    }
    soonTimer.current = window.setTimeout(() => setShowSoon(false), 2500);
  };

  const themeOptions: { value: Theme; icon: typeof SunIcon; label: string }[] =
    [
      { value: "light", icon: SunIcon, label: ui.themeLight },
      { value: "dark", icon: MoonIcon, label: ui.themeDark },
    ];

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={open ? `${styles.trigger} ${styles.triggerOpen}` : styles.trigger}
        aria-label={ui.settingsLabel}
        aria-expanded={open}
        title={ui.settings}
        onClick={() => setOpen((value) => !value)}
      >
        <GearIcon className={styles.triggerIcon} />
      </button>

      {open && (
        <div className={styles.panel}>
          <div className={styles.section}>
            <p className={styles.sectionLabel}>{ui.language}</p>
            <div className={styles.options}>
              {LANGUAGES.map((entry) => (
                <button
                  key={entry.value}
                  type="button"
                  className={
                    entry.value === lang
                      ? `${styles.option} ${styles.optionActive}`
                      : styles.option
                  }
                  aria-pressed={entry.value === lang}
                  onClick={() => setLang(entry.value)}
                >
                  {entry.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionLabel}>{ui.appearance}</p>
            <div className={styles.options}>
              {themeOptions.map((entry) => {
                const Icon = entry.icon;
                return (
                  <button
                    key={entry.value}
                    type="button"
                    className={
                      entry.value === theme
                        ? `${styles.option} ${styles.optionActive}`
                        : styles.option
                    }
                    aria-pressed={entry.value === theme}
                    onClick={() => setTheme(entry.value)}
                  >
                    <Icon className={styles.optionIcon} />
                    {entry.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.section}>
            <button
              type="button"
              className={styles.loginBtn}
              onClick={handleLogin}
            >
              <UserIcon className={styles.optionIcon} />
              {ui.login}
            </button>
            <span
              className={
                showSoon
                  ? `${styles.soonNote} ${styles.soonNoteVisible}`
                  : styles.soonNote
              }
              aria-live="polite"
            >
              {ui.comingSoon}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
