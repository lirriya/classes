import { useRef } from "react";
import { Link } from "react-router-dom";
import { subjects } from "../content/subjects";
import { useGsapStagger } from "../hooks/useGsapReveal";
import { useText, useUI } from "../hooks/useSettings";
import { ArrowRightIcon, LayersIcon } from "../components/icons";
import styles from "./HomePage.module.css";

export function HomePage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const ui = useUI();
  const t = useText();
  useGsapStagger(gridRef, `.${styles.card}`, "home");

  const published = subjects.filter((subject) => subject.status === "published");
  const totalClasses = subjects.reduce(
    (count, subject) => count + subject.classes.length,
    0,
  );

  return (
    <div className={styles.home}>
      <section className={`${styles.intro} ${styles.tape}`}>
        <span className={styles.kicker}>{ui.homeKicker}</span>
        <h1 className={styles.title}>Alina's notes</h1>
        <p className={styles.lead}>{ui.homeLead}</p>
        <p className={styles.meta}>{ui.homeMeta}</p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>{subjects.length}</span>
            <span className={styles.statLabel}>{ui.statNotebooks}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{published.length}</span>
            <span className={styles.statLabel}>{ui.statWithNotes}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>{totalClasses}</span>
            <span className={styles.statLabel}>{ui.statClasses}</span>
          </div>
        </div>
      </section>

      <section className={styles.grid} ref={gridRef}>
        {subjects.map((subject) => {
          const card = (
            <article className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>{t(subject.title)}</h2>
                {subject.status === "soon" && (
                  <span className={styles.soonBadge}>{ui.comingSoonBadge}</span>
                )}
              </div>
              {subject.date && <p className={styles.cardDate}>{t(subject.date)}</p>}
              {subject.summary && (
                <p className={styles.cardSummary}>{t(subject.summary)}</p>
              )}
              <div className={styles.cardMeta}>
                <span className={styles.cardClasses}>
                  <LayersIcon className={styles.cardMetaIcon} />
                  {subject.status === "published"
                    ? ui.classesCount(subject.classes.length)
                    : ui.notesInProgress}
                </span>
                {subject.status === "published" && (
                  <span className={styles.cardLink}>
                    {ui.openNotebook}
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
