import type { Block } from "../../types";

export const tdThree: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce TD3 porte sur l'**interrogation SQL (Oracle)**. Il comprend deux exercices : Employés (11 requêtes) et Géographie & Météo (21 requêtes), avec les solutions SQL exactes du cours.",
      en: "TD3 focuses on **SQL querying (Oracle)**. It includes two exercises: Employees (11 queries) and Geography & Meteorology (21 queries), with the exact SQL solutions from the course.",
      uk: "Цей TD3 присвячено **SQL-запитам (Oracle)**. Він містить дві вправи: «Працівники» (11 запитів) та «Географія й метеорологія» (21 запит), з точними SQL-розв'язками з курсу.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "Exercice I — Employés", en: "Exercise I — Employees", uk: "Вправа I — Працівники" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Schéma", en: "Schema", uk: "Схема" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Employé (NoEmp, NomEmp, Emploi, NoDep, Salaire, SupHier) ; Département (NoDep, NomDep, Localisation, Responsable). Remarques : SupHier et Responsable font référence à NoEmp.",
              en: "Employee (EmpNo, EmpName, Job, DeptNo, Salary, ManagerEmpNo); Department (DeptNo, DeptName, Location, ManagerEmpNo). Notes: ManagerEmpNo and Manager (in Dept) reference EmpNo.",
              uk: "Employé (NoEmp, NomEmp, Emploi, NoDep, Salaire, SupHier) ; Département (NoDep, NomDep, Localisation, Responsable). Зауваження: SupHier і Responsable посилаються на NoEmp.",
            },
            solution: { fr: "Schéma fourni.", en: "Given schema.", uk: "Схему наведено." },
          },
        ],
      },
      {
        title: { fr: "1. Nom des employés du département 'Vente'", en: "1. Names of employees in department 'Sales'", uk: "1. Імена працівників відділу 'Vente'" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomEmp FROM Employé JOIN Département ON Employé.NoDep = Département.NoDep WHERE NomDep = 'Vente';\n\n(Autres variantes avec IN ou sous-requête acceptées.)",
              en: "SELECT EmpName FROM Employee JOIN Department ON Employee.DeptNo = Department.DeptNo WHERE DeptName = 'Sales';",
              uk: "SELECT NomEmp FROM Employé JOIN Département ON Employé.NoDep = Département.NoDep WHERE NomDep = 'Vente';\n\n(Інші варіанти з IN або підзапитом також приймаються.)",
            },
          },
        ],
      },
      {
        title: { fr: "2. Nom et salaire des vendeurs du département 'Vente' avec Salaire > 1500", en: "2. Name and salary of 'Salesperson' in 'Sales' with Salary > 1500", uk: "2. Ім'я та зарплата продавців відділу 'Vente' із Salaire > 1500" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomEmp, Salaire\nFROM Employé, Département\nWHERE Emploi = 'Vendeur' AND Salaire > 1500\n  AND Employé.NoDep = Département.NoDep AND NomDep = 'Vente';",
              en: "SELECT EmpName, Salary\nFROM Employee e, Department d\nWHERE Job = 'Salesperson' AND Salary > 1500\n  AND e.DeptNo = d.DeptNo AND DeptName = 'Sales';",
              uk: "SELECT NomEmp, Salaire\nFROM Employé, Département\nWHERE Emploi = 'Vendeur' AND Salaire > 1500\n  AND Employé.NoDep = Département.NoDep AND NomDep = 'Vente';",
            },
          },
        ],
      },
      {
        title: { fr: "3. Nom des employés 'Vendeur' ou 'Technicien' du département 'Vente'", en: "3. Names of 'Salesperson' or 'Technician' in 'Sales'", uk: "3. Імена працівників 'Vendeur' або 'Technicien' відділу 'Vente'" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomEmp\nFROM Employé, Département\nWHERE Emploi IN ('Vendeur','Technicien')\n  AND Employé.NoDep = Département.NoDep AND NomDep = 'Vente';",
              en: "SELECT EmpName\nFROM Employee e, Department d\nWHERE Job IN ('Salesperson','Technician')\n  AND e.DeptNo = d.DeptNo AND DeptName = 'Sales';",
              uk: "SELECT NomEmp\nFROM Employé, Département\nWHERE Emploi IN ('Vendeur','Technicien')\n  AND Employé.NoDep = Département.NoDep AND NomDep = 'Vente';",
            },
          },
        ],
      },
      {
        title: { fr: "4. Employés dont le supérieur n'est pas le responsable de leur département", en: "4. Employees whose manager is not the department manager", uk: "4. Працівники, чий керівник не є відповідальним за їхній відділ" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomEmp\nFROM Employé E\nWHERE SupHier NOT IN (\n  SELECT Responsable\n  FROM Département\n  WHERE NoDep = E.NoDep\n);",
              en: "SELECT EmpName\nFROM Employee E\nWHERE ManagerEmpNo NOT IN (\n  SELECT ManagerEmpNo\n  FROM Department\n  WHERE DeptNo = E.DeptNo\n);",
              uk: "SELECT NomEmp\nFROM Employé E\nWHERE SupHier NOT IN (\n  SELECT Responsable\n  FROM Département\n  WHERE NoDep = E.NoDep\n);",
            },
          },
        ],
      },
      {
        title: { fr: "5. Salaires inférieurs à la moitié de celui du supérieur hiérarchique", en: "5. Salaries less than half of their manager's salary", uk: "5. Зарплати, менші за половину зарплати безпосереднього керівника" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT X.NomEmp\nFROM Employé X, Employé Y\nWHERE X.SupHier = Y.NoEmp AND X.Salaire < Y.Salaire / 2;",
              en: "SELECT X.EmpName\nFROM Employee X, Employee Y\nWHERE X.ManagerEmpNo = Y.EmpNo AND X.Salary < Y.Salary / 2;",
              uk: "SELECT X.NomEmp\nFROM Employé X, Employé Y\nWHERE X.SupHier = Y.NoEmp AND X.Salaire < Y.Salaire / 2;",
            },
          },
        ],
      },
      {
        title: { fr: "6. Départements où l'on trouve tous les emplois", en: "6. Departments that contain all jobs", uk: "6. Відділи, де трапляються всі посади" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL (formulation EXISTS/NOT EXISTS).", en: "Write the SQL query (EXISTS/NOT EXISTS formulation).", uk: "Напишіть SQL-запит (формулювання EXISTS/NOT EXISTS)." },
            solution: {
              fr: "SELECT NomDep\nFROM Département D\nWHERE NOT EXISTS (\n  SELECT Emploi\n  FROM Employé E\n  WHERE NOT EXISTS (\n    SELECT NULL\n    FROM Employé\n    WHERE Emploi = E.Emploi AND NoDep = D.NoDep\n  )\n);",
              en: "SELECT DeptName\nFROM Department D\nWHERE NOT EXISTS (\n  SELECT Job\n  FROM Employee E\n  WHERE NOT EXISTS (\n    SELECT NULL\n    FROM Employee\n    WHERE Job = E.Job AND DeptNo = D.DeptNo\n  )\n);",
              uk: "SELECT NomDep\nFROM Département D\nWHERE NOT EXISTS (\n  SELECT Emploi\n  FROM Employé E\n  WHERE NOT EXISTS (\n    SELECT NULL\n    FROM Employé\n    WHERE Emploi = E.Emploi AND NoDep = D.NoDep\n  )\n);",
            },
          },
        ],
      },
      {
        title: { fr: "7. Pour chaque département : No, Nom, nb employés, salaire moyen/max/min", en: "7. For each department: No, Name, count, avg/max/min salary", uk: "7. Для кожного відділу: No, Nom, кількість працівників, середня/макс./мін. зарплата" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT D.NoDep, NomDep, NbEmp, SalaireMoyen, SalaireMax, SalaireMin\nFROM Département D,\n     (SELECT NoDep,\n             COUNT(*) NbEmp,\n             AVG(Salaire) SalaireMoyen,\n             MAX(Salaire) SalaireMax,\n             MIN(Salaire) SalaireMin\n      FROM Employé\n      GROUP BY NoDep) R\nWHERE D.NoDep = R.NoDep;",
              en: "SELECT D.DeptNo, DeptName, NbEmp, AvgSal, MaxSal, MinSal\nFROM Department D,\n     (SELECT DeptNo,\n             COUNT(*) NbEmp,\n             AVG(Salary) AvgSal,\n             MAX(Salary) MaxSal,\n             MIN(Salary) MinSal\n      FROM Employee\n      GROUP BY DeptNo) R\nWHERE D.DeptNo = R.DeptNo;",
              uk: "SELECT D.NoDep, NomDep, NbEmp, SalaireMoyen, SalaireMax, SalaireMin\nFROM Département D,\n     (SELECT NoDep,\n             COUNT(*) NbEmp,\n             AVG(Salaire) SalaireMoyen,\n             MAX(Salaire) SalaireMax,\n             MIN(Salaire) SalaireMin\n      FROM Employé\n      GROUP BY NoDep) R\nWHERE D.NoDep = R.NoDep;",
            },
          },
        ],
      },
      {
        title: { fr: "8. Nom du responsable du département avec >= 3 employés", en: "8. Name of manager of department with >= 3 employees", uk: "8. Ім'я відповідального за відділ із >= 3 працівниками" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomEmp\nFROM Employé, Département, (SELECT NoDep, COUNT(*) NbEmp FROM Employé GROUP BY NoDep) R\nWHERE NoEmp = Responsable\n  AND Département.NoDep = R.NoDep AND NbEmp >= 3;",
              en: "SELECT EmpName\nFROM Employee E, Department D, (SELECT DeptNo, COUNT(*) NbEmp FROM Employee GROUP BY DeptNo) R\nWHERE E.EmpNo = D.ManagerEmpNo\n  AND D.DeptNo = R.DeptNo AND NbEmp >= 3;",
              uk: "SELECT NomEmp\nFROM Employé, Département, (SELECT NoDep, COUNT(*) NbEmp FROM Employé GROUP BY NoDep) R\nWHERE NoEmp = Responsable\n  AND Département.NoDep = R.NoDep AND NbEmp >= 3;",
            },
          },
        ],
      },
      {
        title: { fr: "9. Statistiques du département dirigé par 'Durand'", en: "9. Stats for department managed by 'Durand'", uk: "9. Статистика відділу, яким керує 'Durand'" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NoDep, NomDep, NbEmp, SalaireMax, SalaireMoyen, SalaireMin\nFROM Employé E, Département D,\n     (SELECT NoDep, COUNT(*) NbEmp, AVG(Salaire) SalaireMoyen, MAX(Salaire) SalaireMax, MIN(Salaire) SalaireMin\n      FROM Employé GROUP BY NoDep) R\nWHERE E.NomEmp = 'Durand' AND E.NoEmp = D.Responsable AND D.NoDep = R.NoDep;",
              en: "SELECT D.DeptNo, DeptName, NbEmp, MaxSal, AvgSal, MinSal\nFROM Employee E, Department D,\n     (SELECT DeptNo, COUNT(*) NbEmp, AVG(Salary) AvgSal, MAX(Salary) MaxSal, MIN(Salary) MinSal\n      FROM Employee GROUP BY DeptNo) R\nWHERE E.EmpName = 'Durand' AND E.EmpNo = D.ManagerEmpNo AND D.DeptNo = R.DeptNo;",
              uk: "SELECT NoDep, NomDep, NbEmp, SalaireMax, SalaireMoyen, SalaireMin\nFROM Employé E, Département D,\n     (SELECT NoDep, COUNT(*) NbEmp, AVG(Salaire) SalaireMoyen, MAX(Salaire) SalaireMax, MIN(Salaire) SalaireMin\n      FROM Employé GROUP BY NoDep) R\nWHERE E.NomEmp = 'Durand' AND E.NoEmp = D.Responsable AND D.NoDep = R.NoDep;",
            },
          },
        ],
      },
      {
        title: { fr: "10. Nombre moyen d'employés dans les départements", en: "10. Average number of employees per department", uk: "10. Середня кількість працівників у відділах" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT AVG(NbEmp)\nFROM (SELECT NoDep, COUNT(*) NbEmp FROM Employé GROUP BY NoDep);",
              en: "SELECT AVG(NbEmp)\nFROM (SELECT DeptNo, COUNT(*) NbEmp FROM Employee GROUP BY DeptNo);",
              uk: "SELECT AVG(NbEmp)\nFROM (SELECT NoDep, COUNT(*) NbEmp FROM Employé GROUP BY NoDep);",
            },
          },
        ],
      },
      {
        title: { fr: "11. Hiérarchie des employés (le plus haut niveau en premier)", en: "11. Employee hierarchy (top level first)", uk: "11. Ієрархія працівників (найвищий рівень першим)" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL (CONNECT BY / START WITH).", en: "Write the SQL query (CONNECT BY / START WITH).", uk: "Напишіть SQL-запит (CONNECT BY / START WITH)." },
            solution: {
              fr: "SELECT level niveau,\n       lpad('------',2*(level-1)) || NomEmp AS Nom,\n       NoEmp, SupHier, Emploi\nFROM Employe\nSTART WITH SupHier IS NULL\nCONNECT BY PRIOR NoEmp = SupHier;",
              en: "SELECT level,\n       LPAD('------', 2*(level-1)) || EmpName AS Name,\n       EmpNo, ManagerEmpNo, Job\nFROM Employee\nSTART WITH ManagerEmpNo IS NULL\nCONNECT BY PRIOR EmpNo = ManagerEmpNo;",
              uk: "SELECT level niveau,\n       lpad('------',2*(level-1)) || NomEmp AS Nom,\n       NoEmp, SupHier, Emploi\nFROM Employe\nSTART WITH SupHier IS NULL\nCONNECT BY PRIOR NoEmp = SupHier;",
            },
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "Exercice II — Géographie & Météo", en: "Exercise II — Geography & Meteorology", uk: "Вправа II — Географія й метеорологія" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Schéma", en: "Schema", uk: "Схема" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Pays(CodePays, NomPays, Population, Superficie, PIB, Capitale, Langue, Continent) ; Ville(NomVille, CodePays, NbHabitants) ; Frontiere(CodePays1, CodePays2) ; Temperature(NomVille, CodePays, Jour, TempMax, TempMin) ; Pluie(NomVille, CodePays, Mois, Pluviometrie).",
              en: "Country(CountryCode, CountryName, Population, Area, GDP, Capital, Language, Continent) ; City(CityName, CountryCode, Inhabitants) ; Border(CountryCode1, CountryCode2) ; Temperature(CityName, CountryCode, Day, TempMax, TempMin) ; Rainfall(CityName, CountryCode, Month, RainfallMm).",
              uk: "Pays(CodePays, NomPays, Population, Superficie, PIB, Capitale, Langue, Continent) ; Ville(NomVille, CodePays, NbHabitants) ; Frontiere(CodePays1, CodePays2) ; Temperature(NomVille, CodePays, Jour, TempMax, TempMin) ; Pluie(NomVille, CodePays, Mois, Pluviometrie).",
            },
            solution: { fr: "Schéma fourni.", en: "Given schema.", uk: "Схему наведено." },
          },
        ],
      },
      {
        title: { fr: "1. Pays > 100M dont la capitale n'est pas la ville la plus peuplée", en: "1. Countries > 100M whose capital is not the most populated city", uk: "1. Країни > 100 млн, де столиця не є найбільш населеним містом" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays P, Ville\nWHERE Population > 100000000 AND Capitale = NomVille\n  AND NbHabitants < (SELECT MAX(NbHabitants) FROM Ville WHERE CodePays = P.CodePays);",
              en: "SELECT CountryName\nFROM Country P, City C\nWHERE Population > 100000000 AND Capital = CityName\n  AND C.Inhabitants < (SELECT MAX(Inhabitants) FROM City WHERE CountryCode = P.CountryCode);",
              uk: "SELECT NomPays\nFROM Pays P, Ville\nWHERE Population > 100000000 AND Capitale = NomVille\n  AND NbHabitants < (SELECT MAX(NbHabitants) FROM Ville WHERE CodePays = P.CodePays);",
            },
          },
        ],
      },
      {
        title: { fr: "2. Villes de France > 1 million d'habitants", en: "2. French cities with > 1 million inhabitants", uk: "2. Міста Франції з > 1 мільйона мешканців" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille\nFROM Ville, Pays\nWHERE NbHabitants > 1000000\n  AND Ville.CodePays = Pays.CodePays AND NomPays = 'France';",
              en: "SELECT CityName\nFROM City C, Country P\nWHERE Inhabitants > 1000000\n  AND C.CountryCode = P.CountryCode AND CountryName = 'France';",
              uk: "SELECT NomVille\nFROM Ville, Pays\nWHERE NbHabitants > 1000000\n  AND Ville.CodePays = Pays.CodePays AND NomPays = 'France';",
            },
          },
        ],
      },
      {
        title: { fr: "3. Pays dont le nombre d'habitants au km² est le plus élevé", en: "3. Countries with the highest population density", uk: "3. Країни з найвищою щільністю населення на км²" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays\nWHERE Population/Superficie = (SELECT MAX(Population/Superficie) FROM Pays);",
              en: "SELECT CountryName\nFROM Country\nWHERE Population/Area = (SELECT MAX(Population/Area) FROM Country);",
              uk: "SELECT NomPays\nFROM Pays\nWHERE Population/Superficie = (SELECT MAX(Population/Superficie) FROM Pays);",
            },
          },
        ],
      },
      {
        title: { fr: "4. Liste des continents, pays et villes (ordre alphabétique)", en: "4. Continents, countries and cities (alphabetical)", uk: "4. Список континентів, країн і міст (в алфавітному порядку)" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT Continent, NomPays, NomVille\nFROM Pays, Ville\nWHERE Pays.CodePays = Ville.CodePays\nORDER BY Continent, NomPays, NomVille;",
              en: "SELECT Continent, CountryName, CityName\nFROM Country C, City V\nWHERE C.CountryCode = V.CountryCode\nORDER BY Continent, CountryName, CityName;",
              uk: "SELECT Continent, NomPays, NomVille\nFROM Pays, Ville\nWHERE Pays.CodePays = Ville.CodePays\nORDER BY Continent, NomPays, NomVille;",
            },
          },
        ],
      },
      {
        title: { fr: "5. Pays avec > 5 villes de plus d'1 million d'habitants", en: "5. Countries with > 5 cities of > 1 million inhabitants", uk: "5. Країни з > 5 містами понад 1 мільйон мешканців" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays\nWHERE CodePays IN (SELECT CodePays FROM Ville\n                   WHERE NbHabitants > 1000000\n                   GROUP BY CodePays HAVING COUNT(*) > 5);",
              en: "SELECT CountryName\nFROM Country\nWHERE CountryCode IN (SELECT CountryCode FROM City\n                      WHERE Inhabitants > 1000000\n                      GROUP BY CountryCode HAVING COUNT(*) > 5);",
              uk: "SELECT NomPays\nFROM Pays\nWHERE CodePays IN (SELECT CodePays FROM Ville\n                   WHERE NbHabitants > 1000000\n                   GROUP BY CodePays HAVING COUNT(*) > 5);",
            },
          },
        ],
      },
      {
        title: { fr: "6. Pays ayant le plus bas PIB/habitant de leur continent", en: "6. Countries with lowest GDP per capita in their continent", uk: "6. Країни з найнижчим ВВП на мешканця на своєму континенті" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays P\nWHERE PIB/Population = (SELECT MIN(PIB/Population) FROM Pays WHERE Continent = P.Continent);",
              en: "SELECT CountryName\nFROM Country P\nWHERE GDP/Population = (SELECT MIN(GDP/Population) FROM Country WHERE Continent = P.Continent);",
              uk: "SELECT NomPays\nFROM Pays P\nWHERE PIB/Population = (SELECT MIN(PIB/Population) FROM Pays WHERE Continent = P.Continent);",
            },
          },
        ],
      },
      {
        title: { fr: "7. PIB moyen par continent", en: "7. Average GDP per capita by continent", uk: "7. Середній ВВП на континент" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT Continent, AVG(PIB/Population)\nFROM Pays\nGROUP BY Continent;",
              en: "SELECT Continent, AVG(GDP/Population)\nFROM Country\nGROUP BY Continent;",
              uk: "SELECT Continent, AVG(PIB/Population)\nFROM Pays\nGROUP BY Continent;",
            },
          },
        ],
      },
      {
        title: { fr: "8. Villes dont la population dépasse la moyenne de leur pays", en: "8. Cities whose population exceeds their country's city-average", uk: "8. Міста, населення яких перевищує середнє у їхній країні" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille\nFROM Ville V\nWHERE NbHabitants > (SELECT AVG(NbHabitants) FROM Ville WHERE CodePays = V.CodePays);",
              en: "SELECT CityName\nFROM City V\nWHERE Inhabitants > (SELECT AVG(Inhabitants) FROM City WHERE CountryCode = V.CountryCode);",
              uk: "SELECT NomVille\nFROM Ville V\nWHERE NbHabitants > (SELECT AVG(NbHabitants) FROM Ville WHERE CodePays = V.CodePays);",
            },
          },
        ],
      },
      {
        title: { fr: "9. Pays où aucune ville ne dépasse 1 million d'habitants", en: "9. Countries with no city > 1 million inhabitants", uk: "9. Країни, де жодне місто не перевищує 1 мільйон мешканців" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays P\nWHERE 1000000 > (SELECT MAX(NbHabitants) FROM Ville WHERE CodePays = P.CodePays);",
              en: "SELECT CountryName\nFROM Country P\nWHERE 1000000 > (SELECT MAX(Inhabitants) FROM City WHERE CountryCode = P.CountryCode);",
              uk: "SELECT NomPays\nFROM Pays P\nWHERE 1000000 > (SELECT MAX(NbHabitants) FROM Ville WHERE CodePays = P.CodePays);",
            },
          },
        ],
      },
      {
        title: { fr: "10. Pays ayant une frontière commune avec la France", en: "10. Countries sharing a border with France", uk: "10. Країни, що мають спільний кордон із Францією" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays\nWHERE CodePays IN (\n  SELECT CodePays2 FROM Frontiere F, Pays P\n  WHERE F.CodePays1 = P.CodePays AND NomPays = 'France'\n  UNION\n  SELECT CodePays1 FROM Frontiere F, Pays P\n  WHERE F.CodePays2 = P.CodePays AND NomPays = 'France'\n);",
              en: "SELECT CountryName\nFROM Country\nWHERE CountryCode IN (\n  SELECT CodePays2 FROM Border F, Country P\n  WHERE F.CodePays1 = P.CountryCode AND CountryName = 'France'\n  UNION\n  SELECT CodePays1 FROM Border F, Country P\n  WHERE F.CodePays2 = P.CountryCode AND CountryName = 'France'\n);",
              uk: "SELECT NomPays\nFROM Pays\nWHERE CodePays IN (\n  SELECT CodePays2 FROM Frontiere F, Pays P\n  WHERE F.CodePays1 = P.CodePays AND NomPays = 'France'\n  UNION\n  SELECT CodePays1 FROM Frontiere F, Pays P\n  WHERE F.CodePays2 = P.CodePays AND NomPays = 'France'\n);",
            },
          },
        ],
      },
      {
        title: { fr: "11. Pays d'Europe n'ayant aucune frontière avec la France", en: "11. European countries sharing no border with France", uk: "11. Країни Європи, що не мають кордону з Францією" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays\nWHERE Continent = 'Europe'\n  AND CodePays NOT IN (\n       SELECT CodePays2 FROM Frontiere F, Pays P\n       WHERE F.CodePays1 = P.CodePays AND NomPays = 'France'\n       UNION\n       SELECT CodePays1 FROM Frontiere F, Pays P\n       WHERE F.CodePays2 = P.CodePays AND NomPays = 'France'\n     );",
              en: "SELECT CountryName\nFROM Country\nWHERE Continent = 'Europe'\n  AND CountryCode NOT IN (\n       SELECT CodePays2 FROM Border F, Country P\n       WHERE F.CodePays1 = P.CountryCode AND CountryName = 'France'\n       UNION\n       SELECT CodePays1 FROM Border F, Country P\n       WHERE F.CodePays2 = P.CountryCode AND CountryName = 'France'\n     );",
              uk: "SELECT NomPays\nFROM Pays\nWHERE Continent = 'Europe'\n  AND CodePays NOT IN (\n       SELECT CodePays2 FROM Frontiere F, Pays P\n       WHERE F.CodePays1 = P.CodePays AND NomPays = 'France'\n       UNION\n       SELECT CodePays1 FROM Frontiere F, Pays P\n       WHERE F.CodePays2 = P.CodePays AND NomPays = 'France'\n     );",
            },
          },
        ],
      },
      {
        title: { fr: "12. Pays de continents différents ayant une frontière commune", en: "12. Countries from different continents sharing a border", uk: "12. Країни різних континентів зі спільним кордоном" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT P1.NomPays, P2.NomPays\nFROM Pays P1, Pays P2, Frontiere\nWHERE P1.Continent <> P2.Continent\n  AND ((P1.CodePays = CodePays1 AND P2.CodePays = CodePays2)\n       OR (P1.CodePays = CodePays2 AND P2.CodePays = CodePays1));",
              en: "SELECT P1.CountryName, P2.CountryName\nFROM Country P1, Country P2, Border\nWHERE P1.Continent <> P2.Continent\n  AND ((P1.CountryCode = CodePays1 AND P2.CountryCode = CodePays2)\n       OR (P1.CountryCode = CodePays2 AND P2.CountryCode = CodePays1));",
              uk: "SELECT P1.NomPays, P2.NomPays\nFROM Pays P1, Pays P2, Frontiere\nWHERE P1.Continent <> P2.Continent\n  AND ((P1.CodePays = CodePays1 AND P2.CodePays = CodePays2)\n       OR (P1.CodePays = CodePays2 AND P2.CodePays = CodePays1));",
            },
          },
        ],
      },
      {
        title: { fr: "13. Proportion des populations francophones par continent", en: "13. Proportion of French-speaking populations by continent", uk: "13. Частка франкомовного населення за континентами" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT Continent, SUM(Population)/PopCont\nFROM Pays,\n     (SELECT Continent, SUM(Population) AS PopCont FROM Pays GROUP BY Continent) R\nWHERE Langue = 'Français' AND Pays.Continent = R.Continent\nGROUP BY Continent, PopCont;",
              en: "SELECT P.Continent, SUM(P.Population)/R.PopCont\nFROM Country P,\n     (SELECT Continent, SUM(Population) AS PopCont FROM Country GROUP BY Continent) R\nWHERE P.Language = 'French' AND P.Continent = R.Continent\nGROUP BY P.Continent, R.PopCont;",
              uk: "SELECT Continent, SUM(Population)/PopCont\nFROM Pays,\n     (SELECT Continent, SUM(Population) AS PopCont FROM Pays GROUP BY Continent) R\nWHERE Langue = 'Français' AND Pays.Continent = R.Continent\nGROUP BY Continent, PopCont;",
            },
          },
        ],
      },
      {
        title: { fr: "14. Température maximale moyenne par ville (France)", en: "14. Average maximum temperature per city (France)", uk: "14. Середня максимальна температура за містом (Франція)" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille, AVG(TempMax)\nFROM Temperature T, Ville V, Pays P\nWHERE T.NomVille = V.NomVille AND T.CodePays = V.CodePays\n  AND V.CodePays = P.CodePays AND NomPays = 'France'\nGROUP BY NomVille;",
              en: "SELECT V.CityName, AVG(T.TempMax)\nFROM Temperature T, City V, Country P\nWHERE T.CityName = V.CityName AND T.CountryCode = V.CountryCode\n  AND V.CountryCode = P.CountryCode AND CountryName = 'France'\nGROUP BY V.CityName;",
              uk: "SELECT NomVille, AVG(TempMax)\nFROM Temperature T, Ville V, Pays P\nWHERE T.NomVille = V.NomVille AND T.CodePays = V.CodePays\n  AND V.CodePays = P.CodePays AND NomPays = 'France'\nGROUP BY NomVille;",
            },
          },
        ],
      },
      {
        title: { fr: "15. Pluviométrie 2020 par ville (France)", en: "15. Total rainfall in 2020 per city (France)", uk: "15. Опади 2020 року за містом (Франція)" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille, SUM(Pluviometrie)\nFROM Pluie PL, Ville V, Pays P\nWHERE PL.NomVille = V.NomVille AND PL.CodePays = V.CodePays\n  AND V.CodePays = P.CodePays AND NomPays = 'France'\n  AND TO_CHAR(Mois, 'MM/YY') BETWEEN '01/20' AND '12/20'\nGROUP BY NomVille;",
              en: "SELECT V.CityName, SUM(PL.RainfallMm)\nFROM Rainfall PL, City V, Country P\nWHERE PL.CityName = V.CityName AND PL.CountryCode = V.CountryCode\n  AND V.CountryCode = P.CountryCode AND CountryName = 'France'\n  AND TO_CHAR(Month, 'MM/YY') BETWEEN '01/20' AND '12/20'\nGROUP BY V.CityName;",
              uk: "SELECT NomVille, SUM(Pluviometrie)\nFROM Pluie PL, Ville V, Pays P\nWHERE PL.NomVille = V.NomVille AND PL.CodePays = V.CodePays\n  AND V.CodePays = P.CodePays AND NomPays = 'France'\n  AND TO_CHAR(Mois, 'MM/YY') BETWEEN '01/20' AND '12/20'\nGROUP BY NomVille;",
            },
          },
        ],
      },
      {
        title: { fr: "16. Pluviométrie mensuelle moyenne par pays (décroissant)", en: "16. Average monthly rainfall per country (descending)", uk: "16. Середньомісячні опади за країною (за спаданням)" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomPays, AVG(Pluviometrie)\nFROM Pluie PL, Ville V, Pays P\nWHERE PL.NomVille = V.NomVille AND PL.CodePays = V.CodePays\n  AND V.CodePays = P.CodePays\nGROUP BY NomPays\nORDER BY AVG(Pluviometrie) DESC;",
              en: "SELECT CountryName, AVG(PL.RainfallMm)\nFROM Rainfall PL, City V, Country P\nWHERE PL.CityName = V.CityName AND PL.CountryCode = V.CountryCode\n  AND V.CountryCode = P.CountryCode\nGROUP BY CountryName\nORDER BY AVG(PL.RainfallMm) DESC;",
              uk: "SELECT NomPays, AVG(Pluviometrie)\nFROM Pluie PL, Ville V, Pays P\nWHERE PL.NomVille = V.NomVille AND PL.CodePays = V.CodePays\n  AND V.CodePays = P.CodePays\nGROUP BY NomPays\nORDER BY AVG(Pluviometrie) DESC;",
            },
          },
        ],
      },
      {
        title: { fr: "17. Villes de France sans données pluviométriques", en: "17. French cities with no rainfall data", uk: "17. Міста Франції без даних про опади" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille\nFROM Ville V, Pays P\nWHERE V.CodePays = P.CodePays AND NomPays = 'France'\n  AND (NomVille, V.CodePays) NOT IN (SELECT NomVille, CodePays FROM Pluie);",
              en: "SELECT CityName\nFROM City V, Country P\nWHERE V.CountryCode = P.CountryCode AND CountryName = 'France'\n  AND (CityName, V.CountryCode) NOT IN (SELECT CityName, CountryCode FROM Rainfall);",
              uk: "SELECT NomVille\nFROM Ville V, Pays P\nWHERE V.CodePays = P.CodePays AND NomPays = 'France'\n  AND (NomVille, V.CodePays) NOT IN (SELECT NomVille, CodePays FROM Pluie);",
            },
          },
        ],
      },
      {
        title: { fr: "18. Pays dont toutes les villes ont pluviométrie annuelle > 500 mm", en: "18. Countries where all cities have annual rainfall > 500 mm", uk: "18. Країни, де всі міста мають річні опади > 500 мм" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL (EXISTS/NOT EXISTS).", en: "Write the SQL query (EXISTS/NOT EXISTS).", uk: "Напишіть SQL-запит (EXISTS/NOT EXISTS)." },
            solution: {
              fr: "SELECT NomPays\nFROM Pays P\nWHERE NOT EXISTS (\n  SELECT * FROM Ville V\n  WHERE V.CodePays = P.CodePays\n    AND (SELECT AVG(Pluviometrie) FROM Pluie PL\n         WHERE PL.CodePays = P.CodePays AND PL.NomVille = V.NomVille) <= 500\n);",
              en: "SELECT CountryName\nFROM Country P\nWHERE NOT EXISTS (\n  SELECT * FROM City V\n  WHERE V.CountryCode = P.CountryCode\n    AND (SELECT AVG(RainfallMm) FROM Rainfall PL\n         WHERE PL.CountryCode = P.CountryCode AND PL.CityName = V.CityName) <= 500\n);",
              uk: "SELECT NomPays\nFROM Pays P\nWHERE NOT EXISTS (\n  SELECT * FROM Ville V\n  WHERE V.CodePays = P.CodePays\n    AND (SELECT AVG(Pluviometrie) FROM Pluie PL\n         WHERE PL.CodePays = P.CodePays AND PL.NomVille = V.NomVille) <= 500\n);",
            },
          },
        ],
      },
      {
        title: { fr: "19. Ville d'Europe avec l'écart de température le plus élevé", en: "19. European city with highest temperature range", uk: "19. Місто Європи з найбільшим перепадом температур" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille\nFROM Ville V, Pays P, Temperature T\nWHERE V.CodePays = P.CodePays AND Continent = 'Europe'\n  AND V.NomVille = T.NomVille AND V.CodePays = T.CodePays\n  AND (TempMax - TempMin) = (SELECT MAX(TempMax - TempMin)\n                             FROM Temperature T2, Ville V2, Pays P2\n                             WHERE V2.CodePays = P2.CodePays AND Continent = 'Europe'\n                               AND V2.NomVille = T2.NomVille AND V2.CodePays = T2.CodePays);",
              en: "SELECT V.CityName\nFROM City V, Country P, Temperature T\nWHERE V.CountryCode = P.CountryCode AND Continent = 'Europe'\n  AND V.CityName = T.CityName AND V.CountryCode = T.CountryCode\n  AND (T.TempMax - T.TempMin) = (SELECT MAX(T2.TempMax - T2.TempMin)\n                                FROM Temperature T2, City V2, Country P2\n                                WHERE V2.CountryCode = P2.CountryCode AND Continent = 'Europe'\n                                  AND V2.CityName = T2.CityName AND V2.CountryCode = T2.CountryCode);",
              uk: "SELECT NomVille\nFROM Ville V, Pays P, Temperature T\nWHERE V.CodePays = P.CodePays AND Continent = 'Europe'\n  AND V.NomVille = T.NomVille AND V.CodePays = T.CodePays\n  AND (TempMax - TempMin) = (SELECT MAX(TempMax - TempMin)\n                             FROM Temperature T2, Ville V2, Pays P2\n                             WHERE V2.CodePays = P2.CodePays AND Continent = 'Europe'\n                               AND V2.NomVille = T2.NomVille AND V2.CodePays = T2.CodePays);",
            },
          },
        ],
      },
      {
        title: { fr: "20. Ville la plus chaude de France au mois d'août", en: "20. Hottest French city in August", uk: "20. Найспекотніше місто Франції в серпні" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille, MAX(TMaxMoy)\nFROM (SELECT NomVille, AVG(TempMax) TMaxMoy\n      FROM Ville V, Pays P, Temperature T\n      WHERE V.CodePays = P.CodePays AND NomPays = 'France'\n        AND V.NomVille = T.NomVille AND V.CodePays = T.CodePays\n        AND EXTRACT(MONTH FROM Jour) = 8\n      GROUP BY NomVille)\nGROUP BY NomVille;",
              en: "SELECT CityName, MAX(AvgMax)\nFROM (SELECT V.CityName, AVG(T.TempMax) AvgMax\n      FROM City V, Country P, Temperature T\n      WHERE V.CountryCode = P.CountryCode AND CountryName = 'France'\n        AND V.CityName = T.CityName AND V.CountryCode = T.CountryCode\n        AND EXTRACT(MONTH FROM Day) = 8\n      GROUP BY V.CityName)\nGROUP BY CityName;",
              uk: "SELECT NomVille, MAX(TMaxMoy)\nFROM (SELECT NomVille, AVG(TempMax) TMaxMoy\n      FROM Ville V, Pays P, Temperature T\n      WHERE V.CodePays = P.CodePays AND NomPays = 'France'\n        AND V.NomVille = T.NomVille AND V.CodePays = T.CodePays\n        AND EXTRACT(MONTH FROM Jour) = 8\n      GROUP BY NomVille)\nGROUP BY NomVille;",
            },
          },
        ],
      },
      {
        title: { fr: "21. Villes d'Europe avec température minimale moyenne en janvier > 15°", en: "21. European cities with average minimum temperature in January > 15°", uk: "21. Міста Європи із середньою мінімальною температурою в січні > 15°" },
        exercises: [
          {
            kind: "open",
            prompt: { fr: "Écrire la requête SQL.", en: "Write the SQL query.", uk: "Напишіть SQL-запит." },
            solution: {
              fr: "SELECT NomVille\nFROM (SELECT NomVille, AVG(TempMin) AS TMinMoy\n      FROM Ville V, Pays P, Temperature T\n      WHERE V.CodePays = P.CodePays AND Continent = 'Europe'\n        AND V.NomVille = T.NomVille AND V.CodePays = T.CodePays\n        AND EXTRACT(MONTH FROM Jour) = 1\n      GROUP BY NomVille)\nWHERE TMinMoy > 15;",
              en: "SELECT CityName\nFROM (SELECT V.CityName, AVG(T.TempMin) AS AvgMin\n      FROM City V, Country P, Temperature T\n      WHERE V.CountryCode = P.CountryCode AND Continent = 'Europe'\n        AND V.CityName = T.CityName AND V.CountryCode = T.CountryCode\n        AND EXTRACT(MONTH FROM Day) = 1\n      GROUP BY V.CityName)\nWHERE AvgMin > 15;",
              uk: "SELECT NomVille\nFROM (SELECT NomVille, AVG(TempMin) AS TMinMoy\n      FROM Ville V, Pays P, Temperature T\n      WHERE V.CodePays = P.CodePays AND Continent = 'Europe'\n        AND V.NomVille = T.NomVille AND V.CodePays = T.CodePays\n        AND EXTRACT(MONTH FROM Jour) = 1\n      GROUP BY NomVille)\nWHERE TMinMoy > 15;",
            },
          },
        ],
      },
    ],
  },
];
