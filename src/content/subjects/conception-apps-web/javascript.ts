import type { Block } from "../../types";

export const javascript: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "**JavaScript côté client** est un langage interprété par le **navigateur**, tandis que PHP est exécuté par le **serveur**. JavaScript rend la page interactive sans recharger toute la page : il peut réagir à un clic, à la saisie au clavier, modifier une zone de texte, afficher/masquer des éléments et même envoyer des requêtes AJAX au serveur.",
      en: "**Client-side JavaScript** is a language interpreted by the **browser**, while PHP is executed by the **server**. JavaScript makes a page interactive without reloading the whole page: it can react to clicks, keyboard input, modify text areas, show/hide elements and even send AJAX requests to the server.",
      uk: "**Клієнтський JavaScript** — мова, що інтерпретується **браузером**, а PHP виконується **сервером**. JavaScript робить сторінку інтерактивною без повного перезавантаження: реагує на кліки, введення з клавіатури, змінює текстові області, показує/приховує елементи і може надсилати AJAX-запити на сервер.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un point mental important pour un débutant : le code JavaScript peut s'exécuter **immédiatement** lors du chargement de la page ou **plus tard**, lors d'un événement. Si le script tente d'accéder à un objet HTML avant que celui-ci soit créé par le navigateur, il n'existe pas encore, ce qui provoque une erreur.",
      en: "An important mental point for a beginner: JavaScript code can execute **immediately** while the page loads or **later**, when an event occurs. If the script tries to access an HTML object before the browser has created it, the object does not exist yet, which causes an error.",
      uk: "Важливий ментальний момент для початківця: JavaScript-код може виконуватися **одразу** під час завантаження сторінки або **пізніше**, коли відбудеться подія. Якщо скрипт намагається отримати доступ до HTML-об'єкта, перш ніж браузер його створить, такого об'єкта ще не існує, що спричиняє помилку.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Intégration et exécution différée", en: "1. Integration and deferred execution", uk: "1. Інтеграція та відкладене виконання" },
  },
  {
    type: "code",
    lang: "html",
    text: "<script type=\"text/javascript\">\n  // code JS execute pendant le chargement\n  console.log(\"Bonjour depuis le navigateur\");\n</script>\n\n<!-- meilleur emplacement pour scripts qui manipulent le DOM -->\n<script>\n  window.addEventListener('load', function () {\n    console.log(\"Page chargee, objets disponibles\");\n  });\n</script>",
    caption: { fr: "Intégration et protection par load", en: "Integration and load protection", uk: "Інтеграція та захист через load" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Le code peut être dans `<head>` ou en fin de `<body>`.", en: "Code can be in `<head>` or at the end of `<body>`.", uk: "Код може бути в `<head>` або наприкінці `<body>`." } },
      { text: { fr: "Placer les scripts de manipulation DOM en fin de page est le plus sûr.", en: "Placing DOM-manipulating scripts at the end of the page is safest.", uk: "Розміщувати скрипти, що працюють з DOM, наприкінці сторінки — найнадійніше." } },
      { text: { fr: "Sinon utiliser `window.addEventListener('load', ...)`.", en: "Otherwise use `window.addEventListener('load', ...)`.", uk: "Інакше використовуй `window.addEventListener('load', ...)`." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Exécution avant objet", en: "Execution before object", uk: "Виконання до об'єкта" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Un script placé avant la création d'un élément HTML peut accéder sans erreur à cet élément.", en: "A script placed before an HTML element is created can access that element without error.", uk: "Скрипт, розміщений до створення HTML-елемента, може звернутися до цього елемента без помилки." },
      answer: false,
      justification: { fr: "L'objet n'existe pas encore; déplacer le script ou protéger avec `load`.", en: "The object does not exist yet; move the script or protect with `load`.", uk: "Об'єкта ще не існує; перемісти скрипт або захисти через `load`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Variables, fonctions et structures", en: "2. Variables, functions and structures", uk: "2. Змінні, функції та конструкції" },
  },
  {
    type: "paragraph",
    text: {
      fr: "JavaScript est aussi faiblement typé : les variables se déclarent avec `var` (historique), `let` et `const` dans les versions modernes. Une variable globale est visible dans tout le script; une variable locale est limitée à la fonction. Les fonctions sont déclarées avec `function nom(paramètres) { ... }` et peuvent être appelées depuis n'importe quel endroit où elles sont visibles.",
      en: "JavaScript is also weakly typed: variables are declared with `var` (legacy), `let` and `const` in modern versions. A global variable is visible throughout the script; a local variable is limited to the function. Functions are declared with `function name(parameters) { ... }` and can be called from anywhere they are visible.",
      uk: "JavaScript також слабо типізований: змінні оголошують через `var` (застаріле), `let` і `const` у сучасних версіях. Глобальна змінна видима у всьому скрипті; локальна обмежена функцією. Функції оголошують через `function name(parameters) { ... }` і можуть викликатися з будь-якого місця, де вони видимі.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "var i = 1, j = 1; // variables globales\nfunction affiche1(){\n  var j = 2; // variable locale, masque la globale\n  console.log(i + \"/\" + j);\n}\nfunction affiche2(param){\n  console.log(param + \"/\" + this.i);\n}\naffiche1();   // 1/2\naffiche2(3); // 3/1",
    caption: { fr: "Portée et masquage", en: "Scope and shadowing", uk: "Область видимості і затінення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les structures `if/else`, `for` et `while` ressemblent beaucoup à PHP. La concaténation de chaînes se fait avec `+`. `console.log` affiche une valeur dans la console du navigateur; c'est l'équivalent pratique de `echo` pour déboguer.",
      en: "The `if/else`, `for` and `while` structures are very similar to PHP. String concatenation uses `+`. `console.log` prints a value in the browser console; it is the practical equivalent of `echo` for debugging.",
      uk: "Конструкції `if/else`, `for` і `while` дуже схожі на PHP. Конкатенація рядків використовує `+`. `console.log` виводить значення в консоль браузера; це практичний аналог `echo` для налагодження.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "function volumeSphere(rayon){\n  return (4 / 3) * Math.PI * Math.pow(rayon, 3);\n}\nvar montant = 150 * 4;\nconsole.log(\"Le volume d'une sphere de rayon 1 est \", volumeSphere(1));",
    caption: { fr: "Fonction et objet Math", en: "Function and Math object", uk: "Функція і об'єкт Math" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Concaténation JS", en: "JS concatenation", uk: "Конкатенація JS" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quel opérateur sert à concaténer des chaînes en JavaScript ?", en: "Which operator concatenates strings in JavaScript?", uk: "Який оператор конкатенує рядки в JavaScript?" },
      options: [
        { text: { fr: "`.`", en: "`.`", uk: "`.`" } },
        { text: { fr: "`+`", en: "`+`", uk: "`+`" } },
      ],
      answerIndex: 1,
      solution: { fr: "En JavaScript, `+` concatène des chaînes. En PHP, c'est le point `.`.", en: "In JavaScript, `+` concatenates strings. In PHP, it is the dot `.`.", uk: "У JavaScript `+` конкатенує рядки. У PHP це крапка `.`." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Paramètre vs globale", en: "Parameter vs global", uk: "Параметр vs глобальна" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Dans une fonction, un paramètre nommé `i` écrase temporairement une variable globale `i` pendant la durée de l'appel.", en: "In a function, a parameter named `i` temporarily shadows a global variable `i` during the call.", uk: "У функції параметр з назвою `i` тимчасово затінює глобальну змінну `i` під час виклику." },
      answer: true,
      justification: { fr: "Le paramètre devient une variable locale de la fonction pour cet appel.", en: "The parameter becomes a local variable for that call.", uk: "Параметр стає локальною змінною для цього виклику." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Objets et tableaux", en: "3. Objects and arrays", uk: "3. Об'єкти і масиви" },
  },
  {
    type: "paragraph",
    text: {
      fr: "JavaScript manipule des **objets** : des ensembles de propriétés (valeurs) et de méthodes (fonctions). On utilise `new` pour créer une instance. On accède à une propriété avec la notation pointée `objet.propriete`. On peut parcourir toutes les propriétés avec `for (i in objet)`. Les tableaux sont de type `Array`, indexés à partir de 0, de taille dynamique; leurs clés peuvent être des chaînes, créant des tableaux associatifs.",
      en: "JavaScript manipulates **objects**: sets of properties (values) and methods (functions). Use `new` to create an instance. Access a property with dot notation `object.property`. You can iterate all properties with `for (i in object)`. Arrays are of type `Array`, zero-based, dynamically sized; their keys can be strings, creating associative arrays.",
      uk: "JavaScript маніпулює **об'єктами**: наборами властивостей (значень) і методів (функцій). Використовуй `new` для створення екземпляра. Доступ до властивості — через крапку `object.property`. Усі властивості можна перебрати через `for (i in object)`. Масиви мають тип `Array`, індексуються з 0, мають динамічний розмір; їхні ключі можуть бути рядками, створюючи асоціативні масиви.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "var dt = new Date();\nvar jour = dt.getDay();      // 0..6\nvar numero = dt.getDate();   // jour du mois\nvar mois = dt.getMonth();    // 0..11\nvar tab_jour = [\"Dimanche\", \"Lundi\", \"Mardi\", \"Mercredi\", \"Jeudi\", \"Vendredi\", \"Samedi\"];\nvar tab_mois = [\"Janvier\", \"Fevrier\", \"Mars\", \"Avril\", \"Mai\", \"Juin\", \"Juillet\", \"Aout\", \"Septembre\", \"Octobre\", \"Novembre\", \"Decembre\"];\nconsole.log(\"Nous sommes le \" + tab_jour[jour] + \" \" + numero + \" \" + tab_mois[mois]);",
    caption: { fr: "Date et tableau de traduction", en: "Date and lookup array", uk: "Дата і довідковий масив" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Index tableau JS", en: "JS array index", uk: "Індекс масиву JS" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Le premier élément d'un tableau JavaScript est à l'index 1.", en: "The first element of a JavaScript array is at index 1.", uk: "Перший елемент масиву JavaScript має індекс 1." },
      answer: false,
      justification: { fr: "Les tableaux JavaScript sont indexés à partir de 0, comme en PHP.", en: "JavaScript arrays are zero-based, like PHP arrays.", uk: "Масиви JavaScript індексуються з 0, як і в PHP." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Notation pointée", en: "Dot notation", uk: "Крапковий запис" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pour obtenir la longueur d'une chaîne `s`, on écrit :", en: "To get the length of a string `s`, write:", uk: "Щоб отримати довжину рядка `s`, пишуть:" },
      options: [
        { text: { fr: "`s.length`", en: "`s.length`", uk: "`s.length`" } },
        { text: { fr: "`length(s)`", en: "`length(s)`", uk: "`length(s)`" } },
        { text: { fr: "`s.length()`", en: "`s.length()`", uk: "`s.length()`" } },
      ],
      answerIndex: 0,
      solution: { fr: "`length` est une propriété de l'objet String, pas une méthode, donc sans parenthèses.", en: "`length` is a property of the String object, not a method, so no parentheses.", uk: "`length` — це властивість об'єкта String, а не метод, тому без дужок." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Chaînes, expressions régulières et nombres", en: "4. Strings, regular expressions and numbers", uk: "4. Рядки, регулярні вирази та числа" },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'objet `String` possède `length`, `charAt`, `substring`, `indexOf`, `lastIndexOf`, `toUpperCase`, `toLowerCase`. Les objets `RegExp` se créent avec `/motif/` ou `new RegExp('motif')` et se testent avec `test()` ou `exec()`. Pour les nombres, `isNaN()` teste si ce n'est pas un nombre, `parseInt()` et `parseFloat()` convertissent une chaîne, et l'objet `Math` fournit `random`, `round`, `ceil`, `floor`, `pow`, etc.",
      en: "The `String` object has `length`, `charAt`, `substring`, `indexOf`, `lastIndexOf`, `toUpperCase`, `toLowerCase`. `RegExp` objects are created with `/pattern/` or `new RegExp('pattern')` and tested with `test()` or `exec()`. For numbers, `isNaN()` tests if it is not a number, `parseInt()` and `parseFloat()` convert a string, and `Math` provides `random`, `round`, `ceil`, `floor`, `pow`, etc.",
      uk: "Об'єкт `String` має `length`, `charAt`, `substring`, `indexOf`, `lastIndexOf`, `toUpperCase`, `toLowerCase`. Об'єкти `RegExp` створюються через `/pattern/` або `new RegExp('pattern')` і перевіряються через `test()` або `exec()`. Для чисел `isNaN()` перевіряє, чи це не число, `parseInt()` і `parseFloat()` конвертують рядок, а `Math` містить `random`, `round`, `ceil`, `floor`, `pow` тощо.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "var date = \"28/02/2002\";\nvar jour = date.substring(0, 2);\nvar i = date.indexOf(\"/\"); // 2\nvar dernier = date.lastIndexOf(\"/\"); // 5\nif (!isNaN(\"3.14\")) console.log(\"nombre\");\nvar entier = parseInt(\"3.14\"); // 3\nconsole.log(Math.min(5, 4), Math.ceil(2.2));\nvar reg = new RegExp(\"[0-9]+\");\nconsole.log(reg.test(\"abc\")); // false\nconsole.log(reg.test(\"a1b\")); // true",
    caption: { fr: "Chaînes, regex et nombres", en: "Strings, regex and numbers", uk: "Рядки, regex і числа" },
  },
  {
    type: "checkpoint",
    concept: { fr: "substring", en: "substring", uk: "substring" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Que vaut `\"28/02/2002\".substring(3, 5)` ?", en: "What is `\"28/02/2002\".substring(3, 5)`?", uk: "Чим дорівнює `\"28/02/2002\".substring(3, 5)`?" },
      options: [
        { text: { fr: "`02`", en: "`02`", uk: "`02`" } },
        { text: { fr: "`/0`", en: "`/0`", uk: "`/0`" } },
        { text: { fr: "`2/0`", en: "`2/0`", uk: "`2/0`" } },
      ],
      answerIndex: 0,
      solution: { fr: "Les indices commencent à 0; les positions 3 et 4 sont `0` et `2`.", en: "Indexes start at 0; positions 3 and 4 are `0` and `2`.", uk: "Індекси починаються з 0; позиції 3 і 4 — це `0` і `2`." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "isNaN", en: "isNaN", uk: "isNaN" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`isNaN('abc')` renvoie `false`.", en: "`isNaN('abc')` returns `false`.", uk: "`isNaN('abc')` повертає `false`." },
      answer: false,
      justification: { fr: "`isNaN` renvoie `true` si la valeur n'est pas un nombre.", en: "`isNaN` returns `true` if the value is not a number.", uk: "`isNaN` повертає `true`, якщо значення не є числом." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices JavaScript (langage)", en: "JavaScript language exercises", uk: "Вправи JavaScript (мова)" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire une fonction JS qui prend un rayon et renvoie le volume d'une sphère.", en: "Write a JS function taking a radius and returning sphere volume.", uk: "Напиши JS-функцію, що бере радіус і повертає об'єм кулі." },
            solution: { fr: "`function volumeSphere(r){ return (4/3)*Math.PI*Math.pow(r,3); }`", en: "Same idea with Math.PI and Math.pow.", uk: "Та сама ідея з Math.PI та Math.pow." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer pourquoi `document.querySelector` peut échouer si appelé trop tôt.", en: "Explain why `document.querySelector` can fail if called too early.", uk: "Поясни, чому `document.querySelector` може завершитися помилкою, якщо його викликати занадто рано." },
            solution: { fr: "L'élément ciblé n'existe pas encore dans le DOM; il faut attendre le chargement ou placer le script après.", en: "The target element does not exist yet in the DOM; wait for load or place script after it.", uk: "Цільового елемента ще немає в DOM; потрібно дочекатися завантаження або розмістити скрипт після нього." },
          },
        ],
      },
    ],
  },
];