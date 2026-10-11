import type { Block } from "../../types";

export const chapterFour: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "**Projection d'un fichier en mémoire.** L'idée est d'utiliser la mémoire pour gérer les mises à jour du contenu d'un fichier : on associe un (segment de) fichier à une zone **contiguë** de la mémoire. Pourquoi ? Le (segment de) fichier peut ainsi être parcouru par des **accès par adresse**, sans utiliser `read` et `write`, comme les variables de notre programme. Quand ? Quand les accès au contenu du fichier sont **fréquents** : il ne faut pas utiliser un marteau-pilon pour écraser une mouche.",
      en: "**Mapping a file into memory.** The idea is to use memory to manage updates to a file's content: a (segment of a) file is associated with a **contiguous** region of memory. Why? The (segment of the) file can then be traversed by **address accesses**, without using `read` and `write`, just like our program's variables. When? When accesses to the file's content are **frequent**: one should not use a sledgehammer to crush a fly.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Comment faire : mmap", en: "1. How to do it: mmap" },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Signature complète de mmap.",
      en: "Full signature of mmap.",
    },
    text: `void *mmap(void *adr, long longueur, int protection,
           int options, int fd, long decalage);`,
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`adr`** : adresse de la zone mémoire demandée (`NULL` pour laisser le système choisir).",
          en: "**`adr`**: address of the requested memory region (`NULL` to let the system choose).",
        },
      },
      {
        text: {
          fr: "**`longueur`** : longueur de la projection.",
          en: "**`longueur`**: length of the mapping.",
        },
      },
      {
        text: {
          fr: "**`protection`** : `PROT_READ` et `PROT_WRITE` (autorisation de lecture et d'écriture).",
          en: "**`protection`**: `PROT_READ` and `PROT_WRITE` (permission to read and write).",
        },
      },
      {
        text: {
          fr: "**`options`** : `MAP_SHARED` ou `MAP_PRIVATE` (les écritures sont partagées par les différents processus ou non).",
          en: "**`options`**: `MAP_SHARED` or `MAP_PRIVATE` (writes are shared by the different processes or not).",
        },
      },
      {
        text: {
          fr: "**`fd`** : descripteur de fichier ouvert.",
          en: "**`fd`**: descriptor of an open file.",
        },
      },
      {
        text: {
          fr: "**`decalage`** : position dans le fichier de la projection (`0` signifie à partir du début du fichier).",
          en: "**`decalage`**: position in the file of the mapping (`0` means from the beginning of the file).",
        },
      },
      {
        text: {
          fr: "**Retour :** un pointeur sur une zone mémoire, ou `MAP_FAILED` si échec.",
          en: "**Return:** a pointer to a memory region, or `MAP_FAILED` on failure.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Découplage : munmap", en: "2. Unmapping: munmap" },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Signature de munmap.",
      en: "Signature of munmap.",
    },
    text: `int munmap(void *adr, long longueur);`,
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`adr`** : début de la zone mémoire à découpler.",
          en: "**`adr`**: start of the memory region to unmap.",
        },
      },
      {
        text: {
          fr: "**`longueur`** : longueur de la zone à découpler.",
          en: "**`longueur`**: length of the region to unmap.",
        },
      },
      {
        text: {
          fr: "Si échec, retourne `-1`, sinon retourne `0`.",
          en: "On failure it returns `-1`, otherwise it returns `0`.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Routine d'erreur utilisée par tous les exemples.",
      en: "Error routine used by all examples.",
    },
    text: `void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}`,
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "3. Projection privée d'un fichier (MAP_PRIVATE)",
      en: "3. Private mapping of a file (MAP_PRIVATE)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Avec `MAP_PRIVATE`, les écritures ne sont **pas** partagées par les différents processus. On ouvre le fichier en lecture, on le projette en lecture seule, puis on le découple.",
      en: "With `MAP_PRIVATE`, writes are **not** shared by the different processes. The file is opened for reading, mapped read-only, then unmapped.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Projection privée d'un fichier en mémoire : on compte sa taille avec getTaille.",
      en: "Private mapping of a file into memory: its size is measured with getTaille.",
    },
    text: `int main(int argc, char *argv[]) {
    char *fichier = argv[1];
    int t = getTaille(fichier);
    int fd = open(fichier, O_RDONLY, 0600);
    if (fd == -1) erreur("open");
    char *s = mmap(NULL,
                   t,
                   PROT_READ,
                   MAP_PRIVATE,
                   fd,
                   0);
    if (s == MAP_FAILED) erreur("mmap");
    if (close(fd) == -1) erreur("close");
    printf("%s", s);
    if (munmap(s, t) == -1) erreur("munmap");
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "MAP_PRIVATE", en: "MAP_PRIVATE" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Avec `MAP_PRIVATE`, les écritures d'un processus dans la zone projetée sont partagées avec les autres processus.",
        en: "With `MAP_PRIVATE`, a process's writes in the mapped region are shared with the other processes.",
      },
      answer: false,
      justification: {
        fr: "`MAP_PRIVATE` signifie que les écritures ne sont **pas** partagées par les différents processus ; pour partager, on utilise `MAP_SHARED`.",
        en: "`MAP_PRIVATE` means writes are **not** shared by the different processes; to share, one uses `MAP_SHARED`.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "4. Mémoire partagée (MAP_SHARED)",
      en: "4. Shared memory (MAP_SHARED)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un même (segment de) fichier peut être **couplé à plusieurs zones de la mémoire, de processus différents** : c'est un espace mémoire **partagé**. Une modification dans l'une des projections partagées d'un segment, ou sur le segment lui-même, est répercutée **immédiatement** sur le segment (fichier) et sur l'ensemble des projections partagées.",
      en: "One and the same (segment of a) file can be **linked to several memory regions of different processes**: this is a **shared** memory space. A change in one of the shared mappings of a segment, or on the segment itself, is reflected **immediately** on the segment (file) and on all the shared mappings.",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "mmap-shared",
        caption: {
          fr: "MAP_SHARED couple plusieurs espaces d'adressage à un même segment.",
          en: "MAP_SHARED links several address spaces to one and the same segment.",
        },
        nodes: [
          { id: "paddr", label: { fr: "Segment partagé", en: "Shared segment" }, x: 210, y: 0, shape: "box", tone: "soft" },
          { id: "padr", label: { fr: "Processus A", en: "Process A" }, x: 0, y: -70, shape: "box", tone: "primary" },
          { id: "cadr", label: { fr: "Processus B", en: "Process B" }, x: 0, y: 70, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "padr", to: "paddr", label: { fr: "projection", en: "mapping" } },
          { from: "cadr", to: "paddr", label: { fr: "projection", en: "mapping" } },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Méthode de création :** créer un fichier binaire (`open`), lui associer une zone de mémoire (`lseek`, `write`, `mmap`), puis le détruire (`close`, `unlink`).",
      en: "**Creation method:** create a binary file (`open`), associate a memory region with it (`lseek`, `write`, `mmap`), then destroy it (`close`, `unlink`).",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Partage de mémoire : N est la taille du tableau T, création par fichier.",
      en: "Shared memory: N is the size of array T, created through a file.",
    },
    text: `const int N = 10;
int *T;

void creation() {
    int fd = open("temp", O_RDWR | O_CREAT | O_TRUNC, 0600);
    if (fd == -1) erreur("open");
    if (lseek(fd, N * sizeof(int), 0) == -1) erreur("lseek");
    if (write(fd, "", sizeof(char)) == -1) erreur("write");
    T = mmap(NULL, N * sizeof(int), PROT_READ | PROT_WRITE,
             MAP_SHARED, fd, 0);
    if (T == MAP_FAILED) erreur("mmap");
    if (close(fd) == -1) erreur("close");
    if (unlink("temp") == -1) erreur("unlink");
}

void fils(int i) {
    T[i] = i;
    exit(0);
}

void pere() {
    T[0] = 0;
    while (wait(NULL) == -1) erreur("wait");
    for (int i = 0; i < N; i++)
        printf("T[%d] = %d\\n", i, T[i]);
    if (munmap(T, N * sizeof(int)) == -1) erreur("munmap");
    exit(0);
}

int main(int argc, char *argv[]) {
    creation();
    for (int i = 1; i < N; i++) {
        switch (fork()) {
        case -1: erreur("fork");
        case 0: fils(i);
        }
    }
    pere();
}`,
  },
  {
    type: "quote",
    text: {
      fr: "**Exclusion mutuelle n'est pas garantie !**",
      en: "**Mutual exclusion is not guaranteed!**",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Mémoire partagée et exclusion mutuelle", en: "Shared memory and mutual exclusion" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Avec `MAP_SHARED`, la mémoire partagée entre plusieurs processus garantit à elle seule l'exclusion mutuelle.",
        en: "With `MAP_SHARED`, memory shared between several processes by itself guarantees mutual exclusion.",
      },
      answer: false,
      justification: {
        fr: "Non : **« Exclusion mutuelle n'est pas garantie ! »**. La projection donne un accès par adresse partagé, mais ne synchronise pas les accès concurrents.",
        en: "No: **\"Mutual exclusion is not guaranteed!\"**. The mapping gives a shared address access, but does not synchronize concurrent accesses.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Partager des écritures", en: "Sharing writes" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quelle option de `mmap` faut-il choisir pour que les écritures soient **partagées** par les différents processus ?",
        en: "Which `mmap` option must be chosen so that writes are **shared** by the different processes?",
      },
      options: [
        {
          text: { fr: "`MAP_SHARED`", en: "`MAP_SHARED`" },
        },
        {
          text: { fr: "`MAP_PRIVATE`", en: "`MAP_PRIVATE`" },
        },
        {
          text: { fr: "`PROT_WRITE`", en: "`PROT_WRITE`" },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "`options` vaut `MAP_SHARED` (écritures partagées par les différents processus) ou `MAP_PRIVATE` (écritures non partagées). `PROT_WRITE` est un droit de `protection`, pas une option de partage.",
        en: "`options` is `MAP_SHARED` (writes shared by the different processes) or `MAP_PRIVATE` (writes not shared). `PROT_WRITE` is a `protection` right, not a sharing option.",
      },
    },
  },
];
