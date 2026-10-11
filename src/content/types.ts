export type SubjectStatus = "published" | "soon";

export type Language = "fr" | "en" | "uk";

export type Localized = string | { fr: string; en: string; uk?: string };

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

export interface AutomatonStateNode {
  id: string;
  label?: string;
  x: number;
  y: number;
  initial?: boolean;
  accepting?: boolean;
}

export interface AutomatonTransition {
  from: string;
  to: string;
  symbols: string[];
  bend?: number;
}

export interface AutomatonSpec {
  id: string;
  states: AutomatonStateNode[];
  transitions: AutomatonTransition[];
  caption?: Localized;
  interactive?: boolean;
  alphabet?: string[];
  examples?: string[];
}

export type DiagramShape = "circle" | "box";

export interface DiagramNode {
  id: string;
  label: Localized;
  x: number;
  y: number;
  shape?: DiagramShape;
  tone?: "default" | "primary" | "soft";
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: Localized;
  bend?: number;
  dashed?: boolean;
}

export interface DiagramSpec {
  id: string;
  caption?: Localized;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
}

export interface InterleavingVariableSpec {
  name: string;
  init: number;
  scope?: "shared" | "local";
}

export interface InterleavingStep {
  label: Localized;
  target: string;
  source: string;
}

export interface InterleavingProcessSpec {
  id: string;
  label: Localized;
  steps: InterleavingStep[];
}

export interface InterleavingSpec {
  id: string;
  caption?: Localized;
  variables: InterleavingVariableSpec[];
  processes: InterleavingProcessSpec[];
  expected?: Record<string, number>;
}

export interface BufferSpec {
  id: string;
  caption?: Localized;
  capacity: number;
  produceLabel?: Localized;
  consumeLabel?: Localized;
}

export interface TraceEventSpec {
  label: Localized;
  detail?: Localized;
}

export interface TraceSpec {
  id: string;
  caption?: Localized;
  events: TraceEventSpec[];
}

export type Block =
  | { type: "heading"; level: 3 | 4 | 5; text: InlineText; variant?: "exercise" | "sub" | "part"; id?: string }
  | { type: "paragraph"; text: InlineText }
  | { type: "list"; ordered?: boolean; items: ListItem[] }
  | { type: "code"; text: string; caption?: Localized; lang?: string }
  | { type: "quote"; text: InlineText }
  | { type: "rule" }
  | { type: "exercises"; groups: ExerciseGroup[] }
  | { type: "automaton"; layout?: "row"; automata: AutomatonSpec[] }
  | { type: "checkpoint"; concept: Localized; exercise: Exercise }
  | { type: "diagram"; layout?: "row"; diagrams: DiagramSpec[] }
  | { type: "interleaving"; spec: InterleavingSpec }
  | { type: "buffer"; spec: BufferSpec }
  | { type: "trace"; spec: TraceSpec };

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
