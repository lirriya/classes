import type { Subject } from "../../types";
import { phpBasics } from "./php-basics";
import { phpForms } from "./php-forms";
import { phpCookiesSessions } from "./php-cookies-sessions";
import { phpAdvanced } from "./php-advanced";
import { tdPhp } from "./td-php";
import { javascript } from "./javascript";
import { domEvents } from "./dom-events";
import { jquery } from "./jquery";
import { ajax } from "./ajax";
import { tdJavascript } from "./td-javascript";
import { annalesCc1 } from "./annales-cc1";
import { cc1Cheatsheet } from "./cheatsheet-cc1";

export const conceptionAppsWeb: Subject = {
  slug: "conception-apps-web",
  title: {
    fr: "Conception d'applications Web",
    en: "Web Applications Design",
    uk: "Проєктування веб-застосунків",
  },
  date: {
    fr: "Semestre WEB2",
    en: "WEB2 semester",
    uk: "Семестр WEB2",
  },
  status: "published",
  summary: {
    fr: "Applications web complètes : PHP côté serveur (dynamique/statique, GET/POST, formulaires, validation, cookies/sessions, tableaux) + JavaScript/jQuery/AJAX côté client. Axé sur l'entraînement type CC1/CC2 (trace de code + écriture).",
    en: "Complete web apps: server-side PHP (dynamic/static, GET/POST, forms, validation, cookies/sessions, arrays) + client-side JavaScript/jQuery/AJAX. Focused on CC1/CC2-style practice (code tracing + coding).",
    uk: "Повноцінні вебзастосунки: PHP на сервері (динаміка/статика, GET/POST, форми, валідація, cookies/сесії, масиви) + JavaScript/jQuery/AJAX на клієнті. Орієнтовано на підготовку до КК1/КК2 (траса коду + написання коду).",
  },
  classes: [
    {
      title: {
        fr: "CM1 - PHP fondamentaux",
        en: "CM1 - PHP Fundamentals",
        uk: "ЛК1 - Основи PHP",
      },
      label: { fr: "CM1", en: "CM1", uk: "ЛК1" },
      blocks: phpBasics,
      parts: [
        { id: "p1", label: { fr: "1. Pages statiques vs dynamiques", en: "1. Static vs dynamic pages", uk: "1. Статичні vs динамічні сторінки" } },
        { id: "p2", label: { fr: "2. Principe PHP + serveur web", en: "2. PHP + web server principle", uk: "2. Принцип PHP + вебсервер" } },
        { id: "p3", label: { fr: "3. Variables, echo, structures", en: "3. Variables, echo, control structures", uk: "3. Змінні, echo, керуючі конструкції" } },
        { id: "p4", label: { fr: "4. GET, URL et passage de paramètres", en: "4. GET, URL parameters", uk: "4. GET, параметри в URL" } },
        { id: "p5", label: { fr: "5. Entraînement trace de code", en: "5. Code tracing practice", uk: "5. Тренування трасування коду" } },
      ],
    },
    {
      title: {
        fr: "CM2 - Formulaires, validation, réaffichage",
        en: "CM2 - Forms, validation, re-display",
        uk: "ЛК2 - Форми, валідація, повторне відображення",
      },
      label: { fr: "CM2", en: "CM2", uk: "ЛК2" },
      blocks: phpForms,
      parts: [
        { id: "p1", label: { fr: "1. Formulaires HTML + POST", en: "1. HTML forms + POST", uk: "1. HTML-форми + POST" } },
        { id: "p2", label: { fr: "2. Récupération des données ($_POST)", en: "2. Getting data ($_POST)", uk: "2. Отримання даних ($_POST)" } },
        { id: "p3", label: { fr: "3. Validation & messages", en: "3. Validation & messages", uk: "3. Валідація та повідомлення" } },
        { id: "p4", label: { fr: "4. preg_match (expressions régulières)", en: "4. preg_match (regex)", uk: "4. preg_match (регулярні вирази)" } },
        { id: "p5", label: { fr: "5. Réaffichage du formulaire", en: "5. Form re-display", uk: "5. Повторне відображення форми" } },
        { id: "p6", label: { fr: "6. Trace/écriture type CC1", en: "6. CC1-style tracing/writing", uk: "6. Трасування/написання коду типу КК1" } },
      ],
    },
    {
      title: {
        fr: "CM3 - Cookies, tableaux, includes",
        en: "CM3 - Cookies, arrays, includes",
        uk: "ЛК3 - Cookies, масиви, include",
      },
      label: { fr: "CM3", en: "CM3", uk: "ЛК3" },
      blocks: phpCookiesSessions,
      parts: [
        { id: "p1", label: { fr: "1. Cookies : setcookie et $_COOKIE", en: "1. Cookies: setcookie & $_COOKIE", uk: "1. Cookies: setcookie та $_COOKIE" } },
        { id: "p2", label: { fr: "2. Cycle de vie des cookies", en: "2. Cookie lifecycle", uk: "2. Життєвий цикл cookie" } },
        { id: "p3", label: { fr: "3. Tableaux 1D/2D + multidimensionnels", en: "3. 1D/2D/multidimensional arrays", uk: "3. Одновим./багатовим. масиви" } },
        { id: "p4", label: { fr: "4. include/require (.inc.php)", en: "4. include/require (.inc.php)", uk: "4. include/require (.inc.php)" } },
        { id: "p5", label: { fr: "5. Exercices trace type CC1", en: "5. CC1-style trace exercises", uk: "5. Вправи на трасування типу КК1" } },
      ],
    },
    {
      title: {
        fr: "TD PHP - Entraînement",
        en: "TD PHP - Practice",
        uk: "ПР PHP - Тренування",
      },
      label: { fr: "TD1", en: "TD1", uk: "ПР1" },
      blocks: tdPhp,
      parts: [
        { id: "p1", label: { fr: "1. Affichage, variables, boucles", en: "1. Display, vars, loops", uk: "1. Вивід, змінні, цикли" } },
        { id: "p2", label: { fr: "2. Formulaire + appel", en: "2. Form + call", uk: "2. Форма + виклик" } },
        { id: "p3", label: { fr: "3. Vérification de formulaire", en: "3. Form verification", uk: "3. Перевірка форми" } },
        { id: "p4", label: { fr: "4. Réaffichage du formulaire", en: "4. Form re-display", uk: "4. Повторне відображення форми" } },
      ],
    },
    {
      title: {
        fr: "CM4 - JavaScript fondamentaux (client)",
        en: "CM4 - JavaScript Fundamentals (client)",
        uk: "CM4 - Основи JavaScript (клієнт)",
      },
      label: { fr: "CM4", en: "CM4", uk: "CM4" },
      blocks: javascript,
      parts: [
        { id: "p1", label: { fr: "1. Intégration et principes", en: "1. Integration & principles", uk: "1. Інтеграція та принципи" } },
        { id: "p2", label: { fr: "2. Variables, fonctions, structures", en: "2. Variables, functions, structures", uk: "2. Змінні, функції, конструкції" } },
        { id: "p3", label: { fr: "3. Objets et tableaux", en: "3. Objects & arrays", uk: "3. Об'єкти і масиви" } },
        { id: "p4", label: { fr: "4. Chaînes, regex, nombres", en: "4. Strings, regex, numbers", uk: "4. Рядки, regex, числа" } },
      ],
    },
    {
      title: {
        fr: "CM5 - DOM et événements (client)",
        en: "CM5 - DOM & events (client)",
        uk: "CM5 - DOM і події (клієнт)",
      },
      label: { fr: "CM5", en: "CM5", uk: "CM5" },
      blocks: domEvents,
      parts: [
        { id: "p1", label: { fr: "1. Hiérarchie window/document", en: "1. window/document hierarchy", uk: "1. Ієрархія window/document" } },
        { id: "p2", label: { fr: "2. Modification dynamique", en: "2. Dynamic modification", uk: "2. Динамічна зміна" } },
        { id: "p3", label: { fr: "3. Événements", en: "3. Events", uk: "3. Події" } },
        { id: "p4", label: { fr: "4. Formulaires côté client", en: "4. Client-side forms", uk: "4. Форми на клієнті" } },
      ],
    },
    {
      title: {
        fr: "CM6 - jQuery",
        en: "CM6 - jQuery",
        uk: "CM6 - jQuery",
      },
      label: { fr: "CM6", en: "CM6", uk: "CM6" },
      blocks: jquery,
      parts: [
        { id: "p1", label: { fr: "1. Syntaxe et sélection", en: "1. Syntax & selection", uk: "1. Синтаксис і вибір" } },
        { id: "p2", label: { fr: "2. Chargement et événements", en: "2. Loading & events", uk: "2. Завантаження та події" } },
        { id: "p3", label: { fr: "3. Propriétés/CSS et hiérarchie", en: "3. Props/CSS & hierarchy", uk: "3. Властивості/CSS та ієрархія" } },
        { id: "p4", label: { fr: "4. jQuery + AJAX", en: "4. jQuery + AJAX", uk: "4. jQuery + AJAX" } },
      ],
    },
    {
      title: {
        fr: "CM7 - Interaction client/serveur : AJAX",
        en: "CM7 - Client/server interaction: AJAX",
        uk: "CM7 - Взаємодія клієнт/сервер: AJAX",
      },
      label: { fr: "CM7", en: "CM7", uk: "CM7" },
      blocks: ajax,
      parts: [
        { id: "p1", label: { fr: "1. Création de l'objet", en: "1. Object creation", uk: "1. Створення об'єкта" } },
        { id: "p2", label: { fr: "2. Envoi GET/POST", en: "2. Sending GET/POST", uk: "2. Надсилання GET/POST" } },
        { id: "p3", label: { fr: "3. Réponse et eval()", en: "3. Response & eval()", uk: "3. Відповідь та eval()" } },
      ],
    },
    {
      title: {
        fr: "TD JavaScript - Entraînement (JS, jQuery, AJAX)",
        en: "TD JavaScript - Practice (JS, jQuery, AJAX)",
        uk: "TD JavaScript - Тренування (JS, jQuery, AJAX)",
      },
      label: { fr: "TD2", en: "TD2", uk: "TD2" },
      blocks: tdJavascript,
      parts: [
        { id: "p1", label: { fr: "1. Déclenchement et popup", en: "1. Triggering & popups", uk: "1. Запуск і popup" } },
        { id: "p2", label: { fr: "2. Roll-over et morpion", en: "2. Roll-over & tic-tac-toe", uk: "2. Roll-over і хрестики-нулики" } },
        { id: "p3", label: { fr: "3. Listes déroulantes adaptatives", en: "3. Adaptive dropdowns", uk: "3. Адаптивні списки" } },
        { id: "p4", label: { fr: "4. Vérification formulaire", en: "4. Form validation", uk: "4. Валідація форми" } },
        { id: "p5", label: { fr: "5. Mini-chat", en: "5. Mini-chat", uk: "5. Міні-чат" } },
      ],
    },
    {
      title: {
        fr: "CM8 - PHP avancé (HTTP, fichiers, sessions, objets)",
        en: "CM8 - Advanced PHP (HTTP, files, sessions, OOP)",
        uk: "CM8 - Розширений PHP (HTTP, файли, сесії, ООП)",
      },
      label: { fr: "CM8", en: "CM8", uk: "CM8" },
      blocks: phpAdvanced,
      parts: [
        { id: "p1", label: { fr: "1. En-têtes HTTP et redirection", en: "1. HTTP headers & redirect", uk: "1. HTTP-заголовки та перенаправлення" } },
        { id: "p2", label: { fr: "2. Sauvegarde dans des fichiers", en: "2. Storage in files", uk: "2. Збереження у файлах" } },
        { id: "p3", label: { fr: "3. Sessions avancées & erreurs", en: "3. Advanced sessions & errors", uk: "3. Розширені сесії та помилки" } },
        { id: "p4", label: { fr: "4. Objets PHP", en: "4. PHP objects", uk: "4. Об'єкти PHP" } },
      ],
    },
    {
      title: {
        fr: "Cheat Sheet CC1 (A4)",
        en: "CC1 Cheat Sheet (A4)",
        uk: "CC1 Cheat Sheet (A4)",
      },
      label: { fr: "A4", en: "A4", uk: "A4" },
      blocks: cc1Cheatsheet,
      parts: [
        { id: "p1", label: { fr: "1. Squelette PHP", en: "1. PHP skeleton", uk: "1. PHP каркас" } },
        { id: "p2", label: { fr: "2. Variables/controle", en: "2. Variables/control", uk: "2. Змінні/керування" } },
        { id: "p3", label: { fr: "3. GET/POST", en: "3. GET/POST", uk: "3. GET/POST" } },
        { id: "p4", label: { fr: "4. Validation regex", en: "4. Regex", uk: "4. Regex" } },
        { id: "p5", label: { fr: "5. Cookies", en: "5. Cookies", uk: "5. Cookies" } },
        { id: "p6", label: { fr: "6. Sessions", en: "6. Sessions", uk: "6. Сесії" } },
        { id: "p7", label: { fr: "7. Tableaux", en: "7. Arrays", uk: "7. Масиви" } },
        { id: "p8", label: { fr: "8. Headers/fichiers/objets", en: "8. Headers/files/objects", uk: "8. Заголовки/файли/об'єкти" } },
        { id: "p9", label: { fr: "9. Pieges", en: "9. Traps", uk: "9. Пастки" } },
      ],
    },
    {
      title: {
        fr: "Annales CC1 type",
        en: "CC1-style Past Exams",
        uk: "Приклади КК1",
      },
      label: { fr: "CC1", en: "CC1", uk: "КК1" },
      blocks: annalesCc1,
      parts: [
        { id: "p1", label: { fr: "1. Partiel type 2022-2023 (révision)", en: "1. 2022-2023 sample (revision)", uk: "1. Зразок 2022-2023 (повторення)" } },
        { id: "p2", label: { fr: "2. Exercices trace + écriture", en: "2. Tracing + coding", uk: "2. Трасування + написання коду" } },
      ],
    },
  ],
};
