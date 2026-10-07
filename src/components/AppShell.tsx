import { NavLink } from "react-router-dom";
import { subjects } from "../content/subjects";
import type { ReactNode } from "react";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          <svg
            className={styles.brandIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 19.5z" />
            <path d="M4 17.5A2.5 2.5 0 0 1 6.5 15H20" />
            <path d="M9 7h7" />
          </svg>
          Alina's notes
        </NavLink>
        <span className={styles.tagline}>study together</span>
      </header>

      <aside className={styles.rail}>
        <p className={styles.railTitle}>Notebooks</p>
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
                {subject.title}
              </NavLink>
            ) : (
              <span key={subject.slug} className={`${styles.railItem} ${styles.railItemSoon}`}>
                {subject.title}
                <span className={styles.soonBadge}>soon</span>
              </span>
            ),
          )}
        </nav>
      </aside>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>Alina's notes — learning in public</p>
      </footer>
    </div>
  );
}
