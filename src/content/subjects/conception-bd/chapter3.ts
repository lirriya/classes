import type { Block } from "../../types";

export const chapterThree: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Après avoir conçu et normalisé le schéma, il faut **interroger** et **modifier** la base. C'est le rôle du langage **SQL**, ici dans sa version **Oracle**. Ce chapitre présente les objets, les types, la définition des tables, la manipulation des données et surtout l'interrogation avec `SELECT`.",
      en: "After designing and normalizing the schema, we must **query** and **modify** the database. That is the role of the **SQL** language, here in its **Oracle** version. This chapter presents the objects, the types, the definition of tables, data manipulation and above all querying with `SELECT`.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "1. Les objets Oracle et les types de données",
      en: "1. Oracle objects and data types",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un serveur Oracle manipule des **objets**. Les principaux sont :",
      en: "An Oracle server works with **objects**. The main ones are:",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Table** : structure de stockage, avec des **contraintes** (clé primaire, clé unique, intégrité référentielle, cohérence, non null).", en: "**Table**: a storage structure, with **constraints** (primary key, unique key, referential integrity, consistency, not null)." } },
      { text: { fr: "**Index** : structure qui accélère l'accès aux lignes.", en: "**Index**: a structure that speeds up access to rows." } },
      { text: { fr: "**View** : requête stockée qui s'utilise comme une table.", en: "**View**: a stored query used like a table." } },
      { text: { fr: "**Synonym** : nom alternatif d'un objet.", en: "**Synonym**: an alternative name for an object." } },
      { text: { fr: "**Database link** : lien vers une base de données distante (BD réparties).", en: "**Database link**: a link to a remote database (distributed DBs)." } },
      { text: { fr: "**Sequence** : numérotation automatique.", en: "**Sequence**: automatic numbering." } },
      { text: { fr: "**Schema** : ensemble d'objets appartenant à un utilisateur.", en: "**Schema**: the set of objects belonging to a user." } },
      { text: { fr: "**Procedure / Function** : ensemble de commandes PL/SQL (la Function retourne une valeur).", en: "**Procedure / Function**: a set of PL/SQL commands (a Function returns a value)." } },
      { text: { fr: "**Trigger** : programme PL/SQL déclenché par des événements.", en: "**Trigger**: a PL/SQL program triggered by events." } },
      { text: { fr: "**Package** : collection d'objets PL/SQL.", en: "**Package**: a collection of PL/SQL objects." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **langages de base** d'Oracle sont : **SQL** (description, manipulation, interrogation, administration), la gestion des **transactions**, les objets programmables (**procédure, fonction, trigger, package**) et **PL/SQL**. Oracle propose les **types de données** principaux suivants :",
      en: "Oracle's **base languages** are: **SQL** (description, manipulation, querying, administration), **transaction** management, programmatic objects (**procedure, function, trigger, package**) and **PL/SQL**. Oracle offers the following main **data types**:",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`CHAR(n)` : chaîne **fixe** de 1 à 2000 caractères.", en: "`CHAR(n)`: a **fixed** string of 1 to 2000 characters." } },
      { text: { fr: "`VARCHAR2(n)` : chaîne **variable** de 1 à 4000 caractères.", en: "`VARCHAR2(n)`: a **variable** string of 1 to 4000 characters." } },
      { text: { fr: "`NUMBER(précision, échelle)` : nombre.", en: "`NUMBER(precision, scale)`: a number." } },
      { text: { fr: "`DATE` : date et heure.", en: "`DATE`: date and time." } },
      { text: { fr: "`LONG` : chaîne longue jusqu'à 2 Go, **remplacé par CLOB**.", en: "`LONG`: a long string up to 2 GB, **replaced by CLOB**." } },
      { text: { fr: "`RAW(n)`, `LONGRAW(n)` : chaîne binaire, **remplacée par BLOB**.", en: "`RAW(n)`, `LONGRAW(n)`: a binary string, **replaced by BLOB**." } },
      { text: { fr: "`ROWID` : chaîne hexadécimale (adresse d'une ligne de table).", en: "`ROWID`: a hexadecimal string (the address of a table row)." } },
      { text: { fr: "`BLOB`, `CLOB` : jusqu'à 4 Go.", en: "`BLOB`, `CLOB`: up to 4 GB." } },
      { text: { fr: "`BFILE` : pointeur sur un fichier externe.", en: "`BFILE`: a pointer to an external file." } },
      { text: { fr: "`TIMESTAMP` : extension du type date (fraction de seconde, fuseau horaire).", en: "`TIMESTAMP`: an extension of the date type (fraction of a second, time zone)." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Quel type choisir ?", en: "Which type to choose?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pour stocker un **nom de ville** de longueur variable (jusqu'à 25 caractères), quel type Oracle est le plus adapté ?",
        en: "To store a **city name** of variable length (up to 25 characters), which Oracle type is most suitable?",
      },
      options: [
        {
          text: { fr: "`VARCHAR2(25)` : chaîne variable.", en: "`VARCHAR2(25)`: a variable string." },
          feedback: { fr: "Oui : VARCHAR2 est fait pour les chaînes de longueur variable.", en: "Yes: VARCHAR2 is made for variable-length strings." },
        },
        {
          text: { fr: "`CHAR(25)` : chaîne fixe.", en: "`CHAR(25)`: a fixed string." },
          feedback: { fr: "Possible mais peu économique : CHAR complète avec des espaces. On réserve CHAR aux longueurs fixes.", en: "Possible but wasteful: CHAR pads with spaces. CHAR is reserved for fixed lengths." },
        },
        {
          text: { fr: "`NUMBER(25)` : nombre.", en: "`NUMBER(25)`: a number." },
          feedback: { fr: "Non : c'est un texte, pas un nombre.", en: "No: it is text, not a number." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "`VARCHAR2(n)` stocke une chaîne de **longueur variable** ; `CHAR(n)` stocke une chaîne de **longueur fixe** (complétée par des espaces).",
        en: "`VARCHAR2(n)` stores a **variable-length** string; `CHAR(n)` stores a **fixed-length** string (padded with spaces).",
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
      fr: "2. Définir des tables, contraintes, index et séquences",
      en: "2. Defining tables, constraints, indexes and sequences",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Créer et supprimer une table", en: "Creating and dropping a table" },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE TABLE <nom_table>\n  (<nom_colonne> <Type>  [<CONTRAINTE DE COLONNE>]\n   [, ...]  [, <CONTRAINTE DE TABLE> ...])\n  [Spécification de stockage]\n  [Données provenant d'une requête]\n\nDROP TABLE <nom_table> [CASCADE CONSTRAINTS]",
    caption: { fr: "Syntaxe de création et de suppression d'une table.", en: "Syntax for creating and dropping a table." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Définir une contrainte", en: "Defining a constraint" },
  },
  {
    type: "code",
    lang: "sql",
    text: "[CONSTRAINT NomContrainte]\n{ [NOT] NULL\n| {UNIQUE | PRIMARY KEY}\n| REFERENCES [schéma.]Table[(colonne)] [ON DELETE CASCADE]\n| CHECK (condition) }\n[EXCEPTIONS INTO [schéma.]Table]\n{DISABLE | ENABLE}\n[NOT] DEFERRABLE",
    caption: { fr: "Syntaxe générale d'une contrainte.", en: "General syntax of a constraint." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**NOT NULL** : la valeur « null » n'est pas autorisée.", en: "**NOT NULL**: the « null » value is not allowed." } },
      { text: { fr: "**UNIQUE** : clé unique ; la valeur « null » reste autorisée.", en: "**UNIQUE**: a unique key; the « null » value is still allowed." } },
      { text: { fr: "**PRIMARY KEY** : clé primaire ; la valeur « null » n'est pas autorisée.", en: "**PRIMARY KEY**: the primary key; the « null » value is not allowed." } },
      { text: { fr: "**REFERENCES** : contrainte d'intégrité référentielle (clé étrangère).", en: "**REFERENCES**: a referential integrity constraint (foreign key)." } },
      { text: { fr: "**ON DELETE CASCADE** : maintien de l'intégrité référentielle lors d'une suppression.", en: "**ON DELETE CASCADE**: maintains referential integrity on deletion." } },
      { text: { fr: "**CHECK** : condition à vérifier à chaque valeur insérée.", en: "**CHECK**: a condition to check for every inserted value." } },
      { text: { fr: "**EXCEPTIONS INTO** : place dans une table d'exception les lignes qui violent une contrainte activée.", en: "**EXCEPTIONS INTO**: stores in an exception table the rows that violate an enabled constraint." } },
      { text: { fr: "**DISABLE / ENABLE** : désactive ou réactive une contrainte. **DEFERRABLE** : report du contrôle.", en: "**DISABLE / ENABLE**: disables or re-enables a constraint. **DEFERRABLE**: defers the check." } },
    ],
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE TABLE Categories (\n  NoCat     NUMBER(2) PRIMARY KEY,\n  Categorie VARCHAR2(15) NOT NULL,\n  Taux_TVA  NUMBER(4,2) NOT NULL )\n\nCREATE TABLE Article (\n  NoArt       VARCHAR2(5) PRIMARY KEY,\n  Designation VARCHAR2(20) NOT NULL,\n  Couleur     VARCHAR2(15),\n  NoCat       NUMBER(2) NOT NULL REFERENCES Categories(NoCat),\n  PrixHT      NUMBER(10,2) CHECK (PrixHT > 0),\n  Stock       NUMBER(5)   CHECK (Stock >= 0) )\n\nCREATE TABLE Client (\n  NoClient  NUMBER(5) PRIMARY KEY,\n  NomClient VARCHAR2(15) NOT NULL,\n  Ville     VARCHAR2(25) )\n\nCREATE TABLE Commande (\n  NoCmde   VARCHAR2(5) PRIMARY KEY,\n  DateCmde DATE DEFAULT SYSDATE NOT NULL,\n  NoClient NUMBER(5) NOT NULL REFERENCES Client(NoClient) )",
    caption: { fr: "Quatre tables du magasin : Categories, Article, Client et Commande.", en: "Four tables of the shop: Categories, Article, Client and Commande." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **contraintes de table** concernent **une ou plusieurs colonnes** : `UNIQUE (...)`, `PRIMARY KEY (...)` et `FOREIGN KEY (...) REFERENCES ...`. Exemple avec la clé composée de la table de détail des commandes :",
      en: "**Table constraints** concern **one or more columns**: `UNIQUE (...)`, `PRIMARY KEY (...)` and `FOREIGN KEY (...) REFERENCES ...`. Example with the composite key of the order-detail table:",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE TABLE DetailCmde (\n  NoCmde  VARCHAR2(5) NOT NULL REFERENCES Commande(NoCmde),\n  NoArt   VARCHAR2(5) NOT NULL REFERENCES Article(NoArt),\n  QteCmde NUMBER(5) CHECK (QteCmde > 0),\n  PRIMARY KEY (NoCmde, NoArt) )",
    caption: { fr: "Clé composée (NoCmde, NoArt) et deux clés étrangères.", en: "Composite key (NoCmde, NoArt) and two foreign keys." },
  },
  {
    type: "paragraph",
    text: {
      fr: "En cas de violation d'une contrainte référentielle, on choisit une **politique** : **NO ACTION** (clause par défaut : on rejette la mise à jour), **CASCADE** (mise à jour en cascade), **SET DEFAULT** ou **SET NULL** (met la valeur par défaut ou « null », si c'est autorisé).",
      en: "When a referential constraint is violated, we choose a **policy**: **NO ACTION** (default: reject the update), **CASCADE** (cascading update), **SET DEFAULT** or **SET NULL** (set the default value or « null », if allowed).",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Modifier une table : ALTER et DROP", en: "Modifying a table: ALTER and DROP" },
  },
  {
    type: "code",
    lang: "sql",
    text: "ALTER TABLE <table> ADD    (<colonne> <type>)\nALTER TABLE <table> MODIFY (<colonne> <type>)\nALTER TABLE <table> ADD CONSTRAINT <nom> ...\nALTER TABLE <table> DROP COLUMN <colonne>\nALTER TABLE <table> DROP CONSTRAINT <nom>\nALTER TABLE <table> {ENABLE | DISABLE} CONSTRAINT <nom>\n\nRENAME <ancien> TO <nouveau>\nTRUNCATE TABLE <table>",
    caption: { fr: "Opérations ALTER, RENAME et TRUNCATE.", en: "ALTER, RENAME and TRUNCATE operations." },
  },
  {
    type: "paragraph",
    text: {
      fr: "**TRUNCATE TABLE** supprime **toutes les lignes** d'une table **sans vérifier les contraintes**. Le **dictionnaire de données** décrit tous les objets des schémas : on y accède par les vues préfixées `USER_` (mon schéma), `ALL_` (ce à quoi j'ai accès) et `DBA_` (tout le serveur). Exemples : `SELECT object_name, object_type, status FROM USER_OBJECTS`, `SELECT * FROM USER_TAB_COLUMNS`, `SELECT * FROM USER_CONSTRAINTS`.",
      en: "**TRUNCATE TABLE** removes **all rows** of a table **without checking constraints**. The **data dictionary** describes all objects of the schemas: it is accessed through views prefixed `USER_` (my schema), `ALL_` (what I can access) and `DBA_` (the whole server). Examples: `SELECT object_name, object_type, status FROM USER_OBJECTS`, `SELECT * FROM USER_TAB_COLUMNS`, `SELECT * FROM USER_CONSTRAINTS`.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Index et séquences", en: "Indexes and sequences" },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE INDEX NomIndex\n  ON NomTable (Colonne ASC | DESC, ...)\n  [PCTFREE entier] [INITRANS entier] [MAXTRANS entier]\n  [TABLESPACE tablespace] [STORAGE clause_stockage];\n\nCREATE INDEX article_idx_des ON Article(Designation);\nDROP INDEX article_idx_des;",
    caption: { fr: "Création et suppression d'un index (type Arbre_B*).", en: "Creating and dropping an index (B*Tree type)." },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE SEQUENCE NomSeq\n  [INCREMENT BY entier] [START WITH entier];\n\nCREATE SEQUENCE SeqClient INCREMENT BY 1 START WITH 1;\n\nSELECT SeqClient.Currval FROM Dual;",
    caption: { fr: "Séquence et pseudo-colonnes NEXTVAL / CURRVAL.", en: "Sequence and the NEXTVAL / CURRVAL pseudocolumns." },
  },
  {
    type: "checkpoint",
    concept: { fr: "Clé primaire et clé étrangère", en: "Primary key and foreign key" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Dans la table **Article**, la colonne **NoCat REFERENCES Categories(NoCat)** doit contenir une valeur qui existe déjà dans **Categories**. C'est l'**intégrité référentielle**.",
        en: "In the **Article** table, the column **NoCat REFERENCES Categories(NoCat)** must contain a value that already exists in **Categories**. This is **referential integrity**.",
      },
      answer: true,
      justification: {
        fr: "Oui : une clé étrangère doit **référencer** une clé existante (ou être « null » si la colonne l'autorise).",
        en: "Yes: a foreign key must **reference** an existing key (or be « null » if the column allows it).",
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
      fr: "3. Manipuler les données et gérer les transactions",
      en: "3. Manipulating data and managing transactions",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Insertion externe\nINSERT INTO {Table | Vue} [(liste de colonnes)] VALUES (liste de valeurs);\n\n-- Exemples\nINSERT INTO Article VALUES ('A1', 'Banane', 'jaune', 1, 1.10, 5000);\nINSERT INTO Client (NoClient, NomClient, Ville)\n  VALUES (SeqClient.NEXTVAL, 'Durand', 'Metz');\n\n-- Insertion interne (depuis une requête)\nINSERT INTO {Table | Vue} [(liste de colonnes)] SELECT ...;\nINSERT INTO Commande (NoCmde, DateCmde, NoClient)\n  SELECT 'C5', SYSDATE, 105 FROM Dual;",
    caption: { fr: "Insertion de données (externe et interne).", en: "Inserting data (external and internal)." },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Modification\nUPDATE {Table | Vue}\n  SET colonne = {expression | (SELECT ...)}\n  [, (liste de colonnes) = (SELECT ...)]\n  [WHERE condition];\n\nUPDATE Article SET PrixHT = PrixHT*0.9 WHERE Couleur = 'rouge';\n\n-- Suppression\nDELETE FROM {Table | Vue} [WHERE condition];",
    caption: { fr: "Modification et suppression.", en: "Updating and deleting." },
  },
  {
    type: "code",
    lang: "sql",
    text: "MERGE INTO {Table1 | Vue1}\nUSING {Table2 | Vue2 | SELECT ...}\nON (condition)\nWHEN MATCHED THEN\n  UPDATE SET colonne1 = val1, ...  [WHERE ...]\nWHEN NOT MATCHED THEN\n  INSERT (...) VALUES (...);",
    caption: { fr: "Fusion MERGE : mise à jour ou insertion selon un critère.", en: "MERGE: update or insert depending on a criterion." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **transaction** commence au premier ordre SQL et se termine par : **COMMIT** (valider), **ROLLBACK** (annuler), **SAVEPOINT** (point de sauvegarde qui découpe en sous-transactions), une instruction de **définition de données** (COMMIT implicite), la **fin de session** (COMMIT implicite) ou une **panne système** (ROLLBACK implicite).",
      en: "A **transaction** starts with the first SQL order and ends with: **COMMIT** (validate), **ROLLBACK** (cancel), **SAVEPOINT** (a savepoint that splits into sub-transactions), a **data definition** statement (implicit COMMIT), the **end of session** (implicit COMMIT) or a **system failure** (implicit ROLLBACK).",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Valider ou annuler", en: "Commit or rollback" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Après des **UPDATE** et des **DELETE**, quelle instruction **valide définitivement** les modifications ?",
        en: "After some **UPDATE** and **DELETE** statements, which instruction **permanently validates** the changes?",
      },
      options: [
        {
          text: { fr: "**COMMIT**", en: "**COMMIT**" },
          feedback: { fr: "Oui : COMMIT valide les manipulations.", en: "Yes: COMMIT validates the changes." },
        },
        {
          text: { fr: "**ROLLBACK**", en: "**ROLLBACK**" },
          feedback: { fr: "Non : ROLLBACK annule les manipulations.", en: "No: ROLLBACK cancels the changes." },
        },
        {
          text: { fr: "**SAVEPOINT**", en: "**SAVEPOINT**" },
          feedback: { fr: "Non : SAVEPOINT marque un point de sauvegarde dans la transaction.", en: "No: SAVEPOINT marks a savepoint inside the transaction." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "**COMMIT** valide, **ROLLBACK** annule, **SAVEPOINT** fixe un point de reprise intermédiaire.",
        en: "**COMMIT** validates, **ROLLBACK** cancels, **SAVEPOINT** sets an intermediate restart point.",
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
      fr: "4. Interroger la base : la requête SELECT",
      en: "4. Querying the database: the SELECT statement",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT expression ...\nFROM table [JOIN table ON ...]\n[WHERE qualification]\n[GROUP BY attribut ...]\n[HAVING qualification]\n[(UNION | INTERSECT | EXCEPT) SELECT ...]\n[ORDER BY attribut [ASC | DESC] ...];",
    caption: { fr: "Syntaxe générale d'une requête SQL.", en: "General syntax of a SQL query." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Une expression du `SELECT` est une **colonne**, une **combinaison de colonnes** ou une **valeur littérale** : c'est la **projection**. Le symbole `*` sélectionne toutes les colonnes.", en: "An expression in the `SELECT` is a **column**, a **combination of columns** or a **literal value**: this is the **projection**. The symbol `*` selects all columns." } },
      { text: { fr: "La clause **WHERE** définit les **prédicats** que les lignes doivent satisfaire : c'est la **restriction**. Le résultat est une **table temporaire**.", en: "The **WHERE** clause defines the **predicates** the rows must satisfy: this is **restriction**. The result is a **temporary table**." } },
    ],
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT [DISTINCT] expression [ [AS] nom ], ... | *\n\nSELECT * FROM Categories;\nSELECT NoArt, Designation || ' - ' || Couleur AS Article FROM Article;\nSELECT DISTINCT NoArt FROM DetailCmde;",
    caption: { fr: "Clause SELECT : DISTINCT et alias.", en: "SELECT clause: DISTINCT and alias." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "La clause WHERE", en: "The WHERE clause" },
  },
  {
    type: "code",
    lang: "sql",
    text: "Cond_Simple :=\n    Colonne Op_Comp {Colonne | Constante}\n  | Colonne IN (valeur, ...)\n  | Colonne BETWEEN Cste AND Cste\n  | Colonne LIKE Cste\n  | Colonne IS NULL\n  | Colonne IS NOT NULL",
    caption: { fr: "Conditions simples. Opérateurs : <, <=, >, >=, =, !=, <>", en: "Simple conditions. Operators: <, <=, >, >=, =, !=, <>" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**LIKE** : recherche de valeurs incomplètes. `%` remplace **zéro ou plusieurs** caractères ; `_` remplace **un seul** caractère.", en: "**LIKE**: searching for incomplete values. `%` replaces **zero or more** characters; `_` replaces **one** character." } },
      { text: { fr: "**IS NULL / IS NOT NULL** : compare une donnée à la valeur système **NULL**, qui exprime une **absence de valeur**.", en: "**IS NULL / IS NOT NULL**: compares data with the system value **NULL**, which means an **absence of value**." } },
      { text: { fr: "**IN** : teste si une valeur **appartient à une liste** (cette liste peut être le résultat d'une requête).", en: "**IN**: tests whether a value **belongs to a list** (that list may be the result of a query)." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Quelques fonctions SQL", en: "Some SQL functions" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Numériques** : `ABS`, `MOD`, `POWER`, `ROUND`, `TRUNC`, `SQRT`, `SIGN`.", en: "**Numeric**: `ABS`, `MOD`, `POWER`, `ROUND`, `TRUNC`, `SQRT`, `SIGN`." } },
      { text: { fr: "**Chaînes** : `SUBSTR`, `LENGTH`, `INSTR`, `UPPER`, `LOWER`, `LPAD`, `RPAD`, `LTRIM`, `RTRIM`, `TRIM`, `TRANSLATE`, `REPLACE`.", en: "**String**: `SUBSTR`, `LENGTH`, `INSTR`, `UPPER`, `LOWER`, `LPAD`, `RPAD`, `LTRIM`, `RTRIM`, `TRIM`, `TRANSLATE`, `REPLACE`." } },
      { text: { fr: "**Expressions régulières** : `REGEXP_LIKE(chaine, expression)`, `REGEXP_SUBSTR(...)`.", en: "**Regular expressions**: `REGEXP_LIKE(string, expression)`, `REGEXP_SUBSTR(...)`." } },
      { text: { fr: "**Dates** : `SYSDATE`, `ROUND(date, format)`, `MONTHS_BETWEEN(date1, date2)`, `TRUNC(date, format)`, `EXTRACT(partie FROM date)`.", en: "**Date**: `SYSDATE`, `ROUND(date, format)`, `MONTHS_BETWEEN(date1, date2)`, `TRUNC(date, format)`, `EXTRACT(part FROM date)`." } },
      { text: { fr: "**Conversion** : `TO_DATE`, `TO_CHAR`, `TO_NUMBER`, `CAST`.", en: "**Conversion**: `TO_DATE`, `TO_CHAR`, `TO_NUMBER`, `CAST`." } },
      { text: { fr: "**Autres** : `NVL(exp1, exp2)` (= exp2 si exp1 est NULL), `NVL2`, `DECODE`.", en: "**Others**: `NVL(exp1, exp2)` (= exp2 if exp1 is NULL), `NVL2`, `DECODE`." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Le motif LIKE", en: "The LIKE pattern" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "On veut les articles dont la désignation **commence** par « Ban ». On écrit : `WHERE Designation LIKE 'Ban______'`.",
        en: "We want articles whose designation **starts** with 'Ban'. We write: `WHERE Designation LIKE 'Ban______'`.",
      },
      blanks: [
        {
          accepted: ["%", "pourcent", "percent"],
          mistakes: [
            {
              match: ["_", "underscore", "tiret"],
              feedback: {
                fr: "Attention : `_` remplace **un seul** caractère. Pour **zéro ou plusieurs** caractères, on utilise `%`.",
                en: "Careful: `_` replaces **one** character. For **zero or more** characters, use `%`.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "`LIKE 'Ban%'` : le `%` remplace n'importe quelle suite de **zéro ou plusieurs** caractères.",
        en: "`LIKE 'Ban%'`: `%` replaces any sequence of **zero or more** characters.",
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
      fr: "5. Les jointures",
      en: "5. Joins",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Il y a **trois façons** de faire une jointure : (1) un **prédicat d'égalité** dans le `WHERE` ; (2) l'opérateur **IN** sur le résultat d'une sous-requête ; (3) l'opérateur **JOIN** dans le `FROM`, qui distingue les prédicats de **jointure** des prédicats de **restriction**.",
      en: "There are **three ways** to perform a join: (1) an **equality predicate** in the `WHERE`; (2) the **IN** operator on a sub-query result; (3) the **JOIN** operator in the `FROM`, which separates **join** predicates from **restriction** predicates.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- 1. Prédicat d'égalité (avec alias recommandés)\nSELECT ...\nFROM Table1 A, Table2 B\nWHERE A.Colonne1 = B.Colonne2;\n\n-- 2. Opérateur IN sur une sous-requête\nSELECT ...\nFROM Table1\nWHERE Colonne1 IN (SELECT Colonne2 FROM Table2);\n\n-- 3. Opérateur JOIN\nSELECT ...\nFROM Table1 JOIN Table2\n  ON Table1.Colonne1 = Table2.Colonne2;",
    caption: { fr: "Trois écritures équivalentes d'une jointure.", en: "Three equivalent ways to write a join." },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Jointure avec condition de restriction\nSELECT NomClient\nFROM Client JOIN Commande C ON Client.NoClient = C.NoClient\nWHERE Ville = 'Metz' AND DateCmde >= '01/09/25';\n\n-- Equi-jointure\nSELECT ... FROM Table1 JOIN Table2 USING (Colonne);\n-- Jointure naturelle\nSELECT ... FROM Table1 NATURAL JOIN Table2;\n-- Jointure externe\nSELECT ... FROM Table1 {LEFT | RIGHT | FULL} JOIN Table2 ON ...;",
    caption: { fr: "Equi-jointure, jointure naturelle et jointure externe.", en: "Equi-join, natural join and outer join." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans une **jointure externe**, les lignes d'une table **sans correspondance** sont conservées et complétées par des valeurs « null » côté opposé. **LEFT** garde les lignes de la table de gauche, **RIGHT** celles de droite, **FULL** les deux. Oracle accepte aussi l'opérateur spécifique **(+)** : `WHERE Client.NoClient = Commande.NoClient (+)`.",
      en: "In an **outer join**, rows from one table **without a match** are kept and completed with « null » values on the other side. **LEFT** keeps the left table's rows, **RIGHT** the right table's, **FULL** both. Oracle also accepts the specific **(+)** operator: `WHERE Client.NoClient = Commande.NoClient (+)`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Choisir la jointure", en: "Choosing the join" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "On veut **tous les clients**, **même ceux qui n'ont passé aucune commande** (avec des « null » dans les colonnes de commande). Quelle jointure ?",
        en: "We want **all customers**, **even those with no orders** (with « null » in the order columns). Which join?",
      },
      options: [
        {
          text: { fr: "**LEFT JOIN** : `Client LEFT JOIN Commande`", en: "**LEFT JOIN**: `Client LEFT JOIN Commande`" },
          feedback: { fr: "Oui : LEFT garde toutes les lignes de gauche (Client) et complète par null.", en: "Yes: LEFT keeps all left rows (Client) and pads with null." },
        },
        {
          text: { fr: "**JOIN** (interne) simple", en: "A plain (inner) **JOIN**" },
          feedback: { fr: "Non : la jointure interne supprime les clients sans commande.", en: "No: the inner join removes customers without orders." },
        },
        {
          text: { fr: "**RIGHT JOIN** : `Client RIGHT JOIN Commande`", en: "**RIGHT JOIN**: `Client RIGHT JOIN Commande`" },
          feedback: { fr: "Non : RIGHT garderait toutes les lignes de droite (Commande).", en: "No: RIGHT would keep all right rows (Commande)." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Pour garder les lignes **sans correspondance** d'une table, on utilise une **jointure externe** du bon côté : ici `Client LEFT JOIN Commande`.",
        en: "To keep the **unmatched** rows of one table, use an **outer join** on the right side: here `Client LEFT JOIN Commande`.",
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
      fr: "6. Agrégats, GROUP BY, HAVING et CASE",
      en: "6. Aggregates, GROUP BY, HAVING and CASE",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **opérateurs d'agrégats** portent sur un **ensemble de valeurs** et s'utilisent dans les expressions du `SELECT` : **COUNT** (nombre de réalisations), **SUM** (somme), **AVG** (moyenne), **MAX** (maximum), **MIN** (minimum).",
      en: "**Aggregate operators** work on a **set of values** and are used in `SELECT` expressions: **COUNT** (number of occurrences), **SUM**, **AVG** (average), **MAX**, **MIN**.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT COUNT(*) FROM Article;                          -- nombre total d'articles\nSELECT AVG(PrixHT) FROM Article WHERE NoCat = 1;         -- prix moyen catégorie 1\nSELECT SUM(QteCmde) FROM DetailCmde WHERE NoArt = 'A2';  -- total commandé de A2\n\nSELECT *\nFROM Article\nWHERE Stock = (SELECT MIN(Stock) FROM Article);          -- stock le plus bas",
    caption: { fr: "Exemples d'agrégats et d'agrégat dans une sous-requête.", en: "Examples of aggregates and of an aggregate in a sub-query." },
  },
  {
    type: "code",
    lang: "sql",
    text: "CASE expression WHEN val1 THEN res1 WHEN val2 THEN res2 ... [ELSE res] END\nCASE WHEN cond1 THEN res1 WHEN cond2 THEN res2 ... [ELSE res] END\n\nSELECT NoArt, PrixHT,\n  CASE WHEN NoCat = 1 THEN ROUND(PrixHT*0.1, 2)\n       ELSE ROUND(PrixHT*0.05, 2)\n  END Reduction\nFROM Article;",
    caption: { fr: "L'expression CASE : des tests à l'intérieur du SQL.", en: "The CASE expression: tests inside SQL." },
  },
  {
    type: "paragraph",
    text: {
      fr: "**GROUP BY** **partitionne** les lignes en **groupes** ayant des valeurs communes. **HAVING** ajoute des conditions sur les **groupes** (comme un `WHERE` appliqué aux groupes). **ORDER BY** trie le résultat et se place **en dernier** : `ASC` (défaut) ou `DESC` ; les valeurs **NULL** sont mises **en début**.",
      en: "**GROUP BY** **partitions** rows into **groups** with common values. **HAVING** adds conditions on the **groups** (like a `WHERE` applied to groups). **ORDER BY** sorts the result and comes **last**: `ASC` (default) or `DESC`; **NULL** values come **first**.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT NoDep, COUNT(*) nbEmp\nFROM Employe\nGROUP BY NoDep;\n\nSELECT NoArt\nFROM DetailCmde\nGROUP BY NoArt\nHAVING COUNT(*) > 2;",
    caption: { fr: "Regrouper par département, puis ne garder que les groupes ayant plus de deux lignes.", en: "Group by department, then keep only groups with more than two rows." },
  },
  {
    type: "checkpoint",
    concept: { fr: "WHERE ou HAVING ?", en: "WHERE or HAVING?" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Pour garder uniquement les groupes ayant **COUNT(*) > 2**, on utilise la clause **WHERE**.",
        en: "To keep only the groups with **COUNT(*) > 2**, we use the **WHERE** clause.",
      },
      answer: false,
      justification: {
        fr: "Non : **WHERE** filtre les **lignes avant** le regroupement. Pour filtrer **après** le regroupement, on utilise **HAVING**.",
        en: "No: **WHERE** filters **rows before** grouping. To filter **after** grouping, use **HAVING**.",
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
      fr: "7. Sous-requêtes, ANY, ALL, EXISTS et CTE",
      en: "7. Sub-queries, ANY, ALL, EXISTS and CTEs",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- ANY : vrai si la comparaison est vraie pour AU MOINS une valeur\nWHERE Colonne op_comp ANY (SELECT ...)\n-- ALL : vrai si la comparaison est vraie pour CHACUNE des valeurs\nWHERE Colonne op_comp ALL (SELECT ...)\n\n-- IN  est equivalent a  (= ANY)\n-- NOT IN est equivalent a  (<> ALL)\n\n-- Sous-requete sur plusieurs colonnes\nWHERE (Col1, Col2) IN (SELECT Exp1, Exp2 FROM ...)",
    caption: { fr: "Quantificateurs ANY / ALL et équivalences avec IN / NOT IN.", en: "ANY / ALL quantifiers and equivalences with IN / NOT IN." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une sous-requête est dite **corrélée** si elle utilise, dans son `WHERE`, des colonnes de la requête **principale**. Exemple : les employés qui gagnent **plus que la moyenne de leur département**.",
      en: "A sub-query is called **correlated** if it uses, in its `WHERE`, columns of the **main** query. Example: employees who earn **more than the average of their department**.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT E.NomEmp, E.Salaire\nFROM Employe E\nWHERE Salaire > (SELECT AVG(Salaire)\n                 FROM Employe\n                 WHERE NoDep = E.NoDep);",
    caption: { fr: "Sous-requête corrélée : la moyenne dépend du département de la ligne courante.", en: "Correlated sub-query: the average depends on the current row's department." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le prédicat **EXISTS (sous-requête)** est **vrai** si la sous-requête retourne **au moins une ligne**. Exemple : les employés qui **encadrent** au moins un autre employé.",
      en: "The predicate **EXISTS (sub-query)** is **true** if the sub-query returns **at least one row**. Example: employees who **manage** at least one other employee.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT NomEmp\nFROM Employe E\nWHERE EXISTS (SELECT * FROM Employe WHERE SupHier = E.NoEmp);",
    caption: { fr: "EXISTS : au moins une ligne correspondante.", en: "EXISTS: at least one matching row." },
  },
  {
    type: "paragraph",
    text: {
      fr: "La clause **WITH** (Common Table Expression) **matérialise** des sous-requêtes pour ne pas les recalculer et optimiser une requête complexe. Une requête récursive se fait avec **WITH ... UNION ALL** (ou, spécifique à Oracle, `START WITH ... CONNECT BY`).",
      en: "The **WITH** clause (Common Table Expression) **materializes** sub-queries so they are not recomputed, optimising a complex query. A recursive query uses **WITH ... UNION ALL** (or, Oracle-specific, `START WITH ... CONNECT BY`).",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Sans WITH\nSELECT NoEmp, NomEmp, Salaire, SalaireMoyenDep\nFROM Employe,\n     (SELECT NoDep, AVG(Salaire) SalaireMoyenDep\n      FROM Employe GROUP BY NoDep) R\nWHERE Employe.NoDep = R.NoDep AND Salaire > SalaireMoyenDep;\n\n-- Avec WITH\nWITH R (NoDep, SalaireMoyenDep) AS\n     (SELECT NoDep, AVG(Salaire) FROM Employe GROUP BY NoDep)\nSELECT NoEmp, NomEmp, Salaire, SalaireMoyenDep\nFROM Employe, R\nWHERE Employe.NoDep = R.NoDep AND Salaire > SalaireMoyenDep;",
    caption: { fr: "Même requête sans puis avec la clause WITH.", en: "The same query without and then with the WITH clause." },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Requête récursive : ancêtres (calcul du point fixe)\nWITH ancetre AS (\n  SELECT x, y FROM parent\n  UNION ALL\n  SELECT a.x, p.y FROM ancetre a, parent p WHERE a.y = p.x )\nSELECT x, y FROM ancetre;\n\n-- Spécifique Oracle : hiérarchie des employés\nSELECT level, lpad('---', 2*(level-1)) || NomEmp AS Nom, NoEmp, SupHier\nFROM Employe\nSTART WITH SupHier IS NULL\nCONNECT BY PRIOR NoEmp = SupHier;",
    caption: { fr: "Récursion : point fixe avec WITH, et hiérarchie Oracle avec CONNECT BY.", en: "Recursion: fixed point with WITH, and Oracle hierarchy with CONNECT BY." },
  },
  {
    type: "checkpoint",
    concept: { fr: "ANY, ALL et IN", en: "ANY, ALL and IN" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : **IN** est équivalent à **(= ______)**.",
        en: "Complete: **IN** is equivalent to **(= ______)**.",
      },
      blanks: [
        {
          accepted: ["ANY", "any"],
          mistakes: [
            {
              match: ["ALL", "all"],
              feedback: {
                fr: "Attention : **= ALL** voudrait dire « égal à **toutes** les valeurs », ce qui est presque toujours faux. **IN** correspond à **= ANY**.",
                en: "Careful: **= ALL** would mean 'equal to **all** values', which is almost always false. **IN** corresponds to **= ANY**.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "**IN** ≡ **(= ANY)** et **NOT IN** ≡ **(<> ALL)**.",
        en: "**IN** ≡ **(= ANY)** and **NOT IN** ≡ **(<> ALL)**.",
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
      fr: "8. Les vues",
      en: "8. Views",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **vue** est une **table virtuelle** : sa définition est stockée dans le **dictionnaire de données**, et on l'interroge et on la met à jour comme une table (avec des limites).",
      en: "A **view** is a **virtual table**: its definition is stored in the **data dictionary**, and it is queried and updated like a table (with limits).",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE [OR REPLACE] VIEW <nom_vue> [(liste_attributs)]\nAS <requête SQL de sélection>\n[WITH CHECK OPTION];\n\nDROP VIEW <nom_vue>;",
    caption: { fr: "Création et suppression d'une vue. WITH CHECK OPTION vérifie les conditions sur les insertions/modifications.", en: "Creating and dropping a view. WITH CHECK OPTION checks the conditions on inserts/updates." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une vue est **mettable à jour** si elle permet de reporter les mises à jour dans les tables sources **sans ambiguïté**. Conditions : la vue doit **conserver les clés** des tables de base, **ne pas contenir d'agrégat**, **ne pas contenir de `GROUP BY`**. En **SQL2**, seules les vues définies à partir d'**une table unique** sont considérées comme « mettable à jour ».",
      en: "A view is **updatable** if it lets updates be reported to the source tables **without ambiguity**. Conditions: the view must **keep the keys** of the base tables, **contain no aggregate**, **contain no `GROUP BY`**. In **SQL2**, only views defined from a **single table** are considered 'updatable'.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Quand une vue est-elle mettable à jour ?", en: "When is a view updatable?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Parmi ces vues, laquelle **n'est pas** « mettable à jour » de façon sûre ?",
        en: "Among these views, which one is **not** safely 'updatable'?",
      },
      options: [
        {
          text: { fr: "Une vue qui utilise **GROUP BY** et des **agrégats**.", en: "A view that uses **GROUP BY** and **aggregates**." },
          feedback: { fr: "Oui : la présence d'agrégats ou de GROUP BY empêche le report des mises à jour.", en: "Yes: aggregates or GROUP BY prevent reporting updates." },
        },
        {
          text: { fr: "Une vue qui conserve les clés d'une table unique.", en: "A view that keeps the keys of a single table." },
          feedback: { fr: "Au contraire : c'est un cas favorable (mettable à jour).", en: "On the contrary: that is a favourable (updatable) case." },
        },
        {
          text: { fr: "Une vue simple sur une seule table.", en: "A simple view on a single table." },
          feedback: { fr: "C'est justement le cas mettable à jour en SQL2.", en: "That is precisely the updatable case in SQL2." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Pour être mettable à jour, une vue doit **conserver les clés**, **sans agrégat ni GROUP BY** ; en SQL2, elle doit venir d'**une seule table**.",
        en: "To be updatable, a view must **keep the keys**, **without aggregates or GROUP BY**; in SQL2 it must come from a **single table**.",
      },
    },
  },
];
