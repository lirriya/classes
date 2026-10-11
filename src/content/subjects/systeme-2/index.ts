import type { Subject } from "../../types";
import { chapterOne } from "./chapter1";
import { chapterTwo } from "./chapter2";
import { chapterThree } from "./chapter3";
import { chapterFour } from "./chapter4";
import { chapterFive } from "./chapter5";
import { chapterSix } from "./chapter6";
import { examBlancs } from "./exam";

export const systeme2: Subject = {
  slug: "systeme-2",
  title: {
    fr: "Système 2 — Processus, synchronisation, communication",
    en: "System 2 — Processes, synchronization, communication",
    uk: "Система 2 — Процеси, синхронізація, комунікація",
  },
  status: "published",
  summary: {
    fr: "Processus, fork, tubes, signaux, mémoire partagée et exclusion mutuelle — notes de révision interactives prêtes pour l'examen.",
    en: "Processes, fork, pipes, signals, shared memory and mutual exclusion — interactive, exam-ready revision notes.",
    uk: "Процеси, fork, канали, сигнали, спільна пам'ять і взаємне виключення — інтерактивні конспекти для підготовки до іспиту.",
  },
  classes: [
    {
      label: { fr: "Chapitre 1", en: "Chapter 1", uk: "Розділ 1" },
      title: {
        fr: "Processus et tubes anonymes",
        en: "Processes and anonymous pipes",
        uk: "Процеси та анонімні канали",
      },
      blocks: chapterOne,
    },
    {
      label: { fr: "Chapitre 2", en: "Chapter 2", uk: "Розділ 2" },
      title: { fr: "Tubes nommés (FIFO)", en: "Named pipes (FIFO)", uk: "Іменовані канали (FIFO)" },
      blocks: chapterTwo,
    },
    {
      label: { fr: "Chapitre 3", en: "Chapter 3", uk: "Розділ 3" },
      title: { fr: "Les signaux", en: "Signals", uk: "Сигнали" },
      blocks: chapterThree,
    },
    {
      label: { fr: "Chapitre 4", en: "Chapter 4", uk: "Розділ 4" },
      title: {
        fr: "Partage de mémoire (mmap)",
        en: "Shared memory (mmap)",
        uk: "Спільна пам'ять (mmap)",
      },
      blocks: chapterFour,
    },
    {
      label: { fr: "Chapitre 5", en: "Chapter 5", uk: "Розділ 5" },
      title: { fr: "Exclusion mutuelle", en: "Mutual exclusion", uk: "Взаємне виключення" },
      blocks: chapterFive,
    },
    {
      label: { fr: "Chapitre 6", en: "Chapter 6", uk: "Розділ 6" },
      title: {
        fr: "Aperçu — threads, sémaphores, moniteurs",
        en: "Overview — threads, semaphores, monitors",
        uk: "Огляд — потоки, семафори, монітори",
      },
      blocks: chapterSix,
    },
    {
      label: { fr: "Examens blancs", en: "Mock exams", uk: "Пробні іспити" },
      title: {
        fr: "Exercices d'examen blanc",
        en: "Mock exam exercises",
        uk: "Вправи пробного іспиту",
      },
      parts: [
        {
          id: "p1",
          label: {
            fr: "Blanc N°1 — Processus & tubes",
            en: "Mock Exam N°1 — Processes & pipes",
            uk: "Пробний №1 — Процеси й канали",
          },
        },
        {
          id: "p2",
          label: {
            fr: "Blanc N°2 — Signaux & FIFO",
            en: "Mock Exam N°2 — Signals & FIFO",
            uk: "Пробний №2 — Сигнали й FIFO",
          },
        },
        {
          id: "p3",
          label: {
            fr: "Blanc N°3 — mmap & exclusion",
            en: "Mock Exam N°3 — mmap & exclusion",
            uk: "Пробний №3 — mmap і виключення",
          },
        },
        {
          id: "p4",
          label: { fr: "Blanc Global", en: "Full Mock Exam", uk: "Повний пробний іспит" },
        },
      ],
      blocks: examBlancs,
    },
  ],
};
