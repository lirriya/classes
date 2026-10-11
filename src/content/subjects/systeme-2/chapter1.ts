import type { Block } from "../../types";

export const chapterOne: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un système d'exploitation doit gérer des **activités parallèles** : réelles (entrées/sorties, multi-processeurs) ou virtuelles (usagers). Ces activités peuvent **coopérer** ou être en **compétition**. La réponse tient en un mot : le **processus**.",
      en: "An operating system must manage **parallel activities**: real ones (input/output, multi-processors) or virtual ones (users). These activities may **cooperate** or be in **competition**. The answer fits in one word: the **process**.",
      uk: "Операційна система має керувати **паралельними діями**: реальними (введення/виведення, багатопроцесорність) або віртуальними (користувачі). Ці дії можуть **співпрацювати** або **конкурувати**. Відповідь вміщується в одному слові: **процес**.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Machine à processus", en: "1. Process machine", uk: "1. Машина процесів" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Action atomique** = exécution d'une instruction. **Processus (séquentiel)** = suite d'actions ; un processus correspond à l'exécution d'un programme.",
      en: "**Atomic action** = execution of an instruction. **(Sequential) process** = a sequence of actions; a process corresponds to the execution of a program.",
      uk: "**Атомарна дія** = виконання однієї інструкції. **Процес (послідовний)** = послідовність дій; процес відповідає виконанню програми.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Concrètement, un processus =**",
      en: "**Concretely, a process =**",
      uk: "**Конкретно, процес =**",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Un **programme en cours d'exécution**, avec un **espace mémoire** : code, données, pile.",
          en: "A **program currently being executed**, with a **memory space**: code, data, stack.",
          uk: "**Програма, що виконується**, з **простором пам'яті**: код, дані, стек.",
        },
      },
      {
        text: {
          fr: "Un **mot d'état de programme** = compteur ordinal (instruction pointer) + registre d'état, complété par les (images des) registres généraux.",
          en: "A **program status word** = program counter (instruction pointer) + status register, completed by the (images of the) general registers.",
          uk: "**Слово стану програми** = лічильник команд (instruction pointer) + регістр стану, доповнені (образами) загальних регістрів.",
        },
      },
      {
        text: {
          fr: "Un **pid** : identifiant de processus (process id).",
          en: "A **pid**: process identifier (process id).",
          uk: "**pid**: ідентифікатор процесу (process id).",
        },
      },
      {
        text: {
          fr: "L'ensemble forme le **bloc de contrôle de processus** (process control block - PCB), rangé dans la table des processus.",
          en: "Together these form the **process control block** (PCB), stored in the process table.",
          uk: "Разом вони утворюють **блок керування процесом** (process control block - PCB), що зберігається в таблиці процесів.",
        },
      },
      {
        text: {
          fr: "**processus ≠ programme** : si un seul programme est lancé deux fois, on obtient **deux processus**.",
          en: "**process ≠ program**: if a single program is launched twice, we get **two processes**.",
          uk: "**процес ≠ програма**: якщо одну програму запустити двічі, отримаємо **два процеси**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "États des processus", en: "Process states", uk: "Стани процесу" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**Élu (Running)** : en train d'exécuter.",
          en: "**Running** : currently executing.",
          uk: "**Виконуваний (Running)** : виконується.",
        },
      },
      {
        text: {
          fr: "**Bloqué (Blocked)** : dans l'attente d'un événement externe (données).",
          en: "**Blocked** : waiting for an external event (data).",
          uk: "**Заблокований (Blocked)** : очікує зовнішньої події (даних).",
        },
      },
      {
        text: {
          fr: "**Prêt (Ready)** : arrêté par le système pour exécuter un autre processus.",
          en: "**Ready** : stopped by the system in order to run another process.",
          uk: "**Готовий (Ready)** : зупинений системою, щоб виконувати інший процес.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Passage de l'Unité Centrale d'un processus à un autre :** on range les registres physiques dans la table des processus (Élu → Prêt), on choisit un nouveau processus à exécuter, puis on charge les registres physiques à partir de la table (Prêt → Élu). Comment forcer ces trois étapes ? Par une **horloge externe** et le mécanisme des **interruptions**.",
      en: "**Switching the Central Unit from one process to another:** the physical registers are stored in the process table (Running → Ready), a new process is chosen, then the physical registers are loaded from the table (Ready → Running). How to force these three steps? With an external **clock** and the **interruption** mechanism.",
      uk: "**Перемикання центрального процесора з одного процесу на інший:** фізичні регістри зберігаються в таблиці процесів (Виконуваний → Готовий), вибирається новий процес для виконання, потім фізичні регістри завантажуються з таблиці (Готовий → Виконуваний). Як змусити ці три кроки відбутися? За допомогою **зовнішнього годинника** та механізму **переривань**.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Le principe des interruptions", en: "The interruption principle", uk: "Принцип переривань" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Déclenchée par un événement extérieur à l'Unité Centrale.",
          en: "Triggered by an event external to the Central Unit.",
          uk: "Викликається подією, зовнішньою щодо центрального процесора.",
        },
      },
      {
        text: {
          fr: "Sauvegarde du mot d'état de programme (dans une pile ou un emplacement fixe), puis chargement d'un mot d'état associé à la nature de l'événement : c'est le **traitant de l'événement**.",
          en: "The program status word is saved (in a stack or a fixed location), then a status word associated with the nature of the event is loaded: this is the **event handler**.",
          uk: "Слово стану програми зберігається (у стеку або у фіксованому місці), потім завантажується слово стану, пов'язане з природою події: це **обробник події**.",
        },
      },
      {
        text: {
          fr: "**Masquage** = possibilité de différer la prise en compte d'un événement. Quand les interruptions sont masquées, un signal qui arrive est **mémorisé** et le changement de mot d'état n'est déclenché qu'au démasquage.",
          en: "**Masking** = the ability to defer the handling of an event. While interruptions are masked, an incoming signal is **memorised** and the status-word switch is triggered only once they are unmasked.",
          uk: "**Маскування** = можливість відкласти обробку події. Поки переривання замасковані, сигнал, що надходить, **запам'ятовується**, а зміна слова стану відбувається лише після зняття маскування.",
        },
      },
      {
        text: {
          fr: "**Horloge** : dispositif qui décompte un intervalle de temps et envoie une interruption à la fin de cet intervalle. Le traitant de l'interruption horloge range les registres, choisit un nouveau processus et le lance.",
          en: "**Clock**: a device that counts down a time interval and sends an interruption at the end of it. The clock-interruption handler stores the registers, chooses a new process and starts it.",
          uk: "**Годинник**: пристрій, який відраховує інтервал часу й надсилає переривання після його завершення. Обробник переривання від годинника зберігає регістри, вибирає новий процес і запускає його.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "Un processus peut être interrompu plusieurs fois pendant son exécution ; au relancement après une interruption, il revient au même exactement état qu'avant l'interruption.",
      en: "A process may be interrupted several times during its execution; when restarted after an interruption, it returns to exactly the same state as before.",
      uk: "Процес може бути перерваний кілька разів під час свого виконання; після перезапуску після переривання він повертається до точно такого самого стану, як і до переривання.",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "process-composition",
        caption: {
          fr: "Un processus = un programme en cours d'exécution + un espace mémoire + un mot d'état + un PCB.",
          en: "A process = a program being executed + a memory space + a program status word + a PCB.",
          uk: "Процес = програма, що виконується + простір пам'яті + слово стану + PCB.",
        },
        nodes: [
          { id: "proc", label: { fr: "Processus", en: "Process", uk: "Процес" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "prog", label: { fr: "Programme en cours d'exécution", en: "Program being executed", uk: "Програма, що виконується" }, x: 300, y: -140, shape: "box" },
          { id: "mem", label: { fr: "Espace mémoire : code, données, pile", en: "Memory space: code, data, stack", uk: "Простір пам'яті: код, дані, стек" }, x: 300, y: 0, shape: "box" },
          { id: "etat", label: { fr: "Mot d'état : compteur ordinal + registre", en: "Status word: program counter + register", uk: "Слово стану: лічильник команд + регістр" }, x: 300, y: 140, shape: "box", tone: "soft" },
          { id: "pcb", label: { fr: "PCB : pid, registres", en: "PCB: pid, registers", uk: "PCB: pid, регістри" }, x: 300, y: 280, shape: "box", tone: "soft" },
        ],
        edges: [
          { from: "proc", to: "prog" },
          { from: "proc", to: "mem" },
          { from: "proc", to: "etat" },
          { from: "proc", to: "pcb" },
        ],
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "États d'un processus", en: "Process states", uk: "Стани процесу" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Un processus est arrêté par le système pour exécuter un autre processus. Dans quel état se trouve-t-il ?",
        en: "A process is stopped by the system so that another process can run. In which state is it?",
        uk: "Процес зупинено системою, щоб міг виконуватися інший процес. У якому стані він перебуває?",
      },
      options: [
        {
          text: { fr: "Élu (Running).", en: "Running.", uk: "Виконуваний (Running)." },
          feedback: {
            fr: "Non : Élu signifie qu'il est en train d'exécuter.",
            en: "No: Running means it is currently executing.",
            uk: "Ні: Виконуваний означає, що він зараз виконується.",
          },
        },
        {
          text: { fr: "Prêt (Ready).", en: "Ready.", uk: "Готовий (Ready)." },
          feedback: {
            fr: "Oui : Prêt = arrêté par le système pour exécuter un autre processus.",
            en: "Yes: Ready = stopped by the system to run another process.",
            uk: "Так: Готовий = зупинений системою, щоб виконувати інший процес.",
          },
        },
        {
          text: { fr: "Bloqué (Blocked).", en: "Blocked.", uk: "Заблокований (Blocked)." },
          feedback: {
            fr: "Non : Bloqué = en attente d'un événement externe (données).",
            en: "No: Blocked = waiting for an external event (data).",
            uk: "Ні: Заблокований = очікує зовнішньої події (даних).",
          },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "Un processus **Prêt** a été arrêté par le système pour laisser la place à un autre ; un processus **Élu** exécute, un processus **Bloqué** attend une donnée.",
        en: "A **Ready** process was stopped by the system to make room for another; a **Running** process executes, a **Blocked** process waits for data.",
        uk: "**Готовий** процес було зупинено системою, щоб звільнити місце для іншого; **виконуваний** процес виконується, а **заблокований** процес очікує даних.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Processus sous UNIX", en: "2. Processes under UNIX", uk: "2. Процеси в UNIX" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**pid (process identifier)** : entier de **0 à 32767**. `pid = 0` → noyau d'UNIX ; `pid = 1` → `init`, l'ancêtre de tous les processus.",
      en: "**pid (process identifier)**: an integer from **0 to 32767**. `pid = 0` → the UNIX kernel; `pid = 1` → `init`, the ancestor of all processes.",
      uk: "**pid (process identifier)**: ціле число від **0 до 32767**. `pid = 0` → ядро UNIX; `pid = 1` → `init`, предок усіх процесів.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int getpid(void)` (`<unistd.h>`) → renvoie le pid du processus qui l'appelle.",
          en: "`int getpid(void)` (`<unistd.h>`) → returns the pid of the calling process.",
          uk: "`int getpid(void)` (`<unistd.h>`) → повертає pid процесу, який його викликав.",
        },
      },
      {
        text: {
          fr: "`int getppid(void)` → renvoie le pid du processus père.",
          en: "`int getppid(void)` → returns the pid of the parent process.",
          uk: "`int getppid(void)` → повертає pid батьківського процесу.",
        },
      },
      {
        text: {
          fr: "La **table des processus** se consulte avec `ps` (processes snapshot) ; `ps -e` affiche tous les processus de syntaxe standard.",
          en: "The **process table** is inspected with `ps` (processes snapshot); `ps -e` prints all processes.",
          uk: "**Таблицю процесів** переглядають за допомогою `ps` (processes snapshot); `ps -e` виводить усі процеси.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "pid du processus courant et pid de son père.",
      en: "pid of the current process and pid of its parent.",
      uk: "pid поточного процесу та pid його батька.",
    },
    text: `#include <stdio.h>
#include <unistd.h>

int main(int argc, char *argv[]) {
    printf("pid = %d, pid du pere = %d\\n", getpid(), getppid());
    return 0;
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "pid et init", en: "pid and init", uk: "pid та init" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Le processus de pid 1 est `init`, l'ancêtre de tous les processus.",
        en: "The process with pid 1 is `init`, the ancestor of all processes.",
        uk: "Процес із pid 1 — це `init`, предок усіх процесів.",
      },
      answer: true,
      justification: {
        fr: "Exact : `pid = 0` est le noyau d'UNIX et `pid = 1` est `init`, l'ancêtre de tous les processus.",
        en: "Correct: `pid = 0` is the UNIX kernel and `pid = 1` is `init`, the ancestor of all processes.",
        uk: "Правильно: `pid = 0` — це ядро UNIX, а `pid = 1` — це `init`, предок усіх процесів.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. exec : exécuter un programme", en: "3. exec: running a program", uk: "3. exec: виконання програми" },
  },
  {
    type: "paragraph",
    text: {
      fr: "`exec` est une **famille de fonctions**. Objectif : l'exécution d'un programme. `exec` **remplace l'espace mémoire** du processus par le code et les données d'une nouvelle application.",
      en: "`exec` is a **family of functions**. Purpose: the execution of a program. `exec` **replaces the memory space** of the process with the code and data of a new application.",
      uk: "`exec` — це **сімейство функцій**. Мета: виконання програми. `exec` **замінює простір пам'яті** процесу кодом і даними нової програми.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**aucune création de processus** (même pid) ;",
          en: "**no process creation** (same pid);",
          uk: "**жодного створення процесу** (той самий pid);",
        },
      },
      {
        text: {
          fr: "on ne peut pas revenir à l'ancien programme, sauf en cas d'échec de l'appel `exec` → renvoie **-1** ;",
          en: "there is no return to the old program, except if the `exec` call fails → it returns **-1**;",
          uk: "повернення до старої програми неможливе, крім випадку збою виклику `exec` → він повертає **-1**;",
        },
      },
      {
        text: {
          fr: "les variables allouées à l'ancien programme sont libérées ;",
          en: "the variables allocated by the old program are freed;",
          uk: "змінні, виділені старою програмою, звільняються;",
        },
      },
      {
        text: {
          fr: "les **descripteurs de fichiers ouverts sont transmis** au nouveau programme.",
          en: "the **open file descriptors are passed on** to the new program.",
          uk: "**відкриті дескриптори файлів передаються** новій програмі.",
        },
      },
    ],
  },
  {
    type: "paragraph",
    text: {
      fr: "**Primitives exec :** `l` (liste) ou `v` (tableau) ; `p` : recherche de la commande avec la variable d'environnement `PATH`.",
      en: "**exec primitives:** `l` (list) or `v` (array); `p`: lookup of the command using the `PATH` environment variable.",
      uk: "**Примітиви exec:** `l` (список) або `v` (масив); `p`: пошук команди за допомогою змінної середовища `PATH`.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Prototypes et exemples d'utilisation.", en: "Prototypes and usage examples.", uk: "Прототипи та приклади використання." },
    text: `int execlp(char *application, char *arg0, char *arg1, ..., char *argN, char *null);
int execv(char *application, char *argv[]);

execlp("ls", "ls", "-l", NULL);
execv("/usr/bin/ls", argv);`,
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Exemple : affichage d'une chaîne de caractères (echo the lazy dogs).",
      en: "Example: printing a string of characters (echo the lazy dogs).",
      uk: "Приклад: виведення рядка символів (echo the lazy dogs).",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

int main(int argc, char *argv[]) {
    printf("the quick brown fox jumped over\\n");
    execlp("echo", "echo", "the", "lazy", "dogs", NULL);
    erreur("execlp");
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Effet de exec", en: "Effect of exec", uk: "Ефект exec" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "`exec` crée un nouveau processus.",
        en: "`exec` creates a new process.",
        uk: "`exec` створює новий процес.",
      },
      answer: false,
      justification: {
        fr: "Faux : `exec` ne crée aucun processus (même pid), il **remplace** l'espace mémoire du processus par celui d'une nouvelle application.",
        en: "False: `exec` creates no process (same pid), it **replaces** the process memory space with that of a new application.",
        uk: "Хибно: `exec` не створює жодного процесу (той самий pid), він **замінює** простір пам'яті процесу простором нової програми.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. fork : créer un processus", en: "4. fork: creating a process", uk: "4. fork: створення процесу" },
  },
  {
    type: "paragraph",
    text: {
      fr: "`int fork(void)` **crée un nouveau processus avec le même programme** : copie presque conforme du processus initial (mémoire, descripteurs de fichiers, variables), à des adresses différentes en mémoire. Il renvoie :",
      en: "`int fork(void)` **creates a new process with the same program**: an almost identical copy of the initial process (memory, file descriptors, variables), at different memory addresses. It returns:",
      uk: "`int fork(void)` **створює новий процес з тією самою програмою**: майже ідентичну копію початкового процесу (пам'ять, дескриптори файлів, змінні), за іншими адресами в пам'яті. Він повертає:",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**-1** en cas d'erreur ;",
          en: "**-1** on error;",
          uk: "**-1** у разі помилки;",
        },
      },
      {
        text: {
          fr: "**0** au processus fils ;",
          en: "**0** to the child process;",
          uk: "**0** дочірньому процесу;",
        },
      },
      {
        text: {
          fr: "le **pid du fils** au processus père.",
          en: "the **child's pid** to the parent process.",
          uk: "**pid дочірнього процесу** батьківському процесу.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : erreur(), fils() et pere(), comme dans le cours.",
      en: "Complete program: erreur(), fils() and pere(), as in the lecture.",
      uk: "Повна програма: erreur(), fils() і pere(), як у лекції.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void fils(int pid) {
    printf("Fils %d: recu %d\\n", getpid(), pid);
    exit(0);
}

void pere(int pid) {
    printf("Pere %d: recu %d\\n", getpid(), pid);
    exit(0);
}

int main(int argc, char *argv[]) {
    int pid;
    switch (pid = fork()) {
        case -1: erreur("fork");
        case 0: fils(pid);
    }
    pere(pid);
}`,
  },
  {
    type: "trace",
    spec: {
      id: "fork-trace",
      caption: {
        fr: "Déroulé d'un fork : cliquez pour avancer étape par étape.",
        en: "Walkthrough of a fork: click to advance step by step.",
        uk: "Перебіг fork: натискайте, щоб рухатися крок за кроком.",
      },
      events: [
        {
          label: { fr: "Le père exécute `fork()`", en: "The parent executes `fork()`", uk: "Батьківський процес виконує `fork()`" },
          detail: { fr: "L'OS duplique l'espace mémoire du processus.", en: "The OS duplicates the process memory space.", uk: "ОС дублює простір пам'яті процесу." },
        },
        {
          label: { fr: "Deux processus reviennent du fork", en: "Two processes return from fork", uk: "Два процеси повертаються з fork" },
          detail: { fr: "Père : pid > 0. Fils : pid == 0.", en: "Parent: pid > 0. Child: pid == 0.", uk: "Батько: pid > 0. Дитина: pid == 0." },
        },
        {
          label: { fr: "Le fils imprime son pid", en: "The child prints its pid", uk: "Дочірній процес виводить свій pid" },
          detail: { fr: "`getpid()` renvoie le pid du fils.", en: "`getpid()` returns the child's pid.", uk: "`getpid()` повертає pid дочірнього процесу." },
        },
        {
          label: { fr: "Le fils appelle `exit(0)`", en: "The child calls `exit(0)`", uk: "Дочірній процес викликає `exit(0)`" },
          detail: { fr: "Il devient zombie jusqu'au wait.", en: "It becomes a zombie until wait.", uk: "Він стає зомбі до виклику wait." },
        },
        {
          label: { fr: "Le père appelle `wait(NULL)`", en: "The parent calls `wait(NULL)`", uk: "Батьківський процес викликає `wait(NULL)`" },
          detail: { fr: "Il récupère le code de retour, le zombie disparaît.", en: "It collects the exit code, the zombie disappears.", uk: "Він збирає код повернення, і зомбі зникає." },
        },
      ],
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Le code du fils continue après le switch", en: "The child's code continues after the switch", uk: "Код дочірнього процесу продовжується після switch" },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Que donne ce programme ?", en: "What does this program output?", uk: "Що виводить ця програма?" },
    text: `int main(int argc, char *argv[]) {
    switch (fork()) {
        case -1: erreur("fork");
        case 0: printf("fils : %d\\n", getpid());
    }
    printf("pere : %d\\n", getpid());
    exit(0);
}`,
  },
  {
    type: "paragraph",
    text: {
      fr: "Résultat : `pere : pid_pere`, `fils : pid_fils`, `pere : pid_fils`. Pourquoi ? Le code du fils **sort du switch et continue** à exécuter les instructions suivantes ; il exécute donc aussi le `printf(\"pere\")` final.",
      en: "Output: `pere : pid_pere`, `fils : pid_fils`, `pere : pid_fils`. Why? The child's code **falls out of the switch and continues** to execute the following instructions; it therefore also runs the final `printf(\"pere\")`.",
      uk: "Результат: `pere : pid_pere`, `fils : pid_fils`, `pere : pid_fils`. Чому? Код дочірнього процесу **виходить із switch і продовжується** виконувати наступні інструкції; тому він також виконує фінальний `printf(\"pere\")`.",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Combien de processus sont créés ?", en: "How many processes are created?", uk: "Скільки процесів створюється?" },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Trois fork non contrôlés.", en: "Three uncontrolled forks.", uk: "Три некеровані fork." },
    text: `int main(int argc, char *argv[]) {
    int i;
    for (i = 1; i <= 3; i++) {
        switch (fork()) {
            case -1: erreur("fork");
            case 0: printf("%d\\n", getpid());
        }
    }
    exit(0);
}`,
  },
  {
    type: "paragraph",
    text: {
      fr: "**7** processus sont créés : chaque fork non contrôlé double le nombre d'exécutants, donc 2^3 = 8 processus au total, soit 7 fils en plus du `main`. `fork` échoue quand il n'y a plus de pid disponible à affecter.",
      en: "**7** processes are created: each uncontrolled fork doubles the number of executors, so 2^3 = 8 processes in total, i.e. 7 children in addition to `main`. `fork` fails when there is no pid left to assign.",
      uk: "Створюється **7** процесів: кожен некерований fork подвоює кількість виконавців, отже, загалом 2^3 = 8 процесів, тобто 7 дочірніх на додачу до `main`. `fork` зазнає невдачі, коли немає вільного pid для призначення.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Valeur de retour de fork", en: "fork return value", uk: "Значення, яке повертає fork" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Que renvoie `fork()` dans le processus **père** ?",
        en: "What does `fork()` return in the **parent** process?",
        uk: "Що повертає `fork()` у **батьківському** процесі?",
      },
      options: [
        {
          text: { fr: "0", en: "0", uk: "0" },
          feedback: {
            fr: "Non : c'est le **fils** qui reçoit 0.",
            en: "No: it is the **child** that receives 0.",
            uk: "Ні: 0 отримує **дочірній** процес.",
          },
        },
        {
          text: { fr: "Le pid du fils.", en: "The child's pid.", uk: "pid дочірнього процесу." },
          feedback: {
            fr: "Oui : le père reçoit le pid du fils.",
            en: "Yes: the parent receives the child's pid.",
            uk: "Так: батько отримує pid дочірнього процесу.",
          },
        },
        {
          text: { fr: "-1", en: "-1", uk: "-1" },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "`fork()` renvoie **-1** en cas d'erreur, **0** au fils et le **pid du fils** au père.",
        en: "`fork()` returns **-1** on error, **0** to the child and the **child's pid** to the parent.",
        uk: "`fork()` повертає **-1** у разі помилки, **0** дочірньому процесу та **pid дочірнього процесу** батькові.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "5. wait et le zombie", en: "5. wait and the zombie", uk: "5. wait і зомбі" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**zombie (ou défunt - defunct)** : un processus qui a terminé son exécution mais qui existe toujours dans la table de processus (son identifiant ne peut pas être utilisé par un autre processus). Un signal est envoyé au processus père afin de l'informer de sa fin. Dès que le père a lu le code de retour du fils, ce dernier est définitivement supprimé de la table des processus.",
      en: "**zombie (or defunct)**: a process that has finished its execution but still exists in the process table (its identifier cannot be used by another process). A signal is sent to the parent process to inform it of the child's end. As soon as the parent has read the child's return code, the child is permanently removed from the process table.",
      uk: "**зомбі (або defunct)**: процес, який завершив своє виконання, але все ще існує в таблиці процесів (його ідентифікатор не може бути використаний іншим процесом). Батьківському процесу надсилається сигнал, щоб повідомити його про завершення дитини. Щойно батько прочитає код повернення дитини, дитину остаточно видаляють із таблиці процесів.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int wait(int *status)` (`<sys/wait.h>`) : provoque la **suspension** de l'appelant jusqu'à la fin d'un fils ; retourne le **pid** du fils terminé, ou **-1** si échec ; place le code résultat du processus fils dans `status`.",
          en: "`int wait(int *status)` (`<sys/wait.h>`): **suspends** the caller until one child finishes; returns the **pid** of the finished child, or **-1** on failure; stores the child's result code in `status`.",
          uk: "`int wait(int *status)` (`<sys/wait.h>`): **призупиняє** того, хто викликав, до завершення одного з дочірніх процесів; повертає **pid** завершеного дочірнього процесу або **-1** у разі збою; записує код результату дочірнього процесу в `status`.",
        },
      },
      {
        text: {
          fr: "Problème : tant que le père n'a pas appelé `wait`, le fils reste **zombie** pendant toute la durée d'exécution du père.",
          en: "Problem: as long as the parent has not called `wait`, the child stays **zombie** for the whole duration of the parent's execution.",
          uk: "Проблема: поки батько не викликав `wait`, дитина залишається **зомбі** протягом усього часу виконання батька.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Attendre la mort d'un fils, puis de tous les fils.", en: "Wait for one child, then for all children.", uk: "Зачекати на завершення одного дочірнього процесу, а потім усіх дочірніх." },
    text: `if (wait(NULL) == -1)
    erreur("wait");

while (wait(NULL) != -1);`,
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Exemple : le père attend un fils.", en: "Example: the parent waits for a child.", uk: "Приклад: батько чекає на дочірній процес." },
    text: `void fils() {
    printf("Fils %d - se termine\\n", getpid());
    exit(0);
}

void pere() {
    printf("Pere %d - en pause\\n", getpid());
    wait(NULL);
    sleep(20);
    exit(0);
}

int main(int argc, char *argv[]) {
    int pid;
    switch (pid = fork()) {
        case -1: erreur("fork");
        case 0: fils();
    }
    pere();
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Zombie", en: "Zombie", uk: "Зомбі" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Un fils terminé dont le père n'a pas encore appelé `wait` reste zombie dans la table des processus.",
        en: "A finished child whose parent has not yet called `wait` remains a zombie in the process table.",
        uk: "Завершений дочірній процес, чий батько ще не викликав `wait`, залишається зомбі в таблиці процесів.",
      },
      answer: true,
      justification: {
        fr: "Exact : son identifiant ne peut pas être réutilisé tant que le père n'a pas lu son code de retour avec `wait`.",
        en: "Correct: its identifier cannot be reused until the parent has read its return code with `wait`.",
        uk: "Правильно: його ідентифікатор не можна використати повторно, доки батько не прочитає його код повернення за допомогою `wait`.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "6. Les tubes anonymes", en: "6. Anonymous pipes", uk: "6. Анонімні канали" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Passage d'information** : passage des données d'un processus à un autre. Exemple : `ls | wc -l`.",
      en: "**Information passing**: passing data from one process to another. Example: `ls | wc -l`.",
      uk: "**Передавання інформації**: передавання даних від одного процесу до іншого. Приклад: `ls | wc -l`.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Les canaux sont utilisables par tous les processus les connaissant.",
          en: "The channels can be used by any process that knows them.",
          uk: "Канали можуть використовувати будь-які процеси, які їх знають.",
        },
      },
      {
        text: {
          fr: "Les lectures et écritures dans ces canaux utilisent les primitives des fichiers binaires : `read`, `write`.",
          en: "Reads and writes on these channels use the binary-file primitives: `read`, `write`.",
          uk: "Читання та запис у цих каналах використовують примітиви бінарних файлів: `read`, `write`.",
        },
      },
      {
        text: {
          fr: "Les données écrites sont lues dans l'ordre d'arrivée (first in first out).",
          en: "The data written are read in arrival order (first in first out).",
          uk: "Записані дані читаються в порядку надходження (first in first out).",
        },
      },
      {
        text: {
          fr: "La fermeture libère le descripteur et agit comme fin de fichier pour le lecteur.",
          en: "Closing frees the descriptor and acts as end-of-file for the reader.",
          uk: "Закриття звільняє дескриптор і діє як кінець файлу для читача.",
        },
      },
      {
        text: {
          fr: "L'écriture est bloquée si le tube est plein (d'où synchronisation) ; la lecture est bloquée si le tube est vide (d'où synchronisation).",
          en: "Writing blocks if the pipe is full (hence synchronisation); reading blocks if the pipe is empty (hence synchronisation).",
          uk: "Запис блокується, якщо канал повний (звідси синхронізація); читання блокується, якщо канал порожній (звідси синхронізація).",
        },
      },
      {
        text: {
          fr: "L'indivisibilité de `read` et de `write` est garantie.",
          en: "The indivisibility of `read` and `write` is guaranteed.",
          uk: "Неподільність `read` і `write` гарантована.",
        },
      },
    ],
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int pipe(int pfd[2])` (`<unistd.h>`) crée un tube (tableau de deux descripteurs : entrée et sortie) ; retourne **-1** si échec.",
          en: "`int pipe(int pfd[2])` (`<unistd.h>`) creates a pipe (an array of two descriptors: entry and exit); returns **-1** on failure.",
          uk: "`int pipe(int pfd[2])` (`<unistd.h>`) створює канал (масив із двох дескрипторів: вхід і вихід); повертає **-1** у разі збою.",
        },
      },
      {
        text: {
          fr: "`pfd[0]` : la **sortie** du tube, ouvert en **lecture seule**.",
          en: "`pfd[0]`: the pipe **exit**, opened **read-only**.",
          uk: "`pfd[0]`: **вихід** каналу, відкритий **лише для читання**.",
        },
      },
      {
        text: {
          fr: "`pfd[1]` : l'**entrée** du tube, ouvert en **écriture seule**.",
          en: "`pfd[1]`: the pipe **entry**, opened **write-only**.",
          uk: "`pfd[1]`: **вхід** каналу, відкритий **лише для запису**.",
        },
      },
      {
        text: {
          fr: "`int read(int fd, void *buf, int count)` et `int write(int fd, const void *buf, int count)` : si échec retourne **-1**, sinon renvoie le nombre d'octets lus/écrits (`fd = pfd[0]` pour `read`, `fd = pfd[1]` pour `write`).",
          en: "`int read(int fd, void *buf, int count)` and `int write(int fd, const void *buf, int count)`: return **-1** on failure, otherwise the number of bytes read/written (`fd = pfd[0]` for `read`, `fd = pfd[1]` for `write`).",
          uk: "`int read(int fd, void *buf, int count)` і `int write(int fd, const void *buf, int count)`: у разі збою повертають **-1**, інакше — кількість прочитаних/записаних байтів (`fd = pfd[0]` для `read`, `fd = pfd[1]` для `write`).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Exemple avec un seul processus", en: "Example with a single process", uk: "Приклад з одним процесом" },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "On écrit puis on lit dans le même tube.", en: "We write then read in the same pipe.", uk: "Записуємо, а потім читаємо з того самого каналу." },
    text: `int main(int argc, char *argv[]) {
    char buffer[100];
    int pfd[2];

    if (pipe(pfd) == -1) erreur("pipe");

    if (write(pfd[1], "Hello World\\n", strlen("Hello World\\n") * sizeof(char)) == -1)
        erreur("write");

    if (read(pfd[0], buffer, sizeof(buffer)) == -1)
        erreur("read");

    printf("recu : %s", buffer);

    if (close(pfd[0]) == -1) erreur("close");
    if (close(pfd[1]) == -1) erreur("close");
}`,
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Exemple avec deux processus", en: "Example with two processes", uk: "Приклад із двома процесами" },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Le père écrit, le fils lit.", en: "The parent writes, the child reads.", uk: "Батько пише, дитина читає." },
    text: `void fils(int *pfd) {
    char buffer[100];
    close(pfd[1]);
    read(pfd[0], buffer, sizeof(buffer));
    printf("Fils lit : %s", buffer);
    close(pfd[0]);
    exit(0);
}

void pere(int *pfd) {
    close(pfd[0]);
    write(pfd[1], "Hello World\\n", strlen("Hello World\\n") * sizeof(char));
    close(pfd[1]);
    exit(0);
}

int main(int argc, char *argv[]) {
    int pfd[2];
    if (pipe(pfd) == -1) erreur("pipe");

    switch (fork()) {
        case -1: erreur("fork");
        case 0: fils(pfd);
    }
    pere(pfd);
}`,
  },
  {
    type: "paragraph",
    text: {
      fr: "Le fils **hérite des attributs du père**, donc des descripteurs ouverts. Problème : une fois créés, les processus ne peuvent plus être connectés, donc incapacité de fournir les descripteurs. **Solution :** créer les tubes **avant** les fils et ne pas fermer les descripteurs avant la création des fils.",
      en: "The child **inherits the parent's attributes**, hence the open descriptors. Problem: once created, the processes can no longer be connected, so there is no way to hand over the descriptors. **Solution:** create the pipes **before** the children and do not close the descriptors before creating the children.",
      uk: "Дитина **успадковує атрибути батька**, отже, і відкриті дескриптори. Проблема: щойно створені, процеси вже не можна з'єднати, тому неможливо передати дескриптори. **Розв'язання:** створювати канали **до** появи дочірніх процесів і не закривати дескриптори перед створенням дочірніх.",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "pipe-flow",
        caption: {
          fr: "Un tube est un tampon géré par le noyau : on écrit dans l'entrée pfd[1], on lit dans la sortie pfd[0].",
          en: "A pipe is a kernel-managed buffer: we write into the entry pfd[1], we read from the exit pfd[0].",
          uk: "Канал — це буфер, яким керує ядро: записуємо у вхід pfd[1], читаємо з виходу pfd[0].",
        },
        nodes: [
          { id: "pere", label: { fr: "Père", en: "Parent", uk: "Батько" }, x: 0, y: 0, shape: "box", tone: "primary" },
          { id: "tube", label: { fr: "Tube (noyau)", en: "Pipe (kernel)", uk: "Канал (ядро)" }, x: 240, y: 0, shape: "box", tone: "soft" },
          { id: "fils", label: { fr: "Fils", en: "Child", uk: "Дитина" }, x: 480, y: 0, shape: "box", tone: "primary" },
        ],
        edges: [
          { from: "pere", to: "tube", label: { fr: "write(pfd[1])", en: "write(pfd[1])", uk: "write(pfd[1])" } },
          { from: "tube", to: "fils", label: { fr: "read(pfd[0])", en: "read(pfd[0])", uk: "read(pfd[0])" } },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Entrée/sortie standard et dup", en: "Standard input/output and dup", uk: "Стандартне введення/виведення та dup" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Descripteurs de fichiers par défaut :** `stdin` = 0, `stdout` = 1, `stderr` = 2. Problème : le processus fils hérite des descripteurs ouverts, mais les commandes UNIX ne sont prévues que pour utiliser 0, 1 et 2.",
      en: "**Default file descriptors:** `stdin` = 0, `stdout` = 1, `stderr` = 2. Problem: the child process inherits the open descriptors, but UNIX commands are only designed to use 0, 1 and 2.",
      uk: "**Стандартні дескриптори файлів:** `stdin` = 0, `stdout` = 1, `stderr` = 2. Проблема: дочірній процес успадковує відкриті дескриптори, але команди UNIX розраховані лише на використання 0, 1 і 2.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int dup(int pfd)` (`<unistd.h>`) duplique le descripteur de fichier `pfd` en lui attribuant le **plus petit numéro de descripteur disponible** ; si échec retourne **-1**, sinon renvoie le descripteur attribué.",
          en: "`int dup(int pfd)` (`<unistd.h>`) duplicates the file descriptor `pfd`, giving it the **lowest available descriptor number**; returns **-1** on failure, otherwise the assigned descriptor.",
          uk: "`int dup(int pfd)` (`<unistd.h>`) дублює дескриптор файлу `pfd`, призначаючи йому **найменший доступний номер дескриптора**; у разі збою повертає **-1**, інакше — призначений дескриптор.",
        },
      },
      {
        text: {
          fr: "**Solution :** le processus fils ferme le descripteur de sortie standard (1) et duplique l'entrée du tube `pfd[1]` ; le processus père ferme le descripteur d'entrée standard (0) et duplique la sortie du tube `pfd[0]`.",
          en: "**Solution:** the child process closes the standard-output descriptor (1) and duplicates the pipe entry `pfd[1]`; the parent process closes the standard-input descriptor (0) and duplicates the pipe exit `pfd[0]`.",
          uk: "**Розв'язання:** дочірній процес закриває дескриптор стандартного виведення (1) і дублює вхід каналу `pfd[1]`; батьківський процес закриває дескриптор стандартного введення (0) і дублює вихід каналу `pfd[0]`.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Simulation de la commande ls | wc -l", en: "Simulation of the ls | wc -l command", uk: "Симуляція команди ls | wc -l" },
  },
  {
    type: "code",
    lang: "c",
    caption: { fr: "Le fils devient ls, le père devient wc -l.", en: "The child becomes ls, the parent becomes wc -l.", uk: "Дитина стає ls, батько стає wc -l." },
    text: `void fils(int *pfd) {
    if (close(1) == -1) erreur("close");
    if (dup(pfd[1]) != 1) erreur("dup");
    if (close(pfd[1]) == -1) erreur("close");
    if (close(pfd[0]) == -1) erreur("close");
    execlp("ls", "ls", NULL);
    erreur("execlp");
}

void pere(int *pfd) {
    if (close(0) == -1) erreur("close");
    if (dup(pfd[0]) != 0) erreur("dup");
    if (close(pfd[0]) == -1) erreur("close");
    if (close(pfd[1]) == -1) erreur("close");
    execlp("wc", "wc", "-l", NULL);
    erreur("execlp");
}

int main(int argc, char *argv[]) {
    int pfd[2];
    if (pipe(pfd) == -1) erreur("pipe");

    switch (fork()) {
        case -1: erreur("fork");
        case 0: fils(pfd);
    }
    pere(pfd);
}`,
  },
  {
    type: "paragraph",
    text: {
      fr: "**Pourquoi `ls | wc -l` fonctionne :** le fils ferme `stdout` (1) et duplique l'entrée du tube `pfd[1]` ; le père ferme `stdin` (0) et duplique la sortie du tube `pfd[0]`. `ls` écrit donc dans `pfd[1]` et `wc` lit dans `pfd[0]` : les deux programmes ignorent totalement qu'ils communiquent, ils utilisent simplement leurs entrées/sorties standard.",
      en: "**Why `ls | wc -l` works:** the child closes `stdout` (1) and duplicates the pipe entry `pfd[1]`; the parent closes `stdin` (0) and duplicates the pipe exit `pfd[0]`. `ls` therefore writes into `pfd[1]` and `wc` reads from `pfd[0]`: neither program knows it is communicating, they simply use their standard input/output.",
      uk: "**Чому `ls | wc -l` працює:** дитина закриває `stdout` (1) і дублює вхід каналу `pfd[1]`; батько закриває `stdin` (0) і дублює вихід каналу `pfd[0]`. Отже, `ls` пише в `pfd[1]`, а `wc` читає з `pfd[0]`: обидві програми зовсім не знають, що спілкуються, вони просто використовують своє стандартне введення/виведення.",
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Sens des descripteurs d'un tube", en: "Direction of pipe descriptors", uk: "Напрямок дескрипторів каналу" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Après `pipe(pfd)`, `pfd[0]` est la sortie du tube, ouverte en lecture seule.",
        en: "After `pipe(pfd)`, `pfd[0]` is the pipe exit, opened read-only.",
        uk: "Після `pipe(pfd)` `pfd[0]` є виходом каналу, відкритим лише для читання.",
      },
      answer: true,
      justification: {
        fr: "Exact : `pfd[0]` = **sortie** du tube (lecture seule) et `pfd[1]` = **entrée** du tube (écriture seule).",
        en: "Correct: `pfd[0]` = pipe **exit** (read-only) and `pfd[1]` = pipe **entry** (write-only).",
        uk: "Правильно: `pfd[0]` = **вихід** каналу (лише читання) і `pfd[1]` = **вхід** каналу (лише запис).",
      },
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "dup", en: "dup", uk: "dup" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Que renvoie `dup(pfd)` en cas de succès ?",
        en: "What does `dup(pfd)` return on success?",
        uk: "Що повертає `dup(pfd)` у разі успіху?",
      },
      options: [
        {
          text: { fr: "Le plus petit numéro de descripteur disponible.", en: "The lowest available descriptor number.", uk: "Найменший доступний номер дескриптора." },
          feedback: {
            fr: "Oui : `dup` duplique `pfd` en lui attribuant le plus petit numéro disponible.",
            en: "Yes: `dup` duplicates `pfd`, giving it the lowest available number.",
            uk: "Так: `dup` дублює `pfd`, призначаючи йому найменший доступний номер.",
          },
        },
        {
          text: { fr: "Le pid du processus.", en: "The process pid.", uk: "pid процесу." },
        },
        {
          text: { fr: "Toujours 0.", en: "Always 0.", uk: "Завжди 0." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "`dup(pfd)` renvoie le **plus petit numéro de descripteur disponible**, ou **-1** en cas d'échec.",
        en: "`dup(pfd)` returns the **lowest available descriptor number**, or **-1** on failure.",
        uk: "`dup(pfd)` повертає **найменший доступний номер дескриптора** або **-1** у разі збою.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "Exercices", en: "Exercises", uk: "Вправи" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercice 1 : Création de processus", en: "Exercise 1: Process creation", uk: "Вправа 1: Створення процесів" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrire un programme en langage C qui crée un processus fils, un processus petit-fils et un processus arrière petit-fils. Chaque processus imprime son pid et termine son exécution.",
              en: "Write a C program that creates a child process, a grandchild process and a great-grandchild process. Each process prints its pid and ends its execution.",
              uk: "Напишіть програму мовою C, яка створює дочірній процес, процес-онук і процес-правнук. Кожен процес виводить свій pid і завершує своє виконання.",
            },
            solution: {
              fr: "On enchaîne les `fork` dans la branche du fils : le père crée le fils, le fils crée le petit-fils, le petit-fils crée l'arrière petit-fils.\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nvoid erreur(char *message) {\n    fprintf(stderr, \"Erreur: %s\\n\", message);\n    exit(1);\n}\n\nint main(int argc, char *argv[]) {\n    int pid;\n    switch (pid = fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            switch (pid = fork()) {\n                case -1: erreur(\"fork\");\n                case 0:\n                    switch (fork()) {\n                        case -1: erreur(\"fork\");\n                        case 0: printf(\"arriere petit-fils %d\\n\", getpid()); exit(0);\n                    }\n                    printf(\"petit-fils %d\\n\", getpid()); exit(0);\n            }\n            printf(\"fils %d\\n\", getpid()); exit(0);\n    }\n    printf(\"pere %d\\n\", getpid()); exit(0);\n}\n```",
              en: "We chain the `fork`s inside the child branch: the parent creates the child, the child creates the grandchild, the grandchild creates the great-grandchild.\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nvoid erreur(char *message) {\n    fprintf(stderr, \"Erreur: %s\\n\", message);\n    exit(1);\n}\n\nint main(int argc, char *argv[]) {\n    int pid;\n    switch (pid = fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            switch (pid = fork()) {\n                case -1: erreur(\"fork\");\n                case 0:\n                    switch (fork()) {\n                        case -1: erreur(\"fork\");\n                        case 0: printf(\"arriere petit-fils %d\\n\", getpid()); exit(0);\n                    }\n                    printf(\"petit-fils %d\\n\", getpid()); exit(0);\n            }\n            printf(\"fils %d\\n\", getpid()); exit(0);\n    }\n    printf(\"pere %d\\n\", getpid()); exit(0);\n}\n```",
              uk: "Ми вишиковуємо `fork` у ланцюжок у гілці дочірнього процесу: батько створює дитину, дитина створює онука, онук створює правнука.\n\n```c\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n\nvoid erreur(char *message) {\n    fprintf(stderr, \"Erreur: %s\\n\", message);\n    exit(1);\n}\n\nint main(int argc, char *argv[]) {\n    int pid;\n    switch (pid = fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            switch (pid = fork()) {\n                case -1: erreur(\"fork\");\n                case 0:\n                    switch (fork()) {\n                        case -1: erreur(\"fork\");\n                        case 0: printf(\"arriere petit-fils %d\\n\", getpid()); exit(0);\n                    }\n                    printf(\"petit-fils %d\\n\", getpid()); exit(0);\n            }\n            printf(\"fils %d\\n\", getpid()); exit(0);\n    }\n    printf(\"pere %d\\n\", getpid()); exit(0);\n}\n```",
            },
          },
        ],
      },
      {
        title: { fr: "Exercice 2 : Simulation de commandes", en: "Exercise 2: Command simulation", uk: "Вправа 2: Симуляція команд" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrire un programme en langage C qui simule la commande :\n\n1. `ps -e | grep $1`",
              en: "Write a C program that simulates the command:\n\n1. `ps -e | grep $1`",
              uk: "Напишіть програму мовою C, яка симулює команду:\n\n1. `ps -e | grep $1`",
            },
            solution: {
              fr: "Un tube et deux fils : le premier fils redirige `stdout` vers l'entrée du tube et exécute `ps -e`, le second fils redirige `stdin` depuis la sortie du tube et exécute `grep $1`.\n\n```c\nint main(int argc, char *argv[]) {\n    int pfd[2];\n    if (pipe(pfd) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (close(pfd[0]) == -1) erreur(\"close\");\n            if (dup(pfd[1]) != 1) erreur(\"dup\");\n            if (close(pfd[1]) == -1) erreur(\"close\");\n            execlp(\"ps\", \"ps\", \"-e\", NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (close(pfd[1]) == -1) erreur(\"close\");\n            if (dup(pfd[0]) != 0) erreur(\"dup\");\n            if (close(pfd[0]) == -1) erreur(\"close\");\n            execlp(\"grep\", \"grep\", argv[1], NULL);\n            erreur(\"execlp\");\n    }\n\n    close(pfd[0]);\n    close(pfd[1]);\n    wait(NULL);\n    wait(NULL);\n    return 0;\n}\n```",
              en: "One pipe and two children: the first child redirects `stdout` to the pipe entry and runs `ps -e`, the second child redirects `stdin` from the pipe exit and runs `grep $1`.\n\n```c\nint main(int argc, char *argv[]) {\n    int pfd[2];\n    if (pipe(pfd) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (close(pfd[0]) == -1) erreur(\"close\");\n            if (dup(pfd[1]) != 1) erreur(\"dup\");\n            if (close(pfd[1]) == -1) erreur(\"close\");\n            execlp(\"ps\", \"ps\", \"-e\", NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (close(pfd[1]) == -1) erreur(\"close\");\n            if (dup(pfd[0]) != 0) erreur(\"dup\");\n            if (close(pfd[0]) == -1) erreur(\"close\");\n            execlp(\"grep\", \"grep\", argv[1], NULL);\n            erreur(\"execlp\");\n    }\n\n    close(pfd[0]);\n    close(pfd[1]);\n    wait(NULL);\n    wait(NULL);\n    return 0;\n}\n```",
              uk: "Один канал і два дочірні процеси: перший дочірній процес перенаправляє `stdout` на вхід каналу й виконує `ps -e`, другий дочірній процес перенаправляє `stdin` із виходу каналу й виконує `grep $1`.\n\n```c\nint main(int argc, char *argv[]) {\n    int pfd[2];\n    if (pipe(pfd) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (close(pfd[0]) == -1) erreur(\"close\");\n            if (dup(pfd[1]) != 1) erreur(\"dup\");\n            if (close(pfd[1]) == -1) erreur(\"close\");\n            execlp(\"ps\", \"ps\", \"-e\", NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (close(pfd[1]) == -1) erreur(\"close\");\n            if (dup(pfd[0]) != 0) erreur(\"dup\");\n            if (close(pfd[0]) == -1) erreur(\"close\");\n            execlp(\"grep\", \"grep\", argv[1], NULL);\n            erreur(\"execlp\");\n    }\n\n    close(pfd[0]);\n    close(pfd[1]);\n    wait(NULL);\n    wait(NULL);\n    return 0;\n}\n```",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Écrire un programme en langage C qui simule la commande :\n\n2. `ps -e | grep $1 | sort -rn`",
              en: "Write a C program that simulates the command:\n\n2. `ps -e | grep $1 | sort -rn`",
              uk: "Напишіть програму мовою C, яка симулює команду:\n\n2. `ps -e | grep $1 | sort -rn`",
            },
            solution: {
              fr: "Trois processus et deux tubes : `ps -e` écrit dans le premier tube, `grep $1` lit le premier et écrit dans le second, `sort -rn` lit le second.\n\n```c\nint main(int argc, char *argv[]) {\n    int pfd1[2], pfd2[2];\n    if (pipe(pfd1) == -1) erreur(\"pipe\");\n    if (pipe(pfd2) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd1[1]) != 1) erreur(\"dup\");\n            close(pfd1[0]); close(pfd1[1]);\n            close(pfd2[0]); close(pfd2[1]);\n            execlp(\"ps\", \"ps\", \"-e\", NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd1[0]) != 0) erreur(\"dup\");\n            if (dup(pfd2[1]) != 1) erreur(\"dup\");\n            close(pfd1[0]); close(pfd1[1]);\n            close(pfd2[0]); close(pfd2[1]);\n            execlp(\"grep\", \"grep\", argv[1], NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd2[0]) != 0) erreur(\"dup\");\n            close(pfd2[0]); close(pfd2[1]);\n            close(pfd1[0]); close(pfd1[1]);\n            execlp(\"sort\", \"sort\", \"-rn\", NULL);\n            erreur(\"execlp\");\n    }\n\n    close(pfd1[0]); close(pfd1[1]);\n    close(pfd2[0]); close(pfd2[1]);\n    wait(NULL); wait(NULL); wait(NULL);\n    return 0;\n}\n```",
              en: "Three processes and two pipes: `ps -e` writes into the first pipe, `grep $1` reads the first and writes into the second, `sort -rn` reads the second.\n\n```c\nint main(int argc, char *argv[]) {\n    int pfd1[2], pfd2[2];\n    if (pipe(pfd1) == -1) erreur(\"pipe\");\n    if (pipe(pfd2) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd1[1]) != 1) erreur(\"dup\");\n            close(pfd1[0]); close(pfd1[1]);\n            close(pfd2[0]); close(pfd2[1]);\n            execlp(\"ps\", \"ps\", \"-e\", NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd1[0]) != 0) erreur(\"dup\");\n            if (dup(pfd2[1]) != 1) erreur(\"dup\");\n            close(pfd1[0]); close(pfd1[1]);\n            close(pfd2[0]); close(pfd2[1]);\n            execlp(\"grep\", \"grep\", argv[1], NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd2[0]) != 0) erreur(\"dup\");\n            close(pfd2[0]); close(pfd2[1]);\n            close(pfd1[0]); close(pfd1[1]);\n            execlp(\"sort\", \"sort\", \"-rn\", NULL);\n            erreur(\"execlp\");\n    }\n\n    close(pfd1[0]); close(pfd1[1]);\n    close(pfd2[0]); close(pfd2[1]);\n    wait(NULL); wait(NULL); wait(NULL);\n    return 0;\n}\n```",
              uk: "Три процеси та два канали: `ps -e` пише в перший канал, `grep $1` читає з першого й пише в другий, `sort -rn` читає з другого.\n\n```c\nint main(int argc, char *argv[]) {\n    int pfd1[2], pfd2[2];\n    if (pipe(pfd1) == -1) erreur(\"pipe\");\n    if (pipe(pfd2) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd1[1]) != 1) erreur(\"dup\");\n            close(pfd1[0]); close(pfd1[1]);\n            close(pfd2[0]); close(pfd2[1]);\n            execlp(\"ps\", \"ps\", \"-e\", NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd1[0]) != 0) erreur(\"dup\");\n            if (dup(pfd2[1]) != 1) erreur(\"dup\");\n            close(pfd1[0]); close(pfd1[1]);\n            close(pfd2[0]); close(pfd2[1]);\n            execlp(\"grep\", \"grep\", argv[1], NULL);\n            erreur(\"execlp\");\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            if (dup(pfd2[0]) != 0) erreur(\"dup\");\n            close(pfd2[0]); close(pfd2[1]);\n            close(pfd1[0]); close(pfd1[1]);\n            execlp(\"sort\", \"sort\", \"-rn\", NULL);\n            erreur(\"execlp\");\n    }\n\n    close(pfd1[0]); close(pfd1[1]);\n    close(pfd2[0]); close(pfd2[1]);\n    wait(NULL); wait(NULL); wait(NULL);\n    return 0;\n}\n```",
            },
          },
        ],
      },
      {
        title: { fr: "Exercice 3 : Communication entre un père et deux fils", en: "Exercise 3: Communication between a parent and two children", uk: "Вправа 3: Обмін між батьком і двома дочірніми процесами" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrire un programme en langage C qui procède comme ci de suite :\n\n1. le processus père lit les caractères de son entrée (un caractère par ligne). La fin du fichier est représenté par le caractère `*`.\n2. il envoie chaque lettre au premier processus fils et chaque chiffre au second processus fils\n3. le premier processus fils compte le nombre de chaque lettre reçue et retourne son résultat au processus père\n4. le second processus fils calcule la somme des chiffres reçus et retourne son résultat au processus père\n5. le processus père imprime les résultats",
              en: "Write a C program that proceeds as follows:\n\n1. the parent process reads the characters from its input (one character per line). End of file is represented by the character `*`.\n2. it sends each letter to the first child process and each digit to the second child process\n3. the first child process counts the number of each letter received and returns its result to the parent process\n4. the second child process computes the sum of the digits received and returns its result to the parent process\n5. the parent process prints the results",
              uk: "Напишіть програму мовою C, яка діє так:\n\n1. батьківський процес читає символи зі свого введення (по одному символу на рядок). Кінець файлу позначено символом `*`.\n2. він надсилає кожну літеру першому дочірньому процесу, а кожну цифру — другому дочірньому процесу\n3. перший дочірній процес підраховує кількість кожної отриманої літери й повертає свій результат батьківському процесу\n4. другий дочірній процес обчислює суму отриманих цифр і повертає свій результат батьківському процесу\n5. батьківський процес виводить результати",
            },
            solution: {
              fr: "Quatre tubes : deux pour descendre (père → fils 1 et père → fils 2) et deux pour remonter (fils 1 → père et fils 2 → père). Le père classe chaque caractère lu : une lettre part vers le premier fils, un chiffre vers le second ; `*` ferme les entrées et déclenche la lecture des réponses.\n\n```c\nint main(int argc, char *argv[]) {\n    int p1[2], p2[2], r1[2], r2[2];\n    char c;\n    int compte[26] = {0};\n    int somme = 0;\n\n    if (pipe(p1) == -1) erreur(\"pipe\");\n    if (pipe(p2) == -1) erreur(\"pipe\");\n    if (pipe(r1) == -1) erreur(\"pipe\");\n    if (pipe(r2) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            close(p1[1]); close(p2[0]); close(p2[1]);\n            close(r1[0]); close(r2[0]); close(r2[1]);\n            while (read(p1[0], &c, 1) > 0)\n                if (c >= 'a' && c <= 'z') compte[c - 'a']++;\n                else if (c >= 'A' && c <= 'Z') compte[c - 'A']++;\n            write(r1[1], compte, sizeof(compte));\n            close(p1[0]); close(r1[1]);\n            exit(0);\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            close(p2[1]); close(p1[0]); close(p1[1]);\n            close(r1[0]); close(r1[1]); close(r2[0]);\n            while (read(p2[0], &c, 1) > 0)\n                if (c >= '0' && c <= '9') somme += c - '0';\n            write(r2[1], &somme, sizeof(somme));\n            close(p2[0]); close(r2[1]);\n            exit(0);\n    }\n\n    close(p1[0]); close(p2[0]); close(r1[1]); close(r2[1]);\n    while (read(0, &c, 1) > 0 && c != '*') {\n        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))\n            write(p1[1], &c, 1);\n        else if (c >= '0' && c <= '9')\n            write(p2[1], &c, 1);\n    }\n    close(p1[1]); close(p2[1]);\n\n    read(r1[0], compte, sizeof(compte));\n    read(r2[0], &somme, sizeof(somme));\n    printf(\"somme des chiffres = %d\\n\", somme);\n    for (c = 'a'; c <= 'z'; c++)\n        if (compte[c - 'a'] > 0)\n            printf(\"%c : %d\\n\", c, compte[c - 'a']);\n\n    close(r1[0]); close(r2[0]);\n    wait(NULL); wait(NULL);\n    return 0;\n}\n```",
              en: "Four pipes: two downward (parent → child 1 and parent → child 2) and two upward (child 1 → parent and child 2 → parent). The parent classifies each character read: a letter goes to the first child, a digit to the second; `*` closes the inputs and triggers reading of the replies.\n\n```c\nint main(int argc, char *argv[]) {\n    int p1[2], p2[2], r1[2], r2[2];\n    char c;\n    int compte[26] = {0};\n    int somme = 0;\n\n    if (pipe(p1) == -1) erreur(\"pipe\");\n    if (pipe(p2) == -1) erreur(\"pipe\");\n    if (pipe(r1) == -1) erreur(\"pipe\");\n    if (pipe(r2) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            close(p1[1]); close(p2[0]); close(p2[1]);\n            close(r1[0]); close(r2[0]); close(r2[1]);\n            while (read(p1[0], &c, 1) > 0)\n                if (c >= 'a' && c <= 'z') compte[c - 'a']++;\n                else if (c >= 'A' && c <= 'Z') compte[c - 'A']++;\n            write(r1[1], compte, sizeof(compte));\n            close(p1[0]); close(r1[1]);\n            exit(0);\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            close(p2[1]); close(p1[0]); close(p1[1]);\n            close(r1[0]); close(r1[1]); close(r2[0]);\n            while (read(p2[0], &c, 1) > 0)\n                if (c >= '0' && c <= '9') somme += c - '0';\n            write(r2[1], &somme, sizeof(somme));\n            close(p2[0]); close(r2[1]);\n            exit(0);\n    }\n\n    close(p1[0]); close(p2[0]); close(r1[1]); close(r2[1]);\n    while (read(0, &c, 1) > 0 && c != '*') {\n        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))\n            write(p1[1], &c, 1);\n        else if (c >= '0' && c <= '9')\n            write(p2[1], &c, 1);\n    }\n    close(p1[1]); close(p2[1]);\n\n    read(r1[0], compte, sizeof(compte));\n    read(r2[0], &somme, sizeof(somme));\n    printf(\"somme des chiffres = %d\\n\", somme);\n    for (c = 'a'; c <= 'z'; c++)\n        if (compte[c - 'a'] > 0)\n            printf(\"%c : %d\\n\", c, compte[c - 'a']);\n\n    close(r1[0]); close(r2[0]);\n    wait(NULL); wait(NULL);\n    return 0;\n}\n```",
              uk: "Чотири канали: два вниз (батько → дитина 1 і батько → дитина 2) і два вгору (дитина 1 → батько і дитина 2 → батько). Батько класифікує кожен прочитаний символ: літера йде до першої дитини, цифра — до другої; `*` закриває входи й запускає читання відповідей.\n\n```c\nint main(int argc, char *argv[]) {\n    int p1[2], p2[2], r1[2], r2[2];\n    char c;\n    int compte[26] = {0};\n    int somme = 0;\n\n    if (pipe(p1) == -1) erreur(\"pipe\");\n    if (pipe(p2) == -1) erreur(\"pipe\");\n    if (pipe(r1) == -1) erreur(\"pipe\");\n    if (pipe(r2) == -1) erreur(\"pipe\");\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            close(p1[1]); close(p2[0]); close(p2[1]);\n            close(r1[0]); close(r2[0]); close(r2[1]);\n            while (read(p1[0], &c, 1) > 0)\n                if (c >= 'a' && c <= 'z') compte[c - 'a']++;\n                else if (c >= 'A' && c <= 'Z') compte[c - 'A']++;\n            write(r1[1], compte, sizeof(compte));\n            close(p1[0]); close(r1[1]);\n            exit(0);\n    }\n\n    switch (fork()) {\n        case -1: erreur(\"fork\");\n        case 0:\n            close(p2[1]); close(p1[0]); close(p1[1]);\n            close(r1[0]); close(r1[1]); close(r2[0]);\n            while (read(p2[0], &c, 1) > 0)\n                if (c >= '0' && c <= '9') somme += c - '0';\n            write(r2[1], &somme, sizeof(somme));\n            close(p2[0]); close(r2[1]);\n            exit(0);\n    }\n\n    close(p1[0]); close(p2[0]); close(r1[1]); close(r2[1]);\n    while (read(0, &c, 1) > 0 && c != '*') {\n        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))\n            write(p1[1], &c, 1);\n        else if (c >= '0' && c <= '9')\n            write(p2[1], &c, 1);\n    }\n    close(p1[1]); close(p2[1]);\n\n    read(r1[0], compte, sizeof(compte));\n    read(r2[0], &somme, sizeof(somme));\n    printf(\"somme des chiffres = %d\\n\", somme);\n    for (c = 'a'; c <= 'z'; c++)\n        if (compte[c - 'a'] > 0)\n            printf(\"%c : %d\\n\", c, compte[c - 'a']);\n\n    close(r1[0]); close(r2[0]);\n    wait(NULL); wait(NULL);\n    return 0;\n}\n```",
            },
          },
        ],
      },
      {
        title: { fr: "Exercice 4 : Communication entre un père et N fils", en: "Exercise 4: Communication between a parent and N children", uk: "Вправа 4: Обмін між батьком і N дочірніми процесами" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Question 1 – Écrire un programme en langage C qui procède comme ci de suite :\n\n1. le processus père initialise N tubes anonymes et crée N processus fils avec des identifiants 0, 1, ..., N-1\n2. chaque fils envoie son propre identifiant à son père en utilisant son propre tube\n3. le processus père imprime les messages reçus par ses fils",
              en: "Question 1 – Write a C program that proceeds as follows:\n\n1. the parent process initialises N anonymous pipes and creates N child processes with identifiers 0, 1, ..., N-1\n2. each child sends its own identifier to its parent using its own pipe\n3. the parent process prints the messages received from its children",
              uk: "Питання 1 – Напишіть програму мовою C, яка діє так:\n\n1. батьківський процес ініціалізує N анонімних каналів і створює N дочірніх процесів з ідентифікаторами 0, 1, ..., N-1\n2. кожен дочірній процес надсилає свій власний ідентифікатор батькові через власний канал\n3. батьківський процес виводить повідомлення, отримані від своїх дочірніх процесів",
            },
            solution: {
              fr: "Un tableau de N tubes : `int pfd[N][2]`. Chaque fils `i` ferme les tubes des autres, écrit son identifiant dans `pfd[i][1]` puis se termine ; le père ferme les entrées et lit chaque sortie `pfd[i][0]`.\n\n```c\n#define N 4\n\nint main(int argc, char *argv[]) {\n    int pfd[N][2];\n    int i, j, pid, valeur;\n\n    for (i = 0; i < N; i++)\n        if (pipe(pfd[i]) == -1) erreur(\"pipe\");\n\n    for (i = 0; i < N; i++) {\n        switch (pid = fork()) {\n            case -1: erreur(\"fork\");\n            case 0:\n                for (j = 0; j < N; j++) {\n                    if (close(pfd[j][0]) == -1) erreur(\"close\");\n                    if (j != i && close(pfd[j][1]) == -1) erreur(\"close\");\n                }\n                if (write(pfd[i][1], &i, sizeof(int)) == -1) erreur(\"write\");\n                if (close(pfd[i][1]) == -1) erreur(\"close\");\n                exit(0);\n        }\n    }\n\n    for (i = 0; i < N; i++) {\n        if (close(pfd[i][1]) == -1) erreur(\"close\");\n        if (read(pfd[i][0], &valeur, sizeof(int)) == -1) erreur(\"read\");\n        printf(\"Fils %d a envoye %d\\n\", i, valeur);\n        if (close(pfd[i][0]) == -1) erreur(\"close\");\n    }\n\n    for (i = 0; i < N; i++)\n        if (wait(NULL) == -1) erreur(\"wait\");\n    return 0;\n}\n```",
              en: "An array of N pipes: `int pfd[N][2]`. Each child `i` closes the other pipes, writes its identifier into `pfd[i][1]` then terminates; the parent closes the entries and reads each exit `pfd[i][0]`.\n\n```c\n#define N 4\n\nint main(int argc, char *argv[]) {\n    int pfd[N][2];\n    int i, j, pid, valeur;\n\n    for (i = 0; i < N; i++)\n        if (pipe(pfd[i]) == -1) erreur(\"pipe\");\n\n    for (i = 0; i < N; i++) {\n        switch (pid = fork()) {\n            case -1: erreur(\"fork\");\n            case 0:\n                for (j = 0; j < N; j++) {\n                    if (close(pfd[j][0]) == -1) erreur(\"close\");\n                    if (j != i && close(pfd[j][1]) == -1) erreur(\"close\");\n                }\n                if (write(pfd[i][1], &i, sizeof(int)) == -1) erreur(\"write\");\n                if (close(pfd[i][1]) == -1) erreur(\"close\");\n                exit(0);\n        }\n    }\n\n    for (i = 0; i < N; i++) {\n        if (close(pfd[i][1]) == -1) erreur(\"close\");\n        if (read(pfd[i][0], &valeur, sizeof(int)) == -1) erreur(\"read\");\n        printf(\"Fils %d a envoye %d\\n\", i, valeur);\n        if (close(pfd[i][0]) == -1) erreur(\"close\");\n    }\n\n    for (i = 0; i < N; i++)\n        if (wait(NULL) == -1) erreur(\"wait\");\n    return 0;\n}\n```",
              uk: "Масив із N каналів: `int pfd[N][2]`. Кожен дочірній процес `i` закриває канали інших, записує свій ідентифікатор у `pfd[i][1]`, а потім завершується; батько закриває входи й читає кожен вихід `pfd[i][0]`.\n\n```c\n#define N 4\n\nint main(int argc, char *argv[]) {\n    int pfd[N][2];\n    int i, j, pid, valeur;\n\n    for (i = 0; i < N; i++)\n        if (pipe(pfd[i]) == -1) erreur(\"pipe\");\n\n    for (i = 0; i < N; i++) {\n        switch (pid = fork()) {\n            case -1: erreur(\"fork\");\n            case 0:\n                for (j = 0; j < N; j++) {\n                    if (close(pfd[j][0]) == -1) erreur(\"close\");\n                    if (j != i && close(pfd[j][1]) == -1) erreur(\"close\");\n                }\n                if (write(pfd[i][1], &i, sizeof(int)) == -1) erreur(\"write\");\n                if (close(pfd[i][1]) == -1) erreur(\"close\");\n                exit(0);\n        }\n    }\n\n    for (i = 0; i < N; i++) {\n        if (close(pfd[i][1]) == -1) erreur(\"close\");\n        if (read(pfd[i][0], &valeur, sizeof(int)) == -1) erreur(\"read\");\n        printf(\"Fils %d a envoye %d\\n\", i, valeur);\n        if (close(pfd[i][0]) == -1) erreur(\"close\");\n    }\n\n    for (i = 0; i < N; i++)\n        if (wait(NULL) == -1) erreur(\"wait\");\n    return 0;\n}\n```",
            },
          },
          {
            kind: "open",
            prompt: {
              fr: "Question 2 – Est-il possible d'utiliser un seul tube pour faire la communication dans la Question 1 ? Si oui, donner le code en C. Sinon, expliquer pourquoi.",
              en: "Question 2 – Is it possible to use a single pipe for the communication in Question 1? If so, give the C code. If not, explain why.",
              uk: "Питання 2 – Чи можна використати один канал для обміну з Питання 1? Якщо так, наведіть код мовою C. Якщо ні, поясніть чому.",
            },
            solution: {
              fr: "Oui, c'est possible : chaque fils écrit son identifiant entier dans le même tube. L'indivisibilité de `write` garantit que chaque identifiant est écrit d'un bloc ; les messages arrivent simplement dans un ordre quelconque. Le père lit N entiers, puis retrouve la fin de fichier quand tous les fils ont fermé leur entrée.\n\n```c\n#define N 4\n\nint main(int argc, char *argv[]) {\n    int pfd[2];\n    int i, pid, valeur;\n\n    if (pipe(pfd) == -1) erreur(\"pipe\");\n\n    for (i = 0; i < N; i++) {\n        switch (pid = fork()) {\n            case -1: erreur(\"fork\");\n            case 0:\n                if (close(pfd[0]) == -1) erreur(\"close\");\n                if (write(pfd[1], &i, sizeof(int)) == -1) erreur(\"write\");\n                if (close(pfd[1]) == -1) erreur(\"close\");\n                exit(0);\n        }\n    }\n\n    if (close(pfd[1]) == -1) erreur(\"close\");\n    for (i = 0; i < N; i++) {\n        if (read(pfd[0], &valeur, sizeof(int)) == -1) erreur(\"read\");\n        printf(\"recu : %d\\n\", valeur);\n    }\n    if (close(pfd[0]) == -1) erreur(\"close\");\n\n    for (i = 0; i < N; i++)\n        if (wait(NULL) == -1) erreur(\"wait\");\n    return 0;\n}\n```\n\nOn lit exactement N entiers ; les écritures sont indivisibles, donc aucune donnée n'est mélangée, même si l'ordre d'arrivée des identifiants n'est pas garanti.",
              en: "Yes, it is possible: each child writes its integer identifier into the same pipe. The indivisibility of `write` guarantees that each identifier is written in one block; the messages simply arrive in an arbitrary order. The parent reads N integers, then sees end-of-file once all children have closed their entry.\n\n```c\n#define N 4\n\nint main(int argc, char *argv[]) {\n    int pfd[2];\n    int i, pid, valeur;\n\n    if (pipe(pfd) == -1) erreur(\"pipe\");\n\n    for (i = 0; i < N; i++) {\n        switch (pid = fork()) {\n            case -1: erreur(\"fork\");\n            case 0:\n                if (close(pfd[0]) == -1) erreur(\"close\");\n                if (write(pfd[1], &i, sizeof(int)) == -1) erreur(\"write\");\n                if (close(pfd[1]) == -1) erreur(\"close\");\n                exit(0);\n        }\n    }\n\n    if (close(pfd[1]) == -1) erreur(\"close\");\n    for (i = 0; i < N; i++) {\n        if (read(pfd[0], &valeur, sizeof(int)) == -1) erreur(\"read\");\n        printf(\"recu : %d\\n\", valeur);\n    }\n    if (close(pfd[0]) == -1) erreur(\"close\");\n\n    for (i = 0; i < N; i++)\n        if (wait(NULL) == -1) erreur(\"wait\");\n    return 0;\n}\n```\n\nWe read exactly N integers; writes are indivisible, so no data is mixed, even though the arrival order of the identifiers is not guaranteed.",
              uk: "Так, це можливо: кожен дочірній процес записує свій цілий ідентифікатор у той самий канал. Неподільність `write` гарантує, що кожен ідентифікатор записується одним блоком; повідомлення просто надходять у довільному порядку. Батько читає N цілих чисел, а потім бачить кінець файлу, коли всі дочірні процеси закрили свій вхід.\n\n```c\n#define N 4\n\nint main(int argc, char *argv[]) {\n    int pfd[2];\n    int i, pid, valeur;\n\n    if (pipe(pfd) == -1) erreur(\"pipe\");\n\n    for (i = 0; i < N; i++) {\n        switch (pid = fork()) {\n            case -1: erreur(\"fork\");\n            case 0:\n                if (close(pfd[0]) == -1) erreur(\"close\");\n                if (write(pfd[1], &i, sizeof(int)) == -1) erreur(\"write\");\n                if (close(pfd[1]) == -1) erreur(\"close\");\n                exit(0);\n        }\n    }\n\n    if (close(pfd[1]) == -1) erreur(\"close\");\n    for (i = 0; i < N; i++) {\n        if (read(pfd[0], &valeur, sizeof(int)) == -1) erreur(\"read\");\n        printf(\"recu : %d\\n\", valeur);\n    }\n    if (close(pfd[0]) == -1) erreur(\"close\");\n\n    for (i = 0; i < N; i++)\n        if (wait(NULL) == -1) erreur(\"wait\");\n    return 0;\n}\n```\n\nМи читаємо рівно N цілих чисел; записи неподільні, тому жодні дані не змішуються, навіть попри те, що порядок надходження ідентифікаторів не гарантований.",
            },
          },
        ],
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: {
      fr: "Fiche Réflexe Examen : Modèle de Rédaction",
      en: "Exam Quick-Reference Sheet: Writing Template",
      uk: "Екзаменаційна шпаргалка: Шаблон написання",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Question type :** « Écrire un programme qui crée un processus fils et fait communiquer père et fils par un tube anonyme. »",
      en: "**Typical question:** “Write a program that creates a child process and has the parent and child communicate through an anonymous pipe.”",
      uk: "**Типове запитання:** «Напишіть програму, яка створює дочірній процес і забезпечує обмін між батьком і дитиною через анонімний канал».",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Structure attendue :** on découpe le travail en **quatre fonctions**. `main` ne fait que créer le tube et le processus ; `pere` s'occupe de l'écriture ; `fils` s'occupe de la lecture ; `erreur` arrête proprement le programme (`fprintf(stderr, ...)` puis `exit(1)`). Cette séparation est ce qui rapporte les points de structure à l'examen.",
      en: "**Expected structure:** split the work into **four functions**. `main` only creates the pipe and the process; `pere` handles the writing; `fils` handles the reading; `erreur` cleanly stops the program (`fprintf(stderr, ...)` then `exit(1)`). This separation is what earns the structural marks on the exam.",
      uk: "**Очікувана структура:** роботу поділено на **чотири функції**. `main` лише створює канал і процес; `pere` відповідає за запис; `fils` відповідає за читання; `erreur` коректно зупиняє програму (`fprintf(stderr, ...)`, потім `exit(1)`). Саме цей поділ приносить бали за структуру на іспиті.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Recopiez ce squelette complet — il est noté sur la structure.** Compilation : `gcc -Wall -Wextra -o prog prog.c`.",
      en: "**Copy this complete skeleton — the structure earns the marks.** Compilation: `gcc -Wall -Wextra -o prog prog.c`.",
      uk: "**Перепишіть цей повний каркас — структура приносить бали.** Компіляція: `gcc -Wall -Wextra -o prog prog.c`.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : erreur(), pere(), fils() et main().",
      en: "Complete program: erreur(), pere(), fils() and main().",
      uk: "Повна програма: erreur(), pere(), fils() і main().",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

#define TAILLE 128

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void pere(int *pfd) {
    char message[] = "bonjour";
    if (close(pfd[0]) == -1) erreur("close");
    if (write(pfd[1], message, sizeof(message)) == -1) erreur("write");
    if (close(pfd[1]) == -1) erreur("close");
    exit(0);
}

void fils(int *pfd) {
    char buffer[TAILLE];
    int n;
    if (close(pfd[1]) == -1) erreur("close");
    n = read(pfd[0], buffer, TAILLE - 1);
    if (n == -1) erreur("read");
    buffer[n] = '\\0';
    printf("Le fils a recu : %s\\n", buffer);
    if (close(pfd[0]) == -1) erreur("close");
    exit(0);
}

int main(int argc, char *argv[]) {
    int pid, pfd[2];
    if (pipe(pfd) == -1) erreur("pipe");
    switch (pid = fork()) {
        case -1: erreur("fork");
        case 0: fils(pfd);
    }
    pere(pfd);
    if (wait(NULL) == -1) erreur("wait");
}`,
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**`erreur(message)`** : affiche `Erreur: message` sur `stderr` puis `exit(1)`, la routine d'erreur du cours.",
          en: "**`erreur(message)`**: prints `Erreur: message` on `stderr` then `exit(1)`, the course's error routine.",
          uk: "**`erreur(message)`**: виводить `Erreur: message` у `stderr`, потім `exit(1)` — процедура обробки помилок із курсу.",
        },
      },
      {
        text: {
          fr: "**`pere(pfd)`** : ferme `pfd[0]`, écrit le message dans `pfd[1]`, puis ferme `pfd[1]` (ce qui envoie l'EOF au fils).",
          en: "**`pere(pfd)`**: closes `pfd[0]`, writes the message into `pfd[1]`, then closes `pfd[1]` (which sends EOF to the child).",
          uk: "**`pere(pfd)`**: закриває `pfd[0]`, записує повідомлення в `pfd[1]`, потім закриває `pfd[1]` (що надсилає EOF дитині).",
        },
      },
      {
        text: {
          fr: "**`fils(pfd)`** : ferme `pfd[1]`, lit dans `pfd[0]`, ajoute le terminateur `'\\0'` et affiche.",
          en: "**`fils(pfd)`**: closes `pfd[1]`, reads from `pfd[0]`, appends the `'\\0'` terminator and prints.",
          uk: "**`fils(pfd)`**: закриває `pfd[1]`, читає з `pfd[0]`, додає термінатор `'\\0'` і виводить.",
        },
      },
      {
        text: {
          fr: "**`main`** : `pipe` pour les descripteurs, `fork` pour le processus (`switch`), puis chaque branche appelle **sa** fonction ; le père termine par `wait`.",
          en: "**`main`**: `pipe` for the descriptors, `fork` for the process (`switch`), then each branch calls **its** function; the parent finishes with `wait`.",
          uk: "**`main`**: `pipe` для дескрипторів, `fork` для процесу (`switch`), потім кожна гілка викликає **свою** функцію; батько завершується викликом `wait`.",
        },
      },
    ],
  },
  {
    type: "quote",
    text: {
      fr: "**Réflexe à réciter :** `pipe` → `fork` → tester `pid` → le père appelle `pere`, le fils appelle `fils` → chaque fonction ferme l'extrémité inutile → `close` → `wait` dans `main`. Les quatre fonctions `erreur`, `pere`, `fils`, `main` suffisent à structurer la réponse.",
      en: "**Reflex to recite:** `pipe` → `fork` → test `pid` → the parent calls `pere`, the child calls `fils` → each function closes its unused end → `close` → `wait` in `main`. The four functions `erreur`, `pere`, `fils`, `main` are enough to structure the answer.",
      uk: "**Рефлекс для заучування:** `pipe` → `fork` → перевірка `pid` → батько викликає `pere`, дитина викликає `fils` → кожна функція закриває свій непотрібний кінець → `close` → `wait` у `main`. Чотирьох функцій `erreur`, `pere`, `fils`, `main` достатньо, щоб структурувати відповідь.",
    },
  },
];
