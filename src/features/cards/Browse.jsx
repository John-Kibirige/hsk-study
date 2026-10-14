import { useMemo, useState } from "react";
import { LEVELS } from "../../data/cards.js";
import { statusOf } from "../../srs.js";
import { plainPinyin } from "../../pinyin.js";
import Pinyin, { ToneLegend } from "../../components/Pinyin.jsx";
import Modal from "../../components/Modal.jsx";
import CardDetail from "./CardDetail.jsx";

const STATUS_DOT = { new: "bg-ink/20", learning: "bg-amber", known: "bg-jade" };
const STATUS_LABEL = { new: "New", learning: "Learning", known: "Known" };

export default function Browse({ characters, words, records }) {
  const [deck, setDeck] = useState("char");
  const [level, setLevel] = useState("all");
  const [status, setStatus] = useState("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);

  const list = deck === "char" ? characters : words;

  const shown = useMemo(() => {
    const q = query.trim();
    const qPlain = plainPinyin(q);
    const qLower = q.toLowerCase();
    return list.filter((c) => {
      if (level !== "all" && c.level !== level) return false;
      if (status !== "all" && statusOf(records[c.id]) !== status) return false;
      if (!q) return true;
      return (
        c.hanzi.includes(q) ||
        (qPlain && plainPinyin(c.pinyin).includes(qPlain)) ||
        c.meaning.toLowerCase().includes(qLower)
      );
    });
  }, [list, level, status, query, records]);

  const select = "rounded-lg border border-mist bg-white px-3 py-2 text-sm";

  return (
    <div>
      <div className="flex flex-wrap items-end gap-3">
        <div className="flex rounded-lg bg-mist/70 p-1" role="group" aria-label="Deck">
          {[
            ["char", "Characters"],
            ["word", "Words"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              aria-pressed={deck === id}
              onClick={() => setDeck(id)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium ${deck === id ? "bg-white text-ink shadow-sm" : "text-ink/70"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="flex-1 min-w-48">
          <span className="sr-only">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 字, pinyin (zhong) or English"
            className="w-full rounded-lg border border-mist bg-white px-3 py-2 text-sm placeholder:text-ink/40"
          />
        </label>
        <label>
          <span className="sr-only">Level</span>
          <select value={level} onChange={(e) => setLevel(e.target.value)} className={select}>
            <option value="all">All levels</option>
            {LEVELS.map((l) => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Progress</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={select}>
            <option value="all">Any progress</option>
            <option value="new">New</option>
            <option value="learning">Learning</option>
            <option value="known">Known</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/70">
          {shown.length} {deck === "char" ? "characters" : "words"}
        </p>
        <ToneLegend />
      </div>

      {shown.length === 0 && <p className="mt-10 text-center text-ink/70">Nothing matches. Try plain pinyin without tones, or clear a filter.</p>}

      {deck === "char" ? (
        <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(4.75rem,1fr))] gap-2">
          {shown.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => setOpen(c)}
                className="relative w-full aspect-[4/5] rounded-xl bg-sheet border border-mist hover:border-jade flex flex-col items-center justify-center"
                aria-label={`${c.hanzi} ${c.pinyin} ${c.meaning}, ${STATUS_LABEL[statusOf(records[c.id])]}`}
              >
                <span className={`absolute right-2 top-2 size-2 rounded-full ${STATUS_DOT[statusOf(records[c.id])]}`} />
                <span className="font-zh text-4xl text-ink leading-none">{c.hanzi}</span>
                <Pinyin text={c.pinyin.split(",")[0]} className="mt-2 text-xs" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mt-4 divide-y divide-mist border-y border-mist">
          {shown.map((w) => (
            <li key={w.id}>
              <button type="button" onClick={() => setOpen(w)} className="w-full flex items-center gap-4 px-2 py-3 text-left hover:bg-jade-soft/50">
                <span className={`size-2 shrink-0 rounded-full ${STATUS_DOT[statusOf(records[w.id])]}`} />
                <span className="font-zh text-2xl text-ink min-w-24">{w.hanzi}</span>
                <Pinyin text={w.pinyin} className="text-sm min-w-28" />
                <span className="text-sm text-ink/70">{w.meaning}</span>
              </button>
            </li>
          ))}
        </ul>
      )}

      <Modal open={!!open} onClose={() => setOpen(null)} label={open ? `${open.hanzi} details` : "Details"}>
        {open && <CardDetail key={open.id} card={open} onOpenChar={(c) => setOpen(c)} />}
      </Modal>
    </div>
  );
}
