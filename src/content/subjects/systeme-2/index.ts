import type { Subject } from "../../types";
import { chapterOne } from "./chapter1";
import { chapterTwo } from "./chapter2";
import { chapterThree } from "./chapter3";
import { chapterFour } from "./chapter4";
import { chapterFive } from "./chapter5";
import { chapterSix } from "./chapter6";
import { examBlancs } from "./exam";
import { prepCC1 } from "./prep";

export const systeme2: Subject = {
  slug: "systeme-2",
  title: {
    fr: "Système 2 — Processus, synchronisation, communication",
    en: "System 2 — Processes, synchronization, communication",
  },
  status: "published",
  summary: {
    fr: "Processus, fork, tubes, signaux, mémoire partagée et exclusion mutuelle — notes de révision interactives prêtes pour l'examen.",
    en: "Processes, fork, pipes, signals, shared memory and mutual exclusion — interactive, exam-ready revision notes.",
  },
  classes: [
    {
      label: { fr: "Chapitre 1", en: "Chapter 1" },
      title: {
        fr: "Processus et tubes anonymes",
        en: "Processes and anonymous pipes",
      },
      blocks: chapterOne,
    },
    {
      label: { fr: "Chapitre 2", en: "Chapter 2" },
      title: { fr: "Tubes nommés (FIFO)", en: "Named pipes (FIFO)" },
      blocks: chapterTwo,
    },
    {
      label: { fr: "Chapitre 3", en: "Chapter 3" },
      title: { fr: "Les signaux", en: "Signals" },
      blocks: chapterThree,
    },
    {
      label: { fr: "Chapitre 4", en: "Chapter 4" },
      title: {
        fr: "Partage de mémoire (mmap)",
        en: "Shared memory (mmap)",
      },
      blocks: chapterFour,
    },
    {
      label: { fr: "Chapitre 5", en: "Chapter 5" },
      title: { fr: "Exclusion mutuelle", en: "Mutual exclusion" },
      blocks: chapterFive,
    },
    {
      label: { fr: "Chapitre 6", en: "Chapter 6" },
      title: {
        fr: "Aperçu — threads, sémaphores, moniteurs",
        en: "Overview — threads, semaphores, monitors",
      },
      blocks: chapterSix,
    },
    {
      label: { fr: "Examens blancs", en: "Mock exams" },
      title: {
        fr: "Exercices d'examen blanc",
        en: "Mock exam exercises",
      },
      parts: [
        {
          id: "p1",
          label: {
            fr: "Blanc N°1 — Processus & tubes",
            en: "Mock Exam N°1 — Processes & pipes",
          },
        },
        {
          id: "p2",
          label: {
            fr: "Blanc N°2 — Signaux & FIFO",
            en: "Mock Exam N°2 — Signals & FIFO",
          },
        },
        {
          id: "p3",
          label: {
            fr: "Blanc N°3 — mmap & exclusion",
            en: "Mock Exam N°3 — mmap & exclusion",
          },
        },
        {
          id: "p4",
          label: { fr: "Blanc Global", en: "Full Mock Exam" },
        },
      ],
      blocks: examBlancs,
    },
    {
      label: { fr: "Prépa CCI 1", en: "CCI 1 prep" },
      title: {
        fr: "Best prep for CCI 1 — la fiche express",
        en: "Best prep for CC1 — the cheat sheet",
      },
      parts: [
        {
          id: "p1",
          label: { fr: "1. Processus", en: "1. Processes" },
        },
        {
          id: "p2",
          label: { fr: "2. Tubes anonymes", en: "2. Anonymous pipes" },
        },
        {
          id: "p3",
          label: { fr: "3. Tubes nommés", en: "3. Named pipes" },
        },
        {
          id: "p4",
          label: { fr: "4. Signaux", en: "4. Signals" },
        },
        {
          id: "p5",
          label: { fr: "5. mmap", en: "5. mmap" },
        },
        {
          id: "p6",
          label: { fr: "6. Exclusion mutuelle", en: "6. Mutual exclusion" },
        },
        {
          id: "p7",
          label: { fr: "7. Méthode d'examen", en: "7. Exam method" },
        },
      ],
      blocks: prepCC1,
    },
  ],
};
