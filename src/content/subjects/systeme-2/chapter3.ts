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
      fr: "Installer un gestionnaire, puis le retirer avec SIG_DFL.",
      en: "Install a handler, then remove it with SIG_DFL.",
    },
    text: `#include <signal.h>
#include <stdio.h>
#include <unistd.h>

void handler(int sig) {
    printf("Signal %d recu\\n", sig);
}

int main(void) {
    signal(SIGINT, handler);     /* capturer Ctrl-C          */
    signal(SIGTERM, SIG_IGN);    /* ignorer la demande d'arret */
    while (1) pause();           /* attendre un signal         */
    return 0;
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
      fr: "Compteur de signaux robuste : on test/décrémente dans une section protégée.",
      en: "Robust signal counter: test/decrement inside a protected section.",
    },
    text: `volatile sig_atomic_t recus = 0;

void handler(int sig) { (void) sig; recus++; }

int main(void) {
    signal(SIGUSR1, handler);
    sigset_t vide;
    sigemptyset(&vide);
    while (recus == 0) sigsuspend(&vide);  /* atomique */
    printf("recu !\\n");
    return 0;
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
      fr: "**Question type :** « Écrire un programme qui capture SIGINT et affiche un message, puis continue. »",
      en: "**Typical question:** “Write a program that catches SIGINT, prints a message, then continues.”",
    },
  },
  {
    type: "code",
    lang: "c",
    text: `void handler(int sig) {
    (void) sig;                 /* marquer le parametre utilise */
    write(STDOUT_FILENO, "capture !\\n", 10);
}

int main(void) {
    struct sigaction action;
    action.sa_handler = handler;       /* ou signal(SIGINT, handler) */
    sigemptyset(&action.sa_mask);      /* aucun signal bloque pendant le handler */
    action.sa_flags = 0;               /* SA_RESTART pour relancer les appels interrompus */

    if (sigaction(SIGINT, &action, NULL) == -1) {
        perror("sigaction");
        return 1;
    }
    while (1) pause();                 /* attendre les signaux */
    return 0;
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
