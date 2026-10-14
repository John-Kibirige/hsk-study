import { useState } from "react";
import { shuffle } from "../../utils.js";
import SpeakButton from "../../components/SpeakButton.jsx";

function scramble(words) {
  const tiles = words.map((w, i) => ({ w, key: i }));
  if (tiles.length < 2) return tiles;
  let mixed = shuffle(tiles);
  // Make sure the starting order is never already the answer.
  while (mixed.map((t) => t.w).join("") === words.join("")) mixed = shuffle(tiles);
  return mixed;
}

export default function OrderQuestion({ item, onAnswer }) {
  const [pool, setPool] = useState(() => scramble(item.words));
  const [picked, setPicked] = useState([]);
  const [result, setResult] = useState(null); // null | "right" | "wrong"
  const [counted, setCounted] = useState(false);
  const target = item.words.join("");

  function pick(tile) {
    if (result) return;
    setPool((p) => p.filter((t) => t.key !== tile.key));
    setPicked((p) => [...p, tile]);
  }

  function unpick(tile) {
    if (result) return;
    setPicked((p) => p.filter((t) => t.key !== tile.key));
    setPool((p) => [...p, tile]);
  }

  function check() {
    const ok = picked.map((t) => t.w).join("") === target;
    setResult(ok ? "right" : "wrong");
    if (!counted) {
      setCounted(true);
      onAnswer?.(ok);
    }
  }

  function retry() {
    setPool(scramble(item.words));
    setPicked([]);
    setResult(null);
  }

  const tileClass = "font-zh text-xl px-3 py-1.5 rounded-lg border-2 transition";

  return (
    <div>
      <p className="text-sm text-ink/70">
        Put the words in order: <span className="italic">{item.en}</span>
      </p>

      <div
        className={`mt-3 min-h-14 flex flex-wrap items-center gap-2 rounded-lg border-2 border-dashed p-2 ${
          result === "right" ? "border-jade bg-jade-soft/60" : result === "wrong" ? "border-cinnabar bg-cinnabar-soft/60" : "border-ink/25 bg-sheet"
        }`}
        aria-label="Your sentence"
      >
        {picked.length === 0 && <span className="text-sm text-ink/40 px-1">Tap the words below to build the sentence.</span>}
        {picked.map((tile) => (
          <button key={tile.key} type="button" onClick={() => unpick(tile)} className={`${tileClass} bg-white border-ink/20 text-ink`}>
            {tile.w}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2" aria-label="Word bank">
        {pool.map((tile) => (
          <button key={tile.key} type="button" onClick={() => pick(tile)} className={`${tileClass} bg-sheet border-mist hover:border-jade text-ink`}>
            {tile.w}
          </button>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3" role="status">
        {!result && (
          <button
            type="button"
            onClick={check}
            disabled={pool.length > 0}
            className="px-4 py-2 rounded-lg bg-ink text-white font-medium disabled:opacity-30"
          >
            Check
          </button>
        )}
        {result === "right" && <span className="font-medium text-jade">Correct.</span>}
        {result === "wrong" && (
          <span className="font-medium text-cinnabar">
            Not quite. The sentence is <span className="font-zh">{target}。</span>
          </span>
        )}
        {result && <SpeakButton text={target} label="Hear the sentence" />}
        {result === "wrong" && (
          <button type="button" onClick={retry} className="text-sm font-medium text-jade underline underline-offset-4">
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
