import type { Block } from "../../types";

const lireIncrementerEcrire = [
  {
    label: { fr: "b ← a  (lire)", en: "b ← a  (read)" },
    target: "b",
    source: "a",
  },
  {
    label: { fr: "b ← b + 1  (incrémenter)", en: "b ← b + 1  (increment)" },
    target: "b",
    source: "b + 1",
  },
  {
    label: { fr: "a ← b  (écrire)", en: "a ← b  (write)" },
    target: "a",
    source: "b",
  },
];

export const chapterFive: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Deux processus partagent un compteur. Chacun l'incrémente mille fois. On attend 2000 ; on obtient 1873. Il ne manque rien : il y a une **course critique**. Ce chapitre explique pourquoi, puis construit les algorithmes qui garantissent l'**exclusion mutuelle**.",
      en: "Two processes share a counter. Each increments it a thousand times. We expect 2000; we get 1873. Nothing is missing: there is a **race condition**. This chapter explains why, then builds the algorithms that guarantee **mutual exclusion**.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Course critique et non-déterminisme", en: "1. Race condition and non-determinism" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** deux personnes remplissent **le même formulaire** en même temps. Chacune lit la ligne « nombre de passagers : 12 », ajoute 1, puis **réécrit 13**. La seconde a lu avant que la première n'écrive : elle réécrit aussi 13. Une place a été vendue deux fois, sans que personne ne voie d'erreur.",
      en: "**Analogy:** two people fill in **the same form** at the same time. Each reads the line “number of passengers: 12”, adds 1, then **writes back 13**. The second read before the first wrote: it also writes 13. One seat was sold twice, with nobody seeing an error.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Course critique (race condition) :** le résultat dépend de l'**ordre d'entrelacement** des instructions, non maîtrisé.",
          en: "**Race condition:** the result depends on the **interleaving order** of instructions, which is not controlled.",
        },
      },
      {
        text: {
          fr: "**Non-déterminisme :** relancer le programme peut donner un autre résultat. Pire : le bug peut ne jamais apparaître en test et surgir en production.",
          en: "**Non-determinism:** rerunning the program may give a different result. Worse: the bug may never appear in testing and surface in production.",
        },
      },
      {
        text: {
          fr: "**Cause racine :** les opérations *lire-modifier-écrire* ne sont pas **atomiques**.",
          en: "**Root cause:** *read-modify-write* operations are not **atomic**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Visualiser la course : le compteur a++", en: "Visualizing the race: the counter a++" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les deux processus exécutent `b = a; b = b + 1; a = b;`. **Cliquez sur « étape suivante »** dans l'ordre que vous voulez : chaque « pas au hasard » simule un entrelacement possible. Essayez d'obtenir `a = 1` alors que le résultat attendu est 2 !",
      en: "Both processes run `b = a; b = b + 1; a = b;`. **Click “next step”** in whatever order you like: each “random step” simulates a possible interleaving. Try to get `a = 1` when the expected result is 2!",
    },
  },
  {
    type: "interleaving",
    spec: {
      id: "race-counter",
      caption: {
        fr: "Course critique : entrelacez les deux incréments et observez le résultat final.",
        en: "Race condition: interleave the two increments and watch the final result.",
      },
      variables: [
        { name: "a", init: 0, scope: "shared" },
        { name: "b", init: 0, scope: "local" },
      ],
      processes: [
        { id: "P₁", label: { fr: "Processus P₁", en: "Process P₁" }, steps: lireIncrementerEcrire },
        { id: "P₂", label: { fr: "Processus P₂", en: "Process P₂" }, steps: lireIncrementerEcrire },
      ],
      expected: { a: 2 },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Le cas de la compagnie aérienne", en: "The airline case" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Deux guichets réservent sur le même vol. Chacun lit le nombre de places, puis écrit le nombre + 1. Voici le même scénario, avec `n` = nombre de places réservées.",
      en: "Two desks book on the same flight. Each reads the number of seats, then writes the number + 1. Here is the same scenario, with `n` = number of reserved seats.",
    },
  },
  {
    type: "interleaving",
    spec: {
      id: "race-airline",
      caption: {
        fr: "Réservation aérienne : deux guichets, une seule variable partagée n.",
        en: "Airline booking: two desks, one shared variable n.",
      },
      variables: [
        { name: "n", init: 0, scope: "shared" },
        { name: "local", init: 0, scope: "local" },
      ],
      processes: [
        {
          id: "G₁",
          label: { fr: "Guichet 1", en: "Desk 1" },
          steps: [
            { label: { fr: "local ← n", en: "local ← n" }, target: "local", source: "n" },
            { label: { fr: "local ← local + 1", en: "local ← local + 1" }, target: "local", source: "local + 1" },
            { label: { fr: "n ← local", en: "n ← local" }, target: "n", source: "local" },
          ],
        },
        {
          id: "G₂",
          label: { fr: "Guichet 2", en: "Desk 2" },
          steps: [
            { label: { fr: "local ← n", en: "local ← n" }, target: "local", source: "n" },
            { label: { fr: "local ← local + 1", en: "local ← local + 1" }, target: "local", source: "local + 1" },
            { label: { fr: "n ← local", en: "n ← local" }, target: "n", source: "local" },
          ],
        },
      ],
      expected: { n: 2 },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Définition d'une course critique", en: "Definition of a race condition" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quelle est la cause directe d'une course critique sur `x++` ?",
        en: "What is the direct cause of a race condition on `x++`?",
      },
      options: [
        { text: { fr: "Le processeur est trop lent.", en: "The processor is too slow." } },
        {
          text: {
            fr: "L'opération se décompose en plusieurs instructions non atomiques.",
            en: "The operation breaks into several non-atomic instructions.",
          },
        },
        { text: { fr: "La mémoire partagée est trop petite.", en: "Shared memory is too small." } },
      ],
      answerIndex: 1,
      solution: {
        fr: "`x++` = lire, incrémenter, écrire. Entre ces étapes, un autre processus peut s'intercaler et faire perdre une mise à jour. Une seule instruction atomique supprimerait la course.",
        en: "`x++` = read, increment, write. Between these steps, another process can interleave and lose an update. A single atomic instruction would remove the race.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. La section critique et ses quatre propriétés", en: "2. The critical section and its four properties" },
  },
  {
    type: "paragraph",
    text: {
      fr: "On découpe le code de chaque processus en quatre zones : **entrée**, **section critique**, **sortie**, **reste**. L'objectif : au plus un processus dans la section critique, tout en évitant blocages et famine.",
      en: "Each process's code is split into four zones: **entry**, **critical section**, **exit**, **remainder**. The goal: at most one process in the critical section, while avoiding deadlock and starvation.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**1. Exclusion mutuelle :** au plus **un** processus à la fois dans la section critique.",
          en: "**1. Mutual exclusion:** at most **one** process at a time in the critical section.",
        },
      },
      {
        text: {
          fr: "**2. Progrès (absence d'interblocage) :** si la section est libre et que des processus veulent entrer, l'un d'eux finit par y entrer. Le choix ne peut être reporté indéfiniment.",
          en: "**2. Progress (no deadlock):** if the section is free and processes want to enter, one of them eventually enters. The choice cannot be postponed indefinitely.",
        },
      },
      {
        text: {
          fr: "**3. Attente bornée (absence de famine) :** après qu'un processus a manifesté son intention, il ne peut y avoir qu'un **nombre borné** de passages d'autres processus avant le sien.",
          en: "**3. Bounded waiting (no starvation):** after a process has announced its intention, only a **bounded number** of other processes may go before it.",
        },
      },
      {
        text: {
          fr: "**4. Absence d'attente active (idéal) :** un processus en attente devrait être **bloqué** (retiré du processeur), pas en train de scruter une variable en boucle.",
          en: "**4. No busy waiting (ideal):** a waiting process should be **blocked** (taken off the CPU), not spinning on a variable in a loop.",
        },
      },
    ],
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "process-states",
        caption: {
          fr: "Les trois états d'un processus : élu, prêt, bloqué. L'attente active gaspille le processeur ; le blocage le libère.",
          en: "The three process states: running, ready, blocked. Busy waiting wastes the CPU; blocking frees it.",
        },
        nodes: [
          { id: "elu", label: { fr: "Élu", en: "Running" }, x: 220, y: 0, shape: "circle", tone: "primary" },
          { id: "pret", label: { fr: "Prêt", en: "Ready" }, x: 0, y: 0, shape: "circle" },
          { id: "bloque", label: { fr: "Bloqué", en: "Blocked" }, x: 440, y: 0, shape: "circle" },
        ],
        edges: [
          { from: "pret", to: "elu", label: { fr: "élection", en: "scheduled" } },
          { from: "elu", to: "pret", label: { fr: "quantum écoulé", en: "quantum expired" } },
          { from: "elu", to: "bloque", label: { fr: "E/S / verrou", en: "I/O / lock" } },
          { from: "bloque", to: "pret", label: { fr: "réveil", en: "wake-up" } },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Tentatives incorrectes", en: "3. Incorrect attempts" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Avant les bonnes solutions, on a imaginé des protocoles séduisants… et faux. Les comprendre, c'est comprendre **pourquoi** les 4 propriétés comptent.",
      en: "Before the correct solutions, attractive but flawed protocols were devised. Understanding them means understanding **why** the 4 properties matter.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Tentative « chacun son drapeau, puis j'attends » :** chaque processus lève son drapeau puis attend que celui de l'autre soit baissé. Si les deux lèvent leur drapeau en même temps, **les deux attendent** : interblocage.",
          en: "**The “each raises a flag, then waits” attempt:** each process raises its flag then waits for the other's to come down. If both raise simultaneously, **both wait**: deadlock.",
        },
      },
      {
        text: {
          fr: "**Tentative « drapeaux dans un ordre différent » :** P1 lève `drapeau1` puis attend `drapeau2`, P2 fait l'inverse. Les deux peuvent entrer : **exclusion violée**.",
          en: "**The “flags in a different order” attempt:** P1 raises `flag1` then waits for `flag2`, P2 does the opposite. Both can enter: **mutual exclusion violated**.",
        },
      },
      {
        text: {
          fr: "**Tentative « à tour de rôle » (variable `tour`) :** P1 attend `tour = 1`, P2 attend `tour = 2`. Correct pour l'exclusion, mais si P1 ne veut pas entrer, `tour` reste à 1 et P2 est **bloqué pour rien** : **progrès violé**, et alternance forcée non souhaitable.",
          en: "**The “take turns” attempt (`turn` variable):** P1 waits for `turn = 1`, P2 for `turn = 2`. Correct for exclusion, but if P1 does not want to enter, `turn` stays 1 and P2 is **blocked for nothing**: **progress violated**, and forced alternation is undesirable.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Propriété violée par le tour de rôle", en: "Property violated by taking turns" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Le protocole « à tour de rôle » avec une seule variable `tour` garantit le progrès.",
        en: "The “take turns” protocol with a single `tour` variable guarantees progress.",
      },
      answer: false,
      justification: {
        fr: "Si le processus dont c'est le tour ne veut pas entrer, son partenaire reste bloqué en attente : il faudrait pouvoir **passer** la main. L'exclusion mutuelle est respectée, mais le progrès ne l'est pas.",
        en: "If the process whose turn it is does not want to enter, its partner stays blocked waiting: it should be able to **skip** its turn. Mutual exclusion holds, but progress does not.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. Algorithmes corrects : Dekker et Peterson", en: "4. Correct algorithms: Dekker and Peterson" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "A. L'algorithme de Dekker", en: "A. Dekker's algorithm" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dekker combine **les deux idées** : une variable `tour` **et** des drapeaux. Le drapeau annonce l'intention ; en cas de conflit, `tour` départage. Si on découvre qu'on perd le tour, on baisse momentanément son drapeau, on attend, puis on le relève.",
      en: "Dekker combines **both ideas**: a `tour` variable **and** flags. The flag announces the intention; in case of conflict, `tour` breaks the tie. If one discovers they are losing the turn, they momentarily lower their flag, wait, then raise it again.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Dekker, du point de vue du processus i (l'autre étant j = 1 - i).",
      en: "Dekker, from the viewpoint of process i (the other being j = 1 - i).",
    },
    text: `bool veut[2] = { false, false };
int tour = 0;

/* ---- entree du processus i ---- */
veut[i] = true;
while (veut[j]) {
    if (tour == j) {
        veut[i] = false;
        while (tour == j) { /* attendre */ }
        veut[i] = true;
    }
}
/* section critique */

/* ---- sortie ---- */
tour = j;
veut[i] = false;`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "B. L'algorithme de Peterson", en: "B. Peterson's algorithm" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Peterson réalise la même chose en **deux lignes**. C'est le joyau des algorithmes d'exclusion mutuelle pour deux processus.",
      en: "Peterson achieves the same in **two lines**. It is the jewel of mutual-exclusion algorithms for two processes.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Peterson, processus i.", en: "Peterson, process i." },
    text: `bool veut[2] = { false, false };
int tour;

/* ---- entree ---- */
veut[i] = true;
tour = j;                     /* on donne poliment la priorite a l'autre */
while (veut[j] && tour == j) { /* attente active */ }

/* section critique */

/* ---- sortie ---- */
veut[i] = false;`,
  },
  {
    type: "paragraph",
    text: {
      fr: "**Pourquoi c'est correct :** si les deux veulent entrer, `tour` prend la valeur **du dernier** qui l'a écrite. Le dernier arrivé **cède** donc la place : au moins un processus franchit le `while`. Et comme les deux n'y entrent pas ensemble, l'exclusion mutuelle tient. L'attente est bornée.",
      en: "**Why it is correct:** if both want to enter, `tour` takes the value **of the last** one that wrote it. The last arrival therefore **yields**: at least one process passes the `while`. And since both do not enter together, mutual exclusion holds. The wait is bounded.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "C. Généralisation à n processus", en: "C. Generalization to n processes" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Peterson se généralise à **n processus** avec deux tableaux : `niveau[i]` (le niveau courant du processus i, initialisé à −1) et `dernier[k]` (le dernier processus arrivé au niveau k). Chaque processus doit franchir **n − 1 niveaux**.",
      en: "Peterson generalizes to **n processes** with two arrays: `niveau[i]` (process i's current level, initialized to −1) and `dernier[k]` (the last process to reach level k). Each process must clear **n − 1 levels**.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Peterson généralisé, processus i (n processus) — d'après le CM2.", en: "Generalized Peterson, process i (n processes) — from lecture 2." },
    text: `int niveau[n];                /* initialise a -1 pour tous */
int dernier[n - 1];

for (int k = 0; k < n - 1; k++) {
    niveau[i] = k;            /* j'arrive au niveau k  */
    dernier[k] = i;           /* et je suis le dernier */
    while (dernier[k] == i &&
           (existe j != i avec niveau[j] >= k)) { /* attente */ }
}
/* section critique */
niveau[i] = -1;`,
  },
  {
    type: "paragraph",
    text: {
      fr: "**Pour aller plus loin (hors support de cours) :** l'algorithme de la **boulangerie** (Lamport) est une autre généralisation à n processus. Comme dans une boulangerie, chaque client prend un **ticket** croissant ; le plus petit ticket passe d'abord. En cas d'égalité, on départage par le plus petit identifiant.",
      en: "**Going further (beyond the lecture notes):** the **bakery** algorithm (Lamport) is another generalization to n processes. As in a bakery, each customer takes an increasing **ticket**; the smallest ticket goes first. On a tie, the smallest identifier breaks it.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Boulangerie de Lamport, processus i (n processus).", en: "Lamport's bakery, process i (n processes)." },
    text: `bool choisi[n];          /* un processus est en train de prendre un ticket */
int ticket[n];           /* son numero                              */

/* ---- entree ---- */
choisi[i] = true;
ticket[i] = 1 + max(ticket[0..n-1]);
choisi[i] = false;

for (int j = 0; j < n; j++) {
    while (choisi[j]) { }
    while (ticket[j] != 0 &&
          (ticket[j] < ticket[i] ||
          (ticket[j] == ticket[i] && j < i))) { }
}

/* section critique */
ticket[i] = 0;           /* sortie : on rend son ticket */`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Propriété de Peterson", en: "Property of Peterson" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans l'algorithme de Peterson, que garantit l'affectation `tour = j` juste après `veut[i] = true` ?",
        en: "In Peterson's algorithm, what does the assignment `tour = j` right after `veut[i] = true` guarantee?",
      },
      options: [
        {
          text: {
            fr: "Que le dernier processus à être arrivé cède la priorité : au moins un entre.",
            en: "That the last process to arrive yields priority: at least one enters.",
          },
        },
        { text: { fr: "Que le processus i entre toujours en premier.", en: "That process i always enters first." } },
        { text: { fr: "Que personne n'entre jamais.", en: "That nobody ever enters." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "Si les deux écrivent `veut = true` puis `tour = j`, le dernier à écrire `tour` est celui dont l'attente échoue. Chacun cède la place à l'autre : il ne peut pas y avoir **deux perdants** bloqués, donc le progrès est assuré. Et comme un seul franchit le `while`, l'exclusion tient.",
        en: "If both write `veut = true` then `tour = j`, the last to write `tour` is the one whose wait fails. Each yields to the other: there cannot be **two blocked losers**, so progress is ensured. And since only one passes the `while`, exclusion holds.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "5. Le producteur-consommateur et son tampon", en: "5. The producer-consumer and its buffer" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **producteur** dépose des éléments dans un tampon borné ; un **consommateur** les retire. Sans synchronisation, le producteur **écrase** des données non lues, ou le consommateur **lit du vide**. Essayez :",
      en: "A **producer** drops items into a bounded buffer; a **consumer** removes them. Without synchronization, the producer **overwrites** unread data, or the consumer **reads nothing**. Try it:",
    },
  },
  {
    type: "buffer",
    spec: {
      id: "producer-consumer",
      caption: {
        fr: "Tampon borné : produisez et consommez à volonté. Que se passe-t-il en cas de débordement ou de sous-dépassement ?",
        en: "Bounded buffer: produce and consume freely. What happens on overflow or underflow?",
      },
      capacity: 4,
      produceLabel: { fr: "Produire", en: "Produce" },
      consumeLabel: { fr: "Consommer", en: "Consume" },
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Rappelons les deux conditions à respecter : le producteur ne doit **jamais** déposer dans un tampon **plein** (sinon il écrase), le consommateur ne doit **jamais** retirer d'un tampon **vide** (sinon il lit n'importe quoi). Il faut de la synchronisation : sémaphores ou moniteurs (chapitre 6).",
      en: "Recall the two conditions to respect: the producer must **never** deposit into a **full** buffer (otherwise it overwrites), the consumer must **never** remove from an **empty** buffer (otherwise it reads garbage). Synchronization is required: semaphores or monitors (chapter 6).",
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "Exercices", en: "Exercises" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Diagnostiquer une propriété violée", en: "Diagnose a violated property" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Un protocole fait toujours entrer le même processus dès qu'il le demande, affamant les autres. Quelle propriété est violée ?",
              en: "A protocol always lets the same process in whenever it asks, starving the others. Which property is violated?",
            },
            options: [
              { text: { fr: "L'exclusion mutuelle.", en: "Mutual exclusion." } },
              { text: { fr: "L'attente bornée (absence de famine).", en: "Bounded waiting (no starvation)." } },
              { text: { fr: "Aucune : c'est correct.", en: "None: it is correct." } },
            ],
            answerIndex: 1,
            solution: {
              fr: "L'exclusion peut tenir (un seul à la fois) et le progrès aussi, mais un processus peut attendre **indéfiniment** : l'attente bornée est violée. C'est le cas du « tour de rôle » mal conçu qui favorise toujours le même.",
              en: "Exclusion may hold (one at a time) and progress too, but a process may wait **forever**: bounded waiting is violated. This is the case of a poorly designed “taking turns” that always favours the same one.",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "En attendant dans une boucle `while` (attente active), un processus consomme du ______ sans progresser.",
              en: "While waiting in a `while` loop (busy waiting), a process consumes ______ without progressing.",
            },
            blanks: [
              {
                accepted: ["processeur", "cpu", "temps processeur", "temps de calcul", "cycles"],
                mistakes: [
                  {
                    match: ["memoire", "mémoire", "ram"],
                    feedback: {
                      fr: "L'attente active n'occupe presque pas de mémoire ; elle gaspille en revanche le **processeur**.",
                      en: "Busy waiting uses almost no memory; it wastes the **CPU** instead.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Le **processeur** (temps CPU). Un processus bloqué, lui, est retiré de l'ordonnanceur et laisse le processeur aux autres.",
              en: "The **CPU** (CPU time). A blocked process, by contrast, is removed from the scheduler and leaves the CPU to others.",
            },
          },
        ],
      },
      {
        title: { fr: "Rédaction — rédiger Peterson", en: "Writing — write out Peterson" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Rédigez l'entrée et la sortie de la section critique du processus i avec l'algorithme de Peterson, et justifiez l'exclusion mutuelle.",
              en: "Write the entry and exit of the critical section for process i with Peterson's algorithm, and justify mutual exclusion.",
            },
            solutionItems: [
              { fr: "`veut[i] = true;` — annonce l'intention.", en: "`veut[i] = true;` — announce the intention." },
              { fr: "`tour = j;` — laisse la priorité à l'autre.", en: "`tour = j;` — leave priority to the other." },
              {
                fr: "`while (veut[j] && tour == j) { }` — attend tant que l'autre veut ET que c'est son tour.",
                en: "`while (veut[j] && tour == j) { }` — wait while the other wants AND it is their turn.",
              },
              {
                fr: "Justification : si i et j veulent entrer, `tour` vaut la valeur écrite en dernier ; un seul des deux satisfait `tour == j`, donc un seul reste bloqué, l'autre entre.",
                en: "Justification: if i and j want to enter, `tour` holds the last-written value; only one of the two satisfies `tour == j`, so only one stays blocked and the other enters.",
              },
              { fr: "Sortie : `veut[i] = false;`.", en: "Exit: `veut[i] = false;`." },
            ],
            solution: {
              fr: "Voir le code encadré ci-dessus : `veut[i] = true; tour = j; while (veut[j] && tour == j);`. L'exclusion vient du fait qu'ils ne peuvent pas avoir simultanément `tour = j` et `tour = i`.",
              en: "See the boxed code above: `veut[i] = true; tour = j; while (veut[j] && tour == j);`. Exclusion follows from the fact that they cannot simultaneously have `tour = j` and `tour = i`.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "Fiche Réflexe Examen : Modèle de Rédaction",
      en: "Exam Quick-Reference Sheet: Writing Template",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Question type :** « Écrire l'entrée/sortie de section critique de Peterson et prouver les propriétés. »",
      en: "**Typical question:** “Write Peterson's critical-section entry/exit and prove the properties.”",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : compteur partagé par mmap, protégé par Peterson (error, pere, fils).",
      en: "Complete program: counter shared via mmap, protected by Peterson (error, pere, fils).",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/mman.h>
#include <sys/wait.h>

#define TOURS 100000

typedef struct {
    volatile int veut[2];      /* intention d'entrer en SC */
    volatile int tour;         /* a qui le tour            */
    volatile long compteur;    /* ressource partagee       */
} Partage;

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

/* Processus i : Peterson, puis incrementation en section critique. */
void processus(int i, Partage *p) {
    int j = 1 - i;
    for (int n = 0; n < TOURS; n++) {
        p->veut[i] = 1;                        /* j'annonce mon intention */
        p->tour = j;                           /* je cede la priorite     */
        while (p->veut[j] && p->tour == j) {   /* attente active          */
        }
        p->compteur++;                         /* SECTION CRITIQUE        */
        p->veut[i] = 0;                        /* je sors                 */
    }
}

void fils(Partage *p) {
    processus(1, p);
}

void pere(Partage *p) {
    processus(0, p);
    if (wait(NULL) == -1)
        error("wait");
    printf("compteur = %ld (attendu %d)\\n", p->compteur, 2 * TOURS);
    if (munmap(p, sizeof(Partage)) == -1)
        error("munmap");
}

int main(void) {
    Partage *p = mmap(NULL, sizeof(Partage),
                      PROT_READ | PROT_WRITE,
                      MAP_SHARED | MAP_ANONYMOUS, -1, 0);
    if (p == MAP_FAILED)
        error("mmap");
    p->veut[0] = 0;
    p->veut[1] = 0;
    p->tour = 0;
    p->compteur = 0;

    pid_t pid = fork();
    if (pid == -1)
        error("fork");

    if (pid == 0) {
        fils(p);
        exit(EXIT_SUCCESS);
    }

    pere(p);
    return EXIT_SUCCESS;
}`,
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Recopier le code :** `veut[i] = true; tour = j; while (veut[j] && tour == j);` puis `veut[i] = false;` en sortie.",
          en: "**Copy the code:** `veut[i] = true; tour = j; while (veut[j] && tour == j);` then `veut[i] = false;` on exit.",
        },
      },
      {
        text: {
          fr: "**Exclusion mutuelle :** supposer que i et j sont simultanément en section critique. Pour que i y soit, il fallait `tour = i` au moment du test ; pour j, `tour = j`. Contradiction (une variable ne peut valoir deux choses).",
          en: "**Mutual exclusion:** suppose i and j are simultaneously in the critical section. For i to be there, `tour = i` was needed at the test; for j, `tour = j`. Contradiction (a variable cannot hold two values).",
        },
      },
      {
        text: {
          fr: "**Progrès :** si la section est libre, celui qui a écrit `tour` en dernier cède ; au moins un des deux franchit le `while`.",
          en: "**Progress:** if the section is free, the one who wrote `tour` last yields; at least one of the two passes the `while`.",
        },
      },
      {
        text: {
          fr: "**Attente bornée :** après que j a cédé, i entre ; j n'attend qu'un seul passage de i.",
          en: "**Bounded waiting:** after j yields, i enters; j waits for only one pass of i.",
        },
      },
      {
        text: {
          fr: "**Phrase de conclusion :** « Peterson satisfait l'exclusion mutuelle, le progrès et l'attente bornée, mais utilise l'attente active. »",
          en: "**Concluding sentence:** “Peterson satisfies mutual exclusion, progress and bounded waiting, but uses busy waiting.”",
        },
      },
    ],
  },
];
