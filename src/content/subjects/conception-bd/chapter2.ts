import type { Block } from "../../types";

export const chapterTwo: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Le modèle Entité-Association décrit le monde réel de façon très riche. Mais les **SGBD actuels** utilisent presque tous un autre modèle, plus simple : le **modèle relationnel**. Ce chapitre montre comment passer de l'un à l'autre (la **transformation**) et comment **améliorer** un schéma relationnel à l'aide des **dépendances fonctionnelles** et de la **normalisation**.",
      en: "The Entity-Relationship model describes the real world in a very rich way. But **today's DBMSs** almost all use another, simpler model: the **relational model**. This chapter shows how to move from one to the other (the **transformation**) and how to **improve** a relational schema using **functional dependencies** and **normalization**.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "1. Les concepts du modèle relationnel",
      en: "1. The concepts of the relational model",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le modèle relationnel est aussi un modèle **conceptuel**, mais **beaucoup moins riche** sur le plan sémantique : il ne comporte **qu'un seul concept, la relation**. C'est justement cette **simplicité** et cette **rigueur** qui expliquent son succès.",
      en: "The relational model is also a **conceptual** model, but **much less rich** semantically: it has **only one concept, the relation**. It is precisely this **simplicity** and **rigour** that explain its success.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Une **base de données relationnelle** est un **ensemble de relations**.", en: "A **relational database** is a **set of relations**." } },
      { text: { fr: "Une **relation R** est, mathématiquement, un **sous-ensemble du produit cartésien** d'une liste de domaines : **R ⊂ D₁ × D₂ × … × Dₙ**.", en: "A **relation R** is, mathematically, a **subset of the Cartesian product** of a list of domains: **R ⊂ D₁ × D₂ × … × Dₙ**." } },
      { text: { fr: "Un **domaine de valeur** est un ensemble de valeurs ou un type de valeurs (entier, réel, caractère, chaîne, booléen, date...).", en: "A **value domain** is a set of values or a type of values (integer, real, character, string, boolean, date...)." } },
      { text: { fr: "**n** est le **degré** de la relation : le nombre de domaines.", en: "**n** is the **degree** of the relation: the number of domains." } },
      { text: { fr: "Un **attribut** est le **nom donné à un domaine** : il donne un sens (un rôle) au domaine.", en: "An **attribute** is the **name given to a domain**: it gives a meaning (a role) to the domain." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Le **schéma** d'une relation s'écrit **R(A₁, A₂, …, Aₙ)** : **R** est le nom de la relation et les **Aᵢ** sont les noms des attributs. Le schéma décrit la relation **par intention**. Un **élément** de la relation (un **n-uplet**) s'écrit **<d₁, d₂, …, dₙ>** avec d₁ ∈ D₁, ..., dₙ ∈ Dₙ. On parle aussi de **tuple** ou d'**agrégat**.",
      en: "The **schema** of a relation is written **R(A₁, A₂, …, Aₙ)**: **R** is the relation name and the **Aᵢ** are the attribute names. The schema describes the relation **by rule**. An **element** of the relation (an **n-tuple**) is written **<d₁, d₂, …, dₙ>** with d₁ ∈ D₁, ..., dₙ ∈ Dₙ. It is also called a **tuple** or record.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Degré et tuple", en: "Degree and tuple" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "La relation **Article(NoArt, Designation, Couleur, NoCat, PrixHT, Stock)** a un **degré** de :",
        en: "The relation **Article(NoArt, Designation, Colour, CatNo, PriceHT, Stock)** has a **degree** of:",
      },
      options: [
        {
          text: { fr: "**6** (le nombre d'attributs).", en: "**6** (the number of attributes)." },
          feedback: { fr: "Oui : le degré est le nombre de domaines, donc d'attributs, de la relation.", en: "Yes: the degree is the number of domains, hence attributes, of the relation." },
        },
        {
          text: { fr: "**2** (le nombre de tables liées).", en: "**2** (the number of linked tables)." },
          feedback: { fr: "Non : le degré concerne une seule relation et son nombre d'attributs.", en: "No: the degree concerns a single relation and its number of attributes." },
        },
        {
          text: { fr: "**5** (les colonnes non clés).", en: "**5** (the non-key columns)." },
          feedback: { fr: "Non : le degré compte **tous** les attributs.", en: "No: the degree counts **all** attributes." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Le **degré** d'une relation est son **nombre d'attributs** ; ici 6. Le nombre de lignes s'appelle la **cardinalité** de la relation.",
        en: "The **degree** of a relation is its **number of attributes**; here 6. The number of rows is called the **cardinality** of the relation.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: {
      fr: "2. Transformer un schéma E-A en schéma relationnel",
      en: "2. Transforming an E-R schema into a relational schema",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'objectif est de **traduire** un schéma E-A en schéma relationnel grâce à un **ensemble de règles**. Une autre démarche existe (partir directement de relations et les **normaliser**), mais elle est plus risquée : nous la verrons ensuite.",
      en: "The goal is to **translate** an E-R schema into a relational schema using a **set of rules**. Another approach exists (start directly from relations and **normalize** them), but it is riskier: we will see it next.",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Règle 1 — Entités** : tout **type entité** devient une **relation** ; ses attributs sont ses **propriétés** ; sa **clé** est l'**identifiant principal** du type entité. Exemple : **ETUDIANT(NoEtudiant, NomEtudiant, Prénom, Adresse)**.",
          en: "**Rule 1 — Entities**: every **entity type** becomes a **relation**; its attributes are its **properties**; its **key** is the **primary identifier** of the entity type. Example: **STUDENT(StudentNo, LastName, FirstName, Address)**.",
        },
      },
      {
        text: {
          fr: "**Règle 2 — Associations** : tout **type association** devient une **relation** ; ses attributs sont les **identifiants des entités participantes** et, éventuellement, les **propriétés de l'association** ; sa **clé** est l'**identifiant du type association**. Exemple : **INSCRIRE(CodeFilière, NoEtudiant)**.",
          en: "**Rule 2 — Associations**: every **association type** becomes a **relation**; its attributes are the **identifiers of the participating entities** and, possibly, the **association properties**; its **key** is the **identifier of the association type**. Example: **ENROL(ProgramCode, StudentNo)**.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "La règle 2 peut créer beaucoup de relations. La **règle 3** la **restreint** pour **diminuer le nombre de relations**.",
      en: "Rule 2 can create a lot of relations. **Rule 3** **restricts** it to **reduce the number of relations**.",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Règle 3 — Association dont un rôle a la cardinalité (1,1)** : un tel rôle est une **dépendance fonctionnelle** entre ce rôle et les autres rôles. On traduit l'association en **introduisant l'identifiant des entités cibles de la DF dans la relation source de la DF**. On dit qu'on **introduit une clé étrangère** dans une relation. Les **propriétés** de l'association sont alors portées par la **relation source de la DF**. Le **lien de spécialisation/généralisation** est un cas particulier de cette règle.",
          en: "**Rule 3 — Association with a role of cardinality (1,1)**: such a role is a **functional dependency** between that role and the other roles. The association is translated by **adding the identifier of the entities targeted by the FD into the source relation of the FD**. We say we **introduce a foreign key**. The association's **properties** are then carried by the **source relation of the FD**. The **specialisation/generalisation link** is a special case of this rule.",
        },
      },
      {
        text: {
          fr: "**Règle 4 — Agrégation** : l'**agrégation** est une association qui se comporte comme une entité. On la traduit par une **relation dotée d'un identifiant artificiel** (l'identifiant de l'agrégation). Une association entre une entité et une agrégation se traite comme une association **entre deux entités**.",
          en: "**Rule 4 — Aggregation**: **aggregation** is an association that behaves like an entity. It is translated into a **relation with an artificial identifier** (the aggregation's identifier). An association between an entity and an aggregation is treated like an association **between two entities**.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Exemple de la règle 3** : soit l'association bijective (1,1) entre MODULE et FILIÈRE. La règle 1 donne **MODULE(CodeModule, NomModule, NbHeures)**. En appliquant la règle 3 (introduction d'une clé étrangère), on obtient **MODULE(CodeModule, NomModule, NbHeures, CodeFilière)**.",
      en: "**Rule 3 example**: take the bijective (1,1) association between MODULE and PROGRAM. Rule 1 gives **MODULE(ModuleCode, ModuleName, Hours)**. Applying rule 3 (adding a foreign key) gives **MODULE(ModuleCode, ModuleName, Hours, ProgramCode)**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Exemple de la règle 4** : l'agrégation « TRAVAILLER » entre Employé et Projet, puis l'association « EXPLOITER » entre TRAVAILLER et Machine. On obtient **TRAVAILLER(IdTravail, NumEmployé, NumProjet)** et **EXPLOITER(IdTravail, NumMachine)**.",
      en: "**Rule 4 example**: the « WORK » aggregation between Employee and Project, then the « USE » association between WORK and Machine. We get **WORK(WorkId, EmployeeNo, ProjectNo)** and **USE(WorkId, MachineNo)**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "En appliquant ces règles à la scolarité, on obtient le schéma relationnel suivant :",
      en: "Applying these rules to student records gives the following relational schema:",
    },
  },
  {
    type: "code",
    lang: "text",
    text: "ETUDIANT (NoEtudiant, NomEtudiant, Prénom, Adresse)\nFILIERE (CodeFilière, NomFilière, IdEnseignantRespFilière)\nINSCRIRE (CodeFilière, NoEtudiant)\nMODULE (CodeModule, NomModule, NbHeures, CodeFilière, IdEnseignantRespModule)\nENSEIGNANT (IdEnseignant, NomEnseignant)\nOBTENIR_NOTE (NoEtudiant, CodeModule, Date, Note)",
    caption: { fr: "Schéma relationnel de la scolarité après transformation.", en: "Relational schema of student records after transformation." },
  },
  {
    type: "checkpoint",
    concept: { fr: "Appliquer la règle 3", en: "Applying rule 3" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Une association entre MODULE et FILIÈRE a un rôle côté MODULE de cardinalité **(1,1)**. Que fait la **règle 3** ?",
        en: "An association between MODULE and PROGRAM has a role on the MODULE side with cardinality **(1,1)**. What does **rule 3** do?",
      },
      options: [
        {
          text: { fr: "On ajoute **CodeFilière** dans la relation MODULE (clé étrangère), au lieu de créer une table d'association.", en: "We add **ProgramCode** into the MODULE relation (foreign key), instead of creating an association table." },
          feedback: { fr: "Oui : un rôle (1,1) est une DF, on l'exprime par une clé étrangère.", en: "Yes: a (1,1) role is an FD, expressed by a foreign key." },
        },
        {
          text: { fr: "On crée une relation MODULE_FILIERE(CodeModule, CodeFilière).", en: "We create a relation MODULE_PROGRAM(ModuleCode, ProgramCode)." },
          feedback: { fr: "Non : c'est la règle 2, utilisée quand il n'y a pas de rôle à maximum 1.", en: "No: that is rule 2, used when there is no role with a maximum of 1." },
        },
        {
          text: { fr: "On supprime la relation MODULE.", en: "We delete the MODULE relation." },
          feedback: { fr: "Non : on ne supprime rien, on ajoute une clé étrangère.", en: "No: nothing is deleted, a foreign key is added." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Un rôle à **cardinalité maximale 1** est une **dépendance fonctionnelle** : on introduit l'identifiant de la cible comme **clé étrangère** dans la relation source.",
        en: "A role with **maximum cardinality 1** is a **functional dependency**: the target's identifier is added as a **foreign key** in the source relation.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: {
      fr: "3. Relation universelle, anomalies et décomposition",
      en: "3. Universal relation, anomalies and decomposition",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Modéliser le réel **directement** sous forme de relations est une démarche **arbitraire**, donc **mauvaise**. Elle provoque trois problèmes : une **mauvaise perception du monde réel**, l'autorisation de valeurs **absentes** (le « null ») et surtout de la **redondance de données**, source d'**incohérences lors des mises à jour**.",
      en: "Modelling reality **directly** as relations is an **arbitrary**, therefore **bad** approach. It causes three problems: a **poor perception of the real world**, the acceptance of **missing** values (the « null »), and above all **data redundancy**, a source of **inconsistencies during updates**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Considérons la **relation universelle** **PROPRIETAIRE(NoP, NOM, NoVEHICULE, MARQUE, MODELE, PUISS, COUL)** : elle mélange les propriétaires et les véhicules. On voit bien la redondance : le propriétaire Pierre apparaît deux fois, et le modèle Clio est répété.",
      en: "Consider the **universal relation** **OWNER(OwnerNo, NAME, VehicleNo, MAKE, MODEL, POWER, COLOUR)**: it mixes owners and vehicles. The redundancy is obvious: owner Pierre appears twice, and the model Clio is repeated.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'**approche par décomposition** évite ces anomalies. Elle part de la relation universelle et procède par **décompositions successives** en sous-relations, jusqu'à obtenir des relations **sans anomalies**, dites **normalisées**.",
      en: "The **decomposition approach** avoids these anomalies. It starts from the universal relation and proceeds by **successive decompositions** into sub-relations, until we obtain relations **without anomalies**, called **normalized**.",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Une **décomposition** de R(A₁, …, Aₙ) consiste à la remplacer par des relations **R₁, R₂, …, Rₖ** obtenues **par projections**, telles que le résultat des **jointures** **R₁ × R₂ × … × Rₖ** ait le **même schéma** que R.",
      en: "A **decomposition** of R(A₁, …, Aₙ) replaces it with relations **R₁, R₂, …, Rₖ** obtained **by projections**, such that the result of the **joins** **R₁ × R₂ × … × Rₖ** has the **same schema** as R.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **décomposition 1** sépare le propriétaire des véhicules : **R1(NoP, NOM)** et **R2(NoVéhicule, Marque, Modèle, Puiss, Coul, NoP)**. La **décomposition 2** va plus loin : **R3(NoP, NoVéhicule, Modèle, Coul)** et **R4(Modèle, Marque, Puiss)**. Une décomposition est dite **sans perte** si **R = R₁ × … × Rₖ** pour **toute extension de R**.",
      en: "Decomposition 1 separates the owner from the vehicles: **R1(OwnerNo, NAME)** and **R2(VehicleNo, Make, Model, Power, Colour, OwnerNo)**. Decomposition 2 goes further: **R3(OwnerNo, VehicleNo, Model, Colour)** and **R4(Model, Make, Power)**. A decomposition is called **lossless** if **R = R₁ × … × Rₖ** for **every extension of R**.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Le problème de la redondance", en: "The redundancy problem" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "La **redondance** de données est grave principalement parce qu'elle peut créer des **incohérences lors des mises à jour**.",
        en: "**Data redundancy** is serious mainly because it can create **inconsistencies during updates**.",
      },
      answer: true,
      justification: {
        fr: "Oui : si une information est répétée, il faut la modifier partout ; un oubli crée une **incohérence**. C'est l'anomalie de mise à jour.",
        en: "Yes: if a piece of information is repeated, it must be updated everywhere; forgetting one creates an **inconsistency**. This is the update anomaly.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: {
      fr: "4. Les dépendances fonctionnelles",
      en: "4. Functional dependencies",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour décomposer **sans perte**, il faut comprendre les **dépendances entre les données**, et en particulier la **dépendance fonctionnelle (DF)**. Exemple intuitif : « la couleur d'un véhicule dépend du numéro du véhicule, et ne dépend pas du modèle ».",
      en: "To decompose **losslessly**, we must understand the **dependencies between data**, and in particular the **functional dependency (FD)**. Intuitive example: 'the colour of a vehicle depends on the vehicle number, not on the model'.",
    },
  },
  {
    type: "quote",
    text: {
      fr: "La **DF** a été introduite par **Codd** pour caractériser les relations qui peuvent être **décomposées sans perte d'information**.",
      en: "The **FD** was introduced by **Codd** to characterise relations that can be **decomposed without losing information**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Prenons une relation R(A, B, C). Il existe une **dépendance fonctionnelle** de **A** vers **B**, notée **A → B**, si et seulement si : dès que deux n-uplets ont la **même valeur de A**, ils ont la **même valeur de B**. Autrement dit : **à toute valeur de A correspond une seule valeur de B**.",
      en: "Take a relation R(A, B, C). There is a **functional dependency** from **A** to **B**, written **A → B**, if and only if: as soon as two tuples have the **same value of A**, they have the **same value of B**. In other words: **each value of A corresponds to a single value of B**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Définition générale** : soient R(A₁, …, Aₙ) et deux sous-ensembles d'attributs **X** et **Y**. Il existe une **DF de X vers Y** si, pour **toute extension de R** et tout couple de n-uplets t1, t2 : **si t1[X] = t2[X] alors t1[Y] = t2[Y]**.",
      en: "**General definition**: let R(A₁, …, Aₙ) and two subsets of attributes **X** and **Y**. There is an **FD from X to Y** if, for **every extension of R** and every pair of tuples t1, t2: **if t1[X] = t2[X] then t1[Y] = t2[Y]**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Sur la relation PROPRIETAIRE, on **constate** l'ensemble F de dépendances fonctionnelles suivant :",
      en: "On the OWNER relation, we **observe** the following set F of functional dependencies:",
    },
  },
  {
    type: "code",
    lang: "text",
    text: "F = { NoP → NOM ; NoVEHICULE → MARQUE, COUL ; MODELE → PUISS ; MODELE → MARQUE ; NoVEHICULE → NoP }",
    caption: { fr: "Ensemble F des DF constatées sur PROPRIETAIRE.", en: "Set F of the FDs observed on OWNER." },
  },
  {
    type: "paragraph",
    text: {
      fr: "On **complète** alors le schéma d'une relation par l'ensemble de ses DF. On note : **R<U, F>**, où **U** est l'ensemble des attributs de R et **F** l'ensemble des dépendances fonctionnelles.",
      en: "The schema of a relation is then **completed** with its set of FDs. We write: **R<U, F>**, where **U** is the set of attributes of R and **F** the set of functional dependencies.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Lire une DF", en: "Reading an FD" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Dans une relation, **A → B** signifie que si deux lignes ont la même valeur de **A**, elles ont forcément la même valeur de **B**.",
        en: "In a relation, **A → B** means that if two rows have the same value of **A**, they necessarily have the same value of **B**.",
      },
      answer: true,
      justification: {
        fr: "C'est la définition : la valeur de **B** est **fonction** de la valeur de **A** (une seule valeur de B par valeur de A).",
        en: "That is the definition: the value of **B** is a **function** of the value of **A** (one value of B per value of A).",
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
      fr: "5. Les propriétés (axiomes) des dépendances fonctionnelles",
      en: "5. Properties (axioms) of functional dependencies",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Ces règles forment le **système d'axiomes d'Armstrong**. Elles servent à **dériver** de nouvelles DF à partir de celles qu'on connaît.",
      en: "These rules form the **Armstrong axiom system**. They are used to **derive** new FDs from known ones.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Réflexivité** : si **Y ⊆ X** alors **X → Y**. Une telle DF est dite **triviale** (tout ensemble détermine lui-même ou une partie de lui-même).", en: "**Reflexivity**: if **Y ⊆ X** then **X → Y**. Such an FD is called **trivial** (any set determines itself or part of itself)." } },
      { text: { fr: "**Augmentation** : on ne change pas une DF si on **augmente sa partie gauche** : **X → Y** et **Z ⊆ U** donnent **X ∪ Z → Y ∪ Z**.", en: "**Augmentation**: an FD is unchanged if we **expand its left-hand side**: **X → Y** and **Z ⊆ U** give **X ∪ Z → Y ∪ Z**." } },
      { text: { fr: "**Transitivité** : si **X → Y** et **Y → Z** alors **X → Z**. C'est une propriété **fondamentale** dans la conception d'une base de données. Exemple : NoVEHICULE → NoP et NoP → NOM donnent **NoVEHICULE → NOM**.", en: "**Transitivity**: if **X → Y** and **Y → Z** then **X → Z**. It is a **fundamental** property in database design. Example: VehicleNo → OwnerNo and OwnerNo → NAME give **VehicleNo → NAME**." } },
      { text: { fr: "**Pseudo-transitivité** : si **X → Y** et **Y ∪ W → Z** alors **X ∪ W → Z**.", en: "**Pseudo-transitivity**: if **X → Y** and **Y ∪ W → Z** then **X ∪ W → Z**." } },
      { text: { fr: "**Décomposition** : si **X → Y** et **Z ⊆ Y** alors **X → Z** (c'est une projection sur Z).", en: "**Decomposition**: if **X → Y** and **Z ⊆ Y** then **X → Z** (a projection onto Z)." } },
      { text: { fr: "**Union** : si **X → Y** et **X → Z** alors **X → Y ∪ Z** (l'inverse de la décomposition).", en: "**Union**: if **X → Y** and **X → Z** then **X → Y ∪ Z** (the inverse of decomposition)." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Utiliser la transitivité", en: "Using transitivity" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "On sait que **NoVéhicule → NoP** et **NoP → NOM**. Par ______, on déduit **NoVéhicule → NOM**.",
        en: "We know that **VehicleNo → OwnerNo** and **OwnerNo → NAME**. By ______, we deduce **VehicleNo → NAME**.",
      },
      blanks: [
        {
          accepted: ["transitivité", "transitivity", "transitivite"],
          mistakes: [
            {
              match: ["réflexivité", "reflexivity", "augmentation"],
              feedback: {
                fr: "Non : la **réflexivité** part de Y ⊆ X, l'**augmentation** élargit les deux côtés. Ici on **enchaîne** deux DF : c'est la **transitivité**.",
                en: "No: **reflexivity** starts from Y ⊆ X, **augmentation** widens both sides. Here we **chain** two FDs: this is **transitivity**.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "La **transitivité** : X → Y et Y → Z donc X → Z. C'est la règle la plus utilisée en normalisation.",
        en: "**Transitivity**: X → Y and Y → Z therefore X → Z. It is the most used rule in normalization.",
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
      fr: "6. Typologie des DF et clés",
      en: "6. Typology of FDs and keys",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**DF élémentaire** : **X → Y** est élémentaire s'il n'existe **aucun X' ⊂ X** tel que **X' → Y**. Exemple : NoVéhicule → NoP est élémentaire ; NoVéhicule, Modèle → NoP **n'est pas** élémentaire (Modèle est superflu).", en: "**Elementary FD**: **X → Y** is elementary if there is **no X' ⊂ X** with **X' → Y**. Example: VehicleNo → OwnerNo is elementary; VehicleNo, Model → OwnerNo is **not** elementary (Model is superfluous)." } },
      { text: { fr: "**DF directe** : une DF ne peut être directe que si elle est **élémentaire**. **X → Y** est directe s'il n'existe pas **Z** tel que **X → Z** et **Z → Y** (pas de transitivité). Exemple : NoVéhicule → NoP est directe ; NoVéhicule → NOM **n'est pas** directe (car NoVéhicule → NoP → NOM).", en: "**Direct FD**: an FD can be direct only if it is **elementary**. **X → Y** is direct if there is no **Z** with **X → Z** and **Z → Y** (no transitivity). Example: VehicleNo → OwnerNo is direct; VehicleNo → NAME is **not** direct (because VehicleNo → OwnerNo → NAME)." } },
      { text: { fr: "**DF canonique** : **X → Y** est canonique si **Y se réduit à un seul attribut**. La décomposition donne : **X → YZ ⇔ X → Y et X → Z**.", en: "**Canonical FD**: **X → Y** is canonical if **Y is a single attribute**. Decomposition gives: **X → YZ ⇔ X → Y and X → Z**." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "On définit enfin la **clé** d'une relation à l'aide des DF. Soient R(A₁, …, Aₙ) et **X ⊆ {A₁, …, Aₙ}** :",
      en: "Finally we define the **key** of a relation using FDs. Let R(A₁, …, Aₙ) and **X ⊆ {A₁, …, Aₙ}**:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: { fr: "**X → A₁, …, Aₙ** : X détermine **tous** les attributs.", en: "**X → A₁, …, Aₙ**: X determines **all** attributes." } },
      { text: { fr: "Il n'existe **aucun Y ⊂ X** tel que **Y → A₁, …, Aₙ** : X est **minimal**.", en: "There is **no Y ⊂ X** with **Y → A₁, …, Aₙ**: X is **minimal**." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Autrement dit, la clé est le **plus petit ensemble d'attributs qui détermine tous les autres**.",
      en: "In other words, the key is the **smallest set of attributes that determines all the others**.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Reconnaître une DF élémentaire", en: "Recognising an elementary FD" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Parmi ces DF, laquelle **n'est pas élémentaire** (sachant que **NoVéhicule → NoP** est vraie) ?",
        en: "Which of these FDs is **not elementary** (knowing that **VehicleNo → OwnerNo** holds)?",
      },
      options: [
        {
          text: { fr: "**NoVéhicule, Modèle → NoP**", en: "**VehicleNo, Model → OwnerNo**" },
          feedback: { fr: "Oui : on peut retirer Modèle à gauche. Modèle est superflu, donc la DF n'est pas élémentaire.", en: "Yes: Model can be removed from the left. Model is superfluous, so the FD is not elementary." },
        },
        {
          text: { fr: "**NoVéhicule → NoP**", en: "**VehicleNo → OwnerNo**" },
          feedback: { fr: "Elle est élémentaire : aucun sous-ensemble strict de {NoVéhicule} ne détermine NoP.", en: "It is elementary: no strict subset of {VehicleNo} determines OwnerNo." },
        },
        {
          text: { fr: "**Modèle → Puiss**", en: "**Model → Power**" },
          feedback: { fr: "Elle est élémentaire : Modèle seul détermine Puiss.", en: "It is elementary: Model alone determines Power." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Une DF est **élémentaire** si on ne peut pas retirer d'attribut à **gauche** sans perdre la DF. Ici, **NoVéhicule suffit**, donc **Modèle est superflu**.",
        en: "An FD is **elementary** if no attribute can be removed from the **left** without losing the FD. Here **VehicleNo suffices**, so **Model is superfluous**.",
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
      fr: "7. Graphe des DF, fermeture et couverture minimale",
      en: "7. FD graph, closure and minimal cover",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **graphe de DF** est un graphe dont les **nœuds** sont des attributs (simples ou composés) et les **arcs** sont les **DF existantes**. Il rend les dépendances visibles d'un coup d'œil.",
      en: "An **FD graph** is a graph whose **nodes** are attributes (simple or composite) and whose **arcs** are the existing **FDs**. It makes dependencies visible at a glance.",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "df-graphe",
        caption: {
          fr: "Graphe des DF de la relation PROPRIETAIRE. NoVéhicule détermine NoP qui détermine NOM : NOM dépend transitivement de NoVéhicule.",
          en: "FD graph of the OWNER relation. VehicleNo determines OwnerNo which determines NAME: NAME transitively depends on VehicleNo.",
        },
        nodes: [
          { id: "nov", label: { fr: "NoVéhicule", en: "VehicleNo" }, x: 0, y: 80, shape: "box", tone: "primary" },
          { id: "nop", label: { fr: "NoP", en: "OwnerNo" }, x: 230, y: 0, shape: "box", tone: "soft" },
          { id: "nom", label: { fr: "NOM", en: "NAME" }, x: 460, y: 0, shape: "box", tone: "soft" },
          { id: "modele", label: { fr: "Modèle", en: "Model" }, x: 230, y: 170, shape: "box", tone: "soft" },
          { id: "marque", label: { fr: "Marque", en: "Make" }, x: 460, y: 140, shape: "box", tone: "soft" },
          { id: "puiss", label: { fr: "Puiss", en: "Power" }, x: 460, y: 220, shape: "box", tone: "soft" },
          { id: "coul", label: { fr: "Coul", en: "Colour" }, x: 0, y: 200, shape: "box", tone: "soft" },
        ],
        edges: [
          { from: "nov", to: "nop" },
          { from: "nop", to: "nom" },
          { from: "nov", to: "coul" },
          { from: "nov", to: "modele", dashed: true },
          { from: "modele", to: "marque" },
          { from: "modele", to: "puiss" },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Fermeture transitive", en: "Transitive closure" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **fermeture transitive F\\*** est l'ensemble des **DF élémentaires de F** enrichi de toutes les DF élémentaires déduites, directement ou récursivement, **par transitivité**. Exemple : si **F = { NoVéhicule → Modèle ; NoVéhicule → Coul ; Modèle → Marque, Puiss }**, alors **F\\* = F ∪ { NoVéhicule → Marque ; NoVéhicule → Puiss }**.",
      en: "The **transitive closure F\\*** is the set of **elementary FDs of F** enriched with all elementary FDs derived, directly or recursively, **by transitivity**. Example: if **F = { VehicleNo → Model ; VehicleNo → Colour ; Model → Make, Power }**, then **F\\* = F ∪ { VehicleNo → Make ; VehicleNo → Power }**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Deux ensembles de DF sont **équivalents** s'ils ont la **même fermeture transitive**.", en: "Two sets of FDs are **equivalent** if they have the **same transitive closure**." } },
      { text: { fr: "Deux schémas de relation sont **équivalents** s'ils ont les **mêmes attributs** et la **même fermeture transitive** des DF.", en: "Two relation schemas are **equivalent** if they have the **same attributes** and the **same transitive closure** of FDs." } },
      { text: { fr: "La **fermeture transitive d'un ensemble d'attributs X\\*** est **X ∪ { tous les attributs déterminés directement ou transitivement à partir de X }**. Exemple : **{ NoVéhicule }\\* = { NoVéhicule, NoP, NOM, Modèle, Coul, Marque, Puiss }**.", en: "The **transitive closure of an attribute set X\\*** is **X ∪ { all attributes determined directly or transitively from X }**. Example: **{ VehicleNo }\\* = { VehicleNo, OwnerNo, NAME, Model, Colour, Make, Power }**." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Couverture minimale", en: "Minimal cover" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **couverture minimale** d'un ensemble de DF, notée **CM(F)**, est l'ensemble des **DF directes de F\\*** vérifiant deux propriétés :",
      en: "The **minimal cover** of a set of FDs, written **CM(F)**, is the set of **direct FDs of F\\*** satisfying two properties:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: { fr: "**Aucune DF n'est redondante** : si on retire une DF de CM(F), l'ensemble n'est plus équivalent.", en: "**No FD is redundant**: if an FD is removed from CM(F), the set is no longer equivalent." } },
      { text: { fr: "**Toute DF est élémentaire**.", en: "**Every FD is elementary**." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Autrement dit, la CM conserve toutes les **DF directes (non redondantes)**. L'algorithme de recherche revient à **éliminer les cycles dans le graphe des DF de F**.",
      en: "In other words, the CM keeps all the **direct (non-redundant) FDs**. The search algorithm amounts to **removing cycles in the FD graph of F**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Algorithme de décomposition en 3FN.** À partir de U et de CM(F) :",
      en: "**3NF decomposition algorithm.** Starting from U and CM(F):",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: { fr: "**Lister les attributs isolés** (n'apparaissant dans aucune DF) dans une relation ayant pour clé l'ensemble des attributs.", en: "**List isolated attributes** (appearing in no FD) in a relation whose key is the whole set of attributes." } },
      { text: { fr: "**Chercher le plus grand ensemble d'attributs X** qui détermine d'autres attributs A₁, …, Aₙ ; **éditer la relation R(X, A₁, …, Aₙ)** de clé X. Cette relation est **en 3FN**.", en: "**Find the largest set of attributes X** that determines other attributes A₁, …, Aₙ; **create the relation R(X, A₁, …, Aₙ)** with key X. This relation is **in 3NF**." } },
      { text: { fr: "**Éliminer** de CM(F) les DF **X → A₁ … X → Aₙ** et les attributs isolés, puis **recommencer à l'étape 2** tant que CM(F) n'est pas vide.", en: "**Remove** from CM(F) the FDs **X → A₁ … X → Aₙ** and the isolated attributes, then **repeat step 2** while CM(F) is not empty." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Couverture minimale : l'idée", en: "Minimal cover: the idea" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "La **couverture minimale** CM(F) garde les DF **directes** et supprime les DF **transitives** et **non élémentaires**.",
        en: "The **minimal cover** CM(F) keeps the **direct** FDs and removes the **transitive** and **non-elementary** FDs.",
      },
      answer: true,
      justification: {
        fr: "Oui : on retire ce qui est redondant (DF transitive) ou non élémentaire, en gardant un ensemble **équivalent** (même fermeture).",
        en: "Yes: we remove what is redundant (transitive FD) or non-elementary, keeping an **equivalent** set (same closure).",
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
      fr: "8. Les formes normales : 1FN, 2FN, 3FN",
      en: "8. Normal forms: 1NF, 2NF, 3NF",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **normalisation** vise un **schéma sans anomalies**, en exploitant les DF pour **décomposer sans perte** les relations en des formes dites **normalisées**.",
      en: "**Normalization** aims at a **schema without anomalies**, using FDs to **losslessly decompose** relations into so-called **normalized** forms.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Première forme normale (1FN)", en: "First normal form (1NF)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une relation est en **1FN si et seulement si tout attribut a une valeur atomique** (non décomposable). La 1FN consiste simplement à **éviter les domaines composés ou répétitifs**. Exemple : **ETUDIANT(NoEtud, Nom, Résultats)** n'est **pas en 1FN** (Résultats est répétitif et composé). En revanche **ETUDIANT(NoEtud, Nom, Module, Note)** est **en 1FN**.",
      en: "A relation is in **1NF if and only if every attribute has an atomic value** (non-decomposable). 1NF simply means **avoiding composed or repeating domains**. Example: **STUDENT(StudentNo, Name, Results)** is **not in 1NF** (Results is repeating and composed). On the other hand **STUDENT(StudentNo, Name, Module, Grade)** is **in 1NF**.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Deuxième forme normale (2FN)", en: "Second normal form (2NF)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une relation est en **2FN** si elle est en **1FN** et si **toute DF dont la source est la clé est élémentaire**. Autrement dit : **un attribut non clé ne dépend pas d'une partie de la clé**.",
      en: "A relation is in **2NF** if it is in **1NF** and if **every FD whose source is the key is elementary**. In other words: **a non-key attribute does not depend on part of the key**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Contre-exemple** : R<(A1, A2, A3, A4), { A1, A2 → A3 ; A2 → A4 }> n'est **pas en 2FN** (A2 est une partie de la clé, et A2 → A4).", en: "**Counter-example**: R<(A1, A2, A3, A4), { A1, A2 → A3 ; A2 → A4 }> is **not in 2NF** (A2 is part of the key, and A2 → A4)." } },
      { text: { fr: "**PERSONNE(Numéro, Nom)** est en 2FN (clé non composée).", en: "**PERSON(Number, Name)** is in 2NF (non-composite key)." } },
      { text: { fr: "**ETUDIANT(NoEtud, Nom, Module, Note)** n'est **pas en 2FN** et se décompose en **ETUDIANT(NoEtud, Nom)** (2FN) et **RESULTAT(NoEtud, Module, Note)** (2FN).", en: "**STUDENT(StudentNo, Name, Module, Grade)** is **not in 2NF** and decomposes into **STUDENT(StudentNo, Name)** (2NF) and **RESULT(StudentNo, Module, Grade)** (2NF)." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Troisième forme normale (3FN)", en: "Third normal form (3NF)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une relation est en **3FN** si elle est en **2FN** et si **tout attribut est en DF directe avec la clé**. Autrement dit : **tout attribut non clé ne dépend pas d'un attribut non clé**.",
      en: "A relation is in **3NF** if it is in **2NF** and if **every attribute is in a direct FD with the key**. In other words: **a non-key attribute does not depend on a non-key attribute**.",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Contre-exemple** : R<(A1, A2, A3, A4), { A1 → A3 ; A1 → A2 ; A1 → A4 ; A3 → A4 }> n'est **pas en 3FN** (A3 → A4 : un non-clé détermine un non-clé).", en: "**Counter-example**: R<(A1, A2, A3, A4), { A1 → A3 ; A1 → A2 ; A1 → A4 ; A3 → A4 }> is **not in 3NF** (A3 → A4: a non-key determines a non-key)." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Exemple sur PROPRIETAIRE** : la relation n'est **pas en 3FN** (NoP → NOM, et NoP n'est pas la clé). On décompose en **PERSONNE(NoP, NOM)**, en 3FN par construction, et **VEHICULE(NoVéhicule, Marque, Modèle, Puiss, Coul, NoP)**, qui n'est **pas en 3FN** car **Modèle → Marque, Puiss**. On décompose encore en **VEHICULE(NoVéhicule, Modèle, Coul, NoP)** (3FN) et **TYPE_VEHICULE(Modèle, Marque, Puiss)** (3FN).",
      en: "**Example on OWNER**: the relation is **not in 3NF** (OwnerNo → NAME, and OwnerNo is not the key). We decompose into **PERSON(OwnerNo, NAME)**, in 3NF by construction, and **VEHICLE(VehicleNo, Make, Model, Power, Colour, OwnerNo)**, which is **not in 3NF** because **Model → Make, Power**. We decompose again into **VEHICLE(VehicleNo, Model, Colour, OwnerNo)** (3NF) and **VEHICLE_TYPE(Model, Make, Power)** (3NF).",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une décomposition en 3FN **préserve les DF** : la **fermeture transitive** des DF de R est la même que celle de l'union des DF de {R1, …, Rn}. L'algorithme **élimine les cycles** dans le graphe des DF (blocs p7). **Remarque** : il est en général **plus facile de montrer qu'un schéma n'est pas en 3FN que le contraire**.",
      en: "A 3NF decomposition **preserves FDs**: the **transitive closure** of R's FDs is the same as that of the union of the FDs of {R1, …, Rn}. The algorithm **removes cycles** in the FD graph (part p7). **Note**: it is generally **easier to show a schema is not in 3NF than the opposite**.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "2FN et dépendance partielle", en: "2NF and partial dependency" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "La relation **ETUDIANT(NoEtud, Nom, Module, Note)** n'est **pas en 2FN**.",
        en: "The relation **STUDENT(StudentNo, Name, Module, Grade)** is **not in 2NF**.",
      },
      answer: true,
      justification: {
        fr: "Sa clé est **(NoEtud, Module)**, et **NoEtud → Nom** : un attribut non clé (Nom) dépend d'une **partie de la clé**. En 2FN, cela est interdit.",
        en: "Its key is **(StudentNo, Module)**, and **StudentNo → Name**: a non-key attribute (Name) depends on **part of the key**. 2NF forbids this.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "3FN et dépendance transitive", en: "3NF and transitive dependency" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Que faut-il **éviter** pour qu'une relation soit en **3FN** ?",
        en: "What must be **avoided** for a relation to be in **3NF**?",
      },
      options: [
        {
          text: { fr: "Qu'un attribut **non clé** dépende d'un autre attribut **non clé**.", en: "A **non-key** attribute depending on another **non-key** attribute." },
          feedback: { fr: "Oui : la 3FN exige que tout attribut soit en DF directe avec la clé.", en: "Yes: 3NF requires every attribute to be in a direct FD with the key." },
        },
        {
          text: { fr: "Qu'un attribut dépende d'une partie de la clé.", en: "An attribute depending on part of the key." },
          feedback: { fr: "C'est la règle de la **2FN**, pas de la 3FN.", en: "That is the **2NF** rule, not the 3NF rule." },
        },
        {
          text: { fr: "Qu'un attribut ait une valeur atomique.", en: "An attribute having an atomic value." },
          feedback: { fr: "Au contraire : c'est exigé par la 1FN.", en: "On the contrary: it is required by 1NF." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "**1FN** : valeurs atomiques. **2FN** : pas de dépendance à une partie de la clé. **3FN** : pas de dépendance d'un non-clé sur un non-clé (DF directe avec la clé).",
        en: "**1NF**: atomic values. **2NF**: no dependency on part of the key. **3NF**: no non-key depending on a non-key (direct FD with the key).",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p9",
    text: {
      fr: "9. BCNF, dépendances multivaluées et dépendances d'inclusion",
      en: "9. BCNF, multivalued dependencies and inclusion dependencies",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La **3FN ne suffit pas à éliminer toutes les incohérences**. Exemple : supposons qu'**un professeur n'enseigne qu'une matière**. Soit **R(Matière, Classe, Prof)** avec **{ Matière, Classe → Prof ; Prof → Matière }**. Cette relation est **en 3FN**, pourtant la DF **Prof → Matière** peut créer des incohérences.",
      en: "**3NF is not enough to remove all inconsistencies.** Example: suppose a **teacher teaches only one subject**. Let **R(Subject, Class, Teacher)** with **{ Subject, Class → Teacher ; Teacher → Subject }**. This relation is **in 3NF**, yet the FD **Teacher → Subject** can create inconsistencies.",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Une relation est en **BCNF** si et seulement si les **seules dépendances fonctionnelles élémentaires** sont celles dans lesquelles **une clé détermine un attribut**.",
      en: "A relation is in **BCNF** if and only if the **only elementary functional dependencies** are those in which **a key determines an attribute**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'exemple se décompose en **R1(Prof, Matière)** et **R2(Classe, Prof)**, toutes deux en BCNF.",
      en: "The example decomposes into **R1(Teacher, Subject)** and **R2(Class, Teacher)**, both in BCNF.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Dépendance fonctionnelle multivaluée (DFM)", en: "Multivalued functional dependency (MVD)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La DF est **insuffisante** pour saisir toutes les dépendances. La **DFM** prend en compte les liens de type **1,N ou 0,N**. On dit que **X multi-détermine Y**, noté **X →→ Y**, si à une valeur de **X** correspond un **ensemble de valeurs de Y**, ceci **indépendamment des autres attributs Z**. Exemple : **R(Étudiant, Cours, Sport)** avec **{ Étudiant →→ Cours ; Étudiant →→ Sport }** : le cours et le sport sont **indépendants**.",
      en: "FDs are **insufficient** to capture all dependencies. An **MVD** accounts for **1,N or 0,N** links. We say **X multidetermines Y**, written **X →→ Y**, if one value of **X** corresponds to a **set of values of Y**, **independently of the other attributes Z**. Example: **R(Student, Course, Sport)** with **{ Student →→ Course ; Student →→ Sport }**: course and sport are **independent**.",
    },
  },
  {
    type: "code",
    lang: "text",
    text: "Etudiant | Cours | Sport\n---------+-------+-------\nPierre   | BD    | Tennis\nPierre   | BD    | Foot\nPaul     | Math  | Foot\nPaul     | BD    | Foot",
    caption: { fr: "Extension de R(Étudiant, Cours, Sport) : cours et sport sont indépendants.", en: "Extension of R(Student, Course, Sport): course and sport are independent." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "La DFM vérifie des propriétés de **complémentation**, d'**augmentation**, de **transitivité** et d'**union**. La **DF est un cas particulier de la DFM**.", en: "MVDs satisfy properties of **complementation**, **augmentation**, **transitivity** and **union**. A **DF is a special case of an MVD**." } },
      { text: { fr: "Une DFM **X →→ Y** est **élémentaire** si **X ∩ Y = ∅** et s'il n'existe pas **X' ⊂ X** et **Y' ⊂ Y** avec **X' →→ Y'** (X et Y minimaux).", en: "An MVD **X →→ Y** is **elementary** if **X ∩ Y = ∅** and there is no **X' ⊂ X** and **Y' ⊂ Y** with **X' →→ Y'** (X and Y minimal)." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Quatrième forme normale (4FN)", en: "Fourth normal form (4NF)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une relation est en **4FN** si elle est en **BCNF** (ou 3FN) et si les **seules dépendances non triviales** sont de la forme **X →→ Y où X est une clé candidate**. **X →→ Y est non triviale** si **Y ≠ ∅**, **Y ⊄ X** et **(X, Y) n'est pas l'ensemble des attributs** (théorème de **Fagin**).",
      en: "A relation is in **4NF** if it is in **BCNF** (or 3NF) and if the **only non-trivial dependencies** are of the form **X →→ Y where X is a candidate key**. **X →→ Y is non-trivial** if **Y ≠ ∅**, **Y ⊄ X** and **(X, Y) is not the whole set of attributes** (**Fagin's** theorem).",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**R(Étudiant, Cours, Sport) n'est pas en 4FN** car **Étudiant →→ Cours** et **Étudiant →→ Sport** sont des DFM non triviales. On la décompose sans perte en **R1(Étudiant, Cours)** et **R2(Étudiant, Sport)** avec **R1 × R2 = R** ; ces deux relations sont en 4FN.",
      en: "**R(Student, Course, Sport) is not in 4NF** because **Student →→ Course** and **Student →→ Sport** are non-trivial MVDs. It decomposes losslessly into **R1(Student, Course)** and **R2(Student, Sport)** with **R1 × R2 = R**; both are in 4NF.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Dépendance d'inclusion (DI)", en: "Inclusion dependency (IND)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La DF et la DFM sont encore **insuffisantes**. La **dépendance d'inclusion**, notée **DI** ou **⊂**, prend en compte les **liens de type 0,1** et le **lien de spécialisation/généralisation**. Il existe une **DI entre X et Y** (notée **X ⊂ Y**) si **toute valeur de X est aussi une valeur de Y**. C'est une forme de **contrainte d'intégrité référentielle**. Exemple : **ÉtudiantSalarié(NoEtudSalarié, …)** et **Étudiant(NoEtud, …)** : la DI **NoEtudSalarié ⊂ NoEtud** exprime cette contrainte.",
      en: "FDs and MVDs are still **insufficient**. The **inclusion dependency**, written **IND** or **⊂**, accounts for **0,1 links** and the **specialisation/generalisation link**. There is an **IND between X and Y** (written **X ⊂ Y**) if **every value of X is also a value of Y**. It is a form of **referential integrity constraint**. Example: **WorkingStudent(WorkingStudentNo, …)** and **Student(StudentNo, …)**: the IND **WorkingStudentNo ⊂ StudentNo** expresses this constraint.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Pourquoi la BCNF ?", en: "Why BCNF?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "La relation **R(Matière, Classe, Prof)** avec **{ Matière, Classe → Prof ; Prof → Matière }** est en 3FN. Pourquoi passer en **BCNF** ?",
        en: "The relation **R(Subject, Class, Teacher)** with **{ Subject, Class → Teacher ; Teacher → Subject }** is in 3NF. Why move to **BCNF**?",
      },
      options: [
        {
          text: { fr: "Parce qu'en 3FN, **Prof → Matière** peut encore provoquer des incohérences.", en: "Because in 3NF, **Teacher → Subject** can still cause inconsistencies." },
          feedback: { fr: "Oui : la BCNF exige que **seule une clé** détermine un attribut. Ici Prof n'est pas une clé de R.", en: "Yes: BCNF requires that **only a key** determines an attribute. Here Teacher is not a key of R." },
        },
        {
          text: { fr: "Parce que la 3FN ne garantit pas les valeurs atomiques.", en: "Because 3NF does not guarantee atomic values." },
          feedback: { fr: "Si : la 3FN inclut la 1FN (valeurs atomiques).", en: "It does: 3NF includes 1NF (atomic values)." },
        },
        {
          text: { fr: "Parce que la 3FN ne préserve pas les DF.", en: "Because 3NF does not preserve FDs." },
          feedback: { fr: "Au contraire : la décomposition en 3FN **préserve** les DF.", en: "On the contrary: the 3NF decomposition **preserves** FDs." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "En **BCNF**, toute DF élémentaire part d'une **clé**. Or **Prof → Matière** part d'un attribut qui n'est pas une clé de R : on décompose en **R1(Prof, Matière)** et **R2(Classe, Prof)**.",
        en: "In **BCNF**, every elementary FD starts from a **key**. But **Teacher → Subject** starts from an attribute that is not a key of R: we decompose into **R1(Teacher, Subject)** and **R2(Class, Teacher)**.",
      },
    },
  },
];
