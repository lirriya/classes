import type { Block } from "../../types";

export const chapterTwo: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un tube anonyme disparaît avec les processus qui l'ont créé, et seuls des processus apparentés peuvent le partager. Comment deux programmes **sans lien de parenté** peuvent-ils communiquer ? Réponse : le **tube nommé** (FIFO), qui possède un **nom physique** dans le système de fichiers.",
      en: "An anonymous pipe disappears with the processes that created it, and only related processes can share it. How can two **unrelated** programs communicate? The answer: the **named pipe** (FIFO), which has a **physical name** in the file system.",
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
      fr: "**Analogie :** le tube anonyme est un **tuyau privé** posé entre deux pièces voisines. Le tube nommé est une **boîte aux lettres partagée** plantée dans la rue : quiconque connaît son adresse (son nom physique) peut y déposer ou y prendre du courrier.",
      en: "**Analogy:** the anonymous pipe is a **private pipe** laid between two neighbouring rooms. The named pipe is a **shared letterbox** planted on the street: anyone who knows its address (its physical name) can drop off or pick up mail.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Ils permettent aux processus sans lien de parenté de communiquer** ; ils ont les propriétés des tubes anonymes, mais sont **créés et ouverts en tant que fichiers binaires de taille 0**.",
          en: "**They let unrelated processes communicate**; they have the properties of anonymous pipes, but are **created and opened as binary files of size 0**.",
        },
      },
      {
        text: {
          fr: "**Deux processus quelconques** peuvent les ouvrir, à condition d'en connaître les **noms physiques**.",
          en: "**Any two processes** can open them, provided they know their **physical names**.",
        },
      },
      {
        text: {
          fr: "**Commande bash :** `mkfifo [-m mode] nom`. `-m mode` donne les droits d'accès (même que `chmod`), `nom` est le nom du tube.",
          en: "**Bash command:** `mkfifo [-m mode] nom`. `-m mode` gives the access rights (same as `chmod`), `nom` is the name of the pipe.",
        },
      },
      {
        text: {
          fr: "**Fonction C :** `int mkfifo(const char *nom, mode_t mode)`, avec `#include <sys/stat.h>`. Elle renvoie **-1 si échec**, sinon **0**.",
          en: "**C function:** `int mkfifo(const char *nom, mode_t mode)`, with `#include <sys/stat.h>`. It returns **-1 on failure**, otherwise **0**.",
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
          fr: "Le tube nommé est visible dans le système de fichiers : deux processus quelconques s'y connectent par son nom physique.",
          en: "The named pipe is visible in the file system: any two processes connect to it through its physical name.",
        },
        nodes: [
          { id: "writer", label: { fr: "Processus 1", en: "Process 1" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "path", label: { fr: "tube nommé (nom physique)", en: "named pipe (physical name)" }, x: 230, y: 0, shape: "box", tone: "soft" },
          { id: "reader", label: { fr: "Processus 2", en: "Process 2" }, x: 490, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "writer", to: "path", label: "open + write" },
          { from: "path", to: "reader", label: "open + read" },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Tube nommé et lien de parenté", en: "Named pipe and parent link" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Un tube nommé ne peut relier que deux processus ayant un lien de parenté.",
        en: "A named pipe can only link two processes that are related.",
      },
      answer: false,
      justification: {
        fr: "Au contraire : sa raison d'être est justement de permettre à des processus **sans lien de parenté** de communiquer, puisqu'ils peuvent l'ouvrir à condition d'en connaître le **nom physique**.",
        en: "On the contrary: its very purpose is to let **unrelated** processes communicate, since they can open it provided they know its **physical name**.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Supprimer un tube nommé : remove", en: "2. Removing a named pipe: remove" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Commande bash :** `rm nom`, comme pour un fichier.",
          en: "**Bash command:** `rm nom`, just like a file.",
        },
      },
      {
        text: {
          fr: "**Fonction C :** `int remove(const char *pathname);`. Elle renvoie **-1 si échec**, sinon **0**.",
          en: "**C function:** `int remove(const char *pathname);`. It returns **-1 on failure**, otherwise **0**.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Suppression d'un tube nommé", en: "Removing a named pipe" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "On supprime un tube nommé avec l'appel système `remove` ; la commande bash équivalente est `rm nom`.",
        en: "A named pipe is removed with the system call `remove`; the equivalent bash command is `rm nom`.",
      },
      answer: true,
      justification: {
        fr: "`int remove(const char *pathname)` renvoie -1 si échec, sinon 0. La commande bash équivalente est `rm nom`.",
        en: "`int remove(const char *pathname)` returns -1 on failure, otherwise 0. The equivalent bash command is `rm nom`.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Ouvrir un tube nommé : open", en: "3. Opening a named pipe: open" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int open(const char *pathname, int flags);` renvoie un **descripteur de fichier**, ou **-1 si échec**.",
          en: "`int open(const char *pathname, int flags);` returns a **file descriptor**, or **-1 on failure**.",
        },
      },
      {
        text: {
          fr: "`flags` : `O_RDONLY`, `O_WRONLY`, `O_RDWR`, …",
          en: "`flags`: `O_RDONLY`, `O_WRONLY`, `O_RDWR`, …",
        },
      },
      {
        text: {
          fr: "**Ouverture par défaut bloquante :** une demande d'ouverture en **lecture** est bloquante s'il n'y a aucun **écrivain** sur le tube ; une demande d'ouverture en **écriture** est bloquante s'il n'y a aucun **lecteur** sur le tube.",
          en: "**Default blocking open:** a request to open for **reading** blocks if there is no **writer** on the pipe; a request to open for **writing** blocks if there is no **reader** on the pipe.",
        },
      },
      {
        text: {
          fr: "**Ouverture non bloquante (flag `O_NONBLOCK`) :** l'ouverture en lecture **réussit** même s'il n'y a aucun écrivain dans le tube ; l'ouverture en écriture **échoue** sur un tube sans lecteur.",
          en: "**Non-blocking open (`O_NONBLOCK` flag):** opening for reading **succeeds** even if there is no writer on the pipe; opening for writing **fails** on a pipe with no reader.",
        },
      },
    ],
  },
  {
    type: "trace",
    spec: {
      id: "fifo-trace",
      caption: {
        fr: "L'ouverture d'un tube nommé est un rendez-vous : la première ouverture attend l'autre.",
        en: "Opening a named pipe is a rendezvous: the first open waits for the other.",
      },
      events: [
        {
          label: { fr: "Le processus 1 crée le tube nommé", en: "Process 1 creates the named pipe" },
          detail: { fr: "`mkfifo` fait apparaître le nom physique du tube.", en: "`mkfifo` makes the pipe's physical name appear." },
        },
        {
          label: { fr: "Le processus 1 ouvre en `O_WRONLY`", en: "Process 1 opens in `O_WRONLY`" },
          detail: { fr: "`open` reste bloquée : aucun lecteur sur le tube.", en: "`open` stays blocked: no reader on the pipe." },
        },
        {
          label: { fr: "Le processus 2 ouvre en `O_RDONLY`", en: "Process 2 opens in `O_RDONLY`" },
          detail: { fr: "Le rendez-vous est établi, les deux `open` repartent.", en: "The rendezvous happens, both `open` calls return." },
        },
        {
          label: { fr: "Le processus 1 écrit le message", en: "Process 1 writes the message" },
          detail: { fr: "`write(fd12, msg, 5 * sizeof(char))`.", en: "`write(fd12, msg, 5 * sizeof(char))`." },
        },
        {
          label: { fr: "Le processus 2 lit puis répond", en: "Process 2 reads then replies" },
          detail: { fr: "`read(fd12, …)` puis `write(fd21, &rep, sizeof(int))`.", en: "`read(fd12, …)` then `write(fd21, &rep, sizeof(int))`." },
        },
      ],
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "open bloquant sur un tube nommé", en: "Blocking open on a named pipe" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Un processus ouvre un tube nommé en écriture (`O_WRONLY`) et aucun autre processus ne l'a ouvert. Que se passe-t-il ?",
        en: "A process opens a named pipe for writing (`O_WRONLY`) and no other process has opened it. What happens?",
      },
      options: [
        {
          text: { fr: "L'appel renvoie immédiatement un descripteur.", en: "The call immediately returns a descriptor." },
          feedback: {
            fr: "Sans `O_NONBLOCK`, une ouverture en écriture attend l'arrivée d'un lecteur.",
            en: "Without `O_NONBLOCK`, an open for writing waits for a reader to arrive.",
          },
        },
        {
          text: { fr: "L'appel bloque tant qu'aucun lecteur n'a ouvert le tube.", en: "The call blocks until a reader opens the pipe." },
        },
        {
          text: { fr: "L'appel échoue systématiquement.", en: "The call always fails." },
          feedback: {
            fr: "L'échec de l'ouverture en écriture n'arrive qu'avec le flag `O_NONBLOCK`, sur un tube sans lecteur.",
            en: "The failure of an open for writing only happens with the `O_NONBLOCK` flag, on a pipe with no reader.",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "L'ouverture par défaut est bloquante : une demande d'ouverture en **écriture** est bloquante s'il n'y a aucun **lecteur** sur le tube. Avec le flag `O_NONBLOCK`, l'ouverture en écriture échouerait sur un tube sans lecteur.",
        en: "The default open is blocking: a request to open for **writing** blocks if there is no **reader** on the pipe. With the `O_NONBLOCK` flag, the open for writing would fail on a pipe with no reader.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. Utiliser un tube nommé : read et write", en: "4. Using a named pipe: read and write" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int read(int fd, void *buf, int count)` : lit jusqu'à `count` octets depuis le descripteur `fd`.",
          en: "`int read(int fd, void *buf, int count)`: reads up to `count` bytes from descriptor `fd`.",
        },
      },
      {
        text: {
          fr: "`int write(int fd, const void *buf, int count)` : écrit `count` octets vers le descripteur `fd`.",
          en: "`int write(int fd, const void *buf, int count)`: writes `count` bytes to descriptor `fd`.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Exemple du cours :** deux programmes s'échangent **deux tubes** dont les noms sont passés en arguments. Le premier ouvre `argv[1]` en écriture (`fd12`) et `argv[2]` en lecture (`fd21`) ; le second fait l'inverse. Ils échangent un message `msg` et une réponse `rep`.",
      en: "**Lecture example:** two programs exchange **two pipes** whose names are passed as arguments. The first opens `argv[1]` for writing (`fd12`) and `argv[2]` for reading (`fd21`); the second does the opposite. They exchange a message `msg` and a reply `rep`.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Premier interlocuteur : fonction erreur, ouverture en écriture puis en lecture.",
      en: "First peer: erreur function, opening for writing then for reading.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>

/* Affiche l'erreur et arrete le programme. */
void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

int main(int argc, char *argv[]) {
    int fd12, fd21, rep;
    char *msg = "hello";

    if (argc != 3)
        erreur("argc");

    /* open bloquant : attend un lecteur sur argv[1] */
    if ((fd12 = open(argv[1], O_WRONLY)) == -1)
        erreur("open");
    if ((fd21 = open(argv[2], O_RDONLY)) == -1)
        erreur("open");

    if (write(fd12, msg, 5 * sizeof(char)) == -1)
        erreur("write");
    printf("Pere %d: message %s envoye\\n", getpid(), msg);

    if (read(fd21, &rep, sizeof(int)) == -1)
        erreur("read");
    printf("Pere %d: reponse %d recue\\n", getpid(), rep);

    exit(0);
}`,
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Second interlocuteur : même fonction erreur, ouverture en lecture puis en écriture.",
      en: "Second peer: same erreur function, opening for reading then for writing.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

int main(int argc, char *argv[]) {
    int fd12, fd21, rep = 17;
    char msg[5];

    if (argc != 3)
        erreur("argc");

    if ((fd12 = open(argv[1], O_RDONLY)) == -1)
        erreur("open");
    if ((fd21 = open(argv[2], O_WRONLY)) == -1)
        erreur("open");

    if (read(fd12, msg, 5 * sizeof(char)) == -1)
        erreur("read");
    printf("Pere %d: message %s recu\\n", getpid(), msg);

    if (write(fd21, &rep, sizeof(int)) == -1)
        erreur("write");
    printf("Pere %d: reponse %d envoyee\\n", getpid(), rep);

    exit(0);
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Ouverture non bloquante", en: "Non-blocking open" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Avec le flag `O_NONBLOCK`, une ouverture en écriture sur un tube sans lecteur échoue.",
        en: "With the `O_NONBLOCK` flag, an open for writing on a pipe with no reader fails.",
      },
      answer: true,
      justification: {
        fr: "Oui : en non bloquant, l'ouverture en **lecture** réussit même s'il n'y a aucun écrivain dans le tube, mais l'ouverture en **écriture** échoue sur un tube sans lecteur.",
        en: "Yes: in non-blocking mode, an open for **reading** succeeds even if there is no writer on the pipe, but an open for **writing** fails on a pipe with no reader.",
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
        title: { fr: "Fiche 2 – Question 2 : tubes nommés et signaux", en: "Sheet 2 – Question 2: named pipes and signals" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrire en langage C les programmes nécessaires à la réalisation des actions suivantes.",
              en: "Write in C the programs needed to perform the following actions.",
            },
            details: [
              {
                fr: "Le programme `fifo.c` doit créer un tube nommé. Le processus père doit ouvrir en écriture le tube nommé créé et envoyer le `pid` de son fils. Le fils devra attendre un signal `SIGUSR1`, afficher qu'il l'a bien reçu et se terminer.",
                en: "The program `fifo.c` must create a named pipe. The parent process must open the created named pipe for writing and send the `pid` of its child. The child must wait for a `SIGUSR1` signal, print that it has received it and terminate.",
              },
              {
                fr: "Le programme `fifo2.c` qui a reçu par le tube nommé le `pid` devra l'envoyer à son fils au travers d'un nouveau tube anonyme cette fois. Le fils enverra un signal `SIGUSR1` au processus dont le numéro est `pid`.",
                en: "The program `fifo2.c`, which received the `pid` through the named pipe, must send it to its child through a new anonymous pipe this time. The child will send a `SIGUSR1` signal to the process whose number is `pid`.",
              },
              {
                fr: "Conseil : Designer d'abord la communication entre les différents processus.",
                en: "Advice: first design the communication between the different processes.",
              },
            ],
            solution: {
              fr: "**`fifo.c`** : le père crée le tube nommé (`mkfifo`), puis fait un `fork`. Le fils installe son traitement du signal (`signal(SIGUSR1, deroute)`) et attend (`pause`) ; le père ouvre le tube en écriture (`open(..., O_WRONLY)`) et y dépose le `pid` du fils (`write`).\n\n**`fifo2.c`** : il ouvre le même tube en lecture (`open(..., O_RDONLY)`), lit le `pid` (`read`), puis fait un `fork`. Le père de `fifo2.c` transmet le `pid` à son fils par un tube anonyme (`pipe`, `write`) ; le fils lit ce `pid` (`read`) et envoie le signal (`kill(pid, SIGUSR1)`), ce qui réveille le fils de `fifo.c` qui affiche la réception et se termine.",
              en: "**`fifo.c`**: the parent creates the named pipe (`mkfifo`), then forks. The child installs its signal handling (`signal(SIGUSR1, deroute)`) and waits (`pause`); the parent opens the pipe for writing (`open(..., O_WRONLY)`) and writes its child's `pid` (`write`).\n\n**`fifo2.c`**: it opens the same pipe for reading (`open(..., O_RDONLY)`), reads the `pid` (`read`), then forks. The parent of `fifo2.c` passes the `pid` to its child through an anonymous pipe (`pipe`, `write`); the child reads this `pid` (`read`) and sends the signal (`kill(pid, SIGUSR1)`), which wakes the child of `fifo.c`, which prints the reception and terminates.",
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
      fr: "**Question type :** « Écrire deux programmes qui communiquent par un tube nommé. »",
      en: "**Typical question:** “Write two programs that communicate through a named pipe.”",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Créer :** `int mkfifo(const char *nom, mode_t mode)` avec `#include <sys/stat.h>` ; renvoie -1 si échec, sinon 0.",
          en: "**Create:** `int mkfifo(const char *nom, mode_t mode)` with `#include <sys/stat.h>`; returns -1 on failure, otherwise 0.",
        },
      },
      {
        text: {
          fr: "**Ouvrir :** `int open(const char *pathname, int flags)` avec `O_RDONLY`, `O_WRONLY`, `O_RDWR` ; l'ouverture par défaut est **bloquante** (l'ouverture en lecture attend un écrivain, l'ouverture en écriture attend un lecteur).",
          en: "**Open:** `int open(const char *pathname, int flags)` with `O_RDONLY`, `O_WRONLY`, `O_RDWR`; the default open is **blocking** (an open for reading waits for a writer, an open for writing waits for a reader).",
        },
      },
      {
        text: {
          fr: "**Échanger :** `read(fd, buf, count)` et `write(fd, buf, count)`, exactement comme sur un fichier.",
          en: "**Exchange:** `read(fd, buf, count)` and `write(fd, buf, count)`, exactly as on a file.",
        },
      },
      {
        text: {
          fr: "**Supprimer :** `int remove(const char *pathname)` ; renvoie -1 si échec, sinon 0, comme la commande bash `rm nom`.",
          en: "**Remove:** `int remove(const char *pathname)`; returns -1 on failure, otherwise 0, like the bash command `rm nom`.",
        },
      },
    ],
  },
];
