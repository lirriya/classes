import type { InterleavingSpec } from "./types";

export interface InterleavingSnapshot {
  values: Record<string, number>;
  locals: Record<string, number>;
  cursors: number[];
}

export interface InterleavingState extends InterleavingSnapshot {
  log: { processIndex: number; stepIndex: number }[];
}

function isLocal(spec: InterleavingSpec, name: string): boolean {
  const variable = spec.variables.find((entry) => entry.name === name);
  return variable !== undefined && variable.scope === "local";
}

function readVariable(
  spec: InterleavingSpec,
  state: InterleavingSnapshot,
  processId: string,
  name: string,
): number {
  if (isLocal(spec, name)) {
    return state.locals[`${processId}:${name}`] ?? 0;
  }
  return state.values[name] ?? 0;
}

function evaluate(
  source: string,
  read: (name: string) => number,
): number {
  const expression = source.replace(/\s+/g, "");
  const add = /^([A-Za-z_]\w*)([+-])(\d+)$/.exec(expression);
  if (add) {
    const base = read(add[1]);
    const amount = Number(add[3]);
    return add[2] === "+" ? base + amount : base - amount;
  }
  const literal = /^-?\d+$/.exec(expression);
  if (literal) return Number(expression);
  const variable = /^([A-Za-z_]\w*)$/.exec(expression);
  if (variable) return read(variable[1]);
  return 0;
}

export function initialInterleavingState(
  spec: InterleavingSpec,
): InterleavingState {
  const values: Record<string, number> = {};
  const locals: Record<string, number> = {};
  for (const variable of spec.variables) {
    if (variable.scope === "local") {
      for (const process of spec.processes) {
        locals[`${process.id}:${variable.name}`] = variable.init;
      }
    } else {
      values[variable.name] = variable.init;
    }
  }
  return {
    values,
    locals,
    cursors: spec.processes.map(() => 0),
    log: [],
  };
}

export function isProcessFinished(
  spec: InterleavingSpec,
  state: InterleavingState,
  processIndex: number,
): boolean {
  return state.cursors[processIndex] >= spec.processes[processIndex].steps.length;
}

export function isInterleavingFinished(
  spec: InterleavingSpec,
  state: InterleavingState,
): boolean {
  return spec.processes.every((_, index) =>
    isProcessFinished(spec, state, index),
  );
}

export function stepProcess(
  spec: InterleavingSpec,
  state: InterleavingState,
  processIndex: number,
): InterleavingState {
  if (isProcessFinished(spec, state, processIndex)) return state;
  const process = spec.processes[processIndex];
  const stepIndex = state.cursors[processIndex];
  const step = process.steps[stepIndex];
  const value = evaluate(step.source, (name) =>
    readVariable(spec, state, process.id, name),
  );
  const values = { ...state.values };
  const locals = { ...state.locals };
  if (isLocal(spec, step.target)) {
    locals[`${process.id}:${step.target}`] = value;
  } else {
    values[step.target] = value;
  }
  return {
    values,
    locals,
    cursors: state.cursors.map((cursor, index) =>
      index === processIndex ? cursor + 1 : cursor,
    ),
    log: [...state.log, { processIndex, stepIndex }],
  };
}

export function localValue(
  state: InterleavingState,
  processId: string,
  name: string,
): number {
  return state.locals[`${processId}:${name}`] ?? 0;
}
