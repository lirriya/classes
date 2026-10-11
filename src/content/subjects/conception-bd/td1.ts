import type { Block } from "../../types";

export const tdOne: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce TD1 porte sur la **modélisation conceptuelle de données** (modèle Entité-Association). Il reprend les quatre études de cas proposées dans le cours, avec les schémas E-A et les schémas relationnels qui en découlent.",
      en: "TD1 focuses on **conceptual data modelling** (Entity-Relationship model). It covers the four case studies from the course, with the corresponding E-R schemas and relational schemas.",
      uk: "Цей TD1 присвячений **концептуальному моделюванню даних** (модель «сутність — зв'язок»). Він охоплює чотири практичні приклади з курсу, разом з відповідними схемами E-A та реляційними схемами, що з них випливають.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Géographie & Météorologie", en: "1. Geography & Meteorology", uk: "1. Географія та метеорологія" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Énoncé", en: "Statement", uk: "Умова" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Concevoir une base de données pour des données géographiques : pays (continent, frontières), villes importantes (capitale), code unique par pays, populations, PIB, superficie. Compléter par données météorologiques : relevés sur certaines villes, températures minimales/maximales quotidiennes, pluviométrie mensuelle.",
              en: "Design a database for geographic data: countries (continent, borders), main cities (capital), a unique code per country, populations, GDP, area. Complete with meteorological data: readings for some cities, daily minimum/maximum temperatures, monthly rainfall.",
              uk: "Спроєктувати базу даних для географічних даних: країни (континент, кордони), важливі міста (столиця), унікальний код на країну, населення, ВВП, площа. Доповнити метеорологічними даними: спостереження за деякими містами, щоденні мінімальні/максимальні температури, місячна кількість опадів.",
            },
            solution: {
              fr: "Modélisation E-A : entités PAYS, VILLE, JOUR, MOIS, associations Situer (entre PAYS et VILLE), FaireFrontière (réflexive entre PAYS), associations Température (entre VILLE et JOUR) et Pluie (entre VILLE et MOIS). Traduction relationnelle : PAYS(CodePays, NomPays, PopulationPays, PIB, Superficie, Continent) ; FAIREFRONTIERE(CodePays1, CodePays2) ; VILLE(NomVille, CodePays, PopulationVille, EstCapitale) ; TEMPERATURE(DateJour, NomVille, CodePays, TempMin, TempMax) ; PLUIE(DateMois, NomVille, CodePays, Pluviométrie).",
              en: "E-R model: entities COUNTRY, CITY, DAY, MONTH; associations Located (between COUNTRY and CITY), Border (reflexive on COUNTRY), Temperature (between CITY and DAY), Rainfall (between CITY and MONTH). Relational: COUNTRY(CountryCode, CountryName, CountryPop, GDP, Area, Continent); BORDER(CountryCode1, CountryCode2); CITY(CityName, CountryCode, CityPop, IsCapital); TEMPERATURE(DateDay, CityName, CountryCode, TempMin, TempMax); RAINFALL(DateMonth, CityName, CountryCode, Rainfall).",
              uk: "Модель E-A: сутності PAYS (КРАЇНА), VILLE (МІСТО), JOUR (ДЕНЬ), MOIS (МІСЯЦЬ), зв'язки Situer (між PAYS і VILLE), FaireFrontière (рефлексивний на PAYS), зв'язки Température (між VILLE і JOUR) та Pluie (між VILLE і MOIS). Реляційне перетворення: PAYS(CodePays, NomPays, PopulationPays, PIB, Superficie, Continent) ; FAIREFRONTIERE(CodePays1, CodePays2) ; VILLE(NomVille, CodePays, PopulationVille, EstCapitale) ; TEMPERATURE(DateJour, NomVille, CodePays, TempMin, TempMax) ; PLUIE(DateMois, NomVille, CodePays, Pluviométrie).",
            },
          },
        ],
      },
    ],
  },
  {
    type: "code",
    lang: "text",
    text: "PAYS (CodePays, NomPays, PopulationPays, PIB, Superficie, Continent)\nFAIREFRONTIERE (CodePays1, CodePays2)\nVILLE (NomVille, CodePays, PopulationVille, EstCapitale)\nTEMPERATURE (DateJour, NomVille, CodePays, TempMin, TempMax)\nPLUIE (DateMois, NomVille, CodePays, Pluviométrie)",
    caption: { fr: "Schéma relationnel (solution TD1 Exercice 1).", en: "Relational schema (TD1 Exercise 1 solution).", uk: "Реляційна схема (розв'язок TD1, вправа 1)." },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Gestion des employés", en: "2. Employee management", uk: "2. Управління працівниками" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Énoncé", en: "Statement", uk: "Умова" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Entreprise organisée en départements. Chaque employé (matricule, nom, adresse) est affecté à un département. Un département (nom unique) est dirigé par un directeur et a un budget. Un directeur gère des projets (numéro unique, nom, budget). À chaque projet sont affectés des employés (un employé ne travaille que sur un projet à la fois). Les employés sont dans des bureaux (un employé par bureau), accessibles sur un seul poste de téléphone ; plusieurs téléphones possibles dans un bureau. Carrière des employés : tous les postes occupés (période, dernier salaire) ; tous les postes répertoriés (numéro unique, fonction). Une fonction donne un salaire entre min et max.",
              en: "Company organised in departments. Each employee (staff number, name, address) is assigned to a department. A department (unique name) is managed by a director and has a budget. A director is responsible for projects (unique number, name, budget). Employees are assigned to projects (each employee works on one project at a time). Employees have offices (one employee per office), each accessed by a single telephone extension; a single office may have several telephones. Employee career: all posts held (period, last salary); all posts listed (unique number, function). A function has a salary between min and max.",
              uk: "Підприємство організоване у відділи. Кожного працівника (табельний номер, ім'я, адреса) призначено до відділу. Відділ (унікальна назва) очолює директор, і він має бюджет. Директор керує проєктами (унікальний номер, назва, бюджет). До кожного проєкту призначають працівників (працівник працює лише над одним проєктом одночасно). Працівники перебувають у кабінетах (один працівник на кабінет), доступних через один телефонний апарат ; у кабінеті можуть бути кілька телефонів. Кар'єра працівників: усі займані посади (період, остання зарплата) ; усі перелічені посади (унікальний номер, функція). Функція визначає зарплату між мінімумом і максимумом.",
            },
            solution: {
              fr: "Schéma relationnel principal : EMPLOYE(Matricule, NomEmp, AdrEmp, NoTéléphone, NoPoste, DateDeb, Salaire) ; DEPARTEMENT(NomDep, BudgetDep) ; DIRECTEUR(Matricule, NomDep) ; PROJET(NoProjet, NomProjet, BudgetProjet, MatriculeResponsable) ; AFFECTER(Matricule, NoProjet) ; BUREAU(NoBureau, Superficie) ; TELEPHONE(NoTéléphone, NoBureau) ; AVOIR_OCCUPE(Matricule, DateDébut, NoPoste, DateFin, Salaire) ; POSTE(NoPoste, Fonction) ; FONCTION(Fonction, SalaireMin, SalaireMax).",
              en: "Main relational schema: EMPLOYEE(StaffNo, Name, Address, PhoneNo, PostNo, StartDate, Salary); DEPARTMENT(DeptName, Budget); DIRECTOR(StaffNo, DeptName); PROJECT(ProjectNo, ProjectName, Budget, ManagerStaffNo); ASSIGN(StaffNo, ProjectNo); OFFICE(OfficeNo, Area); PHONE(PhoneNo, OfficeNo); HELD_POST(StaffNo, StartDate, PostNo, EndDate, Salary); POST(PostNo, Function); FUNCTION(Function, MinSalary, MaxSalary).",
              uk: "Основна реляційна схема: EMPLOYE(Matricule, NomEmp, AdrEmp, NoTéléphone, NoPoste, DateDeb, Salaire) ; DEPARTEMENT(NomDep, BudgetDep) ; DIRECTEUR(Matricule, NomDep) ; PROJET(NoProjet, NomProjet, BudgetProjet, MatriculeResponsable) ; AFFECTER(Matricule, NoProjet) ; BUREAU(NoBureau, Superficie) ; TELEPHONE(NoTéléphone, NoBureau) ; AVOIR_OCCUPE(Matricule, DateDébut, NoPoste, DateFin, Salaire) ; POSTE(NoPoste, Fonction) ; FONCTION(Fonction, SalaireMin, SalaireMax).",
            },
          },
        ],
      },
    ],
  },
  {
    type: "code",
    lang: "text",
    text: "EMPLOYE (Matricule, NomEmp, AdrEmp, NoTéléphone, NoPoste, DateDeb, Salaire)\nDEPARTEMENT (NomDep, BudgetDep)\nDIRECTEUR (Matricule, NomDep)\nPROJET (NoProjet, NomProjet, BudgetProjet, MatriculeResponsable)\nAFFECTER (Matricule, NoProjet)\nBUREAU (NoBureau, Superficie)\nTELEPHONE (NoTéléphone, NoBureau)\nAVOIR_OCCUPE (Matricule, DateDébut, NoPoste, DateFin, Salaire)\nPOSTE (NoPoste, Fonction)\nFONCTION (Fonction, SalaireMin, SalaireMax)",
    caption: { fr: "Schéma relationnel (solution TD1 Exercice 2).", en: "Relational schema (TD1 Exercise 2 solution).", uk: "Реляційна схема (розв'язок TD1, вправа 2)." },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Horaires LeMet", en: "3. LeMet timetables", uk: "3. Розклад LeMet" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Énoncé", en: "Statement", uk: "Умова" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Gérer les horaires des bus LeMet (fiche horaire) : connaître le réseau (lignes, arrêts) pour trouver un itinéraire, et connaître les horaires de passage aux arrêts pour l'édition/affichage (temps réel : retard, grève...).",
              en: "Manage LeMet bus timetables: know the network (lines, stops) to find routes, and know the bus passage times at stops for publishing (real-time: delays, strikes...).",
              uk: "Керувати розкладом автобусів LeMet (розкладний лист): знати мережу (лінії, зупинки), щоб знайти маршрут, і знати часи проходження по зупинках для випуску/відображення (у реальному часі: запізнення, страйк...).",
            },
            solution: {
              fr: "Deux solutions proposées. Solution 2 (préférée pour temps réel/retard) : on ne conserve que les **horaires de départ du terminus**, et on calcule les horaires de passage aux arrêts par addition des temps cumulés entre arrêts (Temps). Le retard est géré par départ. Schéma relationnel (solution 2) : LIGNE(NoLigne, Direction) ; ARRET(NoArrêt, NomArrêt) ; DESSERVIR(NoLigne, Direction, NoArrêt, Ordre, Temps) ; PERIODE(Période, Début, Fin) ; JOURSEMAINE(JourSemaine, Description) ; ORGANISER(IdOrg, NoLigne, Direction, Période, JourSemaine) ; NIVEAUSERVICE(Niveau, ServiceMin) ; PROGRAMMER(IdOrg, Niveau, HeureDépart, Retard).",
              en: "Two solutions proposed. Solution 2 (suitable for real-time/delays): store only **departure times from the terminus**, and compute passage times at stops by adding cumulative travel times (Time) between stops. Delays are managed per departure. Relational (solution 2): LINE(LineNo, Direction); STOP(StopNo, StopName); SERVES(LineNo, Direction, StopNo, Order, Time); PERIOD(Period, Start, End); DAYOFWEEK(DayOfWeek, Description); ORGANISE(OrgId, LineNo, Direction, Period, DayOfWeek); SERVICESLEVEL(Level, MinService); SCHEDULE(OrgId, Level, DepartureTime, Delay).",
              uk: "Запропоновано два розв'язки. Розв'язок 2 (кращий для реального часу/запізнень): зберігаємо лише **часи відправлення з кінцевої зупинки**, а часи проходження по зупинках обчислюємо додаванням сумарних часів між зупинками (Temps). Запізнення обробляється для кожного відправлення. Реляційна схема (розв'язок 2): LIGNE(NoLigne, Direction) ; ARRET(NoArrêt, NomArrêt) ; DESSERVIR(NoLigne, Direction, NoArrêt, Ordre, Temps) ; PERIODE(Période, Début, Fin) ; JOURSEMAINE(JourSemaine, Description) ; ORGANISER(IdOrg, NoLigne, Direction, Période, JourSemaine) ; NIVEAUSERVICE(Niveau, ServiceMin) ; PROGRAMMER(IdOrg, Niveau, HeureDépart, Retard).",
            },
          },
        ],
      },
    ],
  },
  {
    type: "code",
    lang: "text",
    text: "LIGNE (NoLigne, Direction)\nARRET (NoArrêt, NomArrêt)\nDESSERVIR (NoLigne, Direction, NoArrêt, Ordre, Temps)\nPERIODE (Période, Début, Fin)\nJOURSEMAINE (JourSemaine, Description)\nORGANISER (IdOrg, NoLigne, Direction, Période, JourSemaine)\nNIVEAUSERVICE (Niveau, ServiceMin)\nPROGRAMMER (IdOrg, Niveau, HeureDépart, Retard)",
    caption: { fr: "Schéma relationnel (solution 2, TD1 Exercice 3).", en: "Relational schema (solution 2, TD1 Exercise 3).", uk: "Реляційна схема (розв'язок 2, TD1, вправа 3)." },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Compagnie aérienne", en: "4. Airline", uk: "4. Авіакомпанія" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Énoncé", en: "Statement", uk: "Умова" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Gérer les liaisons aériennes : une liaison relie un aéroport de départ à un aéroport d'arrivée (aéroport = nom, ville, pays). Un vol effectue une liaison avec éventuellement des escales ; plusieurs vols peuvent effectuer la même liaison. Un vol est identifié par un numéro, programmé avec heure de départ/arrivée et jour de semaine. Pour chaque escale : heure d'arrivée et heure de départ. À chaque départ de vol à une date donnée (vol réalisé) on affecte un avion et un équipage (dont le commandant de bord). L'équipage est constitué de membres avec différentes fonctions (pilote, personnel de bord...). Un commandant est un pilote. Un pilote est habilité pour certains types d'avions. Chaque membre : matricule, nom, date de naissance, nombre d'heures de vol. Avions de différents types (ex. Airbus A320, Boeing B737...), numérotés, avec nombre de places selon type, date de mise en service, dates de révisions, heures totales et heures entre révisions.",
              en: "Manage air links: a link connects a departure airport and an arrival airport (airport: name, city, country). A flight operates a link possibly with stopovers; several flights may operate the same link. A flight is identified by a number, scheduled with departure/arrival times and day of week. For each stopover: arrival and departure times. For each flight departure on a given date (realised flight) we assign an aircraft and a crew (including the captain). The crew consists of members with different functions (pilot, cabin crew...). The captain is a pilot. A pilot is qualified for certain aircraft types. Each member: staff number, name, date of birth, total flight hours. Aircraft of different types (e.g. Airbus A320, Boeing 737...), each with a unique number, seats per type, entry into service date, revision dates, total flight hours and hours between revisions.",
              uk: "Керувати авіасполученнями: сполучення з'єднує аеропорт відправлення з аеропортом прибуття (аеропорт = назва, місто, країна). Рейс виконує сполучення, можливо з проміжними посадками ; кілька рейсів можуть виконувати те саме сполучення. Рейс ідентифікується номером, запланований із часом відправлення/прибуття та днем тижня. Для кожної проміжної посадки: час прибуття та час відправлення. На кожне відправлення рейсу в певну дату (виконаний рейс) призначають літак і екіпаж (у т. ч. командира повітряного судна). Екіпаж складається з членів із різними функціями (пілот, бортпровідник...). Командир є пілотом. Пілот має допуск на певні типи літаків. Кожен член: табельний номер, ім'я, дата народження, кількість годин нальоту. Літаки різних типів (напр. Airbus A320, Boeing B737...), пронумеровані, з кількістю місць залежно від типу, датою введення в експлуатацію, датами техоглядів, загальними годинами та годинами між техоглядами.",
            },
            solution: {
              fr: "Schéma relationnel : AEROPORT(NomAéroport, Ville, Pays) ; VOL(NoVol, JourSemaine, HeureDépart, HeureArrivée, NomAéroportDépart, NomAéroportArrivée) ; FAIREESCALE(NoVol, NomAéroport, HeureArrivée, HeureDépart) ; PERSONNEL(Matricule, Nom, DateNaiss, Catégorie, Fonction, NbHeuresVol) ; PILOTE(MatriculePilote) ; TYPESAVION(TypeAvion, Constructeur, NbPlaces) ; AVION(NoAvion, DateMiseService, NbHeuresVol, TypeAvion) ; PARTIR(NoVol, DateDépart, NoAvion, MatriculePiloteCommandant) ; HABILITER(MatriculePilote, TypeAvion) ; EQUIPAGE(NoVol, DateDépart, Matricule) ; REVISER(DateRévision, NoAvion, NbHeurVolDernRév).",
              en: "Relational schema: AIRPORT(AirportName, City, Country); FLIGHT(FlightNo, DayOfWeek, DepartTime, ArriveTime, DepartAirport, ArriveAirport); STOPOVER(FlightNo, AirportName, ArriveTime, DepartTime); STAFF(StaffNo, Name, BirthDate, Category, Function, FlightHours); PILOT(PilotStaffNo); AIRCRAFTTYPE(Type, Manufacturer, Seats); AIRCRAFT(AircraftNo, InServiceDate, FlightHours, Type); DEPARTURE(FlightNo, DepartDate, AircraftNo, CaptainStaffNo); QUALIFIED(PilotStaffNo, Type); CREW(FlightNo, DepartDate, StaffNo); REVISION(RevDate, AircraftNo, HoursSinceLastRev).",
              uk: "Реляційна схема: AEROPORT(NomAéroport, Ville, Pays) ; VOL(NoVol, JourSemaine, HeureDépart, HeureArrivée, NomAéroportDépart, NomAéroportArrivée) ; FAIREESCALE(NoVol, NomAéroport, HeureArrivée, HeureDépart) ; PERSONNEL(Matricule, Nom, DateNaiss, Catégorie, Fonction, NbHeuresVol) ; PILOTE(MatriculePilote) ; TYPESAVION(TypeAvion, Constructeur, NbPlaces) ; AVION(NoAvion, DateMiseService, NbHeuresVol, TypeAvion) ; PARTIR(NoVol, DateDépart, NoAvion, MatriculePiloteCommandant) ; HABILITER(MatriculePilote, TypeAvion) ; EQUIPAGE(NoVol, DateDépart, Matricule) ; REVISER(DateRévision, NoAvion, NbHeurVolDernRév).",
            },
          },
        ],
      },
    ],
  },
  {
    type: "code",
    lang: "text",
    text: "AEROPORT (NomAéroport, Ville, Pays)\nVOL (NoVol, JourSemaine, HeureDépart, HeureArrivée, NomAéroportDépart, NomAéroportArrivée)\nFAIREESCALE (NoVol, NomAéroport, HeureArrivée, HeureDépart)\nPERSONNEL (Matricule, Nom, DateNaiss, Catégorie, Fonction, NbHeuresVol)\nPILOTE (MatriculePilote)\nTYPESAVION (TypeAvion, Constructeur, NbPlaces)\nAVION (NoAvion, DateMiseService, NbHeuresVol, TypeAvion)\nPARTIR (NoVol, DateDépart, NoAvion, MatriculePiloteCommandant)\nHABILITER (MatriculePilote, TypeAvion)\nEQUIPAGE (NoVol, DateDépart, Matricule)\nREVISER (DateRévision, NoAvion, NbHeurVolDernRév)",
    caption: { fr: "Schéma relationnel (solution TD1 Exercice 4).", en: "Relational schema (TD1 Exercise 4 solution).", uk: "Реляційна схема (розв'язок TD1, вправа 4)." },
  },
];