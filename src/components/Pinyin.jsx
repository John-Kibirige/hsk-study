import { splitPinyin } from "../pinyin.js";

const TONE_CLASS = ["text-ink/50", "text-tone1", "text-tone2", "text-tone3", "text-tone4", "text-tone5"];

// Pinyin with each syllable coloured by its tone.
export default function Pinyin({ text, className = "" }) {
  return (
    <span className={className}>
      {splitPinyin(text).map((part, i) => (
        <span key={i} className={TONE_CLASS[part.tone]}>
          {part.text}
        </span>
      ))}
    </span>
  );
}

export function ToneLegend() {
  const tones = [
    ["1", "mā", "high"],
    ["2", "má", "rising"],
    ["3", "mǎ", "dipping"],
    ["4", "mà", "falling"],
    ["5", "ma", "neutral"],
  ];
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm" aria-label="Tone colours">
      {tones.map(([n, sample, name]) => (
        <li key={n} className="flex items-center gap-1.5">
          <span className={`font-semibold ${TONE_CLASS[Number(n)]}`}>{sample}</span>
          <span className="text-ink/60">{name}</span>
        </li>
      ))}
    </ul>
  );
}
