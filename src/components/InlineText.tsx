import type { ReactNode } from "react";
import type { Localized } from "../content/types";
import { useText } from "../hooks/useSettings";

interface InlineTextProps {
  text: Localized;
}

const TOKEN_PATTERN = /(`[^`]+`)|(\*\*.+?\*\*)/g;

export function InlineText({ text }: InlineTextProps) {
  const t = useText();
  const resolved = t(text);
  const pattern = new RegExp(TOKEN_PATTERN.source, "g");
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(resolved)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(resolved.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("`")) {
      nodes.push(<code key={key++}>{token.slice(1, -1)}</code>);
    } else {
      nodes.push(<strong key={key++}>{token.slice(2, -2)}</strong>);
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < resolved.length) {
    nodes.push(resolved.slice(lastIndex));
  }

  return <>{nodes}</>;
}
