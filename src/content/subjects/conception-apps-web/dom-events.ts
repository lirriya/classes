import type { Block } from "../../types";

export const domEvents: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Le **DOM** (Document Object Model) est la représentation objet d'une page HTML : le navigateur transforme le HTML en une arborescence de nœuds (`window`, `document`, `forms`, `images`, etc.). JavaScript peut lire ou modifier cette arborescence et réagir aux actions de l'utilisateur : clics, saisies, soumission de formulaire, chargement de page.",
      en: "The **DOM** (Document Object Model) is the object representation of an HTML page: the browser turns HTML into a tree of nodes (`window`, `document`, `forms`, `images`, etc.). JavaScript can read or modify this tree and react to user actions: clicks, typing, form submission, page load.",
      uk: "**DOM** (Document Object Model) — об'єктне представлення HTML-сторінки: браузер перетворює HTML на дерево вузлів (`window`, `document`, `forms`, `images` тощо). JavaScript може читати або змінювати це дерево і реагувати на дії користувача: кліки, введення, надсилання форми, завантаження сторінки.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Accès au DOM (window et document)", en: "1. Accessing the DOM (window and document)", uk: "1. Доступ до DOM (window і document)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "`window` est l'objet global du navigateur. Dans la plupart des cas, on l'omet : `document` signifie en réalité `window.document`. L'objet `document` contient les collections `forms`, `images`, `links`, `anchors` et des méthodes comme `getElementById`, `querySelector`, `write`. Les collections sont remplies dans l'ordre d'apparition des balises HTML.",
      en: "`window` is the browser's global object. Usually it is omitted: `document` really means `window.document`. The `document` object contains collections `forms`, `images`, `links`, `anchors` and methods such as `getElementById`, `querySelector`, `write`. Collections are populated in the order HTML tags appear.",
      uk: "`window` — глобальний об'єкт браузера. Зазвичай його опускають: `document` насправді означає `window.document`. Об'єкт `document` містить колекції `forms`, `images`, `links`, `anchors` і методи, такі як `getElementById`, `querySelector`, `write`. Колекції заповнюються в порядку появи HTML-тегів.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "// trois manieres d'acceder a un formulaire\nvar f1 = document.forms[\"general\"];\nvar f2 = document.forms[0];\nvar f3 = document.general;\n\n// acceder a un champ puis lire/modifier sa valeur\nvar zone = document.forms[\"general\"].elements[\"champ1\"];\nconsole.log(zone.value);\nzone.value = \"nouvelle valeur\";\nzone.focus();",
    caption: { fr: "Accès aux formulaires et champs", en: "Accessing forms and fields", uk: "Доступ до форм і полів" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`document.forms.length` : nombre de formulaires", en: "`document.forms.length`: number of forms", uk: "`document.forms.length`: кількість форм" } },
      { text: { fr: "`form.elements.length` : nombre d'éléments dans ce formulaire", en: "`form.elements.length`: number of elements in that form", uk: "`form.elements.length`: кількість елементів у цій формі" } },
      { text: { fr: "`document.getElementById('id')` : élément par id unique", en: "`document.getElementById('id')`: element by unique id", uk: "`document.getElementById('id')`: елемент за унікальним id" } },
      { text: { fr: "`document.querySelector('css')` : premier élément correspondant au sélecteur CSS", en: "`document.querySelector('css')`: first element matching CSS selector", uk: "`document.querySelector('css')`: перший елемент, що відповідає CSS-селектору" } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "DOM arrays", en: "DOM arrays", uk: "DOM-масиви" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Les collections `document.forms` sont triées par ordre alphabétique des noms de formulaire.", en: "The `document.forms` collections are sorted alphabetically by form name.", uk: "Колекції `document.forms` відсортовані за алфавітом назв форм." },
      answer: false,
      justification: { fr: "Elles conservent l'ordre d'apparition dans le HTML.", en: "They keep the order of appearance in the HTML.", uk: "Вони зберігають порядок появи в HTML." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Modification dynamique du document", en: "2. Dynamic document modification", uk: "2. Динамічна зміна документа" },
  },
  {
    type: "paragraph",
    text: {
      fr: "On agit sur un objet en appelant une méthode (`obj.focus()`, `obj.submit()`, `obj.reset()`). On lit ou modifie une propriété (`obj.value`, `obj.innerHTML`). Pour modifier une zone existante, on réserve un conteneur (`<div id=\"resultat\"></div>`) puis on utilise `document.getElementById('resultat').innerHTML = 'texte'`. Si le conteneur n'existe pas, la modification échoue.",
      en: "You act on an object by calling a method (`obj.focus()`, `obj.submit()`, `obj.reset()`). You read or modify a property (`obj.value`, `obj.innerHTML`). To modify an existing area, reserve a container (`<div id=\"resultat\"></div>`) then use `document.getElementById('resultat').innerHTML = 'text'`. If the container does not exist, the modification fails.",
      uk: "Ви впливаєте на об'єкт, викликаючи метод (`obj.focus()`, `obj.submit()`, `obj.reset()`). Властивість можна прочитати або змінити (`obj.value`, `obj.innerHTML`). Щоб змінити існуючу область, резервують контейнер (`<div id=\"resultat\"></div>`), а потім використовують `document.getElementById('resultat').innerHTML = 'text'`. Якщо контейнера не існує, зміна не вдається.",
    },
  },
  {
    type: "code",
    lang: "html",
    text: "<script>\nfunction Modifier(){\n  document.forms[\"changer\"].elements[\"zone\"].value = \"2\";\n  document.getElementById(\"resultat\").innerHTML = \"Valeur modifiee\";\n}\n</script>\n<form name=\"changer\">\n  <input type=\"text\" name=\"zone\" value=\"1\">\n  <input type=\"button\" value=\"Modifier\" onClick=\"Modifier()\">\n</form>\n<div id=\"resultat\"></div>",
    caption: { fr: "Modification via JavaScript", en: "Modification via JavaScript", uk: "Зміна через JavaScript" },
  },
  {
    type: "checkpoint",
    concept: { fr: "innerHTML", en: "innerHTML", uk: "innerHTML" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`innerHTML` permet d'insérer du HTML dans un élément existant.", en: "`innerHTML` allows inserting HTML into an existing element.", uk: "`innerHTML` дозволяє вставляти HTML в існуючий елемент." },
      answer: true,
      justification: { fr: "On peut mettre du texte ou des balises HTML, mais il faut que le conteneur existe.", en: "You can put text or HTML tags, but the container must exist.", uk: "Можна вставляти текст або HTML-теги, але контейнер має існувати." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Événements JavaScript", en: "3. JavaScript events", uk: "3. Події JavaScript" },
  },
  {
    type: "paragraph",
    text: {
      fr: "JavaScript est **événementiel** : une action est associée à un événement déclenché par l'utilisateur ou le navigateur (`onClick`, `onMouseOver`, `onMouseOut`, `onLoad`, `onSubmit`, `onChange`, `onBlur`, `onFocus`). Historiquement, ces handlers sont écrits dans le HTML. La bonne pratique moderne consiste à associer les événements en dehors du HTML avec `addEventListener`.",
      en: "JavaScript is **event-driven**: an action is associated with an event triggered by the user or browser (`onClick`, `onMouseOver`, `onMouseOut`, `onLoad`, `onSubmit`, `onChange`, `onBlur`, `onFocus`). Historically handlers are written in HTML. The modern best practice is to bind events outside HTML with `addEventListener`.",
      uk: "JavaScript **подійно-орієнтований**: до події, ініційованої користувачем або браузером (`onClick`, `onMouseOver`, `onMouseOut`, `onLoad`, `onSubmit`, `onChange`, `onBlur`, `onFocus`), прив'язують дію. Історично обробники писали в HTML. Сучасна краща практика — прив'язувати події поза HTML за допомогою `addEventListener`.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "document.getElementById(\"b1\").addEventListener(\"click\", myFunction);\nfunction myFunction(){\n  document.getElementById(\"p\").innerHTML = \"Bonjour\";\n}\ndocument.getElementById(\"b2\").addEventListener(\"click\", function(){\n  document.getElementById(\"p\").innerHTML = \"Au revoir\";\n});",
    caption: { fr: "addEventListener", en: "addEventListener", uk: "addEventListener" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`click` : clic souris", en: "`click`: mouse click", uk: "`click`: клік миші" } },
      { text: { fr: "`mouseover` / `mouseout` : passage de la souris", en: "`mouseover` / `mouseout`: mouse hover", uk: "`mouseover` / `mouseout`: наведення миші" } },
      { text: { fr: "`submit` : soumission de formulaire", en: "`submit`: form submission", uk: "`submit`: надсилання форми" } },
      { text: { fr: "`load` : page chargée", en: "`load`: page loaded", uk: "`load`: сторінку завантажено" } },
      { text: { fr: "`change` : valeur modifiée", en: "`change`: value changed", uk: "`change`: значення змінено" } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "addEventListener", en: "addEventListener", uk: "addEventListener" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quel est l'avantage principal de `addEventListener` par rapport à `onClick` dans le HTML ?", en: "What is the main advantage of `addEventListener` over `onClick` in HTML?", uk: "Яка головна перевага `addEventListener` перед `onClick` у HTML?" },
      options: [
        { text: { fr: "Il permet de séparer structure HTML et comportement JavaScript", en: "It separates HTML structure from JavaScript behavior", uk: "Воно відокремлює структуру HTML і поведінку JavaScript" } },
        { text: { fr: "Il rend le code plus lent", en: "It makes code slower", uk: "Воно робить код повільнішим" } },
      ],
      answerIndex: 0,
      solution: { fr: "Cela facilite la maintenance et évite de mélanger comportement et structure.", en: "This makes maintenance easier and avoids mixing behavior with structure.", uk: "Це спрощує підтримку і уникає змішування поведінки зі структурою." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Validation de formulaire côté client", en: "4. Client-side form validation", uk: "4. Клієнтська валідація форм" },
  },
  {
    type: "paragraph",
    text: {
      fr: "JavaScript peut vérifier les données **avant** l'envoi au serveur. L'élément `form` possède des propriétés (`name`, `method`, `action`, `elements[]`) et des méthodes (`submit()`, `reset()`). On peut tester `isNaN()` pour les nombres, `RegExp` pour les formats et `indexOf('@')` pour un email simple. La validation côté client améliore l'expérience utilisateur, mais elle ne remplace jamais la validation côté serveur.",
      en: "JavaScript can check data **before** sending it to the server. The `form` element has properties (`name`, `method`, `action`, `elements[]`) and methods (`submit()`, `reset()`). You can test `isNaN()` for numbers, `RegExp` for formats and `indexOf('@')` for a simple email. Client-side validation improves user experience but never replaces server-side validation.",
      uk: "JavaScript може перевірити дані **до** надсилання на сервер. Елемент `form` має властивості (`name`, `method`, `action`, `elements[]`) і методи (`submit()`, `reset()`). Можна перевіряти `isNaN()` для чисел, `RegExp` для форматів і `indexOf('@')` для простого email. Клієнтська валідація покращує досвід користувача, але ніколи не замінює серверну валідацію.",
    },
  },
  {
    type: "code",
    lang: "javascript",
    text: "function ValiderMail(formulaire){\n  if(formulaire.mail.value.indexOf(\"@\", 0) < 0){\n    alert(\"Adresse mail saisie invalide.\\n\");\n  } else {\n    alert(\"Formulaire OK\\n\");\n    formulaire.submit();\n  }\n}",
    caption: { fr: "Validation email", en: "Email validation", uk: "Валідація email" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La méthode recommandée est `onSubmit=\"return fonction();\"`: si la fonction renvoie `false`, le formulaire n'est pas soumis. L'avantage est que le formulaire fonctionne même si JavaScript est désactivé (le serveur validera alors). Un bouton `type=\"button\"` avec `onClick` soumet uniquement si le script le fait explicitement.",
      en: "The recommended method is `onSubmit=\"return fn();\"`: if the function returns `false`, the form is not submitted. The advantage is that the form works even if JavaScript is disabled (server validates then). A `type=\"button\"` button with `onClick` submits only if the script explicitly does so.",
      uk: "Рекомендований метод — `onSubmit=\"return fn();\"`: якщо функція повертає `false`, форма не надсилається. Перевага в тому, що форма працює навіть якщо JavaScript вимкнено (тоді перевіряє сервер). Кнопка `type=\"button\"` з `onClick` надсилає лише якщо скрипт робить це явно.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Validation onSubmit", en: "Validation onSubmit", uk: "Валідація onSubmit" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quelle méthode est recommandée pour valider un formulaire JavaScript ?", en: "Which method is recommended to validate a JavaScript form?", uk: "Який метод рекомендований для валідації JavaScript-форми?" },
      options: [
        { text: { fr: "Bouton `type=\"button\"` + `onClick`", en: "`type=\"button\"` + `onClick`", uk: "`type=\"button\"` + `onClick`" } },
        { text: { fr: "`onSubmit=\"return fonction();\"`", en: "`onSubmit=\"return fn();\"`", uk: "`onSubmit=\"return fn();\"`" } },
      ],
      answerIndex: 1,
      solution: { fr: "Cette méthode bloque la soumission si `false`, tout en fonctionnant sans JavaScript.", en: "This method blocks submission if `false`, while working without JavaScript.", uk: "Цей метод блокує надсилання при `false`, але працює і без JavaScript." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Validation client vs serveur", en: "Client vs server validation", uk: "Клієнтська vs серверна валідація" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "La validation côté client peut remplacer définitivement la validation côté serveur.", en: "Client-side validation can permanently replace server-side validation.", uk: "Клієнтська валідація може остаточно замінити серверну валідацію." },
      answer: false,
      justification: { fr: "Le client peut être contourné; le serveur doit toujours revérifier.", en: "The client can be bypassed; the server must always re-check.", uk: "Клієнта можна обійти; сервер має завжди перевіряти повторно." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "method form", en: "form method", uk: "метод форми" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quel objet donne accès à tous les champs d'un formulaire ?", en: "Which object gives access to all fields of a form?", uk: "Який об'єкт дає доступ до всіх полів форми?" },
      options: [
        { text: { fr: "`form.fields`", en: "`form.fields`", uk: "`form.fields`" } },
        { text: { fr: "`form.elements`", en: "`form.elements`", uk: "`form.elements`" } },
        { text: { fr: "`form.inputs`", en: "`form.inputs`", uk: "`form.inputs`" } },
      ],
      answerIndex: 1,
      solution: { fr: "Les champs sont dans le tableau `elements`.", en: "Fields are in the `elements` array.", uk: "Поля знаходяться в масиві `elements`." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices DOM et événements", en: "DOM and events exercises", uk: "Вправи з DOM і подій" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire le code JS qui, au clic sur un bouton, modifie `innerHTML` d'un `div#resultat` en 'Bonjour'.", en: "Write JS that sets `div#resultat` innerHTML to 'Bonjour' on button click.", uk: "Напиши JS, що встановлює `div#resultat` innerHTML у 'Bonjour' при кліку на кнопку." },
            solution: { fr: "`document.getElementById('btn').addEventListener('click', ()=>document.getElementById('resultat').innerHTML='Bonjour');`", en: "Same idea using getElementById and addEventListener.", uk: "Та сама ідея через getElementById і addEventListener." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer pourquoi une validation JavaScript réussie ne dispense pas de valider en PHP.", en: "Explain why successful JavaScript validation does not eliminate PHP validation.", uk: "Поясни, чому успішна валідація JavaScript не звільняє від валідації в PHP." },
            solution: { fr: "Le client peut être contourné ou désactivé; le serveur doit toujours vérifier.", en: "The client can be bypassed or disabled; the server must always verify.", uk: "Клієнта можна обійти або вимкнути; сервер має завжди перевіряти." },
          },
        ],
      },
    ],
  },
];