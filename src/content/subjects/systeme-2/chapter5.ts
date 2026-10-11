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
      fr: "**Deux processeurs** exécutent en parallèle, chacun, `b = a; b++; a = b;` sur une variable partagée `a`. Résultat attendu : `a = a + 2`. Résultat parfois obtenu : `a = a + 1`. Rien ne manque, personne ne s'est trompé : le résultat dépend de l'**ordre d'entrelacement** des instructions (le **non-déterminisme**). Ce chapitre explique pourquoi, puis construit les algorithmes de l'**exclusion mutuelle** : les stratégies du TD4 (`occ`, `tour`, `demande`, renonce, Dekker, Peterson) et la généralisation à n processus du CM2.",
      en: "**Two processors** run in parallel, each executing `b = a; b++; a = b;` on a shared variable `a`. Expected result: `a = a + 2`. Result sometimes obtained: `a = a + 1`. Nothing is missing and nobody made a mistake: the result depends on the **interleaving order** of instructions (**non-determinism**). This chapter explains why, then builds the **mutual exclusion** algorithms: the TD4 strategies (`occ`, `tour`, `demande`, renounce, Dekker, Peterson) and the n-process generalization from lecture 2.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Du parallélisme au non-déterminisme", en: "1. From parallelism to non-determinism" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **communication entre processus** recouvre trois situations : le **passage d'information** d'un processus à un autre (exemple : `ls | wc -l`), l'**accès aux ressources partagées** avec des processus en compétition, ce qui mène à l'**exclusion mutuelle** (exemple : la réservation de la dernière place d'un vol), et la **synchronisation**, annoncée comme prochaine séance (exemple : le modèle producteur-consommateur).",
      en: "**Interprocess communication** covers three situations: **passing information** from one process to another (example: `ls | wc -l`), **access to shared resources** by competing processes, which leads to **mutual exclusion** (example: booking the last seat of a flight), and **synchronization**, announced as the next session (example: the producer-consumer model).",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Non-déterminisme :** quand plusieurs programmes s'exécutent en parallèle, on ne peut faire aucune hypothèse sur leur vitesse d'exécution ni sur leur entrelacement, qui peuvent être différents à chaque exécution.",
          en: "**Non-determinism:** when several programs run in parallel, no hypothesis can be made about their execution speed or their interleaving, which may differ at every run.",
        },
      },
      {
        text: {
          fr: "Si l'accès n'est pas contrôlé, le résultat de l'exécution du programme **pourra dépendre de l'ordre d'entrelacement** des instructions.",
          en: "If access is not controlled, the result of the program execution **may depend on the interleaving order** of instructions.",
        },
      },
      {
        text: {
          fr: "Un programme pourra à chaque exécution donner des **résultats différents et parfois indésirables**.",
          en: "A program may give **different and sometimes undesirable results** at each execution.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Illustration : la réservation d'avion", en: "Illustration: the airline booking" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Alice demande une réservation : la base de données indique « fauteuil 6B disponible », puis « fauteuil 6B assigné à Alice et marqué occupé ». Bob demande à son tour une réservation : il lit lui aussi « fauteuil 6B disponible » avant qu'Alice n'ait écrit, puis marque le fauteuil occupé. La dernière place a été vendue deux fois.",
      en: "Alice asks for a reservation: the database says “seat 6B available”, then “seat 6B assigned to Alice and marked occupied”. Bob then asks for a reservation: he also reads “seat 6B available” before Alice wrote, then marks the seat occupied. The last seat was sold twice.",
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
    type: "heading",
    level: 4,
    text: { fr: "Le compteur partagé : b = a; b++; a = b", en: "The shared counter: b = a; b++; a = b" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Deux opérations en parallèle sur `a` (variable partagée) et `b` (variable privée à chaque processus). **Cliquez sur « étape suivante »** dans l'ordre que vous voulez : chaque pas simule un entrelacement possible. Résultat attendu : `a = a + 2` ; résultat obtenu parfois : `a = a + 1`.",
      en: "Two parallel operations on `a` (shared variable) and `b` (variable private to each process). **Click “next step”** in whatever order you like: each step simulates a possible interleaving. Expected result: `a = a + 2`; result sometimes obtained: `a = a + 1`.",
    },
  },
  {
    type: "interleaving",
    spec: {
      id: "race-counter",
      caption: {
        fr: "Non-déterminisme : entrelacez les deux exécutions de b = a; b++; a = b; et observez le résultat final.",
        en: "Non-determinism: interleave the two runs of b = a; b++; a = b; and watch the final result.",
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
    type: "checkpoint",
    concept: { fr: "Non-déterminisme et i++", en: "Non-determinism and i++" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pourquoi i++ peut-il produire i = 1 alors que deux processeurs ont chacun exécuté i++ ?",
        en: "Why can i++ produce i = 1 although two processors each executed i++?",
      },
      options: [
        {
          text: {
            fr: "L'opération se décompose en plusieurs instructions non atomiques, dans un ordre d'entrelacement non maîtrisé.",
            en: "The operation breaks into several non-atomic instructions, in an uncontrolled interleaving order.",
          },
        },
        { text: { fr: "Le processeur est trop lent.", en: "The processor is too slow." } },
        { text: { fr: "La mémoire partagée est trop petite.", en: "Shared memory is too small." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "i++ = lire, incrémenter, écrire. Si les deux processeurs lisent la valeur avant qu'aucun n'ait écrit, la seconde écriture écrase la première : résultat 1 au lieu de 2. C'est le non-déterminisme : le résultat dépend de l'ordre d'entrelacement.",
        en: "i++ = read, increment, write. If both processors read the value before either has written, the second write overwrites the first: result 1 instead of 2. That is non-determinism: the result depends on the interleaving order.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Section critique et exclusion mutuelle", en: "2. Critical section and mutual exclusion" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **section critique** est une partie d'un programme dont l'exécution ne doit pas s'entrelacer avec d'autres exécutions de ce même programme : indivisibilité ou **atomicité** de la section critique. Une fois qu'un processus y entre, il faut lui permettre de terminer cette section sans permettre à d'autres processus de modifier ces mêmes données : la section critique doit être **verrouillée** afin de devenir atomique.",
      en: "A **critical section** is a part of a program whose execution must not interleave with other executions of the same program: indivisibility or **atomicity** of the critical section. Once a process enters it, it must be allowed to finish this section without letting other processes modify the same data: the critical section must be **locked** in order to become atomic.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Solution : l'exclusion mutuelle.** Méthode ou algorithme qui garantit qu'à tout instant **un processus au plus** exécute les instructions de sa section critique. Autrement dit, un algorithme d'exclusion mutuelle garantit l'**atomicité** des instructions de la section critique.",
      en: "**Solution: mutual exclusion.** A method or algorithm that guarantees that at any time **at most one process** executes the instructions of its critical section. In other words, a mutual-exclusion algorithm guarantees the **atomicity** of the critical-section instructions.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Les quatre propriétés de l'exclusion mutuelle", en: "The four properties of mutual exclusion" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**1. Exclusion mutuelle :** par définition, au plus un seul processus en SC.",
          en: "**1. Mutual exclusion:** by definition, at most one process in the SC.",
        },
      },
      {
        text: {
          fr: "**2. Absence de blocage permanent :** si plusieurs processus attendent pour entrer en SC, et si aucun processus n'est déjà en SC, alors un des processus qui attend doit pouvoir entrer en SC au bout d'un temps fini (pas d'interblocage).",
          en: "**2. Absence of permanent blocking:** if several processes wait to enter the SC, and no process is already in the SC, then one of the waiting processes must be able to enter the SC within finite time (no deadlock).",
        },
      },
      {
        text: {
          fr: "**3. Condition de progression :** un processus qui se trouve hors de sa SC et hors du protocole contrôlant l'accès à la SC ne doit pas empêcher un autre processus d'entrer dans sa SC.",
          en: "**3. Progress condition:** a process that is outside its SC and outside the protocol controlling access to the SC must not prevent another process from entering its SC.",
        },
      },
      {
        text: {
          fr: "**4. Équité :** un processus qui veut entrer en SC ne doit pas attendre son tour indéfiniment (absence de famine).",
          en: "**4. Fairness:** a process that wants to enter the SC must not wait for its turn indefinitely (no starvation).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Identifier une propriété", en: "Identify a property" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quelle propriété garantit qu'un processus qui veut entrer en SC ne doit pas attendre son tour indéfiniment ?",
        en: "Which property guarantees that a process wanting to enter the SC must not wait for its turn indefinitely?",
      },
      options: [
        { text: { fr: "Équité (absence de famine).", en: "Fairness (no starvation)." } },
        { text: { fr: "Exclusion mutuelle.", en: "Mutual exclusion." } },
        { text: { fr: "Absence d'attente active.", en: "No busy waiting." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "C'est la propriété 4, l'Équité (absence de famine). L'exclusion mutuelle se limite à « au plus un processus en SC » ; l'attente active n'est pas une propriété exigée, c'est un inconvénient des solutions logicielles.",
        en: "It is property 4, Fairness (no starvation). Mutual exclusion is only “at most one process in the SC”; busy waiting is not a required property, it is a drawback of software solutions.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'exclusion mutuelle n'est pas garantie si...", en: "Mutual exclusion is not guaranteed if..." },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "un processus peut entrer en SC alors qu'un autre s'y trouve déjà ;",
          en: "a process can enter the SC while another is already in it;",
        },
      },
      {
        text: {
          fr: "un processus désirant entrer en SC ne peut pas y entrer alors qu'il n'y a aucun processus en SC ;",
          en: "a process wanting to enter the SC cannot enter although no process is in the SC;",
        },
      },
      {
        text: {
          fr: "un processus désirant entrer en SC n'y entrera jamais car il ne sera jamais sélectionné lorsqu'il est en concurrence avec d'autres processus.",
          en: "a process wanting to enter the SC will never enter because it will never be selected when competing with other processes.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Protocoles d'entrée et de sortie", en: "Entry and exit protocols" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Il faut définir un **protocole d'entrée en SC** (ensemble d'instructions qui permet de vérifier qu'aucun autre processus n'est en SC puis d'entrer) et un **protocole de sortie de SC** (ensemble d'instructions qui permet à un processus ayant terminé sa SC d'avertir les autres processus en attente que la voie est libre). Structure d'un processus : Début → Section non critique → Protocole d'entrée → Section Critique → Protocole de sortie → Section non critique → Fin.",
      en: "An **entry protocol into the SC** must be defined (a set of instructions that checks that no other process is in the SC, then enters) and an **exit protocol from the SC** (a set of instructions that lets a process that finished its SC warn waiting processes that the way is free). Process structure: Start → Non-critical section → Entry protocol → Critical Section → Exit protocol → Non-critical section → End.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Forme générale (TD4) : entreeSC(), Section Critique, sortieSC().",
      en: "General shape (TD4): entreeSC(), Critical Section, sortieSC().",
    },
    text: `entreeSC ();
<Section Critique>
sortieSC ();`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Trois grandes familles d'algorithmes", en: "Three families of algorithms" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Solutions logicielles** avec attente active, sans arbitrage ;",
          en: "**Software solutions** with busy waiting, without arbitration;",
        },
      },
      {
        text: {
          fr: "**Solutions matérielles** avec attente active, sans arbitrage (exemple : masquage des interruptions) ;",
          en: "**Hardware solutions** with busy waiting, without arbitration (example: masking interrupts);",
        },
      },
      {
        text: {
          fr: "**Solutions avec blocage et attente passive, avec arbitrage** (exemple : sémaphores).",
          en: "**Solutions with blocking and passive wait, with arbitration** (example: semaphores).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Les trois familles", en: "The three families" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Les solutions avec blocage et attente passive nécessitent un arbitrage (par exemple les sémaphores).",
        en: "Solutions with blocking and passive wait require arbitration (for example semaphores).",
      },
      answer: true,
      justification: {
        fr: "C'est la troisième famille du CM2 : blocage et attente passive avec arbitrage, dont l'exemple est les sémaphores. Les deux premières familles fonctionnent avec attente active et sans arbitrage.",
        en: "That is the third family from lecture 2: blocking and passive wait with arbitration, whose example is semaphores. The first two families work with busy waiting and without arbitration.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'attente active (busy waiting)", en: "Busy waiting" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Principe général de l'attente active : le processus scrute en boucle une condition qui indique si la SC est libre. **Inconvénient : consommation inutile de temps CPU.**",
      en: "General principle of busy waiting: the process spins in a loop on a condition that tells whether the SC is free. **Drawback: useless CPU time consumption.**",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Principe général de l'attente active (CM2).",
      en: "General busy-waiting principle (lecture 2).",
    },
    text: `entreeSC ();
while (condition indique SC non libre)
    attente;
<Section Critique>
modifier la condition pour refléter SC libre;
sortieSC ();`,
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "process-states",
        caption: {
          fr: "États d'un processus : élu, prêt, bloqué. En attente active, le processus reste actif et consomme le processeur ; dans les solutions avec blocage, le processus est retiré du processeur jusqu'à l'événement attendu.",
          en: "Process states: running, ready, blocked. With busy waiting, the process stays active and consumes the CPU; in blocking solutions, the process is removed from the CPU until the awaited event.",
        },
        nodes: [
          { id: "elu", label: { fr: "Élu", en: "Running" }, x: 220, y: 0, shape: "circle", tone: "primary" },
          { id: "pret", label: { fr: "Prêt", en: "Ready" }, x: 0, y: 0, shape: "circle" },
          { id: "bloque", label: { fr: "Bloqué", en: "Blocked" }, x: 440, y: 0, shape: "circle" },
        ],
        edges: [
          { from: "pret", to: "elu", label: { fr: "élection", en: "scheduled" } },
          { from: "elu", to: "pret", label: { fr: "quantum écoulé", en: "quantum expired" } },
          { from: "elu", to: "bloque", label: { fr: "E/S / ressource", en: "I/O / resource" } },
          { from: "bloque", to: "pret", label: { fr: "réveil", en: "wake-up" } },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Exemple simple et incorrect : la variable libre", en: "Simple and incorrect example: the libre variable" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Utilisation d'une variable partagée `libre` : le test puis l'écriture ne sont pas atomiques. Les deux processus peuvent voir `libre == true` en même temps et entrer tous les deux. **Même problème que avant !**",
      en: "Use of a shared variable `libre`: the test then the write are not atomic. Both processes may see `libre == true` at the same time and both enter. **Same problem as before!**",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Variable libre : exemple simple et incorrect (CM2).",
      en: "The libre variable: simple and incorrect example (lecture 2).",
    },
    text: `bool libre = true;   /* variable partagée */

/* processus A, et processus B à l'identique */
while (libre == false)
    attente;
libre = false;
<Section Critique>
libre = true;`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Deuxième tentative : à tour de rôle (tour)", en: "Second attempt: taking turns (tour)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "`tour` est une variable partagée qui indique le processus qui doit entrer en SC : quand `tour = i`, le processus i peut entrer. Exclusion mutuelle : **OK !** Problème : la propriété 3 — aucun processus suspendu en dehors d'une SC ne doit bloquer les autres.",
      en: "`tour` is a shared variable that tells which process must enter the SC: when `tour = i`, process i may enter. Mutual exclusion: **OK!** Problem: property 3 — no process suspended outside an SC may block the others.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "À tour de rôle : tour = i, le processus i peut entrer (CM2).",
      en: "Taking turns: tour = i, process i may enter (lecture 2).",
    },
    text: `int tour = A;   /* indique le processus qui doit entrer en SC */

/* processus A */
while (tour != A)
    attente;
<Section Critique>
tour = B;

/* processus B */
while (tour != B)
    attente;
<Section Critique>
tour = A;`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Le tour de rôle et la condition de progression", en: "Taking turns and the progress condition" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Le protocole « chacun son tour » (variable tour) garantit la condition de progression.",
        en: "The “taking turns” protocol (variable tour) guarantees the progress condition.",
      },
      answer: false,
      justification: {
        fr: "Si le processus dont c'est le tour ne veut pas entrer en SC, tour ne change pas et l'autre attend indéfiniment : un processus hors SC et hors protocole bloque les autres. La propriété 3 (Condition de progression) est violée.",
        en: "If the process whose turn it is does not want to enter the SC, tour never changes and the other waits forever: a process outside the SC and outside the protocol blocks the others. Property 3 (progress condition) is violated.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Critique des solutions par logiciel", en: "Criticism of software solutions" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Difficiles à programmer ! Et à comprendre !", en: "Hard to program! And to understand!" } },
      {
        text: {
          fr: "Les processus qui requièrent l'entrée dans leur SC sont actifs, consommant ainsi du temps de processeur.",
          en: "Processes requesting entry into their SC are active, thus consuming processor time.",
        },
      },
      {
        text: {
          fr: "Pour de longues sections critiques, il serait préférable de bloquer les processus qui doivent attendre (solutions avec blocage et attente passive).",
          en: "For long critical sections, it would be preferable to block the processes that must wait (solutions with blocking and passive wait).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Les stratégies du TD4 : l'exclusion mutuelle logicielle", en: "3. The TD4 strategies: software mutual exclusion" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Modèle de machine (TD4) : deux processeurs identiques, chacun exécutant son propre flot d'instructions, accédant directement à la même mémoire physique ; on ne prend pas en compte caches, protection ou mémoire virtuelle. Il faut résoudre l'exclusion mutuelle **sans support matériel autre que l'ordre des écritures en mémoire**. On différencie les processeurs dans le pseudo-code par la valeur **i** pour le premier et la valeur **j** pour l'autre.",
      en: "Machine model (TD4): two identical processors, each running its own instruction flow, directly accessing the same physical memory; caches, access protection and virtual memory are ignored. Mutual exclusion must be solved **with no hardware support other than the order of memory writes**. In pseudo-code, the processors are told apart by the value **i** for the first one and **j** for the other.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.2 Utilisation d'un booléen d'occupation", en: "2.2 Using an occupation boolean" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un processeur qui rentre dans la section critique modifie un booléen nommé `occ` pour indiquer qu'il l'utilise.",
      en: "A processor entering the critical section modifies a boolean named `occ` to indicate that it uses it.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.2 : le booléen d'occupation occ.",
      en: "TD4 2.2: the occupation boolean occ.",
    },
    text: `bool occ = false;   /* booléen d'occupation partagé */

entreeSC(i) {
    while (occ) attente;   /* la SC est occupée */
    occ = true;
}
sortieSC(i) {
    occ = false;
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.3 Chacun son tour", en: "2.3 Each in his turn" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un processeur qui veut rentrer dans la section critique doit attendre que ce soit son tour. Une fois la section critique exécutée, il donne la main à l'autre.",
      en: "A processor that wants to enter the critical section must wait until it is its turn. Once the critical section is executed, it hands over to the other.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.3 : chacun son tour, avec i et j.",
      en: "TD4 2.3: each in his turn, with i and j.",
    },
    text: `int tour = i;   /* le processus qui doit entrer en SC */

entreeSC(i) {
    while (tour != i) attente;   /* j'attends mon tour */
}
sortieSC(i) {
    tour = j;   /* je donne la main à l'autre */
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.4 Annonce de sa volonté d'entrer en SC", en: "2.4 Announcing one's will to enter the SC" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Au lieu de dire que l'on est dans la section critique, on indique que l'on **veut y entrer** : un tableau de 2 booléens indexé par i et j. On attend que l'autre processeur n'ait plus la volonté d'entrer pour y entrer.",
      en: "Instead of saying one is in the critical section, one indicates one **wants to enter** it: an array of 2 booleans indexed by i and j. One waits until the other processor no longer wants to enter, then enters.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.4 : annonce de sa volonté, tableau demande[2].",
      en: "TD4 2.4: announcing one's will, the array demande[2].",
    },
    text: `bool demande[2] = { false, false };

entreeSC(i) {
    demande[i] = true;           /* j'annonce ma volonté d'entrer */
    while (demande[j]) attente;  /* je n'entre pas tant que l'autre veut */
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.5 Annonce de sa volonté, avec renonce", en: "2.5 Announcing one's will, with renounce" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Comme au 2.4, un processeur annonce sa volonté de rentrer dans la section critique. Mais un processeur n'ayant pas réussi à rentrer (car l'autre a également fait l'annonce de sa volonté) **annule son annonce et recommence**.",
      en: "As in 2.4, a processor announces its will to enter the critical section. But a processor that failed to enter (because the other also announced its will) **withdraws its announcement and starts over**.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.5 : annonce avec renonce — je renonce puis je réannonce.",
      en: "TD4 2.5: announcement with renounce — I renounce then announce again.",
    },
    text: `bool demande[2] = { false, false };

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) {
        demande[i] = false;   /* je renonce */
        attente;              /* un instant */
        demande[i] = true;    /* je réannonce ma volonté */
    }
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.6 Demande et renonce si ce n'est pas mon tour", en: "2.6 Request and renounce if it is not my turn" },
  },
  {
    type: "paragraph",
    text: {
      fr: "On utilise à la fois la notion de **demande** (tableau de booléens) et la notion de **tour**. Le processeur fait une demande pour entrer en section critique et renonce si l'autre processeur a également fait la demande et qu'il ne s'agit pas de son tour. Sinon, le processeur rentre.",
      en: "Both the notion of **request** (array of booleans) and the notion of **turn** are used. The processor requests entry into the critical section and renounces if the other processor has also requested and it is not its turn. Otherwise, the processor enters.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.6 : demande + tour — je renonce et je redemande aussitôt.",
      en: "TD4 2.6: request + turn — I renounce and request again right away.",
    },
    text: `bool demande[2] = { false, false };
int tour = i;

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) {
        if (tour != i) {          /* l'autre veut et ce n'est pas mon tour */
            demande[i] = false;   /* je renonce */
            demande[i] = true;    /* et je redemande aussitôt */
        }
    }
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.7 Dekker 1966", en: "2.7 Dekker 1966" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les deux points importants de la solution proposée par Dekker en 1966 : **si on renonce, on attend son tour avant de redemander** ; **si c'est son tour, on attend que l'autre ait renoncé avant d'entrer**.",
      en: "The two important points of the solution proposed by Dekker in 1966: **if one renounces, one waits for one's turn before requesting again**; **if it is one's turn, one waits for the other to have renounced before entering**.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.7 : Dekker 1966 — on attend son tour avant de redemander.",
      en: "TD4 2.7: Dekker 1966 — one waits for one's turn before requesting again.",
    },
    text: `bool demande[2] = { false, false };
int tour = i;

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) {
        if (tour != i) {                /* ce n'est pas mon tour */
            demande[i] = false;         /* je renonce */
            while (tour != i) attente;  /* j'attends mon tour avant de redemander */
            demande[i] = true;          /* puis je redemande */
        }
    }
}
sortieSC(i) {
    tour = j;          /* je donne la main à l'autre */
    demande[i] = false;
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.8 Peterson 1981", en: "2.8 Peterson 1981" },
  },
  {
    type: "paragraph",
    text: {
      fr: "En 1981, Peterson a proposé une solution avec un code plus simple. L'idée : utiliser une variable **`dernier`** qui est à la valeur du dernier à vouloir entrer dans la section critique. C'est alors à lui d'attendre. **On se détache de la notion de tour.**",
      en: "In 1981, Peterson proposed a solution with simpler code. The idea: use a variable **`dernier`** holding the value of the last one to want to enter the critical section. Then it is up to him to wait. **We move away from the notion of turn.**",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "TD4 2.8 / CM2 : Peterson 1981, avec demande et dernier.",
      en: "TD4 2.8 / lecture 2: Peterson 1981, with demande and dernier.",
    },
    text: `bool demande[2] = { false, false };
int dernier;   /* le dernier à vouloir entrer en SC */

entreeSC(i) {
    demande[i] = true;   /* je demande à entrer */
    dernier = i;         /* je suis le dernier demandeur */
    while (demande[j] && dernier == i) attente;  /* c'est donc à moi d'attendre */
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "paragraph",
    text: {
      fr: "**Pourquoi c'est correct :** si les deux veulent entrer, `dernier` prend la valeur **du dernier** qui l'a écrit. Le dernier arrivé **cède** donc la place : au moins un processus franchit le `while`. Comme les deux ne peuvent pas satisfaire en même temps `dernier == i` et `dernier == j`, l'exclusion mutuelle tient, et personne n'attend indéfiniment.",
      en: "**Why it is correct:** if both want to enter, `dernier` takes the value **of the last one** who wrote it. The last arrival therefore **yields**: at least one process passes the `while`. Since both cannot satisfy `dernier == i` and `dernier == j` at the same time, mutual exclusion holds, and nobody waits indefinitely.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "La variable dernier de Peterson", en: "Peterson's dernier variable" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans l'algorithme de Peterson, que signifie l'affectation `dernier = i` juste après `demande[i] = true` ?",
        en: "In Peterson's algorithm, what does the assignment `dernier = i` right after `demande[i] = true` mean?",
      },
      options: [
        {
          text: {
            fr: "i est le dernier à vouloir entrer en SC : c'est donc à lui d'attendre, et l'autre peut entrer.",
            en: "i is the last one wanting to enter the SC: so it is up to him to wait, and the other can enter.",
          },
        },
        { text: { fr: "Le processus i entre toujours en premier.", en: "Process i always enters first." } },
        { text: { fr: "Personne ne peut plus entrer.", en: "Nobody can enter anymore." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "dernier = i indique que i est le dernier demandeur : la condition while (demande[j] && dernier == i) bloque i, et j peut entrer. On se détache de la notion de tour.",
        en: "dernier = i says that i is the last requester: the condition while (demande[j] && dernier == i) blocks i, and j can enter. We move away from the notion of turn.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Généralisation de Peterson pour n processus", en: "Peterson's generalization for n processes" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour n processus, `dernier` est un tableau de **n − 1 entiers** qui représente une file d'attente avec **n − 1 niveaux** : `dernier[k]` est le dernier processus arrivé au niveau k. `niveau` est un tableau de n entiers initialisés à **−1** : `niveau[i]` est le niveau du processus i. Chaque processus doit franchir n − 1 niveaux.",
      en: "For n processes, `dernier` is an array of **n − 1 integers** representing a queue with **n − 1 levels**: `dernier[k]` is the last process that reached level k. `niveau` is an array of n integers initialized to **−1**: `niveau[i]` is the level of process i. Each process must clear n − 1 levels.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "CM2 : Peterson généralisé à n processus, pour le processus i.",
      en: "Lecture 2: Peterson generalized to n processes, for process i.",
    },
    text: `int niveau[n];     /* niveau[i] : le niveau du processus i, initialisés à -1 */
int dernier[n-1];  /* dernier[k] : le dernier processus arrivé au niveau k */

for (int k = 0; k < n - 1; k++) {
    niveau[i] = k;   /* j'arrive au niveau k */
    dernier[k] = i;  /* et je suis le dernier au niveau k */
    while (dernier[k] == i &&
           il existe j != i avec niveau[j] >= k)
        attente;
}
/* Section Critique */
niveau[i] = -1;`,
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. Synchronisation : le modèle producteur-consommateur", en: "4. Synchronization: the producer-consumer model" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le modèle **producteur-consommateur** est l'exemple de synchronisation annoncé au CM2 (« Synchronisation — prochaine séance »). Un **producteur** dépose des éléments dans un tampon borné ; un **consommateur** les retire. Essayez :",
      en: "The **producer-consumer** model is the synchronization example announced in lecture 2 (“Synchronization — next session”). A **producer** drops items into a bounded buffer; a **consumer** removes them. Try it:",
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
      fr: "Le producteur ne doit **jamais** déposer dans un tampon **plein** (sinon il écrase des données non lues) et le consommateur ne doit **jamais** retirer d'un tampon **vide** (sinon il lit n'importe quoi). Ce problème relève de la **synchronisation**, c'est-à-dire de la famille des solutions avec **blocage et attente passive avec arbitrage** (exemple : sémaphores), vue en fin de CM2.",
      en: "The producer must **never** deposit into a **full** buffer (otherwise it overwrites unread data) and the consumer must **never** remove from an **empty** buffer (otherwise it reads garbage). This problem belongs to **synchronization**, that is, the family of solutions with **blocking and passive wait with arbitration** (example: semaphores), seen at the end of lecture 2.",
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
        title: { fr: "1. Introduction", en: "1. Introduction" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Quel est le code pseudo-assembleur de l'instruction i++ ?",
              en: "What is the pseudo-assembly code of the instruction i++?",
            },
            solution: {
              fr: "i++ se décompose en trois instructions élémentaires : lire la valeur de i dans un registre, l'incrémenter de 1, puis écrire le registre dans i.\n\nLOAD R, i\nADD R, 1\nSTORE i, R",
              en: "i++ breaks down into three elementary instructions: load the value of i into a register, increment it by 1, then write the register into i.\n\nLOAD R, i\nADD R, 1\nSTORE i, R",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Dans le cas général, si un des processeurs fait i++ la valeur de la variable est incrémentée de 1. Si chacun des deux processeurs fait i++, on s'attendrait à ce que la variable soit incrémentée de deux. Quel scénario d'exécution de i++ produit un résultat inconsistant ? On pourra expliciter 2 exécutions différentes.",
              en: "In the general case, if one of the processors does i++ the variable value is incremented by 1. If each of the two processors does i++, one would expect the variable to be incremented by two. Which execution scenario of i++ yields an inconsistent result? One may spell out 2 different executions.",
            },
            solution: {
              fr: "Tout entrelacement où les deux processeurs lisent i avant que l'un des deux n'ait écrit aboutit à i = 1 au lieu de i = 2 : un des deux écrits écrase l'autre.",
              en: "Any interleaving in which both processors read i before either has written ends with i = 1 instead of i = 2: one of the two writes overwrites the other.",
            },
            solutionItems: [
              {
                fr: "Exécution 1 : P1 lit i (0), P2 lit i (0), P1 incrémente et écrit (i = 1), P2 incrémente et écrit (i = 1) → résultat 1 au lieu de 2.",
                en: "Execution 1: P1 reads i (0), P2 reads i (0), P1 increments and writes (i = 1), P2 increments and writes (i = 1) → result 1 instead of 2.",
              },
              {
                fr: "Exécution 2 : P1 lit i (0), P1 incrémente, P2 lit i (0), P1 écrit (i = 1), P2 incrémente et écrit (i = 1) → résultat 1 au lieu de 2.",
                en: "Execution 2: P1 reads i (0), P1 increments, P2 reads i (0), P1 writes (i = 1), P2 increments and writes (i = 1) → result 1 instead of 2.",
              },
              {
                fr: "Dans les deux cas, l'un des processeurs lit l'ancienne valeur de i avant que l'autre ne l'ait écrite : une mise à jour est perdue.",
                en: "In both cases, one processor reads the old value of i before the other has written it: one update is lost.",
              },
            ],
          },
          {
            kind: "open",
            prompt: {
              fr: "Quelle solution envisager pour éviter ce problème ?",
              en: "What solution can be considered to avoid this problem?",
            },
            solution: {
              fr: "Isoler la zone de code concernée (par exemple i++) dans une section critique exécutée en exclusion mutuelle : un seul processeur à la fois. On encadre la section critique par un protocole d'entrée et un protocole de sortie (entreeSC() / sortieSC()) afin de la rendre atomique.",
              en: "Isolate the code zone concerned (for example i++) into a critical section executed under mutual exclusion: only one processor at a time. The critical section is framed by an entry protocol and an exit protocol (entreeSC() / sortieSC()) to make it atomic.",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Quel est l'équivalent d'une structure while et GOTO ?",
              en: "What is the equivalent of a while structure and GOTO?",
            },
            solution: {
              fr: "Une boucle while (condition) corps; équivaut à un test suivi d'un saut :\n\ndebut : if (!condition) goto fin;\n       corps;\n       goto debut;\nfin :",
              en: "A while (condition) body; loop is equivalent to a test followed by a jump:\n\nstart: if (!condition) goto end;\n       body;\n       goto start;\nend:",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Pour cette seule question, on utilisera une fonction atomique bool scUsed() qui renvoie false uniquement pour le premier processeur appelant. La fonction leaveSC() réinitialise cette fonction. Écrire entreeSC() et sortieSC().",
              en: "For this question only, an atomic function bool scUsed() is used, which returns false only for the first calling processor. The function leaveSC() resets this function. Write entreeSC() and sortieSC().",
            },
            solution: {
              fr: "Le premier qui appelle scUsed() lit false et entre ; les suivants attendent activement jusqu'à ce qu'un sortieSC() appelle leaveSC().",
              en: "The first caller of scUsed() reads false and enters; the following ones wait actively until a sortieSC() calls leaveSC().",
            },
            solutionItems: [
              {
                fr: "entreeSC() : while (scUsed()) attente;",
                en: "entreeSC(): while (scUsed()) attente;",
              },
              {
                fr: "sortieSC() : leaveSC();",
                en: "sortieSC(): leaveSC();",
              },
            ],
          },
          {
            kind: "open",
            prompt: {
              fr: "Quel est le nom de la stratégie que vous avez utilisé dans entreeSC() de la question précédente ?",
              en: "What is the name of the strategy you used in entreeSC() of the previous question?",
            },
            solution: {
              fr: "L'attente active (busy waiting) : le processus scrute en boucle une condition (ici scUsed()) en consommant du temps de processeur, sans se bloquer.",
              en: "Busy waiting: the process repeatedly checks a condition (here scUsed()) while consuming CPU time, without blocking.",
            },
          },
        ],
      },
      {
        title: { fr: "2.2 Utilisation d'un booléen d'occupation", en: "2.2 Using an occupation boolean" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "Un processeur qui rentre dans la section critique modifie un booléen occ pour indiquer qu'il l'utilise.\n\nentreeSC(i) : while (occ) attente; occ = true;\nsortieSC(i) : occ = false;",
              en: "A processor entering the critical section modifies a boolean occ to indicate that it uses it.\n\nentreeSC(i): while (occ) attente; occ = true;\nsortieSC(i): occ = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Justifier.",
              en: "Does this specification allow mutual exclusion? Justify.",
            },
            solution: {
              fr: "Non : le test puis l'écriture de occ ne sont pas atomiques. Les deux processeurs peuvent lire occ == false en même temps, puis entrer tous les deux : même problème que la variable libre du CM2 (« Même problème que avant ! »).",
              en: "No: the test then the write of occ are not atomic. Both processors can read occ == false at the same time, then both enter: same problem as the libre variable from lecture 2 (“Same problem as before!”).",
            },
          },
        ],
      },
      {
        title: { fr: "2.3 Chacun son tour", en: "2.3 Each in his turn" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "Un processeur attend que ce soit son tour, puis donne la main à l'autre en sortant.\n\nentreeSC(i) : while (tour != i) attente;\nsortieSC(i) : tour = j;",
              en: "A processor waits until it is its turn, then hands over to the other on exit.\n\nentreeSC(i): while (tour != i) attente;\nsortieSC(i): tour = j;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : un seul processeur a le tour, donc un seul entre à la fois. Autre problème : si un processeur ne veut pas entrer (hors SC et hors protocole), tour ne change pas et l'autre attend indéfiniment : la propriété 3 (Condition de progression) est violée — aucun processus suspendu hors SC ne doit bloquer les autres.",
              en: "Yes, mutual exclusion is guaranteed: only one processor has the turn, so only one enters at a time. Other problem: if a processor does not want to enter (outside the SC and outside the protocol), tour never changes and the other waits forever: property 3 (progress condition) is violated — no process suspended outside the SC may block the others.",
            },
          },
        ],
      },
      {
        title: { fr: "2.4 Annonce de sa volonté d'entrer en SC", en: "2.4 Announcing one's will to enter the SC" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "On annonce sa volonté d'entrer dans un tableau de 2 booléens indexé par i et j, puis on attend que l'autre n'ait plus la volonté d'entrer.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) attente;\nsortieSC(i) : demande[i] = false;",
              en: "One announces one's will to enter in an array of 2 booleans indexed by i and j, then waits until the other no longer wants to enter.\n\nentreeSC(i): demande[i] = true; while (demande[j]) attente;\nsortieSC(i): demande[i] = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : le premier qui annonce sa volonté bloque l'entrée de l'autre. Autre problème : si les deux annoncent leur volonté en même temps, chacun attend que l'autre renonce : attente mutuelle infinie — la propriété 2 (Absence de blocage permanent) est violée (interblocage).",
              en: "Yes, mutual exclusion is guaranteed: the first one to announce its will blocks the other's entry. Other problem: if both announce their will at the same time, each waits for the other to renounce: infinite mutual wait — property 2 (absence of permanent blocking) is violated (deadlock).",
            },
          },
        ],
      },
      {
        title: { fr: "2.5 Annonce de sa volonté, avec renonce", en: "2.5 Announcing one's will, with renounce" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "Un processeur n'ayant pas réussi à rentrer (car l'autre a aussi annoncé sa volonté) annule son annonce et recommence.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) { demande[i] = false; attente; demande[i] = true; }\nsortieSC(i) : demande[i] = false;",
              en: "A processor that failed to enter (because the other also announced its will) withdraws its announcement and starts over.\n\nentreeSC(i): demande[i] = true; while (demande[j]) { demande[i] = false; attente; demande[i] = true; }\nsortieSC(i): demande[i] = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : l'annonce reste posée pendant tout le protocole d'entrée. Autre problème : si les deux renoncent et réannoncent en même temps, ils peuvent boucler sans que l'un n'entre jamais : famine possible — la propriété 4 (Équité) est violée.",
              en: "Yes, mutual exclusion is guaranteed: the announcement stays set throughout the entry protocol. Other problem: if both renounce and announce again at the same time, they may loop with neither ever entering: possible starvation — property 4 (fairness) is violated.",
            },
          },
        ],
      },
      {
        title: { fr: "2.6 Demande et renonce si ce n'est pas mon tour", en: "2.6 Request and renounce if it is not my turn" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "On fait une demande pour entrer en SC et on renonce si l'autre a aussi fait la demande et que ce n'est pas son tour.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; demande[i] = true; } }\nsortieSC(i) : demande[i] = false;",
              en: "One requests entry into the SC and renounces if the other has also requested and it is not one's turn.\n\nentreeSC(i): demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; demande[i] = true; } }\nsortieSC(i): demande[i] = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : l'annonce reste posée tant qu'on n'est pas entré. Autre problème : en renonçant puis en redemandant aussitôt, sans attendre son tour, les deux processeurs peuvent renoncer en même temps et boucler sans entrer : famine possible — la propriété 4 (Équité) est violée. C'est ce que corrige Dekker, en attendant son tour avant de redemander.",
              en: "Yes, mutual exclusion is guaranteed: the announcement stays set until one has entered. Other problem: by renouncing then requesting again right away, without waiting for one's turn, both processors may renounce at the same time and loop without entering: possible starvation — property 4 (fairness) is violated. This is what Dekker fixes, by waiting for one's turn before requesting again.",
            },
          },
        ],
      },
      {
        title: { fr: "2.7 Dekker 1966", en: "2.7 Dekker 1966" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "Voir le code du cahier des charges 2.7 ci-dessus : on renonce, on attend son tour avant de redemander, et on transmet le tour en sortie (tour = j).",
              en: "See the code of specification 2.7 above: one renounces, waits for one's turn before requesting again, and hands the turn over on exit (tour = j).",
            },
            solutionItems: [
              {
                fr: "Si on renonce, on attend son tour avant de redemander : while (tour != i) attente; puis demande[i] = true;",
                en: "If one renounces, one waits for one's turn before requesting again: while (tour != i) attente; then demande[i] = true;",
              },
              {
                fr: "Si c'est son tour, on attend que l'autre ait renoncé avant d'entrer : le while (demande[j]) ne se termine que lorsque l'autre a renoncé.",
                en: "If it is one's turn, one waits for the other to have renounced before entering: the while (demande[j]) only ends when the other has renounced.",
              },
              {
                fr: "sortieSC(i) : tour = j; demande[i] = false; — on donne la main à l'autre.",
                en: "sortieSC(i): tour = j; demande[i] = false; — one hands over to the other.",
              },
            ],
          },
        ],
      },
      {
        title: { fr: "2.8 Peterson 1981", en: "2.8 Peterson 1981" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC." },
            solution: {
              fr: "Voir le code du cahier des charges 2.8 ci-dessus (celui du CM2, adapté à i et j) : dernier est le dernier à vouloir entrer, c'est lui qui attend. On se détache de la notion de tour.",
              en: "See the code of specification 2.8 above (the one from lecture 2, adapted to i and j): dernier is the last one wanting to enter, it is up to him to wait. We move away from the notion of turn.",
            },
            solutionItems: [
              {
                fr: "entreeSC(i) : demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;",
                en: "entreeSC(i): demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;",
              },
              {
                fr: "sortieSC(i) : demande[i] = false;",
                en: "sortieSC(i): demande[i] = false;",
              },
              {
                fr: "dernier indique le dernier qui fait la demande d'entrer en SC : c'est alors à lui d'attendre (l'autre peut entrer).",
                en: "dernier tells who last requested entry into the SC: it is then up to him to wait (the other may enter).",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "Fiche Réflexe Examen : prouver Peterson",
      en: "Exam Quick-Reference Sheet: proving Peterson",
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
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Recopier le code :** `demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;` puis `demande[i] = false;` en sortie.",
          en: "**Copy the code:** `demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;` then `demande[i] = false;` on exit.",
        },
      },
      {
        text: {
          fr: "**Exclusion mutuelle (propriété 1) :** pour entrer, i doit avoir `demande[j] == false` ou `dernier == j` ; pour j, `demande[i] == false` ou `dernier == i`. Les deux conditions ne peuvent être vraies ensemble : au plus un entre.",
          en: "**Mutual exclusion (property 1):** to enter, i must have `demande[j] == false` or `dernier == j`; for j, `demande[i] == false` or `dernier == i`. Both conditions cannot hold at once: at most one enters.",
        },
      },
      {
        text: {
          fr: "**Absence de blocage permanent (propriété 2) :** si les deux demandent en même temps, le dernier à écrire `dernier` cède la place : au moins un des deux franchit le `while` au bout d'un temps fini.",
          en: "**Absence of permanent blocking (property 2):** if both request at the same time, the last one to write `dernier` yields: at least one of the two passes the `while` within finite time.",
        },
      },
      {
        text: {
          fr: "**Condition de progression (propriété 3) :** un processus hors SC et hors protocole n'écrit ni `demande` ni `dernier` : il ne peut empêcher personne d'entrer.",
          en: "**Progress condition (property 3):** a process outside the SC and outside the protocol writes neither `demande` nor `dernier`: it cannot prevent anyone from entering.",
        },
      },
      {
        text: {
          fr: "**Équité (propriété 4) :** après avoir cédé, un processus n'attend qu'un passage de l'autre avant d'entrer à son tour : il n'attend pas indéfiniment.",
          en: "**Fairness (property 4):** after yielding, a process only waits for one pass of the other before entering in turn: it does not wait indefinitely.",
        },
      },
      {
        text: {
          fr: "**Phrase de conclusion :** « Peterson satisfait l'exclusion mutuelle, l'absence de blocage permanent, la condition de progression et l'équité, mais utilise l'attente active. »",
          en: "**Concluding sentence:** “Peterson satisfies mutual exclusion, absence of permanent blocking, progress condition and fairness, but uses busy waiting.”",
        },
      },
    ],
  },
];