import type { Block } from "../content/types";
import { InlineText } from "./InlineText";
import { ExerciseRenderer } from "./ExerciseRenderer";
import styles from "./BlockRenderer.module.css";

interface BlockRendererProps {
  blocks: Block[];
  idPrefix?: string;
}

export function BlockRenderer({ blocks, idPrefix = "" }: BlockRendererProps) {
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
              <pre key={index} className={styles.code}>
                <code>{block.text}</code>
              </pre>
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
        }
      })}
    </div>
  );
}
