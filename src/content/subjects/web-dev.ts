import type { Subject } from "../types";

export const webDev: Subject = {
  slug: "web-dev",
  title: "Web Dev",
  date: "May 19, 2025",
  status: "published",
  summary:
    "In this course, we dig deeper into the concepts of the Web Dev world. We learn about JavaScript, PHP and CMS.",
  classes: [
    {
      title: "Architecture and application of Web",
      blocks: [
        { type: "heading", level: 3, text: "Une application web" },
        {
          type: "paragraph",
          text: "Une application web est un logiciel accessible via un navigateur web. Elle fonctionne grâce à une architecture répartie entre différents composants.",
        },
        {
          type: "list",
          items: [
            {
              text: "**Navigateur web (client) :** Interface utilisée par l'utilisateur. Envoie des requêtes (souvent HTTP) au serveur.",
            },
            {
              text: "**Serveur web :** Reçoit les requêtes, traite les données et renvoie les réponses (pages HTML, JSON, etc.).",
            },
            {
              text: "**Serveur de base de données (SGBD) :** Stocke et gère les données.",
            },
            {
              text: "**Serveur d'authentification :** Vérifie l'identité de l'utilisateur, souvent via LDAP.",
            },
          ],
        },

        { type: "heading", level: 3, text: "Architecture" },
        { type: "paragraph", text: "On utilise l'architecture client/serveur." },
        { type: "heading", level: 4, text: "Déroulement :" },
        {
          type: "list",
          ordered: true,
          items: [
            {
              text: "Le client (navigateur) envoie une requête au serveur.",
            },
            {
              text: "Le serveur traite la requête et envoie une réponse (souvent une page web ou des données).",
            },
            {
              text: "Le serveur peut aussi agir en tant que client pour faire appel à un autre serveur (ex. une API, une base de données, etc.).",
            },
          ],
        },

        { type: "heading", level: 3, text: "HTTPD" },
        { type: "paragraph", text: "**httpd = HyperText Transfer Protocol Daemon**" },
        {
          type: "paragraph",
          text: "C'est un programme serveur (souvent Apache ou Nginx) qui attend et traite les requêtes HTTP venant des clients.",
        },
        { type: "paragraph", text: "Il tourne en tâche de fond sur le serveur." },
        {
          type: "paragraph",
          text: "Son rôle : recevoir des requêtes HTTP (comme GET, POST), les analyser et répondre.",
        },
        {
          type: "heading",
          level: 4,
          text: "Que fait le client quand il clique sur un lien HTML ?",
        },
        {
          type: "code",
          text: '<a href="http://www.iro.umontreal.ca/~vaucher/test.html">Fichier</a>',
        },
        {
          type: "paragraph",
          text: "Cela déclenche une requête GET comprenant :",
        },
        {
          type: "list",
          items: [
            { text: "Nom de la machine : www.iro.umontreal.ca" },
            { text: "Chemin du fichier : ~vaucher/test.html" },
            { text: "Protocole : http" },
          ],
        },
        {
          type: "paragraph",
          text: "Le navigateur convertit cela en une requête GET HTTP, envoyée au serveur avec l'adresse, le chemin, et d'autres informations (comme le port défaut : 80).",
        },

        { type: "heading", level: 3, text: "Évolution vers le Web moderne" },
        { type: "heading", level: 4, text: "Web 3.0 et services en ligne" },
        {
          type: "paragraph",
          text: "Aujourd'hui, les applications web vont au-delà de simples pages HTML.",
        },
        {
          type: "paragraph",
          text: "On parle d'applications connectées à des bases de données avec des services en ligne : banques, e-commerce, météo, réservations…",
        },
        { type: "paragraph", text: "Ces applications :" },
        {
          type: "list",
          items: [
            { text: "Ont une interface fonctionnelle (frontend)" },
            { text: "Sont reliées à une base de données" },
            { text: "Offrent une interface d'administration (backend)" },
          ],
        },
        { type: "heading", level: 4, text: "Pourquoi httpd seul ne suffit pas ?" },
        {
          type: "list",
          items: [
            { text: "Les pages statistiques ne suffisent plus" },
            {
              text: "Il faut que la réponse du serveur soit dynamique (adaptée à l'utilisateur, etc.)",
            },
            { text: "Solution : ajout du CGI" },
          ],
        },

        { type: "heading", level: 3, text: "CGI" },
        { type: "paragraph", text: "**CGI = Common Gateway Interface**" },
        {
          type: "paragraph",
          text: "CGI est une interface entre le serveur web (httpd) et des programmes externes.",
        },
        { type: "paragraph", text: "Cela permet de générer dynamiquement des pages." },
        {
          type: "paragraph",
          text: "Par exemple : un utilisateur soumet un formulaire. Le serveur utilise CGI pour exécuter un script qui traite les données et retourne une page personnalisée.",
        },
        {
          type: "paragraph",
          text: "CGI a été une étape importante vers les applications web dynamiques.",
        },

        {
          type: "heading",
          level: 3,
          text: "Application web : avantages, inconvénients et fondements",
        },
        { type: "paragraph", text: "**Avantages :**" },
        {
          type: "list",
          items: [
            {
              text: "Portabilité de la partie client",
              children: [
                "Fonctionne sur tout navigateur (indépendamment du système d'exploitation)",
              ],
            },
            {
              text: "Déploiement facilité",
              children: [
                "Pas besoin d'installer l'application sur chaque poste ; les langages web sont standards",
              ],
            },
            {
              text: "Accès massif",
              children: ["Pas de limitation sur le nombre d'utilisateurs simultanés"],
            },
            {
              text: "Sécurité simplifiée",
              children: [
                "Un seul protocole d'accès : HTTP ou HTTPS, via une URL unique",
              ],
            },
          ],
        },
        { type: "paragraph", text: "**Inconvénient principal :**" },
        {
          type: "paragraph",
          text: "Difficile à tester et à mettre au point.",
        },
        {
          type: "paragraph",
          text: "Pourquoi ? En raison de l'interaction client-serveur asynchrone, des différences entre navigateurs, des dépendances réseau, etc.",
        },
      ],
    },
    { title: "JavaScript", blocks: [] },
    { title: "PHP", blocks: [] },
    { title: "CMS", blocks: [] },
    { title: "Project", blocks: [] },
  ],
};
