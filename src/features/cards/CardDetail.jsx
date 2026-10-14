import { useState } from "react";
import Pinyin from "../../components/Pinyin.jsx";
import Tianzige from "../../components/Tianzige.jsx";
import SpeakButton from "../../components/SpeakButton.jsx";
import StrokeWriter from "./StrokeWriter.jsx";
import { LEVELS } from "../../data/cards.js";

const levelName = (id) => LEVELS.find((l) => l.id === id)?.name ?? id;

// Everything about one card: reading, meaning, related words or characters, and strokes.
export default function CardDetail({ card, showGlyph = true, onOpenChar }) {
  const [strokes, setStrokes] = useState(false);
  const isChar = card.kind === "char";

  return (
    <div className="text-left">
      {showGlyph && (
        <div className="mb-5">
          <Tianzige text={card.hanzi} size="md" />
        </div>
      )}
      <div className="flex items-center justify-center gap-2">
        <Pinyin text={card.pinyin} className="text-3xl font-semibold" />
        <SpeakButton text={card.hanzi} />
      </div>
      <p className="mt-2 text-center text-xl text-ink">{card.meaning}</p>
      <p className="mt-1 text-center text-sm text-ink/60">{levelName(card.level)}</p>

      {isChar && card.words.length > 0 && (
        <section className="mt-6">
          <h3 className="text-sm font-semibold text-ink/70">Words with {card.hanzi}</h3>
          <ul className="mt-2 divide-y divide-mist border-y border-mist">
            {card.words.slice(0, 8).map((w) => (
              <li key={w.id} className="flex items-baseline gap-3 py-2">
                <span className="font-zh text-xl text-ink">{w.hanzi}</span>
                <Pinyin text={w.pinyin} className="text-sm" />
                <span className="ml-auto text-right text-sm text-ink/70">{w.meaning}</span>
              </li>
            ))}
          </ul>
          {card.words.length > 8 && <p className="mt-1 text-xs text-ink/50">and {card.words.length - 8} more</p>}
        </section>
      )}

      {!isChar && card.chars.length > 1 && (
        <section className="mt-6">
          <h3 className="text-sm font-semibold text-ink/70">Character by character</h3>
          <ul className="mt-2 divide-y divide-mist border-y border-mist">
            {card.chars.map((c, i) => (
              <li key={i}>
                <button type="button" onClick={() => onOpenChar?.(c)} disabled={!onOpenChar} className="w-full flex items-baseline gap-3 py-2 text-left enabled:hover:bg-jade-soft/50">
                  <span className="font-zh text-xl text-ink">{c.hanzi}</span>
                  <Pinyin text={c.pinyin} className="text-sm" />
                  <span className="ml-auto text-right text-sm text-ink/70">{c.meaning}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-6">
        {!strokes ? (
          <button type="button" onClick={() => setStrokes(true)} className="w-full py-2.5 rounded-xl border border-mist bg-white text-sm font-medium text-ink hover:border-jade">
            Stroke order and writing practice
          </button>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {[...card.hanzi].map((ch, i) => (
              <StrokeWriter key={`${ch}-${i}`} hanzi={ch} size={[...card.hanzi].length > 2 ? 140 : 180} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
