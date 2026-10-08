export type SubjectStatus = "published" | "soon";

export type Language = "fr" | "en";

export type Localized = string | { fr: string; en: string };

export type InlineText = Localized;

export interface ListItem {
  text: InlineText;
  children?: InlineText[];
}

export interface ExerciseMistake {
  match: string[];
  feedback: InlineText;
}

export interface TrueFalseExercise {
  kind: "trueFalse";
  prompt: InlineText;
  answer: boolean;
  justification: InlineText;
  mistake?: InlineText;
}

export interface ChoiceOption {
  text: InlineText;
  feedback?: InlineText;
}

export interface McqExercise {
  kind: "mcq";
  prompt: InlineText;
  options: ChoiceOption[];
  answerIndex: number;
  solution: InlineText;
}

export interface FillBlankExercise {
  kind: "fillBlank";
  prompt: InlineText;
  blanks: { accepted: string[]; mistakes: ExerciseMistake[] }[];
  solution: InlineText;
}

export interface OpenExercise {
  kind: "open";
  prompt: InlineText;
  details?: InlineText[];
  solution: InlineText;
  solutionItems?: InlineText[];
}

export type Exercise =
  | TrueFalseExercise
  | McqExercise
  | FillBlankExercise
  | OpenExercise;

export type GradeableExercise = TrueFalseExercise | McqExercise | FillBlankExercise;

export interface ExerciseGroup {
  title: Localized;
  exercises: Exercise[];
}

export type Block =
  | { type: "heading"; level: 3 | 4 | 5; text: InlineText; variant?: "exercise" | "sub" | "part"; id?: string }
  | { type: "paragraph"; text: InlineText }
  | { type: "list"; ordered?: boolean; items: ListItem[] }
  | { type: "code"; text: string }
  | { type: "quote"; text: InlineText }
  | { type: "rule" }
  | { type: "exercises"; groups: ExerciseGroup[] };

export interface SubjectPart {
  id: string;
  label: Localized;
}

export interface SubjectClass {
  title: Localized;
  label?: Localized;
  parts?: SubjectPart[];
  blocks: Block[];
}

export interface Subject {
  slug: string;
  title: Localized;
  date?: Localized;
  status: SubjectStatus;
  summary?: Localized;
  classes: SubjectClass[];
}
