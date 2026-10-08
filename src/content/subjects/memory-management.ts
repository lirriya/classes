import type { Subject } from "../types";

export const memoryManagement: Subject = {
  slug: "memory-management",
  title: {
    fr: "Gestion de la mémoire en C",
    en: "Memory Management using C",
  },
  date: { fr: "17 mai 2025", en: "May 17, 2025" },
  status: "published",
  summary: {
    fr: "La gestion de la mémoire est un concept essentiel de la programmation bas niveau, particulièrement en C. Elle couvre pile vs tas, l'allocation dynamique et les fuites de mémoire. Dans ce cours, nous explorons comment utiliser C pour gérer la mémoire.",
    en: "Memory management is a critical concept in low-level programming, particularly in C. It includes stack vs heap, dynamic allocation, and memory leaks. In this course, we explore how we can use C for memory management.",
  },
  classes: [
    {
      title: {
        fr: "Mémoire, pointeurs et C",
        en: "Memory, pointers and C",
      },
      blocks: [
        {
          type: "heading",
          level: 3,
          text: { fr: "Bases de la mémoire", en: "Basics of Memory" },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Qu'est-ce qu'un bit et un octet ?",
            en: "What is a bit and a byte?",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "1 bit = un chiffre binaire, donc il vaut 0 ou 1",
                en: "1 bit = a binary digit, so it can be either 0 or 1",
              },
            },
            {
              text: {
                fr: "1 octet (byte en anglais) = 8 bits. Donc quelque chose comme `00111010`",
                en: "1 byte (aka 1 octet in French) = 8 bits. So something like `00111010`",
              },
            },
            {
              text: {
                fr: "1 octet = 1 unité de mémoire",
                en: "1 byte = 1 unit of memory",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Qu'est-ce que la RAM ?", en: "What is RAM?" },
        },
        {
          type: "paragraph",
          text: {
            fr: "La mémoire principale (RAM, ou mémoire vive) d'un ordinateur est composée de milliards de cellules mémoire, où chaque cellule stocke 1 bit, et ces cellules sont regroupées en octets (8 bits) pour plus de praticité.",
            en: "The main memory (aka RAM or mémoire vive in French) of a computer is made of billions of memory cells, where each cell stores 1 bit and these cells are grouped into bytes (8 bits) for practical use.",
          },
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "La mémoire est adressée", en: "Memory is addressed" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Chaque octet a une adresse unique ; on peut y penser comme un numéro de maison, qui n'est fondamentalement qu'un nombre.",
            en: "Each byte (octet) has a unique address; we can think of it as a house number, which is basically just a number.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Si une mémoire a 256 octets, les adresses vont de 0 à 255.",
            en: "If a memory has 256 bytes, the addresses can go from 0 to 255.",
          },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Que se passe-t-il quand on déclare une variable en C ?",
            en: "So what happens when we declare a variable in C?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Rappelons d'abord ce qu'est une déclaration. La déclaration d'une variable, c'est quand on annonce que nous avons désormais cette variable avec ce type particulier (généralement int, string (char[] en C), float, char). Cela ressemble à `int a;`",
            en: "First let's remember what declaration is. Declaration of a variable is when we announce that now we have this variable with this particular type (usually int, string (char[] in C), float, char). It looks something like `int a;`",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Que se passe-t-il en coulisses ?",
            en: "So what happens behind the scenes?",
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
              },
            },
            {
              text: {
                fr: "Une zone mémoire est réservée, par exemple : les adresses 0xFF00, 0xFF01, 0xFF02, 0xFF03 sont toutes réservées pour notre int a.",
                en: "A memory zone is reserved, for example: Addresses 0xFF00, 0xFF01, 0xFF02, 0xFF03 are all reserved for our int a.",
              },
            },
            {
              text: {
                fr: "Un lien est établi entre le nom de la variable et l'adresse mémoire dans un registre (qui est un stockage temporaire dans le CPU). On peut donc dire que a pointe vers la mémoire à partir de 0xFF00.",
                en: "A link is made between the variable name and the memory address in a register (which is a temporary storage in the CPU). So we can say that a refers to memory starting at 0xFF00.",
              },
            },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "Comment accéder ou utiliser ladite variable ? C'est assez simple. On peut utiliser la variable directement par son nom, dans notre cas \"a\".",
            en: "How can we access or use the said variable? Well, quite easy. We can either use the variable directly by its name, in our case \"a\".",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Ou on peut utiliser son adresse avec un pointeur (plus sur les pointeurs plus tard !).",
            en: "Or we can use its address with a pointer (more about pointers later!).",
          },
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "Bases de C", en: "Basics of C" },
        },
        {
          type: "heading",
          level: 4,
          text: {
            fr: "Commençons par la syntaxe de base de C",
            en: "Let's start with basic C syntax",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Chaque ligne se termine par un point-virgule ;",
                en: "Every line ends with a semicolon ;",
              },
            },
            {
              text: {
                fr: "Les blocs d'instructions utilisent les accolades { }. Donc pour \"for/if/while/function\", on met { après l'instruction et } après les instructions.",
                en: "Instruction blocks use curly braces { }. So if it's \"for/if/while/function\" we put { after the statement and } after the instructions.",
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
          },
        },
        {
          type: "code",
          text: "#include <stdlib.h>\n#include <stdio.h>\n\nint main(int argc, char * argv[]) {\n    // code\n    return EXIT_SUCCESS;\n}",
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "Les commentaires en C", en: "Comments in C" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Deux types de commentaires : // pour une seule ligne ou /* commentaire multi-lignes */.",
            en: "Two types of comments: // for a single line or /* multi-line comment */.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Bonnes habitudes à prendre :",
            en: "Good habits to have:",
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "Commenter le but de chaque fonction",
                en: "Comment each function's purpose",
              },
            },
            { text: { fr: "La logique complexe", en: "Complex logic" } },
            {
              text: {
                fr: "Les opérations mémoire (comme `malloc, free, msgrcv`, etc.)",
                en: "Memory operations (like `malloc, free, msgrcv`, etc.)",
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
          },
        },
        {
          type: "paragraph",
          text: { fr: "Chaque variable a ses propres :", en: "Each variable has its own:" },
        },
        {
          type: "list",
          items: [
            { text: "Type (int, char, float, etc.)" },
            { text: { fr: "Nom (a, b, c, etc.)", en: "Name (a, b, c, etc.)" } },
            {
              text: { fr: "Valeur (1, 2, 3, etc.)", en: "Value (1, 2, 3, etc.)" },
            },
            {
              text: {
                fr: "Adresse (0xFF00, 0xFF01, etc.)",
                en: "Address (0xFF00, 0xFF01, etc.)",
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
          },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "`char` : un caractère simple : 1 octet",
                en: "`char`: A single character: 1 byte (octet)",
              },
            },
            {
              text: {
                fr: "`int` : un entier : 4 octets",
                en: "`int`: An integer: 4 bytes (octet)",
              },
            },
            {
              text: {
                fr: "`float` : un nombre décimal : 4 octets",
                en: "`float`: A decimal number: 4 bytes (octet)",
              },
            },
            {
              text: {
                fr: "`double` : un float plus précis : 8 octets",
                en: "`double`: A more precise float: 8 bytes",
              },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Les caractères `char`", en: "Characters `char`" },
        },
        {
          type: "paragraph",
          text: {
            fr: "Un `char` stocke le code ASCII d'un caractère.",
            en: "A `char` stores the ASCII code of a character.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc pour \"A\" c'est 65, et pour \"a\" c'est 97, etc.",
            en: "So for \"A\" = 65, and for \"a\" = 97, etc.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc en gros il contient un entier (0 à 255).",
            en: "So basically it holds an integer (0 to 255).",
          },
        },
        {
          type: "paragraph",
          text: "`char c = 'A'; // stores 65 in memory`",
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Les entiers", en: "Integers" },
        },
        {
          type: "list",
          items: [
            {
              text: {
                fr: "`signed char` : taille 1 octet",
                en: "`signed char`: size 1 byte",
              },
            },
            {
              text: {
                fr: "`unsigned char` : taille 1 octet",
                en: "`unsigned char`: size 1 byte",
              },
            },
            {
              text: {
                fr: "`short int` : taille 2 octets",
                en: "`short int`: size 2 bytes",
              },
            },
            {
              text: {
                fr: "`unsigned short int` : taille 2 octets",
                en: "`unsigned short int`: size 2 bytes",
              },
            },
            {
              text: { fr: "`int` : taille 4 octets", en: "`int`: size 4 bytes" },
            },
            {
              text: {
                fr: "`unsigned int` : taille 4 octets",
                en: "`unsigned int`: size 4 bytes",
              },
            },
            {
              text: {
                fr: "`unsigned long int` : 8 octets",
                en: "`unsigned long int`: 8 bytes",
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
          },
        },
        {
          type: "list",
          items: [
            {
              text: { fr: "`float` : taille 4 octets", en: "`float`: size 4 bytes" },
            },
            {
              text: { fr: "`double` : taille 8 octets", en: "`double`: size 8 bytes" },
            },
          ],
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Les constantes", en: "Constants" },
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
              },
            },
            { text: "`enum DIRECTIONS { NORTH, SOUTH, EAST, WEST };`" },
          ],
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "L'affichage avec printf", en: "Displaying with printf" },
        },
        {
          type: "paragraph",
          text: {
            fr: "On utilise donc des spécificateurs de format pour chaque variable.",
            en: "So we use format specifiers for each variable.",
          },
        },
        {
          type: "list",
          items: [
            { text: { fr: "`%d` - entier signé", en: "`%d` - signed int" } },
            {
              text: { fr: "`%u` - entier non signé", en: "`%u` - unsigned int" },
            },
            { text: { fr: "`%f` - flottant", en: "`%f` - float" } },
            {
              text: { fr: "`%c` - caractère", en: "`%c` - character" },
            },
            { text: { fr: "`%s` - chaîne", en: "`%s` - string" } },
            { text: { fr: "`%p` - pointeur", en: "`%p` - pointer" } },
            {
              text: { fr: "`%x` - hexadécimal", en: "`%x` - hexadecimal" },
            },
          ],
        },
        {
          type: "paragraph",
          text: {
            fr: "C'est aussi une bonne habitude de mettre \\n à la fin des phrases.",
            en: "Also it's good to create a habit to put \\n at the end of sentences.",
          },
        },

        {
          type: "heading",
          level: 3,
          text: { fr: "À l'exercice !", en: "Practice time!" },
          variant: "exercise",
        },
        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 1 :", en: "Exercise 1:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** Nous avons 32 Mo (mégaoctets) de mémoire.",
            en: "**Context:** We have 32 Mo (megabytes) of memory.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Il faut se rappeler que 1 Mo = 1 mégaoctet = 1 million d'octets, mais en mémoire informatique, on utilise des puissances de 2.",
            en: "We should remember that 1 Mo = 1 megaoctet = 1 million octets (bytes), but in computer memory, we use powers of 2.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc 1 Mo = 2^20 octets = 1.048.576 octets.",
            en: "So 1 Mo = 2^20 octets = 1,048,576 octets.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Donc 32 Mo = 32 * 2^20 = 33.554.432 octets.",
            en: "So 32 Mo = 32 * 2^20 = 33,554,432 octets.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q1 :** Combien de char peut-elle stocker ?",
            en: "**Q1:** How many char can it store?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Réfléchissons logiquement. \"Quelle est la taille d'un char ?\"",
            en: "So let's walk through it with logical thinking. \"How big is a char?\"",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On sait que unsigned char et signed char font tous les deux 1 octet. Donc si 32 Mo équivalent à 33 554 432 octets, on peut stocker exactement 33 554 432 chars.",
            en: "We know that unsigned and signed char both are the size of 1 byte. So if 32 Mo is equal to 33,554,432 bytes, then we can store exactly 33,554,432 chars.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q2 :** Combien de int peut-elle stocker ?",
            en: "**Q2:** How many int can it store?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Même logique. La taille de int est de 4 octets. On peut reformuler la question : \"Combien de blocs de 4 octets puis-je faire tenir dans 33 554 432 octets ?\". On calcule 33 554 432 / 4 = 8 388 608.",
            en: "Same logic. Size of int is 4 bytes. We can rephrase the question to \"How many 4-byte chunks can I fit in 33,554,432 bytes?\". We do 33,554,432 / 4 = 8,388,608.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q3 :** Combien de float peut-elle stocker ?",
            en: "**Q3:** How many float can it store?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "La taille de float est la même que celle d'un int, donc la réponse est la même.",
            en: "The size of float is the same as an int, so the answer is the same.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q4 :** Combien de bits sont nécessaires pour adresser toute la mémoire ?",
            en: "**Q4:** How many bits are needed to address all of memory?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "C'est un problème de puissance de 2.",
            en: "This is a power of 2 problem.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On cherche n tel que 2^n >= 33 554 432. En calculant, on obtient 2^24. La réponse est donc : il nous faut 25 bits pour adresser cette mémoire.",
            en: "We put 2 in a power of n >= 33,554,432. We do calculations and we get 2 in a power of 24. So the answer is: we need 25 bits to address this memory.",
          },
        },

        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 2 :", en: "Exercise 2:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** Une variable int a est stockée à l'adresse 0xFF00.",
            en: "**Context:** A variable int a is stored at address 0xFF00.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q1 :** Quelles sont les adresses utilisées par a ?",
            en: "**Q1:** What are the addresses used by a?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Pensez : \"Combien d'octets occupe un int ?\". La réponse est 4 octets. Donc \"si a commence à 0xFF00, quelles sont les 4 adresses consécutives suivantes ?\" On part de 0xFF00 et on avance.",
            en: "Think: \"How many bytes does an int take?\". The answer is 4 bytes. So \"if a starts at 0xFF00, what are the next 4 consecutive addresses?\" We start at 0xFF00 and move forward.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "La réponse : 0xFF00, 0xFF01, 0xFF02 et 0xFF03.",
            en: "The answer: 0xFF00, 0xFF01, 0xFF02 and 0xFF03.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q2 :** Quelle est l'adresse juste après a ?",
            en: "**Q2:** What is the address right after a?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On a déjà utilisé de 0xFF00 à 0xFF03, donc la prochaine adresse libre est 0xFF04.",
            en: "We already used from 0xFF00 to 0xFF03, so the next free address is 0xFF04.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q3 :** Quelle est la taille mémoire maximale de cet ordinateur ?",
            en: "**Q3:** What is the maximum memory size of this computer?",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Ici, la réponse se trouve dans l'adresse. On nous a dit que a est stockée à l'adresse 0xFF00.",
            en: "Here the answer lies in the address. We were given that a is stored at address 0xFF00.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Pensez : \"Quelle est la mémoire adressable maximale si les adresses vont jusqu'à 0xFFFF ?\". Donc 0xFFFF en décimal fait 65 535 octets. Avec l'exercice précédent, on trouve que c'est 2 à la puissance 16, donc cela signifie 64 Ko.",
            en: "Think: \"What's the highest possible addressable memory if addresses go up to 0xFFFF?\". So basically 0xFFFF in decimal is 65,535 bytes. Using the exercise before, we can find that it's 2 in a power of 16, so it means 64 Ko.",
          },
        },

        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 3 :", en: "Exercise 3:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** On nous a donné des variables déclarées ainsi : `int a; a = 5; char b = 'c'; float = 1.25; int b = 6;`",
            en: "**Context:** We were given variables declared as: `int a; a = 5; char b = 'c'; float = 1.25; int b = 6;`",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "On nous a aussi dit que la première variable commence à 0xFF00 et que toutes les variables sont stockées consécutivement sans interruption.",
            en: "We were also given that the first variable starts at 0xFF00 and all variables are stored consecutively without interruption.",
          },
        },
        {
          type: "list",
          items: [
            {
              text: "`int a = 5;`",
              children: [
                { fr: "Taille : 4 octets", en: "Size: 4 bytes" },
                { fr: "Adresse : 0xFF00 -> 0xFF03", en: "Address: 0xFF00 -> 0xFF03" },
                {
                  fr: "Valeur stockée : 5 en binaire, réparti sur 4 octets",
                  en: "Stored value: 5 in binary, across 4 bytes",
                },
              ],
            },
            {
              text: "`char b = 'c';`",
              children: [
                { fr: "Taille : 1 octet", en: "Size: 1 byte" },
                { fr: "Adresse : 0xFF04", en: "Address: 0xFF04" },
                {
                  fr: "Valeur stockée : la valeur ASCII de c est 99, sur 1 octet",
                  en: "Stored value: ASCII value of c is 99, across 1 byte",
                },
              ],
            },
            {
              text: "`float f = 1.25;`",
              children: [
                { fr: "Taille : 4 octets", en: "Size: 4 bytes" },
                { fr: "Adresse : 0xFF05 -> 0xFF08", en: "Address: 0xFF05 -> 0xFF08" },
              ],
            },
            {
              text: "`int b = 6;`",
              children: [
                { fr: "Taille : 4 octets", en: "Size: 4 bytes" },
                { fr: "Adresse : 0xFF09 -> 0xFF0C", en: "Address: 0xFF09 -> 0xFF0C" },
              ],
            },
          ],
        },

        {
          type: "heading",
          level: 4,
          text: { fr: "Exercice 4 :", en: "Exercise 4:" },
          variant: "sub",
        },
        {
          type: "paragraph",
          text: {
            fr: "**Contexte :** On nous a donné a, b comme entiers et c, d comme caractères. Donnez le code C pour :",
            en: "**Context:** We were given a, b as integers and c, d as characters. Give the C code for:",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q1 :** Déclarez et initialisez a et b",
            en: "**Q1:** Declare and initialize a and b",
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
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "Oui, on peut. Parce qu'essentiellement char n'est qu'un petit entier, donc int peut stocker sans problème une valeur char.",
            en: "Yes, we can. It's because essentially char is just a small integer, so int can safely store a char value.",
          },
        },
        {
          type: "paragraph",
          text: {
            fr: "**Q7 :** Mais peut-on faire l'inverse ? Mettre la valeur de a dans c ?",
            en: "**Q7:** But can we do it backwards? So put the value of a in c?",
          },
        },
        {
          type: "paragraph",
          text: { fr: "Non.", en: "No." },
        },
      ],
    },
    {
      title: {
        fr: "Variables et types de données",
        en: "Variables & Data Types",
      },
      blocks: [],
    },
    {
      title: { fr: "Conditions et boucles", en: "Conditions & Loops" },
      blocks: [],
    },
    { title: { fr: "Fonctions", en: "Functions" }, blocks: [] },
    {
      title: { fr: "Pointeurs et mémoire", en: "Pointers & Memory" },
      blocks: [],
    },
  ],
};
