import type { Subject } from "../types";

export const webDev: Subject = {
  slug: "web-dev",
  title: {
    fr: "HTML / CSS — Maîtrise complète",
    en: "HTML / CSS — Complete Mastery",
    uk: "HTML / CSS — повне володіння",
  },
  date: {
    fr: "19 mai 2025",
    en: "May 19, 2025",
    uk: "19 травня 2025",
  },
  status: "published",
  summary: {
    fr: "Cours progressif HTML/CSS : structure, sémantique, mise en forme, mise en page (Flexbox/Grid), responsive et accessibilité. Objectif : écrire seul du HTML/CSS complet et propre.",
    en: "Progressive HTML/CSS course: structure, semantics, styling, layout (Flexbox/Grid), responsive and accessibility. Goal: write complete, clean HTML/CSS on your own.",
    uk: "Поступовий курс HTML/CSS: структура, семантика, стилізація, макет (Flexbox/Grid), адаптивність і доступність. Мета: самостійно писати повноцінний чистий HTML/CSS.",
  },
  classes: [
    {
      title: {
        fr: "CM1 — Structure HTML & sémantique",
        en: "CM1 — HTML structure & semantics",
        uk: "CM1 — Структура HTML та семантика",
      },
      label: { fr: "CM1", en: "CM1", uk: "CM1" },
      blocks: [
        {
          type: "paragraph",
          text: {
            fr: "Un fichier HTML est le squelette d'une page web. Le navigateur lit les balises et construit la structure. Objectif : savoir structurer une page complète sans modèle.",
            en: "HTML is the skeleton of a web page. The browser reads tags and builds structure. Goal: structure a complete page without a template.",
            uk: "HTML — скелет вебсторінки. Браузер читає теги та будує структуру. Мета: самостійно структурувати повноцінну сторінку.",
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p1",
          text: { fr: "1. Document minimal et balises de base", en: "1. Minimal document & basic tags", uk: "1. Мінімальний документ і базові теги" },
        },
        {
          type: "code",
          lang: "html",
          text: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Ma page</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Bonjour</h1>\n  <p>Mon premier paragraphe.</p>\n</body>\n</html>",
          caption: { fr: "Structure HTML5 complète minimale", en: "Minimal complete HTML5 structure", uk: "Мінімальна повна структура HTML5" },
        },
        {
          type: "list",
          items: [
            { text: { fr: "`<!DOCTYPE html>` déclare HTML5", en: "`<!DOCTYPE html>` declares HTML5", uk: "`<!DOCTYPE html>` оголошує HTML5" } },
            { text: { fr: "`<head>` = métadonnées (pas visible directement)", en: "`<head>` = metadata (not directly visible)", uk: "`<head>` = метадані (не безпосередньо видимі)" } },
            { text: { fr: "`<body>` = contenu visible", en: "`<body>` = visible content", uk: "`<body>` = видимий вміст" } },
            { text: { fr: "Toujours renseigner `charset` et `viewport`", en: "Always set `charset` and `viewport`", uk: "Завжди вказуй `charset` і `viewport`" } },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "Le navigateur lit le fichier HTML de haut en bas et construit une arborescence (le DOM) : chaque balise ouvrante crée un nœud, chaque balise fermante le ferme, et certaines balises sont auto-fermantes (`<img>`, `<input>`, `<meta>`). Le HTML décrit la **structure et le sens** de l'information, jamais son apparence visuelle : c'est le rôle du CSS. Un HTML bien structuré rend le CSS beaucoup plus simple, car le CSS cible ensuite ces éléments par leur balise, leur classe ou leur identifiant. Utilisez toujours une hiérarchie logique de titres (`h1` puis `h2`, `h3`), des noms de classes/id lisibles et des attributs sémantiques pour améliorer SEO et accessibilité.",
            en: "The browser reads the HTML file top-to-bottom and builds a tree (DOM), assigns each opening tag a node, closes them, and recognizes self-closing tags (`<img>`, `<input>`, `<meta>`). HTML describes structure and meaning, never visual appearance, which is CSS's role. Well-structured HTML makes CSS simpler, since CSS targets elements by tag, class, or id. Always use a logical heading hierarchy (`h1`, then `h2`, `h3`), readable class/id names, and semantic attributes to improve SEO and accessibility.",
            uk: "Браузер читає HTML-файл зверху вниз і будує дерево (DOM), створює вузол для кожного відкривного тега, закриває його та розпізнає самозакривні теги (`<img>`, `<input>`, `<meta>`). HTML описує структуру і зміст, а не візуальний вигляд, що є роллю CSS. Добре структурований HTML робить CSS простішим, бо CSS звертається до елементів за тегом, класом або id. Завжди використовуй логічну ієрархію заголовків (`h1`, потім `h2`, `h3`), зрозумілі імена класів/id та семантичні атрибути для SEO і доступності.",
          },
        },
        {
          type: "checkpoint",
          concept: { fr: "Viewport", en: "Viewport", uk: "Viewport" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "La balise `viewport` est indispensable pour le responsive mobile.", en: "The `viewport` tag is essential for mobile responsiveness.", uk: "Тег `viewport` є обов'язковим для адаптивності на мобільних." },
            answer: true,
            justification: { fr: "Elle indique au navigateur mobile la largeur à utiliser.", en: "It tells the mobile browser which width to use.", uk: "Вона вказує мобільному браузеру, яку ширину використовувати." },
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p2",
          text: { fr: "2. Texte, liens, images et listes", en: "2. Text, links, images, lists", uk: "2. Текст, посилання, зображення, списки" },
        },
        {
          type: "code",
          lang: "html",
          text: "<h2>Titre niveau 2</h2>\n<p>Un <strong>mot important</strong> et un <em>lien</em> :\n  <a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">visiter</a>.\n</p>\n<img src=\"photo.jpg\" alt=\"Description courte\" width=\"300\">\n<ul>\n  <li>Premier item</li>\n  <li>Second item</li>\n</ul>",
          caption: { fr: "Éléments de contenu courants", en: "Common content elements", uk: "Поширені елементи вмісту" },
        },
        {
          type: "list",
          items: [
            { text: { fr: "`alt` est obligatoire pour l'accessibilité", en: "`alt` is required for accessibility", uk: "`alt` є обов'язковим для доступності" } },
            { text: { fr: "`target=\"_blank\"` + `rel=\"noopener\"` pour sécurité", en: "`target=\"_blank\"` + `rel=\"noopener\"` for safety", uk: "`target=\"_blank\"` + `rel=\"noopener\"` для безпеки" } },
            { text: { fr: "Ne sautez pas les niveaux de titres (`h1` puis `h2`, pas `h4`)", en: "Do not skip heading levels (`h1` then `h2`, not `h4`)", uk: "Не пропускай рівні заголовків (`h1`, потім `h2`, не `h4`)" } },
          ],
        },
        {
          type: "checkpoint",
          concept: { fr: "Accessibilité image", en: "Image accessibility", uk: "Доступність зображення" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "Chaque image informative doit avoir un attribut `alt` non vide.", en: "Every informative image should have a non-empty `alt` attribute.", uk: "Кожне інформативне зображення має мати непорожній атрибут `alt`." },
            answer: true,
            justification: { fr: "Le texte alternatif aide les lecteurs d'écran et l'indexation.", en: "Alt text helps screen readers and indexing.", uk: "Альтернативний текст допомагає скрінрідерам і індексації." },
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p3",
          text: { fr: "3. Sémantique & formulaires HTML", en: "3. Semantics & HTML forms", uk: "3. Семантика та форми HTML" },
        },
        {
          type: "code",
          lang: "html",
          text: "<header>...</header>\n<nav>menu</nav>\n<main>\n  <section>\n    <article>\n      <h2>Article</h2>\n      <p>Contenu</p>\n    </article>\n  </section>\n  <aside>filtres</aside>\n</main>\n<footer>...</footer>",
          caption: { fr: "Squelette sémantique", en: "Semantic skeleton", uk: "Семантичний скелет" },
        },
        {
          type: "code",
          lang: "html",
          text: "<form action=\"/login\" method=\"post\">\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" name=\"email\" required>\n  <button type=\"submit\">Connexion</button>\n</form>",
          caption: { fr: "Formulaire accessible", en: "Accessible form", uk: "Доступна форма" },
        },
        {
          type: "paragraph",
          text: {
            fr: " une bonne structure HTML rend le CSS plus simple (moins de hacks). Pensez au lecteur d'écran : un seul `<h1>` par page, navigation dans `<nav>`, contenu principal dans `<main>`.",
            en: " good HTML structure makes CSS easier (fewer hacks). Think screen reader: one `<h1>` per page, navigation in `<nav>`, main content in `<main>`.",
            uk: "хороша структура HTML робить CSS простішим. Думай про скрінрідер: один `<h1>` на сторінку, навігація в `<nav>`, головний вміст у `<main>`.",
          },
        },
        {
          type: "checkpoint",
          concept: { fr: "Main", en: "Main", uk: "Main" },
          exercise: {
            kind: "mcq",
            prompt: { fr: "Quelle balise pour le contenu principal unique d'une page ?", en: "Which tag for the unique main content of a page?", uk: "Який тег для унікального головного вмісту сторінки?" },
            options: [
              { text: { fr: "<main>", en: "<main>", uk: "<main>" } },
              { text: { fr: "<div class=\"main\">", en: "<div class=\"main\">", uk: "<div class=\"main\">" } },
              { text: { fr: "<content>", en: "<content>", uk: "<content>" } },
            ],
            answerIndex: 0,
            solution: { fr: "Utilisez `<main>` pour le contenu principal.", en: "Use `<main>` for main content.", uk: "Використовуй `<main>` для головного вмісту." },
          },
        },
        {
          type: "exercises",
          groups: [
            {
              title: { fr: "Exercice HTML 1", en: "HTML Exercise 1", uk: "Вправа HTML 1" },
              exercises: [
                {
                  kind: "open",
                  prompt: { fr: "Écrivez la structure HTML5 complète d'une page personnelle avec header, nav, main, section et footer.", en: "Write complete HTML5 structure of a personal page with header, nav, main, section and footer.", uk: "Напиши повну структуру HTML5 особистої сторінки з header, nav, main, section і footer." },
                  solution: { fr: "Utiliser le squelette minimal + balises sémantiques ci-dessus.", en: "Use the minimal skeleton + semantic tags above.", uk: "Використати мінімальний скелет + семантичні теги вище." },
                },
              ],
            },
          ],
        },
      ],
      parts: [
        { id: "p1", label: { fr: "1. Document & balises de base", en: "1. Document & basic tags", uk: "1. Документ і базові теги" } },
        { id: "p2", label: { fr: "2. Texte, liens, images, listes", en: "2. Text, links, images, lists", uk: "2. Текст, посилання, зображення, списки" } },
        { id: "p3", label: { fr: "3. Sémantique & formulaires", en: "3. Semantics & forms", uk: "3. Семантика та форми" } },
      ],
    },
    {
      title: {
        fr: "CM2 — CSS fondamentaux",
        en: "CM2 — CSS fundamentals",
        uk: "CM2 — Основи CSS",
      },
      label: { fr: "CM2", en: "CM2", uk: "CM2" },
      blocks: [
        {
          type: "paragraph",
          text: {
            fr: "CSS donne le style et se connecte au HTML via une feuille de style chargée dans `<head>` avec `<link rel=\"stylesheet\" href=\"style.css\">`. Le navigateur applique chaque règle CSS aux éléments du DOM dont le sélecteur correspond. **Classe (`.card`)** : nom réutilisable défini dans CSS et appliqué à HTML via `class=\"card\"` ; une classe peut être utilisée sur plusieurs éléments et plusieurs classes peuvent être combinées. **ID (`#hero`)** : identifiant unique dans la page ; utilisé pour une ancre, un élément ciblé par JavaScript ou un style très spécifique, à éviter pour du style général pour ne pas casser la réutilisabilité. Syntaxe générale : `sélecteur { propriété: valeur; }`. Entraînement indispensable : lire et écrire du CSS sans copier-coller.",
            en: "CSS provides style and connects to HTML through a stylesheet loaded in `<head>` with `<link rel=\"stylesheet\" href=\"style.css\">`. The browser applies each CSS rule to DOM elements whose selector matches. **Class (`.card`)**: reusable name defined in CSS and applied in HTML via `class=\"card\"`; multiple elements can share it and classes can be combined. **ID (`#hero`)**: unique identifier in the page; used for anchors, JavaScript targets, or very specific styling, but avoided for general styling to keep reusability. General syntax: `selector { property: value; }`. Essential practice: read and write CSS without copy-paste.",
            uk: "CSS задає стиль і зв'язується з HTML через таблицю стилів, підключену в `<head>` за допомогою `<link rel=\"stylesheet\" href=\"style.css\">`. Браузер застосовує кожне правило CSS до елементів DOM, селектор яких збігається. **Клас (`.card`)**: повторно використовуване ім'я, визначене в CSS і застосоване в HTML через `class=\"card\"`; він може використовуватися на кількох елементах, а класи можна комбінувати. **ID (`#hero`)**: унікальний ідентифікатор на сторінці; використовується для якорів, цілей JavaScript або дуже специфічного стилю, але уникати для загального стилю, щоб зберегти повторне використання. Загальний синтаксис: `selector { property: value; }`. Обов'язкова практика: читати та писати CSS без копіювання.",
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p1",
          text: { fr: "1. Sélecteurs et cascade", en: "1. Selectors & cascade", uk: "1. Селектори та каскад" },
        },
        {
          type: "code",
          lang: "css",
          text: "p { color: #333; }\n.titre { font-size: 24px; }\n#hero { background: #3e4b8e; color: white; }\narticle > p { line-height: 1.6; }\na:hover { color: #4a5ce0; }",
          caption: { fr: "Sélecteurs courants", en: "Common selectors", uk: "Поширені селектори" },
        },
        {
          type: "list",
          items: [
            { text: { fr: "Élément : `p`", en: "Element: `p`", uk: "Елемент: `p`" } },
            { text: { fr: "Classe : `.classe`", en: "Class: `.class`", uk: "Клас: `.class`" } },
            { text: { fr: "ID : `#id`", en: "ID: `#id`", uk: "ID: `#id`" } },
            { text: { fr: "Enfant direct : `>`", en: "Direct child: `>`", uk: "Прямий нащадок: `>`" } },
            { text: { fr: "Pseudo-classe : `:hover`, `:focus`", en: "Pseudo-class: `:hover`, `:focus`", uk: "Псевдоклас: `:hover`, `:focus`" } },
          ],
        },
        {
          type: "checkpoint",
          concept: { fr: "Spécificité", en: "Specificity", uk: "Специфічність" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "Un sélecteur par ID est plus spécifique qu'un sélecteur par classe.", en: "An ID selector is more specific than a class selector.", uk: "Селектор за ID є специфічнішим за селектор за класом." },
            answer: true,
            justification: { fr: "Ordre croissant : élément < classe < ID (et !important à éviter).", en: "Increasing order: element < class < ID (avoid !important).", uk: "Порядок зростання: елемент < клас < ID (уникай !important)." },
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p2",
          text: { fr: "2. Couleurs, texte et unités", en: "2. Colors, text, units", uk: "2. Кольори, текст, одиниці" },
        },
        {
          type: "code",
          lang: "css",
          text: "body {\n  color: #3d1534;\n  font-family: \"Segoe UI\", sans-serif;\n  font-size: 1rem; /* 16px par défaut */\n  line-height: 1.6;\n}\nh1 { font-size: 2rem; font-weight: 700; }\n.small { font-size: 0.875rem; color: #a6bcc9; }",
          caption: { fr: "Typographie de base", en: "Basic typography", uk: "Базова типографіка" },
        },
        {
          type: "paragraph",
          text: {
            fr: " préférez `rem` pour les tailles (relatives à la racine), évitez les pixels pour l'accessibilité. Un bon rythme : body 1rem, titres 1.5–2.5rem, line-height 1.5–1.7.",
            en: " prefer `rem` for sizes (relative to root), avoid px for accessibility. Good rhythm: body 1rem, headings 1.5–2.5rem, line-height 1.5–1.7.",
            uk: "віддавай перевагу `rem` для розмірів (відносно root), уникай px для доступності. Гарний ритм: body 1rem, заголовки 1.5–2.5rem, line-height 1.5–1.7.",
          },
        },
        {
          type: "list",
          items: [
            { text: { fr: "Hex : `#3e4b8e`", en: "Hex: `#3e4b8e`", uk: "Hex: `#3e4b8e`" } },
            { text: { fr: "RGB : `rgb(62, 75, 142)`", en: "RGB: `rgb(62, 75, 142)`", uk: "RGB: `rgb(62, 75, 142)`" } },
            { text: { fr: "Rem : relatif à la racine (`html`)", en: "Rem: relative to root (`html`)", uk: "Rem: відносно root (`html`)" } },
            { text: { fr: "Em : relatif au parent", en: "Em: relative to parent", uk: "Em: відносно батька" } },
            { text: { fr: "Vw/vh : pourcentage de la fenêtre", en: "Vw/vh: percentage of viewport", uk: "Vw/vh: відсоток вікна" } },
          ],
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p3",
          text: { fr: "3. Box model", en: "3. Box model", uk: "3. Блочна модель" },
        },
        {
          type: "code",
          lang: "css",
          text: "* {\n  box-sizing: border-box; /* inclut padding + border dans la largeur */\n}\n.card {\n  width: 300px;\n  padding: 16px;\n  border: 1px solid #e7ecf6;\n  margin: 12px;\n  border-radius: 10px;\n  background: #ffffff;\n}",
          caption: { fr: "Box model sans surprise", en: "Predictable box model", uk: "Передбачувана блочна модель" },
        },
        {
          type: "checkpoint",
          concept: { fr: "box-sizing", en: "box-sizing", uk: "box-sizing" },
          exercise: {
            kind: "mcq",
            prompt: { fr: "Quelle déclaration évite que padding augmente la largeur totale ?", en: "Which declaration prevents padding from increasing total width?", uk: "Яке оголошення запобігає збільшенню загальної ширини padding'ом?" },
            options: [
              { text: { fr: "box-sizing: content-box", en: "box-sizing: content-box", uk: "box-sizing: content-box" } },
              { text: { fr: "box-sizing: border-box", en: "box-sizing: border-box", uk: "box-sizing: border-box" } },
            ],
            answerIndex: 1,
            solution: { fr: "border-box inclut padding et border dans width.", en: "border-box includes padding and border in width.", uk: "border-box включає padding і border у width." },
          },
        },
        {
          type: "exercises",
          groups: [
            {
              title: { fr: "Exercice CSS 1", en: "CSS Exercise 1", uk: "Вправа CSS 1" },
              exercises: [
                {
                  kind: "open",
                  prompt: { fr: "Écrivez le CSS pour centrer un paragraphe, lui donner 18px, une couleur primaire et un fond papier.", en: "Write CSS to center a paragraph, give it 18px, primary color and paper background.", uk: "Напиши CSS, щоб вирівняти абзац по центру, 18px, основний колір та фон paper." },
                  solution: { fr: "p { text-align:center; font-size:18px; color:#3e4b8e; background:#f5f7fa; }", en: "Use text-align, font-size, color, background.", uk: "Використай text-align, font-size, color, background." },
                },
              ],
            },
          ],
        },
      ],
      parts: [
        { id: "p1", label: { fr: "1. Sélecteurs et cascade", en: "1. Selectors & cascade", uk: "1. Селектори та каскад" } },
        { id: "p2", label: { fr: "2. Couleurs, texte et unités", en: "2. Colors, text & units", uk: "2. Кольори, текст і одиниці" } },
        { id: "p3", label: { fr: "3. Box model", en: "3. Box model", uk: "3. Блочна модель" } },
      ],
    },
    {
      title: {
        fr: "CM3 — Mise en page (Flexbox / Grid)",
        en: "CM3 — Layout (Flexbox / Grid)",
        uk: "CM3 — Макет (Flexbox / Grid)",
      },
      label: { fr: "CM3", en: "CM3", uk: "CM3" },
      blocks: [
        {
          type: "paragraph",
          text: {
            fr: "La mise en page moderne utilise Flexbox (1D) et Grid (2D). Objectif : construire navbar, cards, grilles sans frameworks.",
            en: "Modern layout uses Flexbox (1D) and Grid (2D). Goal: build navbars, cards, grids without frameworks.",
            uk: "Сучасний макет використовує Flexbox (1D) і Grid (2D). Мета: будувати навбар, картки, сітки без фреймворків.",
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p1",
          text: { fr: "1. Flexbox", en: "1. Flexbox", uk: "1. Flexbox" },
        },
        {
          type: "code",
          lang: "css",
          text: ".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.card { flex: 1 1 280px; }",
          caption: { fr: "Flexbox typique", en: "Typical Flexbox", uk: "Типовий Flexbox" },
        },
        {
          type: "list",
          items: [
            { text: { fr: "`justify-content` : axe principal", en: "`justify-content`: main axis", uk: "`justify-content`: головна вісь" } },
            { text: { fr: "`align-items` : axe secondaire", en: "`align-items`: cross axis", uk: "`align-items`: поперечна вісь" } },
            { text: { fr: "`gap` : espacement entre éléments", en: "`gap`: spacing between items", uk: "`gap`: відступ між елементами" } },
            { text: { fr: "`flex-wrap: wrap` : passer à la ligne", en: "`flex-wrap: wrap`: wrap to next line", uk: "`flex-wrap: wrap`: перенос на новий рядок" } },
          ],
        },
        {
          type: "checkpoint",
          concept: { fr: "Flexbox axes", en: "Flexbox axes", uk: "Flexbox осі" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "`justify-content` contrôle l'alignement sur l'axe principal du flex container.", en: "`justify-content` controls alignment on the main axis of the flex container.", uk: "`justify-content` керує вирівнюванням по головній осі flex-контейнера." },
            answer: true,
            justification: { fr: "L'axe principal dépend de `flex-direction`.", en: "Main axis depends on `flex-direction`.", uk: "Головна вісь залежить від `flex-direction`." },
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p2",
          text: { fr: "2. CSS Grid", en: "2. CSS Grid", uk: "2. CSS Grid" },
        },
        {
          type: "code",
          lang: "css",
          text: ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.featured {\n  grid-column: span 2;\n}",
          caption: { fr: "Grille 3 colonnes égales", en: "3 equal columns grid", uk: "Сітка 3 рівні колонки" },
        },
        {
          type: "paragraph",
          text: {
            fr: " utilisez Grid pour les layouts de page et Flexbox pour l'alignement dans un composant. Pour centrer parfaitement un bloc : `display:grid; place-items:center;`.",
            en: " use Grid for page layouts and Flexbox for aligning inside components. Perfect block centering: `display:grid; place-items:center;`.",
            uk: "Grid для макету сторінки, Flexbox для вирівнювання в компоненті. Ідеальне центрування блоку: `display:grid; place-items:center;`.",
          },
        },
        {
          type: "code",
          lang: "css",
          text: "/* Positionnement */\n.fixed-banner {\n  position: fixed;\n  top: 0; left: 0; right: 0;\n}\n.tooltip {\n  position: absolute;\n  top: 100%;\n}\n.sticky-header {\n  position: sticky;\n  top: 0;\n}",
          caption: { fr: "Positionnement courant", en: "Common positioning", uk: "Поширений positioning" },
        },
        {
          type: "exercises",
          groups: [
            {
              title: { fr: "Exercice Layout 1", en: "Layout Exercise 1", uk: "Вправа макет 1" },
              exercises: [
                {
                  kind: "open",
                  prompt: { fr: "Construisez une navbar flex avec logo à gauche et liens à droite, puis une grille de 3 cartes responsive.", en: "Build a flex navbar with logo left and links right, then a responsive 3-card grid.", uk: "Побудуй flex-навбар (логотип ліворуч, посилання праворуч), а потім адаптивну сітку з 3 карток." },
                  solution: { fr: "Navbar : `display:flex; justify-content:space-between`. Grille : `display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:16px;`", en: "Navbar flex between; Grid auto-fit minmax.", uk: "Навбар flex between; Grid auto-fit minmax." },
                },
              ],
            },
          ],
        },
      ],
      parts: [
        { id: "p1", label: { fr: "1. Flexbox", en: "1. Flexbox", uk: "1. Flexbox" } },
        { id: "p2", label: { fr: "2. CSS Grid & positionnement", en: "2. CSS Grid & positioning", uk: "2. CSS Grid і позиціювання" } },
      ],
    },
    {
      title: {
        fr: "CM4 — Responsive & accessibilité",
        en: "CM4 — Responsive & accessibility",
        uk: "CM4 — Адаптивність та доступність",
      },
      label: { fr: "CM4", en: "CM4", uk: "CM4" },
      blocks: [
        {
          type: "paragraph",
          text: {
            fr: "Apprendre à penser mobile-first et à rendre les interfaces utilisables pour tous (clavier, lecteurs d'écran, contrastes).",
            en: "Learn mobile-first thinking and make interfaces usable by everyone (keyboard, screen readers, contrast).",
            uk: "Навчися мислити mobile-first і робити інтерфейси зручними для всіх (клавіатура, скрінрідери, контраст).",
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p1",
          text: { fr: "1. Media queries & mobile-first", en: "1. Media queries & mobile-first", uk: "1. Media queries та mobile-first" },
        },
        {
          type: "code",
          lang: "css",
          text: "/* Mobile first */\n.container { padding: 12px; }\n\n@media (min-width: 640px) {\n  .container { padding: 24px; max-width: 960px; margin: 0 auto; }\n}\nimg { max-width: 100%; height: auto; display: block; }",
          caption: { fr: "Responsive de base", en: "Basic responsive", uk: "Базова адаптивність" },
        },
        {
          type: "list",
          items: [
            { text: { fr: "Commencer par mobile, enrichir pour desktop", en: "Start mobile, enhance for desktop", uk: "Починай з мобільного, розширюй для десктопу" } },
            { text: { fr: "Breakpoints courants : 640, 768, 1024, 1280", en: "Common breakpoints: 640, 768, 1024, 1280", uk: "Поширені брейкпоінти: 640, 768, 1024, 1280" } },
            { text: { fr: "Images fluides : `max-width:100%`", en: "Fluid images: `max-width:100%`", uk: "Плинні зображення: `max-width:100%`" } },
          ],
        },
        {
          type: "checkpoint",
          concept: { fr: "Mobile-first", en: "Mobile-first", uk: "Mobile-first" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "Mobile-first écrit d'abord le CSS de base pour mobile, puis utilise `min-width` pour desktop.", en: "Mobile-first writes base CSS for mobile first, then uses `min-width` for desktop.", uk: "Mobile-first спочатку пише базовий CSS для мобільного, а потім використовує `min-width` для десктопу." },
            answer: true,
            justification: { fr: "On part du plus petit écran et on enrichit.", en: "Start from smallest screen then enhance.", uk: "Починають з найменшого екрана і вдосконалюють." },
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p2",
          text: { fr: "2. Variables CSS et accessibilité", en: "2. CSS variables & accessibility", uk: "2. CSS-змінні та доступність" },
        },
        {
          type: "code",
          lang: "css",
          text: ":root {\n  --color-primary: #3e4b8e;\n  --pad: 16px;\n  --radius: 8px;\n}\n.btn {\n  padding: var(--pad);\n  background: var(--color-primary);\n  border-radius: var(--radius);\n  color: white;\n}\n.btn:focus-visible {\n  outline: 3px solid #f6e0b6;\n}",
          caption: { fr: "Variables et focus visible", en: "Variables & visible focus", uk: "Змінні та видимий фокус" },
        },
        {
          type: "paragraph",
          text: {
            fr: " l'accessibilité n'est pas une option. Toujours fournir focus visible, contraste suffisant (au moins 4.5:1 pour le texte normal) et navigation clavier. Utiliser labels associés (`for`/`id`).",
            en: " accessibility is not optional. Always provide visible focus, sufficient contrast (at least 4.5:1 for normal text) and keyboard navigation. Use associated labels (`for`/`id`).",
            uk: "доступність не є опцією. Завжди забезпечуй видимий фокус, достатній контраст (не менше 4.5:1 для звичайного тексту) і навігацію з клавіатури. Використовуй пов'язані labels (`for`/`id`).",
          },
        },
        {
          type: "checkpoint",
          concept: { fr: "Contraste", en: "Contrast", uk: "Контраст" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "Un contraste insuffisant entre texte et fond nuit à la lisibilité et à l'accessibilité.", en: "Insufficient contrast between text and background hurts readability and accessibility.", uk: "Недостатній контраст між текстом і фоном погіршує читабельність і доступність." },
            answer: true,
            justification: { fr: "Visez au moins 4.5:1 pour le texte courant.", en: "Aim for at least 4.5:1 for normal text.", uk: "Прагни щонайменше 4.5:1 для звичайного тексту." },
          },
        },
        {
          type: "exercises",
          groups: [
            {
              title: { fr: "Exercice Responsive 1", en: "Responsive Exercise 1", uk: "Вправа адаптивності 1" },
              exercises: [
                {
                  kind: "open",
                  prompt: { fr: "Transformez une page fixe en responsive mobile-first avec media query et image fluide.", en: "Convert a fixed page into a mobile-first responsive page with media query and fluid image.", uk: "Перетвори фіксовану сторінку на mobile-first адаптивну з media query та плинним зображенням." },
                  solution: { fr: "Wrapper `.container`, padding de base, media query à 768px, `img{max-width:100%;height:auto}`.", en: "Use container, base padding, 768px media query, fluid img.", uk: "Використай контейнер, базовий padding, media query 768px, плинне img." },
                },
              ],
            },
          ],
        },
      ],
      parts: [
        { id: "p1", label: { fr: "1. Media queries & mobile-first", en: "1. Media queries & mobile-first", uk: "1. Media queries і mobile-first" } },
        { id: "p2", label: { fr: "2. Variables CSS & accessibilité", en: "2. CSS variables & accessibility", uk: "2. CSS-змінні та доступність" } },
      ],
    },
    {
      title: {
        fr: "CM5 — Projet final : maîtrise HTML/CSS",
        en: "CM5 — Final project: HTML/CSS mastery",
        uk: "CM5 — Фінальний проєкт: володіння HTML/CSS",
      },
      label: { fr: "CM5", en: "CM5", uk: "CM5" },
      blocks: [
        {
          type: "paragraph",
          text: {
            fr: "Objectif final : produire seul une page complète et professionnelle (navbar, hero, cards, footer, responsive). Check-list intégrée.",
            en: "Final goal: create alone a complete professional page (navbar, hero, cards, footer, responsive). Includes checklist.",
            uk: "Фінальна мета: самостійно створити повноцінну професійну сторінку (навбар, hero, картки, футер, адаптивність). З чеклістом.",
          },
        },
        { type: "rule" },
        {
          type: "heading",
          level: 3,
          variant: "part",
          id: "p1",
          text: { fr: "1. Cahier des charges express", en: "1. Express brief", uk: "1. Коротке ТЗ" },
        },
        {
          type: "list",
          items: [
            { text: { fr: "1 header fixe + nav", en: "1 fixed header + nav", uk: "1 фіксований header + nav" } },
            { text: { fr: "1 section hero avec titre et bouton CTA", en: "1 hero section with title + CTA button", uk: "1 hero-секція із заголовком і кнопкою CTA" } },
            { text: { fr: "1 grille de 3 features cards", en: "1 grid of 3 feature cards", uk: "1 сітка з 3 карток features" } },
            { text: { fr: "1 footer et 1 media query responsive", en: "1 footer and 1 responsive media query", uk: "1 footer і 1 адаптивний media query" } },
            { text: { fr: "Contraste, focus-visible, labels", en: "Contrast, focus-visible, labels", uk: "Контраст, focus-visible, labels" } },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: " pour maîtriser vraiment, écrivez sans assistance (pas de copier-coller), puis relisez pour simplifier (moins de div, variables réutilisables, classes lisibles).",
            en: " to truly master, write without assistance (no copy-paste), then refactor for simplicity (fewer divs, reusable variables, readable classes).",
            uk: "щоб дійсно володіти, пиши без допомоги (без копіювання), а потім спрощуй (менше div, повторно використовувані змінні, читабельні класи).",
          },
        },
        {
          type: "code",
          lang: "html",
          text: "<!DOCTYPE html>\n<html lang=\"fr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <title>Mini portfolio</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <header class=\"site-header\">...</header>\n  <main>\n    <section class=\"hero\">...</section>\n    <section class=\"features grid\">...</section>\n  </main>\n  <footer>...</footer>\n</body>\n</html>",
          caption: { fr: "Squelette projet", en: "Project skeleton", uk: "Скелет проєкту" },
        },
        {
          type: "checkpoint",
          concept: { fr: "Maîtrise", en: "Mastery", uk: "Володіння" },
          exercise: {
            kind: "trueFalse",
            prompt: { fr: "Pour valider la maîtrise, il faut pouvoir écrire seul le HTML et le CSS complet du projet sans assistance.", en: "To validate mastery, you must be able to write the complete HTML and CSS of the project alone without assistance.", uk: "Щоб підтвердити володіння, треба самостійно й без допомоги написати повний HTML і CSS проєкту." },
            answer: true,
            justification: { fr: "C'est l'objectif final du cours.", en: "This is the final goal of the course.", uk: "Це фінальна мета курсу." },
          },
        },
        {
          type: "checkpoint",
          concept: { fr: "Audit qualité", en: "Quality audit", uk: "Аудит якості" },
          exercise: {
            kind: "mcq",
            prompt: { fr: "Quel dernier contrôle avant livraison ?", en: "What final check before delivery?", uk: "Яка фінальна перевірка перед здачею?" },
            options: [
              { text: { fr: "Tester le responsive et la navigation clavier", en: "Test responsive and keyboard navigation", uk: "Перевірити адаптивність і навігацію клавіатурою" } },
              { text: { fr: "Ajouter le plus de div possible", en: "Add as many divs as possible", uk: "Додати якомога більше div" } },
              { text: { fr: "Ignorer le focus", en: "Ignore focus", uk: "Ігнорувати фокус" } },
            ],
            answerIndex: 0,
            solution: { fr: "Toujours tester responsive + clavier + contrastes.", en: "Always test responsive + keyboard + contrast.", uk: "Завжди перевіряти адаптивність + клавіатуру + контраст." },
          },
        },
      ],
      parts: [
        { id: "p1", label: { fr: "1. Cahier des charges & check-list", en: "1. Brief & checklist", uk: "1. ТЗ та чекліст" } },
      ],
    },
  ],
};