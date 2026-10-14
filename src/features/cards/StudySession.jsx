import { useCallback, useEffect, useState } from "react";
import { GRADES, describeInterval } from "../../srs.js";
import { shuffle, speak } from "../../utils.js";
import Tianzige from "../../components/Tianzige.jsx";
import Pinyin from "../../components/Pinyin.jsx";
import SpeakButton from "../../components/SpeakButton.jsx";
import CardDetail from "./CardDetail.jsx";

const GRADE_STYLE = {
  again: "border-cinnabar text-cinnabar hover:bg-cinnabar-soft",
  hard: "border-amber text-amber hover:bg-amber-soft",
  good: "border-jade text-jade hover:bg-jade-soft",
  easy: "border-ink text-ink hover:bg-mist/60",
};

const SHUFFLE_GRADES = [
  { id: "again", label: "Again", key: "1", hint: "Show it again soon" },
  { id: "good", label: "Got it", key: "2", hint: "Next card" },
];

// Spaced-repetition session: cards that are due plus some new ones.
// With order "random", the new cards are drawn at random and everything is shuffled together.
export function buildQueue(cards, records, newLimit, order = "random", now = Date.now()) {
  const due = cards.filter((c) => records[c.id] && records[c.id].due <= now);
  const unseen = cards.filter((c) => !records[c.id]);
  if (order === "random") {
    const fresh = shuffle(unseen).slice(0, newLimit);
    return shuffle([...due, ...fresh]).map((c) => c.id);
  }
  due.sort((a, b) => records[a.id].due - records[b.id].due);
  return [...due, ...unseen.slice(0, newLimit)].map((c) => c.id);
}

// Shuffle drill: random cards from the chosen levels, whatever their schedule.
export function buildShuffle(cards, count) {
  return shuffle(cards).slice(0, count).map((c) => c.id);
}

function Front({ card, direction }) {
  if (direction === "meaning") {
    const n = [...card.hanzi].length;
    return (
      <div className="text-center">
        <p className="text-sm text-ink/60">{card.kind === "char" ? "Which character means" : n === 1 ? "Which word means" : `Which ${n}-character word means`}</p>
        <p className="mt-3 text-3xl sm:text-4xl font-semibold text-ink">{card.meaning}</p>
      </div>
    );
  }
  if (direction === "pinyin") {
    return (
      <div className="text-center">
        <p className="text-sm text-ink/60">Which {card.kind === "char" ? "character" : "word"} is read</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Pinyin text={card.pinyin} className="text-4xl sm:text-5xl font-semibold" />
          <SpeakButton text={card.hanzi} />
        </div>
      </div>
    );
  }
  return <Tianzige text={card.hanzi} />;
}

export default function StudySession({ session, setSession, cardsById, records, onGrade, direction, autoplay, active = true }) {
  const [flipped, setFlipped] = useState(false);
  const { queue, total, mode } = session;
  const card = cardsById[queue[0]];
  const grades = mode === "shuffle" ? SHUFFLE_GRADES : GRADES;

  const exit = () => setSession(null);

  const flip = useCallback(() => {
    if (!card || flipped) return;
    setFlipped(true);
    if (autoplay) speak(card.hanzi);
  }, [card, flipped, autoplay]);

  const grade = useCallback(
    (g) => {
      if (!card || !flipped) return;
      if (mode === "srs") onGrade(card.id, g);
      setSession((s) => {
        const rest = s.queue.slice(1);
        let next = rest;
        if (g === "again") {
          // Put the card back a few places later, at a random spot so the order stays unpredictable.
          const at = Math.min(rest.length, 2 + Math.floor(Math.random() * 4));
          next = [...rest.slice(0, at), s.queue[0], ...rest.slice(at)];
        }
        return { ...s, queue: next, answered: s.answered + 1, again: s.again + (g === "again" ? 1 : 0) };
      });
      setFlipped(false);
    },
    [card, flipped, mode, onGrade, setSession]
  );

  useEffect(() => {
    if (!active) return;
    function onKey(e) {
      if (e.target.closest?.("input, textarea, select, dialog")) return;
      if (!flipped && (e.key === " " || e.key === "Enter")) {
        e.preventDefault();
        flip();
      } else if (flipped) {
        const match = grades.find((g) => g.key === e.key);
        if (match) grade(match.id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, flipped, flip, grade, grades]);

  if (!card) {
    return (
      <div className="mx-auto max-w-md text-center py-10">
        <p className="font-brush text-7xl text-cinnabar leading-none">好</p>
        <h2 className="mt-4 text-2xl font-semibold text-ink">{mode === "shuffle" ? "Shuffle finished" : "Session finished"}</h2>
        <p className="mt-2 text-lg">
          {session.answered} answers, {session.again} sent back for another try.
        </p>
        <button type="button" onClick={exit} className="mt-8 px-6 py-3 rounded-xl bg-ink text-white font-medium">
          Back to flashcards
        </button>
      </div>
    );
  }

  const remaining = new Set(queue).size;
  const finished = total - remaining;

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex items-center justify-between text-sm text-ink/70">
        <span>
          {mode === "shuffle" ? "Shuffle: " : ""}
          {finished} of {total} cards done
        </span>
        <button type="button" onClick={exit} className="underline underline-offset-4">
          End session
        </button>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-mist overflow-hidden" aria-hidden="true">
        <div className={`h-full transition-all ${mode === "shuffle" ? "bg-amber" : "bg-jade"}`} style={{ width: `${(finished / total) * 100}%` }} />
      </div>

      <div className="flip-scene mt-6">
        <div className={`flip-card grid ${flipped ? "is-flipped" : ""}`}>
          <button
            type="button"
            onClick={flip}
            aria-hidden={flipped}
            tabIndex={flipped ? -1 : 0}
            className="flip-face [grid-area:1/1] min-h-[20rem] sm:min-h-[22rem] rounded-3xl bg-sheet border border-mist shadow-[0_18px_40px_-24px_rgba(29,56,50,0.45)] flex flex-col items-center justify-center gap-6 p-6"
          >
            <Front card={card} direction={direction} />
            <span className="text-sm text-ink/50">Tap to turn over</span>
          </button>
          <div
            aria-hidden={!flipped}
            className="flip-face flip-back [grid-area:1/1] rounded-3xl bg-sheet border border-mist shadow-[0_18px_40px_-24px_rgba(29,56,50,0.45)] p-5 sm:p-7"
          >
            {flipped && <CardDetail key={card.id} card={card} />}
          </div>
        </div>
      </div>

      {flipped && (
        <div
          className={`sticky bottom-20 lg:bottom-4 mt-5 grid gap-2 rounded-2xl bg-paper/90 backdrop-blur p-1 ${grades.length === 2 ? "grid-cols-2" : "grid-cols-4"}`}
          role="group"
          aria-label="How well did you know it?"
        >
          {grades.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => grade(g.id)}
              className={`flex flex-col items-center rounded-xl border-2 bg-sheet py-2.5 transition ${GRADE_STYLE[g.id]}`}
            >
              <span className="font-semibold">{g.label}</span>
              <span className="text-xs opacity-75">{mode === "shuffle" ? g.hint : describeInterval(records[card.id], g.id)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
