import { useState } from "react";
import type { TraceSpec } from "../content/types";
import { useText, useUI } from "../hooks/useSettings";
import { RotateIcon, StepIcon } from "./icons";
import styles from "./TraceSimulator.module.css";

interface TraceSimulatorProps {
  spec: TraceSpec;
}

export function TraceSimulator({ spec }: TraceSimulatorProps) {
  const t = useText();
  const ui = useUI();
  const [step, setStep] = useState(0);
  const done = step >= spec.events.length;

  return (
    <figure className={styles.simulator}>
      {spec.caption && <p className={styles.caption}>{t(spec.caption)}</p>}

      <ol className={styles.events}>
        {spec.events.map((event, index) => {
          const status =
            index < step ? "done" : index === step ? "current" : "todo";
          return (
            <li key={index} className={styles[status]}>
              <span className={styles.marker}>{index + 1}</span>
              <span className={styles.eventBody}>
                <span className={styles.eventLabel}>{t(event.label)}</span>
                {event.detail && (
                  <span className={styles.detail}>{t(event.detail)}</span>
                )}
              </span>
            </li>
          );
        })}
      </ol>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.nextBtn}
          disabled={done}
          onClick={() => setStep((value) => Math.min(value + 1, spec.events.length))}
        >
          <StepIcon />
          {ui.nextStep}
        </button>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => setStep(0)}
        >
          <RotateIcon />
          {ui.resetSim}
        </button>
      </div>
    </figure>
  );
}
