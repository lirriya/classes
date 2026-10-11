import { useState } from "react";
import type { BufferSpec } from "../content/types";
import { useText, useUI } from "../hooks/useSettings";
import { MinusIcon, PlusIcon, RotateIcon } from "./icons";
import styles from "./BufferSimulator.module.css";

interface BufferSimulatorProps {
  spec: BufferSpec;
}

export function BufferSimulator({ spec }: BufferSimulatorProps) {
  const t = useText();
  const ui = useUI();
  const [items, setItems] = useState<number[]>([]);
  const [nextItem, setNextItem] = useState(1);
  const [message, setMessage] = useState<"full" | "empty" | null>(null);

  const produce = () => {
    if (items.length >= spec.capacity) {
      setMessage("full");
      return;
    }
    setItems((current) => [...current, nextItem]);
    setNextItem((value) => value + 1);
    setMessage(null);
  };

  const consume = () => {
    if (items.length === 0) {
      setMessage("empty");
      return;
    }
    setItems((current) => current.slice(1));
    setMessage(null);
  };

  const reset = () => {
    setItems([]);
    setNextItem(1);
    setMessage(null);
  };

  return (
    <figure className={styles.simulator}>
      {spec.caption && <p className={styles.caption}>{t(spec.caption)}</p>}

      <div className={styles.bufferRow}>
        <span className={styles.bufferLabel}>
          {ui.bufferLabel} · {ui.bufferCapacity}: {spec.capacity}
        </span>
        <div className={styles.slots}>
          {Array.from({ length: spec.capacity }, (_, index) => (
            <span
              key={index}
              className={
                items[index] !== undefined
                  ? `${styles.slot} ${styles.slotFilled}`
                  : styles.slot
              }
            >
              {items[index] ?? ""}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.produceBtn} onClick={produce}>
          <PlusIcon />
          {spec.produceLabel ? t(spec.produceLabel) : ui.produce}
        </button>
        <button type="button" className={styles.consumeBtn} onClick={consume}>
          <MinusIcon />
          {spec.consumeLabel ? t(spec.consumeLabel) : ui.consume}
        </button>
        <button type="button" className={styles.resetBtn} onClick={reset}>
          <RotateIcon />
          {ui.resetSim}
        </button>
      </div>

      {message && (
        <p
          className={
            message === "full"
              ? `${styles.message} ${styles.messageFull}`
              : `${styles.message} ${styles.messageEmpty}`
          }
          role="status"
          aria-live="polite"
        >
          {message === "full" ? ui.bufferFull : ui.bufferEmpty}
        </p>
      )}
    </figure>
  );
}
