import type { Subject } from "../../types";
import { chapterOne } from "./chapter1";
import { chapterTwo } from "./chapter2";
import { chapterThree } from "./chapter3";
import { chapterFour } from "./chapter4";
import { tdOne } from "./td1";
import { tdTwo } from "./td2";
import { tdThree } from "./td3";

export const conceptionBd: Subject = {
  slug: "conception-bd",
  title: {
    fr: "Conception et Manipulation de Bases de Données",
    en: "Database Design and Manipulation",
  },
  summary: {
    fr: "Modélisation conceptuelle, relationnel, SQL Oracle et PL/SQL — basé strictement sur le matériel de cours.",
    en: "Conceptual modelling, relational model, Oracle SQL and PL/SQL — strictly based on the provided class material.",
  },
  date: {
    fr: "Semestre BD2",
    en: "BD2 semester",
  },
  status: "published",
  classes: [
    {
      title: { fr: "Chapitre 1 — Modélisation conceptuelle (E-A)", en: "Chapter 1 — Conceptual modelling (E-R)" },
      label: { fr: "CM1", en: "CM1" },
      blocks: chapterOne,
      parts: [
        { id: "p1", label: { fr: "1. Pourquoi modéliser ?", en: "1. Why model data?" } },
        { id: "p2", label: { fr: "2. Modélisation conceptuelle", en: "2. Conceptual modelling" } },
        { id: "p3", label: { fr: "3. Modèle Entité-Association", en: "3. Entity-Relationship model" } },
        { id: "p4", label: { fr: "4. Entité, association, propriété", en: "4. Entity, association, property" } },
        { id: "p5", label: { fr: "5. Les cardinalités", en: "5. Cardinalities" } },
        { id: "p6", label: { fr: "6. Contraintes et intégrité", en: "6. Constraints and integrity" } },
        { id: "p7", label: { fr: "7. Modèle E-A avancé", en: "7. Advanced E-R model" } },
        { id: "p8", label: { fr: "8. Étude de cas : Scolarité", en: "8. Case study: Student records" } },
      ],
    },
    {
      title: { fr: "Chapitre 2 — Modèle relationnel et normalisation", en: "Chapter 2 — Relational model & normalization" },
      label: { fr: "CM2", en: "CM2" },
      blocks: chapterTwo,
      parts: [
        { id: "p1", label: { fr: "1. Concepts du modèle relationnel", en: "1. Relational model concepts" } },
        { id: "p2", label: { fr: "2. Transformation E-A → relationnel", en: "2. E-R to relational transformation" } },
        { id: "p3", label: { fr: "3. Relation universelle et anomalies", en: "3. Universal relation & anomalies" } },
        { id: "p4", label: { fr: "4. Dépendances fonctionnelles", en: "4. Functional dependencies" } },
        { id: "p5", label: { fr: "5. Axiomes d'Armstrong", en: "5. Armstrong's axioms" } },
        { id: "p6", label: { fr: "6. Clés et typologie des DF", en: "6. Keys and FD typology" } },
        { id: "p7", label: { fr: "7. Graphe, fermeture, couverture minimale", en: "7. Graph, closure, minimal cover" } },
        { id: "p8", label: { fr: "8. Formes normales 1FN-2FN-3FN", en: "8. Normal forms 1NF-2FN-3NF" } },
        { id: "p9", label: { fr: "9. BCNF, DFM, 4FN, DI", en: "9. BCNF, MVD, 4NF, IND" } },
      ],
    },
    {
      title: { fr: "Chapitre 3 — SQL / Oracle", en: "Chapter 3 — SQL / Oracle" },
      label: { fr: "CM3", en: "CM3" },
      blocks: chapterThree,
      parts: [
        { id: "p1", label: { fr: "1. Objets Oracle et types", en: "1. Oracle objects & types" } },
        { id: "p2", label: { fr: "2. DDL : tables, contraintes, index, séquences", en: "2. DDL: tables, constraints, indexes, sequences" } },
        { id: "p3", label: { fr: "3. DML et transactions", en: "3. DML and transactions" } },
        { id: "p4", label: { fr: "4. Requêtes SELECT", en: "4. SELECT queries" } },
        { id: "p5", label: { fr: "5. Les jointures", en: "5. Joins" } },
        { id: "p6", label: { fr: "6. Agrégats, GROUP BY, HAVING, CASE", en: "6. Aggregates, GROUP BY, HAVING, CASE" } },
        { id: "p7", label: { fr: "7. Sous-requêtes, ANY/ALL/EXISTS, CTE", en: "7. Subqueries, ANY/ALL/EXISTS, CTEs" } },
        { id: "p8", label: { fr: "8. Les vues", en: "8. Views" } },
      ],
    },
    {
      title: { fr: "Chapitre 4 — PL/SQL / Oracle", en: "Chapter 4 — PL/SQL / Oracle" },
      label: { fr: "CM4", en: "CM4" },
      blocks: chapterFour,
      parts: [
        { id: "p1", label: { fr: "1. Structure d'un bloc PL/SQL", en: "1. PL/SQL block structure" } },
        { id: "p2", label: { fr: "2. Contrôles et commandes SQL", en: "2. Controls & SQL commands" } },
        { id: "p3", label: { fr: "3. Les curseurs", en: "3. Cursors" } },
        { id: "p4", label: { fr: "4. Gestion des exceptions", en: "4. Exception handling" } },
        { id: "p5", label: { fr: "5. Procédures, fonctions, packages", en: "5. Procedures, functions, packages" } },
        { id: "p6", label: { fr: "6. Éléments avancés", en: "6. Advanced elements" } },
      ],
    },
    {
      title: { fr: "TD1 — Modélisation conceptuelle", en: "TD1 — Conceptual modelling" },
      label: { fr: "TD1", en: "TD1" },
      blocks: tdOne,
      parts: [
        { id: "p1", label: { fr: "1. Géographie & Météorologie", en: "1. Geography & Meteorology" } },
        { id: "p2", label: { fr: "2. Gestion des employés", en: "2. Employee management" } },
        { id: "p3", label: { fr: "3. Horaires LeMet", en: "3. LeMet timetables" } },
        { id: "p4", label: { fr: "4. Compagnie aérienne", en: "4. Airline" } },
      ],
    },
    {
      title: { fr: "TD2 — Normalisation des relations", en: "TD2 — Relation normalization" },
      label: { fr: "TD2", en: "TD2" },
      blocks: tdTwo,
      parts: [
        { id: "p1", label: { fr: "Exercice 1", en: "Exercise 1" } },
        { id: "p2", label: { fr: "Exercice 2", en: "Exercise 2" } },
        { id: "p3", label: { fr: "Exercice 3", en: "Exercise 3" } },
        { id: "p4", label: { fr: "Exercice 4", en: "Exercise 4" } },
        { id: "p5", label: { fr: "Exercice 5", en: "Exercise 5" } },
        { id: "p6", label: { fr: "Exercice 6", en: "Exercise 6" } },
      ],
    },
    {
      title: { fr: "TD3 — Interrogation SQL (Oracle)", en: "TD3 — SQL querying (Oracle)" },
      label: { fr: "TD3", en: "TD3" },
      blocks: tdThree,
      parts: [
        { id: "p1", label: { fr: "Exercice I — Employés", en: "Exercise I — Employees" } },
        { id: "p2", label: { fr: "Exercice II — Géographie & Météo", en: "Exercise II — Geography & Meteorology" } },
      ],
    },
  ],
};