import type { Block } from "../../types";

export const chapterSix: Block[] = [
  {
    type: "quote",
    text: {
      fr: "**Chapitre partiel.** Le cours CM3 n'était pas fourni : ce chapitre est un **aperçu** destiné à relier les chapitres précédents aux mécanismes réels du système (threads, sémaphores, moniteurs). Il sera complété dès que le support sera disponible.",
      en: "**Partial chapter.** The CM3 handout was not provided: this chapter is an **overview** meant to connect the previous chapters to real system mechanisms (threads, semaphores, monitors). It will be completed once the material is available.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Threads : plusieurs flux dans un processus", en: "1. Threads: several flows in one process" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **thread** (ou « fil d'exécution ») est une unité d'exécution légère à l'intérieur d'un processus. Les threads d'un même processus **partagent** le code, les données globales et le tas, mais possèdent chacun leur **pile** et leurs registres.",
      en: "A **thread** is a lightweight unit of execution inside a process. Threads of the same process **share** code, global data and heap, but each owns its **stack** and registers.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Créer :** `int pthread_create(pthread_t *th, NULL, fonction, argument)`, où `fonction` est `void *f(void *)`.",
          en: "**Create:** `int pthread_create(pthread_t *th, NULL, function, argument)`, where `function` is `void *f(void *)`.",
        },
      },
      {
        text: {
          fr: "**Attendre :** `pthread_join(th, &retour)` bloque jusqu'à la fin du thread, comme `wait` pour les processus.",
          en: "**Join:** `pthread_join(th, &return_value)` blocks until the thread finishes, like `wait` for processes.",
        },
      },
      {
        text: {
          fr: "**Avantage :** création et commutation **moins coûteuses** qu'un processus, partage de mémoire **direct** (pas besoin de `mmap`).",
          en: "**Advantage:** creation and context-switching are **cheaper** than a process, and memory **sharing is direct** (no need for `mmap`).",
        },
      },
      {
        text: {
          fr: "**Inconvénient :** pas d'isolation : un thread fautif (segfault, corruption) met **tout** le processus en danger.",
          en: "**Drawback:** no isolation: a faulty thread (segfault, corruption) endangers the **whole** process.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Programme complet : deux threads incrémentent un compteur partagé (même piège que les processus).", en: "Complete program: two threads increment a shared counter (same trap as processes)." },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define TOURS 100000

int compteur = 0;                     /* partage entre les threads */

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

void *travail(void *arg) {
    (void) arg;
    for (int i = 0; i < TOURS; i++)
        compteur++;                   /* section critique non protegee */
    return NULL;
}

int main(void) {
    pthread_t t1, t2;

    if (pthread_create(&t1, NULL, travail, NULL) != 0)
        error("pthread_create");
    if (pthread_create(&t2, NULL, travail, NULL) != 0)
        error("pthread_create");

    if (pthread_join(t1, NULL) != 0)
        error("pthread_join");
    if (pthread_join(t2, NULL) != 0)
        error("pthread_join");

    printf("compteur = %d (attendu %d)\\n", compteur, 2 * TOURS);
    return EXIT_SUCCESS;
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Threads et partage de mémoire", en: "Threads and memory sharing" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Deux threads d'un même processus peuvent communiquer par une simple variable globale, sans tube ni mmap.",
        en: "Two threads of the same process can communicate through a simple global variable, without a pipe or mmap.",
      },
      answer: true,
      justification: {
        fr: "Ils partagent l'espace d'adressage du processus : une variable globale leur est commune. Attention : cette facilité **ne dispense pas** de l'exclusion mutuelle, comme le montre le compteur ci-dessus.",
        en: "They share the process address space: a global variable is common to them. Beware: this ease **does not remove** the need for mutual exclusion, as the counter above shows.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Sémaphores : P et V", en: "2. Semaphores: P and V" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **sémaphore** est une variable entière protégée, manipulée **atomiquement** par deux opérations. En notation classique (Dijkstra) :",
      en: "A **semaphore** is a protected integer variable, manipulated **atomically** by two operations. In the classic notation (Dijkstra):",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**P(sémaphore)** (ou `wait`, ou `down`) : décrémente. Si la valeur devient **négative**, le processus **se bloque** (file d'attente).",
          en: "**P(semaphore)** (or `wait`, or `down`): decrement. If the value becomes **negative**, the process **blocks** (wait queue).",
        },
      },
      {
        text: {
          fr: "**V(sémaphore)** (ou `post`, ou `up`) : incrémente et **réveille** un processus en attente s'il y en a un.",
          en: "**V(semaphore)** (or `post`, or `up`): increment and **wake up** a waiting process if any.",
        },
      },
      {
        text: {
          fr: "**Sémaphore binaire (mutex) :** initialisé à 1, il joue le rôle d'un **verrou** : `P` à l'entrée, `V` à la sortie de la section critique.",
          en: "**Binary semaphore (mutex):** initialized to 1, it acts as a **lock**: `P` on entry, `V` on exit of the critical section.",
        },
      },
      {
        text: {
          fr: "**Sémaphore compteur :** initialisé à n, il autorise jusqu'à **n** processus simultanément (ex. n places disponibles).",
          en: "**Counting semaphore:** initialized to n, it allows up to **n** processes at once (e.g. n available slots).",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Programme complet : exclusion mutuelle avec un sémaphore POSIX (error, pere, fils).", en: "Complete program: mutual exclusion with a POSIX semaphore (error, pere, fils)." },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <semaphore.h>
#include <sys/mman.h>
#include <sys/wait.h>

#define TOURS 100000

typedef struct {
    sem_t mutex;               /* semaphore binaire      */
    int compteur;              /* ressource protegee     */
} Partage;

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

/* fils : incremente le compteur sous exclusion mutuelle. */
void fils(Partage *p) {
    for (int i = 0; i < TOURS; i++) {
        if (sem_wait(&p->mutex) == -1)     /* P : entree */
            error("sem_wait");
        p->compteur++;                     /* SECTION CRITIQUE */
        if (sem_post(&p->mutex) == -1)     /* V : sortie */
            error("sem_post");
    }
}

/* pere : incremente aussi, puis attend et affiche. */
void pere(Partage *p) {
    for (int i = 0; i < TOURS; i++) {
        if (sem_wait(&p->mutex) == -1)
            error("sem_wait");
        p->compteur++;
        if (sem_post(&p->mutex) == -1)
            error("sem_post");
    }
    if (wait(NULL) == -1)
        error("wait");
    printf("compteur = %d (attendu %d)\\n", p->compteur, 2 * TOURS);
    if (sem_destroy(&p->mutex) == -1)
        error("sem_destroy");
    if (munmap(p, sizeof(Partage)) == -1)
        error("munmap");
}

int main(void) {
    Partage *p = mmap(NULL, sizeof(Partage),
                      PROT_READ | PROT_WRITE,
                      MAP_SHARED | MAP_ANONYMOUS, -1, 0);
    if (p == MAP_FAILED)
        error("mmap");
    p->compteur = 0;
    if (sem_init(&p->mutex, 1, 1) == -1)   /* 1 = partage entre processus */
        error("sem_init");

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
    type: "paragraph",
    text: {
      fr: "**Producteur-consommateur avec sémaphores.** On utilise trois sémaphores : `vide` (nb de places libres, init = n), `plein` (nb d'éléments, init = 0), et `mutex` (accès au tampon, init = 1).",
      en: "**Producer-consumer with semaphores.** Three semaphores are used: `empty` (number of free slots, init = n), `full` (number of items, init = 0), and `mutex` (buffer access, init = 1).",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Le squelette à réciter : l'ordre des P et V est crucial.", en: "The skeleton to recite: the order of P and V is critical." },
    text: `/* ---- Producteur ---- */
P(vide);      /* attends une place libre         */
P(mutex);     /* entre dans le tampon            */
deposer(element);
V(mutex);
V(plein);     /* signale un element de plus      */

/* ---- Consommateur ---- */
P(plein);     /* attends un element              */
P(mutex);
retirer(element);
V(mutex);
V(vide);      /* signale une place de plus       */`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Rôle du sémaphore mutex", en: "Role of the mutex semaphore" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans le producteur-consommateur, à quoi sert le sémaphore `mutex` ?",
        en: "In the producer-consumer, what is the `mutex` semaphore for?",
      },
      options: [
        {
          text: {
            fr: "À compter les éléments disponibles dans le tampon.",
            en: "To count the items available in the buffer.",
          },
        },
        {
          text: {
            fr: "À protéger l'accès au tampon pour que deux processus ne le manipulent pas en même temps.",
            en: "To protect buffer access so two processes do not manipulate it at once.",
          },
        },
        { text: { fr: "À détruire le tampon.", en: "To destroy the buffer." } },
      ],
      answerIndex: 1,
      solution: {
        fr: "`plein` et `vide` comptent les éléments et les places ; `mutex` assure l'**exclusion mutuelle** sur le tampon lui-même (indices, position d'écriture), qui n'est pas atomique.",
        en: "`full` and `empty` count items and slots; `mutex` provides **mutual exclusion** over the buffer itself (indices, write position), which is not atomic.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Moniteurs", en: "3. Monitors" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **moniteur** est une abstraction de plus haut niveau : une structure qui regroupe des **données** et les **procédures** qui les manipulent, avec la garantie qu'**un seul processus** peut être actif dans une procédure du moniteur à la fois. Plus besoin d'écrire explicitement les P/V : le langage (ou la bibliothèque) s'en charge.",
      en: "A **monitor** is a higher-level abstraction: a structure that groups **data** and the **procedures** that manipulate it, with the guarantee that **a single process** can be active in a monitor procedure at a time. No need to write P/V explicitly: the language (or library) does it.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Exclusion mutuelle implicite :** à l'entrée d'une procédure, le moniteur acquiert automatiquement le verrou.",
          en: "**Implicit mutual exclusion:** on entering a procedure, the monitor automatically acquires the lock.",
        },
      },
      {
        text: {
          fr: "**Variables de condition :** `wait(c)` bloque le processus (et libère le moniteur) ; `signal(c)` réveille un processus en attente (et attend qu'il libère).",
          en: "**Condition variables:** `wait(c)` blocks the process (and releases the monitor); `signal(c)` wakes a waiting process (and waits for it to release).",
        },
      },
      {
        text: {
          fr: "**Cas d'usage :** producteur-consommateur, lecteurs-rédacteurs, gestion de ressources partagées.",
          en: "**Use cases:** producer-consumer, readers-writers, shared-resource management.",
        },
      },
    ],
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "sync-toolbox",
        caption: {
          fr: "Trois niveaux de synchronisation : mémoire partagée (bas), sémaphores (milieu), moniteurs (haut).",
          en: "Three levels of synchronization: shared memory (low), semaphores (middle), monitors (high).",
        },
        nodes: [
          { id: "mono", label: "Moniteurs", x: 220, y: -80, shape: "box", tone: "soft" },
          { id: "semi", label: "Sémaphores", x: 220, y: 0, shape: "box" },
          { id: "shm", label: "Mémoire partagée", x: 220, y: 80, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "shm", to: "semi", label: { fr: "protège", en: "protects" } },
          { from: "semi", to: "mono", label: { fr: "encapsule", en: "encapsulates" } },
        ],
      },
    ],
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
        title: { fr: "Choisir le bon outil", en: "Choose the right tool" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Quel mécanisme impose automatiquement l'exclusion mutuelle sur ses procédures ?",
              en: "Which mechanism automatically enforces mutual exclusion on its procedures?",
            },
            options: [
              { text: { fr: "Le tube anonyme.", en: "The anonymous pipe." } },
              { text: { fr: "Le moniteur.", en: "The monitor." } },
              { text: { fr: "La mémoire partagée mmap seule.", en: "Shared memory mmap alone." } },
            ],
            answerIndex: 1,
            solution: {
              fr: "Le **moniteur** garantit nativement qu'un seul processus exécute une de ses procédures à la fois. Le tube et `mmap` ne fournissent que des **canaux/espaces**, jamais d'exclusion.",
              en: "The **monitor** natively guarantees that only one process runs any of its procedures at a time. Pipes and `mmap` only provide **channels/spaces**, never exclusion.",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "En notation de Dijkstra, on entre dans une section critique avec l'opération ______ et on en sort avec V.",
              en: "In Dijkstra's notation, one enters a critical section with the operation ______ and leaves it with V.",
            },
            blanks: [
              {
                accepted: ["P", "p", "P()", "wait", "sem_wait"],
                mistakes: [
                  {
                    match: ["V", "v", "post", "signal", "sem_post"],
                    feedback: {
                      fr: "`V` **réveille** ; c'est `P` qui **bloque** et fait entrer dans la section.",
                      en: "`V` **wakes up**; it is `P` that **blocks** and enters the section.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "**P** (ou `wait`, `sem_wait`) décrémente le sémaphore ; si la valeur tombe sous zéro, le processus se bloque. `V` libère la place en sortie.",
              en: "**P** (or `wait`, `sem_wait`) decrements the semaphore; if the value drops below zero, the process blocks. `V` releases the slot on exit.",
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
      fr: "**Question type :** « Implémentez l'exclusion mutuelle avec des sémaphores. »",
      en: "**Typical question:** “Implement mutual exclusion with semaphores.”",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme minimal à recopier : un sémaphore binaire protège la section critique.",
      en: "Minimal program to copy: a binary semaphore protects the critical section.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <semaphore.h>

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

sem_t mutex;

int main(void) {
    if (sem_init(&mutex, 0, 1) == -1)    /* 0 = threads, 1 = processus */
        error("sem_init");

    if (sem_wait(&mutex) == -1)          /* P : reserver */
        error("sem_wait");
    /* --- section critique --- */
    if (sem_post(&mutex) == -1)          /* V : liberer  */
        error("sem_post");

    return EXIT_SUCCESS;
}`,
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Déclarer** un sémaphore binaire par ressource partagée, initialisé à **1**.",
          en: "**Declare** one binary semaphore per shared resource, initialized to **1**.",
        },
      },
      {
        text: {
          fr: "**Encadrer** la section critique par `P` (entrée) et `V` (sortie) — jamais l'inverse.",
          en: "**Bracket** the critical section with `P` (entry) and `V` (exit) — never the reverse.",
        },
      },
      {
        text: {
          fr: "**Producteur-consommateur :** ajouter `plein` (init 0) et `vide` (init n). Respecter l'ordre `P(vide); P(mutex); … V(mutex); V(plein);`.",
          en: "**Producer-consumer:** add `full` (init 0) and `empty` (init n). Respect the order `P(empty); P(mutex); … V(mutex); V(full);`.",
        },
      },
      {
        text: {
          fr: "**Threads :** même syntaxe, mais `sem_init(&s, 0, 1)` (non partagé entre processus) et `pthread_join`.",
          en: "**Threads:** same syntax, but `sem_init(&s, 0, 1)` (not shared between processes) and `pthread_join`.",
        },
      },
    ],
  },
];
