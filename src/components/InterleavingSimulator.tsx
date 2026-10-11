import { useMemo, useState } from "react";
import type { InterleavingSpec } from "../content/types";
import {
  initialInterleavingState,
  isInterleavingFinished,
  isProcessFinished,
  stepProcess,
} from "../content/interleaving";
import { useText, useUI } from "../hooks/useSettings";
import { RotateIcon, ShuffleIcon, StepIcon } from "./icons";
import styles from "./InterleavingSimulator.module.css";

interface InterleavingSimulatorProps {
  spec: InterleavingSpec;
}

export function InterleavingSimulator({ spec }: InterleavingSimulatorProps) {
  const t = useText();
  const ui = useUI();
  const [state, setState] = useState(() => initialInterleavingState(spec));

  const sharedVariables = useMemo(
    () => spec.variables.filter((variable) => variable.scope !== "local"),
    [spec.variables],
  );

  const finished = isInterleavingFinished(spec, state);
  const mismatches = spec.expected
    ? Object.entries(spec.expected).filter(
        ([name, value]) => state.values[name] !== value,
      )
    : [];

  const run = (processIndex: number) =>
    setState((current) => stepProcess(spec, current, processIndex));

  const runRandom = () =>
    setState((current) => {
      const available = spec.processes
        .map((_, index) => index)
        .filter((index) => !isProcessFinished(spec, current, index));
      if (available.length === 0) return current;
      const pick = available[Math.floor(Math.random() * available.length)];
      return stepProcess(spec, current, pick);
    });

  const reset = () => setState(initialInterleavingState(spec));

  return (
    <figure className={styles.simulator}>
      {spec.caption && <p className={styles.caption}>{t(spec.caption)}</p>}

      <div className={styles.shared}>
        <span className={styles.panelTitle}>{ui.sharedState}</span>
        <div className={styles.vars}>
          {sharedVariables.map((variable) => (
            <span className={styles.var} key={variable.name}>
              <span className={styles.varName}>{variable.name}</span>
              <span className={styles.varValue}>
                {state.values[variable.name]}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className={styles.processes}>
        {spec.processes.map((process, processIndex) => {
          const done = isProcessFinished(spec, state, processIndex);
          return (
            <div className={styles.processCard} key={process.id}>
              <span className={styles.processTitle}>{t(process.label)}</span>
              <ol className={styles.steps}>
                {process.steps.map((step, stepIndex) => {
                  const status =
                    stepIndex < state.cursors[processIndex]
                      ? "done"
                      : stepIndex === state.cursors[processIndex]
                        ? "current"
                        : "todo";
                  return (
                    <li key={stepIndex} className={styles[status]}>
                      {t(step.label)}
                    </li>
                  );
                })}
              </ol>
              <button
                type="button"
                className={styles.stepBtn}
                disabled={done}
                onClick={() => run(processIndex)}
              >
                <StepIcon />
                {ui.nextStep}
              </button>
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.controlBtn}
          disabled={finished}
          onClick={runRandom}
        >
          <ShuffleIcon />
          {ui.randomStep}
        </button>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={reset}
        >
          <RotateIcon />
          {ui.resetSim}
        </button>
      </div>

      {state.log.length > 0 && (
        <div className={styles.timeline}>
          <span className={styles.timelineLabel}>{ui.timeline}</span>
          <div className={styles.timelineChips}>
            {state.log.map((entry, index) => (
              <span className={styles.chip} key={index}>
                {spec.processes[entry.processIndex].id}
                {entry.stepIndex + 1}
              </span>
            ))}
          </div>
        </div>
      )}

      {finished && (
        <div
          className={
            mismatches.length > 0
              ? `${styles.verdict} ${styles.verdictRace}`
              : `${styles.verdict} ${styles.verdictSafe}`
          }
          role="status"
          aria-live="polite"
        >
          <span className={styles.verdictTitle}>
            {mismatches.length > 0 ? ui.resultRace : ui.resultSafe}
          </span>
          {spec.expected && (
            <span className={styles.verdictDetail}>
              {ui.resultExpected}:{" "}
              {Object.entries(spec.expected)
                .map(([name, value]) => `${name} = ${value}`)
                .join(", ")}{" "}
              · {ui.resultActual}:{" "}
              {Object.entries(spec.expected)
                .map(([name]) => `${name} = ${state.values[name]}`)
                .join(", ")}
            </span>
          )}
        </div>
      )}
    </figure>
  );
}
