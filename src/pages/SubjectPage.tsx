import { useState } from "react";
import { useParams } from "react-router-dom";
import { getSubject } from "../content/subjects";
import { BlockRenderer } from "../components/BlockRenderer";
import { NotFoundPage } from "./NotFoundPage";
import styles from "./SubjectPage.module.css";

export function SubjectPage() {
  const { slug } = useParams();
  const subject = slug ? getSubject(slug) : undefined;
  const [activeClass, setActiveClass] = useState(0);

  if (!subject) {
    return <NotFoundPage />;
  }

  const currentClass = subject.classes[activeClass];

  return (
    <article className={styles.subject}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          {subject.date && <span className={styles.date}>{subject.date}</span>}
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

          <section className={styles.sheet}>
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
        <section className={styles.sheet}>
          <div className={styles.empty}>
            <h2 className={styles.classTitle}>Notes in progress</h2>
            <p>This notebook is being written. Check back soon!</p>
          </div>
        </section>
      )}
    </article>
  );
}
