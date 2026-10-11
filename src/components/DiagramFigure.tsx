import type { DiagramSpec } from "../content/types";
import { useText } from "../hooks/useSettings";
import { FlowDiagram } from "./FlowDiagram";
import styles from "./DiagramFigure.module.css";

interface DiagramFigureProps {
  diagrams: DiagramSpec[];
  layout?: "row";
}

export function DiagramFigure({ diagrams, layout }: DiagramFigureProps) {
  const t = useText();
  return (
    <div
      className={layout === "row" ? `${styles.figure} ${styles.row}` : styles.figure}
    >
      {diagrams.map((spec) => (
        <figure className={styles.item} key={spec.id}>
          <div className={styles.canvas}>
            <FlowDiagram
              spec={spec}
              label={spec.caption ? t(spec.caption) : spec.id}
            />
          </div>
          {spec.caption && (
            <figcaption className={styles.caption}>{t(spec.caption)}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
