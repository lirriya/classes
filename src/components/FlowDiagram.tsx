import { useId } from "react";
import type { DiagramNode, DiagramSpec } from "../content/types";
import { useText } from "../hooks/useSettings";
import styles from "./FlowDiagram.module.css";

const CIRCLE_RADIUS = 24;
const BOX_HEIGHT = 46;
const BOX_PADDING = 16;
const REVERSE_BEND = 30;

interface Point {
  x: number;
  y: number;
}

interface FlowDiagramProps {
  spec: DiagramSpec;
  label?: string;
}

function boxWidth(label: string): number {
  return Math.max(78, label.length * 8.5 + BOX_PADDING * 2);
}

function halfExtents(node: DiagramNode, label: string): Point {
  if (node.shape === "box") {
    return { x: boxWidth(label) / 2, y: BOX_HEIGHT / 2 };
  }
  return { x: CIRCLE_RADIUS, y: CIRCLE_RADIUS };
}

function direction(from: Point, to: Point): Point {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  return { x: dx / length, y: dy / length };
}

function boundaryPoint(
  center: Point,
  node: DiagramNode,
  dir: Point,
  label: string,
): Point {
  const extents = halfExtents(node, label);
  const sx = dir.x !== 0 ? extents.x / Math.abs(dir.x) : Number.POSITIVE_INFINITY;
  const sy = dir.y !== 0 ? extents.y / Math.abs(dir.y) : Number.POSITIVE_INFINITY;
  const scale = Math.min(sx, sy);
  return { x: center.x + dir.x * scale, y: center.y + dir.y * scale };
}

function nodeToneClass(node: DiagramNode): string {
  if (node.tone === "primary") return `${styles.node} ${styles.nodePrimary}`;
  if (node.tone === "soft") return `${styles.node} ${styles.nodeSoft}`;
  return styles.node;
}

export function FlowDiagram({ spec, label }: FlowDiagramProps) {
  const t = useText();
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const arrow = `flow-arrow-${uid}`;
  const labelOf = (node: DiagramNode) => t(node.label);

  const xs = spec.nodes.map((node) => node.x);
  const ys = spec.nodes.map((node) => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const padX = 70;
  const padTop = 60;
  const padBottom = 50;
  const viewBox = `${minX - padX} ${minY - padTop} ${
    maxX - minX + padX * 2
  } ${maxY - minY + padTop + padBottom}`;

  const byId = (id: string) => spec.nodes.find((node) => node.id === id);

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
      </defs>

      {spec.edges.map((edge, index) => {
        const a = byId(edge.from);
        const b = byId(edge.to);
        if (!a || !b) return null;
        const edgeClass = edge.dashed
          ? `${styles.edge} ${styles.edgeDashed}`
          : styles.edge;
        const aLabel = labelOf(a);
        const bLabel = labelOf(b);

        if (edge.from === edge.to) {
          const startX = a.x - 10;
          const startY = a.y - CIRCLE_RADIUS + 2;
          const endX = a.x + 10;
          const endY = a.y - CIRCLE_RADIUS + 2;
          const controlY = a.y - CIRCLE_RADIUS - 46;
          const d = `M ${startX} ${startY} C ${a.x - 46} ${controlY} ${
            a.x + 46
          } ${controlY} ${endX} ${endY}`;
          return (
            <g key={index}>
              <path className={edgeClass} d={d} markerEnd={`url(#${arrow})`} />
              {edge.label && (
                <text
                  className={styles.edgeLabel}
                  x={a.x}
                  y={a.y - CIRCLE_RADIUS - 40}
                >
                  {t(edge.label)}
                </text>
              )}
            </g>
          );
        }

        const reverse = spec.edges.some(
          (other, otherIndex) =>
            otherIndex !== index &&
            other.from === edge.to &&
            other.to === edge.from,
        );
        const bend = edge.bend ?? (reverse ? REVERSE_BEND : 0);
        const chord = direction(a, b);
        const perpendicular = { x: -chord.y, y: chord.x };
        const control: Point = {
          x: (a.x + b.x) / 2 + perpendicular.x * bend,
          y: (a.y + b.y) / 2 + perpendicular.y * bend,
        };
        const start = boundaryPoint(a, a, direction(a, control), aLabel);
        const end = boundaryPoint(b, b, direction(b, control), bLabel);
        const d = `M ${start.x} ${start.y} Q ${control.x} ${control.y} ${end.x} ${end.y}`;
        const labelPoint: Point = {
          x: 0.25 * start.x + 0.5 * control.x + 0.25 * end.x,
          y: 0.25 * start.y + 0.5 * control.y + 0.25 * end.y,
        };
        return (
          <g key={index}>
            <path className={edgeClass} d={d} markerEnd={`url(#${arrow})`} />
            {edge.label && (
              <text
                className={styles.edgeLabel}
                x={labelPoint.x}
                y={labelPoint.y - 6}
              >
                {t(edge.label)}
              </text>
            )}
          </g>
        );
      })}

      {spec.nodes.map((node) => {
        const toneClass = nodeToneClass(node);
        const nodeLabel = labelOf(node);
        const labelClass =
          node.tone === "primary"
            ? `${styles.nodeLabel} ${styles.nodeLabelOnPrimary}`
            : styles.nodeLabel;
        if (node.shape === "box") {
          const width = boxWidth(nodeLabel);
          return (
            <g key={node.id}>
              <rect
                className={toneClass}
                x={node.x - width / 2}
                y={node.y - BOX_HEIGHT / 2}
                width={width}
                height={BOX_HEIGHT}
                rx={12}
              />
              <text className={labelClass} x={node.x} y={node.y}>
                {nodeLabel}
              </text>
            </g>
          );
        }
        return (
          <g key={node.id}>
            <circle className={toneClass} cx={node.x} cy={node.y} r={CIRCLE_RADIUS} />
            <text className={labelClass} x={node.x} y={node.y}>
              {nodeLabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
