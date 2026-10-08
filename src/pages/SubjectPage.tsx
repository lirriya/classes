import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubject } from "../content/subjects";
import { BlockRenderer } from "../components/BlockRenderer";
import { NotFoundPage } from "./NotFoundPage";
import { useGsapReveal } from "../hooks/useGsapReveal";
import {
  ExerciseProgressContext,
  useExerciseProgress,
} from "../hooks/useExerciseProgress";
import { gradeableIds, gradeableIdsForClass } from "../content/exerciseStats";
import { uiStrings } from "../content/uiStrings";
import {
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  LayersIcon,
  RotateIcon,
} from "../components/icons";
import styles from "./SubjectPage.module.css";

export function SubjectPage() {
  const { slug } = useParams();
  const subject = slug ? getSubject(slug) : undefined;
  const [tab, setTab] = useState({ slug: slug ?? "", index: 0 });

  if (tab.slug !== (slug ?? "")) {
    setTab({ slug: slug ?? "", index: 0 });
  }

  const activeClass = tab.index;
  const progress = useExerciseProgress(slug ?? "");
  const totalIds = useMemo(
    () => (subject ? gradeableIds(subject) : []),
    [subject],
  );
  const sectionRef = useRef<HTMLElement>(null);
  useGsapReveal(sectionRef, `${slug}-${activeClass}`);

  if (!subject) {
    return <NotFoundPage />;
  }

  const currentClass = subject.classes[activeClass];
  const classIds = currentClass
    ? gradeableIdsForClass(currentClass.blocks, activeClass)
    : [];
  const classSolved = classIds.filter((id) => progress.solved[id]).length;
  const totalSolved = totalIds.filter((id) => progress.solved[id]).length;

  const selectTab = (index: number) => {
    setTab({ slug: slug ?? "", index });
  };

  const scrollToPart = (partId: string) => {
    document
      .getElementById(`part-${partId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleReset = () => {
    if (window.confirm(uiStrings.resetConfirm)) {
      progress.reset();
    }
  };

  const classLabel = (index: number) =>
    subject.classes[index].label ?? `Class ${index + 1}`;

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
            {totalIds.length > 0 && (
              <span className={`${styles.chip} ${styles.chipProgress}`}>
                <CheckIcon className={styles.chipIcon} />
                {uiStrings.progressOf(totalSolved, totalIds.length)}
              </span>
            )}
          </div>
          <h1 className={styles.title}>{subject.title}</h1>
          {subject.summary && <p className={styles.summary}>{subject.summary}</p>}
          {totalIds.length > 0 && (
            <button
              type="button"
              className={styles.resetBtn}
              disabled={totalSolved === 0}
              onClick={handleReset}
            >
              <RotateIcon className={styles.chipIcon} />
              {uiStrings.resetProgress}
            </button>
          )}
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
                onClick={() => selectTab(index)}
              >
                {classLabel(index)}
              </button>
            ))}
          </nav>

          {classIds.length > 0 && (
            <div className={styles.tabMeta}>
              <span className={styles.meter} aria-hidden="true">
                {classIds.map((id, index) => (
                  <span
                    key={id}
                    className={
                      index < classSolved ? styles.tickDone : styles.tick
                    }
                  />
                ))}
              </span>
              <span className={styles.meterLabel}>
                {uiStrings.progressOf(classSolved, classIds.length)}
              </span>
            </div>
          )}

          {currentClass.parts && currentClass.parts.length > 0 && (
            <nav className={styles.parts}>
              {currentClass.parts.map((part) => (
                <button
                  key={part.id}
                  type="button"
                  className={styles.partPill}
                  onClick={() => scrollToPart(part.id)}
                >
                  {part.label}
                </button>
              ))}
            </nav>
          )}

          <ExerciseProgressContext.Provider value={progress}>
            <section className={styles.sheet} ref={sectionRef}>
              {currentClass.blocks.length > 0 ? (
                <>
                  <h2 className={styles.classTitle}>
                    {classLabel(activeClass)}: {currentClass.title}
                  </h2>
                  <BlockRenderer
                    blocks={currentClass.blocks}
                    idPrefix={`${activeClass}:`}
                  />
                </>
              ) : (
                <div className={styles.empty}>
                  <h2 className={styles.classTitle}>
                    {classLabel(activeClass)}: {currentClass.title}
                  </h2>
                  <p>Notes for this class aren't written yet.</p>
                </div>
              )}
            </section>
          </ExerciseProgressContext.Provider>
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
