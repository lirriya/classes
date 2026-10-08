import { Fragment, useState, type ReactNode } from "react";
import type {
  Exercise,
  ExerciseGroup,
  FillBlankExercise,
  InlineText,
  McqExercise,
  OpenExercise,
  TrueFalseExercise,
} from "../content/types";
import { uiStrings } from "../content/uiStrings";
import { useExerciseProgressContext } from "../hooks/useExerciseProgress";
import { InlineText as InlineTextNode } from "./InlineText";
import { CheckIcon, CrossIcon, EyeIcon, RotateIcon } from "./icons";
import styles from "./ExerciseRenderer.module.css";

interface ExerciseRendererProps {
  groups: ExerciseGroup[];
  idPrefix: string;
}

export function ExerciseRenderer({ groups, idPrefix }: ExerciseRendererProps) {
  const progress = useExerciseProgressContext();

  return (
    <div className={styles.groups}>
      {groups.map((group, groupIndex) => (
        <section className={styles.group} key={groupIndex}>
          <h4 className={styles.groupTitle}>{group.title}</h4>
          <div className={styles.questions}>
            {group.exercises.map((exercise, exerciseIndex) => {
              const id = `${idPrefix}:${groupIndex}:${exerciseIndex}`;
              return (
                <QuestionItem
                  key={
                    progress.isSolved(id) ? `${id}-solved` : `${id}-fresh`
                  }
                  id={id}
                  label={`${String.fromCharCode(65 + groupIndex)}${exerciseIndex + 1}`}
                  exercise={exercise}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}

interface QuestionItemProps {
  id: string;
  label: string;
  exercise: Exercise;
}

function QuestionItem({ id, label, exercise }: QuestionItemProps) {
  switch (exercise.kind) {
    case "trueFalse":
      return (
        <TrueFalseQuestion id={id} label={label} exercise={exercise} />
      );
    case "mcq":
      return <McqQuestion id={id} label={label} exercise={exercise} />;
    case "fillBlank":
      return <FillBlankQuestion id={id} label={label} exercise={exercise} />;
    case "open":
      return <OpenQuestion label={label} exercise={exercise} />;
  }
}

type QuestionState = "idle" | "wrong" | "solved";

interface QuestionShellProps {
  label: string;
  promptContent: ReactNode;
  state: QuestionState;
  children: ReactNode;
}

function QuestionShell({
  label,
  promptContent,
  state,
  children,
}: QuestionShellProps) {
  const stateClass =
    state === "solved"
      ? `${styles.question} ${styles.questionSolved}`
      : state === "wrong"
          ? `${styles.question} ${styles.questionWrong}`
          : styles.question;
  return (
    <article className={stateClass}>
      <p className={styles.prompt}>
        <span className={styles.badge}>{label}</span>
        {promptContent}
      </p>
      {children}
    </article>
  );
}

interface WrongNoteProps {
  message: InlineText;
  onRetry: () => void;
}

function WrongNote({ message, onRetry }: WrongNoteProps) {
  return (
    <div className={`${styles.feedback} ${styles.feedbackWrong}`}>
      <p className={styles.feedbackText}>
        <CrossIcon className={styles.feedbackIcon} />
        <span>
          <InlineTextNode text={message} />
        </span>
      </p>
      <button type="button" className={styles.retryBtn} onClick={onRetry}>
        <RotateIcon />
        {uiStrings.tryAgain}
      </button>
    </div>
  );
}

function SuccessNote({ text }: { text: InlineText }) {
  return (
    <div className={`${styles.feedback} ${styles.feedbackSuccess}`}>
      <p className={styles.feedbackText}>
        <CheckIcon className={styles.feedbackIcon} />
        <span>
          <strong>{uiStrings.goodJob}</strong>{" "}
          <InlineTextNode text={text} />
        </span>
      </p>
    </div>
  );
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\s${}\\]/g, "")
    .replace(/\.$/, "");
}

interface QuestionProps<E> {
  id: string;
  label: string;
  exercise: E;
}

function TrueFalseQuestion({
  id,
  label,
  exercise,
}: QuestionProps<TrueFalseExercise>) {
  const progress = useExerciseProgressContext();
  const solved = progress.isSolved(id);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [choice, setChoice] = useState<boolean | null>(null);

  const pick = (value: boolean) => {
    if (solved || feedback !== null) return;
    setChoice(value);
    if (value === exercise.answer) {
      progress.solve(id);
    } else {
      setFeedback(exercise.mistake ?? uiStrings.notCorrect);
    }
  };

  const state: QuestionState = solved
    ? "solved"
    : feedback !== null
      ? "wrong"
      : "idle";

  return (
    <QuestionShell label={label} promptContent={<InlineTextNode text={exercise.prompt} />} state={state}>
      <div className={styles.choices}>
        {[true, false].map((value) => {
          let className = styles.choice;
          if (solved) {
            className =
              value === exercise.answer
                ? `${styles.choice} ${styles.choiceCorrect}`
                : `${styles.choice} ${styles.choiceMuted}`;
          } else if (feedback !== null) {
            className =
              value === choice
                ? `${styles.choice} ${styles.choiceWrong}`
                : `${styles.choice} ${styles.choiceMuted}`;
          }
          return (
            <button
              key={value ? "true" : "false"}
              type="button"
              className={className}
              disabled={solved || feedback !== null}
              onClick={() => pick(value)}
            >
              {value ? uiStrings.vrai : uiStrings.faux}
              {solved && value === exercise.answer && (
                <CheckIcon className={styles.choiceIcon} />
              )}
            </button>
          );
        })}
      </div>
      {feedback !== null && (
        <WrongNote
          message={feedback}
          onRetry={() => {
            setFeedback(null);
            setChoice(null);
          }}
        />
      )}
      {solved && <SuccessNote text={exercise.justification} />}
    </QuestionShell>
  );
}

function McqQuestion({ id, label, exercise }: QuestionProps<McqExercise>) {
  const progress = useExerciseProgressContext();
  const solved = progress.isSolved(id);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  const pick = (index: number) => {
    if (solved || feedback !== null) return;
    setSelected(index);
    if (index === exercise.answerIndex) {
      progress.solve(id);
    } else {
      setFeedback(
        exercise.options[index].feedback ?? uiStrings.notCorrect,
      );
    }
  };

  const state: QuestionState = solved
    ? "solved"
    : feedback !== null
      ? "wrong"
      : "idle";

  return (
    <QuestionShell label={label} promptContent={<InlineTextNode text={exercise.prompt} />} state={state}>
      <div className={styles.choices}>
        {exercise.options.map((option, index) => {
          let className = styles.choice;
          if (solved) {
            className =
              index === exercise.answerIndex
                ? `${styles.choice} ${styles.choiceCorrect}`
                : `${styles.choice} ${styles.choiceMuted}`;
          } else if (feedback !== null) {
            className =
              index === selected
                ? `${styles.choice} ${styles.choiceWrong}`
                : `${styles.choice} ${styles.choiceMuted}`;
          }
          return (
            <button
              key={index}
              type="button"
              className={className}
              disabled={solved || feedback !== null}
              onClick={() => pick(index)}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}.
              </span>
              <InlineTextNode text={option.text} />
              {solved && index === exercise.answerIndex && (
                <CheckIcon className={styles.choiceIcon} />
              )}
            </button>
          );
        })}
      </div>
      {feedback !== null && (
        <WrongNote
          message={feedback}
          onRetry={() => {
            setFeedback(null);
            setSelected(null);
          }}
        />
      )}
      {solved && <SuccessNote text={exercise.solution} />}
    </QuestionShell>
  );
}

function FillBlankQuestion({
  id,
  label,
  exercise,
}: QuestionProps<FillBlankExercise>) {
  const progress = useExerciseProgressContext();
  const solved = progress.isSolved(id);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [values, setValues] = useState<string[]>([]);

  const segments = exercise.prompt.split(/_{4,}/);

  const submit = () => {
    if (solved || feedback !== null) return;
    const guesses = exercise.blanks.map((_, index) =>
      normalize(values[index] ?? ""),
    );
    if (guesses.some((guess) => guess === "")) {
      setFeedback(uiStrings.notCorrect);
      return;
    }
    const wrongIndex = exercise.blanks.findIndex((blank, index) =>
      blank.accepted.every(
        (accepted) => normalize(accepted) !== guesses[index],
      ),
    );
    if (wrongIndex === -1) {
      progress.solve(id);
      return;
    }
    const mistake = exercise.blanks[wrongIndex].mistakes.find((entry) =>
      entry.match.some((match) => normalize(match) === guesses[wrongIndex]),
    );
    setFeedback(mistake?.feedback ?? uiStrings.notCorrect);
  };

  const state: QuestionState = solved
    ? "solved"
    : feedback !== null
      ? "wrong"
      : "idle";

  return (
    <QuestionShell
      label={label}
      state={state}
      promptContent={
        <>
          {segments.map((segment, index) => (
            <Fragment key={index}>
              <InlineTextNode text={segment} />
              {index < exercise.blanks.length && (
                <input
                  type="text"
                  className={styles.blankInput}
                  aria-label={`Blank ${index + 1}`}
                  value={
                    solved
                      ? values[index] || exercise.blanks[index].accepted[0]
                      : values[index] ?? ""
                  }
                  disabled={solved || feedback !== null}
                  onChange={(event) =>
                    setValues((previous) => {
                      const next = [...previous];
                      next[index] = event.target.value;
                      return next;
                    })
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter") submit();
                  }}
                />
              )}
            </Fragment>
          ))}
        </>
      }
    >
      {!solved && (
        <button
          type="button"
          className={styles.actionBtn}
          disabled={feedback !== null}
          onClick={submit}
        >
          <CheckIcon />
          {uiStrings.check}
        </button>
      )}
      {feedback !== null && (
        <WrongNote message={feedback} onRetry={() => setFeedback(null)} />
      )}
      {solved && <SuccessNote text={exercise.solution} />}
    </QuestionShell>
  );
}

interface OpenQuestionProps {
  label: string;
  exercise: OpenExercise;
}

function OpenQuestion({ label, exercise }: OpenQuestionProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <QuestionShell label={label} promptContent={<InlineTextNode text={exercise.prompt} />} state="idle">
      {exercise.details && (
        <ul className={styles.details}>
          {exercise.details.map((detail, index) => (
            <li key={index}>
              <InlineTextNode text={detail} />
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        className={styles.revealBtn}
        disabled={revealed}
        onClick={() => setRevealed(true)}
      >
        <EyeIcon />
        {uiStrings.showSolution}
      </button>
      {revealed && (
        <div className={styles.revealCard}>
          <span className={styles.revealLabel}>{uiStrings.solution}</span>
          <p>
            <InlineTextNode text={exercise.solution} />
          </p>
          {exercise.solutionItems && (
            <ul className={styles.details}>
              {exercise.solutionItems.map((item, index) => (
                <li key={index}>
                  <InlineTextNode text={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </QuestionShell>
  );
}
