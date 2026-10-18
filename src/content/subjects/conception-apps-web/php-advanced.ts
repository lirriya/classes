import type { Block } from "../../types";

export const phpAdvanced: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce chapitre approfondit les aspects serveur : en-têtes HTTP (redirection, type de contenu, téléchargement), sauvegarde de données dans des fichiers, sessions avancées et programmation objet. Ces notions sont utiles pour le projet (gestion utilisateurs, données, panier) et pour l'examen.",
      en: "This chapter deepens server-side aspects: HTTP headers (redirect, content type, download), data storage in files, advanced sessions and object-oriented programming. Useful for the project (users, data, cart) and exams.",
      uk: "Цей розділ поглиблює серверні аспекти: HTTP-заголовки (перенаправлення, тип вмісту, завантаження), збереження даних у файлах, розширені сесії та об'єктно-орієнтоване програмування. Корисно для проєкту (користувачі, дані, кошик) та іспитів.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. En-têtes HTTP et redirection", en: "1. HTTP headers & redirect", uk: "1. HTTP-заголовки та перенаправлення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "HTTP est sans état : serveur et client échangent des en-têtes avant le contenu. En PHP, `header()` envoie un en-tête HTTP et doit être appelé **avant tout affichage** (sinon erreur), sauf si une bufferisation (`ob_start`) est activée. `exit` arrête immédiatement le script après une redirection pour éviter d'exécuter la suite.",
      en: "HTTP is stateless: server and client exchange headers before content. In PHP, `header()` sends an HTTP header and must be called **before any output** (otherwise error), unless output buffering (`ob_start`) is enabled. `exit` stops the script immediately after a redirect to avoid further execution.",
      uk: "HTTP безстаневий: сервер та клієнт обмінюються заголовками до вмісту. У PHP `header()` надсилає HTTP-заголовок і має викликатися **до будь-якого виводу** (інакше помилка), якщо не увімкнено буферизацію (`ob_start`). `exit` зупиняє скрипт одразу після перенаправлення, щоб не виконувати подальший код.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  // redirection locale\n  header(\"Location: inscription.php\");\n  exit;\n\n  // envoi d'un fichier PDF\n  header(\"Content-Type: application/pdf\");\n  header('Content-Disposition: attachment; filename=\"document.pdf\"');\n?>",
    caption: { fr: "Exemples d'en-têtes HTTP", en: "HTTP header examples", uk: "Приклади HTTP-заголовків" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`Location`: redirige le navigateur vers une URL", en: "`Location`: redirects browser to URL", uk: "`Location`: перенаправляє браузер на URL" } },
      { text: { fr: "`Content-Type`: type MIME du document envoyé", en: "`Content-Type`: MIME type of sent document", uk: "`Content-Type`: MIME-тип надісланого документа" } },
      { text: { fr: "`Content-Disposition`: force le téléchargement ou l'affichage", en: "`Content-Disposition`: forces download or display", uk: "`Content-Disposition`: примушує завантаження або відображення" } },
      { text: { fr: "`Location` et `Content-Disposition` s'écrivent souvent avec apostrophes doubles ou simples selon les quotes internes", en: "`Location` and `Content-Disposition` quotes depend on inner string", uk: "Лапки в `Location` і `Content-Disposition` залежать від внутрішnieго рядка" } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace scénario de redirection : le navigateur demande `login.php`, reçoit un en-tête `Location: accueil.php`, puis demande automatiquement `accueil.php`. Si le script continue après `header('Location:...')` sans `exit`, il peut afficher du texte ou exécuter des instructions non souhaitées.",
      en: "Redirect scenario trace: browser requests `login.php`, receives `Location: home.php` header, then automatically requests `home.php`. If the script continues after `header('Location:...')` without `exit`, it may print text or run unwanted instructions.",
      uk: "Траса сценарію перенаправлення: браузер запитує `login.php`, отримує заголовок `Location: home.php`, потім автоматично запитує `home.php`. Якщо скрипт продовжується після `header('Location:...')` без `exit`, він може вивести текст або виконати небажані інструкції.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "header() et sortie", en: "header() & output", uk: "header() і вивід" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "On peut appeler `header()` après avoir affiché du HTML sans risque.", en: "You can safely call `header()` after printing HTML.", uk: "Можна безпечно викликати `header()` після виведення HTML." },
      answer: false,
      justification: { fr: "Un en-tête doit être envoyé avant le corps ; toute sortie préalable provoque une erreur.", en: "A header must precede body; prior output causes an error.", uk: "Заголовок має йти до тіла; попередній вивід спричиняє помилку." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "exit redirection", en: "exit redirect", uk: "exit перенаправлення" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Après une redirection `Location`, on doit écrire :", en: "After a `Location` redirect, you should write:", uk: "Після перенаправлення `Location` слід написати:" },
      options: [
        { text: { fr: "`header('Location: x'); echo 'Suite';`", en: "`header('Location: x'); echo 'Suite';`", uk: "`header('Location: x'); echo 'Suite';`" } },
        { text: { fr: "`header('Location: x'); exit;`", en: "`header('Location: x'); exit;`", uk: "`header('Location: x'); exit;`" } },
      ],
      answerIndex: 1,
      solution: { fr: "`exit` empêche l'exécution de code après l'en-tête de redirection.", en: "`exit` prevents execution of code after the redirect header.", uk: "`exit` запобігає виконанню коду після заголовка перенаправлення." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Téléversement de fichiers (upload)", en: "2. File upload", uk: "2. Завантаження файлів (upload)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un formulaire d'upload doit avoir `enctype=\"multipart/form-data\"`. PHP récupère le fichier dans `$_FILES`, contenant le nom original (`name`), le nom temporaire (`tmp_name`), la taille (`size`), le type MIME déclaré (`type`) et le code d'erreur (`error`). Pour mettre le fichier à un endroit permanent, on utilise `move_uploaded_file($tmp_name, $destination)` avec un dossier sûr (par exemple `upload/`).",
      en: "An upload form needs `enctype=\"multipart/form-data\"`. PHP stores the file in `$_FILES`, containing original name (`name`), temporary name (`tmp_name`), size (`size`), declared MIME type (`type`) and error code (`error`). To place the file permanently, use `move_uploaded_file($tmp_name, $destination)` in a safe folder (e.g. `upload/`).",
      uk: "Форма завантаження має мати `enctype=\"multipart/form-data\"`. PHP зберігає файл у `$_FILES`, що містить оригінальну назву (`name`), тимчасову назву (`tmp_name`), розмір (`size`), оголошений MIME-тип (`type`) та код помилки (`error`). Щоб розмістити файл постійно, використовуй `move_uploaded_file($tmp_name, $destination)` у безпечній папці (наприклад `upload/`).",
    },
  },
  {
    type: "code",
    lang: "html",
    text: "<form method=\"post\" enctype=\"multipart/form-data\" action=\"upload.php\">\\n  <input type=\"file\" name=\"fichier\">\\n  <input type=\"submit\" name=\"submit\" value=\"Envoyer\">\\n</form>",
    caption: { fr: "Formulaire d'upload", en: "Upload form", uk: "Форма завантаження" },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  if (isset($_FILES['fichier']) && $_FILES['fichier']['error'] === UPLOAD_ERR_OK) {\n    $tmp = $_FILES['fichier']['tmp_name'];\n    $nom = basename($_FILES['fichier']['name']);\n    $dest = 'upload/' . $nom;\n    if (move_uploaded_file($tmp, $dest)) {\n      echo 'Fichier televerse : ' . htmlspecialchars($nom);\n    } else {\n      echo 'Echec de sauvegarde';\n    }\n  }\n?>",
    caption: { fr: "Traitement d'un upload", en: "Upload processing", uk: "Обробка завантаження" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`$_FILES` n'existe pas sans un champ `type=\"file\"`", en: "`$_FILES` does not exist without a `type=\"file\"` field", uk: "`$_FILES` не існує без поля `type=\"file\"`" } },
      { text: { fr: "Vérifier le code d'erreur avant de déplacer", en: "Check error code before moving", uk: "Перевір код помилки перед переміщенням" } },
      { text: { fr: "Ne pas faire confiance au `type` fourni par le client pour la sécurité", en: "Do not trust client-provided `type` for security", uk: "Не довіряй `type`, оголошеному клієнтом, з міркувань безпеки" } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "enctype upload", en: "upload enctype", uk: "enctype upload" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quel attribut `enctype` faut-il pour envoyer un fichier ?", en: "Which `enctype` attribute is required to send a file?", uk: "Який атрибут `enctype` потрібний для надсилання файлу?" },
      options: [
        { text: { fr: "`application/x-www-form-urlencoded`", en: "`application/x-www-form-urlencoded`", uk: "`application/x-www-form-urlencoded`" } },
        { text: { fr: "`multipart/form-data`", en: "`multipart/form-data`", uk: "`multipart/form-data`" } },
        { text: { fr: "`text/plain`", en: "`text/plain`", uk: "`text/plain`" } },
      ],
      answerIndex: 1,
      solution: { fr: "Sans `multipart/form-data`, PHP ne reçoit pas correctement le fichier.", en: "Without `multipart/form-data`, PHP does not receive the file correctly.", uk: "Без `multipart/form-data` PHP не отримає файл коректно." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "move_uploaded_file", en: "move_uploaded_file", uk: "move_uploaded_file" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`move_uploaded_file()` vérifie en plus que le fichier vient bien d'un upload HTTP.", en: "`move_uploaded_file()` also verifies that the file comes from an HTTP upload.", uk: "`move_uploaded_file()` також перевіряє, що файл походить з HTTP-завантаження." },
      answer: true,
      justification: { fr: "C'est ce qui le distingue de `rename()` pour les uploads.", en: "That is what distinguishes it from `rename()` for uploads.", uk: "Це відрізняє його від `rename()` для завантажень." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Sauvegarde de données dans des fichiers", en: "3. Data storage in files", uk: "3. Збереження даних у файлах" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Sans base de données, on peut persister des données dans des fichiers locaux. PHP fournit `fopen`/`fgets`/`fclose` (lecture ligne par ligne) et des raccourcis `file()`, `file_get_contents()`, `file_put_contents()`. Pour sauvegarder une structure PHP, `var_export($var, true)` génère du code PHP réimportable via `include`. C'est utile pour stocker utilisateurs ou paniers dans le projet.",
      en: "Without a database, data can be persisted in local files. PHP provides `fopen`/`fgets`/`fclose` (line-by-line read) and shortcuts `file()`, `file_get_contents()`, `file_put_contents()`. To save a PHP structure, `var_export($var, true)` generates PHP code re-importable via `include`. Useful for storing users or carts in the project.",
      uk: "Без бази даних дані можна зберігати в локальних файлах. PHP надає `fopen`/`fgets`/`fclose` (читання рядок за рядком) і скорочення `file()`, `file_get_contents()`, `file_put_contents()`. Для збереження структури PHP `var_export($var, true)` генерує PHP-код, який можна повторно підключити через `include`. Корисно для збереження користувачів або кошика в проєкті.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  // export puis sauvegarde\n  $user = ['nom' => 'Harry', 'prenom' => 'Cover', 'age' => 19];\n  file_put_contents('user.inc.php', '<?php $user=' . var_export($user, true) . \"\\n;?>\");\n\n  // reimport\n  include('user.inc.php');\n  print_r($user);\n?>",
    caption: { fr: "Persistence d'un tableau PHP dans un fichier", en: "Persisting a PHP array in a file", uk: "Збереження PHP-масиву у файлі" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`fopen` modes : r/r+/w/w+/a/a+", en: "`fopen` modes: r/r+/w/w+/a/a+", uk: "`fopen` режими: r/r+/w/w+/a/a+" } },
      { text: { fr: "`fgets` lit jusqu'à newline/length", en: "`fgets` reads until newline/length", uk: "`fgets` читає до newline/довжини" } },
      { text: { fr: "Ne pas charger de gros fichiers en mémoire inutilement", en: "Avoid loading large files into memory unnecessarily", uk: "Уникай зайвого завантаження великих файлів у пам'ять" } },
    ],
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $n = 0;\n  if ($fp = fopen('data.txt', 'r')) {\n    while (!feof($fp)) {\n      $ligne = fgets($fp, 4096);\n      if (trim($ligne) !== '') $n++;\n    }\n    fclose($fp);\n    echo 'Lignes non vides: ' . $n;\n  }\n?>",
    caption: { fr: "Lecture ligne par ligne", en: "Line-by-line read", uk: "Читання рядок за рядком" },
  },
  {
    type: "checkpoint",
    concept: { fr: "var_export", en: "var_export", uk: "var_export" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`var_export($var, true)` renvoie une chaîne de code PHP représentant `$var` au lieu de l'afficher.", en: "`var_export($var, true)` returns a PHP code string representing `$var` instead of printing it.", uk: "`var_export($var, true)` повертає рядок PHP-коду, що представляє `$var`, замість його виведення." },
      answer: true,
      justification: { fr: "Avec `true`, la fonction renvoie le code ; sans, elle l'affiche directement.", en: "With `true`, it returns code; without, it prints directly.", uk: "З `true` повертає код; без нього друкує безпосередньо." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "fopen mode", en: "fopen mode", uk: "fopen режим" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Quel mode ouvre un fichier **en écriture**, en plaçant le pointeur au début et en tronquant la taille ?", en: "Which mode opens a file **for writing**, pointer at start, truncating size?", uk: "Який режим відкриває файл **для запису**, з покажчиком на початку і усіченням розміру?" },
      options: [
        { text: { fr: "`'a'`", en: "`'a'`", uk: "`'a'`" } },
        { text: { fr: "`'w'`", en: "`'w'`", uk: "`'w'`" } },
        { text: { fr: "`'r'`", en: "`'r'`", uk: "`'r'`" } },
      ],
      answerIndex: 1,
      solution: { fr: "`'w'` écrit à partir du début et efface le contenu existant.", en: "`'w'` writes from the start and erases existing content.", uk: "`'w'` записує з початку і стирає існуючий вміст." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Sessions avancées et gestion d'erreurs", en: "4. Advanced sessions & error handling", uk: "4. Розширені сесії та обробка помилок" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une session PHP compense le caractère sans état de HTTP : `session_start()` crée ou reprend la session, `$_SESSION` stocke les variables persistantes côté serveur, identifiées par un cookie (ou un paramètre d'URL). `session_destroy()` détruit les données. La gestion d'erreurs se configure avec `error_reporting()` et `display_errors` selon l'environnement (développement/examen/production).",
      en: "A PHP session compensates HTTP statelessness: `session_start()` creates or resumes a session, `$_SESSION` stores persistent server-side variables identified by a cookie (or URL param). `session_destroy()` destroys data. Error handling is configured with `error_reporting()` and `display_errors` depending on environment (dev/exam/production).",
      uk: "PHP-сесія компенсує безстаневість HTTP: `session_start()` створює або відновлює сесію, `$_SESSION` зберігає стійкі змінні на сервері, ідентифіковані cookie (або параметром URL). `session_destroy()` знищує дані. Обробку помилок налаштовують через `error_reporting()` і `display_errors` залежно від середовища (розробка/іспит/продакшен).",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  session_start();\n  $_SESSION['panier'] = ['pomme' => 3];\n  // plus tard, dans un autre fichier\n  session_start();\n  $panier = $_SESSION['panier'] ?? [];\n  print_r($panier);\n?>",
    caption: { fr: "Partage d'un panier via $_SESSION", en: "Sharing a cart via $_SESSION", uk: "Спільне використання кошика через $_SESSION" },
  },
  {
    type: "checkpoint",
    concept: { fr: "session_destroy", en: "session_destroy", uk: "session_destroy" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Après `session_destroy()`, `$_SESSION` est immédiatement vidé dans la même requête.", en: "After `session_destroy()`, `$_SESSION` is immediately emptied in the same request.", uk: "Після `session_destroy()` `$_SESSION` одразу очищається в тому самому запиті." },
      answer: false,
      justification: { fr: "La session est marquée détruite; `$_SESSION` peut encore exister jusqu'à la fin de la requête, mais la prochaine fois elle sera vide.", en: "The session is marked destroyed; `$_SESSION` may still exist until request end, but next time empty.", uk: "Сесію позначено знищеною; `$_SESSION` може існувати до кінця запиту, але наступного разу буде порожньою." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. Programmation orientée objet en PHP", en: "5. Object-oriented PHP", uk: "5. Об'єктно-орієнтований PHP" },
  },
  {
    type: "paragraph",
    text: {
      fr: "PHP permet de définir des classes et objets : une classe décrit propriétés et méthodes; `new` instancie; l'opérateur `->` accède aux membres; `extends` permet l'héritage; le constructeur porte le nom de la classe (PHP 4/5 ancien) ou `__construct`. C'est utile pour modéliser un panier, un utilisateur ou une commande dans le projet.",
      en: "PHP allows classes and objects: a class describes properties/methods; `new` instantiates; `->` accesses members; `extends` enables inheritance; constructor shares class name (old PHP 4/5) or `__construct`. Useful to model cart, user, or order in the project.",
      uk: "PHP дозволяє визначати класи й об'єкти: клас описує властивості/методи; `new` створює екземпляр; `->` звертається до членів; `extends` забезпечує успадкування; конструктор має ім'я класу (старий PHP 4/5) або `__construct`. Корисно для моделювання кошика, користувача або замовлення в проєкті.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  class Caddie {\n    var $Contenu = [];\n    function AjouteElement($element, $nombre) {\n      $this->Contenu[$element] = ($this->Contenu[$element] ?? 0) + $nombre;\n    }\n  }\n  $c = new Caddie();\n  $c->AjouteElement(\"pomme\", 3);\n  print_r($c->Contenu);\n?>",
    caption: { fr: "Classe Caddie minimaliste", en: "Minimal Caddie class", uk: "Мінімальний клас Caddie" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace OOP : `new Caddie()` crée un objet vide (`$c->Contenu` = []). L'appel `$c->AjouteElement('pomme', 3)` modifie l'objet en ajoutant `'pomme' => 3`. `$this` désigne l'instance courante.",
      en: "OOP trace: `new Caddie()` creates an empty object (`$c->Contenu` = []). Call `$c->AjouteElement('pomme', 3)` modifies object by adding `'pomme' => 3`. `$this` denotes current instance.",
      uk: "Траса ООП: `new Caddie()` створює порожній об'єкт (`$c->Contenu` = []). Виклик `$c->AjouteElement('pomme', 3)` змінює об'єкт, додаючи `'pomme' => 3`. `$this` позначає поточний екземпляр.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Héritage", en: "Inheritance", uk: "Успадкування" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "En PHP, une classe peut hériter d'une autre via le mot-clé `extends`.", en: "In PHP, a class can inherit from another using `extends`.", uk: "У PHP клас може успадковувати інший через ключове слово `extends`." },
      answer: true,
      justification: { fr: "PHP ne supporte pas l'héritage multiple, mais une classe peut étendre une seule classe parente.", en: "PHP doesn't support multiple inheritance, but a class can extend one parent class.", uk: "PHP не підтримує множинне успадковування, але клас може розширювати один батьківський клас." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "this", en: "this", uk: "this" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Dans une méthode d'instance, `$this` représente :", en: "Inside an instance method, `$this` represents:", uk: "Всередині методу екземпляра `$this` позначає:" },
      options: [
        { text: { fr: "la classe courante", en: "the current class", uk: "поточний клас" } },
        { text: { fr: "l'instance courante", en: "the current instance", uk: "поточний екземпляр" } },
        { text: { fr: "le fichier courant", en: "the current file", uk: "поточний файл" } },
      ],
      answerIndex: 1,
      solution: { fr: "`$this` fait référence à l'objet sur lequel la méthode a été appelée.", en: "`$this` refers to the object on which the method was called.", uk: "`$this` посилається на об'єкт, на якому викликали метод." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices avancés", en: "Advanced exercises", uk: "Розширені вправи" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrivez un programme PHP qui lit un fichier `data.txt` ligne par ligne et affiche le nombre de lignes non vides.", en: "Write a PHP program reading `data.txt` line by line and displaying number of non-empty lines.", uk: "Напиши PHP-програму, що читає `data.txt` рядок за рядком і виводить кількість непорожніх рядків." },
            solution: { fr: "Utiliser `fopen('data.txt','r')`, `while(!feof($fp)){ $l=fgets($fp); if(trim($l)!=='') $n++; }`, puis `fclose` et `echo $n`.", en: "Use fopen, while not feof, fgets, trim check, fclose, echo count.", uk: "Використай fopen, while not feof, fgets, перевірку trim, fclose, echo кількості." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer comment persister un tableau `$panier` entre deux requêtes HTTP avec les sessions.", en: "Explain how to persist a `$panier` array across two HTTP requests with sessions.", uk: "Поясни, як зберегти масив `$panier` між двома HTTP-запитами за допомогою сесій." },
            solution: { fr: "`session_start(); $_SESSION['panier']=$panier;` puis au chargement suivant `session_start(); $panier=$_SESSION['panier'] ?? [];`.", en: "Use session_start and $_SESSION as shown.", uk: "Використай session_start і $_SESSION, як показано." },
          },
          {
            kind: "open",
            prompt: { fr: "Expliquer pourquoi `move_uploaded_file()` est préférable à `rename()` pour un fichier téléversé.", en: "Explain why `move_uploaded_file()` is preferable to `rename()` for an uploaded file.", uk: "Поясни, чому `move_uploaded_file()` кращий за `rename()` для завантаженого файлу." },
            solution: { fr: "`move_uploaded_file()` vérifie que le fichier provient d'un téléchargement HTTP, ce que `rename()` ne fait pas.", en: "`move_uploaded_file()` verifies the file came from an HTTP upload, unlike `rename()`.", uk: "`move_uploaded_file()` перевіряє, що файл походить із HTTP-завантаження, на відміну від `rename()`." },
          },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Fichier headers.php", en: "headers.php", uk: "headers.php" },
    exercise: {
      kind: "open",
      prompt: { fr: "Justifier pourquoi l'en-tête `Content-Disposition: attachment` est utile pour envoyer un fichier PDF.", en: "Explain why `Content-Disposition: attachment` is useful for sending a PDF file.", uk: "Поясни, чому заголовок `Content-Disposition: attachment` корисний при надсиланні PDF-файлу." },
      solution: { fr: "Il demande au navigateur de télécharger le fichier au lieu de l'afficher dans la page.", en: "It asks the browser to download the file instead of displaying it in the page.", uk: "Він просить браузер завантажити файл замість того, щоб показати його на сторінці." },
    },
  },
];