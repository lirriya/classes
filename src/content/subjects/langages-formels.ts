import type { Block, Subject } from "../types";

const chapterOne: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Les langages formels constituent le socle théorique de l'informatique moderne. Ils permettent de modéliser la syntaxe des langages de programmation, de concevoir des compilateurs et de formaliser la notion de calculabilité.",
      en: "Formal languages constitute the theoretical foundation of modern computer science. They allow the syntax of programming languages to be modeled, compilers to be designed, and the notion of computability to be formalized.",
      uk: "Формальні мови становлять теоретичну основу сучасної інформатики. Вони дозволяють моделювати синтаксис мов програмування, проєктувати компілятори та формалізувати поняття обчислюваності.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Alphabet, Mots et Vocabulaire", en: "1. Alphabet, Words, and Vocabulary", uk: "1. Алфавіт, слова та лексика" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "A. Alphabet et Symboles", en: "A. Alphabet and Symbols", uk: "A. Алфавіт і символи" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Lettre (ou symbole) :** Un élément indivisible de base.",
          en: "**Letter (or symbol):** A basic indivisible element.",
          uk: "**Літера (або символ):** Неподільний базовий елемент.",
        },
      },
      {
        text: {
          fr: "**Alphabet (Σ) :** Un ensemble fini et non vide de symboles.",
          en: "**Alphabet (Σ):** A finite non-empty set of symbols.",
          uk: "**Алфавіт (Σ):** Скінченна непорожня множина символів.",
        },
      },
      {
        text: { fr: "**Exemples :**", en: "**Examples:**", uk: "**Приклади:**" },
        children: [
          {
            fr: "Σ₁ = {0, 1} — alphabet binaire",
            en: "Σ₁ = {0, 1} — binary alphabet",
            uk: "Σ₁ = {0, 1} — двійковий алфавіт",
          },
          {
            fr: "Σ₂ = {a, b, c, …, z} — alphabet latin minuscules",
            en: "Σ₂ = {a, b, c, …, z} — lowercase Latin alphabet",
            uk: "Σ₂ = {a, b, c, …, z} — алфавіт малих латинських літер",
          },
          {
            fr: "Σ₃ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, (, )} — alphabet d'expressions arithmétiques",
            en: "Σ₃ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, (, )} — alphabet of arithmetic expressions",
            uk: "Σ₃ = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, (, )} — алфавіт арифметичних виразів",
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "B. Notion de Mot", en: "B. Notion of Word", uk: "B. Поняття слова" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Mot (w) :** Une suite finie (ou chaîne) de symboles juxtaposés de l'alphabet Σ.",
          en: "**Word (w):** A finite sequence (or string) of juxtaposed symbols from the alphabet Σ.",
          uk: "**Слово (w):** Скінченна послідовність (або ланцюжок) розташованих поряд символів алфавіту Σ.",
        },
      },
      {
        text: {
          fr: "**Longueur d'un mot (|w|) :** Le nombre de symboles qui composent le mot w.",
          en: "**Length of a word (|w|):** The number of symbols that make up the word w.",
          uk: "**Довжина слова (|w|):** Кількість символів, що складають слово w.",
        },
      },
      {
        text: {
          fr: "**Mot vide (ε) :** La chaîne contenant zéro symbole. Sa longueur est stricte : |ε| = 0.",
          en: "**Empty word (ε):** The string containing zero symbols. Its length is exactly: |ε| = 0.",
          uk: "**Порожнє слово (ε):** Ланцюжок, що містить нуль символів. Його довжина строго дорівнює: |ε| = 0.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 5,
    text: {
      fr: "Définition récursive de la longueur d'un mot",
      en: "Recursive definition of the length of a word",
      uk: "Рекурсивне означення довжини слова",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La longueur d'un mot se définit de manière rigoureuse en deux étapes :",
      en: "The length of a word is defined rigorously in two steps:",
      uk: "Довжину слова визначають строго у два етапи:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: { fr: "**Base :** |ε| = 0", en: "**Base:** |ε| = 0", uk: "**База:** |ε| = 0" } },
      {
        text: {
          fr: "**Récurrence :** |w| = |αu| = 1 + |u|, où α ∈ Σ et u ∈ Σ*.",
          en: "**Recurrence:** |w| = |αu| = 1 + |u|, where α ∈ Σ and u ∈ Σ*.",
          uk: "**Рекурсія:** |w| = |αu| = 1 + |u|, де α ∈ Σ та u ∈ Σ*.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "C. Les Ensembles Σ* et Σ+", en: "C. The Sets Σ* and Σ+", uk: "C. Множини Σ* та Σ+" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Σ* (Fermeture de Kleene de l'alphabet) :** L'ensemble de tous les mots possibles formés avec les lettres de Σ, y compris le mot vide ε.",
          en: "**Σ* (Kleene closure of the alphabet):** The set of all possible words formed with the letters of Σ, including the empty word ε.",
          uk: "**Σ* (замкненість Кліні алфавіту):** Множина всіх можливих слів, утворених з літер Σ, включно з порожнім словом ε.",
        },
      },
      { text: { fr: "Par définition : ε ∈ Σ*.", en: "By definition: ε ∈ Σ*.", uk: "За означенням: ε ∈ Σ*." } },
      {
        text: {
          fr: "Si Σ = {0, 1}, alors Σ* = {ε, 0, 1, 00, 01, 10, 11, 000, …}.",
          en: "If Σ = {0, 1}, then Σ* = {ε, 0, 1, 00, 01, 10, 11, 000, …}.",
          uk: "Якщо Σ = {0, 1}, то Σ* = {ε, 0, 1, 00, 01, 10, 11, 000, …}.",
        },
      },
      {
        text: {
          fr: "**Σ+ (Ensemble des mots non vides) :** L'ensemble de tous les mots non vides sur Σ, à l'exclusion du mot vide.",
          en: "**Σ+ (Set of non-empty words):** The set of all non-empty words over Σ, excluding the empty word.",
          uk: "**Σ+ (множина непорожніх слів):** Множина всіх непорожніх слів над Σ, за винятком порожнього слова.",
        },
      },
      {
        text: {
          fr: "Relation fondamentale : Σ+ = Σ* ∖ {ε}.",
          en: "Fundamental relation: Σ+ = Σ* ∖ {ε}.",
          uk: "Фундаментальне співвідношення: Σ+ = Σ* ∖ {ε}.",
        },
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Opérations sur les Mots", en: "2. Operations on Words", uk: "2. Операції над словами" },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "A. La Concaténation", en: "A. Concatenation", uk: "A. Конкатенація" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Soient w ∈ Σ* et u ∈ Σ*. La concaténation de w et de u, notée w · u ou simplement wu, est le mot obtenu en juxtaposant les symboles de u directement après ceux de w.",
      en: "Let w ∈ Σ* and u ∈ Σ*. The concatenation of w and u, denoted w · u or simply wu, is the word obtained by juxtaposing the symbols of u directly after those of w.",
      uk: "Нехай w ∈ Σ* та u ∈ Σ*. Конкатенація w і u, позначувана w · u або просто wu, — це слово, отримане розміщенням символів u безпосередньо після символів w.",
    },
  },
  {
    type: "heading",
    level: 5,
    text: { fr: "Propriétés de la concaténation", en: "Properties of concatenation", uk: "Властивості конкатенації" },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Associativité :** (w · u) · v = w · (u · v) pour tous mots w, u, v.",
          en: "**Associativity:** (w · u) · v = w · (u · v) for all words w, u, v.",
          uk: "**Асоціативність:** (w · u) · v = w · (u · v) для всіх слів w, u, v.",
        },
      },
      {
        text: {
          fr: "**Élément neutre :** Le mot vide ε est l'élément neutre à gauche et à droite : ε · w = w · ε = w.",
          en: "**Identity element:** The empty word ε is the identity on both the left and the right: ε · w = w · ε = w.",
          uk: "**Нейтральний елемент:** Порожнє слово ε є нейтральним елементом ліворуч і праворуч: ε · w = w · ε = w.",
        },
      },
      {
        text: {
          fr: "**Non-commutativité :** En général, w · u ≠ u · w (ex : ab · c = abc ≠ cab = c · ab).",
          en: "**Non-commutativity:** In general, w · u ≠ u · w (e.g.: ab · c = abc ≠ cab = c · ab).",
          uk: "**Некомутативність:** Загалом w · u ≠ u · w (напр.: ab · c = abc ≠ cab = c · ab).",
        },
      },
      {
        text: {
          fr: "**Longueur du produit :** |w · u| = |w| + |u|.",
          en: "**Length of the product:** |w · u| = |w| + |u|.",
          uk: "**Довжина добутку:** |w · u| = |w| + |u|.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 5,
    text: {
      fr: "Définition récursive de la concaténation",
      en: "Recursive definition of concatenation",
      uk: "Рекурсивне означення конкатенації",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: "ε · u = u" },
      {
        text: {
          fr: "w · u = (αv) · u = α(v · u), où α ∈ Σ et v ∈ Σ*.",
          en: "w · u = (αv) · u = α(v · u), where α ∈ Σ and v ∈ Σ*.",
          uk: "w · u = (αv) · u = α(v · u), де α ∈ Σ та v ∈ Σ*.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "B. Puissance d'un Mot", en: "B. Power of a Word", uk: "B. Піднесення слова до степеня" },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'itération de la concaténation d'un mot w avec lui-même définit ses puissances :",
      en: "Iterating the concatenation of a word w with itself defines its powers:",
      uk: "Повторення конкатенації слова w із самим собою визначає його степені:",
    },
  },
  {
    type: "list",
    items: [
      { text: "w⁰ = ε" },
      { text: { fr: "wⁿ⁺¹ = w · wⁿ, pour tout n ∈ ℕ", en: "wⁿ⁺¹ = w · wⁿ, for all n ∈ ℕ", uk: "wⁿ⁺¹ = w · wⁿ, для всіх n ∈ ℕ" } },
      {
        text: {
          fr: "Exemple : si w = ab, alors w⁰ = ε, w¹ = ab, w² = abab, w³ = ababab.",
          en: "Example: if w = ab, then w⁰ = ε, w¹ = ab, w² = abab, w³ = ababab.",
          uk: "Приклад: якщо w = ab, то w⁰ = ε, w¹ = ab, w² = abab, w³ = ababab.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "C. Facteurs, Préfixes et Suffixes", en: "C. Factors, Prefixes, and Suffixes", uk: "C. Фактори, префікси та суфікси" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Soit un mot x ∈ Σ* composé sous la forme x = uvw :",
      en: "Let x ∈ Σ* be a word written in the form x = uvw:",
      uk: "Нехай слово x ∈ Σ* записане у вигляді x = uvw:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Préfixe (ou facteur gauche) :** Le mot u situé au début de x.",
          en: "**Prefix (or left factor):** The word u located at the beginning of x.",
          uk: "**Префікс (або лівий фактор):** Слово u, розташоване на початку x.",
        },
      },
      {
        text: {
          fr: "**Facteur (ou sous-chaîne) :** Le mot v situé à l'intérieur de x.",
          en: "**Factor (or substring):** The word v located inside x.",
          uk: "**Фактор (або підрядок):** Слово v, розташоване всередині x.",
        },
      },
      {
        text: {
          fr: "**Suffixe (ou facteur droit) :** Le mot w situé à la fin de x.",
          en: "**Suffix (or right factor):** The word w located at the end of x.",
          uk: "**Суфікс (або правий фактор):** Слово w, розташоване в кінці x.",
        },
      },
    ],
  },
  {
    type: "quote",
    text: {
      fr: "**Remarque importante :** Le mot vide ε est à la fois un préfixe, un facteur et un suffixe de n'importe quel mot x ∈ Σ*. De plus, tout mot x est son propre préfixe, facteur et suffixe (x = ε · x · ε).",
      en: "**Important remark:** The empty word ε is simultaneously a prefix, a factor, and a suffix of any word x ∈ Σ*. Moreover, every word x is its own prefix, factor, and suffix (x = ε · x · ε).",
      uk: "**Важливе зауваження:** Порожнє слово ε є водночас префіксом, фактором і суфіксом будь-якого слова x ∈ Σ*. Крім того, кожне слово x є власним префіксом, фактором і суфіксом (x = ε · x · ε).",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Exemple pratique : soit w = abc sur Σ = {a, b, c} :",
      en: "Practical example: let w = abc over Σ = {a, b, c}:",
      uk: "Практичний приклад: нехай w = abc над Σ = {a, b, c}:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Préfixes de w :** ε, a, ab, abc",
          en: "**Prefixes of w:** ε, a, ab, abc",
          uk: "**Префікси w:** ε, a, ab, abc",
        },
      },
      {
        text: {
          fr: "**Suffixes de w :** ε, c, bc, abc",
          en: "**Suffixes of w:** ε, c, bc, abc",
          uk: "**Суфікси w:** ε, c, bc, abc",
        },
      },
      {
        text: {
          fr: "**Facteurs de w :** ε, a, b, c, ab, bc, abc",
          en: "**Factors of w:** ε, a, b, c, ab, bc, abc",
          uk: "**Фактори w:** ε, a, b, c, ab, bc, abc",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "concaténation et longueur",
      en: "concatenation and length",
      uk: "конкатенація та довжина",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Soient w = ab et u = ba. Que valent w · u et sa longueur |w · u| ?",
        en: "Let w = ab and u = ba. What is w · u and its length |w · u|?",
        uk: "Нехай w = ab та u = ba. Чому дорівнюють w · u та його довжина |w · u|?",
      },
      options: [
        {
          text: { fr: "abba, de longueur 4", en: "abba, of length 4", uk: "abba, довжини 4" },
        },
        {
          text: { fr: "baab, de longueur 4", en: "baab, of length 4", uk: "baab, довжини 4" },
          feedback: {
            fr: "Non : la concaténation w · u place les symboles de u APRÈS ceux de w, donc u ne passe pas devant.",
            en: "No: the concatenation w · u places the symbols of u AFTER those of w, so u does not move in front.",
            uk: "Ні: конкатенація w · u розміщує символи u ПІСЛЯ символів w, тож u не переміщується вперед.",
          },
        },
        {
          text: { fr: "abba, de longueur 2", en: "abba, of length 2", uk: "abba, довжини 2" },
          feedback: {
            fr: "Non : |w · u| = |w| + |u| = 2 + 2 = 4.",
            en: "No: |w · u| = |w| + |u| = 2 + 2 = 4.",
            uk: "Ні: |w · u| = |w| + |u| = 2 + 2 = 4.",
          },
        },
        {
          text: { fr: "ab · ba, de longueur 4", en: "ab · ba, of length 4", uk: "ab · ba, довжини 4" },
          feedback: {
            fr: "Presque : on écrit le résultat concaténé « abba », sans garder le point de l'opération.",
            en: "Almost: the concatenated result is written \"abba\", without keeping the operation dot.",
            uk: "Майже: конкатенований результат записують як «abba», не зберігаючи крапку операції.",
          },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "w · u = ab · ba = **abba**, et sa longueur vaut |ab| + |ba| = 2 + 2 = **4**. La concaténation n'est pas commutative : u · w donnerait baab.",
        en: "w · u = ab · ba = **abba**, and its length is |ab| + |ba| = 2 + 2 = **4**. Concatenation is not commutative: u · w would give baab.",
        uk: "w · u = ab · ba = **abba**, а його довжина дорівнює |ab| + |ba| = 2 + 2 = **4**. Конкатенація не комутативна: u · w дало б baab.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Les Langages et leurs Opérations", en: "3. Languages and their Operations", uk: "3. Мови та операції над ними" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **langage L** sur un alphabet Σ est un sous-ensemble de Σ*, c'est-à-dire L ⊆ Σ*.",
      en: "A **language L** over an alphabet Σ is a subset of Σ*, that is, L ⊆ Σ*.",
      uk: "**Мова L** над алфавітом Σ — це підмножина Σ*, тобто L ⊆ Σ*.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Cas particuliers notables", en: "Notable special cases", uk: "Помітні особливі випадки" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Langage vide (∅) :** Ne contient aucun mot. Sa cardinalité est |∅| = 0.",
          en: "**Empty language (∅):** Contains no word. Its cardinality is |∅| = 0.",
          uk: "**Порожня мова (∅):** Не містить жодного слова. Її потужність |∅| = 0.",
        },
      },
      {
        text: {
          fr: "**Langage contenant le mot vide ({ε}) :** Contient exactement un mot (le mot vide). Sa cardinalité est |{ε}| = 1.",
          en: "**Language containing the empty word ({ε}):** Contains exactly one word (the empty word). Its cardinality is |{ε}| = 1.",
          uk: "**Мова, що містить порожнє слово ({ε}):** Містить рівно одне слово (порожнє слово). Її потужність |{ε}| = 1.",
        },
      },
      {
        text: {
          fr: "**Attention :** Ne confondez jamais ∅ et {ε}.",
          en: "**Warning:** Never confuse ∅ and {ε}.",
          uk: "**Увага:** Ніколи не плутайте ∅ та {ε}.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Opérations fondamentales sur les langages",
      en: "Fundamental operations on languages",
      uk: "Фундаментальні операції над мовами",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Soient L₁ et L₂ deux langages définis sur un alphabet Σ :",
      en: "Let L₁ and L₂ be two languages defined over an alphabet Σ:",
      uk: "Нехай L₁ та L₂ — дві мови, визначені над алфавітом Σ:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Union (L₁ ∪ L₂) :** L₁ ∪ L₂ = {w | w ∈ L₁ ou w ∈ L₂}",
          en: "**Union (L₁ ∪ L₂):** L₁ ∪ L₂ = {w | w ∈ L₁ or w ∈ L₂}",
          uk: "**Об'єднання (L₁ ∪ L₂):** L₁ ∪ L₂ = {w | w ∈ L₁ або w ∈ L₂}",
        },
      },
      {
        text: {
          fr: "**Intersection (L₁ ∩ L₂) :** L₁ ∩ L₂ = {w | w ∈ L₁ et w ∈ L₂}",
          en: "**Intersection (L₁ ∩ L₂):** L₁ ∩ L₂ = {w | w ∈ L₁ and w ∈ L₂}",
          uk: "**Перетин (L₁ ∩ L₂):** L₁ ∩ L₂ = {w | w ∈ L₁ та w ∈ L₂}",
        },
      },
      {
        text: {
          fr: "**Différence (L₁ ∖ L₂) :** L₁ ∖ L₂ = {w | w ∈ L₁ et w ∉ L₂}",
          en: "**Difference (L₁ ∖ L₂):** L₁ ∖ L₂ = {w | w ∈ L₁ and w ∉ L₂}",
          uk: "**Різниця (L₁ ∖ L₂):** L₁ ∖ L₂ = {w | w ∈ L₁ та w ∉ L₂}",
        },
      },
      {
        text: {
          fr: "**Complémentaire (L̄) :** L̄ = {w ∈ Σ* | w ∉ L} = Σ* ∖ L",
          en: "**Complement (L̄):** L̄ = {w ∈ Σ* | w ∉ L} = Σ* ∖ L",
          uk: "**Доповнення (L̄):** L̄ = {w ∈ Σ* | w ∉ L} = Σ* ∖ L",
        },
      },
      {
        text: {
          fr: "**Concaténation de langages (L₁ · L₂) :** L₁ · L₂ = {uv | u ∈ L₁ et v ∈ L₂}",
          en: "**Concatenation of languages (L₁ · L₂):** L₁ · L₂ = {uv | u ∈ L₁ and v ∈ L₂}",
          uk: "**Конкатенація мов (L₁ · L₂):** L₁ · L₂ = {uv | u ∈ L₁ та v ∈ L₂}",
        },
      },
      {
        text: {
          fr: "**Auto-concaténation (puissance d'un langage Lⁿ) :** L⁰ = {ε} et Lⁿ⁺¹ = L · Lⁿ",
          en: "**Self-concatenation (power of a language Lⁿ):** L⁰ = {ε} and Lⁿ⁺¹ = L · Lⁿ",
          uk: "**Самоконкатенація (степінь мови Lⁿ):** L⁰ = {ε} та Lⁿ⁺¹ = L · Lⁿ",
        },
      },
      {
        text: {
          fr: "**Fermeture de Kleene (étoile de Kleene L*) :** L* = ⋃ Lᵏ pour tout k ≥ 0, c'est-à-dire L⁰ ∪ L¹ ∪ L² ∪ …",
          en: "**Kleene closure (Kleene star L*):** L* = ⋃ Lᵏ for all k ≥ 0, that is, L⁰ ∪ L¹ ∪ L² ∪ …",
          uk: "**Замкненість Кліні (зірка Кліні L*):** L* = ⋃ Lᵏ для всіх k ≥ 0, тобто L⁰ ∪ L¹ ∪ L² ∪ …",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "L* représente l'ensemble de toutes les concaténations possibles de zéro, un ou plusieurs mots de L. Le mot vide ε appartient obligatoirement à L*, quel que soit L.",
      en: "L* represents the set of all possible concatenations of zero, one, or more words of L. The empty word ε necessarily belongs to L*, whatever L is.",
      uk: "L* позначає множину всіх можливих конкатенацій нуля, одного або більше слів із L. Порожнє слово ε обов'язково належить L*, якою б не була L.",
    },
  },
  {
    type: "checkpoint",
    concept: {
      fr: "étoile de Kleene et langage vide",
      en: "Kleene star and empty language",
      uk: "зірка Кліні та порожня мова",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Soit L = {a}. Que vaut L* ?",
        en: "Let L = {a}. What is L*?",
        uk: "Нехай L = {a}. Чому дорівнює L*?",
      },
      options: [
        {
          text: { fr: "∅", en: "∅", uk: "∅" },
          feedback: {
            fr: "Non : ∅ est le langage vide. L* contient toujours au moins ε, il n'est jamais vide.",
            en: "No: ∅ is the empty language. L* always contains at least ε, so it is never empty.",
            uk: "Ні: ∅ — це порожня мова. L* завжди містить принаймні ε, він ніколи не буває порожнім.",
          },
        },
        {
          text: {
            fr: "{ε, a, aa, aaa, …} (c'est-à-dire a*)",
            en: "{ε, a, aa, aaa, …} (that is, a*)",
            uk: "{ε, a, aa, aaa, …} (тобто a*)",
          },
        },
        {
          text: { fr: "{a}", en: "{a}", uk: "{a}" },
          feedback: {
            fr: "Non : {a} = L¹ seulement ; L* réunit toutes les puissances, y compris L⁰ = {ε}.",
            en: "No: {a} = L¹ only; L* gathers all powers, including L⁰ = {ε}.",
            uk: "Ні: {a} = L¹ лише; L* об'єднує всі степені, включно з L⁰ = {ε}.",
          },
        },
        {
          text: { fr: "{ε}", en: "{ε}", uk: "{ε}" },
          feedback: {
            fr: "Non : {ε} = L⁰ ; L* contient aussi a, aa, aaa, …",
            en: "No: {ε} = L⁰; L* also contains a, aa, aaa, …",
            uk: "Ні: {ε} = L⁰; L* також містить a, aa, aaa, …",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "L* = L⁰ ∪ L¹ ∪ L² ∪ … = {ε} ∪ {a} ∪ {aa} ∪ … = **{ε, a, aa, aaa, …} = a***. Le mot vide appartient toujours à L*, mais ∅ et {ε} sont deux choses différentes.",
        en: "L* = L⁰ ∪ L¹ ∪ L² ∪ … = {ε} ∪ {a} ∪ {aa} ∪ … = **{ε, a, aa, aaa, …} = a***. The empty word always belongs to L*, but ∅ and {ε} are two different things.",
        uk: "L* = L⁰ ∪ L¹ ∪ L² ∪ … = {ε} ∪ {a} ∪ {aa} ∪ … = **{ε, a, aa, aaa, …} = a***. Порожнє слово завжди належить L*, але ∅ та {ε} — дві різні речі.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "4. Exercices d'Entraînement", en: "4. Practice Exercises", uk: "4. Тренувальні вправи" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section A : Vrai ou Faux (Justifiez votre réponse)",
          en: "Section A: True or False (Justify your answer)",
          uk: "Розділ A: Правда чи хиба (обґрунтуйте свою відповідь)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Pour tout alphabet Σ, le mot vide ε appartient à Σ+.",
              en: "Statement: For every alphabet Σ, the empty word ε belongs to Σ+.",
              uk: "Твердження: Для будь-якого алфавіту Σ порожнє слово ε належить Σ+.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Par définition, Σ+ = Σ* ∖ {ε} : Σ+ ne contient que les mots de longueur ≥ 1.",
              en: "**False.** By definition, Σ+ = Σ* ∖ {ε}: Σ+ contains only words of length ≥ 1.",
              uk: "**Хиба.** За означенням Σ+ = Σ* ∖ {ε}: Σ+ містить лише слова довжини ≥ 1.",
            },
            mistake: {
              fr: "Rappelle-toi comment Σ+ est défini à partir de Σ* : on en retire quoi ?",
              en: "Recall how Σ+ is defined from Σ*: what is removed from it?",
              uk: "Пригадай, як Σ+ визначається з Σ*: що з нього вилучають?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Si L = {a, b}, alors L⁰ = ∅.",
              en: "Statement: If L = {a, b}, then L⁰ = ∅.",
              uk: "Твердження: Якщо L = {a, b}, то L⁰ = ∅.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Pour tout langage L, la puissance zéro est L⁰ = {ε} (le langage contenant uniquement le mot vide), et non ∅.",
              en: "**False.** For any language L, the zero power is L⁰ = {ε} (the language containing only the empty word), not ∅.",
              uk: "**Хиба.** Для будь-якої мови L нульовий степінь L⁰ = {ε} (мова, що містить лише порожнє слово), а не ∅.",
            },
            mistake: {
              fr: "La puissance zéro n'est jamais « sans élément » : que vaut-elle par définition, quel que soit L ?",
              en: "The zero power is never 'without an element': what is its value by definition, whatever L is?",
              uk: "Нульовий степінь ніколи не буває «без елемента»: чому він дорівнює за означенням, якою б не була L?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : La concaténation de langages est commutative : L₁ · L₂ = L₂ · L₁.",
              en: "Statement: Concatenation of languages is commutative: L₁ · L₂ = L₂ · L₁.",
              uk: "Твердження: Конкатенація мов комутативна: L₁ · L₂ = L₂ · L₁.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Contre-exemple : si L₁ = {a} et L₂ = {b}, alors L₁ · L₂ = {ab} alors que L₂ · L₁ = {ba}.",
              en: "**False.** Counterexample: if L₁ = {a} and L₂ = {b}, then L₁ · L₂ = {ab} while L₂ · L₁ = {ba}.",
              uk: "**Хиба.** Контрприклад: якщо L₁ = {a} та L₂ = {b}, то L₁ · L₂ = {ab}, тоді як L₂ · L₁ = {ba}.",
            },
            mistake: {
              fr: "Cherche un contre-exemple : l'ordre des lettres change-t-il le mot obtenu ?",
              en: "Look for a counterexample: does the order of the letters change the resulting word?",
              uk: "Пошукай контрприклад: чи змінює порядок літер отримане слово?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Si w = abba, le mot bb est un facteur de w.",
              en: "Statement: If w = abba, the word bb is a factor of w.",
              uk: "Твердження: Якщо w = abba, слово bb є фактором w.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** Le mot abba s'écrit a · (bb) · a, donc bb est bien un facteur (sous-chaîne).",
              en: "**True.** The word abba is written a · (bb) · a, so bb is indeed a factor (substring).",
              uk: "**Правда.** Слово abba записується як a · (bb) · a, тож bb справді є фактором (підрядком).",
            },
            mistake: {
              fr: "Un facteur est une sous-chaîne présente à l'intérieur du mot : décompose abba en trois morceaux.",
              en: "A factor is a substring present inside the word: break abba into three pieces.",
              uk: "Фактор — це підрядок, наявний усередині слова: розклади abba на три частини.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Pour tout langage L, on a L · ∅ = ∅.",
              en: "Statement: For any language L, we have L · ∅ = ∅.",
              uk: "Твердження: Для будь-якої мови L маємо L · ∅ = ∅.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** On forme des mots uv avec u ∈ L et v ∈ ∅. Comme ∅ n'a aucun mot, aucune combinaison n'est possible : le résultat est vide.",
              en: "**True.** We form words uv with u ∈ L and v ∈ ∅. Since ∅ has no word, no combination is possible: the result is empty.",
              uk: "**Правда.** Утворюємо слова uv, де u ∈ L та v ∈ ∅. Оскільки ∅ не має жодного слова, жодна комбінація неможлива: результат порожній.",
            },
            mistake: {
              fr: "Que peut-on construire avec un ensemble qui ne contient aucun élément ?",
              en: "What can one construct with a set that contains no element?",
              uk: "Що можна побудувати з множини, яка не містить жодного елемента?",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section B : Questions à Choix Multiple (QCM)",
          en: "Section B: Multiple-Choice Questions (MCQ)",
          uk: "Розділ B: Питання з вибором відповіді (тест)",
        },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Soit Σ = {a, b} et L = {ab}. Que vaut L² ?",
              en: "Let Σ = {a, b} and L = {ab}. What is the value of L²?",
              uk: "Нехай Σ = {a, b} та L = {ab}. Чому дорівнює L²?",
            },
            options: [
              {
                text: "{ab}",
                feedback: {
                  fr: "L² = L · L : il faut coller un mot de L avec un AUTRE mot de L — le résultat contient deux copies, pas une seule.",
                  en: "L² = L · L: you must glue a word of L to ANOTHER word of L — the result contains two copies, not just one.",
                  uk: "L² = L · L: потрібно склеїти слово з L з ІНШИМ словом із L — результат містить дві копії, а не одну.",
                },
              },
              {
                text: "{a²b²}",
                feedback: {
                  fr: "ab · ab = abab — les puissances ne se concatènent pas lettre par lettre : aabb n'apparaît nulle part.",
                  en: "ab · ab = abab — powers are not concatenated letter by letter: aabb does not appear anywhere.",
                  uk: "ab · ab = abab — степені не конкатенуються літера за літерою: aabb ніде не з'являється.",
                },
              },
              { text: "{abab}" },
              {
                text: "{ε, ab, abab}",
                feedback: {
                  fr: "ε vient de L⁰ : L² ne contient que les mots formés de exactement deux mots de L collés ensemble.",
                  en: "ε comes from L⁰: L² contains only the words formed by exactly two words of L glued together.",
                  uk: "ε походить з L⁰: L² містить лише слова, утворені з рівно двох склеєних разом слів із L.",
                },
              },
            ],
            answerIndex: 2,
            solution: "L² = L · L = {ab} · {ab} = {abab}.",
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Quelle est la différence exacte entre ∅ et {ε} ?",
              en: "What is the exact difference between ∅ and {ε}?",
              uk: "Яка точна різниця між ∅ та {ε}?",
            },
            options: [
              {
                text: {
                  fr: "∅ est un mot, {ε} est un langage.",
                  en: "∅ is a word, {ε} is a language.",
                  uk: "∅ — це слово, {ε} — мова.",
                },
                feedback: {
                  fr: "∅ n'est pas un mot — c'est un ensemble sans aucun élément (un langage vide).",
                  en: "∅ is not a word — it is a set with no element at all (an empty language).",
                  uk: "∅ не є словом — це множина без жодного елемента (порожня мова).",
                },
              },
              {
                text: {
                  fr: "∅ ne contient aucun élément, alors que {ε} contient un élément de longueur 0.",
                  en: "∅ contains no element, whereas {ε} contains one element of length 0.",
                  uk: "∅ не містить жодного елемента, тоді як {ε} містить один елемент довжини 0.",
                },
              },
              {
                text: {
                  fr: "Il n'y a aucune différence, ils sont équivalents.",
                  en: "There is no difference, they are equivalent.",
                  uk: "Жодної різниці немає, вони еквівалентні.",
                },
                feedback: {
                  fr: "∅ a cardinalité 0, {ε} a cardinalité 1 — deux ensembles très différents.",
                  en: "∅ has cardinality 0, {ε} has cardinality 1 — two very different sets.",
                  uk: "∅ має потужність 0, {ε} має потужність 1 — дві дуже різні множини.",
                },
              },
              {
                text: {
                  fr: "∅ contient la lettre 0.",
                  en: "∅ contains the letter 0.",
                  uk: "∅ містить літеру 0.",
                },
                feedback: {
                  fr: "∅ est l'ensemble vide : il ne contient ni lettre, ni symbole, ni rien du tout.",
                  en: "∅ is the empty set: it contains neither letter, nor symbol, nor anything at all.",
                  uk: "∅ — це порожня множина: вона не містить ні літери, ні символу, нічого взагалі.",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "|∅| = 0 (langage sans aucun mot) alors que |{ε}| = 1 (langage composé d'un seul mot, de longueur 0).",
              en: "|∅| = 0 (a language with no word at all) whereas |{ε}| = 1 (a language consisting of a single word, of length 0).",
              uk: "|∅| = 0 (мова без жодного слова), тоді як |{ε}| = 1 (мова, що складається з одного слова довжини 0).",
            },
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Si |u| = 3 et |v| = 5, quelle est la longueur du mot u · v² ?",
              en: "If |u| = 3 and |v| = 5, what is the length of the word u · v²?",
              uk: "Якщо |u| = 3 та |v| = 5, яка довжина слова u · v²?",
            },
            options: [
              {
                text: "11",
                feedback: {
                  fr: "2 × 5 = 10, mais n'oublie pas d'ajouter |u| = 3 : la longueur totale est 13.",
                  en: "2 × 5 = 10, but do not forget to add |u| = 3: the total length is 13.",
                  uk: "2 × 5 = 10, але не забудь додати |u| = 3: загальна довжина 13.",
                },
              },
              { text: "13" },
              {
                text: "15",
                feedback: {
                  fr: "15 = 3 × 5 : tu as multiplié les longueurs alors qu'elles s'additionnent.",
                  en: "15 = 3 × 5: you multiplied the lengths whereas they add up.",
                  uk: "15 = 3 × 5: ти перемножив довжини, тоді як вони додаються.",
                },
              },
              {
                text: "30",
                feedback: {
                  fr: "Les longueurs s'additionnent, elles ne se multiplient jamais : |uv| = |u| + |v|.",
                  en: "Lengths add up, they are never multiplied: |uv| = |u| + |v|.",
                  uk: "Довжини додаються, вони ніколи не множаться: |uv| = |u| + |v|.",
                },
              },
            ],
            answerIndex: 1,
            solution: "|u · v²| = |u| + 2|v| = 3 + 2 × 5 = 13.",
          },
        ],
      },
      {
        title: { fr: "Section C : Textes à trous", en: "Section C: Fill-in-the-Blank", uk: "Розділ C: Тексти з пропусками" },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "L'ensemble de tous les mots non vides sur un alphabet Σ est noté ________.",
              en: "The set of all non-empty words over an alphabet Σ is denoted ________.",
              uk: "Множину всіх непорожніх слів над алфавітом Σ позначають ________.",
            },
            blanks: [
              {
                accepted: ["Σ+", "Σ +", "sigma+"],
                mistakes: [
                  {
                    match: ["Σ*", "Σ *", "sigma*"],
                    feedback: {
                      fr: "Σ* contient aussi le mot vide ε — la question demande les mots NON vides.",
                      en: "Σ* also contains the empty word ε — the question asks for the NON-empty words.",
                      uk: "Σ* також містить порожнє слово ε — питання стосується НЕпорожніх слів.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponse : Σ+ (soit Σ* privé du mot vide : Σ+ = Σ* ∖ {ε}).",
              en: "Answer: Σ+ (that is, Σ* deprived of the empty word: Σ+ = Σ* ∖ {ε}).",
              uk: "Відповідь: Σ+ (тобто Σ* без порожнього слова: Σ+ = Σ* ∖ {ε}).",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "L'élément neutre pour l'opération de concaténation de mots est ________.",
              en: "The identity element for the operation of word concatenation is ________.",
              uk: "Нейтральний елемент для операції конкатенації слів — це ________.",
            },
            blanks: [
              {
                accepted: [
                  "ε",
                  "epsilon",
                  "mot vide",
                  "le mot vide",
                  "empty word",
                  "the empty word",
                  "empty string",
                ],
                mistakes: [
                  {
                    match: ["∅", "emptyset", "langage vide", "empty language"],
                    feedback: {
                      fr: "∅ est le langage vide, pas un élément neutre : le neutre doit laisser le mot inchangé (ε · w = w).",
                      en: "∅ is the empty language, not an identity element: the identity must leave the word unchanged (ε · w = w).",
                      uk: "∅ — це порожня мова, а не нейтральний елемент: нейтральний елемент має залишати слово незмінним (ε · w = w).",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponse : le mot vide ε, car ε · w = w · ε = w.",
              en: "Answer: the empty word ε, since ε · w = w · ε = w.",
              uk: "Відповідь: порожнє слово ε, оскільки ε · w = w · ε = w.",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "La fermeture de Kleene d'un langage L, notée L*, contient toujours au moins le mot ________.",
              en: "The Kleene closure of a language L, denoted L*, always contains at least the word ________.",
              uk: "Замикання Кліні мови L, позначене L*, завжди містить щонайменше слово ________.",
            },
            blanks: [
              {
                accepted: [
                  "ε",
                  "epsilon",
                  "mot vide",
                  "le mot vide",
                  "empty word",
                  "the empty word",
                  "empty string",
                ],
                mistakes: [
                  {
                    match: ["∅", "emptyset", "langage vide", "empty language"],
                    feedback: {
                      fr: "Même si L est vide, L* contient toujours L⁰ = {ε} : le mot vide y figure obligatoirement.",
                      en: "Even if L is empty, L* always contains L⁰ = {ε}: the empty word necessarily appears in it.",
                      uk: "Навіть якщо L порожня, L* завжди містить L⁰ = {ε}: порожнє слово обов'язково входить до неї.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponse : le mot vide ε, car L* contient L⁰ = {ε}.",
              en: "Answer: the empty word ε, since L* contains L⁰ = {ε}.",
              uk: "Відповідь: порожнє слово ε, оскільки L* містить L⁰ = {ε}.",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "Un sous-ensemble L de Σ* est appelé un ________.",
              en: "A subset L of Σ* is called a ________.",
              uk: "Підмножина L множини Σ* називається ________.",
            },
            blanks: [
              {
                accepted: ["langage", "language"],
                mistakes: [],
              },
            ],
            solution: {
              fr: "Réponse : un langage (L ⊆ Σ* est la définition même).",
              en: "Answer: a language (L ⊆ Σ* is the very definition).",
              uk: "Відповідь: мова (L ⊆ Σ* — це саме визначення).",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section D : Exercices de Type Examen (Style PDF)",
          en: "Section D: Exam-Style Exercises (PDF Style)",
          uk: "Розділ D: Вправи екзаменаційного типу (стиль PDF)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Soient les langages L₁ = {a, aa} et L₂ = {ε, b, bb} sur l'alphabet Σ = {a, b}.",
              en: "Let the languages L₁ = {a, aa} and L₂ = {ε, b, bb} be given over the alphabet Σ = {a, b}.",
              uk: "Нехай мови L₁ = {a, aa} та L₂ = {ε, b, bb} задано над алфавітом Σ = {a, b}.",
            },
            details: [
              {
                fr: "Donnez les ensembles représentant L₁ · L₂ et L₂ · L₁.",
                en: "Give the sets representing L₁ · L₂ and L₂ · L₁.",
                uk: "Наведіть множини, що представляють L₁ · L₂ та L₂ · L₁.",
              },
              { fr: "Calculez L₁².", en: "Compute L₁².", uk: "Обчисліть L₁²." },
              {
                fr: "Listez les mots de longueur inférieure ou égale à 2 présents dans L₁*.",
                en: "List the words of length less than or equal to 2 present in L₁*.",
                uk: "Перелічіть слова довжини, меншої або рівної 2, що входять до L₁*.",
              },
            ],
            solution: { fr: "Corrigé complet :", en: "Complete solution:", uk: "Повний розв'язок:" },
            solutionItems: [
              "L₁ · L₂ = {a, ab, abb, aa, aab, aabb}",
              "L₂ · L₁ = {a, aa, ba, baa, bba, bbaa}",
              "L₁² = {aa, aaa, aaaa}",
              {
                fr: "Mots de L₁* de longueur ≤ 2 : {ε, a, aa} (L⁰ = {ε}, L¹ = {a, aa}, L² n'apporte que aa).",
                en: "Words of L₁* of length ≤ 2: {ε, a, aa} (L⁰ = {ε}, L¹ = {a, aa}, L² only adds aa).",
                uk: "Слова з L₁* довжиною ≤ 2: {ε, a, aa} (L⁰ = {ε}, L¹ = {a, aa}, L² додає лише aa).",
              },
            ],
          },
          {
            kind: "open",
            prompt: { fr: "Soit Σ = {0, 1}.", en: "Let Σ = {0, 1}.", uk: "Нехай Σ = {0, 1}." },
            details: [
              {
                fr: "Décrivez en phrases simples le langage L = {w ∈ Σ* | w = 0u1 avec u ∈ Σ*}.",
                en: "Describe in simple sentences the language L = {w ∈ Σ* | w = 0u1 with u ∈ Σ*}.",
                uk: "Опишіть простими реченнями мову L = {w ∈ Σ* | w = 0u1, де u ∈ Σ*}.",
              },
              {
                fr: "Donnez tous les préfixes, suffixes et facteurs du mot w = 101.",
                en: "Give all the prefixes, suffixes, and factors of the word w = 101.",
                uk: "Наведіть усі префікси, суфікси та фактори слова w = 101.",
              },
            ],
            solution: { fr: "Corrigé complet :", en: "Complete solution:", uk: "Повний розв'язок:" },
            solutionItems: [
              {
                fr: "L est l'ensemble des mots binaires qui commencent par 0 et se terminent par 1.",
                en: "L is the set of binary words that begin with 0 and end with 1.",
                uk: "L — це множина двійкових слів, які починаються з 0 і закінчуються на 1.",
              },
              {
                fr: "Préfixes de 101 : ε, 1, 10, 101",
                en: "Prefixes of 101: ε, 1, 10, 101",
                uk: "Префікси 101: ε, 1, 10, 101",
              },
              {
                fr: "Suffixes de 101 : ε, 1, 01, 101",
                en: "Suffixes of 101: ε, 1, 01, 101",
                uk: "Суфікси 101: ε, 1, 01, 101",
              },
              {
                fr: "Facteurs de 101 : ε, 1, 0, 10, 01, 101",
                en: "Factors of 101: ε, 1, 0, 10, 01, 101",
                uk: "Фактори 101: ε, 1, 0, 10, 01, 101",
              },
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
    text: {
      fr: "5. Fiche Réflexe Examen : Modèles de Rédaction en Français",
      en: "5. Exam Quick-Reference Sheet: Answer-Writing Templates",
      uk: "5. Шпаргалка до іспиту: Шаблони написання відповідей",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Ces modèles pré-rédigés vous permettent de structurer immédiatement vos réponses le jour de l'examen.",
      en: "These pre-written templates allow you to structure your answers immediately on exam day.",
      uk: "Ці заздалегідь написані шаблони дозволяють вам одразу структурувати свої відповіді в день іспиту.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Modèle A : Opérations sur des langages (L₁ · L₂, L₁ ∪ L₂, etc.)",
      en: "Template A: Operations on languages (L₁ · L₂, L₁ ∪ L₂, etc.)",
      uk: "Шаблон A: Операції над мовами (L₁ · L₂, L₁ ∪ L₂ тощо)",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Intitulé type :** « Soient L₁ = {…} et L₂ = {…}. Déterminez l'ensemble L₁ · L₂. »",
      en: "**Typical wording:** \"Let L₁ = {…} and L₂ = {…}. Determine the set L₁ · L₂.\"",
      uk: "**Типове формулювання:** «Нехай L₁ = {…} та L₂ = {…}. Визначте множину L₁ · L₂.»",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Rédaction type à mémoriser :**",
      en: "**Model answer to memorize:**",
      uk: "**Зразок відповіді для запам'ятовування:**",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Rappel de la définition :** Par définition, la concaténation de deux langages L₁ et L₂ est donnée par L₁ · L₂ = {uv | u ∈ L₁ et v ∈ L₂}.",
          en: "**Recall of the definition:** By definition, the concatenation of two languages L₁ and L₂ is given by L₁ · L₂ = {uv | u ∈ L₁ and v ∈ L₂}.",
          uk: "**Нагадування визначення:** За визначенням, конкатенація двох мов L₁ та L₂ задається як L₁ · L₂ = {uv | u ∈ L₁ та v ∈ L₂}.",
        },
      },
      {
        text: {
          fr: "**Calcul explicite des combinaisons :** En prenant chaque élément u ∈ L₁ et en le combinant avec chaque élément v ∈ L₂, nous obtenons : pour u = …, …",
          en: "**Explicit computation of the combinations:** Taking each element u ∈ L₁ and combining it with each element v ∈ L₂, we obtain: for u = …, …",
          uk: "**Явне обчислення комбінацій:** Беручи кожен елемент u ∈ L₁ і комбінуючи його з кожним елементом v ∈ L₂, ми отримуємо: для u = …, …",
        },
      },
      {
        text: {
          fr: "**Conclusion :** En éliminant les doublons, nous obtenons l'ensemble final : L₁ · L₂ = {…}.",
          en: "**Conclusion:** Eliminating duplicates, we obtain the final set: L₁ · L₂ = {…}.",
          uk: "**Висновок:** Вилучивши дублікати, отримуємо кінцеву множину: L₁ · L₂ = {…}.",
        },
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Modèle B : Lister les préfixes, suffixes ou facteurs d'un mot",
      en: "Template B: Listing the prefixes, suffixes, or factors of a word",
      uk: "Шаблон B: Перелічення префіксів, суфіксів або факторів слова",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Intitulé type :** « Donnez l'ensemble des préfixes, suffixes et facteurs du mot w = … »",
      en: "**Typical wording:** \"Give the set of prefixes, suffixes, and factors of the word w = …\"",
      uk: "**Типове формулювання:** «Наведіть множину префіксів, суфіксів і факторів слова w = …»",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Rédaction type à mémoriser :** Soit le mot w = … défini sur l'alphabet Σ = {…}. Par définition :",
      en: "**Model answer to memorize:** Let the word w = … be defined over the alphabet Σ = {…}. By definition:",
      uk: "**Зразок відповіді для запам'ятовування:** Нехай слово w = … задано над алфавітом Σ = {…}. За визначенням:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Préfixes :** les mots u tels qu'il existe y ∈ Σ* avec w = uy. Préfixes(w) = {ε, …, w}",
          en: "**Prefixes:** the words u such that there exists y ∈ Σ* with w = uy. Prefixes(w) = {ε, …, w}",
          uk: "**Префікси:** слова u такі, що існує y ∈ Σ* з w = uy. Префікси(w) = {ε, …, w}",
        },
      },
      {
        text: {
          fr: "**Suffixes :** les mots v tels qu'il existe x ∈ Σ* avec w = xv. Suffixes(w) = {ε, …, w}",
          en: "**Suffixes:** the words v such that there exists x ∈ Σ* with w = xv. Suffixes(w) = {ε, …, w}",
          uk: "**Суфікси:** слова v такі, що існує x ∈ Σ* з w = xv. Суфікси(w) = {ε, …, w}",
        },
      },
      {
        text: {
          fr: "**Facteurs :** les sous-chaînes f telles qu'il existe x, y ∈ Σ* avec w = xfy. Facteurs(w) = {ε, …, w}",
          en: "**Factors:** the substrings f such that there exist x, y ∈ Σ* with w = xfy. Factors(w) = {ε, …, w}",
          uk: "**Фактори:** підрядки f такі, що існують x, y ∈ Σ* з w = xfy. Фактори(w) = {ε, …, w}",
        },
      },
    ],
  },
  {
    type: "quote",
    text: {
      fr: "Note : n'oubliez jamais d'inclure le mot vide ε dans chacune de ces trois listes.",
      en: "Note: never forget to include the empty word ε in each of these three lists.",
      uk: "Примітка: ніколи не забувайте включати порожнє слово ε в кожен із цих трьох списків.",
    },
  },
];

const chapterTwo: Block[] = [
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "Techniques et outils de preuve — Sections 2.1 à 2.3",
      en: "Proof Techniques and Tools — Sections 2.1 to 2.3",
      uk: "Техніки та інструменти доведення — розділи 2.1–2.3",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La maîtrise des démonstrations mathématiques est indispensable pour prouver les propriétés des langages formels. Voici les trois premières méthodes fondamentales du chapitre.",
      en: "Mastery of mathematical proofs is indispensable for proving the properties of formal languages. Here are the first three fundamental methods of the chapter.",
      uk: "Опанування математичних доведень є незамінним для доведення властивостей формальних мов. Ось перші три фундаментальні методи розділу.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2.1 Preuve par récurrence (ou par induction)", en: "2.1 Proof by Recurrence (or by Induction)", uk: "2.1 Доведення за рекурсією (або за індукцією)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Cette technique permet de prouver qu'une propriété mathématique, notée P(X), est vraie pour toute une famille d'objets ou pour tout nombre entier. Elle fonctionne comme des dominos qui tombent : on fait tomber le premier, et on prouve que chaque domino fait tomber le suivant.",
      en: "This technique allows proving that a mathematical property, denoted P(X), holds for a whole family of objects or for any integer. It works like falling dominoes: we knock over the first one, and we prove that each domino knocks over the next one.",
      uk: "Ця техніка дозволяє довести, що математична властивість, позначена P(X), є істинною для цілої родини об'єктів або для будь-якого цілого числа. Вона працює як доміно, що падають: ми штовхаємо перше, і доводимо, що кожне доміно штовхає наступне.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "La preuve se divise **obligatoirement** en deux étapes :",
      en: "The proof is **necessarily** divided into two steps:",
      uk: "Доведення **обов'язково** поділяється на два етапи:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Initialisation (ou base) :** On prouve que la propriété P(X) est vraie pour le plus petit cas possible (généralement n = 0 ou n = 1).",
          en: "**Initialization (or base):** We prove that the property P(X) holds for the smallest possible case (generally n = 0 or n = 1).",
          uk: "**Ініціалізація (або база):** Ми доводимо, що властивість P(X) істинна для найменшого можливого випадку (зазвичай n = 0 або n = 1).",
        },
      },
      {
        text: {
          fr: "**Hérédité :** On fait l'hypothèse que P(X) est vraie pour un rang donné (par exemple pour une taille n−1), et on utilise cette hypothèse pour prouver que la propriété reste vraie pour le rang suivant (la taille n).",
          en: "**Inductive step:** We assume that P(X) holds for a given rank (for example, for a size n−1), and we use this assumption to prove that the property still holds for the next rank (the size n).",
          uk: "**Індукційний крок:** Ми припускаємо, що P(X) істинна для даного рангу (наприклад, для розміру n−1), і використовуємо це припущення, щоб довести, що властивість залишається істинною для наступного рангу (розміру n).",
        },
      },
    ],
  },
  { type: "heading", level: 4, text: { fr: "La récurrence forte", en: "Strong Induction", uk: "Сильна індукція" } },
  {
    type: "paragraph",
    text: {
      fr: "Dans certains cas complexes, utiliser seulement le rang précédent (n−1) ne suffit pas. L'hérédité de la récurrence forte consiste à supposer que la propriété est vraie pour **tous** les rangs strictement inférieurs à n (tout X avec |X| < n), afin de prouver qu'elle est vraie pour n.",
      en: "In some complex cases, using only the previous rank (n−1) is not enough. The inductive step of strong induction consists of assuming that the property holds for **all** ranks strictly less than n (every X with |X| < n), in order to prove that it holds for n.",
      uk: "У деяких складних випадках використання лише попереднього рангу (n−1) недостатньо. Індукційний крок сильної індукції полягає в тому, щоб припустити, що властивість істинна для **всіх** рангів, строго менших за n (кожного X з |X| < n), щоб довести, що вона істинна для n.",
    },
  },
  { type: "heading", level: 3, text: { fr: "2.2 Preuve par l'absurde", en: "2.2 Proof by Contradiction", uk: "2.2 Доведення від супротивного" } },
  {
    type: "paragraph",
    text: {
      fr: "Cette approche est utilisée quand il est trop difficile de prouver directement qu'une propriété est vraie.",
      en: "This approach is used when it is too difficult to directly prove that a property holds.",
      uk: "Цей підхід використовується тоді, коли надто складно довести безпосередньо, що властивість є істинною.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Principe :** On commence par supposer l'inverse de ce que l'on veut prouver, c'est-à-dire que la propriété P est fausse.",
          en: "**Principle:** We begin by assuming the opposite of what we want to prove, namely that the property P is false.",
          uk: "**Принцип:** Ми починаємо з припущення протилежного тому, що хочемо довести, тобто що властивість P є хибною.",
        },
      },
      {
        text: {
          fr: "**Objectif :** On développe un raisonnement logique à partir de cette hypothèse fausse jusqu'à aboutir à une conséquence visiblement inexacte ou impossible (une **contradiction**).",
          en: "**Objective:** We develop a logical reasoning from this false assumption until we reach a visibly incorrect or impossible consequence (a **contradiction**).",
          uk: "**Мета:** Ми розвиваємо логічне міркування, виходячи з цього хибного припущення, доки не дійдемо до очевидно неправильного або неможливого наслідку (**суперечності**).",
        },
      },
      {
        text: {
          fr: "**Exemple du cours :** Pour prouver que √2 n'est pas un nombre rationnel, on suppose d'abord qu'il l'est (qu'il peut s'écrire sous forme de fraction m/n). Cela mène à une contradiction où m et n seraient tous les deux pairs, ce qui est impossible s'ils sont premiers entre eux.",
          en: "**Example from the course:** To prove that √2 is not a rational number, we first assume that it is (that it can be written as a fraction m/n). This leads to a contradiction where m and n would both be even, which is impossible if they are coprime.",
          uk: "**Приклад із курсу:** Щоб довести, що √2 не є раціональним числом, спочатку припускаємо, що воно ним є (що його можна записати у вигляді дробу m/n). Це призводить до суперечності, де m та n були б обидва парними, що неможливо, якщо вони взаємно прості.",
        },
      },
    ],
  },
  { type: "heading", level: 3, text: { fr: "2.3 Preuve par construction", en: "2.3 Proof by Construction", uk: "2.3 Доведення конструкцією" } },
  {
    type: "paragraph",
    text: {
      fr: "Contrairement aux preuves abstraites, cette méthode est très concrète. Elle sert à prouver qu'un objet mathématique spécifique **existe**.",
      en: "Unlike abstract proofs, this method is very concrete. It serves to prove that a specific mathematical object **exists**.",
      uk: "На відміну від абстрактних доведень, цей метод є дуже конкретним. Він слугує для доведення того, що конкретний математичний об'єкт **існує**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Méthode :** On prouve l'existence de l'objet en expliquant étape par étape comment le construire explicitement.",
          en: "**Method:** We prove the existence of the object by explaining step by step how to construct it explicitly.",
          uk: "**Метод:** Ми доводимо існування об'єкта, пояснюючи крок за кроком, як явно його сконструювати.",
        },
      },
      {
        text: {
          fr: "**Vérification :** Une fois la méthode de construction décrite, il est impératif de vérifier et de prouver que l'objet fini possède bien toutes les propriétés exigées par le problème.",
          en: "**Verification:** Once the construction method has been described, it is imperative to verify and prove that the finite object indeed possesses all the properties required by the problem.",
          uk: "**Перевірка:** Після опису методу побудови необхідно перевірити та довести, що кінцевий об'єкт справді володіє всіма властивостями, яких вимагає задача.",
        },
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "Exercices d'Entraînement (Sections 2.1 - 2.3)", en: "Practice Exercises (Sections 2.1 - 2.3)", uk: "Тренувальні вправи (розділи 2.1 - 2.3)" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Section A : Vrai ou Faux (Justifiez)", en: "Section A: True or False (Justify)", uk: "Розділ A: Правильно чи Хибно (Обґрунтуйте)" },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Dans une preuve par l'absurde, on suppose que la propriété à prouver est vraie dès le début.",
              en: "Statement: In a proof by contradiction, we assume from the start that the property to be proved is true.",
              uk: "Твердження: У доведенні від супротивного ми припускаємо, що властивість, яку потрібно довести, є істинною з самого початку.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Dans une preuve par l'absurde, on suppose au contraire que P est FAUSSE, puis on aboutit à une contradiction.",
              en: "**False.** In a proof by contradiction, we instead assume that P is FALSE, and then arrive at a contradiction.",
              uk: "**Хибно.** У доведенні від супротивного навпаки припускаємо, що P є ХИБНОЮ, а потім доходимо до суперечності.",
            },
            mistake: {
              fr: "Relis le principe : par l'absurde, on démarre en supposant exactement quoi ?",
              en: "Re-read the principle: in proof by contradiction, what exactly do we assume at the start?",
              uk: "Перечитай принцип: у доведенні від супротивного, що саме ми припускаємо на початку?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : L'initialisation d'une preuve par récurrence consiste à vérifier la propriété pour une petite taille.",
              en: "Statement: The initialization step of a proof by induction consists of checking the property for a small size.",
              uk: "Твердження: Ініціалізація доведення за індукцією полягає у перевірці властивості для малого розміру.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** L'initialisation (ou base) prouve P(X) pour le plus petit cas possible — par exemple n = 0 ou n = 1.",
              en: "**True.** The initialization (or base) proves P(X) for the smallest possible case — for example n = 0 or n = 1.",
              uk: "**Правильно.** Ініціалізація (або база) доводить P(X) для найменшого можливого випадку — наприклад, n = 0 або n = 1.",
            },
            mistake: {
              fr: "C'est la première des deux étapes obligatoires de la récurrence : que fait-on au tout début de la preuve ?",
              en: "This is the first of the two mandatory steps of induction: what do we do at the very beginning of the proof?",
              uk: "Це перший із двох обов'язкових етапів індукції: що ми робимо на самому початку доведення?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Pour prouver qu'un certain type de graphe existe, il suffit de donner les instructions précises pour le dessiner, puis vérifier qu'il est correct.",
              en: "Statement: To prove that a certain type of graph exists, it suffices to give the precise instructions for drawing it, and then check that it is correct.",
              uk: "Твердження: Щоб довести, що певний тип графа існує, достатньо дати точні інструкції, як його намалювати, а потім перевірити, що він правильний.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** C'est exactement la preuve par construction : on construit l'objet explicitement, puis on vérifie qu'il remplit bien toutes les propriétés exigées.",
              en: "**True.** This is exactly the proof by construction: we construct the object explicitly, then verify that it indeed satisfies all the required properties.",
              uk: "**Правильно.** Це саме доведення конструкцією: ми явно будуємо об'єкт, а потім перевіряємо, що він справді задовольняє всі необхідні властивості.",
            },
            mistake: {
              fr: "Cette méthode porte un nom dans le cours : on décrit comment fabriquer l'objet, puis on …",
              en: "This method has a name in the course: we describe how to build the object, and then we …",
              uk: "Цей метод має назву в курсі: ми описуємо, як побудувати об'єкт, а потім …",
            },
          },
        ],
      },
      {
        title: { fr: "Section B : Question à Choix Multiple (QCM)", en: "Section B: Multiple-Choice Question (MCQ)", uk: "Розділ B: Питання з множинним вибором (QCM)" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Quelle est la différence principale entre la récurrence simple et la récurrence forte ?",
              en: "What is the main difference between simple induction and strong induction?",
              uk: "Яка основна відмінність між простою індукцією та сильною індукцією?",
            },
            options: [
              {
                text: {
                  fr: "La récurrence forte n'a pas besoin d'étape d'initialisation.",
                  en: "Strong induction does not need an initialization step.",
                  uk: "Сильній індукції не потрібен етап ініціалізації.",
                },
                feedback: {
                  fr: "Toute preuve par récurrence commence obligatoirement par l'initialisation — forte ou non.",
                  en: "Every proof by induction must necessarily begin with the initialization — strong or not.",
                  uk: "Будь-яке доведення за індукцією обов'язково починається з ініціалізації — сильної чи ні.",
                },
              },
              {
                text: {
                  fr: "La récurrence forte suppose que la propriété est vraie pour tous les rangs inférieurs à n, et non seulement pour n−1.",
                  en: "Strong induction assumes that the property holds for all ranks below n, and not only for n−1.",
                  uk: "Сильна індукція припускає, що властивість істинна для всіх рангів, менших за n, а не лише для n−1.",
                },
              },
              {
                text: {
                  fr: "La récurrence simple est utilisée pour l'absurde.",
                  en: "Simple induction is used for proof by contradiction.",
                  uk: "Проста індукція використовується для доведення від супротивного.",
                },
                feedback: {
                  fr: "La récurrence et l'absurde sont deux techniques distinctes : la récurrence sert à prouver une propriété pour toute une famille de cas.",
                  en: "Induction and proof by contradiction are two distinct techniques: induction serves to prove a property for a whole family of cases.",
                  uk: "Індукція та доведення від супротивного — це дві різні техніки: індукція слугує для доведення властивості для цілої родини випадків.",
                },
              },
              {
                text: { fr: "Il n'y a aucune différence.", en: "There is no difference.", uk: "Жодної різниці немає." },
                feedback: {
                  fr: "La différence est dans l'hérédité : tous les rangs strictement inférieurs à n, contre seulement le rang n−1.",
                  en: "The difference lies in the inductive step: all ranks strictly below n, versus only rank n−1.",
                  uk: "Відмінність в індукційному кроці: усі ранги, строго менші за n, проти лише рангу n−1.",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "La récurrence forte suppose P vraie pour TOUS les rangs strictement inférieurs à n, alors que la simple ne suppose que le rang n−1.",
              en: "Strong induction assumes P holds for ALL ranks strictly below n, whereas simple induction assumes only rank n−1.",
              uk: "Сильна індукція припускає P істинною для ВСІХ рангів, строго менших за n, тоді як проста припускає лише ранг n−1.",
            },
          },
        ],
      },
      {
        title: { fr: "Section C : Texte à trous", en: "Section C: Fill in the Blanks", uk: "Розділ C: Текст із пропусками" },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Pour réaliser une preuve par construction, il faut élaborer une _________ pour créer l'objet en question. Ensuite, il est obligatoire de _________ qu'il satisfait toutes les propriétés requises.",
              en: "To carry out a proof by construction, one must develop a _________ to create the object in question. Then, it is mandatory to _________ that it satisfies all the required properties.",
              uk: "Щоб виконати доведення конструкцією, потрібно розробити _________ для створення відповідного об'єкта. Потім обов'язково _________, що він задовольняє всі необхідні властивості.",
            },
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
                  "method",
                  "manner",
                  "way",
                ],
                mistakes: [
                  {
                    match: ["vérification", "verification", "contrôle", "controle", "check", "control"],
                    feedback: {
                      fr: "On n'élabore pas une vérification pour créer l'objet : on décrit d'abord comment le construire, on vérifie ensuite.",
                      en: "We do not develop a verification to create the object: we first describe how to construct it, and verify afterwards.",
                      uk: "Ми не розробляємо перевірку, щоб створити об'єкт: спочатку описуємо, як його побудувати, а потім перевіряємо.",
                    },
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
                  "verify",
                  "check",
                  "prove",
                ],
                mistakes: [
                  {
                    match: ["décrire", "decrire", "expliquer", "montrer", "describe", "explain", "show"],
                    feedback: {
                      fr: "Décrire ne suffit pas : la règle impose de VÉRIFIER formellement que l'objet satisfait toutes les propriétés.",
                      en: "Describing is not enough: the rule requires formally VERIFYING that the object satisfies all the properties.",
                      uk: "Опису недостатньо: правило вимагає формально ПЕРЕВІРИТИ, що об'єкт задовольняє всі властивості.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponses : une méthode (de construction) · vérifier (que l'objet satisfait bien toutes les propriétés).",
              en: "Answers: a (construction) method · verify (that the object indeed satisfies all the properties).",
              uk: "Відповіді: метод (побудови) · перевірити (що об'єкт справді задовольняє всі властивості).",
            },
          },
        ],
      },
      {
        title: { fr: "Section D : Exercice de type Examen (Structurer une preuve)", en: "Section D: Exam-Style Exercise (Structuring a Proof)", uk: "Розділ D: Вправа екзаменаційного типу (Структурування доведення)" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Vous devez prouver par l'absurde que le langage L n'est pas régulier. Rédigez uniquement la **première phrase** de votre preuve.",
              en: "You must prove by contradiction that the language L is not regular. Write only the **first sentence** of your proof.",
              uk: "Ви повинні довести від супротивного, що мова L не є регулярною. Напишіть лише **перше речення** вашого доведення.",
            },
            solution: {
              fr: "Première phrase type : **« Supposons par l'absurde que le langage L soit régulier. »** La première phrase annonce toujours l'hypothèse de départ de l'absurde.",
              en: "Typical first sentence: **“Let us suppose, for the sake of contradiction, that the language L is regular.”** The first sentence always states the starting assumption of the proof by contradiction.",
              uk: "Типове перше речення: **«Припустимо від супротивного, що мова L є регулярною.»** Перше речення завжди озвучує початкове припущення доведення від супротивного.",
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
    text: { fr: "Fiche Réflexe Examen : Modèle de Rédaction", en: "Exam Quick-Reference Sheet: Writing Template", uk: "Експрес-пам’ятка до іспиту: зразок оформлення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "La preuve par récurrence est l'une des techniques les plus demandées à l'examen. Si vous avez une question du type : « Prouvez par récurrence que pour tout n ≥ 1, la propriété P(n) est vraie. »",
      en: "Proof by induction is one of the techniques most often required on the exam. If you have a question of the form: “Prove by induction that for all n ≥ 1, the property P(n) holds.”",
      uk: "Доведення методом математичної індукції — одна з найзапитуваніших технік на іспиті. Якщо вам трапляється питання на кшталт: «Доведіть методом індукції, що для всіх n ≥ 1 властивість P(n) істинна.»",
    },
  },
  {
    type: "paragraph",
    text: { fr: "**Utilisez ce modèle de réponse strict à mémoriser :**", en: "**Use this strict answer template to memorize:**", uk: "**Використовуйте цей строгий зразок відповіді, який треба запам’ятати:**" },
  },
  {
    type: "quote",
    text: { fr: "**Nous allons procéder par récurrence sur l'entier n.**", en: "**We shall proceed by induction on the integer n.**", uk: "**Ми проведемо доведення методом індукції за цілим n.**" },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: { fr: "**Initialisation (Base de la récurrence) :**", en: "**Initialization (Base of the induction):**", uk: "**База індукції (Початковий крок):**" },
        children: [
          { fr: "Pour n = 1 (ou la plus petite valeur demandée).", en: "For n = 1 (or the smallest requested value).", uk: "Для n = 1 (або найменшого потрібного значення)." },
          { fr: "Calcul/Démonstration : [Montrez le calcul pour n = 1].", en: "Calculation/Proof: [Show the calculation for n = 1].", uk: "Обчислення/Доведення: [Покажіть обчислення для n = 1]." },
          { fr: "Conclusion de l'étape : La propriété est donc justifiée pour n = 1.", en: "Conclusion of the step: The property is therefore established for n = 1.", uk: "Висновок кроку: отже, властивість обґрунтовано для n = 1." },
        ],
      },
      {
        text: { fr: "**Hérédité :**", en: "**Inductive step:**", uk: "**Індукційний перехід:**" },
        children: [
          {
            fr: "Hypothèse : Supposons que la propriété est vraie pour un certain rang n−1, c'est-à-dire : [Écrire la formule mathématique pour n−1].",
            en: "Hypothesis: Let us suppose that the property holds for a certain rank n−1, that is: [Write the mathematical formula for n−1].",
            uk: "Гіпотеза: припустимо, що властивість істинна для деякого рангу n−1, тобто: [Запишіть математичну формулу для n−1].",
          },
          { fr: "Objectif : Prouvons qu'elle est vraie au rang n.", en: "Objective: Let us prove that it holds at rank n.", uk: "Мета: доведімо, що вона істинна для рангу n." },
          {
            fr: "Démonstration : [Faire les manipulations mathématiques en utilisant obligatoirement l'hypothèse posée juste au-dessus].",
            en: "Proof: [Perform the mathematical manipulations, necessarily using the assumption stated just above].",
            uk: "Доведення: [Виконайте математичні перетворення, обов’язково використавши гіпотезу, висловлену безпосередньо вище].",
          },
        ],
      },
      {
        text: { fr: "**Conclusion :**", en: "**Conclusion:**", uk: "**Висновок:**" },
        children: [
          {
            fr: "Par conséquent, d'après le principe de récurrence, la propriété est vraie pour tout n.",
            en: "Consequently, by the principle of induction, the property holds for all n.",
            uk: "Отже, за принципом математичної індукції властивість істинна для всіх n.",
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
    text: {
      fr: "Techniques et outils de preuve — Sections 2.4 à 2.7",
      en: "Proof Techniques and Tools — Sections 2.4 to 2.7",
      uk: "Техніки та інструменти доведення — розділи 2.4–2.7",
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2.4 Principe des tiroirs (Principe des nids de pigeon)", en: "2.4 Pigeonhole Principle (Drawer Principle)", uk: "2.4 Принцип шухляд (принцип Діріхле)" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Le concept :** Si vous avez un nombre défini d'objets à placer dans un nombre fini de compartiments, et que le nombre d'objets est supérieur au nombre de compartiments, vous ne pouvez pas les répartir uniformément. Il y aura obligatoirement au moins un compartiment qui devra contenir plusieurs objets.",
          en: "**The concept:** If you have a defined number of objects to place into a finite number of compartments, and the number of objects exceeds the number of compartments, you cannot distribute them evenly. There must necessarily be at least one compartment that holds several objects.",
          uk: "**Концепція:** Якщо у вас є визначена кількість об’єктів, які треба розмістити у скінченній кількості комірок, і кількість об’єктів перевищує кількість комірок, то розподілити їх рівномірно неможливо. Обов’язково буде принаймні одна комірка, яка міститиме кілька об’єктів.",
        },
      },
      {
        text: {
          fr: "**Utilité :** Ce principe est indispensable pour résoudre des problèmes qui impliquent la distribution ou l'affectation d'objets. Vous l'utiliserez massivement dans le Chapitre 3 lors des démonstrations liées au Lemme de pompage pour les automates.",
          en: "**Utility:** This principle is indispensable for solving problems that involve the distribution or assignment of objects. You will use it extensively in Chapter 3 during the proofs related to the Pumping Lemma for automata.",
          uk: "**Корисність:** Цей принцип незамінний для розв’язування задач, пов’язаних із розподілом чи призначенням об’єктів. Ви масово використовуватимете його в розділі 3 під час доведень, пов’язаних із лемою про накачування для автоматів.",
        },
      },
      {
        text: {
          fr: "**Exemple classique :** Si l'on réunit un groupe d'au moins 367 personnes, il est mathématiquement certain qu'au moins deux personnes partagent la même date d'anniversaire, car il n'y a que 366 dates possibles (les compartiments) dans une année bissextile.",
          en: "**Classic example:** If you gather a group of at least 367 people, it is mathematically certain that at least two people share the same birthday, since there are only 366 possible dates (the compartments) in a leap year.",
          uk: "**Класичний приклад:** Якщо зібрати групу з принаймні 367 осіб, математично достовірно, що принаймні двоє людей мають однакову дату народження, адже у високосному році є лише 366 можливих дат (комірок).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "principe des tiroirs",
      en: "pigeonhole principle",
      uk: "принцип шухляд",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Il n'y a que 12 mois possibles. Combien de personnes suffisent pour garantir, par le principe des tiroirs, qu'au moins deux ont le même mois de naissance ?",
        en: "There are only 12 possible months. How many people are enough to guarantee, by the pigeonhole principle, that at least two share the same birth month?",
        uk: "Є лише 12 можливих місяців. Скільки людей достатньо, щоб за принципом шухляд гарантувати, що принаймні двоє народилися в один місяць?",
      },
      options: [
        { text: { fr: "12", en: "12", uk: "12" }, feedback: { fr: "Avec 12 personnes, on peut encore en placer une par mois (12 compartiments) sans doublon.", en: "With 12 people, one can still place one per month (12 compartments) with no repeat.", uk: "З 12 людьми ще можна розмістити по одній на місяць (12 комірок) без повторів." } },
        { text: { fr: "13", en: "13", uk: "13" } },
        { text: { fr: "24", en: "24", uk: "24" }, feedback: { fr: "Bien plus que nécessaire : 13 suffisent déjà.", en: "Far more than needed: 13 already suffice.", uk: "Набагато більше, ніж потрібно: 13 уже достатньо." } },
        { text: { fr: "366", en: "366", uk: "366" }, feedback: { fr: "366 est le nombre de jours, pas de mois. Ici il n'y a que 12 compartiments.", en: "366 is the number of days, not months. Here there are only 12 compartments.", uk: "366 — це кількість днів, а не місяців. Тут є лише 12 комірок." } },
      ],
      answerIndex: 1,
      solution: {
        fr: "Dès que le nombre d'objets dépasse le nombre de compartiments, il y a collision : **12 + 1 = 13** personnes suffisent pour forcer deux mois identiques.",
        en: "As soon as the number of objects exceeds the number of compartments, a collision occurs: **12 + 1 = 13** people are enough to force two identical months.",
        uk: "Щойно кількість об’єктів перевищує кількість комірок, виникає колізія: **12 + 1 = 13** осіб достатньо, щоб змусити два місяці збігтися.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2.5 L'équivalence logique : « Si et seulement si » (ssi)", en: "2.5 Logical Equivalence: “If and Only If” (iff)", uk: "2.5 Логічна еквівалентність: «тоді й лише тоді» (ssi)" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Le concept :** L'expression « si et seulement si » sert à établir une relation de correspondance totale (équivalence) entre deux propositions.",
          en: "**The concept:** The expression “if and only if” serves to establish a relation of complete correspondence (equivalence) between two propositions.",
          uk: "**Концепція:** Вираз «тоді й лише тоді» слугує для встановлення відношення повної відповідності (еквівалентності) між двома твердженнями.",
        },
      },
      {
        text: {
          fr: "**La méthode de preuve :** Pour démontrer que les deux propositions sont équivalentes, il faut obligatoirement montrer que l'une implique l'autre et vice versa.",
          en: "**The proof method:** To show that the two propositions are equivalent, one must necessarily demonstrate that each implies the other, and vice versa.",
          uk: "**Метод доведення:** Щоб довести еквівалентність двох тверджень, обов’язково потрібно показати, що одне з них випливає з іншого і навпаки.",
        },
      },
    ],
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: { fr: "**L'implication directe (⇒) :** Prouver que « si X alors Y ».", en: "**The direct implication (⇒):** Prove that “if X then Y”.", uk: "**Пряма імплікація (⇒):** Довести, що «якщо X, то Y»." } },
      { text: { fr: "**L'implication réciproque (⇐) :** Prouver que « si Y alors X ».", en: "**The converse implication (⇐):** Prove that “if Y then X”.", uk: "**Обернена імплікація (⇐):** Довести, що «якщо Y, то X»." } },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**La contraposée :** Parfois, prouver « si X alors Y » est trop complexe. On peut utiliser une forme équivalente appelée la contraposée, qui consiste à prouver que « si non Y alors non X ».",
      en: "**The contrapositive:** Sometimes, proving “if X then Y” is too complex. One may use an equivalent form called the contrapositive, which consists of proving that “if not Y then not X”.",
      uk: "**Контрапозиція:** Іноді довести «якщо X, то Y» надто складно. Можна скористатися еквівалентною формою, яка називається контрапозицією і полягає в доведенні того, що «якщо не Y, то не X».",
    },
  },
  {
    type: "checkpoint",
    concept: {
      fr: "contraposée",
      en: "contrapositive",
      uk: "контрапозиція",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Pour prouver « X ⇒ Y », par quelle forme équivalente peut-on remplacer la démonstration ?",
        en: "To prove “X ⇒ Y”, by which equivalent form may the proof be replaced?",
        uk: "Щоб довести «X ⇒ Y», якою еквівалентною формою можна замінити доведення?",
      },
      options: [
        { text: { fr: "Y ⇒ X", en: "Y ⇒ X", uk: "Y ⇒ X" }, feedback: { fr: "C'est la réciproque : elle n'est pas équivalente à X ⇒ Y.", en: "That is the converse: it is not equivalent to X ⇒ Y.", uk: "Це обернене твердження: воно не еквівалентне X ⇒ Y." } },
        { text: { fr: "non Y ⇒ non X", en: "not Y ⇒ not X", uk: "не Y ⇒ не X" } },
        { text: { fr: "non X ⇒ non Y", en: "not X ⇒ not Y", uk: "не X ⇒ не Y" }, feedback: { fr: "C'est la négation de l'implication (l'inverse), pas sa contraposée.", en: "That is the inverse, not the contrapositive.", uk: "Це обернення імплікації, а не її контрапозиція." } },
        { text: { fr: "X ⇔ Y", en: "X ⇔ Y", uk: "X ⇔ Y" }, feedback: { fr: "L'équivalence est plus forte : elle exige aussi la réciproque.", en: "Equivalence is stronger: it also requires the converse.", uk: "Еквівалентність сильніша: вона вимагає також оберненого твердження." } },
      ],
      answerIndex: 1,
      solution: {
        fr: "« X ⇒ Y » est logiquement équivalent à sa **contraposée « non Y ⇒ non X »**. Prouver l'une revient à prouver l'autre.",
        en: "“X ⇒ Y” is logically equivalent to its **contrapositive “not Y ⇒ not X”**. Proving one proves the other.",
        uk: "«X ⇒ Y» логічно еквівалентне своїй **контрапозиції «не Y ⇒ не X»**. Довести одне означає довести інше.",
      },
    },
  },
  { type: "heading", level: 3, text: { fr: "2.6 Les Contre-exemples", en: "2.6 Counterexamples", uk: "2.6 Контрприклади" } },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Le concept :** Un contre-exemple est un cas spécifique utilisé pour démontrer qu'une propriété supposée générale est visiblement inexacte.",
          en: "**The concept:** A counterexample is a specific case used to demonstrate that a supposedly general property is visibly incorrect.",
          uk: "**Концепція:** Контрприклад — це конкретний випадок, який використовують, щоб показати, що властивість, яка вважалася загальною, явно неправильна.",
        },
      },
      {
        text: { fr: "**Règle d'or de la logique :**", en: "**Golden rule of logic:**", uk: "**Золоте правило логіки:**" },
        children: [
          {
            fr: "Un seul contre-exemple est **suffisant** pour réfuter (détruire) une proposition et prouver qu'elle est fausse.",
            en: "A single counterexample is **sufficient** to refute (destroy) a proposition and prove that it is false.",
            uk: "Одного-єдиного контрприкладу **достатньо**, щоб спростувати (зруйнувати) твердження й довести, що воно хибне.",
          },
          {
            fr: "À l'inverse, donner un ou plusieurs exemples ne suffit **jamais** pour affirmer qu'une proposition est vraie pour tous les cas ; cela nécessite une preuve formelle qui ne se base pas sur un cas particulier.",
            en: "Conversely, giving one or more examples is **never** enough to assert that a proposition holds in all cases; this requires a formal proof that does not rest on a particular case.",
            uk: "Навпаки, наведення одного чи кількох прикладів **ніколи** не достатньо, щоб стверджувати, що твердження істинне для всіх випадків; для цього потрібне формальне доведення, яке не спирається на окремий випадок.",
          },
        ],
      },
      {
        text: {
          fr: "**Exemple :** Pour prouver que la proposition « si un graphe est connexe, alors il est nécessairement hamiltonien » est fausse, il suffit de dessiner et de présenter un unique graphe connexe qui ne contient pas de cycle hamiltonien.",
          en: "**Example:** To prove that the proposition “if a graph is connected, then it is necessarily Hamiltonian” is false, it suffices to draw and present a single connected graph that contains no Hamiltonian cycle.",
          uk: "**Приклад:** Щоб довести, що твердження «якщо граф зв’язний, то він обов’язково гамільтонів» хибне, достатньо намалювати й навести єдиний зв’язний граф, який не містить гамільтонового циклу.",
        },
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "Exercices d'Entraînement (Sections 2.4 - 2.7)", en: "Practice Exercises (Sections 2.4 - 2.7)", uk: "Тренувальні вправи (розділи 2.4 - 2.7)" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Section A : Vrai ou Faux (Justifiez)", en: "Section A: True or False (Justify)", uk: "Розділ A: Правда чи хиба (обґрунтуйте)" },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Trouver un exemple où une formule mathématique fonctionne est suffisant pour valider cette proposition.",
              en: "Statement: Finding an example where a mathematical formula works is sufficient to validate this proposition.",
              uk: "Твердження: Знайти приклад, де математична формула працює, достатньо, щоб підтвердити це твердження.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Un seul contre-exemple suffit à réfuter, mais des exemples qui fonctionnent ne prouvent jamais la proposition pour tous les cas : il faut une preuve formelle.",
              en: "**False.** A single counterexample suffices to refute, but working examples never prove the proposition in all cases: a formal proof is required.",
              uk: "**Хиба.** Одного контрприкладу достатньо, щоб спростувати, але приклади, які працюють, ніколи не доводять твердження для всіх випадків: потрібне формальне доведення.",
            },
            mistake: {
              fr: "Rappelle-toi la règle d'or : un contre-exemple détruit, mais des exemples qui marchent construisent-ils une preuve ?",
              en: "Remember the golden rule: a counterexample destroys, but do working examples build a proof?",
              uk: "Пригадай золоте правило: контрприклад руйнує, але чи будують приклади, які працюють, доведення?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Pour prouver qu'un langage L est régulier si et seulement s'il est décrit par une expression régulière, je dois faire deux démonstrations distinctes.",
              en: "Statement: To prove that a language L is regular if and only if it is described by a regular expression, I must give two distinct proofs.",
              uk: "Твердження: Щоб довести, що мова L є регулярною тоді й лише тоді, коли вона описується регулярним виразом, я маю зробити два окремі доведення.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** « Si et seulement si » = double implication : il faut prouver ⇒ et ⇐, donc bien deux démonstrations.",
              en: "**True.** “If and only if” = double implication: one must prove ⇒ and ⇐, hence indeed two proofs.",
              uk: "**Правда.** «Тоді й лише тоді» = подвійна імплікація: потрібно довести ⇒ і ⇐, отже, справді два доведення.",
            },
            mistake: {
              fr: "Que cache le « ssi » en logique — une ou deux implications ?",
              en: "What does “iff” hide in logic — one or two implications?",
              uk: "Що приховує «ssi» у логіці — одну чи дві імплікації?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Si j'ai 5 lettres à ranger dans 4 boîtes, le principe des tiroirs garantit qu'une boîte aura au moins deux lettres.",
              en: "Statement: If I have 5 letters to place into 4 boxes, the pigeonhole principle guarantees that one box will have at least two letters.",
              uk: "Твердження: Якщо я маю 5 листів, які треба розкласти в 4 коробки, принцип шухляд гарантує, що в одній коробці буде принаймні два листи.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** 5 objets > 4 compartiments : le principe des tiroirs garantit qu'au moins un compartiment contient ≥ 2 lettres.",
              en: "**True.** 5 objects > 4 compartments: the pigeonhole principle guarantees that at least one compartment contains ≥ 2 letters.",
              uk: "**Правда.** 5 об’єктів > 4 комірки: принцип шухляд гарантує, що принаймні одна комірка містить ≥ 2 листи.",
            },
            mistake: {
              fr: "Compare les nombres : combien d'objets places-tu et combien de compartiments as-tu ?",
              en: "Compare the numbers: how many objects are you placing and how many compartments do you have?",
              uk: "Порівняй числа: скільки об’єктів ти розміщуєш і скільки в тебе комірок?",
            },
          },
        ],
      },
      {
        title: { fr: "Section B : Question à Choix Multiple (QCM)", en: "Section B: Multiple-Choice Question (MCQ)", uk: "Розділ B: Питання з вибором однієї відповіді (QCM)" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Quelle est la contraposée exacte de la proposition « S'il est 8h00 (X), alors le train part (Y) » ?",
              en: "What is the exact contrapositive of the proposition “If it is 8:00 (X), then the train departs (Y)”?",
              uk: "Яка точна контрапозиція твердження «Якщо зараз 8:00 (X), то потяг відправляється (Y)»?",
            },
            options: [
              {
                text: { fr: "Si le train part, alors il est 8h00.", en: "If the train departs, then it is 8:00.", uk: "Якщо потяг відправляється, то зараз 8:00." },
                feedback: {
                  fr: "C'est la réciproque (Y ⇒ X), pas la contraposée (¬Y ⇒ ¬X).",
                  en: "That is the converse (Y ⇒ X), not the contrapositive (¬Y ⇒ ¬X).",
                  uk: "Це обернене твердження (Y ⇒ X), а не контрапозиція (¬Y ⇒ ¬X).",
                },
              },
              {
                text: { fr: "S'il n'est pas 8h00, le train ne part pas.", en: "If it is not 8:00, the train does not depart.", uk: "Якщо зараз не 8:00, потяг не відправляється." },
                feedback: {
                  fr: "C'est la négation inverse (¬X ⇒ ¬Y) : elle n'est pas équivalente à X ⇒ Y.",
                  en: "That is the inverse negation (¬X ⇒ ¬Y): it is not equivalent to X ⇒ Y.",
                  uk: "Це обернене заперечення (¬X ⇒ ¬Y): воно не еквівалентне X ⇒ Y.",
                },
              },
              { text: { fr: "Si le train ne part pas, alors il n'est pas 8h00.", en: "If the train does not depart, then it is not 8:00.", uk: "Якщо потяг не відправляється, то зараз не 8:00." } },
              {
                text: { fr: "Le train part si et seulement s'il est 8h00.", en: "The train departs if and only if it is 8:00.", uk: "Потяг відправляється тоді й лише тоді, коли зараз 8:00." },
                feedback: {
                  fr: "L'implication X ⇒ Y ne devient pas une équivalence : le train pourrait très bien partir à d'autres heures.",
                  en: "The implication X ⇒ Y does not become an equivalence: the train could very well depart at other times.",
                  uk: "Імплікація X ⇒ Y не стає еквівалентністю: потяг цілком міг би відправлятися і в інші години.",
                },
              },
            ],
            answerIndex: 2,
            solution: {
              fr: "La contraposée de « si X alors Y » est « si non Y alors non X » : si le train ne part pas, alors il n'est pas 8h00.",
              en: "The contrapositive of “if X then Y” is “if not Y then not X”: if the train does not depart, then it is not 8:00.",
              uk: "Контрапозиція «якщо X, то Y» — це «якщо не Y, то не X»: якщо потяг не відправляється, то зараз не 8:00.",
            },
          },
        ],
      },
      {
        title: { fr: "Section C : Texte à trous", en: "Section C: Fill in the Blanks", uk: "Розділ C: Текст із пропусками" },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Si le nombre d'objets est supérieur au nombre de __________, alors il y aura au moins un compartiment qui devra contenir __________ objets. Ce concept mathématique s'appelle le principe des __________.",
              en: "If the number of objects exceeds the number of __________, then there will be at least one compartment that must contain __________ objects. This mathematical concept is called the __________ principle.",
              uk: "Якщо кількість об’єктів перевищує кількість __________, то буде принаймні одна комірка, яка має містити __________ об’єктів. Ця математична концепція називається принципом __________.",
            },
            blanks: [
              {
                accepted: [
                  "compartiments",
                  "compartiment",
                  "boîtes",
                  "boites",
                  "cases",
                  "tiroirs",
                  "boxes",
                  "drawers",
                ],
                mistakes: [
                  {
                    match: ["objets", "pigeons", "pigeon", "objects"],
                    feedback: {
                      fr: "Ce sont les CASES qui limitent la répartition — les objets sont justement ceux que l'on range dedans.",
                      en: "It is the BOXES that limit the distribution — the objects are precisely what is being placed into them.",
                      uk: "Саме КОМІРКИ обмежують розподіл — об’єкти якраз те, що в них кладуть.",
                    },
                  },
                ],
              },
              {
                accepted: ["plusieurs", "deux ou plus", "au moins deux", "several", "two or more", "at least two"],
                mistakes: [],
              },
              {
                accepted: [
                  "tiroirs",
                  "tiroir",
                  "nids de pigeon",
                  "nidsdepigeon",
                  "pigeonhole",
                  "pigeonholes",
                ],
                mistakes: [
                  {
                    match: ["pigeon", "pigeons"],
                    feedback: {
                      fr: "Le nom complet est « principe des tiroirs » (ou nids de pigeon) — la réponse attendue est « tiroirs ».",
                      en: "The full name is the “pigeonhole principle” (or drawer principle) — the expected answer is “pigeonhole”.",
                      uk: "Повна назва — «принцип шухляд» (або принцип голубника) — очікувана відповідь — «шухляд».",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponses : compartiments · plusieurs · tiroirs.",
              en: "Answers: compartments · several · pigeonhole.",
              uk: "Відповіді: комірки · кілька · шухляд.",
            },
          },
        ],
      },
      {
        title: { fr: "Section D : Exercice de type Examen (Inspiré de l'Exercice 2.4 du PDF)", en: "Section D: Exam-Style Exercise (Based on Exercise 2.4 of the PDF)", uk: "Розділ D: Вправа у форматі іспиту (за мотивами вправи 2.4 з PDF)" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Soit un ensemble fini (non vide) de personnes. Dans ce groupe, chaque personne connaît au moins une autre personne de l'ensemble. En utilisant le principe des tiroirs, montrez qu'il y a au moins deux personnes dans l'ensemble qui ont exactement le même nombre de connaissances.",
              en: "Let there be a finite (non-empty) set of people. In this group, each person knows at least one other person from the set. Using the pigeonhole principle, show that there are at least two people in the set who have exactly the same number of acquaintances.",
              uk: "Нехай маємо скінченну (непорожню) множину людей. У цій групі кожна людина знає принаймні одну іншу людину з множини. Використовуючи принцип шухляд, доведіть, що в множині є принаймні дві людини з однаковою кількістю знайомих.",
            },
            details: [
              {
                fr: "Indication : Considérez les nombres minimum et maximum de connaissances comme étant vos « compartiments ».",
                en: "Hint: Consider the minimum and maximum numbers of acquaintances as your “compartments”.",
                uk: "Вказівка: Розгляньте мінімальну та максимальну кількість знайомих як ваші «комірки».",
              },
            ],
            solution: { fr: "Solution simplifiée :", en: "Simplified solution:", uk: "Спрощене розв’язання:" },
            solutionItems: [
              {
                fr: "S'il y a n personnes, le nombre de connaissances d'une personne va de 1 (elle connaît au moins quelqu'un) à n−1 (elle connaît tout le monde sauf elle-même).",
                en: "If there are n people, the number of acquaintances of a person ranges from 1 (they know at least someone) to n−1 (they know everyone except themselves).",
                uk: "Якщо є n людей, кількість знайомих однієї людини коливається від 1 (вона знає принаймні когось) до n−1 (вона знає всіх, крім себе).",
              },
              {
                fr: "Il y a donc n−1 valeurs possibles pour le nombre de connaissances — ce sont nos compartiments.",
                en: "There are therefore n−1 possible values for the number of acquaintances — these are our compartments.",
                uk: "Отже, для кількості знайомих є n−1 можливих значень — це наші комірки.",
              },
              {
                fr: "Comme il y a n personnes (les objets) à placer dans n−1 compartiments, le principe des tiroirs garantit qu'au moins deux personnes partagent le même nombre de connaissances.",
                en: "Since there are n people (the objects) to place into n−1 compartments, the pigeonhole principle guarantees that at least two people share the same number of acquaintances.",
                uk: "Оскільки є n людей (об’єктів), яких треба розмістити в n−1 комірок, принцип шухляд гарантує, що принаймні двоє людей мають однакову кількість знайомих.",
              },
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
    text: { fr: "Fiche Réflexe Examen : Modèle de Rédaction", en: "Exam Quick-Reference Sheet: Writing Template", uk: "Експрес-пам’ятка до іспиту: зразок оформлення" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Si vous avez une question d'examen du type :** « Prouvez que la propriété A est vraie si et seulement si la propriété B est vraie. »",
      en: "**If you have an exam question of the form:** “Prove that property A holds if and only if property B holds.”",
      uk: "**Якщо вам трапляється екзаменаційне питання на кшталт:** «Доведіть, що властивість A істинна тоді й лише тоді, коли істинна властивість B.»",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Utilisez ce modèle de réponse structuré pour sécuriser vos points :**",
      en: "**Use this structured answer template to secure your points:**",
      uk: "**Використовуйте цей структурований зразок відповіді, щоб гарантовано заробити бали:**",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Pour démontrer cette équivalence, nous allons procéder par double implication.**",
      en: "**To demonstrate this equivalence, we shall proceed by double implication.**",
      uk: "**Щоб довести цю еквівалентність, ми проведемо доведення через подвійну імплікацію.**",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: { fr: "**Preuve de l'implication directe (⇒) :**", en: "**Proof of the direct implication (⇒):**", uk: "**Доведення прямої імплікації (⇒):**" },
        children: [
          {
            fr: "Hypothèse : Supposons que la propriété A est vraie.",
            en: "Hypothesis: Let us suppose that property A holds.",
            uk: "Гіпотеза: припустімо, що властивість A є істинною.",
          },
          {
            fr: "Démonstration : [Insérez ici votre raisonnement logique en partant de A].",
            en: "Proof: [Insert here your logical reasoning starting from A].",
            uk: "Доведення: [вставте тут свої логічні міркування, виходячи з A].",
          },
          {
            fr: "Conclusion intermédiaire : On en déduit donc que la propriété B est satisfaite.",
            en: "Intermediate conclusion: We therefore deduce that property B is satisfied.",
            uk: "Проміжний висновок: отже, з цього випливає, що властивість B виконується.",
          },
        ],
      },
      {
        text: { fr: "**Preuve de l'implication réciproque (⇐) :**", en: "**Proof of the converse implication (⇐):**", uk: "**Доведення оберненої імплікації (⇐):**" },
        children: [
          {
            fr: "Hypothèse : Supposons maintenant que la propriété B est vraie.",
            en: "Hypothesis: Let us now suppose that property B holds.",
            uk: "Гіпотеза: тепер припустімо, що властивість B є істинною.",
          },
          {
            fr: "Démonstration : [Insérez ici votre raisonnement logique en partant de B].",
            en: "Proof: [Insert here your logical reasoning starting from B].",
            uk: "Доведення: [вставте тут свої логічні міркування, виходячи з B].",
          },
          {
            fr: "Conclusion intermédiaire : On en déduit donc que la propriété A est satisfaite.",
            en: "Intermediate conclusion: We therefore deduce that property A is satisfied.",
            uk: "Проміжний висновок: отже, з цього випливає, що властивість A виконується.",
          },
        ],
      },
      {
        text: { fr: "**Conclusion finale :**", en: "**Final conclusion:**", uk: "**Остаточний висновок:**" },
        children: [
          {
            fr: "L'implication ayant été démontrée dans les deux sens, les propositions A et B sont équivalentes.",
            en: "Since the implication has been demonstrated in both directions, propositions A and B are equivalent.",
            uk: "Оскільки імплікацію доведено в обох напрямках, твердження A і B є еквівалентними.",
          },
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
    text: {
      fr: "Langages réguliers — Partie 1 : Les automates à états finis",
      en: "Regular Languages — Part 1: Finite Automata",
      uk: "Регулярні мови — частина 1: скінченні автомати",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Les langages réguliers sont les plus simples des langages informatiques. Ils imposent une grande régularité car ils sont reconnus par des machines très simples appelées **automates à états finis**, qui ne possèdent qu'une mémoire finie.",
      en: "Regular languages are the simplest class of formal languages in computer science. They exhibit strong regularity, as they are recognized by very simple machines called **finite automata (automates à états finis)**, which have only finite memory.",
      uk: "Регулярні мови — найпростіші серед мов інформатики. Вони мають високу регулярність, оскільки їх розпізнають дуже прості машини, які називаються **скінченними автоматами**, що мають лише скінченну пам'ять.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "1. Qu'est-ce qu'un automate à états finis ?",
      en: "1. What is a finite automaton?",
      uk: "1. Що таке скінченний автомат?",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un automate à états finis est un modèle mathématique de calcul qui prend des décisions basées sur une séquence de symboles (un mot d'entrée).",
      en: "A finite automaton is a mathematical model of computation that makes decisions based on a sequence of symbols (an input word/string).",
      uk: "Скінченний автомат — це математична модель обчислень, яка ухвалює рішення на основі послідовності символів (вхідного слова).",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Le principe :** L'automate commence dans un « état initial ». À chaque fois qu'il lit un symbole du mot, il suit une « transition » (une flèche) pour passer à un nouvel état.",
          en: "**Principle:** The automaton starts in an \"initial state\". Each time it reads a symbol from the input word, it follows a \"transition\" (an arrow) to move to a new state.",
          uk: "**Принцип:** автомат починає роботу в «початковому стані». Щоразу, коли він читає символ слова, він виконує «перехід» (стрілку), щоб перейти до нового стану.",
        },
      },
      {
        text: {
          fr: "**L'acceptation :** Si, après avoir lu le tout dernier symbole du mot, l'automate se trouve dans un « état final » (ou état d'acceptation, dessiné avec un double cercle), le mot est accepté et considéré comme valide.",
          en: "**Acceptance:** If, after reading the very last symbol of the word, the automaton is in a \"final state\" (or accepting state, drawn as a double circle), the word is accepted and considered valid.",
          uk: "**Прийняття:** якщо після читання останнього символу слова автомат перебуває в «кінцевому стані» (або стані-прийнятті, позначеному подвійним колом), слово приймається й вважається допустимим.",
        },
      },
      {
        text: {
          fr: "**L'exemple du distributeur de café :** Un distributeur qui vend un café à 30 centimes utilise un automate. Ses états représentent la somme insérée (0, 10, 20, 30, 30+), et les transitions dépendent de la pièce insérée (10 ou 20 centimes). L'état initial est 0, et les états finaux sont 30 et 30+.",
          en: "**Example: the coffee vending machine:** A vending machine that sells coffee for 30 cents can be modeled as an automaton. Its states represent the amount inserted (0, 10, 20, 30, 30+), and transitions depend on the coin inserted (10 or 20 cents). The initial state is 0, and the final states are 30 and 30+.",
          uk: "**Приклад із кавовим автоматом:** автомат, який продає каву за 30 центів, використовує скінченний автомат. Його стани відображають вставлену суму (0, 10, 20, 30, 30+), а переходи залежать від вставленої монети (10 або 20 центів). Початковий стан — 0, а кінцеві стани — 30 і 30+.",
        },
      },
    ],
  },
  {
    type: "automaton",
    automata: [
      {
        id: "coffee-machine",
        caption: {
          fr: "Automate du distributeur de café : les pièces de 10 et 20 centimes mènent aux états 30 et 30+, qui acceptent (café délivré).",
          en: "Coffee vending machine automaton: 10- and 20-cent coins lead to states 30 and 30+, which accept (coffee dispensed).",
          uk: "Автомат кавового автомата: монети у 10 і 20 центів ведуть до станів 30 і 30+, які приймають (каву видано).",
        },
        states: [
          { id: "q0", label: "0", x: 0, y: 0, initial: true },
          { id: "q10", label: "10", x: 160, y: -100 },
          { id: "q20", label: "20", x: 160, y: 100 },
          { id: "q30", label: "30", x: 330, y: 0, accepting: true },
          { id: "q30p", label: "30+", x: 500, y: 0, accepting: true },
        ],
        transitions: [
          { from: "q0", to: "q10", symbols: ["10"] },
          { from: "q0", to: "q20", symbols: ["20"] },
          { from: "q10", to: "q20", symbols: ["10"] },
          { from: "q10", to: "q30", symbols: ["20"] },
          { from: "q20", to: "q30", symbols: ["10"] },
          { from: "q20", to: "q30p", symbols: ["20"] },
          { from: "q30", to: "q30p", symbols: ["10", "20"] },
          { from: "q30p", to: "q30p", symbols: ["10", "20"] },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "2. La Définition Formelle (Le cœur de l'examen)",
      en: "2. Formal Definition (Key for the Exam)",
      uk: "2. Формальне означення (серце іспиту)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour l'examen, vous ne pouvez pas vous contenter d'un dessin. Vous devez savoir définir mathématiquement un automate. Un automate est défini par un « 5-tuplet » M = (Q, Σ, δ, q₀, F) comprenant les cinq éléments suivants :",
      en: "For the exam, you cannot simply draw a diagram—you must be able to define a finite automaton mathematically. A finite automaton is defined by a 5-tuple M = (Q, Σ, δ, q₀, F) consisting of the following five components:",
      uk: "Для іспиту недостатньо самого лише малюнка. Ви повинні вміти математично означити автомат. Автомат задається «п'ятіркою» M = (Q, Σ, δ, q₀, F), що містить такі п'ять елементів:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Q :** L'ensemble fini de tous les états possibles de l'automate.",
          en: "**Q:** The finite set of all possible states of the automaton.",
          uk: "**Q:** скінченна множина всіх можливих станів автомата.",
        },
      },
      {
        text: {
          fr: "**Σ :** L'alphabet d'entrée (l'ensemble fini des symboles que l'automate peut lire).",
          en: "**Σ:** The input alphabet (the finite set of symbols the automaton can read).",
          uk: "**Σ:** вхідний алфавіт (скінченна множина символів, які автомат може читати).",
        },
      },
      {
        text: {
          fr: "**δ :** La fonction de transition. C'est la règle de fonctionnement : pour chaque couple d'un état de départ et d'un symbole lu, elle détermine un état d'arrivée unique (δ : Q × Σ → Q).",
          en: "**δ:** The transition function. It defines the behavior: for each pair (current state, input symbol), it gives a unique next state (δ : Q × Σ → Q).",
          uk: "**δ:** функція переходів. Це правило роботи: для кожної пари з початкового стану й прочитаного символу вона визначає єдиний стан призначення (δ : Q × Σ → Q).",
        },
      },
      {
        text: {
          fr: "**q₀ :** L'état initial (obligatoirement un élément de Q).",
          en: "**q₀:** The initial state (which must be an element of Q).",
          uk: "**q₀:** початковий стан (обов'язково елемент Q).",
        },
      },
      {
        text: {
          fr: "**F :** L'ensemble des états d'acceptation (c'est un sous-ensemble de Q, donc F ⊆ Q).",
          en: "**F:** The set of accepting (final) states (a subset of Q, i.e. F ⊆ Q).",
          uk: "**F:** множина станів-прийняття (це підмножина Q, отже F ⊆ Q).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "définition formelle (5-tuplet)",
      en: "formal definition (5-tuple)",
      uk: "формальне означення (п'ятірка)",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans M = (Q, Σ, δ, q₀, F), lequel de ces éléments est un sous-ensemble de Q ?",
        en: "In M = (Q, Σ, δ, q₀, F), which of these elements is a subset of Q?",
        uk: "У M = (Q, Σ, δ, q₀, F) який із цих елементів є підмножиною Q?",
      },
      options: [
        {
          text: { fr: "Σ, l'alphabet d'entrée", en: "Σ, the input alphabet", uk: "Σ, вхідний алфавіт" },
          feedback: {
            fr: "Σ n'est pas un sous-ensemble de Q : c'est l'ensemble des symboles lus, distinct des états.",
            en: "Σ is not a subset of Q: it is the set of input symbols, separate from the states.",
            uk: "Σ не є підмножиною Q: це множина прочитаних символів, відмінна від станів.",
          },
        },
        {
          text: {
            fr: "F, l'ensemble des états d'acceptation",
            en: "F, the set of accepting states",
            uk: "F, множина станів-прийняття",
          },
        },
        {
          text: {
            fr: "δ, la fonction de transition",
            en: "δ, the transition function",
            uk: "δ, функція переходів",
          },
          feedback: {
            fr: "δ est une fonction Q × Σ → Q, pas un sous-ensemble de Q.",
            en: "δ is a function Q × Σ → Q, not a subset of Q.",
            uk: "δ — це функція Q × Σ → Q, а не підмножина Q.",
          },
        },
        {
          text: { fr: "q₀, l'état initial", en: "q₀, the initial state", uk: "q₀, початковий стан" },
          feedback: {
            fr: "q₀ est un élément de Q, pas un sous-ensemble de Q.",
            en: "q₀ is an element of Q, not a subset of Q.",
            uk: "q₀ — це елемент Q, а не підмножина Q.",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "**F ⊆ Q :** les états d'acceptation forment un sous-ensemble des états. Tous les autres éléments sont soit un ensemble distinct (Σ), soit une fonction (δ), soit un état unique (q₀).",
        en: "**F ⊆ Q:** the accepting states form a subset of the states. The others are either a separate set (Σ), a function (δ), or a single state (q₀).",
        uk: "**F ⊆ Q:** стани-прийняття утворюють підмножину станів. Усі інші елементи — це або окрема множина (Σ), або функція (δ), або єдиний стан (q₀).",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "3. Langage Reconnu et Langage Régulier",
      en: "3. Recognized Language and Regular Language",
      uk: "3. Розпізнавана мова та регулярна мова",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Mot accepté :** Un mot w = a₁a₂…aₙ est accepté si la séquence d'états parcourue (s₀, s₁, …, sₙ) commence bien par q₀ (s₀ = q₀), respecte la fonction de transition (δ(sᵢ₋₁, aᵢ) = sᵢ), et se termine obligatoirement dans un état final (sₙ ∈ F).",
          en: "**Accepted word:** A word w = a₁a₂…aₙ is accepted if the sequence of states visited (s₀, s₁, …, sₙ) starts with q₀ (s₀ = q₀), follows the transition function (δ(sᵢ₋₁, aᵢ) = sᵢ), and ends in a final (accepting) state (sₙ ∈ F).",
          uk: "**Прийняте слово:** слово w = a₁a₂…aₙ приймається, якщо послідовність пройдених станів (s₀, s₁, …, sₙ) справді починається з q₀ (s₀ = q₀), підпорядковується функції переходів (δ(sᵢ₋₁, aᵢ) = sᵢ) і обов'язково завершується в кінцевому стані (sₙ ∈ F).",
        },
      },
      {
        text: {
          fr: "**Le Langage L(M) :** C'est simplement l'ensemble de tous les mots qui sont acceptés par l'automate M.",
          en: "**The language L(M):** This is simply the set of all words accepted by automaton M.",
          uk: "**Мова L(M):** це просто множина всіх слів, які приймаються автоматом M.",
        },
      },
      {
        text: {
          fr: "**Définition d'un Langage Régulier :** Un langage est qualifié de « régulier » si et seulement s'il existe un automate à états finis capable de le reconnaître.",
          en: "**Definition of a regular language:** A language is regular if and only if there exists a finite automaton that recognizes it.",
          uk: "**Означення регулярної мови:** мова називається «регулярною» тоді й лише тоді, коли існує скінченний автомат, здатний її розпізнати.",
        },
      },
    ],
  },
  {
    type: "automaton",
    automata: [
      {
        id: "contains-11",
        interactive: true,
        alphabet: ["0", "1"],
        examples: ["011", "11", "1", "1010", ""],
        caption: {
          fr: "Automate déterministe sur Σ = {0, 1}. Exécute des mots pour découvrir le langage qu'il reconnaît.",
          en: "Deterministic automaton over Σ = {0, 1}. Run words to discover the language it recognizes.",
          uk: "Детермінований автомат над Σ = {0, 1}. Запускайте слова, щоб виявити мову, яку він розпізнає.",
        },
        states: [
          { id: "q0", label: "q₀", x: 0, y: 0, initial: true },
          { id: "q1", label: "q₁", x: 180, y: 0 },
          { id: "q2", label: "q₂", x: 360, y: 0, accepting: true },
        ],
        transitions: [
          { from: "q0", to: "q0", symbols: ["0"] },
          { from: "q0", to: "q1", symbols: ["1"] },
          { from: "q1", to: "q0", symbols: ["0"] },
          { from: "q1", to: "q2", symbols: ["1"] },
          { from: "q2", to: "q2", symbols: ["0", "1"] },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "langage reconnu par un automate",
      en: "language recognized by an automaton",
      uk: "мова, розпізнавана автоматом",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quel langage l'automate ci-dessus reconnaît-il (sur Σ = {0, 1}) ?",
        en: "Which language does the automaton above recognize (over Σ = {0, 1})?",
        uk: "Яку мову розпізнає наведений вище автомат (над Σ = {0, 1})?",
      },
      options: [
        {
          text: {
            fr: "Les mots qui contiennent le facteur 11",
            en: "The words that contain the factor 11",
            uk: "Слова, які містять фактор 11",
          },
        },
        {
          text: {
            fr: "Les mots qui se terminent par 11",
            en: "The words that end with 11",
            uk: "Слова, які закінчуються на 11",
          },
          feedback: {
            fr: "Non : une fois q₂ atteint, l'automate y reste, donc « 110 » est accepté même s'il ne se termine pas par 11.",
            en: "No: once q₂ is reached the automaton stays there, so \"110\" is accepted even though it does not end with 11.",
            uk: "Ні: щойно q₂ досягнуто, автомат залишається в ньому, тому «110» приймається, навіть якщо воно не закінчується на 11.",
          },
        },
        {
          text: {
            fr: "Les mots qui contiennent exactement deux 1",
            en: "The words that contain exactly two 1's",
            uk: "Слова, які містять рівно дві 1",
          },
          feedback: {
            fr: "Non : q₂ boucle sur 0 et 1, donc « 110 » (trois 1) est accepté aussi.",
            en: "No: q₂ loops on 0 and 1, so \"110\" (three 1's) is accepted too.",
            uk: "Ні: q₂ зациклюється на 0 і 1, тому «110» (три 1) також приймається.",
          },
        },
        {
          text: {
            fr: "Les mots avec un nombre pair de 1",
            en: "The words with an even number of 1's",
            uk: "Слова з парною кількістю 1",
          },
          feedback: {
            fr: "Non : « 1 » (un seul 1) est accepté, ce n'est pas un nombre pair.",
            en: "No: \"1\" (a single 1) is accepted, which is not even.",
            uk: "Ні: «1» (одна єдина 1) приймається, а це не парне число.",
          },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "L'automate mémorise s'il a déjà vu deux 1 consécutifs. q₂ (acceptant) signifie « 11 a déjà été vu » et reste bloqué sur place : le langage reconnu est **l'ensemble des mots contenant le facteur 11**.",
        en: "The automaton remembers whether it has already seen two consecutive 1's. q₂ (accepting) means \"11 has been seen\" and loops forever: the recognized language is **the set of words containing the factor 11**.",
        uk: "Автомат запам'ятовує, чи вже бачив дві 1 підряд. q₂ (приймальний) означає «11 уже було бачено» і залишається на місці: розпізнавана мова — це **множина слів, що містять фактор 11**.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: {
      fr: "Exercices d'Entraînement",
      en: "Practice Exercises",
      uk: "Тренувальні вправи",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section A : Vrai ou Faux (Justifiez)",
          en: "Section A: True or False (Justify)",
          uk: "Частина A: правда чи неправда (обґрунтуйте)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Un mot est accepté par un automate s'il passe par un état final à un moment quelconque pendant sa lecture.",
              en: "A word is accepted by an automaton if it passes through any final state at some point during its reading.",
              uk: "Твердження: слово приймається автоматом, якщо воно проходить через кінцевий стан у будь-який момент під час його читання.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Il faut que la lecture SE TERMINE dans un état final : traverser un état final en chemin ne suffit pas.",
              en: "**False.** The automaton must be in a final state AFTER reading the LAST symbol of the word—passing through a final state in the middle is not sufficient.",
              uk: "**Неправда.** Читання має ЗАВЕРШИТИСЯ в кінцевому стані: проходження через кінцевий стан дорогою не достатньо.",
            },
            mistake: {
              fr: "Relis la définition : où doit se trouver l'automate après le DERNIER symbole lu ?",
              en: "Recall the definition: where must the automaton end up after reading the LAST symbol?",
              uk: "Перечитай означення: де має перебувати автомат після ОСТАННЬОГО прочитаного символу?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Dans la définition formelle d'un automate, l'état initial q₀ peut faire partie de l'ensemble des états d'acceptation F.",
              en: "In the formal definition of a finite automaton, the initial state q₀ can be a member of the set of accepting states F.",
              uk: "Твердження: у формальному означенні автомата початковий стан q₀ може належати множині станів-прийняття F.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** Rien ne l'interdit : F ⊆ Q, et q₀ ∈ Q peut très bien appartenir à F en même temps.",
              en: "**True.** Nothing forbids it: F ⊆ Q, and q₀ ∈ Q can also be in F.",
              uk: "**Правда.** Ніщо цього не забороняє: F ⊆ Q, і q₀ ∈ Q цілком може одночасно належати F.",
            },
            mistake: {
              fr: "La définition dit seulement F ⊆ Q — est-ce qu'elle interdit quelque chose à propos de q₀ ?",
              en: "The definition only states F ⊆ Q—does it forbid anything about q₀?",
              uk: "Означення лише каже F ⊆ Q — чи забороняє воно щось щодо q₀?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : La fonction de transition δ associe un état et un symbole à une image unique (un seul état d'arrivée).",
              en: "The transition function δ maps each state–symbol pair to a unique next state.",
              uk: "Твердження: функція переходів δ зіставляє стану й символу єдиний образ (єдиний стан призначення).",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** δ : Q × Σ → Q est une fonction : au plus une image par couple. C'est exactement ce qui rend l'automate déterministe.",
              en: "**True.** δ : Q × Σ → Q is a function: for each pair, there is at most one next state. This is exactly what makes the automaton deterministic.",
              uk: "**Правда.** δ : Q × Σ → Q — це функція: щонайбільше один образ на пару. Саме це робить автомат детермінованим.",
            },
            mistake: {
              fr: "Pense au type de δ : une fonction donne combien d'images par couple entrant ?",
              en: "Think about the type of δ: how many outputs does a function give for each input pair?",
              uk: "Поміркуй про тип δ: скільки образів дає функція на кожну вхідну пару?",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section B : Question à Choix Multiple (QCM)",
          en: "Section B: Multiple Choice Questions (MCQ)",
          uk: "Частина B: питання з вибором відповіді (QCM)",
        },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Que représente la notation F ⊆ Q dans la définition d'un automate ?",
              en: "What does the notation F ⊆ Q mean in the formal definition of a finite automaton?",
              uk: "Що позначає запис F ⊆ Q в означенні автомата?",
            },
            options: [
              {
                text: {
                  fr: "Les états finaux sont exactement les mêmes que tous les états possibles.",
                  en: "The final states are exactly the same as all possible states.",
                  uk: "Кінцеві стани — це точно ті самі, що й усі можливі стани.",
                },
                feedback: {
                  fr: "F = Q serait un cas particulier ; F ⊆ Q signifie seulement que F est un sous-ensemble (éventuellement strict).",
                  en: "F = Q would be a special case; F ⊆ Q means F is a subset (possibly proper).",
                  uk: "F = Q було б окремим випадком; F ⊆ Q означає лише, що F є підмножиною (можливо, строгою).",
                },
              },
              {
                text: {
                  fr: "L'ensemble des états d'acceptation est un sous-ensemble de tous les états possibles de l'automate.",
                  en: "The set of accepting states is a subset of all possible states of the automaton.",
                  uk: "Множина станів-прийняття є підмножиною всіх можливих станів автомата.",
                },
              },
              {
                text: {
                  fr: "La fonction de transition utilise les états d'acceptation.",
                  en: "The transition function uses accepting states.",
                  uk: "Функція переходів використовує стани-прийняття.",
                },
                feedback: {
                  fr: "δ ne dépend pas de F : elle relie seulement les états aux symboles lus.",
                  en: "δ does not depend on F: it only relates states to input symbols.",
                  uk: "δ не залежить від F: вона лише зіставляє стани з прочитаними символами.",
                },
              },
              {
                text: {
                  fr: "L'état initial est un état d'acceptation.",
                  en: "The initial state is an accepting state.",
                  uk: "Початковий стан є станом-прийняття.",
                },
                feedback: {
                  fr: "F ⊆ Q ne dit rien sur q₀ : l'état initial n'est pas nécessairement final.",
                  en: "F ⊆ Q says nothing about q₀: the initial state need not be a final state.",
                  uk: "F ⊆ Q нічого не каже про q₀: початковий стан не обов'язково є кінцевим.",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "F ⊆ Q : l'ensemble des états d'acceptation est un sous-ensemble de Q (chaque état final est un état, mais tout état n'est pas final).",
              en: "F ⊆ Q means the set of accepting states is a subset of Q (each final state is a state, but not every state is final).",
              uk: "F ⊆ Q: множина станів-прийняття є підмножиною Q (кожен кінцевий стан є станом, але не кожен стан є кінцевим).",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section C : Texte à trous",
          en: "Section C: Fill-in-the-Blanks",
          uk: "Частина C: текст із пропусками",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Un automate à états finis est caractérisé par un _________ (Q, Σ, δ, q₀, F). Dans cette définition, δ représente la fonction de _________ et q₀ est l'état _________.",
              en: "A finite automaton is characterized by a _________ (Q, Σ, δ, q₀, F). In this definition, δ is the _________ function, and q₀ is the _________ state.",
              uk: "Скінченний автомат характеризується _________ (Q, Σ, δ, q₀, F). У цьому означенні δ позначає функцію _________, а q₀ — це _________ стан.",
            },
            blanks: [
              {
                accepted: [
                  "5-tuplet",
                  "5 tuplet",
                  "5uplet",
                  "quintuplé",
                  "quintuple",
                  "5-tuple",
                  "5 tuple",
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
                    feedback: {
                      fr: "Il y a bien CINQ éléments — c'est un 5-tuplet (Q, Σ, δ, q₀, F).",
                      en: "There are exactly FIVE elements—it is a 5-tuple (Q, Σ, δ, q₀, F).",
                      uk: "Тут справді П'ЯТЬ елементів — це п'ятірка (Q, Σ, δ, q₀, F).",
                    },
                  },
                ],
              },
              {
                accepted: ["transition", "transitions"],
                mistakes: [
                  {
                    match: ["acceptation", "finale", "finaux"],
                    feedback: {
                      fr: "δ est la règle de passage entre états — l'acceptation, c'est F.",
                      en: "δ is the transition rule between states—acceptance is determined by F.",
                      uk: "δ — це правило переходу між станами, а прийняття визначає F.",
                    },
                  },
                ],
              },
              {
                accepted: ["initial", "initiale", "départ", "depart", "start", "starting"],
                mistakes: [],
              },
            ],
            solution: {
              fr: "Réponses : 5-tuplet · transition · initial.",
              en: "Answers: 5-tuple · transition · initial (state).",
              uk: "Відповіді: п'ятірка · перехід · початковий.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section D : Exercice de type Examen",
          en: "Section D: Exam-style Exercise",
          uk: "Частина D: вправа у форматі іспиту",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Considérez un automate défini sur Σ = {0, 1} avec deux états Q = {q₀, q₁}. q₀ est l'état initial. Les transitions sont les suivantes : si on est dans q₀ et qu'on lit 0, on reste en q₀ ; si on lit 1, on passe en q₁. Depuis q₁, lire 0 ou 1 nous laisse en q₁. F = {q₁}.",
              en: "Consider a finite automaton over Σ = {0, 1} with states Q = {q₀, q₁}, initial state q₀. Transitions: from q₀ on input 0 stay in q₀; on input 1 go to q₁. From q₁, reading 0 or 1 stays in q₁. F = {q₁}.",
              uk: "Розгляньте автомат, означений над Σ = {0, 1}, з двома станами Q = {q₀, q₁}. q₀ — початковий стан. Переходи такі: якщо ми в q₀ і читаємо 0, то залишаємося в q₀; якщо читаємо 1, переходимо в q₁. З q₁ читання 0 або 1 залишає нас у q₁. F = {q₁}.",
            },
            details: [
              { fr: "Dessinez (mentalement) l'automate.", en: "Sketch the automaton mentally.", uk: "Намалюйте (подумки) автомат." },
              { fr: "Le mot 000 est-il accepté ?", en: "Is the word 000 accepted?", uk: "Чи приймається слово 000?" },
              { fr: "Le mot 010 est-il accepté ?", en: "Is the word 010 accepted?", uk: "Чи приймається слово 010?" },
            ],
            solution: {
              fr: "Corrigé :",
              en: "Solution:",
              uk: "Розв'язання:",
            },
            solutionItems: [
              {
                fr: "000 : Non. La séquence d'états est q₀ → q₀ → q₀ → q₀, et q₀ ∉ F.",
                en: "000: No. State sequence is q₀ → q₀ → q₀ → q₀, and q₀ ∉ F.",
                uk: "000: ні. Послідовність станів — q₀ → q₀ → q₀ → q₀, і q₀ ∉ F.",
              },
              {
                fr: "010 : Oui. La séquence est q₀ → q₀ → q₁ → q₁ — la lecture s'arrête sur q₁, qui est un état final.",
                en: "010: Yes. State sequence is q₀ → q₀ → q₁ → q₁—the automaton ends in q₁, which is a final state.",
                uk: "010: так. Послідовність — q₀ → q₀ → q₁ → q₁ — читання зупиняється на q₁, який є кінцевим станом.",
              },
              {
                fr: "Le langage reconnu est : tous les mots contenant au moins un 1.",
                en: "The recognized language is: all words that contain at least one '1'.",
                uk: "Розпізнавана мова — це: усі слова, що містять принаймні одну 1.",
              },
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
    text: {
      fr: "Fiche Réflexe Examen : Modèle de Rédaction",
      en: "Exam Quick-Reference: Model Answer Template",
      uk: "Шпаргалка для іспиту: зразок оформлення відповіді",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Si vous avez une question d'examen du type :** « Donnez la définition formelle de l'automate dessiné ci-dessus. »",
      en: "**If you have an exam question like:** \"Give the formal definition of the automaton shown above.\"",
      uk: "**Якщо вам трапиться екзаменаційне питання такого типу:** «Дайте формальне означення автомата, наведеного вище».",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Ne faites pas de longues phrases. Utilisez ce modèle de réponse strict (comme dans le cours) :",
      en: "Do not write long sentences. Use this strict answer template (as in the course):",
      uk: "Не пишіть довгих речень. Використовуйте цей строгий зразок відповіді (як у курсі):",
    },
  },
  {
    type: "quote",
    text: {
      fr: "L'automate M = (Q, Σ, δ, q₀, F) est défini formellement par :",
      en: "The automaton M = (Q, Σ, δ, q₀, F) is formally defined as follows:",
      uk: "Автомат M = (Q, Σ, δ, q₀, F) формально означується так:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "Q = {q₀, q₁, …} (listez tous les états présents dans les cercles).",
          en: "Q = {q₀, q₁, …} (list all states shown in the circles).",
          uk: "Q = {q₀, q₁, …} (перелічіть усі стани, зображені в кругах).",
        },
      },
      {
        text: {
          fr: "Σ = {0, 1} (listez les symboles présents sur les flèches).",
          en: "Σ = {0, 1} (list all symbols appearing on the transitions/arrows).",
          uk: "Σ = {0, 1} (перелічіть усі символи, зображені на стрілках).",
        },
      },
      {
        text: {
          fr: "La fonction de transition δ est décrite par le tableau suivant : (Dessinez un tableau : en colonnes les symboles de Σ, en lignes les états de Q, et remplissez les cases avec les états d'arrivée des flèches).",
          en: "The transition function δ is given by the following table: (columns = symbols of Σ, rows = states of Q, entries = next states from the diagram).",
          uk: "Функція переходів δ описана наступною таблицею: (Намалюйте таблицю: у стовпцях — символи з Σ, у рядках — стани з Q, а клітинки заповніть станами, у які ведуть стрілки).",
        },
      },
      {
        text: {
          fr: "q₀ est l'état initial (l'état avec la petite flèche « départ »).",
          en: "q₀ is the initial state (the state marked by the small 'start' arrow).",
          uk: "q₀ — це початковий стан (стан із маленькою стрілкою «старт»).",
        },
      },
      {
        text: {
          fr: "F = {q₁} (listez tous les états dessinés avec un double cercle).",
          en: "F = {q₁} (list all states drawn with a double circle).",
          uk: "F = {q₁} (перелічіть усі стани, намальовані подвійним кружком).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: {
      fr: "Langages réguliers — Partie 2 : Opérations et non-déterminisme",
      en: "Regular Languages — Part 2: Operations and Nondeterminism",
      uk: "Регулярні мови — Частина 2: Операції та недетермінізм",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Cette partie introduit les opérations que l'on peut faire avec les langages réguliers, ainsi qu'une nouvelle version plus flexible des automates : les automates non-déterministes.",
      en: "This part introduces operations on regular languages and a more flexible class of automata: nondeterministic finite automata (NFAs).",
      uk: "У цій частині розглядаються операції, які можна виконувати над регулярними мовами, а також гнучкіша версія автоматів — недетерміновані автомати.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "1. Opérations sur les Langages Réguliers (Section 3.2)",
      en: "1. Operations on Regular Languages (Section 3.2)",
      uk: "1. Операції над регулярними мовами (розділ 3.2)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une propriété fondamentale des langages réguliers est qu'ils sont **fermés** sous certaines opérations mathématiques. Cela signifie que si vous prenez un ou plusieurs langages réguliers et que vous appliquez l'une de ces opérations, le résultat sera **toujours** un langage régulier (il existera toujours un automate pour le reconnaître).",
      en: "A fundamental property of regular languages is that they are **closed** under certain mathematical operations. This means that if you take one or more regular languages and apply one of these operations, the result will **always** be a regular language (there will always exist an automaton that recognizes it).",
      uk: "Фундаментальна властивість регулярних мов полягає в тому, що вони **замкнені** щодо деяких математичних операцій. Це означає, що якщо взяти одну або кілька регулярних мов і застосувати до них одну з цих операцій, результат **завжди** буде регулярною мовою (завжди існуватиме автомат, який її розпізнає).",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Théorème 1 :** Les langages réguliers sont fermés par :",
      en: "**Theorem 1:** Regular languages are closed under the following operations:",
      uk: "**Теорема 1:** Регулярні мови замкнені щодо:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "(a) l'union (L₁ ∪ L₂)",
          en: "(a) union (L₁ ∪ L₂)",
          uk: "(a) об'єднання (L₁ ∪ L₂)",
        },
      },
      {
        text: {
          fr: "(b) la concaténation (L₁ · L₂)",
          en: "(b) concatenation (L₁ · L₂)",
          uk: "(b) конкатенація (L₁ · L₂)",
        },
      },
      {
        text: {
          fr: "(c) l'étoile de Kleene (L*)",
          en: "(c) Kleene star (L*)",
          uk: "(c) зірка Кліні (L*)",
        },
      },
      {
        text: {
          fr: "(d) l'intersection (L₁ ∩ L₂)",
          en: "(d) intersection (L₁ ∩ L₂)",
          uk: "(d) перетин (L₁ ∩ L₂)",
        },
      },
      {
        text: {
          fr: "(e) le passage au complémentaire (L̄)",
          en: "(e) complement (L̄)",
          uk: "(e) перехід до доповнення (L̄)",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "La méthode du « Produit Cartésien » (Pour l'Union et l'Intersection)",
      en: "The Cartesian Product Method (for Union and Intersection)",
      uk: "Метод «декартового добутку» (для об'єднання та перетину)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour prouver que l'union de deux langages réguliers L₁ et L₂ est régulière, on construit un gros automate qui simule les automates M₁ et M₂ **en même temps**.",
      en: "To show that the union of two regular languages L₁ and L₂ is regular, we construct a single automaton that simulates automata M₁ and M₂ **simultaneously**.",
      uk: "Щоб довести, що об'єднання двох регулярних мов L₁ і L₂ є регулярним, будують один великий автомат, який імітує автомати M₁ і M₂ **одночасно**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Les états de ce nouvel automate sont des paires (produit cartésien) : Q = Q₁ × Q₂. Un état ressemble à (s₁, s₂).",
          en: "The states of this new automaton are pairs (Cartesian product): Q = Q₁ × Q₂. Each state is of the form (s₁, s₂).",
          uk: "Стани цього нового автомата — це пари (декартовий добуток): Q = Q₁ × Q₂. Стан має вигляд (s₁, s₂).",
        },
      },
      {
        text: {
          fr: "**Pour l'Union :** L'automate accepte le mot s'il termine dans un état final de M₁ **OU** de M₂. Donc, F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
          en: "**For union:** The automaton accepts the word if it ends in a final state of M₁ **OR** of M₂. Thus, F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
          uk: "**Для об'єднання:** Автомат приймає слово, якщо воно завершується у кінцевому стані M₁ **АБО** M₂. Отже, F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
        },
      },
      {
        text: {
          fr: "**Pour l'Intersection :** L'automate accepte le mot s'il termine dans un état final de M₁ **ET** de M₂. Donc, F = F₁ × F₂.",
          en: "**For intersection:** The automaton accepts the word if it ends in a final state of M₁ **AND** of M₂. Thus, F = F₁ × F₂.",
          uk: "**Для перетину:** Автомат приймає слово, якщо воно завершується у кінцевому стані M₁ **І** M₂. Отже, F = F₁ × F₂.",
        },
      },
    ],
  },
  {
    type: "automaton",
    layout: "row",
    automata: [
      {
        id: "product-m1",
        caption: {
          fr: "M₁ : les mots sur {a, b} qui se terminent par a.",
          en: "M₁: words over {a, b} ending in a.",
          uk: "M₁: слова над {a, b}, які закінчуються на a.",
        },
        states: [
          { id: "m1p0", label: "p₀", x: 0, y: 0, initial: true },
          { id: "m1p1", label: "p₁", x: 180, y: 0, accepting: true },
        ],
        transitions: [
          { from: "m1p0", to: "m1p0", symbols: ["b"] },
          { from: "m1p0", to: "m1p1", symbols: ["a"] },
          { from: "m1p1", to: "m1p1", symbols: ["a"] },
          { from: "m1p1", to: "m1p0", symbols: ["b"] },
        ],
      },
      {
        id: "product-m2",
        caption: {
          fr: "M₂ : les mots sur {a, b} avec un nombre pair de b.",
          en: "M₂: words over {a, b} with an even number of b's.",
          uk: "M₂: слова над {a, b} з парною кількістю b.",
        },
        states: [
          { id: "m2e0", label: "E", x: 0, y: 0, initial: true, accepting: true },
          { id: "m2e1", label: "O", x: 180, y: 0 },
        ],
        transitions: [
          { from: "m2e0", to: "m2e0", symbols: ["a"] },
          { from: "m2e0", to: "m2e1", symbols: ["b"] },
          { from: "m2e1", to: "m2e1", symbols: ["a"] },
          { from: "m2e1", to: "m2e0", symbols: ["b"] },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "méthode du produit cartésien",
      en: "Cartesian product method",
      uk: "метод декартового добутку",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "On construit l'automate produit de M₁ = (Q₁, Σ, δ₁, q₁, F₁) et M₂ = (Q₂, Σ, δ₂, q₂, F₂). Que sont les états du nouvel automate ?",
        en: "We build the product automaton of M₁ = (Q₁, Σ, δ₁, q₁, F₁) and M₂ = (Q₂, Σ, δ₂, q₂, F₂). What are the states of the new automaton?",
        uk: "Будуємо добутковий автомат для M₁ = (Q₁, Σ, δ₁, q₁, F₁) та M₂ = (Q₂, Σ, δ₂, q₂, F₂). Якими є стани нового автомата?",
      },
      options: [
        {
          text: { fr: "Simplement Q₁", en: "Just Q₁", uk: "Просто Q₁" },
          feedback: {
            fr: "Ce serait l'automate M₁ seul : il faut simuler les deux automates en même temps.",
            en: "That would be M₁ alone: we need to simulate both automata at once.",
            uk: "Це був би лише автомат M₁: потрібно імітувати обидва автомати одночасно.",
          },
        },
        {
          text: {
            fr: "Les paires (s₁, s₂) de Q₁ × Q₂",
            en: "The pairs (s₁, s₂) from Q₁ × Q₂",
            uk: "Пари (s₁, s₂) з Q₁ × Q₂",
          },
        },
        {
          text: {
            fr: "Les états finaux communs F₁ ∩ F₂",
            en: "The common final states F₁ ∩ F₂",
            uk: "Спільні кінцеві стани F₁ ∩ F₂",
          },
          feedback: {
            fr: "F₁ ∩ F₂ sert à définir les états d'acceptation, pas tous les états.",
            en: "F₁ ∩ F₂ defines the accepting states, not all the states.",
            uk: "F₁ ∩ F₂ слугує для визначення приймальних станів, а не всіх станів.",
          },
        },
        {
          text: {
            fr: "Les symboles de Σ",
            en: "The symbols of Σ",
            uk: "Символи з Σ",
          },
          feedback: {
            fr: "Les symboles forment l'alphabet, pas les états.",
            en: "Symbols form the alphabet, not the states.",
            uk: "Символи утворюють алфавіт, а не стани.",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "Les états sont les paires **(s₁, s₂) ∈ Q₁ × Q₂** : l'automate produit suit simultanément l'état de M₁ et celui de M₂. L'acceptation dépend ensuite de l'opération : F = (F₁ × Q₂) ∪ (Q₁ × F₂) pour l'union, F = F₁ × F₂ pour l'intersection.",
        en: "The states are the pairs **(s₁, s₂) ∈ Q₁ × Q₂**: the product automaton tracks the state of M₁ and M₂ simultaneously. Acceptance then depends on the operation: F = (F₁ × Q₂) ∪ (Q₁ × F₂) for union, F = F₁ × F₂ for intersection.",
        uk: "Стани — це пари **(s₁, s₂) ∈ Q₁ × Q₂**: добутковий автомат одночасно відслідковує стан M₁ і стан M₂. Прийняття далі залежить від операції: F = (F₁ × Q₂) ∪ (Q₁ × F₂) для об'єднання, F = F₁ × F₂ для перетину.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "2. Automates Non-Déterministes (Section 3.3)",
      en: "2. Nondeterministic Finite Automata (NFAs) (Section 3.3)",
      uk: "2. Недетерміновані автомати (розділ 3.3)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Dans un automate déterministe (vu dans la partie 1), chaque étape est forcée : pour un état et un symbole donnés, il n'y a qu'une seule flèche possible. Les automates non-déterministes offrent deux « super-pouvoirs » :",
      en: "In a deterministic finite automaton (DFA), each step is determined: for a given state and input symbol, there is exactly one possible transition. Nondeterministic finite automata (NFAs) have two extra \"powers\":",
      uk: "У детермінованому автоматі (розглянутому в частині 1) кожен крок є визначеним: для заданого стану й символу існує лише один можливий перехід. Недетерміновані автомати мають дві «надздібності»:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Le Choix :** Pour un même état et un même symbole lu, il peut y avoir **plusieurs** flèches (plusieurs états de destination possibles).",
          en: "**Choice:** For the same state and input symbol, there can be **multiple** possible transitions (multiple next states).",
          uk: "**Вибір:** Для одного й того самого стану та прочитаного символу може існувати **кілька** переходів (кілька можливих станів призначення).",
        },
      },
      {
        text: {
          fr: "**Le Saut magique (ε) :** L'automate peut passer d'un état à un autre sans consommer aucune lettre du mot d'entrée (transition avec le mot vide ε).",
          en: "**Epsilon moves (ε-transitions):** The automaton can move from one state to another without consuming any input symbol (a transition labeled by the empty string ε).",
          uk: "**Магічний стрибок (ε):** Автомат може перейти з одного стану в інший, не споживаючи жодної літери вхідного слова (перехід за порожнім словом ε).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Définition Formelle (Le 5-tuplet)",
      en: "Formal Definition (5-tuple)",
      uk: "Формальне означення (5-ка)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un automate non-déterministe est caractérisé par M = (Q, Σ, Δ, q₀, F). Notez que l'on utilise Δ (Delta majuscule) au lieu de δ.",
      en: "A nondeterministic finite automaton (NFA) is defined by the 5-tuple M = (Q, Σ, Δ, q₀, F). Note that we use Δ (capital delta) instead of δ.",
      uk: "Недетермінований автомат задається як M = (Q, Σ, Δ, q₀, F). Зауважте, що тут використовується Δ (велика дельта) замість δ.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Δ n'est plus une fonction classique, c'est une relation. Elle prend un état et un symbole (ou ε) et renvoie un **ensemble d'états** (un élément de 𝒫(Q), l'ensemble de tous les sous-ensembles de Q).",
          en: "Δ is no longer a function but a transition relation. It takes a state and a symbol (or ε) and returns a **set of states** (an element of 𝒫(Q), the power set of Q).",
          uk: "Δ уже не є класичною функцією — це відношення. Воно бере стан і символ (або ε) та повертає **множину станів** (елемент 𝒫(Q) — множини всіх підмножин Q).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Comment l'automate lit-il un mot ?",
      en: "How does an NFA read an input word?",
      uk: "Як автомат читає слово?",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'exécution ne suit plus un chemin unique, mais crée un **arbre de possibilités**. Toutes les branches sont explorées en parallèle de façon non-déterministe. Si **au moins une branche** parvient à lire tout le mot et se termine sur un état final, alors le mot est accepté.",
      en: "Execution no longer follows a single path—it explores a **computation tree** (set of possible paths). All branches are explored in parallel (nondeterministically). If **at least one branch** reads the entire word and ends in a final (accepting) state, the word is accepted.",
      uk: "Виконання вже не йде одним єдиним шляхом, а утворює **дерево можливостей**. Усі гілки досліджуються паралельно недетермінованим чином. Якщо **принаймні одна гілка** зможе прочитати все слово й завершитися в кінцевому стані, то слово приймається.",
    },
  },
  {
    type: "automaton",
    automata: [
      {
        id: "contains-ab",
        interactive: true,
        alphabet: ["a", "b"],
        examples: ["ab", "aab", "aba", "ba", "bb"],
        caption: {
          fr: "Automate non-déterministe sur Σ = {a, b}. Sur la lettre a depuis q₀, deux flèches partent : l'ensemble d'états actifs montre le non-déterminisme.",
          en: "Nondeterministic automaton over Σ = {a, b}. On the letter a from q₀ two arrows leave: the set of active states reveals the nondeterminism.",
          uk: "Недетермінований автомат над Σ = {a, b}. За літерою a зі стану q₀ виходять дві стрілки: множина активних станів показує недетермінізм.",
        },
        states: [
          { id: "n0", label: "q₀", x: 0, y: 0, initial: true },
          { id: "n1", label: "q₁", x: 190, y: -80 },
          { id: "n2", label: "q₂", x: 380, y: 0, accepting: true },
        ],
        transitions: [
          { from: "n0", to: "n0", symbols: ["a", "b"] },
          { from: "n0", to: "n1", symbols: ["a"] },
          { from: "n1", to: "n2", symbols: ["b"] },
          { from: "n2", to: "n2", symbols: ["a", "b"] },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "non-déterminisme",
      en: "nondeterminism",
      uk: "недетермінізм",
    },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Affirmation : après la lecture d'une lettre, un automate non-déterministe peut se trouver simultanément dans plusieurs états.",
        en: "After reading one letter, a nondeterministic automaton can be in several states at the same time.",
        uk: "Твердження: після прочитання однієї літери недетермінований автомат може одночасно перебувати в кількох станах.",
      },
      answer: true,
      justification: {
        fr: "**Vrai.** L'exécution explore plusieurs branches en parallèle : l'ensemble des états actifs peut contenir plusieurs états (par exemple {q₀, q₁} après un a dans l'automate ci-dessus).",
        en: "**True.** Execution explores several branches in parallel: the set of active states can contain more than one state (for example {q₀, q₁} after an a in the automaton above).",
        uk: "**Правда.** Виконання досліджує кілька гілок паралельно: множина активних станів може містити кілька станів (наприклад, {q₀, q₁} після a у наведеному вище автоматі).",
      },
      mistake: {
        fr: "Regarde les états actifs du simulateur après un a : combien d'états sont allumés en même temps ?",
        en: "Look at the simulator's active states after an a: how many states light up at once?",
        uk: "Подивіться на активні стани симулятора після a: скільки станів світиться одночасно?",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: {
      fr: "Exercices d'Entraînement",
      en: "Practice Exercises",
      uk: "Тренувальні вправи",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section A : Vrai ou Faux (Justifiez)",
          en: "Section A: True or False (Justify)",
          uk: "Розділ A: Правда чи хиба (обґрунтуйте)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : L'intersection de deux langages réguliers peut parfois donner un langage qui n'est pas régulier.",
              en: "The intersection of two regular languages can sometimes give a non-regular language.",
              uk: "Твердження: перетин двох регулярних мов іноді може дати мову, яка не є регулярною.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Les langages réguliers sont fermés sous intersection : le résultat est toujours régulier (Théorème 1(d)).",
              en: "**False.** Regular languages are closed under intersection: the result is always regular (Theorem 1(d)).",
              uk: "**Хиба.** Регулярні мови замкнені щодо перетину: результат завжди регулярний (теорема 1(d)).",
            },
            mistake: {
              fr: "Relis le Théorème 1 : « fermé » veut dire que le résultat est TOUJOURS régulier — ou seulement parfois ?",
              en: "Recall Theorem 1: \"closed\" means the result is ALWAYS regular, not just sometimes.",
              uk: "Перечитайте теорему 1: «замкнений» означає, що результат ЗАВЖДИ регулярний — чи лише іноді?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Un automate non-déterministe peut se trouver dans plusieurs états en même temps virtuellement.",
              en: "A nondeterministic finite automaton can be in several states at the same time (virtually).",
              uk: "Твердження: недетермінований автомат може віртуально перебувати в кількох станах одночасно.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** L'exécution explore un arbre de possibilités en parallèle : virtuellement, l'automate est dans plusieurs états à la fois.",
              en: "**True.** The computation explores possible paths in parallel; conceptually, the automaton can be in a set of states at the same time.",
              uk: "**Правда.** Виконання досліджує дерево можливостей паралельно: віртуально автомат перебуває в кількох станах одночасно.",
            },
            mistake: {
              fr: "Pense à l'arbre de possibilités du cours : combien de chemins sont explorés en même temps ?",
              en: "Think about the computation tree: how many paths are explored simultaneously?",
              uk: "Згадайте дерево можливостей із курсу: скільки шляхів досліджується одночасно?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Dans un automate non-déterministe, il faut que toutes les branches de l'arbre d'exécution arrivent à un état final pour que le mot soit accepté.",
              en: "In an NFA, every branch of the computation tree must reach a final state for the word to be accepted.",
              uk: "Твердження: у недетермінованому автоматі всі гілки дерева виконання мають дійти до кінцевого стану, щоб слово було прийняте.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Il suffit qu'au moins UNE branche lise tout le mot et se termine sur un état final.",
              en: "**False.** It is sufficient that AT LEAST ONE branch reads the entire word and ends in a final state.",
              uk: "**Хиба.** Достатньо, щоб принаймні ОДНА гілка прочитала все слово й завершилася в кінцевому стані.",
            },
            mistake: {
              fr: "Relis la règle d'acceptation du NFA : combien de branches doivent réussir — toutes, ou au moins une ?",
              en: "Recall NFA acceptance: how many branches must succeed—all, or at least one?",
              uk: "Перечитайте правило прийняття для NFA: скільки гілок мають досягти успіху — усі чи принаймні одна?",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section B : Question à Choix Multiple (QCM)",
          en: "Section B: Multiple Choice Questions (MCQ)",
          uk: "Розділ B: Питання з кількома варіантами відповіді (тест)",
        },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Dans la définition formelle d'un automate non-déterministe, que représente 𝒫(Q) pour la fonction de transition Δ ?",
              en: "In the formal definition of an NFA, what does 𝒫(Q) represent for the transition function Δ?",
              uk: "У формальному означенні недетермінованого автомата що представляє 𝒫(Q) для функції переходів Δ?",
            },
            options: [
              {
                text: {
                  fr: "Un état d'acceptation unique.",
                  en: "A single accepting state.",
                  uk: "Єдиний приймальний стан.",
                },
                feedback: {
                  fr: "Δ renvoie un ENSEMBLE d'états, pas un état unique — c'est le cœur du non-déterminisme.",
                  en: "Δ returns a SET of states, not a single state—that is the essence of nondeterminism.",
                  uk: "Δ повертає МНОЖИНУ станів, а не єдиний стан — це суть недетермінізму.",
                },
              },
              {
                text: {
                  fr: "L'ensemble de tous les sous-ensembles d'états de Q.",
                  en: "The power set (set of all subsets) of Q.",
                  uk: "Множина всіх підмножин станів Q.",
                },
              },
              {
                text: {
                  fr: "L'alphabet d'entrée étendu avec ε.",
                  en: "The input alphabet extended with ε.",
                  uk: "Вхідний алфавіт, розширений на ε.",
                },
                feedback: {
                  fr: "ε intervient dans les flèches de Δ, mais Δ elle-même renvoie des sous-ensembles de Q.",
                  en: "ε appears in transitions, but Δ itself returns subsets of Q.",
                  uk: "ε фігурує в переходах Δ, але сама Δ повертає підмножини Q.",
                },
              },
              {
                text: {
                  fr: "Le produit cartésien des états.",
                  en: "The Cartesian product of states.",
                  uk: "Декартовий добуток станів.",
                },
                feedback: {
                  fr: "Le produit cartésien Q₁ × Q₂ sert à construire l'automate de l'union, pas à définir Δ.",
                  en: "The Cartesian product Q₁ × Q₂ is used to build the product automaton, not to define Δ.",
                  uk: "Декартовий добуток Q₁ × Q₂ слугує для побудови автомата об'єднання, а не для визначення Δ.",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "Δ : Q × (Σ ∪ {ε}) → 𝒫(Q) — pour chaque couple, elle renvoie un ensemble d'états possibles, donc un élément de 𝒫(Q).",
              en: "Δ : Q × (Σ ∪ {ε}) → 𝒫(Q)—for each pair, it returns a set of possible next states, i.e. an element of the power set 𝒫(Q).",
              uk: "Δ : Q × (Σ ∪ {ε}) → 𝒫(Q) — для кожної пари вона повертає множину можливих станів, тобто елемент 𝒫(Q).",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section C : Texte à trous",
          en: "Section C: Fill-in-the-Blanks",
          uk: "Розділ C: Текст із пропусками",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Dans un automate non-déterministe, la transition d'un état à un autre peut se produire sans la consommation du symbole suivant en utilisant une transition avec __________. L'exécution sur un mot ne correspond plus à une séquence unique, mais plutôt à un __________ d'états.",
              en: "In a nondeterministic finite automaton, a move from one state to another can occur without consuming the next input symbol by using a(n) __________ transition. On a given word, execution no longer follows a single sequence, but rather a __________ of states/possibilities.",
              uk: "У недетермінованому автоматі перехід з одного стану в інший може відбутися без споживання наступного символу за допомогою переходу з __________. Виконання на слові вже не відповідає єдиній послідовності, а радше __________ станів.",
            },
            blanks: [
              {
                accepted: ["ε", "epsilon", "mot vide", "le mot vide", "empty string"],
                mistakes: [
                  {
                    match: ["lambda", "vide", "sans symbole"],
                    feedback: {
                      fr: "Le saut magique est la transition ε : on saute avec le mot vide, sans consommer de symbole.",
                      en: "This is called an ε-transition: it moves on the empty string, consuming no input symbol.",
                      uk: "Магічний стрибок — це ε-перехід: стрибок за порожнім словом, без споживання символу.",
                    },
                  },
                ],
              },
              {
                accepted: ["arbre", "arbre d'exécution", "arbre d'execution", "tree", "computation tree"],
                mistakes: [
                  {
                    match: ["chemin", "séquence", "sequence", "suite"],
                    feedback: {
                      fr: "Ce n'est plus une seule séquence : plusieurs chemins coexistent — le cours dit « arbre de possibilités ».",
                      en: "It's not a single sequence—multiple paths coexist; this is called a \"computation tree\" (set of possibilities).",
                      uk: "Це вже не єдина послідовність: співіснує кілька шляхів — у курсі це називається «дерево можливостей».",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponses : le mot vide ε · arbre (de possibilités).",
              en: "Answers: empty string ε · computation tree (set of possibilities).",
              uk: "Відповіді: порожнє слово ε · дерево (можливостей).",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section D : Exercice de type Examen",
          en: "Section D: Exam-style Exercise",
          uk: "Розділ D: Вправа у форматі іспиту",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Soient deux automates déterministes M₁ et M₂ avec pour états Q₁ = {A, B} et Q₂ = {X, Y}. Donnez la liste complète des états du nouvel automate créé pour reconnaître l'union de leurs langages (utilisez le produit cartésien Q₁ × Q₂).",
              en: "Let two DFAs M₁ and M₂ have state sets Q₁ = {A, B} and Q₂ = {X, Y}. Give the complete set of states of the new automaton built to recognize the union of their languages (use the Cartesian product Q₁ × Q₂).",
              uk: "Нехай дано два детерміновані автомати M₁ і M₂ зі станами Q₁ = {A, B} та Q₂ = {X, Y}. Наведіть повний список станів нового автомата, побудованого для розпізнавання об'єднання їхніх мов (використайте декартовий добуток Q₁ × Q₂).",
            },
            solution: {
              fr: "Solution :",
              en: "Solution:",
              uk: "Розв'язок:",
            },
            solutionItems: [
              {
                fr: "Le produit cartésien Q₁ × Q₂ contient toutes les paires possibles :",
                en: "The Cartesian product Q₁ × Q₂ contains all possible pairs:",
                uk: "Декартовий добуток Q₁ × Q₂ містить усі можливі пари:",
              },
              {
                fr: "Q = {(A, X), (A, Y), (B, X), (B, Y)}",
                en: "Q = {(A, X), (A, Y), (B, X), (B, Y)}",
                uk: "Q = {(A, X), (A, Y), (B, X), (B, Y)}",
              },
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
    text: {
      fr: "Fiche Réflexe Examen : Modèle de Rédaction",
      en: "Exam Quick-Reference: Model Answer Template",
      uk: "Екзаменаційна шпаргалка: зразок оформлення",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Si vous avez une question d'examen du type :** « Soient M₁ et M₂ deux automates. Définissez formellement l'automate M qui reconnaît l'union (ou l'intersection) de L₁ et L₂. »",
      en: "**If you get an exam question like:** \"Given M₁ and M₂, formally define the automaton M that recognizes the union (or intersection) of L₁ and L₂.\"",
      uk: "**Якщо на іспиті трапиться питання такого типу:** «Нехай M₁ і M₂ — два автомати. Формально означте автомат M, який розпізнає об'єднання (або перетин) L₁ і L₂.»",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Utilisez ce modèle basé sur la preuve par produit cartésien :",
      en: "Use this model based on the Cartesian product construction:",
      uk: "Скористайтеся цим зразком, заснованим на доведенні через декартовий добуток:",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Par construction, l'automate M = (Q, Σ, δ, q₀, F) qui reconnaît cette opération est défini ainsi :",
      en: "By construction, the automaton M = (Q, Σ, δ, q₀, F) recognizing this operation is defined as follows:",
      uk: "За побудовою автомат M = (Q, Σ, δ, q₀, F), який розпізнає цю операцію, визначається так:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**États :** Q = Q₁ × Q₂ = {(s₁, s₂) | s₁ ∈ Q₁ et s₂ ∈ Q₂}",
          en: "**States:** Q = Q₁ × Q₂ = {(s₁, s₂) | s₁ ∈ Q₁ and s₂ ∈ Q₂}",
          uk: "**Стани:** Q = Q₁ × Q₂ = {(s₁, s₂) | s₁ ∈ Q₁ і s₂ ∈ Q₂}",
        },
      },
      {
        text: {
          fr: "**Alphabet :** Σ (l'alphabet reste inchangé).",
          en: "**Alphabet:** Σ (the alphabet remains unchanged).",
          uk: "**Алфавіт:** Σ (алфавіт залишається незмінним).",
        },
      },
      {
        text: {
          fr: "**Transitions :**",
          en: "**Transitions:**",
          uk: "**Переходи:**",
        },
        children: [
          {
            fr: "Pour tout (s₁, s₂) ∈ Q et a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)).",
            en: "For all (s₁, s₂) ∈ Q and a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)).",
            uk: "Для всіх (s₁, s₂) ∈ Q і a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)).",
          },
        ],
      },
      {
        text: {
          fr: "**État initial :** q₀ = (q₁, q₂) (la paire des deux états initiaux).",
          en: "**Initial state:** q₀ = (q₁, q₂) (the pair of initial states).",
          uk: "**Початковий стан:** q₀ = (q₁, q₂) (пара з двох початкових станів).",
        },
      },
      {
        text: {
          fr: "**États finaux (F) :**",
          en: "**Final (accepting) states (F):**",
          uk: "**Кінцеві стани (F):**",
        },
        children: [
          {
            fr: "Si c'est une UNION : F = {(s₁, s₂) | s₁ ∈ F₁ ou s₂ ∈ F₂}.",
            en: "If it is a UNION: F = {(s₁, s₂) | s₁ ∈ F₁ or s₂ ∈ F₂}.",
            uk: "Якщо це ОБ'ЄДНАННЯ: F = {(s₁, s₂) | s₁ ∈ F₁ або s₂ ∈ F₂}.",
          },
          {
            fr: "Si c'est une INTERSECTION : F = {(s₁, s₂) | s₁ ∈ F₁ et s₂ ∈ F₂}.",
            en: "If it is an INTERSECTION: F = {(s₁, s₂) | s₁ ∈ F₁ and s₂ ∈ F₂}.",
            uk: "Якщо це ПЕРЕТИН: F = {(s₁, s₂) | s₁ ∈ F₁ і s₂ ∈ F₂}.",
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
    text: {
      fr: "Langages réguliers — Partie 3 : Équivalence et expressions régulières",
      en: "Regular Languages — Part 3: Equivalence and Regular Expressions",
      uk: "Регулярні мови — Частина 3: Еквівалентність і регулярні вирази",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "1. Équivalence des DFA et NFA (Section 3.3.1)",
      en: "1. Equivalence between DFAs and NFAs (Section 3.3.1)",
      uk: "1. Еквівалентність DFA та NFA (розділ 3.3.1)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "À première vue, on pourrait penser que les automates non-déterministes (NFA) sont plus puissants que les automates déterministes (DFA) car ils permettent plusieurs choix et des transitions invisibles. Ce n'est absolument pas le cas.",
      en: "At first glance, nondeterministic finite automata (NFAs) might seem more powerful than deterministic finite automata (DFAs) because they allow choices and epsilon moves. This is not the case.",
      uk: "На перший погляд, можна було б подумати, що недетерміновані скінченні автомати (NFA) потужніші за детерміновані скінченні автомати (DFA), бо вони дозволяють кілька виборів і невидимі переходи. Це зовсім не так.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Théorème 2 :** Pour chaque automate non-déterministe, il existe un automate déterministe qui reconnaît exactement le même langage.",
          en: "**Theorem 2:** For every nondeterministic finite automaton, there exists an equivalent deterministic finite automaton recognizing exactly the same language.",
          uk: "**Теорема 2:** Для кожного недетермінованого автомата існує детермінований автомат, який розпізнає точно ту саму мову.",
        },
      },
      {
        text: {
          fr: "**La construction par sous-ensembles :** Pour transformer un NFA en DFA, on construit un nouvel automate où un état représente en réalité un **ensemble d'états** de l'ancien automate. Si l'automate de départ a Q états, le nouvel automate aura 𝒫(Q) états (l'ensemble de tous les sous-ensembles possibles).",
          en: "**Subset construction (powerset construction):** To convert an NFA to an equivalent DFA, we build a DFA where each state corresponds to a **set of states** of the NFA. If the NFA has |Q| states, the DFA can have up to |𝒫(Q)| states.",
          uk: "**Побудова за підмножинами:** Щоб перетворити NFA на DFA, будують новий автомат, де стан насправді представляє **множину станів** старого автомата. Якщо початковий автомат має Q станів, новий автомат матиме 𝒫(Q) станів (множину всіх можливих підмножин).",
        },
      },
      {
        text: {
          fr: "**Corollaire :** Un langage est régulier si et seulement s'il est reconnu par un automate non-déterministe.",
          en: "**Corollary:** A language is regular if and only if it is recognized by some nondeterministic finite automaton.",
          uk: "**Наслідок:** Мова є регулярною тоді й лише тоді, коли вона розпізнається недетермінованим автоматом.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "équivalence NFA / DFA (Théorème 2)",
      en: "NFA / DFA equivalence (Theorem 2)",
      uk: "еквівалентність NFA / DFA (теорема 2)",
    },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Affirmation : tout NFA possède un DFA équivalent, donc les NFA et les DFA ont exactement la même puissance expressive.",
        en: "Every NFA has an equivalent DFA, so NFAs and DFAs have exactly the same expressive power.",
        uk: "Твердження: кожен NFA має еквівалентний DFA, отже NFA та DFA мають точно однакову виражальну потужність.",
      },
      answer: true,
      justification: {
        fr: "**Vrai.** La construction par sous-ensembles transforme tout NFA en un DFA qui reconnaît le même langage (Théorème 2). Les deux modèles décrivent donc exactement les mêmes langages.",
        en: "**True.** The subset construction turns every NFA into a DFA recognizing the same language (Theorem 2). Both models therefore describe exactly the same languages.",
        uk: "**Правда.** Побудова за підмножинами перетворює кожен NFA на DFA, який розпізнає ту саму мову (теорема 2). Отже, обидві моделі описують точно ті самі мови.",
      },
      mistake: {
        fr: "Relis le Théorème 2 et la construction par sous-ensembles : que devient un NFA entre les mains de cette construction ?",
        en: "Reread Theorem 2 and the subset construction: what does an NFA become under that construction?",
        uk: "Перечитай теорему 2 і побудову за підмножинами: чим стає NFA у руках цієї побудови?",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "2. Expressions Régulières (Section 3.4)",
      en: "2. Regular Expressions (Section 3.4)",
      uk: "2. Регулярні вирази (розділ 3.4)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Si les automates sont des « machines » visuelles, les expressions régulières sont des formules textuelles qui décrivent exactement les mêmes langages. Ces formules sont très utilisées en programmation, notamment dans les systèmes UNIX.",
      en: "While finite automata are visual machines, regular expressions (regexes) are textual formulas that describe exactly the same class of languages. They are widely used in programming, especially in Unix tools and text processing.",
      uk: "Якщо автомати — це візуальні «машини», то регулярні вирази — це текстові формули, які описують точно ті самі мови. Ці формули дуже поширені в програмуванні, зокрема в системах UNIX.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Définition Formelle",
      en: "Formal Definition",
      uk: "Формальне означення",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Une expression R est une expression régulière si elle correspond à l'un de ces cas :",
      en: "An expression R is a regular expression over Σ if it matches one of the following cases:",
      uk: "Вираз R є регулярним виразом, якщо він відповідає одному з цих випадків:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      { text: { fr: "Un symbole a de l'alphabet Σ.", en: "A symbol a ∈ Σ.", uk: "Символ a з алфавіту Σ." } },
      { text: { fr: "Le mot vide ε.", en: "The empty string ε.", uk: "Порожнє слово ε." } },
      { text: { fr: "L'ensemble vide ∅.", en: "The empty set ∅.", uk: "Порожня множина ∅." } },
      { text: { fr: "L'union : (R₁ ∪ R₂).", en: "Union: (R₁ ∪ R₂).", uk: "Об'єднання: (R₁ ∪ R₂)." } },
      { text: { fr: "La concaténation : (R₁ · R₂).", en: "Concatenation: (R₁ · R₂).", uk: "Конкатенація: (R₁ · R₂)." } },
      { text: { fr: "L'étoile de Kleene : (R₁*).", en: "Kleene star: (R₁*).", uk: "Зірка Кліні: (R₁*)." } },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Règles de calcul importantes",
      en: "Important Algebraic Rules",
      uk: "Важливі правила обчислення",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Priorité des opérateurs :** S'il n'y a pas de parenthèses, on applique d'abord l'étoile de Kleene (*), ensuite la concaténation (·), et à la toute fin l'union (∪).",
          en: "**Operator precedence:** If parentheses are omitted, apply Kleene star (*) first, then concatenation (·), and finally union (∪).",
          uk: "**Пріоритет операторів:** Якщо дужок немає, спочатку застосовують зірку Кліні (*), потім конкатенацію (·), і в самому кінці об'єднання (∪).",
        },
      },
      {
        text: {
          fr: "**L'opérateur + :** On définit R⁺ = R·R* pour simplifier l'écriture. Cela garantit que l'expression R est présente au moins une fois, contrairement à l'étoile qui permet zéro présence.",
          en: "**The + operator:** We define R⁺ = R·R* as shorthand. This ensures R appears at least once, whereas * allows zero occurrences.",
          uk: "**Оператор +:** Означають R⁺ = R·R*, щоб спростити запис. Це гарантує, що вираз R присутній принаймні один раз, на відміну від зірки, яка дозволяє нуль входжень.",
        },
      },
      {
        text: {
          fr: "**Propriétés neutres :** On a toujours R ∪ ∅ = R et R · ε = R.",
          en: "**Identity properties:** R ∪ ∅ = R and R · ε = R.",
          uk: "**Нейтральні властивості:** Завжди маємо R ∪ ∅ = R та R · ε = R.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "3. Théorème 3 : équivalence expressions régulières / automates (Section 3.4.1)",
      en: "3. Theorem 3: Regular Expressions / Automata Equivalence (Section 3.4.1)",
      uk: "3. Теорема 3: еквівалентність регулярних виразів / автоматів (розділ 3.4.1)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Nous disposons maintenant de deux outils pour décrire un langage : les automates à états finis et les expressions régulières. Le théorème de Kleene (1956) affirme que ces deux outils décrivent exactement la même famille de langages, à savoir les langages réguliers.",
      en: "We now have two tools to describe a language: finite automata and regular expressions. Kleene's theorem (1956) states that these two tools describe exactly the same family of languages, namely the regular languages.",
      uk: "Тепер ми маємо два інструменти для опису мови: скінченні автомати та регулярні вирази. Теорема Кліні (1956) стверджує, що ці два інструменти описують точно ту саму родину мов, а саме регулярні мови.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Théorème 3 (Kleene, 1956) :** Un langage L est régulier **si et seulement si** L est décrit par une expression régulière.",
          en: "**Theorem 3 (Kleene, 1956):** A language L is regular **if and only if** L is described by a regular expression.",
          uk: "**Теорема 3 (Кліні, 1956):** Мова L є регулярною **тоді й лише тоді**, коли L описується регулярним виразом.",
        },
      },
      {
        text: {
          fr: "Le « si et seulement si » se démontre en deux sens : **(⇐) de l'expression régulière vers l'automate**, puis **(⇒) de l'automate vers l'expression régulière**.",
          en: "The “if and only if” is proved in two directions: **(⇐) from the regular expression to the automaton**, then **(⇒) from the automaton to the regular expression**.",
          uk: "«Тоді й лише тоді» доводять у двох напрямках: **(⇐) від регулярного виразу до автомата**, потім **(⇒) від автомата до регулярного виразу**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Sens ⇐ : d'une expression régulière vers un automate",
      en: "Direction ⇐: From a Regular Expression to an Automaton",
      uk: "Напрямок ⇐: від регулярного виразу до автомата",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "On raisonne par récurrence sur la structure de l'expression régulière R. On construit, pour chaque forme possible de R, un automate non-déterministe M possédant un seul état initial et un seul état final, tel que L(M) = L(R).",
      en: "We proceed by induction on the structure of the regular expression R. For each possible form of R we build a nondeterministic automaton M with a single initial state and a single final state, such that L(M) = L(R).",
      uk: "Міркуємо індукцією за структурою регулярного виразу R. Для кожної можливої форми R будуємо недетермінований автомат M, що має єдиний початковий стан і єдиний фінальний стан, такий що L(M) = L(R).",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Cas de base R = a (avec a ∈ Σ) :** deux états q₁ (initial) et q₂ (final), reliés par une seule transition étiquetée a, c'est-à-dire Δ(q₁, a) = {q₂}.",
          en: "**Base case R = a (with a ∈ Σ):** two states q₁ (initial) and q₂ (final), linked by the single transition labelled a, that is Δ(q₁, a) = {q₂}.",
          uk: "**Базовий випадок R = a (де a ∈ Σ):** два стани q₁ (початковий) і q₂ (фінальний), з'єднані єдиним переходом з міткою a, тобто Δ(q₁, a) = {q₂}.",
        },
      },
      {
        text: {
          fr: "**Cas de base R = ε :** un unique état, à la fois initial et final, sans aucune transition. Le langage reconnu est {ε}.",
          en: "**Base case R = ε:** a single state, both initial and final, with no transitions. The recognized language is {ε}.",
          uk: "**Базовий випадок R = ε:** єдиний стан, одночасно початковий і фінальний, без жодного переходу. Розпізнавана мова — {ε}.",
        },
      },
      {
        text: {
          fr: "**Cas de base R = ∅ :** un état initial et un état final distincts, sans aucune transition : aucun mot n'est accepté, donc L(M) = ∅.",
          en: "**Base case R = ∅:** distinct initial and final states with no transitions: no word is accepted, so L(M) = ∅.",
          uk: "**Базовий випадок R = ∅:** різні початковий і фінальний стани, без жодного переходу: жодне слово не приймається, отже L(M) = ∅.",
        },
      },
      {
        text: {
          fr: "**Récurrence R = R₁ ∪ R₂ :** on ajoute un nouvel état initial et un nouvel état final, reliés par des transitions ε aux automates de R₁ et de R₂ (construction d'union du Théorème 1(a)).",
          en: "**Inductive step R = R₁ ∪ R₂:** add a new initial state and a new final state, linked by ε-transitions to the automata of R₁ and R₂ (union construction of Theorem 1(a)).",
          uk: "**Індукційний крок R = R₁ ∪ R₂:** додаємо новий початковий стан і новий фінальний стан, з'єднані ε-переходами з автоматами R₁ та R₂ (побудова об'єднання з теореми 1(a)).",
        },
      },
      {
        text: {
          fr: "**Récurrence R = R₁ · R₂ :** on relie la sortie de l'automate de R₁ à l'entrée de l'automate de R₂ par une transition ε (construction de concaténation du Théorème 1(b)).",
          en: "**Inductive step R = R₁ · R₂:** connect the output of the R₁ automaton to the input of the R₂ automaton with an ε-transition (concatenation construction of Theorem 1(b)).",
          uk: "**Індукційний крок R = R₁ · R₂:** з'єднуємо вихід автомата R₁ із входом автомата R₂ ε-переходом (побудова конкатенації з теореми 1(b)).",
        },
      },
      {
        text: {
          fr: "**Récurrence R = R₁* :** on ajoute un nouvel état initial et final, ainsi qu'une transition ε de retour vers le début, de sorte que R₁ puisse être répété un nombre arbitraire de fois (construction d'étoile du Théorème 1(c)).",
          en: "**Inductive step R = R₁*:** add a new initial and final state, plus an ε-transition looping back to the start, so that R₁ can be repeated an arbitrary number of times (Kleene-star construction of Theorem 1(c)).",
          uk: "**Індукційний крок R = R₁*:** додаємо новий початковий і фінальний стан, а також ε-перехід назад до початку, так щоб R₁ можна було повторювати довільну кількість разів (побудова зірки з теореми 1(c)).",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Conséquence :** toute expression régulière se transforme en NFA, et tout NFA se transforme en DFA (Théorème 2). Toute expression régulière décrit donc bien un langage régulier.",
      en: "**Consequence:** every regular expression converts to an NFA, and every NFA converts to a DFA (Theorem 2). Hence every regular expression indeed describes a regular language.",
      uk: "**Наслідок:** кожен регулярний вираз перетворюється на NFA, а кожен NFA перетворюється на DFA (теорема 2). Отже, кожен регулярний вираз справді описує регулярну мову.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Sens ⇒ : d'un automate vers une expression régulière",
      en: "Direction ⇒: From an Automaton to a Regular Expression",
      uk: "Напрямок ⇒: від автомата до регулярного виразу",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour la réciproque, on transforme l'automate en un **NFA généralisé** : un automate dont les transitions peuvent être étiquetées par des expressions régulières, et qui possède un unique état initial et un unique état final.",
      en: "For the converse, we turn the automaton into a **generalized NFA**: an automaton whose transitions may be labelled by regular expressions, with a unique initial state and a unique final state.",
      uk: "Для оберненого напрямку перетворюємо автомат на **узагальнений NFA**: автомат, переходи якого можуть бути позначені регулярними виразами, і який має єдиний початковий та єдиний фінальний стан.",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "Ajouter un nouvel état initial s relié par ε à l'ancien état initial, et un nouvel état final f relié par ε depuis chaque ancien état final.",
          en: "Add a new initial state s linked by ε to the old initial state, and a new final state f linked by ε from every old final state.",
          uk: "Додати новий початковий стан s, з'єднаний через ε зі старим початковим станом, і новий фінальний стан f, з'єднаний через ε з кожного старого фінального стану.",
        },
      },
      {
        text: {
          fr: "Éliminer les états intermédiaires un par un, en conservant toujours s et f. Pour supprimer un état q, on remplace chaque chemin traversant q par une seule transition étiquetée R = R₁ · R₂* · R₃.",
          en: "Eliminate the intermediate states one by one, always keeping s and f. To delete a state q, replace each path through q by a single transition labelled R = R₁ · R₂* · R₃.",
          uk: "Вилучати проміжні стани один за одним, завжди зберігаючи s і f. Щоб видалити стан q, замінюємо кожен шлях, що проходить через q, єдиним переходом з міткою R = R₁ · R₂* · R₃.",
        },
      },
      {
        text: {
          fr: "Répéter jusqu'à ce qu'il ne reste que s et f : l'unique étiquette de la transition restante est l'expression régulière recherchée.",
          en: "Repeat until only s and f remain: the sole label of the remaining transition is the required regular expression.",
          uk: "Повторювати, доки не залишаться лише s і f: єдина мітка переходу, що залишився, і є шуканим регулярним виразом.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Schéma d'élimination :** si un état q est atteint depuis p par l'étiquette R₁, possède une boucle sur lui-même d'étiquette R₂ et mène vers r par l'étiquette R₃, alors après suppression de q on ajoute à la transition p → r l'expression R₁ · R₂* · R₃, combinée par union avec l'étiquette éventuellement déjà présente.",
      en: "**Elimination scheme:** if a state q is reached from p with label R₁, has a self-loop with label R₂, and leads to r with label R₃, then after deleting q we add to the transition p → r the expression R₁ · R₂* · R₃, unioned with any label already present.",
      uk: "**Схема вилучення:** якщо стан q досягається з p за міткою R₁, має петлю на собі з міткою R₂ і веде до r за міткою R₃, то після видалення q додаємо до переходу p → r вираз R₁ · R₂* · R₃, поєднаний операцією об'єднання з міткою, яка, можливо, вже присутня.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Exemple :** en partant de l'automate à deux états qui reconnaît les mots comportant un nombre pair de a, l'élimination des états donne l'expression régulière (b* · a · b* · a)* · b*. Les deux sens réunis achèvent la preuve du Théorème 3 : langages réguliers et expressions régulières coïncident exactement.",
      en: "**Example:** starting from the two-state automaton recognizing words with an even number of a's, eliminating the states yields the regular expression (b* · a · b* · a)* · b*. Combining both directions completes the proof of Theorem 3: regular languages and regular expressions coincide exactly.",
      uk: "**Приклад:** починаючи з автомата з двома станами, який розпізнає слова з парною кількістю a, вилучення станів дає регулярний вираз (b* · a · b* · a)* · b*. Обидва напрямки разом завершують доведення теореми 3: регулярні мови та регулярні вирази повністю збігаються.",
    },
  },
  {
    type: "automaton",
    automata: [
      {
        id: "even-a",
        interactive: true,
        alphabet: ["a", "b"],
        examples: ["aa", "ab", "", "a", "aba"],
        caption: {
          fr: "L'automate à deux états de l'exemple : l'état E (« pair ») est à la fois initial et final. Sers-toi du simulateur pour vérifier l'expression (b* · a · b* · a)* · b*.",
          en: "The two-state automaton from the example: state E (“even”) is both initial and final. Use the simulator to check the expression (b* · a · b* · a)* · b*.",
          uk: "Автомат із двома станами з прикладу: стан E («парний») є одночасно початковим і фінальним. Скористайся симулятором, щоб перевірити вираз (b* · a · b* · a)* · b*.",
        },
        states: [
          { id: "even", label: "E", x: 0, y: 0, initial: true, accepting: true },
          { id: "odd", label: "O", x: 200, y: 0 },
        ],
        transitions: [
          { from: "even", to: "even", symbols: ["b"] },
          { from: "even", to: "odd", symbols: ["a"] },
          { from: "odd", to: "odd", symbols: ["b"] },
          { from: "odd", to: "even", symbols: ["a"] },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "expression régulière ↔ automate",
      en: "regular expression ↔ automaton",
      uk: "регулярний вираз ↔ автомат",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "L'automate ci-dessus reconnaît :",
        en: "The automaton above recognizes:",
        uk: "Наведений вище автомат розпізнає:",
      },
      options: [
        {
          text: {
            fr: "Les mots avec un nombre pair de b",
            en: "Words with an even number of b's",
            uk: "Слова з парною кількістю b",
          },
          feedback: {
            fr: "Non : la lettre qui fait basculer d'un état à l'autre est le a, pas le b.",
            en: "No: the letter that toggles between the two states is a, not b.",
            uk: "Ні: літера, яка перемикає з одного стану в інший, — це a, а не b.",
          },
        },
        {
          text: {
            fr: "Les mots avec un nombre pair de a",
            en: "Words with an even number of a's",
            uk: "Слова з парною кількістю a",
          },
        },
        {
          text: {
            fr: "Les mots qui commencent par a",
            en: "Words that start with a",
            uk: "Слова, що починаються з a",
          },
          feedback: {
            fr: "Non : le mot vide ε est accepté, et « ba » aussi, qui ne commencent pas par a.",
            en: "No: the empty word ε is accepted, and so is \"ba\", which do not start with a.",
            uk: "Ні: порожнє слово ε приймається, і «ba» також, які не починаються з a.",
          },
        },
        {
          text: {
            fr: "Les mots de longueur paire",
            en: "Words of even length",
            uk: "Слова парної довжини",
          },
          feedback: {
            fr: "Non : « a » (longueur 1) n'est pas accepté, mais « ab » (longueur 2) l'est — ce n'est pas la longueur qui compte.",
            en: "No: \"a\" (length 1) is not accepted, but \"ab\" (length 2) is — length is not what matters.",
            uk: "Ні: «a» (довжина 1) не приймається, але «ab» (довжина 2) приймається — не довжина має значення.",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "L'état « pair » signifie « un nombre pair de a lus jusqu'ici ». L'automate alterne entre pair et impair à chaque a (le b ne change pas d'état) : il accepte exactement les mots ayant un **nombre pair de a**.",
        en: "The “pair” state means “an even number of a's read so far”. The automaton toggles between pair and impair on every a (b does not change state): it accepts exactly the words with an **even number of a's**.",
        uk: "Стан «парний» означає «парну кількість прочитаних a до цього моменту». Автомат перемикається між парним і непарним на кожному a (b не змінює стан): він приймає точно слова з **парною кількістю a**.",
      },
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: {
      fr: "Exercices d'Entraînement",
      en: "Practice Exercises",
      uk: "Тренувальні вправи",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section A : Vrai ou Faux (Justifiez)",
          en: "Section A: True or False (Justify)",
          uk: "Розділ A: Правда чи хиба (обґрунтуйте)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Les automates non-déterministes sont capables de reconnaître des langages complexes que les automates déterministes ne peuvent pas lire.",
              en: "Nondeterministic finite automata can recognize languages that deterministic finite automata cannot.",
              uk: "Твердження: недетерміновані автомати здатні розпізнавати складні мови, які детерміновані автомати не можуть прочитати.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Théorème 2 : pour chaque NFA existe un DFA qui reconnaît exactement le même langage — les deux ont le même pouvoir.",
              en: "**False.** Theorem 2: every NFA has an equivalent DFA recognizing exactly the same language—they have the same expressive power.",
              uk: "**Хиба.** Теорема 2: для кожного NFA існує DFA, який розпізнає точно ту саму мову — обидва мають однакову потужність.",
            },
            mistake: {
              fr: "Relis le Théorème 2 : que dit-il de l'équivalence NFA / DFA ?",
              en: "Recall Theorem 2: what does it say about NFA/DFA equivalence?",
              uk: "Перечитай теорему 2: що вона каже про еквівалентність NFA / DFA?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : L'expression régulière a ∪ b* donne exactement le même résultat que l'expression (a ∪ b)*.",
              en: "The regular expression a ∪ b* defines exactly the same language as (a ∪ b)*.",
              uk: "Твердження: регулярний вираз a ∪ b* дає точно той самий результат, що й вираз (a ∪ b)*.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** a ∪ b* accepte soit « a », soit zéro-plusieurs « b » ; (a ∪ b)* accepte aussi « ab », « ba », « aa », « bab »…",
              en: "**False.** a ∪ b* accepts either \"a\" or zero or more \"b\"’s; (a ∪ b)* also accepts \"ab\", \"ba\", \"aa\", \"bab\", etc.",
              uk: "**Хиба.** a ∪ b* приймає або «a», або нуль-кілька «b»; (a ∪ b)* приймає також «ab», «ba», «aa», «bab»…",
            },
            mistake: {
              fr: "Sans parenthèses, sur quelle partie s'applique l'étoile ? Teste le mot « ab » dans les deux expressions.",
              en: "Without parentheses, which part does the star apply to? Test the word \"ab\" in both expressions.",
              uk: "Без дужок, до якої частини застосовується зірка? Перевір слово «ab» в обох виразах.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : La concaténation d'une expression avec le mot vide ε ne modifie pas l'expression.",
              en: "Concatenating a regular expression with the empty string ε does not change the language.",
              uk: "Твердження: конкатенація виразу з порожнім словом ε не змінює вираз.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** ε est l'élément neutre de la concaténation : R · ε = R pour toute expression R.",
              en: "**True.** ε is the identity element for concatenation: R · ε = R for any regular expression R.",
              uk: "**Правда.** ε — це нейтральний елемент конкатенації: R · ε = R для будь-якого виразу R.",
            },
            mistake: {
              fr: "Rappelle-toi le rôle de ε en concaténation : laisse-t-il le mot inchangé ?",
              en: "Recall the role of ε in concatenation: does it leave the word unchanged?",
              uk: "Пригадай роль ε у конкатенації: чи залишає він слово незмінним?",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section B : Question à Choix Multiple (QCM)",
          en: "Section B: Multiple Choice Questions (MCQ)",
          uk: "Розділ B: Питання з вибором відповіді (QCM)",
        },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Quel est l'ordre de priorité mathématique pour lire une expression régulière sans parenthèses ?",
              en: "What is the mathematical precedence order for reading a regular expression without parentheses?",
              uk: "Яким є порядок математичного пріоритету для читання регулярного виразу без дужок?",
            },
            options: [
              {
                text: {
                  fr: "Union, Concaténation, Étoile de Kleene",
                  en: "Union, Concatenation, Kleene Star",
                  uk: "Об'єднання, конкатенація, зірка Кліні",
                },
                feedback: {
                  fr: "C'est exactement l'inverse : l'étoile se lit en premier, l'union en dernier.",
                  en: "It is exactly the opposite: the star is read first, the union last.",
                  uk: "Це точно навпаки: зірка читається першою, об'єднання — останнім.",
                },
              },
              {
                text: {
                  fr: "Concaténation, Étoile de Kleene, Union",
                  en: "Concatenation, Kleene Star, Union",
                  uk: "Конкатенація, зірка Кліні, об'єднання",
                },
                feedback: {
                  fr: "L'étoile se priorise AVANT la concaténation : dans a · b*, on lit d'abord b*.",
                  en: "The star takes precedence BEFORE concatenation: in a · b*, b* is read first.",
                  uk: "Зірка має пріоритет ПЕРЕД конкатенацією: у a · b* спочатку читаємо b*.",
                },
              },
              {
                text: {
                  fr: "Étoile de Kleene, Concaténation, Union",
                  en: "Kleene Star, Concatenation, Union",
                  uk: "Зірка Кліні, конкатенація, об'єднання",
                },
              },
              {
                text: {
                  fr: "Toutes les opérations ont le même niveau de priorité",
                  en: "All operations have the same precedence level",
                  uk: "Усі операції мають однаковий рівень пріоритету",
                },
                feedback: {
                  fr: "Non : sans parenthèses, a ∪ b · c* se lit avec un ordre strict (étoile → concaténation → union).",
                  en: "No: without parentheses, a ∪ b · c* is read with a strict order (star → concatenation → union).",
                  uk: "Ні: без дужок a ∪ b · c* читається у строгому порядку (зірка → конкатенація → об'єднання).",
                },
              },
            ],
            answerIndex: 2,
            solution: {
              fr: "Étoile de Kleene (d'abord), puis concaténation, puis union (en dernier).",
              en: "Kleene star (first), then concatenation, then union (last).",
              uk: "Зірка Кліні (спершу), потім конкатенація, потім об'єднання (наостанку).",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section C : Texte à trous",
          en: "Section C: Fill-in-the-Blanks",
          uk: "Розділ C : Текст із пропусками",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Pour chaque automate non-déterministe, il est possible de créer un automate __________ équivalent. Dans cet automate transformé, les nouveaux états correspondent à des __________ des états de l'automate d'origine.",
              en: "For every nondeterministic finite automaton, it is possible to build an equivalent __________ automaton. In this converted automaton, the new states correspond to __________ of the states of the original automaton.",
              uk: "Для кожного недетермінованого автомата можна створити еквівалентний __________ автомат. У цьому перетвореному автоматі нові стани відповідають __________ станів вихідного автомата.",
            },
            blanks: [
              {
                accepted: ["déterministe", "deterministe", "dfa", "deterministic"],
                mistakes: [
                  {
                    match: [
                      "plus puissant",
                      "complexe",
                      "aléatoire",
                      "aleatoire",
                      "more powerful",
                      "complex",
                      "random",
                    ],
                    feedback: {
                      fr: "Le théorème 2 garantit un automate DÉTERMINISTE équivalent — même pouvoir, grâce à la construction par sous-ensembles.",
                      en: "Theorem 2 guarantees an equivalent DETERMINISTIC automaton — the same power, thanks to the subset construction.",
                      uk: "Теорема 2 гарантує еквівалентний ДЕТЕРМІНОВАНИЙ автомат — ті самі можливості, завдяки конструкції підмножин.",
                    },
                  },
                ],
              },
              {
                accepted: ["sous-ensembles", "sousensembles", "ensembles", "subsets"],
                mistakes: [
                  {
                    match: ["états", "etats", "paires", "transitions", "states", "pairs"],
                    feedback: {
                      fr: "Chaque état du nouveau DFA représente un SOUS-ENSEMBLE d'états de l'ancien automate, pas un état simple.",
                      en: "Each state of the new DFA represents a SUBSET of states of the old automaton, not a single state.",
                      uk: "Кожен стан нового DFA представляє ПІДМНОЖИНУ станів старого автомата, а не окремий стан.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponses : déterministe · sous-ensembles.",
              en: "Answers: deterministic · subsets.",
              uk: "Відповіді: детермінований · підмножини.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section D : Exercice de type Examen",
          en: "Section D: Exam-style Exercise",
          uk: "Розділ D : Вправа екзаменаційного типу",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Expliquez avec une phrase simple quel langage est décrit par l'expression régulière suivante : b*(ab⁺)* sur l'alphabet Σ = {a, b}.",
              en: "Explain in a simple sentence the language described by the following regular expression: b*(ab⁺)* over the alphabet Σ = {a, b}.",
              uk: "Поясніть простим реченням, яку мову описує такий регулярний вираз: b*(ab⁺)* над алфавітом Σ = {a, b}.",
            },
            solution: {
              fr: "Solution :",
              en: "Solution:",
              uk: "Розв'язок:",
            },
            solutionItems: [
              {
                fr: "Ce langage contient tous les mots où chaque lettre a est obligatoirement suivie par au moins une lettre b.",
                en: "This language contains all words where each letter a is necessarily followed by at least one letter b.",
                uk: "Ця мова містить усі слова, у яких за кожною літерою a обов'язково йде принаймні одна літера b.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Section E : Théorème 3 (Kleene)",
          en: "Section E: Theorem 3 (Kleene)",
          uk: "Розділ E : Теорема 3 (Кліні)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Le théorème de Kleene affirme qu'un langage est régulier si et seulement s'il est décrit par une expression régulière.",
              en: "Kleene's theorem states that a language is regular if and only if it is described by a regular expression.",
              uk: "Твердження: теорема Кліні стверджує, що мова є регулярною тоді й лише тоді, коли вона описується регулярним виразом.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** C'est l'énoncé exact du Théorème 3 : les automates à états finis et les expressions régulières décrivent la même famille de langages.",
              en: "**True.** This is the exact statement of Theorem 3: finite automata and regular expressions describe the same family of languages.",
              uk: "**Правильно.** Це точне формулювання Теореми 3: скінченні автомати та регулярні вирази описують одну й ту саму родину мов.",
            },
            mistake: {
              fr: "Retiens l'équivalence : automate fini ⇔ expression régulière.",
              en: "Remember the equivalence: finite automaton ⇔ regular expression.",
              uk: "Запам'ятай еквівалентність: скінченний автомат ⇔ регулярний вираз.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Pour transformer une expression régulière en automate, il faut obligatoirement construire directement un automate déterministe.",
              en: "To convert a regular expression into an automaton, one must directly build a deterministic automaton.",
              uk: "Твердження: щоб перетворити регулярний вираз на автомат, потрібно обов'язково безпосередньо будувати детермінований автомат.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** La construction du sens (⇐) produit naturellement un NFA ; on peut ensuite le déterminiser grâce au Théorème 2 si on le souhaite.",
              en: "**False.** The (⇐) construction naturally yields an NFA; it can then be determinized via Theorem 2 if desired.",
              uk: "**Неправильно.** Конструкція в напрямку (⇐) природно дає NFA; потім, якщо забажаємо, його можна детермінізувати за допомогою Теореми 2.",
            },
            mistake: {
              fr: "La construction la plus simple passe par un NFA — la déterminisation est une étape séparée.",
              en: "The simplest construction goes through an NFA—determinization is a separate step.",
              uk: "Найпростіша конструкція йде через NFA — детермінізація є окремим кроком.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section F : Exercice de type Examen (Théorème 3)",
          en: "Section F: Exam-Style Exercise (Theorem 3)",
          uk: "Розділ F : Вправа екзаменаційного типу (Теорема 3)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "En suivant la construction du Théorème 3, expliquer comment obtenir un automate qui reconnaît le langage décrit par l'expression régulière R = a* · b sur Σ = {a, b}.",
              en: "Following the construction of Theorem 3, explain how to obtain an automaton recognizing the language described by the regular expression R = a* · b over Σ = {a, b}.",
              uk: "Слідуючи конструкції Теореми 3, поясніть, як отримати автомат, який розпізнає мову, описану регулярним виразом R = a* · b над Σ = {a, b}.",
            },
            solution: {
              fr: "Solution :",
              en: "Solution:",
              uk: "Розв'язок:",
            },
            solutionItems: [
              {
                fr: "On part de l'automate élémentaire de a (deux états reliés par une transition a) et on applique la construction d'étoile pour R₁ = a* : un nouvel état initial et final plus une transition ε de retour vers le début permettent de répéter a un nombre arbitraire de fois, y compris zéro.",
                en: "Start from the elementary automaton for a (two states linked by an a-transition) and apply the Kleene-star construction for R₁ = a*: a new initial and final state plus an ε-transition looping back to the start allow a to be repeated arbitrarily many times, including zero.",
                uk: "Починаємо з елементарного автомата для a (два стани, з'єднані переходом a) і застосовуємо конструкцію зірки для R₁ = a*: новий початковий і кінцевий стан плюс перехід ε назад до початку дозволяють повторювати a довільну кількість разів, зокрема нуль.",
              },
              {
                fr: "On applique ensuite la concaténation avec l'automate élémentaire de b : une transition ε relie l'état final de a* à l'état initial de b.",
                en: "Then apply concatenation with the elementary automaton for b: an ε-transition links the final state of a* to the initial state of b.",
                uk: "Далі застосовуємо конкатенацію з елементарним автоматом для b: перехід ε з'єднує кінцевий стан a* з початковим станом b.",
              },
              {
                fr: "Le NFA obtenu accepte exactement les mots composés de zéro ou plusieurs a suivis d'un seul b : L = {aⁿ b | n ≥ 0}.",
                en: "The resulting NFA accepts exactly the words made of zero or more a's followed by a single b: L = {aⁿ b | n ≥ 0}.",
                uk: "Отриманий NFA приймає саме ті слова, що складаються з нуля або кількох a, за якими йде єдине b: L = {aⁿ b | n ≥ 0}.",
              },
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
    text: {
      fr: "Fiche Réflexe Examen : Modèle de Rédaction",
      en: "Exam Quick-Reference: Model Answer Template",
      uk: "Шпаргалка до іспиту: Зразок відповіді",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Si vous avez une question d'examen du type :** « Décrivez en français le langage reconnu par l'expression régulière R. »",
      en: "**If you get an exam question like:** \"Describe in French the language recognized by the regular expression R.\"",
      uk: "**Якщо у вас екзаменаційне питання такого типу:** «Опишіть французькою мову, яку розпізнає регулярний вираз R.»",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Utilisez ce modèle de réponse structuré pour bien montrer au correcteur que vous avez compris les symboles :**",
      en: "**Use this structured answer template to clearly show the marker that you have understood the symbols:**",
      uk: "**Використайте цей структурований зразок відповіді, щоб чітко показати перевіряльнику, що ви зрозуміли символи:**",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Analyse syntaxique de l'expression régulière R :**",
      en: "**Syntactic analysis of the regular expression R:**",
      uk: "**Синтаксичний аналіз регулярного виразу R:**",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "L'opérateur d'union ∪ indique une alternative (le mot doit correspondre soit à la partie gauche, soit à la partie droite).",
          en: "The union operator ∪ indicates an alternative (the word must match either the left part or the right part).",
          uk: "Оператор об'єднання ∪ вказує на альтернативу (слово має відповідати або лівій, або правій частині).",
        },
      },
      {
        text: {
          fr: "L'opérateur de concaténation impose que les symboles apparaissent dans cet ordre précis.",
          en: "The concatenation operator requires the symbols to appear in exactly that order.",
          uk: "Оператор конкатенації вимагає, щоб символи зустрічалися саме в цьому порядку.",
        },
      },
      {
        text: {
          fr: "L'étoile de Kleene * indique que l'élément précédent peut être répété zéro, une ou plusieurs fois consécutives.",
          en: "The Kleene star * indicates that the preceding element may be repeated zero, one, or several times in a row.",
          uk: "Зірка Кліні * вказує, що попередній елемент можна повторити нуль, один або кілька разів підряд.",
        },
      },
    ],
  },
  {
    type: "quote",
    text: {
      fr: "**Conclusion de l'analyse :** Le langage décrit par cette expression régulière est l'ensemble : L = {w | w correspond à… [insérez votre description logique ici]}.",
      en: "**Conclusion of the analysis:** The language described by this regular expression is the set: L = {w | w matches… [insert your logical description here]}.",
      uk: "**Висновок аналізу:** Мова, описана цим регулярним виразом, — це множина: L = {w | w відповідає… [вставте тут ваш логічний опис]}.",
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: {
      fr: "Langages réguliers — Partie 4 : Langages non réguliers",
      en: "Regular Languages — Part 4: Non-regular Languages",
      uk: "Регулярні мови — Частина 4: Нерегулярні мови",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "1. Tous les langages ne sont pas réguliers (Section 3.5)",
      en: "1. Not Every Language Is Regular (Section 3.5)",
      uk: "1. Не всі мови є регулярними (Розділ 3.5)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Tous les langages rencontrés jusqu'ici étaient réguliers : reconnus par un automate ou décrits par une expression régulière. La réponse à la question « est-ce toujours le cas ? » est **non**. Considérons le langage L = {aⁿ bⁿ | n ≥ 0} sur l'alphabet Σ = {a, b}.",
      en: "Every language seen so far was regular: recognized by an automaton or described by a regular expression. The answer to “is this always the case?” is **no**. Consider the language L = {aⁿ bⁿ | n ≥ 0} over the alphabet Σ = {a, b}.",
      uk: "Усі мови, які ми зустрічали досі, були регулярними: розпізнавалися автоматом або описувалися регулярним виразом. Відповідь на запитання «чи завжди це так?» — **ні**. Розглянемо мову L = {aⁿ bⁿ | n ≥ 0} над алфавітом Σ = {a, b}.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Pour reconnaître ce langage, il faudrait **compter** le nombre de a et vérifier qu'il est égal au nombre de b. Or un automate à états finis n'a pas de mémoire : il devrait créer un état pour chaque couple possible (zéro a / zéro b, un a / zéro b, zéro a / un b, …), et comme n est un entier quelconque, cela demanderait une **infinité d'états**. C'est impossible.",
      en: "To recognize this language one would have to **count** the a's and check that the count equals the number of b's. But a finite automaton has no memory: it would need one state per possible pair (zero a / zero b, one a / zero b, zero a / one b, …), and since n is an arbitrary integer this would require **infinitely many states**. That is impossible.",
      uk: "Щоб розпізнавати цю мову, довелося б **рахувати** кількість a і перевіряти, що вона дорівнює кількості b. Але скінченний автомат не має пам'яті: йому довелося б створити стан для кожної можливої пари (нуль a / нуль b, один a / нуль b, нуль a / один b, …), а оскільки n — довільне ціле число, це потребувало б **нескінченної кількості станів**. Це неможливо.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "On a donc besoin d'un outil permettant de **prouver qu'un langage n'est pas régulier**. Cet outil est le **lemme de pompage** (pumping lemma) pour les langages réguliers.",
      en: "We therefore need a tool to **prove that a language is not regular**. This tool is the **pumping lemma** for regular languages.",
      uk: "Отже, нам потрібен інструмент, який дозволяє **довести, що мова не є регулярною**. Цей інструмент — **лема про накачування** (pumping lemma) для регулярних мов.",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "2. Lemme 1 : le lemme de pompage",
      en: "2. Lemma 1: The Pumping Lemma",
      uk: "2. Лема 1: лема про накачування",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Lemme 1 (lemme de pompage) :** Si L est un langage régulier, alors il existe un nombre p (appelé longueur de pompage) tel que, pour tout mot w ∈ L avec |w| ≥ p, le mot w peut être décomposé en trois parties w = xyz satisfaisant les trois conditions suivantes :",
      en: "**Lemma 1 (pumping lemma):** If L is a regular language, then there exists a number p (called the pumping length) such that, for every word w ∈ L with |w| ≥ p, the word w can be split into three parts w = xyz satisfying the following three conditions:",
      uk: "**Лема 1 (лема про накачування):** Якщо L — регулярна мова, то існує число p (яке називають довжиною накачування) таке, що для будь-якого слова w ∈ L з |w| ≥ p слово w можна розкласти на три частини w = xyz, які задовольняють такі три умови:",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "xyⁱz ∈ L pour tout i ≥ 0 (le segment y peut être répété ou supprimé).",
          en: "xyⁱz ∈ L for every i ≥ 0 (the segment y can be repeated or deleted).",
          uk: "xyⁱz ∈ L для будь-якого i ≥ 0 (сегмент y можна повторювати або видаляти).",
        },
      },
      {
        text: {
          fr: "|y| > 0 (le segment y n'est pas vide).",
          en: "|y| > 0 (the segment y is not empty).",
          uk: "|y| > 0 (сегмент y не порожній).",
        },
      },
      {
        text: {
          fr: "|xy| ≤ p (le segment xy est court).",
          en: "|xy| ≤ p (the segment xy is short).",
          uk: "|xy| ≤ p (сегмент xy короткий).",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "énoncé du lemme de pompage",
      en: "statement of the pumping lemma",
      uk: "формулювання леми про накачування",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Que garantit le lemme de pompage pour un langage régulier L ?",
        en: "What does the pumping lemma guarantee for a regular language L?",
        uk: "Що гарантує лема про накачування для регулярної мови L?",
      },
      options: [
        {
          text: {
            fr: "Tout mot de L est de longueur au plus p",
            en: "Every word of L has length at most p",
            uk: "Кожне слово з L має довжину не більше p",
          },
          feedback: {
            fr: "Non : L peut contenir des mots arbitrairement longs ; la longueur p ne borne que le segment xy dans la décomposition.",
            en: "No: L may contain arbitrarily long words; the length p only bounds the segment xy in the decomposition.",
            uk: "Ні: L може містити як завгодно довгі слова; довжина p обмежує лише сегмент xy в розкладі.",
          },
        },
        {
          text: {
            fr: "Il existe p tel que tout mot w ∈ L assez long s'écrit xyz avec |xy| ≤ p, |y| > 0 et xyⁱz ∈ L pour tout i ≥ 0",
            en: "There exists p such that every long enough w ∈ L can be written xyz with |xy| ≤ p, |y| > 0, and xyⁱz ∈ L for all i ≥ 0",
            uk: "Існує таке p, що будь-яке достатньо довге слово w ∈ L записується як xyz з |xy| ≤ p, |y| > 0 і xyⁱz ∈ L для будь-якого i ≥ 0",
          },
        },
        {
          text: {
            fr: "L est un langage fini",
            en: "L is a finite language",
            uk: "L — скінченна мова",
          },
          feedback: {
            fr: "Non : beaucoup de langages réguliers sont infinis (par exemple a*).",
            en: "No: many regular languages are infinite (for example a*).",
            uk: "Ні: багато регулярних мов є нескінченними (наприклад, a*).",
          },
        },
        {
          text: {
            fr: "Tout mot de L peut s'écrire xy avec |x| = |y|",
            en: "Every word of L can be written xy with |x| = |y|",
            uk: "Кожне слово з L можна записати як xy з |x| = |y|",
          },
          feedback: {
            fr: "Non : rien n'impose que x et y aient la même longueur dans le lemme.",
            en: "No: nothing forces x and y to have the same length in the lemma.",
            uk: "Ні: у лемі ніщо не вимагає, щоб x та y мали однакову довжину.",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "Le lemme de pompage affirme l'existence d'une longueur p telle que tout mot w ∈ L avec |w| ≥ p se décompose en **w = xyz** avec **|xy| ≤ p**, **|y| > 0** et **xyⁱz ∈ L pour tout i ≥ 0**. C'est le segment y (une boucle de l'automate) que l'on peut « pomper ».",
        en: "The pumping lemma states that there is a length p such that every w ∈ L with |w| ≥ p splits as **w = xyz** with **|xy| ≤ p**, **|y| > 0**, and **xyⁱz ∈ L for every i ≥ 0**. It is the segment y (a loop of the automaton) that can be “pumped”.",
        uk: "Лема про накачування стверджує існування такої довжини p, що будь-яке слово w ∈ L з |w| ≥ p розкладається на **w = xyz** з **|xy| ≤ p**, **|y| > 0** та **xyⁱz ∈ L для будь-якого i ≥ 0**. Саме сегмент y (петлю автомата) можна «накачувати».",
      },
    },
  },
  {
    type: "heading",
    level: 4,
    text: {
      fr: "Démonstration (principe des tiroirs)",
      en: "Proof (Pigeonhole Principle)",
      uk: "Доведення (принцип Діріхле)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "L étant régulier, il existe un automate déterministe M = (Q, Σ, δ, q₀, F) qui reconnaît L. On pose p = |Q|, le nombre d'états de M.",
      en: "Since L is regular, there is a deterministic automaton M = (Q, Σ, δ, q₀, F) recognizing L. Let p = |Q|, the number of states of M.",
      uk: "Оскільки L регулярна, існує детермінований автомат M = (Q, Σ, δ, q₀, F), який розпізнає L. Покладемо p = |Q| — кількість станів M.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Soit w = a₁a₂…aₙ ∈ L avec n ≥ p. Notons s₁, s₂, …, sₙ₊₁ la suite des états traversés pendant la lecture de w, où s₁ = q₀ (état initial) et δ(sᵢ, aᵢ) = sᵢ₊₁ pour tout i.",
      en: "Let w = a₁a₂…aₙ ∈ L with n ≥ p. Denote by s₁, s₂, …, sₙ₊₁ the sequence of states visited while reading w, where s₁ = q₀ (initial state) and δ(sᵢ, aᵢ) = sᵢ₊₁ for every i.",
      uk: "Нехай w = a₁a₂…aₙ ∈ L, де n ≥ p. Позначимо через s₁, s₂, …, sₙ₊₁ послідовність станів, пройдених під час читання w, де s₁ = q₀ (початковий стан) і δ(sᵢ, aᵢ) = sᵢ₊₁ для будь-якого i.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Cette suite comporte n + 1 ≥ p + 1 états, mais l'ensemble Q ne contient que p états distincts. Par le **principe des tiroirs**, deux positions de la suite correspondent nécessairement au même état : il existe deux indices k < l tels que sₖ = sₗ et l ≤ p + 1.",
      en: "This sequence contains n + 1 ≥ p + 1 states, but the set Q has only p distinct states. By the **pigeonhole principle**, two positions of the sequence must correspond to the same state: there exist two indices k < l such that sₖ = sₗ and l ≤ p + 1.",
      uk: "Ця послідовність містить n + 1 ≥ p + 1 станів, але множина Q містить лише p різних станів. За **принципом Діріхле**, дві позиції послідовності обов'язково відповідають одному й тому самому стану: існують два індекси k < l такі, що sₖ = sₗ і l ≤ p + 1.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Posons alors x = a₁…aₖ₋₁, y = aₖ…aₗ₋₁ et z = aₗ…aₙ. Comme sₖ = sₗ, le segment y forme une **boucle** : on peut le répéter (le « pomper ») ou le supprimer sans modifier l'état d'arrivée, d'où xyⁱz ∈ L pour tout i ≥ 0. De plus y ≠ ε car k < l, et |xy| ≤ p car l ≤ p + 1. Le lemme est démontré. ∎",
      en: "Now set x = a₁…aₖ₋₁, y = aₖ…aₗ₋₁ and z = aₗ…aₙ. Since sₖ = sₗ, the segment y forms a **loop**: it can be repeated (pumped) or deleted without changing the arrival state, hence xyⁱz ∈ L for every i ≥ 0. Moreover y ≠ ε because k < l, and |xy| ≤ p because l ≤ p + 1. The lemma is proved. ∎",
      uk: "Покладемо тоді x = a₁…aₖ₋₁, y = aₖ…aₗ₋₁ і z = aₗ…aₙ. Оскільки sₖ = sₗ, сегмент y утворює **петлю**: його можна повторювати («накачувати») або видаляти, не змінюючи кінцевого стану, звідки xyⁱz ∈ L для будь-якого i ≥ 0. Крім того, y ≠ ε, бо k < l, і |xy| ≤ p, бо l ≤ p + 1. Лему доведено. ∎",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "3. Méthode en 5 étapes pour prouver qu'un langage n'est pas régulier",
      en: "3. Five-Step Method to Prove a Language Is Not Regular",
      uk: "3. Метод із 5 кроків, щоб довести, що мова не є регулярною",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Supposer, par l'absurde, que L est régulier** et noter p la longueur de pompage donnée par le lemme.",
          en: "**Assume, for contradiction, that L is regular** and let p be the pumping length given by the lemma.",
          uk: "**Припустимо, від супротивного, що L регулярна** і позначимо через p довжину накачування, що її дає лема.",
        },
      },
      {
        text: {
          fr: "**Choisir un mot w ∈ L « assez long »** (|w| ≥ p), en gardant p comme variable. Par exemple w = aᵖ bᵖ pour {aⁿ bⁿ}.",
          en: "**Choose a word w ∈ L that is “long enough”** (|w| ≥ p), keeping p as a variable. For example w = aᵖ bᵖ for {aⁿ bⁿ}.",
          uk: "**Виберіть слово w ∈ L «досить довге»** (|w| ≥ p), зберігаючи p як змінну. Наприклад, w = aᵖ bᵖ для {aⁿ bⁿ}.",
        },
      },
      {
        text: {
          fr: "**Utiliser la décomposition w = xyz** imposée par le lemme, avec |xy| ≤ p et |y| ≥ 1, pour en déduire la forme de y (ici, y ne contient que des a).",
          en: "**Use the decomposition w = xyz** required by the lemma, with |xy| ≤ p and |y| ≥ 1, to deduce the shape of y (here, y contains only a's).",
          uk: "**Використайте розклад w = xyz**, що його нав'язує лема, з |xy| ≤ p та |y| ≥ 1, щоб вивести звідси форму y (тут y містить лише a).",
        },
      },
      {
        text: {
          fr: "**Pomper avec une valeur de i bien choisie** (souvent i = 0 ou i = 2) pour fabriquer un mot xyⁱz qui n'appartient pas à L.",
          en: "**Pump with a well-chosen value of i** (often i = 0 or i = 2) to build a word xyⁱz that does not belong to L.",
          uk: "**Накачайте з добре підібраним значенням i** (часто i = 0 або i = 2), щоб отримати слово xyⁱz, яке не належить L.",
        },
      },
      {
        text: {
          fr: "**Conclure à la contradiction :** le lemme impose xyⁱz ∈ L, donc l'hypothèse initiale est fausse et L n'est pas régulier. ∎",
          en: "**Conclude the contradiction:** the lemma requires xyⁱz ∈ L, so the initial assumption is false and L is not regular. ∎",
          uk: "**Зробіть висновок про протиріччя:** лема вимагає xyⁱz ∈ L, тому початкове припущення хибне і L не є регулярною. ∎",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: {
      fr: "méthode en 5 étapes",
      en: "five-step method",
      uk: "метод із 5 кроків",
    },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans la méthode en 5 étapes, quelle valeur de i choisit-on souvent pour faire « disparaître » le segment y et obtenir une contradiction ?",
        en: "In the five-step method, which value of i is often chosen to make the segment y “disappear” and reach a contradiction?",
        uk: "У методі з 5 кроків яке значення i часто обирають, щоб «змусити зникнути» сегмент y і отримати протиріччя?",
      },
      options: [
        { text: { fr: "i = 1", en: "i = 1", uk: "i = 1" }, feedback: { fr: "i = 1 redonne le mot xyz de départ, sans contradiction.", en: "i = 1 gives back the original word xyz, with no contradiction.", uk: "i = 1 повертає вихідне слово xyz без протиріччя." } },
        { text: { fr: "i = 0", en: "i = 0", uk: "i = 0" } },
        { text: { fr: "i = |y|", en: "i = |y|", uk: "i = |y|" }, feedback: { fr: "La valeur de i importe peu ici : seule compte la suppression (i = 0) ou la répétition (i = 2).", en: "The value of i is irrelevant here: only deletion (i = 0) or repetition (i = 2) matters.", uk: "Значення i тут не має значення: важливі лише видалення (i = 0) або повторення (i = 2)." } },
        { text: { fr: "i = p", en: "i = p", uk: "i = p" }, feedback: { fr: "On pompe avec une petite valeur entière (souvent 0 ou 2), pas avec la longueur de pompage elle-même.", en: "We pump with a small integer (often 0 or 2), not with the pumping length itself.", uk: "Накачуємо малим цілим значенням (часто 0 або 2), а не самою довжиною накачування." } },
      ],
      answerIndex: 1,
      solution: {
        fr: "Avec **i = 0**, le segment y est supprimé : xy⁰z = xz. Pour {aⁿ bⁿ}, xz a alors moins de a que de b, donc xz ∉ L — ce qui contredit le lemme et prouve que L n'est pas régulier.",
        en: "With **i = 0**, the segment y is deleted: xy⁰z = xz. For {aⁿ bⁿ}, xz then has fewer a's than b's, so xz ∉ L — contradicting the lemma and proving L is not regular.",
        uk: "За **i = 0** сегмент y видаляється: xy⁰z = xz. Для {aⁿ bⁿ} тоді в xz менше a, ніж b, тому xz ∉ L — це суперечить лемі й доводить, що L не є регулярною.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "4. Exemple complet : {aⁿ bⁿ | n ≥ 0} n'est pas régulier",
      en: "4. Full Example: {aⁿ bⁿ | n ≥ 0} Is Not Regular",
      uk: "4. Повний приклад: {aⁿ bⁿ | n ≥ 0} не є регулярною",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Hypothèse :** supposons, par l'absurde, que L = {aⁿ bⁿ | n ≥ 0} soit régulier, et soit p la longueur de pompage fournie par le lemme.",
      en: "**Assumption:** suppose, for contradiction, that L = {aⁿ bⁿ | n ≥ 0} is regular, and let p be the pumping length given by the lemma.",
      uk: "**Припущення:** припустимо, від супротивного, що L = {aⁿ bⁿ | n ≥ 0} є регулярною, і нехай p — довжина накачування, що її надає лема.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Choix du mot :** posons w = aᵖ bᵖ. Ce mot appartient bien à L (avec n = p) et sa longueur vaut |w| = 2p ≥ p.",
      en: "**Choice of word:** set w = aᵖ bᵖ. This word indeed belongs to L (with n = p) and its length is |w| = 2p ≥ p.",
      uk: "**Вибір слова:** покладемо w = aᵖ bᵖ. Це слово справді належить L (при n = p), а його довжина дорівнює |w| = 2p ≥ p.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Décomposition :** le lemme donne w = xyz avec |xy| ≤ p et |y| ≥ 1. Comme |xy| ≤ p, les segments x et y se trouvent dans le bloc des p premiers a : le segment y ne contient que des a, donc y = aᵗ avec t ≥ 1.",
      en: "**Decomposition:** the lemma gives w = xyz with |xy| ≤ p and |y| ≥ 1. Since |xy| ≤ p, the segments x and y lie inside the block of the first p a's: the segment y contains only a's, so y = aᵗ with t ≥ 1.",
      uk: "**Розкладення:** лема дає w = xyz, де |xy| ≤ p та |y| ≥ 1. Оскільки |xy| ≤ p, сегменти x та y лежать у блоці перших p символів a: сегмент y містить лише a, отже y = aᵗ, де t ≥ 1.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Pompage avec i = 0 :** xy⁰z = xz. Dans xz, le nombre de a vaut p − t (strictement moins que p), tandis que le nombre de b reste p. Le mot xz n'a donc pas le même nombre de a et de b, c'est-à-dire xz ∉ L.",
      en: "**Pumping with i = 0:** xy⁰z = xz. In xz the number of a's is p − t (strictly fewer than p), while the number of b's remains p. The word xz therefore has different numbers of a's and b's, that is, xz ∉ L.",
      uk: "**Накачування з i = 0:** xy⁰z = xz. У xz кількість літер a дорівнює p − t (строго менше ніж p), тоді як кількість літер b залишається p. Отже, слово xz має різну кількість літер a та b, тобто xz ∉ L.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Contradiction :** le lemme garantit xyⁱz ∈ L pour tout i ≥ 0, en particulier pour i = 0. Comme xz ∉ L, l'hypothèse est contredite. Le langage L = {aⁿ bⁿ | n ≥ 0} n'est donc **pas régulier**. ∎",
      en: "**Contradiction:** the lemma guarantees xyⁱz ∈ L for every i ≥ 0, in particular for i = 0. Since xz ∉ L, the assumption is contradicted. The language L = {aⁿ bⁿ | n ≥ 0} is therefore **not regular**. ∎",
      uk: "**Суперечність:** лема гарантує xyⁱz ∈ L для всіх i ≥ 0, зокрема для i = 0. Оскільки xz ∉ L, припущення суперечливе. Отже, мова L = {aⁿ bⁿ | n ≥ 0} **не є регулярною**. ∎",
    },
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "5. Autres exemples classiques",
      en: "5. Other Classic Examples",
      uk: "5. Інші класичні приклади",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**{ww | w ∈ {a, b}*}** n'est pas régulier : on choisit le mot aᵖ b aᵖ b (c'est-à-dire ww avec w = aᵖ b) et on pompe avec i = 2. Le segment y étant dans les premiers a, la première moitié grandit et les deux moitiés ne coïncident plus.",
          en: "**{ww | w ∈ {a, b}*}** is not regular: choose the word aᵖ b aᵖ b (that is, ww with w = aᵖ b) and pump with i = 2. Since y lies in the leading a's, the first half grows and the two halves no longer match.",
          uk: "**{ww | w ∈ {a, b}*}** не є регулярною: вибираємо слово aᵖ b aᵖ b (тобто ww, де w = aᵖ b) і накачуємо з i = 2. Оскільки сегмент y лежить серед перших символів a, перша половина зростає, і обидві половини більше не збігаються.",
        },
      },
      {
        text: {
          fr: "**{aⁿ² | n ≥ 0}** (mots de longueur un carré) n'est pas régulier : on choisit w = aᵖ² et on pompe avec i = 2. La longueur devient p² + t avec 1 ≤ t ≤ p, strictement comprise entre p² et (p + 1)² = p² + 2p + 1 : ce n'est plus un carré.",
          en: "**{aⁿ² | n ≥ 0}** (words whose length is a perfect square) is not regular: choose w = aᵖ² and pump with i = 2. The length becomes p² + t with 1 ≤ t ≤ p, strictly between p² and (p + 1)² = p² + 2p + 1: it is no longer a square.",
          uk: "**{aⁿ² | n ≥ 0}** (слова, довжина яких є квадратом) не є регулярною: вибираємо w = aᵖ² і накачуємо з i = 2. Довжина стає p² + t, де 1 ≤ t ≤ p, строго між p² та (p + 1)² = p² + 2p + 1: це вже не квадрат.",
        },
      },
      {
        text: {
          fr: "**{aⁱ bʲ | i > j}** n'est pas régulier : on choisit w = aᵖ⁺¹ bᵖ et on pompe avec i = 0. Il reste p + 1 − t lettres a avec t ≥ 1, soit au plus p lettres a pour p lettres b : la condition i > j n'est plus vérifiée.",
          en: "**{aⁱ bʲ | i > j}** is not regular: choose w = aᵖ⁺¹ bᵖ and pump with i = 0. There remain p + 1 − t a's with t ≥ 1, that is at most p a's for p b's: the condition i > j no longer holds.",
          uk: "**{aⁱ bʲ | i > j}** не є регулярною: вибираємо w = aᵖ⁺¹ bᵖ і накачуємо з i = 0. Залишається p + 1 − t літер a, де t ≥ 1, тобто щонайбільше p літер a на p літер b: умова i > j більше не виконується.",
        },
      },
    ],
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: {
      fr: "Exercices d'Entraînement",
      en: "Practice Exercises",
      uk: "Тренувальні вправи",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section A : Vrai ou Faux (Justifiez)",
          en: "Section A: True or False (Justify)",
          uk: "Частина A: правда чи хиба (обґрунтуйте)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Le langage L = {aⁿ bⁿ | n ≥ 0} est un langage régulier.",
              en: "The language L = {aⁿ bⁿ | n ≥ 0} is a regular language.",
              uk: "Твердження: мова L = {aⁿ bⁿ | n ≥ 0} є регулярною мовою.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Un automate fini n'a pas de mémoire pour compter et comparer le nombre de a et de b ; le lemme de pompage prouve que ce langage n'est pas régulier.",
              en: "**False.** A finite automaton has no memory to count and compare the number of a's and b's; the pumping lemma proves this language is not regular.",
              uk: "**Хиба.** Скінченний автомат не має пам'яті, щоб підраховувати й порівнювати кількість літер a та b; лема про накачування доводить, що ця мова не є регулярною.",
            },
            mistake: {
              fr: "Peux-tu compter un nombre arbitraire de symboles avec un nombre fini d'états ?",
              en: "Can you count an arbitrary number of symbols with finitely many states?",
              uk: "Чи можеш ти порахувати довільну кількість символів за допомогою скінченної кількості станів?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Le lemme de pompage sert à démontrer qu'un langage est régulier.",
              en: "The pumping lemma is used to prove that a language is regular.",
              uk: "Твердження: лема про накачування слугує для доведення того, що мова є регулярною.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Le lemme de pompage est un outil de **non-régularité** : on l'utilise par l'absurde pour montrer qu'un langage n'est pas régulier. Il ne prouve jamais la régularité.",
              en: "**False.** The pumping lemma is a **non-regularity** tool: it is used by contradiction to show a language is not regular. It never proves regularity.",
              uk: "**Хиба.** Лема про накачування є інструментом **нерегулярності**: її використовують від супротивного, щоб показати, що мова не є регулярною. Вона ніколи не доводить регулярність.",
            },
            mistake: {
              fr: "Pour montrer qu'un langage EST régulier, on construit un automate ou une expression régulière.",
              en: "To show a language IS regular, build an automaton or a regular expression.",
              uk: "Щоб показати, що мова Є регулярною, будують автомат або регулярний вираз.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Dans le lemme de pompage, le segment y de la décomposition w = xyz est toujours non vide.",
              en: "In the pumping lemma, the segment y of the decomposition w = xyz is always non-empty.",
              uk: "Твердження: у лемі про накачування сегмент y розкладення w = xyz завжди непорожній.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** Le lemme impose |y| ≥ 1 : c'est ce qui rend le pompage non trivial (sinon rien ne changerait).",
              en: "**True.** The lemma requires |y| ≥ 1: this is what makes pumping non-trivial (otherwise nothing would change).",
              uk: "**Правда.** Лема вимагає |y| ≥ 1: саме це робить накачування нетривіальним (інакше нічого б не змінювалося).",
            },
            mistake: {
              fr: "Rappelle-toi la condition 2 du lemme : |y| > 0.",
              en: "Recall condition 2 of the lemma: |y| > 0.",
              uk: "Пригадай умову 2 леми: |y| > 0.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section B : Question à Choix Multiple (QCM)",
          en: "Section B: Multiple Choice Questions (MCQ)",
          uk: "Частина B: питання з вибором однієї відповіді (тест)",
        },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Quelles conditions la décomposition w = xyz doit-elle satisfaire dans le lemme de pompage ?",
              en: "Which conditions must the decomposition w = xyz satisfy in the pumping lemma?",
              uk: "Які умови має задовольняти розкладення w = xyz у лемі про накачування?",
            },
            options: [
              {
                text: {
                  fr: "xyⁱz ∈ L pour tout i ≥ 0, |y| > 0 et |xy| ≤ p",
                  en: "xyⁱz ∈ L for every i ≥ 0, |y| > 0 and |xy| ≤ p",
                  uk: "xyⁱz ∈ L для всіх i ≥ 0, |y| > 0 та |xy| ≤ p",
                },
              },
              {
                text: {
                  fr: "xyⁱz ∈ L pour tout i ≥ 1, |y| ≥ 0 et |xy| ≤ p",
                  en: "xyⁱz ∈ L for every i ≥ 1, |y| ≥ 0 and |xy| ≤ p",
                  uk: "xyⁱz ∈ L для всіх i ≥ 1, |y| ≥ 0 та |xy| ≤ p",
                },
                feedback: {
                  fr: "Le pompage inclut i = 0 (on peut supprimer y) et y doit être non vide (|y| > 0).",
                  en: "Pumping includes i = 0 (y may be deleted) and y must be non-empty (|y| > 0).",
                  uk: "Накачування включає i = 0 (можна видалити y), і y має бути непорожнім (|y| > 0).",
                },
              },
              {
                text: {
                  fr: "xyz ∈ L seulement pour i = 1, avec |y| > 0",
                  en: "xyz ∈ L only for i = 1, with |y| > 0",
                  uk: "xyz ∈ L лише для i = 1, з |y| > 0",
                },
                feedback: {
                  fr: "Le lemme vaut pour tout i ≥ 0, pas seulement i = 1.",
                  en: "The lemma holds for every i ≥ 0, not only i = 1.",
                  uk: "Лема справджується для всіх i ≥ 0, а не лише для i = 1.",
                },
              },
              {
                text: {
                  fr: "|xy| ≥ p et |y| ≤ p",
                  en: "|xy| ≥ p and |y| ≤ p",
                  uk: "|xy| ≥ p та |y| ≤ p",
                },
                feedback: {
                  fr: "C'est l'inégalité inverse : le segment xy doit être court, |xy| ≤ p.",
                  en: "It is the opposite inequality: the segment xy must be short, |xy| ≤ p.",
                  uk: "Це обернена нерівність: сегмент xy має бути коротким, |xy| ≤ p.",
                },
              },
            ],
            answerIndex: 0,
            solution: {
              fr: "Réponse A : xyⁱz ∈ L pour tout i ≥ 0, |y| > 0 et |xy| ≤ p.",
              en: "Answer A: xyⁱz ∈ L for every i ≥ 0, |y| > 0 and |xy| ≤ p.",
              uk: "Відповідь A: xyⁱz ∈ L для всіх i ≥ 0, |y| > 0 та |xy| ≤ p.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section C : Texte à trous",
          en: "Section C: Fill-in-the-Blanks",
          uk: "Частина C: текст із пропусками",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Pour montrer qu'un langage n'est pas régulier, on raisonne par __________ : on suppose le langage régulier et on note p la __________ de pompage. Comme |xy| ≤ p, le segment y reste dans les p premiers symboles, ce qui limite les décompositions possibles.",
              en: "To show that a language is not regular, we reason by __________: we assume the language is regular and let p be the __________ length. Since |xy| ≤ p, the segment y stays within the first p symbols, which limits the possible decompositions.",
              uk: "Щоб показати, що мова не є регулярною, міркують від __________: припускають, що мова регулярна, і позначають p як __________ накачування. Оскільки |xy| ≤ p, сегмент y залишається в межах перших p символів, що обмежує можливі розкладення.",
            },
            blanks: [
              {
                accepted: ["absurde", "l'absurde", "contradiction", "absurdity"],
                mistakes: [
                  {
                    match: ["recurrence", "induction", "construction", "tiroirs"],
                    feedback: {
                      fr: "Ici on veut prouver une impossibilité : on part de l'hypothèse « L est régulier » pour aboutir à une contradiction.",
                      en: "Here we want to prove an impossibility: we start from the assumption “L is regular” to reach a contradiction.",
                      uk: "Тут ми хочемо довести неможливість: виходимо з припущення «L є регулярною», щоб дійти до суперечності.",
                    },
                  },
                ],
              },
              {
                accepted: ["longueur", "pumping", "longueur de pompage", "pumping length"],
                mistakes: [
                  {
                    match: ["etat", "state", "transition", "mot", "word"],
                    feedback: {
                      fr: "Le nombre p fourni par le lemme est la longueur de pompage (pumping length).",
                      en: "The number p given by the lemma is the pumping length.",
                      uk: "Число p, яке дає лема, — це довжина накачування (pumping length).",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Réponses : absurde · longueur (de pompage).",
              en: "Answers: contradiction · pumping (length).",
              uk: "Відповіді: супротивного · довжина (накачування).",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section D : Exercices de type Examen",
          en: "Section D: Exam-style Exercises",
          uk: "Частина D: вправи у форматі іспиту",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "En utilisant le lemme de pompage, prouver que le langage L = {0ⁿ 1ⁿ | n ≥ 0} n'est pas régulier.",
              en: "Using the pumping lemma, prove that the language L = {0ⁿ 1ⁿ | n ≥ 0} is not regular.",
              uk: "Використовуючи лему про накачування, доведіть, що мова L = {0ⁿ 1ⁿ | n ≥ 0} не є регулярною.",
            },
            solution: {
              fr: "Solution :",
              en: "Solution:",
              uk: "Розв'язання:",
            },
            solutionItems: [
              {
                fr: "Supposons, par l'absurde, que L soit régulier et soit p la longueur de pompage.",
                en: "Assume, for contradiction, that L is regular and let p be the pumping length.",
                uk: "Припустимо від супротивного, що L є регулярною, і нехай p — довжина накачування.",
              },
              {
                fr: "Choisissons w = 0ᵖ 1ᵖ ∈ L. On a |w| = 2p ≥ p.",
                en: "Choose w = 0ᵖ 1ᵖ ∈ L. We have |w| = 2p ≥ p.",
                uk: "Виберемо w = 0ᵖ 1ᵖ ∈ L. Маємо |w| = 2p ≥ p.",
              },
              {
                fr: "Le lemme donne w = xyz avec |xy| ≤ p et |y| ≥ 1. Comme |xy| ≤ p, y ne contient que des 0 : y = 0ᵗ avec t ≥ 1.",
                en: "The lemma gives w = xyz with |xy| ≤ p and |y| ≥ 1. Since |xy| ≤ p, y contains only 0's: y = 0ᵗ with t ≥ 1.",
                uk: "Лема дає w = xyz, де |xy| ≤ p та |y| ≥ 1. Оскільки |xy| ≤ p, y містить лише 0: y = 0ᵗ, де t ≥ 1.",
              },
              {
                fr: "Pompons avec i = 0 : xz contient p − t zéros mais toujours p uns. Donc xz ∉ L.",
                en: "Pump with i = 0: xz contains p − t zeros but still p ones. Hence xz ∉ L.",
                uk: "Накачаємо з i = 0: xz містить p − t нулів, але все ще p одиниць. Отже, xz ∉ L.",
              },
              {
                fr: "Contradiction avec le lemme (qui exige xy⁰z ∈ L) : L = {0ⁿ 1ⁿ | n ≥ 0} n'est pas régulier. ∎",
                en: "This contradicts the lemma (which requires xy⁰z ∈ L): L = {0ⁿ 1ⁿ | n ≥ 0} is not regular. ∎",
                uk: "Суперечність із лемою (яка вимагає xy⁰z ∈ L): L = {0ⁿ 1ⁿ | n ≥ 0} не є регулярною. ∎",
              },
            ],
          },
          {
            kind: "open",
            prompt: {
              fr: "Prouver que le langage L = {aⁿ bᵐ | n > m ≥ 0} n'est pas régulier.",
              en: "Prove that the language L = {aⁿ bᵐ | n > m ≥ 0} is not regular.",
              uk: "Доведіть, що мова L = {aⁿ bᵐ | n > m ≥ 0} не є регулярною.",
            },
            solution: {
              fr: "Solution :",
              en: "Solution:",
              uk: "Розв'язання:",
            },
            solutionItems: [
              {
                fr: "Supposons L régulier et soit p la longueur de pompage.",
                en: "Assume L is regular and let p be the pumping length.",
                uk: "Припустимо, що L є регулярною, і нехай p — довжина накачування.",
              },
              {
                fr: "Choisissons w = aᵖ⁺¹ bᵖ ∈ L : on a |w| = 2p + 1 ≥ p et le nombre de a dépasse bien celui de b.",
                en: "Choose w = aᵖ⁺¹ bᵖ ∈ L: we have |w| = 2p + 1 ≥ p and the number of a's indeed exceeds that of b's.",
                uk: "Виберемо w = aᵖ⁺¹ bᵖ ∈ L: маємо |w| = 2p + 1 ≥ p, і кількість літер a справді перевищує кількість літер b.",
              },
              {
                fr: "Le lemme donne w = xyz avec |xy| ≤ p et |y| ≥ 1, donc y = aᵗ avec t ≥ 1 (y reste dans le bloc des a).",
                en: "The lemma gives w = xyz with |xy| ≤ p and |y| ≥ 1, so y = aᵗ with t ≥ 1 (y stays in the block of a's).",
                uk: "Лема дає w = xyz, де |xy| ≤ p та |y| ≥ 1, отже y = aᵗ, де t ≥ 1 (y залишається в блоці літер a).",
              },
              {
                fr: "Pompons avec i = 0 : xz contient p + 1 − t lettres a et p lettres b. Comme t ≥ 1, on a p + 1 − t ≤ p, donc le nombre de a n'est plus strictement supérieur au nombre de b : xz ∉ L.",
                en: "Pump with i = 0: xz contains p + 1 − t a's and p b's. Since t ≥ 1, p + 1 − t ≤ p, so the number of a's is no longer strictly greater than the number of b's: xz ∉ L.",
                uk: "Накачаємо з i = 0: xz містить p + 1 − t літер a та p літер b. Оскільки t ≥ 1, маємо p + 1 − t ≤ p, отже кількість літер a вже не є строго більшою за кількість літер b: xz ∉ L.",
              },
              {
                fr: "Contradiction : L = {aⁿ bᵐ | n > m ≥ 0} n'est pas régulier. ∎",
                en: "Contradiction: L = {aⁿ bᵐ | n > m ≥ 0} is not regular. ∎",
                uk: "Суперечність: L = {aⁿ bᵐ | n > m ≥ 0} не є регулярною. ∎",
              },
            ],
          },
        ],
      },
    ],
  },
];

const examBlancs: Block[] = [
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "Examen Blanc Global (Chapitres 1, 2 et 3)",
      en: "Global Mock Exam (Chapters 1, 2 and 3)",
      uk: "Загальний пробний іспит (розділи 1, 2 та 3)",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section 1 : Langages et Mots (Chapitre 1)",
          en: "Section 1: Languages and Words (Chapter 1)",
          uk: "Частина 1: мови та слова (розділ 1)",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Soit l'alphabet Σ = {0, 1}. Soient deux langages L₁ = {0, 10} et L₂ = {ε, 1}. Calculez l'ensemble exact des mots pour la concaténation L₁ · L₂. Réponse : L₁ · L₂ = _________.",
              en: "Let the alphabet be Σ = {0, 1}. Let two languages be L₁ = {0, 10} and L₂ = {ε, 1}. Compute the exact set of words for the concatenation L₁ · L₂. Answer: L₁ · L₂ = _________.",
              uk: "Нехай алфавіт Σ = {0, 1}. Нехай дві мови L₁ = {0, 10} та L₂ = {ε, 1}. Обчисліть точну множину слів для конкатенації L₁ · L₂. Відповідь: L₁ · L₂ = _________.",
            },
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
                    feedback: {
                      fr: "Il manque un mot ! Chaque mot de L₁ se combine avec ε ET avec 1 : vérifie en particulier 10 · 1.",
                      en: "A word is missing! Each word of L₁ combines with ε AND with 1: check 10 · 1 in particular.",
                      uk: "Бракує одного слова! Кожне слово з L₁ поєднується з ε ТА з 1: перевір зокрема 10 · 1.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "L₁ · L₂ = {0, 01, 10, 101} — détail : 0 · ε = 0, 0 · 1 = 01, 10 · ε = 10, 10 · 1 = 101.",
              en: "L₁ · L₂ = {0, 01, 10, 101} — detail: 0 · ε = 0, 0 · 1 = 01, 10 · ε = 10, 10 · 1 = 101.",
              uk: "L₁ · L₂ = {0, 01, 10, 101} — детально: 0 · ε = 0, 0 · 1 = 01, 10 · ε = 10, 10 · 1 = 101.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : La fermeture de Kleene du langage vide, notée ∅*, est égale au langage vide ∅.",
              en: "Statement: The Kleene closure of the empty language, denoted ∅*, is equal to the empty language ∅.",
              uk: "Твердження: зірка Кліні порожньої мови, позначена ∅*, дорівнює порожній мові ∅.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** ∅* = {ε} : la puissance zéro de n'importe quel langage vaut {ε}, et L* = ⋃ Lᵏ (pour k ≥ 0) inclut toujours L⁰.",
              en: "**False.** ∅* = {ε}: the zero power of any language is {ε}, and L* = ⋃ Lᵏ (for k ≥ 0) always includes L⁰.",
              uk: "**Хиба.** ∅* = {ε}: нульовий степінь будь-якої мови дорівнює {ε}, а L* = ⋃ Lᵏ (для k ≥ 0) завжди включає L⁰.",
            },
            mistake: {
              fr: "Rappelle-toi la définition L* = ⋃ Lᵏ : que vaut la puissance L⁰ pour n'importe quel langage ?",
              en: "Remember the definition L* = ⋃ Lᵏ: what is the power L⁰ for any language?",
              uk: "Пригадай означення L* = ⋃ Lᵏ: чому дорівнює степінь L⁰ для будь-якої мови?",
            },
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Si w = 0110, quel ensemble représente tous les préfixes de w ?",
              en: "If w = 0110, which set represents all the prefixes of w?",
              uk: "Якщо w = 0110, яка множина представляє всі префікси w?",
            },
            options: [
              {
                text: "{0, 01, 011, 0110}",
                feedback: {
                  fr: "Il manque ε : le mot vide est toujours un préfixe (et le mot lui-même aussi).",
                  en: "ε is missing: the empty word is always a prefix (and the word itself too).",
                  uk: "Бракує ε: порожнє слово завжди є префіксом (і саме слово теж).",
                },
              },
              { text: "{ε, 0, 01, 011, 0110}" },
              {
                text: "{ε, 0, 10, 110, 0110}",
                feedback: {
                  fr: "Attention : un préfixe se lit depuis le DÉBUT du mot — 10 et 110 n'en sont pas (ce sont des suffixes).",
                  en: "Careful: a prefix is read from the START of the word — 10 and 110 are not prefixes (they are suffixes).",
                  uk: "Увага: префікс читається з ПОЧАТКУ слова — 10 та 110 ними не є (це суфікси).",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "Réponse B : {ε, 0, 01, 011, 0110} — un préfixe se lit depuis le début du mot, ε inclus, jusqu'au mot lui-même.",
              en: "Answer B: {ε, 0, 01, 011, 0110} — a prefix is read from the beginning of the word, ε included, up to the word itself.",
              uk: "Відповідь B: {ε, 0, 01, 011, 0110} — префікс читається з початку слова, включно з ε, аж до самого слова.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section 2 : Techniques de Preuve (Chapitre 2)",
          en: "Section 2: Proof Techniques (Chapter 2)",
          uk: "Частина 2: техніки доведення (розділ 2)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Dans un groupe de 13 étudiants, prouvez en une phrase simple qu'au moins deux étudiants sont obligatoirement nés le même mois. Identifiez clairement vos « objets » et vos « compartiments ».",
              en: "In a group of 13 students, prove in one simple sentence that at least two students must have been born in the same month. Clearly identify your “objects” and your “compartments”.",
              uk: "У групі з 13 студентів доведіть одним простим реченням, що принаймні двоє студентів обов'язково народилися в один і той самий місяць. Чітко визначте свої «об'єкти» та свої «шухляди».",
            },
            details: [
              {
                fr: "Quels sont vos objets, et combien y en a-t-il ?",
                en: "What are your objects, and how many are there?",
                uk: "Які ваші об'єкти, і скільки їх?",
              },
              {
                fr: "Quels sont vos compartiments, et combien y en a-t-il ?",
                en: "What are your compartments, and how many are there?",
                uk: "Які ваші шухляди, і скільки їх?",
              },
            ],
            solution: { fr: "Phrase type :", en: "Model sentence:", uk: "Зразок речення:" },
            solutionItems: [
              {
                fr: "13 étudiants = les objets ; 12 mois possibles = les compartiments.",
                en: "13 students = the objects; 12 possible months = the compartments.",
                uk: "13 студентів = об'єкти; 12 можливих місяців = шухляди.",
              },
              {
                fr: "13 > 12 : le nombre d'objets est strictement supérieur au nombre de compartiments.",
                en: "13 > 12: the number of objects is strictly greater than the number of compartments.",
                uk: "13 > 12: кількість об'єктів строго більша за кількість шухляд.",
              },
              {
                fr: "Donc, par le principe des tiroirs, au moins deux étudiants sont obligatoirement nés le même mois.",
                en: "Therefore, by the pigeonhole principle, at least two students must have been born in the same month.",
                uk: "Отже, за принципом шухляд принаймні двоє студентів обов'язково народилися в один і той самий місяць.",
              },
            ],
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "Dans une preuve par récurrence, vous avez terminé l'étape d'initialisation pour n = 1. Complétez la phrase type qui ouvre la deuxième étape (l'hérédité) : « Supposons que la propriété est vraie pour _________, et _________ qu'elle est vraie pour le rang n. »",
              en: "In a proof by induction, you have completed the initialization step for n = 1. Complete the model sentence that opens the second step (the inductive step): “Suppose the property holds for _________, and _________ that it holds for rank n.”",
              uk: "У доведенні методом математичної індукції ви завершили крок ініціалізації для n = 1. Доповніть зразок речення, що відкриває другий крок (індукційний перехід): «Припустимо, що властивість є істинною для _________, і _________ що вона є істинною для рангу n.»",
            },
            blanks: [
              {
                accepted: [
                  "un certain rang n-1",
                  "un certain rang n−1",
                  "rang n-1",
                  "rang n−1",
                  "un certain rang",
                  "some rank n-1",
                  "some rank n−1",
                  "rank n-1",
                  "rank n−1",
                  "some rank",
                  "n-1",
                  "n−1",
                ],
                mistakes: [
                  {
                    match: ["n"],
                    feedback: {
                      fr: "L'hérédité suppose le rang PRÉCÉDENT (n−1) : c'est l'hypothèse de récurrence. On prouve ensuite le rang n.",
                      en: "The inductive step assumes the PREVIOUS rank (n−1): that is the induction hypothesis. The rank n is then proved.",
                      uk: "Індукційний перехід припускає ПОПЕРЕДНІЙ ранг (n−1): це індукційне припущення. Далі доводять ранг n.",
                    },
                  },
                ],
              },
              {
                accepted: [
                  "prouvons",
                  "démontrons",
                  "montrons",
                  "montrons",
                  "prove",
                  "show",
                  "demonstrate",
                ],
                mistakes: [],
              },
            ],
            solution: {
              fr: "Phrase exacte : « Supposons que la propriété est vraie pour un certain rang n−1, et prouvons qu'elle est vraie pour le rang n. »",
              en: "Exact sentence: “Suppose the property holds for some rank n−1, and let us prove that it holds for rank n.”",
              uk: "Точне речення: «Припустимо, що властивість є істинною для деякого рангу n−1, і доведімо, що вона є істинною для рангу n.»",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "Pour prouver que « un langage est régulier si et seulement s'il est reconnu par un automate » est vrai, vous devez rédiger _________ démonstrations séparées : prouver l'implication _________ (⇒) et prouver l'implication _________ (⇐).",
              en: "To prove that “a language is regular if and only if it is recognized by an automaton” is true, you must write _________ separate proofs: prove the _________ implication (⇒) and prove the _________ implication (⇐).",
              uk: "Щоб довести, що твердження «мова є регулярною тоді й лише тоді, коли вона розпізнається автоматом» є істинним, потрібно написати _________ окремих доведень: довести _________ імплікацію (⇒) та довести _________ імплікацію (⇐).",
            },
            blanks: [
              { accepted: ["deux", "2", "two"], mistakes: [] },
              {
                accepted: ["directe", "direct"],
                mistakes: [
                  {
                    match: ["indirecte", "indirect"],
                    feedback: {
                      fr: "On parle d'implication directe : elle va de X vers Y (⇒).",
                      en: "This is called the direct implication: it goes from X to Y (⇒).",
                      uk: "Йдеться про пряму імплікацію: вона веде від X до Y (⇒).",
                    },
                  },
                ],
              },
              {
                accepted: ["réciproque", "reciproque", "converse"],
                mistakes: [
                  {
                    match: ["inverse"],
                    feedback: {
                      fr: "Attention : « inverse » (¬X ⇒ ¬Y) n'est PAS équivalente à X ⇒ Y. On demande l'implication réciproque (⇐) : « si Y alors X ».",
                      en: "Careful: “inverse” (¬X ⇒ ¬Y) is NOT equivalent to X ⇒ Y. The converse implication (⇐) is requested: “if Y then X”.",
                      uk: "Увага: «протилежна» (¬X ⇒ ¬Y) НЕ є рівносильною X ⇒ Y. Потрібна саме обернена імплікація (⇐): «якщо Y, то X».",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Deux démonstrations : l'implication directe (⇒) et l'implication réciproque (⇐) — c'est la double implication.",
              en: "Two proofs: the direct implication (⇒) and the converse implication (⇐) — this is the double implication.",
              uk: "Два доведення: пряма імплікація (⇒) та обернена імплікація (⇐) — це подвійна імплікація.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section 3 : Langages Réguliers et Automates (Chapitre 3)",
          en: "Section 3: Regular Languages and Automata (Chapter 3)",
          uk: "Частина 3: регулярні мови та автомати (розділ 3)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Décrivez en une phrase le langage reconnu par l'expression régulière suivante : (0 ∪ 1)* 00 (0 ∪ 1)*.",
              en: "Describe in one sentence the language recognized by the following regular expression: (0 ∪ 1)* 00 (0 ∪ 1)*.",
              uk: "Опишіть одним реченням мову, яку розпізнає такий регулярний вираз: (0 ∪ 1)* 00 (0 ∪ 1)*.",
            },
            solution: { fr: "Description :", en: "Description:", uk: "Опис:" },
            solutionItems: [
              {
                fr: "Ce langage contient tous les mots formés de 0 et de 1 qui contiennent la sous-chaîne (le facteur) « 00 ».",
                en: "This language contains all words made of 0 and 1 that contain the substring (the factor) “00”.",
                uk: "Ця мова містить усі слова, утворені з 0 та 1, які містять підрядок (фактор) «00».",
              },
              {
                fr: "L'expression (0 ∪ 1)* de chaque côté signifie « n'importe quelle combinaison avant, et n'importe quelle combinaison après ».",
                en: "The expression (0 ∪ 1)* on each side means “any combination before, and any combination after”.",
                uk: "Вираз (0 ∪ 1)* з кожного боку означає «будь-яка комбінація до та будь-яка комбінація після».",
              },
            ],
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Pour transformer un automate non-déterministe de 4 états en un automate déterministe, le nouvel automate aura toujours exactement 4 états.",
              en: "Statement: To transform a non-deterministic automaton with 4 states into a deterministic automaton, the new automaton will always have exactly 4 states.",
              uk: "Твердження: щоб перетворити недетермінований автомат із 4 станів на детермінований автомат, новий автомат завжди матиме рівно 4 стани.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** La construction par sous-ensembles peut donner jusqu'à 𝒫(Q) : 2⁴ = 16 états pour 4 états d'origine.",
              en: "**False.** The subset construction can yield up to 𝒫(Q): 2⁴ = 16 states from 4 original states.",
              uk: "**Хиба.** Конструкція підмножин може дати аж до 𝒫(Q): 2⁴ = 16 станів для 4 початкових станів.",
            },
            mistake: {
              fr: "Relis le Théorème 2 : le DFA est construit à partir des SOUS-ENSEMBLES de Q — combien peut-il y en avoir pour 4 états ?",
              en: "Reread Theorem 2: the DFA is built from the SUBSETS of Q — how many can there be for 4 states?",
              uk: "Перечитай Теорему 2: DFA будується з ПІДМНОЖИН Q — скільки їх може бути для 4 станів?",
            },
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Vous voulez prouver que L = {0ⁿ 1²ⁿ | n ≥ 0} n'est pas régulier. En appliquant le lemme de pompage avec une longueur de pompage p, quel est le mot w idéal à choisir pour démarrer votre preuve ?",
              en: "You want to prove that L = {0ⁿ 1²ⁿ | n ≥ 0} is not regular. Applying the pumping lemma with pumping length p, what is the ideal word w to choose to start your proof?",
              uk: "Ви хочете довести, що L = {0ⁿ 1²ⁿ | n ≥ 0} не є регулярною. Застосовуючи лему про накачування з довжиною накачування p, яке слово w ідеально вибрати, щоб розпочати свій доказ?",
            },
            options: [
              {
                text: "w = 0ᵖ 1ᵖ",
                feedback: {
                  fr: "0ᵖ 1ᵖ n'appartient pas à L (il faudrait 1²ᵖ) : l'automate du langage ne l'accepterait pas, et la preuve s'effondre dès l'étape 1.",
                  en: "0ᵖ 1ᵖ does not belong to L (1²ᵖ would be required): the automaton of the language would not accept it, and the proof collapses at step 1.",
                  uk: "0ᵖ 1ᵖ не належить L (потрібно було б 1²ᵖ): автомат мови не прийняв би його, і доказ руйнується вже на кроці 1.",
                },
              },
              { text: "w = 0ᵖ 1²ᵖ" },
              {
                text: "w = 011",
                feedback: {
                  fr: "011 est trop court : dès p ≥ 3, on a |w| = 3 ≤ p, donc le lemme de pompage n'impose aucune décomposition.",
                  en: "011 is too short: as soon as p ≥ 3, we have |w| = 3 ≤ p, so the pumping lemma imposes no decomposition.",
                  uk: "011 занадто коротке: вже при p ≥ 3 маємо |w| = 3 ≤ p, тому лема про накачування не нав'язує жодного розкладу.",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "Réponse B : w = 0ᵖ 1²ᵖ ∈ L (avec n = p), |w| = 3p > p — la décomposition w = xyz existe et mène à la contradiction.",
              en: "Answer B: w = 0ᵖ 1²ᵖ ∈ L (with n = p), |w| = 3p > p — the decomposition w = xyz exists and leads to the contradiction.",
              uk: "Відповідь B: w = 0ᵖ 1²ᵖ ∈ L (з n = p), |w| = 3p > p — розклад w = xyz існує і приводить до суперечності.",
            },
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
    text: {
      fr: "Examen Blanc Global #2 (Chapitres 1, 2 et 3)",
      en: "Global Mock Exam #2 (Chapters 1, 2 and 3)",
      uk: "Глобальний пробний іспит #2 (Розділи 1, 2 і 3)",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "Voici un nouvel entraînement avec des questions différentes pour tester votre agilité sur les trois chapitres.",
      en: "Here is a new practice session with different questions to test your agility across the three chapters.",
      uk: "Ось нове тренування з іншими питаннями, щоб перевірити вашу спритність у трьох розділах.",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Section 1 : Langages et Mots (Chapitre 1)",
          en: "Section 1: Languages and Words (Chapter 1)",
          uk: "Секція 1: Мови та слова (Розділ 1)",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Soit l'alphabet Σ = {a, b, c}. Soient les mots w = ab et u = c. Calculez d'abord le mot w · u³ : w · u³ = _________. Puis sa longueur : |w · u³| = _________.",
              en: "Let the alphabet be Σ = {a, b, c}. Let the words be w = ab and u = c. First compute the word w · u³: w · u³ = _________. Then its length: |w · u³| = _________.",
              uk: "Нехай алфавіт Σ = {a, b, c}. Нехай слова w = ab та u = c. Спочатку обчисліть слово w · u³: w · u³ = _________. Потім його довжину: |w · u³| = _________.",
            },
            blanks: [
              {
                accepted: ["abccc"],
                mistakes: [
                  {
                    match: ["ccc"],
                    feedback: {
                      fr: "N'oublie pas le mot de départ : w · u³ = ab · ccc — le résultat commence par « ab ».",
                      en: "Do not forget the starting word: w · u³ = ab · ccc — the result begins with “ab”.",
                      uk: "Не забудь початкове слово: w · u³ = ab · ccc — результат починається з « ab ».",
                    },
                  },
                ],
              },
              { accepted: ["5"], mistakes: [] },
            ],
            solution: {
              fr: "u³ = u · u · u = ccc, donc w · u³ = abccc et |abccc| = 5.",
              en: "u³ = u · u · u = ccc, so w · u³ = abccc and |abccc| = 5.",
              uk: "u³ = u · u · u = ccc, отже w · u³ = abccc та |abccc| = 5.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : L'intersection d'un langage L et de son complémentaire L̄ donne toujours le langage vide ∅.",
              en: "Statement: The intersection of a language L with its complement L̄ always gives the empty language ∅.",
              uk: "Твердження: перетин мови L та її доповнення L̄ завжди дає порожню мову ∅.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** L̄ contient par définition tous les mots qui ne sont PAS dans L : ils n'ont aucun mot en commun, donc L ∩ L̄ = ∅.",
              en: "**True.** By definition L̄ contains all the words that are NOT in L: they have no word in common, so L ∩ L̄ = ∅.",
              uk: "**Правда.** L̄ за означенням містить усі слова, які НЕ належать L: вони не мають жодного спільного слова, отже L ∩ L̄ = ∅.",
            },
            mistake: {
              fr: "Quels mots contient L̄ par rapport à L — les mêmes ou l'inverse ? Peuvent-ils se croiser dans une intersection ?",
              en: "Which words does L̄ contain relative to L — the same ones or the opposite? Can they overlap in an intersection?",
              uk: "Які слова містить L̄ відносно L — ті самі чи протилежні? Чи можуть вони перетинатися в перетині?",
            },
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Quelle opération mathématique permet d'obtenir absolument toutes les combinaisons possibles de mots sur un alphabet Σ, y compris le mot vide ε ?",
              en: "Which mathematical operation allows obtaining absolutely all possible combinations of words over an alphabet Σ, including the empty word ε?",
              uk: "Яка математична операція дозволяє отримати абсолютно всі можливі комбінації слів над алфавітом Σ, включно з порожнім словом ε?",
            },
            options: [
              {
                text: { fr: "L'union", en: "Union", uk: "Об'єднання" },
                feedback: {
                  fr: "L'union ne fait que combiner des langages déjà donnés : elle ne génère aucune itération.",
                  en: "Union only combines already given languages: it generates no iteration.",
                  uk: "Об'єднання лише поєднує вже задані мови: воно не породжує жодної ітерації.",
                },
              },
              {
                text: { fr: "La différence", en: "Difference", uk: "Різниця" },
                feedback: {
                  fr: "La différence retire des mots d'un langage : elle ne peut pas tout générer.",
                  en: "Difference removes words from a language: it cannot generate everything.",
                  uk: "Різниця вилучає слова з мови: вона не може згенерувати все.",
                },
              },
              { text: { fr: "L'étoile de Kleene", en: "Kleene star", uk: "Зірка Кліні" } },
              {
                text: { fr: "La concaténation", en: "Concatenation", uk: "Конкатенація" },
                feedback: {
                  fr: "La concaténation assemble des mots, mais seule elle ne produit ni ε ni les répétitions infinies.",
                  en: "Concatenation assembles words, but by itself it produces neither ε nor the infinite repetitions.",
                  uk: "Конкатенація з'єднує слова, але сама по собі вона не породжує ні ε, ні нескінченні повторення.",
                },
              },
            ],
            answerIndex: 2,
            solution: {
              fr: "Réponse C : Σ* = ⋃ Σᵏ (pour k ≥ 0) inclut le mot vide (k = 0) et toutes les combinaisons possibles.",
              en: "Answer C: Σ* = ⋃ Σᵏ (for k ≥ 0) includes the empty word (k = 0) and all possible combinations.",
              uk: "Відповідь C: Σ* = ⋃ Σᵏ (для k ≥ 0) включає порожнє слово (k = 0) та всі можливі комбінації.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section 2 : Techniques de Preuve (Chapitre 2)",
          en: "Section 2: Proof Techniques (Chapter 2)",
          uk: "Секція 2: Техніки доведення (Розділ 2)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "On vous demande : « Prouvez que la racine carrée de 3 n'est pas un nombre rationnel. » En utilisant une preuve par l'absurde, rédigez uniquement la toute première phrase de votre démonstration.",
              en: "You are asked: “Prove that the square root of 3 is not a rational number.” Using a proof by contradiction, write only the very first sentence of your proof.",
              uk: "Вас просять: « Доведіть, що квадратний корінь з 3 не є раціональним числом. » Використовуючи доведення від супротивного, напишіть лише найперше речення вашого доведення.",
            },
            solution: {
              fr: "Phrase type : **« Supposons par l'absurde que la racine carrée de 3 est un nombre rationnel. »**",
              en: "Model sentence: **“Suppose, for the sake of contradiction, that the square root of 3 is a rational number.”**",
              uk: "Зразкове речення: **« Припустимо від супротивного, що квадратний корінь з 3 є раціональним числом. »**",
            },
          },
          {
            kind: "fillBlank",
            prompt: {
              fr: "Un étudiant affirme : « Tous les mots formés par l'union L₁ ∪ L₂ ont une longueur paire. » Cette affirmation est fausse. L'outil direct du chapitre 2 pour la détruire est un seul _________ : on donne un mot de longueur _________ (par exemple un mot d'un seul symbole).",
              en: "A student claims: “All words formed by the union L₁ ∪ L₂ have even length.” This statement is false. The direct tool from Chapter 2 to destroy it is a single _________: one gives a word of length _________ (for example a word of a single symbol).",
              uk: "Студент стверджує: « Усі слова, утворені об'єднанням L₁ ∪ L₂, мають парну довжину. » Це твердження хибне. Безпосередній інструмент розділу 2, щоб його зруйнувати, — це єдиний _________: наводять слово довжиною _________ (наприклад, слово з одного символу).",
            },
            blanks: [
              {
                accepted: [
                  "contre-exemple",
                  "contre exemple",
                  "contreexemple",
                  "counterexample",
                  "counter-example",
                  "counter example",
                ],
                mistakes: [
                  {
                    match: ["exemple", "example"],
                    feedback: {
                      fr: "Pas n'importe quel exemple : la règle d'or dit qu'un seul CONTRE-EXEMPLE suffit à réfuter une affirmation générale.",
                      en: "Not just any example: the golden rule says that a single COUNTEREXAMPLE is enough to refute a general statement.",
                      uk: "Не будь-який приклад: золоте правило каже, що єдиного КОНТРПРИКЛАДУ достатньо, щоб спростувати загальне твердження.",
                    },
                  },
                ],
              },
              {
                accepted: ["impaire", "impair", "odd"],
                mistakes: [
                  {
                    match: ["paire", "even"],
                    feedback: {
                      fr: "Une longueur paire ne contredit pas « tous les mots ont une longueur paire » — il faut une longueur IMPAIRE.",
                      en: "An even length does not contradict “all words have even length” — an ODD length is required.",
                      uk: "Парна довжина не суперечить « усі слова мають парну довжину » — потрібна НЕПАРНА довжина.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Un seul contre-exemple : un mot de L₁ ∪ L₂ de longueur impaire (par exemple un mot d'un seul symbole) détruit la règle générale.",
              en: "A single counterexample: a word of L₁ ∪ L₂ of odd length (for example a word of a single symbol) destroys the general rule.",
              uk: "Єдиний контрприклад: слово з L₁ ∪ L₂ непарної довжини (наприклад, слово з одного символу) руйнує загальне правило.",
            },
          },
          {
            kind: "mcq",
            prompt: {
              fr: "Quel est le but précis d'une preuve par construction ?",
              en: "What is the precise purpose of a proof by construction?",
              uk: "Яка точна мета доведення конструкцією?",
            },
            options: [
              {
                text: {
                  fr: "Montrer qu'une propriété est fausse en trouvant une erreur.",
                  en: "To show that a property is false by finding an error.",
                  uk: "Показати, що властивість хибна, знайшовши помилку.",
                },
                feedback: {
                  fr: "C'est la réfutation par contre-exemple, pas la construction.",
                  en: "That is refutation by counterexample, not construction.",
                  uk: "Це спростування контрприкладом, а не конструкція.",
                },
              },
              {
                text: {
                  fr: "Prouver l'existence d'un objet mathématique en le fabriquant étape par étape.",
                  en: "To prove the existence of a mathematical object by building it step by step.",
                  uk: "Довести існування математичного об'єкта, виготовляючи його крок за кроком.",
                },
              },
              {
                text: {
                  fr: "Vérifier une propriété pour la base n = 1.",
                  en: "To check a property for the base n = 1.",
                  uk: "Перевірити властивість для бази n = 1.",
                },
                feedback: {
                  fr: "Vérifier la base n = 1, c'est l'initialisation d'une preuve par récurrence.",
                  en: "Checking the base n = 1 is the initialization of a proof by induction.",
                  uk: "Перевірка бази n = 1 — це ініціалізація доведення методом індукції.",
                },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "Réponse B : la preuve par construction prouve l'existence d'un objet en élaborant une méthode pour le construire, puis en vérifiant qu'il possède les bonnes propriétés.",
              en: "Answer B: the proof by construction proves the existence of an object by devising a method to build it, then by checking that it possesses the right properties.",
              uk: "Відповідь B: доведення конструкцією доводить існування об'єкта, розробляючи метод його побудови, а потім перевіряючи, що він має потрібні властивості.",
            },
          },
        ],
      },
      {
        title: {
          fr: "Section 3 : Langages Réguliers et Automates (Chapitre 3)",
          en: "Section 3: Regular Languages and Automata (Chapter 3)",
          uk: "Секція 3: Регулярні мови та автомати (Розділ 3)",
        },
        exercises: [
          {
            kind: "fillBlank",
            prompt: {
              fr: "Dans la définition mathématique stricte d'un automate M = (Q, Σ, δ, q₀, F), le symbole Σ représente l'_________ d'entrée : l'ensemble fini des _________ que l'automate a le droit de lire.",
              en: "In the strict mathematical definition of an automaton M = (Q, Σ, δ, q₀, F), the symbol Σ represents the input _________: the finite set of _________ that the automaton is allowed to read.",
              uk: "У строгому математичному означенні автомата M = (Q, Σ, δ, q₀, F) символ Σ представляє вхідний _________: скінченну множину _________, які автомат має право читати.",
            },
            blanks: [
              {
                accepted: ["alphabet"],
                mistakes: [
                  {
                    match: ["ensemble", "états", "etats", "initial", "set", "states"],
                    feedback: {
                      fr: "L'ensemble des états, c'est Q, et l'état initial, c'est q₀ ! Σ désigne l'ensemble des SYMBOLES lisibles — l'alphabet.",
                      en: "The set of states is Q, and the initial state is q₀! Σ denotes the set of readable SYMBOLS — the alphabet.",
                      uk: "Множина станів — це Q, а початковий стан — q₀! Σ позначає множину ЧИТАБЕЛЬНИХ СИМВОЛІВ — алфавіт.",
                    },
                  },
                ],
              },
              {
                accepted: ["symboles", "signes", "symbols", "signs"],
                mistakes: [
                  {
                    match: ["états", "etats", "states"],
                    feedback: {
                      fr: "Ce n'est pas les états (c'est Q) : Σ contient les symboles que l'automate peut LIRE.",
                      en: "It is not the states (that is Q): Σ contains the symbols that the automaton can READ.",
                      uk: "Це не стани (це Q): Σ містить символи, які автомат може ЧИТАТИ.",
                    },
                  },
                ],
              },
            ],
            solution: {
              fr: "Σ = l'alphabet d'entrée : l'ensemble fini des symboles que l'automate a le droit de lire.",
              en: "Σ = the input alphabet: the finite set of symbols that the automaton is allowed to read.",
              uk: "Σ = вхідний алфавіт: скінченна множина символів, які автомат має право читати.",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Comme un automate non-déterministe permet de multiples choix simultanés, il est impossible de le transformer en un automate déterministe qui fait le même travail.",
              en: "Statement: Since a non-deterministic automaton allows multiple simultaneous choices, it is impossible to transform it into a deterministic automaton that does the same job.",
              uk: "Твердження: оскільки недетермінований автомат дозволяє численні одночасні вибори, його неможливо перетворити на детермінований автомат, який виконує ту саму роботу.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** Théorème 2 : pour chaque NFA existe un DFA équivalent — la construction par sous-ensembles fait toujours ce travail.",
              en: "**False.** Theorem 2: for every NFA there exists an equivalent DFA — the subset construction always does this job.",
              uk: "**Хибно.** Теорема 2: для кожного NFA існує еквівалентний DFA — конструкція за підмножинами завжди виконує цю роботу.",
            },
            mistake: {
              fr: "Quel théorème du chapitre 3 parle de la transformation NFA → DFA ?",
              en: "Which theorem of Chapter 3 talks about the NFA → DFA transformation?",
              uk: "Яка теорема розділу 3 говорить про перетворення NFA → DFA?",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Décrivez avec une phrase française simple et claire le langage reconnu par l'expression régulière suivante : 1 (0 ∪ 1)* 0.",
              en: "Describe in a simple and clear French sentence the language recognized by the following regular expression: 1 (0 ∪ 1)* 0.",
              uk: "Опишіть простим і ясним французьким реченням мову, яку розпізнає наступний регулярний вираз: 1 (0 ∪ 1)* 0.",
            },
            solution: { fr: "Description :", en: "Description:", uk: "Опис:" },
            solutionItems: [
              {
                fr: "Ce langage contient tous les mots (sur l'alphabet {0, 1}) qui commencent par un « 1 » et qui se terminent par un « 0 ».",
                en: "This language contains all words (over the alphabet {0, 1}) that start with a “1” and end with a “0”.",
                uk: "Ця мова містить усі слова (над алфавітом {0, 1}), які починаються з « 1 » і закінчуються на « 0 ».",
              },
              {
                fr: "La partie (0 ∪ 1)* au centre signifie qu'il peut y avoir n'importe quelle combinaison de zéros et de uns — ou rien du tout — entre les deux.",
                en: "The (0 ∪ 1)* part in the center means that there can be any combination of zeros and ones — or nothing at all — between the two.",
                uk: "Частина (0 ∪ 1)* у центрі означає, що між ними може бути будь-яка комбінація нулів і одиниць — або взагалі нічого.",
              },
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
    text: {
      fr: "Examen Blanc N°1 — Focus sur la Théorie et les Automates",
      en: "Mock Exam #1 — Focus on Theory and Automata",
      uk: "Пробний іспит №1 — Фокус на теорії та автоматах",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Durée : 1 heure — Chapitres abordés : 1, 2, 3 — Documents non autorisés.",
      en: "Duration: 1 hour — Chapters covered: 1, 2, 3 — No reference materials allowed.",
      uk: "Тривалість: 1 година — Розділи: 1, 2, 3 — Документи не дозволені.",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Question 1 : Automates déterministes (DFA) et langages (4 points)",
          en: "Question 1: Deterministic Finite Automata (DFA) and Languages (4 points)",
          uk: "Питання 1: Детерміновані автомати (DFA) та мови (4 бали)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Soit l'alphabet Σ = {0, 1}. Dessinez le diagramme d'états d'un automate à états finis déterministe qui reconnaît le langage L = {w | w contient un nombre pair de 1}. Donnez ensuite sa définition formelle mathématique (le 5-tuplet M = (Q, Σ, δ, q₀, F)).",
              en: "Let the alphabet be Σ = {0, 1}. Draw the state diagram of a deterministic finite automaton that recognizes the language L = {w | w contains an even number of 1s}. Then give its formal mathematical definition (the 5-tuple M = (Q, Σ, δ, q₀, F)).",
              uk: "Нехай алфавіт Σ = {0, 1}. Намалюйте діаграму станів детермінованого скінченного автомата, який розпізнає мову L = {w | w містить парну кількість 1}. Потім наведіть його формальне математичне означення (п'ятірку M = (Q, Σ, δ, q₀, F)).",
            },
            details: [
              {
                fr: "Indication : deux états suffisent — « nombre de 1 lu jusqu'ici pair » et « impair ».",
                en: "Hint: two states suffice — “number of 1s read so far is even” and “odd”.",
                uk: "Підказка: достатньо двох станів — « кількість прочитаних 1 на даний момент парна » та « непарна ».",
              },
              {
                fr: "N'oubliez pas l'état initial, l'état final, et les transitions pour chaque symbole de Σ.",
                en: "Do not forget the initial state, the final state, and the transitions for each symbol of Σ.",
                uk: "Не забудьте початковий стан, кінцевий стан і переходи для кожного символу з Σ.",
              },
            ],
            solution: { fr: "Corrigé :", en: "Solution:", uk: "Розв'язок:" },
            solutionItems: [
              {
                fr: "Idée de l'automate : deux états suffisent — q_pair (nombre de 1 lu jusqu'ici est pair) et q_impair. Le symbole 0 ne change jamais d'état ; un 1 inverse l'état.",
                en: "Idea of the automaton: two states suffice — q_pair (the number of 1s read so far is even) and q_impair. The symbol 0 never changes state; a 1 flips the state.",
                uk: "Ідея автомата: достатньо двох станів — q_pair (кількість прочитаних 1 на даний момент парна) та q_impair. Символ 0 ніколи не змінює стан; 1 інвертує стан.",
              },
              {
                fr: "Diagramme : q_pair est l'état initial et final ; boucle 0 sur q_pair, flèche 1 de q_pair vers q_impair, boucle 0 sur q_impair, flèche 1 de q_impair vers q_pair.",
                en: "Diagram: q_pair is the initial and final state; loop 0 on q_pair, arrow 1 from q_pair to q_impair, loop 0 on q_impair, arrow 1 from q_impair to q_pair.",
                uk: "Діаграма: q_pair — початковий і кінцевий стан; петля 0 на q_pair, стрілка 1 від q_pair до q_impair, петля 0 на q_impair, стрілка 1 від q_impair до q_pair.",
              },
              {
                fr: "5-tuplet : M = (Q, Σ, δ, q₀, F) avec Q = {q_pair, q_impair}, Σ = {0, 1}, q₀ = q_pair, F = {q_pair}, et δ : δ(q_pair, 0) = q_pair, δ(q_pair, 1) = q_impair, δ(q_impair, 0) = q_impair, δ(q_impair, 1) = q_pair.",
                en: "5-tuple: M = (Q, Σ, δ, q₀, F) with Q = {q_pair, q_impair}, Σ = {0, 1}, q₀ = q_pair, F = {q_pair}, and δ: δ(q_pair, 0) = q_pair, δ(q_pair, 1) = q_impair, δ(q_impair, 0) = q_impair, δ(q_impair, 1) = q_pair.",
                uk: "П'ятірка: M = (Q, Σ, δ, q₀, F) з Q = {q_pair, q_impair}, Σ = {0, 1}, q₀ = q_pair, F = {q_pair}, та δ: δ(q_pair, 0) = q_pair, δ(q_pair, 1) = q_impair, δ(q_impair, 0) = q_impair, δ(q_impair, 1) = q_pair.",
              },
              {
                fr: "Remarque examen : ε est accepté, car 0 est un nombre pair — l'automate démarre dans q_pair, qui est final.",
                en: "Exam remark: ε is accepted, because 0 is an even number — the automaton starts in q_pair, which is final.",
                uk: "Зауваження до іспиту: ε приймається, оскільки 0 — парне число — автомат починає в q_pair, який є кінцевим.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 2 : Transformation NFA vers DFA (5 points)",
          en: "Question 2: NFA to DFA Transformation (5 points)",
          uk: "Питання 2: Перетворення NFA у DFA (5 балів)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Le Théorème 2 affirme que pour chaque automate non-déterministe, il existe un automate déterministe équivalent. Soit un automate non-déterministe M défini sur Σ = {a, b} avec les états Q = {q₁, q₂, q₃}, l'état initial q₁, et l'état final q₁. Les transitions Δ sont : de q₁ en lisant b on va vers q₂ ; de q₁ avec le mot vide ε on va vers q₃ ; de q₂ en lisant a on va vers q₂ ou q₃. En utilisant l'algorithme des sous-ensembles, déterminez l'état initial du nouvel automate déterministe et construisez ses transitions.",
              en: "Theorem 2 states that for every non-deterministic automaton, there exists an equivalent deterministic automaton. Let a non-deterministic automaton M be defined over Σ = {a, b} with states Q = {q₁, q₂, q₃}, initial state q₁, and final state q₁. The transitions Δ are: from q₁ reading b we go to q₂; from q₁ with the empty word ε we go to q₃; from q₂ reading a we go to q₂ or q₃. Using the subset algorithm, determine the initial state of the new deterministic automaton and construct its transitions.",
              uk: "Теорема 2 стверджує, що для кожного недетермінованого автомата існує еквівалентний детермінований автомат. Нехай недетермінований автомат M визначено над Σ = {a, b} зі станами Q = {q₁, q₂, q₃}, початковим станом q₁ і кінцевим станом q₁. Переходи Δ такі: з q₁, читаючи b, переходимо до q₂; з q₁ з порожнім словом ε переходимо до q₃; з q₂, читаючи a, переходимо до q₂ або q₃. Використовуючи алгоритм підмножин, визначте початковий стан нового детермінованого автомата та побудуйте його переходи.",
            },
            details: [
              {
                fr: "Indication : l'état initial du DFA est l'ensemble de tous les états joignables depuis q₁ avec des transitions ε.",
                en: "Hint: the initial state of the DFA is the set of all states reachable from q₁ via ε transitions.",
                uk: "Підказка: початковий стан DFA — це множина всіх станів, досяжних з q₁ за допомогою ε-переходів.",
              },
              {
                fr: "Attention : n'oubliez aucun sous-ensemble atteint et indiquez quels états sont finaux.",
                en: "Careful: do not forget any reached subset and indicate which states are final.",
                uk: "Увага: не забудьте жодної досягнутої підмножини та вкажіть, які стани є кінцевими.",
              },
            ],
            solution: { fr: "Corrigé :", en: "Solution:", uk: "Розв'язок:" },
            solutionItems: [
              {
                fr: "État initial du DFA : l'ε-closure de q₁, donc {q₁, q₃} — le saut magique est matérialisé dans l'état de départ.",
                en: "Initial state of the DFA: the ε-closure of q₁, hence {q₁, q₃} — the magic jump is materialized in the start state.",
                uk: "Початковий стан DFA: ε-замикання q₁, отже {q₁, q₃} — чарівний стрибок матеріалізовано в початковому стані.",
              },
              {
                fr: "Transitions : {q₁, q₃} -b→ {q₂} (seule transition en b, depuis q₁ ; q₃ n'a aucune transition). Sur a, {q₁, q₃} ne peut nulle part : ∅.",
                en: "Transitions: {q₁, q₃} -b→ {q₂} (the only b transition, from q₁; q₃ has no transition). On a, {q₁, q₃} can go nowhere: ∅.",
                uk: "Переходи: {q₁, q₃} -b→ {q₂} (єдиний перехід за b, з q₁; q₃ не має жодного переходу). За a {q₁, q₃} не може нікуди: ∅.",
              },
              {
                fr: "{q₂} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃}), sur b : ∅.",
                en: "{q₂} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃}), on b: ∅.",
                uk: "{q₂} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃}), за b: ∅.",
              },
              {
                fr: "{q₂, q₃} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃} et q₃ ne lit rien), sur b : ∅.",
                en: "{q₂, q₃} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃} and q₃ reads nothing), on b: ∅.",
                uk: "{q₂, q₃} -a→ {q₂, q₃} (Δ(q₂, a) = {q₂, q₃} і q₃ нічого не читає), за b: ∅.",
              },
              {
                fr: "États finaux : tout état contenant q₁, ici uniquement {q₁, q₃}. L'ensemble vide ∅ peut être omis (ou noté état poubelle).",
                en: "Final states: any state containing q₁, here only {q₁, q₃}. The empty set ∅ can be omitted (or noted as trap state).",
                uk: "Кінцеві стани: будь-який стан, що містить q₁, тут лише {q₁, q₃}. Порожню множину ∅ можна опустити (або позначити як стан-смітник).",
              },
              {
                fr: "Au total, 3 états utiles ({q₁, q₃}, {q₂}, {q₂, q₃}) — très loin des 2³ = 8 sous-ensembles de 𝒫(Q) possibles.",
                en: "In total, 3 useful states ({q₁, q₃}, {q₂}, {q₂, q₃}) — far from the 2³ = 8 possible subsets of 𝒫(Q).",
                uk: "Загалом 3 корисні стани ({q₁, q₃}, {q₂}, {q₂, q₃}) — дуже далеко від 2³ = 8 можливих підмножин 𝒫(Q).",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 3 : Preuve par l'absurde et lemme de pompage (5 points)",
          en: "Question 3: Proof by Contradiction and the Pumping Lemma (5 points)",
          uk: "Питання 3: Доведення від супротивного та лема про накачування (5 балів)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "C'est le résultat théorique le plus important du chapitre 3. Prouvez rigoureusement, en utilisant le lemme de pompage, que le langage L = {aⁿ bⁿ | n ≥ 0} n'est pas un langage régulier.",
              en: "This is the most important theoretical result of Chapter 3. Prove rigorously, using the pumping lemma, that the language L = {aⁿ bⁿ | n ≥ 0} is not a regular language.",
              uk: "Це найважливіший теоретичний результат розділу 3. Строго доведіть, використовуючи лему про накачування, що мова L = {aⁿ bⁿ | n ≥ 0} не є регулярною мовою.",
            },
            details: [
              {
                fr: "Structurez bien votre réponse : hypothèse par l'absurde → choix du mot w = aᵖ bᵖ → démonstration de la contradiction sur la partie y.",
                en: "Structure your answer well: contradiction hypothesis → choice of the word w = aᵖ bᵖ → demonstration of the contradiction on the part y.",
                uk: "Добре структуруйте свою відповідь: припущення від супротивного → вибір слова w = aᵖ bᵖ → демонстрація суперечності на частині y.",
              },
            ],
            solution: { fr: "Corrigé structuré :", en: "Structured solution:", uk: "Структурований розв'язок:" },
            solutionItems: [
              {
                fr: "Hypothèse par l'absurde : supposons que L soit régulier, et soit p la longueur de pompage donnée par le lemme.",
                en: "Contradiction hypothesis: suppose that L is regular, and let p be the pumping length given by the lemma.",
                uk: "Гіпотеза від супротивного: припустимо, що L є регулярною, і нехай p — довжина накачування, задана лемою.",
              },
              {
                fr: "Choix du mot : w = aᵖ bᵖ. Il appartient bien à L (car n = p) et |w| = 2p > p, donc le lemme s'applique.",
                en: "Choice of the word: w = aᵖ bᵖ. It does belong to L (since n = p) and |w| = 2p > p, so the lemma applies.",
                uk: "Вибір слова: w = aᵖ bᵖ. Воно справді належить L (оскільки n = p) і |w| = 2p > p, тому лема застосовна.",
              },
              {
                fr: "Décomposition : par le lemme, w = xyz avec |xy| ≤ p et |y| ≥ 1. Comme |xy| ≤ p, y ne contient que des lettres « a ».",
                en: "Decomposition: by the lemma, w = xyz with |xy| ≤ p and |y| ≥ 1. Since |xy| ≤ p, y contains only “a” letters.",
                uk: "Розклад: за лемою, w = xyz, де |xy| ≤ p та |y| ≥ 1. Оскільки |xy| ≤ p, y містить лише літери « a ».",
              },
              {
                fr: "Pompage avec i = 0 : xy⁰z = xz contient p − |y| lettres « a » (donc STRICTEMENT moins que p), mais toujours p lettres « b ».",
                en: "Pumping with i = 0: xy⁰z = xz contains p − |y| “a” letters (hence STRICTLY fewer than p), but still p “b” letters.",
                uk: "Накачування з i = 0: xy⁰z = xz містить p − |y| літер « a » (отже, СТРОГО менше ніж p), але все ще p літер « b ».",
              },
              {
                fr: "Contradiction : dans xz, le nombre de « a » est différent du nombre de « b », donc xz ∉ L — alors que le lemme garantit xyⁱz ∈ L pour tout i. L n'est donc pas régulier.",
                en: "Contradiction: in xz, the number of “a” differs from the number of “b”, so xz ∉ L — whereas the lemma guarantees xyⁱz ∈ L for every i. Hence L is not regular.",
                uk: "Суперечність: у xz кількість « a » відрізняється від кількості « b », тому xz ∉ L — тоді як лема гарантує xyⁱz ∈ L для будь-якого i. Отже, L не є регулярною.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 4 : Arbre d'exécution (3 points)",
          en: "Question 4: Execution Tree (3 points)",
          uk: "Питання 4: Дерево виконання (3 бали)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Expliquez brièvement comment un automate non-déterministe (NFA) traite un mot en entrée par rapport à un automate déterministe (DFA). Que se passe-t-il si plusieurs chemins sont possibles ?",
              en: "Briefly explain how a non-deterministic automaton (NFA) processes an input word compared to a deterministic automaton (DFA). What happens if several paths are possible?",
              uk: "Коротко поясніть, як недетермінований автомат (NFA) обробляє вхідне слово порівняно з детермінованим автоматом (DFA). Що відбувається, якщо можливі кілька шляхів?",
            },
            solution: { fr: "Corrigé :", en: "Solution:", uk: "Розв'язок:" },
            solutionItems: [
              {
                fr: "Le DFA suit un chemin UNIQUE : pour chaque état et chaque symbole lu, il n'existe qu'une seule transition — l'exécution est déterminée pas à pas.",
                en: "The DFA follows a SINGLE path: for each state and each symbol read, there is only one transition — the execution is determined step by step.",
                uk: "DFA прямує ЄДИНИМ шляхом: для кожного стану і кожного прочитаного символу існує лише один перехід — виконання визначається крок за кроком.",
              },
              {
                fr: "Le NFA explore virtuellement TOUS les chemins en même temps : l'exécution crée un arbre de possibilités.",
                en: "The NFA virtually explores ALL paths at the same time: the execution creates a tree of possibilities.",
                uk: "NFA віртуально досліджує ВСІ шляхи одночасно: виконання утворює дерево можливостей.",
              },
              {
                fr: "Si plusieurs chemins sont possibles (choix ou transition ε), l'automate se trouve virtuellement dans plusieurs états à la fois. Si AU MOINS UNE branche parvient à lire tout le mot et se termine sur un état final, le mot est accepté — les autres chemins peuvent échouer sans conséquence.",
                en: "If several paths are possible (a choice or an ε transition), the automaton is virtually in several states at once. If AT LEAST ONE branch manages to read the whole word and ends in a final state, the word is accepted — the other paths can fail without consequence.",
                uk: "Якщо можливі кілька шляхів (вибір або ε-перехід), автомат віртуально перебуває в кількох станах одночасно. Якщо ПРИНАЙМНІ ОДНА гілка зуміє прочитати все слово і завершиться у фінальному стані, слово приймається — інші шляхи можуть зазнати невдачі без наслідків.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 5 : Expressions régulières (3 points)",
          en: "Question 5: Regular Expressions (3 points)",
          uk: "Питання 5: Регулярні вирази (3 бали)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Décrivez en une phrase claire le langage reconnu par l'expression régulière suivante : b*(ab⁺)* définie sur l'alphabet Σ = {a, b}.",
              en: "Describe in one clear sentence the language recognized by the following regular expression: b*(ab⁺)* defined over the alphabet Σ = {a, b}.",
              uk: "Опишіть одним чітким реченням мову, яку розпізнає такий регулярний вираз: b*(ab⁺)*, визначений над алфавітом Σ = {a, b}.",
            },
            solution: { fr: "Description :", en: "Description:", uk: "Опис:" },
            solutionItems: [
              {
                fr: "Ce langage contient tous les mots où chaque lettre a est obligatoirement suivie au moins par une lettre b.",
                en: "This language contains all words where every letter a is necessarily followed by at least one letter b.",
                uk: "Ця мова містить усі слова, у яких після кожної літери a обов'язково йде принаймні одна літера b.",
              },
              {
                fr: "Lecture de l'expression : b* autorise zéro ou plusieurs b au début ; (ab⁺)* répète des blocs « un a suivi d'au moins un b ».",
                en: "Reading of the expression: b* allows zero or more b at the beginning; (ab⁺)* repeats blocks of “an a followed by at least one b”.",
                uk: "Читання виразу: b* дозволяє нуль або більше b на початку; (ab⁺)* повторює блоки «одна a, за якою йде принаймні одна b».",
              },
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
    text: {
      fr: "Examen Blanc N°2 — Focus sur les Preuves et la Construction",
      en: "Mock Exam #2 — Focus on Proofs and Construction",
      uk: "Пробний іспит №2 — Фокус на доведеннях і побудові",
    },
  },
  {
    type: "quote",
    text: {
      fr: "Durée : 1 heure — Chapitres abordés : 1, 2, 3 — Documents non autorisés.",
      en: "Duration: 1 hour — Chapters covered: 1, 2, 3 — No reference materials allowed.",
      uk: "Тривалість: 1 година — Розділи: 1, 2, 3 — Документи не дозволені.",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: {
          fr: "Question 1 : Construction d'un automate non-déterministe (4 points)",
          en: "Question 1: Construction of a Non-deterministic Automaton (4 points)",
          uk: "Питання 1: Побудова недетермінованого автомата (4 бали)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Dessinez un automate non-déterministe (NFA) sur l'alphabet Σ = {0, 1} qui reconnaît le langage L = {w | w se termine par 00}. Votre automate doit contenir exactement 3 états.",
              en: "Draw a non-deterministic automaton (NFA) over the alphabet Σ = {0, 1} that recognizes the language L = {w | w ends with 00}. Your automaton must contain exactly 3 states.",
              uk: "Намалюйте недетермінований автомат (NFA) над алфавітом Σ = {0, 1}, який розпізнає мову L = {w | w закінчується на 00}. Ваш автомат має містити рівно 3 стани.",
            },
            details: [
              {
                fr: "Indication : un état pour « rien de pertinent », un état pour « se termine par un seul 0 », un état pour « se termine par 00 ».",
                en: "Hint: one state for “nothing relevant”, one state for “ends with a single 0”, one state for “ends with 00”.",
                uk: "Підказка: один стан для «нічого суттєвого», один стан для «закінчується на один 0», один стан для «закінчується на 00».",
              },
            ],
            solution: {
              fr: "Un automate possible (3 états) :",
              en: "A possible automaton (3 states):",
              uk: "Один із можливих автоматів (3 стани):",
            },
            solutionItems: [
              {
                fr: "États : q₀ (le mot ne se termine pas par 0), q₁ (le mot se termine par exactement un 0), q₂ (le mot se termine par 00).",
                en: "States: q₀ (the word does not end with 0), q₁ (the word ends with exactly one 0), q₂ (the word ends with 00).",
                uk: "Стани: q₀ (слово не закінчується на 0), q₁ (слово закінчується рівно на один 0), q₂ (слово закінчується на 00).",
              },
              {
                fr: "État initial : q₀ — état final : q₂ — alphabet Σ = {0, 1}.",
                en: "Initial state: q₀ — final state: q₂ — alphabet Σ = {0, 1}.",
                uk: "Початковий стан: q₀ — фінальний стан: q₂ — алфавіт Σ = {0, 1}.",
              },
              {
                fr: "Transitions : depuis q₀ : 0 → q₁, 1 → q₀ ; depuis q₁ : 0 → q₂, 1 → q₀ ; depuis q₂ : 0 → q₂, 1 → q₀.",
                en: "Transitions: from q₀: 0 → q₁, 1 → q₀; from q₁: 0 → q₂, 1 → q₀; from q₂: 0 → q₂, 1 → q₀.",
                uk: "Переходи: з q₀: 0 → q₁, 1 → q₀ ; з q₁: 0 → q₂, 1 → q₀ ; з q₂: 0 → q₂, 1 → q₀.",
              },
              {
                fr: "Cet automate est en fait déterministe — c'est permis, car tout DFA est aussi un NFA (le non-déterminisme est une permission, pas une obligation). La contrainte « exactement 3 états » est ainsi satisfaite.",
                en: "This automaton is in fact deterministic — this is allowed, because every DFA is also an NFA (non-determinism is a permission, not an obligation). The constraint “exactly 3 states” is thereby satisfied.",
                uk: "Цей автомат насправді детермінований — це дозволено, оскільки кожен DFA також є NFA (недетермінізм — це дозвіл, а не обов'язок). Обмеження «рівно 3 стани» тим самим виконано.",
              },
              {
                fr: "Variante non-déterministe stricte : depuis q₀, sur 0, garder la possibilité de rester en q₀ ET d'aller en q₁ (deux flèches) — l'automate « devine » où se termine réellement le mot.",
                en: "Strictly non-deterministic variant: from q₀, on 0, keep the possibility of staying in q₀ AND going to q₁ (two arrows) — the automaton “guesses” where the word actually ends.",
                uk: "Строго недетермінований варіант: з q₀ на 0 зберегти можливість залишитися в q₀ ТА перейти в q₁ (дві стрілки) — автомат «вгадує», де насправді закінчується слово.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 2 : Preuve de fermeture — produit cartésien (5 points)",
          en: "Question 2: Closure Proof — Cartesian Product (5 points)",
          uk: "Питання 2: Доведення замкненості — декартів добуток (5 балів)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Le Théorème 1 affirme que les langages réguliers sont fermés par l'intersection. Soient M₁ = (Q₁, Σ, δ₁, q₁, F₁) et M₂ = (Q₂, Σ, δ₂, q₂, F₂) deux automates déterministes reconnaissant respectivement L₁ et L₂. Donnez la définition formelle (les 5 éléments) du nouvel automate M qui reconnaît le langage L₁ ∩ L₂. Attention particulière à la définition de l'ensemble des états finaux F.",
              en: "Theorem 1 states that regular languages are closed under intersection. Let M₁ = (Q₁, Σ, δ₁, q₁, F₁) and M₂ = (Q₂, Σ, δ₂, q₂, F₂) be two deterministic automata recognizing L₁ and L₂ respectively. Give the formal definition (the 5 elements) of the new automaton M that recognizes the language L₁ ∩ L₂. Pay particular attention to the definition of the set of final states F.",
              uk: "Теорема 1 стверджує, що регулярні мови замкнені щодо перетину. Нехай M₁ = (Q₁, Σ, δ₁, q₁, F₁) і M₂ = (Q₂, Σ, δ₂, q₂, F₂) — два детерміновані автомати, що розпізнають відповідно L₁ та L₂. Дайте формальне означення (5 елементів) нового автомата M, який розпізнає мову L₁ ∩ L₂. Зверніть особливу увагу на означення множини фінальних станів F.",
            },
            details: [
              {
                fr: "Indication : les états du nouvel automate sont des paires (s₁, s₂) — produit cartésien Q₁ × Q₂.",
                en: "Hint: the states of the new automaton are pairs (s₁, s₂) — Cartesian product Q₁ × Q₂.",
                uk: "Підказка: стани нового автомата — це пари (s₁, s₂) — декартів добуток Q₁ × Q₂.",
              },
              {
                fr: "Pour l'intersection, quel opérateur logique relie les deux états finaux : « ou » ou « et » ?",
                en: "For the intersection, which logical operator connects the two final states: “or” or “and”?",
                uk: "Для перетину, який логічний оператор пов'язує два фінальні стани: «або» чи «та»?",
              },
            ],
            solution: {
              fr: "Définition formelle de M = (Q, Σ, δ, q₀, F) :",
              en: "Formal definition of M = (Q, Σ, δ, q₀, F):",
              uk: "Формальне означення M = (Q, Σ, δ, q₀, F):",
            },
            solutionItems: [
              {
                fr: "États : Q = Q₁ × Q₂ — l'ensemble des paires (s₁, s₂) avec s₁ ∈ Q₁ et s₂ ∈ Q₂.",
                en: "States: Q = Q₁ × Q₂ — the set of pairs (s₁, s₂) with s₁ ∈ Q₁ and s₂ ∈ Q₂.",
                uk: "Стани: Q = Q₁ × Q₂ — множина пар (s₁, s₂), де s₁ ∈ Q₁ та s₂ ∈ Q₂.",
              },
              {
                fr: "Alphabet : Σ (le même alphabet que celui de M₁ et M₂).",
                en: "Alphabet: Σ (the same alphabet as that of M₁ and M₂).",
                uk: "Алфавіт: Σ (той самий алфавіт, що в M₁ та M₂).",
              },
              {
                fr: "Transitions : pour tout (s₁, s₂) ∈ Q et tout a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)) — les deux automates avancent ensemble.",
                en: "Transitions: for every (s₁, s₂) ∈ Q and every a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)) — the two automata advance together.",
                uk: "Переходи: для будь-яких (s₁, s₂) ∈ Q та будь-якого a ∈ Σ, δ((s₁, s₂), a) = (δ₁(s₁, a), δ₂(s₂, a)) — обидва автомати просуваються разом.",
              },
              {
                fr: "État initial : q₀ = (q₁, q₂), la paire des deux états initiaux.",
                en: "Initial state: q₀ = (q₁, q₂), the pair of the two initial states.",
                uk: "Початковий стан: q₀ = (q₁, q₂), пара двох початкових станів.",
              },
              {
                fr: "États finaux (l'attention demandée) : F = F₁ × F₂ — une paire est finale si et seulement si sa première composante est finale dans M₁ ET sa seconde l'est dans M₂. C'est la différence clé avec l'union, qui utiliserait « ou » : F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
                en: "Final states (the point requiring care): F = F₁ × F₂ — a pair is final if and only if its first component is final in M₁ AND its second is in M₂. This is the key difference from the union, which would use “or”: F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
                uk: "Фінальні стани (на що слід звернути увагу): F = F₁ × F₂ — пара є фінальною тоді й лише тоді, коли її перша компонента є фінальною в M₁ І друга — в M₂. Це ключова відмінність від об'єднання, яке використовувало б «або»: F = (F₁ × Q₂) ∪ (Q₁ × F₂).",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 3 : Le principe des tiroirs (3 points)",
          en: "Question 3: The Pigeonhole Principle (3 points)",
          uk: "Питання 3: Принцип Діріхле (принцип шухляд) (3 бали)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Expliquez ce qu'est le « principe des tiroirs » (ou nids de pigeon). Comment ce principe mathématique du chapitre 2 est-il utilisé dans la démonstration théorique du lemme de pompage au chapitre 3 ?",
              en: "Explain what the “pigeonhole principle” (or “nests of pigeons”) is. How is this mathematical principle of Chapter 2 used in the theoretical proof of the pumping lemma in Chapter 3?",
              uk: "Поясніть, що таке «принцип шухляд» (або принцип голубів). Як цей математичний принцип із розділу 2 використовується в теоретичному доведенні леми про накачування в розділі 3?",
            },
            solution: { fr: "Corrigé :", en: "Solution:", uk: "Розв'язок:" },
            solutionItems: [
              {
                fr: "Le principe des tiroirs : si l'on place plus d'objets que de compartiments, au moins un compartiment doit contenir plusieurs objets.",
                en: "The pigeonhole principle: if one places more objects than compartments, at least one compartment must contain several objects.",
                uk: "Принцип шухляд: якщо розмістити більше об'єктів, ніж комірок, то принаймні одна комірка має містити кілька об'єктів.",
              },
              {
                fr: "Exemple : 13 étudiants (les objets) répartis dans 12 mois possibles (les compartiments) — 13 > 12, donc deux étudiants partagent obligatoirement le même mois de naissance.",
                en: "Example: 13 students (the objects) distributed among 12 possible months (the compartments) — 13 > 12, so two students necessarily share the same month of birth.",
                uk: "Приклад: 13 студентів (об'єкти), розподілених за 12 можливими місяцями (комірки) — 13 > 12, тому двоє студентів обов'язково мають однаковий місяць народження.",
              },
              {
                fr: "Lien avec le lemme de pompage : la preuve du lemme elle-même utilise ce principe. Un automate possède un nombre fini d'états ; si le mot w est plus long que ce nombre (|w| > p), deux positions de lecture conduisent au même état — les positions lues sont les objets, les états sont les compartiments.",
                en: "Link with the pumping lemma: the proof of the lemma itself uses this principle. An automaton has a finite number of states; if the word w is longer than that number (|w| > p), two reading positions lead to the same state — the positions read are the objects, the states are the compartments.",
                uk: "Зв'язок з лемою про накачування: саме доведення леми використовує цей принцип. Автомат має скінченну кількість станів; якщо слово w довше за це число (|w| > p), дві позиції читання ведуть до одного й того самого стану — прочитані позиції є об'єктами, а стани — комірками.",
              },
              {
                fr: "C'est cette répétition d'état qui crée une BOUCLE : le segment y lu entre ces deux positions peut être répété (pompé) sans changer l'état d'arrivée. On en déduit la décomposition w = xyz avec xyⁱz ∈ L pour tout i — l'outil central de la preuve par l'absurde sur la non-régularité.",
                en: "It is this repetition of state that creates a LOOP: the segment y read between these two positions can be repeated (pumped) without changing the arrival state. From this we deduce the decomposition w = xyz with xyⁱz ∈ L for every i — the central tool of the proof by contradiction of non-regularity.",
                uk: "Саме це повторення стану створює ЦИКЛ: відрізок y, прочитаний між цими двома позиціями, можна повторювати (накачувати), не змінюючи стану прибуття. Звідси виводимо розклад w = xyz, де xyⁱz ∈ L для будь-якого i — центральний інструмент доведення від супротивного про нерегулярність.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 4 : Dérivation d'une expression régulière (4 points)",
          en: "Question 4: Deriving a Regular Expression (4 points)",
          uk: "Питання 4: Виведення регулярного виразу (4 бали)",
        },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Soit l'alphabet Σ = {a, b}. Donnez une expression régulière qui décrit le langage L = {w | w contient le facteur 0101}.",
              en: "Let the alphabet be Σ = {a, b}. Give a regular expression that describes the language L = {w | w contains the factor 0101}.",
              uk: "Нехай алфавіт Σ = {a, b}. Дайте регулярний вираз, який описує мову L = {w | w містить фактор 0101}.",
            },
            details: [
              {
                fr: "Attention : relisez l'énoncé — le facteur demandé utilise les symboles 0 et 1, mais l'alphabet annoncé est {a, b}.",
                en: "Careful: reread the statement — the requested factor uses the symbols 0 and 1, but the stated alphabet is {a, b}.",
                uk: "Увага: перечитайте умову — потрібний фактор використовує символи 0 та 1, але оголошений алфавіт — {a, b}.",
              },
            ],
            solution: {
              fr: "Expression régulière :",
              en: "Regular expression:",
              uk: "Регулярний вираз:",
            },
            solutionItems: [
              {
                fr: "R = (0 ∪ 1)* 0101 (0 ∪ 1)* — si l'alphabet est bien Σ = {0, 1}.",
                en: "R = (0 ∪ 1)* 0101 (0 ∪ 1)* — if the alphabet is indeed Σ = {0, 1}.",
                uk: "R = (0 ∪ 1)* 0101 (0 ∪ 1)* — якщо алфавіт справді Σ = {0, 1}.",
              },
              {
                fr: "Lecture : (0 ∪ 1)* avant = n'importe quoi avant le facteur, 0101 = le facteur obligatoire, (0 ∪ 1)* après = n'importe quoi après. On obtient exactement les mots contenant « 0101 » en sous-chaîne.",
                en: "Reading: (0 ∪ 1)* before = anything before the factor, 0101 = the mandatory factor, (0 ∪ 1)* after = anything after. This yields exactly the words containing “0101” as a substring.",
                uk: "Читання: (0 ∪ 1)* до = будь-що перед фактором, 0101 = обов'язковий фактор, (0 ∪ 1)* після = будь-що після. Отримуємо саме слова, що містять « 0101 » як підрядок.",
              },
              {
                fr: "Si l'alphabet est strictement Σ = {a, b}, l'énoncé contient une erreur : aucun mot de {a, b}* ne peut contenir le facteur « 0101 », et le langage serait vide (∅). Signalez-le au correcteur.",
                en: "If the alphabet is strictly Σ = {a, b}, the statement contains an error: no word of {a, b}* can contain the factor “0101”, and the language would be empty (∅). Report this to the examiner.",
                uk: "Якщо алфавіт строго Σ = {a, b}, умова містить помилку: жодне слово з {a, b}* не може містити фактор « 0101 », і мова була б порожньою (∅). Повідомте про це екзаменатору.",
              },
            ],
          },
        ],
      },
      {
        title: {
          fr: "Question 5 : Raisonnement et contre-exemples (4 points)",
          en: "Question 5: Reasoning and Counterexamples (4 points)",
          uk: "Питання 5: Міркування та контрприклади (4 бали)",
        },
        exercises: [
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Si l'on concatène le langage vide ∅ avec n'importe quel langage régulier L, le résultat est L.",
              en: "Statement: If one concatenates the empty language ∅ with any regular language L, the result is L.",
              uk: "Твердження: Якщо конкатенувати порожню мову ∅ з будь-якою регулярною мовою L, результат — L.",
            },
            answer: false,
            justification: {
              fr: "**Faux.** ∅ · L = ∅ : la concaténation de l'ensemble vide avec n'importe quel ensemble reste l'ensemble vide. Le NEUTRE de la concaténation est le mot vide ε (ε · L = L), pas le langage vide ∅.",
              en: "**False.** ∅ · L = ∅: the concatenation of the empty set with any set remains the empty set. The IDENTITY element of concatenation is the empty word ε (ε · L = L), not the empty language ∅.",
              uk: "**Хибно.** ∅ · L = ∅: конкатенація порожньої множини з будь-якою множиною залишається порожньою множиною. НЕЙТРАЛЬНИМ елементом конкатенації є порожнє слово ε (ε · L = L), а не порожня мова ∅.",
            },
            mistake: {
              fr: "Piège classique : quel est le neutre de la concaténation — le langage vide ∅ ou le mot vide ε ?",
              en: "Classic trap: what is the identity element of concatenation — the empty language ∅ or the empty word ε?",
              uk: "Класична пастка: що є нейтральним елементом конкатенації — порожня мова ∅ чи порожнє слово ε?",
            },
          },
          {
            kind: "trueFalse",
            prompt: {
              fr: "Affirmation : Un langage est régulier si et seulement s'il est décrit par une expression régulière.",
              en: "Statement: A language is regular if and only if it is described by a regular expression.",
              uk: "Твердження: Мова є регулярною тоді й лише тоді, коли вона описана регулярним виразом.",
            },
            answer: true,
            justification: {
              fr: "**Vrai.** C'est le corollaire de l'équivalence des définitions : un langage est régulier s'il est reconnu par un automate (défini ou non) si et seulement s'il est décrit par une expression régulière — les deux notions décrivent exactement les mêmes langages.",
              en: "**True.** This is the corollary of the equivalence of definitions: a language is regular if it is recognized by an automaton (deterministic or not) if and only if it is described by a regular expression — the two notions describe exactly the same languages.",
              uk: "**Правда.** Це наслідок еквівалентності означень: мова є регулярною, якщо вона розпізнається автоматом (детермінованим чи ні), тоді й лише тоді, коли вона описана регулярним виразом — обидва поняття описують точно ті самі мови.",
            },
            mistake: {
              fr: "Relis la fin du chapitre 3 : que dit le corollaire sur l'équivalence automate ↔ expression régulière ?",
              en: "Reread the end of Chapter 3: what does the corollary say about the equivalence automaton ↔ regular expression?",
              uk: "Перечитай кінець розділу 3: що каже наслідок про еквівалентність автомат ↔ регулярний вираз?",
            },
          },
        ],
      },
    ],
  },
];

export const langagesFormels: Subject = {
  slug: "langages-formels",
  title: { fr: "Langages Formels", en: "Formal Languages", uk: "Формальні мови" },
  status: "published",
  summary: {
    fr: "Alphabets, mots, techniques de preuve et automates — notes de révision prêtes pour l'examen.",
    en: "Alphabets, words, proof techniques and automata — exam-ready revision notes.",
    uk: "Алфавіти, слова, техніки доведення та автомати — конспект для підготовки до іспиту.",
  },
  classes: [
    {
      label: { fr: "Chapitre 1", en: "Chapter 1", uk: "Розділ 1" },
      title: {
        fr: "Introduction aux langages formels",
        en: "Introduction to formal languages",
        uk: "Вступ до формальних мов",
      },
      blocks: chapterOne,
    },
    {
      label: { fr: "Chapitre 2", en: "Chapter 2", uk: "Розділ 2" },
      title: {
        fr: "Techniques et outils de preuve",
        en: "Proof techniques and tools",
        uk: "Техніки та інструменти доведення",
      },
      parts: [
        { id: "p1", label: "Sections 2.1 – 2.3" },
        { id: "p2", label: "Sections 2.4 – 2.7" },
      ],
      blocks: chapterTwo,
    },
    {
      label: { fr: "Chapitre 3", en: "Chapter 3", uk: "Розділ 3" },
      title: { fr: "Langages réguliers", en: "Regular languages", uk: "Регулярні мови" },
      parts: [
        { id: "p1", label: { fr: "Partie 1 — Automates", en: "Part 1 — Automata", uk: "Частина 1 — Автомати" } },
        {
          id: "p2",
          label: { fr: "Partie 2 — Opérations & NFA", en: "Part 2 — Operations & NFA", uk: "Частина 2 — Операції та NFA" },
        },
        {
          id: "p3",
          label: { fr: "Partie 3 — Équivalence & regex", en: "Part 3 — Equivalence & regex", uk: "Частина 3 — Еквівалентність і regex" },
        },
        {
          id: "p4",
          label: { fr: "Partie 4 — Langages non réguliers", en: "Part 4 — Non-regular languages", uk: "Частина 4 — Нерегулярні мови" },
        },
      ],
      blocks: chapterThree,
    },
    {
      label: { fr: "Examens blancs", en: "Mock exams", uk: "Пробні іспити" },
      title: {
        fr: "Exercices d'examen blanc (Chapitres 1–3)",
        en: "Mock exam exercises (Chapters 1–3)",
        uk: "Вправи пробного іспиту (розділи 1–3)",
      },
      parts: [
        { id: "p1", label: { fr: "Blanc Global #1", en: "Full Mock Exam #1", uk: "Повний пробний іспит #1" } },
        { id: "p2", label: { fr: "Blanc Global #2", en: "Full Mock Exam #2", uk: "Повний пробний іспит #2" } },
        {
          id: "p3",
          label: { fr: "Blanc N°1 — Théorie & automates", en: "Mock Exam N°1 — Theory & automata", uk: "Пробний іспит №1 — Теорія та автомати" },
        },
        {
          id: "p4",
          label: { fr: "Blanc N°2 — Preuves & construction", en: "Mock Exam N°2 — Proofs & construction", uk: "Пробний іспит №2 — Доведення та побудова" },
        },
      ],
      blocks: examBlancs,
    },
  ],
};
