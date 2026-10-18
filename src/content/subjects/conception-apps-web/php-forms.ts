import type { Block } from "../../types";

export const phpForms: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un **formulaire HTML** est une zone de saisie qui permet à l'utilisateur d'envoyer des informations au serveur. Le navigateur envoie les données selon la méthode indiquée : **GET** (paramètres visibles dans l'URL) ou **POST** (données envoyées dans le corps de la requête, non visibles dans l'URL). En PHP, les données d'un formulaire POST sont automatiquement placées dans le tableau superglobal `$_POST`, indexé par l'attribut `name` de chaque champ.",
      en: "An **HTML form** is a data-entry area that lets the user send information to the server. The browser sends the data using the specified method: **GET** (parameters visible in the URL) or **POST** (data sent in the request body, not visible in the URL). In PHP, data from a POST form is automatically stored in the superglobal array `$_POST`, indexed by each field's `name` attribute.",
      uk: "**HTML-форма** — це область введення, що дозволяє користувачу надсилати інформацію на сервер. Браузер надсилає дані відповідно до вказаного методу: **GET** (параметри видно в URL) або **POST** (дані передаються в тілі запиту, непомітно в URL). У PHP дані POST-форми автоматично потрапляють у суперглобальний масив `$_POST`, проіндексований за атрибутом `name` кожного поля.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Formulaires HTML + POST", en: "1. HTML forms + POST", uk: "1. HTML-форми + POST" },
  },
  {
    type: "code",
    lang: "html",
    text: "<form method=\"post\" action=\"traitement.php\">\n  <label for=\"nom\">Nom</label>\n  <input type=\"text\" id=\"nom\" name=\"nom\">\n  <input type=\"submit\" name=\"submit\" value=\"Valider\">\n</form>",
    caption: { fr: "Formulaire simple en POST", en: "Simple POST form", uk: "Проста форма методом POST" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le champ `name=\"nom\"` est essentiel : c'est ce nom qui devient la clé dans `$_POST`. L'input de type `submit` avec `name=\"submit\"` permet de savoir si le formulaire a été soumis. Le bouton n'envoie pas automatiquement les données si JavaScript annule la soumission, mais côté serveur on teste souvent `isset($_POST['submit'])`.",
      en: "The field `name=\"nom\"` is essential: this name becomes the key in `$_POST`. The submit input with `name=\"submit\"` lets you know whether the form was submitted. The button does not automatically send data if JavaScript cancels submission, but server-side code often tests `isset($_POST['submit'])`.",
      uk: "Поле `name=\"nom\"` є надзвичайно важливим: саме це ім'я стає ключем у `$_POST`. Поле submit з `name=\"submit\"` дозволяє зрозуміти, чи була відправлена форма. Кнопка не надсилає дані автоматично, якщо JavaScript скасовує відправку, але на сервері часто перевіряють `isset($_POST['submit'])`.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Récupération et validation des données ($_POST)", en: "2. Retrieving and validating data ($_POST)", uk: "2. Отримання і валідація даних ($_POST)" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  if (isset($_POST['submit'])) {\n    $nom = trim($_POST['nom'] ?? '');\n    if ($nom === '') {\n      $erreurs[] = 'Nom obligatoire';\n    } elseif (strlen($nom) < 2) {\n      $erreurs[] = 'Nom trop court';\n    } else {\n      echo \"Nom valide : \" . $nom;\n    }\n  }\n?>",
    caption: { fr: "Traitement POST avec vérifications", en: "POST handling with checks", uk: "Обробка POST з перевірками" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La variable `$erreurs` est un tableau qui accumule les messages. `trim()` retire les espaces inutiles au début et à la fin; c'est important car un utilisateur peut saisir seulement des espaces. L'opérateur `??` (null coalescing) évite une erreur si la clé n'existe pas. La comparaison stricte `=== ''` vérifie une chaîne vide.",
      en: "The variable `$erreurs` is an array that collects messages. `trim()` removes useless spaces at the beginning and end; this matters because a user may type only spaces. The `??` operator (null coalescing) avoids an error if the key does not exist. Strict comparison `=== ''` checks for an empty string.",
      uk: "Змінна `$erreurs` — це масив, що накопичує повідомлення. `trim()` видаляє зайві пробіли на початку і в кінці; це важливо, бо користувач може ввести лише пробіли. Оператор `??` (null coalescing) запобігає помилці, якщо ключ не існує. Суворе порівняння `=== ''` перевіряє порожній рядок.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "trim / vide", en: "trim / empty", uk: "trim / порожньо" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`trim('   abc  ')` renvoie `'abc'`.", en: "`trim('   abc  ')` returns `'abc'`.", uk: "`trim('   abc  ')` повертає `'abc'`." },
      answer: true,
      justification: { fr: "`trim` supprime les espaces (et tabulations) au début et à la fin, pas au milieu.", en: "`trim` removes spaces (and tabs) at start and end, not in the middle.", uk: "`trim` видаляє пробіли (і таби) на початку та в кінці, а не посередині." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "isset strict", en: "isset strict", uk: "isset строгість" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`isset($_POST['x'])` est vrai même si `$_POST['x']` vaut `''`.", en: "`isset($_POST['x'])` is true even if `$_POST['x']` is `''`.", uk: "`isset($_POST['x'])` істинне, навіть якщо `$_POST['x']` дорівнює `''`." },
      answer: true,
      justification: { fr: "`isset` vérifie que la clé existe et n'est pas `null`. Une chaîne vide existe toujours.", en: "`isset` checks that the key exists and is not `null`. An empty string still exists.", uk: "`isset` перевіряє, що ключ існує і не дорівнює `null`. Порожній рядок усе ще існує." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Expressions régulières avec preg_match", en: "3. Regular expressions with preg_match", uk: "3. Регулярні вирази через preg_match" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **expression régulière** décrit un motif de texte. En PHP, `preg_match($motif, $chaine)` renvoie `1` si le motif est trouvé dans la chaîne, `0` sinon, et `false` en cas d'erreur. Le motif est entouré de délimiteurs, souvent `/`. Pour vérifier qu'une valeur respecte exactement un format, il faut ancrer le motif avec `^` (début) et `$` (fin).",
      en: "A **regular expression** describes a text pattern. In PHP, `preg_match($pattern, $string)` returns `1` if the pattern is found in the string, `0` otherwise, and `false` on error. The pattern is wrapped in delimiters, often `/`. To verify that a value exactly matches a format, anchor the pattern with `^` (start) and `$` (end).",
      uk: "**Регулярний вираз** описує шаблон тексту. У PHP `preg_match($pattern, $string)` повертає `1`, якщо шаблон знайдено в рядку, `0` у протилежному випадку, і `false` при помилці. Шаблон обмежується розділювачами, часто `/`. Щоб перевірити, що значення точно відповідає формату, шаблон закріплюють за допомогою `^` (початок) і `$` (кінець).",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $aa = trim($_POST['AA'] ?? '');\n  if (!preg_match('/^[A-HJ-NP-TV-Z]{2}$/', $aa)) {\n    $erreurs[] = 'AA';\n  }\n\n  // examples de formats\n  preg_match('/^[0-9]{3}$/', '042');     // 1\n  preg_match('/^[0-9]{3}$/', '42 et x'); // 0\n?>",
    caption: { fr: "Validation regex", en: "Regex validation", uk: "Валідація регулярним виразом" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`[A-HJ-NP-TV-Z]` : lettres majuscules sauf I, O, U", en: "`[A-HJ-NP-TV-Z]`: uppercase letters except I, O, U", uk: "`[A-HJ-NP-TV-Z]`: великі літери, крім I, O, U" } },
      { text: { fr: "`{2}` : exactement 2 caractères", en: "`{2}`: exactly 2 characters", uk: "`{2}`: рівно 2 символи" } },
      { text: { fr: "`^` et `$` : motif couvrant toute la chaîne", en: "`^` and `$`: pattern covers whole string", uk: "`^` і `$`: шаблон охоплює весь рядок" } },
      { text: { fr: "Sans `^` et `$`, `1234` peut être accepté dans une chaîne plus longue", en: "Without `^` and `$`, `1234` can be accepted inside a longer string", uk: "Без `^` і `$` `1234` може бути прийнятий всередині довшого рядка" } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Ancre regex", en: "Regex anchor", uk: "Якір regex" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pourquoi faut-il `^` et `$` dans une regex de validation de formulaire ?", en: "Why are `^` and `$` needed in a form-validation regex?", uk: "Чому потрібні `^` і `$` у регулярному виразі для валідації форми?" },
      options: [
        { text: { fr: "Pour rendre le code plus court", en: "To make code shorter", uk: "Щоб зробити код коротшим" } },
        { text: { fr: "Pour forcer le motif à couvrir toute la saisie", en: "To force the pattern to cover the entire input", uk: "Щоб змусити шаблон охоплювати все введення" } },
      ],
      answerIndex: 1,
      solution: { fr: "Sans ancrage, `preg_match('/[0-9]+/', 'abc123xyz')` est vrai même si la saisie contient autre chose.", en: "Without anchors, `preg_match('/[0-9]+/', 'abc123xyz')` is true even if input contains other characters.", uk: "Без якорів `preg_match('/[0-9]+/', 'abc123xyz')` істинне, навіть якщо введення містить інші символи." },
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
    type: "paragraph",
    text: {
      fr: "Si le formulaire est incomplet ou incorrect, on le **réaffiche** avec les valeurs déjà saisies pour que l'utilisateur ne ressaisisse pas tout. Dans `<input type=\"text\">`, on utilise `value=\"...\"`. Pour les boutons radio, on ajoute `checked=\"checked\"` uniquement à l'option choisie. Les champs incorrects peuvent être marqués en rouge (CSS).",
      en: "If the form is incomplete or invalid, **re-display** it with already-entered values so the user does not retype everything. In `<input type=\"text\">`, use `value=\"...\"`. For radio buttons, add `checked=\"checked\"` only to the chosen option. Invalid fields can be marked in red (CSS).",
      uk: "Якщо форма неповна або некоректна, її **повторно показують** із уже введеними значеннями, щоб користувач не вводив усе заново. У `<input type=\"text\">` використовують `value=\"...\"`. Для радіокнопок `checked=\"checked\"` додають лише до обраного варіанта. Некоректні поля можна підсвічувати червоним (CSS).",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $nom = trim($_POST['nom'] ?? '');\n?>\n<input type=\"text\" name=\"nom\" value=\"<?php echo htmlspecialchars($nom); ?>\">\n<?php\n  $sexe = $_POST['sexe'] ?? '';\n  $vf = ($sexe === 'f') ? 'checked=\"checked\"' : '';\n  $vh = ($sexe === 'h') ? 'checked=\"checked\"' : '';\n?>\n<input type=\"radio\" name=\"sexe\" value=\"f\" <?php echo $vf; ?>> F\n<input type=\"radio\" name=\"sexe\" value=\"h\" <?php echo $vh; ?>> H",
    caption: { fr: "Pré-remplissage", en: "Pre-filling", uk: "Попереднє заповнення" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Pré-remplissage", en: "Pre-filling", uk: "Попереднє заповнення" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Pour réafficher un formulaire, il faut tester les champs **après** l'affichage du formulaire.", en: "To re-display a form, field checks must happen **after** displaying the form.", uk: "Щоб повторно показати форму, перевірки полів мають відбуватися **після** відображення форми." },
      answer: false,
      justification: { fr: "Les tests doivent être faits **avant** l'affichage : on affiche le formulaire seulement s'il y a des erreurs ou si c'est le premier chargement.", en: "Checks must be done **before** display: the form is displayed only if there are errors or it's the first load.", uk: "Перевірки мають відбуватися **до** відображення: форму показують лише у разі помилок або при першому завантаженні." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. Normalisation des données", en: "5. Data normalization", uk: "5. Нормалізація даних" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Après validation, on normalise souvent les données : `trim()` pour nettoyer, `strtolower()` pour mettre en minuscules, `strtoupper()` pour mettre en majuscules, `ucwords()` pour mettre la première lettre de chaque mot en majuscule. Cela est utile pour afficher un nom propre correctement même si l'utilisateur a saisi des espaces ou une casse incohérente.",
      en: "After validation, data is often normalized: `trim()` to clean, `strtolower()` for lowercase, `strtoupper()` for uppercase, `ucwords()` to capitalize the first letter of each word. This helps display a proper name correctly even if the user typed spaces or inconsistent casing.",
      uk: "Після валідації дані часто нормалізують: `trim()` для очищення, `strtolower()` для нижнього регістру, `strtoupper()` для верхнього регістру, `ucwords()` для великої літери на початку кожного слова. Це допомагає правильно показати ім'я навіть якщо користувач ввів пробіли або неузгоджений регістр.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $nom = '  NAUER  ';\n  $prenom = 'emmanuel';\n  $nomPropre = ucwords(strtolower(trim($nom)));\n  $prenomPropre = ucwords(strtolower(trim($prenom)));\n  echo $prenomPropre . ' ' . $nomPropre; // Emmanuel Nauer\n?>",
    caption: { fr: "Normalisation d'un nom", en: "Name normalization", uk: "Нормалізація імені" },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p6",
    text: { fr: "6. Trace / écriture type CC1", en: "6. CC1-style trace/writing", uk: "6. Трасування/написання коду типу КК1" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  if (isset($_POST['submit'])) {\n    $nom = trim($_POST['nom'] ?? '');\n    if ($nom === '') {\n      echo \"vide\";\n    } else {\n      echo $nom;\n    }\n  }\n?>",
    caption: { fr: "Trace de validation simple", en: "Simple validation trace", uk: "Проста траса валідації" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace si soumis avec nom vide (champ présent mais `'   '`): `isset($_POST['submit'])` vrai; `$nom = trim('   ')` donne `''`; donc le test `$nom === ''` est vrai et la sortie est `vide`. Si le champ contient ` Alice `, la sortie est `Alice` (sans espaces autour car trim). Si le formulaire n'est pas soumis, aucune sortie n'est produite par ce bloc.",
      en: "Trace if submitted with empty name (field present but `'   '`): `isset($_POST['submit'])` true; `$nom = trim('   ')` gives `''`; so `$nom === ''` is true and output is `vide`. If the field contains ` Alice `, output is `Alice` (no surrounding spaces due to trim). If the form is not submitted, this block produces no output.",
      uk: "Траса, якщо відправлено з порожнім ім'ям (поле є, але `'   '`): `isset($_POST['submit'])` істинне; `$nom = trim('   ')` дає `''`; отже `$nom === ''` істинне і вивід — `vide`. Якщо поле містить ` Alice `, вивід — `Alice` (без оточуючих пробілів через trim). Якщо форму не відправляли, цей блок не дає виводу.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Validation POST", en: "POST validation", uk: "Валідація POST" },
    exercise: {
      kind: "open",
      prompt: { fr: "Que produit ce code si le formulaire est soumis avec `nom='   '` ?", en: "What does this code produce if submitted with `nom='   '`?", uk: "Що виведе цей код, якщо відправлено з `nom='   '`?" },
      solution: { fr: "`trim('   ')` donne `''`, donc `$nom === ''` est vrai et la sortie est `vide`.", en: "`trim('   ')` gives `''`, so `$nom === ''` is true and output is `vide`.", uk: "`trim('   ')` дає `''`, отже `$nom === ''` істинне, і вивід — `vide`." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Champ absent", en: "Missing field", uk: "Відсутнє поле" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Si le champ `nom` n'est pas présent dans le formulaire, `$_POST['nom']` existe toujours mais vaut une chaîne vide.", en: "If the `nom` field is absent from the form, `$_POST['nom']` still exists but is an empty string.", uk: "Якщо поля `nom` немає в формі, `$_POST['nom']` усе ще існує, але є порожнім рядком." },
      answer: false,
      justification: { fr: "Si le champ n'est pas envoyé, la clé n'existe pas. On utilise `?? ''` pour éviter une erreur.", en: "If the field is not sent, the key does not exist. Use `?? ''` to avoid an error.", uk: "Якщо поле не надіслано, ключ не існує. Використовуй `?? ''`, щоб уникнути помилки." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Action formulaire", en: "Form action", uk: "Дія форми" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Dans un formulaire, l'attribut `action` indique :", en: "In a form, the `action` attribute specifies:", uk: "У формі атрибут `action` вказує:" },
      options: [
        { text: { fr: "l'adresse du script chargé de traiter les données", en: "the address of the script that processes the data", uk: "адресу скрипта, що обробляє дані" } },
        { text: { fr: "la méthode d'envoi", en: "the sending method", uk: "метод надсилання" } },
        { text: { fr: "le nom du champ", en: "the field name", uk: "ім'я поля" } },
      ],
      answerIndex: 0,
      solution: { fr: "`method` indique GET/POST, `action` indique où envoyer, `name` nomme le champ.", en: "`method` specifies GET/POST, `action` specifies where to send, `name` names the field.", uk: "`method` вказує GET/POST, `action` — куди надсилати, `name` — назва поля." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices formulaires", en: "Form exercises", uk: "Вправи з форм" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire un formulaire qui demande email + mot de passe et un script qui vérifie que les deux champs sont non vides.", en: "Write a form asking for email + password and a script verifying both fields are not empty.", uk: "Напиши форму, що запитує email + пароль, і скрипт, що перевіряє, чи обидва поля непорожні." },
            solution: { fr: "HTML : `<form method=\"post\"><input name=\"email\"><input name=\"pass\"><input name=\"submit\"></form>`. PHP : tester `isset($_POST['submit'])`, puis `trim($_POST['email'] ?? '') === ''` etc.", en: "HTML form with named fields; PHP checks isset and trim emptiness.", uk: "HTML-форма з іменованими полями; PHP перевіряє isset і порожнечу через trim." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer la différence entre `isset`, `empty` et `=== ''`.", en: "Explain the difference between `isset`, `empty`, and `=== ''`.", uk: "Поясни різницю між `isset`, `empty` та `=== ''`." },
            solution: { fr: "`isset` teste existence/non-null; `empty` considère vide/0/false/null comme vide; `=== ''` teste strictement une chaîne vide.", en: "`isset` tests existence/non-null; `empty` treats empty/0/false/null as empty; `=== ''` tests strictly an empty string.", uk: "`isset` перевіряє наявність/non-null; `empty` вважає порожнім 0/false/null; `=== ''` строго перевіряє порожній рядок." },
          },
        ],
      },
    ],
  },
];