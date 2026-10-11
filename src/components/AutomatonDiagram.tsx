import { useId } from "react";
import type {
  AutomatonSpec,
  AutomatonStateNode,
  AutomatonTransition,
} from "../content/types";
import styles from "./AutomatonDiagram.module.css";

const NODE_RADIUS = 22;
const SELF_LOOP_HEIGHT = 46;
const REVERSE_BEND = 34;

export interface AutomatonHighlight {
  states: ReadonlySet<string>;
  transitions: ReadonlySet<number>;
}

interface AutomatonDiagramProps {
  spec: AutomatonSpec;
  highlight?: AutomatonHighlight;
  label?: string;
}

interface Point {
  x: number;
  y: number;
}

function nodeById(
  states: AutomatonStateNode[],
  id: string,
): AutomatonStateNode | undefined {
  return states.find((state) => state.id === id);
}

function unit(from: Point, to: Point): Point {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  return { x: dx / length, y: dy / length };
}

function labelOf(transition: AutomatonTransition): string {
  return transition.symbols.join(", ");
}

export function AutomatonDiagram({
  spec,
  highlight,
  label,
}: AutomatonDiagramProps) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const arrow = `arrow-${uid}`;
  const arrowActive = `arrow-active-${uid}`;

  const xs = spec.states.map((state) => state.x);
  const ys = spec.states.map((state) => state.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const padLeft = 58;
  const padRight = 46;
  const padTop = 72;
  const padBottom = 44;
  const viewBox = `${minX - padLeft} ${minY - padTop} ${
    maxX - minX + padLeft + padRight
  } ${maxY - minY + padTop + padBottom}`;

  const activeStates = highlight?.states ?? new Set<string>();
  const activeTransitions = highlight?.transitions ?? new Set<number>();

  return (
    <svg
      className={styles.svg}
      viewBox={viewBox}
      role="img"
      aria-label={label ?? spec.id}
    >
      <defs>
        <marker
          id={arrow}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="9"
          markerHeight="9"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path className={styles.arrowHead} d="M0 0 L10 5 L0 10 Z" />
        </marker>
        <marker
          id={arrowActive}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="9"
          markerHeight="9"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path className={styles.arrowHeadActive} d="M0 0 L10 5 L0 10 Z" />
        </marker>
      </defs>

      {spec.transitions.map((transition, index) => {
        const a = nodeById(spec.states, transition.from);
        const b = nodeById(spec.states, transition.to);
        if (!a || !b) return null;
        const active = activeTransitions.has(index);
        const markerEnd = `url(#${active ? arrowActive : arrow})`;
        const edgeClass = active
          ? `${styles.edge} ${styles.edgeActive}`
          : styles.edge;
        const textClass = active
          ? `${styles.edgeLabel} ${styles.edgeLabelActive}`
          : styles.edgeLabel;

        if (transition.from === transition.to) {
          const startX = a.x - 9;
          const startY = a.y - NODE_RADIUS + 2;
          const endX = a.x + 9;
          const endY = a.y - NODE_RADIUS + 2;
          const controlY = a.y - NODE_RADIUS - SELF_LOOP_HEIGHT;
          const d = `M ${startX} ${startY} C ${a.x - 44} ${controlY} ${
            a.x + 44
          } ${controlY} ${endX} ${endY}`;
          return (
            <g key={index}>
              <path className={edgeClass} d={d} markerEnd={markerEnd} />
              <text
                className={textClass}
                x={a.x}
                y={a.y - NODE_RADIUS - SELF_LOOP_HEIGHT + 8}
              >
                {labelOf(transition)}
              </text>
            </g>
          );
        }

        const reverse = spec.transitions.some(
          (other, otherIndex) =>
            otherIndex !== index &&
            other.from === transition.to &&
            other.to === transition.from,
        );
        const bend =
          transition.bend ?? (reverse ? REVERSE_BEND : 0);
        const direction = unit(a, b);
        const perpendicular = { x: -direction.y, y: direction.x };
        const control: Point = {
          x: (a.x + b.x) / 2 + perpendicular.x * bend,
          y: (a.y + b.y) / 2 + perpendicular.y * bend,
        };
        const startDir = unit(a, control);
        const endDir = unit(b, control);
        const start: Point = {
          x: a.x + startDir.x * NODE_RADIUS,
          y: a.y + startDir.y * NODE_RADIUS,
        };
        const end: Point = {
          x: b.x + endDir.x * NODE_RADIUS,
          y: b.y + endDir.y * NODE_RADIUS,
        };
        const d = `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;
        const labelPoint: Point = {
          x: 0.25 * start.x + 0.5 * control.x + 0.25 * end.x,
          y: 0.25 * start.y + 0.5 * control.y + 0.25 * end.y,
        };
        return (
          <g key={index}>
            <path className={edgeClass} d={d} markerEnd={markerEnd} />
            <text
              className={textClass}
              x={labelPoint.x}
              y={labelPoint.y - 6}
            >
              {labelOf(transition)}
            </text>
          </g>
        );
      })}

      {spec.states.map((state) => {
        const active = activeStates.has(state.id);
        const nodeClass = active
          ? `${styles.node} ${styles.nodeActive}`
          : styles.node;
        const innerClass = active
          ? `${styles.nodeInner} ${styles.nodeInnerActive}`
          : styles.nodeInner;
        const textClass = active
          ? `${styles.stateLabel} ${styles.stateLabelActive}`
          : styles.stateLabel;
        return (
          <g key={state.id}>
            <circle className={nodeClass} cx={state.x} cy={state.y} r={NODE_RADIUS} />
            {state.accepting && (
              <circle
                className={innerClass}
                cx={state.x}
                cy={state.y}
                r={NODE_RADIUS - 5}
              />
            )}
            {state.initial && (
              <path
                className={styles.initialArrow}
                d={`M ${state.x - NODE_RADIUS - 30} ${state.y} L ${
                  state.x - NODE_RADIUS - 3
                } ${state.y}`}
                markerEnd={`url(#${arrow})`}
              />
            )}
            <text className={textClass} x={state.x} y={state.y}>
              {state.label ?? state.id}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
