import type { Block } from "../content/types";
import { InlineText } from "./InlineText";
import styles from "./BlockRenderer.module.css";

interface BlockRendererProps {
  blocks: Block[];
}

export function BlockRenderer({ blocks }: BlockRendererProps) {
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
                  : styles.heading;
            if (block.level === 3) {
              return (
                <h3 key={index} className={className}>
                  <InlineText text={block.text} />
                </h3>
              );
            }
            return (
              <h4 key={index} className={className}>
                <InlineText text={block.text} />
              </h4>
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
        }
      })}
    </div>
  );
}
