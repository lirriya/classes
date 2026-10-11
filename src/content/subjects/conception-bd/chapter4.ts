import type { Block } from "../../types";

export const chapterFour: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "PL/SQL (Programming Language for SQL) est l'extension procédurale d'Oracle SQL. Il permet d'écrire des programmes qui mélangent commandes SQL, variables typées, structures de contrôle, curseurs et gestion d'exceptions, et de les traiter comme une unité (un bloc). Ce chapitre présente les blocs PL/SQL, les déclarations, les curseurs, la gestion des erreurs, les procédures/fonctions et quelques éléments avancés (LOB, UTL_FILE, SQL dynamique).",
      en: "PL/SQL (Programming Language for SQL) is Oracle's procedural extension of SQL. It allows writing programs that mix SQL commands, typed variables, control structures, cursors and exception handling, treating them as a single unit (a block). This chapter covers PL/SQL blocks, declarations, cursors, error handling, procedures/functions and some advanced topics (LOB, UTL_FILE, dynamic SQL).",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Structure d'un bloc PL/SQL", en: "1. Structure of a PL/SQL block" },
  },
  {
    type: "code",
    lang: "sql",
    text: "[DECLARE\n   déclarations : variables, constantes, curseurs, exceptions]\nBEGIN\n   corps du bloc : instructions SQL, procédurales, curseurs,\n   transactions, sous-blocs (imbriqués)\n[EXCEPTION\n   traitement des erreurs]\nEND [nom du bloc];",
    caption: { fr: "Squelette d'un bloc PL/SQL.", en: "PL/SQL block skeleton." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**DECLARE** : optionnelle (déclarations).", en: "**DECLARE**: optional (declarations)." } },
      { text: { fr: "**BEGIN** : obligatoire (corps).", en: "**BEGIN**: mandatory (body)." } },
      { text: { fr: "**EXCEPTION** : optionnelle (gestion d'erreurs).", en: "**EXCEPTION**: optional (error handling)." } },
      { text: { fr: "**END** : obligatoire (fin du bloc).", en: "**END**: mandatory (end of block)." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Déclarations", en: "Declarations" },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- 1. Variables et constantes\nNomVar [CONSTANT] {Type | ident%TYPE | ident%ROWTYPE}\n       [NOT NULL] [{:= | DEFAULT} exprPL/SQL];\n\n-- 2. Curseurs\nCURSOR NomCur [(paramètre type ...)] IS SELECT ... ;\nNomCur REF CURSOR ;\n\n-- 3. Exceptions\nNomException EXCEPTION ;",
    caption: { fr: "Trois types de déclarations dans la section DECLARE.", en: "Three kinds of declarations in DECLARE." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Types de données PL/SQL", en: "PL/SQL data types" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Types de base : `VARCHAR2`, `NUMBER`, `DATE`, `CHAR`, `CLOB`, `BLOB`, `BFILE`.", en: "Base types: `VARCHAR2`, `NUMBER`, `DATE`, `CHAR`, `CLOB`, `BLOB`, `BFILE`." } },
      { text: { fr: "Types supplémentaires : `BOOLEAN`, `BINARY_INTEGER`, `PLS_INTEGER` (entier plus rapide, plage ±2 147 483 647).", en: "Additional types: `BOOLEAN`, `BINARY_INTEGER`, `PLS_INTEGER` (faster integer, ±2 147 483 647)." } },
      { text: { fr: "**`%TYPE`** : type dynamique égal au type d'une colonne ou d'une autre variable (`MaVar Identifiant%TYPE`).", en: "**`%TYPE`**: dynamic type equal to a column or another variable's type (`MyVar Identifier%TYPE`)." } },
      { text: { fr: "**`%ROWTYPE`** : type dynamique égal à la structure d'une table/ligne (`MaVar NomTable%ROWTYPE`).", en: "**`%ROWTYPE`**: dynamic type equal to a table/row structure (`MyVar TableName%ROWTYPE`)." } },
      { text: { fr: "Type composé (enregistrement) : `TYPE MonRec IS RECORD (champ type [NOT NULL], ...);`.", en: "Composite record: `TYPE MyRec IS RECORD (field type [NOT NULL], ...);`." } },
      { text: { fr: "Tableaux (PL/SQL Table) : `TYPE MonTypeTable IS TABLE OF Type_Définition [NOT NULL] INDEX BY [BINARY_INTEGER | autre_type];`.", en: "PL/SQL tables: `TYPE MyTable IS TABLE OF Type_Def [NOT NULL] INDEX BY [BINARY_INTEGER | other_type];`." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "On accède à un champ d'un enregistrement ou d'un `%ROWTYPE` par `MaVar.Champ`. Pour un tableau : `MaTable(2) := ...` et fonctions associées (`EXISTS`, `NEXT`, `COUNT`, `FIRST`, `LAST`, `PRIOR`, `EXTEND`, `TRIM`, `DELETE`).",
      en: "Access a record/%ROWTYPE field with `MyVar.Field`. For a table: `MyTable(2) := ...` with associated methods (`EXISTS`, `NEXT`, `COUNT`, `FIRST`, `LAST`, `PRIOR`, `EXTEND`, `TRIM`, `DELETE`).",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "%TYPE vs %ROWTYPE", en: "%TYPE vs %ROWTYPE" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quel mot-clé permet d'attribuer à une variable le **même type que la structure entière d'une table** ?",
        en: "Which keyword gives a variable the **same type as the whole structure of a table**?",
      },
      options: [
        { text: { fr: "`%ROWTYPE`", en: "`%ROWTYPE`" }, feedback: { fr: "Oui : `%ROWTYPE` représente une ligne (tous les champs).", en: "Yes: `%ROWTYPE` represents a whole row." } },
        { text: { fr: "`%TYPE`", en: "`%TYPE`" }, feedback: { fr: "Non : `%TYPE` représente le type d'**une seule colonne**.", en: "No: `%TYPE` is the type of a **single column**." } },
        { text: { fr: "`RECORD`", en: "`RECORD`" }, feedback: { fr: "Non : `RECORD` est un type composé défini manuellement.", en: "No: `RECORD` is a manually defined composite type." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "`%ROWTYPE` copie la structure d'une ligne (tous les attributs). `%TYPE` copie le type d'un seul attribut/variable.",
        en: "`%ROWTYPE` copies the structure of a whole row. `%TYPE` copies the type of a single attribute/variable.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Structures de contrôle et commandes SQL", en: "2. Control structures and SQL commands" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Conditionnel", en: "Conditional" },
  },
  {
    type: "code",
    lang: "sql",
    text: "IF condition THEN\n  instructions;\nELSIF condition THEN\n  instructions;\n[ELSE\n  instructions;]\nEND IF;",
    caption: { fr: "Instruction IF/ELSIF/ELSE.", en: "IF/ELSIF/ELSE statement." },
  },
  {
    type: "code",
    lang: "sql",
    text: "CASE expression\n  WHEN val1 THEN instructions;\n  ...\n  [ELSE instructions;]\nEND CASE;",
    caption: { fr: "Instruction CASE à valeur.", en: "Value-based CASE." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Itératif", en: "Iterative" },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- LOOP simple avec sortie\nLOOP\n  instructions;\n  EXIT [WHEN condition];\nEND LOOP;\n\n-- FOR\nFOR compteur IN [REVERSE] BorneInf .. BorneSup LOOP\n  instructions;\nEND LOOP;\n\n-- WHILE\nWHILE condition LOOP\n  instructions;\nEND LOOP;",
    caption: { fr: "Boucles LOOP, FOR, WHILE.", en: "LOOP, FOR, WHILE loops." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Commandes SQL dans PL/SQL", en: "SQL commands in PL/SQL" },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Requête retournant une seule ligne\nSELECT ... INTO NomVar FROM ... ;\n\n-- Requête retournant plusieurs lignes : utiliser un curseur\n-- (explicite ou implicite)\n\n-- Mise à jour\nINSERT INTO ... VALUES ... ;\nUPDATE ... SET ... [WHERE CURRENT OF NomCurseur] ;\nDELETE FROM ... [WHERE CURRENT OF NomCurseur] ;\n\n-- Transactions\nCOMMIT;\nROLLBACK;\nSAVEPOINT NomPoint;",
    caption: { fr: "Utilisation de SQL dans un bloc PL/SQL.", en: "Using SQL inside a PL/SQL block." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans une mise à jour sur un curseur explicite, `WHERE CURRENT OF NomCurseur` affecte la ligne courante (curseur déclaré avec `FOR UPDATE`).",
      en: "For updates through an explicit cursor, `WHERE CURRENT OF CursorName` affects the current row (cursor declared with `FOR UPDATE`).",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Les curseurs", en: "3. Cursors" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **curseur** stocke le résultat d'une requête pour en parcourir les lignes. Il y a deux types : **implicite** (affecté à toute commande SQL ; nom `SQL`) et **explicite** (déclaré et géré par l'utilisateur), utilisé quand la requête retourne **plusieurs lignes**.",
      en: "A **cursor** stores the result of a query so we can iterate over its rows. Two types: **implicit** (assigned to any SQL command; name `SQL`) and **explicit** (declared and managed by the user), used when a query returns **multiple rows**.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Curseur explicite", en: "Explicit cursor" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "**Déclaration** (DECLARE) : `CURSOR NomCur IS SELECT ...;`", en: "**Declaration** (DECLARE): `CURSOR CurName IS SELECT ...;`" } },
      { text: { fr: "**Ouverture** : `OPEN NomCur [(params)];` (exécute la requête).", en: "**Open**: `OPEN CurName [(params)];` (executes the query)." } },
      { text: { fr: "**Défilement** : `FETCH NomCur INTO var ...;` (lit ligne courante, avance).", en: "**Fetch**: `FETCH CurName INTO var ...;` (reads current row, moves forward)." } },
      { text: { fr: "**Fermeture** : `CLOSE NomCur;` (libère l'espace).", en: "**Close**: `CLOSE CurName;` (releases space)." } },
    ],
  },
  {
    type: "code",
    lang: "sql",
    text: "DECLARE\n  CURSOR C IS SELECT * FROM Article WHERE PrixHT < 10;\n  art Article%ROWTYPE;\nBEGIN\n  OPEN C;\n  LOOP\n    FETCH C INTO art;\n    EXIT WHEN C%NOTFOUND;\n    -- traitement de la ligne art\n  END LOOP;\n  CLOSE C;\nEND;",
    caption: { fr: "Traitement d'un curseur explicite avec LOOP/FETCH.", en: "Processing an explicit cursor with LOOP/FETCH." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Boucle implicite sur curseur : `FOR var IN C LOOP ... END LOOP;` (ouvre/ferme automatiquement, pas besoin de FETCH explicite).",
      en: "Implicit cursor loop: `FOR var IN C LOOP ... END LOOP;` (opens/closes automatically, no explicit FETCH needed).",
    },
  },
  {
    type: "code",
    lang: "sql",
    text: "DECLARE\n  CURSOR C IS SELECT * FROM Article WHERE PrixHT < 10;\nBEGIN\n  FOR a IN C LOOP\n    -- traitement a (type Article%ROWTYPE implicite)\n  END LOOP;\nEND;",
    caption: { fr: "Boucle FOR sur curseur.", en: "FOR loop over a cursor." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Attributs d'un curseur", en: "Cursor attributes" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`%NOTFOUND` : vrai si le dernier FETCH n'a ramené **aucune** ligne.", en: "`%NOTFOUND`: true if the last FETCH returned **no** row." } },
      { text: { fr: "`%FOUND` : inverse de `%NOTFOUND`.", en: "`%FOUND`: opposite of `%NOTFOUND`." } },
      { text: { fr: "`%ROWCOUNT` : nombre total de lignes ramenées par les FETCH.", en: "`%ROWCOUNT`: total number of rows fetched so far." } },
      { text: { fr: "`%ISOPEN` : vrai si le curseur est ouvert.", en: "`%ISOPEN`: true if the cursor is open." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Curseurs dynamiques (REF CURSOR)", en: "Dynamic cursors (REF CURSOR)" },
  },
  {
    type: "code",
    lang: "sql",
    text: "DECLARE\n  TYPE CurType IS REF CURSOR;\n  C CurType;\n  req VARCHAR2(200);\n  ligne Article%ROWTYPE;\n  prix NUMBER := 10;\nBEGIN\n  req := 'SELECT * FROM Article WHERE PrixHT < :p';\n  OPEN C FOR req USING prix;\n  LOOP\n    FETCH C INTO ligne;\n    EXIT WHEN C%NOTFOUND;\n    -- traitement\n  END LOOP;\n  CLOSE C;\nEND;",
    caption: { fr: "Curseur dynamique avec requête construite à l'exécution.", en: "Dynamic cursor with a query built at runtime." },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Gestion des exceptions", en: "4. Exception handling" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **exception** interrompt le déroulement normal du bloc et branche sur la section **EXCEPTION** (si elle y est traitée). Il existe deux types : **exceptions internes** (définies par Oracle, déclenchées automatiquement) et **exceptions externes** (définies par l'utilisateur, déclenchées par `RAISE` ou via `PRAGMA EXCEPTION_INIT`).",
      en: "An **exception** interrupts normal flow and branches to the **EXCEPTION** section (if handled). Two types: **internal exceptions** (defined by Oracle, raised automatically) and **external/user exceptions** (defined by the user, raised with `RAISE` or via `PRAGMA EXCEPTION_INIT`).",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Quelques exceptions internes", en: "Some internal exceptions" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`NO_DATA_FOUND` : `SELECT ... INTO` qui retourne **0 ligne**.", en: "`NO_DATA_FOUND`: `SELECT ... INTO` returns **0 rows**." } },
      { text: { fr: "`TOO_MANY_ROWS` : `SELECT ... INTO` qui retourne **plus d'1 ligne**.", en: "`TOO_MANY_ROWS`: `SELECT ... INTO` returns **more than 1 row**." } },
      { text: { fr: "`ZERO_DIVIDE` : division par zéro.", en: "`ZERO_DIVIDE`: division by zero." } },
      { text: { fr: "`DUP_VAL_ON_INDEX` : insertion d'une valeur qui viole une **clé primaire/unique**.", en: "`DUP_VAL_ON_INDEX`: inserting a value that violates a **primary/unique key**." } },
      { text: { fr: "`VALUE_ERROR` : incompatibilité de type ou valeur trop longue.", en: "`VALUE_ERROR`: type mismatch or value too long." } },
      { text: { fr: "`OTHERS` : toute autre erreur (attrape-tout).", en: "`OTHERS`: any other error (catch-all)." } },
    ],
  },
  {
    type: "code",
    lang: "sql",
    text: "DECLARE\n  erreur1 EXCEPTION;\n  erreur2 EXCEPTION;\n  PRAGMA EXCEPTION_INIT(erreur2, -<code_oracle>);\nBEGIN\n  IF (condition) THEN\n    RAISE erreur1;\n  END IF;\n  -- ...\nEXCEPTION\n  WHEN erreur1 THEN\n    -- traitement\n  WHEN erreur2 THEN\n    -- traitement\n  WHEN OTHERS THEN\n    DBMS_OUTPUT.PUT_LINE('Erreur : ' || SQLCODE || ' - ' || SQLERRM);\nEND;",
    caption: { fr: "Déclaration, levée et traitement d'exceptions.", en: "Declaring, raising and handling exceptions." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour remonter une erreur proprement vers l'appelant, on utilise `RAISE_APPLICATION_ERROR(numéro, message)` avec `numéro` entre **-20999** et **-20000**. On peut récupérer le code/message avec `SQLCODE` et `SQLERRM`.",
      en: "To raise a clean application error to the caller, use `RAISE_APPLICATION_ERROR(number, message)` with `number` between **-20999** and **-20000**. The code/message can be retrieved with `SQLCODE` and `SQLERRM`.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. Procédures, fonctions et packages", en: "5. Procedures, functions and packages" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Procédure", en: "Procedure" },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE [OR REPLACE] PROCEDURE Augmenter_Prix (Art IN VARCHAR2, Taux IN NUMBER)\nIS\n  Prix NUMBER;\nBEGIN\n  SELECT PrixHT INTO Prix FROM Article WHERE NoArt = Art;\n  IF Prix IS NULL THEN\n    RAISE_APPLICATION_ERROR(-20010, 'Pas de prix pour l''article ' || Art);\n  ELSE\n    UPDATE Article SET PrixHT = PrixHT * (1 + Taux/100) WHERE NoArt = Art;\n    COMMIT;\n    DBMS_OUTPUT.PUT_LINE('Article ' || Art || ' augmenté.');\n  END IF;\nEXCEPTION\n  WHEN NO_DATA_FOUND THEN\n    DBMS_OUTPUT.PUT_LINE('Article ' || Art || ' n''existe pas !');\nEND;",
    caption: { fr: "Exemple de procédure stockée.", en: "Example of a stored procedure." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Fonction", en: "Function" },
  },
  {
    type: "code",
    lang: "sql",
    text: "CREATE [OR REPLACE] FUNCTION DernierNumero (Par IN CHAR) RETURN CHAR\nIS\n  Valeur VARCHAR2(20) DEFAULT 'Paramètre inconnu';\nBEGIN\n  IF UPPER(Par) = 'C' THEN\n    SELECT TO_CHAR(SeqCli.CURRVAL) INTO Valeur FROM Dual;\n  ELSIF UPPER(Par) = 'A' THEN\n    SELECT MAX(NoArt) INTO Valeur FROM Article;\n  END IF;\n  RETURN (Valeur);\nEND;",
    caption: { fr: "Exemple de fonction stockée (retourne une valeur).", en: "Example of a stored function (returns a value)." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Recompiler : `ALTER {PROCEDURE | FUNCTION} Nom COMPILE;`", en: "Recompile: `ALTER {PROCEDURE | FUNCTION} Name COMPILE;`" } },
      { text: { fr: "Supprimer : `DROP {PROCEDURE | FUNCTION} Nom;`", en: "Drop: `DROP {PROCEDURE | FUNCTION} Name;`" } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Package", en: "Package" },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Spécification (publique)\nCREATE [OR REPLACE] PACKAGE MonPack\nIS\n  -- déclarations visibles de l'extérieur\n  PROCEDURE P1(p IN NUMBER);\n  FUNCTION  F1(p IN NUMBER) RETURN NUMBER;\nEND MonPack;\n\n-- Corps (implémentation)\nCREATE [OR REPLACE] PACKAGE BODY MonPack\nIS\n  -- déclarations privées\n  PROCEDURE P1(p IN NUMBER) IS\n  BEGIN\n    -- implémentation\n  END P1;\n\n  FUNCTION F1(p IN NUMBER) RETURN NUMBER IS\n  BEGIN\n    RETURN p * 2;\n  END F1;\nEND MonPack;",
    caption: { fr: "Spécification et corps d'un package.", en: "Package specification and body." },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Recompiler : `ALTER PACKAGE NomPack COMPILE [PACKAGE | BODY];`", en: "Recompile: `ALTER PACKAGE Name COMPILE [PACKAGE | BODY];`" } },
      { text: { fr: "Supprimer : `DROP PACKAGE NomPack;`", en: "Drop: `DROP PACKAGE Name;`" } },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p6",
    text: { fr: "6. Éléments avancés (UTL_FILE, LOB, SQL dynamique)", en: "6. Advanced elements (UTL_FILE, LOB, dynamic SQL)" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Manipulation de fichiers : UTL_FILE", en: "File handling: UTL_FILE" },
  },
  {
    type: "code",
    lang: "sql",
    text: "DECLARE\n  fout UTL_FILE.FILE_TYPE;\nBEGIN\n  fout := UTL_FILE.FOPEN('C:\\temp', 'test.txt', 'w');\n  UTL_FILE.PUT_LINE(fout, 'ligne1');\n  UTL_FILE.NEW_LINE(fout);\n  UTL_FILE.PUT(fout, 'ligne2');\n  UTL_FILE.FCLOSE(fout);\nEXCEPTION\n  WHEN OTHERS THEN\n    IF UTL_FILE.IS_OPEN(fout) THEN UTL_FILE.FCLOSE(fout); END IF;\n    RAISE;\nEND;",
    caption: { fr: "Écriture dans un fichier avec UTL_FILE.", en: "Writing to a file with UTL_FILE." },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Objets LOB (BLOB/CLOB) : DBMS_LOB", en: "LOB objects (BLOB/CLOB): DBMS_LOB" },
  },
  {
    type: "paragraph",
    text: {
      fr: "DBMS_LOB permet de lire/écrire dans des objets volumineux (BLOB, CLOB, BFILE). Exemple de principe : ouvrir un fichier BFILE, lire sa taille (`GETLENGTH`), charger dans un BLOB (`LOADFROMFILE`), mettre à jour la table, fermer les fichiers.",
      en: "DBMS_LOB allows reading/writing large objects (BLOB, CLOB, BFILE). Basic idea: open a BFILE, get its length (`GETLENGTH`), load into a BLOB (`LOADFROMFILE`), update the table, close the files.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "SQL dynamique", en: "Dynamic SQL" },
  },
  {
    type: "code",
    lang: "sql",
    text: "-- Exécution immédiate\nEXECUTE IMMEDIATE 'CREATE TABLE Temp (id NUMBER)';\n\n-- Avec paramètres\nDECLARE\n  req VARCHAR2(200);\n  nb NUMBER;\nBEGIN\n  req := 'SELECT COUNT(*) FROM Article WHERE PrixHT < :p';\n  EXECUTE IMMEDIATE req INTO nb USING 10;\n  DBMS_OUTPUT.PUT_LINE(nb);\nEND;\n\n-- Exécuter un bloc PL/SQL\nDECLARE\n  bloc VARCHAR2(400);\nBEGIN\n  bloc := 'BEGIN DBMS_OUTPUT.PUT_LINE(''OK''); END;';\n  EXECUTE IMMEDIATE bloc;\nEND;",
    caption: { fr: "Utilisation d'EXECUTE IMMEDIATE pour exécuter du SQL dynamique.", en: "Using EXECUTE IMMEDIATE to execute dynamic SQL." },
  },
  {
    type: "checkpoint",
    concept: { fr: "SELECT ... INTO et exceptions", en: "SELECT ... INTO and exceptions" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Si `SELECT ... INTO var FROM ...` retourne **zéro ligne**, quelle exception est levée ?",
        en: "If `SELECT ... INTO var FROM ...` returns **zero rows**, which exception is raised?",
      },
      options: [
        { text: { fr: "`NO_DATA_FOUND`", en: "`NO_DATA_FOUND`" }, feedback: { fr: "Exactement : aucune ligne retournée.", en: "Exactly: no rows returned." } },
        { text: { fr: "`TOO_MANY_ROWS`", en: "`TOO_MANY_ROWS`" }, feedback: { fr: "Non : trop de lignes.", en: "No: too many rows." } },
        { text: { fr: "`VALUE_ERROR`", en: "`VALUE_ERROR`" }, feedback: { fr: "Non : erreur de type/valeur.", en: "No: type/value error." } },
      ],
      answerIndex: 0,
      solution: {
        fr: "`NO_DATA_FOUND` est levée quand `SELECT ... INTO` ne ramène aucune ligne. `TOO_MANY_ROWS` quand il en ramène plus d'une.",
        en: "`NO_DATA_FOUND` is raised when `SELECT ... INTO` returns no rows. `TOO_MANY_ROWS` when it returns more than one.",
      },
    },
  },
];