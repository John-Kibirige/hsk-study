import { LEVELS } from "../../data/cards.js";
import { statusOf } from "../../srs.js";

const DIRECTIONS = [
  { id: "hanzi", label: "汉字 → meaning", hint: "See the character, recall sound and meaning" },
  { id: "pinyin", label: "pinyin → 汉字", hint: "See the sound, recall the character" },
  { id: "meaning", label: "meaning → 汉字", hint: "See the English, recall the character" },
];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`px-3.5 py-2 rounded-lg border-2 text-sm font-medium transition ${active ? "bg-ink border-ink text-white" : "border-mist bg-sheet text-ink hover:border-jade"}`}
    >
      {children}
    </button>
  );
}

const ORDERS = [
  { id: "random", label: "Random", hint: "New cards are picked at random and everything is shuffled" },
  { id: "level", label: "By level", hint: "HSK 1 first, then HSK 2, then HSK 3" },
];

export default function StudyHome({ settings, setSettings, cards, records, onStart, onShuffle }) {
  const now = Date.now();
  const counts = { new: 0, learning: 0, known: 0, due: 0 };
  for (const c of cards) {
    const r = records[c.id];
    counts[statusOf(r)]++;
    if (r && r.due <= now) counts.due++;
  }
  const toStudy = counts.due + Math.min(settings.newLimit, counts.new);

  const set = (patch) => setSettings((s) => ({ ...s, ...patch }));
  const toggleLevel = (id) =>
    set({ levels: settings.levels.includes(id) ? settings.levels.filter((l) => l !== id) : [...settings.levels, id] });

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">Flashcards</h1>
      <p className="mt-2 text-lg">Study keeps a schedule: cards you know come back less often, and cards you forget come back sooner. Shuffle is a quick random drill that does not change the schedule.</p>

      <dl className="mt-8 grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-mist bg-mist text-center">
        {[
          ["Due now", counts.due, "text-cinnabar"],
          ["New", counts.new, "text-ink"],
          ["Learning", counts.learning, "text-amber"],
          ["Known", counts.known, "text-jade"],
        ].map(([label, n, color]) => (
          <div key={label} className="bg-sheet px-2 py-4">
            <dt className="text-xs sm:text-sm text-ink/60">{label}</dt>
            <dd className={`mt-1 text-2xl sm:text-3xl font-semibold ${color}`}>{n}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 space-y-6">
        <fieldset>
          <legend className="font-medium text-ink">Deck</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            <Chip active={settings.deck === "char"} onClick={() => set({ deck: "char" })}>
              Characters
            </Chip>
            <Chip active={settings.deck === "word"} onClick={() => set({ deck: "word" })}>
              Words
            </Chip>
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium text-ink">Levels</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {LEVELS.map((l) => (
              <Chip key={l.id} active={settings.levels.includes(l.id)} onClick={() => toggleLevel(l.id)}>
                {l.name}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium text-ink">New cards per session</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[5, 10, 20, 30, 50].map((n) => (
              <Chip key={n} active={settings.newLimit === n} onClick={() => set({ newLimit: n })}>
                {n}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium text-ink">Card front</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {DIRECTIONS.map((d) => (
              <button
                key={d.id}
                type="button"
                aria-pressed={settings.direction === d.id}
                onClick={() => set({ direction: d.id })}
                className={`text-left rounded-xl border-2 p-3 transition ${settings.direction === d.id ? "border-ink bg-white" : "border-mist bg-sheet hover:border-jade"}`}
              >
                <span className="block font-zh font-semibold text-ink">{d.label}</span>
                <span className="block mt-1 text-xs text-ink/60">{d.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-medium text-ink">Card order</legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {ORDERS.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={(settings.order ?? "random") === o.id}
                onClick={() => set({ order: o.id })}
                className={`text-left rounded-xl border-2 p-3 transition ${(settings.order ?? "random") === o.id ? "border-ink bg-white" : "border-mist bg-sheet hover:border-jade"}`}
              >
                <span className="block font-semibold text-ink">{o.label}</span>
                <span className="block mt-1 text-xs text-ink/60">{o.hint}</span>
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex items-center gap-3">
          <input type="checkbox" checked={settings.autoplay} onChange={(e) => set({ autoplay: e.target.checked })} className="size-5 accent-jade" />
          <span>Read the answer aloud when a card turns over</span>
        </label>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={onStart}
          disabled={toStudy === 0}
          className="px-7 py-3.5 rounded-xl bg-cinnabar text-white text-lg font-semibold disabled:opacity-30"
        >
          Study {toStudy} card{toStudy === 1 ? "" : "s"}
        </button>
        <button
          type="button"
          onClick={onShuffle}
          disabled={cards.length === 0}
          className="px-5 py-3.5 rounded-xl border-2 border-ink text-ink font-semibold disabled:opacity-30"
        >
          Shuffle {Math.min(20, cards.length)} random cards
        </button>
        {toStudy === 0 && (
          <p className="text-ink/70">
            {settings.levels.length === 0 ? "Choose at least one level." : "Nothing is due. Try Shuffle, add a level, or come back later."}
          </p>
        )}
      </div>
    </div>
  );
}
