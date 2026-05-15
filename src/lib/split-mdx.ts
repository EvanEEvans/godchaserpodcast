/**
 * Split an MDX body into two halves around the ~60% mark, finding the nearest
 * blank-line paragraph break that does not land inside a JSX block.
 * Honors an explicit `{/* inline-cta * /}` marker if present.
 */
export function splitMdxForInlineCTA(body: string): {
  before: string;
  after: string;
} {
  const marker = /\{\s*\/\*\s*inline-cta\s*\*\/\s*\}/;
  const markerMatch = body.match(marker);
  if (markerMatch && markerMatch.index !== undefined) {
    return {
      before: body.slice(0, markerMatch.index).trimEnd(),
      after: body.slice(markerMatch.index + markerMatch[0].length).trimStart(),
    };
  }

  const paragraphs = body.split(/\n{2,}/);
  if (paragraphs.length < 4) {
    return { before: body, after: "" };
  }

  const totalChars = body.length;
  const target = totalChars * 0.6;
  let running = 0;
  let bestIndex = Math.floor(paragraphs.length / 2);

  for (let i = 0; i < paragraphs.length; i++) {
    running += paragraphs[i].length + 2;
    const trimmedNext = (paragraphs[i + 1] ?? "").trimStart();
    const safeSplit = !trimmedNext.startsWith("<") && trimmedNext.length > 0;
    if (running >= target && safeSplit) {
      bestIndex = i;
      break;
    }
  }

  const before = paragraphs.slice(0, bestIndex + 1).join("\n\n");
  const after = paragraphs.slice(bestIndex + 1).join("\n\n");
  return { before, after };
}
