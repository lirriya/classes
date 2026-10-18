import type { Block } from "../../types";

export const ajax: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "AJAX (Asynchronous JavaScript And XML) est une méthode d'échange de données entre une page web et un serveur **sans recharger toute la page**. Le navigateur garde la page actuelle, envoie une requête HTTP en arrière-plan, reçoit une réponse et met à jour seulement une partie de la page. L'objet central côté client est `XMLHttpRequest` (ou `ActiveXObject` dans d'anciens Internet Explorer).",
      en: "AJAX (Asynchronous JavaScript And XML) is a way to exchange data between a web page and server **without reloading the whole page**. The browser keeps the current page, sends an HTTP request in the background, receives a response and updates only part of the page. The central client-side object is `XMLHttpRequest` (or `ActiveXObject` in old Internet Explorer).",
      uk: "AJAX (Asynchronous JavaScript And XML) — спосіб обміну даними між сторінкою та сервером **без перезавантаження всієї сторінки**. Браузер зберігає поточну сторінку, надсилає HTTP-запит у фоновому режимі, отримує відповідь і оновлює лише частину сторінки. Центральним клієнтським об'єктом є `XMLHttpRequest` (або `ActiveXObject` у старих Internet Explorer).",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Création de l'objet", en: "1. Object creation", uk: "1. Створення об'єкта" },
  },
  {
    type: "code",
    lang: "javascript",
    text: "function GetXmlHttpObject(){\n  var xmlhttpreq = null;\n  if (window.XMLHttpRequest) {\n    xmlhttpreq = new XMLHttpRequest();\n  } else if (window.ActiveXObject) {\n    xmlhttpreq = new ActiveXObject(\"Microsoft.XMLHTTP\");\n  }\n  return xmlhttpreq;\n}\nvar XmlHttp = GetXmlHttpObject();\nif (XmlHttp == null) {\n  alert(\"Votre navigateur ne supporte pas HTTP Request\");\n}",
    caption: { fr: "Création compatible navigateurs", en: "Cross-browser creation", uk: "Кросбраузерне створення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les propriétés importantes sont `readyState` (0 non initialisée, 1 connexion établie, 2 requête reçue, 3 en cours, 4 terminée), `onreadystatechange` (fonction appelée à chaque changement), `responseText` (chaîne renvoyée) et `responseXML` (document XML explorable avec le DOM).",
      en: "Important properties: `readyState` (0 uninitialized, 1 connected, 2 received, 3 processing, 4 done), `onreadystatechange` (function called on each change), `responseText` (returned string) and `responseXML` (XML document explorable with DOM).",
      uk: "Важливі властивості: `readyState` (0 неініціалізовано, 1 з'єднано, 2 отримано, 3 обробка, 4 завершено), `onreadystatechange` (функція, що викликається при кожній зміні), `responseText` (повернутий рядок) і `responseXML` (XML-документ, доступний для DOM).",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "readyState", en: "readyState", uk: "readyState" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quand peut-on normalement traiter la réponse reçue ?", en: "When can the received response normally be processed?", uk: "Коли можна нормально обробляти отриману відповідь?" },
      options: [
        { text: { fr: "Dès `readyState == 1`", en: "As soon as `readyState == 1`", uk: "Щойно `readyState == 1`" } },
        { text: { fr: "Quand `readyState == 4`", en: "When `readyState == 4`", uk: "Коли `readyState == 4`" } },
      ],
      answerIndex: 1,
      solution: { fr: "4 signifie que la requête est terminée et la réponse disponible.", en: "4 means the request is done and the response is available.", uk: "4 означає, що запит завершено і відповідь доступна." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Envoi de requête GET/POST", en: "2. Sending GET/POST requests", uk: "2. Надсилання GET/POST-запитів" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Il y a deux modes : **asynchrone** (le code continue sans attendre la réponse; la réponse est traitée à l'arrivée) et **synchrone** (le navigateur attend la réponse et bloque l'exécution). Les méthodes sont `open(méthode, URL, mode)` puis `send(data)`. En GET, les données sont dans l'URL; en POST, elles sont envoyées dans `send` avec l'en-tête `Content-type: application/x-www-form-urlencoded`.",
      en: "There are two modes: **asynchronous** (code continues without waiting for the response; response handled when it arrives) and **synchronous** (browser waits for response and blocks execution). Methods: `open(method, URL, mode)` then `send(data)`. With GET, data is in the URL; with POST, it is sent in `send` with header `Content-type: application/x-www-form-urlencoded`.",
      uk: "Є два режими: **асинхронний** (код продовжується без очікування відповіді; відповідь обробляється при надходженні) і **синхронний** (браузер чекає відповіді і блокує виконання). Методи: `open(method, URL, mode)`, потім `send(data)`. При GET дані в URL; при POST вони надсилаються в `send` з заголовком `Content-type: application/x-www-form-urlencoded`.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "// asynchrone, GET\nvar XmlHttp;\nfunction stateChanged(){\n  if (XmlHttp.readyState == 4) {\n    document.getElementById(\"Propositions\").innerHTML = XmlHttp.responseText;\n  }\n}\nXmlHttp = GetXmlHttpObject();\nif (XmlHttp != null) {\n  XmlHttp.onreadystatechange = stateChanged;\n  XmlHttp.open(\"GET\", \"MonUrl.php?p1=v1\", true);\n  XmlHttp.send(null);\n}",
    caption: { fr: "Motif AJAX typique", en: "Typical AJAX pattern", uk: "Типовий патерн AJAX" },
  },
  {
    type: "code",
    lang: "javascript",
    text: "// POST\nXmlHttp.open(\"POST\", \"MonUrl.php\", true);\nXmlHttp.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\nXmlHttp.send(\"p1=v1\");",
    caption: { fr: "Envoi POST", en: "POST sending", uk: "Надсилання POST" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Async vs sync", en: "Async vs sync", uk: "Async vs sync" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "En AJAX asynchrone, le navigateur attend la réponse avant de continuer l'exécution JavaScript.", en: "In asynchronous AJAX, the browser waits for the response before continuing JavaScript execution.", uk: "При асинхронному AJAX браузер чекає відповіді перед продовженням виконання JavaScript." },
      answer: false,
      justification: { fr: "Asynchrone signifie que le code continue et la callback gère la réponse à l'arrivée.", en: "Asynchronous means code continues and the callback handles the response on arrival.", uk: "Асинхронний означає, що код продовжується, а колбек обробляє відповідь при надходженні." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "GET data", en: "GET data", uk: "Дані GET" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Avec la méthode GET en AJAX, où vont les données ?", en: "With the GET method in AJAX, where do the data go?", uk: "При методі GET в AJAX куди йдуть дані?" },
      options: [
        { text: { fr: "Dans l'URL", en: "In the URL", uk: "В URL" } },
        { text: { fr: "Dans le corps envoyé par `send`", en: "In the body sent by `send`", uk: "У тілі, надісланому через `send`" } },
      ],
      answerIndex: 0,
      solution: { fr: "GET met les paramètres dans l'URL; POST les met dans `send`.", en: "GET places parameters in the URL; POST places them in `send`.", uk: "GET розміщує параметри в URL; POST — у `send`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Exploitation de la réponse et eval()", en: "3. Handling response and eval()", uk: "3. Обробка відповіді та eval()" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Le serveur renvoie souvent une chaîne (`responseText`) à insérer directement dans la page (`innerHTML`). Une autre approche consiste à renvoyer du code JavaScript exécuté côté client avec `eval(responseText)` : construction dynamique de listes déroulantes, cases à cocher, messages. On peut aussi utiliser `abort()`, `setTimeouts()`, `getAllResponseHeaders()` et `getResponseHeader()`. Cas classique : aide à la saisie (suggestions au fur et à mesure), chat, listes déroulantes adaptatives.",
      en: "The server often returns a string (`responseText`) to insert directly into the page (`innerHTML`). Another approach is to return JavaScript executed client-side with `eval(responseText)`: dynamic dropdown construction, checkboxes, messages. You can also use `abort()`, `setTimeouts()`, `getAllResponseHeaders()` and `getResponseHeader()`. Classic cases: autocomplete (suggestions while typing), chat, adaptive dropdowns.",
      uk: "Сервер часто повертає рядок (`responseText`) для прямої вставки в сторінку (`innerHTML`). Інший підхід — повернути JavaScript, що виконується на клієнті через `eval(responseText)`: динамічна побудова випадаючих списків, checkbox'ів, повідомлень. Також можна використовувати `abort()`, `setTimeouts()`, `getAllResponseHeaders()` і `getResponseHeader()`. Класичні випадки: автодоповнення (підказки під час введення), чат, адаптивні випадаючі списки.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "var XmlHttp;\nfunction stateChanged(){\n  if (XmlHttp.readyState == 4) {\n    eval(XmlHttp.responseText);\n  }\n}",
    caption: { fr: "eval du code serveur", en: "eval of server code", uk: "eval коду сервера" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  // script serveur renvoyant du JS\n  header('Content-type: text/html; charset=iso-8859-1');\n  echo 'var liste = document.forms[\"f\"].elements[\"sel\"];';\n?>",
    caption: { fr: "Exemple de réponse serveur", en: "Server response example", uk: "Приклад відповіді сервера" },
  },
  {
    type: "checkpoint",
    concept: { fr: "eval", en: "eval", uk: "eval" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`eval()` exécute une chaîne comme si c'était du code JavaScript.", en: "`eval()` executes a string as if it were JavaScript code.", uk: "`eval()` виконує рядок так, ніби це код JavaScript." },
      answer: true,
      justification: { fr: "Cela permet d'exécuter du code renvoyé par le serveur, mais il faut faire attention à la sécurité.", en: "This allows running code returned by the server, but security must be considered.", uk: "Це дозволяє виконувати код, повернутий сервером, але потрібно враховувати безпеку." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "stateChanged", en: "stateChanged", uk: "stateChanged" },
    exercise: {
      kind: "open",
      prompt: { fr: "Pourquoi une fonction `stateChanged` est-elle assignée à `onreadystatechange` ?", en: "Why is a `stateChanged` function assigned to `onreadystatechange`?", uk: "Чому функцію `stateChanged` прив'язують до `onreadystatechange`?" },
      solution: { fr: "Pour traiter la réponse au moment où `readyState` devient 4, c'est-à-dire quand la requête est terminée.", en: "To handle the response when `readyState` becomes 4, that is when the request is finished.", uk: "Щоб обробити відповідь, коли `readyState` стає 4, тобто коли запит завершено." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "responseText", en: "responseText", uk: "responseText" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quelle propriété contient la réponse du serveur sous forme de chaîne ?", en: "Which property contains the server response as a string?", uk: "Яка властивість містить відповідь сервера у вигляді рядка?" },
      options: [
        { text: { fr: "`responseXML`", en: "`responseXML`", uk: "`responseXML`" } },
        { text: { fr: "`responseText`", en: "`responseText`", uk: "`responseText`" } },
      ],
      answerIndex: 1,
      solution: { fr: "`responseText` est un string; `responseXML` est un document XML.", en: "`responseText` is a string; `responseXML` is an XML document.", uk: "`responseText` — рядок; `responseXML` — XML-документ." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices AJAX", en: "AJAX exercises", uk: "Вправи AJAX" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la séquence minimale pour un GET asynchrone vers `data.php?q=abc`.", en: "Write the minimal sequence for an async GET to `data.php?q=abc`.", uk: "Напиши мінімальну послідовність для асинхронного GET до `data.php?q=abc`." },
            solution: { fr: "`x.open(\"GET\",\"data.php?q=abc\",true); x.send(null);` puis traiter dans `onreadystatechange` si `readyState==4`.", en: "Use open and send, then handle in onreadystatechange when readyState==4.", uk: "Використай open і send, потім оброби в onreadystatechange, коли readyState==4." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer pourquoi un script AJAX a souvent besoin d'une div réservée dans la page.", en: "Explain why an AJAX script often needs a reserved div in the page.", uk: "Поясни, чому AJAX-скрипту часто потрібен зарезервований div на сторінці." },
            solution: { fr: "La réponse est insérée dans une zone existante avec `innerHTML`; sans conteneur, il n'y a pas où l'afficher.", en: "The response is inserted into an existing area with `innerHTML`; without a container, there is nowhere to display it.", uk: "Відповідь вставляється в існуючу область через `innerHTML`; без контейнера немає куди її показати." },
          },
        ],
      },
    ],
  },
];