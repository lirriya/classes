import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubject } from "../content/subjects";
import { BlockRenderer } from "../components/BlockRenderer";
import { NotFoundPage } from "./NotFoundPage";
import { useGsapReveal } from "../hooks/useGsapReveal";
import { ArrowLeftIcon, ClockIcon, LayersIcon } from "../components/icons";
import styles from "./SubjectPage.module.css";

export function SubjectPage() {
  const { slug } = useParams();
  const subject = slug ? getSubject(slug) : undefined;
  const [activeClass, setActiveClass] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, activeClass);

  if (!subject) {
    return <NotFoundPage />;
  }

  const currentClass = subject.classes[activeClass];

  return (
    <article className={styles.subject}>
      <Link to="/" className={styles.back}>
        <ArrowLeftIcon className={styles.backIcon} />
        All notebooks
      </Link>

      <header className={`${styles.header} ${styles.tape}`}>
        <div className={styles.headerText}>
          <div className={styles.chips}>
            {subject.date && (
              <span className={styles.chip}>
                <ClockIcon className={styles.chipIcon} />
                {subject.date}
              </span>
            )}
            <span className={styles.chip}>
              <LayersIcon className={styles.chipIcon} />
              {subject.classes.length} classes
            </span>
          </div>
          <h1 className={styles.title}>{subject.title}</h1>
          {subject.summary && <p className={styles.summary}>{subject.summary}</p>}
        </div>
        {subject.status === "soon" && (
          <span className={styles.soonBadge}>coming soon</span>
        )}
      </header>

      {subject.classes.length > 0 ? (
        <>
          <nav className={styles.tabs}>
            {subject.classes.map((subjectClass, index) => (
              <button
                key={subjectClass.title}
                type="button"
                title={subjectClass.title}
                className={
                  index === activeClass
                    ? `${styles.tab} ${styles.tabActive}`
                    : styles.tab
                }
                onClick={() => setActiveClass(index)}
              >
                Class {index + 1}
              </button>
            ))}
          </nav>

          <section className={styles.sheet} ref={sectionRef}>
            {currentClass.blocks.length > 0 ? (
              <>
                <h2 className={styles.classTitle}>
                  Class {activeClass + 1}: {currentClass.title}
                </h2>
                <BlockRenderer blocks={currentClass.blocks} />
              </>
            ) : (
              <div className={styles.empty}>
                <h2 className={styles.classTitle}>
                  Class {activeClass + 1}: {currentClass.title}
                </h2>
                <p>Notes for this class aren't written yet.</p>
              </div>
            )}
          </section>
        </>
      ) : (
        <section className={styles.sheet} ref={sectionRef}>
          <div className={styles.empty}>
            <h2 className={styles.classTitle}>Notes in progress</h2>
            <p>This notebook is being written. Check back soon!</p>
          </div>
        </section>
      )}
    </article>
  );
}
