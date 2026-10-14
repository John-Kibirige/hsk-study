// Colours every grammar keyword inside a Chinese sentence.
export default function Highlight({ text, words }) {
  const keys = [...new Set(words)].filter(Boolean).sort((a, b) => b.length - a.length);
  if (!keys.length) return text;
  const escaped = keys.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "g"));
  return parts.map((part, i) =>
    keys.includes(part) ? (
      <mark key={i} className="bg-transparent text-cinnabar font-semibold">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
