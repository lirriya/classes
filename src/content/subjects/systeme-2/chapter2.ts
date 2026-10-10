import type { Block } from "../../types";

export const chapterTwo: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un tube anonyme meurt avec les processus qui l'ont créé. Comment deux programmes **sans lien de parenté** peuvent-ils communiquer ? Réponse : le **tube nommé** (FIFO), qui possède une entrée dans le système de fichiers.",
      en: "An anonymous pipe dies with the processes that created it. How can two **unrelated** programs communicate? The answer: the **named pipe** (FIFO), which has an entry in the file system.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Créer un tube nommé : mkfifo", en: "1. Creating a named pipe: mkfifo" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** le tube anonyme est un **tuyau privé** posé entre deux maisons voisines. Le tube nommé est une **boîte aux lettres partagée** plantée dans la rue : n'importe qui connaissant son adresse (son chemin) peut y déposer ou y prendre du courrier.",
      en: "**Analogy:** the anonymous pipe is a **private pipe** laid between two neighbouring houses. The named pipe is a **shared letterbox** planted on the street: anyone who knows its address (its path) can drop off or pick up mail.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`int mkfifo(const char *path, mode_t mode)`** crée un FIFO à l'emplacement `path`, avec des permissions comme `0666`.",
          en: "**`int mkfifo(const char *path, mode_t mode)`** creates a FIFO at `path`, with permissions such as `0666`.",
        },
      },
      {
        text: {
          fr: "En ligne de commande : `mkfifo mon_tube`. Le fichier apparaît avec le type `p` (`ls -l` affiche `prw-r--r--`).",
          en: "On the command line: `mkfifo my_pipe`. The file appears with type `p` (`ls -l` shows `prw-r--r--`).",
        },
      },
      {
        text: {
          fr: "On échange ensuite **exactement comme un fichier** : `open`, `read`, `write`, `close`. On le détruit avec `unlink` (ou `remove`).",
          en: "Exchange then works **exactly like a file**: `open`, `read`, `write`, `close`. It is destroyed with `unlink` (or `remove`).",
        },
      },
    ],
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "fifo-flow",
        caption: {
          fr: "Le FIFO est visible dans le système de fichiers : deux processus indépendants s'y connectent par son chemin.",
          en: "The FIFO is visible in the file system: two independent processes connect to it through its path.",
        },
        nodes: [
          { id: "writer", label: { fr: "Écrivain", en: "Writer" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "path", label: { fr: "/tmp/tube (FIFO)", en: "/tmp/tube (FIFO)" }, x: 230, y: 0, shape: "box", tone: "soft" },
          { id: "reader", label: { fr: "Lecteur", en: "Reader" }, x: 480, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "writer", to: "path", label: "open + write" },
          { from: "path", to: "reader", label: "open + read" },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Différences clés avec le tube anonyme :** il a un **nom** (donc un chemin), il **persiste** sur le disque après la mort des processus, et il relie des processus **non apparentés**. Il est en revanche toujours **unidirectionnel** selon la manière dont on l'ouvre.",
      en: "**Key differences from the anonymous pipe:** it has a **name** (hence a path), it **persists** on disk after the processes die, and it links **unrelated** processes. It is still **unidirectional** according to how it is opened.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Le piège du open bloquant", en: "2. The blocking open trap" },
  },
  {
    type: "paragraph",
    text: {
      fr: "C'est **le** point d'examen. Ouvrir un FIFO n'est pas anodin : `open` **attend** que l'autre bout soit ouvert.",
      en: "This is **the** exam point. Opening a FIFO is not harmless: `open` **waits** until the other end is opened.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`open(fifo, O_RDONLY)` **bloque** tant qu'aucun processus n'a ouvert le FIFO en `O_WRONLY`.",
          en: "`open(fifo, O_RDONLY)` **blocks** until some process has opened the FIFO in `O_WRONLY`.",
        },
      },
      {
        text: {
          fr: "`open(fifo, O_WRONLY)` **bloque** tant qu'aucun processus n'a ouvert le FIFO en `O_RDONLY`.",
          en: "`open(fifo, O_WRONLY)` **blocks** until some process has opened the FIFO in `O_RDONLY`.",
        },
      },
      {
        text: {
          fr: "`open(fifo, O_RDONLY | O_NONBLOCK)` **réussit immédiatement**, même sans écrivain.",
          en: "`open(fifo, O_RDONLY | O_NONBLOCK)` **succeeds immediately**, even without a writer.",
        },
      },
      {
        text: {
          fr: "`open(fifo, O_WRONLY | O_NONBLOCK)` **échoue** avec `errno = ENXIO` s'il n'y a aucun lecteur.",
          en: "`open(fifo, O_WRONLY | O_NONBLOCK)` **fails** with `errno = ENXIO` if there is no reader.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Conséquence pratique :** si un processus ouvre le FIFO en écriture **avant** que le lecteur n'existe, il se bloque indéfiniment. C'est pourquoi on désigne souvent **un écrivain et un lecteur bien définis**, et qu'on lance l'un puis l'autre dans le bon ordre (ou avec `O_NONBLOCK`).",
      en: "**Practical consequence:** if a process opens the FIFO for writing **before** the reader exists, it blocks indefinitely. That is why one often designates **a well-defined writer and reader**, launching one then the other in the right order (or with `O_NONBLOCK`).",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Le père écrit dans le FIFO, le fils le lit.",
      en: "The parent writes to the FIFO, the child reads from it.",
    },
    text: `mkfifo("/tmp/tube", 0666);

if (fork() == 0) {                      /* fils = lecteur */
    int fd = open("/tmp/tube", O_RDONLY);
    char buffer[64];
    ssize_t n = read(fd, buffer, sizeof(buffer) - 1);
    buffer[n] = '\\0';
    printf("Le fils a recu : %s\\n", buffer);
    close(fd);
    _exit(0);
}

int fd = open("/tmp/tube", O_WRONLY);   /* pere = ecrivain */
write(fd, "coucou", 6);
close(fd);
wait(NULL);
unlink("/tmp/tube");`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Fin du flux et plusieurs écrivains", en: "End of stream and multiple writers" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`read` renvoie **0 (EOF)** seulement quand **tous** les descripteurs d'écriture sont fermés.",
          en: "`read` returns **0 (EOF)** only when **all** write descriptors are closed.",
        },
      },
      {
        text: {
          fr: "Plusieurs processus peuvent écrire dans le même FIFO : les écritures < `PIPE_BUF` restent **atomiques** (pas d'entrelacement).",
          en: "Several processes may write to the same FIFO: writes < `PIPE_BUF` remain **atomic** (no interleaving).",
        },
      },
      {
        text: {
          fr: "Comme pour le tube anonyme, une écriture sans lecteur déclenche `SIGPIPE`.",
          en: "As with the anonymous pipe, a write with no reader triggers `SIGPIPE`.",
        },
      },
    ],
  },
  {
    type: "trace",
    spec: {
      id: "fifo-trace",
      caption: {
        fr: "L'ouverture d'un FIFO est un rendez-vous : le premier arrivé attend l'autre.",
        en: "Opening a FIFO is a rendezvous: whoever arrives first waits for the other.",
      },
      events: [
        {
          label: { fr: "Le père appelle `mkfifo`", en: "The parent calls `mkfifo`" },
          detail: { fr: "Le chemin /tmp/tube apparaît.", en: "The path /tmp/tube appears." },
        },
        {
          label: { fr: "Le père ouvre en `O_WRONLY`", en: "The parent opens in `O_WRONLY`" },
          detail: { fr: "Il se bloque : aucun lecteur encore.", en: "It blocks: no reader yet." },
        },
        {
          label: { fr: "Le fils ouvre en `O_RDONLY`", en: "The child opens in `O_RDONLY`" },
          detail: { fr: "Le rendez-vous est établi, les deux repartent.", en: "The rendezvous happens, both resume." },
        },
        {
          label: { fr: "Le père écrit et ferme", en: "The parent writes and closes" },
          detail: { fr: "6 octets déposés dans le tube.", en: "6 bytes placed in the pipe." },
        },
        {
          label: { fr: "Le fils lit puis voit l'EOF", en: "The child reads then sees EOF" },
          detail: { fr: "`read` renvoie 0 après fermeture de l'écrivain.", en: "`read` returns 0 after the writer closes." },
        },
      ],
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "open bloquant sur un FIFO", en: "Blocking open on a FIFO" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Un processus fait `open(\"/tmp/tube\", O_WRONLY)` sur un FIFO, et aucun autre processus n'a ce FIFO ouvert. Que se passe-t-il ?",
        en: "A process calls `open(\"/tmp/tube\", O_WRONLY)` on a FIFO, and no other process has this FIFO open. What happens?",
      },
      options: [
        {
          text: { fr: "L'appel renvoie immédiatement un descripteur.", en: "The call immediately returns a descriptor." },
        },
        {
          text: { fr: "L'appel échoue avec errno = ENXIO.", en: "The call fails with errno = ENXIO." },
          feedback: {
            fr: "C'est le cas seulement avec `O_NONBLOCK`. Sans lui, on attend.",
            en: "That happens only with `O_NONBLOCK`. Without it, we wait.",
          },
        },
        {
          text: { fr: "L'appel bloque jusqu'à ce qu'un lecteur ouvre le FIFO.", en: "The call blocks until a reader opens the FIFO." },
        },
      ],
      answerIndex: 2,
      solution: {
        fr: "Sans `O_NONBLOCK`, `open` en écriture **bloque** jusqu'à l'arrivée d'un lecteur (`O_RDONLY`). Avec `O_NONBLOCK`, il échouerait immédiatement avec `ENXIO`.",
        en: "Without `O_NONBLOCK`, `open` for writing **blocks** until a reader arrives (`O_RDONLY`). With `O_NONBLOCK`, it would fail immediately with `ENXIO`.",
      },
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
        title: { fr: "Vrai / Faux sur les FIFO", en: "True / False on FIFOs" },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Un tube nommé relie nécessairement deux processus ayant un lien de parenté.",
              en: "A named pipe necessarily links two processes that are related.",
            },
            answer: false,
            justification: {
              fr: "Au contraire : sa raison d'être est justement de relier des processus **indépendants**, puisqu'il est repérable par un chemin. Une fois créé, on peut même l'utiliser depuis un shell.",
              en: "On the contrary: its very purpose is to link **independent** processes, since it is addressable by a path. Once created, it can even be used from a shell.",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "On supprime un FIFO avec l'appel système ______.",
              en: "A FIFO is removed with the system call ______.",
            },
            blanks: [
              {
                accepted: ["unlink", "unlink()", "remove", "remove()"],
                mistakes: [
                  {
                    match: ["close", "fermer", "delete", "rm"],
                    feedback: {
                      fr: "`close` ferme un descripteur, il ne supprime pas le nœud du système de fichiers. `rm` est la commande shell, pas l'appel dans le programme.",
                      en: "`close` closes a descriptor, it does not delete the file-system node. `rm` is the shell command, not the call in the program.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "`unlink(path)` détruit le nœud FIFO (le nom). `remove` est équivalent et souvent accepté.",
              en: "`unlink(path)` destroys the FIFO node (the name). `remove` is equivalent and often accepted.",
            },
          },
        ],
      },
      {
        title: { fr: "Rédaction — dialogue par FIFO", en: "Writing — dialog through a FIFO" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Décrivez les étapes pour faire communiquer deux programmes indépendants par un FIFO, en évitant tout interblocage à l'ouverture.",
              en: "Describe the steps to have two independent programs communicate through a FIFO, avoiding any deadlock at opening.",
            },
            solution: {
              fr: "1) Un premier programme crée le FIFO avec `mkfifo` (ou la commande `mkfifo`). 2) Lancer **d'abord le lecteur** (`open` en `O_RDONLY`) qui se bloque ; puis l'**écrivain** (`open` en `O_WRONLY`) ce qui débloque le lecteur. 3) Écrire/lire et fermer. 4) `unlink` le FIFO. Alternative : ouvrir avec `O_NONBLOCK` et gérer `ENXIO`.",
              en: "1) A first program creates the FIFO with `mkfifo` (or the `mkfifo` command). 2) Launch the **reader first** (`open` in `O_RDONLY`) which blocks; then the **writer** (`open` in `O_WRONLY`), which unblocks the reader. 3) Write/read and close. 4) `unlink` the FIFO. Alternative: open with `O_NONBLOCK` and handle `ENXIO`.",
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
      fr: "**Question type :** « Pourquoi l'ouverture d'un tube nommé peut-elle bloquer ? Comment l'éviter ? »",
      en: "**Typical question:** “Why can opening a named pipe block? How to avoid it?”",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Cause :** `open` sur un FIFO **synchronise** les deux extrémités. En `O_RDONLY` (resp. `O_WRONLY`), l'appel attend qu'un `O_WRONLY` (resp. `O_RDONLY`) survienne.",
          en: "**Cause:** `open` on a FIFO **synchronizes** the two ends. With `O_RDONLY` (resp. `O_WRONLY`), the call waits for an `O_WRONLY` (resp. `O_RDONLY`) to occur.",
        },
      },
      {
        text: {
          fr: "**Conséquence :** si les deux processus s'attendent mutuellement (chacun espère que l'autre commence), c'est un **interblocage**.",
          en: "**Consequence:** if both processes wait for each other (each hoping the other starts), it is a **deadlock**.",
        },
      },
      {
        text: {
          fr: "**Solution 1 :** imposer un **ordre** (un processus crée le FIFO et ouvre en premier, l'autre suit).",
          en: "**Solution 1:** enforce an **order** (one process creates the FIFO and opens first, the other follows).",
        },
      },
      {
        text: {
          fr: "**Solution 2 :** ouvrir en mode **non bloquant** (`O_NONBLOCK`) et tester les erreurs (`ENXIO` en écriture sans lecteur).",
          en: "**Solution 2:** open in **non-blocking** mode (`O_NONBLOCK`) and test for errors (`ENXIO` when writing with no reader).",
        },
      },
      {
        text: {
          fr: "**À ne pas oublier :** fermer les descripteurs, et `unlink` le FIFO une fois terminé.",
          en: "**Do not forget:** close descriptors, and `unlink` the FIFO once finished.",
        },
      },
    ],
  },
];
