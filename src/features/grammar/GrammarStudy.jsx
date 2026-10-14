import { useEffect, useMemo, useState } from "react";
import { levels, pointById } from "../../data/grammar/index.js";
import Sidebar from "./Sidebar.jsx";
import PointView from "./PointView.jsx";

const firstPointOf = (levelId) => levels.find((l) => l.id === levelId).lessons[0].points[0].id;

export default function GrammarStudy({ pointId, lastPointId, onOpen, progress, toggleUnderstood, recordAnswer, reset }) {
  const currentId = pointById[pointId] ? pointId : pointById[lastPointId] ? lastPointId : firstPointOf("hsk3");
  const point = pointById[currentId];
  const [menuOpen, setMenuOpen] = useState(false);

  const level = levels.find((l) => l.id === point.levelId);
  const levelPoints = useMemo(() => level.lessons.flatMap((l) => l.points), [level]);
  const index = levelPoints.findIndex((p) => p.id === currentId);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setMenuOpen(false);
  }, [currentId]);

  function switchLevel(id) {
    if (id !== level.id) onOpen(firstPointOf(id));
  }

  return (
    <div className="lg:grid lg:grid-cols-[18rem_1fr]">
      {menuOpen && <div className="fixed inset-0 z-40 bg-ink/40 lg:hidden" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-80 max-w-[85vw] bg-paper border-r border-mist pt-[env(safe-area-inset-top)] transform transition-transform lg:static lg:z-auto lg:w-auto lg:max-w-none lg:translate-x-0 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16 lg:pt-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Grammar lessons"
      >
        <div className="flex items-center gap-2 px-4 pt-4">
          {levels.map((l) => (
            <button
              key={l.id}
              type="button"
              aria-pressed={l.id === level.id}
              onClick={() => switchLevel(l.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold border-2 transition ${
                l.id === level.id ? "bg-ink border-ink text-white" : "border-mist bg-sheet text-ink"
              }`}
            >
              {l.name}
            </button>
          ))}
          <button type="button" onClick={() => setMenuOpen(false)} className="lg:hidden px-2 py-2 text-sm text-ink/70">
            Close
          </button>
        </div>
        <div className="h-[calc(100%-3.5rem)]">
          <Sidebar level={level} currentId={currentId} understood={progress.understood} onOpen={onOpen} />
        </div>
      </aside>

      <div className="px-4 sm:px-8 lg:px-12 py-6 lg:py-10 min-w-0">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="lg:hidden mb-6 w-full flex items-center justify-between rounded-xl border border-mist bg-sheet px-4 py-3 text-left"
        >
          <span className="text-sm text-ink/70">
            {level.name}, Lesson {point.lessonNumber}
          </span>
          <span className="text-sm font-semibold text-jade">All lessons</span>
        </button>

        <PointView
          key={point.id}
          point={point}
          understood={!!progress.understood[point.id]}
          onToggleUnderstood={toggleUnderstood}
          onAnswer={recordAnswer}
          prev={levelPoints[index - 1]}
          next={levelPoints[index + 1]}
          onOpen={onOpen}
        />
        <p className="mt-16 text-sm text-ink/50">
          Grammar progress is saved on this device.{" "}
          <button
            type="button"
            className="underline underline-offset-4"
            onClick={() => {
              if (window.confirm("Clear all grammar progress? This can't be undone.")) reset();
            }}
          >
            Clear grammar progress
          </button>
        </p>
      </div>
    </div>
  );
}
