import type { Block } from "../../types";

export const phpBasics: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Avant de lire du PHP, il faut comprendre la chaîne complète d'une application web. Un **navigateur** (Chrome, Firefox, etc.) demande une page au **serveur web** (Apache, Nginx, etc.). Le serveur répond avec du HTML, CSS et JavaScript. Si le fichier demandé est en `.php`, le serveur ne l'envoie pas tel quel : il le fait lire par le **moteur PHP**, le moteur exécute le code PHP et renvoie au navigateur uniquement le résultat HTML généré.",
      en: "Before reading PHP, understand the full web application chain. A **browser** (Chrome, Firefox, etc.) requests a page from a **web server** (Apache, Nginx, etc.). The server replies with HTML, CSS and JavaScript. If the requested file is `.php`, the server does not send it as-is: it is read by the **PHP engine**, the engine runs the code and sends the browser only the generated HTML result.",
      uk: "Перш ніж читати PHP, потрібно зрозуміти повний ланцюжок вебзастосунку. **Браузер** (Chrome, Firefox тощо) запитує сторінку в **вебсервера** (Apache, Nginx тощо). Сервер відповідає HTML, CSS і JavaScript. Якщо запитаний файл має розширення `.php`, сервер не надсилає його як є: його читає **PHP-движок**, запускає код і повертає браузеру лише згенерований результат у форматі HTML.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Page statique (fichier HTML fixe)** : le serveur envoie toujours exactement le même fichier, sans le modifier. Une page `contact.html` peut afficher un texte fixe et ne changera jamais selon l'utilisateur. **Page dynamique (fichier PHP)** : le serveur fabrique la page à la demande à partir de données, de paramètres et d'instructions PHP. Une page `bonjour.php?prenom=Emmanuel` peut écrire « Bonjour Emmanuel » en construisant ce texte pendant l'exécution.",
      en: "**Static page (fixed HTML file)**: the server always sends exactly the same file, unchanged. A `contact.html` page can display fixed text and never changes depending on the user. **Dynamic page (PHP file)**: the server builds the page on demand from data, parameters and PHP instructions. A `hello.php?name=Emmanuel` page can write “Hello Emmanuel” by constructing this text during execution.",
      uk: "**Статична сторінка (фіксований HTML-файл)**: сервер завжди надсилає точно той самий файл без змін. Сторінка `contact.html` може показувати фіксований текст і ніколи не зміниться залежно від користувача. **Динамічна сторінка (PHP-файл)**: сервер створює сторінку на вимогу на основі даних, параметрів і PHP-інструкцій. Сторінка `hello.php?name=Emmanuel` може написати «Hello Emmanuel», конструюючи цей текст під час виконання.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Static vs dynamic", en: "Static vs dynamic", uk: "Статичне vs динамічне" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Un fichier `.html` pur est toujours dynamique.", en: "A pure `.html` file is always dynamic.", uk: "Чистий `.html` файл завжди динамічний." },
      answer: false,
      justification: { fr: "Un fichier HTML pur est statique : son contenu est fixe. C'est le moteur côté serveur (PHP) qui rend la page dynamique.", en: "A pure HTML file is static: its content is fixed. It is the server-side engine (PHP) that makes a page dynamic.", uk: "Чистий HTML-файл статичний: його вміст незмінний. саме серверний движок (PHP) робить сторінку динамічною." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Principe PHP + serveur web", en: "2. PHP + web server principle", uk: "2. Принцип PHP + вебсервер" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Quand on demande `page.php`, le serveur HTTP délègue l'exécution au moteur PHP. Le moteur PHP lit le fichier de haut en bas. Tout ce qui est hors des balises PHP (`<?php ... ?>`) est du texte normal, souvent HTML, et est renvoyé tel quel. Tout ce qui est dans les balises PHP est exécuté : variables, conditions, boucles, fonctions. Le résultat final est un flux HTML envoyé au navigateur.",
      en: "When `page.php` is requested, the HTTP server delegates execution to the PHP engine. The PHP engine reads the file top to bottom. Everything outside PHP tags (`<?php ... ?>`) is normal text, often HTML, and is returned as-is. Everything inside PHP tags is executed: variables, conditions, loops, functions. The final result is an HTML stream sent to the browser.",
      uk: "Коли запитують `page.php`, вебсервер HTTP передає виконання PHP-движку. PHP-движок читає файл зверху вниз. Усе, що знаходиться поза тегами PHP (`<?php ... ?>`), є звичайним текстом, часто HTML, і повертається без змін. Усе, що всередині тегів PHP, виконується: змінні, умови, цикли, функції. Фінальний результат — це HTML-потік, що надсилається браузеру.",
    },
  },
  {
    type: "code",
    lang: "text",
    text: "Navigateur -> GET /page.php -> Serveur HTTP -> Moteur PHP -> execution -> HTML genere -> Navigateur",
    caption: { fr: "Principe d'exécution PHP", en: "PHP execution principle", uk: "Принцип виконання PHP" },
  },
  {
    type: "code",
    lang: "php",
    text: "<h1>Bonjour</h1>\n<?php\n  $nom = \"Emmanuel\";\n  echo \"Je m'appelle \" . $nom;\n?>\n<p>Fin de page</p>",
    caption: { fr: "HTML statique et PHP dans le meme fichier", en: "Static HTML and PHP in the same file", uk: "Статичний HTML та PHP в одному файлі" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans cet exemple, le moteur PHP n'affiche pas la balise `<h1>` en exécutant du code : elle est déjà du HTML fixe. Dans la zone PHP, la variable `$nom` est créée, puis `echo` écrit une chaîne. Le point `.` sert à concaténer (coller) des chaînes. Le résultat final navigateur ressemblera à : `<h1>Bonjour</h1>Je m'appelle Emmanuel<p>Fin de page</p>`.",
      en: "In this example, the PHP engine does not generate the `<h1>` tag by running code: it is already fixed HTML. In the PHP zone, the variable `$nom` is created, then `echo` writes a string. The dot `.` concatenates (glues) strings. The final browser result will look like: `<h1>Bonjour</h1>Je m'appelle Emmanuel<p>Fin de page</p>`.",
      uk: "У цьому прикладі PHP-движок не генерує тег `<h1>` виконанням коду: він уже є фіксованим HTML. У зоні PHP створюється змінна `$nom`, потім `echo` записує рядок. Крапка `.` слугує для конкатенації (склеювання) рядків. Фінальний результат у браузері виглядатиме так: `<h1>Bonjour</h1>Je m'appelle Emmanuel<p>Fin de page</p>`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Sortie echo", en: "echo output", uk: "Вивід echo" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`echo` en PHP écrit directement dans le code HTML envoyé au navigateur.", en: "`echo` in PHP writes directly into the HTML code sent to the browser.", uk: "`echo` в PHP записує безпосередньо в HTML-код, що надсилається браузеру." },
      answer: true,
      justification: { fr: "`echo` produit la sortie du script PHP. Cette sortie est ajoutée au reste de la page.", en: "`echo` produces the output of the PHP script. This output is added to the rest of the page.", uk: "`echo` створює вивід PHP-скрипту. Цей вивід додається до решти сторінки." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Point de concaténation", en: "Concatenation dot", uk: "Крапка конкатенації" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quel symbole sert à concaténer deux chaînes en PHP ?", en: "Which symbol concatenates two strings in PHP?", uk: "Який символ використовується для конкатенації двох рядків у PHP?" },
      options: [
        { text: { fr: "`+`", en: "`+`", uk: "`+`" } },
        { text: { fr: "`.`", en: "`.`", uk: "`.`" } },
        { text: { fr: "`&`", en: "`&`", uk: "`&`" } },
      ],
      answerIndex: 1,
      solution: { fr: "En PHP, l'opérateur de concaténation est le point `.`. Le `+` sert aux nombres.", en: "In PHP, the concatenation operator is the dot `.`. `+` is for numbers.", uk: "У PHP оператор конкатенації — це крапка `.`. `+` призначений для чисел." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Variables, echo, structures de contrôle", en: "3. Variables, echo, control structures", uk: "3. Змінні, echo, керувальні конструкції" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **variable** est une boîte nommée qui contient une valeur. En PHP, le nom d'une variable commence toujours par `$`. PHP n'est pas fortement typé : on ne déclare pas le type; le type est déduit automatiquement lors de l'affectation. Les types courants sont `integer` (entier), `double`/`float` (réel), `string` (chaîne), `boolean` (vrai/faux), `array` (tableau).",
      en: "A **variable** is a named box containing a value. In PHP, a variable name always starts with `$`. PHP is not strongly typed: you do not declare the type; it is inferred automatically during assignment. Common types are `integer`, `double`/`float`, `string`, `boolean`, and `array`.",
      uk: "**Змінна** — це іменований «контейнер», що зберігає значення. У PHP назва змінної завжди починається з `$`. PHP не є суворо типізованим: тип не оголошується, він визначається автоматично під час присвоєння. Поширені типи: `integer`, `double`/`float`, `string`, `boolean`, `array`.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $promo = 20;               // variable numérique entière\n  $prenom = \"Emmanuel\";      // variable chaîne\n  $majeur = true;            // variable booléenne\n\n  echo \"Promo = \" . $promo . \"\\n\";\n  echo \"Bonjour \" . $prenom . \"\\n\";\n?>",
    caption: { fr: "Variables de base", en: "Basic variables", uk: "Базові змінні" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Portée des variables", en: "Variable scope", uk: "Область видимості змінних" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "Déclarée hors fonction : variable **globale**, mais pas accessible automatiquement dans une fonction.", en: "Declared outside a function: **global** variable, but not automatically accessible inside a function.", uk: "Оголошена поза функцією: **глобальна** змінна, але не доступна автоматично всередині функції." } },
      { text: { fr: "Déclarée dans une fonction : variable **locale**, disparait à la fin de la fonction.", en: "Declared in a function: **local** variable, disappears when function ends.", uk: "Оголошена у функції: **локальна** змінна, зникає після завершення функції." } },
      { text: { fr: "Pour utiliser une variable globale dans une fonction : `global $x;` ou `$GLOBALS['x']`.", en: "To use a global inside a function: `global $x;` or `$GLOBALS['x']`.", uk: "Щоб використати глобальну змінну у функції: `global $x;` або `$GLOBALS['x']`." } },
    ],
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $a = 1; // globale\n  function test() {\n    $a = 2; // locale, différente de la globale\n    echo $a . \"\\n\"; // affiche 2\n  }\n  test();\n  echo $a; // affiche 1\n?>",
    caption: { fr: "Globale vs locale", en: "Global vs local", uk: "Глобальна vs локальна" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Structures de contrôle", en: "Control structures", uk: "Керувальні конструкції" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $age = 17;\n  if ($age >= 18) {\n    echo \"majeur\\n\";\n  } elseif ($age >= 16) {\n    echo \"presque\\n\";\n  } else {\n    echo \"mineur\\n\";\n  }\n\n  for ($i = 1; $i <= 5; $i++) {\n    echo $i . \" \";\n  }\n\n  $i = 1;\n  while ($i <= 3) {\n    echo \"while \" . $i . \"\\n\";\n    $i++;\n  }\n?>",
    caption: { fr: "if / for / while", en: "if / for / while", uk: "if / for / while" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les structures `if/elseif/else` choisissent un bloc selon une condition vraie. `for` répète des instructions un nombre connu de fois. `while` répète tant qu'une condition reste vraie. Les opérateurs de comparaison (`==`, `===`, `!=`, `<`, `>`, `<=`, `>=`) renvoient `true` ou `false`. `===` compare aussi le type : `0 == false` est vrai, mais `0 === false` est faux.",
      en: "The `if/elseif/else` structures choose one block according to a true condition. `for` repeats instructions a known number of times. `while` repeats while a condition remains true. Comparison operators (`==`, `===`, `!=`, `<`, `>`, `<=`, `>=`) return `true` or `false`. `===` also compares type: `0 == false` is true, but `0 === false` is false.",
      uk: "Конструкції `if/elseif/else` вибирають один блок залежно від істинної умови. `for` повторює інструкції відому кількість разів. `while` повторює, поки умова залишається істинною. Оператори порівняння (`==`, `===`, `!=`, `<`, `>`, `<=`, `>=`) повертають `true` або `false`. `===` також порівнює тип: `0 == false` істинне, але `0 === false` хибне.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Identique ===", en: "Identical ===", uk: "Тотожність ===" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`0 === false` renvoie `true` en PHP.", en: "`0 === false` returns `true` in PHP.", uk: "`0 === false` повертає `true` в PHP." },
      answer: false,
      justification: { fr: "`===` vérifie le type aussi : `0` est un entier, `false` un booléen.", en: "`===` also checks type: `0` is an integer, `false` a boolean.", uk: "`===` також перевіряє тип: `0` — ціле число, `false` — булеве значення." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "for / while", en: "for / while", uk: "for / while" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quelle boucle est la plus naturelle pour parcourir les nombres de 1 à 10 ?", en: "Which loop is most natural to iterate numbers 1 to 10?", uk: "Який цикл є найприроднішим для перебору чисел від 1 до 10?" },
      options: [
        { text: { fr: "`while`", en: "`while`", uk: "`while`" }, feedback: { fr: "Possible, mais demande d'initialiser et incrémenter manuellement.", en: "Possible, but requires manual initialization/increment.", uk: "Можливо, але потребує ручної ініціалізації/інкремента." } },
        { text: { fr: "`for`", en: "`for`", uk: "`for`" }, feedback: { fr: "Oui : `for` regroupe initialisation, condition et incrémentation.", en: "Yes: `for` groups initialization, condition and increment.", uk: "Так: `for` групує ініціалізацію, умову та інкремент." } },
      ],
      answerIndex: 1,
      solution: { fr: "`for ($i=1; $i<=10; $i++)` est le style habituel pour un nombre connu d'itérations.", en: "`for ($i=1; $i<=10; $i++)` is the usual style for a known number of iterations.", uk: "`for ($i=1; $i<=10; $i++)` — звичайний стиль для відомої кількості ітерацій." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. GET, URL et passage de paramètres", en: "4. GET, URL and passing parameters", uk: "4. GET, URL та передавання параметрів" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **paramètre d'URL** est une information envoyée au serveur dans l'adresse web. Avec la méthode `GET`, on voit ces paramètres dans l'URL, séparés par `?` puis `&`. Exemple : `triangle.php?taille=5&couleur=rouge`. PHP met automatiquement ces valeurs dans le tableau superglobal `$_GET`. On y accède avec `$_GET['taille']`. `isset($_GET['taille'])` teste si la clé existe et n'est pas `null`.",
      en: "A **URL parameter** is information sent to the server in the web address. With the `GET` method, these parameters are visible in the URL, separated by `?` then `&`. Example: `triangle.php?taille=5&couleur=rouge`. PHP automatically stores these values in the superglobal array `$_GET`. You access them with `$_GET['taille']`. `isset($_GET['taille'])` tests whether the key exists and is not `null`.",
      uk: "**Параметр URL** — це інформація, що надсилається серверу в адресі сторінки. Метод `GET` робить ці параметри видимими в URL, розділеними `?`, а потім `&`. Приклад: `triangle.php?taille=5&couleur=rouge`. PHP автоматично зберігає ці значення у суперглобальному масиві `$_GET`. Доступ до них: `$_GET['taille']`. `isset($_GET['taille'])` перевіряє, чи існує ключ і чи не дорівнює він `null`.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  // bonbon.php?gout=menthe&quantite=3\n  if (isset($_GET['gout'])) {\n    $gout = $_GET['gout'];\n  } else {\n    $gout = 'inconnu';\n  }\n\n  $quantite = isset($_GET['quantite']) ? $_GET['quantite'] : 1;\n\n  echo \"Gout = \" . $gout . \"\\n\";\n  echo \"Quantite = \" . $quantite . \"\\n\";\n?>",
    caption: { fr: "Lecture de paramètres GET", en: "Reading GET parameters", uk: "Читання параметрів GET" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Important : `isset()` vérifie la **présence/clé**, pas le contenu. Si l'utilisateur envoie `gout=` (valeur vide), `isset($_GET['gout'])` est vrai, mais la valeur est `''`. Pour vérifier « non vide », on utilise `trim()` puis `!== ''` ou les fonctions appropriées.",
      en: "Important: `isset()` checks **presence/key**, not content. If the user sends `gout=` (empty value), `isset($_GET['gout'])` is true, but the value is `''`. To check “not empty”, use `trim()` then `!== ''` or appropriate functions.",
      uk: "Важливо: `isset()` перевіряє **наявність/ключ**, а не вміст. Якщо користувач надсилає `gout=` (порожнє значення), `isset($_GET['gout'])` істинне, але значення дорівнює `''`. Щоб перевірити «не порожньо», використовують `trim()` і `!== ''` або відповідні функції.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "URL GET", en: "GET URL", uk: "GET URL" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Dans `page.php?x=5`, la valeur `5` sera disponible dans `$_GET['x']`.", en: "In `page.php?x=5`, the value `5` will be available in `$_GET['x']`.", uk: "У `page.php?x=5` значення `5` буде доступне в `$_GET['x']`." },
      answer: true,
      justification: { fr: "PHP lit automatiquement la chaîne de requête et la met dans `$_GET`.", en: "PHP automatically parses the query string into `$_GET`.", uk: "PHP автоматично розбирає рядок запиту у `$_GET`." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "isset sur vide", en: "isset on empty", uk: "isset на порожньому" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`isset($_GET['x'])` est faux si `$_GET['x']` vaut `''`.", en: "`isset($_GET['x'])` is false if `$_GET['x']` is `''`.", uk: "`isset($_GET['x'])` хибне, якщо `$_GET['x']` дорівнює `''`." },
      answer: false,
      justification: { fr: "`isset` teste l'existence et `null`, pas la longueur. Une chaîne vide existe.", en: "`isset` tests existence and `null`, not length. An empty string exists.", uk: "`isset` перевіряє наявність і `null`, а не довжину. Порожній рядок існує." },
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Trace pas à pas d'un paramètre GET", en: "Step-by-step trace of a GET parameter", uk: "Покрокова траса GET-параметра" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  // appel : triangle.php?taille=5\n  $taille = isset($_GET['taille']) ? $_GET['taille'] : 0;\n  if ($taille > 20) {\n    echo \"Triangle trop grand\\n\";\n  } elseif ($taille == 0) {\n    $taille = 10;\n    echo \"taille forcee a \" . $taille . \"\\n\";\n  } else {\n    echo \"triangle de taille \" . $taille . \"\\n\";\n  }\n?>",
    caption: { fr: "Trace mentale", en: "Mental trace", uk: "Мисленна траса" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace avec `taille=5` : `isset($_GET['taille'])` est vrai, donc `$taille` vaut 5. Ensuite `5 > 20` est faux, `5 == 0` est faux, donc le bloc `else` s'exécute et affiche `triangle de taille 5`. Si l'URL est `triangle.php` sans paramètre, `isset` est faux, donc `$taille` vaut 0; puis `$taille == 0` devient vrai, `$taille` devient 10 et affiche `taille forcee a 10`. Si `taille=25`, le premier test est vrai et affiche `Triangle trop grand` sans dessiner.",
      en: "Trace with `taille=5`: `isset($_GET['taille'])` is true, so `$taille` becomes 5. Then `5 > 20` is false, `5 == 0` is false, so the `else` block runs and prints `triangle de taille 5`. If the URL is `triangle.php` without a parameter, `isset` is false, so `$taille` becomes 0; then `$taille == 0` is true, `$taille` becomes 10 and prints `taille forcee a 10`. If `taille=25`, the first test is true and prints `Triangle trop grand` without drawing.",
      uk: "Траса при `taille=5`: `isset($_GET['taille'])` істинне, тому `$taille` стає 5. Потім `5 > 20` хибне, `5 == 0` хибне, тож виконується блок `else` і виводить `triangle de taille 5`. Якщо URL — `triangle.php` без параметра, `isset` хибне, тому `$taille` стає 0; далі `$taille == 0` істинне, `$taille` стає 10 і виводить `taille forcee a 10`. Якщо `taille=25`, перший тест істинний і виводить `Triangle trop grand` без малювання.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Trace triangle", en: "Triangle trace", uk: "Траса трикутника" },
    exercise: {
      kind: "open",
      prompt: { fr: "Qu'affiche `triangle.php?taille=0` avec le code ci-dessus ?", en: "What does `triangle.php?taille=0` print with the code above?", uk: "Що виводить `triangle.php?taille=0` з наведеним вище кодом?" },
      solution: { fr: "`isset` est vrai, donc `$taille=0`. Puis `$taille > 20` faux, `$taille == 0` vrai : affiche `taille forcee a 10`.", en: "`isset` true, so `$taille=0`. Then first false, second true: prints `taille forcee a 10`.", uk: "`isset` істинне, тому `$taille=0`. Потім перша умова хибна, друга істинна: виводить `taille forcee a 10`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. Entraînement trace de code", en: "5. Code tracing practice", uk: "5. Тренування трасування коду" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Trace URL", en: "URL trace", uk: "Траса URL" },
    exercise: {
      kind: "open",
      prompt: { fr: "Soit `prog.php` appelé avec `prog.php?a=1&b=2`. Que génère ce code ?\n\n```php\n<?php\necho $_POST['a'];\nforeach ($_GET as $i => $j) {\n  echo $i;\n}\n?>\n```", en: "Given `prog.php?a=1&b=2`, what does this produce?\n\n```php\n<?php\necho $_POST['a'];\nforeach ($_GET as $i => $j) {\n  echo $i;\n}\n?>\n```", uk: "Виклик `prog.php?a=1&b=2`. Що виведе код?\n\n```php\n<?php\necho $_POST['a'];\nforeach ($_GET as $i => $j) {\n  echo $i;\n}\n?>\n```" },
      solution: { fr: "D'abord tentative d'afficher `$_POST['a']`, qui n'existe pas : selon la configuration, erreur/notice, puis rien. Ensuite `foreach` parcourt les clés de `$_GET` et affiche `ab`. Résultat final attendu : notice possible puis `ab`.", en: "First tries to print `$_POST['a']`, which does not exist: depending on config, error/notice, then nothing. Then `foreach` iterates through `$_GET` keys and prints `ab`. Expected final result: possible notice then `ab`.", uk: "Спочатку намагається вивести `$_POST['a']`, якого не існує: залежно від конфігурації — помилка/notice, далі нічого. Потім `foreach` перебирає ключі `$_GET` і виводить `ab`. Очікуваний фінальний результат: можливий notice, потім `ab`." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Trace mélange GET/POST", en: "Mixed GET/POST trace", uk: "Змішана траса GET/POST" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Dans le code ci-dessus, `$_GET` contient:", en: "In the code above, `$_GET` contains:", uk: "У наведеному вище коді `$_GET` містить:" },
      options: [
        { text: { fr: "rien, car l'appel utilise POST", en: "nothing, because the call uses POST", uk: "нічого, бо виклик використовує POST" } },
        { text: { fr: "les clés `a` et `b` passées dans l'URL", en: "keys `a` and `b` passed in the URL", uk: "ключі `a` і `b`, передані в URL" } },
      ],
      answerIndex: 1,
      solution: { fr: "Les paramètres sont dans l'URL, donc `$_GET` contient `a` et `b`. Le fait d'écrire `$_POST['a']` ne transforme pas l'appel en POST.", en: "Parameters are in the URL, so `$_GET` contains `a` and `b`. Writing `$_POST['a']` does not turn the request into POST.", uk: "Параметри знаходяться в URL, тому `$_GET` містить `a` і `b`. Запис `$_POST['a']` не перетворює запит на POST." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices fondamentaux PHP", en: "Fundamental PHP exercises", uk: "Базові вправи PHP" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire un petit script qui montre un message différent selon la valeur de `$heure` (matin/après-midi/soir).", en: "Write a small script showing a different message depending on `$heure` (morning/afternoon/evening).", uk: "Напиши невеликий скрипт, що показує різне повідомлення залежно від `$heure` (ранок/день/вечір)." },
            solution: { fr: "Utiliser `if ($heure < 12) ... elseif ($heure < 18) ... else ...`.", en: "Use `if ($heure < 12) ... elseif ($heure < 18) ... else ...`.", uk: "Використай `if ($heure < 12) ... elseif ($heure < 18) ... else ...`." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer pourquoi une variable locale n'est pas visible dans le programme principal.", en: "Explain why a local variable is not visible in the main program.", uk: "Поясни, чому локальна змінна не видима в основній програмі." },
            solution: { fr: "Elle n'existe qu'à l'intérieur de la fonction où elle est déclarée; la portée limite sa durée de vie à cette fonction.", en: "It only exists inside the function where declared; scope limits its lifetime to that function.", uk: "Вона існує лише всередині функції, де оголошена; область видимості обмежує її життя цією функцією." },
          },
        ],
      },
    ],
  },
];