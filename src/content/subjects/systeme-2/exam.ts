import type { Block } from "../../types";

export const examBlancs: Block[] = [
  {
    type: "paragraph",
    text: {
      fr: "Trois blancs construits exclusivement à partir des questions des fiches TD, suivis d'un contrôle de compréhension (QCM / vrai-faux). Chronométrez-vous : un blanc partiel (processus & tubes anonymes, signaux & tubes nommés, exclusion mutuelle) se traite en 20–30 minutes.",
      en: "Three mock papers built exclusively from the TD questions, followed by a comprehension check (MCQ / true-or-false). Time yourself: a partial paper (processes & anonymous pipes, signals & named pipes, mutual exclusion) takes 20–30 minutes.",
    },
  },
  { type: "rule" },
  {
    type: "heading",
    level: 3,
    variant: "part",
    id: "p1",
    text: {
      fr: "Blanc N°1 — Processus & tubes anonymes",
      en: "Mock Exam N°1 — Processes & anonymous pipes",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Exercice 1 — Création de processus", en: "Exercise 1 — Process creation" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrivez un programme en langage C qui crée un processus fils, un processus petit-fils et un processus arrière petit-fils. Chaque processus imprime son pid et termine son exécution.",
              en: "Write a C program that creates a child process, a grandchild process and a great-grandchild process. Each process prints its pid and terminates.",
            },
            solution: {
              fr: "Attendu : un fork() pour obtenir le fils, dans le cas fils un deuxième fork() pour le petit-fils, dans le cas petit-fils un troisième fork() pour l'arrière petit-fils. Chaque branche appelle printf(getpid()) puis exit(0). Utiliser le schéma switch(pid = fork()) avec case -1, case 0 et le père dans le défaut.",
              en: "Expected: one fork() to get the child; in the child case, a second fork() for the grandchild; in the grandchild case, a third fork() for the great-grandchild. Each branch should print its getpid() then exit(0). Use switch(pid = fork()) with case -1, case 0, and the parent in the default branch.",
            },
          },
        ],
      },
      {
        title: { fr: "Exercice 2 — Simulation de commandes", en: "Exercise 2 — Command simulation" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrivez un programme en langage C qui simule chacune des commandes suivantes :\n1. ps -e | grep $1\n2. ps -e | grep $1 | sort -rn\n(indiquer les deux cas ou les décrire séparément)",
              en: "Write a C program to simulate the following commands:\n1. ps -e | grep $1\n2. ps -e | grep $1 | sort -rn\n(Describe both cases separately).",
            },
            solution: {
              fr: "Utiliser des tubes anonymes et fork()/exec. Pour (1) : créer un tube pfd entre père et fils (ou entre deux fils) ; le fils exécute 'ps -e' en redirigeant sa sortie vers l'entrée du tube (dup), le père exécute 'grep $1' en redirigeant son entrée vers la sortie du tube. Pour (2) : chaîner deux tubes pour relier ps -e → grep → sort -rn, avec dup sur les descripteurs appropriés et fermeture des extrémités inutiles.",
              en: "Use anonymous pipes with fork()/exec. For (1): create a pipe pfd between processes; the child executes 'ps -e' redirecting stdout to the pipe write end (dup), the parent executes 'grep $1' redirecting stdin to the pipe read end. For (2): chain two pipes to connect ps -e → grep → sort -rn, using dup on appropriate descriptors and closing unused ends.",
            },
          },
        ],
      },
      {
        title: { fr: "Exercice 3 — Père et deux fils", en: "Exercise 3 — Father and two sons" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrivez un programme en langage C qui lit des caractères depuis l'entrée (un caractère par ligne), jusqu'à rencontrer le caractère * (fin). Il envoie chaque lettre au premier fils et chaque chiffre au second fils. Le premier fils compte le nombre de chaque lettre reçue et retourne son résultat au père. Le second fils calcule la somme des chiffres reçus et retourne son résultat au père. Le père imprime les résultats.",
              en: "Write a C program that reads characters from stdin (one per line) until it encounters '*' (end). It sends each letter to the first son and each digit to the second son. The first son counts how many of each letter it receives and returns the result to the father. The second son computes the sum of the digits received and returns the result to the father. The father prints the results.",
            },
            solution: {
              fr: "Crée deux tubes anonymes (un vers chaque fils). Créer deux fils par fork(). Le père lit les caractères (un par ligne) et écrit dans le tube approprié selon qu'il s'agit d'une lettre ou d'un chiffre ; quand il voit '*', il ferme les tubes et attend les fils. Chaque fils lit depuis son tube, calcule son résultat (comptage par lettre / somme des chiffres), l'écrit dans un tube retour (ou le communique) vers le père, puis exit(0). Le père lit les résultats et les imprime.",
              en: "Create two anonymous pipes (one to each son). Fork twice to create two children. The father reads characters (one per line) and writes into the appropriate pipe depending on whether it is a letter or a digit; on seeing '*', it closes pipes and waits for children. Each child reads from its pipe, computes its result (letter counts / sum of digits), sends it back to the father (via another pipe or suitable channel), then exit(0). The father reads the results and prints them.",
            },
          },
        ],
      },
      {
        title: { fr: "Exercice 4 — Père et N fils", en: "Exercise 4 — Father and N sons" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Question 1. Écrivez un programme en langage C où le père initialise N tubes anonymes et crée N fils d'identifiants 0, 1, ..., N-1. Chaque fils envoie son propre identifiant à son père en utilisant son propre tube. Le père imprime les messages reçus par ses fils.\nQuestion 2. Est-il possible d'utiliser un seul tube pour faire cette communication ? Si oui, donner le code en C. Sinon, expliquer pourquoi.",
              en: "Question 1. Write a C program where the father initializes N anonymous pipes and creates N sons with identifiers 0, 1, ..., N-1. Each son sends its own identifier to the father using its own pipe. The father prints the messages received from its sons.\nQuestion 2. Is it possible to use a single pipe for this communication? If yes, give the C code. If no, explain why.",
            },
            solution: {
              fr: "Q1 : créer un tableau de N tubes pfd[i][2]. Pour chaque i, fork() pour créer le fils i. Le fils i ferme l'extrémité de lecture de son tube, écrit la valeur i dans pfd[i][1], ferme l'écriture, exit(0). Le père ferme toutes les extrémités d'écriture, puis lit depuis chaque tube pfd[i][0] et imprime la valeur reçue, enfin attend tous les fils. Q2 : un seul tube suffit si chaque fils écrit un entier dans ce tube (écriture d'entiers atomique dans la taille concernée ou simplement écrits distincts) et que le père lit N valeurs dans l'ordre d'arrivée ; chaque fils écrit son identifiant unique dans le même tube et le père les lit tous. Exemple avec un seul pipe : tous les fils partagent le même pfd[0], pfd[1], chacun fait close(pfd[0]) puis write(pfd[1], &id, sizeof(int)), le père close(pfd[1]) et lit N fois pfd[0].",
              en: "Q1: create an array of N pipes pfd[i][2]. For each i, fork() to create son i. Son i closes the read end of its pipe, writes value i to pfd[i][1], closes write end, exits(0). The father closes all write ends, reads from each pfd[i][0] and prints the received values, then waits for all children. Q2: a single pipe is sufficient if each son writes an integer into the same pipe and the father reads N values in arrival order; each writes its unique id into the shared pipe. With one pipe, all children share pfd[0], pfd[1]; each does close(pfd[0]) then write(pfd[1], &id, sizeof(int)); the father does close(pfd[1]) and reads N times from pfd[0].",
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
      fr: "Blanc N°2 — Signaux & tubes nommés",
      en: "Mock Exam N°2 — Signals & named pipes",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Question 1 — Signaux et équation du second degré", en: "Question 1 — Signals and quadratic equation" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrivez en langage C un programme qui résout une équation du second degré de la façon suivante : les coefficients sont passés en arguments. Le père calcule le discriminant. Si le discriminant est strictement négatif, le père envoie le signal SIGUSR1 à son fils ; le fils notifie à l'écran qu'il a bien reçu ce signal et se termine. Si le discriminant est positif, le fils récupère les coefficients envoyés par le père grâce à un tube anonyme et affiche les racines de l'équation.",
              en: "Write a C program that solves a quadratic equation as follows: coefficients are given as arguments. The father computes the discriminant. If the discriminant is strictly negative, the father sends SIGUSR1 to his son; the son prints that it received the signal and terminates. If the discriminant is positive, the son retrieves the coefficients sent by the father through an anonymous pipe and displays the roots of the equation.",
            },
            solution: {
              fr: "Créer un tube anonyme avant fork(). Définir un gestionnaire deroute(int sig) pour SIGUSR1 (affichage du message). Le père calcule discriminant D. Si D < 0 : il appelle kill(pid_fils, SIGUSR1). Si D >= 0 : il écrit les trois coefficients dans le tube vers le fils. Le fils : enregistre le gestionnaire pour SIGUSR1, puis selon le cas attend un signal (pause()) ou lit les coefficients depuis le tube et calcule/affiche les racines. Utiliser l'aide erreur(char *message) avec fprintf(stderr, \"Erreur: %s\\n\", message); exit(1).",
              en: "Create an anonymous pipe before fork(). Define a handler deroute(int sig) for SIGUSR1 (print a message). The father computes discriminant D. If D < 0: call kill(pid_son, SIGUSR1). If D >= 0: write the three coefficients into the pipe to the son. The son: register the handler for SIGUSR1, then either wait for a signal (pause()) or read coefficients from the pipe and compute/display roots. Use the helper erreur(char *message) with fprintf(stderr, \"Erreur: %s\\n\", message); exit(1).",
            },
          },
        ],
      },
      {
        title: { fr: "Question 2 — Tubes nommés", en: "Question 2 — Named pipes" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Écrire en langage C les programmes nécessaires pour réaliser ce qui suit. Le programme fifo.c doit créer un tube nommé. Le père ouvre en écriture ce tube nommé et y envoie le pid de son fils. Le fils doit attendre un signal SIGUSR1, afficher qu'il l'a bien reçu et se terminer. Le programme fifo2.c, qui a reçu par le tube nommé le pid, doit l'envoyer à son fils au travers d'un nouveau tube anonyme cette fois. Le fils enverra alors un signal SIGUSR1 au processus dont le numéro est ce pid.",
              en: "Write in C the programs needed to do the following. Program fifo.c must create a named pipe. The father opens this named pipe for writing and sends his son's pid into it. The son must wait for signal SIGUSR1, display that it received it, and terminate. Program fifo2.c, which received that pid through the named pipe, must send it to its own son through a new anonymous pipe this time. That son will then send signal SIGUSR1 to the process whose number is that pid.",
            },
            solution: {
              fr: "fifo.c : créer le tube nommé avec mkfifo(nom, mode) (#include <sys/stat.h>). Fork() pour obtenir un fils. Le fils enregistre un gestionnaire pour SIGUSR1 et fait pause() ; à réception il affiche un message et exit(0). Le père ouvre le tube nommé en écriture (open avec O_WRONLY), écrit le pid du fils dans ce tube, ferme le tube, attend le fils. fifo2.c : ouvre le même tube nommé en lecture (O_RDONLY), lit un entier (pid) depuis ce tube, ferme puis remove(nom). Créer un tube anonyme, fork(). Le père écrit ce pid dans le tube anonyme vers son fils et attend. Le fils lit le pid depuis le tube anonyme, envoie kill(pid, SIGUSR1) à ce processus, puis exit(0).",
              en: "fifo.c: create a named pipe with mkfifo(name, mode) (#include <sys/stat.h>). Fork() to get a son. The son registers a handler for SIGUSR1 and does pause(); upon receiving it prints a message and exits(0). The father opens the named pipe for writing (O_WRONLY), writes the son's pid into it, closes the pipe, waits for the son. fifo2.c: open the same named pipe for reading (O_RDONLY), read an integer (pid) from it, close it then remove(name). Create an anonymous pipe, fork(). The father writes that pid into the anonymous pipe to its son and waits. The son reads the pid from the anonymous pipe, sends kill(pid, SIGUSR1) to that process, then exits(0).",
            },
          },
        ],
      },
      {
        title: { fr: "Question 3 — Comportement d'open sur FIFO", en: "Question 3 — open behavior on FIFO" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Deux processus font respectivement open(f, O_RDONLY) et open(f, O_WRONLY) sur un même tube nommé, sans O_NONBLOCK. Que se passe-t-il ?",
              en: "Two processes call open(f, O_RDONLY) and open(f, O_WRONLY) respectively on the same named pipe, without O_NONBLOCK. What happens?",
            },
            options: [
              { text: { fr: "Les deux open échouent.", en: "Both opens fail." } },
              {
                text: {
                  fr: "Les deux open réussissent dès que l'autre extrémité est ouverte.",
                  en: "Both opens succeed as soon as the other end is opened.",
                },
              },
              { text: { fr: "Seul le lecteur réussit.", en: "Only the reader succeeds." } },
            ],
            answerIndex: 1,
            solution: {
              fr: "L'ouverture bloquante sur un FIFO réalise un rendez-vous : le premier appel attend l'ouverture de l'autre extrémité. Dès que les deux extrémités sont ouvertes, les deux appels renvoient un descripteur.",
              en: "Blocking open on a FIFO acts as a rendezvous: the first call waits for the other end to be opened. Once both ends are open, both calls return a descriptor.",
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
    id: "p3",
    text: {
      fr: "Blanc N°3 — Exclusion mutuelle",
      en: "Mock Exam N°3 — Mutual exclusion",
    },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Question 1 — Problème de i++", en: "Question 1 — The i++ problem" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Donnez le code pseudo-assembleur de l'instruction i++. Montrez un scénario d'entrelacement qui donne un résultat inconsistant lorsque deux processeurs exécutent i++ en parallèle. Expliquez ce qu'est une section critique et proposez la forme générale : entreeSC(); <Section Critique>; sortieSC();",
              en: "Give the pseudo-assembly code for instruction i++. Show an interleaving scenario that produces an inconsistent result when two processors execute i++ in parallel. Explain what a critical section is and give the general form: entreeSC(); <Section Critique>; sortieSC();",
            },
            solution: {
              fr: "Pseudo-assembleur typique : charger i dans un registre, incrémenter le registre, stocker le résultat dans i. Scénario d'entrelacement : P1 charge i (val 5), P2 charge i (val 5), P1 incrémente et stocke (6), P2 incrémente et stocke (6) au lieu de 7. Section critique : partie du programme dont l'exécution ne doit pas s'entrelacer avec d'autres exécutions sur les mêmes données (atomicité). Forme : entreeSC(); <Section Critique>; sortieSC(); où entreeSC() contrôle l'accès, sortieSC() le libère.",
              en: "Typical pseudo-assembly: load i into a register, increment the register, store the result back to i. Interleaving example: P1 loads i (value 5), P2 loads i (value 5), P1 increments and stores (6), P2 increments and stores (6) instead of 7. Critical section: a part of code whose execution must not interleave with other executions on the same shared data (atomicity). Form: entreeSC(); <Section Critique>; sortieSC(); where entreeSC() controls access and sortieSC() releases it.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 2 — Booléen d'occupation", en: "Question 2 — Occupation flag" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "On utilise un booléen occ. Écrivez entreeSC() et sortieSC() pour deux processeurs i et j. Cette solution assure-t-elle l'exclusion mutuelle ? Justifiez.",
              en: "Using a boolean occ, write entreeSC() and sortieSC() for two processors i and j. Does this solution ensure mutual exclusion? Justify.",
            },
            solution: {
              fr: "Structure : occ initialisé à false. entreeSC() : while (occ) attente; occ = true; sortieSC() : occ = false. Cette solution ne garantit pas l'exclusion mutuelle (problème d'entrelacement entre le test while et l'affectation occ = true : les deux processeurs peuvent lire occ == false puis passer ensemble en section critique).",
              en: "Structure: occ initialized to false. entreeSC(): while (occ) wait; occ = true; sortieSC(): occ = false. This does not guarantee mutual exclusion (interleaving between the while test and the assignment occ = true: both processors can read occ == false and enter the critical section together).",
            },
          },
        ],
      },
      {
        title: { fr: "Question 3 — Chacun son tour", en: "Question 3 — Taking turns" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Avec une variable tour indiquant qui doit entrer (tour = i ou j), écrivez entreeSC() et sortieSC(). Cette solution assure-t-elle l'exclusion mutuelle ? Quels problèmes présente-t-elle ?",
              en: "With a variable tour indicating whose turn it is (tour = i or j), write entreeSC() and sortieSC(). Does this ensure mutual exclusion? What problems does it have?",
            },
            solution: {
              fr: "Pour le processeur i : entreeSC() : while (tour != i) attente; sortieSC() : tour = j. Symétrique pour j. Exclusion mutuelle : OK (un seul peut passer quand tour correspond). Problème : rigidité (alternance stricte) — si j ne veut pas entrer, i ne peut pas ré-entrer alors que la section critique est libre (propriété de progression non respectée).",
              en: "For processor i: entreeSC(): while (tour != i) wait; sortieSC(): tour = j. Symmetric for j. Mutual exclusion: OK (only the one whose turn it is may enter). Problem: strict alternation — if j does not want to enter, i cannot re-enter even though the critical section is free (progress condition is violated).",
            },
          },
        ],
      },
      {
        title: { fr: "Question 4 — Annonce de sa volonté", en: "Question 4 — Announcing intention" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "On utilise un tableau demande[2] (demande[i]=true si i veut entrer). Écrivez entreeSC() et sortieSC(). Cette solution assure-t-elle l'exclusion mutuelle ? Quels problèmes ?",
              en: "Using an array demande[2] (demande[i]=true if i wants to enter), write entreeSC() and sortieSC(). Does this ensure mutual exclusion? What problems?",
            },
            solution: {
              fr: "i : demande[i] = true; while (demande[j]) attente; <SC>; demande[i] = false. Symétrique pour j. L'exclusion mutuelle est garantie : i n'entre que si demande[j] est faux, et son annonce reste posée pendant qu'il est en SC, ce qui bloque j. Autre problème : si les deux annoncent leur volonté en même temps, chacun attend que l'autre renonce — attente mutuelle infinie (interblocage) : la propriété « absence de blocage permanent » est violée.",
              en: "i: demande[i] = true; while (demande[j]) wait; <SC>; demande[i] = false. Symmetric for j. Mutual exclusion is guaranteed: i enters only if demande[j] is false, and its demand stays set while it is in the SC, which blocks j. Other problem: if both announce at the same time, each waits for the other to withdraw — mutual infinite wait (deadlock): the “absence of permanent blocking” property is violated.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 5 — Annonce avec renonce", en: "Question 5 — Announcing with retreat" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Annonce de sa volonté, avec renonce : si l'autre a aussi fait la demande, on annule son annonce et on recommence. Écrivez entreeSC() et sortieSC(). Analysez exclusion mutuelle et blocages.",
              en: "Announce intention, then retreat: if the other has also announced, cancel announcement and retry. Write entreeSC() and sortieSC(). Analyze mutual exclusion and blocking.",
            },
            solution: {
              fr: "i : demande[i] = true; while (demande[j]) { demande[i] = false; attente; demande[i] = true; } <SC>; demande[i] = false. Symétrique pour j. L'exclusion mutuelle est garantie : on n'entre que lorsque demande[j] est faux, et l'annonce reste posée pendant la SC. Autre problème : en renonçant puis en réannonçant aussitôt, les deux peuvent boucler sans jamais entrer (livelock) : famine possible — la propriété « équité » n'est pas garantie.",
              en: "i: demande[i] = true; while (demande[j]) { demande[i] = false; wait; demande[i] = true; } <SC>; demande[i] = false. Symmetric for j. Mutual exclusion is guaranteed: one enters only when demande[j] is false, and the demand stays set during the SC. Other problem: by withdrawing and immediately re-announcing, both may loop without ever entering (livelock): starvation is possible — the “fairness” property is not guaranteed.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 6 — Demande et renonce si ce n'est pas mon tour", en: "Question 6 — Request and retreat if not my turn" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "On utilise à la fois demande[2] et tour. Le processeur fait une demande pour entrer en section critique et renonce si l'autre a fait une demande et que ce n'est pas son tour. Sinon il entre. Écrivez entreeSC() et sortieSC(). Analysez les propriétés.",
              en: "Using both demande[2] and tour: the processor requests entry and retreats if the other has also requested and it is not its turn; otherwise it enters. Write entreeSC() and sortieSC(). Analyze the properties.",
            },
            solution: {
              fr: "i : demande[i] = true; while (demande[j] && tour != i) { demande[i] = false; attente; demande[i] = true; } <SC>; demande[i] = false; tour = j. Symétrique pour j. Cette stratégie assure généralement l'exclusion mutuelle et évite l'interblocage permanent par le critère du tour, mais selon l'implémentation il faut veiller à la cohérence. Elle permet la progression dans la plupart des cas, mais l'attente bornée (équité) n'est pas toujours trivialement garantie dans toutes les variantes.",
              en: "i: demande[i] = true; while (demande[j] && tour != i) { demande[i] = false; wait; demande[i] = true; } <SC>; demande[i] = false; tour = j. Symmetric for j. This generally ensures mutual exclusion and avoids permanent deadlock via the tour variable, though consistency is key. Progress is usually satisfied; bounded waiting (fairness) requires careful formulation.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 7 — Algorithme de Dekker (1966)", en: "Question 7 — Dekker's algorithm (1966)" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Rappel : dans Dekker, si on renonce on attend son tour avant de redemander ; si c'est son tour, on attend que l'autre ait renoncé avant d'entrer. Écrivez entreeSC() et sortieSC() pour i et j.",
              en: "Recall Dekker: if one retreats, it waits for its turn before requesting again; if it is its turn, it waits until the other has retreated before entering. Write entreeSC() and sortieSC() for i and j.",
            },
            solution: {
              fr: "Pour i (avec j l'autre) : demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; while (tour != i) attente; demande[i] = true; } } <SC>; tour = j; demande[i] = false. Pour j symétrique. Cette solution assure : exclusion mutuelle, absence de blocage permanent, progression, équité (attente bornée) pour 2 processus.",
              en: "For i (j the other): demande[i] = true; while (demande[j]) { if (tour != i) { demande[i] = false; while (tour != i) wait; demande[i] = true; } } <SC>; tour = j; demande[i] = false. Symmetric for j. This ensures mutual exclusion, no permanent deadlock, progress, and bounded waiting (fairness) for 2 processes.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 8 — Algorithme de Peterson (1981)", en: "Question 8 — Peterson's algorithm (1981)" },
        exercises: [
          {
            kind: "open",
            prompt: {
              fr: "Avec les variables demande[2] et dernier (indique le dernier à avoir voulu entrer), écrivez entreeSC() et sortieSC() pour Peterson. Démontez brièvement pourquoi il garantit l'exclusion mutuelle.",
              en: "With variables demande[2] and dernier (indicating the last one that wanted to enter), write entreeSC() and sortieSC() for Peterson. Briefly show why it guarantees mutual exclusion.",
            },
            solution: {
              fr: "i : demande[i] = true; dernier = i; while (demande[j] && dernier == i) attente; <SC>; demande[i] = false. Symétrique pour j. Preuve par l'absurde : supposons i et j simultanément en SC. Alors pour entrer, i a vu demande[j] false OU dernier != i. Mais demande[j] était true (j voulait entrer), donc il fallait dernier != i. Pour j, il fallait dernier != j. Donc dernier != i et dernier != j simultanément, impossible puisque dernier vaut i ou j. D'où exclusion mutuelle.",
              en: "i: demande[i] = true; dernier = i; while (demande[j] && dernier == i) wait; <SC>; demande[i] = false. Symmetric for j. Proof by contradiction: suppose i and j both in critical section. For i to pass, we had demande[j] false OR dernier != i. But demande[j] was true (j wanted to enter), so we needed dernier != i. For j, we needed dernier != j. Thus dernier != i and dernier != j simultaneously — impossible since dernier is either i or j. Therefore mutual exclusion holds.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 9 — Propriétés de l'exclusion mutuelle", en: "Question 9 — Properties of mutual exclusion" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Un algorithme assure l'exclusion mutuelle mais un processus peut attendre indéfiniment. Quelle propriété manque-t-il ?",
              en: "An algorithm ensures mutual exclusion but a process may wait forever. Which property is missing?",
            },
            options: [
              { text: { fr: "La progression", en: "Progress" } },
              { text: { fr: "L'attente bornée (équité)", en: "Bounded waiting (fairness)" } },
              { text: { fr: "L'atomicité", en: "Atomicity" } },
            ],
            answerIndex: 1,
            solution: {
              fr: "Il manque l'attente bornée (absence de famine) : l'équité n'est pas garantie même si l'exclusion mutuelle est respectée.",
              en: "Bounded waiting (no starvation) is missing: fairness is not guaranteed even though mutual exclusion holds.",
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
    id: "p4",
    text: { fr: "Blanc N°4 — Contrôle de compréhension", en: "Mock Exam N°4 — Comprehension check" },
  },
  {
    type: "exercises",
    groups: [
      {
        title: { fr: "Question 1 — Ordre de lancement (FIFO)", en: "Question 1 — Launch order (FIFO)" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Dans cette architecture avec open bloquant (sans O_NONBLOCK), quel processus faut-il idéalement lancer en premier pour éviter un blocage inutile ?",
              en: "In this architecture with blocking open (no O_NONBLOCK), which process should ideally be launched first to avoid unnecessary blocking?",
            },
            options: [
              { text: { fr: "L'écrivain (fils1)", en: "The writer (child1)" } },
              { text: { fr: "Le lecteur (fils2)", en: "The reader (child2)" } },
              { text: { fr: "Peu importe", en: "It does not matter" } },
            ],
            answerIndex: 2,
            solution: {
              fr: "Peu importe : l'ouverture bloquante est un **rendez-vous symétrique**. Si le lecteur ouvre en premier, son `open(O_RDONLY)` attend l'arrivée d'un écrivain ; si l'écrivain ouvre en premier, son `open(O_WRONLY)` attend l'arrivée d'un lecteur. Dans les deux cas le blocage dure jusqu'au rendez-vous, donc aucun ordre n'évite l'attente.",
              en: "It does not matter: a blocking open is a **symmetric rendezvous**. If the reader opens first, its `open(O_RDONLY)` waits for a writer; if the writer opens first, its `open(O_WRONLY)` waits for a reader. In both cases the block lasts until the rendezvous, so no order avoids the wait.",
            },
          },
        ],
      },
      {
        title: { fr: "Question 2 — Zombie vs orphelin", en: "Question 2 — Zombie vs orphan" },
        exercises: [
          {
            kind: "mcq",
            prompt: {
              fr: "Un fils termine son exécution mais le père n'appelle jamais wait(). Que devient ce fils ?",
              en: "A child finishes execution but the parent never calls wait(). What becomes of this child?",
            },
            options: [
              { text: { fr: "Il devient orphelin", en: "It becomes an orphan" } },
              { text: { fr: "Il devient un zombie", en: "It becomes a zombie" } },
              { text: { fr: "Il disparaît immédiatement", en: "It disappears immediately" } },
            ],
            answerIndex: 1,
            solution: {
              fr: "Il devient un zombie : son espace mémoire est libéré, mais son entrée reste dans la table des processus jusqu'à ce que le père appelle wait() (ou jusqu'à la mort du père, auquel cas il est rattaché à init).",
              en: "It becomes a zombie: its memory is freed, but its entry remains in the process table until the parent calls wait() (or until the parent dies, in which case it is reparented to init).",
            },
          },
        ],
      },
    ],
  },
];