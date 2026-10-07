import { Link } from "react-router-dom";
import { subjects } from "../content/subjects";
import styles from "./HomePage.module.css";

export function HomePage() {
  return (
    <div className={styles.home}>
      <section className={styles.intro}>
        <span className={styles.kicker}>Chapter 1 — welcome</span>
        <h1 className={styles.title}>Alina's notes</h1>
        <p className={styles.lead}>
          Welcome to my little corner of the internet, where I share my notes and
          learning journey with you. Let's study together!
        </p>
        <p className={styles.meta}>
          One big notebook, one sub-notebook per subject. Pick one from the index
          and open it.
        </p>
      </section>

      <section className={styles.grid}>
        {subjects.map((subject) => {
          const card = (
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{subject.title}</h2>
                {subject.status === "soon" && (
                  <span className={styles.soonBadge}>coming soon</span>
                )}
              </div>
              {subject.date && <p className={styles.cardDate}>{subject.date}</p>}
              {subject.summary && (
                <p className={styles.cardSummary}>{subject.summary}</p>
              )}
              <span className={styles.cardLink}>
                {subject.status === "published"
                  ? "Open notebook →"
                  : "Notes in progress"}
              </span>
            </article>
          );
          return subject.status === "published" ? (
            <Link key={subject.slug} to={`/${subject.slug}`} className={styles.cardLinkWrap}>
              {card}
            </Link>
          ) : (
            <div key={subject.slug} className={`${styles.cardLinkWrap} ${styles.cardDisabled}`}>
              {card}
            </div>
          );
        })}
      </section>
    </div>
  );
}
