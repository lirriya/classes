import type { Block } from "../../types";

export const tdTwo: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Ce TD2 porte sur la **normalisation des relations** : clés candidates, graphes de dépendances fonctionnelles, fermeture transitive, couverture minimale, formes normales (2FN, 3FN) et décomposition en BCNF/4FN.",
      en: "TD2 focuses on **relation normalization**: candidate keys, functional dependency graphs, transitive closure, minimal cover, normal forms (2NF, 3NF) and decomposition into BCNF/4NF.",
      uk: "Це ТД2 присвячене **нормалізації відношень**: потенційні ключі, графи функціональних залежностей, транзитивне замикання, мінімальне покриття, нормальні форми (2НФ, 3НФ) та декомпозиція у BCNF/4НФ.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "Exercice 1", en: "Exercise 1", uk: "Вправа 1" },
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
              fr: "Soit R <U, F> avec U = {A, B, C} et F = {A → B ; B → C}. Questions : (1) Clés candidates ? (2) L'extension r = {<a1,b1,c1>, <a2,b1,c2>, <a3,b2,c1>, <a4,b3,c3>} est-elle conforme à F ? (3) Forme normale de R ? Proposer une décomposition en 3FN si nécessaire. (4) Montrer que la décomposition ne permet pas de produire l'extension r.",
              en: "Let R <U, F> with U = {A, B, C} and F = {A → B ; B → C}. Questions: (1) Candidate keys? (2) Is r = {<a1,b1,c1>, <a2,b1,c2>, <a3,b2,c1>, <a4,b3,c3>} consistent with F? (3) Normal form of R? Propose 3NF decomposition if needed. (4) Show that decomposition cannot produce r.",
              uk: "Нехай R <U, F>, де U = {A, B, C} і F = {A → B ; B → C}. Питання: (1) Потенційні ключі? (2) Чи відповідає розширення r = {<a1,b1,c1>, <a2,b1,c2>, <a3,b2,c1>, <a4,b3,c3>} F? (3) Нормальна форма R? Запропонуйте декомпозицію у 3НФ, якщо потрібно. (4) Покажіть, що декомпозиція не дозволяє відтворити розширення r.",
            },
            solution: {
              fr: "(1) Clé candidate = {A} car A⁺ = {A,B,C}. (2) Non conforme : B→C est violée (ex. <a1,b1,c1> et <a2,b1,c2> ont même B mais C différent). (3) R n'est pas en 3FN (B→C : attribut non-clé détermine non-clé). Décomposition : R1 <{B,C}, {B→C}> (3FN), R2 <{A,B}, {A→B}> (3FN). (4) La décomposition préserve les DF, mais l'extension r n'est pas générable sans perte de sémantique ici (la jointure R1×R2 produirait des lignes incohérentes par rapport à l'extension originale).",
              en: "(1) Candidate key = {A} since A⁺ = {A,B,C}. (2) Not consistent: B→C is violated (<a1,b1,c1> and <a2,b1,c2> share B but differ on C). (3) R not in 3NF (B→C: non-key determines non-key). Decomposition: R1 <{B,C}, {B→C}> (3NF), R2 <{A,B}, {A→B}> (3FN). (4) Decomposition preserves FDs but cannot reproduce extension r without loss of semantic constraints here (join R1×R2 would create spurious tuples inconsistent with r).",
              uk: "(1) Потенційний ключ = {A}, оскільки A⁺ = {A,B,C}. (2) Не відповідає: B→C порушено (напр. <a1,b1,c1> і <a2,b1,c2> мають однакове B, але різне C). (3) R не в 3НФ (B→C: неключовий атрибут визначає неключовий). Декомпозиція: R1 <{B,C}, {B→C}> (3НФ), R2 <{A,B}, {A→B}> (3НФ). (4) Декомпозиція зберігає ФЗ, але розширення r тут не можна відтворити без втрати семантики (з'єднання R1×R2 породило б рядки, несумісні з оригінальним розширенням).",
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
    text: { fr: "Exercice 2", en: "Exercise 2", uk: "Вправа 2" },
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
              fr: "Bibliothèque : R <U,F> avec U = {Titre, Auteur, DateAchat, NumExemp, DateEmp, NumEtud, NomEtud, EtatPret} et F = {Titre → Auteur ; NumExemp → Titre, Auteur, DateAchat ; NumExemp, DateEmp → NumEtud, Titre, EtatPret ; NumEtud → NomEtud}. (1) Clés candidates ? (2) Graphe de F. (3) F⁺ (fermeture transitive). (4) CM(F). (5) Forme normale de R ? (6) Décomposition en BCNF. (7) Schéma E-A équivalent.",
              en: "Library: R <U,F> with U = {Title, Author, PurchaseDate, CopyNo, LoanDate, StudentNo, StudentName, LoanState} and F = {Title → Author ; CopyNo → Title, Author, PurchaseDate ; CopyNo, LoanDate → StudentNo, Title, LoanState ; StudentNo → StudentName}. (1) Candidate keys? (2) FD graph. (3) F⁺ (transitive closure). (4) Minimal cover CM(F). (5) Normal form of R? (6) BCNF decomposition. (7) Equivalent E-R schema.",
              uk: "Бібліотека: R <U,F>, де U = {Titre, Auteur, DateAchat, NumExemp, DateEmp, NumEtud, NomEtud, EtatPret} і F = {Titre → Auteur ; NumExemp → Titre, Auteur, DateAchat ; NumExemp, DateEmp → NumEtud, Titre, EtatPret ; NumEtud → NomEtud}. (1) Потенційні ключі? (2) Граф F. (3) F⁺ (транзитивне замикання). (4) CM(F). (5) Нормальна форма R? (6) Декомпозиція у BCNF. (7) Еквівалентна схема E-A.",
            },
            solution: {
              fr: "(1) Clé candidate = {(NumExemp, DateEmp)} (seul ensemble qui détermine tout). (2)-(4) CM(F) = {Titre→Auteur ; NumExemp→Titre, DateAchat ; NumExemp,DateEmp→NumEtud,EtatPret ; NumEtud→NomEtud}. (5) R n'est pas en 2FN : NumExemp→Titre, DateAchat est DF partielle (NumExemp seul, partie de clé). (6) Décomposition en BCNF : LIVRE(Titre, Auteur), EXEMPLAIRE(NumExemp, Titre, DateAchat), ETUDIANT(NumEtud, NomEtud), EMPRUNTER(NumExemp, DateEmp, NumEtud, EtatPret). (7) Schéma E-A : LIVRE, EXEMPLAIRE, ETUDIANT, association EMPRUNTER entre EXEMPLAIRE et ETUDIANT.",
              en: "(1) Candidate key = {(CopyNo, LoanDate)}. (2)-(4) CM(F) = {Title→Author ; CopyNo→Title, PurchaseDate ; CopyNo,LoanDate→StudentNo,LoanState ; StudentNo→StudentName}. (5) R not in 2FN: CopyNo→Title,PurchaseDate is a partial dependency. (6) BCNF decomposition: BOOK(Title, Author), COPY(CopyNo, Title, PurchaseDate), STUDENT(StudentNo, StudentName), LOAN(CopyNo, LoanDate, StudentNo, LoanState). (7) E-R: BOOK, COPY, STUDENT, association LOAN between COPY and STUDENT.",
              uk: "(1) Потенційний ключ = {(NumExemp, DateEmp)} (єдина множина, що визначає все). (2)-(4) CM(F) = {Titre→Auteur ; NumExemp→Titre, DateAchat ; NumExemp,DateEmp→NumEtud,EtatPret ; NumEtud→NomEtud}. (5) R не в 2НФ: NumExemp→Titre, DateAchat — часткова ФЗ (лише NumExemp, частина ключа). (6) Декомпозиція у BCNF: LIVRE(Titre, Auteur), EXEMPLAIRE(NumExemp, Titre, DateAchat), ETUDIANT(NumEtud, NomEtud), EMPRUNTER(NumExemp, DateEmp, NumEtud, EtatPret). (7) Схема E-A: LIVRE, EXEMPLAIRE, ETUDIANT, асоціація EMPRUNTER між EXEMPLAIRE та ETUDIANT.",
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
    id: "p3",
    text: { fr: "Exercice 3", en: "Exercise 3", uk: "Вправа 3" },
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
              fr: "Maintenance des avions : relations Employé(IdEmp, NomEmp, Fonction, Service, CoûtHoraire), Avion(IdAvion, TypeAvion, NbHeurVol, CoutMaintenance), TypesAvion(TypeAvion, Constructeur, Capacité), Intervention(NumInt, IdAvion, DateDébut, DateFin), Intervenir(NumInt, IdEmp, TypeInt, NbHeurInt), Pièce(NumPièce, Désignation, TypeAvion, Prix), Utiliser(NumPièce, NumInt, DateUtilisation). Contraintes : (i) coût horaire unique par fonction ; (ii) pièce : désignation et prix uniques ; (iii) une pièce peut être utilisée par plusieurs types d'avions. Questions : (1) DF/DFM ? (2) Clés candidates de Pièce ? (3) Forme normale des relations concernées ? (4) Normaliser en BCNF/4FN si nécessaire. (5) Schéma E-A équivalent.",
              en: "Aircraft maintenance schema given. Constraints: (i) hourly cost unique per function; (ii) part: unique designation and unique price; (iii) a part can be used by several aircraft types. Questions: (1) FDs/MVDs? (2) Candidate keys of Part? (3) Normal form of concerned relations? (4) Normalize to BCNF/4FN if needed. (5) Equivalent E-R schema.",
              uk: "Обслуговування літаків: відношення Employé(IdEmp, NomEmp, Fonction, Service, CoûtHoraire), Avion(IdAvion, TypeAvion, NbHeurVol, CoutMaintenance), TypesAvion(TypeAvion, Constructeur, Capacité), Intervention(NumInt, IdAvion, DateDébut, DateFin), Intervenir(NumInt, IdEmp, TypeInt, NbHeurInt), Pièce(NumPièce, Désignation, TypeAvion, Prix), Utiliser(NumPièce, NumInt, DateUtilisation). Обмеження: (i) погодинна вартість унікальна для кожної посади; (ii) деталь: позначення та ціна унікальні; (iii) одна деталь може використовуватися кількома типами літаків. Питання: (1) ФЗ/БЗ? (2) Потенційні ключі для Pièce? (3) Нормальна форма відповідних відношень? (4) Нормалізувати до BCNF/4НФ, якщо потрібно. (5) Еквівалентна схема E-A.",
            },
            solution: {
              fr: "(1) Fonction → CoûtHoraire ; NumPièce → Désignation, Prix ; NumPièce →→ TypeAvion (DFM). (2) Clés candidates de Pièce ? Selon schéma donné : Pièce(NumPièce, Désignation, TypeAvion, Prix). Avec contraintes (ii)-(iii) : NumPièce, TypeAvion forment probablement la clé (ou NumPièce détermine Désignation/Prix, TypeAvion est lié par DFM). (3)-(4) À normaliser : la relation Pièce présente une DFM (NumPièce →→ TypeAvion) ; mieux en 4FN : PIECE(NumPièce, Désignation, Prix) et COMPATIBILITE(NumPièce, TypeAvion). Les autres relations à vérifier selon DF.",
              en: "(1) Function → HourlyCost ; PartNo → Designation, Price ; PartNo →→ AircraftType (MVD). (2) Candidate key of Part relation: (PartNo, AircraftType) given the multivalued aspect. (3)-(4) Part has MVD → not in 4FN; decompose into PART(PartNo, Designation, Price) and COMPAT(PartNo, AircraftType). Employee relation: Function→Cost suggests normalization considerations.",
              uk: "(1) Fonction → CoûtHoraire ; NumPièce → Désignation, Prix ; NumPièce →→ TypeAvion (БЗ). (2) Потенційні ключі для Pièce? Згідно з наведеною схемою: Pièce(NumPièce, Désignation, TypeAvion, Prix). З обмеженнями (ii)-(iii): NumPièce, TypeAvion імовірно утворюють ключ (або NumPièce визначає Désignation/Prix, а TypeAvion пов'язаний через БЗ). (3)-(4) Потрібно нормалізувати: відношення Pièce має БЗ (NumPièce →→ TypeAvion); краще у 4НФ: PIECE(NumPièce, Désignation, Prix) і COMPATIBILITE(NumPièce, TypeAvion). Інші відношення слід перевірити за ФЗ.",
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
    id: "p4",
    text: { fr: "Exercice 4", en: "Exercise 4", uk: "Вправа 4" },
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
              fr: "À partir du schéma E-A fourni : (a) Ensemble des DF F déductibles. (b) Couverture minimale CM(F) ; CM équivalente au schéma initial ? (c) Contrainte « un professeur, à un créneau horaire, ne peut enseigner qu'un seul cours dans une seule salle » — respectée ? Modifier E-A, traduire en DF, ajouter à F, normaliser et comparer.",
              en: "From the given E-R schema: (a) derive FDs F. (b) minimal cover CM(F); is CM equivalent to initial schema? (c) constraint 'a teacher, at a time slot, can teach only one course in one classroom' — satisfied? Modify E-R, translate to FD, add to F, normalize and compare.",
              uk: "За наведеною схемою E-A: (a) Множина виведених ФЗ F. (b) Мінімальне покриття CM(F); чи CM еквівалентне початковій схемі? (c) Обмеження «викладач у певний часовий слот може викладати лише один курс в одній аудиторії» — чи дотримано? Змініть E-A, переведіть у ФЗ, додайте до F, нормалізуйте та порівняйте.",
            },
            solution: {
              fr: "(a)-(b) À partir des cardinalités et liens : identifiants déterminent propriétés ; CM(F) dépend du schéma. (c) La contrainte implique une DF (Professeur, Horaire) → (Cours, Salle). Si non présente, modifier le schéma (ajouter contrainte/association) et intégrer la DF dans la normalisation.",
              en: "(a)-(b) FDs derived from cardinalities and keys. (c) Constraint implies FD (Teacher, TimeSlot) → (Course, Classroom). If missing, update E-R and include FD in normalization (likely affects 3NF/BCNF).",
              uk: "(a)-(b) За кардинальностями та зв'язками: ідентифікатори визначають властивості; CM(F) залежить від схеми. (c) Обмеження передбачає ФЗ (Professeur, Horaire) → (Cours, Salle). Якщо її немає, змініть схему (додайте обмеження/асоціацію) та включіть ФЗ у нормалізацію.",
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
    id: "p5",
    text: { fr: "Exercice 5", en: "Exercise 5", uk: "Вправа 5" },
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
              fr: "R <{Patient, Hôpital, Médecin}, F> avec F = {Patient, Hôpital → Médecin ; Médecin → Hôpital}. (1) Clés candidates ? (2) R en 3FN mais pas en BCNF ? (3) Décomposition en BCNF.",
              en: "R <{Patient, Hospital, Doctor}, F> with F = {Patient, Hospital → Doctor ; Doctor → Hospital}. (1) Candidate keys? (2) In 3NF but not BCNF? (3) BCNF decomposition.",
              uk: "R <{Patient, Hôpital, Médecin}, F>, де F = {Patient, Hôpital → Médecin ; Médecin → Hôpital}. (1) Потенційні ключі? (2) R у 3НФ, але не в BCNF? (3) Декомпозиція у BCNF.",
            },
            solution: {
              fr: "(1) Clé candidate = {(Patient, Hôpital)}. (2) Oui : Médecin → Hôpital est DF non-triviale où Médecin n'est pas une clé de R → viole BCNF. (3) Décomposition : R1(Médecin, Hôpital), R2(Patient, Médecin).",
              en: "(1) Candidate key = {(Patient, Hospital)}. (2) Yes: Doctor → Hospital is non-trivial FD with left side not a key → violates BCNF. (3) Decomposition: R1(Doctor, Hospital), R2(Patient, Doctor).",
              uk: "(1) Потенційний ключ = {(Patient, Hôpital)}. (2) Так: Médecin → Hôpital — нетривіальна ФЗ, де Médecin не є ключем R → порушує BCNF. (3) Декомпозиція: R1(Médecin, Hôpital), R2(Patient, Médecin).",
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
    id: "p6",
    text: { fr: "Exercice 6", en: "Exercise 6", uk: "Вправа 6" },
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
              fr: "R <{A, B, C, D, E, G, H}, F> avec F = { A → BDE ; B → EG ; H → C ; AB → G ; BG → H }. (1) Clés candidates ? (2) Couverture minimale CM(F). (3) Décomposition en BCNF.",
              en: "R <{A, B, C, D, E, G, H}, F> with F = { A → BDE ; B → EG ; H → C ; AB → G ; BG → H }. (1) Candidate keys? (2) Minimal cover CM(F). (3) BCNF decomposition.",
              uk: "R <{A, B, C, D, E, G, H}, F>, де F = { A → BDE ; B → EG ; H → C ; AB → G ; BG → H }. (1) Потенційні ключі? (2) Мінімальне покриття CM(F). (3) Декомпозиція у BCNF.",
            },
            solution: {
              fr: "(1) Trouver A⁺ etc. : clés candidates à déterminer selon F. (2) CM(F) obtenue en simplifiant (éliminer redondances, DF non élémentaires). (3) Décomposition BCNF itérative selon les DF violant BCNF.",
              en: "(1)-(3) Standard normalization steps: compute closures to find keys, derive minimal cover, then BCNF decomposition by repeatedly splitting on violating FDs.",
              uk: "(1) Знайти A⁺ тощо: потенційні ключі визначаються за F. (2) CM(F) отримують спрощенням (усунення надмірностей, неелементарних ФЗ). (3) Ітеративна декомпозиція BCNF за ФЗ, що порушують BCNF.",
            },
          },
        ],
      },
    ],
  },
];
