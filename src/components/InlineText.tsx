import type { ReactNode } from "react";

interface InlineTextProps {
  text: string;
}

const TOKEN_PATTERN = /(`[^`]+`)|(\*\*.+?\*\*)/g;

export function InlineText({ text }: InlineTextProps) {
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("`")) {
      nodes.push(<code key={key++}>{token.slice(1, -1)}</code>);
    } else {
      nodes.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
