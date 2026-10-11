import type { Block } from "../../types";

const lireIncrementerEcrire = [
  {
    label: { fr: "b ← a  (lire)", en: "b ← a  (read)", uk: "b ← a  (читати)" },
    target: "b",
    source: "a",
  },
  {
    label: { fr: "b ← b + 1  (incrémenter)", en: "b ← b + 1  (increment)", uk: "b ← b + 1  (збільшити)" },
    target: "b",
    source: "b + 1",
  },
  {
    label: { fr: "a ← b  (écrire)", en: "a ← b  (write)", uk: "a ← b  (записати)" },
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
      uk: "**Два процесори** виконують паралельно, кожен, `b = a; b++; a = b;` над спільною змінною `a`. Очікуваний результат: `a = a + 2`. Результат, який іноді отримують: `a = a + 1`. Нічого не бракує, ніхто не помилився: результат залежить від **порядку чергування** інструкцій (**недетермінізм**). Цей розділ пояснює чому, а потім будує алгоритми **взаємного виключення**: стратегії TD4 (`occ`, `tour`, `demande`, відмова, Dekker, Peterson) та узагальнення на n процесів з КМ2.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Du parallélisme au non-déterminisme", en: "1. From parallelism to non-determinism", uk: "1. Від паралелізму до недетермінізму" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **communication entre processus** recouvre trois situations : le **passage d'information** d'un processus à un autre (exemple : `ls | wc -l`), l'**accès aux ressources partagées** avec des processus en compétition, ce qui mène à l'**exclusion mutuelle** (exemple : la réservation de la dernière place d'un vol), et la **synchronisation**, annoncée comme prochaine séance (exemple : le modèle producteur-consommateur).",
      en: "**Interprocess communication** covers three situations: **passing information** from one process to another (example: `ls | wc -l`), **access to shared resources** by competing processes, which leads to **mutual exclusion** (example: booking the last seat of a flight), and **synchronization**, announced as the next session (example: the producer-consumer model).",
      uk: "**Міжпроцесна взаємодія** охоплює три ситуації: **передавання інформації** від одного процесу до іншого (приклад: `ls | wc -l`), **доступ до спільних ресурсів** з конкуруючими процесами, що веде до **взаємного виключення** (приклад: бронювання останнього місця на рейс), і **синхронізацію**, оголошену як наступне заняття (приклад: модель виробник-споживач).",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Non-déterminisme :** quand plusieurs programmes s'exécutent en parallèle, on ne peut faire aucune hypothèse sur leur vitesse d'exécution ni sur leur entrelacement, qui peuvent être différents à chaque exécution.",
          en: "**Non-determinism:** when several programs run in parallel, no hypothesis can be made about their execution speed or their interleaving, which may differ at every run.",
          uk: "**Недетермінізм:** коли кілька програм виконуються паралельно, не можна робити жодних припущень про швидкість їх виконання чи про їхнє чергування, які можуть бути різними при кожному виконанні.",
        },
      },
      {
        text: {
          fr: "Si l'accès n'est pas contrôlé, le résultat de l'exécution du programme **pourra dépendre de l'ordre d'entrelacement** des instructions.",
          en: "If access is not controlled, the result of the program execution **may depend on the interleaving order** of instructions.",
          uk: "Якщо доступ не контролюється, результат виконання програми **може залежати від порядку чергування** інструкцій.",
        },
      },
      {
        text: {
          fr: "Un programme pourra à chaque exécution donner des **résultats différents et parfois indésirables**.",
          en: "A program may give **different and sometimes undesirable results** at each execution.",
          uk: "Програма при кожному виконанні може давати **різні й іноді небажані результати**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Illustration : la réservation d'avion", en: "Illustration: the airline booking", uk: "Ілюстрація: бронювання авіаквитка" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Alice demande une réservation : la base de données indique « fauteuil 6B disponible », puis « fauteuil 6B assigné à Alice et marqué occupé ». Bob demande à son tour une réservation : il lit lui aussi « fauteuil 6B disponible » avant qu'Alice n'ait écrit, puis marque le fauteuil occupé. La dernière place a été vendue deux fois.",
      en: "Alice asks for a reservation: the database says “seat 6B available”, then “seat 6B assigned to Alice and marked occupied”. Bob then asks for a reservation: he also reads “seat 6B available” before Alice wrote, then marks the seat occupied. The last seat was sold twice.",
      uk: "Аліса просить бронювання: база даних показує «місце 6B вільне», потім «місце 6B призначене Алісі й позначене зайнятим». Боб своєю чергою просить бронювання: він також читає «місце 6B вільне», перш ніж Аліса записала, потім позначає місце зайнятим. Останнє місце було продано двічі.",
    },
  },
  {
    type: "interleaving",
    spec: {
      id: "race-airline",
      caption: {
        fr: "Réservation aérienne : deux guichets, une seule variable partagée n.",
        en: "Airline booking: two desks, one shared variable n.",
        uk: "Бронювання авіаквитків: два віконця, одна спільна змінна n.",
      },
      variables: [
        { name: "n", init: 0, scope: "shared" },
        { name: "local", init: 0, scope: "local" },
      ],
      processes: [
        {
          id: "G₁",
          label: { fr: "Guichet 1", en: "Desk 1", uk: "Віконце 1" },
          steps: [
            { label: { fr: "local ← n", en: "local ← n", uk: "local ← n" }, target: "local", source: "n" },
            { label: { fr: "local ← local + 1", en: "local ← local + 1", uk: "local ← local + 1" }, target: "local", source: "local + 1" },
            { label: { fr: "n ← local", en: "n ← local", uk: "n ← local" }, target: "n", source: "local" },
          ],
        },
        {
          id: "G₂",
          label: { fr: "Guichet 2", en: "Desk 2", uk: "Віконце 2" },
          steps: [
            { label: { fr: "local ← n", en: "local ← n", uk: "local ← n" }, target: "local", source: "n" },
            { label: { fr: "local ← local + 1", en: "local ← local + 1", uk: "local ← local + 1" }, target: "local", source: "local + 1" },
            { label: { fr: "n ← local", en: "n ← local", uk: "n ← local" }, target: "n", source: "local" },
          ],
        },
      ],
      expected: { n: 2 },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Le compteur partagé : b = a; b++; a = b", en: "The shared counter: b = a; b++; a = b", uk: "Спільний лічильник: b = a; b++; a = b" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Deux opérations en parallèle sur `a` (variable partagée) et `b` (variable privée à chaque processus). **Cliquez sur « étape suivante »** dans l'ordre que vous voulez : chaque pas simule un entrelacement possible. Résultat attendu : `a = a + 2` ; résultat obtenu parfois : `a = a + 1`.",
      en: "Two parallel operations on `a` (shared variable) and `b` (variable private to each process). **Click “next step”** in whatever order you like: each step simulates a possible interleaving. Expected result: `a = a + 2`; result sometimes obtained: `a = a + 1`.",
      uk: "Дві операції паралельно над `a` (спільна змінна) і `b` (змінна, приватна для кожного процесу). **Натискайте «наступний крок»** у будь-якому порядку: кожен крок моделює можливе чергування. Очікуваний результат: `a = a + 2`; іноді отримуваний результат: `a = a + 1`.",
    },
  },
  {
    type: "interleaving",
    spec: {
      id: "race-counter",
      caption: {
        fr: "Non-déterminisme : entrelacez les deux exécutions de b = a; b++; a = b; et observez le résultat final.",
        en: "Non-determinism: interleave the two runs of b = a; b++; a = b; and watch the final result.",
        uk: "Недетермінізм: переплетіть два виконання b = a; b++; a = b; і подивіться на кінцевий результат.",
      },
      variables: [
        { name: "a", init: 0, scope: "shared" },
        { name: "b", init: 0, scope: "local" },
      ],
      processes: [
        { id: "P₁", label: { fr: "Processus P₁", en: "Process P₁", uk: "Процес P₁" }, steps: lireIncrementerEcrire },
        { id: "P₂", label: { fr: "Processus P₂", en: "Process P₂", uk: "Процес P₂" }, steps: lireIncrementerEcrire },
      ],
      expected: { a: 2 },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Non-déterminisme et i++", en: "Non-determinism and i++", uk: "Недетермінізм і i++" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pourquoi i++ peut-il produire i = 1 alors que deux processeurs ont chacun exécuté i++ ?",
        en: "Why can i++ produce i = 1 although two processors each executed i++?",
        uk: "Чому i++ може дати i = 1, хоча два процесори кожен виконали i++?",
      },
      options: [
        {
          text: {
            fr: "L'opération se décompose en plusieurs instructions non atomiques, dans un ordre d'entrelacement non maîtrisé.",
            en: "The operation breaks into several non-atomic instructions, in an uncontrolled interleaving order.",
            uk: "Операція розкладається на кілька неатомарних інструкцій у неконтрольованому порядку чергування.",
          },
        },
        { text: { fr: "Le processeur est trop lent.", en: "The processor is too slow.", uk: "Процесор занадто повільний." } },
        { text: { fr: "La mémoire partagée est trop petite.", en: "Shared memory is too small.", uk: "Спільна пам'ять занадто мала." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "i++ = lire, incrémenter, écrire. Si les deux processeurs lisent la valeur avant qu'aucun n'ait écrit, la seconde écriture écrase la première : résultat 1 au lieu de 2. C'est le non-déterminisme : le résultat dépend de l'ordre d'entrelacement.",
        en: "i++ = read, increment, write. If both processors read the value before either has written, the second write overwrites the first: result 1 instead of 2. That is non-determinism: the result depends on the interleaving order.",
        uk: "i++ = читати, збільшити, записати. Якщо обидва процесори читають значення, перш ніж хтось записав, другий запис перезаписує перший: результат 1 замість 2. Це недетермінізм: результат залежить від порядку чергування.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Section critique et exclusion mutuelle", en: "2. Critical section and mutual exclusion", uk: "2. Критична секція та взаємне виключення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **section critique** est une partie d'un programme dont l'exécution ne doit pas s'entrelacer avec d'autres exécutions de ce même programme : indivisibilité ou **atomicité** de la section critique. Une fois qu'un processus y entre, il faut lui permettre de terminer cette section sans permettre à d'autres processus de modifier ces mêmes données : la section critique doit être **verrouillée** afin de devenir atomique.",
      en: "A **critical section** is a part of a program whose execution must not interleave with other executions of the same program: indivisibility or **atomicity** of the critical section. Once a process enters it, it must be allowed to finish this section without letting other processes modify the same data: the critical section must be **locked** in order to become atomic.",
      uk: "**Критична секція** — це частина програми, виконання якої не повинно переплітатися з іншими виконаннями цієї самої програми: неподільність або **атомарність** критичної секції. Щойно процес у неї входить, треба дозволити йому завершити цю секцію, не дозволяючи іншим процесам змінювати ті самі дані: критична секція має бути **заблокована**, щоб стати атомарною.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Solution : l'exclusion mutuelle.** Méthode ou algorithme qui garantit qu'à tout instant **un processus au plus** exécute les instructions de sa section critique. Autrement dit, un algorithme d'exclusion mutuelle garantit l'**atomicité** des instructions de la section critique.",
      en: "**Solution: mutual exclusion.** A method or algorithm that guarantees that at any time **at most one process** executes the instructions of its critical section. In other words, a mutual-exclusion algorithm guarantees the **atomicity** of the critical-section instructions.",
      uk: "**Розв'язок: взаємне виключення.** Метод або алгоритм, який гарантує, що в будь-який момент **не більше одного процесу** виконує інструкції своєї критичної секції. Інакше кажучи, алгоритм взаємного виключення гарантує **атомарність** інструкцій критичної секції.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Les quatre propriétés de l'exclusion mutuelle", en: "The four properties of mutual exclusion", uk: "Чотири властивості взаємного виключення" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**1. Exclusion mutuelle :** par définition, au plus un seul processus en SC.",
          en: "**1. Mutual exclusion:** by definition, at most one process in the SC.",
          uk: "**1. Взаємне виключення:** за означенням, щонайбільше один процес у КС.",
        },
      },
      {
        text: {
          fr: "**2. Absence de blocage permanent :** si plusieurs processus attendent pour entrer en SC, et si aucun processus n'est déjà en SC, alors un des processus qui attend doit pouvoir entrer en SC au bout d'un temps fini (pas d'interblocage).",
          en: "**2. Absence of permanent blocking:** if several processes wait to enter the SC, and no process is already in the SC, then one of the waiting processes must be able to enter the SC within finite time (no deadlock).",
          uk: "**2. Відсутність постійного блокування:** якщо кілька процесів чекають, щоб увійти в КС, і жоден процес ще не перебуває в КС, то один із процесів, що чекають, має мати змогу увійти в КС за скінченний час (жодного взаємного блокування).",
        },
      },
      {
        text: {
          fr: "**3. Condition de progression :** un processus qui se trouve hors de sa SC et hors du protocole contrôlant l'accès à la SC ne doit pas empêcher un autre processus d'entrer dans sa SC.",
          en: "**3. Progress condition:** a process that is outside its SC and outside the protocol controlling access to the SC must not prevent another process from entering its SC.",
          uk: "**3. Умова прогресу:** процес, який перебуває поза своєю КС і поза протоколом, що контролює доступ до КС, не повинен перешкоджати іншому процесу увійти в його КС.",
        },
      },
      {
        text: {
          fr: "**4. Équité :** un processus qui veut entrer en SC ne doit pas attendre son tour indéfiniment (absence de famine).",
          en: "**4. Fairness:** a process that wants to enter the SC must not wait for its turn indefinitely (no starvation).",
          uk: "**4. Справедливість:** процес, який хоче увійти в КС, не повинен чекати своєї черги нескінченно (відсутність голодування).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Identifier une propriété", en: "Identify a property", uk: "Визначити властивість" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quelle propriété garantit qu'un processus qui veut entrer en SC ne doit pas attendre son tour indéfiniment ?",
        en: "Which property guarantees that a process wanting to enter the SC must not wait for its turn indefinitely?",
        uk: "Яка властивість гарантує, що процес, який хоче увійти в КС, не повинен чекати своєї черги нескінченно?",
      },
      options: [
        { text: { fr: "Équité (absence de famine).", en: "Fairness (no starvation).", uk: "Справедливість (відсутність голодування)." } },
        { text: { fr: "Exclusion mutuelle.", en: "Mutual exclusion.", uk: "Взаємне виключення." } },
        { text: { fr: "Absence d'attente active.", en: "No busy waiting.", uk: "Відсутність активного очікування." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "C'est la propriété 4, l'Équité (absence de famine). L'exclusion mutuelle se limite à « au plus un processus en SC » ; l'attente active n'est pas une propriété exigée, c'est un inconvénient des solutions logicielles.",
        en: "It is property 4, Fairness (no starvation). Mutual exclusion is only “at most one process in the SC”; busy waiting is not a required property, it is a drawback of software solutions.",
        uk: "Це властивість 4, справедливість (відсутність голодування). Взаємне виключення обмежується «не більше одного процесу в КС»; активне очікування не є вимогою, це недолік програмних розв'язків.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'exclusion mutuelle n'est pas garantie si...", en: "Mutual exclusion is not guaranteed if...", uk: "Взаємне виключення не гарантоване, якщо..." },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "un processus peut entrer en SC alors qu'un autre s'y trouve déjà ;",
          en: "a process can enter the SC while another is already in it;",
          uk: "процес може увійти в КС, тоді як інший уже там перебуває;",
        },
      },
      {
        text: {
          fr: "un processus désirant entrer en SC ne peut pas y entrer alors qu'il n'y a aucun processus en SC ;",
          en: "a process wanting to enter the SC cannot enter although no process is in the SC;",
          uk: "процес, який бажає увійти в КС, не може туди увійти, хоча жодного процесу в КС немає;",
        },
      },
      {
        text: {
          fr: "un processus désirant entrer en SC n'y entrera jamais car il ne sera jamais sélectionné lorsqu'il est en concurrence avec d'autres processus.",
          en: "a process wanting to enter the SC will never enter because it will never be selected when competing with other processes.",
          uk: "процес, який бажає увійти в КС, ніколи туди не увійде, бо він ніколи не буде обраний, коли конкурує з іншими процесами.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Protocoles d'entrée et de sortie", en: "Entry and exit protocols", uk: "Протоколи входу та виходу" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Il faut définir un **protocole d'entrée en SC** (ensemble d'instructions qui permet de vérifier qu'aucun autre processus n'est en SC puis d'entrer) et un **protocole de sortie de SC** (ensemble d'instructions qui permet à un processus ayant terminé sa SC d'avertir les autres processus en attente que la voie est libre). Structure d'un processus : Début → Section non critique → Protocole d'entrée → Section Critique → Protocole de sortie → Section non critique → Fin.",
      en: "An **entry protocol into the SC** must be defined (a set of instructions that checks that no other process is in the SC, then enters) and an **exit protocol from the SC** (a set of instructions that lets a process that finished its SC warn waiting processes that the way is free). Process structure: Start → Non-critical section → Entry protocol → Critical Section → Exit protocol → Non-critical section → End.",
      uk: "Треба визначити **протокол входу в КС** (набір інструкцій, який дає змогу перевірити, що жоден інший процес не перебуває в КС, а потім увійти) і **протокол виходу з КС** (набір інструкцій, який дає змогу процесові, що завершив свою КС, повідомити інші процеси, які чекають, що шлях вільний). Структура процесу: Початок → Некритична секція → Протокол входу → Критична секція → Протокол виходу → Некритична секція → Кінець.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "Forme générale (TD4) : entreeSC(), Section Critique, sortieSC().",
      en: "General shape (TD4): entreeSC(), Critical Section, sortieSC().",
      uk: "Загальна форма (TD4): entreeSC(), критична секція, sortieSC().",
    },
    text: `entreeSC ();
<Section Critique>
sortieSC ();`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Trois grandes familles d'algorithmes", en: "Three families of algorithms", uk: "Три великі родини алгоритмів" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Solutions logicielles** avec attente active, sans arbitrage ;",
          en: "**Software solutions** with busy waiting, without arbitration;",
          uk: "**Програмні розв'язки** з активним очікуванням, без арбітражу;",
        },
      },
      {
        text: {
          fr: "**Solutions matérielles** avec attente active, sans arbitrage (exemple : masquage des interruptions) ;",
          en: "**Hardware solutions** with busy waiting, without arbitration (example: masking interrupts);",
          uk: "**Апаратні розв'язки** з активним очікуванням, без арбітражу (приклад: маскування переривань);",
        },
      },
      {
        text: {
          fr: "**Solutions avec blocage et attente passive, avec arbitrage** (exemple : sémaphores).",
          en: "**Solutions with blocking and passive wait, with arbitration** (example: semaphores).",
          uk: "**Розв'язки з блокуванням і пасивним очікуванням, з арбітражем** (приклад: семафори).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Les trois familles", en: "The three families", uk: "Три родини" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Les solutions avec blocage et attente passive nécessitent un arbitrage (par exemple les sémaphores).",
        en: "Solutions with blocking and passive wait require arbitration (for example semaphores).",
        uk: "Розв'язки з блокуванням і пасивним очікуванням потребують арбітражу (наприклад, семафори).",
      },
      answer: true,
      justification: {
        fr: "C'est la troisième famille du CM2 : blocage et attente passive avec arbitrage, dont l'exemple est les sémaphores. Les deux premières familles fonctionnent avec attente active et sans arbitrage.",
        en: "That is the third family from lecture 2: blocking and passive wait with arbitration, whose example is semaphores. The first two families work with busy waiting and without arbitration.",
        uk: "Це третя родина з КМ2: блокування та пасивне очікування з арбітражем, прикладом чого є семафори. Перші дві родини працюють з активним очікуванням і без арбітражу.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'attente active (busy waiting)", en: "Busy waiting", uk: "Активне очікування (busy waiting)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Principe général de l'attente active : le processus scrute en boucle une condition qui indique si la SC est libre. **Inconvénient : consommation inutile de temps CPU.**",
      en: "General principle of busy waiting: the process spins in a loop on a condition that tells whether the SC is free. **Drawback: useless CPU time consumption.**",
      uk: "Загальний принцип активного очікування: процес у циклі опитує умову, яка вказує, чи вільна КС. **Недолік: марна витрата часу ЦП.**",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "Principe général de l'attente active (CM2).",
      en: "General busy-waiting principle (lecture 2).",
      uk: "Загальний принцип активного очікування (КМ2).",
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
          uk: "Стани процесу: обраний, готовий, заблокований. При активному очікуванні процес залишається активним і споживає процесор; у розв'язках із блокуванням процес знімається з процесора до очікуваної події.",
        },
        nodes: [
          { id: "elu", label: { fr: "Élu", en: "Running", uk: "Обраний" }, x: 220, y: 0, shape: "circle", tone: "primary" },
          { id: "pret", label: { fr: "Prêt", en: "Ready", uk: "Готовий" }, x: 0, y: 0, shape: "circle" },
          { id: "bloque", label: { fr: "Bloqué", en: "Blocked", uk: "Заблокований" }, x: 440, y: 0, shape: "circle" },
        ],
        edges: [
          { from: "pret", to: "elu", label: { fr: "élection", en: "scheduled", uk: "обрання" } },
          { from: "elu", to: "pret", label: { fr: "quantum écoulé", en: "quantum expired", uk: "квант вичерпано" } },
          { from: "elu", to: "bloque", label: { fr: "E/S / ressource", en: "I/O / resource", uk: "В/В / ресурс" } },
          { from: "bloque", to: "pret", label: { fr: "réveil", en: "wake-up", uk: "пробудження" } },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Exemple simple et incorrect : la variable libre", en: "Simple and incorrect example: the libre variable", uk: "Простий і неправильний приклад: змінна libre" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Utilisation d'une variable partagée `libre` : le test puis l'écriture ne sont pas atomiques. Les deux processus peuvent voir `libre == true` en même temps et entrer tous les deux. **Même problème que avant !**",
      en: "Use of a shared variable `libre`: the test then the write are not atomic. Both processes may see `libre == true` at the same time and both enter. **Same problem as before!**",
      uk: "Використання спільної змінної `libre`: перевірка, а потім запис не є атомарними. Обидва процеси можуть одночасно побачити `libre == true` і увійти обидва. **Та сама проблема, що й раніше!**",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "Variable libre : exemple simple et incorrect (CM2).",
      en: "The libre variable: simple and incorrect example (lecture 2).",
      uk: "Змінна libre: простий і неправильний приклад (КМ2).",
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
    text: { fr: "Deuxième tentative : à tour de rôle (tour)", en: "Second attempt: taking turns (tour)", uk: "Друга спроба: по черзі (tour)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "`tour` est une variable partagée qui indique le processus qui doit entrer en SC : quand `tour = i`, le processus i peut entrer. Exclusion mutuelle : **OK !** Problème : la propriété 3 — aucun processus suspendu en dehors d'une SC ne doit bloquer les autres.",
      en: "`tour` is a shared variable that tells which process must enter the SC: when `tour = i`, process i may enter. Mutual exclusion: **OK!** Problem: property 3 — no process suspended outside an SC may block the others.",
      uk: "`tour` — це спільна змінна, яка вказує процес, що має увійти в КС: коли `tour = i`, процес i може увійти. Взаємне виключення: **OK!** Проблема: властивість 3 — жоден процес, призупинений поза КС, не повинен блокувати інших.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "À tour de rôle : tour = i, le processus i peut entrer (CM2).",
      en: "Taking turns: tour = i, process i may enter (lecture 2).",
      uk: "По черзі: tour = i, процес i може увійти (КМ2).",
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
    concept: { fr: "Le tour de rôle et la condition de progression", en: "Taking turns and the progress condition", uk: "Почерговість і умова прогресу" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Le protocole « chacun son tour » (variable tour) garantit la condition de progression.",
        en: "The “taking turns” protocol (variable tour) guarantees the progress condition.",
        uk: "Протокол «кожен по черзі» (змінна tour) гарантує умову прогресу.",
      },
      answer: false,
      justification: {
        fr: "Si le processus dont c'est le tour ne veut pas entrer en SC, tour ne change pas et l'autre attend indéfiniment : un processus hors SC et hors protocole bloque les autres. La propriété 3 (Condition de progression) est violée.",
        en: "If the process whose turn it is does not want to enter the SC, tour never changes and the other waits forever: a process outside the SC and outside the protocol blocks the others. Property 3 (progress condition) is violated.",
        uk: "Якщо процес, чия черга, не хоче входити в КС, tour не змінюється, і інший чекає нескінченно: процес поза КС і поза протоколом блокує інших. Властивість 3 (умова прогресу) порушена.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Critique des solutions par logiciel", en: "Criticism of software solutions", uk: "Критика програмних розв'язків" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Difficiles à programmer ! Et à comprendre !", en: "Hard to program! And to understand!", uk: "Важко програмувати! І розуміти!" } },
      {
        text: {
          fr: "Les processus qui requièrent l'entrée dans leur SC sont actifs, consommant ainsi du temps de processeur.",
          en: "Processes requesting entry into their SC are active, thus consuming processor time.",
          uk: "Процеси, які запитують вхід у свою КС, залишаються активними, споживаючи тим самим час процесора.",
        },
      },
      {
        text: {
          fr: "Pour de longues sections critiques, il serait préférable de bloquer les processus qui doivent attendre (solutions avec blocage et attente passive).",
          en: "For long critical sections, it would be preferable to block the processes that must wait (solutions with blocking and passive wait).",
          uk: "Для довгих критичних секцій краще було б блокувати процеси, які мають чекати (розв'язки з блокуванням і пасивним очікуванням).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Les stratégies du TD4 : l'exclusion mutuelle logicielle", en: "3. The TD4 strategies: software mutual exclusion", uk: "3. Стратегії TD4: програмне взаємне виключення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Modèle de machine (TD4) : deux processeurs identiques, chacun exécutant son propre flot d'instructions, accédant directement à la même mémoire physique ; on ne prend pas en compte caches, protection ou mémoire virtuelle. Il faut résoudre l'exclusion mutuelle **sans support matériel autre que l'ordre des écritures en mémoire**. On différencie les processeurs dans le pseudo-code par la valeur **i** pour le premier et la valeur **j** pour l'autre.",
      en: "Machine model (TD4): two identical processors, each running its own instruction flow, directly accessing the same physical memory; caches, access protection and virtual memory are ignored. Mutual exclusion must be solved **with no hardware support other than the order of memory writes**. In pseudo-code, the processors are told apart by the value **i** for the first one and **j** for the other.",
      uk: "Модель машини (TD4): два ідентичні процесори, кожен виконує власний потік інструкцій, звертаючись безпосередньо до тієї самої фізичної пам'яті; кеші, захист доступу чи віртуальна пам'ять не враховуються. Треба розв'язати взаємне виключення **без апаратної підтримки, крім порядку записів у пам'ять**. У псевдокоді процесори розрізняють за значенням **i** для першого і значенням **j** для іншого.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "La notation : un pseudo-code, pas du C", en: "The notation: pseudocode, not C", uk: "Нотація: псевдокод, а не C" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les cadres ci-dessous ne sont **pas du langage C compilable** : c'est le **pseudo-code** défini par le TD4 pour une machine abstraite à deux processeurs. On y emploie des mots du C (`bool`, `int`, `while`, `=`) pour rester lisible, mais aussi des mots du TD (`attente`, `entreeSC`, `sortieSC`, `<Section Critique>`) qui n'existent dans aucune bibliothèque. À l'examen, il faut savoir **lire** et **rédiger** ce pseudo-code, pas le compiler.",
      en: "The frames below are **not compilable C**: they are the **pseudocode** defined by TD4 for an abstract two-processor machine. It borrows C words (`bool`, `int`, `while`, `=`) to stay readable, but also TD words (`attente`, `entreeSC`, `sortieSC`, `<Section Critique>`) that exist in no library. For the exam you must be able to **read** and **write** this pseudocode, not compile it.",
      uk: "Наведені нижче блоки — це **не компільована мова C**: це **псевдокод**, визначений TD4 для абстрактної машини з двома процесорами. У ньому використано слова з C (`bool`, `int`, `while`, `=`) для читабельності, а також слова з TD (`attente`, `entreeSC`, `sortieSC`, `<Section Critique>`), яких немає в жодній бібліотеці. На іспиті треба вміти **читати** і **писати** цей псевдокод, а не компілювати його.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`i` et `j`** désignent les **deux processeurs** : `i` pour le premier, `j` pour l'autre. Les deux exécutent le **même** code, chacun voyant son propre indice dans `i` et l'autre dans `j`.",
          en: "**`i` and `j`** name the **two processors**: `i` for the first, `j` for the other. Both run the **same** code, each seeing its own index as `i` and the other as `j`.",
          uk: "**`i` та `j`** позначають **два процесори**: `i` для першого, `j` для іншого. Обидва виконують **той самий** код, кожен бачить власний індекс у `i`, а інший — у `j`.",
        },
      },
      {
        text: {
          fr: "**`attente`** est une convention pour l'**attente active** (busy waiting) : le processeur tourne en rond sans se bloquer. Ce n'est pas une fonction que l'on appelle.",
          en: "**`attente`** is a convention for **busy waiting**: the processor spins without blocking. It is not a function to call.",
          uk: "**`attente`** — це домовленість для **активного очікування** (busy waiting): процесор крутиться в циклі, не блокуючись. Це не функція, яку викликають.",
        },
      },
      {
        text: {
          fr: "**`entreeSC(i)` et `sortieSC(i)`** sont les **protocoles** d'entrée et de sortie de la section critique, exécutés par le processeur `i`.",
          en: "**`entreeSC(i)` and `sortieSC(i)`** are the critical-section **entry and exit protocols**, executed by processor `i`.",
          uk: "**`entreeSC(i)` та `sortieSC(i)`** — це **протоколи** входу та виходу критичної секції, які виконує процесор `i`.",
        },
      },
      {
        text: {
          fr: "**`<Section Critique>`** est l'**emplacement** du code protégé (par exemple `i++`) : les chevrons indiquent qu'il faut le remplacer, pas le recopier.",
          en: "**`<Section Critique>`** is the **placeholder** for the protected code (for example `i++`): the angle brackets say to replace it, not to copy it.",
          uk: "**`<Section Critique>`** — це **місце** для захищеного коду (наприклад `i++`): кутові дужки вказують, що його треба замінити, а не переписати.",
        },
      },
      {
        text: {
          fr: "Les **variables partagées** (`occ`, `tour`, `demande[2]`, `dernier`) sont déclarées **une seule fois**, en dehors des protocoles ; les deux processeurs y accèdent.",
          en: "The **shared variables** (`occ`, `tour`, `demande[2]`, `dernier`) are declared **once**, outside the protocols; both processors access them.",
          uk: "**Спільні змінні** (`occ`, `tour`, `demande[2]`, `dernier`) оголошуються **лише один раз**, поза протоколами; обидва процесори звертаються до них.",
        },
      },
      {
        text: {
          fr: "**`=`** est l'**affectation** (comme en C) et **`==`** la **comparaison** : `occ = true` écrit, `occ == true` teste.",
          en: "**`=`** is **assignment** (as in C) and **`==`** is **comparison**: `occ = true` writes, `occ == true` tests.",
          uk: "**`=`** — це **присвоєння** (як у C), а **`==`** — **порівняння**: `occ = true` записує, `occ == true` перевіряє.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "Exemple annoté : le booléen d'occupation occ en pseudo-code TD4.",
      en: "Annotated example: the occupation boolean occ in TD4 pseudocode.",
      uk: "Анотований приклад: булева змінна зайнятості occ у псевдокоді TD4.",
    },
    text: `/* Variables partagées : déclarées une seule fois pour les 2 processeurs */
bool occ = false;          /* vrai : la section critique est occupée */

/* Protocole du processeur i, l'autre étant j */
entreeSC (i) {
    while (occ) attente;   /* attente active tant que occ est vrai */
    occ = true;            /* je réserve la section critique */
}
sortieSC (i) {
    occ = false;           /* je libère la section critique */
}`,
  },
  {
    type: "paragraph",
    text: {
      fr: "Le même squelette en **C réel** remplacerait `attente` par un point-virgule (`while (occ) ;`), `entreeSC(i)` par une fonction `void entreeSC(int i)` et `<Section Critique>` par le code à protéger : c'est seulement la **rédaction** qui change, pas le raisonnement.",
      en: "The same skeleton in **real C** would replace `attente` with a semicolon (`while (occ) ;`), `entreeSC(i)` with a function `void entreeSC(int i)` and `<Section Critique>` with the code to protect: only the **wording** changes, not the reasoning.",
      uk: "Той самий каркас у **справжньому C** замінив би `attente` на крапку з комою (`while (occ) ;`), `entreeSC(i)` на функцію `void entreeSC(int i)`, а `<Section Critique>` на код, який треба захистити: змінюється лише **запис**, а не міркування.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Pseudo-assembleur et équivalence while / GOTO", en: "Pseudo-assembly and the while / GOTO equivalence", uk: "Псевдоасемблер та еквівалентність while / GOTO" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Deux points de « bas niveau » reviennent dans le TD4. D'abord, `i++` n'est **pas atomique** : en pseudo-assembleur elle se décompose en trois instructions élémentaires.",
      en: "Two “low-level” points come back in TD4. First, `i++` is **not atomic**: in pseudo-assembly it splits into three elementary instructions.",
      uk: "У TD4 повертаються два «низькорівневі» моменти. По-перше, `i++` **не є атомарною**: у псевдоасемблері вона розкладається на три елементарні інструкції.",
    },
  },
  {
    type: "code",
    lang: "pseudo-assembleur",
    caption: {
      fr: "Pseudo-assembleur de i++ (TD4, question 1).",
      en: "Pseudo-assembly of i++ (TD4, question 1).",
      uk: "Псевдоасемблер i++ (TD4, питання 1).",
    },
    text: `LOAD  R, i     /* lire i dans un registre */
ADD   R, 1     /* incrémenter le registre */
STORE i, R     /* écrire le registre dans i */`,
  },
  {
    type: "paragraph",
    text: {
      fr: "C'est l'**entrelacement** de ces trois instructions entre les deux processeurs (les deux lisent avant qu'un seul écrive) qui donne `i = 1` au lieu de `i = 2`. Ensuite, le TD4 demande l'équivalent d'une boucle `while` avec des `GOTO` : l'attente active s'écrit indifféremment avec l'un ou l'autre.",
      en: "It is the **interleaving** of these three instructions between the two processors (both read before either writes) that gives `i = 1` instead of `i = 2`. Second, TD4 asks for the equivalent of a `while` loop with `GOTO`: busy waiting can be written with either one.",
      uk: "Саме **чергування** цих трьох інструкцій між двома процесорами (обидва читають, перш ніж хтось один запише) дає `i = 1` замість `i = 2`. Далі TD4 вимагає еквівалент циклу `while` із `GOTO`: активне очікування однаково записується тим чи іншим.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "Une boucle while traduite en GOTO (TD4, question 4).",
      en: "A while loop translated into GOTO (TD4, question 4).",
      uk: "Цикл while, перекладений у GOTO (TD4, питання 4).",
    },
    text: `/* while (condition) corps;  équivaut à : */
debut :  if (!condition) goto fin;
         corps;
         goto debut;
fin :`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "2.2 Utilisation d'un booléen d'occupation", en: "2.2 Using an occupation boolean", uk: "2.2 Використання булевої змінної зайнятості" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un processeur qui rentre dans la section critique modifie un booléen nommé `occ` pour indiquer qu'il l'utilise.",
      en: "A processor entering the critical section modifies a boolean named `occ` to indicate that it uses it.",
      uk: "Процесор, який входить у критичну секцію, змінює булеву змінну з назвою `occ`, щоб указати, що він її використовує.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.2 : le booléen d'occupation occ.",
      en: "TD4 2.2: the occupation boolean occ.",
      uk: "TD4 2.2: булева змінна зайнятості occ.",
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
    text: { fr: "2.3 Chacun son tour", en: "2.3 Each in his turn", uk: "2.3 Кожен по черзі" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un processeur qui veut rentrer dans la section critique doit attendre que ce soit son tour. Une fois la section critique exécutée, il donne la main à l'autre.",
      en: "A processor that wants to enter the critical section must wait until it is its turn. Once the critical section is executed, it hands over to the other.",
      uk: "Процесор, який хоче увійти в критичну секцію, повинен зачекати своєї черги. Після виконання критичної секції він передає чергу іншому.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.3 : chacun son tour, avec i et j.",
      en: "TD4 2.3: each in his turn, with i and j.",
      uk: "TD4 2.3: кожен по черзі, з i та j.",
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
    text: { fr: "2.4 Annonce de sa volonté d'entrer en SC", en: "2.4 Announcing one's will to enter the SC", uk: "2.4 Оголошення свого бажання увійти в КС" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Au lieu de dire que l'on est dans la section critique, on indique que l'on **veut y entrer** : un tableau de 2 booléens indexé par i et j. On attend que l'autre processeur n'ait plus la volonté d'entrer pour y entrer.",
      en: "Instead of saying one is in the critical section, one indicates one **wants to enter** it: an array of 2 booleans indexed by i and j. One waits until the other processor no longer wants to enter, then enters.",
      uk: "Замість того щоб казати, що ми в критичній секції, ми вказуємо, що **хочемо туди увійти**: масив із 2 булевих, індексований через i та j. Чекаємо, доки інший процесор більше не матиме бажання увійти, щоб увійти.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.4 : annonce de sa volonté, tableau demande[2].",
      en: "TD4 2.4: announcing one's will, the array demande[2].",
      uk: "TD4 2.4: оголошення свого бажання, масив demande[2].",
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
    text: { fr: "2.5 Annonce de sa volonté, avec renonce", en: "2.5 Announcing one's will, with renounce", uk: "2.5 Оголошення свого бажання, з відмовою" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Comme au 2.4, un processeur annonce sa volonté de rentrer dans la section critique. Mais un processeur n'ayant pas réussi à rentrer (car l'autre a également fait l'annonce de sa volonté) **annule son annonce et recommence**.",
      en: "As in 2.4, a processor announces its will to enter the critical section. But a processor that failed to enter (because the other also announced its will) **withdraws its announcement and starts over**.",
      uk: "Як і в 2.4, процесор оголошує своє бажання увійти в критичну секцію. Але процесор, якому не вдалося увійти (бо інший також оголосив своє бажання), **скасовує своє оголошення і починає знову**.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.5 : annonce avec renonce — je renonce puis je réannonce.",
      en: "TD4 2.5: announcement with renounce — I renounce then announce again.",
      uk: "TD4 2.5: оголошення з відмовою — я відмовляюся, потім оголошую знову.",
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
    text: { fr: "2.6 Demande et renonce si ce n'est pas mon tour", en: "2.6 Request and renounce if it is not my turn", uk: "2.6 Запит і відмова, якщо не моя черга" },
  },
  {
    type: "paragraph",
    text: {
      fr: "On utilise à la fois la notion de **demande** (tableau de booléens) et la notion de **tour**. Le processeur fait une demande pour entrer en section critique et renonce si l'autre processeur a également fait la demande et qu'il ne s'agit pas de son tour. Sinon, le processeur rentre.",
      en: "Both the notion of **request** (array of booleans) and the notion of **turn** are used. The processor requests entry into the critical section and renounces if the other processor has also requested and it is not its turn. Otherwise, the processor enters.",
      uk: "Використовують одночасно поняття **запиту** (масив булевих) і поняття **черги**. Процесор робить запит на вхід у критичну секцію і відмовляється, якщо інший процесор також зробив запит і це не його черга. Інакше процесор входить.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.6 : demande + tour — je renonce et je redemande aussitôt.",
      en: "TD4 2.6: request + turn — I renounce and request again right away.",
      uk: "TD4 2.6: запит + черга — я відмовляюся і знову прошу одразу.",
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
    text: { fr: "2.7 Dekker 1966", en: "2.7 Dekker 1966", uk: "2.7 Dekker 1966" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les deux points importants de la solution proposée par Dekker en 1966 : **si on renonce, on attend son tour avant de redemander** ; **si c'est son tour, on attend que l'autre ait renoncé avant d'entrer**.",
      en: "The two important points of the solution proposed by Dekker in 1966: **if one renounces, one waits for one's turn before requesting again**; **if it is one's turn, one waits for the other to have renounced before entering**.",
      uk: "Два важливі моменти розв'язку, запропонованого Dekker у 1966 році: **якщо ми відмовляємося, то чекаємо своєї черги, перш ніж просити знову**; **якщо це наша черга, то чекаємо, доки інший відмовиться, перш ніж увійти**.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.7 : Dekker 1966 — on attend son tour avant de redemander.",
      en: "TD4 2.7: Dekker 1966 — one waits for one's turn before requesting again.",
      uk: "TD4 2.7: Dekker 1966 — чекаємо своєї черги, перш ніж просити знову.",
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
    text: { fr: "2.8 Peterson 1981", en: "2.8 Peterson 1981", uk: "2.8 Peterson 1981" },
  },
  {
    type: "paragraph",
    text: {
      fr: "En 1981, Peterson a proposé une solution avec un code plus simple. L'idée : utiliser une variable **`dernier`** qui est à la valeur du dernier à vouloir entrer dans la section critique. C'est alors à lui d'attendre. **On se détache de la notion de tour.**",
      en: "In 1981, Peterson proposed a solution with simpler code. The idea: use a variable **`dernier`** holding the value of the last one to want to enter the critical section. Then it is up to him to wait. **We move away from the notion of turn.**",
      uk: "У 1981 році Peterson запропонував розв'язок із простішим кодом. Ідея: використати змінну **`dernier`**, яка містить значення останнього, хто захотів увійти в критичну секцію. Тоді саме йому чекати. **Ми відходимо від поняття черги.**",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.8 / CM2 : Peterson 1981, avec demande et dernier.",
      en: "TD4 2.8 / lecture 2: Peterson 1981, with demande and dernier.",
      uk: "TD4 2.8 / КМ2: Peterson 1981, із demande та dernier.",
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
      uk: "**Чому це правильно:** якщо обидва хочуть увійти, `dernier` набуває значення **останнього**, хто його записав. Отже, хто прийшов останнім, **поступається** місцем: принаймні один процес долає `while`. Оскільки обидва не можуть одночасно задовольнити `dernier == i` і `dernier == j`, взаємне виключення зберігається, і ніхто не чекає нескінченно.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "La variable dernier de Peterson", en: "Peterson's dernier variable", uk: "Змінна dernier у Peterson" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans l'algorithme de Peterson, que signifie l'affectation `dernier = i` juste après `demande[i] = true` ?",
        en: "In Peterson's algorithm, what does the assignment `dernier = i` right after `demande[i] = true` mean?",
        uk: "В алгоритмі Peterson, що означає присвоєння `dernier = i` одразу після `demande[i] = true`?",
      },
      options: [
        {
          text: {
            fr: "i est le dernier à vouloir entrer en SC : c'est donc à lui d'attendre, et l'autre peut entrer.",
            en: "i is the last one wanting to enter the SC: so it is up to him to wait, and the other can enter.",
            uk: "i — останній, хто хоче увійти в КС: отже, чекати саме йому, а інший може увійти.",
          },
        },
        { text: { fr: "Le processus i entre toujours en premier.", en: "Process i always enters first.", uk: "Процес i завжди входить першим." } },
        { text: { fr: "Personne ne peut plus entrer.", en: "Nobody can enter anymore.", uk: "Ніхто більше не може увійти." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "dernier = i indique que i est le dernier demandeur : la condition while (demande[j] && dernier == i) bloque i, et j peut entrer. On se détache de la notion de tour.",
        en: "dernier = i says that i is the last requester: the condition while (demande[j] && dernier == i) blocks i, and j can enter. We move away from the notion of turn.",
        uk: "dernier = i вказує, що i — останній, хто зробив запит: умова while (demande[j] && dernier == i) блокує i, і j може увійти. Ми відходимо від поняття черги.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Généralisation de Peterson pour n processus", en: "Peterson's generalization for n processes", uk: "Узагальнення Peterson для n процесів" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour n processus, `dernier` est un tableau de **n − 1 entiers** qui représente une file d'attente avec **n − 1 niveaux** : `dernier[k]` est le dernier processus arrivé au niveau k. `niveau` est un tableau de n entiers initialisés à **−1** : `niveau[i]` est le niveau du processus i. Chaque processus doit franchir n − 1 niveaux.",
      en: "For n processes, `dernier` is an array of **n − 1 integers** representing a queue with **n − 1 levels**: `dernier[k]` is the last process that reached level k. `niveau` is an array of n integers initialized to **−1**: `niveau[i]` is the level of process i. Each process must clear n − 1 levels.",
      uk: "Для n процесів `dernier` — це масив із **n − 1 цілих**, який представляє чергу з **n − 1 рівнів**: `dernier[k]` — останній процес, що досяг рівня k. `niveau` — масив із n цілих, ініціалізованих значенням **−1**: `niveau[i]` — рівень процесу i. Кожен процес має подолати n − 1 рівнів.",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "CM2 : Peterson généralisé à n processus, pour le processus i.",
      en: "Lecture 2: Peterson generalized to n processes, for process i.",
      uk: "КМ2: Peterson, узагальнений на n процесів, для процесу i.",
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
    text: { fr: "4. Synchronisation : le modèle producteur-consommateur", en: "4. Synchronization: the producer-consumer model", uk: "4. Синхронізація: модель виробник-споживач" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le modèle **producteur-consommateur** est l'exemple de synchronisation annoncé au CM2 (« Synchronisation — prochaine séance »). Un **producteur** dépose des éléments dans un tampon borné ; un **consommateur** les retire. Essayez :",
      en: "The **producer-consumer** model is the synchronization example announced in lecture 2 (“Synchronization — next session”). A **producer** drops items into a bounded buffer; a **consumer** removes them. Try it:",
      uk: "Модель **виробник-споживач** — це приклад синхронізації, оголошений на КМ2 («Синхронізація — наступне заняття»). **Виробник** кладе елементи в обмежений буфер; **споживач** їх забирає. Спробуйте:",
    },
  },
  {
    type: "buffer",
    spec: {
      id: "producer-consumer",
      caption: {
        fr: "Tampon borné : produisez et consommez à volonté. Que se passe-t-il en cas de débordement ou de sous-dépassement ?",
        en: "Bounded buffer: produce and consume freely. What happens on overflow or underflow?",
        uk: "Обмежений буфер: виробляйте та споживайте скільки завгодно. Що станеться в разі переповнення чи спорожнення?",
      },
      capacity: 4,
      produceLabel: { fr: "Produire", en: "Produce", uk: "Виробляти" },
      consumeLabel: { fr: "Consommer", en: "Consume", uk: "Споживати" },
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le producteur ne doit **jamais** déposer dans un tampon **plein** (sinon il écrase des données non lues) et le consommateur ne doit **jamais** retirer d'un tampon **vide** (sinon il lit n'importe quoi). Ce problème relève de la **synchronisation**, c'est-à-dire de la famille des solutions avec **blocage et attente passive avec arbitrage** (exemple : sémaphores), vue en fin de CM2.",
      en: "The producer must **never** deposit into a **full** buffer (otherwise it overwrites unread data) and the consumer must **never** remove from an **empty** buffer (otherwise it reads garbage). This problem belongs to **synchronization**, that is, the family of solutions with **blocking and passive wait with arbitration** (example: semaphores), seen at the end of lecture 2.",
      uk: "Виробник **ніколи** не повинен класти в **повний** буфер (інакше він перезаписує непрочитані дані), а споживач **ніколи** не повинен забирати з **порожнього** буфера (інакше він читає будь-що). Ця проблема належить до **синхронізації**, тобто до родини розв'язків із **блокуванням і пасивним очікуванням з арбітражем** (приклад: семафори), розглянутої наприкінці КМ2.",
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "Exercices", en: "Exercises", uk: "Вправи" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "1. Introduction", en: "1. Introduction", uk: "1. Вступ" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Quel est le code pseudo-assembleur de l'instruction i++ ?",
              en: "What is the pseudo-assembly code of the instruction i++?",
              uk: "Який псевдоасемблерний код інструкції i++?",
            },
            solution: {
              fr: "i++ se décompose en trois instructions élémentaires : lire la valeur de i dans un registre, l'incrémenter de 1, puis écrire le registre dans i.\n\nLOAD R, i\nADD R, 1\nSTORE i, R",
              en: "i++ breaks down into three elementary instructions: load the value of i into a register, increment it by 1, then write the register into i.\n\nLOAD R, i\nADD R, 1\nSTORE i, R",
              uk: "i++ розкладається на три елементарні інструкції: прочитати значення i в регістр, збільшити його на 1, а потім записати регістр у i.\n\nLOAD R, i\nADD R, 1\nSTORE i, R",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Dans le cas général, si un des processeurs fait i++ la valeur de la variable est incrémentée de 1. Si chacun des deux processeurs fait i++, on s'attendrait à ce que la variable soit incrémentée de deux. Quel scénario d'exécution de i++ produit un résultat inconsistant ? On pourra expliciter 2 exécutions différentes.",
              en: "In the general case, if one of the processors does i++ the variable value is incremented by 1. If each of the two processors does i++, one would expect the variable to be incremented by two. Which execution scenario of i++ yields an inconsistent result? One may spell out 2 different executions.",
              uk: "У загальному випадку, якщо один із процесорів виконує i++, значення змінної збільшується на 1. Якщо кожен із двох процесорів виконує i++, можна було б очікувати, що змінна збільшиться на два. Який сценарій виконання i++ дає суперечливий результат? Можна навести 2 різних виконання.",
            },
            solution: {
              fr: "Tout entrelacement où les deux processeurs lisent i avant que l'un des deux n'ait écrit aboutit à i = 1 au lieu de i = 2 : un des deux écrits écrase l'autre.",
              en: "Any interleaving in which both processors read i before either has written ends with i = 1 instead of i = 2: one of the two writes overwrites the other.",
              uk: "Будь-яке чергування, за якого обидва процесори читають i, перш ніж один із них записав, приводить до i = 1 замість i = 2: один із двох записів перезаписує інший.",
            },
            solutionItems: [
              {
                fr: "Exécution 1 : P1 lit i (0), P2 lit i (0), P1 incrémente et écrit (i = 1), P2 incrémente et écrit (i = 1) → résultat 1 au lieu de 2.",
                en: "Execution 1: P1 reads i (0), P2 reads i (0), P1 increments and writes (i = 1), P2 increments and writes (i = 1) → result 1 instead of 2.",
                uk: "Виконання 1: P1 читає i (0), P2 читає i (0), P1 збільшує й записує (i = 1), P2 збільшує й записує (i = 1) → результат 1 замість 2.",
              },
              {
                fr: "Exécution 2 : P1 lit i (0), P1 incrémente, P2 lit i (0), P1 écrit (i = 1), P2 incrémente et écrit (i = 1) → résultat 1 au lieu de 2.",
                en: "Execution 2: P1 reads i (0), P1 increments, P2 reads i (0), P1 writes (i = 1), P2 increments and writes (i = 1) → result 1 instead of 2.",
                uk: "Виконання 2: P1 читає i (0), P1 збільшує, P2 читає i (0), P1 записує (i = 1), P2 збільшує й записує (i = 1) → результат 1 замість 2.",
              },
              {
                fr: "Dans les deux cas, l'un des processeurs lit l'ancienne valeur de i avant que l'autre ne l'ait écrite : une mise à jour est perdue.",
                en: "In both cases, one processor reads the old value of i before the other has written it: one update is lost.",
                uk: "В обох випадках один із процесорів читає старе значення i, перш ніж інший його записав: одне оновлення втрачено.",
              },
            ],
          },
          {
            kind: "open",
            prompt: {
              fr: "Quelle solution envisager pour éviter ce problème ?",
              en: "What solution can be considered to avoid this problem?",
              uk: "Який розв'язок можна розглянути, щоб уникнути цієї проблеми?",
            },
            solution: {
              fr: "Isoler la zone de code concernée (par exemple i++) dans une section critique exécutée en exclusion mutuelle : un seul processeur à la fois. On encadre la section critique par un protocole d'entrée et un protocole de sortie (entreeSC() / sortieSC()) afin de la rendre atomique.",
              en: "Isolate the code zone concerned (for example i++) into a critical section executed under mutual exclusion: only one processor at a time. The critical section is framed by an entry protocol and an exit protocol (entreeSC() / sortieSC()) to make it atomic.",
              uk: "Ізолювати відповідну ділянку коду (наприклад i++) у критичну секцію, яка виконується за взаємного виключення: лише один процесор водночас. Критичну секцію обрамляють протоколом входу та протоколом виходу (entreeSC() / sortieSC()), щоб зробити її атомарною.",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Quel est l'équivalent d'une structure while et GOTO ?",
              en: "What is the equivalent of a while structure and GOTO?",
              uk: "Який еквівалент структури while і GOTO?",
            },
            solution: {
              fr: "Une boucle while (condition) corps; équivaut à un test suivi d'un saut :\n\ndebut : if (!condition) goto fin;\n       corps;\n       goto debut;\nfin :",
              en: "A while (condition) body; loop is equivalent to a test followed by a jump:\n\nstart: if (!condition) goto end;\n       body;\n       goto start;\nend:",
              uk: "Цикл while (condition) corps; еквівалентний перевірці з наступним переходом:\n\ndebut : if (!condition) goto fin;\n       corps;\n       goto debut;\nfin :",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Pour cette seule question, on utilisera une fonction atomique bool scUsed() qui renvoie false uniquement pour le premier processeur appelant. La fonction leaveSC() réinitialise cette fonction. Écrire entreeSC() et sortieSC().",
              en: "For this question only, an atomic function bool scUsed() is used, which returns false only for the first calling processor. The function leaveSC() resets this function. Write entreeSC() and sortieSC().",
              uk: "Лише для цього питання використаємо атомарну функцію bool scUsed(), яка повертає false тільки для першого процесора, що викликав. Функція leaveSC() скидає цю функцію. Написати entreeSC() і sortieSC().",
            },
            solution: {
              fr: "Le premier qui appelle scUsed() lit false et entre ; les suivants attendent activement jusqu'à ce qu'un sortieSC() appelle leaveSC().",
              en: "The first caller of scUsed() reads false and enters; the following ones wait actively until a sortieSC() calls leaveSC().",
              uk: "Перший, хто викликає scUsed(), читає false і входить; наступні активно чекають, доки якийсь sortieSC() викличе leaveSC().",
            },
            solutionItems: [
              {
                fr: "entreeSC() : while (scUsed()) attente;",
                en: "entreeSC(): while (scUsed()) attente;",
                uk: "entreeSC() : while (scUsed()) attente;",
              },
              {
                fr: "sortieSC() : leaveSC();",
                en: "sortieSC(): leaveSC();",
                uk: "sortieSC() : leaveSC();",
              },
            ],
          },
          {
            kind: "open",
            prompt: {
              fr: "Quel est le nom de la stratégie que vous avez utilisé dans entreeSC() de la question précédente ?",
              en: "What is the name of the strategy you used in entreeSC() of the previous question?",
              uk: "Як називається стратегія, яку ви використали в entreeSC() у попередньому питанні?",
            },
            solution: {
              fr: "L'attente active (busy waiting) : le processus scrute en boucle une condition (ici scUsed()) en consommant du temps de processeur, sans se bloquer.",
              en: "Busy waiting: the process repeatedly checks a condition (here scUsed()) while consuming CPU time, without blocking.",
              uk: "Активне очікування (busy waiting): процес у циклі опитує умову (тут scUsed()), споживаючи час процесора, не блокуючись.",
            },
          },
        ],
      },
      {
        title: { fr: "2.2 Utilisation d'un booléen d'occupation", en: "2.2 Using an occupation boolean", uk: "2.2 Використання булевої змінної зайнятості" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "Un processeur qui rentre dans la section critique modifie un booléen occ pour indiquer qu'il l'utilise.\n\nentreeSC(i) : while (occ) attente; occ = true;\nsortieSC(i) : occ = false;",
              en: "A processor entering the critical section modifies a boolean occ to indicate that it uses it.\n\nentreeSC(i): while (occ) attente; occ = true;\nsortieSC(i): occ = false;",
              uk: "Процесор, який входить у критичну секцію, змінює булеву змінну occ, щоб указати, що він її використовує.\n\nentreeSC(i) : while (occ) attente; occ = true;\nsortieSC(i) : occ = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Justifier.",
              en: "Does this specification allow mutual exclusion? Justify.",
              uk: "Чи дозволяє ця специфікація мати взаємне виключення? Обґрунтувати.",
            },
            solution: {
              fr: "Non : le test puis l'écriture de occ ne sont pas atomiques. Les deux processeurs peuvent lire occ == false en même temps, puis entrer tous les deux : même problème que la variable libre du CM2 (« Même problème que avant ! »).",
              en: "No: the test then the write of occ are not atomic. Both processors can read occ == false at the same time, then both enter: same problem as the libre variable from lecture 2 (“Same problem as before!”).",
              uk: "Ні: перевірка, а потім запис occ не є атомарними. Обидва процесори можуть одночасно прочитати occ == false, а потім увійти обидва: та сама проблема, що й зі змінною libre з КМ2 («Та сама проблема, що й раніше!»).",
            },
          },
        ],
      },
      {
        title: { fr: "2.3 Chacun son tour", en: "2.3 Each in his turn", uk: "2.3 Кожен по черзі" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "Un processeur attend que ce soit son tour, puis donne la main à l'autre en sortant.\n\nentreeSC(i) : while (tour != i) attente;\nsortieSC(i) : tour = j;",
              en: "A processor waits until it is its turn, then hands over to the other on exit.\n\nentreeSC(i): while (tour != i) attente;\nsortieSC(i): tour = j;",
              uk: "Процесор чекає своєї черги, а потім, виходячи, передає чергу іншому.\n\nentreeSC(i) : while (tour != i) attente;\nsortieSC(i) : tour = j;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
              uk: "Чи дозволяє ця специфікація мати взаємне виключення? Чи є інші проблеми в цій стратегії? Обґрунтувати.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : un seul processeur a le tour, donc un seul entre à la fois. Autre problème : si un processeur ne veut pas entrer (hors SC et hors protocole), tour ne change pas et l'autre attend indéfiniment : la propriété 3 (Condition de progression) est violée — aucun processus suspendu hors SC ne doit bloquer les autres.",
              en: "Yes, mutual exclusion is guaranteed: only one processor has the turn, so only one enters at a time. Other problem: if a processor does not want to enter (outside the SC and outside the protocol), tour never changes and the other waits forever: property 3 (progress condition) is violated — no process suspended outside the SC may block the others.",
              uk: "Так, взаємне виключення гарантоване: лише один процесор має чергу, отже, водночас входить лише один. Інша проблема: якщо процесор не хоче входити (поза КС і поза протоколом), tour не змінюється, і інший чекає нескінченно: властивість 3 (умова прогресу) порушена — жоден процес, призупинений поза КС, не повинен блокувати інших.",
            },
          },
        ],
      },
      {
        title: { fr: "2.4 Annonce de sa volonté d'entrer en SC", en: "2.4 Announcing one's will to enter the SC", uk: "2.4 Оголошення свого бажання увійти в КС" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "On annonce sa volonté d'entrer dans un tableau de 2 booléens indexé par i et j, puis on attend que l'autre n'ait plus la volonté d'entrer.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) attente;\nsortieSC(i) : demande[i] = false;",
              en: "One announces one's will to enter in an array of 2 booleans indexed by i and j, then waits until the other no longer wants to enter.\n\nentreeSC(i): demande[i] = true; while (demande[j]) attente;\nsortieSC(i): demande[i] = false;",
              uk: "Оголошуємо своє бажання увійти в масиві з 2 булевих, індексованому через i та j, а потім чекаємо, доки інший більше не матиме бажання увійти.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) attente;\nsortieSC(i) : demande[i] = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
              uk: "Чи дозволяє ця специфікація мати взаємне виключення? Чи є інші проблеми в цій стратегії? Обґрунтувати.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : le premier qui annonce sa volonté bloque l'entrée de l'autre. Autre problème : si les deux annoncent leur volonté en même temps, chacun attend que l'autre renonce : attente mutuelle infinie — la propriété 2 (Absence de blocage permanent) est violée (interblocage).",
              en: "Yes, mutual exclusion is guaranteed: the first one to announce its will blocks the other's entry. Other problem: if both announce their will at the same time, each waits for the other to renounce: infinite mutual wait — property 2 (absence of permanent blocking) is violated (deadlock).",
              uk: "Так, взаємне виключення гарантоване: перший, хто оголошує своє бажання, блокує вхід іншому. Інша проблема: якщо обидва оголошують своє бажання одночасно, кожен чекає, доки інший відмовиться: нескінченне взаємне очікування — властивість 2 (відсутність постійного блокування) порушена (взаємне блокування).",
            },
          },
        ],
      },
      {
        title: { fr: "2.5 Annonce de sa volonté, avec renonce", en: "2.5 Announcing one's will, with renounce", uk: "2.5 Оголошення свого бажання, з відмовою" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "Un processeur n'ayant pas réussi à rentrer (car l'autre a aussi annoncé sa volonté) annule son annonce et recommence.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) { demande[i] = false; attente; demande[i] = true; }\nsortieSC(i) : demande[i] = false;",
              en: "A processor that failed to enter (because the other also announced its will) withdraws its announcement and starts over.\n\nentreeSC(i): demande[i] = true; while (demande[j]) { demande[i] = false; attente; demande[i] = true; }\nsortieSC(i): demande[i] = false;",
              uk: "Процесор, якому не вдалося увійти (бо інший також оголосив своє бажання), скасовує своє оголошення і починає знову.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) { demande[i] = false; attente; demande[i] = true; }\nsortieSC(i) : demande[i] = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
              uk: "Чи дозволяє ця специфікація мати взаємне виключення? Чи є інші проблеми в цій стратегії? Обґрунтувати.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : l'annonce reste posée pendant tout le protocole d'entrée. Autre problème : si les deux renoncent et réannoncent en même temps, ils peuvent boucler sans que l'un n'entre jamais : famine possible — la propriété 4 (Équité) est violée.",
              en: "Yes, mutual exclusion is guaranteed: the announcement stays set throughout the entry protocol. Other problem: if both renounce and announce again at the same time, they may loop with neither ever entering: possible starvation — property 4 (fairness) is violated.",
              uk: "Так, взаємне виключення гарантоване: оголошення залишається встановленим протягом усього протоколу входу. Інша проблема: якщо обидва відмовляються й оголошують знову одночасно, вони можуть зациклитися, і жоден ніколи не увійде: можливе голодування — властивість 4 (справедливість) порушена.",
            },
          },
        ],
      },
      {
        title: { fr: "2.6 Demande et renonce si ce n'est pas mon tour", en: "2.6 Request and renounce if it is not my turn", uk: "2.6 Запит і відмова, якщо не моя черга" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "On fait une demande pour entrer en SC et on renonce si l'autre a aussi fait la demande et que ce n'est pas son tour.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; demande[i] = true; } }\nsortieSC(i) : demande[i] = false;",
              en: "One requests entry into the SC and renounces if the other has also requested and it is not one's turn.\n\nentreeSC(i): demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; demande[i] = true; } }\nsortieSC(i): demande[i] = false;",
              uk: "Робимо запит на вхід у КС і відмовляємося, якщо інший також зробив запит і це не наша черга.\n\nentreeSC(i) : demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; demande[i] = true; } }\nsortieSC(i) : demande[i] = false;",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Ce cahier des charges permet-il d'avoir une exclusion mutuelle ? Existe-t-il d'autres problèmes dans cette stratégie ? Justifier.",
              en: "Does this specification allow mutual exclusion? Are there other problems in this strategy? Justify.",
              uk: "Чи дозволяє ця специфікація мати взаємне виключення? Чи є інші проблеми в цій стратегії? Обґрунтувати.",
            },
            solution: {
              fr: "Oui, l'exclusion mutuelle est garantie : l'annonce reste posée tant qu'on n'est pas entré. Autre problème : en renonçant puis en redemandant aussitôt, sans attendre son tour, les deux processeurs peuvent renoncer en même temps et boucler sans entrer : famine possible — la propriété 4 (Équité) est violée. C'est ce que corrige Dekker, en attendant son tour avant de redemander.",
              en: "Yes, mutual exclusion is guaranteed: the announcement stays set until one has entered. Other problem: by renouncing then requesting again right away, without waiting for one's turn, both processors may renounce at the same time and loop without entering: possible starvation — property 4 (fairness) is violated. This is what Dekker fixes, by waiting for one's turn before requesting again.",
              uk: "Так, взаємне виключення гарантоване: оголошення залишається встановленим, доки ми не увійшли. Інша проблема: відмовляючись і одразу просячи знову, не чекаючи своєї черги, обидва процесори можуть відмовитися одночасно й зациклитися, не входячи: можливе голодування — властивість 4 (справедливість) порушена. Саме це виправляє Dekker, чекаючи своєї черги, перш ніж просити знову.",
            },
          },
        ],
      },
      {
        title: { fr: "2.7 Dekker 1966", en: "2.7 Dekker 1966", uk: "2.7 Dekker 1966" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "Voir le code du cahier des charges 2.7 ci-dessus : on renonce, on attend son tour avant de redemander, et on transmet le tour en sortie (tour = j).",
              en: "See the code of specification 2.7 above: one renounces, waits for one's turn before requesting again, and hands the turn over on exit (tour = j).",
              uk: "Див. код специфікації 2.7 вище: відмовляємося, чекаємо своєї черги, перш ніж просити знову, і передаємо чергу на виході (tour = j).",
            },
            solutionItems: [
              {
                fr: "Si on renonce, on attend son tour avant de redemander : while (tour != i) attente; puis demande[i] = true;",
                en: "If one renounces, one waits for one's turn before requesting again: while (tour != i) attente; then demande[i] = true;",
                uk: "Якщо відмовляємося, чекаємо своєї черги, перш ніж просити знову: while (tour != i) attente; потім demande[i] = true;",
              },
              {
                fr: "Si c'est son tour, on attend que l'autre ait renoncé avant d'entrer : le while (demande[j]) ne se termine que lorsque l'autre a renoncé.",
                en: "If it is one's turn, one waits for the other to have renounced before entering: the while (demande[j]) only ends when the other has renounced.",
                uk: "Якщо це наша черга, чекаємо, доки інший відмовиться, перш ніж увійти: while (demande[j]) завершується лише тоді, коли інший відмовився.",
              },
              {
                fr: "sortieSC(i) : tour = j; demande[i] = false; — on donne la main à l'autre.",
                en: "sortieSC(i): tour = j; demande[i] = false; — one hands over to the other.",
                uk: "sortieSC(i) : tour = j; demande[i] = false; — передаємо чергу іншому.",
              },
            ],
          },
        ],
      },
      {
        title: { fr: "2.8 Peterson 1981", en: "2.8 Peterson 1981", uk: "2.8 Peterson 1981" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire entreeSC et sortieSC.", en: "Write entreeSC and sortieSC.", uk: "Написати entreeSC і sortieSC." },
            solution: {
              fr: "Voir le code du cahier des charges 2.8 ci-dessus (celui du CM2, adapté à i et j) : dernier est le dernier à vouloir entrer, c'est lui qui attend. On se détache de la notion de tour.",
              en: "See the code of specification 2.8 above (the one from lecture 2, adapted to i and j): dernier is the last one wanting to enter, it is up to him to wait. We move away from the notion of turn.",
              uk: "Див. код специфікації 2.8 вище (той із КМ2, адаптований до i та j): dernier — останній, хто хоче увійти, саме він і чекає. Ми відходимо від поняття черги.",
            },
            solutionItems: [
              {
                fr: "entreeSC(i) : demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;",
                en: "entreeSC(i): demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;",
                uk: "entreeSC(i) : demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;",
              },
              {
                fr: "sortieSC(i) : demande[i] = false;",
                en: "sortieSC(i): demande[i] = false;",
                uk: "sortieSC(i) : demande[i] = false;",
              },
              {
                fr: "dernier indique le dernier qui fait la demande d'entrer en SC : c'est alors à lui d'attendre (l'autre peut entrer).",
                en: "dernier tells who last requested entry into the SC: it is then up to him to wait (the other may enter).",
                uk: "dernier вказує останнього, хто зробив запит на вхід у КС: тоді чекати саме йому (інший може увійти).",
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
      uk: "Шпаргалка до іспиту: довести Peterson",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Question type :** « Écrire l'entrée/sortie de section critique de Peterson et prouver les propriétés. »",
      en: "**Typical question:** “Write Peterson's critical-section entry/exit and prove the properties.”",
      uk: "**Типове питання:** «Написати вхід/вихід критичної секції Peterson і довести властивості.»",
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
          uk: "**Переписати код:** `demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente;` потім `demande[i] = false;` на виході.",
        },
      },
      {
        text: {
          fr: "**Exclusion mutuelle (propriété 1) :** pour entrer, i doit avoir `demande[j] == false` ou `dernier == j` ; pour j, `demande[i] == false` ou `dernier == i`. Les deux conditions ne peuvent être vraies ensemble : au plus un entre.",
          en: "**Mutual exclusion (property 1):** to enter, i must have `demande[j] == false` or `dernier == j`; for j, `demande[i] == false` or `dernier == i`. Both conditions cannot hold at once: at most one enters.",
          uk: "**Взаємне виключення (властивість 1):** щоб увійти, i повинен мати `demande[j] == false` або `dernier == j`; для j — `demande[i] == false` або `dernier == i`. Обидві умови не можуть бути істинними разом: щонайбільше один входить.",
        },
      },
      {
        text: {
          fr: "**Absence de blocage permanent (propriété 2) :** si les deux demandent en même temps, le dernier à écrire `dernier` cède la place : au moins un des deux franchit le `while` au bout d'un temps fini.",
          en: "**Absence of permanent blocking (property 2):** if both request at the same time, the last one to write `dernier` yields: at least one of the two passes the `while` within finite time.",
          uk: "**Відсутність постійного блокування (властивість 2):** якщо обидва запитують одночасно, останній, хто записав `dernier`, поступається місцем: принаймні один із двох долає `while` за скінченний час.",
        },
      },
      {
        text: {
          fr: "**Condition de progression (propriété 3) :** un processus hors SC et hors protocole n'écrit ni `demande` ni `dernier` : il ne peut empêcher personne d'entrer.",
          en: "**Progress condition (property 3):** a process outside the SC and outside the protocol writes neither `demande` nor `dernier`: it cannot prevent anyone from entering.",
          uk: "**Умова прогресу (властивість 3):** процес поза КС і поза протоколом не записує ні `demande`, ні `dernier`: він не може перешкодити нікому увійти.",
        },
      },
      {
        text: {
          fr: "**Équité (propriété 4) :** après avoir cédé, un processus n'attend qu'un passage de l'autre avant d'entrer à son tour : il n'attend pas indéfiniment.",
          en: "**Fairness (property 4):** after yielding, a process only waits for one pass of the other before entering in turn: it does not wait indefinitely.",
          uk: "**Справедливість (властивість 4):** після того як поступився, процес чекає лише одного проходу іншого, перш ніж увійти своєю чергою: він не чекає нескінченно.",
        },
      },
      {
        text: {
          fr: "**Phrase de conclusion :** « Peterson satisfait l'exclusion mutuelle, l'absence de blocage permanent, la condition de progression et l'équité, mais utilise l'attente active. »",
          en: "**Concluding sentence:** “Peterson satisfies mutual exclusion, absence of permanent blocking, progress condition and fairness, but uses busy waiting.”",
          uk: "**Речення-висновок:** «Peterson задовольняє взаємне виключення, відсутність постійного блокування, умову прогресу та справедливість, але використовує активне очікування.»",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "Ce qu'il faut maîtriser pour l'examen",
      en: "What to master for the exam",
      uk: "Що треба опанувати для іспиту",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Liste de contrôle du chapitre : ce qui doit être su **par cœur** et savoir **rédiger** en pseudo-code du TD4, sans hésiter.",
      en: "Chapter checklist: what must be known **by heart** and **written** in TD4 pseudocode without hesitation.",
      uk: "Контрольний список розділу: що треба знати **напам'ять** і вміти **писати** псевдокодом TD4, без вагань.",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Définitions :** action atomique, entrelacement, non-déterminisme, section critique, atomicité, exclusion mutuelle (au plus un processus en SC à la fois).",
          en: "**Definitions:** atomic action, interleaving, non-determinism, critical section, atomicity, mutual exclusion (at most one process in the CS at a time).",
          uk: "**Означення:** атомарна дія, чергування, недетермінізм, критична секція, атомарність, взаємне виключення (щонайбільше один процес у КС водночас).",
        },
      },
      {
        text: {
          fr: "**Les 4 propriétés**, avec leurs noms exacts : exclusion mutuelle, absence de blocage permanent, condition de progression, équité.",
          en: "**The 4 properties**, with their exact names: mutual exclusion, absence of permanent blocking, progress condition, fairness.",
          uk: "**4 властивості** з їхніми точними назвами: взаємне виключення, відсутність постійного блокування, умова прогресу, справедливість.",
        },
      },
      {
        text: {
          fr: "**Pseudo-assembleur de `i++`** (LOAD / ADD / STORE) et **deux scénarios** d'entrelacement donnant `i = 1` au lieu de `2`.",
          en: "**Pseudo-assembly of `i++`** (LOAD / ADD / STORE) and **two interleaving scenarios** giving `i = 1` instead of `2`.",
          uk: "**Псевдоасемблер `i++`** (LOAD / ADD / STORE) і **два сценарії** чергування, що дають `i = 1` замість `2`.",
        },
      },
      {
        text: {
          fr: "**Équivalence `while` / `GOTO`**, et la forme générale d'encadrement `entreeSC(); <Section Critique>; sortieSC();`.",
          en: "**`while` / `GOTO` equivalence**, and the general framing form `entreeSC(); <Section Critique>; sortieSC();`.",
          uk: "**Еквівалентність `while` / `GOTO`** і загальна форма обрамлення `entreeSC(); <Section Critique>; sortieSC();`.",
        },
      },
      {
        text: {
          fr: "**Écrire `entreeSC`/`sortieSC`** des sept cahiers des charges : `occ` (2.2), `tour` (2.3), `demande` seule (2.4), renonce (2.5), demande + tour (2.6), Dekker (2.7), Peterson (2.8).",
          en: "**Write `entreeSC`/`sortieSC`** for the seven specifications: `occ` (2.2), `tour` (2.3), `demande` alone (2.4), renounce (2.5), request + turn (2.6), Dekker (2.7), Peterson (2.8).",
          uk: "**Написати `entreeSC`/`sortieSC`** для семи специфікацій: `occ` (2.2), `tour` (2.3), лише `demande` (2.4), відмова (2.5), demande + tour (2.6), Dekker (2.7), Peterson (2.8).",
        },
      },
      {
        text: {
          fr: "Pour **chaque stratégie**, savoir dire en une phrase : **l'exclusion mutuelle est-elle garantie ?** et **quel problème subsiste / quelle propriété est violée ?**",
          en: "For **each strategy**, say in one sentence: **is mutual exclusion guaranteed?** and **which problem remains / which property is violated?**",
          uk: "Для **кожної стратегії** вміти сказати одним реченням: **чи гарантоване взаємне виключення?** і **яка проблема залишається / яка властивість порушена?**",
        },
      },
      {
        text: {
          fr: "Reconnaître les **trois familles** : solutions logicielles à attente active sans arbitrage ; solutions matérielles à attente active sans arbitrage (masquage des interruptions) ; solutions avec blocage, attente passive et arbitrage (sémaphores).",
          en: "Recognise the **three families**: software solutions with busy waiting and no arbitration; hardware solutions with busy waiting and no arbitration (interrupt masking); solutions with blocking, passive waiting and arbitration (semaphores).",
          uk: "Розпізнавати **три родини**: програмні розв'язки з активним очікуванням без арбітражу; апаратні розв'язки з активним очікуванням без арбітражу (маскування переривань); розв'язки з блокуванням, пасивним очікуванням та арбітражем (семафори).",
        },
      },
      {
        text: {
          fr: "**Peterson généralisé à `n` processus** : un tableau `niveau[n]` (initialisé à −1) et `dernier[n−1]`, avec `n − 1` niveaux à franchir en montant puis en descendant.",
          en: "**Peterson generalised to `n` processes**: an array `niveau[n]` (initialised to −1) and `dernier[n−1]`, with `n − 1` levels to climb then descend.",
          uk: "**Peterson, узагальнений на `n` процесів**: масив `niveau[n]` (ініціалізований −1) і `dernier[n−1]`, з `n − 1` рівнями, які треба подолати, піднімаючись, а потім спускаючись.",
        },
      },
      {
        text: {
          fr: "Situer le **producteur-consommateur** du côté de la **synchronisation** : c'est la première brique des solutions avec blocage et attente passive.",
          en: "Place the **producer-consumer** on the **synchronisation** side: it is the first building block of solutions with blocking and passive waiting.",
          uk: "Розмістити **виробника-споживача** на боці **синхронізації**: це перша цеглинка розв'язків із блокуванням і пасивним очікуванням.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Pièges classiques", en: "Classic traps", uk: "Класичні пастки" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`occ = true` (**affectation**) n'est pas `occ == true` (**comparaison**) — ne pas confondre dans le `while`.",
          en: "`occ = true` (**assignment**) is not `occ == true` (**comparison**) — do not swap them in the `while`.",
          uk: "`occ = true` (**присвоєння**) — це не `occ == true` (**порівняння**) — не плутати в `while`.",
        },
      },
      {
        text: {
          fr: "**Toujours réinitialiser** la variable partagée en sortie : `occ = false`, `demande[i] = false`, et `tour = j` chez Dekker.",
          en: "**Always reset** the shared variable on exit: `occ = false`, `demande[i] = false`, and `tour = j` in Dekker.",
          uk: "**Завжди скидати** спільну змінну на виході: `occ = false`, `demande[i] = false` і `tour = j` у Dekker.",
        },
      },
      {
        text: {
          fr: "`occ` commet la même erreur que `libre` : le **test puis l'écriture** ne sont pas atomiques — l'exclusion mutuelle **n'est pas garantie**.",
          en: "`occ` makes the same mistake as `libre`: the **test then write** is not atomic — mutual exclusion is **not guaranteed**.",
          uk: "`occ` робить ту саму помилку, що й `libre`: **перевірка, а потім запис** не є атомарними — взаємне виключення **не гарантоване**.",
        },
      },
      {
        text: {
          fr: "`tour` seul : l'exclusion mutuelle tient, mais la **propriété 3** est violée si l'autre ne veut pas entrer (blocage mutuel).",
          en: "`tour` alone: mutual exclusion holds, but **property 3** is violated if the other does not want to enter (mutual blocking).",
          uk: "Лише `tour`: взаємне виключення зберігається, але **властивість 3** порушена, якщо інший не хоче входити (взаємне блокування).",
        },
      },
      {
        text: {
          fr: "2.4 (annonce seule) : exclusion mutuelle garantie, mais **interblocage** si les deux annoncent — **propriété 2** violée.",
          en: "2.4 (announcement alone): mutual exclusion guaranteed, but **deadlock** if both announce — **property 2** violated.",
          uk: "2.4 (лише оголошення): взаємне виключення гарантоване, але **взаємне блокування**, якщо обидва оголошують — **властивість 2** порушена.",
        },
      },
      {
        text: {
          fr: "2.5 et 2.6 : exclusion mutuelle garantie, mais **famine** possible car on renonce et redemande sans attendre — **propriété 4** violée.",
          en: "2.5 and 2.6: mutual exclusion guaranteed, but **starvation** possible since one renounces and requests again without waiting — **property 4** violated.",
          uk: "2.5 і 2.6: взаємне виключення гарантоване, але можливе **голодування**, бо відмовляємося й просимо знову, не чекаючи — **властивість 4** порушена.",
        },
      },
      {
        text: {
          fr: "Dekker et Peterson : les **quatre propriétés** sont satisfaites, mais l'**attente active** consomme le processeur.",
          en: "Dekker and Peterson: the **four properties** are satisfied, but **busy waiting** burns the processor.",
          uk: "Dekker і Peterson: **чотири властивості** задоволені, але **активне очікування** споживає процесор.",
        },
      },
      {
        text: {
          fr: "`attente` est une **convention d'écriture**, pas une fonction : on ne la cherche pas dans une bibliothèque.",
          en: "`attente` is a **writing convention**, not a function: you will not find it in any library.",
          uk: "`attente` — це **домовленість щодо запису**, а не функція: її не шукають у бібліотеці.",
        },
      },
      {
        text: {
          fr: "Le TD4 interdit **tout support matériel** autre que l'**ordre des écritures** en mémoire : pas de test-and-set, pas d'instruction atomique privilégiée.",
          en: "TD4 forbids **any hardware support** other than the **order of memory writes**: no test-and-set, no privileged atomic instruction.",
          uk: "TD4 забороняє **будь-яку апаратну підтримку**, крім **порядку записів** у пам'ять: жодного test-and-set, жодної привілейованої атомарної інструкції.",
        },
      },
    ],
  },
];