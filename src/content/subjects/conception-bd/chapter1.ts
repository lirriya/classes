import type { Block } from "../../types";

export const chapterOne: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce premier chapitre répond à une question simple : **comment décrire des données du monde réel avant de les mettre dans un ordinateur ?** On utilise pour cela le **modèle Entité-Association (E-A)**. C'est une méthode de dessin et de description, très proche du langage naturel, qui sert de plan avant de construire la base de données.",
      en: "This first chapter answers a simple question: **how do we describe real-world data before putting it into a computer?** To do this we use the **Entity-Relationship (E-R) model**. It is a drawing and description method, very close to natural language, that serves as a blueprint before building the database.",
      uk: "У цьому першому розділі йдеться про просте запитання: **як описати дані реального світу перед тим, як помістити їх у комп'ютер?** Для цього використовується **модель «сутність — зв'язок» (E-R)**. Це метод малювання та опису, дуже близький до природної мови, що слугує проєктом перед побудовою бази даних.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "1. Pourquoi modéliser les données ?",
      en: "1. Why model data?",
      uk: "1. Чому слід моделювати дані?",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **SGBD** (Système de Gestion de Bases de Données) est un **ensemble de logiciels** qui permettent de **modéliser, manipuler et interroger** une base de données. Le SGBD joue le rôle d'**intermédiaire** entre les applications (ou les utilisateurs) et les données stockées.",
      en: "A **DBMS** (Database Management System) is a **set of software** that can **model, manipulate and query** a database. The DBMS acts as an **intermediary** between the applications (or users) and the stored data.",
      uk: "**СУБД** (Система управління базами даних) — це **набір програмних засобів**, що дає змогу **моделювати, маніпулювати та опитувати** базу даних. СУБД виступає **посередником** між застосунками (або користувачами) та збереженими даними.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Des fichiers aux bases de données",
      en: "From files to databases",
      uk: "Від файлів до баз даних",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Prenons le cas **« Scolarité des étudiants »**. Les données peuvent d'abord être organisées en **fichiers ou tables** séparés :",
      en: "Take the **« Student records »** case. The data can first be organised into separate **files or tables**:",
      uk: "Розглянемо випадок **«Облік студентів»**. Спочатку дані можна організувати в окремі **файли або таблиці**:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**ETUDIANTS** : NoEtudiant, Nom, Prénom, Adresse, NomFilière",
          en: "**STUDENTS** : StudentNo, LastName, FirstName, Address, ProgramName",
          uk: "**СТУДЕНТИ** : NoEtudiant, Nom, Prénom, Adresse, NomFilière",
        },
      },
      {
        text: {
          fr: "**FILIERES** : NomFilière, NomResponsable",
          en: "**PROGRAMS** : ProgramName, ManagerName",
          uk: "**СПЕЦІАЛЬНОСТІ** : NomFilière, NomResponsable",
        },
      },
      {
        text: {
          fr: "**MODULES** : NomModule, NomFilière, NbHeures, NomResponsable",
          en: "**MODULES** : ModuleName, ProgramName, Hours, ManagerName",
          uk: "**МОДУЛІ** : NomModule, NomFilière, NbHeures, NomResponsable",
        },
      },
      {
        text: {
          fr: "**NOTES** : NoEtudiant, NomModule, Note",
          en: "**GRADES** : StudentNo, ModuleName, Grade",
          uk: "**ОЦІНКИ** : NoEtudiant, NomModule, Note",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Ces données servent à plusieurs **traitements (applications)** : la **gestion des inscriptions** (étudiants, filières), la **gestion des enseignements** (filières, modules) et la **gestion des résultats** (modules, étudiants, notes). La base de données « Scolarité » regroupe ces tables et sert de source commune à toutes ces applications.",
      en: "This data feeds several **processes (applications)**: **enrolment management** (students, programs), **teaching management** (programs, modules) and **results management** (modules, students, grades). The « Student records » database gathers these tables and acts as a shared source for all these applications.",
      uk: "Ці дані використовуються в кількох **процесах (застосунках)**: **управління записом на навчання** (студенти, спеціальності), **управління навчальним процесом** (спеціальності, модулі) та **управління результатами** (модулі, студенти, оцінки). База даних «Облік студентів» об'єднує ці таблиці та слугує спільним джерелом для всіх цих застосунків.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Le modèle de données et l'abstraction",
      en: "The data model and abstraction",
      uk: "Модель даних та абстрагування",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Modéliser les données**, c'est **représenter les objets du monde réel** le plus fidèlement possible : de manière **cohérente**, **assez simple** et la plus **formelle** possible, grâce à un ensemble de concepts appelé **modèle de données**.",
      en: "**Modelling data** means **representing real-world objects** as faithfully as possible: coherently, simply enough, and as formally as possible, using a set of concepts called a **data model**.",
      uk: "**Моделювання даних** — це **представлення об'єктів реального світу** якомога точніше: послідовно, достатньо просто та якомога формально, за допомогою сукупності понять, що називається **моделлю даних**.",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Un **modèle de données** est un ensemble de **concepts** et de **règles de construction** permettant de décrire et de manipuler les données. C'est un **outil formel**.",
      en: "A **data model** is a set of **concepts** and **construction rules** used to describe and manipulate data. It is a **formal tool**.",
      uk: "**Модель даних** — це сукупність **понять** та **правил побудови**, що дає змогу описувати та маніпулювати даними. Це **формальний інструмент**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Tout modèle de données repose sur un **effort d'abstraction**. On passe :",
      en: "Every data model relies on an **effort of abstraction**. We move:",
      uk: "Будь-яка модель даних базується на **абстрагуванні**. Ми переходимо:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: { fr: "des **données** aux **structures de données** ;", en: "from **data** to **data structures**;", uk: "від **даних** до **структур даних**;" },
      },
      {
        text: { fr: "des **valeurs** aux **variables** ;", en: "from **values** to **variables**;", uk: "від **значень** до **змінних**;" },
      },
      {
        text: { fr: "d'un ensemble défini **par extension** à un ensemble défini **par intention**.", en: "from a set defined **by listing** to a set defined **by a rule**.", uk: "від множини, визначеної **перерахуванням** (за екстенсією), до множини, визначеної **правилом** (за інтенсією)." },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "On distingue donc deux notions : le **type d'objet** (un ensemble d'objets qui ont les mêmes propriétés et sont manipulés de la même façon) et l'**instance d'objet** (un élément précis de ce type, décrit par des valeurs). Les instances doivent **vérifier les propriétés** du type auquel elles appartiennent. Exemple : **Étudiant** est un type ; **Pierre** et **Paul** sont des instances. De même, **Discipline** est un type ; **Bases de Données** et **Algorithmique** sont des instances.",
      en: "So there are two notions: the **object type** (a set of objects that share the same properties and are handled the same way) and the **object instance** (a specific element of that type, described by values). Instances must **satisfy the properties** of their type. Example: **Student** is a type; **Pierre** and **Paul** are instances. Likewise, **Subject** is a type; **Databases** and **Algorithms** are instances.",
      uk: "Тож розрізняють два поняття: **тип об'єкта** (множина об'єктів, що мають однакові властивості й обробляються однаково) та **екземпляр об'єкта** (конкретний елемент цього типу, описаний значеннями). Екземпляри повинні **задовольняти властивості** типу, до якого вони належать. Приклад: **Студент** — це тип; **Pierre** та **Paul** — його екземпляри. Так само **Дисципліна** — тип; **Бази даних** та **Алгоритми** — екземпляри.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Type d'objet et instance", en: "Object type and instance", uk: "Тип об'єкта та екземпляр" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Modéliser consiste à décrire des objets **particuliers** (une personne précise) plutôt que des **ensembles** d'objets.",
        en: "Modelling means describing **particular** objects (one specific person) rather than **sets** of objects.",
        uk: "Моделювання полягає у описі **множин** об'єктів, а не **конкретних** об'єктів (однієї конкретної особи).",
      },
      answer: false,
      justification: {
        fr: "C'est l'inverse : on décrit les propriétés d'**ensembles** d'objets (les **types**). Les objets particuliers ne sont que des **instances** de ces types.",
        en: "It is the opposite: we describe the properties of **sets** of objects (the **types**). Particular objects are only **instances** of those types.",
        uk: "Навпаки: ми описуємо властивості **множин** об'єктів (їх **типів**). Конкретні об'єкти є лише **екземплярами** цих типів.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Définition du modèle de données", en: "Definition of a data model", uk: "Визначення моделі даних" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : un modèle de données est un ensemble de concepts et de **règles de construction** qui permet de décrire et de ______ les données.",
        en: "Complete: a data model is a set of concepts and **construction rules** used to describe and ______ data.",
        uk: "Доповніть: модель даних — це сукупність понять і **правил побудови**, що дає змогу описувати та ______ даними.",
      },
      blanks: [
        {
          accepted: ["manipuler", "manipulate"],
          mistakes: [
            {
              match: ["supprimer", "delete", "effacer"],
              feedback: {
                fr: "Non : le modèle sert à **décrire** et à **manipuler** les données (les opérations), pas seulement à les effacer.",
                en: "No: the model is used to **describe** and **manipulate** data (the operations), not just to delete it.",
                uk: "Ні: модель призначена для того, щоб **описувати** та **маніпулювати** даними (виконувати операції над ними), а не лише для їх видалення.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "Un modèle de données permet de **décrire** et de **manipuler** les données. C'est un outil formel composé de concepts et de règles.",
        en: "A data model is used to **describe** and **manipulate** data. It is a formal tool made of concepts and rules.",
        uk: "Модель даних дає змогу **описувати** та **маніпулювати** даними. Це формальний інструмент, що складається з понять та правил.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: {
      fr: "2. Qu'est-ce que la modélisation conceptuelle ?",
      en: "2. What is conceptual modelling?",
      uk: "2. Що таке концептуальне моделювання?",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **modélisation conceptuelle** est le processus qui permet d'obtenir, à partir du réel, un **schéma conceptuel de données**. Le mot **conceptuel** veut dire : le plus **indépendant possible** de la future machine, du futur langage et des futures utilisations.",
      en: "**Conceptual modelling** is the process that turns reality into a **conceptual data schema**. The word **conceptual** means: as **independent as possible** from the future machine, language and uses.",
      uk: "**Концептуальне моделювання** — це процес, у результаті якого реальний світ перетворюється на **концептуальну схему даних**. Слово «концептуальний» означає: якомога **більш незалежний** від майбутньої машини, мови та способів використання.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Objectif 1** : obtenir un modèle de données **valable quelle que soit la plate-forme informatique** envisagée.",
          en: "**Goal 1**: obtain a data model that is **valid whatever the computer platform**.",
          uk: "**Мета 1**: отримати модель даних, **придатну для будь-якої обчислювальної платформи**.",
        },
      },
      {
        text: {
          fr: "**Objectif 2** : obtenir un modèle **stable face à l'évolution** des besoins et des technologies.",
          en: "**Goal 2**: obtain a model that is **stable against changes** in needs and technologies.",
          uk: "**Мета 2**: отримати модель, **стабільну щодо змін** потреб та технологій.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Il existe plusieurs familles de modèles : le **modèle relationnel**, les **modèles sémantiques** (comme le modèle **Entité-Association** ou les réseaux sémantiques), les **modèles à objets**, et les modèles des bases **NoSQL**. La **démarche** classique est toujours la même : on part d'une **description informelle** du cas, on la traduit en **modèle Entité-Association**, puis on **transforme** ce schéma en code et en base de données. L'opération inverse s'appelle la **rétro-conception**.",
      en: "There are several families of models: the **relational model**, the **semantic models** (such as the **Entity-Relationship** model or semantic networks), the **object models**, and **NoSQL** models. The classic **approach** is always the same: start from an **informal description** of the case, translate it into an **Entity-Relationship model**, then **transform** that schema into code and a database. The reverse operation is called **reverse engineering**.",
      uk: "Існує кілька сімейств моделей: **реляційна модель**, **семантичні моделі** (зокрема модель **«сутність — зв'язок»** або семантичні мережі), **об'єктні моделі** та моделі баз даних **NoSQL**. Класична **методика** завжди однакова: починаємо з **неформального опису** задачі, перекладаємо його в модель **«сутність — зв'язок»**, потім **перетворюємо** цю схему в код та базу даних. Зворотну операцію називають **зворотним проєктуванням** (ретроконцепцією).",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "demarche",
        caption: {
          fr: "La démarche de conception : du réel au schéma E-A, puis du schéma E-A à la base de données.",
          en: "The design approach: from reality to the E-R schema, then from the E-R schema to the database.",
          uk: "Процес проєктування: від реальності до схеми E-R, потім від схеми E-R до бази даних.",
        },
        nodes: [
          { id: "reel", label: { fr: "Description informelle du cas", en: "Informal case description", uk: "Неформальний опис задачі" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "ea", label: { fr: "Modèle Entité-Association", en: "Entity-Relationship model", uk: "Модель «сутність — зв'язок»" }, x: 300, y: 0, shape: "box", tone: "soft" },
          { id: "bd", label: { fr: "Base de données", en: "Database", uk: "База даних" }, x: 620, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "reel", to: "ea", label: { fr: "modélisation", en: "modelling", uk: "моделювання" } },
          { from: "ea", to: "bd", label: { fr: "traduction", en: "translation", uk: "перетворення" } },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Démarche de conception", en: "Design approach", uk: "Процес проєктування" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "On passe directement du monde réel au schéma relationnel, sans passer par le schéma E-A.",
        en: "We go directly from reality to the relational schema, without going through the E-R schema.",
        uk: "Ми переходимо безпосередньо від реальності до реляційної схеми, минаючи схему E-R.",
      },
      answer: false,
      justification: {
        fr: "On passe par le **schéma conceptuel E-A** d'abord, puis on le transforme en schéma relationnel.",
        en: "We first go through the **conceptual E-R schema**, then transform it into a relational schema.",
        uk: "Спочатку ми створюємо **концептуальну схему E-R**, а потім перетворюємо її на реляційну схему.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Pourquoi le niveau conceptuel ?", en: "Why the conceptual level?", uk: "Навіщо потрібен концептуальний рівень?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pourquoi cherche-t-on un schéma **conceptuel** indépendant de la machine ?",
        en: "Why do we aim for a **conceptual** schema that is independent of the machine?",
        uk: "Чому ми прагнемо мати **концептуальну** схему, незалежну від машини?",
      },
      options: [
        {
          text: { fr: "Pour que le modèle reste valable même si la technologie ou les besoins changent.", en: "So the model stays valid even if the technology or the needs change.", uk: "Щоб модель залишалася дійсною навіть за зміни технологій чи потреб." },
          feedback: { fr: "Exactement : c'est l'objectif d'invariance.", en: "Exactly: that is the goal of invariance.", uk: "Саме так: це мета інваріантності моделі." },
        },
        {
          text: { fr: "Pour écrire plus vite le code SQL final.", en: "To write the final SQL code faster.", uk: "Щоб швидше написати кінцевий код SQL." },
          feedback: { fr: "Non : le schéma conceptuel ne dépend pas du langage final.", en: "No: the conceptual schema does not depend on the final language.", uk: "Ні: концептуальна схема не залежить від кінцевої мови." },
        },
        {
          text: { fr: "Parce que le modèle relationnel n'a qu'un seul concept.", en: "Because the relational model has only one concept.", uk: "Тому що реляційна модель має лише одне поняття." },
          feedback: { fr: "C'est une propriété du modèle relationnel, pas la raison du niveau conceptuel.", en: "That is a property of the relational model, not the reason for the conceptual level.", uk: "Це властивість реляційної моделі, а не причина використання концептуального рівня." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Un schéma conceptuel doit être **valable quelle que soit la plate-forme** et **invariant face à l'évolution** fonctionnelle et technologique.",
        en: "A conceptual schema must be **valid whatever the platform** and **invariant against functional and technological change**.",
        uk: "Концептуальна схема повинна бути **придатною для будь-якої платформи** та **інваріантною щодо функціональних і технологічних змін**.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: {
      fr: "3. Le modèle Entité-Association",
      en: "3. The Entity-Relationship model",
      uk: "3. Модель «сутність — зв'язок»",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le modèle E-A est l'un des **principaux modèles conceptuels de données**. Il vient des travaux de **Chen** aux États-Unis (Entity-Relationship) et, en France, du **projet Merise**, à la fin des **années 70**. Ses deux forces sont :",
      en: "The E-R model is one of the **main conceptual data models**. It comes from the work of **Chen** in the United States (Entity-Relationship) and, in France, from the **Merise project**, in the late **1970s**. Its two strengths are:",
      uk: "Модель E-R є однією з **основних концептуальних моделей даних**. Вона походить із праць **Chen** у США (Entity-Relationship), а у Франції — із **проєкту Merise**, наприкінці **1970-х** років. Її дві головні переваги:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "des **concepts simples** : un langage de haut niveau compréhensible par tous grâce à sa **représentation graphique** ;",
          en: "**simple concepts**: a high-level language understandable by everyone thanks to its **graphical representation**;",
          uk: "**прості поняття**: мова високого рівня, зрозуміла всім завдяки **графічному представленню**;",
        },
      },
      {
        text: {
          fr: "des **concepts puissants** : on peut représenter, de façon naturelle, presque n'importe quel objet du monde réel.",
          en: "**powerful concepts**: almost any real-world object can be represented naturally.",
          uk: "**потужні поняття**: практично будь-який об'єкт реального світу можна природно представити.",
        },
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: {
      fr: "4. Entité, association et propriété",
      en: "4. Entity, association and property",
      uk: "4. Сутність, зв'язок та властивість",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'entité et le type entité", en: "The entity and the entity type", uk: "Сутність та тип сутності" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **entité** représente un **objet concret ou abstrait du réel** (un individu, un événement...) qui est **individualisable** (il a une existence propre) et qui **présente un intérêt** pour lequel on veut enregistrer des informations. Le choix de ce qui est une entité appartient au **concepteur**. Exemples : l'étudiant **<Pierre>**, le module **<Bases de Données>**, la filière **<Licence Informatique>**.",
      en: "An **entity** represents a **concrete or abstract real-world object** (a person, an event...) that is **individualisable** (it has its own existence) and that **matters** enough for us to store information about it. What counts as an entity is a **designer's choice**. Examples: the student **<Pierre>**, the module **<Databases>**, the program **<Computer Science Bachelor>**.",
      uk: "**Сутність** — це **конкретний або абстрактний об'єкт реального світу** (особа, подія тощо), який є **індивідуалізованим** (має власне існування) та **становить інтерес**, через що про нього потрібно зберігати інформацію. Що вважати сутністю — вирішує **проєктант**. Приклади: студент **<Pierre>**, модуль **<Бази даних>**, спеціальність **<Комп'ютерні науки>**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les entités qui présentent les **mêmes propriétés** sont regroupées en classes appelées **types entités** (ou entités-types). Un type entité porte un **nom unique**. Exemples : **Étudiant** (Nom, NoEtudiant, Adresse), **Module** (NomModule, NbHeures, Responsable), mais aussi Enseignant, Article, Client, Commande...",
      en: "Entities that share the **same properties** are grouped into classes called **entity types**. An entity type has a **unique name**. Examples: **Student** (Name, StudentNo, Address), **Module** (ModuleName, Hours, Manager), but also Teacher, Article, Customer, Order...",
      uk: "Сутності, що мають **однакові властивості**, об'єднуються в класи, що називаються **типами сутностей**. Кожен тип сутності має **унікальне ім'я**. Приклади: **Студент** (Nom, NoEtudiant, Adresse), **Модуль** (NomModule, NbHeures, Responsable), а також Викладач, Стаття, Клієнт, Замовлення...",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une entité appartient à un type : on parle d'**occurrence** (ou d'instance) du type entité. L'**extension** d'un type entité est l'ensemble de ses occurrences. Exemple : le type **Étudiant** a pour extension `{<Pierre, 2345, Metz>, <Paul, 2346, Nanc>, …}`.",
      en: "An entity belongs to a type: we then speak of an **occurrence** (or instance) of the entity type. The **extension** of an entity type is the set of its occurrences. Example: the type **Student** has as its extension `{<Pierre, 2345, Metz>, <Paul, 2346, Nanc>, …}`.",
      uk: "Сутність належить до певного типу: кажуть про **екземпляр** (occurrence/instance) типу сутності. **Розширенням** (extension) типу сутності є множина всіх його екземплярів. Приклад: тип **Студент** має розширення `{<Pierre, 2345, Metz>, <Paul, 2346, Nanc>, …}`.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'identifiant d'un type entité", en: "The identifier of an entity type", uk: "Ідентифікатор типу сутності" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour pouvoir **identifier de façon unique** chaque occurrence d'un type entité, celui-ci doit posséder **une ou plusieurs propriétés jouant le rôle d'identifiant**. Exemple : le **numéro d'étudiant** identifie le type **Étudiant** ; l'**intitulé du module** identifie le type **Module**.",
      en: "To **uniquely identify** each occurrence of an entity type, it must have **one or more properties acting as an identifier**. Example: the **student number** identifies the **Student** type; the **module title** identifies the **Module** type.",
      uk: "Щоб **унікально ідентифікувати** кожен екземпляр типу сутності, цей тип повинен мати **одну або кілька властивостей, що виконують роль ідентифікатора**. Приклад: **номер студента** ідентифікує тип **Студент**; **назва модуля** ідентифікує тип **Модуль**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Un identifiant peut être **naturel** (Nom, Nom + Prénom + Date de naissance, Référence...) ou **artificiel** (NoEtudiant, Matricule, Code, No d'ordre...).",
          en: "An identifier can be **natural** (Name, Name + First name + Birth date, Reference...) or **artificial** (StudentNo, StaffNo, Code, Serial number...).",
          uk: "Ідентифікатор може бути **природним** (Nom, Nom + Prénom + Date de naissance, Référence...) або **штучним** (NoEtudiant, Matricule, Code, No d'ordre...).",
        },
      },
      {
        text: {
          fr: "Il peut y avoir **plusieurs identifiants possibles** : on en choisit un comme **identifiant principal (clé primaire)**, les autres deviennent des **identifiants secondaires**.",
          en: "There may be **several possible identifiers**: one is chosen as the **primary identifier (primary key)**, the others become **secondary identifiers**.",
          uk: "Може бути **кілька можливих ідентифікаторів**: один обирають як **основний ідентифікатор (первинний ключ)**, інші стають **додатковими ідентифікаторами**.",
        },
      },
      {
        text: {
          fr: "Exemple : un étudiant peut être identifié soit par son **numéro d'étudiant**, soit par son **Nom + Prénom + Date de naissance**.",
          en: "Example: a student can be identified either by the **student number** or by **Last name + First name + Birth date**.",
          uk: "Приклад: студента можна ідентифікувати або за **номером студента**, або за комбінацією **Nom + Prénom + Date de naissance**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'association et le type association", en: "The association and the association type", uk: "Зв'язок та тип зв'язку" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **association** est un **lien sémantique** qui relie un ensemble d'entités (pas forcément distinctes). Chaque entité y joue un **rôle déterminé**. Une association est donc définie par un ensemble d'**au moins deux rôles**, chacun joué par une et une seule entité. Une association **n'existe qu'à travers les entités** qui la composent, et elle peut porter **ses propres attributs**.",
      en: "An **association** is a **semantic link** connecting a set of entities (not necessarily distinct). Each entity plays a **determined role**. An association is therefore defined by a set of **at least two roles**, each played by exactly one entity. An association **exists only through the entities** that make it up, and it can carry **its own attributes**.",
      uk: "**Зв'язок** — це **семантичне з'єднання**, що пов'язує множину сутностей (не обов'язково різних). Кожна сутність у зв'язку виконує **певну роль**. Тож зв'язок визначається сукупністю **принаймні двох ролей**, і кожну роль виконує рівно одна сутність. Зв'язок **існує лише через сутності**, що його утворюють, і може мати **власні атрибути**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "L'étudiant **Pierre** est inscrit dans la filière **Licence Informatique** → `<Pierre, Licence Informatique>`.", en: "Student **Pierre** is enrolled in the program **Computer Science Bachelor** → `<Pierre, Computer Science Bachelor>`.", uk: "Студент **Pierre** зарахований на спеціальність **Комп'ютерні науки** → `<Pierre, Комп'ютерні науки>`." } },
      { text: { fr: "**Pierre** a obtenu dans le module **Bases de Données** la note **18** → `<Pierre, Bases de Données, 18>`.", en: "**Pierre** got the grade **18** in the module **Databases** → `<Pierre, Databases, 18>`.", uk: "**Pierre** отримав оцінку **18** з модуля **Бази даних** → `<Pierre, Бази даних, 18>`." } },
      { text: { fr: "L'enseignant **Chelghoum** est responsable du module **Bases de Données** → `<Chelghoum, Bases de Données>`.", en: "Teacher **Chelghoum** is responsible for the module **Databases** → `<Chelghoum, Databases>`.", uk: "Викладач **Chelghoum** відповідає за модуль **Бази даних** → `<Chelghoum, Бази даних>`." } },
      { text: { fr: "La commande **C123** concerne l'article **A1** pour une quantité de **10** → `<C123, A1, 10>`.", en: "Order **C123** includes the article **A1** for a quantity of **10** → `<C123, A1, 10>`.", uk: "Замовлення **C123** містить товар **A1** у кількості **10** → `<C123, A1, 10>`." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Comme les entités, les associations sont regroupées en **types associations** : un ensemble d'associations de même nature (même sémantique), composées des **mêmes rôles**. Un type association porte un **nom unique**, et un **rôle** a lui aussi un nom unique. **Toutes** les entités jouant un rôle déterminé appartiennent au **même type entité**.",
      en: "Like entities, associations are grouped into **association types**: a set of associations of the same nature (same semantics) made of the **same roles**. An association type has a **unique name**, and a **role** also has a unique name. **All** entities playing a given role belong to the **same entity type**.",
      uk: "Подібно до сутностей, зв'язки об'єднуються в **типи зв'язків**: множину зв'язків однакової природи (однакової семантики), що складаються з **однакових ролей**. Тип зв'язку має **унікальне ім'я**, а **роль** також має унікальне ім'я. **Усі** сутності, що виконують певну роль, належать до **одного й того ж типу сутності**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Inscrire (Étudiant, Filière)** : les étudiants sont inscrits dans des filières.", en: "**Enrol (Student, Program)**: students are enrolled in programs.", uk: "**Зарахувати (Студент, Спеціальність)**: студенти зараховуються на спеціальності." } },
      { text: { fr: "**Etre_Responsable (Enseignant, Module)** : les modules sont sous la responsabilité d'enseignants.", en: "**Be_Responsible (Teacher, Module)**: modules are the responsibility of teachers.", uk: "**Бути_відповідальним (Викладач, Модуль)**: модулі перебувають у підпорядкуванні викладачів." } },
      { text: { fr: "**Commander (Commande, Article, Quantité)** : le type association peut porter la propriété **Quantité**.", en: "**Order (Order, Article, Quantity)**: the association type can carry the property **Quantity**.", uk: "**Замовити (Замовлення, Товар, Кількість)**: тип зв'язку може мати властивість **Кількість**." } },
      { text: { fr: "**Marier_A (Épouse : Personne, Époux : Personne)** : association réflexive entre personnes.", en: "**Marry_A (Wife : Person, Husband : Person)**: a reflexive association between people.", uk: "**Одружитися (Дружина : Особа, Чоловік : Особа)**: рефлексивний зв'язок між особами." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Le **degré** d'une association est le **nombre de rôles** qu'elle contient : **2 rôles** → association **binaire** ; **plus de 2 rôles** → association **n-aire**.",
      en: "The **degree** of an association is the **number of roles** it contains: **2 roles** → **binary** association; **more than 2 roles** → **n-ary** association.",
      uk: "**Ступінь** (degree) зв'язку — це **кількість ролей**, яку він містить: **2 ролі** → **бінарний** зв'язок; **більше 2 ролей** → **n-арний** зв'язок.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "La propriété (ou attribut)", en: "The property (or attribute)", uk: "Властивість (або атрибут)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **propriété** est une **donnée élémentaire munie d'un sens**. Elle sert à **décrire les entités et les associations**. On l'appelle aussi **attribut** ou **caractéristique**. Une propriété est définie par un **nom** et une **valeur** prise dans un **domaine de valeurs**.",
      en: "A **property** is an **elementary piece of data with a meaning**. It is used to **describe entities and associations**. It is also called an **attribute** or a **characteristic**. A property is defined by a **name** and a **value** taken from a **value domain**.",
      uk: "**Властивість** — це **елементарний фрагмент даних, що має зміст**. Вона використовується для **опису сутностей і зв'язків**. Її також називають **атрибутом** або **характеристикою**. Властивість визначається **назвою** та **значенням**, яке належить до **області допустимих значень** (домену).",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Un étudiant est connu par son **numéro étudiant, son nom, son prénom, son adresse**.", en: "A student is known by his **student number, last name, first name, address**.", uk: "Студента характеризують **номер студента, прізвище, ім'я, адреса**." } },
      { text: { fr: "Une propriété peut aussi décrire une association : un étudiant **obtient une note** à chaque module.", en: "A property can also describe an association: a student **gets a grade** in each module.", uk: "Властивість може також описувати зв'язок: студент **отримує оцінку** за кожен модуль." } },
      { text: { fr: "Le **domaine** précise les valeurs permises : le **numéro étudiant** est un entier ; le **nom** est une chaîne de caractères ; la **note** est un nombre entre 0 et 20.", en: "The **domain** states the allowed values: the **student number** is an integer; the **name** is a string; the **grade** is a number between 0 and 20.", uk: "**Домен** визначає допустимі значення: **номер студента** — ціле число; **прізвище** — рядок символів; **оцінка** — число від 0 до 20." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Entité ou association ?", en: "Entity or association?", uk: "Сутність чи зв'язок?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "« L'étudiant **Pierre** obtient la **note 18** dans le module **Bases de Données**. » Comment modéliser **Note** ?",
        en: "« Student **Pierre** gets grade **18** in the module **Databases**. » How should **Grade** be modelled?",
        uk: "«Студент **Pierre** отримує оцінку **18** з модуля **Бази даних**». Як слід моделювати **Оцінку**?",
      },
      options: [
        {
          text: { fr: "Comme une **propriété portée par l'association** entre Étudiant et Module.", en: "As a **property carried by the association** between Student and Module.", uk: "Як **властивість, що належить зв'язку** між Студентом і Модулем." },
          feedback: { fr: "Oui : la note existe grâce au couple (étudiant, module). C'est une propriété d'association.", en: "Yes: the grade exists thanks to the (student, module) pair. It is an association property.", uk: "Так: оцінка існує лише для пари (студент, модуль). Це властивість зв'язку." },
        },
        {
          text: { fr: "Comme une propriété de l'entité **Étudiant** uniquement.", en: "As a property of the **Student** entity only.", uk: "Як властивість лише сутності **Студент**." },
          feedback: { fr: "Non : un étudiant a plusieurs notes, une par module. La note dépend du couple.", en: "No: a student has several grades, one per module. The grade depends on the pair.", uk: "Ні: у студента кілька оцінок — по одній на модуль. Оцінка залежить саме від пари (студент, модуль)." },
        },
        {
          text: { fr: "Comme une propriété de l'entité **Module** uniquement.", en: "As a property of the **Module** entity only.", uk: "Як властивість лише сутності **Модуль**." },
          feedback: { fr: "Non : un module a plusieurs notes, une par étudiant.", en: "No: a module has several grades, one per student.", uk: "Ні: у модуля кілька оцінок — по одній на студента." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "La note n'a de sens que pour un **couple (Étudiant, Module)** : c'est donc une **propriété du type association Obtenir_Note(Étudiant, Module, Note)**.",
        en: "The grade only makes sense for a **(Student, Module) pair**: so it is a **property of the association type Get_Grade(Student, Module, Grade)**.",
        uk: "Оцінка має сенс лише для **пари (Студент, Модуль)**, тому вона є **властивістю типу зв'язку Отримати_Оцінку(Студент, Модуль, Note)**.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'identifiant d'un type association", en: "The identifier of an association type", uk: "Ідентифікатор типу зв'язку" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **type association n'a pas d'identifiant propre** : il est déterminé par l'**ensemble des identifiants des types entités** qui participent. Souvent, un **sous-ensemble strict** suffit ; ce sous-ensemble se déduit des **cardinalités des rôles** :",
      en: "An **association type has no identifier of its own**: it is determined by the **set of identifiers of the participating entity types**. Often a **strict subset** is enough; that subset is found from the **cardinalities of the roles**:",
      uk: "**Тип зв'язку не має власного ідентифікатора**: він визначається **сукупністю ідентифікаторів типів сутностей**, що беруть участь. Часто достатньо **строгого підмножини**; цю підмножину виводять із **кардинальностей ролей**:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Si** un type association possède un rôle dont la **cardinalité maximale vaut 1**, alors l'identifiant de l'association est celui du **type entité jouant ce rôle**.",
          en: "**If** an association type has a role whose **maximum cardinality is 1**, then the identifier of the association is the one of the **entity type playing that role**.",
          uk: "**Якщо** тип зв'язку має роль із **максимальною кардинальністю 1**, то ідентифікатором зв'язку є ідентифікатор **типу сутності, що виконує цю роль**.",
        },
      },
      {
        text: {
          fr: "**Sinon**, l'identifiant de l'association est formé par l'**ensemble des identifiants** des types entités jouant un rôle.",
          en: "**Otherwise**, the identifier of the association is formed by the **set of identifiers** of the entity types playing a role.",
          uk: "**Інакше** ідентифікатор зв'язку утворюється **сукупністю ідентифікаторів** типів сутностей, що виконують ролі у цьому зв'язку.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Clé d'une association", en: "Key of an association", uk: "Ключ зв'язку" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Le type association **Obtenir_Note(Étudiant, Module, Note)**, où aucun rôle n'a de cardinalité maximale de 1, a pour identifiant **le couple (NoEtudiant, NomModule)**.",
        en: "The association type **Get_Grade(Student, Module, Grade)**, where no role has a maximum cardinality of 1, has as its identifier **the pair (StudentNo, ModuleName)**.",
        uk: "Тип зв'язку **Отримати_Оцінку(Студент, Модуль, Note)**, де жодна роль не має максимальної кардинальності 1, має ідентифікатор **(NoEtudiant, NomModule)**.",
      },
      answer: true,
      justification: {
        fr: "Correct : ici aucun rôle n'est à maximum 1, donc l'identifiant est l'**ensemble des identifiants** des entités participantes : **(NoEtudiant, NomModule)**.",
        en: "Correct: here no role has a maximum of 1, so the identifier is the **set of identifiers** of the participating entities: **(StudentNo, ModuleName)**.",
        uk: "Правильно: тут жодна роль не має максимальної кардинальності 1, тож ідентифікатор зв'язку — це **сукупність ідентифікаторів** сутностей, що беруть участь: **(NoEtudiant, NomModule)**.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Identifier un rôle à cardinalité max 1", en: "Role with max cardinality 1", uk: "Ідентифікатор ролі з максимальною кардинальністю 1" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Si un rôle a la cardinalité **(1,1)**, l'identifiant de l'association peut être...",
        en: "If a role has cardinality **(1,1)**, the association identifier can be...",
        uk: "Якщо роль має кардинальність **(1,1)**, ідентифікатор зв'язку може бути...",
      },
      options: [
        {
          text: { fr: "réduit à l'identifiant de l'entité jouant ce rôle.", en: "reduced to the identifier of the entity playing that role.", uk: "зведений до ідентифікатора сутності, що виконує цю роль." },
          feedback: { fr: "Oui : règle 1 — si un rôle est (1,1), l'association est déterminée par ce rôle.", en: "Yes: rule 1 — if a role is (1,1), the association is determined by that role.", uk: "Так: правило 1 — якщо роль має кардинальність (1,1), зв'язок визначається саме цією роллю." },
        },
        {
          text: { fr: "toujours l'ensemble de tous les identifiants.", en: "always the set of all identifiers.", uk: "завжди сукупністю всіх ідентифікаторів." },
          feedback: { fr: "Non : c'est le cas si aucun rôle n'a de cardinalité maximale de 1.", en: "No: that's when no role has maximum cardinality of 1.", uk: "Ні: це спостерігається лише тоді, коли жодна роль не має максимальної кардинальності 1." },
        },
        {
          text: { fr: "un numéro arbitraire.", en: "an arbitrary number.", uk: "довільним номером." },
          feedback: { fr: "Non : l'identifiant se déduit des entités participantes.", en: "No: the identifier is derived from the participating entities.", uk: "Ні: ідентифікатор виводиться з ідентифікаторів сутностей, що беруть участь." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Si un rôle a (1,1), l'identifiant de l'association est celui du type entité jouant ce rôle.",
        en: "If a role has (1,1), the association identifier is the identifier of the entity type playing that role.",
        uk: "Якщо роль має кардинальність (1,1), ідентифікатором зв'язку є ідентифікатор типу сутності, що виконує цю роль.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: {
      fr: "5. Les cardinalités",
      en: "5. Cardinalities",
      uk: "5. Кардинальності",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **contraintes de cardinalité** servent à préciser **combien de fois** une entité peut apparaître dans une association. À **chaque rôle** on attache un couple **(i, j)** qui signifie : toute entité jouant ce rôle le joue un **nombre de fois compris entre i et j**.",
      en: "**Cardinality constraints** specify **how many times** an entity may appear in an association. To **each role** we attach a pair **(i, j)** meaning: any entity playing this role plays it a **number of times between i and j**.",
      uk: "**Обмеження кардинальності** визначають, **скільки разів** сутність може брати участь у зв'язку. До **кожної ролі** приписують пару **(i, j)**, що означає: будь-яка сутність, що виконує цю роль, бере участь у зв'язку **від i до j разів**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**i** est la **cardinalité minimale** : le plus souvent **0** (aucune fois) ou **1** (une fois).", en: "**i** is the **minimum cardinality**: most often **0** (no time) or **1** (one time).", uk: "**i** — **мінімальна кардинальність**: найчастіше **0** (жодного разу) або **1** (один раз)." } },
      { text: { fr: "**j** est la **cardinalité maximale** : le plus souvent **1** (une fois) ou **N** (plus d'une fois).", en: "**j** is the **maximum cardinality**: most often **1** (one time) or **N** (more than once).", uk: "**j** — **максимальна кардинальність**: найчастіше **1** (один раз) або **N** (більше одного разу)." } },
    ],
  },
  {
    type: "list",
    items: [
      { text: { fr: "**(1,1)** : l'entité joue ce rôle **exactement une fois** (obligatoire et unique).", en: "**(1,1)**: the entity plays this role **exactly once** (mandatory and unique).", uk: "**(1,1)**: сутність виконує цю роль **рівно один раз** (обов'язково та унікально)." } },
      { text: { fr: "**(0,1)** : l'entité joue ce rôle **au plus une fois** (facultatif, 0 ou 1).", en: "**(0,1)**: the entity plays this role **at most once** (optional, 0 or 1).", uk: "**(0,1)**: сутність виконує цю роль **не більше одного разу** (необов'язково, 0 або 1)." } },
      { text: { fr: "**(1,N)** : l'entité joue ce rôle **au moins une fois**, et peut le jouer plusieurs fois.", en: "**(1,N)**: the entity plays this role **at least once**, and possibly several times.", uk: "**(1,N)**: сутність виконує цю роль **принаймні один раз** і може виконувати її кілька разів." } },
      { text: { fr: "**(0,N)** : l'entité joue ce rôle **de zéro à plusieurs fois** (facultatif et multiple).", en: "**(0,N)**: the entity plays this role **from zero to several times** (optional and multiple).", uk: "**(0,N)**: сутність виконує цю роль **від нуля до кількох разів** (необов'язково, багаторазово)." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Exemples : un **étudiant est inscrit dans au moins une filière** et **dans une filière peuvent être inscrits plusieurs étudiants**. Une **personne peut être assurée par plusieurs contrats** et **un contrat assure au moins une personne**. Une **personne est mariée à au plus une autre personne** → rôle (0,1).",
      en: "Examples: a **student is enrolled in at least one program** and **a program may contain several students**. A **person may be insured by several contracts** and **a contract insures at least one person**. A **person is married to at most one other person** → role (0,1).",
      uk: "Приклади: **студент зарахований принаймні на одну спеціальність**, а **на спеціальність може бути зараховано кількох студентів**. **Особа може бути застрахована за кількома договорами**, а **договір страхує принаймні одну особу**. **Особа одружена щонайбільше з однією іншою особою** → роль (0,1).",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "scolarite-card",
        caption: {
          fr: "Type association Inscrire : cardinalités sur chaque rôle.",
          en: "Association Enrol: cardinalities on each role.",
          uk: "Тип зв'язку «Зарахувати»: кардинальності для кожної ролі.",
        },
        nodes: [
          { id: "etudiant", label: { fr: "ÉTUDIANT", en: "STUDENT", uk: "СТУДЕНТ" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "inscrire", label: { fr: "Inscrire", en: "Enrol", uk: "Зарахувати" }, x: 260, y: 0, shape: "box", tone: "soft" },
          { id: "filiere", label: { fr: "FILIÈRE", en: "PROGRAM", uk: "СПЕЦІАЛЬНІСТЬ" }, x: 520, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "etudiant", to: "inscrire", label: "(1,N)" },
          { from: "inscrire", to: "filiere", label: "(0,N)" },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Lire une cardinalité", en: "Reading a cardinality", uk: "Читання кардинальності" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Le rôle côté **Étudiant** porte la cardinalité **(1,N)** dans l'association Inscrire. Que cela signifie-t-il ?",
        en: "The role on the **Student** side has cardinality **(1,N)** in the Enrol association. What does it mean?",
        uk: "Роль з боку **Студента** у зв'язку «Зарахувати» має кардинальність **(1,N)**. Що це означає?",
      },
      options: [
        {
          text: { fr: "Un étudiant doit être inscrit dans **au moins une filière** (et peut l'être dans plusieurs).", en: "A student must be enrolled in **at least one program** (and may be in several).", uk: "Студент повинен бути зарахований **принаймні на одну спеціальність** (і може бути зарахований на кілька)." },
          feedback: { fr: "Oui : minimum 1 (obligatoire), maximum N (plusieurs).", en: "Yes: minimum 1 (mandatory), maximum N (several).", uk: "Так: мінімум 1 (обов'язково), максимум N (кілька)." },
        },
        {
          text: { fr: "Une filière contient exactement un étudiant.", en: "A program contains exactly one student.", uk: "На спеціальності навчається рівно один студент." },
          feedback: { fr: "Non : cette phrase décrit l'autre rôle, et 1 signifie « au moins un », pas « exactement un ».", en: "No: that describes the other role, and 1 means 'at least one', not 'exactly one'." , uk: "Ні: це описує протилежну роль, а (1,N) означає «принаймні один», а не «рівно один»."},
        },
        {
          text: { fr: "Un étudiant peut ne pas être inscrit du tout.", en: "A student may not be enrolled at all.", uk: "Студент може взагалі не бути зарахованим." },
          feedback: { fr: "Non : le minimum 1 rend l'inscription obligatoire.", en: "No: minimum 1 makes enrolment mandatory.", uk: "Ні: мінімальна кардинальність 1 означає, що зарахування обов'язкове." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Dans un couple **(i, j)**, **i** est le minimum et **j** le maximum. **(1,N)** = au moins une fois, plusieurs fois possibles.",
        en: "In a **(i, j)** pair, **i** is the minimum and **j** the maximum. **(1,N)** = at least once, several times possible.",
        uk: "У парі **(i, j)** **i** — це мінімум, а **j** — максимум. **(1,N)** означає принаймні один раз, можливо кілька разів.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Signification des couples (0,1) et (1,1)", en: "Meaning of (0,1) and (1,1)", uk: "Різниця між (0,1) та (1,1)" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quelle différence y a-t-il entre **(0,1)** et **(1,1)** ?",
        en: "What is the difference between **(0,1)** and **(1,1)**?",
        uk: "Яка різниця між **(0,1)** та **(1,1)**?",
      },
      options: [
        {
          text: { fr: "(0,1) est facultatif (0 ou 1), (1,1) est obligatoire (exactement 1).", en: "(0,1) is optional (0 or 1), (1,1) is mandatory (exactly 1).", uk: "(0,1) — необов'язково (0 або 1), (1,1) — обов'язково (рівно 1)." },
          feedback: { fr: "Exactement : le minimum change.", en: "Exactly: the minimum differs.", uk: "Саме так: різниця в мінімальній кардинальності." },
        },
        {
          text: { fr: "(0,1) permet plusieurs fois, (1,1) interdit plusieurs fois.", en: "(0,1) allows several times, (1,1) forbids several times.", uk: "(0,1) дозволяє багаторазову участь, (1,1) забороняє." },
          feedback: { fr: "Non : (0,1) et (1,1) interdisent tous deux plusieurs fois (maximum 1).", en: "No: both forbid several times (maximum 1).", uk: "Ні: обидва обмежують максимум до 1 (не дозволяють багаторазово)." },
        },
        {
          text: { fr: "Aucune différence : ils signifient tous deux « au plus une fois ».", en: "No difference: both mean 'at most once'.", uk: "Немає різниці: обидва означають «не більше одного разу»." },
          feedback: { fr: "Non : (1,1) exige au moins une fois.", en: "No: (1,1) requires at least once.", uk: "Ні: (1,1) вимагає принаймні одного разу." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "(0,1) = facultatif (minimum 0), (1,1) = obligatoire (minimum 1). Maximum 1 dans les deux cas.",
        en: "(0,1) = optional (minimum 0), (1,1) = mandatory (minimum 1). Maximum 1 in both cases.",
        uk: "(0,1) = необов'язково (мінімум 0), (1,1) = обов'язково (мінімум 1). Максимум у обох випадках — 1.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p6",
    text: {
      fr: "6. Contraintes sur les propriétés et contraintes d'intégrité",
      en: "6. Constraints on properties and integrity constraints",
      uk: "6. Обмеження на властивості та обмеження цілісності",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Trois contraintes sur les propriétés", en: "Three constraints on properties", uk: "Три обмеження на властивості" },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Le sens** : une propriété doit avoir un sens (prendre une valeur) pour **tout l'ensemble** qu'elle décrit. Exemple : la propriété **Employeur d'un étudiant salarié** n'a pas de sens pour l'ensemble des étudiants → on utilise la **spécialisation**.",
          en: "**Meaning**: a property should make sense (take a value) for the **whole set** it describes. Example: the property **Employer of a working student** makes no sense for all students → use **specialisation**.",
          uk: "**Сенс**: властивість має мати сенс (приймати значення) для **всієї множини**, яку вона описує. Приклад: властивість **Роботодавець студента-працівника** не має сенсу для всіх студентів → використовують **спеціалізацію**.",
        },
      },
      {
        text: {
          fr: "**L'élémentarité** : la valeur d'une propriété doit être **non décomposable**. Exemple : **Adresse** doit être décomposée en **No, Rue, Code postal, Ville**.",
          en: "**Elementarity**: a property's value must be **non-decomposable**. Example: **Address** must be split into **No, Street, Post code, City**.",
          uk: "**Елементарність**: значення властивості має бути **недекомпозованим**. Приклад: властивість **Адреса** має бути розбита на **Номер, Вулиця, Поштовий індекс, Місто**.",
        },
      },
      {
        text: {
          fr: "**La monovaluation** : une propriété ne peut pas prendre **plusieurs valeurs à la fois** (une seule valeur par entité ou association). Exemple : on ne peut pas définir une propriété **Diplômes** pour un employé si l'entreprise veut garder plusieurs diplômes.",
          en: "**Single-valuedness**: a property cannot take **several values at once** (one value per entity or association). Example: you cannot define a **Degrees** property for an employee if the company wants to keep several degrees.",
          uk: "**Однозначність (монофункціональність)**: властивість не може мати **кілька значень одночасно** (лише одне значення на сутність чи зв'язок). Приклад: не можна визначати властивість **Дипломи** для працівника, якщо потрібно зберігати кілька дипломів.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour respecter la monovaluation, on remplace une propriété **multivaluée P** d'un type entité **E** par un **type entité EP** (souvent artificiel) relié à E par un **type association**, avec un identifiant **IEP** pour EP. Par exemple, la propriété **Téléphone** d'une entreprise devient un type entité **Téléphone**. Dans le même esprit, si le type association R possède une propriété A multivaluée P, on crée un type entité **E-R** puis on applique la même règle. Le **modèle E-A étendu** autorise directement les **propriétés multivaluées** (une liste de valeurs) et les **propriétés composées** (par exemple Adresse(Rue, CP, Ville)).",
      en: "To respect single-valuedness, a **multi-valued property P** of an entity type **E** is replaced by an (often artificial) **entity type EP** linked to E by an **association type**, with its own identifier **IEP**. For instance, a company's **Phone** property becomes a **Phone** entity type. In the same spirit, if the association type R has a multi-valued property P, we create an intermediate entity type **E-R** and apply the same rule. The **extended E-R model** allows **multi-valued properties** (a list of values) and **composed properties** (e.g. Address(Street, PC, City)) directly.",
      uk: "Щоб дотриматися однозначності, **багатозначну властивість P** типу сутності **E** замінюють (часто штучним) **типом сутності EP**, пов'язаним із E через **тип зв'язку**, причому EP має власний ідентифікатор **IEP**. Наприклад, властивість **Телефон** компанії стає окремим типом сутності **Телефон**. Так само, якщо тип зв'язку R має багатозначну властивість P, створюють проміжний тип сутності **E-R** і застосовують те саме правило. **Розширена модель E-R** безпосередньо дозволяє **багатозначні властивості** (список значень) та **складені властивості** (наприклад, Адреса(Вулиця, Поштовий індекс, Місто)).",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Les contraintes d'intégrité", en: "Integrity constraints", uk: "Обмеження цілісності" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **contraintes d'intégrité** sont des **règles sémantiques** que les données doivent respecter dans la base. Certaines sont **statiques** (vérifiées à tout instant) et d'autres **dynamiques** (contrôlées lors d'un changement d'état de la base).",
      en: "**Integrity constraints** are **semantic rules** that the data must respect in the database. Some are **static** (checked at all times), others **dynamic** (checked when the database changes state).",
      uk: "**Обмеження цілісності** — це **семантичні правила**, яким мають відповідати дані в базі. Деякі з них **статичні** (перевіряються постійно), інші — **динамічні** (перевіряються при зміні стану бази даних).",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Identifiants** : chaque occurrence est identifiée de façon unique.", en: "**Identifiers**: each occurrence is uniquely identified.", uk: "**Ідентифікатори**: кожен екземпляр унікально ідентифікований." } },
      { text: { fr: "**Domaine** : valeurs permises pour une propriété, par exemple **Quantité > 0**.", en: "**Domain**: allowed values for a property, for example **Quantity > 0**.", uk: "**Домен**: допустимі значення властивості, наприклад **Кількість > 0**." } },
      { text: { fr: "**Cohérence** : porte sur plusieurs propriétés, par exemple **Quantité livrée ≤ Quantité commandée**.", en: "**Consistency**: concerns several properties, for example **Quantity delivered ≤ Quantity ordered**.", uk: "**Когерентність (узгодженість)**: стосується кількох властивостей, наприклад **Доставлена кількість ≤ Замовлена кількість**." } },
      { text: { fr: "**Calcul** : une valeur se déduit d'autres, par exemple **MontantTTC = MontantHT + TVA**.", en: "**Computation**: a value is derived from others, for example **AmountTTC = AmountHT + VAT**.", uk: "**Обчислювана**: значення виводиться з інших, наприклад **MontantTTC = MontantHT + TVA**." } },
      { text: { fr: "**Référentielle (existentielle)** : l'existence d'une entité dépend de l'existence d'une autre.", en: "**Referential (existential)**: the existence of one entity depends on the existence of another.", uk: "**Референційна (екзистенційна)**: існування однієї сутності залежить від існування іншої." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Contraintes de domaine et de cohérence", en: "Domain and consistency constraints", uk: "Обмеження домену та узгодженості" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : « Quantité livrée ≤ Quantité commandée » est une contrainte de ______.",
        en: "Complete: 'Quantity delivered ≤ Quantity ordered' is a ______ constraint.",
        uk: "Доповніть: «Доставлена кількість ≤ Замовлена кількість» — це обмеження ______.",
      },
      blanks: [
        {
          accepted: ["cohérence", "coherence", "coherence constraint"],
          mistakes: [
            {
              match: ["domaine", "domain"],
              feedback: {
                fr: "Le **domaine** ne concerne qu'**une seule** propriété. Ici deux propriétés sont comparées : c'est la **cohérence**.",
                en: "A **domain** constraint concerns **one** property only. Here two properties are compared: this is **consistency**.",
                uk: "**Обмеження домену** стосується лише **однієї** властивості. Тут порівнюються дві властивості — це **обмеження узгодженості**.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "La contrainte **de cohérence** porte sur **plusieurs propriétés** au même titre. La contrainte de **domaine** ne porte que sur une seule propriété (ex. Quantité > 0).",
        en: "A **consistency** constraint applies to **several properties** together. A **domain** constraint applies to a single property (e.g. Quantity > 0).",
        uk: "**Обмеження узгодженості** стосується **кількох властивостей** одночасно. **Обмеження домену** стосується лише однієї властивості (напр. Кількість > 0).",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p7",
    text: {
      fr: "7. Modèle E-A avancé : spécialisation, agrégation, entités faibles",
      en: "7. Advanced E-R model: specialisation, aggregation, weak entities",
      uk: "7. Розширена модель E-R: спеціалізація, агрегація, слабкі сутності",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Spécialisation et généralisation", en: "Specialisation and generalisation", uk: "Спеціалізація та узагальнення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **sous-type entité** (sous-classe) est un **sous-ensemble d'entités** qui possèdent **à la fois** les propriétés du type entité et des **propriétés qui lui sont propres**. On dit que **B spécialise A** et que **B hérite des propriétés de A**.",
      en: "An **entity subtype** (subclass) is a **subset of entities** that have **both** the properties of the entity type and **properties of their own**. We say that **B specialises A** and that **B inherits the properties of A**.",
      uk: "**Підтип сутності** (підклас) — це **підмножина сутностей**, що мають **як** властивості батьківського типу сутності, **так і** власні властивості. Кажуть, що **B спеціалізує A**, а **B успадковує властивості A**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Spécialisation simple** : un type entité est sous-type d'**un** type entité existant. Exemple : les **étudiants salariés** sont des sous-types des **étudiants**.", en: "**Simple specialisation**: an entity type is a subtype of **one** existing entity type. Example: **working students** are subtypes of **students**.", uk: "**Проста спеціалізація**: тип сутності є підтипом **лише одного** існуючого типу сутності. Приклад: **студенти-працівники** — підтипи **студентів**." } },
      { text: { fr: "**Spécialisation multiple** : un type entité est sous-type de **plusieurs** types à la fois. Exemple : les **étudiants en doctorat qui enseignent** sont à la fois des **étudiants** et des **enseignants**.", en: "**Multiple specialisation**: an entity type is a subtype of **several** types at once. Example: **PhD students who teach** are both **students** and **teachers**.", uk: "**Множинна спеціалізація**: тип сутності є підтипом **кількох** типів одночасно. Приклад: **аспіранти, які викладають**, одночасно є й **студентами**, й **викладачами**." } },
      { text: { fr: "**Généralisation** : les sous-types ont une **existence propre** (identifiant indépendant). Exemple : **clients** et **fournisseurs** se généralisent en **tiers**.", en: "**Generalisation**: subtypes have their **own existence** (independent identifier). Example: **customers** and **suppliers** generalise into **parties**.", uk: "**Узагальнення**: підтипи мають **власне існування** (незалежний ідентифікатор). Приклад: **клієнти** та **постачальники** узагальнюються в **контрагентів**." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Intérêts** : décrire plus finement, préciser la sémantique, **éviter la valeur « null »** pour certaines propriétés. Le lien de spécialisation/généralisation se représente comme un type association souvent appelé **« est-un »** (ou **is-a**) de cardinalité **(1,1)-(0,1)** : une occurrence du sous-type est associée à une et une seule instance du type générique.",
      en: "**Benefits**: describe more finely, refine the semantics, **avoid the « null » value** for some properties. The specialisation/generalisation link is shown as an association type often called **« is-a »** with cardinality **(1,1)-(0,1)**: an occurrence of the subtype is linked to exactly one instance of the generic type.",
      uk: "**Переваги**: більш детальний опис, уточнення семантики, **уникнення значення «null»** для деяких властивостей. Зв'язок спеціалізації/узагальнення зображують як тип зв'язку, який часто називають **«є-типом»** («is-a»), із кардинальністю **(1,1)-(0,1)**: кожен екземпляр підтипу пов'язаний рівно з одним екземпляром узагальнюючого типу.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'agrégation", en: "Aggregation", uk: "Агрегація" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans le modèle E-A de base, on **ne peut pas exprimer une association d'associations**. Pourtant cette possibilité est parfois intéressante, car elle exprime une **sémantique plus précise** qu'une simple association n-aire. Le **modèle E-A étendu** propose l'**agrégation** : elle consiste à **traiter une association comme une entité de niveau supérieur**. Exemple : des **employés** qui travaillent sur des **projets** peuvent **exploiter des machines** dans le cadre de ces projets.",
      en: "In the basic E-R model, one **cannot express an association of associations**. Yet this is sometimes useful, because it expresses a **more precise semantics** than a simple n-ary association. The **extended E-R model** offers **aggregation**: it **treats an association as an entity of a higher level**. Example: **employees** working on **projects** can **use machines** within those projects.",
      uk: "У базовій моделі E-R **неможливо виразити зв'язок між зв'язками**. Однак така можливість іноді потрібна, оскільки вона дає **точнішу семантику**, ніж простий n-арний зв'язок. **Розширена модель E-R** пропонує **агрегацію**: **трактувати зв'язок як сутність вищого рівня**. Приклад: **працівники**, що працюють над **проєктами**, можуть **використовувати обладнання** в рамках цих проєктів.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Les entités faibles", en: "Weak entities", uk: "Слабкі сутності" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **entités faibles** sont des entités **dépendantes d'une autre entité** appelée **entité propriétaire**. Elles **n'ont pas d'identifiant propre**, mais un **identifiant partiel (relatif)** : toutes les occurrences d'un type entité faible reliées à la **même occurrence** du type propriétaire sont distinctes entre elles. Exemple : un type entité **PERSONNE** (IdPers, Nom, Prénom, DateNaiss) relié à une entité faible par une association de type **Parent**.",
      en: "**Weak entities** are entities that **depend on another entity** called the **owner entity**. They have **no identifier of their own**, but a **partial (relative) identifier**: all occurrences of a weak entity type linked to the **same occurrence** of the owner type are distinct from each other. Example: an entity type **PERSON** (IdPers, Name, FirstName, BirthDate) linked to a weak entity by a **Parent** association type.",
      uk: "**Слабкі сутності** — це сутності, що **залежать від іншої сутності**, яка називається **сутністю-власником**. Вони **не мають власного ідентифікатора**, натомість мають **частковий (відносний) ідентифікатор**: усі екземпляри слабкого типу сутності, пов'язані з **одним і тим же екземпляром** сутності-власника, є різними між собою. Приклад: тип сутності **ОСОБА** (IdPers, Nom, Prénom, DateNaiss) пов'язаний зі слабкою сутністю через тип зв'язку **Батьки**.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Contraintes fonctionnelles entre associations", en: "Functional constraints between associations", uk: "Функціональні обмеження між зв'язками" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Exclusivité (OU exclusif)** : les associations **Etre_Responsable** et **Affecter** sont mutuellement exclusives → un employé est **soit** responsable d'un projet, **soit** affecté à un projet, **pas les deux**.", en: "**Exclusivity (exclusive OR)**: the associations **Be_Responsible** and **Assign** are mutually exclusive → an employee is **either** responsible for a project, **or** assigned to a project, **not both**.", uk: "**Виключність (виключне АБО)**: зв'язки **Бути_відповідальним** та **Призначити** є взаємовиключними → працівник **або** відповідає за проєкт, **або** призначений до проєкту, **але не обидва водночас**." } },
      { text: { fr: "**Simultanéité (ET)** : une commande **livrée** est obligatoirement **facturée** et inversement.", en: "**Simultaneity (AND)**: an order that is **delivered** is necessarily **invoiced**, and vice versa.", uk: "**Одночасність (ТА)**: **доставлене** замовлення обов'язково має бути **виставлено у рахунку**, і навпаки." } },
      { text: { fr: "**Totalité** : **tout** employé est soit responsable d'un projet, soit affecté à un projet.", en: "**Totality**: **every** employee is either responsible for a project or assigned to a project.", uk: "**Повнота**: **кожен** працівник є або відповідальним за проєкт, або призначеним до проєкту." } },
      { text: { fr: "**Exclusivité et totalité** : un employé, **s'il n'est pas responsable** d'un projet, **est affecté** à un projet.", en: "**Exclusivity and totality**: an employee, **if not responsible** for a project, **is assigned** to a project.", uk: "**Виключність і повнота**: якщо працівник **не є відповідальним** за проєкт, він **призначений** до проєкту." } },
      { text: { fr: "**Inclusion** : une personne qui **emprunte un livre** doit **d'abord souscrire un abonnement**.", en: "**Inclusion**: a person who **borrows a book** must **first take out a subscription**.", uk: "**Включення**: особа, що **бере книгу в борг**, повинна **спочатку мати абонемент**." } },
      { text: { fr: "**Inclusion d'association** : tout **enseignant** d'une **matière** doit être **qualifié** pour cette matière.", en: "**Association inclusion**: every **teacher** of a **subject** must be **qualified** for that subject.", uk: "**Включення зв'язку**: кожен **викладач** певної **дисципліни** повинен бути **кваліфікованим** для її викладання." } },
      { text: { fr: "**Exclusion d'association** : une **personne propriétaire d'un logement** ne peut pas **payer un loyer pour son propre logement**.", en: "**Association exclusion**: a **person who owns a dwelling** cannot **pay rent for their own dwelling**.", uk: "**Виключення зв'язку**: особа, яка **володіє житлом**, не може **сплачувати орендну плату** за своє власне житло." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Spécialisation ou agrégation ?", en: "Specialisation or aggregation?", uk: "Спеціалізація чи агрегація?" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "L'**agrégation** consiste à traiter une **association** comme une **entité de niveau supérieur**.",
        en: "**Aggregation** consists in treating an **association** as a **higher-level entity**.",
        uk: "**Агрегація** полягає в тому, щоб розглядати **зв'язок** як **сутність вищого рівня**.",
      },
      answer: true,
      justification: {
        fr: "Oui : c'est exactement la définition. Elle sert à exprimer une association d'associations, par exemple « un employé exploite une machine **dans le cadre d'un projet** ».",
        en: "Yes: that is exactly the definition. It is used to express an association of associations, for example 'an employee uses a machine **within a project**'.",
        uk: "Так: це саме визначення. Агрегація дає змогу виразити зв'язок між зв'язками, наприклад «працівник використовує обладнання **у рамках проєкту**».",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p8",
    text: {
      fr: "8. Étude de cas : la scolarité des étudiants",
      en: "8. Case study: student records",
      uk: "8. Практичний приклад: облік студентів",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Reprenons le cas complet du chapitre. **Domaine** : « Scolarité des étudiants ». **But** : gérer des informations sur des étudiants pour un suivi administratif et pédagogique.",
      en: "Let us take the full case of the chapter. **Domain**: « Student records ». **Goal**: manage information about students for administrative and pedagogical follow-up.",
      uk: "Повернемося до повного прикладу розділу. **Предметна область**: «Облік студентів». **Мета**: управляти інформацією про студентів для адміністративного та навчального контролю.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "À chaque étudiant est attribué un **numéro unique** ; on connaît son **nom**, son **prénom**, son **adresse** et sa **filière d'inscription**.", en: "Each student has a **unique number**; we know the **last name**, **first name**, **address** and the **enrolled program**.", uk: "Кожному студенту присвоюється **унікальний номер**; відомі його **прізвище**, **ім'я**, **адреса** та **спеціальність, на яку він зарахований**." } },
      { text: { fr: "Pour calculer les résultats, on conserve les **notes** obtenues par un étudiant dans **chaque module** de sa filière.", en: "To compute results, we keep the **grades** obtained by a student in **each module** of the program.", uk: "Для обчислення результатів зберігаються **оцінки**, отримані студентом з **кожного модуля** його спеціальності." } },
      { text: { fr: "Une **filière** est identifiée par un **nom** ; on connaît l'**enseignant responsable** de la filière et les **modules enseignés**.", en: "A **program** is identified by a **name**; we know its **responsible teacher** and the **modules taught**.", uk: "**Спеціальність** ідентифікується за **назвою**; відомо, хто є **відповідальним викладачем** спеціальності та які **модулі** викладаються." } },
      { text: { fr: "Un **module** est identifié par un **nom** ; on connaît son **volume horaire** et son **enseignant responsable**.", en: "A **module** is identified by a **name**; we know its **number of hours** and its **responsible teacher**.", uk: "**Модуль** ідентифікується за **назвою**; відомі його **кількість годин** та **відповідальний викладач**." } },
    ],
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "scolarite-ea",
        caption: {
          fr: "Schéma E-A du cas « Scolarité des étudiants ».",
          en: "E-R schema of the « Student records » case.",
          uk: "Схема E-R для випадку «Облік студентів».",
        },
        nodes: [
          { id: "etudiant", label: { fr: "ÉTUDIANT (NoEtudiant)", en: "STUDENT (StudentNo)", uk: "СТУДЕНТ (NoEtudiant)" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "inscrire", label: { fr: "Inscrire", en: "Enrol", uk: "Зарахувати" }, x: 280, y: 0, shape: "box", tone: "soft" },
          { id: "filiere", label: { fr: "FILIÈRE (NomFilière)", en: "PROGRAM (ProgramName)", uk: "СПЕЦІАЛЬНІСТЬ (NomFilière)" }, x: 560, y: 0, shape: "box", tone: "primary" },
          { id: "enseignant", label: { fr: "ENSEIGNANT", en: "TEACHER", uk: "ВИКЛАДАЧ" }, x: 560, y: 170, shape: "box", tone: "primary" },
          { id: "nbheures", label: { fr: "MODULE (NomModule, NbHeures)", en: "MODULE (ModuleName, Hours)", uk: "МОДУЛЬ (NomModule, NbHeures)" }, x: 280, y: 170, shape: "box", tone: "primary" },
          { id: "obtenir", label: { fr: "Obtenir_Note", en: "Get_Grade", uk: "Отримати_Оцінку" }, x: 0, y: 170, shape: "box", tone: "soft" },
        ],
        edges: [
          { from: "etudiant", to: "inscrire", label: "(1,N)" },
          { from: "inscrire", to: "filiere", label: "(0,N)" },
          { from: "filiere", to: "nbheures", label: { fr: "contient (1,N)", en: "contains (1,N)", uk: "містить (1,N)" } },
          { from: "enseignant", to: "nbheures", label: { fr: "responsable (0,N)", en: "responsible (0,N)", uk: "відповідальний (0,N)" }, dashed: true },
          { from: "etudiant", to: "obtenir", label: "(1,N)" },
          { from: "obtenir", to: "nbheures", label: "(0,N)" },
        ],
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "La **transformation** de ce schéma E-A en schéma relationnel donne les tables suivantes :",
      en: "**Transforming** this E-R schema into a relational schema gives the following tables:",
      uk: "**Перетворення** схеми E-R на реляційну схему дає такі таблиці:",
    },
  },
  {
    type: "code",
    lang: "text",
    text: "ETUDIANTS (NoEtudiant, Nom, Prénom, Adresse, NomFilière)\nFILIERES (NomFilière, NomResponsable)\nMODULES (NomModule, NomFilière, NomResponsable, NbHeures)\nNOTES (NoEtudiant, NomModule, Note)",
    caption: {
      fr: "Schéma relationnel obtenu par traduction du schéma conceptuel.",
      en: "Relational schema obtained by translating the conceptual schema.",
      uk: "Реляційна схема, отримана шляхом перетворення концептуальної схеми.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Le bilan du chapitre 1", en: "Chapter 1 recap", uk: "Підсумок розділу 1" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans le cas « Scolarité », la note est portée par la table **NOTES (NoEtudiant, NomModule, Note)**. Quelle est la clé la plus probable de cette table ?",
        en: "In the « Student records » case, the grade is carried by the table **GRADES (StudentNo, ModuleName, Grade)**. What is the most likely key of this table?",
        uk: "У випадку «Облік студентів» оцінка зберігається в таблиці **NOTES (NoEtudiant, NomModule, Note)**. Який найімовірніший первинний ключ цієї таблиці?",
      },
      options: [
        {
          text: { fr: "**(NoEtudiant, NomModule)** : un étudiant a une seule note par module.", en: "**(StudentNo, ModuleName)**: a student has a single grade per module.", uk: "**(NoEtudiant, NomModule)**: студент має лише одну оцінку з кожного модуля." },
          feedback: { fr: "Oui : c'est le couple (étudiant, module) qui identifie la note.", en: "Yes: the (student, module) pair identifies the grade.", uk: "Так: саме пара (студент, модуль) унікально ідентифікує оцінку." },
        },
        {
          text: { fr: "**Note** seule.", en: "**Grade** alone.", uk: "Лише **Note**." },
          feedback: { fr: "Non : plusieurs étudiants peuvent avoir la même note.", en: "No: several students may have the same grade.", uk: "Ні: кілька студентів можуть отримати однакову оцінку." },
        },
        {
          text: { fr: "**NoEtudiant** seul.", en: "**StudentNo** alone.", uk: "Лише **NoEtudiant**." },
          feedback: { fr: "Non : un étudiant obtient plusieurs notes (une par module).", en: "No: a student gets several grades (one per module).", uk: "Ні: студент отримує кілька оцінок (по одній на модуль)." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "L'association Obtenir_Note n'a aucun rôle à maximum 1 : son identifiant est donc **(NoEtudiant, NomModule)**.",
        en: "The Get_Grade association has no role with a maximum of 1: so its identifier is **(StudentNo, ModuleName)**.",
        uk: "У зв'язку Отримати_Оцінку жодна роль не має максимальної кардинальності 1, тож його ідентифікатор — **(NoEtudiant, NomModule)**.",
      },
    },
  },
];
