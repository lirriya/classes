import type { Block } from "../../types";

export const tdPhp: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce TD (travaux dirigés) rassemble les exercices classiques du module : affichage, variables, boucles, conditions, fonctions, formulaires, vérification, réaffichage, tableaux multidimensionnels, includes et mini-application. L'objectif est de s'entraîner à **lire** et **écrire** du PHP en situation d'examen.",
      en: "This TD (directed work) gathers the classic module exercises: display, variables, loops, conditions, functions, forms, validation, re-display, multidimensional arrays, includes and mini-application. The goal is to practice **reading** and **writing** PHP in an exam-like situation.",
      uk: "Цей TD (практичні заняття) збирає класичні вправи модуля: вивід, змінні, цикли, умови, функції, форми, перевірка, повторне відображення, багатовимірні масиви, include та мінізастосунок. Мета — потренуватися **читати** і **писати** PHP в умовах, наближених до іспиту.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Affichage, variables, boucles", en: "1. Display, variables, loops", uk: "1. Вивід, змінні, цикли" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $promo = 20;\n  echo \"Mes premiers pas en PHP\\n\";\n  echo \"Vive le PHP !\\n\";\n  echo \"Je fais partie de la promo \" . $promo . \"\\n\";\n\n  // triangle rectangle\n  $taille = 5;\n  for ($i = 1; $i <= $taille; $i++) {\n    for ($j = 1; $j <= $i; $j++) {\n      echo \"*\";\n    }\n    echo \"\\n\";\n  }\n?>",
    caption: { fr: "Affichage et boucles imbriquées", en: "Display and nested loops", uk: "Вивід і вкладені цикли" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace du triangle : la boucle externe fixe le numéro de ligne; la boucle interne affiche un nombre d'étoiles égal au numéro de ligne. Résultat : ligne 1 une étoile, ligne 2 deux étoiles, etc.",
      en: "Triangle trace: outer loop sets row number; inner loop prints as many stars as the row number. Result: row 1 one star, row 2 two stars, etc.",
      uk: "Траса трикутника: зовнішній цикл задає номер рядка; внутрішній виводить стільки зірочок, який номер рядка. Результат: рядок 1 — одна зірочка, рядок 2 — дві зірочки тощо.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Boucle imbriquee", en: "Nested loop", uk: "Вкладений цикл" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Dans le code ci-dessus, combien d'étoiles contient la ligne 4 ?", en: "In the code above, how many stars are in row 4?", uk: "У наведеному вище коді, скільки зірочок у рядку 4?" },
      options: [
        { text: { fr: "3", en: "3", uk: "3" } },
        { text: { fr: "4", en: "4", uk: "4" } },
        { text: { fr: "5", en: "5", uk: "5" } },
      ],
      answerIndex: 1,
      solution: { fr: "La ligne 4 affiche 4 étoiles car la boucle externe est à `i=4`.", en: "Row 4 prints 4 stars because the outer loop is at `i=4`.", uk: "Рядок 4 виводить 4 зірочки, бо зовнішній цикл має `i=4`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Formulaire + appel", en: "2. Form + call", uk: "2. Форма + виклик" },
  },
  {
    type: "code",
    lang: "html",
    text: "<form method=\"get\" action=\"Triangle.php\">\n  Taille : <input type=\"text\" name=\"taille\">\n  <input type=\"submit\" value=\"Dessiner\">\n</form>",
    caption: { fr: "Formulaire appelant Triangle.php", en: "Form calling Triangle.php", uk: "Форма, що викликає Triangle.php" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Ici, le formulaire envoie `taille` par GET vers `Triangle.php`. Le navigateur génère une URL du type `Triangle.php?taille=5`. Triangle.php lit ensuite `$_GET['taille']`.",
      en: "Here, the form sends `taille` via GET to `Triangle.php`. The browser generates a URL like `Triangle.php?taille=5`. Triangle.php then reads `$_GET['taille']`.",
      uk: "Тут форма надсилає `taille` через GET до `Triangle.php`. Браузер генерує URL на кшталт `Triangle.php?taille=5`. Потім Triangle.php читає `$_GET['taille']`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Formulaire GET", en: "GET form", uk: "GET-форма" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Avec `method=\"get\"`, les données apparaissent dans l'URL.", en: "With `method=\"get\"`, data appears in the URL.", uk: "При `method=\"get\"` дані з'являються в URL." },
      answer: true,
      justification: { fr: "GET met les paramètres dans la chaîne de requête.", en: "GET puts parameters in the query string.", uk: "GET розміщує параметри в рядку запиту." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Vérification de formulaire", en: "3. Form verification", uk: "3. Перевірка форми" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  function blocsRemplis() {\n    $manquants = [];\n    foreach (['AA', 'NNN', 'BB'] as $bloc) {\n      $valeur = trim($_POST[$bloc] ?? '');\n      if ($valeur === '') {\n        $manquants[] = $bloc;\n      }\n    }\n    if (empty($manquants)) return true;\n    return $manquants;\n  }\n?>",
    caption: { fr: "Fonction de vérification de remplissage", en: "Function checking filled blocks", uk: "Функція перевірки заповненості блоків" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Cette fonction renvoie `true` si les trois blocs sont remplis, sinon un tableau des blocs manquants. C'est un modèle important pour les examens : détecter la soumission, trimmer, tester la présence, lister les erreurs, puis afficher ou traiter.",
      en: "This function returns `true` if all three blocks are filled, otherwise an array of missing blocks. It is an important model for exams: detect submit, trim, test presence, list errors, then display or process.",
      uk: "Ця функція повертає `true`, якщо всі три блоки заповнені, інакше масив відсутніх блоків. Це важлива модель для іспитів: виявити submit, обрізати, перевірити наявність, перелічити помилки, потім показати або обробити.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "blocsRemplis", en: "blocsRemplis", uk: "blocsRemplis" },
    exercise: {
      kind: "open",
      prompt: { fr: "Si l'utilisateur saisit seulement `X` dans AA et rien ailleurs, que renvoie `blocsRemplis()` ?", en: "If the user enters only `X` in AA and nothing elsewhere, what does `blocsRemplis()` return?", uk: "Якщо користувач вводить лише `X` в AA і нічого інше, що повертає `blocsRemplis()`?" },
      solution: { fr: "Un tableau `['NNN', 'BB']` (les deux autres blocs sont manquants).", en: "An array `['NNN', 'BB']` (the other two blocks are missing).", uk: "Масив `['NNN', 'BB']` (два інші блоки відсутні)." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Réaffichage du formulaire", en: "4. Form re-display", uk: "4. Повторне відображення форми" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $aa = trim($_POST['AA'] ?? '');\n  $nnn = trim($_POST['NNN'] ?? '');\n  $bb = trim($_POST['BB'] ?? '');\n  $erreurs = [];\n  if (!preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $aa)) $erreurs[] = 'AA';\n  if (!preg_match('/^[0-9]{3}$/', $nnn) || $nnn === '000') $erreurs[] = 'NNN';\n  if (!preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $bb)) $erreurs[] = 'BB';\n  if (empty($erreurs)) {\n    echo \"Tout est valide\";\n  } else {\n    echo \"Merci de remplir/corriger : \" . implode(', ', $erreurs);\n  }\n?>",
    caption: { fr: "Validation puis réaffichage", en: "Validation then re-display", uk: "Валідація, потім повторне відображення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace : si l'utilisateur saisit AA=`BO`, NNN=`2`, BB=`AE`, les tests échouent pour les trois : `BO` contient O interdit, `2` n'a pas 3 chiffres, `AE` ? `AE` est valide mais on le met dans le tableau uniquement si le test échoue. Supposons ici seulement AA et NNN dans `$erreurs`. Le script affiche `Merci de remplir/corriger : AA, NNN`. Si tout est valide, il affiche `Tout est valide` et ne montre pas de formulaire. `implode(', ', $erreurs)` transforme le tableau d'erreurs en une chaîne lisible.",
      en: "Trace: if user enters AA=`BO`, NNN=`2`, BB=`AE`, tests fail for three: `BO` contains forbidden O, `2` doesn't have 3 digits, `AE`? `AE` is valid but only added if its test fails. Assume only AA and NNN in `$erreurs`. Script prints `Merci de remplir/corriger : AA, NNN`. If everything valid, prints `Tout est valide` and doesn't show form. `implode(', ', $erreurs)` turns error array into readable string.",
      uk: "Траса: якщо користувач вводить AA=`BO`, NNN=`2`, BB=`AE`, тести не проходять для трьох: `BO` містить заборонене O, `2` не має 3 цифр, `AE`? `AE` валідний, але додається лише якщо його тест не проходить. Припустимо, у `$erreurs` лише AA і NNN. Скрипт виводить `Merci de remplir/corriger : AA, NNN`. Якщо все валідно, виводить `Tout est valide` і не показує форму. `implode(', ', $erreurs)` перетворює масив помилок у читабельний рядок.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "implode erreurs", en: "implode errors", uk: "implode помилок" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`implode(', ', $erreurs)` est utile pour afficher la liste des champs incorrects.", en: "`implode(', ', $erreurs)` is useful for displaying the list of invalid fields.", uk: "`implode(', ', $erreurs)` корисний для виведення переліку некоректних полів." },
      answer: true,
      justification: { fr: "Il convertit un tableau de chaînes en une seule chaîne séparée par le délimiteur.", en: "It converts an array of strings into a single string separated by the delimiter.", uk: "Він перетворює масив рядків на один рядок, розділений роздільником." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Regex NNN", en: "Regex NNN", uk: "Regex NNN" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quelle expression valide un bloc de 3 chiffres sauf `000` ?", en: "Which expression validates a 3-digit block except `000`?", uk: "Який вираз валідує 3-значний блок, крім `000`?" },
      options: [
        { text: { fr: "preg_match('/^[0-9]{3}$/', $x) && $x !== '000'", en: "preg_match('/^[0-9]{3}$/', $x) && $x !== '000'", uk: "preg_match('/^[0-9]{3}$/', $x) && $x !== '000'" } },
        { text: { fr: "preg_match('/^[0-9]+$/', $x)", en: "preg_match('/^[0-9]+$/', $x)", uk: "preg_match('/^[0-9]+$/', $x)" } },
      ],
      answerIndex: 0,
      solution: { fr: "Il faut vérifier d'abord le format puis exclure la valeur interdite `000`.", en: "First check the format, then exclude the forbidden value `000`.", uk: "Спочатку перевір формат, потім виключи заборонене значення `000`." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices TD PHP", en: "TD PHP exercises", uk: "Вправи TD PHP" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Expliquer en une phrase l'ordre recommandé pour traiter un formulaire auto-rechargeant.", en: "Explain in one sentence the recommended order for a self-reloading form.", uk: "Поясни одним реченням рекомендований порядок обробки самоперезавантажуваної форми." },
            solution: { fr: "Détecter la soumission, tester tous les champs, puis afficher le formulaire seulement s'il y a des erreurs ou si c'est le premier chargement.", en: "Detect submit, test all fields, then display the form only if errors exist or on first load.", uk: "Вияви submit, перевір усі поля, потім показуй форму лише якщо є помилки або при першому завантаженні." },
          },
          {
            kind: "open",
            prompt: { fr: "Donner un exemple de normalisation d'un nom saisi en minuscules incohérentes.", en: "Give an example of normalizing a name typed in inconsistent lowercase.", uk: "Наведи приклад нормалізації імені, введеного в неузгодженому нижньому регістрі." },
            solution: { fr: "`$nom = ucwords(strtolower(trim($_POST['nom'] ?? '')));`", en: "Use `ucwords(strtolower(trim(...)))`.", uk: "Використай `ucwords(strtolower(trim(...)))`." },
          },
        ],
      },
    ],
  },
];