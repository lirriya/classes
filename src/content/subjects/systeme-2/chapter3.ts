import type { Block } from "../../types";

export const chapterThree: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un **signal** est un **message sans aucun contenu**, émis par le noyau ou par un processus vers un processus. Son but est de **mettre fin** à un processus ou de le **relancer** : c'est de là que vient la **synchronisation**. À sa réception, le processus cible doit immédiatement prendre une mesure spécifique.",
      en: "A **signal** is a **message with no content at all**, sent by the kernel or by a process to a process. Its purpose is to **end** a process or to **restart** it: that is where **synchronization** comes from. On receiving it, the target process must immediately take a specific action.",
      uk: "**Сигнал** — це **повідомлення без жодного вмісту**, яке ядро або процес надсилає процесу. Його мета — **завершити** процес або **перезапустити** його: саме звідси походить **синхронізація**. Отримавши його, цільовий процес має негайно вжити конкретного заходу.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Notion de signal", en: "1. The notion of a signal", uk: "1. Поняття сигналу" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** un signal est une **sonnerie de porte** : elle n'apporte aucun message, mais elle oblige à réagir. Le noyau (ou un autre processus) appuie sur le bouton ; le processus interrompt ce qu'il fait, puis choisit de **laisser le comportement par défaut**, d'**ignorer** la sonnerie, ou de l'**intercepter** en exécutant une **fonction de déroutement**.",
      en: "**Analogy:** a signal is a **doorbell**: it carries no message, but it forces a reaction. The kernel (or another process) presses the button; the process interrupts what it is doing, then chooses to **let the default behaviour apply**, to **ignore** the ring, or to **catch** it by running a **handler function**.",
      uk: "**Аналогія:** сигнал — це **дверний дзвінок**: він не несе жодного повідомлення, але змушує реагувати. Ядро (або інший процес) натискає кнопку; процес перериває те, що робить, а потім обирає: **залишити типову поведінку**, **проігнорувати** дзвінок або **перехопити** його, виконавши **функцію-обробник**.",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "signal-flow",
        caption: {
          fr: "Le processus reçoit le signal, exécute sa fonction de déroutement, puis reprend au point d'interruption.",
          en: "The process receives the signal, runs its handler function, then resumes at the point of interruption.",
          uk: "Процес отримує сигнал, виконує свою функцію-обробник, а потім продовжує з точки переривання.",
        },
        nodes: [
          { id: "src", label: { fr: "Source (noyau / kill)", en: "Source (kernel / kill)", uk: "Джерело (ядро / kill)" }, x: 0, y: 0, shape: "box", tone: "soft" },
          { id: "proc", label: { fr: "Processus", en: "Process", uk: "Процес" }, x: 210, y: 0, shape: "circle", tone: "primary" },
          { id: "handler", label: { fr: "Déroutement", en: "Handler", uk: "Обробник" }, x: 400, y: -90, shape: "box" },
          { id: "resume", label: { fr: "Reprise", en: "Resume", uk: "Продовження" }, x: 400, y: 40, shape: "box" },
        ],
        edges: [
          { from: "src", to: "proc", label: "signal(sig)" },
          { from: "proc", to: "handler", label: { fr: "délivrance", en: "delivery", uk: "доставка" }, dashed: true },
          { from: "handler", to: "resume", label: "return" },
        ],
      },
    ],
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Un signal est **numéroté de 0 à 31** et possède un **nom symbolique** commençant par `SIG` (ex. `SIGINT`).",
          en: "A signal is **numbered from 0 to 31** and has a **symbolic name** starting with `SIG` (e.g. `SIGINT`).",
          uk: "Сигнал **пронумеровано від 0 до 31**, і він має **символічне ім'я**, що починається з `SIG` (напр. `SIGINT`).",
        },
      },
      {
        text: {
          fr: "`strsignal(sig)`, déclaré dans `<string.h>`, renvoie la **description** du signal `sig`.",
          en: "`strsignal(sig)`, declared in `<string.h>`, returns the **description** of signal `sig`.",
          uk: "`strsignal(sig)`, оголошена в `<string.h>`, повертає **опис** сигналу `sig`.",
        },
      },
      {
        text: {
          fr: "Trois réactions possibles : **laisser le comportement par défaut**, **ignorer** le signal, ou le **capturer** en déroutant l'exécution vers une **routine gestionnaire** (fonction de déroutement).",
          en: "Three possible reactions: **let the default behaviour apply**, **ignore** the signal, or **catch** it by routing execution to a **handler routine** (handler function).",
          uk: "Можливі три реакції: **залишити типову поведінку**, **проігнорувати** сигнал або **перехопити** його, спрямувавши виконання до **процедури-обробника** (функції-обробника).",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Les signaux classiques", en: "2. The classic signals", uk: "2. Класичні сигнали" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`SIGINT` (2) — émis par le terminal lors de la frappe de **Ctrl-C** ; défaut : arrêt du processus.",
          en: "`SIGINT` (2) — sent by the terminal when **Ctrl-C** is pressed; default: terminate the process.",
          uk: "`SIGINT` (2) — надсилається терміналом при натисканні **Ctrl-C**; типово: завершення процесу.",
        },
      },
      {
        text: {
          fr: "`SIGQUIT` (3) — émis par le terminal lors de la frappe de **Ctrl-\\** ; défaut : arrêt du processus et **core dump**.",
          en: "`SIGQUIT` (3) — sent by the terminal when **Ctrl-\\** is pressed; default: terminate the process and **core dump**.",
          uk: "`SIGQUIT` (3) — надсилається терміналом при натисканні **Ctrl-\\**; типово: завершення процесу та **core dump**.",
        },
      },
      {
        text: {
          fr: "`SIGFPE` (8) — émis lors d'une **erreur de calcul** ou d'une **division par 0** ; défaut : arrêt du processus.",
          en: "`SIGFPE` (8) — sent on an **invalid arithmetic operation** or a **division by 0**; default: terminate the process.",
          uk: "`SIGFPE` (8) — надсилається при **помилці обчислення** або **діленні на 0**; типово: завершення процесу.",
        },
      },
      {
        text: {
          fr: "`SIGKILL` (9) — tout processus est **immédiatement arrêté** à sa réception ; il ne peut être **ni ignoré, ni intercepté**. Seul `init` (pid=1) ne peut pas le recevoir et un processus **zombie** n'y est pas sensible.",
          en: "`SIGKILL` (9) — any process is **immediately terminated** on receipt; it can be **neither ignored nor caught**. Only `init` (pid=1) cannot receive it, and a **zombie** process is not affected by it.",
          uk: "`SIGKILL` (9) — будь-який процес **негайно завершується** при його отриманні; його **не можна ні проігнорувати, ні перехопити**. Лише `init` (pid=1) не може його отримати, а **зомбі**-процес до нього не чутливий.",
        },
      },
      {
        text: {
          fr: "`SIGSEGV` (11) — émis par le noyau pour une **violation de segmentation** ; défaut : arrêt du processus.",
          en: "`SIGSEGV` (11) — sent by the kernel for a **segmentation violation**; default: terminate the process.",
          uk: "`SIGSEGV` (11) — надсилається ядром при **порушенні сегментації**; типово: завершення процесу.",
        },
      },
      {
        text: {
          fr: "`SIGPIPE` (13) — émis par le noyau quand un processus **écrit dans un tube qui n'a plus de lecteur** ; défaut : arrêt du processus.",
          en: "`SIGPIPE` (13) — sent by the kernel when a process **writes into a pipe that no longer has a reader**; default: terminate the process.",
          uk: "`SIGPIPE` (13) — надсилається ядром, коли процес **пише в канал, у якого більше немає читача**; типово: завершення процесу.",
        },
      },
      {
        text: {
          fr: "`SIGTERM` (15) — **demande « gentille »** de terminaison ; défaut : arrêt du processus (signal par défaut de la commande `kill` sous `bash`).",
          en: "`SIGTERM` (15) — a **“gentle” request** to terminate; default: terminate the process (the default signal of the `kill` command under `bash`).",
          uk: "`SIGTERM` (15) — **«лагідний» запит** на завершення; типово: завершення процесу (сигнал за замовчуванням команди `kill` у `bash`).",
        },
      },
      {
        text: {
          fr: "`SIGCHLD` (17) — émis par le noyau vers un processus dont **un fils vient de terminer** ; défaut : **ignorer** le signal.",
          en: "`SIGCHLD` (17) — sent by the kernel to a process whose **child has just finished**; default: **ignore** the signal.",
          uk: "`SIGCHLD` (17) — надсилається ядром процесу, у якого **щойно завершився нащадок**; типово: **ігнорувати** сигнал.",
        },
      },
      {
        text: {
          fr: "`SIGUSR1` (10) et `SIGUSR2` (12) — signaux **à la disposition de l'utilisateur** ; défaut : arrêt du processus.",
          en: "`SIGUSR1` (10) and `SIGUSR2` (12) — signals **available to the user**; default: terminate the process.",
          uk: "`SIGUSR1` (10) та `SIGUSR2` (12) — сигнали **у розпорядженні користувача**; типово: завершення процесу.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Signal non interceptable", en: "Uncatchable signal", uk: "Сигнал, який неможливо перехопити" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quel signal **ne peut être ni ignoré, ni intercepté** ?",
        en: "Which signal can be **neither ignored nor caught**?",
        uk: "Який сигнал **не можна ні проігнорувати, ні перехопити**?",
      },
      options: [
        { text: { fr: "`SIGINT`", en: "`SIGINT`", uk: "`SIGINT`" } },
        { text: { fr: "`SIGTERM`", en: "`SIGTERM`", uk: "`SIGTERM`" } },
        { text: { fr: "`SIGKILL`", en: "`SIGKILL`", uk: "`SIGKILL`" } },
      ],
      answerIndex: 2,
      solution: {
        fr: "`SIGKILL` (9) arrête immédiatement le processus à sa réception et ne peut être **ni ignoré, ni intercepté**. Seul `init` (pid=1) ne peut pas le recevoir.",
        en: "`SIGKILL` (9) immediately terminates the process on receipt and can be **neither ignored nor caught**. Only `init` (pid=1) cannot receive it.",
        uk: "`SIGKILL` (9) негайно завершує процес при його отриманні, і його **не можна ні проігнорувати, ні перехопити**. Лише `init` (pid=1) не може його отримати.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Recevoir un signal : signal()", en: "3. Receiving a signal: signal()", uk: "3. Отримання сигналу: signal()" },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'appel `signal(int sig, void (*gestionnaire)(int))` **spécifie le comportement** à la réception du signal `sig`. Le paramètre `gestionnaire` est un **pointeur sur une routine de gestion de signal**.",
      en: "The call `signal(int sig, void (*gestionnaire)(int))` **specifies the behaviour** on receipt of signal `sig`. The `gestionnaire` parameter is a **pointer to a signal-handling routine**.",
      uk: "Виклик `signal(int sig, void (*gestionnaire)(int))` **задає поведінку** при отриманні сигналу `sig`. Параметр `gestionnaire` — це **вказівник на процедуру обробки сигналу**.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : intercepter la violation de segmentation avec deroute().",
      en: "Complete program: catching the segmentation violation with deroute().",
      uk: "Повна програма: перехоплення порушення сегментації за допомогою deroute().",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <string.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

/* Fonction de deroutement : executee a la reception du signal. */
void deroute(int sig) {
    printf("Proc. %d: signal %d (%s) recu\\n",
           getpid(), sig, strsignal(sig));
    exit(1);
}

int main(int argc, char *argv[]) {
    char *s;
    if (signal(SIGSEGV, deroute) == SIG_ERR)
        erreur("signal");
    s = (char *) 30000;
    printf("Chaine = %s\\n", s);
}`,
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`signal(int sig, void (*gestionnaire)(int))` : `sig` est le **numéro du signal à traiter**, `gestionnaire` un pointeur sur la routine de gestion.",
          en: "`signal(int sig, void (*gestionnaire)(int))`: `sig` is the **number of the signal to handle**, `gestionnaire` a pointer to the handling routine.",
          uk: "`signal(int sig, void (*gestionnaire)(int))`: `sig` — це **номер сигналу для обробки**, `gestionnaire` — вказівник на процедуру обробки.",
        },
      },
      {
        text: {
          fr: "`SIG_DFL` : demande au noyau de **réinstaller le comportement par défaut**.",
          en: "`SIG_DFL`: asks the kernel to **restore the default behaviour**.",
          uk: "`SIG_DFL`: просить ядро **відновити типову поведінку**.",
        },
      },
      {
        text: {
          fr: "`SIG_IGN` : demande au noyau d'**ignorer** le signal.",
          en: "`SIG_IGN`: asks the kernel to **ignore** the signal.",
          uk: "`SIG_IGN`: просить ядро **ігнорувати** сигнал.",
        },
      },
      {
        text: {
          fr: "Sinon, on fournit une **fonction de déroutement** écrite par nous, par exemple `void deroute(int sig)`.",
          en: "Otherwise, we supply a **handler function** written by us, for example `void deroute(int sig)`.",
          uk: "Інакше ми надаємо **функцію-обробник**, написану нами, наприклад `void deroute(int sig)`.",
        },
      },
      {
        text: {
          fr: "Si la fonction de déroutement **retourne**, le traitement **reprend au point d'interruption**.",
          en: "If the handler function **returns**, execution **resumes at the point of interruption**.",
          uk: "Якщо функція-обробник **повертає керування**, обробка **продовжується з точки переривання**.",
        },
      },
      {
        text: {
          fr: "Un **fils hérite du comportement du père** vis-à-vis d'un signal.",
          en: "A **child inherits the parent's behaviour** towards a signal.",
          uk: "**Нащадок успадковує поведінку батька** щодо сигналу.",
        },
      },
      {
        text: {
          fr: "**Les signaux ne sont pas mémorisés, sauf `SIGCHLD`.**",
          en: "**Signals are not memorised, except `SIGCHLD`.**",
          uk: "**Сигнали не запам'ятовуються, крім `SIGCHLD`.**",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "4. Attendre un signal : pause()", en: "4. Waiting for a signal: pause()", uk: "4. Очікування сигналу: pause()" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int pause(void)` : **endort** le processus demandeur jusqu'à la réception d'un signal ; il **retourne toujours -1**.",
          en: "`int pause(void)`: **puts the requesting process to sleep** until a signal is received; it **always returns -1**.",
          uk: "`int pause(void)`: **присипляє** процес-запитувач до отримання сигналу; він **завжди повертає -1**.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "5. Émettre un signal : kill()", en: "5. Sending a signal: kill()", uk: "5. Надсилання сигналу: kill()" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int kill(int pid, int num_signal)` : **envoie** le signal `num_signal` au processus `pid` ; retourne **-1** en cas d'échec.",
          en: "`int kill(int pid, int num_signal)`: **sends** signal `num_signal` to process `pid`; returns **-1** on failure.",
          uk: "`int kill(int pid, int num_signal)`: **надсилає** сигнал `num_signal` процесу `pid`; повертає **-1** у разі невдачі.",
        },
      },
      {
        text: {
          fr: "But : **relancer** un processus (d'où la **synchronisation**) ou **y mettre fin**.",
          en: "Purpose: **restart** a process (hence **synchronization**) or **terminate** it.",
          uk: "Мета: **перезапустити** процес (звідси **синхронізація**) або **завершити** його.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "6. Interblocage : le signal perdu", en: "6. Deadlock: the lost signal", uk: "6. Взаємне блокування: втрачений сигнал" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Les signaux ne sont pas mémorisés** (sauf `SIGCHLD`) : si `SIGUSR1` est envoyé **avant** que le fils n'ait installé son gestionnaire ou **avant** son `pause()`, le signal est **perdu**. Le père attend alors la réponse par le tube, tandis que le fils attend un signal qui ne viendra plus : **interblocage**. Le père attend en lecture, le fils attend un signal perdu.",
      en: "**Signals are not memorised** (except `SIGCHLD`): if `SIGUSR1` is sent **before** the child has installed its handler or **before** its `pause()`, the signal is **lost**. The parent then waits for the reply through the pipe, while the child waits for a signal that will never come: **deadlock**. The parent waits on a read, the child waits for a lost signal.",
      uk: "**Сигнали не запам'ятовуються** (крім `SIGCHLD`): якщо `SIGUSR1` надіслано **до** того, як нащадок встановив свій обробник, або **до** його `pause()`, сигнал **втрачається**. Тоді батько чекає на відповідь через канал, а нащадок чекає на сигнал, який більше не прийде: **взаємне блокування**. Батько чекає на читанні, нащадок чекає на втрачений сигнал.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : deroute(), pere() (kill + read) et fils() (signal + pause + write).",
      en: "Complete program: deroute(), pere() (kill + read) and fils() (signal + pause + write).",
      uk: "Повна програма: deroute(), pere() (kill + read) та fils() (signal + pause + write).",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <string.h>
#include <sys/wait.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

/* Fonction de deroutement du fils. */
void deroute(int sig) {
    printf("Fils: signal %d (%s) recu\\n", sig, strsignal(sig));
}

/* pere : envoie le signal puis attend la reponse par le tube. */
void pere(int pid, int *pfd) {
    char message[5];
    if (kill(pid, SIGUSR1) == -1)
        erreur("kill");
    printf("Pere: signal SIGUSR1 envoye a fils %d\\n", pid);
    if (read(pfd[0], message, 5) == -1)
        erreur("read");
    printf("Pere: message %s recu\\n", message);
    if (wait(NULL) == -1)
        erreur("wait");
    exit(0);
}

/* fils : installe le gestionnaire, attend le signal puis repond. */
void fils(int *pfd) {
    char message[5] = "Hello";
    if (signal(SIGUSR1, deroute) == SIG_ERR)
        erreur("signal");
    pause();
    if (write(pfd[1], message, 5) == -1)
        erreur("write");
    printf("Fils: message %s envoye\\n", message);
    exit(0);
}

int main(int argc, char *argv[]) {
    int pfd[2];
    int pid;
    if (pipe(pfd) == -1)
        erreur("pipe");
    pid = fork();
    if (pid == -1)
        erreur("fork");
    if (pid == 0) {
        close(pfd[0]);
        fils(pfd);
    }
    close(pfd[1]);
    pere(pid, pfd);
}`,
  },
  {
    type: "trace",
    spec: {
      id: "signal-trace",
      caption: {
        fr: "Interblocage : le signal est perdu parce qu'il est arrivé trop tôt.",
        en: "Deadlock: the signal is lost because it arrived too early.",
        uk: "Взаємне блокування: сигнал втрачено, бо він прийшов занадто рано.",
      },
      events: [
        {
          label: { fr: "Le père appelle `kill(pid, SIGUSR1)`", en: "The parent calls `kill(pid, SIGUSR1)`", uk: "Батько викликає `kill(pid, SIGUSR1)`" },
          detail: { fr: "Le signal part vers le fils.", en: "The signal is sent to the child.", uk: "Сигнал вирушає до нащадка." },
        },
        {
          label: { fr: "Le signal est perdu", en: "The signal is lost", uk: "Сигнал втрачено" },
          detail: { fr: "Le fils n'a pas encore installé son gestionnaire : les signaux ne sont pas mémorisés.", en: "The child has not yet installed its handler: signals are not memorised.", uk: "Нащадок ще не встановив свій обробник: сигнали не запам'ятовуються." },
        },
        {
          label: { fr: "Le père appelle `read(pfd[0], ...)`", en: "The parent calls `read(pfd[0], ...)`", uk: "Батько викликає `read(pfd[0], ...)`" },
          detail: { fr: "Il se bloque en attendant la réponse du fils.", en: "It blocks waiting for the child's reply.", uk: "Він блокується, чекаючи на відповідь нащадка." },
        },
        {
          label: { fr: "Le fils appelle `pause()`", en: "The child calls `pause()`", uk: "Нащадок викликає `pause()`" },
          detail: { fr: "Il attend un signal qui ne viendra plus.", en: "It waits for a signal that will never come.", uk: "Він чекає на сигнал, який більше не прийде." },
        },
        {
          label: { fr: "Interblocage", en: "Deadlock", uk: "Взаємне блокування" },
          detail: { fr: "Le père attend en lecture, le fils attend un signal perdu.", en: "The parent waits on a read, the child waits for a lost signal.", uk: "Батько чекає на читанні, нащадок чекає на втрачений сигнал." },
        },
      ],
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Signaux non mémorisés", en: "Signals are not memorised", uk: "Сигнали не запам'ятовуються" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Si l'on envoie plusieurs fois `SIGUSR1` avant qu'il ne soit traité, le gestionnaire s'exécute chaque fois.",
        en: "If `SIGUSR1` is sent several times before it is handled, the handler runs each time.",
        uk: "Якщо надіслати `SIGUSR1` кілька разів, перш ніж його буде оброблено, обробник виконається щоразу.",
      },
      answer: false,
      justification: {
        fr: "Un signal n'est **pas mémorisé** (sauf `SIGCHLD`) : les envois répétés avant traitement **fusionnent** en **un seul** déroutement.",
        en: "A signal is **not memorised** (except `SIGCHLD`): repeated sends before handling **merge** into **a single** handling.",
        uk: "Сигнал **не запам'ятовується** (крім `SIGCHLD`): повторні надсилання до обробки **зливаються** в **одне єдине** спрацювання обробника.",
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
        title: { fr: "Fiche 2 – Question 1 : Première utilisation de signaux", en: "Sheet 2 – Question 1: A first use of signals", uk: "Картка 2 – Питання 1: Перше використання сигналів" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrire en langage C un programme qui résout une équation du second degré de la façon suivante :\n\nLes coefficients de l'équation du second degré sont les arguments du programme. Le processus père va calculer la valeur discriminant de l'équation.\n\n— Si le discriminant est strictement négatif alors le processus père va envoyer le signal `SIGUSR1` à son fils, le fils notifiera par une impression à l'écran que le signal est bien reçu et se terminera.\n\n— Si le discriminant est positif, le fils doit récupérer grâce à un tube les coefficients de l'équation envoyés par le père et afficher les racines de l'équation.",
              en: "Write, in C, a program that solves a quadratic equation as follows:\n\nThe coefficients of the quadratic equation are the program's arguments. The parent process computes the value of the discriminant of the equation.\n\n— If the discriminant is strictly negative, then the parent process sends the `SIGUSR1` signal to its child; the child will report, by printing to the screen, that the signal has indeed been received, and will terminate.\n\n— If the discriminant is positive, the child must retrieve, through a pipe, the coefficients of the equation sent by the parent, and display the roots of the equation.",
              uk: "Написати мовою C програму, яка розв'язує квадратне рівняння таким чином:\n\nКоефіцієнти квадратного рівняння є аргументами програми. Процес-батько обчислюватиме значення дискримінанта рівняння.\n\n— Якщо дискримінант строго від'ємний, то процес-батько надішле сигнал `SIGUSR1` своєму нащадку, нащадок повідомить виведенням на екран, що сигнал справді отримано, і завершиться.\n\n— Якщо дискримінант додатний, нащадок має отримати через канал коефіцієнти рівняння, надіслані батьком, і вивести корені рівняння.",
            },
            solution: {
              fr: "Le père calcule le discriminant `d = b*b - 4*a*c`. Si `d < 0`, il envoie `SIGUSR1` à son fils avec `kill(pid, SIGUSR1)` ; le fils a installé `signal(SIGUSR1, deroute)` et attend avec `pause()` ; le gestionnaire imprime qu'il a bien reçu le signal, puis le fils se termine. Sinon (`d` positif), le père écrit les coefficients dans un tube (`write(pfd[1], ...)`) et le fils les lit (`read(pfd[0], ...)`) avant d'afficher les racines. On crée le tube avec `pipe(pfd)` et le processus avec `fork()`.",
              en: "The parent computes the discriminant `d = b*b - 4*a*c`. If `d < 0`, it sends `SIGUSR1` to its child with `kill(pid, SIGUSR1)`; the child has installed `signal(SIGUSR1, deroute)` and waits with `pause()`; the handler prints that it received the signal, then the child terminates. Otherwise (`d` positive), the parent writes the coefficients into a pipe (`write(pfd[1], ...)`) and the child reads them (`read(pfd[0], ...)`) before printing the roots. The pipe is created with `pipe(pfd)` and the process with `fork()`.",
              uk: "Батько обчислює дискримінант `d = b*b - 4*a*c`. Якщо `d < 0`, він надсилає `SIGUSR1` своєму нащадку через `kill(pid, SIGUSR1)`; нащадок встановив `signal(SIGUSR1, deroute)` і чекає за допомогою `pause()`; обробник виводить, що він справді отримав сигнал, після чого нащадок завершується. Інакше (`d` додатний) батько записує коефіцієнти в канал (`write(pfd[1], ...)`), а нащадок читає їх (`read(pfd[0], ...)`), перш ніж вивести корені. Канал створюється за допомогою `pipe(pfd)`, а процес — за допомогою `fork()`.",
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
      uk: "Шпаргалка до іспиту: Шаблон написання",
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Question type :** « Le père envoie un signal à son fils ; le fils l'intercepte, l'affiche et se termine. »",
      en: "**Typical question:** “The parent sends a signal to its child; the child catches it, prints it and exits.”",
      uk: "**Типове питання:** «Батько надсилає сигнал своєму нащадку; нащадок перехоплює його, виводить і завершується.»",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Déclarer** la fonction de déroutement `void deroute(int sig)` avant `main`.",
          en: "**Declare** the handler function `void deroute(int sig)` before `main`.",
          uk: "**Оголосити** функцію-обробник `void deroute(int sig)` перед `main`.",
        },
      },
      {
        text: {
          fr: "**Installer** le gestionnaire avec `signal(sig, deroute)` et tester `== SIG_ERR` ; on dispose aussi de `SIG_DFL` et `SIG_IGN`.",
          en: "**Install** the handler with `signal(sig, deroute)` and test `== SIG_ERR`; `SIG_DFL` and `SIG_IGN` are also available.",
          uk: "**Встановити** обробник за допомогою `signal(sig, deroute)` і перевірити `== SIG_ERR`; також доступні `SIG_DFL` та `SIG_IGN`.",
        },
      },
      {
        text: {
          fr: "**Attendre** : `pause()` endort le processus jusqu'à un signal et retourne toujours -1.",
          en: "**Wait**: `pause()` puts the process to sleep until a signal and always returns -1.",
          uk: "**Зачекати**: `pause()` присипляє процес до сигналу і завжди повертає -1.",
        },
      },
      {
        text: {
          fr: "**Émettre** : `kill(pid, num_signal)` envoie un signal à un autre processus (père vers fils).",
          en: "**Send**: `kill(pid, num_signal)` sends a signal to another process (parent to child).",
          uk: "**Надіслати**: `kill(pid, num_signal)` надсилає сигнал іншому процесу (від батька нащадку).",
        },
      },
      {
        text: {
          fr: "**Afficher** la description d'un signal avec `strsignal(sig)` (dans `<string.h>`).",
          en: "**Display** a signal's description with `strsignal(sig)` (in `<string.h>`).",
          uk: "**Вивести** опис сигналу за допомогою `strsignal(sig)` (у `<string.h>`).",
        },
      },
      {
        text: {
          fr: "**Se souvenir** que les signaux ne sont pas mémorisés (sauf `SIGCHLD`) : un signal envoyé trop tôt est **perdu**, d'où l'**interblocage**.",
          en: "**Remember** that signals are not memorised (except `SIGCHLD`): a signal sent too early is **lost**, hence the **deadlock**.",
          uk: "**Пам'ятати**, що сигнали не запам'ятовуються (крім `SIGCHLD`): сигнал, надісланий занадто рано, **втрачається**, звідси й **взаємне блокування**.",
        },
      },
    ],
  },
];
