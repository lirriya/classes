import type { Block } from "../content/types";
import { InlineText } from "./InlineText";
import { ExerciseRenderer } from "./ExerciseRenderer";
import { AutomatonFigure } from "./AutomatonFigure";
import { CheckpointRenderer } from "./CheckpointRenderer";
import { DiagramFigure } from "./DiagramFigure";
import { InterleavingSimulator } from "./InterleavingSimulator";
import { BufferSimulator } from "./BufferSimulator";
import { TraceSimulator } from "./TraceSimulator";
import { useText } from "../hooks/useSettings";
import styles from "./BlockRenderer.module.css";

interface BlockRendererProps {
  blocks: Block[];
  idPrefix?: string;
}

export function BlockRenderer({ blocks, idPrefix = "" }: BlockRendererProps) {
  const t = useText();
  return (
    <div className={styles.blocks}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const className =
              block.variant === "exercise"
                ? `${styles.heading} ${styles.exerciseHeading}`
                : block.variant === "sub"
                  ? `${styles.heading} ${styles.subHeading}`
                  : block.variant === "part"
                    ? `${styles.heading} ${styles.partHeading}`
                    : styles.heading;
            if (block.variant === "part") {
              return (
                <h3 key={index} id={`part-${block.id}`} className={className}>
                  <InlineText text={block.text} />
                </h3>
              );
            }
            if (block.level === 3) {
              return (
                <h3 key={index} className={className}>
                  <InlineText text={block.text} />
                </h3>
              );
            }
            if (block.level === 4) {
              return (
                <h4 key={index} className={className}>
                  <InlineText text={block.text} />
                </h4>
              );
            }
            return (
              <h5 key={index} className={className}>
                <InlineText text={block.text} />
              </h5>
            );
          }
          case "paragraph":
            return (
              <p key={index} className={styles.paragraph}>
                <InlineText text={block.text} />
              </p>
            );
          case "list": {
            const items = block.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                <InlineText text={item.text} />
                {item.children && (
                  <ul className={styles.subList}>
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <InlineText text={child} />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ));
            return block.ordered ? (
              <ol key={index} className={styles.list}>
                {items}
              </ol>
            ) : (
              <ul key={index} className={styles.list}>
                {items}
              </ul>
            );
          }
          case "code":
            return (
              <div key={index} className={styles.codeWrap}>
                <pre className={styles.code} data-lang={block.lang}>
                  <code>{block.text}</code>
                </pre>
                {block.caption && (
                  <p className={styles.codeCaption}>{t(block.caption)}</p>
                )}
              </div>
            );
          case "quote":
            return (
              <blockquote key={index} className={styles.quote}>
                <InlineText text={block.text} />
              </blockquote>
            );
          case "rule":
            return <hr key={index} className={styles.rule} />;
          case "exercises":
            return (
              <ExerciseRenderer
                key={index}
                groups={block.groups}
                idPrefix={`${idPrefix}${index}`}
              />
            );
          case "automaton":
            return (
              <AutomatonFigure
                key={index}
                automata={block.automata}
                layout={block.layout}
              />
            );
          case "checkpoint":
            return (
              <CheckpointRenderer
                key={index}
                id={`${idPrefix}checkpoint:${index}`}
                concept={block.concept}
                exercise={block.exercise}
              />
            );
          case "diagram":
            return (
              <DiagramFigure
                key={index}
                diagrams={block.diagrams}
                layout={block.layout}
              />
            );
          case "interleaving":
            return <InterleavingSimulator key={index} spec={block.spec} />;
          case "buffer":
            return <BufferSimulator key={index} spec={block.spec} />;
          case "trace":
            return <TraceSimulator key={index} spec={block.spec} />;
        }
      })}
    </div>
  );
}
