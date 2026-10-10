import type { Block } from "../../types";

export const chapterFour: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Père et fils, après un `fork`, ont des mémoires **séparées** : écrire dans une variable du fils ne change rien chez le père. Pour partager vraiment de la mémoire, on utilise `mmap`, qui projette une même région physique dans l'espace d'adressage de plusieurs processus.",
      en: "After a `fork`, parent and child have **separate** memories: writing a variable in the child changes nothing in the parent. To truly share memory, we use `mmap`, which maps the same physical region into the address space of several processes.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. La projection mémoire : mmap / munmap", en: "1. Memory mapping: mmap / munmap" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** `mmap` est un **projecteur de diapositive**. La diapositive (le fichier ou la mémoire physique) reste unique et partagée ; ce que l'on projette, c'est une **vue** dans l'espace d'adressage d'un processus. Deux projecteurs braqués sur la même diapositive montrent la même image, et si l'un la modifie, l'autre la voit changer.",
      en: "**Analogy:** `mmap` is a **slide projector**. The slide (the file or physical memory) stays unique and shared; what is projected is a **view** inside a process's address space. Two projectors aimed at the same slide show the same image, and if one modifies it, the other sees the change.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Signature complète de mmap.",
      en: "Full signature of mmap.",
    },
    text: `void *mmap(void *addr, size_t length, int prot, int flags,
           int fd, off_t offset);`,
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`addr`** : adresse souhaitée (souvent `NULL` → le noyau choisit).",
          en: "**`addr`**: desired address (often `NULL` → the kernel chooses).",
        },
      },
      {
        text: {
          fr: "**`prot`** : droits d'accès — combinaison de `PROT_READ`, `PROT_WRITE`, `PROT_EXEC`, `PROT_NONE`.",
          en: "**`prot`**: access rights — combination of `PROT_READ`, `PROT_WRITE`, `PROT_EXEC`, `PROT_NONE`.",
        },
      },
      {
        text: {
          fr: "**`flags`** : nature du partage — `MAP_SHARED` (modifications visibles par tous) ou `MAP_PRIVATE` (copie privée). On ajoute `MAP_ANONYMOUS` pour ne pas passer par un fichier.",
          en: "**`flags`**: nature of sharing — `MAP_SHARED` (changes visible to all) or `MAP_PRIVATE` (private copy). Add `MAP_ANONYMOUS` to avoid going through a file.",
        },
      },
      {
        text: {
          fr: "**`fd`** : descripteur du fichier à projeter (`-1` si `MAP_ANONYMOUS`).",
          en: "**`fd`**: descriptor of the file to map (`-1` if `MAP_ANONYMOUS`).",
        },
      },
      {
        text: {
          fr: "**Valeur de retour :** l'adresse projetée, ou `MAP_FAILED` (`(void *) -1`) en cas d'erreur.",
          en: "**Return value:** the mapped address, or `MAP_FAILED` (`(void *) -1`) on error.",
        },
      },
      {
        text: {
          fr: "**`int munmap(void *addr, size_t length)`** libère la projection.",
          en: "**`int munmap(void *addr, size_t length)`** releases the mapping.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. MAP_SHARED : la mémoire réellement partagée", en: "2. MAP_SHARED: truly shared memory" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`MAP_SHARED`** : les écritures sont **vues par tous** les processus ayant projeté la même région, et sont écrites dans le fichier.",
          en: "**`MAP_SHARED`**: writes are **seen by all** processes that mapped the same region, and are written back to the file.",
        },
      },
      {
        text: {
          fr: "**`MAP_PRIVATE`** : les écritures restent **locales** au processus (copie sur écriture, copy-on-write). Aucun effet sur le fichier ni sur les autres.",
          en: "**`MAP_PRIVATE`**: writes stay **local** to the process (copy-on-write). No effect on the file or on others.",
        },
      },
      {
        text: {
          fr: "**Mémoire partagée anonyme :** `mmap(NULL, size, PROT_READ|PROT_WRITE, MAP_SHARED|MAP_ANONYMOUS, -1, 0)`. Créée **avant** le `fork`, elle sera partagée avec les fils.",
          en: "**Anonymous shared memory:** `mmap(NULL, size, PROT_READ|PROT_WRITE, MAP_SHARED|MAP_ANONYMOUS, -1, 0)`. Created **before** the `fork`, it is shared with the children.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Compteur partagé : la mémoire est projetée avant le fork, donc partagée.",
      en: "Shared counter: memory is mapped before the fork, hence shared.",
    },
    text: `int *counter = mmap(NULL, sizeof(int),
                    PROT_READ | PROT_WRITE,
                    MAP_SHARED | MAP_ANONYMOUS, -1, 0);
if (counter == MAP_FAILED) { perror("mmap"); exit(1); }
*counter = 0;

if (fork() == 0) {
    for (int i = 0; i < 100; i++) (*counter)++;
    _exit(0);
}
wait(NULL);
printf("counter = %d\\n", *counter);   /* souvent != 100 ! */
munmap(counter, sizeof(int));`,
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "mmap-shared",
        caption: {
          fr: "MAP_SHARED relie les espaces d'adressage à une même région physique.",
          en: "MAP_SHARED links address spaces to one and the same physical region.",
        },
        nodes: [
          { id: "paddr", label: { fr: "Région physique", en: "Physical region" }, x: 210, y: 0, shape: "box", tone: "soft" },
          { id: "padr", label: { fr: "Père", en: "Parent" }, x: 0, y: -70, shape: "box", tone: "primary" },
          { id: "cadr", label: { fr: "Fils", en: "Child" }, x: 0, y: 70, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "padr", to: "paddr", label: { fr: "projection", en: "mapping" } },
          { from: "cadr", to: "paddr", label: { fr: "projection", en: "mapping" } },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "MAP_SHARED contre MAP_PRIVATE", en: "MAP_SHARED versus MAP_PRIVATE" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Père et fils projettent une même variable avec `MAP_PRIVATE`. Le fils l'incrémente. Que voit le père ?",
        en: "Parent and child map the same variable with `MAP_PRIVATE`. The child increments it. What does the parent see?",
      },
      options: [
        {
          text: { fr: "La valeur incrémentée.", en: "The incremented value." },
        },
        {
          text: {
            fr: "L'ancienne valeur : l'écriture est restée locale au fils (copy-on-write).",
            en: "The old value: the write stayed local to the child (copy-on-write).",
          },
        },
        {
          text: { fr: "Une erreur de segmentation.", en: "A segmentation fault." },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "`MAP_PRIVATE` déclenche une **copie sur écriture** : dès que le fils écrit, il obtient sa propre page. Le père ne voit pas la modification. Pour partager, il faut `MAP_SHARED`.",
        en: "`MAP_PRIVATE` triggers a **copy-on-write**: as soon as the child writes, it gets its own page. The parent does not see the change. To share, use `MAP_SHARED`.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Piège classique — partager ne veut pas dire protéger", en: "Classic trap — sharing does not mean protecting" },
  },
  {
    type: "paragraph",
    text: {
      fr: "`mmap` **partage** la mémoire, mais n'offre **aucune exclusivité**. L'exécution de `(*counter)++` n'est pas atomique : elle se décompose en *lire → incrémenter → écrire*. Deux processus peuvent lire la même valeur, et l'un écrase le résultat de l'autre. Le compteur ci-dessus vaut alors **souvent moins de 100**. C'est le problème central du chapitre suivant.",
      en: "`mmap` **shares** memory, but offers **no exclusivity**. Executing `(*counter)++` is not atomic: it breaks into *read → increment → write*. Two processes may read the same value, and one overwrites the other's result. The counter above then often amounts to **less than 100**. This is the central problem of the next chapter.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Atomicité de l'incrément", en: "Atomicity of the increment" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Avec une mémoire `MAP_SHARED`, l'instruction `x++` exécutée par deux processus donne toujours le double incrément attendu.",
        en: "With `MAP_SHARED` memory, the instruction `x++` executed by two processes always yields the expected double increment.",
      },
      answer: false,
      justification: {
        fr: "`x++` n'est pas une instruction atomique : c'est une séquence lire/modifier/écrire. Sans **exclusion mutuelle**, des exécutions entrelacées se perdent. La mémoire partagée règle l'**adressage**, pas la **synchronisation**.",
        en: "`x++` is not an atomic instruction: it is a read/modify/write sequence. Without **mutual exclusion**, interleaved executions are lost. Shared memory solves **addressing**, not **synchronization**.",
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
        title: { fr: "Choix des drapeaux", en: "Choosing the flags" },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Pour partager un entier entre le père et le fils **sans fichier**, on utilise `mmap` avec les drapeaux `MAP_______ | MAP_ANONYMOUS`.",
              en: "To share an integer between parent and child **without a file**, one uses `mmap` with the flags `MAP_______ | MAP_ANONYMOUS`.",
            },
            blanks: [
              {
                accepted: ["shared", "SHARED", "MAP_SHARED"],
                mistakes: [
                  {
                    match: ["private", "PRIVATE", "MAP_PRIVATE"],
                    feedback: {
                      fr: "`MAP_PRIVATE` provoque une copie sur écriture : rien n'est partagé.",
                      en: "`MAP_PRIVATE` triggers copy-on-write: nothing is shared.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "`MAP_SHARED | MAP_ANONYMOUS` : une région partagée, non adossée à un fichier.",
              en: "`MAP_SHARED | MAP_ANONYMOUS`: a shared region, not backed by a file.",
            },
          },
        ],
      },
      {
        title: { fr: "Rédaction — pourquoi le compteur est faux", en: "Writing — why the counter is wrong" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Expliquez, en citant les étapes de l'instruction, pourquoi un compteur partagé par `mmap` peut perdre des incréments.",
              en: "Explain, citing the steps of the instruction, why a counter shared with `mmap` can lose increments.",
            },
            solution: {
              fr: "`(*c)++` se déroule en trois étapes : (1) lire la valeur dans un registre, (2) l'incrémenter, (3) la réécrire en mémoire. Si P1 lit 5, puis P2 lit 5, et que P1 réécrit 6 avant que P2 ne réécrive, P2 écrase 6 par 6 : un incrément est perdu. L'**entrelacement** est la cause ; il faut une **section critique**.",
              en: "`(*c)++` runs in three steps: (1) read the value into a register, (2) increment it, (3) write it back to memory. If P1 reads 5, then P2 reads 5, and P1 writes back 6 before P2 writes back, P2 overwrites 6 with 6: an increment is lost. The **interleaving** is the cause; a **critical section** is needed.",
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
    type: "code",
    lang: "c",
    caption: {
      fr: "Squelette à recopier pour créer une mémoire partagée entre père et fils.",
      en: "Skeleton to copy for creating shared memory between parent and child.",
    },
    text: `size_t taille = sizeof(int);
int *partage = mmap(NULL, taille,
                    PROT_READ | PROT_WRITE,
                    MAP_SHARED | MAP_ANONYMOUS,
                    -1, 0);
if (partage == MAP_FAILED) { perror("mmap"); exit(EXIT_FAILURE); }
*partage = 0;              /* etat initial, AVANT le fork */

pid_t pid = fork();
if (pid == 0) {
    /* le fils ecrit dans partage */
    *partage = 42;
    munmap(partage, taille);
    _exit(0);
}
wait(NULL);
/* le pere lit *partage : il voit 42 */
munmap(partage, taille);`,
  },
  {
    type: "quote",
    text: {
      fr: "**Réflexe à réciter :** `mmap(NULL, taille, PROT_READ|PROT_WRITE, MAP_SHARED|MAP_ANONYMOUS, -1, 0)` — la projection se fait **avant** le `fork`, et l'on termine toujours par `munmap`. Le choix `MAP_SHARED` (partagé) ou `MAP_PRIVATE` (copie locale) est **la** question à trancher.",
      en: "**Reflex to recite:** `mmap(NULL, size, PROT_READ|PROT_WRITE, MAP_SHARED|MAP_ANONYMOUS, -1, 0)` — the mapping is done **before** the `fork`, and always ends with `munmap`. Choosing `MAP_SHARED` (shared) or `MAP_PRIVATE` (local copy) is **the** decision to make.",
    },
  },
];
