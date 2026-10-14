import { useState } from "react";
import { levels } from "../../data/grammar/index.js";
import { shuffle } from "../../utils.js";
import PatternTiles from "./PatternTiles.jsx";
import QuizItem from "./QuizItem.jsx";

const SCOPES = [
  { id: "hsk2", label: "HSK 2" },
  { id: "hsk3", label: "HSK 3" },
  { id: "both", label: "Both" },
];
const COUNTS = [10, 20, 30];

function buildSession(scope, count, onlyUnsure, understood) {
  const chosen = levels.filter((l) => scope === "both" || l.id === scope);
  let points = chosen.flatMap((l) => l.lessons.flatMap((ls) => ls.points));
  if (onlyUnsure) {
    const unsure = points.filter((p) => !understood[p.id]);
    if (unsure.length) points = unsure;
  }
  const questions = points.flatMap((point) => point.quiz.map((item) => ({ point, item })));
  return shuffle(questions).slice(0, count);
}

export default function Practice({ understood, onAnswer, onOpenPoint }) {
  const [scope, setScope] = useState("hsk3");
  const [count, setCount] = useState(10);
  const [onlyUnsure, setOnlyUnsure] = useState(false);
  const [session, setSession] = useState(null); // { questions, index, results }

  function start() {
    setSession({ questions: buildSession(scope, count, onlyUnsure, understood), index: 0, results: [] });
  }

  if (!session) {
    return (
      <div className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">Mixed practice</h1>
        <p className="mt-3 text-lg leading-relaxed">
          Random questions from many lessons at once, like the HSK exam. Wrong answers are listed at the end so you can go back to that grammar point.
        </p>

        <fieldset className="mt-8">
          <legend className="font-medium text-ink">Which level?</legend>
          <div className="mt-2 flex gap-2">
            {SCOPES.map((s) => (
              <button
                key={s.id}
                type="button"
                aria-pressed={scope === s.id}
                onClick={() => setScope(s.id)}
                className={`px-4 py-2 rounded-lg border-2 font-medium ${scope === s.id ? "bg-ink border-ink text-white" : "border-mist bg-sheet text-ink"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="font-medium text-ink">How many questions?</legend>
          <div className="mt-2 flex gap-2">
            {COUNTS.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={count === c}
                onClick={() => setCount(c)}
                className={`px-4 py-2 rounded-lg border-2 font-medium ${count === c ? "bg-ink border-ink text-white" : "border-mist bg-sheet text-ink"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="mt-6 flex items-center gap-3">
          <input type="checkbox" checked={onlyUnsure} onChange={(e) => setOnlyUnsure(e.target.checked)} className="size-5 accent-jade" />
          <span>Only grammar I haven’t marked as understood</span>
        </label>

        <button type="button" onClick={start} className="mt-8 px-6 py-3 rounded-xl bg-cinnabar text-white font-semibold text-lg">
          Start practice
        </button>
      </div>
    );
  }

  const { questions, index, results } = session;
  const finished = index >= questions.length;

  if (finished) {
    const right = results.filter((r) => r.correct).length;
    const missed = [...new Map(results.filter((r) => !r.correct).map((r) => [r.point.id, r.point])).values()];
    return (
      <div className="max-w-xl">
        <p className="text-ink/70">Practice finished</p>
        <p className="mt-2 font-brush text-7xl text-cinnabar leading-none">
          {right}
          <span className="text-4xl text-ink/40"> / {questions.length}</span>
        </p>
        {missed.length > 0 ? (
          <>
            <h2 className="mt-8 text-xl font-semibold text-ink">Review these grammar points</h2>
            <ul className="mt-3 divide-y divide-mist border-y border-mist">
              {missed.map((p) => (
                <li key={p.id} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-ink">{p.title}</p>
                    <p className="text-sm text-ink/60">
                      {p.levelName}, Lesson {p.lessonNumber}
                    </p>
                  </div>
                  <button type="button" onClick={() => onOpenPoint(p.id)} className="shrink-0 text-sm font-medium text-jade underline underline-offset-4">
                    Study it
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="mt-6 text-lg">Every answer was right on the first try.</p>
        )}
        <div className="mt-8 flex gap-3">
          <button type="button" onClick={start} className="px-5 py-3 rounded-xl bg-ink text-white font-medium">
            Practise again
          </button>
          <button type="button" onClick={() => setSession(null)} className="px-5 py-3 rounded-xl border border-mist bg-sheet text-ink font-medium">
            Change settings
          </button>
        </div>
      </div>
    );
  }

  const current = questions[index];
  const answered = results.length > index;

  function handleAnswer(correct) {
    onAnswer(current.point.id, correct);
    setSession((s) => ({ ...s, results: [...s.results, { point: current.point, correct }] }));
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between text-sm text-ink/70">
        <span>
          Question {index + 1} of {questions.length}
        </span>
        <button type="button" onClick={() => setSession(null)} className="underline underline-offset-4">
          Stop
        </button>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-mist overflow-hidden" aria-hidden="true">
        <div className="h-full bg-cinnabar transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      <div className="mt-8 rounded-2xl border border-mist bg-sheet p-5 sm:p-6">
        <QuizItem key={index} item={current.item} onAnswer={handleAnswer} />
      </div>

      {answered && (
        <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm text-ink/60">
              {current.point.levelName}, Lesson {current.point.lessonNumber}: {current.point.title}
            </p>
            <div className="mt-2">
              <PatternTiles pattern={current.point.pattern} size="sm" />
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSession((s) => ({ ...s, index: s.index + 1 }))}
            className="shrink-0 px-5 py-3 rounded-xl bg-ink text-white font-medium"
          >
            {index + 1 === questions.length ? "See results" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
