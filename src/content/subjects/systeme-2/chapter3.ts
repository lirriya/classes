import type { Block } from "../../types";

export const chapterThree: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Un signal est une **notification asynchrone** envoyée à un processus : le noyau interrompt son déroulement normal pour lui faire exécuter une fonction particulière. C'est le mécanisme d'interruption logicielle du système Unix.",
      en: "A signal is an **asynchronous notification** sent to a process: the kernel interrupts its normal flow to make it run a particular function. It is Unix's software interrupt mechanism.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    text: { fr: "1. Notion de signal", en: "1. The notion of a signal" },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Analogie :** le signal est un **coup de sonnette**. Le facteur (le noyau ou un autre processus) appuie sur le bouton ; le processus interrompt ce qu'il fait, va ouvrir (exécute son **gestionnaire**), puis reprend là où il s'était arrêté. S'il n'y a personne (aucun gestionnaire), le comportement par défaut s'applique : souvent, terminer le processus.",
      en: "**Analogy:** a signal is a **doorbell**. The mail carrier (the kernel or another process) presses the button; the process interrupts what it is doing, goes to open the door (runs its **handler**), then resumes where it left off. If nobody is home (no handler), the default behaviour applies: often, terminate the process.",
    },
  },
  {
    type: "diagram",
    diagrams: [
      {
        id: "signal-flow",
        caption: {
          fr: "Le noyau délivre le signal au processus ; le gestionnaire s'exécute puis le déroulement reprend.",
          en: "The kernel delivers the signal to the process; the handler runs, then execution resumes.",
        },
        nodes: [
          { id: "src", label: { fr: "Source (noyau / kill)", en: "Source (kernel / kill)" }, x: 0, y: 0, shape: "box", tone: "soft" },
          { id: "proc", label: { fr: "Processus", en: "Process" }, x: 210, y: 0, shape: "circle", tone: "primary" },
          { id: "handler", label: { fr: "Gestionnaire", en: "Handler" }, x: 400, y: -90, shape: "box" },
          { id: "resume", label: { fr: "Reprise", en: "Resume" }, x: 400, y: 40, shape: "box" },
        ],
        edges: [
          { from: "src", to: "proc", label: "signal(sig)" },
          { from: "proc", to: "handler", label: { fr: "délivrance", en: "delivery" }, dashed: true },
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
          fr: "**Signal :** entier symbolique (ex. `SIGINT`). Envoyé par le noyau (E/S, faute) ou par un processus (`kill`).",
          en: "**Signal:** symbolic integer (e.g. `SIGINT`). Sent by the kernel (I/O, fault) or by a process (`kill`).",
        },
      },
      {
        text: {
          fr: "Le processus peut **ignorer**, **capturer** (gestionnaire) ou subir le **comportement par défaut**. `SIGKILL` et `SIGSTOP` **ne peuvent pas** être capturés ni ignorés.",
          en: "A process may **ignore**, **catch** (handler) or suffer the **default behaviour**. `SIGKILL` and `SIGSTOP` **cannot** be caught or ignored.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Quelques signaux classiques", en: "A few classic signals" },
  },
  {
    type: "list",
    items: [
      { text: { fr: "`SIGINT` (2) — interruption clavier (Ctrl-C).", en: "`SIGINT` (2) — keyboard interrupt (Ctrl-C)." } },
      { text: { fr: "`SIGKILL` (9) — terminaison forcée, non capturable.", en: "`SIGKILL` (9) — forced termination, cannot be caught." } },
      { text: { fr: "`SIGTERM` (15) — demande de terminaison « propre ».", en: "`SIGTERM` (15) — request for “clean” termination." } },
      { text: { fr: "`SIGSEGV` (11) — défaut de segmentation (accès mémoire illégal).", en: "`SIGSEGV` (11) — segmentation fault (illegal memory access)." } },
      { text: { fr: "`SIGPIPE` (13) — écriture dans un tube sans lecteur.", en: "`SIGPIPE` (13) — write to a pipe with no reader." } },
      { text: { fr: "`SIGCHLD` (17) — un fils s'est terminé ou arrêté.", en: "`SIGCHLD` (17) — a child has terminated or stopped." } },
      { text: { fr: "`SIGALRM` (14) — expiration d'une alarme (`alarm()`).", en: "`SIGALRM` (14) — an alarm has expired (`alarm()`)." } },
      { text: { fr: "`SIGUSR1`, `SIGUSR2` — signaux libres pour l'application.", en: "`SIGUSR1`, `SIGUSR2` — free signals for the application." } },
    ],
  },
  {
    type: "checkpoint",
    concept: { fr: "Signaux non capturables", en: "Uncatchable signals" },
    exercise: {
      kind: "mcq",
      prompt: {
        fr: "Quels signaux ne peuvent **jamais** être ni capturés, ni ignorés ?",
        en: "Which signals can **never** be caught or ignored?",
      },
      options: [
        { text: { fr: "SIGINT et SIGTERM", en: "SIGINT and SIGTERM" } },
        { text: { fr: "SIGKILL et SIGSTOP", en: "SIGKILL and SIGSTOP" } },
        { text: { fr: "SIGCHLD et SIGALRM", en: "SIGCHLD and SIGALRM" } },
      ],
      answerIndex: 1,
      solution: {
        fr: "`SIGKILL` et `SIGSTOP` sont les deux seuls signaux que l'on ne peut pas intercepter : ils garantissent au noyau un moyen toujours disponible d'arrêter ou de suspendre un processus récalcitrant.",
        en: "`SIGKILL` and `SIGSTOP` are the only two signals that cannot be intercepted: they guarantee the kernel an always-available means to stop or suspend a misbehaving process.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "2. Installer un gestionnaire : signal()", en: "2. Installing a handler: signal()" },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : installer un gestionnaire, puis en ignorer un autre.",
      en: "Complete program: install a handler, then ignore another.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

void handler(int sig) {
    printf("Signal %d recu\\n", sig);
}

int main(void) {
    if (signal(SIGINT, handler) == SIG_ERR)    /* capturer Ctrl-C            */
        error("signal");
    if (signal(SIGTERM, SIG_IGN) == SIG_ERR)   /* ignorer la demande d'arret */
        error("signal");

    while (1)
        pause();                               /* attendre un signal         */
    return EXIT_SUCCESS;
}`,
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "**`signal(int signum, handler)`** associe `handler` au signal. Valeurs spéciales : `SIG_DFL` (défaut) et `SIG_IGN` (ignorer).",
          en: "**`signal(int signum, handler)`** binds `handler` to the signal. Special values: `SIG_DFL` (default) and `SIG_IGN` (ignore).",
        },
      },
      {
        text: {
          fr: "**`void (*)(int)`** : un gestionnaire reçoit le numéro du signal en argument.",
          en: "**`void (*)(int)`**: a handler receives the signal number as its argument.",
        },
      },
      {
        text: {
          fr: "**`int kill(pid_t pid, int sig)`** : envoie `sig` à `pid`. `raise(sig)` s'envoie un signal à soi-même.",
          en: "**`int kill(pid_t pid, int sig)`**: sends `sig` to `pid`. `raise(sig)` sends a signal to oneself.",
        },
      },
      {
        text: {
          fr: "**`int pause(void)`** : endort le processus jusqu'à la réception d'un signal.",
          en: "**`int pause(void)`**: puts the process to sleep until a signal is received.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Héritage et masquage", en: "Inheritance and masking" },
  },
  {
    type: "list",
    items: [
      {
        text: {
          fr: "Après un `fork`, le fils **hérite** des gestionnaires installés et du masque de signaux.",
          en: "After a `fork`, the child **inherits** the installed handlers and the signal mask.",
        },
      },
      {
        text: {
          fr: "Après un `exec`, les gestionnaires sont **réinitialisés à `SIG_DFL`** (le nouveau programme ne sait pas les gérer), mais le masque est conservé.",
          en: "After an `exec`, handlers are **reset to `SIG_DFL`** (the new program does not know how to handle them), but the mask is kept.",
        },
      },
      {
        text: {
          fr: "Le **masque** (`sigprocmask`) bloque temporairement un signal : il est **mis en attente** et délivré dès qu'on le débloque.",
          en: "The **mask** (`sigprocmask`) temporarily blocks a signal: it is **held pending** and delivered as soon as it is unblocked.",
        },
      },
    ],
  },
  {
    type: "heading",
    level: 3,
    text: { fr: "3. Les signaux ne sont pas « empilés »", en: "3. Signals are not “stacked”" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Un signal standard envoyé **plusieurs fois avant d'être traité** n'est délivré **qu'une seule fois** : les signaux ne sont pas mis en file d'attente (à l'exception de certains signaux temps réel et de `SIGCHLD`, qui peut être compté).",
      en: "A standard signal sent **several times before being handled** is delivered **only once**: signals are not queued (except some real-time signals and `SIGCHLD`, which can be counted).",
    },
  },
  {
    type: "heading",
    level: 4,
    text: { fr: "Piège classique — l'interblocage par signal perdu", en: "Classic trap — deadlock from a lost signal" },
  },
  {
    type: "paragraph",
    text: {
      fr: "Scénario : le père teste une condition (`if (!pret)`) puis appelle `pause()`. Si un signal (`SIGCHLD`, `SIGUSR1`) arrive **entre** le test et le `pause`, il est traité immédiatement… puis le `pause` attend un signal qui ne reviendra jamais : **blocage définitif**. C'est le classique **deep sleep**.",
      en: "Scenario: the parent tests a condition (`if (!ready)`) then calls `pause()`. If a signal (`SIGCHLD`, `SIGUSR1`) arrives **between** the test and the `pause`, it is handled immediately… then the `pause` waits for a signal that will never come back: **permanent block**. This is the classic **deep sleep**.",
    },
  },
  {
    type: "paragraph",
    text: {
      fr: "**Solution :** bloquer le signal avec `sigprocmask`, tester l'état, puis attendre atomiquement avec `sigsuspend(&mask)`. On combine ainsi le test et l'attente en une seule opération indivisible.",
      en: "**Solution:** block the signal with `sigprocmask`, test the state, then wait atomically with `sigsuspend(&mask)`. This combines the test and the wait into a single indivisible operation.",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Compteur de signaux robuste (pour aller plus loin) : test et attente atomiques.",
      en: "Robust signal counter (going further): atomic test and wait.",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

volatile sig_atomic_t recus = 0;

void handler(int sig) {
    (void) sig;
    recus++;
}

int main(void) {
    sigset_t vide;

    if (signal(SIGUSR1, handler) == SIG_ERR)
        error("signal");
    if (sigemptyset(&vide) == -1)
        error("sigemptyset");

    while (recus == 0)
        sigsuspend(&vide);              /* test + attente atomiques */

    printf("recu !\\n");
    return EXIT_SUCCESS;
}`,
  },
  {
    type: "trace",
    spec: {
      id: "signal-trace",
      caption: {
        fr: "Le déroulé « signal perdu » : le signal arrive juste avant le pause.",
        en: "The “lost signal” walkthrough: the signal arrives just before the pause.",
      },
      events: [
        {
          label: { fr: "Le père teste : « pas encore prêt »", en: "The parent tests: “not ready yet”" },
        },
        {
          label: { fr: "SIGCHLD arrive maintenant", en: "SIGCHLD arrives now" },
          detail: { fr: "Il est traité aussitôt : l'état devient prêt.", en: "It is handled at once: the state becomes ready." },
        },
        {
          label: { fr: "Le père appelle `pause()`", en: "The parent calls `pause()`" },
          detail: { fr: "Il dort en attendant un prochain signal.", en: "It sleeps awaiting a next signal." },
        },
        {
          label: { fr: "Aucun autre signal ne viendra", en: "No other signal will come" },
          detail: { fr: "Blocage définitif : le réveil a été perdu.", en: "Permanent block: the wake-up was lost." },
        },
      ],
    },
  },
  {
    type: "checkpoint",
    concept: { fr: "Signaux non mis en file", en: "Signals are not queued" },
    exercise: {
      kind: "trueFalse",
      prompt: {
        fr: "Si l'on envoie 3 fois SIGUSR1 à un processus avant qu'il ne soit traité, le gestionnaire s'exécute 3 fois.",
        en: "If SIGUSR1 is sent 3 times to a process before it is handled, the handler runs 3 times.",
      },
      answer: false,
      justification: {
        fr: "Un signal standard **non mis en file** : les trois envois fusionnent en **un seul** traitement. Pour ne rien perdre, le gestionnaire doit incrémenter un compteur et l'appelant boucler, ou utiliser `sigaction` avec `SA_SIGINFO` et des signaux temps réel.",
        en: "A standard signal is **not queued**: the three sends merge into **a single** handling. To lose nothing, the handler must increment a counter and the caller loop, or use `sigaction` with `SA_SIGINFO` and real-time signals.",
      },
    },
  },
  {
    type: "heading",
    level: 3,
    variant: "exercise",
    text: { fr: "Exercices", en: "Exercises" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "SIGCHLD et wait", en: "SIGCHLD and wait" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Pourquoi associer `SIGCHLD` à `wait` dans le père est-il une bonne pratique ?",
              en: "Why is binding `SIGCHLD` to `wait` in the parent good practice?",
            },
            options: [
              {
                text: { fr: "Pour empêcher le fils de devenir orphelin.", en: "To prevent the child from becoming an orphan." },
              },
              {
                text: {
                  fr: "Pour récupérer les fils terminés et éviter l'accumulation de zombies.",
                  en: "To reap finished children and avoid accumulating zombies.",
                },
              },
              {
                text: { fr: "Pour envoyer un signal au fils.", en: "To send a signal to the child." },
              },
            ],
            answerIndex: 1,
            solution: {
              fr: "Quand un fils se termine, le noyau envoie `SIGCHLD`. Le gestionnaire appelle `wait` (souvent en boucle `while (waitpid(-1, NULL, WNOHANG) > 0)`) pour **récolter** le code de sortie et libérer la table des processus : plus de zombies.",
              en: "When a child finishes, the kernel sends `SIGCHLD`. The handler calls `wait` (often in a loop `while (waitpid(-1, NULL, WNOHANG) > 0)`) to **reap** the exit code and free the process table entry: no more zombies.",
            },
          },
        ],
      },
      {
        title: { fr: "Rédaction — éviter le signal perdu", en: "Writing — avoiding the lost signal" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Un processus doit attendre un signal pouvant survenir à tout instant. Expliquez pourquoi une attente naïve `if (...) pause();` peut bloquer, et donnez le remède.",
              en: "A process must wait for a signal that may occur at any moment. Explain why a naive `if (...) pause();` wait can block, and give the remedy.",
            },
            solution: {
              fr: "Si le signal arrive **entre** le test et `pause`, il est consommé avant l'endormissement : `pause` attend alors un signal perdu → blocage définitif. Remède : bloquer le signal (`sigprocmask`), faire le test, puis `sigsuspend(&mask)` qui **débloque et endort atomiquement**. Le signal en attente est délivré pendant l'appel, sans fenêtre de perte.",
              en: "If the signal arrives **between** the test and `pause`, it is consumed before sleeping: `pause` then waits for a lost signal → permanent block. Remedy: block the signal (`sigprocmask`), do the test, then `sigsuspend(&mask)`, which **unblocks and sleeps atomically**. The pending signal is delivered during the call, with no loss window.",
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
    },
  },
  {
    type: "quote",
    text: {
      fr: "**Question type :** « Le père envoie un signal à son fils ; le fils l'intercepte, l'affiche et se termine. »",
      en: "**Typical question:** “The parent sends a signal to its child; the child catches it, prints it and exits.”",
    },
  },
  {
    type: "code",
    lang: "c",
    caption: {
      fr: "Programme complet : error(), deroute(), fils() (gestionnaire + pause) et pere() (kill).",
      en: "Complete program: error(), deroute(), fils() (handler + pause) and pere() (kill).",
    },
    text: `#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <string.h>
#include <sys/wait.h>

void error(const char *message) {
    perror(message);
    exit(EXIT_FAILURE);
}

/* Fonction de deroutement : executee a la reception du signal. */
void deroute(int sig) {
    printf("Fils : signal %d (%s) recu\\n", sig, strsignal(sig));
}

/* fils : installe le gestionnaire puis attend le signal. */
void fils(void) {
    if (signal(SIGUSR1, deroute) == SIG_ERR)
        error("signal");
    pause();                            /* endormi jusqu'au signal */
}

/* pere : laisse au fils le temps de s'installer, puis envoie le signal. */
void pere(pid_t pid) {
    sleep(1);                           /* evite une course avec signal() */
    if (kill(pid, SIGUSR1) == -1)
        error("kill");
    if (wait(NULL) == -1)
        error("wait");
}

int main(void) {
    pid_t pid = fork();
    if (pid == -1)
        error("fork");

    if (pid == 0) {
        fils();
        exit(EXIT_SUCCESS);
    }

    pere(pid);
    return EXIT_SUCCESS;
}`,
  },
  {
    type: "list",
    ordered: true,
    items: [
      {
        text: {
          fr: "**Déclarer** la fonction gestionnaire `void handler(int sig)` avant `main`.",
          en: "**Declare** the handler function `void handler(int sig)` before `main`.",
        },
      },
      {
        text: {
          fr: "**Installer** le gestionnaire : `signal` (simple) ou `sigaction` (préféré, plus portable et plus sûr).",
          en: "**Install** the handler: `signal` (simple) or `sigaction` (preferred, more portable and safer).",
        },
      },
      {
        text: {
          fr: "**Attendre** : boucle avec `pause()` ou `sigsuspend()` (jamais un test suivi d'un `pause` nu).",
          en: "**Wait**: loop with `pause()` or `sigsuspend()` (never a test followed by a bare `pause`).",
        },
      },
      {
        text: {
          fr: "**Dans le handler :** uniquement des opérations **async-signal-safe**. Éviter `printf` ; préférer `write` ; manipuler des `volatile sig_atomic_t`.",
          en: "**In the handler:** only **async-signal-safe** operations. Avoid `printf`; prefer `write`; manipulate `volatile sig_atomic_t`.",
        },
      },
    ],
  },
];
