import { useRef } from "react";
import { Link } from "react-router-dom";
import { subjects } from "../content/subjects";
import { useGsapStagger } from "../hooks/useGsapReveal";
import { ArrowRightIcon, LayersIcon } from "../components/icons";
import styles from "./HomePage.module.css";

export function HomePage() {
  const gridRef = useRef<HTMLDivElement>(null);
  useGsapStagger(gridRef, `.${styles.card}`, "home");

  const published = subjects.filter((subject) => subject.status === "published");
  const totalClasses = subjects.reduce(
    (count, subject) => count + subject.classes.length,
    0,
  );

  return (
    <div className={styles.home}>
      <section className={`${styles.intro} ${styles.tape}`}>
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
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{subjects.length}</span>
            <span className={styles.statLabel}>notebooks</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{published.length}</span>
            <span className={styles.statLabel}>with notes</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalClasses}</span>
            <span className={styles.statLabel}>classes planned</span>
          </div>
        </div>
      </section>

      <section className={styles.grid} ref={gridRef}>
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
              <div className={styles.cardMeta}>
                <span className={styles.cardClasses}>
                  <LayersIcon className={styles.cardMetaIcon} />
                  {subject.status === "published"
                    ? `${subject.classes.length} classes`
                    : "notes in progress"}
                </span>
                {subject.status === "published" && (
                  <span className={styles.cardLink}>
                    Open notebook
                    <ArrowRightIcon className={styles.cardArrow} />
                  </span>
                )}
              </div>
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
