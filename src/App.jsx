import { useCallback, useEffect, useMemo, useState } from "react";
import { characters, wordCards } from "./data/cards.js";
import { schedule } from "./srs.js";
import useLocalState from "./hooks/useLocalState.js";
import useHashRoute from "./hooks/useHashRoute.js";
import useGrammarProgress from "./hooks/useGrammarProgress.js";
import StudyHome from "./features/cards/StudyHome.jsx";
import StudySession, { buildQueue, buildShuffle } from "./features/cards/StudySession.jsx";
import Browse from "./features/cards/Browse.jsx";
import GrammarStudy from "./features/grammar/GrammarStudy.jsx";
import Practice from "./features/grammar/Practice.jsx";
import BackupDialog from "./components/BackupDialog.jsx";

const DEFAULT_SETTINGS = { deck: "char", levels: ["hsk1", "hsk2", "hsk3"], newLimit: 20, direction: "hanzi", autoplay: false, order: "random" };
const cardsById = Object.fromEntries([...characters, ...wordCards].map((c) => [c.id, c]));

const icon = {
  cards: (
    <path d="M7 4h11a2 2 0 0 1 2 2v12M4 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
  ),
  characters: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M12 4v16M4 12h16" strokeDasharray="2 2" />
    </>
  ),
  grammar: (
    <>
      <rect x="3" y="9" width="5" height="6" rx="1" />
      <rect x="10" y="9" width="5" height="6" rx="1" />
      <rect x="17" y="9" width="4" height="6" rx="1" />
    </>
  ),
  quiz: <path d="M9 11l3 3 8-8M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />,
};

const PAGES = [
  { id: "cards", label: "Flashcards" },
  { id: "characters", label: "Characters" },
  { id: "grammar", label: "Grammar" },
  { id: "quiz", label: "Grammar quiz" },
];

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon[name]}
    </svg>
  );
}

export default function App() {
  const [route, navigate] = useHashRoute();
  const page = PAGES.some((p) => p.id === route.page) ? route.page : "cards";

  const [records, setRecords] = useLocalState("hsk-cards-records-v1", {});
  const [storedSettings, setSettings] = useLocalState("hsk-cards-settings-v1", DEFAULT_SETTINGS);
  const settings = { ...DEFAULT_SETTINGS, ...storedSettings };
  const [session, setSession] = useState(null);
  const [lastPoint, setLastPoint] = useLocalState("hsk-grammar-last-v1", null);
  const [backupOpen, setBackupOpen] = useState(false);
  const grammar = useGrammarProgress();

  const deckCards = useMemo(() => {
    const source = settings.deck === "word" ? wordCards : characters;
    return source.filter((c) => settings.levels.includes(c.level));
  }, [settings.deck, settings.levels]);

  const grade = useCallback((id, g) => setRecords((r) => ({ ...r, [id]: schedule(r[id], g) })), [setRecords]);

  function start(mode) {
    const queue = mode === "shuffle" ? buildShuffle(deckCards, 20) : buildQueue(deckCards, records, settings.newLimit, settings.order);
    setSession({ mode, queue, total: new Set(queue).size, answered: 0, again: 0, key: Date.now() });
  }

  const openPoint = useCallback(
    (id) => {
      setLastPoint(id);
      navigate("grammar", id);
    },
    [navigate, setLastPoint]
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  const known = characters.filter((c) => records[c.id] && records[c.id].interval >= 21).length;
  const understood = Object.keys(grammar.progress.understood).length;

  return (
    <div className="min-h-dvh bg-paper">
      <header className="sticky top-0 z-30 bg-paper/95 backdrop-blur border-b border-mist pt-[env(safe-area-inset-top)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center gap-4">
          <a href="#/cards" className="flex items-center gap-3">
            <span className="grid place-items-center size-10 rounded-md bg-cinnabar text-white font-brush text-2xl leading-none" aria-hidden="true">
              学
            </span>
            <span className="font-semibold text-ink leading-tight">
              HSK Study
              <span className="block text-xs font-normal text-ink/60">
                {known}/{characters.length} characters known, {understood} grammar points
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden lg:flex rounded-lg bg-mist/70 p-1" aria-label="Sections">
            {PAGES.map((p) => (
              <a
                key={p.id}
                href={`#/${p.id}`}
                aria-current={page === p.id ? "page" : undefined}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${page === p.id ? "bg-white text-ink shadow-sm" : "text-ink/70 hover:text-ink"}`}
              >
                {p.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setBackupOpen(true)}
            className="ml-auto lg:ml-2 grid place-items-center size-10 rounded-lg text-ink/70 hover:bg-mist/60"
            aria-label="Save or load progress"
            title="Save or load progress"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0-4-4m4 4 4-4M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
            </svg>
          </button>
        </div>
      </header>

      <main className={`mx-auto max-w-7xl pb-28 lg:pb-12 ${page === "grammar" ? "" : "px-4 sm:px-6 py-8 sm:py-10"}`}>
        {page === "cards" &&
          (session ? (
            <StudySession
              key={session.key}
              session={session}
              setSession={setSession}
              cardsById={cardsById}
              records={records}
              onGrade={grade}
              direction={settings.direction}
              autoplay={settings.autoplay}
              active={!backupOpen}
            />
          ) : (
            <StudyHome
              settings={settings}
              setSettings={setSettings}
              cards={deckCards}
              records={records}
              onStart={() => start("srs")}
              onShuffle={() => start("shuffle")}
            />
          ))}
        {page === "characters" && <Browse characters={characters} words={wordCards} records={records} />}
        {page === "grammar" && (
          <GrammarStudy
            pointId={route.param}
            lastPointId={lastPoint}
            onOpen={openPoint}
            progress={grammar.progress}
            toggleUnderstood={grammar.toggleUnderstood}
            recordAnswer={grammar.recordAnswer}
            reset={grammar.reset}
          />
        )}
        {page === "quiz" && <Practice understood={grammar.progress.understood} onAnswer={grammar.recordAnswer} onOpenPoint={openPoint} />}
      </main>

      <nav
        className="lg:hidden fixed inset-x-0 bottom-0 z-30 border-t border-mist bg-sheet/95 backdrop-blur pb-[env(safe-area-inset-bottom)]"
        aria-label="Sections"
      >
        <div className="grid grid-cols-4">
          {PAGES.map((p) => (
            <a
              key={p.id}
              href={`#/${p.id}`}
              aria-current={page === p.id ? "page" : undefined}
              className={`flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium ${page === p.id ? "text-cinnabar" : "text-ink/60"}`}
            >
              <Icon name={p.id} />
              {p.label === "Grammar quiz" ? "Quiz" : p.label}
            </a>
          ))}
        </div>
      </nav>

      <BackupDialog open={backupOpen} onClose={() => setBackupOpen(false)} />
    </div>
  );
}
