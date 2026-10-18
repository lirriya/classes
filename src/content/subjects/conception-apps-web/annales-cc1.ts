import type { Block } from "../../types";

export const annalesCc1: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce chapitre regroupe des questions et mini-épreuves type CC1 (partiel). Le but est de s'entraîner à la **lecture de code** et à l'**écriture de code PHP** en conditions d'examen : afficher la sortie exacte d'un script, expliquer ce que font des morceaux de code et implémenter un formulaire complet avec validation et réaffichage.",
      en: "This chapter groups CC1-style (midterm) questions and mini-exercises. Goal: practice **code reading** and **writing PHP code** under exam conditions: print exact script output, explain what code pieces do and implement a full form with validation and re-display.",
      uk: "Цей розділ збирає питання та мінізавдання типу КК1 (проміжний іспит). Мета: попрактикуватись у **читанні коду** і **написанні PHP-коду** в умовах іспиту: вивести точний результат скрипта, пояснити, що роблять шматки коду, та реалізувати повну форму з перевіркою і повторним відображенням.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Examen type 2022-2023", en: "1. 2022-2023 exam sample", uk: "1. Зразок іспиту 2022-2023" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Stratégie d'examen : commencer par repérer si les données viennent de l'URL (`$_GET`) ou du formulaire (`$_POST`), puis tracer ligne par ligne l'état de `$_COOKIE`, `$_SESSION` et des variables. Toute sortie inattendue due à `isset` ou au cycle des cookies doit être anticipée.",
      en: "Exam strategy: first spot whether data comes from URL (`$_GET`) or form (`$_POST`), then trace line by line the state of `$_COOKIE`, `$_SESSION` and variables. Any unexpected output due to `isset` or cookie lifecycle must be anticipated.",
      uk: "Стратегія іспиту: спочатку визнач, чи дані надходять із URL (`$_GET`), чи з форми (`$_POST`), потім покроково відстеж стан `$_COOKIE`, `$_SESSION` і змінних. Слід передбачити будь-який несподіваний вивід через `isset` або життєвий цикл cookie.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 4,
    text: { fr: "Q1 - Trace GET/POST", en: "Q1 - GET/POST trace", uk: "Q1 - Трасування GET/POST" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\necho $_POST['a']; // 1\nforeach($_GET as $i => $j) echo $i; // 2\n?>",
    caption: { fr: "Appel: prog.php?a=1&b=2", en: "Call: prog.php?a=1&b=2", uk: "Виклик: prog.php?a=1&b=2" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace : la ligne 1 tente d'afficher `$_POST['a']`. Les données de l'URL ne peuplent **pas** `$_POST`, donc la clé n'existe pas : PHP peut émettre un notice et rien n'est affiché. La ligne 2 parcourt les clés de `$_GET` et affiche `a` puis `b`, donc `ab`. Résultat final typique : notice possible puis `ab`.",
      en: "Trace: line 1 tries to print `$_POST['a']`. URL data does **not** fill `$_POST`, so the key does not exist: PHP may emit a notice and prints nothing. Line 2 iterates `$_GET` keys and prints `a` then `b`, so `ab`. Typical final result: possible notice then `ab`.",
      uk: "Траса: рядок 1 намагається вивести `$_POST['a']`. Дані URL **не** заповнюють `$_POST`, тож ключ не існує: PHP може видати notice і нічого не вивести. Рядок 2 перебирає ключі `$_GET` і виводить `a`, потім `b`, тобто `ab`. Типовий фінальний результат: можливий notice, потім `ab`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Trace GET/POST", en: "GET/POST trace", uk: "Траса GET/POST" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Selon cet appel, `$_GET` contient :", en: "Given this call, `$_GET` contains:", uk: "За цього виклику `$_GET` містить:" },
      options: [
        { text: { fr: "rien", en: "nothing", uk: "нічого" } },
        { text: { fr: "les clés a et b de l'URL", en: "keys a and b from the URL", uk: "ключі a і b з URL" } },
        { text: { fr: "la valeur 1 seulement", en: "only value 1", uk: "лише значення 1" } },
      ],
      answerIndex: 1,
      solution: { fr: "Les paramètres sont dans l'URL, donc `$_GET` possède les clés `a` et `b`.", en: "Parameters are in the URL, so `$_GET` has keys `a` and `b`.", uk: "Параметри знаходяться в URL, тому `$_GET` має ключі `a` і `b`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 4,
    text: { fr: "Q2 - Trace cookies", en: "Q2 - Cookie trace", uk: "Q2 - Трасування cookies" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\nif(isset($_COOKIE['i'])) setcookie('i', $_COOKIE['i']+1); //1\nelse setcookie('i',1); //2\nsetcookie('j','youpi'); //3\n//4\necho $_COOKIE['i']; //5\nif(isset($_COOKIE['j'])) echo 'OK'; //6\n?>",
    caption: { fr: "Chargement initial sans cookies préexistants.", en: "Initial load with no existing cookies.", uk: "Перше завантаження без cookie." },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace 1er chargement : navigateur n'envoie rien; `isset($_COOKIE['i'])` est faux; on exécute `setcookie('i',1)` et `setcookie('j','youpi')` pour le prochain chargement. Pendant cette requête, `$_COOKIE` reste vide, donc `echo $_COOKIE['i']` affiche rien ou un notice, et `isset($_COOKIE['j'])` faux donc pas `OK`. Trace 2e chargement : navigateur renvoie `i=1` et `j=youpi`; `isset($_COOKIE['i'])` vrai donc `i` passe à 2 pour la suite; dans cette requête, `$_COOKIE['i']` vaut encore 1 et `j` est disponible, donc sortie typique `1OK`.",
      en: "1st load trace: browser sends nothing; `isset` false; execute `setcookie('i',1)` and `setcookie('j','youpi')` for next load. During this request `$_COOKIE` empty, so echo prints nothing/notice and `OK` not printed. 2nd load trace: browser sends `i=1` and `j=youpi`; `isset` true so `i` becomes 2 for next time; in this request `$_COOKIE['i']` is still 1 and `j` available, typical output `1OK`.",
      uk: "Траса 1-го завантаження: браузер нічого не надсилає; `isset` хибне; виконуються `setcookie('i',1)` і `setcookie('j','youpi')` для наступного завантаження. Під час цього запиту `$_COOKIE` порожній, тому echo виводить нічого/notice, а `OK` не друкується. Траса 2-го завантаження: браузер надсилає `i=1` і `j=youpi`; `isset` істинне, тож `i` стає 2 на майбутнє; у цьому запиті `$_COOKIE['i']` ще 1 і `j` доступний, типовий вивід `1OK`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Cookies CC1", en: "Cookies CC1", uk: "Cookies КК1" },
    exercise: {
      kind: "open",
      prompt: {
        fr: "Expliquer en une phrase pourquoi la sortie du 1er chargement n'affiche pas `OK`.",
        en: "Explain in one sentence why first-load output doesn't show `OK`.",
        uk: "Поясни одним реченням, чому вивід першого завантаження не показує `OK`.",
      },
      solution: {
        fr: "Au premier chargement le navigateur n'a pas encore envoyé le cookie `j`, donc `isset($_COOKIE['j'])` est faux.",
        en: "On first load browser hasn't sent cookie `j` yet, so `isset($_COOKIE['j'])` is false.",
        uk: "При першому завантаженні браузер ще не надіслав cookie `j`, тому `isset($_COOKIE['j'])` хибне.",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Cookies sortie", en: "Cookie output", uk: "Вивід cookie" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Au 2e chargement, `echo $_COOKIE['i']` affiche la nouvelle valeur préparée par `setcookie('i', 2)`.", en: "On 2nd load, `echo $_COOKIE['i']` prints the newly prepared value 2.", uk: "При 2-му завантаженні `echo $_COOKIE['i']` виводить щойно підготовлене значення 2." },
      answer: false,
      justification: { fr: "`$_COOKIE` contient la valeur envoyée par le navigateur avant l'exécution PHP, donc 1; `setcookie` prépare la suivante.", en: "`$_COOKIE` contains value sent by browser before PHP executes, so 1; `setcookie` prepares next one.", uk: "`$_COOKIE` містить значення, надіслане браузером до виконання PHP, тобто 1; `setcookie` готує наступне." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Mini-épreuve d'écriture PHP", en: "2. Mini writing exercise", uk: "2. Мінізавдання з написання PHP" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Sujet type CC1 : implémenter un formulaire qui saisit `AA`, `NNN`, `BB`, vérifie le format, réaffiche les données et la liste des erreurs, puis recherche le propriétaire dans un tableau multidimensionnel si tout est valide.",
      en: "CC1-style topic: implement a form that inputs `AA`, `NNN`, `BB`, checks format, re-displays data and error list, then looks up owner in a multidimensional array if everything valid.",
      uk: "Типове завдання КК1: реалізувати форму, що вводить `AA`, `NNN`, `BB`, перевіряє формат, повторно показує дані і перелік помилок, а потім шукає власника у багатовимірному масиві, якщо все валідне.",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Règles de validation", en: "Validation rules", uk: "Правила перевірки" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Format AA-NNN-BB. AA,BB : 2 lettres majuscules excluant I,O,U. NNN : 001-999 (pas 000).",
              en: "Format AA-NNN-BB. AA,BB: 2 uppercase letters excluding I,O,U. NNN: 001-999 (not 000).",
              uk: "Формат AA-NNN-BB. AA,BB: 2 великі літери крім I,O,U. NNN: 001-999 (не 000).",
            },
            solution: {
              fr: "lettresOK : `preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $s)`. chiffresOK : `preg_match('/^[0-9]{3}$/',$s) && $s != '000'`.",
              en: "Same regexes as above.",
              uk: "Ті самі regex.",
            },
          },
        ],
      },
      {
        title: { fr: "blocsRemplis()", en: "blocsRemplis()", uk: "blocsRemplis()" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Retourne `true` si `AA`, `NNN`, `BB` remplis après `trim`, sinon tableau des clés manquantes.",
              en: "Return `true` if `AA`, `NNN`, `BB` filled after `trim`, else array of missing keys.",
              uk: "Повертає `true`, якщо `AA`, `NNN`, `BB` заповнені після `trim`, інакше масив відсутніх ключів.",
            },
            solution: {
              fr: "$res=[]; foreach(['AA','NNN','BB'] as $k){ if(trim($_POST[$k] ?? '')==='') $res[]=$k; } return empty($res)?true:$res;",
              en: "Check each after trim.",
              uk: "Перевірити кожен після trim.",
            },
          },
        ],
      },
      {
        title: { fr: "Recherche propriétaire", en: "Find owner", uk: "Пошук власника" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Avec `$immatriculations['BF']['245']['AE']='Manvussa Gérard'`, afficher 'Propriétaire : ...' si trouvé, sinon message approprié.",
              en: "Access nested array and display owner if exists.",
              uk: "Знайти у вкладеному масиві власника та вивести повідомлення.",
            },
            solution: { fr: "Vérifier `isset($immatriculations[$aa][$nnn][$bb])` puis afficher; sinon message \"Aucun résultat\".", en: "Use isset chain; otherwise \"No result\".", uk: "Використати ланцюжок isset; інакше \"Немає результату\"." },
          },
        ],
      },
    ],
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  if (!isset($_POST['submit'])) {\n    afficherFormulaire('', '', '', []);\n  } else {\n    $aa = trim($_POST['AA'] ?? '');\n    $nnn = trim($_POST['NNN'] ?? '');\n    $bb = trim($_POST['BB'] ?? '');\n    $erreurs = [];\n    if (!preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $aa)) $erreurs[] = 'AA';\n    if (!preg_match('/^[0-9]{3}$/', $nnn) || $nnn === '000') $erreurs[] = 'NNN';\n    if (!preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $bb)) $erreurs[] = 'BB';\n    if (empty($erreurs)) {\n      echo 'Plaque valide';\n    } else {\n      afficherFormulaire($aa, $nnn, $bb, $erreurs);\n    }\n  }\n?>",
    caption: { fr: "Squelette auto-rechargeant", en: "Self-reloading skeleton", uk: "Каркас самооновлюваної сторінки" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Explication : d'abord détecter la soumission. Si pas de soumission, afficher un formulaire vide. Sinon, trimmer les valeurs, tester tous les champs, accumuler les erreurs. Si aucune erreur, traiter; sinon réafficher le formulaire avec les valeurs saisies et la liste des erreurs. `implode(', ', $erreurs)` transforme le tableau d'erreurs en texte lisible.",
      en: "Explanation: first detect submit. If not submitted, show empty form. Otherwise trim values, test all fields, accumulate errors. If no errors, process; otherwise re-display form with entered values and error list. `implode(', ', $erreurs)` turns error array into readable text.",
      uk: "Пояснення: спочатку вияви submit. Якщо не відправлено, показати порожню форму. Інакше обрізати значення, перевірити всі поля, накопичити помилки. Якщо помилок немає — обробити; інакше повторно показати форму з введеними значеннями і переліком помилок. `implode(', ', $erreurs)` перетворює масив помилок на читабельний текст.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Ordre CC1", en: "CC1 order", uk: "Порядок КК1" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Dans un formulaire auto-rechargeant, on doit tester les champs :", en: "In a self-reloading form, test fields:", uk: "У самооновлюваній формі перевіряти поля:" },
      options: [
        { text: { fr: "après avoir affiché la page", en: "after displaying the page", uk: "після виведення сторінки" } },
        { text: { fr: "avant tout affichage", en: "before any output", uk: "до будь-якого виводу" } },
      ],
      answerIndex: 1,
      solution: { fr: "Les tests déterminent si on affiche les résultats ou le formulaire à remplir.", en: "Tests determine whether showing results or form to fill.", uk: "Перевірки визначають, чи показувати результати, чи форму для заповнення." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Plaque", en: "Plate", uk: "Номер" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "La valeur `000` doit être considérée comme valide pour `NNN`.", en: "The value `000` should be valid for `NNN`.", uk: "Значення `000` має вважатися валідним для `NNN`." },
      answer: false,
      justification: { fr: "Le sujet précise 001-999, donc `000` est interdit.", en: "The prompt specifies 001-999, so `000` is forbidden.", uk: "У завданні вказано 001-999, тому `000` заборонено." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices examen", en: "Exam exercises", uk: "Вправи іспиту" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire les deux expressions régulières pour vérifier AA/BB et NNN.", en: "Write regex for AA/BB and NNN.", uk: "Напиши regex для AA/BB і NNN." },
            solution: { fr: "`preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $aa)` et `preg_match('/^[0-9]{3}$/', $nnn) && $nnn !== '000'`.", en: "Regexes as above.", uk: "Regex як вище." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer la différence entre `isset`, `trim` et regex dans cette épreuve.", en: "Explain difference between `isset`, `trim` and regex in this exam.", uk: "Поясни різницю між `isset`, `trim` і regex у цьому завданні." },
            solution: { fr: "`isset` vérifie la présence, `trim` nettoie, la regex valide le format.", en: "`isset` checks presence, `trim` cleans, regex validates format.", uk: "`isset` перевіряє наявність, `trim` очищає, regex перевіряє формат." },
          },
        ],
      },
    ],
  },
];