import type { Exercise, Localized } from "../content/types";
import { useText, useUI } from "../hooks/useSettings";
import { ExerciseQuestion } from "./ExerciseRenderer";
import { CheckIcon } from "./icons";
import styles from "./CheckpointRenderer.module.css";

interface CheckpointRendererProps {
  id: string;
  concept: Localized;
  exercise: Exercise;
}

export function CheckpointRenderer({
  id,
  concept,
  exercise,
}: CheckpointRendererProps) {
  const t = useText();
  const ui = useUI();
  return (
    <aside className={styles.checkpoint}>
      <p className={styles.label}>
        <CheckIcon className={styles.labelIcon} />
        <span>{ui.conceptCheck}</span>
        <span className={styles.concept}>{t(concept)}</span>
      </p>
      <ExerciseQuestion id={id} label="?" exercise={exercise} />
    </aside>
  );
}
