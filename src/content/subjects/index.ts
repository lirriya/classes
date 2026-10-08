import type { Subject } from "../types";
import { memoryManagement } from "./memory-management";
import { webDev } from "./web-dev";
import { database } from "./database";
import { algorithms } from "./algorithms";
import { langagesFormels } from "./langages-formels";

export const subjects: Subject[] = [
  memoryManagement,
  webDev,
  database,
  algorithms,
  langagesFormels,
];

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((subject) => subject.slug === slug);
}
