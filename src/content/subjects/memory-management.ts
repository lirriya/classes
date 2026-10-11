import type { Subject } from "../types";

export const memoryManagement: Subject = {
  slug: "memory-management",
  title: {
    fr: "Gestion de la mémoire en C",
    en: "Memory Management using C",
    uk: "Керування пам'яттю в C",
  },
  date: { fr: "17 mai 2025", en: "May 17, 2025", uk: "17 травня 2025" },
  status: "published",
  summary: {
    fr: "La gestion de la mémoire est un concept essentiel de la programmation bas niveau, particulièrement en C. Elle couvre pile vs tas, l'allocation dynamique et les fuites de mémoire. Dans ce cours, nous explorons comment utiliser C pour gérer la mémoire.",
    en: "Memory management is a critical concept in low-level programming, particularly in C. It includes stack vs heap, dynamic allocation, and memory leaks. In this course, we explore how we can use C for memory management.",
    uk: "Керування пам'яттю — це ключове поняття низькорівневого програмування, особливо в C. Воно охоплює стек і купу, динамічне виділення пам'яті та витоки пам'яті. У цьому курсі ми досліджуємо, як використовувати C для керування пам'яттю.",
  },
  classes: [
    {
      title: {
        fr: "Mémoire, pointeurs et C",
        en: "Memory, pointers and C",
        uk: "Пам'ять, вказівники та C",
      },
      blocks: [
        {
          type: "heading",
          level: 3,
          text: { fr: "Bases de la mémoire", en: "Basics of Memory", uk: "Основи пам'яті" },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Qu'est-ce qu'un bit et un octet ?",
            en: "What is a bit and a byte?",
            uk: "Що таке біт і байт?",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "1 bit = un chiffre binaire, donc il vaut 0 ou 1",
                en: "1 bit = a binary digit, so it can be either 0 or 1",
                uk: "1 біт = одна двійкова цифра, тому він дорівнює 0 або 1",
              },
            },
            {
              text: {
                fr: "1 octet (byte en anglais) = 8 bits. Donc quelque chose comme `00111010`",
                en: "1 byte (aka 1 octet in French) = 8 bits. So something like `00111010`",
                uk: "1 байт (фр. octet) = 8 бітів. Тобто щось на кшталт `00111010`",
              },
            },
            {
              text: {
                fr: "1 octet = 1 unité de mémoire",
                en: "1 byte = 1 unit of memory",
                uk: "1 байт = 1 одиниця пам'яті",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Qu'est-ce que la RAM ?", en: "What is RAM?", uk: "Що таке RAM?" },
        },
        {
          type: "paragraph",
          text: {
            fr: "La mémoire principale (RAM, ou mémoire vive) d'un ordinateur est composée de milliards de cellules mémoire, où chaque cellule stocke 1 bit, et ces cellules sont regroupées en octets (8 bits) pour plus de praticité.",
            en: "The main memory (aka RAM or mémoire vive in French) of a computer is made of billions of memory cells, where each cell stores 1 bit and these cells are grouped into bytes (8 bits) for practical use.",
            uk: "Основна пам'ять (RAM, або оперативна пам'ять) комп'ютера складається з мільярдів комірок пам'яті, де кожна комірка зберігає 1 біт, і ці комірки об'єднані в байти (8 бітів) для зручності.",
          },
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "La mémoire est adressée", en: "Memory is addressed", uk: "Пам'ять має адреси" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Chaque octet a une adresse unique ; on peut y penser comme un numéro de maison, qui n'est fondamentalement qu'un nombre.",
            en: "Each byte (octet) has a unique address; we can think of it as a house number, which is basically just a number.",
            uk: "Кожен байт має унікальну адресу; її можна уявити як номер будинку, який по суті є просто числом.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Si une mémoire a 256 octets, les adresses vont de 0 à 255.",
            en: "If a memory has 256 bytes, the addresses can go from 0 to 255.",
            uk: "Якщо пам'ять має 256 байтів, адреси можуть іти від 0 до 255.",
          },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Que se passe-t-il quand on déclare une variable en C ?",
            en: "So what happens when we declare a variable in C?",
            uk: "Тож що відбувається, коли ми оголошуємо змінну в C?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Rappelons d'abord ce qu'est une déclaration. La déclaration d'une variable, c'est quand on annonce que nous avons désormais cette variable avec ce type particulier (généralement int, string (char[] en C), float, char). Cela ressemble à `int a;`",
            en: "First let's remember what declaration is. Declaration of a variable is when we announce that now we have this variable with this particular type (usually int, string (char[] in C), float, char). It looks something like `int a;`",
            uk: "Спершу пригадаймо, що таке оголошення. Оголошення змінної — це коли ми повідомляємо, що тепер у нас є ця змінна з цим конкретним типом (зазвичай int, string (char[] у C), float, char). Це виглядає приблизно так: `int a;`",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Que se passe-t-il en coulisses ?",
            en: "So what happens behind the scenes?",
            uk: "Тож що відбувається за кулісами?",
          },
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              text: {
                fr: "La taille est déterminée (nous y reviendrons plus en détail plus tard). Int prend généralement 4 octets (32 bits).",
                en: "The size is determined (we'll talk about it more in depth later). Int usually takes 4 bytes (32 bits).",
                uk: "Визначається розмір (ми поговоримо про це детальніше пізніше). Int зазвичай займає 4 байти (32 біти).",
              },
            },
            {
              text: {
                fr: "Une zone mémoire est réservée, par exemple : les adresses 0xFF00, 0xFF01, 0xFF02, 0xFF03 sont toutes réservées pour notre int a.",
                en: "A memory zone is reserved, for example: Addresses 0xFF00, 0xFF01, 0xFF02, 0xFF03 are all reserved for our int a.",
                uk: "Виділяється ділянка пам'яті, наприклад: адреси 0xFF00, 0xFF01, 0xFF02, 0xFF03 усі зарезервовані для нашої змінної int a.",
              },
            },
            {
              text: {
                fr: "Un lien est établi entre le nom de la variable et l'adresse mémoire dans un registre (qui est un stockage temporaire dans le CPU). On peut donc dire que a pointe vers la mémoire à partir de 0xFF00.",
                en: "A link is made between the variable name and the memory address in a register (which is a temporary storage in the CPU). So we can say that a refers to memory starting at 0xFF00.",
                uk: "Встановлюється зв'язок між іменем змінної та адресою пам'яті в регістрі (який є тимчасовим сховищем у процесорі). Тож можна сказати, що a вказує на пам'ять, починаючи з 0xFF00.",
              },
            },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "Comment accéder ou utiliser ladite variable ? C'est assez simple. On peut utiliser la variable directement par son nom, dans notre cas \"a\".",
            en: "How can we access or use the said variable? Well, quite easy. We can either use the variable directly by its name, in our case \"a\".",
            uk: "Як отримати доступ до цієї змінної або використати її? Досить просто. Ми можемо або використати змінну безпосередньо за її іменем, у нашому випадку \"a\".",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Ou on peut utiliser son adresse avec un pointeur (plus sur les pointeurs plus tard !).",
            en: "Or we can use its address with a pointer (more about pointers later!).",
            uk: "Або ми можемо використати її адресу за допомогою вказівника (про вказівники пізніше!).",
          },
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "Bases de C", en: "Basics of C", uk: "Основи C" },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Commençons par la syntaxe de base de C",
            en: "Let's start with basic C syntax",
            uk: "Почнімо з базового синтаксису C",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Chaque ligne se termine par un point-virgule ;",
                en: "Every line ends with a semicolon ;",
                uk: "Кожен рядок закінчується крапкою з комою ;",
              },
            },
            {
              text: {
                fr: "Les blocs d'instructions utilisent les accolades { }. Donc pour \"for/if/while/function\", on met { après l'instruction et } après les instructions.",
                en: "Instruction blocks use curly braces { }. So if it's \"for/if/while/function\" we put { after the statement and } after the instructions.",
                uk: "Блоки інструкцій використовують фігурні дужки { }. Тож для \"for/if/while/function\" ми ставимо { після інструкції та } після інструкцій.",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Le plus petit programme C ressemble à ceci :",
            en: "The smallest C code program will look like:",
            uk: "Найменша програма мовою C виглядає так:",
          },
        },
        {
          type: "code",
          text: "#include <stdlib.h>\n#include <stdio.h>\n\nint main(int argc, char * argv[]) {\n    // code\n    return EXIT_SUCCESS;\n}",
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "Les commentaires en C", en: "Comments in C", uk: "Коментарі в C" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Deux types de commentaires : // pour une seule ligne ou /* commentaire multi-lignes */.",
            en: "Two types of comments: // for a single line or /* multi-line comment */.",
            uk: "Два типи коментарів: // для одного рядка або /* багаторядковий коментар */.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Bonnes habitudes à prendre :",
            en: "Good habits to have:",
            uk: "Корисні звички:",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Commenter le but de chaque fonction",
                en: "Comment each function's purpose",
                uk: "Коментувати призначення кожної функції",
              },
            },
            { text: { fr: "La logique complexe", en: "Complex logic", uk: "Складну логіку" } },
            {
              text: {
                fr: "Les opérations mémoire (comme `malloc, free, msgrcv`, etc.)",
                en: "Memory operations (like `malloc, free, msgrcv`, etc.)",
                uk: "Операції з пам'яттю (як-от `malloc, free, msgrcv` тощо)",
              },
            },
          ],
        },

        { type: "heading", level: 3, text: "Variables" },
        {
          type: "paragraph",
          text: {
            fr: "Alors, qu'est-ce qu'une variable ? Une variable est une case mémoire créée par le système pour stocker une valeur.",
            en: "So what is a variable? A variable is a memory slot created by the system to store a value.",
            uk: "Тож що таке змінна? Змінна — це комірка пам'яті, створена системою для зберігання значення.",
          },
        },
        {
          type: "paragraph",
          text: { fr: "Chaque variable a ses propres :", en: "Each variable has its own:", uk: "Кожна змінна має свої:" },
        },
        {
          type: "list",
          items: [
            { text: "Type (int, char, float, etc.)" },
            { text: { fr: "Nom (a, b, c, etc.)", en: "Name (a, b, c, etc.)", uk: "Ім'я (a, b, c тощо)" } },
            {
              text: { fr: "Valeur (1, 2, 3, etc.)", en: "Value (1, 2, 3, etc.)", uk: "Значення (1, 2, 3 тощо)" },
            },
            {
              text: {
                fr: "Adresse (0xFF00, 0xFF01, etc.)",
                en: "Address (0xFF00, 0xFF01, etc.)",
                uk: "Адреса (0xFF00, 0xFF01 тощо)",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Types de données de base",
            en: "Basic Data Types",
            uk: "Базові типи даних",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "`char` : un caractère simple : 1 octet",
                en: "`char`: A single character: 1 byte (octet)",
                uk: "`char`: один символ: 1 байт",
              },
            },
            {
              text: {
                fr: "`int` : un entier : 4 octets",
                en: "`int`: An integer: 4 bytes (octet)",
                uk: "`int`: ціле число: 4 байти",
              },
            },
            {
              text: {
                fr: "`float` : un nombre décimal : 4 octets",
                en: "`float`: A decimal number: 4 bytes (octet)",
                uk: "`float`: десяткове число: 4 байти",
              },
            },
            {
              text: {
                fr: "`double` : un float plus précis : 8 octets",
                en: "`double`: A more precise float: 8 bytes",
                uk: "`double`: точніший float: 8 байтів",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Les caractères `char`", en: "Characters `char`", uk: "Символи `char`" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Un `char` stocke le code ASCII d'un caractère.",
            en: "A `char` stores the ASCII code of a character.",
            uk: "`char` зберігає ASCII-код символу.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc pour \"A\" c'est 65, et pour \"a\" c'est 97, etc.",
            en: "So for \"A\" = 65, and for \"a\" = 97, etc.",
            uk: "Тож для \"A\" = 65, а для \"a\" = 97 тощо.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc en gros il contient un entier (0 à 255).",
            en: "So basically it holds an integer (0 to 255).",
            uk: "Тож по суті він містить ціле число (від 0 до 255).",
          },
        },
        {
          type: "paragraph",
          text: "`char c = 'A'; // stores 65 in memory`",
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Les entiers", en: "Integers", uk: "Цілі числа" },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "`signed char` : taille 1 octet",
                en: "`signed char`: size 1 byte",
                uk: "`signed char`: розмір 1 байт",
              },
            },
            {
              text: {
                fr: "`unsigned char` : taille 1 octet",
                en: "`unsigned char`: size 1 byte",
                uk: "`unsigned char`: розмір 1 байт",
              },
            },
            {
              text: {
                fr: "`short int` : taille 2 octets",
                en: "`short int`: size 2 bytes",
                uk: "`short int`: розмір 2 байти",
              },
            },
            {
              text: {
                fr: "`unsigned short int` : taille 2 octets",
                en: "`unsigned short int`: size 2 bytes",
                uk: "`unsigned short int`: розмір 2 байти",
              },
            },
            {
              text: { fr: "`int` : taille 4 octets", en: "`int`: size 4 bytes", uk: "`int`: розмір 4 байти" },
            },
            {
              text: {
                fr: "`unsigned int` : taille 4 octets",
                en: "`unsigned int`: size 4 bytes",
                uk: "`unsigned int`: розмір 4 байти",
              },
            },
            {
              text: {
                fr: "`unsigned long int` : 8 octets",
                en: "`unsigned long int`: 8 bytes",
                uk: "`unsigned long int`: 8 байтів",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Les nombres flottants",
            en: "Floating-point numbers",
            uk: "Числа з плаваючою комою",
          },
        },
        {
          type: "list",
          items: [
            {
              text: { fr: "`float` : taille 4 octets", en: "`float`: size 4 bytes", uk: "`float`: розмір 4 байти" },
            },
            {
              text: { fr: "`double` : taille 8 octets", en: "`double`: size 8 bytes", uk: "`double`: розмір 8 байтів" },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Les constantes", en: "Constants", uk: "Константи" },
        },
        {
          type: "list",
          ordered: true,
          items: [
            { text: "`const int max = 5;`" },
            {
              text: {
                fr: "`#define MAX 100` — remarquez qu'il n'y a pas de ;",
                en: "`#define MAX 100` — note how there's no ;",
                uk: "`#define MAX 100` — зверніть увагу, що тут немає ;",
              },
            },
            { text: "`enum DIRECTIONS { NORTH, SOUTH, EAST, WEST };`" },
          ],
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "L'affichage avec printf", en: "Displaying with printf", uk: "Виведення за допомогою printf" },
        },
        {
          type: "paragraph",
          text: {
            fr: "On utilise donc des spécificateurs de format pour chaque variable.",
            en: "So we use format specifiers for each variable.",
            uk: "Тож ми використовуємо специфікатори формату для кожної змінної.",
          },
        },
        {
          type: "list",
          items: [
            { text: { fr: "`%d` - entier signé", en: "`%d` - signed int", uk: "`%d` - знаковий int" } },
            {
              text: { fr: "`%u` - entier non signé", en: "`%u` - unsigned int", uk: "`%u` - беззнаковий int" },
            },
            { text: { fr: "`%f` - flottant", en: "`%f` - float", uk: "`%f` - float" } },
            {
              text: { fr: "`%c` - caractère", en: "`%c` - character", uk: "`%c` - символ" },
            },
            { text: { fr: "`%s` - chaîne", en: "`%s` - string", uk: "`%s` - рядок" } },
            { text: { fr: "`%p` - pointeur", en: "`%p` - pointer", uk: "`%p` - вказівник" } },
            {
              text: { fr: "`%x` - hexadécimal", en: "`%x` - hexadecimal", uk: "`%x` - шістнадцяткове" },
            },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "C'est aussi une bonne habitude de mettre \\n à la fin des phrases.",
            en: "Also it's good to create a habit to put \\n at the end of sentences.",
            uk: "Також корисно взяти за звичку ставити \\n у кінці речень.",
          },
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "À l'exercice !", en: "Practice time!", uk: "Час практики!" },
          variant: "exercise",
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 1 :", en: "Exercise 1:", uk: "Вправа 1:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** Nous avons 32 Mo (mégaoctets) de mémoire.",
            en: "**Context:** We have 32 Mo (megabytes) of memory.",
            uk: "**Контекст:** Ми маємо 32 МБ (мегабайти) пам'яті.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Il faut se rappeler que 1 Mo = 1 mégaoctet = 1 million d'octets, mais en mémoire informatique, on utilise des puissances de 2.",
            en: "We should remember that 1 Mo = 1 megaoctet = 1 million octets (bytes), but in computer memory, we use powers of 2.",
            uk: "Слід пам'ятати, що 1 МБ = 1 мегабайт = 1 мільйон байтів, але в комп'ютерній пам'яті ми використовуємо степені 2.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc 1 Mo = 2^20 octets = 1.048.576 octets.",
            en: "So 1 Mo = 2^20 octets = 1,048,576 octets.",
            uk: "Отже, 1 МБ = 2^20 байтів = 1 048 576 байтів.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc 32 Mo = 32 * 2^20 = 33.554.432 octets.",
            en: "So 32 Mo = 32 * 2^20 = 33,554,432 octets.",
            uk: "Отже, 32 МБ = 32 * 2^20 = 33 554 432 байти.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q1 :** Combien de char peut-elle stocker ?",
            en: "**Q1:** How many char can it store?",
            uk: "**Питання 1:** Скільки char вона може зберегти?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Réfléchissons logiquement. \"Quelle est la taille d'un char ?\"",
            en: "So let's walk through it with logical thinking. \"How big is a char?\"",
            uk: "Тож розгляньмо це логічно. \"Який розмір char?\"",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On sait que unsigned char et signed char font tous les deux 1 octet. Donc si 32 Mo équivalent à 33 554 432 octets, on peut stocker exactement 33 554 432 chars.",
            en: "We know that unsigned and signed char both are the size of 1 byte. So if 32 Mo is equal to 33,554,432 bytes, then we can store exactly 33,554,432 chars.",
            uk: "Ми знаємо, що unsigned та signed char обидва мають розмір 1 байт. Тож якщо 32 МБ дорівнює 33 554 432 байтам, то ми можемо зберегти рівно 33 554 432 символи char.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q2 :** Combien de int peut-elle stocker ?",
            en: "**Q2:** How many int can it store?",
            uk: "**Питання 2:** Скільки int вона може зберегти?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Même logique. La taille de int est de 4 octets. On peut reformuler la question : \"Combien de blocs de 4 octets puis-je faire tenir dans 33 554 432 octets ?\". On calcule 33 554 432 / 4 = 8 388 608.",
            en: "Same logic. Size of int is 4 bytes. We can rephrase the question to \"How many 4-byte chunks can I fit in 33,554,432 bytes?\". We do 33,554,432 / 4 = 8,388,608.",
            uk: "Та сама логіка. Розмір int — 4 байти. Можна переформулювати питання: \"Скільки блоків по 4 байти вміститься в 33 554 432 байтах?\". Обчислюємо 33 554 432 / 4 = 8 388 608.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q3 :** Combien de float peut-elle stocker ?",
            en: "**Q3:** How many float can it store?",
            uk: "**Питання 3:** Скільки float вона може зберегти?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "La taille de float est la même que celle d'un int, donc la réponse est la même.",
            en: "The size of float is the same as an int, so the answer is the same.",
            uk: "Розмір float такий самий, як в int, тож відповідь та сама.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q4 :** Combien de bits sont nécessaires pour adresser toute la mémoire ?",
            en: "**Q4:** How many bits are needed to address all of memory?",
            uk: "**Питання 4:** Скільки бітів потрібно, щоб адресувати всю пам'ять?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "C'est un problème de puissance de 2.",
            en: "This is a power of 2 problem.",
            uk: "Це задача про степінь 2.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On cherche n tel que 2^n >= 33 554 432. En calculant, on obtient 2^24. La réponse est donc : il nous faut 25 bits pour adresser cette mémoire.",
            en: "We put 2 in a power of n >= 33,554,432. We do calculations and we get 2 in a power of 24. So the answer is: we need 25 bits to address this memory.",
            uk: "Ми шукаємо n таке, що 2^n >= 33 554 432. Обчислюючи, отримуємо 2^24. Отже, відповідь: нам потрібно 25 бітів, щоб адресувати цю пам'ять.",
          },
        },

        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 2 :", en: "Exercise 2:", uk: "Вправа 2:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** Une variable int a est stockée à l'adresse 0xFF00.",
            en: "**Context:** A variable int a is stored at address 0xFF00.",
            uk: "**Контекст:** Змінна int a зберігається за адресою 0xFF00.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q1 :** Quelles sont les adresses utilisées par a ?",
            en: "**Q1:** What are the addresses used by a?",
            uk: "**Питання 1:** Які адреси використовує a?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Pensez : \"Combien d'octets occupe un int ?\". La réponse est 4 octets. Donc \"si a commence à 0xFF00, quelles sont les 4 adresses consécutives suivantes ?\" On part de 0xFF00 et on avance.",
            en: "Think: \"How many bytes does an int take?\". The answer is 4 bytes. So \"if a starts at 0xFF00, what are the next 4 consecutive addresses?\" We start at 0xFF00 and move forward.",
            uk: "Подумайте: \"Скільки байтів займає int?\". Відповідь — 4 байти. Тож \"якщо a починається з 0xFF00, які наступні 4 послідовні адреси?\" Ми починаємо з 0xFF00 і рухаємося вперед.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "La réponse : 0xFF00, 0xFF01, 0xFF02 et 0xFF03.",
            en: "The answer: 0xFF00, 0xFF01, 0xFF02 and 0xFF03.",
            uk: "Відповідь: 0xFF00, 0xFF01, 0xFF02 та 0xFF03.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q2 :** Quelle est l'adresse juste après a ?",
            en: "**Q2:** What is the address right after a?",
            uk: "**Питання 2:** Яка адреса йде одразу після a?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On a déjà utilisé de 0xFF00 à 0xFF03, donc la prochaine adresse libre est 0xFF04.",
            en: "We already used from 0xFF00 to 0xFF03, so the next free address is 0xFF04.",
            uk: "Ми вже використали адреси від 0xFF00 до 0xFF03, тож наступна вільна адреса — 0xFF04.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q3 :** Quelle est la taille mémoire maximale de cet ordinateur ?",
            en: "**Q3:** What is the maximum memory size of this computer?",
            uk: "**Питання 3:** Який максимальний розмір пам'яті цього комп'ютера?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Ici, la réponse se trouve dans l'adresse. On nous a dit que a est stockée à l'adresse 0xFF00.",
            en: "Here the answer lies in the address. We were given that a is stored at address 0xFF00.",
            uk: "Тут відповідь криється в адресі. Нам сказали, що a зберігається за адресою 0xFF00.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Pensez : \"Quelle est la mémoire adressable maximale si les adresses vont jusqu'à 0xFFFF ?\". Donc 0xFFFF en décimal fait 65 535 octets. Avec l'exercice précédent, on trouve que c'est 2 à la puissance 16, donc cela signifie 64 Ko.",
            en: "Think: \"What's the highest possible addressable memory if addresses go up to 0xFFFF?\". So basically 0xFFFF in decimal is 65,535 bytes. Using the exercise before, we can find that it's 2 in a power of 16, so it means 64 Ko.",
            uk: "Подумайте: \"Яка найбільша адресована пам'ять, якщо адреси сягають 0xFFFF?\". Отже, 0xFFFF у десятковій системі — це 65 535 байтів. Використовуючи попередню вправу, ми знаходимо, що це 2^16, тобто 64 КБ.",
          },
        },

        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 3 :", en: "Exercise 3:", uk: "Вправа 3:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** On nous a donné des variables déclarées ainsi : `int a; a = 5; char b = 'c'; float = 1.25; int b = 6;`",
            en: "**Context:** We were given variables declared as: `int a; a = 5; char b = 'c'; float = 1.25; int b = 6;`",
            uk: "**Контекст:** Нам дано змінні, оголошені так: `int a; a = 5; char b = 'c'; float = 1.25; int b = 6;`",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On nous a aussi dit que la première variable commence à 0xFF00 et que toutes les variables sont stockées consécutivement sans interruption.",
            en: "We were also given that the first variable starts at 0xFF00 and all variables are stored consecutively without interruption.",
            uk: "Нам також сказали, що перша змінна починається з 0xFF00 і всі змінні зберігаються послідовно без проміжків.",
          },
        },
        {
          type: "list",
          items: [
            {
              text: "`int a = 5;`",
              children: [
                { fr: "Taille : 4 octets", en: "Size: 4 bytes", uk: "Розмір: 4 байти" },
                { fr: "Adresse : 0xFF00 -> 0xFF03", en: "Address: 0xFF00 -> 0xFF03", uk: "Адреса: 0xFF00 -> 0xFF03" },
                {
                  fr: "Valeur stockée : 5 en binaire, réparti sur 4 octets",
                  en: "Stored value: 5 in binary, across 4 bytes",
                  uk: "Збережене значення: 5 у двійковому вигляді, розподілене на 4 байти",
                },
              ],
            },
            {
              text: "`char b = 'c';`",
              children: [
                { fr: "Taille : 1 octet", en: "Size: 1 byte", uk: "Розмір: 1 байт" },
                { fr: "Adresse : 0xFF04", en: "Address: 0xFF04", uk: "Адреса: 0xFF04" },
                {
                  fr: "Valeur stockée : la valeur ASCII de c est 99, sur 1 octet",
                  en: "Stored value: ASCII value of c is 99, across 1 byte",
                  uk: "Збережене значення: ASCII-код c дорівнює 99, на 1 байті",
                },
              ],
            },
            {
              text: "`float f = 1.25;`",
              children: [
                { fr: "Taille : 4 octets", en: "Size: 4 bytes", uk: "Розмір: 4 байти" },
                { fr: "Adresse : 0xFF05 -> 0xFF08", en: "Address: 0xFF05 -> 0xFF08", uk: "Адреса: 0xFF05 -> 0xFF08" },
              ],
            },
            {
              text: "`int b = 6;`",
              children: [
                { fr: "Taille : 4 octets", en: "Size: 4 bytes", uk: "Розмір: 4 байти" },
                { fr: "Adresse : 0xFF09 -> 0xFF0C", en: "Address: 0xFF09 -> 0xFF0C", uk: "Адреса: 0xFF09 -> 0xFF0C" },
              ],
            },
          ],
        },

        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 4 :", en: "Exercise 4:", uk: "Вправа 4:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** On nous a donné a, b comme entiers et c, d comme caractères. Donnez le code C pour :",
            en: "**Context:** We were given a, b as integers and c, d as characters. Give the C code for:",
            uk: "**Контекст:** Нам дано a, b як цілі числа та c, d як символи. Наведіть код C для:",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q1 :** Déclarez et initialisez a et b",
            en: "**Q1:** Declare and initialize a and b",
            uk: "**Питання 1:** Оголосіть та ініціалізуйте a і b",
          },
        },
        {
          type: "paragraph",
          text: "`int a = x; int b = x;`",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q2 :** Affichez les valeurs de a et b",
            en: "**Q2:** Show the values of a and b",
            uk: "**Питання 2:** Виведіть значення a і b",
          },
        },
        {
          type: "paragraph",
          text: "`printf(\"%d, %d\\n\", a, b);`",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q3 :** Initialisez c et d avec des lettres de l'alphabet.",
            en: "**Q3:** Initialize c and d with letters from the alphabet.",
            uk: "**Питання 3:** Ініціалізуйте c і d літерами з алфавіту.",
          },
        },
        {
          type: "paragraph",
          text: "`char c = 'a'; char d = 'b';`",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q4 :** Affichez les valeurs de c et d",
            en: "**Q4:** Show the values of c and d",
            uk: "**Питання 4:** Виведіть значення c і d",
          },
        },
        {
          type: "paragraph",
          text: "`printf(\"%c, %c\\n\", c, d);`",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q5 :** Affichez les adresses des variables",
            en: "**Q5:** Show the addresses of the variables",
            uk: "**Питання 5:** Виведіть адреси змінних",
          },
        },
        {
          type: "paragraph",
          text: "`printf(\"%d, %d\\n\", &a, &b);`",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q6 :** Peut-on mettre la valeur de c dans a ?",
            en: "**Q6:** Can we put the value of c in a?",
            uk: "**Питання 6:** Чи можна помістити значення c у a?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Oui, on peut. Parce qu'essentiellement char n'est qu'un petit entier, donc int peut stocker sans problème une valeur char.",
            en: "Yes, we can. It's because essentially char is just a small integer, so int can safely store a char value.",
            uk: "Так, можна. Тому що по суті char — це просто маленьке ціле число, тож int може без проблем зберегти значення char.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q7 :** Mais peut-on faire l'inverse ? Mettre la valeur de a dans c ?",
            en: "**Q7:** But can we do it backwards? So put the value of a in c?",
            uk: "**Питання 7:** Але чи можна зробити навпаки? Помістити значення a у c?",
          },
        },
        {
          type: "paragraph",
          text: { fr: "Non.", en: "No.", uk: "Ні." },
        },
      ],
    },
    {
      title: {
        fr: "Variables et types de données",
        en: "Variables & Data Types",
        uk: "Змінні та типи даних",
      },
      blocks: [],
    },
    {
      title: { fr: "Conditions et boucles", en: "Conditions & Loops", uk: "Умови та цикли" },
      blocks: [],
    },
    { title: { fr: "Fonctions", en: "Functions", uk: "Функції" }, blocks: [] },
    {
      title: { fr: "Pointeurs et mémoire", en: "Pointers & Memory", uk: "Вказівники та пам'ять" },
      blocks: [],
    },
  ],
};
