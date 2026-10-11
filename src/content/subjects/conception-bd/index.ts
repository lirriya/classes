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
    uk: "Проєктування та робота з базами даних",
  },
  summary: {
    fr: "Modélisation conceptuelle, relationnel, SQL Oracle et PL/SQL — basé strictement sur le matériel de cours.",
    en: "Conceptual modelling, relational model, Oracle SQL and PL/SQL — strictly based on the provided class material.",
    uk: "Концептуальне моделювання, реляційна модель, Oracle SQL та PL/SQL — суворо на основі наданих матеріалів курсу.",
  },
  date: {
    fr: "Semestre BD2",
    en: "BD2 semester",
    uk: "Семестр BD2",
  },
  status: "published",
  classes: [
    {
      title: { fr: "Chapitre 1 — Modélisation conceptuelle (E-A)", en: "Chapter 1 — Conceptual modelling (E-R)", uk: "Розділ 1 — Концептуальне моделювання (E-A)" },
      label: { fr: "CM1", en: "CM1", uk: "CM1" },
      blocks: chapterOne,
      parts: [
        { id: "p1", label: { fr: "1. Pourquoi modéliser ?", en: "1. Why model data?", uk: "1. Навіщо моделювати дані?" } },
        { id: "p2", label: { fr: "2. Modélisation conceptuelle", en: "2. Conceptual modelling", uk: "2. Концептуальне моделювання" } },
        { id: "p3", label: { fr: "3. Modèle Entité-Association", en: "3. Entity-Relationship model", uk: "3. Модель сутність-зв'язок" } },
        { id: "p4", label: { fr: "4. Entité, association, propriété", en: "4. Entity, association, property", uk: "4. Сутність, зв'язок, властивість" } },
        { id: "p5", label: { fr: "5. Les cardinalités", en: "5. Cardinalities", uk: "5. Кардинальності" } },
        { id: "p6", label: { fr: "6. Contraintes et intégrité", en: "6. Constraints and integrity", uk: "6. Обмеження та цілісність" } },
        { id: "p7", label: { fr: "7. Modèle E-A avancé", en: "7. Advanced E-R model", uk: "7. Розширена модель E-A" } },
        { id: "p8", label: { fr: "8. Étude de cas : Scolarité", en: "8. Case study: Student records", uk: "8. Практичний приклад: навчання" } },
      ],
    },
    {
      title: { fr: "Chapitre 2 — Modèle relationnel et normalisation", en: "Chapter 2 — Relational model & normalization", uk: "Розділ 2 — Реляційна модель і нормалізація" },
      label: { fr: "CM2", en: "CM2", uk: "CM2" },
      blocks: chapterTwo,
      parts: [
        { id: "p1", label: { fr: "1. Concepts du modèle relationnel", en: "1. Relational model concepts", uk: "1. Поняття реляційної моделі" } },
        { id: "p2", label: { fr: "2. Transformation E-A → relationnel", en: "2. E-R to relational transformation", uk: "2. Перетворення E-A → реляційна модель" } },
        { id: "p3", label: { fr: "3. Relation universelle et anomalies", en: "3. Universal relation & anomalies", uk: "3. Універсальне відношення та аномалії" } },
        { id: "p4", label: { fr: "4. Dépendances fonctionnelles", en: "4. Functional dependencies", uk: "4. Функціональні залежності" } },
        { id: "p5", label: { fr: "5. Axiomes d'Armstrong", en: "5. Armstrong's axioms", uk: "5. Аксіоми Армстронга" } },
        { id: "p6", label: { fr: "6. Clés et typologie des DF", en: "6. Keys and FD typology", uk: "6. Ключі та типологія ФЗ" } },
        { id: "p7", label: { fr: "7. Graphe, fermeture, couverture minimale", en: "7. Graph, closure, minimal cover", uk: "7. Граф, замикання, мінімальне покриття" } },
        { id: "p8", label: { fr: "8. Formes normales 1FN-2FN-3FN", en: "8. Normal forms 1NF-2FN-3NF", uk: "8. Нормальні форми 1НФ-2НФ-3НФ" } },
        { id: "p9", label: { fr: "9. BCNF, DFM, 4FN, DI", en: "9. BCNF, MVD, 4NF, IND", uk: "9. BCNF, DFM, 4НФ, DI" } },
      ],
    },
    {
      title: { fr: "Chapitre 3 — SQL / Oracle", en: "Chapter 3 — SQL / Oracle", uk: "Розділ 3 — SQL / Oracle" },
      label: { fr: "CM3", en: "CM3", uk: "CM3" },
      blocks: chapterThree,
      parts: [
        { id: "p1", label: { fr: "1. Objets Oracle et types", en: "1. Oracle objects & types", uk: "1. Об'єкти Oracle та типи" } },
        { id: "p2", label: { fr: "2. DDL : tables, contraintes, index, séquences", en: "2. DDL: tables, constraints, indexes, sequences", uk: "2. DDL: таблиці, обмеження, індекси, послідовності" } },
        { id: "p3", label: { fr: "3. DML et transactions", en: "3. DML and transactions", uk: "3. DML і транзакції" } },
        { id: "p4", label: { fr: "4. Requêtes SELECT", en: "4. SELECT queries", uk: "4. Запити SELECT" } },
        { id: "p5", label: { fr: "5. Les jointures", en: "5. Joins", uk: "5. Об'єднання" } },
        { id: "p6", label: { fr: "6. Agrégats, GROUP BY, HAVING, CASE", en: "6. Aggregates, GROUP BY, HAVING, CASE", uk: "6. Агрегати, GROUP BY, HAVING, CASE" } },
        { id: "p7", label: { fr: "7. Sous-requêtes, ANY/ALL/EXISTS, CTE", en: "7. Subqueries, ANY/ALL/EXISTS, CTEs", uk: "7. Підзапити, ANY/ALL/EXISTS, CTE" } },
        { id: "p8", label: { fr: "8. Les vues", en: "8. Views", uk: "8. Подання" } },
      ],
    },
    {
      title: { fr: "Chapitre 4 — PL/SQL / Oracle", en: "Chapter 4 — PL/SQL / Oracle", uk: "Розділ 4 — PL/SQL / Oracle" },
      label: { fr: "CM4", en: "CM4", uk: "CM4" },
      blocks: chapterFour,
      parts: [
        { id: "p1", label: { fr: "1. Structure d'un bloc PL/SQL", en: "1. PL/SQL block structure", uk: "1. Структура блоку PL/SQL" } },
        { id: "p2", label: { fr: "2. Contrôles et commandes SQL", en: "2. Controls & SQL commands", uk: "2. Керувальні конструкції та команди SQL" } },
        { id: "p3", label: { fr: "3. Les curseurs", en: "3. Cursors", uk: "3. Курсори" } },
        { id: "p4", label: { fr: "4. Gestion des exceptions", en: "4. Exception handling", uk: "4. Обробка винятків" } },
        { id: "p5", label: { fr: "5. Procédures, fonctions, packages", en: "5. Procedures, functions, packages", uk: "5. Процедури, функції, пакети" } },
        { id: "p6", label: { fr: "6. Éléments avancés", en: "6. Advanced elements", uk: "6. Розширені елементи" } },
      ],
    },
    {
      title: { fr: "TD1 — Modélisation conceptuelle", en: "TD1 — Conceptual modelling", uk: "TD1 — Концептуальне моделювання" },
      label: { fr: "TD1", en: "TD1", uk: "TD1" },
      blocks: tdOne,
      parts: [
        { id: "p1", label: { fr: "1. Géographie & Météorologie", en: "1. Geography & Meteorology", uk: "1. Географія та метеорологія" } },
        { id: "p2", label: { fr: "2. Gestion des employés", en: "2. Employee management", uk: "2. Управління працівниками" } },
        { id: "p3", label: { fr: "3. Horaires LeMet", en: "3. LeMet timetables", uk: "3. Розклади LeMet" } },
        { id: "p4", label: { fr: "4. Compagnie aérienne", en: "4. Airline", uk: "4. Авіакомпанія" } },
      ],
    },
    {
      title: { fr: "TD2 — Normalisation des relations", en: "TD2 — Relation normalization", uk: "TD2 — Нормалізація відношень" },
      label: { fr: "TD2", en: "TD2", uk: "TD2" },
      blocks: tdTwo,
      parts: [
        { id: "p1", label: { fr: "Exercice 1", en: "Exercise 1", uk: "Вправа 1" } },
        { id: "p2", label: { fr: "Exercice 2", en: "Exercise 2", uk: "Вправа 2" } },
        { id: "p3", label: { fr: "Exercice 3", en: "Exercise 3", uk: "Вправа 3" } },
        { id: "p4", label: { fr: "Exercice 4", en: "Exercise 4", uk: "Вправа 4" } },
        { id: "p5", label: { fr: "Exercice 5", en: "Exercise 5", uk: "Вправа 5" } },
        { id: "p6", label: { fr: "Exercice 6", en: "Exercise 6", uk: "Вправа 6" } },
      ],
    },
    {
      title: { fr: "TD3 — Interrogation SQL (Oracle)", en: "TD3 — SQL querying (Oracle)", uk: "TD3 — Запити SQL (Oracle)" },
      label: { fr: "TD3", en: "TD3", uk: "TD3" },
      blocks: tdThree,
      parts: [
        { id: "p1", label: { fr: "Exercice I — Employés", en: "Exercise I — Employees", uk: "Вправа I — Працівники" } },
        { id: "p2", label: { fr: "Exercice II — Géographie & Météo", en: "Exercise II — Geography & Meteorology", uk: "Вправа II — Географія та метеорологія" } },
      ],
    },
  ],
};
