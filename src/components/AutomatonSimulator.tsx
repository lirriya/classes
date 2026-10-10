import { useEffect, useMemo, useState } from "react";
import type { AutomatonSpec } from "../content/types";
import { runAutomaton } from "../content/automaton";
import { useText, useUI } from "../hooks/useSettings";
import { AutomatonDiagram } from "./AutomatonDiagram";
import { PlayIcon, RotateIcon } from "./icons";
import styles from "./AutomatonSimulator.module.css";

interface AutomatonSimulatorProps {
  spec: AutomatonSpec;
}

export function AutomatonSimulator({ spec }: AutomatonSimulatorProps) {
  const ui = useUI();
  const t = useText();
  const examples = spec.examples ?? [];
  const [word, setWord] = useState(examples[0] ?? "");
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const run = useMemo(() => runAutomaton(spec, word), [spec, word]);
  const maxStep = word.length;
  const finished = step >= maxStep;
  const current = run.steps[Math.min(step, maxStep)];

  useEffect(() => {
    if (!playing || step >= maxStep) return;
    const timer = window.setTimeout(() => setStep((value) => value + 1), 650);
    return () => window.clearTimeout(timer);
  }, [playing, step, maxStep]);

  const start = () => {
    if (finished) setStep(0);
    setPlaying(true);
  };

  const reset = () => {
    setPlaying(false);
    setStep(0);
  };

  const changeWord = (value: string) => {
    setWord(value.replace(/\s+/g, ""));
    setPlaying(false);
    setStep(0);
  };

  const highlight = useMemo(
    () => ({ states: current.active, transitions: new Set(current.transitions) }),
    [current],
  );

  return (
    <div className={styles.simulator}>
      <div className={styles.controls}>
        <label className={styles.field}>
          <span className={styles.fieldLabel}>{ui.testWord}</span>
          <input
            className={styles.input}
            type="text"
            value={word}
            maxLength={16}
            spellCheck={false}
            autoComplete="off"
            aria-label={ui.testWord}
            onChange={(event) => changeWord(event.target.value)}
          />
        </label>
        <div className={styles.buttons}>
          <button type="button" className={styles.runBtn} onClick={start}>
            <PlayIcon />
            {ui.runSim}
          </button>
          <button type="button" className={styles.resetBtn} onClick={reset}>
            <RotateIcon />
            {ui.resetSim}
          </button>
        </div>
      </div>

      {examples.length > 0 && (
        <div className={styles.examples}>
          <span className={styles.examplesLabel}>{ui.examplesLabel}</span>
          {examples.map((example) => (
            <button
              key={example || "empty"}
              type="button"
              className={styles.chip}
              onClick={() => changeWord(example)}
            >
              {example === "" ? `ε (${ui.emptyWord})` : example}
            </button>
          ))}
        </div>
      )}

      <div className={styles.stage}>
        <AutomatonDiagram
          spec={spec}
          highlight={highlight}
          label={spec.caption ? t(spec.caption) : spec.id}
        />
      </div>

      <div className={styles.status} role="status" aria-live="polite">
        <span className={styles.trace} aria-hidden="true">
          {maxStep === 0 ? (
            <span className={styles.symbol}>{ui.emptyWord}</span>
          ) : (
            [...word].map((symbol, index) => (
              <span
                key={index}
                className={
                  index < step
                    ? `${styles.symbol} ${styles.symbolRead}`
                    : styles.symbol
                }
              >
                {symbol}
              </span>
            ))
          )}
        </span>
        <span className={styles.activeStates}>
          {ui.activeStates}:{" "}
          <strong>
            {current.active.size === 0 ? "∅" : [...current.active].join(", ")}
          </strong>
        </span>
        {finished && (
          <span
            className={run.accepted ? styles.accepted : styles.rejected}
          >
            {run.accepted ? ui.accepted : ui.rejected}
          </span>
        )}
      </div>
    </div>
  );
}
