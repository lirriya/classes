import type { Block } from "../../types";

export const chapterSix: Block[] = [
  {
    type: "quote",
    text: {
      fr: "**Chapitre partiel.** Le CM3 n'était pas fourni : ce chapitre est un **aperçu** limité aux thèmes que CM1 et CM2 annoncent (les trois familles d'algorithmes d'exclusion mutuelle, les sémaphores, les moniteurs et les processus légers). Il sera complété dès que le support sera disponible.",
      en: "**Partial chapter.** The CM3 handout was not provided: this chapter is an **overview** limited to the topics announced by CM1 and CM2 (the three families of mutual-exclusion algorithms, semaphores, monitors and lightweight processes). It will be completed once the material is available.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "1. Les trois familles d'algorithmes d'exclusion mutuelle",
      en: "1. The three families of mutual-exclusion algorithms",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "CM2 conclut en regroupant les algorithmes d'exclusion mutuelle en **trois grandes familles** :",
      en: "CM2 concludes by grouping mutual-exclusion algorithms into **three main families**:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Solutions logicielles** avec **attente active** sans arbitrage.",
          en: "**Software solutions** with **busy waiting** and no arbitration.",
        },
      },
      {
        text: {
          fr: "**Solutions matérielles** avec **attente active** sans arbitrage — exemple : le **masquage des interruptions**.",
          en: "**Hardware solutions** with **busy waiting** and no arbitration — example: **interrupt masking**.",
        },
      },
      {
        text: {
          fr: "**Solutions avec blocage et attente passive avec arbitrage** — exemple : les **sémaphores**.",
          en: "**Solutions with blocking and passive waiting with arbitration** — example: **semaphores**.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Critique des solutions logicielles :** elles sont **difficiles à programmer et à comprendre** ; les processus qui demandent l'entrée en section critique restent **actifs** et consomment du temps de processeur. Pour de **longues sections critiques**, il serait préférable de **bloquer** les processus qui doivent attendre : c'est ce que propose la troisième famille.",
      en: "**Critique of software solutions:** they are **hard to program and to understand**; processes requesting entry to the critical section stay **active** and consume processor time. For **long critical sections**, it would be preferable to **block** the processes that must wait: this is what the third family offers.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Sémaphores", en: "2. Semaphores" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **sémaphores** sont l'exemple de la **troisième famille** : des solutions avec **blocage** et **attente passive** avec **arbitrage**. CM1 les annonce comme une **introduction** faite en **L3** (**option M1**), reprise en **CM3**. Aucune primitive ni aucun programme n'est présenté dans CM1/CM2 : seuls le principe et le rattachement à la troisième famille sont retenus ici.",
      en: "**Semaphores** are the example of the **third family**: solutions with **blocking** and **passive waiting** with **arbitration**. CM1 announces them as an **introduction** given in **L3** (**option M1**), taken up again in **CM3**. No primitive and no program is presented in CM1/CM2: only the principle and the link to the third family are kept here.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Moniteurs (option M1)", en: "3. Monitors (option M1)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **moniteurs** sont mentionnés dans le contenu de CM1 comme une **option M1**. Comme les sémaphores, ils sont un mécanisme de **synchronisation** étudié en **CM3** ; le cours ne les détaille pas dans CM1/CM2.",
      en: "**Monitors** are mentioned in CM1's content as an **option M1**. Like semaphores, they are a **synchronization** mechanism studied in **CM3**; the course does not detail them in CM1/CM2.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. Processus légers (threads)", en: "4. Lightweight processes (threads)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le contenu de CM1 annonce un chapitre **processus vs. processus légers (threads)** et pose la question **mémoire partagée ou non ?** L'utilisation du langage C dans le cours s'appuie sur **fork** et, pour les processus légers, sur les **threads**. Cette partie, ainsi que l'**introduction aux sémaphores**, relève du **CM3** et fait l'objet de **TD/TP** dédiés.",
      en: "CM1's content announces a chapter on **processes vs. lightweight processes (threads)** and raises the question **shared memory or not?** The use of the C language in the course relies on **fork** and, for lightweight processes, on **threads**. This part, along with the **introduction to semaphores**, belongs to **CM3** and comes with dedicated **TD/TP** sessions.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Rattachement des sémaphores", en: "Semaphores and their family" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Comment CM2 classe-t-il les sémaphores parmi les familles d'algorithmes d'exclusion mutuelle ?",
        en: "How does CM2 classify semaphores among the families of mutual-exclusion algorithms?",
      },
      options: [
        {
          text: {
            fr: "Solutions logicielles avec attente active sans arbitrage.",
            en: "Software solutions with busy waiting and no arbitration.",
          },
        },
        {
          text: {
            fr: "Solutions matérielles avec attente active sans arbitrage.",
            en: "Hardware solutions with busy waiting and no arbitration.",
          },
        },
        {
          text: {
            fr: "Solutions avec blocage et attente passive avec arbitrage.",
            en: "Solutions with blocking and passive waiting with arbitration.",
          },
        },
      ],
      answerIndex: 2,
      solution: {
        fr: "CM2 range les sémaphores dans la **troisième famille** : solutions avec **blocage** et **attente passive** avec **arbitrage**. Les deux premières familles utilisent au contraire l'**attente active**.",
        en: "CM2 places semaphores in the **third family**: solutions with **blocking** and **passive waiting** with **arbitration**. The first two families instead use **busy waiting**.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Familles et exemples", en: "Families and examples" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "CM2 donne le masquage des interruptions comme exemple de solution matérielle, et les sémaphores comme exemple de solution avec blocage et attente passive avec arbitrage.",
        en: "CM2 gives interrupt masking as an example of a hardware solution, and semaphores as an example of a solution with blocking and passive waiting with arbitration.",
      },
      answer: true,
      justification: {
        fr: "Ce sont exactement les deux exemples de CM2 : **masquage des interruptions** pour les solutions **matérielles** (attente active), **sémaphores** pour les solutions avec **blocage** et **attente passive avec arbitrage**.",
        en: "These are exactly CM2's two examples: **interrupt masking** for **hardware** solutions (busy waiting), and **semaphores** for solutions with **blocking** and **passive waiting with arbitration**.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Processus légers", en: "Lightweight processes" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "CM1 range les processus légers (threads) parmi les thèmes du cours et pose la question de la mémoire partagée ou non.",
        en: "CM1 lists lightweight processes (threads) among the course topics and raises the question of whether memory is shared or not.",
      },
      answer: true,
      justification: {
        fr: "Le contenu de CM1 mentionne explicitement **processus vs. processus légers (threads)** et la question **mémoire partagée ou non ?**",
        en: "CM1's content explicitly mentions **processes vs. lightweight processes (threads)** and the question **shared memory or not?**",
      },
    },
  },
];
