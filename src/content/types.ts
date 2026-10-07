export type SubjectStatus = "published" | "soon";

export type InlineText = string;

export interface ListItem {
  text: InlineText;
  children?: string[];
}

export type Block =
  | { type: "heading"; level: 3 | 4; text: InlineText; variant?: "exercise" | "sub" }
  | { type: "paragraph"; text: InlineText }
  | { type: "list"; ordered?: boolean; items: ListItem[] }
  | { type: "code"; text: string };

export interface SubjectClass {
  title: string;
  blocks: Block[];
}

export interface Subject {
  slug: string;
  title: string;
  date?: string;
  status: SubjectStatus;
  summary?: string;
  classes: SubjectClass[];
}
