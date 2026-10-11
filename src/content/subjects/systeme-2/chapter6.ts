import type { Block } from "../../types";

export const chapterSix: Block[] = [
  {
    type: "quote",
    text: {
      fr: "**Chapitre partiel.** Le CM3 n'était pas fourni : ce chapitre est un **aperçu** limité aux thèmes que CM1 et CM2 annoncent (les trois familles d'algorithmes d'exclusion mutuelle, les sémaphores, les moniteurs et les processus légers). Il sera complété dès que le support sera disponible.",
      en: "**Partial chapter.** The CM3 handout was not provided: this chapter is an **overview** limited to the topics announced by CM1 and CM2 (the three families of mutual-exclusion algorithms, semaphores, monitors and lightweight processes). It will be completed once the material is available.",
      uk: "**Частковий розділ.** CM3 не було надано: цей розділ є **оглядом**, обмеженим темами, які анонсують CM1 і CM2 (три родини алгоритмів взаємного виключення, семафори, монітори та легкі процеси). Його буде доповнено, щойно матеріали стануть доступними.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "1. Les trois familles d'algorithmes d'exclusion mutuelle",
      en: "1. The three families of mutual-exclusion algorithms",
      uk: "1. Три родини алгоритмів взаємного виключення",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "CM2 conclut en regroupant les algorithmes d'exclusion mutuelle en **trois grandes familles** :",
      en: "CM2 concludes by grouping mutual-exclusion algorithms into **three main families**:",
      uk: "CM2 завершується групуванням алгоритмів взаємного виключення у **три великі родини**:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Solutions logicielles** avec **attente active** sans arbitrage.",
          en: "**Software solutions** with **busy waiting** and no arbitration.",
          uk: "**Програмні розв'язки** з **активним очікуванням** без арбітражу.",
        },
      },
      {
        text: {
          fr: "**Solutions matérielles** avec **attente active** sans arbitrage — exemple : le **masquage des interruptions**.",
          en: "**Hardware solutions** with **busy waiting** and no arbitration — example: **interrupt masking**.",
          uk: "**Апаратні розв'язки** з **активним очікуванням** без арбітражу — приклад: **маскування переривань**.",
        },
      },
      {
        text: {
          fr: "**Solutions avec blocage et attente passive avec arbitrage** — exemple : les **sémaphores**.",
          en: "**Solutions with blocking and passive waiting with arbitration** — example: **semaphores**.",
          uk: "**Розв'язки з блокуванням і пасивним очікуванням з арбітражем** — приклад: **семафори**.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Critique des solutions logicielles :** elles sont **difficiles à programmer et à comprendre** ; les processus qui demandent l'entrée en section critique restent **actifs** et consomment du temps de processeur. Pour de **longues sections critiques**, il serait préférable de **bloquer** les processus qui doivent attendre : c'est ce que propose la troisième famille.",
      en: "**Critique of software solutions:** they are **hard to program and to understand**; processes requesting entry to the critical section stay **active** and consume processor time. For **long critical sections**, it would be preferable to **block** the processes that must wait: this is what the third family offers.",
      uk: "**Критика програмних розв'язків:** їх **важко програмувати й розуміти**; процеси, що запитують вхід у критичну секцію, залишаються **активними** й споживають процесорний час. Для **довгих критичних секцій** краще було б **блокувати** процеси, які мають чекати: саме це пропонує третя родина.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Sémaphores", en: "2. Semaphores", uk: "2. Семафори" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **sémaphores** sont l'exemple de la **troisième famille** : des solutions avec **blocage** et **attente passive** avec **arbitrage**. CM1 les annonce comme une **introduction** faite en **L3** (**option M1**), reprise en **CM3**. Aucune primitive ni aucun programme n'est présenté dans CM1/CM2 : seuls le principe et le rattachement à la troisième famille sont retenus ici.",
      en: "**Semaphores** are the example of the **third family**: solutions with **blocking** and **passive waiting** with **arbitration**. CM1 announces them as an **introduction** given in **L3** (**option M1**), taken up again in **CM3**. No primitive and no program is presented in CM1/CM2: only the principle and the link to the third family are kept here.",
      uk: "**Семафори** є прикладом **третьої родини**: розв'язків із **блокуванням** і **пасивним очікуванням** з **арбітражем**. CM1 анонсує їх як **вступ**, зроблений у **L3** (**опція M1**), продовжений у **CM3**. Жодного примітиву й жодної програми не подано в CM1/CM2: тут залишаються лише принцип і належність до третьої родини.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Moniteurs (option M1)", en: "3. Monitors (option M1)", uk: "3. Монітори (опція M1)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **moniteurs** sont mentionnés dans le contenu de CM1 comme une **option M1**. Comme les sémaphores, ils sont un mécanisme de **synchronisation** étudié en **CM3** ; le cours ne les détaille pas dans CM1/CM2.",
      en: "**Monitors** are mentioned in CM1's content as an **option M1**. Like semaphores, they are a **synchronization** mechanism studied in **CM3**; the course does not detail them in CM1/CM2.",
      uk: "**Монітори** згадуються у змісті CM1 як **опція M1**. Як і семафори, вони є механізмом **синхронізації**, що вивчається в **CM3**; курс не деталізує їх у CM1/CM2.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. Processus légers (threads)", en: "4. Lightweight processes (threads)", uk: "4. Легкі процеси (потоки)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le contenu de CM1 annonce un chapitre **processus vs. processus légers (threads)** et pose la question **mémoire partagée ou non ?** L'utilisation du langage C dans le cours s'appuie sur **fork** et, pour les processus légers, sur les **threads**. Cette partie, ainsi que l'**introduction aux sémaphores**, relève du **CM3** et fait l'objet de **TD/TP** dédiés.",
      en: "CM1's content announces a chapter on **processes vs. lightweight processes (threads)** and raises the question **shared memory or not?** The use of the C language in the course relies on **fork** and, for lightweight processes, on **threads**. This part, along with the **introduction to semaphores**, belongs to **CM3** and comes with dedicated **TD/TP** sessions.",
      uk: "Зміст CM1 анонсує розділ **процеси vs. легкі процеси (потоки)** і ставить питання **спільна пам'ять чи ні?** Використання мови C у курсі спирається на **fork** і, для легких процесів, на **потоки**. Ця частина, разом із **вступом до семафорів**, належить до **CM3** і має окремі **TD/TP**.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Rattachement des sémaphores", en: "Semaphores and their family", uk: "Належність семафорів" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Comment CM2 classe-t-il les sémaphores parmi les familles d'algorithmes d'exclusion mutuelle ?",
        en: "How does CM2 classify semaphores among the families of mutual-exclusion algorithms?",
        uk: "Як CM2 класифікує семафори серед родин алгоритмів взаємного виключення?",
      },
      options: [
        {
          text: {
            fr: "Solutions logicielles avec attente active sans arbitrage.",
            en: "Software solutions with busy waiting and no arbitration.",
            uk: "Програмні розв'язки з активним очікуванням без арбітражу.",
          },
        },
        {
          text: {
            fr: "Solutions matérielles avec attente active sans arbitrage.",
            en: "Hardware solutions with busy waiting and no arbitration.",
            uk: "Апаратні розв'язки з активним очікуванням без арбітражу.",
          },
        },
        {
          text: {
            fr: "Solutions avec blocage et attente passive avec arbitrage.",
            en: "Solutions with blocking and passive waiting with arbitration.",
            uk: "Розв'язки з блокуванням і пасивним очікуванням з арбітражем.",
          },
        },
      ],
      answerIndex: 2,
      solution: {
        fr: "CM2 range les sémaphores dans la **troisième famille** : solutions avec **blocage** et **attente passive** avec **arbitrage**. Les deux premières familles utilisent au contraire l'**attente active**.",
        en: "CM2 places semaphores in the **third family**: solutions with **blocking** and **passive waiting** with **arbitration**. The first two families instead use **busy waiting**.",
        uk: "CM2 зараховує семафори до **третьої родини**: розв'язків із **блокуванням** і **пасивним очікуванням** з **арбітражем**. Натомість перші дві родини використовують **активне очікування**.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Familles et exemples", en: "Families and examples", uk: "Родини та приклади" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "CM2 donne le masquage des interruptions comme exemple de solution matérielle, et les sémaphores comme exemple de solution avec blocage et attente passive avec arbitrage.",
        en: "CM2 gives interrupt masking as an example of a hardware solution, and semaphores as an example of a solution with blocking and passive waiting with arbitration.",
        uk: "CM2 наводить маскування переривань як приклад апаратного розв'язку, а семафори як приклад розв'язку з блокуванням і пасивним очікуванням з арбітражем.",
      },
      answer: true,
      justification: {
        fr: "Ce sont exactement les deux exemples de CM2 : **masquage des interruptions** pour les solutions **matérielles** (attente active), **sémaphores** pour les solutions avec **blocage** et **attente passive avec arbitrage**.",
        en: "These are exactly CM2's two examples: **interrupt masking** for **hardware** solutions (busy waiting), and **semaphores** for solutions with **blocking** and **passive waiting with arbitration**.",
        uk: "Це саме два приклади CM2: **маскування переривань** для **апаратних** розв'язків (активне очікування), **семафори** для розв'язків із **блокуванням** і **пасивним очікуванням з арбітражем**.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Processus légers", en: "Lightweight processes", uk: "Легкі процеси" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "CM1 range les processus légers (threads) parmi les thèmes du cours et pose la question de la mémoire partagée ou non.",
        en: "CM1 lists lightweight processes (threads) among the course topics and raises the question of whether memory is shared or not.",
        uk: "CM1 зараховує легкі процеси (потоки) до тем курсу й ставить питання про спільну пам'ять чи ні.",
      },
      answer: true,
      justification: {
        fr: "Le contenu de CM1 mentionne explicitement **processus vs. processus légers (threads)** et la question **mémoire partagée ou non ?**",
        en: "CM1's content explicitly mentions **processes vs. lightweight processes (threads)** and the question **shared memory or not?**",
        uk: "Зміст CM1 явно згадує **процеси vs. легкі процеси (потоки)** і питання **спільна пам'ять чи ні?**",
      },
    },
  },
];
