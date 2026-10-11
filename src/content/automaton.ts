import type { AutomatonSpec, AutomatonTransition } from "./types";

const EPSILON_MARKERS = new Set(["ε", "eps", "epsilon"]);

export interface SimulationStep {
  active: Set<string>;
  transitions: number[];
}

export interface SimulationRun {
  steps: SimulationStep[];
  accepted: boolean;
}

function isEpsilon(symbol: string): boolean {
  return EPSILON_MARKERS.has(symbol.toLowerCase());
}

function matches(transition: AutomatonTransition, symbol: string): boolean {
  return transition.symbols.some((candidate) => candidate === symbol);
}

function epsilonClosure(
  spec: AutomatonSpec,
  initial: Set<string>,
): Set<string> {
  const closure = new Set(initial);
  const stack = [...initial];
  while (stack.length > 0) {
    const state = stack.pop();
    if (state === undefined) continue;
    spec.transitions.forEach((transition) => {
      if (transition.from !== state) return;
      if (!transition.symbols.some(isEpsilon)) return;
      if (!closure.has(transition.to)) {
        closure.add(transition.to);
        stack.push(transition.to);
      }
    });
  }
  return closure;
}

export function initialStates(spec: AutomatonSpec): Set<string> {
  const starts = spec.states
    .filter((state) => state.initial)
    .map((state) => state.id);
  return epsilonClosure(spec, new Set(starts));
}

export function advance(
  spec: AutomatonSpec,
  active: Set<string>,
  symbol: string,
): SimulationStep {
  const next = new Set<string>();
  const transitions: number[] = [];
  spec.transitions.forEach((transition, index) => {
    if (!active.has(transition.from)) return;
    if (!matches(transition, symbol)) return;
    transitions.push(index);
    next.add(transition.to);
  });
  return { active: epsilonClosure(spec, next), transitions };
}

export function runAutomaton(spec: AutomatonSpec, word: string): SimulationRun {
  let active = initialStates(spec);
  const steps: SimulationStep[] = [{ active, transitions: [] }];
  for (const symbol of word) {
    const current = advance(spec, active, symbol);
    active = current.active;
    steps.push(current);
  }
  const accepting = new Set(
    spec.states
      .filter((state) => state.accepting)
      .map((state) => state.id),
  );
  const accepted = [...active].some((id) => accepting.has(id));
  return { steps, accepted };
}

export function transitionSymbols(spec: AutomatonSpec): Set<string> {
  const symbols = new Set<string>();
  spec.transitions.forEach((transition) => {
    transition.symbols.forEach((symbol) => {
      if (!isEpsilon(symbol)) symbols.add(symbol);
    });
  });
  return symbols;
}
