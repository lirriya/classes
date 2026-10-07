import type { Subject } from "../types";

export const memoryManagement: Subject = {
  slug: "memory-management",
  title: "Memory Management using C",
  date: "May 17, 2025",
  status: "published",
  summary:
    "Memory management is a critical concept in low-level programming, particularly in C. It includes stack vs heap, dynamic allocation, and memory leaks. In this course, we explore how we can use C for memory management.",
  classes: [
    {
      title: "Memory, pointers and C",
      blocks: [
        { type: "heading", level: 3, text: "Basics of Memory" },
        { type: "heading", level: 4, text: "What is a bit and a byte?" },
        {
          type: "list",
          items: [
            { text: "1 bit = a binary digit, so it can be either 0 or 1" },
            { text: "1 byte (aka 1 octet in French) = 8 bits. So something like `00111010`" },
            { text: "1 byte = 1 unit of memory" },
          ],
        },
        { type: "heading", level: 4, text: "What is RAM?" },
        {
          type: "paragraph",
          text: "The main memory (aka RAM or mémoire vive in French) of a computer is made of billions of memory cells, where each cell stores 1 bit and these cells are grouped into bytes (8 bits) for practical use.",
        },
        { type: "heading", level: 4, text: "Memory is addressed" },
        {
          type: "paragraph",
          text: "Each byte (octet) has a unique address; we can think of it as a house number, which is basically just a number.",
        },
        {
          type: "paragraph",
          text: "If a memory has 256 bytes, the addresses can go from 0 to 255.",
        },
        {
          type: "heading",
          level: 4,
          text: "So what happens when we declare a variable in C?",
        },
        {
          type: "paragraph",
          text: "First let's remember what declaration is. Declaration of a variable is when we announce that now we have this variable with this particular type (usually int, string (char[] in C), float, char). It looks something like `int a;`",
        },
        { type: "paragraph", text: "So what happens behind the scenes?" },
        {
          type: "list",
          ordered: true,
          items: [
            {
              text: "The size is determined (we'll talk about it more in depth later). Int usually takes 4 bytes (32 bits).",
            },
            {
              text: "A memory zone is reserved, for example: Addresses 0xFF00, 0xFF01, 0xFF02, 0xFF03 are all reserved for our int a.",
            },
            {
              text: "A link is made between the variable name and the memory address in a register (which is a temporary storage in the CPU). So we can say that a refers to memory starting at 0xFF00.",
            },
          ],
        },
        {
          type: "paragraph",
          text: "How can we access or use the said variable? Well, quite easy. We can either use the variable directly by its name, in our case \"a\".",
        },
        {
          type: "paragraph",
          text: "Or we can use its address with a pointer (more about pointers later!).",
        },

        { type: "heading", level: 3, text: "Basics of C" },
        { type: "heading", level: 4, text: "Let's start with basic C syntax" },
        {
          type: "list",
          items: [
            { text: "Every line ends with a semicolon ;" },
            {
              text: "Instruction blocks use curly braces { }. So if it's \"for/if/while/function\" we put { after the statement and } after the instructions.",
            },
          ],
        },
        { type: "heading", level: 4, text: "The smallest C code program will look like:" },
        {
          type: "code",
          text: "#include <stdlib.h>\n#include <stdio.h>\n\nint main(int argc, char * argv[]) {\n    // code\n    return EXIT_SUCCESS;\n}",
        },

        { type: "heading", level: 3, text: "Comments in C" },
        {
          type: "paragraph",
          text: "Two types of comments: // for a single line or /* multi-line comment */.",
        },
        { type: "paragraph", text: "Good habits to have:" },
        {
          type: "list",
          items: [
            { text: "Comment each function's purpose" },
            { text: "Complex logic" },
            { text: "Memory operations (like `malloc, free, msgrcv`, etc.)" },
          ],
        },

        { type: "heading", level: 3, text: "Variables" },
        {
          type: "paragraph",
          text: "So what is a variable? A variable is a memory slot created by the system to store a value.",
        },
        { type: "paragraph", text: "Each variable has its own:" },
        {
          type: "list",
          items: [
            { text: "Type (int, char, float, etc.)" },
            { text: "Name (a, b, c, etc.)" },
            { text: "Value (1, 2, 3, etc.)" },
            { text: "Address (0xFF00, 0xFF01, etc.)" },
          ],
        },
        { type: "heading", level: 4, text: "Basic Data Types" },
        {
          type: "list",
          items: [
            { text: "`char`: A single character: 1 byte (octet)" },
            { text: "`int`: An integer: 4 bytes (octet)" },
            { text: "`float`: A decimal number: 4 bytes (octet)" },
            { text: "`double`: A more precise float: 8 bytes" },
          ],
        },
        { type: "heading", level: 4, text: "Characters `char`" },
        { type: "paragraph", text: "A `char` stores the ASCII code of a character." },
        { type: "paragraph", text: "So for \"A\" = 65, and for \"a\" = 97, etc." },
        { type: "paragraph", text: "So basically it holds an integer (0 to 255)." },
        { type: "paragraph", text: "`char c = 'A'; // stores 65 in memory`" },
        { type: "heading", level: 4, text: "Integers" },
        {
          type: "list",
          items: [
            { text: "`signed char`: size 1 byte" },
            { text: "`unsigned char`: size 1 byte" },
            { text: "`short int`: size 2 bytes" },
            { text: "`unsigned short int`: size 2 bytes" },
            { text: "`int`: size 4 bytes" },
            { text: "`unsigned int`: size 4 bytes" },
            { text: "`unsigned long int`: 8 bytes" },
          ],
        },
        { type: "heading", level: 4, text: "Floating-point numbers" },
        {
          type: "list",
          items: [
            { text: "`float`: size 4 bytes" },
            { text: "`double`: size 8 bytes" },
          ],
        },
        { type: "heading", level: 4, text: "Constants" },
        {
          type: "list",
          ordered: true,
          items: [
            { text: "`const int max = 5;`" },
            { text: "`#define MAX 100` — note how there's no ;" },
            { text: "`enum DIRECTIONS { NORTH, SOUTH, EAST, WEST };`" },
          ],
        },

        { type: "heading", level: 3, text: "Displaying with printf" },
        { type: "paragraph", text: "So we use format specifiers for each variable." },
        {
          type: "list",
          items: [
            { text: "`%d` - signed int" },
            { text: "`%u` - unsigned int" },
            { text: "`%f` - float" },
            { text: "`%c` - character" },
            { text: "`%s` - string" },
            { text: "`%p` - pointer" },
            { text: "`%x` - hexadecimal" },
          ],
        },
        {
          type: "paragraph",
          text: "Also it's good to create a habit to put \\n at the end of sentences.",
        },

        { type: "heading", level: 3, text: "Practice time!", variant: "exercise" },
        { type: "heading", level: 4, text: "Exercise 1:", variant: "sub" },
        {
          type: "paragraph",
          text: "**Context:** We have 32 Mo (megabytes) of memory.",
        },
        {
          type: "paragraph",
          text: "We should remember that 1 Mo = 1 megaoctet = 1 million octets (bytes), but in computer memory, we use powers of 2.",
        },
        { type: "paragraph", text: "So 1 Mo = 2^20 octets = 1.048.576 octets." },
        { type: "paragraph", text: "So 32 Mo = 32 * 2^20 = 33.554.432 octets." },
        { type: "paragraph", text: "**Q1:** How many char can it store?" },
        {
          type: "paragraph",
          text: "So let's walk through it with logical thinking. \"How big is a char?\"",
        },
        {
          type: "paragraph",
          text: "We know that unsigned and signed char both are the size of 1 byte. So if 32 Mo is equal to 33,554,432 bytes, then we can store exactly 33,554,432 chars.",
        },
        { type: "paragraph", text: "**Q2:** How many int can it store?" },
        {
          type: "paragraph",
          text: "Same logic. Size of int is 4 bytes. We can rephrase the question to \"How many 4-byte chunks can I fit in 33,554,432 bytes?\". We do 33,554,432 / 4 = 8,388,608.",
        },
        { type: "paragraph", text: "**Q3:** How many float can it store?" },
        {
          type: "paragraph",
          text: "The size of float is the same as an int, so the answer is the same.",
        },
        { type: "paragraph", text: "**Q4:** How many bits are needed to address all of memory?" },
        {
          type: "paragraph",
          text: "This is a power of 2 problem.",
        },
        {
          type: "paragraph",
          text: "We put 2 in a power of n >= 33,554,432. We do calculations and we get 2 in a power of 24. So the answer is: we need 25 bits to address this memory.",
        },

        { type: "heading", level: 4, text: "Exercise 2:", variant: "sub" },
        { type: "paragraph", text: "**Context:** A variable int a is stored at address 0xFF00." },
        { type: "paragraph", text: "**Q1:** What are the addresses used by a?" },
        {
          type: "paragraph",
          text: "Think: \"How many bytes does an int take?\". The answer is 4 bytes. So \"if a starts at 0xFF00, what are the next 4 consecutive addresses?\" We start at 0xFF00 and move forward.",
        },
        {
          type: "paragraph",
          text: "The answer: 0xFF00, 0xFF01, 0xFF02 and 0xFF03.",
        },
        { type: "paragraph", text: "**Q2:** What is the address right after a?" },
        {
          type: "paragraph",
          text: "We already used from 0xFF00 to 0xFF03, so the next free address is 0xFF04.",
        },
        { type: "paragraph", text: "**Q3:** What is the maximum memory size of this computer?" },
        {
          type: "paragraph",
          text: "Here the answer lies in the address. We were given that a is stored at address 0xFF00.",
        },
        {
          type: "paragraph",
          text: "Think: \"What's the highest possible addressable memory if addresses go up to 0xFFFF?\". So basically 0xFFFF in decimal is 65,535 bytes. Using the exercise before, we can find that it's 2 in a power of 16, so it means 64 Ko.",
        },

        { type: "heading", level: 4, text: "Exercise 3:", variant: "sub" },
        {
          type: "paragraph",
          text: "**Context:** We were given variables declared as: `int a; a = 5; char b = 'c'; float = 1.25; int b = 6;`",
        },
        {
          type: "paragraph",
          text: "We were also given that the first variable starts at 0xFF00 and all variables are stored consecutively without interruption.",
        },
        {
          type: "list",
          items: [
            {
              text: "`int a = 5;`",
              children: [
                "Size: 4 bytes",
                "Address: 0xFF00 -> 0xFF03",
                "Stored value: 5 in binary, across 4 bytes",
              ],
            },
            {
              text: "`char b = 'c';`",
              children: [
                "Size: 1 byte",
                "Address: 0xFF04",
                "Stored value: ASCII value of c is 99, across 1 byte",
              ],
            },
            {
              text: "`float f = 1.25;`",
              children: ["Size: 4 bytes", "Address: 0xFF05 -> 0xFF08"],
            },
            {
              text: "`int b = 6;`",
              children: ["Size: 4 bytes", "Address: 0xFF09 -> 0xFF0C"],
            },
          ],
        },

        { type: "heading", level: 4, text: "Exercise 4:", variant: "sub" },
        {
          type: "paragraph",
          text: "**Context:** We were given a, b as integers and c, d as characters. Give the C code for:",
        },
        { type: "paragraph", text: "**Q1:** Declare and initialize a and b" },
        { type: "paragraph", text: "`int a = x; int b = x;`" },
        { type: "paragraph", text: "**Q2:** Show the values of a and b" },
        { type: "paragraph", text: "`printf(\"%d, %d\\n\", a, b);`" },
        { type: "paragraph", text: "**Q3:** Initialize c and d with letters from the alphabet." },
        { type: "paragraph", text: "`char c = 'a'; char d = 'b';`" },
        { type: "paragraph", text: "**Q4:** Show the values of c and d" },
        { type: "paragraph", text: "`printf(\"%c, %c\\n\", c, d);`" },
        { type: "paragraph", text: "**Q5:** Show the addresses of the variables" },
        { type: "paragraph", text: "`printf(\"%d, %d\\n\", &a, &b);`" },
        { type: "paragraph", text: "**Q6:** Can we put the value of c in a?" },
        {
          type: "paragraph",
          text: "Yes, we can. It's because essentially char is just a small integer, so int can safely store a char value.",
        },
        { type: "paragraph", text: "**Q7:** But can we do it backwards? So put the value of a in c?" },
        { type: "paragraph", text: "No." },
      ],
    },
    { title: "Variables & Data Types", blocks: [] },
    { title: "Conditions & Loops", blocks: [] },
    { title: "Functions", blocks: [] },
    { title: "Pointers & Memory", blocks: [] },
  ],
};
