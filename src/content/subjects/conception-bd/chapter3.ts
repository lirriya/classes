import type { Block } from "../../types";

export const chapterThree: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Après avoir conçu et normalisé le schéma, il faut **interroger** et **modifier** la base. C'est le rôle du langage **SQL**, ici dans sa version **Oracle**. Ce chapitre présente les objets, les types, la définition des tables, la manipulation des données et surtout l'interrogation avec `SELECT`.",
      en: "After designing and normalizing the schema, we must **query** and **modify** the database. That is the role of the **SQL** language, here in its **Oracle** version. This chapter presents the objects, the types, the definition of tables, data manipulation and above all querying with `SELECT`.",
      uk: "Після проєктування й нормалізації схеми потрібно **надсилати запити** до бази та **змінювати** її. Це роль мови **SQL**, тут у її версії **Oracle**. Цей розділ описує об'єкти, типи, визначення таблиць, маніпулювання даними й насамперед побудову запитів за допомогою `SELECT`.",
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
      uk: "1. Об'єкти Oracle і типи даних",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un serveur Oracle manipule des **objets**. Les principaux sont :",
      en: "An Oracle server works with **objects**. The main ones are:",
      uk: "Сервер Oracle працює з **об'єктами**. Основні з них:",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Table** : structure de stockage, avec des **contraintes** (clé primaire, clé unique, intégrité référentielle, cohérence, non null).", en: "**Table**: a storage structure, with **constraints** (primary key, unique key, referential integrity, consistency, not null).", uk: "**Таблиця**: структура зберігання з **обмеженнями** (первинний ключ, унікальний ключ, посилальна цілісність, узгодженість, not null)." } },
      { text: { fr: "**Index** : structure qui accélère l'accès aux lignes.", en: "**Index**: a structure that speeds up access to rows.", uk: "**Індекс**: структура, що прискорює доступ до рядків." } },
      { text: { fr: "**View** : requête stockée qui s'utilise comme une table.", en: "**View**: a stored query used like a table.", uk: "**Подання**: збережений запит, який використовують як таблицю." } },
      { text: { fr: "**Synonym** : nom alternatif d'un objet.", en: "**Synonym**: an alternative name for an object.", uk: "**Синонім**: альтернативна назва об'єкта." } },
      { text: { fr: "**Database link** : lien vers une base de données distante (BD réparties).", en: "**Database link**: a link to a remote database (distributed DBs).", uk: "**Database link**: посилання на віддалену базу даних (розподілені БД)." } },
      { text: { fr: "**Sequence** : numérotation automatique.", en: "**Sequence**: automatic numbering.", uk: "**Послідовність**: автоматична нумерація." } },
      { text: { fr: "**Schema** : ensemble d'objets appartenant à un utilisateur.", en: "**Schema**: the set of objects belonging to a user.", uk: "**Схема**: набір об'єктів, що належать користувачеві." } },
      { text: { fr: "**Procedure / Function** : ensemble de commandes PL/SQL (la Function retourne une valeur).", en: "**Procedure / Function**: a set of PL/SQL commands (a Function returns a value).", uk: "**Procedure / Function**: набір команд PL/SQL (Function повертає значення)." } },
      { text: { fr: "**Trigger** : programme PL/SQL déclenché par des événements.", en: "**Trigger**: a PL/SQL program triggered by events.", uk: "**Trigger**: програма PL/SQL, що запускається подіями." } },
      { text: { fr: "**Package** : collection d'objets PL/SQL.", en: "**Package**: a collection of PL/SQL objects.", uk: "**Package**: колекція об'єктів PL/SQL." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **langages de base** d'Oracle sont : **SQL** (description, manipulation, interrogation, administration), la gestion des **transactions**, les objets programmables (**procédure, fonction, trigger, package**) et **PL/SQL**. Oracle propose les **types de données** principaux suivants :",
      en: "Oracle's **base languages** are: **SQL** (description, manipulation, querying, administration), **transaction** management, programmatic objects (**procedure, function, trigger, package**) and **PL/SQL**. Oracle offers the following main **data types**:",
      uk: "**Базові мови** Oracle: **SQL** (опис, маніпулювання, побудова запитів, адміністрування), керування **транзакціями**, програмовані об'єкти (**процедура, функція, trigger, package**) і **PL/SQL**. Oracle пропонує такі основні **типи даних**:",
    },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`CHAR(n)` : chaîne **fixe** de 1 à 2000 caractères.", en: "`CHAR(n)`: a **fixed** string of 1 to 2000 characters.", uk: "`CHAR(n)`: рядок **фіксованої** довжини від 1 до 2000 символів." } },
      { text: { fr: "`VARCHAR2(n)` : chaîne **variable** de 1 à 4000 caractères.", en: "`VARCHAR2(n)`: a **variable** string of 1 to 4000 characters.", uk: "`VARCHAR2(n)`: рядок **змінної** довжини від 1 до 4000 символів." } },
      { text: { fr: "`NUMBER(précision, échelle)` : nombre.", en: "`NUMBER(precision, scale)`: a number.", uk: "`NUMBER(precision, scale)`: число." } },
      { text: { fr: "`DATE` : date et heure.", en: "`DATE`: date and time.", uk: "`DATE`: дата й час." } },
      { text: { fr: "`LONG` : chaîne longue jusqu'à 2 Go, **remplacé par CLOB**.", en: "`LONG`: a long string up to 2 GB, **replaced by CLOB**.", uk: "`LONG`: довгий рядок до 2 ГБ, **замінено на CLOB**." } },
      { text: { fr: "`RAW(n)`, `LONGRAW(n)` : chaîne binaire, **remplacée par BLOB**.", en: "`RAW(n)`, `LONGRAW(n)`: a binary string, **replaced by BLOB**.", uk: "`RAW(n)`, `LONGRAW(n)`: бінарний рядок, **замінено на BLOB**." } },
      { text: { fr: "`ROWID` : chaîne hexadécimale (adresse d'une ligne de table).", en: "`ROWID`: a hexadecimal string (the address of a table row).", uk: "`ROWID`: шістнадцятковий рядок (адреса рядка таблиці)." } },
      { text: { fr: "`BLOB`, `CLOB` : jusqu'à 4 Go.", en: "`BLOB`, `CLOB`: up to 4 GB.", uk: "`BLOB`, `CLOB`: до 4 ГБ." } },
      { text: { fr: "`BFILE` : pointeur sur un fichier externe.", en: "`BFILE`: a pointer to an external file.", uk: "`BFILE`: вказівник на зовнішній файл." } },
      { text: { fr: "`TIMESTAMP` : extension du type date (fraction de seconde, fuseau horaire).", en: "`TIMESTAMP`: an extension of the date type (fraction of a second, time zone).", uk: "`TIMESTAMP`: розширення типу date (долі секунди, часовий пояс)." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Quel type choisir ?", en: "Which type to choose?", uk: "Який тип вибрати?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pour stocker un **nom de ville** de longueur variable (jusqu'à 25 caractères), quel type Oracle est le plus adapté ?",
        en: "To store a **city name** of variable length (up to 25 characters), which Oracle type is most suitable?",
        uk: "Щоб зберегти **назву міста** змінної довжини (до 25 символів), який тип Oracle найкраще підходить?",
      },
      options: [
        {
          text: { fr: "`VARCHAR2(25)` : chaîne variable.", en: "`VARCHAR2(25)`: a variable string.", uk: "`VARCHAR2(25)`: рядок змінної довжини." },
          feedback: { fr: "Oui : VARCHAR2 est fait pour les chaînes de longueur variable.", en: "Yes: VARCHAR2 is made for variable-length strings.", uk: "Так: VARCHAR2 призначений для рядків змінної довжини." },
        },
        {
          text: { fr: "`CHAR(25)` : chaîne fixe.", en: "`CHAR(25)`: a fixed string.", uk: "`CHAR(25)`: рядок фіксованої довжини." },
          feedback: { fr: "Possible mais peu économique : CHAR complète avec des espaces. On réserve CHAR aux longueurs fixes.", en: "Possible but wasteful: CHAR pads with spaces. CHAR is reserved for fixed lengths.", uk: "Можливо, але марнотратно: CHAR доповнює пробілами. CHAR призначений для фіксованих довжин." },
        },
        {
          text: { fr: "`NUMBER(25)` : nombre.", en: "`NUMBER(25)`: a number.", uk: "`NUMBER(25)`: число." },
          feedback: { fr: "Non : c'est un texte, pas un nombre.", en: "No: it is text, not a number.", uk: "Ні: це текст, а не число." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "`VARCHAR2(n)` stocke une chaîne de **longueur variable** ; `CHAR(n)` stocke une chaîne de **longueur fixe** (complétée par des espaces).",
        en: "`VARCHAR2(n)` stores a **variable-length** string; `CHAR(n)` stores a **fixed-length** string (padded with spaces).",
        uk: "`VARCHAR2(n)` зберігає рядок **змінної довжини**; `CHAR(n)` зберігає рядок **фіксованої довжини** (доповнений пробілами).",
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
      uk: "2. Визначення таблиць, обмежень, індексів і послідовностей",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Créer et supprimer une table", en: "Creating and dropping a table", uk: "Створення та видалення таблиці" },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE TABLE <nom_table>\n  (<nom_colonne> <Type>  [<CONTRAINTE DE COLONNE>]\n   [, ...]  [, <CONTRAINTE DE TABLE> ...])\n  [Spécification de stockage]\n  [Données provenant d'une requête]\n\nDROP TABLE <nom_table> [CASCADE CONSTRAINTS]",
    caption: { fr: "Syntaxe de création et de suppression d'une table.", en: "Syntax for creating and dropping a table.", uk: "Синтаксис створення та видалення таблиці." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Définir une contrainte", en: "Defining a constraint", uk: "Визначення обмеження" },
  },
  {
    type: "code",
    lang: "sql",
    text: "[CONSTRAINT NomContrainte]\n{ [NOT] NULL\n| {UNIQUE | PRIMARY KEY}\n| REFERENCES [schéma.]Table[(colonne)] [ON DELETE CASCADE]\n| CHECK (condition) }\n[EXCEPTIONS INTO [schéma.]Table]\n{DISABLE | ENABLE}\n[NOT] DEFERRABLE",
    caption: { fr: "Syntaxe générale d'une contrainte.", en: "General syntax of a constraint.", uk: "Загальний синтаксис обмеження." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**NOT NULL** : la valeur « null » n'est pas autorisée.", en: "**NOT NULL**: the « null » value is not allowed.", uk: "**NOT NULL**: значення « null » не дозволене." } },
      { text: { fr: "**UNIQUE** : clé unique ; la valeur « null » reste autorisée.", en: "**UNIQUE**: a unique key; the « null » value is still allowed.", uk: "**UNIQUE**: унікальний ключ; значення « null » усе ще дозволене." } },
      { text: { fr: "**PRIMARY KEY** : clé primaire ; la valeur « null » n'est pas autorisée.", en: "**PRIMARY KEY**: the primary key; the « null » value is not allowed.", uk: "**PRIMARY KEY**: первинний ключ; значення « null » не дозволене." } },
      { text: { fr: "**REFERENCES** : contrainte d'intégrité référentielle (clé étrangère).", en: "**REFERENCES**: a referential integrity constraint (foreign key).", uk: "**REFERENCES**: обмеження посилальної цілісності (зовнішній ключ)." } },
      { text: { fr: "**ON DELETE CASCADE** : maintien de l'intégrité référentielle lors d'une suppression.", en: "**ON DELETE CASCADE**: maintains referential integrity on deletion.", uk: "**ON DELETE CASCADE**: підтримує посилальну цілісність під час видалення." } },
      { text: { fr: "**CHECK** : condition à vérifier à chaque valeur insérée.", en: "**CHECK**: a condition to check for every inserted value.", uk: "**CHECK**: умова, яку перевіряють для кожного вставленого значення." } },
      { text: { fr: "**EXCEPTIONS INTO** : place dans une table d'exception les lignes qui violent une contrainte activée.", en: "**EXCEPTIONS INTO**: stores in an exception table the rows that violate an enabled constraint.", uk: "**EXCEPTIONS INTO**: зберігає в таблиці винятків рядки, що порушують увімкнене обмеження." } },
      { text: { fr: "**DISABLE / ENABLE** : désactive ou réactive une contrainte. **DEFERRABLE** : report du contrôle.", en: "**DISABLE / ENABLE**: disables or re-enables a constraint. **DEFERRABLE**: defers the check.", uk: "**DISABLE / ENABLE**: вимикає або знову вмикає обмеження. **DEFERRABLE**: відкладає перевірку." } },
    ],
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE TABLE Categories (\n  NoCat     NUMBER(2) PRIMARY KEY,\n  Categorie VARCHAR2(15) NOT NULL,\n  Taux_TVA  NUMBER(4,2) NOT NULL )\n\nCREATE TABLE Article (\n  NoArt       VARCHAR2(5) PRIMARY KEY,\n  Designation VARCHAR2(20) NOT NULL,\n  Couleur     VARCHAR2(15),\n  NoCat       NUMBER(2) NOT NULL REFERENCES Categories(NoCat),\n  PrixHT      NUMBER(10,2) CHECK (PrixHT > 0),\n  Stock       NUMBER(5)   CHECK (Stock >= 0) )\n\nCREATE TABLE Client (\n  NoClient  NUMBER(5) PRIMARY KEY,\n  NomClient VARCHAR2(15) NOT NULL,\n  Ville     VARCHAR2(25) )\n\nCREATE TABLE Commande (\n  NoCmde   VARCHAR2(5) PRIMARY KEY,\n  DateCmde DATE DEFAULT SYSDATE NOT NULL,\n  NoClient NUMBER(5) NOT NULL REFERENCES Client(NoClient) )",
    caption: { fr: "Quatre tables du magasin : Categories, Article, Client et Commande.", en: "Four tables of the shop: Categories, Article, Client and Commande.", uk: "Чотири таблиці магазину: Categories, Article, Client і Commande." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **contraintes de table** concernent **une ou plusieurs colonnes** : `UNIQUE (...)`, `PRIMARY KEY (...)` et `FOREIGN KEY (...) REFERENCES ...`. Exemple avec la clé composée de la table de détail des commandes :",
      en: "**Table constraints** concern **one or more columns**: `UNIQUE (...)`, `PRIMARY KEY (...)` and `FOREIGN KEY (...) REFERENCES ...`. Example with the composite key of the order-detail table:",
      uk: "**Обмеження таблиці** стосуються **одного або кількох стовпців**: `UNIQUE (...)`, `PRIMARY KEY (...)` і `FOREIGN KEY (...) REFERENCES ...`. Приклад зі складеним ключем таблиці деталей замовлення:",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE TABLE DetailCmde (\n  NoCmde  VARCHAR2(5) NOT NULL REFERENCES Commande(NoCmde),\n  NoArt   VARCHAR2(5) NOT NULL REFERENCES Article(NoArt),\n  QteCmde NUMBER(5) CHECK (QteCmde > 0),\n  PRIMARY KEY (NoCmde, NoArt) )",
    caption: { fr: "Clé composée (NoCmde, NoArt) et deux clés étrangères.", en: "Composite key (NoCmde, NoArt) and two foreign keys.", uk: "Складений ключ (NoCmde, NoArt) і два зовнішні ключі." },
  },
  {
    type: "paragraph",
    text: {
      fr: "En cas de violation d'une contrainte référentielle, on choisit une **politique** : **NO ACTION** (clause par défaut : on rejette la mise à jour), **CASCADE** (mise à jour en cascade), **SET DEFAULT** ou **SET NULL** (met la valeur par défaut ou « null », si c'est autorisé).",
      en: "When a referential constraint is violated, we choose a **policy**: **NO ACTION** (default: reject the update), **CASCADE** (cascading update), **SET DEFAULT** or **SET NULL** (set the default value or « null », if allowed).",
      uk: "У разі порушення посилального обмеження вибирають **політику**: **NO ACTION** (типово: відхилити оновлення), **CASCADE** (каскадне оновлення), **SET DEFAULT** або **SET NULL** (встановлює значення за замовчуванням чи « null », якщо це дозволено).",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Modifier une table : ALTER et DROP", en: "Modifying a table: ALTER and DROP", uk: "Змінювання таблиці: ALTER і DROP" },
  },
  {
    type: "code",
    lang: "sql",
    text: "ALTER TABLE <table> ADD    (<colonne> <type>)\nALTER TABLE <table> MODIFY (<colonne> <type>)\nALTER TABLE <table> ADD CONSTRAINT <nom> ...\nALTER TABLE <table> DROP COLUMN <colonne>\nALTER TABLE <table> DROP CONSTRAINT <nom>\nALTER TABLE <table> {ENABLE | DISABLE} CONSTRAINT <nom>\n\nRENAME <ancien> TO <nouveau>\nTRUNCATE TABLE <table>",
    caption: { fr: "Opérations ALTER, RENAME et TRUNCATE.", en: "ALTER, RENAME and TRUNCATE operations.", uk: "Операції ALTER, RENAME і TRUNCATE." },
  },
  {
    type: "paragraph",
    text: {
      fr: "**TRUNCATE TABLE** supprime **toutes les lignes** d'une table **sans vérifier les contraintes**. Le **dictionnaire de données** décrit tous les objets des schémas : on y accède par les vues préfixées `USER_` (mon schéma), `ALL_` (ce à quoi j'ai accès) et `DBA_` (tout le serveur). Exemples : `SELECT object_name, object_type, status FROM USER_OBJECTS`, `SELECT * FROM USER_TAB_COLUMNS`, `SELECT * FROM USER_CONSTRAINTS`.",
      en: "**TRUNCATE TABLE** removes **all rows** of a table **without checking constraints**. The **data dictionary** describes all objects of the schemas: it is accessed through views prefixed `USER_` (my schema), `ALL_` (what I can access) and `DBA_` (the whole server). Examples: `SELECT object_name, object_type, status FROM USER_OBJECTS`, `SELECT * FROM USER_TAB_COLUMNS`, `SELECT * FROM USER_CONSTRAINTS`.",
      uk: "**TRUNCATE TABLE** видаляє **усі рядки** таблиці **без перевірки обмежень**. **Словник даних** описує всі об'єкти схем: до нього звертаються через подання з префіксами `USER_` (моя схема), `ALL_` (те, до чого я маю доступ) і `DBA_` (увесь сервер). Приклади: `SELECT object_name, object_type, status FROM USER_OBJECTS`, `SELECT * FROM USER_TAB_COLUMNS`, `SELECT * FROM USER_CONSTRAINTS`.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Index et séquences", en: "Indexes and sequences", uk: "Індекси та послідовності" },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE INDEX NomIndex\n  ON NomTable (Colonne ASC | DESC, ...)\n  [PCTFREE entier] [INITRANS entier] [MAXTRANS entier]\n  [TABLESPACE tablespace] [STORAGE clause_stockage];\n\nCREATE INDEX article_idx_des ON Article(Designation);\nDROP INDEX article_idx_des;",
    caption: { fr: "Création et suppression d'un index (type Arbre_B*).", en: "Creating and dropping an index (B*Tree type).", uk: "Створення та видалення індексу (тип Arbre_B*)." },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE SEQUENCE NomSeq\n  [INCREMENT BY entier] [START WITH entier];\n\nCREATE SEQUENCE SeqClient INCREMENT BY 1 START WITH 1;\n\nSELECT SeqClient.Currval FROM Dual;",
    caption: { fr: "Séquence et pseudo-colonnes NEXTVAL / CURRVAL.", en: "Sequence and the NEXTVAL / CURRVAL pseudocolumns.", uk: "Послідовність і псевдостовпці NEXTVAL / CURRVAL." },
  },
  {
    type: "checkpoint",
    concept: { fr: "Clé primaire et clé étrangère", en: "Primary key and foreign key", uk: "Первинний ключ і зовнішній ключ" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Dans la table **Article**, la colonne **NoCat REFERENCES Categories(NoCat)** doit contenir une valeur qui existe déjà dans **Categories**. C'est l'**intégrité référentielle**.",
        en: "In the **Article** table, the column **NoCat REFERENCES Categories(NoCat)** must contain a value that already exists in **Categories**. This is **referential integrity**.",
        uk: "У таблиці **Article** стовпець **NoCat REFERENCES Categories(NoCat)** повинен містити значення, яке вже існує в **Categories**. Це **посилальна цілісність**.",
      },
      answer: true,
      justification: {
        fr: "Oui : une clé étrangère doit **référencer** une clé existante (ou être « null » si la colonne l'autorise).",
        en: "Yes: a foreign key must **reference** an existing key (or be « null » if the column allows it).",
        uk: "Так: зовнішній ключ повинен **посилатися** на наявний ключ (або бути « null », якщо стовпець це дозволяє).",
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
      uk: "3. Маніпулювання даними й керування транзакціями",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Insertion externe\nINSERT INTO {Table | Vue} [(liste de colonnes)] VALUES (liste de valeurs);\n\n-- Exemples\nINSERT INTO Article VALUES ('A1', 'Banane', 'jaune', 1, 1.10, 5000);\nINSERT INTO Client (NoClient, NomClient, Ville)\n  VALUES (SeqClient.NEXTVAL, 'Durand', 'Metz');\n\n-- Insertion interne (depuis une requête)\nINSERT INTO {Table | Vue} [(liste de colonnes)] SELECT ...;\nINSERT INTO Commande (NoCmde, DateCmde, NoClient)\n  SELECT 'C5', SYSDATE, 105 FROM Dual;",
    caption: { fr: "Insertion de données (externe et interne).", en: "Inserting data (external and internal).", uk: "Вставлення даних (зовнішнє та внутрішнє)." },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Modification\nUPDATE {Table | Vue}\n  SET colonne = {expression | (SELECT ...)}\n  [, (liste de colonnes) = (SELECT ...)]\n  [WHERE condition];\n\nUPDATE Article SET PrixHT = PrixHT*0.9 WHERE Couleur = 'rouge';\n\n-- Suppression\nDELETE FROM {Table | Vue} [WHERE condition];",
    caption: { fr: "Modification et suppression.", en: "Updating and deleting.", uk: "Оновлення й видалення." },
  },
  {
    type: "code",
    lang: "sql",
    text: "MERGE INTO {Table1 | Vue1}\nUSING {Table2 | Vue2 | SELECT ...}\nON (condition)\nWHEN MATCHED THEN\n  UPDATE SET colonne1 = val1, ...  [WHERE ...]\nWHEN NOT MATCHED THEN\n  INSERT (...) VALUES (...);",
    caption: { fr: "Fusion MERGE : mise à jour ou insertion selon un critère.", en: "MERGE: update or insert depending on a criterion.", uk: "Fusion MERGE: оновлення або вставлення за критерієм." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **transaction** commence au premier ordre SQL et se termine par : **COMMIT** (valider), **ROLLBACK** (annuler), **SAVEPOINT** (point de sauvegarde qui découpe en sous-transactions), une instruction de **définition de données** (COMMIT implicite), la **fin de session** (COMMIT implicite) ou une **panne système** (ROLLBACK implicite).",
      en: "A **transaction** starts with the first SQL order and ends with: **COMMIT** (validate), **ROLLBACK** (cancel), **SAVEPOINT** (a savepoint that splits into sub-transactions), a **data definition** statement (implicit COMMIT), the **end of session** (implicit COMMIT) or a **system failure** (implicit ROLLBACK).",
      uk: "**Транзакція** починається з першої команди SQL і завершується: **COMMIT** (підтвердити), **ROLLBACK** (скасувати), **SAVEPOINT** (точка збереження, що ділить транзакцію на підтранзакції), інструкцією **визначення даних** (неявний COMMIT), **завершенням сеансу** (неявний COMMIT) або **системним збоєм** (неявний ROLLBACK).",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Valider ou annuler", en: "Commit or rollback", uk: "Підтвердити чи скасувати" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Après des **UPDATE** et des **DELETE**, quelle instruction **valide définitivement** les modifications ?",
        en: "After some **UPDATE** and **DELETE** statements, which instruction **permanently validates** the changes?",
        uk: "Після кількох інструкцій **UPDATE** і **DELETE** яка інструкція **остаточно підтверджує** зміни?",
      },
      options: [
        {
          text: { fr: "**COMMIT**", en: "**COMMIT**", uk: "**COMMIT**" },
          feedback: { fr: "Oui : COMMIT valide les manipulations.", en: "Yes: COMMIT validates the changes.", uk: "Так: COMMIT підтверджує зміни." },
        },
        {
          text: { fr: "**ROLLBACK**", en: "**ROLLBACK**", uk: "**ROLLBACK**" },
          feedback: { fr: "Non : ROLLBACK annule les manipulations.", en: "No: ROLLBACK cancels the changes.", uk: "Ні: ROLLBACK скасовує зміни." },
        },
        {
          text: { fr: "**SAVEPOINT**", en: "**SAVEPOINT**", uk: "**SAVEPOINT**" },
          feedback: { fr: "Non : SAVEPOINT marque un point de sauvegarde dans la transaction.", en: "No: SAVEPOINT marks a savepoint inside the transaction.", uk: "Ні: SAVEPOINT позначає точку збереження всередині транзакції." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "**COMMIT** valide, **ROLLBACK** annule, **SAVEPOINT** fixe un point de reprise intermédiaire.",
        en: "**COMMIT** validates, **ROLLBACK** cancels, **SAVEPOINT** sets an intermediate restart point.",
        uk: "**COMMIT** підтверджує, **ROLLBACK** скасовує, **SAVEPOINT** встановлює проміжну точку відновлення.",
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
      uk: "4. Побудова запитів до бази: інструкція SELECT",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT expression ...\nFROM table [JOIN table ON ...]\n[WHERE qualification]\n[GROUP BY attribut ...]\n[HAVING qualification]\n[(UNION | INTERSECT | EXCEPT) SELECT ...]\n[ORDER BY attribut [ASC | DESC] ...];",
    caption: { fr: "Syntaxe générale d'une requête SQL.", en: "General syntax of a SQL query.", uk: "Загальний синтаксис запиту SQL." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Une expression du `SELECT` est une **colonne**, une **combinaison de colonnes** ou une **valeur littérale** : c'est la **projection**. Le symbole `*` sélectionne toutes les colonnes.", en: "An expression in the `SELECT` is a **column**, a **combination of columns** or a **literal value**: this is the **projection**. The symbol `*` selects all columns.", uk: "Вираз у `SELECT` — це **стовпець**, **комбінація стовпців** або **літеральне значення**: це **проєкція**. Символ `*` вибирає всі стовпці." } },
      { text: { fr: "La clause **WHERE** définit les **prédicats** que les lignes doivent satisfaire : c'est la **restriction**. Le résultat est une **table temporaire**.", en: "The **WHERE** clause defines the **predicates** the rows must satisfy: this is **restriction**. The result is a **temporary table**.", uk: "Речення **WHERE** визначає **предикати**, які мають задовольняти рядки: це **відбір**. Результат — **тимчасова таблиця**." } },
    ],
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT [DISTINCT] expression [ [AS] nom ], ... | *\n\nSELECT * FROM Categories;\nSELECT NoArt, Designation || ' - ' || Couleur AS Article FROM Article;\nSELECT DISTINCT NoArt FROM DetailCmde;",
    caption: { fr: "Clause SELECT : DISTINCT et alias.", en: "SELECT clause: DISTINCT and alias.", uk: "Речення SELECT: DISTINCT і псевдонім." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "La clause WHERE", en: "The WHERE clause", uk: "Речення WHERE" },
  },
  {
    type: "code",
    lang: "sql",
    text: "Cond_Simple :=\n    Colonne Op_Comp {Colonne | Constante}\n  | Colonne IN (valeur, ...)\n  | Colonne BETWEEN Cste AND Cste\n  | Colonne LIKE Cste\n  | Colonne IS NULL\n  | Colonne IS NOT NULL",
    caption: { fr: "Conditions simples.", en: "Simple conditions.", uk: "Прості умови." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**LIKE** : recherche de valeurs incomplètes. `%` remplace **zéro ou plusieurs** caractères ; `_` remplace **un seul** caractère.", en: "**LIKE**: searching for incomplete values. `%` replaces **zero or more** characters; `_` replaces **one** character.", uk: "**LIKE**: пошук неповних значень. `%` замінює **нуль або більше** символів; `_` замінює **один** символ." } },
      { text: { fr: "**IS NULL / IS NOT NULL** : compare une donnée à la valeur système **NULL**, qui exprime une **absence de valeur**.", en: "**IS NULL / IS NOT NULL**: compares data with the system value **NULL**, which means an **absence of value**.", uk: "**IS NULL / IS NOT NULL**: порівнює дані із системним значенням **NULL**, що означає **відсутність значення**." } },
      { text: { fr: "**IN** : teste si une valeur **appartient à une liste** (cette liste peut être le résultat d'une requête).", en: "**IN**: tests whether a value **belongs to a list** (that list may be the result of a query).", uk: "**IN**: перевіряє, чи **належить значення списку** (цей список може бути результатом запиту)." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Quelques fonctions SQL", en: "Some SQL functions", uk: "Деякі функції SQL" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Numériques** : `ABS`, `MOD`, `POWER`, `ROUND`, `TRUNC`, `SQRT`, `SIGN`.", en: "**Numeric**: `ABS`, `MOD`, `POWER`, `ROUND`, `TRUNC`, `SQRT`, `SIGN`.", uk: "**Числові**: `ABS`, `MOD`, `POWER`, `ROUND`, `TRUNC`, `SQRT`, `SIGN`." } },
      { text: { fr: "**Chaînes** : `SUBSTR`, `LENGTH`, `INSTR`, `UPPER`, `LOWER`, `LPAD`, `RPAD`, `LTRIM`, `RTRIM`, `TRIM`, `TRANSLATE`, `REPLACE`.", en: "**String**: `SUBSTR`, `LENGTH`, `INSTR`, `UPPER`, `LOWER`, `LPAD`, `RPAD`, `LTRIM`, `RTRIM`, `TRIM`, `TRANSLATE`, `REPLACE`.", uk: "**Рядкові**: `SUBSTR`, `LENGTH`, `INSTR`, `UPPER`, `LOWER`, `LPAD`, `RPAD`, `LTRIM`, `RTRIM`, `TRIM`, `TRANSLATE`, `REPLACE`." } },
      { text: { fr: "**Expressions régulières** : `REGEXP_LIKE(chaine, expression)`, `REGEXP_SUBSTR(...)`.", en: "**Regular expressions**: `REGEXP_LIKE(string, expression)`, `REGEXP_SUBSTR(...)`.", uk: "**Регулярні вирази**: `REGEXP_LIKE(string, expression)`, `REGEXP_SUBSTR(...)`." } },
      { text: { fr: "**Dates** : `SYSDATE`, `ROUND(date, format)`, `MONTHS_BETWEEN(date1, date2)`, `TRUNC(date, format)`, `EXTRACT(partie FROM date)`.", en: "**Date**: `SYSDATE`, `ROUND(date, format)`, `MONTHS_BETWEEN(date1, date2)`, `TRUNC(date, format)`, `EXTRACT(part FROM date)`.", uk: "**Дати**: `SYSDATE`, `ROUND(date, format)`, `MONTHS_BETWEEN(date1, date2)`, `TRUNC(date, format)`, `EXTRACT(partie FROM date)`." } },
      { text: { fr: "**Conversion** : `TO_DATE`, `TO_CHAR`, `TO_NUMBER`, `CAST`.", en: "**Conversion**: `TO_DATE`, `TO_CHAR`, `TO_NUMBER`, `CAST`.", uk: "**Перетворення**: `TO_DATE`, `TO_CHAR`, `TO_NUMBER`, `CAST`." } },
      { text: { fr: "**Autres** : `NVL(exp1, exp2)` (= exp2 si exp1 est NULL), `NVL2`, `DECODE`.", en: "**Others**: `NVL(exp1, exp2)` (= exp2 if exp1 is NULL), `NVL2`, `DECODE`.", uk: "**Інші**: `NVL(exp1, exp2)` (= exp2, якщо exp1 дорівнює NULL), `NVL2`, `DECODE`." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Le motif LIKE", en: "The LIKE pattern", uk: "Шаблон LIKE" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "On veut les articles dont la désignation **commence** par « Ban ». On écrit : `WHERE Designation LIKE 'Ban______'`.",
        en: "We want articles whose designation **starts** with 'Ban'. We write: `WHERE Designation LIKE 'Ban______'`.",
        uk: "Потрібні статті, позначення яких **починається** з « Ban ». Записуємо: `WHERE Designation LIKE 'Ban______'`.",
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
                uk: "Увага: `_` замінює **один** символ. Для **нуля або більше** символів використовують `%`.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "`LIKE 'Ban%'` : le `%` remplace n'importe quelle suite de **zéro ou plusieurs** caractères.",
        en: "`LIKE 'Ban%'`: `%` replaces any sequence of **zero or more** characters.",
        uk: "`LIKE 'Ban%'`: `%` замінює будь-яку послідовність **нуля або більше** символів.",
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
      uk: "5. Об'єднання",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Il y a **trois façons** de faire une jointure : (1) un **prédicat d'égalité** dans le `WHERE` ; (2) l'opérateur **IN** sur le résultat d'une sous-requête ; (3) l'opérateur **JOIN** dans le `FROM`, qui distingue les prédicats de **jointure** des prédicats de **restriction**.",
      en: "There are **three ways** to perform a join: (1) an **equality predicate** in the `WHERE`; (2) the **IN** operator on a sub-query result; (3) the **JOIN** operator in the `FROM`, which separates **join** predicates from **restriction** predicates.",
      uk: "Існують **три способи** виконати об'єднання: (1) **предикат рівності** в `WHERE`; (2) оператор **IN** над результатом підзапиту; (3) оператор **JOIN** у `FROM`, який відокремлює предикати **об'єднання** від предикатів **відбору**.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- 1. Prédicat d'égalité (avec alias recommandés)\nSELECT ...\nFROM Table1 A, Table2 B\nWHERE A.Colonne1 = B.Colonne2;\n\n-- 2. Opérateur IN sur une sous-requête\nSELECT ...\nFROM Table1\nWHERE Colonne1 IN (SELECT Colonne2 FROM Table2);\n\n-- 3. Opérateur JOIN\nSELECT ...\nFROM Table1 JOIN Table2\n  ON Table1.Colonne1 = Table2.Colonne2;",
    caption: { fr: "Trois écritures équivalentes d'une jointure.", en: "Three equivalent ways to write a join.", uk: "Три еквівалентні способи записати об'єднання." },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Jointure avec condition de restriction\nSELECT NomClient\nFROM Client JOIN Commande C ON Client.NoClient = C.NoClient\nWHERE Ville = 'Metz' AND DateCmde >= '01/09/25';\n\n-- Equi-jointure\nSELECT ... FROM Table1 JOIN Table2 USING (Colonne);\n-- Jointure naturelle\nSELECT ... FROM Table1 NATURAL JOIN Table2;\n-- Jointure externe\nSELECT ... FROM Table1 {LEFT | RIGHT | FULL} JOIN Table2 ON ...;",
    caption: { fr: "Equi-jointure, jointure naturelle et jointure externe.", en: "Equi-join, natural join and outer join.", uk: "Еквіоб'єднання, природне об'єднання та зовнішнє об'єднання." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans une **jointure externe**, les lignes d'une table **sans correspondance** sont conservées et complétées par des valeurs « null » côté opposé. **LEFT** garde les lignes de la table de gauche, **RIGHT** celles de droite, **FULL** les deux. Oracle accepte aussi l'opérateur spécifique **(+)** : `WHERE Client.NoClient = Commande.NoClient (+)`.",
      en: "In an **outer join**, rows from one table **without a match** are kept and completed with « null » values on the other side. **LEFT** keeps the left table's rows, **RIGHT** the right table's, **FULL** both. Oracle also accepts the specific **(+)** operator: `WHERE Client.NoClient = Commande.NoClient (+)`.",
      uk: "У **зовнішньому об'єднанні** рядки однієї таблиці **без відповідника** зберігаються й доповнюються значеннями « null » з протилежного боку. **LEFT** зберігає рядки лівої таблиці, **RIGHT** — правої, **FULL** — обох. Oracle також приймає специфічний оператор **(+)**: `WHERE Client.NoClient = Commande.NoClient (+)`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Choisir la jointure", en: "Choosing the join", uk: "Вибір об'єднання" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "On veut **tous les clients**, **même ceux qui n'ont passé aucune commande** (avec des « null » dans les colonnes de commande). Quelle jointure ?",
        en: "We want **all customers**, **even those with no orders** (with « null » in the order columns). Which join?",
        uk: "Потрібні **усі клієнти**, **навіть ті, що не зробили жодного замовлення** (із « null » у стовпцях замовлення). Яке об'єднання?",
      },
      options: [
        {
          text: { fr: "**LEFT JOIN** : `Client LEFT JOIN Commande`", en: "**LEFT JOIN**: `Client LEFT JOIN Commande`", uk: "**LEFT JOIN**: `Client LEFT JOIN Commande`" },
          feedback: { fr: "Oui : LEFT garde toutes les lignes de gauche (Client) et complète par null.", en: "Yes: LEFT keeps all left rows (Client) and pads with null.", uk: "Так: LEFT зберігає всі лівосторонні рядки (Client) і доповнює null." },
        },
        {
          text: { fr: "**JOIN** (interne) simple", en: "A plain (inner) **JOIN**", uk: "Просте (внутрішнє) **JOIN**" },
          feedback: { fr: "Non : la jointure interne supprime les clients sans commande.", en: "No: the inner join removes customers without orders.", uk: "Ні: внутрішнє об'єднання прибирає клієнтів без замовлень." },
        },
        {
          text: { fr: "**RIGHT JOIN** : `Client RIGHT JOIN Commande`", en: "**RIGHT JOIN**: `Client RIGHT JOIN Commande`", uk: "**RIGHT JOIN**: `Client RIGHT JOIN Commande`" },
          feedback: { fr: "Non : RIGHT garderait toutes les lignes de droite (Commande).", en: "No: RIGHT would keep all right rows (Commande).", uk: "Ні: RIGHT зберіг би всі правосторонні рядки (Commande)." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Pour garder les lignes **sans correspondance** d'une table, on utilise une **jointure externe** du bon côté : ici `Client LEFT JOIN Commande`.",
        en: "To keep the **unmatched** rows of one table, use an **outer join** on the right side: here `Client LEFT JOIN Commande`.",
        uk: "Щоб зберегти рядки однієї таблиці **без відповідника**, використовують **зовнішнє об'єднання** з потрібного боку: тут `Client LEFT JOIN Commande`.",
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
      uk: "6. Агрегати, GROUP BY, HAVING і CASE",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les **opérateurs d'agrégats** portent sur un **ensemble de valeurs** et s'utilisent dans les expressions du `SELECT` : **COUNT** (nombre de réalisations), **SUM** (somme), **AVG** (moyenne), **MAX** (maximum), **MIN** (minimum).",
      en: "**Aggregate operators** work on a **set of values** and are used in `SELECT` expressions: **COUNT** (number of occurrences), **SUM**, **AVG** (average), **MAX**, **MIN**.",
      uk: "**Оператори-агрегати** працюють з **набором значень** і використовуються у виразах `SELECT`: **COUNT** (кількість входжень), **SUM** (сума), **AVG** (середнє), **MAX** (максимум), **MIN** (мінімум).",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT COUNT(*) FROM Article;                          -- nombre total d'articles\nSELECT AVG(PrixHT) FROM Article WHERE NoCat = 1;         -- prix moyen catégorie 1\nSELECT SUM(QteCmde) FROM DetailCmde WHERE NoArt = 'A2';  -- total commandé de A2\n\nSELECT *\nFROM Article\nWHERE Stock = (SELECT MIN(Stock) FROM Article);          -- stock le plus bas",
    caption: { fr: "Exemples d'agrégats et d'agrégat dans une sous-requête.", en: "Examples of aggregates and of an aggregate in a sub-query.", uk: "Приклади агрегатів і агрегату в підзапиті." },
  },
  {
    type: "code",
    lang: "sql",
    text: "CASE expression WHEN val1 THEN res1 WHEN val2 THEN res2 ... [ELSE res] END\nCASE WHEN cond1 THEN res1 WHEN cond2 THEN res2 ... [ELSE res] END\n\nSELECT NoArt, PrixHT,\n  CASE WHEN NoCat = 1 THEN ROUND(PrixHT*0.1, 2)\n       ELSE ROUND(PrixHT*0.05, 2)\n  END Reduction\nFROM Article;",
    caption: { fr: "L'expression CASE : des tests à l'intérieur du SQL.", en: "The CASE expression: tests inside SQL.", uk: "Вираз CASE: перевірки всередині SQL." },
  },
  {
    type: "paragraph",
    text: {
      fr: "**GROUP BY** **partitionne** les lignes en **groupes** ayant des valeurs communes. **HAVING** ajoute des conditions sur les **groupes** (comme un `WHERE` appliqué aux groupes). **ORDER BY** trie le résultat et se place **en dernier** : `ASC` (défaut) ou `DESC` ; les valeurs **NULL** sont mises **en début**.",
      en: "**GROUP BY** **partitions** rows into **groups** with common values. **HAVING** adds conditions on the **groups** (like a `WHERE` applied to groups). **ORDER BY** sorts the result and comes **last**: `ASC` (default) or `DESC`; **NULL** values come **first**.",
      uk: "**GROUP BY** **розбиває** рядки на **групи** зі спільними значеннями. **HAVING** додає умови до **груп** (як `WHERE`, застосований до груп). **ORDER BY** сортує результат і стоїть **останнім**: `ASC` (типово) або `DESC`; значення **NULL** ідуть **першими**.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT NoDep, COUNT(*) nbEmp\nFROM Employe\nGROUP BY NoDep;\n\nSELECT NoArt\nFROM DetailCmde\nGROUP BY NoArt\nHAVING COUNT(*) > 2;",
    caption: { fr: "Regrouper par département, puis ne garder que les groupes ayant plus de deux lignes.", en: "Group by department, then keep only groups with more than two rows.", uk: "Групувати за відділом, потім залишити лише групи з понад двома рядками." },
  },
  {
    type: "checkpoint",
    concept: { fr: "WHERE ou HAVING ?", en: "WHERE or HAVING?", uk: "WHERE чи HAVING?" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Pour garder uniquement les groupes ayant **COUNT(*) > 2**, on utilise la clause **WHERE**.",
        en: "To keep only the groups with **COUNT(*) > 2**, we use the **WHERE** clause.",
        uk: "Щоб залишити лише групи з **COUNT(*) > 2**, використовують речення **WHERE**.",
      },
      answer: false,
      justification: {
        fr: "Non : **WHERE** filtre les **lignes avant** le regroupement. Pour filtrer **après** le regroupement, on utilise **HAVING**.",
        en: "No: **WHERE** filters **rows before** grouping. To filter **after** grouping, use **HAVING**.",
        uk: "Ні: **WHERE** фільтрує **рядки до** групування. Щоб фільтрувати **після** групування, використовують **HAVING**.",
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
      uk: "7. Підзапити, ANY, ALL, EXISTS і CTE",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- ANY : vrai si la comparaison est vraie pour AU MOINS une valeur\nWHERE Colonne op_comp ANY (SELECT ...)\n-- ALL : vrai si la comparaison est vraie pour CHACUNE des valeurs\nWHERE Colonne op_comp ALL (SELECT ...)\n\n-- IN  est equivalent a  (= ANY)\n-- NOT IN est equivalent a  (<> ALL)\n\n-- Sous-requete sur plusieurs colonnes\nWHERE (Col1, Col2) IN (SELECT Exp1, Exp2 FROM ...)",
    caption: { fr: "Quantificateurs ANY / ALL et équivalences avec IN / NOT IN.", en: "ANY / ALL quantifiers and equivalences with IN / NOT IN.", uk: "Квантори ANY / ALL та еквівалентності з IN / NOT IN." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une sous-requête est dite **corrélée** si elle utilise, dans son `WHERE`, des colonnes de la requête **principale**. Exemple : les employés qui gagnent **plus que la moyenne de leur département**.",
      en: "A sub-query is called **correlated** if it uses, in its `WHERE`, columns of the **main** query. Example: employees who earn **more than the average of their department**.",
      uk: "Підзапит називають **корельованим**, якщо він використовує у своєму `WHERE` стовпці **головного** запиту. Приклад: працівники, які заробляють **більше за середнє у своєму відділі**.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT E.NomEmp, E.Salaire\nFROM Employe E\nWHERE Salaire > (SELECT AVG(Salaire)\n                 FROM Employe\n                 WHERE NoDep = E.NoDep);",
    caption: { fr: "Sous-requête corrélée : la moyenne dépend du département de la ligne courante.", en: "Correlated sub-query: the average depends on the current row's department.", uk: "Корельований підзапит: середнє залежить від відділу поточного рядка." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le prédicat **EXISTS (sous-requête)** est **vrai** si la sous-requête retourne **au moins une ligne**. Exemple : les employés qui **encadrent** au moins un autre employé.",
      en: "The predicate **EXISTS (sub-query)** is **true** if the sub-query returns **at least one row**. Example: employees who **manage** at least one other employee.",
      uk: "Предикат **EXISTS (підзапит)** є **істинним**, якщо підзапит повертає **принаймні один рядок**. Приклад: працівники, які **керують** принаймні одним іншим працівником.",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "SELECT NomEmp\nFROM Employe E\nWHERE EXISTS (SELECT * FROM Employe WHERE SupHier = E.NoEmp);",
    caption: { fr: "EXISTS : au moins une ligne correspondante.", en: "EXISTS: at least one matching row.", uk: "EXISTS: принаймні один відповідний рядок." },
  },
  {
    type: "paragraph",
    text: {
      fr: "La clause **WITH** (Common Table Expression) **matérialise** des sous-requêtes pour ne pas les recalculer et optimiser une requête complexe. Une requête récursive se fait avec **WITH ... UNION ALL** (ou, spécifique à Oracle, `START WITH ... CONNECT BY`).",
      en: "The **WITH** clause (Common Table Expression) **materializes** sub-queries so they are not recomputed, optimising a complex query. A recursive query uses **WITH ... UNION ALL** (or, Oracle-specific, `START WITH ... CONNECT BY`).",
      uk: "Речення **WITH** (Common Table Expression) **матеріалізує** підзапити, щоб не перераховувати їх повторно, і оптимізує складний запит. Рекурсивний запит робиться за допомогою **WITH ... UNION ALL** (або, специфічно для Oracle, `START WITH ... CONNECT BY`).",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Sans WITH\nSELECT NoEmp, NomEmp, Salaire, SalaireMoyenDep\nFROM Employe,\n     (SELECT NoDep, AVG(Salaire) SalaireMoyenDep\n      FROM Employe GROUP BY NoDep) R\nWHERE Employe.NoDep = R.NoDep AND Salaire > SalaireMoyenDep;\n\n-- Avec WITH\nWITH R (NoDep, SalaireMoyenDep) AS\n     (SELECT NoDep, AVG(Salaire) FROM Employe GROUP BY NoDep)\nSELECT NoEmp, NomEmp, Salaire, SalaireMoyenDep\nFROM Employe, R\nWHERE Employe.NoDep = R.NoDep AND Salaire > SalaireMoyenDep;",
    caption: { fr: "Même requête sans puis avec la clause WITH.", en: "The same query without and then with the WITH clause.", uk: "Той самий запит без речення WITH, а потім із ним." },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Requête récursive : ancêtres (calcul du point fixe)\nWITH ancetre AS (\n  SELECT x, y FROM parent\n  UNION ALL\n  SELECT a.x, p.y FROM ancetre a, parent p WHERE a.y = p.x )\nSELECT x, y FROM ancetre;\n\n-- Spécifique Oracle : hiérarchie des employés\nSELECT level, lpad('---', 2*(level-1)) || NomEmp AS Nom, NoEmp, SupHier\nFROM Employe\nSTART WITH SupHier IS NULL\nCONNECT BY PRIOR NoEmp = SupHier;",
    caption: { fr: "Récursion : point fixe avec WITH, et hiérarchie Oracle avec CONNECT BY.", en: "Recursion: fixed point with WITH, and Oracle hierarchy with CONNECT BY.", uk: "Рекурсія: нерухома точка з WITH і ієрархія Oracle з CONNECT BY." },
  },
  {
    type: "checkpoint",
    concept: { fr: "ANY, ALL et IN", en: "ANY, ALL and IN", uk: "ANY, ALL та IN" },
    exercise: {
      kind: "fillBlank",
      prompt: {
        fr: "Complétez : **IN** est équivalent à **(= ______)**.",
        en: "Complete: **IN** is equivalent to **(= ______)**.",
        uk: "Доповніть: **IN** еквівалентний **(= ______)**.",
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
                uk: "Увага: **= ALL** означало б «дорівнює **всім** значенням», що майже завжди хибно. **IN** відповідає **= ANY**.",
              },
            },
          ],
        },
      ],
      solution: {
        fr: "**IN** ≡ **(= ANY)** et **NOT IN** ≡ **(<> ALL)**.",
        en: "**IN** ≡ **(= ANY)** and **NOT IN** ≡ **(<> ALL)**.",
        uk: "**IN** ≡ **(= ANY)**, а **NOT IN** ≡ **(<> ALL)**.",
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
      uk: "8. Подання",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **vue** est une **table virtuelle** : sa définition est stockée dans le **dictionnaire de données**, et on l'interroge et on la met à jour comme une table (avec des limites).",
      en: "A **view** is a **virtual table**: its definition is stored in the **data dictionary**, and it is queried and updated like a table (with limits).",
      uk: "**Подання** — це **віртуальна таблиця**: його визначення зберігається у **словнику даних**, і з ним працюють (будують запити й оновлюють) як із таблицею (з певними обмеженнями).",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE [OR REPLACE] VIEW <nom_vue> [(liste_attributs)]\nAS <requête SQL de sélection>\n[WITH CHECK OPTION];\n\nDROP VIEW <nom_vue>;",
    caption: { fr: "Création et suppression d'une vue. WITH CHECK OPTION vérifie les conditions sur les insertions/modifications.", en: "Creating and dropping a view. WITH CHECK OPTION checks the conditions on inserts/updates.", uk: "Створення та видалення подання. WITH CHECK OPTION перевіряє умови під час вставлення/змінювання." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une vue est **mettable à jour** si elle permet de reporter les mises à jour dans les tables sources **sans ambiguïté**. Conditions : la vue doit **conserver les clés** des tables de base, **ne pas contenir d'agrégat**, **ne pas contenir de `GROUP BY`**. En **SQL2**, seules les vues définies à partir d'**une table unique** sont considérées comme « mettable à jour ».",
      en: "A view is **updatable** if it lets updates be reported to the source tables **without ambiguity**. Conditions: the view must **keep the keys** of the base tables, **contain no aggregate**, **contain no `GROUP BY`**. In **SQL2**, only views defined from a **single table** are considered 'updatable'.",
      uk: "Подання є **оновлюваним**, якщо воно дозволяє переносити оновлення до вихідних таблиць **без неоднозначності**. Умови: подання повинно **зберігати ключі** базових таблиць, **не містити агрегатів**, **не містити `GROUP BY`**. У **SQL2** лише подання, визначені з **однієї таблиці**, вважаються «оновлюваними».",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Quand une vue est-elle mettable à jour ?", en: "When is a view updatable?", uk: "Коли подання є оновлюваним?" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Parmi ces vues, laquelle **n'est pas** « mettable à jour » de façon sûre ?",
        en: "Among these views, which one is **not** safely 'updatable'?",
        uk: "Яке з цих подань **не є** безпечно «оновлюваним»?",
      },
      options: [
        {
          text: { fr: "Une vue qui utilise **GROUP BY** et des **agrégats**.", en: "A view that uses **GROUP BY** and **aggregates**.", uk: "Подання, яке використовує **GROUP BY** та **агрегати**." },
          feedback: { fr: "Oui : la présence d'agrégats ou de GROUP BY empêche le report des mises à jour.", en: "Yes: aggregates or GROUP BY prevent reporting updates.", uk: "Так: агрегати або GROUP BY перешкоджають перенесенню оновлень." },
        },
        {
          text: { fr: "Une vue qui conserve les clés d'une table unique.", en: "A view that keeps the keys of a single table.", uk: "Подання, яке зберігає ключі однієї таблиці." },
          feedback: { fr: "Au contraire : c'est un cas favorable (mettable à jour).", en: "On the contrary: that is a favourable (updatable) case.", uk: "Навпаки: це сприятливий (оновлюваний) випадок." },
        },
        {
          text: { fr: "Une vue simple sur une seule table.", en: "A simple view on a single table.", uk: "Просте подання на одній таблиці." },
          feedback: { fr: "C'est justement le cas mettable à jour en SQL2.", en: "That is precisely the updatable case in SQL2.", uk: "Саме це і є оновлюваний випадок у SQL2." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "Pour être mettable à jour, une vue doit **conserver les clés**, **sans agrégat ni GROUP BY** ; en SQL2, elle doit venir d'**une seule table**.",
        en: "To be updatable, a view must **keep the keys**, **without aggregates or GROUP BY**; in SQL2 it must come from a **single table**.",
        uk: "Щоб бути оновлюваним, подання повинно **зберігати ключі**, **без агрегатів і GROUP BY**; у SQL2 воно має походити з **однієї таблиці**.",
      },
    },
  },
];
