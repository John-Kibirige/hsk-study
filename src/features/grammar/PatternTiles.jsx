import { hasChinese } from "../../utils.js";

const GLYPHS = new Set(["+", "/", ",", "，", "?", "？", "!", "！", "…"]);

// Splits a pattern like "A 把 B + V + 了" into tiles.
// Chinese words are fixed keywords; Latin labels are slots you fill in; (…) marks optional parts.
function parsePattern(pattern) {
  let optional = false;
  return pattern.split(/\s+/).filter(Boolean).map((raw) => {
    let text = raw;
    let isOptional = optional;
    if (text.startsWith("(")) {
      optional = true;
      isOptional = true;
      text = text.slice(1);
    }
    if (text.endsWith(")")) {
      optional = false;
      text = text.slice(0, -1);
    }
    if (text.startsWith("(") && text.endsWith(")")) text = text.slice(1, -1);
    const kind = GLYPHS.has(text) ? "glyph" : hasChinese(text) ? "keyword" : "slot";
    return { text, kind, optional: isOptional };
  });
}

export function patternKeywords(pattern) {
  return parsePattern(pattern)
    .filter((t) => t.kind === "keyword")
    .map((t) => t.text.replace(/[…，。？！]/g, ""))
    .filter(Boolean);
}

export default function PatternTiles({ pattern, size = "lg" }) {
  const tiles = parsePattern(pattern);
  const big = size === "lg";

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={`Pattern: ${pattern}`}>
      {tiles.map((tile, i) => {
        if (tile.kind === "glyph") {
          return (
            <span key={i} className={`${big ? "text-2xl" : "text-base"} px-0.5 text-ink/40`}>
              {tile.text}
            </span>
          );
        }
        const base = big ? "text-2xl px-4 py-2 rounded-lg" : "text-base px-2.5 py-1 rounded-md";
        const look =
          tile.kind === "keyword"
            ? "font-zh font-semibold bg-cinnabar text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.18)]"
            : "font-ui font-medium text-jade bg-jade-soft border-2 border-jade/50";
        const optional = tile.optional ? "opacity-60 border-dashed" : "";
        return (
          <span key={i} className={`${base} ${look} ${optional} leading-none`}>
            {tile.text}
          </span>
        );
      })}
    </div>
  );
}
