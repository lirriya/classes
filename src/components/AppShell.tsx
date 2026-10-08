import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { subjects } from "../content/subjects";
import type { ReactNode } from "react";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { useText, useUI } from "../hooks/useSettings";
import { SettingsMenu } from "./SettingsMenu";
import { BookmarkIcon, NotebookIcon } from "./icons";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const ui = useUI();
  const t = useText();
  useGsapReveal(mainRef, location.pathname);

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          <NotebookIcon className={styles.brandIcon} />
          Alina's notes
        </NavLink>
        <SettingsMenu />
      </header>

      <aside className={styles.rail}>
        <p className={styles.railTitle}>
          <BookmarkIcon className={styles.railTitleIcon} />
          {ui.notebooks}
        </p>
        <nav className={styles.railNav}>
          {subjects.map((subject) =>
            subject.status === "published" ? (
              <NavLink
                key={subject.slug}
                to={`/${subject.slug}`}
                className={({ isActive }) =>
                  isActive ? `${styles.railItem} ${styles.railItemActive}` : styles.railItem
                }
              >
                <span className={styles.railLabel}>
                  <NotebookIcon className={styles.railIcon} />
                  {t(subject.title)}
                </span>
              </NavLink>
            ) : (
              <span key={subject.slug} className={`${styles.railItem} ${styles.railItemSoon}`}>
                <span className={styles.railLabel}>
                  <NotebookIcon className={styles.railIcon} />
                  {t(subject.title)}
                </span>
                <span className={styles.soonBadge}>{ui.soon}</span>
              </span>
            ),
          )}
        </nav>
      </aside>

      <main className={styles.main} ref={mainRef}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>{ui.footer}</p>
      </footer>
    </div>
  );
}
