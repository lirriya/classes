import type { Block, Subject } from "../types";

const chapterOne: Block[] = [
  {
    type: "paragraph",
    text: "Les langages formels constituent le socle théorique de l'informatique moderne. Ils permettent de modéliser la syntaxe des langages de programmation, de concevoir des compilateurs et de formaliser la notion de calculabilité.",
  },
  { type: "rule" },
  { type: "heading", level: 3, text: "1. Alphabet, Mots et Vocabulaire" },
  { type: "heading", level: 4, text: "A. Alphabet et Symboles" },
  {
    type: "list",
    items: [
      { text: "**Lettre (ou symbole) :** Un élément indivisible de base." },
      {
        text: "**Alphabet (Σ) :** Un ensemble fini et non vide de symboles.",
      },
      {
        text: "**Exemples :**",
        children: [
          "Σ₁ = {0, 1} — alphabet binaire",
          "Σ₂ = {a, b, c, …, z} — alphabet latin minuscules",
          "Σ₃ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, (, )} — alphabet d'expressions arithmétiques",
        ],
      },
    ],
  },
  { type: "heading", level: 4, text: "B. Notion de Mot" },
  {
    type: "list",
    items: [
      {
        text: "**Mot (w) :** Une suite finie (ou chaîne) de symboles juxtaposés de l'alphabet Σ.",
      },
      {
        text: "**Longueur d'un mot (|w|) :** Le nombre de symboles qui composent le mot w.",
      },
      {
        text: "**Mot vide (ε) :** La chaîne contenant zéro symbole. Sa longueur est stricte : |ε| = 0.",
      },
    ],
  },
  {
    type: "heading",
    level: 5,
    text: "Définition récursive de la longueur d'un mot",
  },
  {
    type: "paragraph",
    text: "La longueur d'un mot se définit de manière rigoureuse en deux étapes :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: "**Base :** |ε| = 0" },
      {
        text: "**Récurrence :** |w| = |αu| = 1 + |u|, où α ∈ Σ et u ∈ Σ*.",
      },
    ],
  },
  { type: "heading", level: 4, text: "C. Les Ensembles Σ* et Σ+" },
  {
    type: "list",
    items: [
      {
        text: "**Σ* (Fermeture de Kleene de l'alphabet) :** L'ensemble de tous les mots possibles formés avec les lettres de Σ, y compris le mot vide ε.",
      },
      { text: "Par définition : ε ∈ Σ*." },
      {
        text: "Si Σ = {0, 1}, alors Σ* = {ε, 0, 1, 00, 01, 10, 11, 000, …}.",
      },
      {
        text: "**Σ+ (Ensemble des mots non vides) :** L'ensemble de tous les mots non vides sur Σ, à l'exclusion du mot vide.",
      },
      { text: "Relation fondamentale : Σ+ = Σ* ∖ {ε}." },
    ],
  },
  { type: "rule" },
  { type: "heading", level: 3, text: "2. Opérations sur les Mots" },
  { type: "heading", level: 4, text: "A. La Concaténation" },
  {
    type: "paragraph",
    text: "Soient w ∈ Σ* et u ∈ Σ*. La concaténation de w et de u, notée w · u ou simplement wu, est le mot obtenu en juxtaposant les symboles de u directement après ceux de w.",
  },
  { type: "heading", level: 5, text: "Propriétés de la concaténation" },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Associativité :** (w · u) · v = w · (u · v) pour tous mots w, u, v.",
      },
      {
        text: "**Élément neutre :** Le mot vide ε est l'élément neutre à gauche et à droite : ε · w = w · ε = w.",
      },
      {
        text: "**Non-commutativité :** En général, w · u ≠ u · w (ex : ab · c = abc ≠ cab = c · ab).",
      },
      { text: "**Longueur du produit :** |w · u| = |w| + |u|." },
    ],
  },
  { type: "heading", level: 5, text: "Définition récursive de la concaténation" },
  {
    type: "list",
    ordered: true,
    items: [
      { text: "ε · u = u" },
      { text: "w · u = (αv) · u = α(v · u), où α ∈ Σ et v ∈ Σ*." },
    ],
  },
  { type: "heading", level: 4, text: "B. Puissance d'un Mot" },
  {
    type: "paragraph",
    text: "L'itération de la concaténation d'un mot w avec lui-même définit ses puissances :",
  },
  {
    type: "list",
    items: [
      { text: "w⁰ = ε" },
      { text: "wⁿ⁺¹ = w · wⁿ, pour tout n ∈ ℕ" },
      {
        text: "Exemple : si w = ab, alors w⁰ = ε, w¹ = ab, w² = abab, w³ = ababab.",
      },
    ],
  },
  { type: "heading", level: 4, text: "C. Facteurs, Préfixes et Suffixes" },
  {
    type: "paragraph",
    text: "Soit un mot x ∈ Σ* composé sous la forme x = uvw :",
  },
  {
    type: "list",
    items: [
      { text: "**Préfixe (ou facteur gauche) :** Le mot u situé au début de x." },
      {
        text: "**Facteur (ou sous-chaîne) :** Le mot v situé à l'intérieur de x.",
      },
      { text: "**Suffixe (ou facteur droit) :** Le mot w situé à la fin de x." },
    ],
  },
  {
    type: "quote",
    text: "**Remarque importante :** Le mot vide ε est à la fois un préfixe, un facteur et un suffixe de n'importe quel mot x ∈ Σ*. De plus, tout mot x est son propre préfixe, facteur et suffixe (x = ε · x · ε).",
  },
  {
    type: "paragraph",
    text: "Exemple pratique : soit w = abc sur Σ = {a, b, c} :",
  },
  {
    type: "list",
    items: [
      { text: "**Préfixes de w :** ε, a, ab, abc" },
      { text: "**Suffixes de w :** ε, c, bc, abc" },
      { text: "**Facteurs de w :** ε, a, b, c, ab, bc, abc" },
    ],
  },
  { type: "rule" },
  { type: "heading", level: 3, text: "3. Les Langages et leurs Opérations" },
  {
    type: "paragraph",
    text: "Un **langage L** sur un alphabet Σ est un sous-ensemble de Σ*, c'est-à-dire L ⊆ Σ*.",
  },
  { type: "heading", level: 4, text: "Cas particuliers notables" },
  {
    type: "list",
    items: [
      {
        text: "**Langage vide (∅) :** Ne contient aucun mot. Sa cardinalité est |∅| = 0.",
      },
      {
        text: "**Langage contenant le mot vide ({ε}) :** Contient exactement un mot (le mot vide). Sa cardinalité est |{ε}| = 1.",
      },
      { text: "**Attention :** Ne confondez jamais ∅ et {ε}." },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: "Opérations fondamentales sur les langages",
  },
  {
    type: "paragraph",
    text: "Soient L₁ et L₂ deux langages définis sur un alphabet Σ :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Union (L₁ ∪ L₂) :** L₁ ∪ L₂ = {w | w ∈ L₁ ou w ∈ L₂}",
      },
      {
        text: "**Intersection (L₁ ∩ L₂) :** L₁ ∩ L₂ = {w | w ∈ L₁ et w ∈ L₂}",
      },
      {
        text: "**Différence (L₁ ∖ L₂) :** L₁ ∖ L₂ = {w | w ∈ L₁ et w ∉ L₂}",
      },
      {
        text: "**Complémentaire (L̄) :** L̄ = {w ∈ Σ* | w ∉ L} = Σ* ∖ L",
      },
      {
        text: "**Concaténation de langages (L₁ · L₂) :** L₁ · L₂ = {uv | u ∈ L₁ et v ∈ L₂}",
      },
      {
        text: "**Auto-concaténation (puissance d'un langage Lⁿ) :** L⁰ = {ε} et Lⁿ⁺¹ = L · Lⁿ",
      },
      {
        text: "**Fermeture de Kleene (étoile de Kleene L*) :** L* = ⋃ Lᵏ pour tout k ≥ 0, c'est-à-dire L⁰ ∪ L¹ ∪ L² ∪ …",
      },
    ],
  },
  {
    type: "paragraph",
    text: "L* représente l'ensemble de toutes les concaténations possibles de zéro, un ou plusieurs mots de L. Le mot vide ε appartient obligatoirement à L*, quel que soit L.",
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: "4. Exercices d'Entraînement",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section A : Vrai ou Faux (Justifiez votre réponse)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Pour tout alphabet Σ, le mot vide ε appartient à Σ+.",
            answer: false,
            justification:
              "**Faux.** Par définition, Σ+ = Σ* ∖ {ε} : Σ+ ne contient que les mots de longueur ≥ 1.",
            mistake:
              "Rappelle-toi comment Σ+ est défini à partir de Σ* : on en retire quoi ?",
          },
          {
            kind: "trueFalse",
            prompt: "Affirmation : Si L = {a, b}, alors L⁰ = ∅.",
            answer: false,
            justification:
              "**Faux.** Pour tout langage L, la puissance zéro est L⁰ = {ε} (le langage contenant uniquement le mot vide), et non ∅.",
            mistake:
              "La puissance zéro n'est jamais « sans élément » : que vaut-elle par définition, quel que soit L ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : La concaténation de langages est commutative : L₁ · L₂ = L₂ · L₁.",
            answer: false,
            justification:
              "**Faux.** Contre-exemple : si L₁ = {a} et L₂ = {b}, alors L₁ · L₂ = {ab} alors que L₂ · L₁ = {ba}.",
            mistake:
              "Cherche un contre-exemple : l'ordre des lettres change-t-il le mot obtenu ?",
          },
          {
            kind: "trueFalse",
            prompt: "Affirmation : Si w = abba, le mot bb est un facteur de w.",
            answer: true,
            justification:
              "**Vrai.** Le mot abba s'écrit a · (bb) · a, donc bb est bien un facteur (sous-chaîne).",
            mistake:
              "Un facteur est une sous-chaîne présente à l'intérieur du mot : décompose abba en trois morceaux.",
          },
          {
            kind: "trueFalse",
            prompt: "Affirmation : Pour tout langage L, on a L · ∅ = ∅.",
            answer: true,
            justification:
              "**Vrai.** On forme des mots uv avec u ∈ L et v ∈ ∅. Comme ∅ n'a aucun mot, aucune combinaison n'est possible : le résultat est vide.",
            mistake:
              "Que peut-on construire avec un ensemble qui ne contient aucun élément ?",
          },
        ],
      },
      {
        title: "Section B : Questions à Choix Multiple (QCM)",
        exercises: [
          {
            kind: "mcq",
            prompt: "Soit Σ = {a, b} et L = {ab}. Que vaut L² ?",
            options: [
              {
                text: "{ab}",
                feedback:
                  "L² = L · L : il faut coller un mot de L avec un AUTRE mot de L — le résultat contient deux copies, pas une seule.",
              },
              {
                text: "{a²b²}",
                feedback:
                  "ab · ab = abab — les puissances ne se concatènent pas lettre par lettre : aabb n'apparaît nulle part.",
              },
              { text: "{abab}" },
              {
                text: "{ε, ab, abab}",
                feedback:
                  "ε vient de L⁰ : L² ne contient que les mots formés de exactement deux mots de L collés ensemble.",
              },
            ],
            answerIndex: 2,
            solution: "L² = L · L = {ab} · {ab} = {abab}.",
          },
          {
            kind: "mcq",
            prompt: "Quelle est la différence exacte entre ∅ et {ε} ?",
            options: [
              {
                text: "∅ est un mot, {ε} est un langage.",
                feedback:
                  "∅ n'est pas un mot — c'est un ensemble sans aucun élément (un langage vide).",
              },
              {
                text: "∅ ne contient aucun élément, alors que {ε} contient un élément de longueur 0.",
              },
              {
                text: "Il n'y a aucune différence, ils sont équivalents.",
                feedback:
                  "∅ a cardinalité 0, {ε} a cardinalité 1 — deux ensembles très différents.",
              },
              {
                text: "∅ contient la lettre 0.",
                feedback:
                  "∅ est l'ensemble vide : il ne contient ni lettre, ni symbole, ni rien du tout.",
              },
            ],
            answerIndex: 1,
            solution:
              "|∅| = 0 (langage sans aucun mot) alors que |{ε}| = 1 (langage composé d'un seul mot, de longueur 0).",
          },
          {
            kind: "mcq",
            prompt:
              "Si |u| = 3 et |v| = 5, quelle est la longueur du mot u · v² ?",
            options: [
              {
                text: "11",
                feedback:
                  "2 × 5 = 10, mais n'oublie pas d'ajouter |u| = 3 : la longueur totale est 13.",
              },
              { text: "13" },
              {
                text: "15",
                feedback:
                  "15 = 3 × 5 : tu as multiplié les longueurs alors qu'elles s'additionnent.",
              },
              {
                text: "30",
                feedback:
                  "Les longueurs s'additionnent, elles ne se multiplient jamais : |uv| = |u| + |v|.",
              },
            ],
            answerIndex: 1,
            solution: "|u · v²| = |u| + 2|v| = 3 + 2 × 5 = 13.",
          },
        ],
      },
      {
        title: "Section C : Textes à trous",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "L'ensemble de tous les mots non vides sur un alphabet Σ est noté ________.",
            blanks: [
              {
                accepted: ["Σ+", "Σ +", "sigma+"],
                mistakes: [
                  {
                    match: ["Σ*", "Σ *", "sigma*"],
                    feedback:
                      "Σ* contient aussi le mot vide ε — la question demande les mots NON vides.",
                  },
                ],
              },
            ],
            solution:
              "Réponse : Σ+ (soit Σ* privé du mot vide : Σ+ = Σ* ∖ {ε}).",
          },
          {
            kind: "fillBlank",
            prompt:
              "L'élément neutre pour l'opération de concaténation de mots est ________.",
            blanks: [
              {
                accepted: ["ε", "epsilon", "mot vide", "le mot vide"],
                mistakes: [
                  {
                    match: ["∅", "emptyset", "langage vide"],
                    feedback:
                      "∅ est le langage vide, pas un élément neutre : le neutre doit laisser le mot inchangé (ε · w = w).",
                  },
                ],
              },
            ],
            solution: "Réponse : le mot vide ε, car ε · w = w · ε = w.",
          },
          {
            kind: "fillBlank",
            prompt:
              "La fermeture de Kleene d'un langage L, notée L*, contient toujours au moins le mot ________.",
            blanks: [
              {
                accepted: ["ε", "epsilon", "mot vide", "le mot vide"],
                mistakes: [
                  {
                    match: ["∅", "emptyset", "langage vide"],
                    feedback:
                      "Même si L est vide, L* contient toujours L⁰ = {ε} : le mot vide y figure obligatoirement.",
                  },
                ],
              },
            ],
            solution: "Réponse : le mot vide ε, car L* contient L⁰ = {ε}.",
          },
          {
            kind: "fillBlank",
            prompt: "Un sous-ensemble L de Σ* est appelé un ________.",
            blanks: [
              {
                accepted: ["langage", "language"],
                mistakes: [],
              },
            ],
            solution: "Réponse : un langage (L ⊆ Σ* est la définition même).",
          },
        ],
      },
      {
        title: "Section D : Exercices de Type Examen (Style PDF)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Soient les langages L₁ = {a, aa} et L₂ = {ε, b, bb} sur l'alphabet Σ = {a, b}.",
            details: [
              "Donnez les ensembles représentant L₁ · L₂ et L₂ · L₁.",
              "Calculez L₁².",
              "Listez les mots de longueur inférieure ou égale à 2 présents dans L₁*.",
            ],
            solution: "Corrigé complet :",
            solutionItems: [
              "L₁ · L₂ = {a, ab, abb, aa, aab, aabb}",
              "L₂ · L₁ = {a, aa, ba, baa, bba, bbaa}",
              "L₁² = {aa, aaa, aaaa}",
              "Mots de L₁* de longueur ≤ 2 : {ε, a, aa} (L⁰ = {ε}, L¹ = {a, aa}, L² n'apporte que aa).",
            ],
          },
          {
            kind: "open",
            prompt: "Soit Σ = {0, 1}.",
            details: [
              "Décrivez en phrases simples le langage L = {w ∈ Σ* | w = 0u1 avec u ∈ Σ*}.",
              "Donnez tous les préfixes, suffixes et facteurs du mot w = 101.",
            ],
            solution: "Corrigé complet :",
            solutionItems: [
              "L est l'ensemble des mots binaires qui commencent par 0 et se terminent par 1.",
              "Préfixes de 101 : ε, 1, 10, 101",
              "Suffixes de 101 : ε, 1, 01, 101",
              "Facteurs de 101 : ε, 1, 0, 10, 01, 101",
            ],
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: "5. Fiche Réflexe Examen : Modèles de Rédaction en Français",
  },
  {
    type: "paragraph",
    text: "Ces modèles pré-rédigés vous permettent de structurer immédiatement vos réponses le jour de l'examen.",
  },
  {
    type: "heading",
    level: 4,
    text: "Modèle A : Opérations sur des langages (L₁ · L₂, L₁ ∪ L₂, etc.)",
  },
  {
    type: "quote",
    text: "**Intitulé type :** « Soient L₁ = {…} et L₂ = {…}. Déterminez l'ensemble L₁ · L₂. »",
  },
  { type: "paragraph", text: "**Rédaction type à mémoriser :**" },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Rappel de la définition :** Par définition, la concaténation de deux langages L₁ et L₂ est donnée par L₁ · L₂ = {uv | u ∈ L₁ et v ∈ L₂}.",
      },
      {
        text: "**Calcul explicite des combinaisons :** En prenant chaque élément u ∈ L₁ et en le combinant avec chaque élément v ∈ L₂, nous obtenons : pour u = …, …",
      },
      {
        text: "**Conclusion :** En éliminant les doublons, nous obtenons l'ensemble final : L₁ · L₂ = {…}.",
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 4,
    text: "Modèle B : Lister les préfixes, suffixes ou facteurs d'un mot",
  },
  {
    type: "quote",
    text: "**Intitulé type :** « Donnez l'ensemble des préfixes, suffixes et facteurs du mot w = … »",
  },
  {
    type: "paragraph",
    text: "**Rédaction type à mémoriser :** Soit le mot w = … défini sur l'alphabet Σ = {…}. Par définition :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Préfixes :** les mots u tels qu'il existe y ∈ Σ* avec w = uy. Préfixes(w) = {ε, …, w}",
      },
      {
        text: "**Suffixes :** les mots v tels qu'il existe x ∈ Σ* avec w = xv. Suffixes(w) = {ε, …, w}",
      },
      {
        text: "**Facteurs :** les sous-chaînes f telles qu'il existe x, y ∈ Σ* avec w = xfy. Facteurs(w) = {ε, …, w}",
      },
    ],
  },
  {
    type: "quote",
    text: "Note : n'oubliez jamais d'inclure le mot vide ε dans chacune de ces trois listes.",
  },
];

const chapterTwo: Block[] = [
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: "Techniques et outils de preuve — Sections 2.1 à 2.3",
  },
  {
    type: "paragraph",
    text: "La maîtrise des démonstrations mathématiques est indispensable pour prouver les propriétés des langages formels. Voici les trois premières méthodes fondamentales du chapitre.",
  },
  {
    type: "heading",
    level: 3,
    text: "2.1 Preuve par récurrence (ou par induction)",
  },
  {
    type: "paragraph",
    text: "Cette technique permet de prouver qu'une propriété mathématique, notée P(X), est vraie pour toute une famille d'objets ou pour tout nombre entier. Elle fonctionne comme des dominos qui tombent : on fait tomber le premier, et on prouve que chaque domino fait tomber le suivant.",
  },
  {
    type: "paragraph",
    text: "La preuve se divise **obligatoirement** en deux étapes :",
  },
  {
    type: "list",
    items: [
      {
        text: "**Initialisation (ou base) :** On prouve que la propriété P(X) est vraie pour le plus petit cas possible (généralement n = 0 ou n = 1).",
      },
      {
        text: "**Hérédité :** On fait l'hypothèse que P(X) est vraie pour un rang donné (par exemple pour une taille n−1), et on utilise cette hypothèse pour prouver que la propriété reste vraie pour le rang suivant (la taille n).",
      },
    ],
  },
  { type: "heading", level: 4, text: "La récurrence forte" },
  {
    type: "paragraph",
    text: "Dans certains cas complexes, utiliser seulement le rang précédent (n−1) ne suffit pas. L'hérédité de la récurrence forte consiste à supposer que la propriété est vraie pour **tous** les rangs strictement inférieurs à n (tout X avec |X| < n), afin de prouver qu'elle est vraie pour n.",
  },
  { type: "heading", level: 3, text: "2.2 Preuve par l'absurde" },
  {
    type: "paragraph",
    text: "Cette approche est utilisée quand il est trop difficile de prouver directement qu'une propriété est vraie.",
  },
  {
    type: "list",
    items: [
      {
        text: "**Principe :** On commence par supposer l'inverse de ce que l'on veut prouver, c'est-à-dire que la propriété P est fausse.",
      },
      {
        text: "**Objectif :** On développe un raisonnement logique à partir de cette hypothèse fausse jusqu'à aboutir à une conséquence visiblement inexacte ou impossible (une **contradiction**).",
      },
      {
        text: "**Exemple du cours :** Pour prouver que √2 n'est pas un nombre rationnel, on suppose d'abord qu'il l'est (qu'il peut s'écrire sous forme de fraction m/n). Cela mène à une contradiction où m et n seraient tous les deux pairs, ce qui est impossible s'ils sont premiers entre eux.",
      },
    ],
  },
  { type: "heading", level: 3, text: "2.3 Preuve par construction" },
  {
    type: "paragraph",
    text: "Contrairement aux preuves abstraites, cette méthode est très concrète. Elle sert à prouver qu'un objet mathématique spécifique **existe**.",
  },
  {
    type: "list",
    items: [
      {
        text: "**Méthode :** On prouve l'existence de l'objet en expliquant étape par étape comment le construire explicitement.",
      },
      {
        text: "**Vérification :** Une fois la méthode de construction décrite, il est impératif de vérifier et de prouver que l'objet fini possède bien toutes les propriétés exigées par le problème.",
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: "Exercices d'Entraînement (Sections 2.1 - 2.3)",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section A : Vrai ou Faux (Justifiez)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Dans une preuve par l'absurde, on suppose que la propriété à prouver est vraie dès le début.",
            answer: false,
            justification:
              "**Faux.** Dans une preuve par l'absurde, on suppose au contraire que P est FAUSSE, puis on aboutit à une contradiction.",
            mistake:
              "Relis le principe : par l'absurde, on démarre en supposant exactement quoi ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : L'initialisation d'une preuve par récurrence consiste à vérifier la propriété pour une petite taille.",
            answer: true,
            justification:
              "**Vrai.** L'initialisation (ou base) prouve P(X) pour le plus petit cas possible — par exemple n = 0 ou n = 1.",
            mistake:
              "C'est la première des deux étapes obligatoires de la récurrence : que fait-on au tout début de la preuve ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Pour prouver qu'un certain type de graphe existe, il suffit de donner les instructions précises pour le dessiner, puis vérifier qu'il est correct.",
            answer: true,
            justification:
              "**Vrai.** C'est exactement la preuve par construction : on construit l'objet explicitement, puis on vérifie qu'il remplit bien toutes les propriétés exigées.",
            mistake:
              "Cette méthode porte un nom dans le cours : on décrit comment fabriquer l'objet, puis on …",
          },
        ],
      },
      {
        title: "Section B : Question à Choix Multiple (QCM)",
        exercises: [
          {
            kind: "mcq",
            prompt:
              "Quelle est la différence principale entre la récurrence simple et la récurrence forte ?",
            options: [
              {
                text: "La récurrence forte n'a pas besoin d'étape d'initialisation.",
                feedback:
                  "Toute preuve par récurrence commence obligatoirement par l'initialisation — forte ou non.",
              },
              {
                text: "La récurrence forte suppose que la propriété est vraie pour tous les rangs inférieurs à n, et non seulement pour n−1.",
              },
              {
                text: "La récurrence simple est utilisée pour l'absurde.",
                feedback:
                  "La récurrence et l'absurde sont deux techniques distinctes : la récurrence sert à prouver une propriété pour toute une famille de cas.",
              },
              {
                text: "Il n'y a aucune différence.",
                feedback:
                  "La différence est dans l'hérédité : tous les rangs strictement inférieurs à n, contre seulement le rang n−1.",
              },
            ],
            answerIndex: 1,
            solution:
              "La récurrence forte suppose P vraie pour TOUS les rangs strictement inférieurs à n, alors que la simple ne suppose que le rang n−1.",
          },
        ],
      },
      {
        title: "Section C : Texte à trous",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Pour réaliser une preuve par construction, il faut élaborer une _________ pour créer l'objet en question. Ensuite, il est obligatoire de _________ qu'il satisfait toutes les propriétés requises.",
            blanks: [
              {
                accepted: [
                  "méthode",
                  "methode",
                  "construction",
                  "procédure",
                  "procedure",
                  "façon",
                  "facon",
                ],
                mistakes: [
                  {
                    match: ["vérification", "verification", "contrôle", "controle"],
                    feedback:
                      "On n'élabore pas une vérification pour créer l'objet : on décrit d'abord comment le construire, on vérifie ensuite.",
                  },
                ],
              },
              {
                accepted: [
                  "vérifier",
                  "verifier",
                  "prouver",
                  "vérification",
                  "verification",
                ],
                mistakes: [
                  {
                    match: ["décrire", "decrire", "expliquer", "montrer"],
                    feedback:
                      "Décrire ne suffit pas : la règle impose de VÉRIFIER formellement que l'objet satisfait toutes les propriétés.",
                  },
                ],
              },
            ],
            solution:
              "Réponses : une méthode (de construction) · vérifier (que l'objet satisfait bien toutes les propriétés).",
          },
        ],
      },
      {
        title: "Section D : Exercice de type Examen (Structurer une preuve)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Vous devez prouver par l'absurde que le langage L n'est pas régulier. Rédigez uniquement la **première phrase** de votre preuve.",
            solution:
              "Première phrase type : **« Supposons par l'absurde que le langage L soit régulier. »** La première phrase annonce toujours l'hypothèse de départ de l'absurde.",
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: "Fiche Réflexe Examen : Modèle de Rédaction",
  },
  {
    type: "paragraph",
    text: "La preuve par récurrence est l'une des techniques les plus demandées à l'examen. Si vous avez une question du type : « Prouvez par récurrence que pour tout n ≥ 1, la propriété P(n) est vraie. »",
  },
  {
    type: "paragraph",
    text: "**Utilisez ce modèle de réponse strict à mémoriser :**",
  },
  {
    type: "quote",
    text: "**Nous allons procéder par récurrence sur l'entier n.**",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Initialisation (Base de la récurrence) :**",
        children: [
          "Pour n = 1 (ou la plus petite valeur demandée).",
          "Calcul/Démonstration : [Montrez le calcul pour n = 1].",
          "Conclusion de l'étape : La propriété est donc justifiée pour n = 1.",
        ],
      },
      {
        text: "**Hérédité :**",
        children: [
          "Hypothèse : Supposons que la propriété est vraie pour un certain rang n−1, c'est-à-dire : [Écrire la formule mathématique pour n−1].",
          "Objectif : Prouvons qu'elle est vraie au rang n.",
          "Démonstration : [Faire les manipulations mathématiques en utilisant obligatoirement l'hypothèse posée juste au-dessus].",
        ],
      },
      {
        text: "**Conclusion :**",
        children: [
          "Par conséquent, d'après le principe de récurrence, la propriété est vraie pour tout n.",
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: "Techniques et outils de preuve — Sections 2.4 à 2.7",
  },
  {
    type: "heading",
    level: 3,
    text: "2.4 Principe des tiroirs (Principe des nids de pigeon)",
  },
  {
    type: "list",
    items: [
      {
        text: "**Le concept :** Si vous avez un nombre défini d'objets à placer dans un nombre fini de compartiments, et que le nombre d'objets est supérieur au nombre de compartiments, vous ne pouvez pas les répartir uniformément. Il y aura obligatoirement au moins un compartiment qui devra contenir plusieurs objets.",
      },
      {
        text: "**Utilité :** Ce principe est indispensable pour résoudre des problèmes qui impliquent la distribution ou l'affectation d'objets. Vous l'utiliserez massivement dans le Chapitre 3 lors des démonstrations liées au Lemme de pompage pour les automates.",
      },
      {
        text: "**Exemple classique :** Si l'on réunit un groupe d'au moins 367 personnes, il est mathématiquement certain qu'au moins deux personnes partagent la même date d'anniversaire, car il n'y a que 366 dates possibles (les compartiments) dans une année bissextile.",
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "2.5 L'équivalence logique : « Si et seulement si » (ssi)",
  },
  {
    type: "list",
    items: [
      {
        text: "**Le concept :** L'expression « si et seulement si » sert à établir une relation de correspondance totale (équivalence) entre deux propositions.",
      },
      {
        text: "**La méthode de preuve :** Pour démontrer que les deux propositions sont équivalentes, il faut obligatoirement montrer que l'une implique l'autre et vice versa.",
      },
    ],
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: "**L'implication directe (⇒) :** Prouver que « si X alors Y »." },
      { text: "**L'implication réciproque (⇐) :** Prouver que « si Y alors X »." },
    ],
  },
  {
    type: "paragraph",
    text: "**La contraposée :** Parfois, prouver « si X alors Y » est trop complexe. On peut utiliser une forme équivalente appelée la contraposée, qui consiste à prouver que « si non Y alors non X ».",
  },
  { type: "heading", level: 3, text: "2.6 Les Contre-exemples" },
  {
    type: "list",
    items: [
      {
        text: "**Le concept :** Un contre-exemple est un cas spécifique utilisé pour démontrer qu'une propriété supposée générale est visiblement inexacte.",
      },
      {
        text: "**Règle d'or de la logique :**",
        children: [
          "Un seul contre-exemple est **suffisant** pour réfuter (détruire) une proposition et prouver qu'elle est fausse.",
          "À l'inverse, donner un ou plusieurs exemples ne suffit **jamais** pour affirmer qu'une proposition est vraie pour tous les cas ; cela nécessite une preuve formelle qui ne se base pas sur un cas particulier.",
        ],
      },
      {
        text: "**Exemple :** Pour prouver que la proposition « si un graphe est connexe, alors il est nécessairement hamiltonien » est fausse, il suffit de dessiner et de présenter un unique graphe connexe qui ne contient pas de cycle hamiltonien.",
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: "Exercices d'Entraînement (Sections 2.4 - 2.7)",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section A : Vrai ou Faux (Justifiez)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Trouver un exemple où une formule mathématique fonctionne est suffisant pour valider cette proposition.",
            answer: false,
            justification:
              "**Faux.** Un seul contre-exemple suffit à réfuter, mais des exemples qui fonctionnent ne prouvent jamais la proposition pour tous les cas : il faut une preuve formelle.",
            mistake:
              "Rappelle-toi la règle d'or : un contre-exemple détruit, mais des exemples qui marchent construisent-ils une preuve ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Pour prouver qu'un langage L est régulier si et seulement s'il est décrit par une expression régulière, je dois faire deux démonstrations distinctes.",
            answer: true,
            justification:
              "**Vrai.** « Si et seulement si » = double implication : il faut prouver ⇒ et ⇐, donc bien deux démonstrations.",
            mistake: "Que cache le « ssi » en logique — une ou deux implications ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Si j'ai 5 lettres à ranger dans 4 boîtes, le principe des tiroirs garantit qu'une boîte aura au moins deux lettres.",
            answer: true,
            justification:
              "**Vrai.** 5 objets > 4 compartiments : le principe des tiroirs garantit qu'au moins un compartiment contient ≥ 2 lettres.",
            mistake:
              "Compare les nombres : combien d'objets places-tu et combien de compartiments as-tu ?",
          },
        ],
      },
      {
        title: "Section B : Question à Choix Multiple (QCM)",
        exercises: [
          {
            kind: "mcq",
            prompt:
              "Quelle est la contraposée exacte de la proposition « S'il est 8h00 (X), alors le train part (Y) » ?",
            options: [
              {
                text: "Si le train part, alors il est 8h00.",
                feedback:
                  "C'est la réciproque (Y ⇒ X), pas la contraposée (¬Y ⇒ ¬X).",
              },
              {
                text: "S'il n'est pas 8h00, le train ne part pas.",
                feedback:
                  "C'est la négation inverse (¬X ⇒ ¬Y) : elle n'est pas équivalente à X ⇒ Y.",
              },
              { text: "Si le train ne part pas, alors il n'est pas 8h00." },
              {
                text: "Le train part si et seulement s'il est 8h00.",
                feedback:
                  "L'implication X ⇒ Y ne devient pas une équivalence : le train pourrait très bien partir à d'autres heures.",
              },
            ],
            answerIndex: 2,
            solution:
              "La contraposée de « si X alors Y » est « si non Y alors non X » : si le train ne part pas, alors il n'est pas 8h00.",
          },
        ],
      },
      {
        title: "Section C : Texte à trous",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Si le nombre d'objets est supérieur au nombre de __________, alors il y aura au moins un compartiment qui devra contenir __________ objets. Ce concept mathématique s'appelle le principe des __________.",
            blanks: [
              {
                accepted: [
                  "compartiments",
                  "compartiment",
                  "boîtes",
                  "boites",
                  "cases",
                  "tiroirs",
                ],
                mistakes: [
                  {
                    match: ["objets", "pigeons", "pigeon"],
                    feedback:
                      "Ce sont les CASES qui limitent la répartition — les objets sont justement ceux que l'on range dedans.",
                  },
                ],
              },
              {
                accepted: ["plusieurs", "deux ou plus", "au moins deux"],
                mistakes: [],
              },
              {
                accepted: [
                  "tiroirs",
                  "tiroir",
                  "nids de pigeon",
                  "nidsdepigeon",
                ],
                mistakes: [
                  {
                    match: ["pigeon", "pigeons"],
                    feedback:
                      "Le nom complet est « principe des tiroirs » (ou nids de pigeon) — la réponse attendue est « tiroirs ».",
                  },
                ],
              },
            ],
            solution: "Réponses : compartiments · plusieurs · tiroirs.",
          },
        ],
      },
      {
        title: "Section D : Exercice de type Examen (Inspiré de l'Exercice 2.4 du PDF)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Soit un ensemble fini (non vide) de personnes. Dans ce groupe, chaque personne connaît au moins une autre personne de l'ensemble. En utilisant le principe des tiroirs, montrez qu'il y a au moins deux personnes dans l'ensemble qui ont exactement le même nombre de connaissances.",
            details: [
              "Indication : Considérez les nombres minimum et maximum de connaissances comme étant vos « compartiments ».",
            ],
            solution: "Solution simplifiée :",
            solutionItems: [
              "S'il y a n personnes, le nombre de connaissances d'une personne va de 1 (elle connaît au moins quelqu'un) à n−1 (elle connaît tout le monde sauf elle-même).",
              "Il y a donc n−1 valeurs possibles pour le nombre de connaissances — ce sont nos compartiments.",
              "Comme il y a n personnes (les objets) à placer dans n−1 compartiments, le principe des tiroirs garantit qu'au moins deux personnes partagent le même nombre de connaissances.",
            ],
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: "Fiche Réflexe Examen : Modèle de Rédaction",
  },
  {
    type: "paragraph",
    text: "**Si vous avez une question d'examen du type :** « Prouvez que la propriété A est vraie si et seulement si la propriété B est vraie. »",
  },
  {
    type: "paragraph",
    text: "**Utilisez ce modèle de réponse structuré pour sécuriser vos points :**",
  },
  {
    type: "quote",
    text: "**Pour démontrer cette équivalence, nous allons procéder par double implication.**",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Preuve de l'implication directe (⇒) :**",
        children: [
          "Hypothèse : Supposons que la propriété A est vraie.",
          "Démonstration : [Insérez ici votre raisonnement logique en partant de A].",
          "Conclusion intermédiaire : On en déduit donc que la propriété B est satisfaite.",
        ],
      },
      {
        text: "**Preuve de l'implication réciproque (⇐) :**",
        children: [
          "Hypothèse : Supposons maintenant que la propriété B est vraie.",
          "Démonstration : [Insérez ici votre raisonnement logique en partant de B].",
          "Conclusion intermédiaire : On en déduit donc que la propriété A est satisfaite.",
        ],
      },
      {
        text: "**Conclusion finale :**",
        children: [
          "L'implication ayant été démontrée dans les deux sens, les propositions A et B sont équivalentes.",
        ],
      },
    ],
  },
];

const chapterThree: Block[] = [
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: "Langages réguliers — Partie 1 : Les automates à états finis",
  },
  {
    type: "paragraph",
    text: "Les langages réguliers sont les plus simples des langages informatiques. Ils imposent une grande régularité car ils sont reconnus par des machines très simples appelées **automates à états finis**, qui ne possèdent qu'une mémoire finie.",
  },
  {
    type: "heading",
    level: 3,
    text: "1. Qu'est-ce qu'un automate à états finis ?",
  },
  {
    type: "paragraph",
    text: "Un automate à états finis est un modèle mathématique de calcul qui prend des décisions basées sur une séquence de symboles (un mot d'entrée).",
  },
  {
    type: "list",
    items: [
      {
        text: "**Le principe :** L'automate commence dans un « état initial ». À chaque fois qu'il lit un symbole du mot, il suit une « transition » (une flèche) pour passer à un nouvel état.",
      },
      {
        text: "**L'acceptation :** Si, après avoir lu le tout dernier symbole du mot, l'automate se trouve dans un « état final » (ou état d'acceptation, dessiné avec un double cercle), le mot est accepté et considéré comme valide.",
      },
      {
        text: "**L'exemple du distributeur de café :** Un distributeur qui vend un café à 30 centimes utilise un automate. Ses états représentent la somme insérée (0, 10, 20, 30, 30+), et les transitions dépendent de la pièce insérée (10 ou 20 centimes). L'état initial est 0, et les états finaux sont 30 et 30+.",
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "2. La Définition Formelle (Le cœur de l'examen)",
  },
  {
    type: "paragraph",
    text: "Pour l'examen, vous ne pouvez pas vous contenter d'un dessin. Vous devez savoir définir mathématiquement un automate. Un automate est défini par un « 5-tuplet » M = (Q, Σ, δ, q₀, F) comprenant les cinq éléments suivants :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Q :** L'ensemble fini de tous les états possibles de l'automate.",
      },
      {
        text: "**Σ :** L'alphabet d'entrée (l'ensemble fini des symboles que l'automate peut lire).",
      },
      {
        text: "**δ :** La fonction de transition. C'est la règle de fonctionnement : pour chaque couple d'un état de départ et d'un symbole lu, elle détermine un état d'arrivée unique (δ : Q × Σ → Q).",
      },
      { text: "**q₀ :** L'état initial (obligatoirement un élément de Q)." },
      {
        text: "**F :** L'ensemble des états d'acceptation (c'est un sous-ensemble de Q, donc F ⊆ Q).",
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "3. Langage Reconnu et Langage Régulier",
  },
  {
    type: "list",
    items: [
      {
        text: "**Mot accepté :** Un mot w = a₁a₂…aₙ est accepté si la séquence d'états parcourue (s₀, s₁, …, sₙ) commence bien par q₀ (s₀ = q₀), respecte la fonction de transition (δ(sᵢ₋₁, aᵢ) = sᵢ), et se termine obligatoirement dans un état final (sₙ ∈ F).",
      },
      {
        text: "**Le Langage L(M) :** C'est simplement l'ensemble de tous les mots qui sont acceptés par l'automate M.",
      },
      {
        text: "**Définition d'un Langage Régulier :** Un langage est qualifié de « régulier » si et seulement s'il existe un automate à états finis capable de le reconnaître.",
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: "Exercices d'Entraînement",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section A : Vrai ou Faux (Justifiez)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Un mot est accepté par un automate s'il passe par un état final à un moment quelconque pendant sa lecture.",
            answer: false,
            justification:
              "**Faux.** Il faut que la lecture SE TERMINE dans un état final : traverser un état final en chemin ne suffit pas.",
            mistake:
              "Relis la définition : où doit se trouver l'automate après le DERNIER symbole lu ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Dans la définition formelle d'un automate, l'état initial q₀ peut faire partie de l'ensemble des états d'acceptation F.",
            answer: true,
            justification:
              "**Vrai.** Rien ne l'interdit : F ⊆ Q, et q₀ ∈ Q peut très bien appartenir à F en même temps.",
            mistake:
              "La définition dit seulement F ⊆ Q — est-ce qu'elle interdit quelque chose à propos de q₀ ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : La fonction de transition δ associe un état et un symbole à une image unique (un seul état d'arrivée).",
            answer: true,
            justification:
              "**Vrai.** δ : Q × Σ → Q est une fonction : au plus une image par couple. C'est exactement ce qui rend l'automate déterministe.",
            mistake:
              "Pense au type de δ : une fonction donne combien d'images par couple entrant ?",
          },
        ],
      },
      {
        title: "Section B : Question à Choix Multiple (QCM)",
        exercises: [
          {
            kind: "mcq",
            prompt: "Que représente la notation F ⊆ Q dans la définition d'un automate ?",
            options: [
              {
                text: "Les états finaux sont exactement les mêmes que tous les états possibles.",
                feedback:
                  "F = Q serait un cas particulier ; F ⊆ Q signifie seulement que F est un sous-ensemble (éventuellement strict).",
              },
              {
                text: "L'ensemble des états d'acceptation est un sous-ensemble de tous les états possibles de l'automate.",
              },
              {
                text: "La fonction de transition utilise les états d'acceptation.",
                feedback:
                  "δ ne dépend pas de F : elle relie seulement les états aux symboles lus.",
              },
              {
                text: "L'état initial est un état d'acceptation.",
                feedback:
                  "F ⊆ Q ne dit rien sur q₀ : l'état initial n'est pas nécessairement final.",
              },
            ],
            answerIndex: 1,
            solution:
              "F ⊆ Q : l'ensemble des états d'acceptation est un sous-ensemble de Q (chaque état final est un état, mais tout état n'est pas final).",
          },
        ],
      },
      {
        title: "Section C : Texte à trous",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Un automate à états finis est caractérisé par un _________ (Q, Σ, δ, q₀, F). Dans cette définition, δ représente la fonction de _________ et q₀ est l'état _________.",
            blanks: [
              {
                accepted: [
                  "5-tuplet",
                  "5 tuplet",
                  "5uplet",
                  "quintuplé",
                  "quintuple",
                ],
                mistakes: [
                  {
                    match: [
                      "triplet",
                      "quadruplet",
                      "sextuplet",
                      "4-tuplet",
                      "4 tuplet",
                    ],
                    feedback:
                      "Il y a bien CINQ éléments — c'est un 5-tuplet (Q, Σ, δ, q₀, F).",
                  },
                ],
              },
              {
                accepted: ["transition", "transitions"],
                mistakes: [
                  {
                    match: ["acceptation", "finale", "finaux"],
                    feedback:
                      "δ est la règle de passage entre états — l'acceptation, c'est F.",
                  },
                ],
              },
              {
                accepted: ["initial", "initiale", "départ", "depart"],
                mistakes: [],
              },
            ],
            solution: "Réponses : 5-tuplet · transition · initial.",
          },
        ],
      },
      {
        title: "Section D : Exercice de type Examen",
        exercises: [
          {
            kind: "open",
            prompt:
              "Considérez un automate défini sur Σ = {0, 1} avec deux états Q = {q₀, q₁}. q₀ est l'état initial. Les transitions sont les suivantes : si on est dans q₀ et qu'on lit 0, on reste en q₀ ; si on lit 1, on passe en q₁. Depuis q₁, lire 0 ou 1 nous laisse en q₁. F = {q₁}.",
            details: [
              "Dessinez (mentalement) l'automate.",
              "Le mot 000 est-il accepté ?",
              "Le mot 010 est-il accepté ?",
            ],
            solution: "Corrigé :",
            solutionItems: [
              "000 : Non. La séquence d'états est q₀ → q₀ → q₀ → q₀, et q₀ ∉ F.",
              "010 : Oui. La séquence est q₀ → q₀ → q₁ → q₁ — la lecture s'arrête sur q₁, qui est un état final.",
              "Le langage reconnu est : tous les mots contenant au moins un 1.",
            ],
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: "Fiche Réflexe Examen : Modèle de Rédaction",
  },
  {
    type: "paragraph",
    text: "**Si vous avez une question d'examen du type :** « Donnez la définition formelle de l'automate dessiné ci-dessus. »",
  },
  {
    type: "paragraph",
    text: "Ne faites pas de longues phrases. Utilisez ce modèle de réponse strict (comme dans le cours) :",
  },
  {
    type: "quote",
    text: "L'automate M = (Q, Σ, δ, q₀, F) est défini formellement par :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: "Q = {q₀, q₁, …} (listez tous les états présents dans les cercles)." },
      { text: "Σ = {0, 1} (listez les symboles présents sur les flèches)." },
      {
        text: "La fonction de transition δ est décrite par le tableau suivant : (Dessinez un tableau : en colonnes les symboles de Σ, en lignes les états de Q, et remplissez les cases avec les états d'arrivée des flèches).",
      },
      { text: "q₀ est l'état initial (l'état avec la petite flèche « départ »)." },
      {
        text: "F = {q₁} (listez tous les états dessinés avec un double cercle).",
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: "Langages réguliers — Partie 2 : Opérations et non-déterminisme",
  },
  {
    type: "paragraph",
    text: "Cette partie introduit les opérations que l'on peut faire avec les langages réguliers, ainsi qu'une nouvelle version plus flexible des automates : les automates non-déterministes.",
  },
  {
    type: "heading",
    level: 3,
    text: "1. Opérations sur les Langages Réguliers (Section 3.2)",
  },
  {
    type: "paragraph",
    text: "Une propriété fondamentale des langages réguliers est qu'ils sont **fermés** sous certaines opérations mathématiques. Cela signifie que si vous prenez un ou plusieurs langages réguliers et que vous appliquez l'une de ces opérations, le résultat sera **toujours** un langage régulier (il existera toujours un automate pour le reconnaître).",
  },
  {
    type: "paragraph",
    text: "**Théorème 1 :** Les langages réguliers sont fermés par :",
  },
  {
    type: "list",
    items: [
      { text: "(a) l'union (L₁ ∪ L₂)" },
      { text: "(b) la concaténation (L₁ · L₂)" },
      { text: "(c) l'étoile de Kleene (L*)" },
      { text: "(d) l'intersection (L₁ ∩ L₂)" },
      { text: "(e) le passage au complémentaire (L̄)" },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: "La méthode du « Produit Cartésien » (Pour l'Union et l'Intersection)",
  },
  {
    type: "paragraph",
    text: "Pour prouver que l'union de deux langages réguliers L₁ et L₂ est régulière, on construit un gros automate qui simule les automates M₁ et M₂ **en même temps**.",
  },
  {
    type: "list",
    items: [
      {
        text: "Les états de ce nouvel automate sont des paires (produit cartésien) : Q = Q₁ × Q₂. Un état ressemble à (s₁, s₂).",
      },
      {
        text: "**Pour l'Union :** L'automate accepte le mot s'il termine dans un état final de M₁ **OU** de M₂. Donc, F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
      },
      {
        text: "**Pour l'Intersection :** L'automate accepte le mot s'il termine dans un état final de M₁ **ET** de M₂. Donc, F = F₁ × F₂.",
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "2. Automates Non-Déterministes (Section 3.3)",
  },
  {
    type: "paragraph",
    text: "Dans un automate déterministe (vu dans la partie 1), chaque étape est forcée : pour un état et un symbole donnés, il n'y a qu'une seule flèche possible. Les automates non-déterministes offrent deux « super-pouvoirs » :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**Le Choix :** Pour un même état et un même symbole lu, il peut y avoir **plusieurs** flèches (plusieurs états de destination possibles).",
      },
      {
        text: "**Le Saut magique (ε) :** L'automate peut passer d'un état à un autre sans consommer aucune lettre du mot d'entrée (transition avec le mot vide ε).",
      },
    ],
  },
  { type: "heading", level: 4, text: "Définition Formelle (Le 5-tuplet)" },
  {
    type: "paragraph",
    text: "Un automate non-déterministe est caractérisé par M = (Q, Σ, Δ, q₀, F). Notez que l'on utilise Δ (Delta majuscule) au lieu de δ.",
  },
  {
    type: "list",
    items: [
      {
        text: "Δ n'est plus une fonction classique, c'est une relation. Elle prend un état et un symbole (ou ε) et renvoie un **ensemble d'états** (un élément de 𝒫(Q), l'ensemble de tous les sous-ensembles de Q).",
      },
    ],
  },
  { type: "heading", level: 4, text: "Comment l'automate lit-il un mot ?" },
  {
    type: "paragraph",
    text: "L'exécution ne suit plus un chemin unique, mais crée un **arbre de possibilités**. Toutes les branches sont explorées en parallèle de façon non-déterministe. Si **au moins une branche** parvient à lire tout le mot et se termine sur un état final, alors le mot est accepté.",
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: "Exercices d'Entraînement",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section A : Vrai ou Faux (Justifiez)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : L'intersection de deux langages réguliers peut parfois donner un langage qui n'est pas régulier.",
            answer: false,
            justification:
              "**Faux.** Les langages réguliers sont fermés sous intersection : le résultat est toujours régulier (Théorème 1(d)).",
            mistake:
              "Relis le Théorème 1 : « fermé » veut dire que le résultat est TOUJOURS régulier — ou seulement parfois ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Un automate non-déterministe peut se trouver dans plusieurs états en même temps virtuellement.",
            answer: true,
            justification:
              "**Vrai.** L'exécution explore un arbre de possibilités en parallèle : virtuellement, l'automate est dans plusieurs états à la fois.",
            mistake:
              "Pense à l'arbre de possibilités du cours : combien de chemins sont explorés en même temps ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Dans un automate non-déterministe, il faut que toutes les branches de l'arbre d'exécution arrivent à un état final pour que le mot soit accepté.",
            answer: false,
            justification:
              "**Faux.** Il suffit qu'au moins UNE branche lise tout le mot et se termine sur un état final.",
            mistake:
              "Relis la règle d'acceptation du NFA : combien de branches doivent réussir — toutes, ou au moins une ?",
          },
        ],
      },
      {
        title: "Section B : Question à Choix Multiple (QCM)",
        exercises: [
          {
            kind: "mcq",
            prompt:
              "Dans la définition formelle d'un automate non-déterministe, que représente 𝒫(Q) pour la fonction de transition Δ ?",
            options: [
              {
                text: "Un état d'acceptation unique.",
                feedback:
                  "Δ renvoie un ENSEMBLE d'états, pas un état unique — c'est le cœur du non-déterminisme.",
              },
              {
                text: "L'ensemble de tous les sous-ensembles d'états de Q.",
              },
              {
                text: "L'alphabet d'entrée étendu avec ε.",
                feedback:
                  "ε intervient dans les flèches de Δ, mais Δ elle-même renvoie des sous-ensembles de Q.",
              },
              {
                text: "Le produit cartésien des états.",
                feedback:
                  "Le produit cartésien Q₁ × Q₂ sert à construire l'automate de l'union, pas à définir Δ.",
              },
            ],
            answerIndex: 1,
            solution:
              "Δ : Q × (Σ ∪ {ε}) → 𝒫(Q) — pour chaque couple, elle renvoie un ensemble d'états possibles, donc un élément de 𝒫(Q).",
          },
        ],
      },
      {
        title: "Section C : Texte à trous",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Dans un automate non-déterministe, la transition d'un état à un autre peut se produire sans la consommation du symbole suivant en utilisant une transition avec __________. L'exécution sur un mot ne correspond plus à une séquence unique, mais plutôt à un __________ d'états.",
            blanks: [
              {
                accepted: ["ε", "epsilon", "mot vide", "le mot vide"],
                mistakes: [
                  {
                    match: ["lambda", "vide", "sans symbole"],
                    feedback:
                      "Le saut magique est la transition ε : on saute avec le mot vide, sans consommer de symbole.",
                  },
                ],
              },
              {
                accepted: ["arbre", "arbre d'exécution", "arbre d'execution"],
                mistakes: [
                  {
                    match: ["chemin", "séquence", "sequence", "suite"],
                    feedback:
                      "Ce n'est plus une seule séquence : plusieurs chemins coexistent — le cours dit « arbre de possibilités ».",
                  },
                ],
              },
            ],
            solution: "Réponses : le mot vide ε · arbre (de possibilités).",
          },
        ],
      },
      {
        title: "Section D : Exercice de type Examen",
        exercises: [
          {
            kind: "open",
            prompt:
              "Soient deux automates déterministes M₁ et M₂ avec pour états Q₁ = {A, B} et Q₂ = {X, Y}. Donnez la liste complète des états du nouvel automate créé pour reconnaître l'union de leurs langages (utilisez le produit cartésien Q₁ × Q₂).",
            solution: "Solution :",
            solutionItems: [
              "Le produit cartésien Q₁ × Q₂ contient toutes les paires possibles :",
              "Q = {(A, X), (A, Y), (B, X), (B, Y)}",
            ],
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: "Fiche Réflexe Examen : Modèle de Rédaction",
  },
  {
    type: "paragraph",
    text: "**Si vous avez une question d'examen du type :** « Soient M₁ et M₂ deux automates. Définissez formellement l'automate M qui reconnaît l'union (ou l'intersection) de L₁ et L₂. »",
  },
  {
    type: "paragraph",
    text: "Utilisez ce modèle basé sur la preuve par produit cartésien :",
  },
  {
    type: "quote",
    text: "Par construction, l'automate M = (Q, Σ, δ, q₀, F) qui reconnaît cette opération est défini ainsi :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: "**États :** Q = Q₁ × Q₂ = {(s₁, s₂) | s₁ ∈ Q₁ et s₂ ∈ Q₂}",
      },
      { text: "**Alphabet :** Σ (l'alphabet reste inchangé)." },
      {
        text: "**Transitions :**",
        children: [
          "Pour tout (s₁, s₂) ∈ Q et a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)).",
        ],
      },
      {
        text: "**État initial :** q₀ = (q₁, q₂) (la paire des deux états initiaux).",
      },
      {
        text: "**États finaux (F) :**",
        children: [
          "Si c'est une UNION : F = {(s₁, s₂) | s₁ ∈ F₁ ou s₂ ∈ F₂}.",
          "Si c'est une INTERSECTION : F = {(s₁, s₂) | s₁ ∈ F₁ et s₂ ∈ F₂}.",
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: "Langages réguliers — Partie 3 : Équivalence et expressions régulières",
  },
  {
    type: "heading",
    level: 3,
    text: "1. Équivalence des DFA et NFA (Section 3.3.1)",
  },
  {
    type: "paragraph",
    text: "À première vue, on pourrait penser que les automates non-déterministes (NFA) sont plus puissants que les automates déterministes (DFA) car ils permettent plusieurs choix et des transitions invisibles. Ce n'est absolument pas le cas.",
  },
  {
    type: "list",
    items: [
      {
        text: "**Théorème 2 :** Pour chaque automate non-déterministe, il existe un automate déterministe qui reconnaît exactement le même langage.",
      },
      {
        text: "**La construction par sous-ensembles :** Pour transformer un NFA en DFA, on construit un nouvel automate où un état représente en réalité un **ensemble d'états** de l'ancien automate. Si l'automate de départ a Q états, le nouvel automate aura 𝒫(Q) états (l'ensemble de tous les sous-ensembles possibles).",
      },
      {
        text: "**Corollaire :** Un langage est régulier si et seulement s'il est reconnu par un automate non-déterministe.",
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: "2. Expressions Régulières (Section 3.4)",
  },
  {
    type: "paragraph",
    text: "Si les automates sont des « machines » visuelles, les expressions régulières sont des formules textuelles qui décrivent exactement les mêmes langages. Ces formules sont très utilisées en programmation, notamment dans les systèmes UNIX.",
  },
  { type: "heading", level: 4, text: "Définition Formelle" },
  {
    type: "paragraph",
    text: "Une expression R est une expression régulière si elle correspond à l'un de ces cas :",
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: "Un symbole a de l'alphabet Σ." },
      { text: "Le mot vide ε." },
      { text: "L'ensemble vide ∅." },
      { text: "L'union : (R₁ ∪ R₂)." },
      { text: "La concaténation : (R₁ · R₂)." },
      { text: "L'étoile de Kleene : (R₁*)." },
    ],
  },
  { type: "heading", level: 4, text: "Règles de calcul importantes" },
  {
    type: "list",
    items: [
      {
        text: "**Priorité des opérateurs :** S'il n'y a pas de parenthèses, on applique d'abord l'étoile de Kleene (*), ensuite la concaténation (·), et à la toute fin l'union (∪).",
      },
      {
        text: "**L'opérateur + :** On définit R⁺ = R·R* pour simplifier l'écriture. Cela garantit que l'expression R est présente au moins une fois, contrairement à l'étoile qui permet zéro présence.",
      },
      {
        text: "**Propriétés neutres :** On a toujours R ∪ ∅ = R et R · ε = R.",
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: "Exercices d'Entraînement",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section A : Vrai ou Faux (Justifiez)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Les automates non-déterministes sont capables de reconnaître des langages complexes que les automates déterministes ne peuvent pas lire.",
            answer: false,
            justification:
              "**Faux.** Théorème 2 : pour chaque NFA existe un DFA qui reconnaît exactement le même langage — les deux ont le même pouvoir.",
            mistake: "Relis le Théorème 2 : que dit-il de l'équivalence NFA / DFA ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : L'expression régulière a ∪ b* donne exactement le même résultat que l'expression (a ∪ b)*.",
            answer: false,
            justification:
              "**Faux.** a ∪ b* accepte soit « a », soit zéro-plusieurs « b » ; (a ∪ b)* accepte aussi « ab », « ba », « aa », « bab »…",
            mistake:
              "Sans parenthèses, sur quelle partie s'applique l'étoile ? Teste le mot « ab » dans les deux expressions.",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : La concaténation d'une expression avec le mot vide ε ne modifie pas l'expression.",
            answer: true,
            justification:
              "**Vrai.** ε est l'élément neutre de la concaténation : R · ε = R pour toute expression R.",
            mistake:
              "Rappelle-toi le rôle de ε en concaténation : laisse-t-il le mot inchangé ?",
          },
        ],
      },
      {
        title: "Section B : Question à Choix Multiple (QCM)",
        exercises: [
          {
            kind: "mcq",
            prompt:
              "Quel est l'ordre de priorité mathématique pour lire une expression régulière sans parenthèses ?",
            options: [
              {
                text: "Union, Concaténation, Étoile de Kleene",
                feedback:
                  "C'est exactement l'inverse : l'étoile se lit en premier, l'union en dernier.",
              },
              {
                text: "Concaténation, Étoile de Kleene, Union",
                feedback:
                  "L'étoile se priorise AVANT la concaténation : dans a · b*, on lit d'abord b*.",
              },
              { text: "Étoile de Kleene, Concaténation, Union" },
              {
                text: "Toutes les opérations ont le même niveau de priorité",
                feedback:
                  "Non : sans parenthèses, a ∪ b · c* se lit avec un ordre strict (étoile → concaténation → union).",
              },
            ],
            answerIndex: 2,
            solution:
              "Étoile de Kleene (d'abord), puis concaténation, puis union (en dernier).",
          },
        ],
      },
      {
        title: "Section C : Texte à trous",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Pour chaque automate non-déterministe, il est possible de créer un automate __________ équivalent. Dans cet automate transformé, les nouveaux états correspondent à des __________ des états de l'automate d'origine.",
            blanks: [
              {
                accepted: ["déterministe", "deterministe", "dfa"],
                mistakes: [
                  {
                    match: ["plus puissant", "complexe", "aléatoire", "aleatoire"],
                    feedback:
                      "Le théorème 2 garantit un automate DÉTERMINISTE équivalent — même pouvoir, grâce à la construction par sous-ensembles.",
                  },
                ],
              },
              {
                accepted: ["sous-ensembles", "sousensembles", "ensembles"],
                mistakes: [
                  {
                    match: ["états", "etats", "paires", "transitions"],
                    feedback:
                      "Chaque état du nouveau DFA représente un SOUS-ENSEMBLE d'états de l'ancien automate, pas un état simple.",
                  },
                ],
              },
            ],
            solution: "Réponses : déterministe · sous-ensembles.",
          },
        ],
      },
      {
        title: "Section D : Exercice de type Examen",
        exercises: [
          {
            kind: "open",
            prompt:
              "Expliquez avec une phrase simple quel langage est décrit par l'expression régulière suivante : b*(ab⁺)* sur l'alphabet Σ = {a, b}.",
            solution: "Solution :",
            solutionItems: [
              "Ce langage contient tous les mots où chaque lettre a est obligatoirement suivie par au moins une lettre b.",
            ],
          },
        ],
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: "Fiche Réflexe Examen : Modèle de Rédaction",
  },
  {
    type: "paragraph",
    text: "**Si vous avez une question d'examen du type :** « Décrivez en français le langage reconnu par l'expression régulière R. »",
  },
  {
    type: "paragraph",
    text: "**Utilisez ce modèle de réponse structuré pour bien montrer au correcteur que vous avez compris les symboles :**",
  },
  {
    type: "quote",
    text: "**Analyse syntaxique de l'expression régulière R :**",
  },
  {
    type: "list",
    items: [
      {
        text: "L'opérateur d'union ∪ indique une alternative (le mot doit correspondre soit à la partie gauche, soit à la partie droite).",
      },
      {
        text: "L'opérateur de concaténation impose que les symboles apparaissent dans cet ordre précis.",
      },
      {
        text: "L'étoile de Kleene * indique que l'élément précédent peut être répété zéro, une ou plusieurs fois consécutives.",
      },
    ],
  },
  {
    type: "quote",
    text: "**Conclusion de l'analyse :** Le langage décrit par cette expression régulière est l'ensemble : L = {w | w correspond à… [insérez votre description logique ici]}.",
  },
];

const examBlancs: Block[] = [
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: "Examen Blanc Global (Chapitres 1, 2 et 3)",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section 1 : Langages et Mots (Chapitre 1)",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Soit l'alphabet Σ = {0, 1}. Soient deux langages L₁ = {0, 10} et L₂ = {ε, 1}. Calculez l'ensemble exact des mots pour la concaténation L₁ · L₂. Réponse : L₁ · L₂ = _________.",
            blanks: [
              {
                accepted: [
                  "{0, 01, 10, 101}",
                  "{0,01,10,101}",
                  "0, 01, 10, 101",
                  "{0, 10, 01, 101}",
                  "{0, 01, 101, 10}",
                  "{10, 0, 01, 101}",
                  "{10, 101, 0, 01}",
                ],
                mistakes: [
                  {
                    match: ["0,01,10"],
                    feedback:
                      "Il manque un mot ! Chaque mot de L₁ se combine avec ε ET avec 1 : vérifie en particulier 10 · 1.",
                  },
                ],
              },
            ],
            solution:
              "L₁ · L₂ = {0, 01, 10, 101} — détail : 0 · ε = 0, 0 · 1 = 01, 10 · ε = 10, 10 · 1 = 101.",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : La fermeture de Kleene du langage vide, notée ∅*, est égale au langage vide ∅.",
            answer: false,
            justification:
              "**Faux.** ∅* = {ε} : la puissance zéro de n'importe quel langage vaut {ε}, et L* = ⋃ Lᵏ (pour k ≥ 0) inclut toujours L⁰.",
            mistake:
              "Rappelle-toi la définition L* = ⋃ Lᵏ : que vaut la puissance L⁰ pour n'importe quel langage ?",
          },
          {
            kind: "mcq",
            prompt:
              "Si w = 0110, quel ensemble représente tous les préfixes de w ?",
            options: [
              {
                text: "{0, 01, 011, 0110}",
                feedback:
                  "Il manque ε : le mot vide est toujours un préfixe (et le mot lui-même aussi).",
              },
              { text: "{ε, 0, 01, 011, 0110}" },
              {
                text: "{ε, 0, 10, 110, 0110}",
                feedback:
                  "Attention : un préfixe se lit depuis le DÉBUT du mot — 10 et 110 n'en sont pas (ce sont des suffixes).",
              },
            ],
            answerIndex: 1,
            solution:
              "Réponse B : {ε, 0, 01, 011, 0110} — un préfixe se lit depuis le début du mot, ε inclus, jusqu'au mot lui-même.",
          },
        ],
      },
      {
        title: "Section 2 : Techniques de Preuve (Chapitre 2)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Dans un groupe de 13 étudiants, prouvez en une phrase simple qu'au moins deux étudiants sont obligatoirement nés le même mois. Identifiez clairement vos « objets » et vos « compartiments ».",
            details: [
              "Quels sont vos objets, et combien y en a-t-il ?",
              "Quels sont vos compartiments, et combien y en a-t-il ?",
            ],
            solution: "Phrase type :",
            solutionItems: [
              "13 étudiants = les objets ; 12 mois possibles = les compartiments.",
              "13 > 12 : le nombre d'objets est strictement supérieur au nombre de compartiments.",
              "Donc, par le principe des tiroirs, au moins deux étudiants sont obligatoirement nés le même mois.",
            ],
          },
          {
            kind: "fillBlank",
            prompt:
              "Dans une preuve par récurrence, vous avez terminé l'étape d'initialisation pour n = 1. Complétez la phrase type qui ouvre la deuxième étape (l'hérédité) : « Supposons que la propriété est vraie pour _________, et _________ qu'elle est vraie pour le rang n. »",
            blanks: [
              {
                accepted: [
                  "un certain rang n-1",
                  "un certain rang n−1",
                  "rang n-1",
                  "rang n−1",
                  "un certain rang",
                  "n-1",
                  "n−1",
                ],
                mistakes: [
                  {
                    match: ["n"],
                    feedback:
                      "L'hérédité suppose le rang PRÉCÉDENT (n−1) : c'est l'hypothèse de récurrence. On prouve ensuite le rang n.",
                  },
                ],
              },
              {
                accepted: ["prouvons", "démontrons", "montrons", "montrons"],
                mistakes: [],
              },
            ],
            solution:
              "Phrase exacte : « Supposons que la propriété est vraie pour un certain rang n−1, et prouvons qu'elle est vraie pour le rang n. »",
          },
          {
            kind: "fillBlank",
            prompt:
              "Pour prouver que « un langage est régulier si et seulement s'il est reconnu par un automate » est vrai, vous devez rédiger _________ démonstrations séparées : prouver l'implication _________ (⇒) et prouver l'implication _________ (⇐).",
            blanks: [
              { accepted: ["deux", "2"], mistakes: [] },
              {
                accepted: ["directe"],
                mistakes: [
                  {
                    match: ["indirecte"],
                    feedback:
                      "On parle d'implication directe : elle va de X vers Y (⇒).",
                  },
                ],
              },
              {
                accepted: ["réciproque", "reciproque"],
                mistakes: [
                  {
                    match: ["inverse"],
                    feedback:
                      "Attention : « inverse » (¬X ⇒ ¬Y) n'est PAS équivalente à X ⇒ Y. On demande l'implication réciproque (⇐) : « si Y alors X ».",
                  },
                ],
              },
            ],
            solution:
              "Deux démonstrations : l'implication directe (⇒) et l'implication réciproque (⇐) — c'est la double implication.",
          },
        ],
      },
      {
        title: "Section 3 : Langages Réguliers et Automates (Chapitre 3)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Décrivez en une phrase le langage reconnu par l'expression régulière suivante : (0 ∪ 1)* 00 (0 ∪ 1)*.",
            solution: "Description :",
            solutionItems: [
              "Ce langage contient tous les mots formés de 0 et de 1 qui contiennent la sous-chaîne (le facteur) « 00 ».",
              "L'expression (0 ∪ 1)* de chaque côté signifie « n'importe quelle combinaison avant, et n'importe quelle combinaison après ».",
            ],
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Pour transformer un automate non-déterministe de 4 états en un automate déterministe, le nouvel automate aura toujours exactement 4 états.",
            answer: false,
            justification:
              "**Faux.** La construction par sous-ensembles peut donner jusqu'à 𝒫(Q) : 2⁴ = 16 états pour 4 états d'origine.",
            mistake:
              "Relis le Théorème 2 : le DFA est construit à partir des SOUS-ENSEMBLES de Q — combien peut-il y en avoir pour 4 états ?",
          },
          {
            kind: "mcq",
            prompt:
              "Vous voulez prouver que L = {0ⁿ 1²ⁿ | n ≥ 0} n'est pas régulier. En appliquant le lemme de pompage avec une longueur de pompage p, quel est le mot w idéal à choisir pour démarrer votre preuve ?",
            options: [
              {
                text: "w = 0ᵖ 1ᵖ",
                feedback:
                  "0ᵖ 1ᵖ n'appartient pas à L (il faudrait 1²ᵖ) : l'automate du langage ne l'accepterait pas, et la preuve s'effondre dès l'étape 1.",
              },
              { text: "w = 0ᵖ 1²ᵖ" },
              {
                text: "w = 011",
                feedback:
                  "011 est trop court : dès p ≥ 3, on a |w| = 3 ≤ p, donc le lemme de pompage n'impose aucune décomposition.",
              },
            ],
            answerIndex: 1,
            solution:
              "Réponse B : w = 0ᵖ 1²ᵖ ∈ L (avec n = p), |w| = 3p > p — la décomposition w = xyz existe et mène à la contradiction.",
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: "Examen Blanc Global #2 (Chapitres 1, 2 et 3)",
  },
  {
    type: "paragraph",
    text: "Voici un nouvel entraînement avec des questions différentes pour tester votre agilité sur les trois chapitres.",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Section 1 : Langages et Mots (Chapitre 1)",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Soit l'alphabet Σ = {a, b, c}. Soient les mots w = ab et u = c. Calculez d'abord le mot w · u³ : w · u³ = _________. Puis sa longueur : |w · u³| = _________.",
            blanks: [
              {
                accepted: ["abccc"],
                mistakes: [
                  {
                    match: ["ccc"],
                    feedback:
                      "N'oublie pas le mot de départ : w · u³ = ab · ccc — le résultat commence par « ab ».",
                  },
                ],
              },
              { accepted: ["5"], mistakes: [] },
            ],
            solution:
              "u³ = u · u · u = ccc, donc w · u³ = abccc et |abccc| = 5.",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : L'intersection d'un langage L et de son complémentaire L̄ donne toujours le langage vide ∅.",
            answer: true,
            justification:
              "**Vrai.** L̄ contient par définition tous les mots qui ne sont PAS dans L : ils n'ont aucun mot en commun, donc L ∩ L̄ = ∅.",
            mistake:
              "Quels mots contient L̄ par rapport à L — les mêmes ou l'inverse ? Peuvent-ils se croiser dans une intersection ?",
          },
          {
            kind: "mcq",
            prompt:
              "Quelle opération mathématique permet d'obtenir absolument toutes les combinaisons possibles de mots sur un alphabet Σ, y compris le mot vide ε ?",
            options: [
              {
                text: "L'union",
                feedback:
                  "L'union ne fait que combiner des langages déjà donnés : elle ne génère aucune itération.",
              },
              {
                text: "La différence",
                feedback:
                  "La différence retire des mots d'un langage : elle ne peut pas tout générer.",
              },
              { text: "L'étoile de Kleene" },
              {
                text: "La concaténation",
                feedback:
                  "La concaténation assemble des mots, mais seule elle ne produit ni ε ni les répétitions infinies.",
              },
            ],
            answerIndex: 2,
            solution:
              "Réponse C : Σ* = ⋃ Σᵏ (pour k ≥ 0) inclut le mot vide (k = 0) et toutes les combinaisons possibles.",
          },
        ],
      },
      {
        title: "Section 2 : Techniques de Preuve (Chapitre 2)",
        exercises: [
          {
            kind: "open",
            prompt:
              "On vous demande : « Prouvez que la racine carrée de 3 n'est pas un nombre rationnel. » En utilisant une preuve par l'absurde, rédigez uniquement la toute première phrase de votre démonstration.",
            solution:
              "Phrase type : **« Supposons par l'absurde que la racine carrée de 3 est un nombre rationnel. »**",
          },
          {
            kind: "fillBlank",
            prompt:
              "Un étudiant affirme : « Tous les mots formés par l'union L₁ ∪ L₂ ont une longueur paire. » Cette affirmation est fausse. L'outil direct du chapitre 2 pour la détruire est un seul _________ : on donne un mot de longueur _________ (par exemple un mot d'un seul symbole).",
            blanks: [
              {
                accepted: ["contre-exemple", "contre exemple", "contreexemple"],
                mistakes: [
                  {
                    match: ["exemple"],
                    feedback:
                      "Pas n'importe quel exemple : la règle d'or dit qu'un seul CONTRE-EXEMPLE suffit à réfuter une affirmation générale.",
                  },
                ],
              },
              {
                accepted: ["impaire", "impair"],
                mistakes: [
                  {
                    match: ["paire"],
                    feedback:
                      "Une longueur paire ne contredit pas « tous les mots ont une longueur paire » — il faut une longueur IMPAIRE.",
                  },
                ],
              },
            ],
            solution:
              "Un seul contre-exemple : un mot de L₁ ∪ L₂ de longueur impaire (par exemple un mot d'un seul symbole) détruit la règle générale.",
          },
          {
            kind: "mcq",
            prompt: "Quel est le but précis d'une preuve par construction ?",
            options: [
              {
                text: "Montrer qu'une propriété est fausse en trouvant une erreur.",
                feedback:
                  "C'est la réfutation par contre-exemple, pas la construction.",
              },
              {
                text: "Prouver l'existence d'un objet mathématique en le fabriquant étape par étape.",
              },
              {
                text: "Vérifier une propriété pour la base n = 1.",
                feedback:
                  "Vérifier la base n = 1, c'est l'initialisation d'une preuve par récurrence.",
              },
            ],
            answerIndex: 1,
            solution:
              "Réponse B : la preuve par construction prouve l'existence d'un objet en élaborant une méthode pour le construire, puis en vérifiant qu'il possède les bonnes propriétés.",
          },
        ],
      },
      {
        title: "Section 3 : Langages Réguliers et Automates (Chapitre 3)",
        exercises: [
          {
            kind: "fillBlank",
            prompt:
              "Dans la définition mathématique stricte d'un automate M = (Q, Σ, δ, q₀, F), le symbole Σ représente l'_________ d'entrée : l'ensemble fini des _________ que l'automate a le droit de lire.",
            blanks: [
              {
                accepted: ["alphabet"],
                mistakes: [
                  {
                    match: ["ensemble", "états", "etats", "initial"],
                    feedback:
                      "L'ensemble des états, c'est Q, et l'état initial, c'est q₀ ! Σ désigne l'ensemble des SYMBOLES lisibles — l'alphabet.",
                  },
                ],
              },
              {
                accepted: ["symboles", "signes"],
                mistakes: [
                  {
                    match: ["états", "etats"],
                    feedback:
                      "Ce n'est pas les états (c'est Q) : Σ contient les symboles que l'automate peut LIRE.",
                  },
                ],
              },
            ],
            solution:
              "Σ = l'alphabet d'entrée : l'ensemble fini des symboles que l'automate a le droit de lire.",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Comme un automate non-déterministe permet de multiples choix simultanés, il est impossible de le transformer en un automate déterministe qui fait le même travail.",
            answer: false,
            justification:
              "**Faux.** Théorème 2 : pour chaque NFA existe un DFA équivalent — la construction par sous-ensembles fait toujours ce travail.",
            mistake:
              "Quel théorème du chapitre 3 parle de la transformation NFA → DFA ?",
          },
          {
            kind: "open",
            prompt:
              "Décrivez avec une phrase française simple et claire le langage reconnu par l'expression régulière suivante : 1 (0 ∪ 1)* 0.",
            solution: "Description :",
            solutionItems: [
              "Ce langage contient tous les mots (sur l'alphabet {0, 1}) qui commencent par un « 1 » et qui se terminent par un « 0 ».",
              "La partie (0 ∪ 1)* au centre signifie qu'il peut y avoir n'importe quelle combinaison de zéros et de uns — ou rien du tout — entre les deux.",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: "Examen Blanc N°1 — Focus sur la Théorie et les Automates",
  },
  {
    type: "quote",
    text: "Durée : 1 heure — Chapitres abordés : 1, 2, 3 — Documents non autorisés.",
  },
  {
    type: "exercises",
    groups: [
      {
        title: "Question 1 : Automates déterministes (DFA) et langages (4 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Soit l'alphabet Σ = {0, 1}. Dessinez le diagramme d'états d'un automate à états finis déterministe qui reconnaît le langage L = {w | w contient un nombre pair de 1}. Donnez ensuite sa définition formelle mathématique (le 5-tuplet M = (Q, Σ, δ, q₀, F)).",
            details: [
              "Indication : deux états suffisent — « nombre de 1 lu jusqu'ici pair » et « impair ».",
              "N'oubliez pas l'état initial, l'état final, et les transitions pour chaque symbole de Σ.",
            ],
            solution: "Corrigé :",
            solutionItems: [
              "Idée de l'automate : deux états suffisent — q_pair (nombre de 1 lu jusqu'ici est pair) et q_impair. Le symbole 0 ne change jamais d'état ; un 1 inverse l'état.",
              "Diagramme : q_pair est l'état initial et final ; boucle 0 sur q_pair, flèche 1 de q_pair vers q_impair, boucle 0 sur q_impair, flèche 1 de q_impair vers q_pair.",
              "5-tuplet : M = (Q, Σ, δ, q₀, F) avec Q = {q_pair, q_impair}, Σ = {0, 1}, q₀ = q_pair, F = {q_pair}, et δ : δ(q_pair, 0) = q_pair, δ(q_pair, 1) = q_impair, δ(q_impair, 0) = q_impair, δ(q_impair, 1) = q_pair.",
              "Remarque examen : ε est accepté, car 0 est un nombre pair — l'automate démarre dans q_pair, qui est final.",
            ],
          },
        ],
      },
      {
        title: "Question 2 : Transformation NFA vers DFA (5 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Le Théorème 2 affirme que pour chaque automate non-déterministe, il existe un automate déterministe équivalent. Soit un automate non-déterministe M défini sur Σ = {a, b} avec les états Q = {q₁, q₂, q₃}, l'état initial q₁, et l'état final q₁. Les transitions Δ sont : de q₁ en lisant b on va vers q₂ ; de q₁ avec le mot vide ε on va vers q₃ ; de q₂ en lisant a on va vers q₂ ou q₃. En utilisant l'algorithme des sous-ensembles, déterminez l'état initial du nouvel automate déterministe et construisez ses transitions.",
            details: [
              "Indication : l'état initial du DFA est l'ensemble de tous les états joignables depuis q₁ avec des transitions ε.",
              "Attention : n'oubliez aucun sous-ensemble atteint et indiquez quels états sont finaux.",
            ],
            solution: "Corrigé :",
            solutionItems: [
              "État initial du DFA : l'ε-closure de q₁, donc {q₁, q₃} — le saut magique est matérialisé dans l'état de départ.",
              "Transitions : {q₁, q₃} -b→ {q₂} (seule transition en b, depuis q₁ ; q₃ n'a aucune transition). Sur a, {q₁, q₃} ne peut nulle part : ∅.",
              "{q₂} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃}), sur b : ∅.",
              "{q₂, q₃} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃} et q₃ ne lit rien), sur b : ∅.",
              "États finaux : tout état contenant q₁, ici uniquement {q₁, q₃}. L'ensemble vide ∅ peut être omis (ou noté état poubelle).",
              "Au total, 3 états utiles ({q₁, q₃}, {q₂}, {q₂, q₃}) — très loin des 2³ = 8 sous-ensembles de 𝒫(Q) possibles.",
            ],
          },
        ],
      },
      {
        title: "Question 3 : Preuve par l'absurde et lemme de pompage (5 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "C'est le résultat théorique le plus important du chapitre 3. Prouvez rigoureusement, en utilisant le lemme de pompage, que le langage L = {aⁿ bⁿ | n ≥ 0} n'est pas un langage régulier.",
            details: [
              "Structurez bien votre réponse : hypothèse par l'absurde → choix du mot w = aᵖ bᵖ → démonstration de la contradiction sur la partie y.",
            ],
            solution: "Corrigé structuré :",
            solutionItems: [
              "Hypothèse par l'absurde : supposons que L soit régulier, et soit p la longueur de pompage donnée par le lemme.",
              "Choix du mot : w = aᵖ bᵖ. Il appartient bien à L (car n = p) et |w| = 2p > p, donc le lemme s'applique.",
              "Décomposition : par le lemme, w = xyz avec |xy| ≤ p et |y| ≥ 1. Comme |xy| ≤ p, y ne contient que des lettres « a ».",
              "Pompage avec i = 0 : xy⁰z = xz contient p − |y| lettres « a » (donc STRICTEMENT moins que p), mais toujours p lettres « b ».",
              "Contradiction : dans xz, le nombre de « a » est différent du nombre de « b », donc xz ∉ L — alors que le lemme garantit xyⁱz ∈ L pour tout i. L n'est donc pas régulier.",
            ],
          },
        ],
      },
      {
        title: "Question 4 : Arbre d'exécution (3 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Expliquez brièvement comment un automate non-déterministe (NFA) traite un mot en entrée par rapport à un automate déterministe (DFA). Que se passe-t-il si plusieurs chemins sont possibles ?",
            solution: "Corrigé :",
            solutionItems: [
              "Le DFA suit un chemin UNIQUE : pour chaque état et chaque symbole lu, il n'existe qu'une seule transition — l'exécution est déterminée pas à pas.",
              "Le NFA explore virtuellement TOUS les chemins en même temps : l'exécution crée un arbre de possibilités.",
              "Si plusieurs chemins sont possibles (choix ou transition ε), l'automate se trouve virtuellement dans plusieurs états à la fois. Si AU MOINS UNE branche parvient à lire tout le mot et se termine sur un état final, le mot est accepté — les autres chemins peuvent échouer sans conséquence.",
            ],
          },
        ],
      },
      {
        title: "Question 5 : Expressions régulières (3 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Décrivez en une phrase claire le langage reconnu par l'expression régulière suivante : b*(ab⁺)* définie sur l'alphabet Σ = {a, b}.",
            solution: "Description :",
            solutionItems: [
              "Ce langage contient tous les mots où chaque lettre a est obligatoirement suivie au moins par une lettre b.",
              "Lecture de l'expression : b* autorise zéro ou plusieurs b au début ; (ab⁺)* répète des blocs « un a suivi d'au moins un b ».",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: "Examen Blanc N°2 — Focus sur les Preuves et la Construction",
  },
  {
    type: "quote",
    text: "Durée : 1 heure — Chapitres abordés : 1, 2, 3 — Documents non autorisés.",
  },
  {
    type: "exercises",
    groups: [
      {
        title:
          "Question 1 : Construction d'un automate non-déterministe (4 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Dessinez un automate non-déterministe (NFA) sur l'alphabet Σ = {0, 1} qui reconnaît le langage L = {w | w se termine par 00}. Votre automate doit contenir exactement 3 états.",
            details: [
              "Indication : un état pour « rien de pertinent », un état pour « se termine par un seul 0 », un état pour « se termine par 00 ».",
            ],
            solution: "Un automate possible (3 états) :",
            solutionItems: [
              "États : q₀ (le mot ne se termine pas par 0), q₁ (le mot se termine par exactement un 0), q₂ (le mot se termine par 00).",
              "État initial : q₀ — état final : q₂ — alphabet Σ = {0, 1}.",
              "Transitions : depuis q₀ : 0 → q₁, 1 → q₀ ; depuis q₁ : 0 → q₂, 1 → q₀ ; depuis q₂ : 0 → q₂, 1 → q₀.",
              "Cet automate est en fait déterministe — c'est permis, car tout DFA est aussi un NFA (le non-déterminisme est une permission, pas une obligation). La contrainte « exactement 3 états » est ainsi satisfaite.",
              "Variante non-déterministe stricte : depuis q₀, sur 0, garder la possibilité de rester en q₀ ET d'aller en q₁ (deux flèches) — l'automate « devine » où se termine réellement le mot.",
            ],
          },
        ],
      },
      {
        title: "Question 2 : Preuve de fermeture — produit cartésien (5 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Le Théorème 1 affirme que les langages réguliers sont fermés par l'intersection. Soient M₁ = (Q₁, Σ, δ₁, q₁, F₁) et M₂ = (Q₂, Σ, δ₂, q₂, F₂) deux automates déterministes reconnaissant respectivement L₁ et L₂. Donnez la définition formelle (les 5 éléments) du nouvel automate M qui reconnaît le langage L₁ ∩ L₂. Attention particulière à la définition de l'ensemble des états finaux F.",
            details: [
              "Indication : les états du nouvel automate sont des paires (s₁, s₂) — produit cartésien Q₁ × Q₂.",
              "Pour l'intersection, quel opérateur logique relie les deux états finaux : « ou » ou « et » ?",
            ],
            solution: "Définition formelle de M = (Q, Σ, δ, q₀, F) :",
            solutionItems: [
              "États : Q = Q₁ × Q₂ — l'ensemble des paires (s₁, s₂) avec s₁ ∈ Q₁ et s₂ ∈ Q₂.",
              "Alphabet : Σ (le même alphabet que celui de M₁ et M₂).",
              "Transitions : pour tout (s₁, s₂) ∈ Q et tout a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)) — les deux automates avancent ensemble.",
              "État initial : q₀ = (q₁, q₂), la paire des deux états initiaux.",
              "États finaux (l'attention demandée) : F = F₁ × F₂ — une paire est finale si et seulement si sa première composante est finale dans M₁ ET sa seconde l'est dans M₂. C'est la différence clé avec l'union, qui utiliserait « ou » : F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
            ],
          },
        ],
      },
      {
        title: "Question 3 : Le principe des tiroirs (3 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Expliquez ce qu'est le « principe des tiroirs » (ou nids de pigeon). Comment ce principe mathématique du chapitre 2 est-il utilisé dans la démonstration théorique du lemme de pompage au chapitre 3 ?",
            solution: "Corrigé :",
            solutionItems: [
              "Le principe des tiroirs : si l'on place plus d'objets que de compartiments, au moins un compartiment doit contenir plusieurs objets.",
              "Exemple : 13 étudiants (les objets) répartis dans 12 mois possibles (les compartiments) — 13 > 12, donc deux étudiants partagent obligatoirement le même mois de naissance.",
              "Lien avec le lemme de pompage : la preuve du lemme elle-même utilise ce principe. Un automate possède un nombre fini d'états ; si le mot w est plus long que ce nombre (|w| > p), deux positions de lecture conduisent au même état — les positions lues sont les objets, les états sont les compartiments.",
              "C'est cette répétition d'état qui crée une BOUCLE : le segment y lu entre ces deux positions peut être répété (pompé) sans changer l'état d'arrivée. On en déduit la décomposition w = xyz avec xyⁱz ∈ L pour tout i — l'outil central de la preuve par l'absurde sur la non-régularité.",
            ],
          },
        ],
      },
      {
        title: "Question 4 : Dérivation d'une expression régulière (4 points)",
        exercises: [
          {
            kind: "open",
            prompt:
              "Soit l'alphabet Σ = {a, b}. Donnez une expression régulière qui décrit le langage L = {w | w contient le facteur 0101}.",
            details: [
              "Attention : relisez l'énoncé — le facteur demandé utilise les symboles 0 et 1, mais l'alphabet annoncé est {a, b}.",
            ],
            solution: "Expression régulière :",
            solutionItems: [
              "R = (0 ∪ 1)* 0101 (0 ∪ 1)* — si l'alphabet est bien Σ = {0, 1}.",
              "Lecture : (0 ∪ 1)* avant = n'importe quoi avant le facteur, 0101 = le facteur obligatoire, (0 ∪ 1)* après = n'importe quoi après. On obtient exactement les mots contenant « 0101 » en sous-chaîne.",
              "Si l'alphabet est strictement Σ = {a, b}, l'énoncé contient une erreur : aucun mot de {a, b}* ne peut contenir le facteur « 0101 », et le langage serait vide (∅). Signalez-le au correcteur.",
            ],
          },
        ],
      },
      {
        title: "Question 5 : Raisonnement et contre-exemples (4 points)",
        exercises: [
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Si l'on concatène le langage vide ∅ avec n'importe quel langage régulier L, le résultat est L.",
            answer: false,
            justification:
              "**Faux.** ∅ · L = ∅ : la concaténation de l'ensemble vide avec n'importe quel ensemble reste l'ensemble vide. Le NEUTRE de la concaténation est le mot vide ε (ε · L = L), pas le langage vide ∅.",
            mistake:
              "Piège classique : quel est le neutre de la concaténation — le langage vide ∅ ou le mot vide ε ?",
          },
          {
            kind: "trueFalse",
            prompt:
              "Affirmation : Un langage est régulier si et seulement s'il est décrit par une expression régulière.",
            answer: true,
            justification:
              "**Vrai.** C'est le corollaire de l'équivalence des définitions : un langage est régulier s'il est reconnu par un automate (défini ou non) si et seulement s'il est décrit par une expression régulière — les deux notions décrivent exactement les mêmes langages.",
            mistake:
              "Relis la fin du chapitre 3 : que dit le corollaire sur l'équivalence automate ↔ expression régulière ?",
          },
        ],
      },
    ],
  },
];

export const langagesFormels: Subject = {
  slug: "langages-formels",
  title: "Langages Formels",
  status: "published",
  summary:
    "Alphabets, words, proof techniques and automata — exam-ready revision notes.",
  classes: [
    {
      label: "Chapter 1",
      title: "Introduction aux langages formels",
      blocks: chapterOne,
    },
    {
      label: "Chapter 2",
      title: "Techniques et outils de preuve",
      parts: [
        { id: "p1", label: "Sections 2.1 – 2.3" },
        { id: "p2", label: "Sections 2.4 – 2.7" },
      ],
      blocks: chapterTwo,
    },
    {
      label: "Chapter 3",
      title: "Langages réguliers",
      parts: [
        { id: "p1", label: "Part 1 — Automates" },
        { id: "p2", label: "Part 2 — Opérations & NFA" },
        { id: "p3", label: "Part 3 — Équivalence & regex" },
      ],
      blocks: chapterThree,
    },
    {
      label: "Examens blancs",
      title: "Exercices d'examen blanc (Chapitres 1–3)",
      parts: [
        { id: "p1", label: "Blanc Global #1" },
        { id: "p2", label: "Blanc Global #2" },
        { id: "p3", label: "Blanc N°1 — Théorie & automates" },
        { id: "p4", label: "Blanc N°2 — Preuves & construction" },
      ],
      blocks: examBlancs,
    },
  ],
};
