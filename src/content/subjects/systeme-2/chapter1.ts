import type { Block } from "../../types";

export const chapterOne: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un système d'exploitation doit faire vivre plusieurs programmes en même temps, alors qu'il n'y a qu'une poignée de cœurs de calcul. La réponse tient en un mot : le **processus**. Ce chapitre pose les briques de base : qu'est-ce qu'un processus, comment le créer avec `fork`, comment un père et son fils communiquent par un **tube anonyme**.",
      en: "An operating system must keep several programs alive at once, even though there are only a handful of computing cores. The answer fits in one word: the **process**. This chapter lays the foundations: what a process is, how to create one with `fork`, and how a parent and child communicate through an **anonymous pipe**.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Programme, processus, thread", en: "1. Program, process, thread" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** un programme est une **recette** posée sur la table ; un processus est un **cuisinier** qui est en train de l'exécuter dans sa cuisine. La recette est passive, le cuisinier est actif et possède ses propres ingrédients (la mémoire, les fichiers ouverts). Deux cuisiniers peuvent suivre la même recette sans rien partager.",
      en: "**Analogy:** a program is a **recipe** lying on the table; a process is a **cook** currently executing it in their kitchen. The recipe is passive, the cook is active and owns their own ingredients (memory, open files). Two cooks can follow the same recipe without sharing anything.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Programme :** un fichier exécutable sur le disque. Il ne fait rien tout seul.",
          en: "**Program:** an executable file on disk. It does nothing on its own.",
        },
      },
      {
        text: {
          fr: "**Processus :** l'instance d'un programme en cours d'exécution. Il possède un **PID** (identifiant), son espace mémoire, ses fichiers ouverts, un **état** (élu, prêt, bloqué).",
          en: "**Process:** an instance of a program being executed. It owns a **PID** (identifier), its memory space, its open files, and a **state** (running, ready, blocked).",
        },
      },
      {
        text: {
          fr: "**Thread (fil d'exécution) :** un « cuisinier supplémentaire » à l'intérieur du même processus. Les threads **partagent** la mémoire du processus mais ont chacun leur pile d'appels.",
          en: "**Thread:** an extra “cook” inside the same process. Threads **share** the process memory but each has its own call stack.",
        },
      },
    ],
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "proc-thread",
        caption: {
          fr: "Un processus regroupe du code, des données et au moins un thread. Chaque thread a sa propre pile.",
          en: "A process groups code, data and at least one thread. Each thread has its own stack.",
        },
        nodes: [
          { id: "proc", label: { fr: "Processus", en: "Process" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "code", label: { fr: "Code", en: "Code" }, x: 220, y: -80, shape: "box" },
          { id: "data", label: { fr: "Données", en: "Data" }, x: 220, y: 0, shape: "box" },
          { id: "heap", label: { fr: "Tas", en: "Heap" }, x: 220, y: 80, shape: "box" },
          { id: "t1", label: { fr: "Fil 1", en: "Thread 1" }, x: 430, y: -80, shape: "box", tone: "soft" },
          { id: "t2", label: { fr: "Fil 2", en: "Thread 2" }, x: 430, y: 80, shape: "box", tone: "soft" },
        ],
        edges: [
          { from: "proc", to: "code" },
          { from: "proc", to: "data" },
          { from: "proc", to: "heap" },
          { from: "proc", to: "t1" },
          { from: "proc", to: "t2" },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Programme, processus et thread", en: "Program, process and thread" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Qu'est-ce qui distingue fondamentalement un processus d'un thread ?",
        en: "What fundamentally distinguishes a process from a thread?",
      },
      options: [
        {
          text: { fr: "Un thread n'a pas de PID.", en: "A thread has no PID." },
          feedback: {
            fr: "Faux : le thread appartient au processus et partage son PID, mais possède un identifiant interne (TID).",
            en: "False: the thread belongs to the process and shares its PID, but has an internal identifier (TID).",
          },
        },
        {
          text: {
            fr: "Les threads d'un même processus partagent la mémoire, les processus non.",
            en: "Threads of the same process share memory; processes do not.",
          },
        },
        {
          text: {
            fr: "Un processus ne peut pas être bloqué.",
            en: "A process can never be blocked.",
          },
          feedback: {
            fr: "Faux : un processus bloqué attend une ressource (E/S, verrou).",
            en: "False: a blocked process is waiting for a resource (I/O, lock).",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "Les threads partagent l'espace d'adressage du processus (code, données, tas) ; chaque processus a au contraire son propre espace mémoire, isolé des autres.",
        en: "Threads share the process address space (code, data, heap); each process instead has its own memory space, isolated from the others.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Créer un processus : fork()", en: "2. Creating a process: fork()" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** `fork` est une **photocopieuse vivante**. Le processus appelant (« le père ») est dupliqué à l'identique : le nouveau processus (« le fils ») repart exactement de l'instruction qui suit le `fork`, avec une copie de la mémoire. Une seule différence permet de savoir qui est qui : **la valeur de retour**.",
      en: "**Analogy:** `fork` is a **living photocopier**. The calling process (“the parent”) is duplicated identically: the new process (“the child”) restarts exactly at the instruction after `fork`, with a copy of the memory. A single difference tells them apart: **the return value**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Dans le père :** `fork()` renvoie le **PID du fils** (un entier strictement positif).",
          en: "**In the parent:** `fork()` returns the **child's PID** (a strictly positive integer).",
        },
      },
      {
        text: {
          fr: "**Dans le fils :** `fork()` renvoie **0**.",
          en: "**In the child:** `fork()` returns **0**.",
        },
      },
      {
        text: {
          fr: "**En cas d'échec :** `fork()` renvoie **−1** (et le fils n'est pas créé).",
          en: "**On failure:** `fork()` returns **−1** (and no child is created).",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Le squelette universel d'un fork : on teste la valeur de retour.",
      en: "The universal fork skeleton: test the return value.",
    },
    text: `#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    pid_t pid = fork();

    if (pid == -1) {
        perror("fork");
        return 1;
    }
    if (pid == 0) {
        printf("Je suis le fils, mon PID = %d\\n", getpid());
        _exit(0);
    }
    printf("Je suis le pere, le PID du fils = %d\\n", pid);
    wait(NULL);
    return 0;
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "A. Le piège du double « fork » implicite", en: "A. The implicit “double fork” trap" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Après un `fork`, **les deux processus exécutent la suite du programme**. Si on ne teste pas la valeur de retour, tout le code est exécuté deux fois : c'est l'erreur classique du débutant.",
      en: "After a `fork`, **both processes execute the rest of the program**. If the return value is not tested, all the code runs twice: this is the classic beginner mistake.",
    },
  },
  {
    type: "trace",
    spec: {
      id: "fork-trace",
      caption: {
        fr: "Déroulé d'un fork : cliquez pour avancer étape par étape.",
        en: "Walkthrough of a fork: click to advance step by step.",
      },
      events: [
        {
          label: { fr: "Le père exécute `fork()`", en: "The parent executes `fork()`" },
          detail: { fr: "L'OS duplique l'espace mémoire.", en: "The OS duplicates the memory space." },
        },
        {
          label: { fr: "Deux processus « reviennent » du fork", en: "Two processes “return” from fork" },
          detail: { fr: "Père : pid > 0. Fils : pid == 0.", en: "Parent: pid > 0. Child: pid == 0." },
        },
        {
          label: { fr: "Le fils imprime son PID", en: "The child prints its PID" },
          detail: { fr: "`getpid()` renvoie le PID du fils.", en: "`getpid()` returns the child's PID." },
        },
        {
          label: { fr: "Le fils appelle `_exit(0)`", en: "The child calls `_exit(0)`" },
          detail: { fr: "Il devient « zombie » jusqu'au wait.", en: "It becomes a “zombie” until wait." },
        },
        {
          label: { fr: "Le père appelle `wait(NULL)`", en: "The parent calls `wait(NULL)`" },
          detail: { fr: "Il récupère le code de retour, le zombie disparaît.", en: "It collects the exit code, the zombie disappears." },
        },
      ],
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "B. Attendre et récupérer : wait()", en: "B. Waiting and collecting: wait()" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`pid_t wait(int *status)`** : le père **se bloque** jusqu'à la fin d'un fils quelconque, et renvoie son PID.",
          en: "**`pid_t wait(int *status)`**: the parent **blocks** until any child finishes, and returns its PID.",
        },
      },
      {
        text: {
          fr: "**`pid_t waitpid(pid_t pid, int *status, int options)`** : attend un fils **précis**. `pid = -1` attend n'importe quel fils.",
          en: "**`pid_t waitpid(pid_t pid, int *status, int options)`**: waits for a **specific** child. `pid = -1` waits for any child.",
        },
      },
      {
        text: {
          fr: "**`status`** se lit avec `WIFEXITED(status)` puis `WEXITSTATUS(status)`. `WIFSIGNALED(status)` indique un arrêt par signal.",
          en: "**`status`** is decoded with `WIFEXITED(status)` then `WEXITSTATUS(status)`. `WIFSIGNALED(status)` signals a termination by signal.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "C. Orphelin et zombie", en: "C. Orphan and zombie" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Orphelin :** un fils dont le père est mort **avant** lui. Il est « adopté » par `init` (PID 1) ; il n'est donc jamais orphelin bien longtemps.",
          en: "**Orphan:** a child whose parent died **before** it. It is “adopted” by `init` (PID 1); it is therefore never an orphan for long.",
        },
      },
      {
        text: {
          fr: "**Zombie :** un fils **terminé** dont le père n'a pas encore fait `wait`. Sa ressource est libérée, mais sa ligne dans la table des processus reste, avec son code de retour.",
          en: "**Zombie:** a **finished** child whose parent has not yet called `wait`. Its resources are freed, but its slot in the process table remains, holding its exit code.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Valeur de retour de fork", en: "fork return value" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : dans le fils, `fork()` renvoie la valeur ______.",
        en: "Fill in: in the child, `fork()` returns the value ______.",
      },
      blanks: [
        {
          accepted: ["0", "zéro", "zero"],
          mistakes: [
            {
              match: ["pid", "le pid du fils", "fils"],
              feedback: {
                fr: "C'est le **père** qui reçoit le PID du fils, pas le fils.",
                en: "It is the **parent** that receives the child's PID, not the child.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "Le fils reçoit `0`. C'est le père qui reçoit le PID (> 0) du fils.",
        en: "The child receives `0`. The parent receives the child's PID (> 0).",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Communication : les tubes anonymes", en: "3. Communication: anonymous pipes" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** un tube (`pipe`) est un **tuyau** tendu entre deux processus. D'un côté on verse de l'eau (on écrit), de l'autre on la recueille (on lit), **dans l'ordre d'arrivée** (FIFO). Le tuyau est **unidirectionnel** : pour dialoguer dans les deux sens, il faut deux tuyaux.",
      en: "**Analogy:** a pipe is a **tube** stretched between two processes. Water is poured in at one end (write) and collected at the other (read), **in arrival order** (FIFO). The tube is **unidirectional**: two-way dialog requires two tubes.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`int pipe(int fd[2])`** crée le tube et remplit `fd` : `fd[0]` = **lecture**, `fd[1]` = **écriture**.",
          en: "**`int pipe(int fd[2])`** creates the pipe and fills `fd`: `fd[0]` = **read**, `fd[1]` = **write**.",
        },
      },
      {
        text: {
          fr: "Un tube n'a **pas de nom** dans le système de fichiers : seul un processus qui en possède les descripteurs (ou son descendant) peut l'utiliser.",
          en: "A pipe has **no name** in the file system: only a process that owns its descriptors (or its descendant) can use it.",
        },
      },
      {
        text: {
          fr: "**Règle d'or :** refermer les extrémités inutilisées. Sinon, un `read` peut ne jamais recevoir le signal de fin (EOF).",
          en: "**Golden rule:** close unused ends. Otherwise a `read` may never receive the end-of-file (EOF) signal.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Le schéma père → fils : le père écrit, le fils lit.",
      en: "The parent → child pattern: the parent writes, the child reads.",
    },
    text: `int fd[2];
pipe(fd);

if (fork() == 0) {
    close(fd[1]);
    char buffer[64];
    ssize_t n = read(fd[0], buffer, sizeof(buffer) - 1);
    buffer[n] = '\\0';
    printf("Le fils a lu : %s\\n", buffer);
    close(fd[0]);
    _exit(0);
}

close(fd[0]);
write(fd[1], "bonjour", 7);
close(fd[1]);
wait(NULL);`,
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "pipe-flow",
        caption: {
          fr: "Un tube est un tampon mémoire géré par le noyau : on écrit d'un côté, on lit de l'autre.",
          en: "A pipe is a kernel-managed memory buffer: write on one side, read on the other.",
        },
        nodes: [
          { id: "parent", label: { fr: "Père", en: "Parent" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "buffer", label: { fr: "Tube (noyau)", en: "Pipe (kernel)" }, x: 220, y: 0, shape: "box", tone: "soft" },
          { id: "child", label: { fr: "Fils", en: "Child" }, x: 440, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "parent", to: "buffer", label: "write(fd[1])" },
          { from: "buffer", to: "child", label: "read(fd[0])" },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Pourquoi `ls | wc -l` fonctionne :** le shell crée un tube, fait un `fork`, redirige la sortie de `ls` vers `fd[1]` (avec `dup2`) et l'entrée de `wc` depuis `fd[0]`. Les deux programmes ignorent totalement qu'ils communiquent : ils lisent et écrivent simplement sur leurs entrées/sorties standard.",
      en: "**Why `ls | wc -l` works:** the shell creates a pipe, forks, redirects the output of `ls` to `fd[1]` (with `dup2`) and the input of `wc` from `fd[0]`. Neither program knows it is communicating: they simply read and write their standard input/output.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Comportement des E/S sur un tube", en: "I/O behavior on a pipe" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`read` sur un tube **vide** : bloque tant qu'un descripteur d'écriture est ouvert. Si tous sont fermés, `read` renvoie **0** (EOF).",
          en: "`read` on an **empty** pipe: blocks as long as a write descriptor is open. If all are closed, `read` returns **0** (EOF).",
        },
      },
      {
        text: {
          fr: "`write` sur un tube **plein** : bloque jusqu'à ce qu'un lecteur consomme. Si plus aucun lecteur n'existe, le processus reçoit `SIGPIPE`.",
          en: "`write` on a **full** pipe: blocks until a reader consumes. If no reader remains, the process receives `SIGPIPE`.",
        },
      },
      {
        text: {
          fr: "Un tube est **atomique** pour les écritures ≤ `PIPE_BUF` (souvent 4096 octets) : les écritures ne s'entrelacent pas.",
          en: "A pipe is **atomic** for writes ≤ `PIPE_BUF` (often 4096 bytes): writes do not interleave.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Sens des descripteurs d'un tube", en: "Direction of pipe descriptors" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Après `pipe(fd)`, `fd[0]` sert à écrire et `fd[1]` à lire.",
        en: "After `pipe(fd)`, `fd[0]` is for writing and `fd[1]` for reading.",
      },
      answer: false,
      justification: {
        fr: "C'est l'inverse : `fd[0]` est l'extrémité de **lecture**, `fd[1]` celle d'**écriture**. Le moyen mnémotechnique : 0 ressemble à la bouche ouverte « O » qui lit, 1 est la plume qui écrit.",
        en: "It is the opposite: `fd[0]` is the **read** end, `fd[1]` the **write** end. Mnemonic: 0 looks like the open “O” mouth that reads, 1 is the pen that writes.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Piège classique — oublier de fermer : le blocage infini", en: "Classic trap — forgetting to close: the infinite block" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Si le père ne ferme **pas** `fd[1]` après avoir écrit, le fils peut attendre indéfiniment la fin du flux : un descripteur d'écriture reste ouvert, donc `read` ne renvoie jamais 0. **Toujours** fermer l'extrémité qu'on n'utilise pas, dans chaque processus.",
      en: "If the parent does **not** close `fd[1]` after writing, the child may wait forever for the end of the stream: a write descriptor stays open, so `read` never returns 0. **Always** close the end you do not use, in every process.",
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
        title: { fr: "Combien de processus ?", en: "How many processes?" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Combien de processus au total sont créés par ce code ?\n\n```c\nfork();\nfork();\n```",
              en: "How many processes in total does this code create?\n\n```c\nfork();\nfork();\n```",
            },
            options: [
              { text: { fr: "2", en: "2" } },
              { text: { fr: "3", en: "3" } },
              { text: { fr: "4", en: "4" } },
            ],
            answerIndex: 2,
            solution: {
              fr: "Le premier `fork` porte le total à 2. Le second est exécuté par ces 2 processus et porte le total à **4**. En général, n `fork` non contrôlés donnent 2ⁿ processus.",
              en: "The first `fork` brings the total to 2. The second is executed by both those processes and brings the total to **4**. In general, n uncontrolled `fork`s yield 2ⁿ processes.",
            },
          },
        ],
      },
      {
        title: { fr: "Rédaction — schéma père/fils", en: "Writing — parent/child pattern" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrivez un programme où le père envoie le message « salut » au fils par un tube anonyme, et le fils l'affiche.",
              en: "Write a program where the parent sends the message “hi” to the child through an anonymous pipe, and the child prints it.",
            },
            solution: {
              fr: "Structure attendue : `pipe(fd)`, puis `fork()`. Dans le fils : `close(fd[1])`, `read(fd[0], buf, …)`, affichage, `close(fd[0])`. Dans le père : `close(fd[0])`, `write(fd[1], \"salut\", 5)`, `close(fd[1])`, `wait(NULL)`.",
              en: "Expected structure: `pipe(fd)`, then `fork()`. In the child: `close(fd[1])`, `read(fd[0], buf, …)`, print, `close(fd[0])`. In the parent: `close(fd[0])`, `write(fd[1], \"hi\", 2)`, `close(fd[1])`, `wait(NULL)`.",
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
    type: "paragraph",
    text: {
      fr: "**Question type :** « Écrire un programme qui crée un processus fils et fait communiquer père et fils par un tube. »",
      en: "**Typical question:** “Write a program that creates a child process and has the parent and child communicate through a pipe.”",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Structure attendue :** on découpe le travail en **quatre fonctions**. `main` ne fait que créer le tube et le processus ; `pere` s'occupe de l'écriture ; `fils` s'occupe de la lecture ; `error` joue le rôle de `perror` en arrêtant proprement le programme. Cette séparation est ce qui rapporte les points de structure à l'examen.",
      en: "**Expected structure:** split the work into **four functions**. `main` only creates the pipe and the process; `pere` handles the writing; `fils` handles the reading; `error` plays the role of `perror` while cleanly stopping the program. This separation is what earns the structural marks on the exam.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Recopiez ce squelette complet — il est noté sur la structure.** Compilation : `gcc -Wall -Wextra -o prog prog.c`.",
      en: "**Copy this complete skeleton — the structure earns the marks.** Compilation: `gcc -Wall -Wextra -o prog prog.c`.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : error(), pere(), fils() et main().",
      en: "Complete program: error(), pere(), fils() and main().",
    },
    text: `#include <stdio.h>      /* printf, perror          */
#include <stdlib.h>     /* exit, EXIT_FAILURE      */
#include <unistd.h>     /* pipe, fork, read, write */
                        /* close, _exit            */
#include <sys/wait.h>   /* wait                    */
#include <sys/types.h>  /* pid_t, ssize_t          */

#define TAILLE 128

/* Meme role que perror, mais arrete le programme. */
void error(const char *message) {
    perror(message);            /* "message: <errno>" sur stderr */
    exit(EXIT_FAILURE);
}

/* Processus pere : ecrit dans le tube puis ferme l'ecriture. */
void pere(int fd[2]) {
    const char *message = "bonjour depuis le pere";

    close(fd[0]);                          /* le pere ne lit pas          */
    if (write(fd[1], message, 22) == -1)   /* 22 = strlen(message)        */
        error("write");
    close(fd[1]);                          /* envoie l'EOF (fin du flux)  */
}

/* Processus fils : lit le tube jusqu'a l'EOF, puis affiche. */
void fils(int fd[2]) {
    char buffer[TAILLE];
    ssize_t n;

    close(fd[1]);                          /* le fils n'ecrit pas         */
    n = read(fd[0], buffer, TAILLE - 1);   /* lit les octets disponibles  */
    if (n == -1)
        error("read");
    buffer[n] = '\\0';                       /* termine la chaine           */
    printf("Le fils a recu : %s\\n", buffer);
    close(fd[0]);
}

int main(void) {
    int fd[2];
    pid_t pid;

    if (pipe(fd) == -1)                    /* 1. creer le tube            */
        error("pipe");

    pid = fork();                          /* 2. creer le processus       */
    if (pid == -1)
        error("fork");

    if (pid == 0) {                        /* 3. branche du fils          */
        fils(fd);
        exit(EXIT_SUCCESS);                /* exit vide les tampons stdio */
    }

    pere(fd);                              /* 4. branche du pere          */
    wait(NULL);                            /* 5. attendre la fin du fils  */
    return EXIT_SUCCESS;
}`,
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**`error(message)`** : appelle `perror(message)` puis `exit`, exactement comme un `perror` suivi d'un `exit`.",
          en: "**`error(message)`**: calls `perror(message)` then `exit`, exactly like a `perror` followed by an `exit`.",
        },
      },
      {
        text: {
          fr: "**`pere(fd)`** : ferme `fd[0]`, écrit le message dans `fd[1]`, puis ferme `fd[1]` (ce qui envoie l'EOF au fils).",
          en: "**`pere(fd)`**: closes `fd[0]`, writes the message into `fd[1]`, then closes `fd[1]` (which sends EOF to the child).",
        },
      },
      {
        text: {
          fr: "**`fils(fd)`** : ferme `fd[1]`, lit dans `fd[0]`, ajoute le terminateur `'\\0'` et affiche.",
          en: "**`fils(fd)`**: closes `fd[1]`, reads from `fd[0]`, appends the `'\\0'` terminator and prints.",
        },
      },
      {
        text: {
          fr: "**`main`** : `pipe` pour les descripteurs, `fork` pour le processus, puis chaque branche appelle **sa** fonction et le père termine par `wait`.",
          en: "**`main`**: `pipe` for the descriptors, `fork` for the process, then each branch calls **its** function and the parent finishes with `wait`.",
        },
      },
    ],
  },
  {
    type: "quote",
    text: {
      fr: "**Réflexe à réciter :** `pipe` → `fork` → tester `pid` → le père appelle `pere`, le fils appelle `fils` → chaque fonction ferme l'extrémité inutile → `close` → `wait` dans `main`. Les quatre fonctions `error`, `pere`, `fils`, `main` suffisent à structurer la réponse.",
      en: "**Reflex to recite:** `pipe` → `fork` → test `pid` → the parent calls `pere`, the child calls `fils` → each function closes its unused end → `close` → `wait` in `main`. The four functions `error`, `pere`, `fils`, `main` are enough to structure the answer.",
    },
  },
];
