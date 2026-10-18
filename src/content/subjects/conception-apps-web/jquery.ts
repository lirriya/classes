import type { Block } from "../../types";

export const jquery: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "jQuery est une bibliothèque JavaScript qui simplifie la sélection et la manipulation du DOM, la gestion des événements et AJAX. Elle masque la plupart des différences entre navigateurs. On l'inclut via un fichier local ou un CDN.",
      en: "jQuery is a JavaScript library that simplifies DOM selection/manipulation, event handling and AJAX. It hides most browser differences. Include it via a local file or CDN.",
      uk: "jQuery — бібліотека JavaScript, що спрощує вибір/маніпуляцію DOM, обробку подій та AJAX. Вона приховує більшість відмінностей між браузерами. Підключається через локальний файл або CDN.",
    },
  },
  {
    type: "code",
    lang: "html",
    text: "<head>\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\n</head>",
    caption: { fr: "Inclusion jQuery (CDN)", en: "jQuery inclusion (CDN)", uk: "Підключення jQuery (CDN)" },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Sélection, actions et contenu", en: "1. Selection, actions and content", uk: "1. Вибір, дії та вміст" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La syntaxe générale est `$(sélecteur).action()`. `$` est l'alias de jQuery. Le sélecteur est souvent un sélecteur CSS : `$(\"p\")` pour tous les paragraphes, `$(\"#id\")` pour un id, `$(\".classe\")` pour une classe. On accède au contenu avec `text()`, `html()`, `val()` et on modifie avec `html()`, `val()`, `append()`, `prepend()`, `before()`, `after()`.",
      en: "General syntax is `$(selector).action()`. `$` is jQuery's alias. The selector is often a CSS selector: `$(\"p\")` for all paragraphs, `$(\"#id\")` for an id, `$(\".class\")` for a class. Access content with `text()`, `html()`, `val()` and modify with `html()`, `val()`, `append()`, `prepend()`, `before()`, `after()`.",
      uk: "Загальний синтаксис: `$(selector).action()`. `$` — псевдонім jQuery. Селектор часто є CSS-селектором: `$(\"p\")` для всіх абзаців, `$(\"#id\")` для id, `$(\".class\")` для класу. Доступ до вмісту через `text()`, `html()`, `val()`, а зміна через `html()`, `val()`, `append()`, `prepend()`, `before()`, `after()`.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "$(this).hide();\n$(\"p\").append(\"/fin de paragraphe/\");\n$(\"#div1\").width(500);\nconsole.log($(\"#p1\").html());",
    caption: { fr: "Actions jQuery", en: "jQuery actions", uk: "Дії jQuery" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Sélecteur jQuery", en: "jQuery selector", uk: "Селектор jQuery" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Dans jQuery, `$(\".card\")` sélectionne les éléments de classe `card`.", en: "In jQuery, `$(\".card\")` selects elements with class `card`.", uk: "У jQuery `$(\".card\")` вибирає елементи з класом `card`." },
      answer: true,
      justification: { fr: "Le point désigne un sélecteur de classe CSS.", en: "The dot denotes a CSS class selector.", uk: "Крапка позначає CSS-селектор за класом." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "val()", en: "val()", uk: "val()" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pour récupérer la valeur d'un champ `input#nom`, on utilise :", en: "To get the value of an `input#nom` field, use:", uk: "Щоб отримати значення поля `input#nom`, використовують:" },
      options: [
        { text: { fr: "`$(\"#nom\").text()`", en: "`$(\"#nom\").text()`", uk: "`$(\"#nom\").text()`" } },
        { text: { fr: "`$(\"#nom\").val()`", en: "`$(\"#nom\").val()`", uk: "`$(\"#nom\").val()`" } },
        { text: { fr: "`$(\"#nom\").html()`", en: "`$(\"#nom\").html()`", uk: "`$(\"#nom\").html()`" } },
      ],
      answerIndex: 1,
      solution: { fr: "`val()` est prévu pour les champs de formulaire.", en: "`val()` is intended for form fields.", uk: "`val()` призначений для полів форми." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Chargement, événements et hiérarchie", en: "2. Loading, events and hierarchy", uk: "2. Завантаження, події та ієрархія" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour exécuter du code après chargement du document, utiliser `$(document).ready(function(){ ... })` ou la forme abrégée `$(function(){ ... })`. Les événements souris, clavier, formulaire et document se bindent directement : `click`, `dblclick`, `mouseenter`, `mouseleave`, `keyup`, `submit`, `change`, `focus`, `load`. jQuery propose aussi des parcours hiérarchiques : `parent()`, `parents()`, `children()`, `find()`, `siblings()`.",
      en: "To run code after document load, use `$(document).ready(function(){ ... })` or shorthand `$(function(){ ... })`. Mouse, keyboard, form and document events bind directly: `click`, `dblclick`, `mouseenter`, `mouseleave`, `keyup`, `submit`, `change`, `focus`, `load`. jQuery also offers hierarchy traversal: `parent()`, `parents()`, `children()`, `find()`, `siblings()`.",
      uk: "Щоб виконати код після завантаження документа, використовують `$(document).ready(function(){ ... })` або коротку форму `$(function(){ ... })`. Події миші, клавіатури, форми і документа прив'язуються напряму: `click`, `dblclick`, `mouseenter`, `mouseleave`, `keyup`, `submit`, `change`, `focus`, `load`. jQuery також має обхід ієрархії: `parent()`, `parents()`, `children()`, `find()`, `siblings()`.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "$(document).ready(function(){\n  $(\"p\").click(function(){\n    $(this).hide();\n    $(\"#p1\").html(\"Exemple de <em>modification HTML</em>\");\n  });\n  $(\"#p1\").mouseenter(function(){\n    alert(\"You entered p1!\");\n  });\n});",
    caption: { fr: "Événements et ready", en: "Events and ready", uk: "Події і ready" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les propriétés HTML/CSS s'accèdent avec `attr()` et `css()`, et se modifient de la même manière. On peut aussi modifier plusieurs styles à la fois en passant un objet : `$(\"#p1\").css({\"background-color\":\"red\", \"width\":\"400px\"})`.",
      en: "HTML/CSS properties are accessed with `attr()` and `css()`, and modified the same way. Multiple styles can also be changed by passing an object: `$(\"#p1\").css({\"background-color\":\"red\", \"width\":\"400px\"})`.",
      uk: "Властивості HTML/CSS звертаються через `attr()` і `css()` і змінюються так само. Кілька стилів можна змінити, передавши об'єкт: `$(\"#p1\").css({\"background-color\":\"red\", \"width\":\"400px\"})`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "ready", en: "ready", uk: "ready" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`$(function(){...})` est la forme abrégée de `$(document).ready(...)`.", en: "`$(function(){...})` is the shorthand form of `$(document).ready(...)`.", uk: "`$(function(){...})` — скорочена форма `$(document).ready(...)`." },
      answer: true,
      justification: { fr: "Les deux attendent la disponibilité du DOM avant d'exécuter le code.", en: "Both wait for the DOM to be available before running code.", uk: "Обидва чекають доступності DOM перед виконанням коду." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "props", en: "props", uk: "властивості" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pour changer le `background-color` d'un élément avec jQuery :", en: "To change an element's `background-color` with jQuery:", uk: "Щоб змінити `background-color` елемента через jQuery:" },
      options: [
        { text: { fr: "`$(\"#p1\").attr(\"background-color\", \"red\")`", en: "`$(\"#p1\").attr(\"background-color\", \"red\")`", uk: "`$(\"#p1\").attr(\"background-color\", \"red\")`" } },
        { text: { fr: "`$(\"#p1\").css(\"background-color\", \"red\")`", en: "`$(\"#p1\").css(\"background-color\", \"red\")`", uk: "`$(\"#p1\").css(\"background-color\", \"red\")`" } },
      ],
      answerIndex: 1,
      solution: { fr: "Les styles CSS passent par `.css()`; les attributs HTML par `.attr()`.", en: "CSS styles go through `.css()`; HTML attributes through `.attr()`.", uk: "CSS-стилі йдуть через `.css()`; HTML-атрибути — через `.attr()`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Propriétés, effets et AJAX", en: "3. Properties, effects and AJAX", uk: "3. Властивості, ефекти та AJAX" },
  },
  {
    type: "paragraph",
    text: {
      fr: "jQuery ajoute aussi des effets (`show`, `hide`, `fadeIn`, `fadeOut`, `slideUp`, `slideDown`, `animate`) et facilite AJAX. Les méthodes AJAX courantes sont `$.get(url, callback)`, `$.post(url, data, callback)`, `$(selector).load(url, data, callback)` et `$.ajax(...)`. Comparé à `XMLHttpRequest` natif, on écrit moins de code et la compatibilité navigateurs est gérée.",
      en: "jQuery also adds effects (`show`, `hide`, `fadeIn`, `fadeOut`, `slideUp`, `slideDown`, `animate`) and eases AJAX. Common AJAX methods: `$.get(url, callback)`, `$.post(url, data, callback)`, `$(selector).load(url, data, callback)` and `$.ajax(...)`. Compared to native `XMLHttpRequest`, less code is written and browser compatibility is handled.",
      uk: "jQuery також додає ефекти (`show`, `hide`, `fadeIn`, `fadeOut`, `slideUp`, `slideDown`, `animate`) і спрощує AJAX. Поширені методи AJAX: `$.get(url, callback)`, `$.post(url, data, callback)`, `$(selector).load(url, data, callback)` і `$.ajax(...)`. Порівняно з нативним `XMLHttpRequest`, коду менше, а сумісність браузерів обробляється автоматично.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "$(document).ready(function(){\n  $(\"#Saisie\").keyup(function(){\n    $.get(\"getPropositions.php\", {debut: $(\"#Saisie\").val()}, function (data) {\n      $(\"#Propositions\").html(data);\n    });\n  });\n});",
    caption: { fr: "Aide à la saisie via $.get", en: "Autocomplete via $.get", uk: "Автодоповнення через $.get" },
  },
  {
    type: "code",
    lang: "javascript",
    text: "$(document).ready(function(){\n  $(\"#Saisie\").keyup(function(){\n    $(\"#Propositions\").load(\"getPropositions.php?debut=\" + $(\"#Saisie\").val());\n  });\n});",
    caption: { fr: "Aide à la saisie via load()", en: "Autocomplete via load()", uk: "Автодоповнення через load()" },
  },
  {
    type: "checkpoint",
    concept: { fr: "load()", en: "load()", uk: "load()" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Dans jQuery, `.load(url)` affecte directement la réponse reçue à l'élément sélectionné.", en: "In jQuery, `.load(url)` directly assigns the received response to the selected element.", uk: "У jQuery `.load(url)` прямо присвоює отриману відповідь вибраному елементу." },
      answer: true,
      justification: { fr: "C'est la forme la plus simple d'AJAX avec jQuery.", en: "This is the simplest AJAX form with jQuery.", uk: "Це найпростіша форма AJAX з jQuery." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "get vs post", en: "get vs post", uk: "get vs post" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pour envoyer des données sensibles sans les mettre dans l'URL, utilisez :", en: "To send sensitive data without putting it in the URL, use:", uk: "Щоб надіслати чутливі дані, не поміщаючи їх у URL, використовують:" },
      options: [
        { text: { fr: "`$.get`", en: "`$.get`", uk: "`$.get`" } },
        { text: { fr: "`$.post`", en: "`$.post`", uk: "`$.post`" } },
      ],
      answerIndex: 1,
      solution: { fr: "`$.post` place les données dans le corps de la requête HTTP.", en: "`$.post` puts data in the HTTP request body.", uk: "`$.post` розміщує дані в тілі HTTP-запиту." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices jQuery", en: "jQuery exercises", uk: "Вправи jQuery" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire le code jQuery qui cache tous les paragraphes au clic sur un bouton.", en: "Write jQuery code hiding all paragraphs on button click.", uk: "Напиши jQuery-код, що ховає всі абзаци при кліку на кнопку." },
            solution: { fr: "`$(\"#btn\").click(function(){ $(\"p\").hide(); });`", en: "Bind click then hide paragraphs.", uk: "Прив'яжи click, потім приховай абзаци." },
          },
          {
            kind: "open",
            prompt: { fr: "Changer la valeur d'un champ `#nom` en 'Alice' avec jQuery.", en: "Set a `#nom` field value to 'Alice' with jQuery.", uk: "Встанови значення поля `#nom` у 'Alice' за допомогою jQuery." },
            solution: { fr: "`$(\"#nom\").val(\"Alice\");`", en: "Use `.val()`.", uk: "Використай `.val()`." },
          },
        ],
      },
    ],
  },
];