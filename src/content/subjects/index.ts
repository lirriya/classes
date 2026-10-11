import type { Subject } from "../types";
import { memoryManagement } from "./memory-management";
import { webDev } from "./web-dev";
import { database } from "./database";
import { algorithms } from "./algorithms";
import { langagesFormels } from "./langages-formels";
import { systeme2 } from "./systeme-2";
import { conceptionBd } from "./conception-bd";

export const subjects: Subject[] = [
  memoryManagement,
  webDev,
  database,
  algorithms,
  langagesFormels,
  systeme2,
  conceptionBd,
];

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((subject) => subject.slug === slug);
}
