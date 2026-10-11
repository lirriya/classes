import type { Block } from "../../types";

export const chapterOne: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce premier chapitre répond à une question simple : **comment décrire des données du monde réel avant de les mettre dans un ordinateur ?** On utilise pour cela le **modèle Entité-Association (E-A)**. C'est une méthode de dessin et de description, très proche du langage naturel, qui sert de plan avant de construire la base de données.",
      en: "This first chapter answers a simple question: **how do we describe real-world data before putting it into a computer?** To do this we use the **Entity-Relationship (E-R) model**. It is a drawing and description method, very close to natural language, that serves as a blueprint before building the database.",
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
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **SGBD** (Système de Gestion de Bases de Données) est un **ensemble de logiciels** qui permettent de **modéliser, manipuler et interroger** une base de données. Le SGBD joue le rôle d'**intermédiaire** entre les applications (ou les utilisateurs) et les données stockées.",
      en: "A **DBMS** (Database Management System) is a **set of software** that can **model, manipulate and query** a database. The DBMS acts as an **intermediary** between the applications (or users) and the stored data.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Des fichiers aux bases de données",
      en: "From files to databases",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Prenons le cas **« Scolarité des étudiants »**. Les données peuvent d'abord être organisées en **fichiers ou tables** séparés :",
      en: "Take the **« Student records »** case. The data can first be organised into separate **files or tables**:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**ETUDIANTS** : NoEtudiant, Nom, Prénom, Adresse, NomFilière",
          en: "**STUDENTS** : StudentNo, LastName, FirstName, Address, ProgramName",
        },
      },
      {
        text: {
          fr: "**FILIERES** : NomFilière, NomResponsable",
          en: "**PROGRAMS** : ProgramName, ManagerName",
        },
      },
      {
        text: {
          fr: "**MODULES** : NomModule, NomFilière, NbHeures, NomResponsable",
          en: "**MODULES** : ModuleName, ProgramName, Hours, ManagerName",
        },
      },
      {
        text: {
          fr: "**NOTES** : NoEtudiant, NomModule, Note",
          en: "**GRADES** : StudentNo, ModuleName, Grade",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Ces données servent à plusieurs **traitements (applications)** : la **gestion des inscriptions** (étudiants, filières), la **gestion des enseignements** (filières, modules) et la **gestion des résultats** (modules, étudiants, notes). La base de données « Scolarité » regroupe ces tables et sert de source commune à toutes ces applications.",
      en: "This data feeds several **processes (applications)**: **enrolment management** (students, programs), **teaching management** (programs, modules) and **results management** (modules, students, grades). The « Student records » database gathers these tables and acts as a shared source for all these applications.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Le modèle de données et l'abstraction",
      en: "The data model and abstraction",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Modéliser les données**, c'est **représenter les objets du monde réel** le plus fidèlement possible : de manière **cohérente**, **assez simple** et la plus **formelle** possible, grâce à un ensemble de concepts appelé **modèle de données**.",
      en: "**Modelling data** means **representing real-world objects** as faithfully as possible: coherently, simply enough, and as formally as possible, using a set of concepts called a **data model**.",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Un **modèle de données** est un ensemble de **concepts** et de **règles de construction** permettant de décrire et de manipuler les données. C'est un **outil formel**.",
      en: "A **data model** is a set of **concepts** and **construction rules** used to describe and manipulate data. It is a **formal tool**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Tout modèle de données repose sur un **effort d'abstraction**. On passe :",
      en: "Every data model relies on an **effort of abstraction**. We move:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: { fr: "des **données** aux **structures de données** ;", en: "from **data** to **data structures**;" },
      },
      {
        text: { fr: "des **valeurs** aux **variables** ;", en: "from **values** to **variables**;" },
      },
      {
        text: { fr: "d'un ensemble défini **par extension** à un ensemble défini **par intention**.", en: "from a set defined **by listing** to a set defined **by a rule**." },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "On distingue donc deux notions : le **type d'objet** (un ensemble d'objets qui ont les mêmes propriétés et sont manipulés de la même façon) et l'**instance d'objet** (un élément précis de ce type, décrit par des valeurs). Les instances doivent **vérifier les propriétés** du type auquel elles appartiennent. Exemple : **Étudiant** est un type ; **Pierre** et **Paul** sont des instances. De même, **Discipline** est un type ; **Bases de Données** et **Algorithmique** sont des instances.",
      en: "So there are two notions: the **object type** (a set of objects that share the same properties and are handled the same way) and the **object instance** (a specific element of that type, described by values). Instances must **satisfy the properties** of their type. Example: **Student** is a type; **Pierre** and **Paul** are instances. Likewise, **Subject** is a type; **Databases** and **Algorithms** are instances.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Type d'objet et instance", en: "Object type and instance" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Modéliser consiste à décrire des objets **particuliers** (une personne précise) plutôt que des **ensembles** d'objets.",
        en: "Modelling means describing **particular** objects (one specific person) rather than **sets** of objects.",
      },
      answer: false,
      justification: {
        fr: "C'est l'inverse : on décrit les propriétés d'**ensembles** d'objets (les **types**). Les objets particuliers ne sont que des **instances** de ces types.",
        en: "It is the opposite: we describe the properties of **sets** of objects (the **types**). Particular objects are only **instances** of those types.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Définition du modèle de données", en: "Definition of a data model" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : un modèle de données est un ensemble de concepts et de **règles de construction** qui permet de décrire et de ______ les données.",
        en: "Complete: a data model is a set of concepts and **construction rules** used to describe and ______ data.",
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
              },
            },
          ],
        },
      ],
      solution: {
        fr: "Un modèle de données permet de **décrire** et de **manipuler** les données. C'est un outil formel composé de concepts et de règles.",
        en: "A data model is used to **describe** and **manipulate** data. It is a formal tool made of concepts and rules.",
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
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **modélisation conceptuelle** est le processus qui permet d'obtenir, à partir du réel, un **schéma conceptuel de données**. Le mot **conceptuel** veut dire : le plus **indépendant possible** de la future machine, du futur langage et des futures utilisations.",
      en: "**Conceptual modelling** is the process that turns reality into a **conceptual data schema**. The word **conceptual** means: as **independent as possible** from the future machine, language and uses.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Objectif 1** : obtenir un modèle de données **valable quelle que soit la plate-forme informatique** envisagée.",
          en: "**Goal 1**: obtain a data model that is **valid whatever the computer platform**.",
        },
      },
      {
        text: {
          fr: "**Objectif 2** : obtenir un modèle **stable face à l'évolution** des besoins et des technologies.",
          en: "**Goal 2**: obtain a model that is **stable against changes** in needs and technologies.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Il existe plusieurs familles de modèles : le **modèle relationnel**, les **modèles sémantiques** (comme le modèle **Entité-Association** ou les réseaux sémantiques), les **modèles à objets**, et les modèles des bases **NoSQL**. La **démarche** classique est toujours la même : on part d'une **description informelle** du cas, on la traduit en **modèle Entité-Association**, puis on **transforme** ce schéma en code et en base de données. L'opération inverse s'appelle la **rétro-conception**.",
      en: "There are several families of models: the **relational model**, the **semantic models** (such as the **Entity-Relationship** model or semantic networks), the **object models**, and **NoSQL** models. The classic **approach** is always the same: start from an **informal description** of the case, translate it into an **Entity-Relationship model**, then **transform** that schema into code and a database. The reverse operation is called **reverse engineering**.",
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
        },
        nodes: [
          { id: "reel", label: { fr: "Description informelle du cas", en: "Informal case description" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "ea", label: { fr: "Modèle Entité-Association", en: "Entity-Relationship model" }, x: 300, y: 0, shape: "box", tone: "soft" },
          { id: "bd", label: { fr: "Base de données", en: "Database" }, x: 620, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "reel", to: "ea", label: { fr: "modélisation", en: "modelling" } },
          { from: "ea", to: "bd", label: { fr: "traduction", en: "translation" } },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Démarche de conception", en: "Design approach" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "On passe directement du monde réel au schéma relationnel, sans passer par le schéma E-A.",
        en: "We go directly from reality to the relational schema, without going through the E-R schema.",
      },
      answer: false,
      justification: {
        fr: "On passe par le **schéma conceptuel E-A** d'abord, puis on le transforme en schéma relationnel.",
        en: "We first go through the **conceptual E-R schema**, then transform it into a relational schema.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Pourquoi le niveau conceptuel ?", en: "Why the conceptual level?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pourquoi cherche-t-on un schéma **conceptuel** indépendant de la machine ?",
        en: "Why do we aim for a **conceptual** schema that is independent of the machine?",
      },
      options: [
        {
          text: { fr: "Pour que le modèle reste valable même si la technologie ou les besoins changent.", en: "So the model stays valid even if the technology or the needs change." },
          feedback: { fr: "Exactement : c'est l'objectif d'invariance.", en: "Exactly: that is the goal of invariance." },
        },
        {
          text: { fr: "Pour écrire plus vite le code SQL final.", en: "To write the final SQL code faster." },
          feedback: { fr: "Non : le schéma conceptuel ne dépend pas du langage final.", en: "No: the conceptual schema does not depend on the final language." },
        },
        {
          text: { fr: "Parce que le modèle relationnel n'a qu'un seul concept.", en: "Because the relational model has only one concept." },
          feedback: { fr: "C'est une propriété du modèle relationnel, pas la raison du niveau conceptuel.", en: "That is a property of the relational model, not the reason for the conceptual level." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Un schéma conceptuel doit être **valable quelle que soit la plate-forme** et **invariant face à l'évolution** fonctionnelle et technologique.",
        en: "A conceptual schema must be **valid whatever the platform** and **invariant against functional and technological change**.",
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
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le modèle E-A est l'un des **principaux modèles conceptuels de données**. Il vient des travaux de **Chen** aux États-Unis (Entity-Relationship) et, en France, du **projet Merise**, à la fin des **années 70**. Ses deux forces sont :",
      en: "The E-R model is one of the **main conceptual data models**. It comes from the work of **Chen** in the United States (Entity-Relationship) and, in France, from the **Merise project**, in the late **1970s**. Its two strengths are:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "des **concepts simples** : un langage de haut niveau compréhensible par tous grâce à sa **représentation graphique** ;",
          en: "**simple concepts**: a high-level language understandable by everyone thanks to its **graphical representation**;",
        },
      },
      {
        text: {
          fr: "des **concepts puissants** : on peut représenter, de façon naturelle, presque n'importe quel objet du monde réel.",
          en: "**powerful concepts**: almost any real-world object can be represented naturally.",
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
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'entité et le type entité", en: "The entity and the entity type" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **entité** représente un **objet concret ou abstrait du réel** (un individu, un événement...) qui est **individualisable** (il a une existence propre) et qui **présente un intérêt** pour lequel on veut enregistrer des informations. Le choix de ce qui est une entité appartient au **concepteur**. Exemples : l'étudiant **<Pierre>**, le module **<Bases de Données>**, la filière **<Licence Informatique>**.",
      en: "An **entity** represents a **concrete or abstract real-world object** (a person, an event...) that is **individualisable** (it has its own existence) and that **matters** enough for us to store information about it. What counts as an entity is a **designer's choice**. Examples: the student **<Pierre>**, the module **<Databases>**, the program **<Computer Science Bachelor>**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les entités qui présentent les **mêmes propriétés** sont regroupées en classes appelées **types entités** (ou entités-types). Un type entité porte un **nom unique**. Exemples : **Étudiant** (Nom, NoEtudiant, Adresse), **Module** (NomModule, NbHeures, Responsable), mais aussi Enseignant, Article, Client, Commande...",
      en: "Entities that share the **same properties** are grouped into classes called **entity types**. An entity type has a **unique name**. Examples: **Student** (Name, StudentNo, Address), **Module** (ModuleName, Hours, Manager), but also Teacher, Article, Customer, Order...",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une entité appartient à un type : on parle d'**occurrence** (ou d'instance) du type entité. L'**extension** d'un type entité est l'ensemble de ses occurrences. Exemple : le type **Étudiant** a pour extension `{<Pierre, 2345, Metz>, <Paul, 2346, Nanc>, …}`.",
      en: "An entity belongs to a type: we then speak of an **occurrence** (or instance) of the entity type. The **extension** of an entity type is the set of its occurrences. Example: the type **Student** has as its extension `{<Pierre, 2345, Metz>, <Paul, 2346, Nanc>, …}`.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'identifiant d'un type entité", en: "The identifier of an entity type" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour pouvoir **identifier de façon unique** chaque occurrence d'un type entité, celui-ci doit posséder **une ou plusieurs propriétés jouant le rôle d'identifiant**. Exemple : le **numéro d'étudiant** identifie le type **Étudiant** ; l'**intitulé du module** identifie le type **Module**.",
      en: "To **uniquely identify** each occurrence of an entity type, it must have **one or more properties acting as an identifier**. Example: the **student number** identifies the **Student** type; the **module title** identifies the **Module** type.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Un identifiant peut être **naturel** (Nom, Nom + Prénom + Date de naissance, Référence...) ou **artificiel** (NoEtudiant, Matricule, Code, No d'ordre...).",
          en: "An identifier can be **natural** (Name, Name + First name + Birth date, Reference...) or **artificial** (StudentNo, StaffNo, Code, Serial number...).",
        },
      },
      {
        text: {
          fr: "Il peut y avoir **plusieurs identifiants possibles** : on en choisit un comme **identifiant principal (clé primaire)**, les autres deviennent des **identifiants secondaires**.",
          en: "There may be **several possible identifiers**: one is chosen as the **primary identifier (primary key)**, the others become **secondary identifiers**.",
        },
      },
      {
        text: {
          fr: "Exemple : un étudiant peut être identifié soit par son **numéro d'étudiant**, soit par son **Nom + Prénom + Date de naissance**.",
          en: "Example: a student can be identified either by the **student number** or by **Last name + First name + Birth date**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'association et le type association", en: "The association and the association type" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **association** est un **lien sémantique** qui relie un ensemble d'entités (pas forcément distinctes). Chaque entité y joue un **rôle déterminé**. Une association est donc définie par un ensemble d'**au moins deux rôles**, chacun joué par une et une seule entité. Une association **n'existe qu'à travers les entités** qui la composent, et elle peut porter **ses propres attributs**.",
      en: "An **association** is a **semantic link** connecting a set of entities (not necessarily distinct). Each entity plays a **determined role**. An association is therefore defined by a set of **at least two roles**, each played by exactly one entity. An association **exists only through the entities** that make it up, and it can carry **its own attributes**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "L'étudiant **Pierre** est inscrit dans la filière **Licence Informatique** → `<Pierre, Licence Informatique>`.", en: "Student **Pierre** is enrolled in the program **Computer Science Bachelor** → `<Pierre, Computer Science Bachelor>`." } },
      { text: { fr: "**Pierre** a obtenu dans le module **Bases de Données** la note **18** → `<Pierre, Bases de Données, 18>`.", en: "**Pierre** got the grade **18** in the module **Databases** → `<Pierre, Databases, 18>`." } },
      { text: { fr: "L'enseignant **Chelghoum** est responsable du module **Bases de Données** → `<Chelghoum, Bases de Données>`.", en: "Teacher **Chelghoum** is responsible for the module **Databases** → `<Chelghoum, Databases>`." } },
      { text: { fr: "La commande **C123** concerne l'article **A1** pour une quantité de **10** → `<C123, A1, 10>`.", en: "Order **C123** includes the article **A1** for a quantity of **10** → `<C123, A1, 10>`." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Comme les entités, les associations sont regroupées en **types associations** : un ensemble d'associations de même nature (même sémantique), composées des **mêmes rôles**. Un type association porte un **nom unique**, et un **rôle** a lui aussi un nom unique. **Toutes** les entités jouant un rôle déterminé appartiennent au **même type entité**.",
      en: "Like entities, associations are grouped into **association types**: a set of associations of the same nature (same semantics) made of the **same roles**. An association type has a **unique name**, and a **role** also has a unique name. **All** entities playing a given role belong to the **same entity type**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Inscrire (Étudiant, Filière)** : les étudiants sont inscrits dans des filières.", en: "**Enrol (Student, Program)**: students are enrolled in programs." } },
      { text: { fr: "**Etre_Responsable (Enseignant, Module)** : les modules sont sous la responsabilité d'enseignants.", en: "**Be_Responsible (Teacher, Module)**: modules are the responsibility of teachers." } },
      { text: { fr: "**Commander (Commande, Article, Quantité)** : le type association peut porter la propriété **Quantité**.", en: "**Order (Order, Article, Quantity)**: the association type can carry the property **Quantity**." } },
      { text: { fr: "**Marier_A (Épouse : Personne, Époux : Personne)** : association réflexive entre personnes.", en: "**Marry_A (Wife : Person, Husband : Person)**: a reflexive association between people." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Le **degré** d'une association est le **nombre de rôles** qu'elle contient : **2 rôles** → association **binaire** ; **plus de 2 rôles** → association **n-aire**.",
      en: "The **degree** of an association is the **number of roles** it contains: **2 roles** → **binary** association; **more than 2 roles** → **n-ary** association.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "La propriété (ou attribut)", en: "The property (or attribute)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **propriété** est une **donnée élémentaire munie d'un sens**. Elle sert à **décrire les entités et les associations**. On l'appelle aussi **attribut** ou **caractéristique**. Une propriété est définie par un **nom** et une **valeur** prise dans un **domaine de valeurs**.",
      en: "A **property** is an **elementary piece of data with a meaning**. It is used to **describe entities and associations**. It is also called an **attribute** or a **characteristic**. A property is defined by a **name** and a **value** taken from a **value domain**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Un étudiant est connu par son **numéro étudiant, son nom, son prénom, son adresse**.", en: "A student is known by his **student number, last name, first name, address**." } },
      { text: { fr: "Une propriété peut aussi décrire une association : un étudiant **obtient une note** à chaque module.", en: "A property can also describe an association: a student **gets a grade** in each module." } },
      { text: { fr: "Le **domaine** précise les valeurs permises : le **numéro étudiant** est un entier ; le **nom** est une chaîne de caractères ; la **note** est un nombre entre 0 et 20.", en: "The **domain** states the allowed values: the **student number** is an integer; the **name** is a string; the **grade** is a number between 0 and 20." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Entité ou association ?", en: "Entity or association?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "« L'étudiant **Pierre** obtient la **note 18** dans le module **Bases de Données**. » Comment modéliser **Note** ?",
        en: "« Student **Pierre** gets grade **18** in the module **Databases**. » How should **Grade** be modelled?",
      },
      options: [
        {
          text: { fr: "Comme une **propriété portée par l'association** entre Étudiant et Module.", en: "As a **property carried by the association** between Student and Module." },
          feedback: { fr: "Oui : la note existe grâce au couple (étudiant, module). C'est une propriété d'association.", en: "Yes: the grade exists thanks to the (student, module) pair. It is an association property." },
        },
        {
          text: { fr: "Comme une propriété de l'entité **Étudiant** uniquement.", en: "As a property of the **Student** entity only." },
          feedback: { fr: "Non : un étudiant a plusieurs notes, une par module. La note dépend du couple.", en: "No: a student has several grades, one per module. The grade depends on the pair." },
        },
        {
          text: { fr: "Comme une propriété de l'entité **Module** uniquement.", en: "As a property of the **Module** entity only." },
          feedback: { fr: "Non : un module a plusieurs notes, une par étudiant.", en: "No: a module has several grades, one per student." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "La note n'a de sens que pour un **couple (Étudiant, Module)** : c'est donc une **propriété du type association Obtenir_Note(Étudiant, Module, Note)**.",
        en: "The grade only makes sense for a **(Student, Module) pair**: so it is a **property of the association type Get_Grade(Student, Module, Grade)**.",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'identifiant d'un type association", en: "The identifier of an association type" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **type association n'a pas d'identifiant propre** : il est déterminé par l'**ensemble des identifiants des types entités** qui participent. Souvent, un **sous-ensemble strict** suffit ; ce sous-ensemble se déduit des **cardinalités des rôles** :",
      en: "An **association type has no identifier of its own**: it is determined by the **set of identifiers of the participating entity types**. Often a **strict subset** is enough; that subset is found from the **cardinalities of the roles**:",
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
        },
      },
      {
        text: {
          fr: "**Sinon**, l'identifiant de l'association est formé par l'**ensemble des identifiants** des types entités jouant un rôle.",
          en: "**Otherwise**, the identifier of the association is formed by the **set of identifiers** of the entity types playing a role.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Clé d'une association", en: "Key of an association" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Le type association **Obtenir_Note(Étudiant, Module, Note)**, où aucun rôle n'a de cardinalité maximale de 1, a pour identifiant **le couple (NoEtudiant, NomModule)**.",
        en: "The association type **Get_Grade(Student, Module, Grade)**, where no role has a maximum cardinality of 1, has as its identifier **the pair (StudentNo, ModuleName)**.",
      },
      answer: true,
      justification: {
        fr: "Correct : ici aucun rôle n'est à maximum 1, donc l'identifiant est l'**ensemble des identifiants** des entités participantes : **(NoEtudiant, NomModule)**.",
        en: "Correct: here no role has a maximum of 1, so the identifier is the **set of identifiers** of the participating entities: **(StudentNo, ModuleName)**.",
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
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **contraintes de cardinalité** servent à préciser **combien de fois** une entité peut apparaître dans une association. À **chaque rôle** on attache un couple **(i, j)** qui signifie : toute entité jouant ce rôle le joue un **nombre de fois compris entre i et j**.",
      en: "**Cardinality constraints** specify **how many times** an entity may appear in an association. To **each role** we attach a pair **(i, j)** meaning: any entity playing this role plays it a **number of times between i and j**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**i** est la **cardinalité minimale** : le plus souvent **0** (aucune fois) ou **1** (une fois).", en: "**i** is the **minimum cardinality**: most often **0** (no time) or **1** (one time)." } },
      { text: { fr: "**j** est la **cardinalité maximale** : le plus souvent **1** (une fois) ou **N** (plus d'une fois).", en: "**j** is the **maximum cardinality**: most often **1** (one time) or **N** (more than once)." } },
    ],
  },
  {
    type: "list",
    items: [
      { text: { fr: "**(1,1)** : l'entité joue ce rôle **exactement une fois** (obligatoire et unique).", en: "**(1,1)**: the entity plays this role **exactly once** (mandatory and unique)." } },
      { text: { fr: "**(0,1)** : l'entité joue ce rôle **au plus une fois** (facultatif, 0 ou 1).", en: "**(0,1)**: the entity plays this role **at most once** (optional, 0 or 1)." } },
      { text: { fr: "**(1,N)** : l'entité joue ce rôle **au moins une fois**, et peut le jouer plusieurs fois.", en: "**(1,N)**: the entity plays this role **at least once**, and possibly several times." } },
      { text: { fr: "**(0,N)** : l'entité joue ce rôle **de zéro à plusieurs fois** (facultatif et multiple).", en: "**(0,N)**: the entity plays this role **from zero to several times** (optional and multiple)." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Exemples : un **étudiant est inscrit dans au moins une filière** et **dans une filière peuvent être inscrits plusieurs étudiants**. Une **personne peut être assurée par plusieurs contrats** et **un contrat assure au moins une personne**. Une **personne est mariée à au plus une autre personne** → rôle (0,1).",
      en: "Examples: a **student is enrolled in at least one program** and **a program may contain several students**. A **person may be insured by several contracts** and **a contract insures at least one person**. A **person is married to at most one other person** → role (0,1).",
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
        },
        nodes: [
          { id: "etudiant", label: { fr: "ÉTUDIANT", en: "STUDENT" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "inscrire", label: { fr: "Inscrire", en: "Enrol" }, x: 260, y: 0, shape: "box", tone: "soft" },
          { id: "filiere", label: { fr: "FILIÈRE", en: "PROGRAM" }, x: 520, y: 0, shape: "box", tone: "primary" },
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
    concept: { fr: "Lire une cardinalité", en: "Reading a cardinality" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Le rôle côté **Étudiant** porte la cardinalité **(1,N)** dans l'association Inscrire. Que cela signifie-t-il ?",
        en: "The role on the **Student** side has cardinality **(1,N)** in the Enrol association. What does it mean?",
      },
      options: [
        {
          text: { fr: "Un étudiant doit être inscrit dans **au moins une filière** (et peut l'être dans plusieurs).", en: "A student must be enrolled in **at least one program** (and may be in several)." },
          feedback: { fr: "Oui : minimum 1 (obligatoire), maximum N (plusieurs).", en: "Yes: minimum 1 (mandatory), maximum N (several)." },
        },
        {
          text: { fr: "Une filière contient exactement un étudiant.", en: "A program contains exactly one student." },
          feedback: { fr: "Non : cette phrase décrit l'autre rôle, et 1 signifie « au moins un », pas « exactement un ».", en: "No: that describes the other role, and 1 means 'at least one', not 'exactly one'." },
        },
        {
          text: { fr: "Un étudiant peut ne pas être inscrit du tout.", en: "A student may not be enrolled at all." },
          feedback: { fr: "Non : le minimum 1 rend l'inscription obligatoire.", en: "No: minimum 1 makes enrolment mandatory." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Dans un couple **(i, j)**, **i** est le minimum et **j** le maximum. **(1,N)** = au moins une fois, plusieurs fois possibles.",
        en: "In a **(i, j)** pair, **i** is the minimum and **j** the maximum. **(1,N)** = at least once, several times possible.",
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
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Trois contraintes sur les propriétés", en: "Three constraints on properties" },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Le sens** : une propriété doit avoir un sens (prendre une valeur) pour **tout l'ensemble** qu'elle décrit. Exemple : la propriété **Employeur d'un étudiant salarié** n'a pas de sens pour l'ensemble des étudiants → on utilise la **spécialisation**.",
          en: "**Meaning**: a property should make sense (take a value) for the **whole set** it describes. Example: the property **Employer of a working student** makes no sense for all students → use **specialisation**.",
        },
      },
      {
        text: {
          fr: "**L'élémentarité** : la valeur d'une propriété doit être **non décomposable**. Exemple : **Adresse** doit être décomposée en **No, Rue, Code postal, Ville**.",
          en: "**Elementarity**: a property's value must be **non-decomposable**. Example: **Address** must be split into **No, Street, Post code, City**.",
        },
      },
      {
        text: {
          fr: "**La monovaluation** : une propriété ne peut pas prendre **plusieurs valeurs à la fois** (une seule valeur par entité ou association). Exemple : on ne peut pas définir une propriété **Diplômes** pour un employé si l'entreprise veut garder plusieurs diplômes.",
          en: "**Single-valuedness**: a property cannot take **several values at once** (one value per entity or association). Example: you cannot define a **Degrees** property for an employee if the company wants to keep several degrees.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour respecter la monovaluation, on remplace une propriété **multivaluée P** d'un type entité **E** par un **type entité EP** (souvent artificiel) relié à E par un **type association**, avec un identifiant **IEP** pour EP. Par exemple, la propriété **Téléphone** d'une entreprise devient un type entité **Téléphone**. Dans le même esprit, si le type association R possède une propriété A multivaluée P, on crée un type entité **E-R** puis on applique la même règle. Le **modèle E-A étendu** autorise directement les **propriétés multivaluées** (une liste de valeurs) et les **propriétés composées** (par exemple Adresse(Rue, CP, Ville)).",
      en: "To respect single-valuedness, a **multi-valued property P** of an entity type **E** is replaced by an (often artificial) **entity type EP** linked to E by an **association type**, with its own identifier **IEP**. For instance, a company's **Phone** property becomes a **Phone** entity type. In the same spirit, if the association type R has a multi-valued property P, we create an intermediate entity type **E-R** and apply the same rule. The **extended E-R model** allows **multi-valued properties** (a list of values) and **composed properties** (e.g. Address(Street, PC, City)) directly.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Les contraintes d'intégrité", en: "Integrity constraints" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **contraintes d'intégrité** sont des **règles sémantiques** que les données doivent respecter dans la base. Certaines sont **statiques** (vérifiées à tout instant) et d'autres **dynamiques** (contrôlées lors d'un changement d'état de la base).",
      en: "**Integrity constraints** are **semantic rules** that the data must respect in the database. Some are **static** (checked at all times), others **dynamic** (checked when the database changes state).",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Identifiants** : chaque occurrence est identifiée de façon unique.", en: "**Identifiers**: each occurrence is uniquely identified." } },
      { text: { fr: "**Domaine** : valeurs permises pour une propriété, par exemple **Quantité > 0**.", en: "**Domain**: allowed values for a property, for example **Quantity > 0**." } },
      { text: { fr: "**Cohérence** : porte sur plusieurs propriétés, par exemple **Quantité livrée ≤ Quantité commandée**.", en: "**Consistency**: concerns several properties, for example **Quantity delivered ≤ Quantity ordered**." } },
      { text: { fr: "**Calcul** : une valeur se déduit d'autres, par exemple **MontantTTC = MontantHT + TVA**.", en: "**Computation**: a value is derived from others, for example **AmountTTC = AmountHT + VAT**." } },
      { text: { fr: "**Référentielle (existentielle)** : l'existence d'une entité dépend de l'existence d'une autre.", en: "**Referential (existential)**: the existence of one entity depends on the existence of another." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Contraintes de domaine et de cohérence", en: "Domain and consistency constraints" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : « Quantité livrée ≤ Quantité commandée » est une contrainte de ______.",
        en: "Complete: 'Quantity delivered ≤ Quantity ordered' is a ______ constraint.",
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
              },
            },
          ],
        },
      ],
      solution: {
        fr: "La contrainte **de cohérence** porte sur **plusieurs propriétés** au même titre. La contrainte de **domaine** ne porte que sur une seule propriété (ex. Quantité > 0).",
        en: "A **consistency** constraint applies to **several properties** together. A **domain** constraint applies to a single property (e.g. Quantity > 0).",
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
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Spécialisation et généralisation", en: "Specialisation and generalisation" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **sous-type entité** (sous-classe) est un **sous-ensemble d'entités** qui possèdent **à la fois** les propriétés du type entité et des **propriétés qui lui sont propres**. On dit que **B spécialise A** et que **B hérite des propriétés de A**.",
      en: "An **entity subtype** (subclass) is a **subset of entities** that have **both** the properties of the entity type and **properties of their own**. We say that **B specialises A** and that **B inherits the properties of A**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Spécialisation simple** : un type entité est sous-type d'**un** type entité existant. Exemple : les **étudiants salariés** sont des sous-types des **étudiants**.", en: "**Simple specialisation**: an entity type is a subtype of **one** existing entity type. Example: **working students** are subtypes of **students**." } },
      { text: { fr: "**Spécialisation multiple** : un type entité est sous-type de **plusieurs** types à la fois. Exemple : les **étudiants en doctorat qui enseignent** sont à la fois des **étudiants** et des **enseignants**.", en: "**Multiple specialisation**: an entity type is a subtype of **several** types at once. Example: **PhD students who teach** are both **students** and **teachers**." } },
      { text: { fr: "**Généralisation** : les sous-types ont une **existence propre** (identifiant indépendant). Exemple : **clients** et **fournisseurs** se généralisent en **tiers**.", en: "**Generalisation**: subtypes have their **own existence** (independent identifier). Example: **customers** and **suppliers** generalise into **parties**." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Intérêts** : décrire plus finement, préciser la sémantique, **éviter la valeur « null »** pour certaines propriétés. Le lien de spécialisation/généralisation se représente comme un type association souvent appelé **« est-un »** (ou **is-a**) de cardinalité **(1,1)-(0,1)** : une occurrence du sous-type est associée à une et une seule instance du type générique.",
      en: "**Benefits**: describe more finely, refine the semantics, **avoid the « null » value** for some properties. The specialisation/generalisation link is shown as an association type often called **« is-a »** with cardinality **(1,1)-(0,1)**: an occurrence of the subtype is linked to exactly one instance of the generic type.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "L'agrégation", en: "Aggregation" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans le modèle E-A de base, on **ne peut pas exprimer une association d'associations**. Pourtant cette possibilité est parfois intéressante, car elle exprime une **sémantique plus précise** qu'une simple association n-aire. Le **modèle E-A étendu** propose l'**agrégation** : elle consiste à **traiter une association comme une entité de niveau supérieur**. Exemple : des **employés** qui travaillent sur des **projets** peuvent **exploiter des machines** dans le cadre de ces projets.",
      en: "In the basic E-R model, one **cannot express an association of associations**. Yet this is sometimes useful, because it expresses a **more precise semantics** than a simple n-ary association. The **extended E-R model** offers **aggregation**: it **treats an association as an entity of a higher level**. Example: **employees** working on **projects** can **use machines** within those projects.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Les entités faibles", en: "Weak entities" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **entités faibles** sont des entités **dépendantes d'une autre entité** appelée **entité propriétaire**. Elles **n'ont pas d'identifiant propre**, mais un **identifiant partiel (relatif)** : toutes les occurrences d'un type entité faible reliées à la **même occurrence** du type propriétaire sont distinctes entre elles. Exemple : un type entité **PERSONNE** (IdPers, Nom, Prénom, DateNaiss) relié à une entité faible par une association de type **Parent**.",
      en: "**Weak entities** are entities that **depend on another entity** called the **owner entity**. They have **no identifier of their own**, but a **partial (relative) identifier**: all occurrences of a weak entity type linked to the **same occurrence** of the owner type are distinct from each other. Example: an entity type **PERSON** (IdPers, Name, FirstName, BirthDate) linked to a weak entity by a **Parent** association type.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Contraintes fonctionnelles entre associations", en: "Functional constraints between associations" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Exclusivité (OU exclusif)** : les associations **Etre_Responsable** et **Affecter** sont mutuellement exclusives → un employé est **soit** responsable d'un projet, **soit** affecté à un projet, **pas les deux**.", en: "**Exclusivity (exclusive OR)**: the associations **Be_Responsible** and **Assign** are mutually exclusive → an employee is **either** responsible for a project, **or** assigned to a project, **not both**." } },
      { text: { fr: "**Simultanéité (ET)** : une commande **livrée** est obligatoirement **facturée** et inversement.", en: "**Simultaneity (AND)**: an order that is **delivered** is necessarily **invoiced**, and vice versa." } },
      { text: { fr: "**Totalité** : **tout** employé est soit responsable d'un projet, soit affecté à un projet.", en: "**Totality**: **every** employee is either responsible for a project or assigned to a project." } },
      { text: { fr: "**Exclusivité et totalité** : un employé, **s'il n'est pas responsable** d'un projet, **est affecté** à un projet.", en: "**Exclusivity and totality**: an employee, **if not responsible** for a project, **is assigned** to a project." } },
      { text: { fr: "**Inclusion** : une personne qui **emprunte un livre** doit **d'abord souscrire un abonnement**.", en: "**Inclusion**: a person who **borrows a book** must **first take out a subscription**." } },
      { text: { fr: "**Inclusion d'association** : tout **enseignant** d'une **matière** doit être **qualifié** pour cette matière.", en: "**Association inclusion**: every **teacher** of a **subject** must be **qualified** for that subject." } },
      { text: { fr: "**Exclusion d'association** : une **personne propriétaire d'un logement** ne peut pas **payer un loyer pour son propre logement**.", en: "**Association exclusion**: a **person who owns a dwelling** cannot **pay rent for their own dwelling**." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Spécialisation ou agrégation ?", en: "Specialisation or aggregation?" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "L'**agrégation** consiste à traiter une **association** comme une **entité de niveau supérieur**.",
        en: "**Aggregation** consists in treating an **association** as a **higher-level entity**.",
      },
      answer: true,
      justification: {
        fr: "Oui : c'est exactement la définition. Elle sert à exprimer une association d'associations, par exemple « un employé exploite une machine **dans le cadre d'un projet** ».",
        en: "Yes: that is exactly the definition. It is used to express an association of associations, for example 'an employee uses a machine **within a project**'.",
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
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Reprenons le cas complet du chapitre. **Domaine** : « Scolarité des étudiants ». **But** : gérer des informations sur des étudiants pour un suivi administratif et pédagogique.",
      en: "Let us take the full case of the chapter. **Domain**: « Student records ». **Goal**: manage information about students for administrative and pedagogical follow-up.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "À chaque étudiant est attribué un **numéro unique** ; on connaît son **nom**, son **prénom**, son **adresse** et sa **filière d'inscription**.", en: "Each student has a **unique number**; we know the **last name**, **first name**, **address** and the **enrolled program**." } },
      { text: { fr: "Pour calculer les résultats, on conserve les **notes** obtenues par un étudiant dans **chaque module** de sa filière.", en: "To compute results, we keep the **grades** obtained by a student in **each module** of the program." } },
      { text: { fr: "Une **filière** est identifiée par un **nom** ; on connaît l'**enseignant responsable** de la filière et les **modules enseignés**.", en: "A **program** is identified by a **name**; we know its **responsible teacher** and the **modules taught**." } },
      { text: { fr: "Un **module** est identifié par un **nom** ; on connaît son **volume horaire** et son **enseignant responsable**.", en: "A **module** is identified by a **name**; we know its **number of hours** and its **responsible teacher**." } },
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
        },
        nodes: [
          { id: "etudiant", label: { fr: "ÉTUDIANT (NoEtudiant)", en: "STUDENT (StudentNo)" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "inscrire", label: { fr: "Inscrire", en: "Enrol" }, x: 280, y: 0, shape: "box", tone: "soft" },
          { id: "filiere", label: { fr: "FILIÈRE (NomFilière)", en: "PROGRAM (ProgramName)" }, x: 560, y: 0, shape: "box", tone: "primary" },
          { id: "enseignant", label: { fr: "ENSEIGNANT", en: "TEACHER" }, x: 560, y: 170, shape: "box", tone: "primary" },
          { id: "nbheures", label: { fr: "MODULE (NomModule, NbHeures)", en: "MODULE (ModuleName, Hours)" }, x: 280, y: 170, shape: "box", tone: "primary" },
          { id: "obtenir", label: { fr: "Obtenir_Note", en: "Get_Grade" }, x: 0, y: 170, shape: "box", tone: "soft" },
        ],
        edges: [
          { from: "etudiant", to: "inscrire", label: "(1,N)" },
          { from: "inscrire", to: "filiere", label: "(0,N)" },
          { from: "filiere", to: "nbheures", label: { fr: "contient (1,N)", en: "contains (1,N)" } },
          { from: "enseignant", to: "nbheures", label: { fr: "responsable (0,N)", en: "responsible (0,N)" }, dashed: true },
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
    },
  },
  {
    type: "code",
    lang: "text",
    text: "ETUDIANTS (NoEtudiant, Nom, Prénom, Adresse, NomFilière)\nFILIERES (NomFilière, NomResponsable)\nMODULES (NomModule, NomFilière, NomResponsable, NbHeures)\nNOTES (NoEtudiant, NomModule, Note)",
    caption: {
      fr: "Schéma relationnel obtenu par traduction du schéma conceptuel.",
      en: "Relational schema obtained by translating the conceptual schema.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Le bilan du chapitre 1", en: "Chapter 1 recap" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans le cas « Scolarité », la note est portée par la table **NOTES (NoEtudiant, NomModule, Note)**. Quelle est la clé la plus probable de cette table ?",
        en: "In the « Student records » case, the grade is carried by the table **GRADES (StudentNo, ModuleName, Grade)**. What is the most likely key of this table?",
      },
      options: [
        {
          text: { fr: "**(NoEtudiant, NomModule)** : un étudiant a une seule note par module.", en: "**(StudentNo, ModuleName)**: a student has a single grade per module." },
          feedback: { fr: "Oui : c'est le couple (étudiant, module) qui identifie la note.", en: "Yes: the (student, module) pair identifies the grade." },
        },
        {
          text: { fr: "**Note** seule.", en: "**Grade** alone." },
          feedback: { fr: "Non : plusieurs étudiants peuvent avoir la même note.", en: "No: several students may have the same grade." },
        },
        {
          text: { fr: "**NoEtudiant** seul.", en: "**StudentNo** alone." },
          feedback: { fr: "Non : un étudiant obtient plusieurs notes (une par module).", en: "No: a student gets several grades (one per module)." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "L'association Obtenir_Note n'a aucun rôle à maximum 1 : son identifiant est donc **(NoEtudiant, NomModule)**.",
        en: "The Get_Grade association has no role with a maximum of 1: so its identifier is **(StudentNo, ModuleName)**.",
      },
    },
  },
];
