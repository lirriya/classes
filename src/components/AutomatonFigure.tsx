import type { AutomatonSpec } from "../content/types";
import { useText } from "../hooks/useSettings";
import { AutomatonDiagram } from "./AutomatonDiagram";
import { AutomatonSimulator } from "./AutomatonSimulator";
import styles from "./AutomatonFigure.module.css";

interface AutomatonFigureProps {
  automata: AutomatonSpec[];
  layout?: "row";
}

export function AutomatonFigure({ automata, layout }: AutomatonFigureProps) {
  const t = useText();
  return (
    <div
      className={layout === "row" ? `${styles.figure} ${styles.row}` : styles.figure}
    >
      {automata.map((spec) => (
        <div className={styles.item} key={spec.id}>
          {spec.interactive ? (
            <AutomatonSimulator spec={spec} />
          ) : (
            <div className={styles.diagram}>
              <AutomatonDiagram
                spec={spec}
                label={spec.caption ? t(spec.caption) : spec.id}
              />
            </div>
          )}
          {spec.caption && (
            <p className={styles.caption}>{t(spec.caption)}</p>
          )}
        </div>
      ))}
    </div>
  );
}
