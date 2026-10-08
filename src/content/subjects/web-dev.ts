import type { Subject } from "../types";

export const webDev: Subject = {
  slug: "web-dev",
  title: "Web Dev",
  date: { fr: "19 mai 2025", en: "May 19, 2025" },
  status: "published",
  summary: {
    fr: "Dans ce cours, nous approfondissons les concepts du monde du Web Dev. Nous y étudions JavaScript, PHP et les CMS.",
    en: "In this course, we dig deeper into the concepts of the Web Dev world. We learn about JavaScript, PHP and CMS.",
  },
  classes: [
    {
      title: {
        fr: "Architecture et application du Web",
        en: "Architecture and application of Web",
      },
      blocks: [
        {
          type: "heading",
          level: 3,
          text: { fr: "Une application web", en: "A web application" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Une application web est un logiciel accessible via un navigateur web. Elle fonctionne grâce à une architecture répartie entre différents composants.",
            en: "A web application is software accessible through a web browser. It works thanks to an architecture distributed among different components.",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "**Navigateur web (client) :** Interface utilisée par l'utilisateur. Envoie des requêtes (souvent HTTP) au serveur.",
                en: "**Web browser (client):** The interface used by the user. Sends requests (often HTTP) to the server.",
              },
            },
            {
              text: {
                fr: "**Serveur web :** Reçoit les requêtes, traite les données et renvoie les réponses (pages HTML, JSON, etc.).",
                en: "**Web server:** Receives the requests, processes the data and sends back the responses (HTML pages, JSON, etc.).",
              },
            },
            {
              text: {
                fr: "**Serveur de base de données (SGBD) :** Stocke et gère les données.",
                en: "**Database server (DBMS):** Stores and manages the data.",
              },
            },
            {
              text: {
                fr: "**Serveur d'authentification :** Vérifie l'identité de l'utilisateur, souvent via LDAP.",
                en: "**Authentication server:** Verifies the user's identity, often via LDAP.",
              },
            },
          ],
        },

        {
          type: "heading",
          level: 3,
          text: "Architecture",
        },
        {
          type: "paragraph",
          text: {
            fr: "On utilise l'architecture client/serveur.",
            en: "Client/server architecture is used.",
          },
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Déroulement :", en: "How it works:" },
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              text: {
                fr: "Le client (navigateur) envoie une requête au serveur.",
                en: "The client (browser) sends a request to the server.",
              },
            },
            {
              text: {
                fr: "Le serveur traite la requête et envoie une réponse (souvent une page web ou des données).",
                en: "The server processes the request and sends a response (often a web page or data).",
              },
            },
            {
              text: {
                fr: "Le serveur peut aussi agir en tant que client pour faire appel à un autre serveur (ex. une API, une base de données, etc.).",
                en: "The server can also act as a client to call another server (e.g. an API, a database, etc.).",
              },
            },
          ],
        },

        { type: "heading", level: 3, text: "HTTPD" },
        {
          type: "paragraph",
          text: "**httpd = HyperText Transfer Protocol Daemon**",
        },
        {
          type: "paragraph",
          text: {
            fr: "C'est un programme serveur (souvent Apache ou Nginx) qui attend et traite les requêtes HTTP venant des clients.",
            en: "It is a server program (often Apache or Nginx) that waits for and processes HTTP requests coming from clients.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Il tourne en tâche de fond sur le serveur.",
            en: "It runs in the background on the server.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Son rôle : recevoir des requêtes HTTP (comme GET, POST), les analyser et répondre.",
            en: "Its role: receive HTTP requests (like GET, POST), analyze them and respond.",
          },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Que fait le client quand il clique sur un lien HTML ?",
            en: "What does the client do when it clicks an HTML link?",
          },
        },
        {
          type: "code",
          text: '<a href="http://www.iro.umontreal.ca/~vaucher/test.html">Fichier</a>',
        },
        {
          type: "paragraph",
          text: {
            fr: "Cela déclenche une requête GET comprenant :",
            en: "This triggers a GET request including:",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Nom de la machine : www.iro.umontreal.ca",
                en: "Machine name: www.iro.umontreal.ca",
              },
            },
            {
              text: {
                fr: "Chemin du fichier : ~vaucher/test.html",
                en: "File path: ~vaucher/test.html",
              },
            },
            {
              text: { fr: "Protocole : http", en: "Protocol: http" },
            },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "Le navigateur convertit cela en une requête GET HTTP, envoyée au serveur avec l'adresse, le chemin, et d'autres informations (comme le port défaut : 80).",
            en: "The browser turns this into an HTTP GET request, sent to the server with the address, the path, and other information (such as the default port: 80).",
          },
        },

        {
          type: "heading",
          level: 3,
          text: {
            fr: "Évolution vers le Web moderne",
            en: "Evolution towards the modern Web",
          },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Web 3.0 et services en ligne",
            en: "Web 3.0 and online services",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Aujourd'hui, les applications web vont au-delà de simples pages HTML.",
            en: "Today, web applications go beyond simple HTML pages.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On parle d'applications connectées à des bases de données avec des services en ligne : banques, e-commerce, météo, réservations…",
            en: "We're talking about applications connected to databases with online services: banking, e-commerce, weather, bookings…",
          },
        },
        {
          type: "paragraph",
          text: { fr: "Ces applications :", en: "These applications:" },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Ont une interface fonctionnelle (frontend)",
                en: "Have a functional interface (frontend)",
              },
            },
            {
              text: {
                fr: "Sont reliées à une base de données",
                en: "Are connected to a database",
              },
            },
            {
              text: {
                fr: "Offrent une interface d'administration (backend)",
                en: "Provide an administration interface (backend)",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Pourquoi httpd seul ne suffit pas ?",
            en: "Why isn't httpd enough on its own?",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Les pages statistiques ne suffisent plus",
                en: "Static statistics pages are no longer enough",
              },
            },
            {
              text: {
                fr: "Il faut que la réponse du serveur soit dynamique (adaptée à l'utilisateur, etc.)",
                en: "The server's response needs to be dynamic (adapted to the user, etc.)",
              },
            },
            {
              text: {
                fr: "Solution : ajout du CGI",
                en: "Solution: add CGI",
              },
            },
          ],
        },

        { type: "heading", level: 3, text: "CGI" },
        {
          type: "paragraph",
          text: "**CGI = Common Gateway Interface**",
        },
        {
          type: "paragraph",
          text: {
            fr: "CGI est une interface entre le serveur web (httpd) et des programmes externes.",
            en: "CGI is an interface between the web server (httpd) and external programs.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Cela permet de générer dynamiquement des pages.",
            en: "This allows pages to be generated dynamically.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Par exemple : un utilisateur soumet un formulaire. Le serveur utilise CGI pour exécuter un script qui traite les données et retourne une page personnalisée.",
            en: "For example: a user submits a form. The server uses CGI to run a script that processes the data and returns a personalized page.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "CGI a été une étape importante vers les applications web dynamiques.",
            en: "CGI was an important step towards dynamic web applications.",
          },
        },

        {
          type: "heading",
          level: 3,
          text: {
            fr: "Application web : avantages, inconvénients et fondements",
            en: "Web application: advantages, drawbacks and foundations",
          },
        },
        {
          type: "paragraph",
          text: { fr: "**Avantages :**", en: "**Advantages:**" },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Portabilité de la partie client",
                en: "Portability of the client side",
              },
              children: [
                {
                  fr: "Fonctionne sur tout navigateur (indépendamment du système d'exploitation)",
                  en: "Works on any browser (regardless of the operating system)",
                },
              ],
            },
            {
              text: {
                fr: "Déploiement facilité",
                en: "Easy deployment",
              },
              children: [
                {
                  fr: "Pas besoin d'installer l'application sur chaque poste ; les langages web sont standards",
                  en: "No need to install the application on every machine; web languages are standard",
                },
              ],
            },
            {
              text: { fr: "Accès massif", en: "Mass access" },
              children: [
                {
                  fr: "Pas de limitation sur le nombre d'utilisateurs simultanés",
                  en: "No limit on the number of simultaneous users",
                },
              ],
            },
            {
              text: {
                fr: "Sécurité simplifiée",
                en: "Simplified security",
              },
              children: [
                {
                  fr: "Un seul protocole d'accès : HTTP ou HTTPS, via une URL unique",
                  en: "A single access protocol: HTTP or HTTPS, via a unique URL",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "**Inconvénient principal :**",
            en: "**Main drawback:**",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Difficile à tester et à mettre au point.",
            en: "Hard to test and debug.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Pourquoi ? En raison de l'interaction client-serveur asynchrone, des différences entre navigateurs, des dépendances réseau, etc.",
            en: "Why? Because of the asynchronous client-server interaction, differences between browsers, network dependencies, etc.",
          },
        },
      ],
    },
    { title: "JavaScript", blocks: [] },
    { title: "PHP", blocks: [] },
    { title: "CMS", blocks: [] },
    { title: { fr: "Projet", en: "Project" }, blocks: [] },
  ],
};
