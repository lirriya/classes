import type { Block, Subject } from "./types";

export function gradeableIdsForClass(
  blocks: Block[],
  classIndex: number,
): string[] {
  const ids: string[] = [];
  blocks.forEach((block, blockIndex) => {
    if (block.type !== "exercises") return;
    block.groups.forEach((group, groupIndex) => {
      group.exercises.forEach((exercise, exerciseIndex) => {
        if (exercise.kind !== "open") {
          ids.push(`${classIndex}:${blockIndex}:${groupIndex}:${exerciseIndex}`);
        }
      });
    });
  });
  return ids;
}

export function gradeableIds(subject: Subject): string[] {
  return subject.classes.flatMap((subjectClass, classIndex) =>
    gradeableIdsForClass(subjectClass.blocks, classIndex),
  );
}
