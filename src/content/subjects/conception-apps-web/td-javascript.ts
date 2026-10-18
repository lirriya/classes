import type { Block } from "../../types";

export const tdJavascript: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce TD combine JavaScript, DOM, événements, jQuery et AJAX pour préparer la partie client/interactivité de l'examen. Travailler sans copier-coller pour apprendre à écrire les sélecteurs, les écouteurs d'événements et les requêtes.",
      en: "This TD combines JavaScript, DOM, events, jQuery and AJAX to prepare the client/interactivity part of the exam. Work without copy-paste to learn writing selectors, event listeners and requests.",
      uk: "Цей TD об'єднує JavaScript, DOM, події, jQuery та AJAX для підготовки до клієнтської/інтерактивної частини іспиту. Працюй без копіювання, щоб навчитися писати селектори, обробники подій і запити.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Déclenchement et popups", en: "1. Triggering and popups", uk: "1. Запуск і popup" },
  },
  {
    type: "code",
    lang: "html",
    text: "<button id=\"b5\">5</button>\n<div id=\"sortie\"></div>\n<script>\nfunction codeTriangle(n){\n  var s = '';\n  for (var i = 1; i <= n; i++) {\n    s += '*'.repeat(i) + '\\n';\n  }\n  return s;\n}\ndocument.getElementById('b5').addEventListener('click', function(){\n  document.getElementById('sortie').innerHTML = '<pre>' + codeTriangle(5) + '</pre>';\n});\n</script>",
    caption: { fr: "Bouton et affichage différé", en: "Button and deferred display", uk: "Кнопка і відкладений вивід" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace : au clic, l'écouteur lit l'id `sortie`, appelle `codeTriangle(5)`, qui construit une chaîne de 5 lignes, puis l'insère dans le DOM avec `innerHTML`. Le conteneur doit exister au moment du clic (il existe ici car défini avant le script).",
      en: "Trace: on click, the listener reads id `sortie`, calls `codeTriangle(5)`, which builds a 5-line string, then inserts it into the DOM with `innerHTML`. The container must exist at click time (it does here because defined before the script).",
      uk: "Траса: при кліку обробник читає id `sortie`, викликає `codeTriangle(5)`, який будує рядок з 5 рядків, потім вставляє його в DOM через `innerHTML`. Контейнер має існувати на момент кліку (тут він існує, бо визначений до скрипта).",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Popup chain", en: "Popup chain", uk: "Ланцюжок popup" },
    exercise: {
      kind: "open",
      prompt: { fr: "Chaîner prompt (prénom), confirm (validation), puis alert(\"Salut prénom !\").", en: "Chain prompt (first name), confirm (validation), then alert(\"Hi first name!\").", uk: "З'єднати prompt (ім'я), confirm (підтвердження), потім alert(\"Привіт, ім'я!\")." },
      solution: { fr: "```\nvar p = prompt(\"Prénom ?\");\nif (confirm(\"Confirmer \" + p + \" ?\")) alert(\"Salut \" + p + \" !\");\n```", en: "Prompt, confirm, then alert using concatenated string.", uk: "prompt, confirm, потім alert через конкатенацію рядка." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Roll-over, morpion et formulaires", en: "2. Roll-over, tic-tac-toe and forms", uk: "2. Roll-over, хрестики-нулики та форми" },
  },
  {
    type: "paragraph",
    text: {
      fr: "On peut modifier une image au passage de la souris (`mouseover`) et gérer un jeu en conservant l'état dans des variables JavaScript. Pour un formulaire, on combine `keyup` avec `$.get` ou `$.post` pour valider côté serveur sans recharger.",
      en: "You can change an image on mouseover and manage a game by keeping state in JavaScript variables. For a form, combine `keyup` with `$.get` or `$.post` to validate server-side without reloading.",
      uk: "Можна змінювати зображення при `mouseover` і керувати грою, зберігаючи стан у змінних JavaScript. Для форми поєднуй `keyup` з `$.get` або `$.post`, щоб перевіряти на сервері без перезавантаження.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Roll-over", en: "Roll-over", uk: "Roll-over" },
    exercise: {
      kind: "open",
      prompt: { fr: "Décrire en une phrase comment éviter que plusieurs cellules restent en état 'survol'.", en: "Describe in one sentence how to prevent several cells from staying 'hovered'.", uk: "Опиши одним реченням, як не дати кільком клітинкам залишитися в стані 'наведено'." },
      solution: { fr: "Stocker la dernière cellule survolée et remettre son image à `Blanc.gif` avant de charger `Croix.gif` dans la nouvelle cellule.", en: "Store the last hovered cell and reset its image to `Blanc.gif` before loading `Croix.gif` in the new cell.", uk: "Зберігати останню наведену клітинку і скидати її зображення в `Blanc.gif` перед завантаженням `Croix.gif` у нову клітинку." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Validation JS+PHP", en: "JS+PHP validation", uk: "Валідація JS+PHP" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quelle stratégie met à jour une liste de départements sans rechargement complet ?", en: "Which strategy updates a department list without full reload?", uk: "Яка стратегія оновлює список департаментів без повного перезавантаження?" },
      options: [
        { text: { fr: "Rechargement complet de la page", en: "Full page reload", uk: "Повне перезавантаження сторінки" } },
        { text: { fr: "AJAX interrogeant un programme PHP", en: "AJAX querying a PHP program", uk: "AJAX-запит до програми PHP" } },
      ],
      answerIndex: 1,
      solution: { fr: "AJAX envoie la requête en arrière-plan et met à jour seulement la liste.", en: "AJAX sends the request in background and updates only the list.", uk: "AJAX надсилає запит у фоновому режимі і оновлює лише список." },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Listes déroulantes adaptatives", en: "3. Adaptive dropdowns", uk: "3. Адаптивні випадаючі списки" },
  },
  {
    type: "code",
    lang: "javascript",
    text: "$(document).ready(function(){\n  $('#region').change(function(){\n    $.get('GetDepartements.php', {region: $('#region').val()}, function (data) {\n      $('#deps').html(data);\n    });\n  });\n});",
    caption: { fr: "Mise à jour AJAX", en: "AJAX update", uk: "Оновлення через AJAX" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace : l'événement `change` sur la première liste déclenche une requête `GetDepartements.php?region=...`. Quand la réponse arrive, `#deps` est rempli avec la liste renvoyée par le serveur. Les données peuvent venir d'un tableau PHP ou d'une base de données.",
      en: "Trace: the `change` event on the first list triggers a `GetDepartements.php?region=...` request. When response arrives, `#deps` is filled with the list returned by the server. Data can come from a PHP array or database.",
      uk: "Траса: подія `change` на першому списку запускає запит `GetDepartements.php?region=...`. Коли приходить відповідь, `#deps` заповнюється списком, повернутим сервером. Дані можуть надходити з PHP-масиву або бази даних.",
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Vérification de formulaire (jQuery + PHP)", en: "4. Form validation (jQuery + PHP)", uk: "4. Валідація форми (jQuery + PHP)" },
  },
  {
    type: "code",
    lang: "javascript",
    text: "$('#date').blur(function(){\n  $.get('checkDate.php', {date: $('#date').val()}, function (r) {\n    $('#result').html(r == 1 ? 'Date correcte' : 'Date incorrecte');\n  });\n});",
    caption: { fr: "Vérification date", en: "Date check", uk: "Перевірка дати" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace : au moment où l'utilisateur quitte le champ (`blur`), la valeur est envoyée à `checkDate.php`. Le PHP vérifie avec `checkdate()` et renvoie 1 ou 0. Le JavaScript transforme ce résultat en message HTML dans `#result`.",
      en: "Trace: when the user leaves the field (`blur`), the value is sent to `checkDate.php`. PHP checks with `checkdate()` and returns 1 or 0. JavaScript turns this result into an HTML message in `#result`.",
      uk: "Траса: коли користувач залишає поле (`blur`), значення надсилається до `checkDate.php`. PHP перевіряє через `checkdate()` і повертає 1 або 0. JavaScript перетворює результат на HTML-повідомлення в `#result`.",
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. Mini-chat (polling AJAX)", en: "5. Mini-chat (AJAX polling)", uk: "5. Міні-чат (AJAX polling)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Comportement attendu : l'utilisateur saisit pseudo et message. Au clic sur Envoyer ou à l'appui sur Entrée, la page appelle `insertChatLine.php` en POST avec pseudo et message, puis vide le champ message. La fenêtre de chat se met à jour toutes les 0,1 seconde en rechargeant `chatData.txt`.",
      en: "Expected behavior: user enters nickname and message. On Send click or Enter key, page calls `insertChatLine.php` with POST pseudo and message, then clears message field. Chat window updates every 0.1 second by reloading `chatData.txt`.",
      uk: "Очікувана поведінка: користувач вводить нік і повідомлення. При кліку на Надіслати або натисканні Enter сторінка викликає `insertChatLine.php` з POST pseudo і message, потім очищає поле повідомлення. Вікно чату оновлюється кожні 0,1 секунди через перезавантаження `chatData.txt`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Polling", en: "Polling", uk: "Polling" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Une mise à jour toutes les 0,1 s signifie :", en: "An update every 0.1 s means:", uk: "Оновлення кожні 0,1 с означає:" },
      options: [
        { text: { fr: "un setInterval de 100 ms", en: "a setInterval of 100 ms", uk: "setInterval 100 мс" } },
        { text: { fr: "un setTimeout de 1000 ms", en: "a setTimeout of 1000 ms", uk: "setTimeout 1000 мс" } },
      ],
      answerIndex: 0,
      solution: { fr: "0,1 s = 100 ms, donc un intervalle répétitif de 100 ms.", en: "0.1 s = 100 ms, so a repeating 100 ms interval.", uk: "0,1 с = 100 мс, отже повторюваний інтервал 100 мс." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices TD JavaScript", en: "TD JavaScript exercises", uk: "Вправи TD JavaScript" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la détection de pression de la touche Entrée pour envoyer un message.", en: "Write detection of Enter key press to send a message.", uk: "Напиши виявлення натискання клавіші Enter для надсилання повідомлення." },
            solution: { fr: "Écouter `keydown` ou `keypress`, tester `event.key === 'Enter'`, puis appeler la même fonction que le bouton.", en: "Listen to `keydown` or `keypress`, test `event.key === 'Enter'`, then call the same function as the button.", uk: "Слухай `keydown` або `keypress`, перевір `event.key === 'Enter'`, потім виклич ту саму функцію, що й кнопка." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer pourquoi, dans une liste adaptative, il faut gérer le cas où aucune région n'est sélectionnée.", en: "Explain why, in an adaptive list, one must handle the case where no region is selected.", uk: "Поясни, чому в адаптивному списку потрібно обробляти випадок, коли жодну регіон не вибрано." },
            solution: { fr: "Au départ la liste ne contient pas de région choisie; la seconde liste doit alors afficher tous les départements ou être vide selon la spécification.", en: "Initially no region is selected; the second list must then show all departments or be empty depending on spec.", uk: "Спочатку жодна регіон не вибрана; другий список має тоді показувати всі департаменти або бути порожнім залежно від специфікації." },
          },
        ],
      },
    ],
  },
];