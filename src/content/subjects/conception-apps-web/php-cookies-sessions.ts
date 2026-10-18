import type { Block } from "../../types";

export const phpCookiesSessions: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "**HTTP est un protocole sans état** : chaque requête est indépendante et le serveur ne se souvient pas automatiquement de ce que l'utilisateur a fait auparavant. Les **cookies** et les **sessions** servent à garder une mémoire à travers les pages.",
      en: "**HTTP is a stateless protocol**: each request is independent and the server does not automatically remember what the user did before. **Cookies** and **sessions** are used to keep memory across pages.",
      uk: "**HTTP — безстаневий протокол**: кожен запит незалежний, і сервер не запам'ятовує автоматично, що користувач робив раніше. **Cookies** і **sessions** використовують, щоб зберігати пам'ять між сторінками.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Cookies avec setcookie et $_COOKIE", en: "1. Cookies with setcookie and $_COOKIE", uk: "1. Cookies з setcookie та $_COOKIE" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **cookie** est une petite donnée stockée côté client (navigateur) par le serveur. En PHP, `setcookie('nom', 'valeur')` envoie un ordre de stockage dans les en-têtes HTTP. La superglobale `$_COOKIE` contient les cookies déjà envoyés par le client au moment de la requête. Point crucial : après `setcookie()`, `$_COOKIE` **n'est pas mis à jour** dans la même requête; il le sera au prochain chargement.",
      en: "A **cookie** is small data stored client-side (browser) by the server. In PHP, `setcookie('name', 'value')` sends a storage instruction in HTTP headers. `$_COOKIE` contains cookies already sent by the client at request time. Crucial point: after `setcookie()`, `$_COOKIE` is **not updated** in the same request; it will be on the next load.",
      uk: "**Cookie** — це невеликі дані, що зберігаються на клієнті (у браузері) за вказівкою сервера. У PHP `setcookie('name', 'value')` надсилає інструкцію зберігання в HTTP-заголовках. `$_COOKIE` містить cookie, які клієнт już надіслав у момент запиту. Важливий момент: після `setcookie()` `$_COOKIE` **не оновлюється** в тому самому запиті; це станеться при наступному завантаженні.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  if (isset($_COOKIE['i'])) {\n    setcookie('i', $_COOKIE['i'] + 1);\n  } else {\n    setcookie('i', 1);\n  }\n  setcookie('j', 'youpi');\n  echo $_COOKIE['i'] ?? 'non defini';\n  if (isset($_COOKIE['j'])) {\n    echo 'OK';\n  } else {\n    echo 'no';\n  }\n?>",
    caption: { fr: "Compteur de visites avec cookie", en: "Visit counter with cookie", uk: "Лічильник відвідувань через cookie" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Trace pas à pas du cycle de vie", en: "Step-by-step cookie lifecycle trace", uk: "Покрокова траса життєвого циклу cookie" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Premier chargement** : le navigateur n'envoie aucun cookie. PHP exécute `isset($_COOKIE['i'])` → faux, donc `setcookie('i', 1)` et `setcookie('j', 'youpi')` sont envoyés pour le prochain chargement. Dans la même requête, `$_COOKIE` reste vide. Donc `echo` affiche `non defini`, puis `isset($_COOKIE['j'])` est faux et affiche `no`. **Deuxième chargement** : le navigateur renvoie `i=1` et `j=youpi`. `isset($_COOKIE['i'])` est vrai, donc `i` passe à 2. Ensuite `$_COOKIE['i']` existe maintenant et vaut 1, donc l'affichage devient `1`? Attention : la valeur affichée dans cette même requête est l'ancienne valeur lue (`1`), puis le cookie est mis à jour pour la suite. `$_COOKIE['j']` existe, donc `OK`. Résultat visible typique : deuxième chargement `1OK` puis troisième `2OK`.",
      en: "**First load**: the browser sends no cookies. PHP executes `isset($_COOKIE['i'])` → false, so `setcookie('i', 1)` and `setcookie('j', 'youpi')` are sent for the next load. In the same request, `$_COOKIE` remains empty. So `echo` prints `non defini`, then `isset($_COOKIE['j'])` is false and prints `no`. **Second load**: browser sends `i=1` and `j=youpi`. `isset($_COOKIE['i'])` is true, so `i` becomes 2. Then `$_COOKIE['i']` exists and is 1 in this request, so printed `1`, then `OK`. Typical visible result: second load `1OK`, third load `2OK`.",
      uk: "**Перше завантаження**: браузер не надсилає cookie. PHP виконує `isset($_COOKIE['i'])` → хибно, тому `setcookie('i', 1)` і `setcookie('j', 'youpi')` надсилаються для наступного завантаження. У тому самому запиті `$_COOKIE` залишається порожнім. Тому `echo` виводить `non defini`, потім `isset($_COOKIE['j'])` хибне і виводить `no`. **Друге завантаження**: браузер надсилає `i=1` і `j=youpi`. `isset($_COOKIE['i'])` істинне, тому `i` стає 2. Потім `$_COOKIE['i']` існує і дорівнює 1 у цьому запиті, тож виводить `1`, потім `OK`. Типовий видимий результат: друге завантаження `1OK`, третє `2OK`.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  setcookie('panier[1]', 'qte:10/produit:73');\n  setcookie('panier[2]', 'qte:2/produit:454');\n?>\n<?php\n  if (isset($_COOKIE['panier']) && is_array($_COOKIE['panier'])) {\n    foreach ($_COOKIE['panier'] as $produit) {\n      echo $produit . \"\\n\";\n    }\n  }\n?>",
    caption: { fr: "Cookie array pour un panier", en: "Array cookie for a cart", uk: "Cookie-масив для кошика" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Cycle cookie", en: "Cookie cycle", uk: "Цикл cookie" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "Après `setcookie('i', 1)`, la valeur est immédiatement visible dans `$_COOKIE['i']` dans le même fichier PHP.", en: "After `setcookie('i', 1)`, the value is immediately visible in `$_COOKIE['i']` in the same PHP file.", uk: "Після `setcookie('i', 1)` значення одразу видиме в `$_COOKIE['i']` в тому самому PHP-файлі." },
      answer: false,
      justification: { fr: "`setcookie()` prépare le cookie pour la prochaine requête ; `$_COOKIE` n'est pas mis à jour maintenant.", en: "`setcookie()` prepares the cookie for the next request; `$_COOKIE` is not updated now.", uk: "`setcookie()` готує cookie для наступного запиту; `$_COOKIE` зараз не оновлюється." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "setcookie expiration", en: "setcookie expiration", uk: "термін дії setcookie" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pour créer un cookie qui expire dans une heure, on écrit :", en: "To create a cookie expiring in one hour, write:", uk: "Щоб створити cookie, що закінчується через годину, пишуть:" },
      options: [
        { text: { fr: "`setcookie('nom', $val, time() + 3600);`", en: "`setcookie('nom', $val, time() + 3600);`", uk: "`setcookie('nom', $val, time() + 3600);`" } },
        { text: { fr: "`setcookie('nom', $val, 3600);`", en: "`setcookie('nom', $val, 3600);`", uk: "`setcookie('nom', $val, 3600);`" } },
        { text: { fr: "`setcookie('nom', $val, time() - 3600);`", en: "`setcookie('nom', $val, time() - 3600);`", uk: "`setcookie('nom', $val, time() - 3600);`" } },
      ],
      answerIndex: 0,
      solution: { fr: "Le troisième paramètre est un timestamp Unix absolu; `time() + 3600` signifie « dans une heure ».", en: "The third parameter is an absolute Unix timestamp; `time() + 3600` means “in one hour”.", uk: "Третій параметр — абсолютна мітка часу Unix; `time() + 3600` означає “через годину”." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Sessions PHP", en: "2. PHP sessions", uk: "2. PHP-сесії" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une **session** garde des informations côté serveur entre les requêtes. Chaque visiteur reçoit un identifiant de session (stocké dans un cookie ou dans l'URL) qui pointe vers un fichier sur le serveur. Les données de la session sont disponibles dans `$_SESSION`. Pour démarrer ou continuer une session, il faut appeler `session_start()` **avant** tout affichage. On peut lire, modifier et supprimer des variables, puis détruire la session avec `session_destroy()`.",
      en: "A **session** keeps information server-side between requests. Each visitor receives a session id (stored in a cookie or URL) pointing to a file on the server. Session data is available in `$_SESSION`. To start or continue a session, call `session_start()` **before** any output. You can read, modify and delete variables, then destroy the session with `session_destroy()`.",
      uk: "**Сесія** зберігає інформацію на сервері між запитами. Кожен відвідувач отримує ідентифікатор сесії (у cookie або URL), що вказує на файл на сервері. Дані сесії доступні в `$_SESSION`. Щоб запустити або продовжити сесію, потрібно викликати `session_start()` **до** будь-якого виводу. Можна читати, змінювати і видаляти змінні, а потім знищити сесію через `session_destroy()`.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  session_start();\n  $_SESSION['MaVariable'] = ($_SESSION['MaVariable'] ?? 0) + 1;\n  echo \"Ma variable vaut \" . $_SESSION['MaVariable'];\n?>\n<a href=\"suite.php\">Page suivante</a>",
    caption: { fr: "Compteur de session", en: "Session counter", uk: "Лічильник сесії" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Trace : au premier chargement, `$_SESSION['MaVariable']` n'existe pas, donc `?? 0` donne 0, puis `+1` donne 1. La page affiche `Ma variable vaut 1`. Au deuxième chargement, la valeur stockée est 1, donc elle devient 2. L'identifiant de session est propagé automatiquement par PHP, souvent par un cookie nommé `PHPSESSID`.",
      en: "Trace: on first load, `$_SESSION['MaVariable']` does not exist, so `?? 0` gives 0, then `+1` gives 1. The page prints `Ma variable vaut 1`. On second load, stored value is 1, so it becomes 2. The session id is propagated automatically by PHP, often via a cookie named `PHPSESSID`.",
      uk: "Траса: при першому завантаженні `$_SESSION['MaVariable']` не існує, тому `?? 0` дає 0, а `+1` дає 1. Сторінка виводить `Ma variable vaut 1`. При другому завантаженні збережене значення 1, тому стає 2. Ідентифікатор сесії поширюється автоматично PHP, часто через cookie з назвою `PHPSESSID`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "session_start ordre", en: "session_start order", uk: "порядок session_start" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`session_start()` peut être appelé après un `echo` sans problème.", en: "`session_start()` can be called after an `echo` without problem.", uk: "`session_start()` можна викликати після `echo` без проблем." },
      answer: false,
      justification: { fr: "Il faut démarrer la session avant toute sortie, sinon PHP ne peut plus envoyer le cookie d'identifiant.", en: "The session must start before any output, otherwise PHP cannot send the id cookie.", uk: "Сесію треба починати до будь-якого виводу, інакше PHP не зможе надіслати cookie ідентифікатора." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Tableaux 1D, 2D et multidimensionnels", en: "3. 1D, 2D and multidimensional arrays", uk: "3. Одновимірні, двовимірні та багатовимірні масиви" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **tableau** est une structure qui contient plusieurs valeurs associées à des clés. En PHP, un tableau est une map ordonnée. Les clés peuvent être numériques ou textuelles. Un tableau peut contenir d'autres tableaux, ce qui permet de représenter des structures complexes comme un catalogue avec catégories et produits.",
      en: "An **array** is a structure containing several values associated with keys. In PHP, an array is an ordered map. Keys can be numeric or textual. An array can contain other arrays, which allows representing complex structures such as a catalog with categories and products.",
      uk: "**Масив** — це структура, що містить кілька значень, прив'язаних до ключів. У PHP масив — це впорядкована мапа. Ключі можуть бути числовими або текстовими. Масив може містити інші масиви, що дозволяє представляти складні структури, наприклад каталог з категоріями та товарами.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  $menus = [\n    'lundi' => [\n      'entree' => 'salade',\n      'plat' => 'pates',\n      'dessert' => 'pomme'\n    ],\n    'mardi' => [\n      'entree' => 'soupe',\n      'plat' => 'riz',\n      'dessert' => 'yaourt'\n    ]\n  ];\n  echo $menus['lundi']['plat']; // pates\n\n  foreach ($menus as $jour => $menu) {\n    echo $jour . \" : \" . $menu['plat'] . \"\\n\";\n  }\n?>",
    caption: { fr: "Tableau multidimensionnel", en: "Multidimensional array", uk: "Багатовимірний масив" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Attention aux clés automatiques : si on omet la clé, PHP attribue un entier incrémenté. Les clés textuelles ressemblant à des entiers (`'8'`) peuvent être converties en entiers. Pour parcourir un tableau avec clé et valeur, on utilise `foreach ($tab as $cle => $valeur)`. Pour modifier les valeurs pendant le parcours, on écrit dans `$tab[$cle]`.",
      en: "Beware automatic keys: if the key is omitted, PHP assigns an incremented integer. Textual keys resembling integers (`'8'`) can be converted to integers. To iterate with key and value, use `foreach ($tab as $key => $value)`. To modify values during iteration, write to `$tab[$key]`.",
      uk: "Будь обережний з автоматичними ключами: якщо ключ пропущено, PHP призначає збільшуване ціле число. Текстові ключі, що виглядають як числа (`'8'`), можуть бути перетворені на числа. Щоб перебрати ключ і значення, використовуй `foreach ($tab as $key => $value)`. Щоб змінити значення під час перебору, записуй у `$tab[$key]`.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Tableau 2D", en: "2D array", uk: "2D масив" },
    exercise: {
      kind: "trueFalse",
      prompt: { fr: "`$t['A']['B']` permet d'accéder à une valeur dans un tableau 2D associatif.", en: "`$t['A']['B']` accesses a value in a 2D associative array.", uk: "`$t['A']['B']` дозволяє доступ до значення в асоціативному 2D-масиві." },
      answer: true,
      justification: { fr: "Chaque accès imbriqué descend d'un niveau dans le tableau.", en: "Each nested access goes down one level in the array.", uk: "Кожен вкладений доступ спускається на один рівень масиву." },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "foreach modification", en: "foreach modification", uk: "модифікація foreach" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Pour modifier les valeurs d'un tableau pendant un `foreach`, la technique sûre est :", en: "To modify array values during `foreach`, the safe technique is:", uk: "Для зміни значень масиву під час `foreach` безпечна техніка:" },
      options: [
        { text: { fr: "parcourir seulement les valeurs avec `foreach ($t as $v)` et modifier `$v`", en: "iterate values only with `foreach ($t as $v)` and modify `$v`", uk: "перебирати лише значення через `foreach ($t as $v)` і змінювати `$v`" } },
        { text: { fr: "utiliser `foreach ($t as $k => $v)` et assigner `$t[$k] = ...`", en: "use `foreach ($t as $k => $v)` and assign `$t[$k] = ...`", uk: "використати `foreach ($t as $k => $v)` і присвоїти `$t[$k] = ...`" } },
      ],
      answerIndex: 1,
      solution: { fr: "Modifier `$v` ne change pas le tableau source; il faut modifier `$t[$k]`.", en: "Modifying `$v` does not change the source array; modify `$t[$k]`.", uk: "Зміна `$v` не змінює початковий масив; треба змінювати `$t[$k]`." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. include et require", en: "4. include and require", uk: "4. include та require" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**`include`** et **`require`** permettent d'insérer dans le fichier courant le contenu d'un autre fichier PHP. Cela évite la duplication de code : on partage des fonctions, des paramètres ou du HTML commun. La différence importante : `include` produit un **warning** si le fichier est introuvable et continue; `require` produit une **erreur fatale** et arrête le script. Les variantes `_once` évitent de réinclure un même fichier plusieurs fois.",
      en: "**`include`** and **`require`** insert another PHP file's content into the current file. This avoids code duplication: share functions, settings or common HTML. Key difference: `include` gives a **warning** if file is missing and continues; `require` gives a **fatal error** and stops. `_once` variants avoid including the same file multiple times.",
      uk: "**`include`** і **`require`** вставляють вміст іншого PHP-файлу в поточний файл. Це дозволяє уникнути дублювання коду: спільні функції, параметри або загальний HTML. Ключова різниця: `include` дає **warning**, якщо файл відсутній, і продовжує; `require` дає **фатальну помилку** і зупиняється. Варіанти `_once` запобігають повторному підключенню того самого файлу.",
    },
  },
  {
    type: "code",
    lang: "php",
    text: "<?php\n  require_once 'data.inc.php';\n  require_once 'functions.inc.php';\n  include 'header.inc.php';\n?>",
    caption: { fr: "Chargement de fichiers partagés", en: "Loading shared files", uk: "Підключення спільних файлів" },
  },
  {
    type: "checkpoint",
    concept: { fr: "include vs require", en: "include vs require", uk: "include vs require" },
    exercise: {
      kind: "mcq",
      prompt: { fr: "Si un fichier inclus est introuvable, lequel arrête le script ?", en: "If an included file is not found, which one stops the script?", uk: "Якщо підключений файл не знайдено, який варіант зупиняє скрипт?" },
      options: [
        { text: { fr: "`include`", en: "`include`", uk: "`include`" } },
        { text: { fr: "`require`", en: "`require`", uk: "`require`" } },
      ],
      answerIndex: 1,
      solution: { fr: "`require` est plus strict : erreur fatale et arrêt. `include` continue avec un warning.", en: "`require` is stricter: fatal error and stop. `include` continues with a warning.", uk: "`require` суворіший: фатальна помилка і зупинка. `include` продовжує з warning." },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. Exercices type CC1", en: "5. CC1-style exercises", uk: "5. Вправи типу КК1" },
  },
  {
    type: "checkpoint",
    concept: { fr: "Cookie exam", en: "Cookie exam", uk: "Екзамен з cookie" },
    exercise: {
      kind: "open",
      prompt: { fr: "Expliquez ce que produit le code ci-dessous au 1er puis au 2e chargement.\n\n```php\n<?php\nif (isset($_COOKIE['i'])) setcookie('i', $_COOKIE['i'] + 1);\nelse setcookie('i', 1);\nsetcookie('j', 'youpi');\necho $_COOKIE['i'];\nif (isset($_COOKIE['j'])) echo 'OK';\n?>\n```", en: "Explain what this code produces on 1st and 2nd load.\n\n```php\n<?php\nif (isset($_COOKIE['i'])) setcookie('i', $_COOKIE['i'] + 1);\nelse setcookie('i', 1);\nsetcookie('j', 'youpi');\necho $_COOKIE['i'];\nif (isset($_COOKIE['j'])) echo 'OK';\n?>\n```", uk: "Поясни, що виводить код при 1-му і 2-му завантаженні.\n\n```php\n<?php\nif (isset($_COOKIE['i'])) setcookie('i', $_COOKIE['i'] + 1);\nelse setcookie('i', 1);\nsetcookie('j', 'youpi');\necho $_COOKIE['i'];\nif (isset($_COOKIE['j'])) echo 'OK';\n?>\n```" },
      solution: { fr: "1er chargement : `$_COOKIE` est vide dans cette requête, donc `echo $_COOKIE['i']` peut être indéfini/notice et `OK` n'est pas affiché. 2e chargement : `$_COOKIE['i']=1` et `$_COOKIE['j']='youpi'`, donc `i` s'incrémente pour la suite, echo lit l'ancienne valeur 1 et affiche `OK` → visible `1OK`.", en: "1st load: `$_COOKIE` empty in this request, so echo can be undefined/notice and `OK` not shown. 2nd load: `$_COOKIE['i']=1` and `$_COOKIE['j']='youpi'`, so `i` increments for next time, echo reads old value 1 and prints `OK` → visible `1OK`.", uk: "1-е завантаження: у цьому запиті `$_COOKIE` порожній, тому echo може бути невизначеним/notice, а `OK` не показується. 2-е завантаження: `$_COOKIE['i']=1` і `$_COOKIE['j']='youpi'`, отже `i` збільшується на майбутнє, echo читає старе значення 1 і виводить `OK` → видно `1OK`." },
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercices mémoire et partage", en: "Memory and sharing exercises", uk: "Вправи з пам'яті та спільного коду" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Expliquer la différence entre stocker un compteur de visites dans un cookie et dans une session.", en: "Explain the difference between storing a visit counter in a cookie and in a session.", uk: "Поясни різницю між зберіганням лічильника відвідувань у cookie і в сесії." },
            solution: { fr: "Cookie : donnée stockée côté client, modifiable et envoyée à chaque requête. Session : donnée côté serveur, identifiée par un cookie, plus adaptée aux données sensibles.", en: "Cookie: client-stored data, modifiable and sent every request. Session: server-side data identified by a cookie, better for sensitive data.", uk: "Cookie: дані на клієнті, змінювані і надсилаються щоразу. Сесія: дані на сервері, ідентифіковані cookie, краще для чутливих даних." },
          },
          {
            kind: "open",
            prompt: { fr: "Donner un cas où `require_once` est préférable à `require`.", en: "Give a case where `require_once` is preferable to `require`.", uk: "Наведи випадок, коли `require_once` кращий за `require`." },
            solution: { fr: "Quand un fichier de fonctions ou de données peut être inclus par plusieurs fichiers ou en cascade.", en: "When a function/data file may be included by several files or in a cascade.", uk: "Коли файл функцій/даних може підключатися кількома файлами або каскадно." },
          },
        ],
      },
    ],
  },
];