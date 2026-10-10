import type { Block } from "../../types";

export const examBlancs: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Quatre sujets d'entraînement, du plus ciblé au plus complet. Chronométrez-vous : un blanc partiel se traite en 20–30 minutes, le blanc global en 1 h 30.",
      en: "Four practice papers, from the most focused to the most complete. Time yourself: a partial paper takes 20–30 minutes, the full paper 1 h 30.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "Blanc N°1 — Processus & tubes anonymes",
      en: "Mock Exam N°1 — Processes & anonymous pipes",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Question 1 — Décompte de processus", en: "Question 1 — Counting processes" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Soit le programme :\n\n```c\nif (fork() == 0) {\n    fork();\n}\nfork();\n```\nCombien de processus (père inclus) existent à la fin ?",
              en: "Given the program:\n\n```c\nif (fork() == 0) {\n    fork();\n}\nfork();\n```\nHow many processes (parent included) exist at the end?",
            },
            options: [
              { text: { fr: "4", en: "4" } },
              { text: { fr: "5", en: "5" } },
              { text: { fr: "6", en: "6" } },
            ],
            answerIndex: 2,
            solution: {
              fr: "Comptons. Ligne 1 : le père P crée le fils A → {P, A}. **Côté P** (test faux) : il saute le bloc puis exécute le `fork` final → il crée B → {P, B}. **Côté A** (test vrai) : le `fork` interne crée C → {A, C} ; puis A et C exécutent tous deux le `fork` final, créant D (par A) et E (par C) → {A, C, D, E}. Total : P, A, B, C, D, E = **6 processus**.",
              en: "Let us count. Line 1: the parent P creates child A → {P, A}. **On P's side** (false test): it skips the block then runs the final `fork`, creating B → {P, B}. **On A's side** (true test): the inner `fork` creates C → {A, C}; then both A and C run the final `fork`, creating D (by A) and E (by C) → {A, C, D, E}. Total: P, A, B, C, D, E = **6 processes**.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 2 — Rédaction d'un tube", en: "Question 2 — Writing a pipe" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrivez un programme complet où le père envoie à son fils la chaîne « systeme2 » par un tube anonyme, et le fils l'affiche précédée de « recu : ».",
              en: "Write a complete program where the parent sends the string “systeme2” to its child through an anonymous pipe, and the child prints it prefixed with “received: ”.",
            },
            solution: {
              fr: "Attendu : `pipe(fd)`, `fork()`, dans le fils `close(fd[1])` puis `read(fd[0], …)`, affichage ; dans le père `close(fd[0])`, `write(fd[1], \"systeme2\", 8)`, `close(fd[1])`, `wait(NULL)`.",
              en: "Expected: `pipe(fd)`, `fork()`, in the child `close(fd[1])` then `read(fd[0], …)`, print; in the parent `close(fd[0])`, `write(fd[1], \"systeme2\", 8)`, `close(fd[1])`, `wait(NULL)`.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 3 — QCM zombie", en: "Question 3 — Zombie MCQ" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Un fils termine mais le père n'appelle jamais `wait`. Que devient le fils ?",
              en: "A child finishes but the parent never calls `wait`. What becomes of the child?",
            },
            options: [
              { text: { fr: "Orphelin", en: "Orphan" } },
              { text: { fr: "Zombie", en: "Zombie" } },
              { text: { fr: "Il disparaît immédiatement", en: "It disappears immediately" } },
            ],
            answerIndex: 1,
            solution: {
              fr: "Un **zombie** : sa mémoire est libérée mais sa ligne subsiste jusqu'au `wait` (ou à la mort du père). Il ne consomme presque rien, mais sature la table des processus s'il s'accumule.",
              en: "A **zombie**: its memory is freed but its entry remains until `wait` (or the parent's death). It consumes almost nothing, but saturates the process table if it accumulates.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: {
      fr: "Blanc N°2 — Signaux & tubes nommés",
      en: "Mock Exam N°2 — Signals & named pipes",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Question 1 — open bloquant", en: "Question 1 — Blocking open" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Deux processus font respectivement `open(f, O_RDONLY)` et `open(f, O_WRONLY)` sur un même FIFO, sans `O_NONBLOCK`. Que se passe-t-il ?",
              en: "Two processes respectively call `open(f, O_RDONLY)` and `open(f, O_WRONLY)` on the same FIFO, without `O_NONBLOCK`. What happens?",
            },
            options: [
              {
                text: { fr: "Les deux open échouent.", en: "Both opens fail." },
              },
              {
                text: {
                  fr: "Les deux open réussissent dès que l'autre extrémité est ouverte.",
                  en: "Both opens succeed as soon as the other end is opened.",
                },
              },
              { text: { fr: "Seul le lecteur réussit.", en: "Only the reader succeeds." } },
            ],
            answerIndex: 1,
            solution: {
              fr: "C'est un **rendez-vous** : le premier `open` bloquant attend, le second le débloque. Une fois les deux extrémités ouvertes, les deux appels renvoient un descripteur.",
              en: "It is a **rendezvous**: the first blocking `open` waits, the second unblocks it. Once both ends are open, both calls return a descriptor.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 2 — Signal perdu", en: "Question 2 — Lost signal" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Expliquez le scénario du signal perdu et donnez la primitive qui l'évite.",
              en: "Explain the lost-signal scenario and give the primitive that avoids it.",
            },
            solution: {
              fr: "Si le signal est délivré entre le test d'une condition et le `pause()`, il est consommé avant l'endormissement ; le processus dort alors pour toujours. La primitive `sigsuspend(&mask)` réalise **atomiquement** le déblocage du signal et l'endormissement : aucun signal ne peut s'intercaler et se perdre.",
              en: "If the signal is delivered between a condition test and `pause()`, it is consumed before sleeping; the process then sleeps forever. The primitive `sigsuspend(&mask)` performs the unblocking of the signal and the sleep **atomically**: no signal can slip through and be lost.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 3 — Rôle de SIGCHLD", en: "Question 3 — Role of SIGCHLD" },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "SIGCHLD est envoyé au père quand l'un de ses fils se termine.",
              en: "SIGCHLD is sent to the parent when one of its children terminates.",
            },
            answer: true,
            justification: {
              fr: "Exact. Le père peut capturer `SIGCHLD` et appeler `wait` pour récolter les fils terminés et éviter l'accumulation de zombies.",
              en: "Correct. The parent can catch `SIGCHLD` and call `wait` to reap finished children and avoid accumulating zombies.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: {
      fr: "Blanc N°3 — mmap & exclusion mutuelle",
      en: "Mock Exam N°3 — mmap & mutual exclusion",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Question 1 — Drapeaux mmap", en: "Question 1 — mmap flags" },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Pour partager un tableau entre le père et le fils sans fichier, on appelle `mmap` avec les drapeaux `______ | MAP_ANONYMOUS` et les protections `PROT_READ | PROT_WRITE`.",
              en: "To share an array between parent and child without a file, one calls `mmap` with the flags `______ | MAP_ANONYMOUS` and the protections `PROT_READ | PROT_WRITE`.",
            },
            blanks: [
              {
                accepted: ["MAP_SHARED", "shared", "MAP_SHARED,", "MAP SHARED"],
                mistakes: [
                  {
                    match: ["MAP_PRIVATE"],
                    feedback: {
                      fr: "`MAP_PRIVATE` crée une copie sur écriture : aucune donnée n'est partagée entre les processus.",
                      en: "`MAP_PRIVATE` creates a copy-on-write: no data is shared between processes.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "`MAP_SHARED | MAP_ANONYMOUS` : la région est partagée et non adossée à un fichier.",
              en: "`MAP_SHARED | MAP_ANONYMOUS`: the region is shared and not backed by a file.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 2 — Prouver l'exclusion mutuelle de Peterson", en: "Question 2 — Proving Peterson's mutual exclusion" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Démontrez que l'algorithme de Peterson garantit l'exclusion mutuelle.",
              en: "Prove that Peterson's algorithm guarantees mutual exclusion.",
            },
            solutionItems: [
              {
                fr: "Supposons P1 et P2 simultanément en section critique.",
                en: "Suppose P1 and P2 are simultaneously in the critical section.",
              },
              {
                fr: "P1 n'a franchi le while que si `veut[2] == false` **ou** `tour == 1`. Or `veut[2] = true` (P2 est entré), donc `tour == 1`.",
                en: "P1 passed the while only if `veut[2] == false` **or** `tour == 1`. But `veut[2] = true` (P2 entered), so `tour == 1`.",
              },
              {
                fr: "Symétriquement, P2 exige `tour == 2`.",
                en: "Symmetrically, P2 requires `tour == 2`.",
              },
              {
                fr: "`tour` ne peut valoir 1 et 2 à la fois : contradiction. Donc au plus un processus est en section critique.",
                en: "`tour` cannot be both 1 and 2: contradiction. Hence at most one process is in the critical section.",
              },
            ],
            solution: {
              fr: "Preuve par l'absurde : la variable `tour` ne peut avoir deux valeurs à la fois, ce qui interdit l'entrée simultanée.",
              en: "Proof by contradiction: the variable `tour` cannot hold two values at once, which forbids simultaneous entry.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 3 — Propriété manquante", en: "Question 3 — Missing property" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Un algorithme assure l'exclusion mutuelle mais un processus peut attendre indéfiniment. Quelle propriété manque-t-il ?",
              en: "An algorithm ensures mutual exclusion but a process may wait forever. Which property is missing?",
            },
            options: [
              { text: { fr: "Le progrès", en: "Progress" } },
              { text: { fr: "L'attente bornée", en: "Bounded waiting" } },
              { text: { fr: "L'atomicité", en: "Atomicity" } },
            ],
            answerIndex: 1,
            solution: {
              fr: "**L'attente bornée** (absence de famine). L'exclusion peut tenir sans que l'équité soit assurée.",
              en: "**Bounded waiting** (no starvation). Exclusion may hold while fairness is not ensured.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "Blanc Global — Synthèse", en: "Full Mock Exam — Synthesis" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Épreuve longue — chaîne complète", en: "Long problem — full chain" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Décrivez une architecture complète : un père crée un tube nommé et deux fils. Le premier fils lit un fichier et écrit son contenu dans le FIFO ; le second lit le FIFO et compte les caractères ; le père attend tout le monde et affiche le total. Précisez les fermetures de descripteurs et les points de synchronisation.",
              en: "Describe a complete architecture: a parent creates a named pipe and two children. The first child reads a file and writes its content into the FIFO; the second reads the FIFO and counts characters; the parent waits for everyone and prints the total. Specify descriptor closings and synchronization points.",
            },
            solutionItems: [
              { fr: "`mkfifo(\"/tmp/t\", 0666)` avant les fork.", en: "`mkfifo(\"/tmp/t\", 0666)` before the forks." },
              {
                fr: "Fils 1 (écrivain) : `open(\"/tmp/t\", O_WRONLY)`, lit le fichier par blocs, `write` dans le FIFO, puis `close` → envoie l'EOF.",
                en: "Child 1 (writer): `open(\"/tmp/t\", O_WRONLY)`, reads the file in blocks, `write`s to the FIFO, then `close`s → sends EOF.",
              },
              {
                fr: "Fils 2 (lecteur) : `open(\"/tmp/t\", O_RDONLY)`, boucle `read` jusqu'à 0 (EOF), accumule le total, `close`.",
                en: "Child 2 (reader): `open(\"/tmp/t\", O_RDONLY)`, loops on `read` until 0 (EOF), accumulates the total, `close`s.",
              },
              {
                fr: "Père : `wait` sur les deux fils, `unlink(\"/tmp/t\")`, affiche le total (récupéré par `exit` ou un second canal).",
                en: "Parent: `wait`s for both children, `unlink(\"/tmp/t\")`, prints the total (retrieved via `exit` or a second channel).",
              },
              {
                fr: "Synchronisation : le rendez-vous d'`open` impose que l'écrivain et le lecteur se retrouvent ; l'EOF ferme proprement le flux.",
                en: "Synchronization: the `open` rendezvous forces writer and reader to meet; EOF cleanly closes the stream.",
              },
            ],
            solution: {
              fr: "Voir le détail ci-dessus : deux processus indépendants se rejoignent sur un FIFO nommé, et la fermeture du descripteur d'écriture transmet la fin de flux.",
              en: "See the detail above: two independent processes meet on a named FIFO, and closing the write descriptor conveys end-of-stream.",
            },
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Dans cette architecture, quel processus doit-on lancer **en premier** si l'on n'utilise pas `O_NONBLOCK` ?",
              en: "In this architecture, which process should be launched **first** if `O_NONBLOCK` is not used?",
            },
            options: [
              { text: { fr: "L'écrivain", en: "The writer" } },
              { text: { fr: "Le lecteur", en: "The reader" } },
              { text: { fr: "Peu importe", en: "It does not matter" } },
            ],
            answerIndex: 1,
            solution: {
              fr: "Le **lecteur** : son `open(O_RDONLY)` se bloque en attendant l'écrivain. Lancer l'écrivain d'abord le ferait bloquer lui aussi, mais l'important est qu'ils finissent par se rencontrer ; en pratique on lance le lecteur en premier.",
              en: "The **reader**: its `open(O_RDONLY)` blocks waiting for the writer. Launching the writer first would block it too, but the key is that they eventually meet; in practice the reader is launched first.",
            },
          },
        ],
      },
    ],
  },
];
