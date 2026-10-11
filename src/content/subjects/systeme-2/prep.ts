import type { Block } from "../../types";

export const prepCC1: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "**La fiche à relire 30 minutes avant le CCI 1.** Le CCI 1 tombe à la fin du CM3 et couvre **CM1 + CM2** : processus, tubes anonymes, tubes nommés, signaux, mmap et exclusion mutuelle. Chaque partie tient en un écran : l'essentiel, **le code complet** (`#include`, `erreur`, `pere`, `fils`) et les réflexes qui rapportent des points. Entraînez-vous ensuite sur les **Examens blancs**.",
      en: "**The sheet to re-read 30 minutes before CC1.** CC1 takes place at the end of lecture 3 and covers **lecture 1 + lecture 2**: processes, anonymous pipes, named pipes, signals, mmap and mutual exclusion. Each part fits one screen: the essentials, **the full code** (`#include`, `erreur`, `pere`, `fils`) and the reflexes that earn marks. Then practise on the **Mock exams**.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: { fr: "1. Processus : fork, wait, exec", en: "1. Processes: fork, wait, exec" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **processus** = programme en cours d'exécution + espace mémoire + PCB (pid, registres, état). `fork` **duplique**, `exec` **remplace**, `wait` **attend** et évite le **zombie**.",
      en: "A **process** = program being executed + memory space + PCB (pid, registers, state). `fork` **duplicates**, `exec` **replaces**, `wait` **waits** and avoids the **zombie**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`fork()` renvoie **-1** (erreur), **0** (fils), le **pid du fils** (père).",
          en: "`fork()` returns **-1** (error), **0** (child), the **child's pid** (parent).",
        },
      },
      {
        text: {
          fr: "`getpid()` / `getppid()` : pid courant / du père. `pid = 0` = noyau, `pid = 1` = `init`.",
          en: "`getpid()` / `getppid()`: current / parent pid. `pid = 0` = kernel, `pid = 1` = `init`.",
        },
      },
      {
        text: {
          fr: "`exec` : **aucun nouveau processus** (même pid), **remplace** le programme, ne revient qu'en cas d'échec (**-1**), transmet les descripteurs ouverts.",
          en: "`exec`: **no new process** (same pid), **replaces** the program, returns only on failure (**-1**), passes on the open descriptors.",
        },
      },
      {
        text: {
          fr: "`wait(&status)` (`<sys/wait.h>`) : suspend jusqu'à la fin d'un fils, renvoie son pid ou **-1** ; `while (wait(NULL) != -1) { }` attend tous les fils.",
          en: "`wait(&status)` (`<sys/wait.h>`): suspends until a child ends, returns its pid or **-1**; `while (wait(NULL) != -1) { }` waits for all children.",
        },
      },
      {
        text: {
          fr: "Fils terminé non attendu = **zombie** (pid non réutilisable) jusqu'au `wait`.",
          en: "A finished child not yet waited for = **zombie** (unusable pid) until `wait`.",
        },
      },
      {
        text: {
          fr: "`n` fork **non contrôlés** (sans `case 0`) créent **2^n** processus : chaque fork double le nombre d'exécutants.",
          en: "`n` **uncontrolled** forks (no `case 0`) create **2^n** processes: each fork doubles the number of executors.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Squelette à recopier : erreur(), fils(), pere() et main().",
      en: "Skeleton to copy: erreur(), fils(), pere() and main().",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void fils(void) {
    printf("Fils : pid = %d, pere = %d\\n", getpid(), getppid());
    exit(0);
}

void pere(int pid) {
    if (wait(NULL) == -1) erreur("wait");
    printf("Pere : pid = %d, fils %d termine\\n", getpid(), pid);
    exit(0);
}

int main(int argc, char *argv[]) {
    int pid;
    switch (pid = fork()) {
        case -1: erreur("fork");
        case 0: fils();
    }
    pere(pid);
}`,
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "exec : le processus courant devient une autre commande (aucun fork).",
      en: "exec: the current process becomes another command (no fork).",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

int main(int argc, char *argv[]) {
    printf("avant exec\\n");
    execlp("echo", "echo", "bonjour", NULL);
    erreur("execlp");
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Valeur de retour de fork", en: "fork return value" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "`fork()` renvoie 0 au processus fils et le pid du fils au processus père.",
        en: "`fork()` returns 0 to the child process and the child's pid to the parent process.",
      },
      answer: true,
      justification: {
        fr: "Exact : **-1** en cas d'erreur, **0** au fils, **pid du fils** au père.",
        en: "Correct: **-1** on error, **0** to the child, the **child's pid** to the parent.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p2",
    text: { fr: "2. Tubes anonymes", en: "2. Anonymous pipes" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **tube anonyme** (`int pfd[2]`) est un tampon du noyau entre processus **apparentés** : on écrit dans `pfd[1]`, on lit dans `pfd[0]`. C'est ce qui réalise `ls | wc -l`.",
      en: "An **anonymous pipe** (`int pfd[2]`) is a kernel buffer between **related** processes: write into `pfd[1]`, read from `pfd[0]`. It is what implements `ls | wc -l`.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int pipe(int pfd[2])` (`<unistd.h>`) : crée le tube, **-1** si échec.",
          en: "`int pipe(int pfd[2])` (`<unistd.h>`): creates the pipe, **-1** on failure.",
        },
      },
      {
        text: {
          fr: "`pfd[0]` = **sortie** (lecture seule), `pfd[1]` = **entrée** (écriture seule).",
          en: "`pfd[0]` = **exit** (read-only), `pfd[1]` = **entry** (write-only).",
        },
      },
      {
        text: {
          fr: "`read`/`write` renvoient le nombre d'octets lus/écrits, **-1** si échec.",
          en: "`read`/`write` return the number of bytes read/written, **-1** on failure.",
        },
      },
      {
        text: {
          fr: "Lecture bloquée si le tube est **vide**, écriture bloquée s'il est **plein** (d'où la synchronisation) ; `read`/`write` sont **indivisibles**.",
          en: "Reading blocks if the pipe is **empty**, writing blocks if it is **full** (hence synchronisation); `read`/`write` are **indivisible**.",
        },
      },
      {
        text: {
          fr: "`close` = **fin de fichier** pour le lecteur : toujours fermer l'extrémité inutilisée.",
          en: "`close` = **end of file** for the reader: always close the unused end.",
        },
      },
      {
        text: {
          fr: "Créer les tubes **avant** les `fork` (le fils hérite des descripteurs, sinon les processus ne peuvent plus être connectés).",
          en: "Create the pipes **before** the `fork`s (the child inherits the descriptors, otherwise the processes can no longer be connected).",
        },
      },
      {
        text: {
          fr: "`dup(pfd)` : duplique sur le **plus petit descripteur libre** ; sert à rediriger 0/1 pour simuler `cmd1 | cmd2`.",
          en: "`dup(pfd)`: duplicates onto the **lowest free descriptor**; used to redirect 0/1 to simulate `cmd1 | cmd2`.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Père → fils par un tube : écrire, fermer, lire jusqu'à la fin de fichier.",
      en: "Parent → child through a pipe: write, close, read to end of file.",
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
    type: "code",
    lang: "c",
    caption: {
      fr: "Simulation de ls | wc -l : dup redirige les entrées/sorties standard.",
      en: "Simulation of ls | wc -l: dup redirects the standard input/output.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void fils(int *pfd) {
    if (close(1) == -1) erreur("close");
    if (dup(pfd[1]) != 1) erreur("dup");
    if (close(pfd[0]) == -1) erreur("close");
    if (close(pfd[1]) == -1) erreur("close");
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
    type: "checkpoint",
    concept: { fr: "Sens des descripteurs", en: "Direction of descriptors" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Après `pipe(pfd)`, `pfd[0]` est la sortie du tube, ouverte en lecture seule.",
        en: "After `pipe(pfd)`, `pfd[0]` is the pipe exit, opened read-only.",
      },
      answer: true,
      justification: {
        fr: "Exact : `pfd[0]` = **sortie** (lecture), `pfd[1]` = **entrée** (écriture).",
        en: "Correct: `pfd[0]` = **exit** (read), `pfd[1]` = **entry** (write).",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p3",
    text: { fr: "3. Tubes nommés (FIFO)", en: "3. Named pipes (FIFO)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **tube nommé (FIFO)** a un **nom physique** : des processus **sans lien de parenté** communiquent en l'ouvrant. Mêmes propriétés que le tube anonyme, mais c'est un **fichier binaire de taille 0**.",
      en: "A **named pipe (FIFO)** has a **physical name**: **unrelated** processes communicate by opening it. Same properties as the anonymous pipe, but it is a **zero-size binary file**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`int mkfifo(const char *nom, mode_t mode)` (`<sys/stat.h>`) : **-1** si échec, sinon 0 (commande `mkfifo nom`).",
          en: "`int mkfifo(const char *nom, mode_t mode)` (`<sys/stat.h>`): **-1** on failure, otherwise 0 (command `mkfifo nom`).",
        },
      },
      {
        text: {
          fr: "`open(nom, flags)` (`<fcntl.h>`) avec `O_RDONLY` / `O_WRONLY` / `O_RDWR` : renvoie un descripteur, **-1** si échec.",
          en: "`open(nom, flags)` (`<fcntl.h>`) with `O_RDONLY` / `O_WRONLY` / `O_RDWR`: returns a descriptor, **-1** on failure.",
        },
      },
      {
        text: {
          fr: "**Ouverture bloquante par défaut** : en **lecture** tant qu'aucun écrivain n'ouvre ; en **écriture** tant qu'aucun lecteur n'ouvre.",
          en: "**Blocking open by default**: for **reading** until a writer opens; for **writing** until a reader opens.",
        },
      },
      {
        text: {
          fr: "`O_NONBLOCK` : l'ouverture en lecture **réussit** sans écrivain ; l'ouverture en écriture **échoue** sans lecteur.",
          en: "`O_NONBLOCK`: opening for reading **succeeds** with no writer; opening for writing **fails** with no reader.",
        },
      },
      {
        text: {
          fr: "Échange par `read`/`write` comme sur un fichier ; `remove(nom)` supprime le tube (comme `rm nom`).",
          en: "Exchange with `read`/`write` as on a file; `remove(nom)` deletes the pipe (like `rm nom`).",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "fifo.c : le père crée le FIFO et y dépose le pid de son fils ; le fils attend SIGUSR1.",
      en: "fifo.c: the parent creates the FIFO and writes its child's pid; the child waits for SIGUSR1.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <signal.h>
#include <sys/stat.h>
#include <sys/wait.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void deroute(int sig) {
    printf("Fils %d: signal %d recu\\n", getpid(), sig);
    exit(0);
}

int main(int argc, char *argv[]) {
    int fd, pid;
    if (mkfifo("tube", 0600) == -1)
        erreur("mkfifo");
    switch (pid = fork()) {
        case -1: erreur("fork");
        case 0:
            if (signal(SIGUSR1, deroute) == SIG_ERR)
                erreur("signal");
            pause();
            exit(0);
    }
    if ((fd = open("tube", O_WRONLY)) == -1)
        erreur("open");
    if (write(fd, &pid, sizeof(int)) == -1)
        erreur("write");
    if (close(fd) == -1)
        erreur("close");
    if (wait(NULL) == -1)
        erreur("wait");
    if (remove("tube") == -1)
        erreur("remove");
    return 0;
}`,
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "fifo2.c : lit le pid par le FIFO, le transmet à son fils par un tube anonyme ; le fils envoie le signal.",
      en: "fifo2.c: reads the pid from the FIFO, passes it to its child through an anonymous pipe; the child sends the signal.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <signal.h>
#include <sys/wait.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

int main(int argc, char *argv[]) {
    int fd, pfd[2], pid_recu;
    if ((fd = open("tube", O_RDONLY)) == -1)
        erreur("open");
    if (read(fd, &pid_recu, sizeof(int)) == -1)
        erreur("read");
    if (close(fd) == -1)
        erreur("close");
    if (pipe(pfd) == -1)
        erreur("pipe");
    switch (fork()) {
        case -1: erreur("fork");
        case 0:
            if (close(pfd[1]) == -1) erreur("close");
            if (read(pfd[0], &pid_recu, sizeof(int)) == -1) erreur("read");
            if (close(pfd[0]) == -1) erreur("close");
            if (kill(pid_recu, SIGUSR1) == -1) erreur("kill");
            exit(0);
    }
    if (close(pfd[0]) == -1) erreur("close");
    if (write(pfd[1], &pid_recu, sizeof(int)) == -1) erreur("write");
    if (close(pfd[1]) == -1) erreur("close");
    if (wait(NULL) == -1) erreur("wait");
    return 0;
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "open bloquant sur un FIFO", en: "Blocking open on a FIFO" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Un processus ouvre un tube nommé en écriture (`O_WRONLY`) et aucun lecteur n'existe. Que se passe-t-il ?",
        en: "A process opens a named pipe for writing (`O_WRONLY`) and no reader exists. What happens?",
      },
      options: [
        {
          text: { fr: "L'appel renvoie immédiatement un descripteur.", en: "The call immediately returns a descriptor." },
        },
        {
          text: { fr: "L'appel bloque tant qu'aucun lecteur n'ouvre le tube.", en: "The call blocks until a reader opens the pipe." },
        },
        {
          text: { fr: "L'appel échoue systématiquement.", en: "The call always fails." },
        },
      ],
      answerIndex: 1,
      solution: {
        fr: "L'ouverture par défaut est **bloquante** : en écriture elle attend un lecteur. L'échec n'arrive qu'avec `O_NONBLOCK`, sur un tube sans lecteur.",
        en: "The default open is **blocking**: for writing it waits for a reader. Failure only happens with `O_NONBLOCK`, on a pipe with no reader.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p4",
    text: { fr: "4. Signaux", en: "4. Signals" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un **signal** est un message **sans contenu** qui force une réaction (fin ou reprise) : c'est de là que vient la **synchronisation**. On l'**ignore** (`SIG_IGN`), on rétablit le **défaut** (`SIG_DFL`) ou on l'**intercepte** avec une fonction de déroutement.",
      en: "A **signal** is a message with **no content** that forces a reaction (end or restart): that is where **synchronisation** comes from. One **ignores** it (`SIG_IGN`), restores the **default** (`SIG_DFL`) or **catches** it with a handler function.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`signal(int sig, gestionnaire)` (`<signal.h>`) : installe le comportement ; `SIG_ERR` = échec.",
          en: "`signal(int sig, gestionnaire)` (`<signal.h>`): installs the behaviour; `SIG_ERR` = failure.",
        },
      },
      {
        text: {
          fr: "`void deroute(int sig)` : fonction de déroutement ; si elle **retourne**, reprise au point d'interruption.",
          en: "`void deroute(int sig)`: handler function; if it **returns**, execution resumes at the interruption point.",
        },
      },
      {
        text: {
          fr: "`int pause(void)` : endort jusqu'à un signal ; **retourne toujours -1**.",
          en: "`int pause(void)`: puts the process to sleep until a signal; **always returns -1**.",
        },
      },
      {
        text: {
          fr: "`int kill(int pid, int num_signal)` : envoie un signal ; **-1** si échec.",
          en: "`int kill(int pid, int num_signal)`: sends a signal; **-1** on failure.",
        },
      },
      {
        text: {
          fr: "`strsignal(sig)` (`<string.h>`) : description du signal.",
          en: "`strsignal(sig)` (`<string.h>`): description of the signal.",
        },
      },
      {
        text: {
          fr: "`SIGKILL` (9) : **ni ignoré ni intercepté**. `SIGCHLD` (17) : fin d'un fils, défaut **ignorer**. `SIGUSR1` (10) / `SIGUSR2` (12) : libres.",
          en: "`SIGKILL` (9): **neither ignored nor caught**. `SIGCHLD` (17): child finished, default **ignore**. `SIGUSR1` (10) / `SIGUSR2` (12): user signals.",
        },
      },
      {
        text: {
          fr: "**Les signaux ne sont pas mémorisés** (sauf `SIGCHLD`) : envoyé trop tôt, il est **perdu** → **interblocage**.",
          en: "**Signals are not memorised** (except `SIGCHLD`): sent too early, it is **lost** → **deadlock**.",
        },
      },
      {
        text: {
          fr: "Le fils **hérite** du comportement du père vis-à-vis d'un signal.",
          en: "The child **inherits** the parent's behaviour towards a signal.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Signaux : deroute(), pere() (kill + read) et fils() (signal + pause + write).",
      en: "Signals: deroute(), pere() (kill + read) and fils() (signal + pause + write).",
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
    type: "code",
    lang: "c",
    caption: {
      fr: "TD3 Q1 : équation du second degré (SIGUSR1 si discriminant < 0, sinon tube).",
      en: "TD3 Q1: quadratic equation (SIGUSR1 if discriminant < 0, otherwise pipe).",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <unistd.h>
#include <signal.h>
#include <sys/wait.h>

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void deroute(int sig) {
    printf("Fils: signal %d recu\\n", sig);
    exit(0);
}

void pere(int a, int b, int c, int pid, int *pfd) {
    float d = b * b - 4 * a * c;
    if (d < 0) {
        if (kill(pid, SIGUSR1) == -1)
            erreur("kill");
    } else {
        int coef[3] = { a, b, c };
        if (write(pfd[1], coef, sizeof(coef)) == -1)
            erreur("write");
    }
    if (wait(NULL) == -1)
        erreur("wait");
    exit(0);
}

void fils(int *pfd) {
    int coef[3];
    float d;
    if (signal(SIGUSR1, deroute) == SIG_ERR)
        erreur("signal");
    if (read(pfd[0], coef, sizeof(coef)) == -1)
        erreur("read");
    d = coef[1] * coef[1] - 4 * coef[0] * coef[2];
    printf("Racine 1 = %.2f\\n", (-coef[1] + sqrt(d)) / (2 * coef[0]));
    printf("Racine 2 = %.2f\\n", (-coef[1] - sqrt(d)) / (2 * coef[0]));
    exit(0);
}

int main(int argc, char *argv[]) {
    int pfd[2], pid;
    if (argc != 4)
        erreur("argc");
    if (pipe(pfd) == -1)
        erreur("pipe");
    switch (pid = fork()) {
        case -1: erreur("fork");
        case 0:
            close(pfd[1]);
            fils(pfd);
    }
    close(pfd[0]);
    pere(atoi(argv[1]), atoi(argv[2]), atoi(argv[3]), pid, pfd);
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "Signaux non mémorisés", en: "Signals are not memorised" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Un signal envoyé **avant** l'installation du gestionnaire est perdu (sauf `SIGCHLD`).",
        en: "A signal sent **before** the handler is installed is lost (except `SIGCHLD`).",
      },
      answer: true,
      justification: {
        fr: "Exact : les signaux ne sont pas mémorisés ; un signal trop précoce est perdu et peut provoquer un **interblocage**.",
        en: "Correct: signals are not memorised; a signal that comes too early is lost and can cause a **deadlock**.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p5",
    text: { fr: "5. mmap (mémoire partagée)", en: "5. mmap (shared memory)" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**mmap** projette un (segment de) fichier dans une zone **contiguë** de mémoire : on y accède par **adresse**, sans `read`/`write`. `MAP_SHARED` partage les écritures entre processus — mais **n'assure pas l'exclusion mutuelle**.",
      en: "**mmap** maps a (segment of a) file into a **contiguous** memory region: it is accessed by **address**, without `read`/`write`. `MAP_SHARED` shares writes between processes — but does **not ensure mutual exclusion**.",
    },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`void *mmap(void *adr, long longueur, int protection, int options, int fd, long decalage)` : `NULL` = laisser le système choisir l'adresse.",
          en: "`void *mmap(void *adr, long longueur, int protection, int options, int fd, long decalage)`: `NULL` = let the system choose the address.",
        },
      },
      {
        text: {
          fr: "`protection` : `PROT_READ`, `PROT_WRITE` ; `options` : `MAP_SHARED` (partagé) ou `MAP_PRIVATE` (privé).",
          en: "`protection`: `PROT_READ`, `PROT_WRITE`; `options`: `MAP_SHARED` (shared) or `MAP_PRIVATE` (private).",
        },
      },
      {
        text: {
          fr: "Échec → `MAP_FAILED` ; `int munmap(void *adr, long longueur)` → **0** ou **-1**.",
          en: "Failure → `MAP_FAILED`; `int munmap(void *adr, long longueur)` → **0** or **-1**.",
        },
      },
      {
        text: {
          fr: "**Création par fichier** : `open` → `lseek` (fixer la taille) → `write` (1 octet) → `mmap` → `close` → `unlink`.",
          en: "**Creation through a file**: `open` → `lseek` (set the size) → `write` (1 byte) → `mmap` → `close` → `unlink`.",
        },
      },
      {
        text: {
          fr: "`MAP_SHARED` : toute écriture est répercutée **immédiatement** sur le segment et sur **toutes** les projections.",
          en: "`MAP_SHARED`: any write is reflected **immediately** on the segment and on **all** the mappings.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Mémoire partagée : création() par fichier, puis N fils écrivent chacun une case.",
      en: "Shared memory: creation() through a file, then N children each write one cell.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <sys/mman.h>
#include <sys/wait.h>

#define N 10

int *T;

void erreur(char *message) {
    fprintf(stderr, "Erreur: %s\\n", message);
    exit(1);
}

void creation() {
    int fd = open("temp", O_RDWR | O_CREAT | O_TRUNC, 0600);
    if (fd == -1) erreur("open");
    if (lseek(fd, N * sizeof(int), 0) == -1) erreur("lseek");
    if (write(fd, "", sizeof(char)) == -1) erreur("write");
    T = mmap(NULL, N * sizeof(int), PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
    if (T == MAP_FAILED) erreur("mmap");
    if (close(fd) == -1) erreur("close");
    if (unlink("temp") == -1) erreur("unlink");
}

void fils(int i) {
    T[i] = i;
    exit(0);
}

void pere() {
    int i;
    T[0] = 0;
    while (wait(NULL) != -1) { }
    for (i = 0; i < N; i++)
        printf("T[%d] = %d\\n", i, T[i]);
    if (munmap(T, N * sizeof(int)) == -1) erreur("munmap");
    exit(0);
}

int main(int argc, char *argv[]) {
    int i;
    creation();
    for (i = 1; i < N; i++) {
        switch (fork()) {
            case -1: erreur("fork");
            case 0: fils(i);
        }
    }
    pere();
}`,
  },
  {
    type: "checkpoint",
    concept: { fr: "MAP_SHARED", en: "MAP_SHARED" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quelle option de `mmap` faut-il choisir pour que les écritures soient **partagées** entre les processus ?",
        en: "Which `mmap` option must be chosen so that writes are **shared** between processes?",
      },
      options: [
        { text: { fr: "`MAP_SHARED`", en: "`MAP_SHARED`" } },
        { text: { fr: "`MAP_PRIVATE`", en: "`MAP_PRIVATE`" } },
        { text: { fr: "`PROT_WRITE`", en: "`PROT_WRITE`" } },
      ],
      answerIndex: 0,
      solution: {
        fr: "`MAP_SHARED` partage les écritures ; `MAP_PRIVATE` ne les partage pas. `PROT_WRITE` est un droit de protection, pas une option de partage.",
        en: "`MAP_SHARED` shares writes; `MAP_PRIVATE` does not. `PROT_WRITE` is a protection right, not a sharing option.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p6",
    text: { fr: "6. Exclusion mutuelle", en: "6. Mutual exclusion" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Deux processus lisant/écrivant une variable partagée s'**entrelacent** (non-déterminisme). On protège la **section critique** (SC) par un **protocole d'entrée** `entreeSC` et un **protocole de sortie** `sortieSC`. Cadre TD4 : c'est du **pseudo-code**, pas du C compilable (`attente`, `entreeSC`, `sortieSC` n'existent dans aucune bibliothèque).",
      en: "Two processes reading/writing a shared variable **interleave** (non-determinism). The **critical section** (CS) is protected by an **entry protocol** `entreeSC` and an **exit protocol** `sortieSC`. TD4 framework: it is **pseudocode**, not compilable C (`attente`, `entreeSC`, `sortieSC` exist in no library).",
    },
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "Forme générale (TD4) : encadrer la section critique.",
      en: "General shape (TD4): framing the critical section.",
    },
    text: `entreeSC ();
    <Section Critique>
sortieSC ();`,
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Exclusion mutuelle :** au plus un processus en SC.",
          en: "**Mutual exclusion:** at most one process in the CS.",
        },
      },
      {
        text: {
          fr: "**Absence de blocage permanent :** pas d'interblocage (délai fini pour entrer si la SC est libre).",
          en: "**Absence of permanent blocking:** no deadlock (finite delay to enter if the CS is free).",
        },
      },
      {
        text: {
          fr: "**Condition de progression :** un processus hors SC et hors protocole ne doit pas bloquer les autres.",
          en: "**Progress condition:** a process outside the CS and outside the protocol must not block the others.",
        },
      },
      {
        text: {
          fr: "**Équité :** pas de famine — un processus ne doit pas attendre indéfiniment.",
          en: "**Fairness:** no starvation — a process must not wait indefinitely.",
        },
      },
    ],
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`libre` / `occ` : test puis écriture **non atomiques** → **exclusion mutuelle non garantie**.",
          en: "`libre` / `occ`: test then write are **not atomic** → **mutual exclusion not guaranteed**.",
        },
      },
      {
        text: {
          fr: "`tour` seul : **EM OK**, mais **propriété 3** violée si l'autre ne veut pas entrer.",
          en: "`tour` alone: **ME OK**, but **property 3** violated if the other does not want to enter.",
        },
      },
      {
        text: {
          fr: "`demande` seule (2.4) : **EM OK**, mais **interblocage** (propriété 2) si les deux annoncent.",
          en: "`demande` alone (2.4): **ME OK**, but **deadlock** (property 2) if both announce.",
        },
      },
      {
        text: {
          fr: "renonce (2.5) / demande + tour (2.6) : **EM OK**, mais **famine** possible (propriété 4).",
          en: "renounce (2.5) / request + turn (2.6): **ME OK**, but **starvation** possible (property 4).",
        },
      },
      {
        text: {
          fr: "**Dekker (2.7)** et **Peterson (2.8)** : les **4 propriétés** satisfaites — il reste l'**attente active**.",
          en: "**Dekker (2.7)** and **Peterson (2.8)**: all **4 properties** satisfied — **busy waiting** remains.",
        },
      },
    ],
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.2 : booléen d'occupation occ (test + écriture non atomiques).",
      en: "TD4 2.2: occupation boolean occ (non-atomic test + write).",
    },
    text: `bool occ = false;

entreeSC(i) {
    while (occ) attente;
    occ = true;
}
sortieSC(i) {
    occ = false;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.3 : chacun son tour (EM OK, propriété 3 violée).",
      en: "TD4 2.3: each in turn (ME OK, property 3 violated).",
    },
    text: `int tour = i;

entreeSC(i) {
    while (tour != i) attente;
}
sortieSC(i) {
    tour = j;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.4 : annonce de sa volonté (EM OK, interblocage).",
      en: "TD4 2.4: announcing one's will (ME OK, deadlock).",
    },
    text: `bool demande[2] = { false, false };

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) attente;
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.5 : annonce avec renonce (EM OK, famine).",
      en: "TD4 2.5: announcement with renounce (ME OK, starvation).",
    },
    text: `bool demande[2] = { false, false };

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) {
        demande[i] = false;
        attente;
        demande[i] = true;
    }
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.6 : demande + tour (EM OK, famine).",
      en: "TD4 2.6: request + turn (ME OK, starvation).",
    },
    text: `bool demande[2] = { false, false };
int tour = i;

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) {
        if (tour != i) {
            demande[i] = false;
            demande[i] = true;
        }
    }
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.7 : Dekker 1966 (si on renonce, on attend son tour avant de redemander).",
      en: "TD4 2.7: Dekker 1966 (on renouncing, wait for your turn before requesting again).",
    },
    text: `bool demande[2] = { false, false };
int tour = i;

entreeSC(i) {
    demande[i] = true;
    while (demande[j]) {
        if (tour != i) {
            demande[i] = false;
            while (tour != i) attente;
            demande[i] = true;
        }
    }
}
sortieSC(i) {
    tour = j;
    demande[i] = false;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "TD4 2.8 : Peterson 1981 (le dernier demandeur cède la place).",
      en: "TD4 2.8: Peterson 1981 (the last requester yields).",
    },
    text: `bool demande[2] = { false, false };
int dernier;

entreeSC(i) {
    demande[i] = true;
    dernier = i;
    while (demande[j] && dernier == i) attente;
}
sortieSC(i) {
    demande[i] = false;
}`,
  },
  {
    type: "code",
    lang: "pseudo-code",
    caption: {
      fr: "CM2 : Peterson généralisé à n processus (n − 1 niveaux à franchir).",
      en: "Lecture 2: Peterson generalised to n processes (n − 1 levels to clear).",
    },
    text: `int niveau[n];
int dernier[n-1];

for (int k = 0; k < n - 1; k++) {
    niveau[i] = k;
    dernier[k] = i;
    while (dernier[k] == i &&
           il existe j != i avec niveau[j] >= k)
        attente;
}
niveau[i] = -1;`,
  },
  {
    type: "checkpoint",
    concept: { fr: "La variable dernier", en: "The dernier variable" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Dans l'algorithme de Peterson, que signifie `dernier = i` après `demande[i] = true` ?",
        en: "In Peterson's algorithm, what does `dernier = i` after `demande[i] = true` mean?",
      },
      options: [
        {
          text: {
            fr: "i est le dernier à vouloir entrer : c'est à lui d'attendre, l'autre peut entrer.",
            en: "i is the last one wanting to enter: it is up to it to wait, the other may enter.",
          },
        },
        {
          text: { fr: "Le processus i entre toujours en premier.", en: "Process i always enters first." },
        },
        {
          text: { fr: "Personne ne peut plus entrer.", en: "Nobody can enter anymore." },
        },
      ],
      answerIndex: 0,
      solution: {
        fr: "`dernier = i` fait de i le dernier demandeur : `while (demande[j] && dernier == i)` bloque i, et j peut entrer.",
        en: "`dernier = i` makes i the last requester: `while (demande[j] && dernier == i)` blocks i, and j may enter.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p7",
    text: { fr: "7. Méthode d'examen", en: "7. Exam method" },
  },
  {
    type: "paragraph",
    text: {
      fr: "L'**algorithme à appliquer dans l'ordre**, quelle que soit la question. Si vous le suivez, vous ne perdez plus de points de structure.",
      en: "The **algorithm to apply in order**, whatever the question. Follow it and you stop losing structure marks.",
    },
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Lire et souligner** : qui communique avec qui ? par quel moyen (tube, FIFO, signal, mmap) ? qui attend quoi ?",
          en: "**Read and underline**: who communicates with whom? by which means (pipe, FIFO, signal, mmap)? who waits for what?",
        },
      },
      {
        text: {
          fr: "**Dessiner** le schéma des processus et des canaux : père, fils, tubes numérotés. **Un tube par sens de communication**.",
          en: "**Draw** the diagram of processes and channels: parent, children, numbered pipes. **One pipe per direction of communication**.",
        },
      },
      {
        text: {
          fr: "**Lister les primitives** dans l'ordre d'exécution : `pipe`/`mkfifo` → `fork` → `close` des extrémités inutiles → `read`/`write`/`kill`/`pause` → `wait`.",
          en: "**List the primitives** in execution order: `pipe`/`mkfifo` → `fork` → `close` the unused ends → `read`/`write`/`kill`/`pause` → `wait`.",
        },
      },
      {
        text: {
          fr: "**Écrire le squelette** en quatre fonctions : `erreur()`, `pere()`, `fils()`, `main()`. `main` ne fait que créer ; `pere` et `fils` font le travail.",
          en: "**Write the skeleton** as four functions: `erreur()`, `pere()`, `fils()`, `main()`. `main` only creates; `pere` and `fils` do the work.",
        },
      },
      {
        text: {
          fr: "**Tester mentalement le blocage** : qui lit en premier ? qui écrit ? un signal peut-il arriver trop tôt et être perdu ?",
          en: "**Mentally test the blocking**: who reads first? who writes? can a signal arrive too early and be lost?",
        },
      },
      {
        text: {
          fr: "**Vérifier** la fermeture des descripteurs et l'attente de chaque fils avant de rendre.",
          en: "**Check** that descriptors are closed and every child is waited for before handing in.",
        },
      },
    ],
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "`#include` corrects : `<unistd.h>`, `<sys/wait.h>`, `<signal.h>`, `<fcntl.h>`, `<sys/stat.h>`, `<sys/mman.h>`.",
          en: "Correct `#include`s: `<unistd.h>`, `<sys/wait.h>`, `<signal.h>`, `<fcntl.h>`, `<sys/stat.h>`, `<sys/mman.h>`.",
        },
      },
      {
        text: {
          fr: "Tester **chaque appel critique** (`== -1` → `erreur(...)`).",
          en: "Test **every critical call** (`== -1` → `erreur(...)`).",
        },
      },
      {
        text: {
          fr: "Fermer l'extrémité du tube qu'on n'utilise pas (sinon le lecteur attend une fin de fichier qui n'arrive jamais).",
          en: "Close the pipe end you do not use (otherwise the reader waits for an end of file that never comes).",
        },
      },
      {
        text: {
          fr: "Créer tubes et FIFO **avant** les `fork` ; installer `signal` **avant** `pause`.",
          en: "Create pipes and FIFO **before** the `fork`s; install `signal` **before** `pause`.",
        },
      },
      {
        text: {
          fr: "En exclusion mutuelle : **réinitialiser** la variable partagée en sortie (`occ = false`, `demande[i] = false`, `tour = j`).",
          en: "In mutual exclusion: **reset** the shared variable on exit (`occ = false`, `demande[i] = false`, `tour = j`).",
        },
      },
    ],
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Piège : confondre `occ = true` (**affectation**) et `occ == true` (**comparaison**) dans le `while`.",
          en: "Trap: confusing `occ = true` (**assignment**) and `occ == true` (**comparison**) in the `while`.",
        },
      },
      {
        text: {
          fr: "Piège : envoyer le signal **avant** que le fils n'ait fait `signal()` / `pause()` → signal **perdu** → **interblocage**.",
          en: "Trap: sending the signal **before** the child has run `signal()` / `pause()` → signal **lost** → **deadlock**.",
        },
      },
      {
        text: {
          fr: "Piège : croire qu'un `fork` contrôlé est inutile, ou qu'un `exec` crée un processus (il ne le crée pas).",
          en: "Trap: thinking a controlled `fork` is useless, or that `exec` creates a process (it does not).",
        },
      },
      {
        text: {
          fr: "Piège : croire que `MAP_SHARED` synchronise les accès (il partage seulement) ou que `MAP_PRIVATE` partage.",
          en: "Trap: thinking `MAP_SHARED` synchronises accesses (it only shares) or that `MAP_PRIVATE` shares.",
        },
      },
      {
        text: {
          fr: "Piège : oublier le mot-clé `attente` en pseudo-code, ou croire qu'on peut le compiler tel quel.",
          en: "Trap: forgetting the `attente` keyword in pseudocode, or thinking it can be compiled as is.",
        },
      },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Réflexe de fermeture", en: "Closing reflex" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Dans un tube, il faut fermer l'extrémité que l'on n'utilise pas pour que le lecteur reçoive la fin de fichier.",
        en: "In a pipe, you must close the end you do not use so that the reader receives the end-of-file.",
      },
      answer: true,
      justification: {
        fr: "Exact : `close` agit comme **fin de fichier** pour le lecteur ; un descripteur resté ouvert empêche la fin de fichier.",
        en: "Correct: `close` acts as **end of file** for the reader; a descriptor left open prevents the end-of-file.",
      },
    },
  },
];
