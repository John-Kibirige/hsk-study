import { useState } from "react";
import PatternTiles, { patternKeywords } from "./PatternTiles.jsx";
import Highlight from "./Highlight.jsx";
import SpeakButton from "../../components/SpeakButton.jsx";
import QuizItem from "./QuizItem.jsx";

export default function PointView({ point, understood, onToggleUnderstood, onAnswer, prev, next, onOpen }) {
  const [showEnglish, setShowEnglish] = useState(false);
  const keywords = patternKeywords(point.pattern);

  return (
    <article className="max-w-3xl">
      <p className="text-sm text-ink/70">
        {point.levelName}, Lesson {point.lessonNumber}: <span className="font-zh">{point.lessonTitle}</span>
      </p>
      <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight text-ink">{point.title}</h1>

      <div className="mt-6 rounded-2xl bg-sheet border border-mist px-5 py-6 sm:px-7">
        <PatternTiles pattern={point.pattern} />
        <p className="mt-5 text-lg leading-relaxed max-w-prose">{point.explain}</p>
      </div>

      <section className="mt-10" aria-labelledby="examples-heading">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="examples-heading" className="text-xl font-semibold text-ink">
            From your textbook
          </h2>
          <button
            type="button"
            onClick={() => setShowEnglish((s) => !s)}
            aria-pressed={showEnglish}
            className="text-sm font-medium text-jade underline underline-offset-4"
          >
            {showEnglish ? "Hide English" : "Show English"}
          </button>
        </div>
        <ul className="mt-4 divide-y divide-mist border-y border-mist">
          {point.examples.map(([zh, en]) => (
            <li key={zh} className="flex items-start gap-3 py-4">
              <SpeakButton text={zh} />
              <div>
                <p className="font-zh text-2xl leading-relaxed text-ink">
                  <Highlight text={zh} words={keywords} />
                </p>
                {showEnglish && <p className="mt-1 text-ink/70">{en}</p>}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="try-heading">
        <h2 id="try-heading" className="text-xl font-semibold text-ink">
          Try it
        </h2>
        <ol className="mt-4 space-y-8">
          {point.quiz.map((item, i) => (
            <li key={i} className="rounded-2xl border border-mist bg-sheet p-5">
              <QuizItem item={item} onAnswer={(ok) => onAnswer(point.id, ok)} />
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-10 pt-6 border-t border-mist flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <button
          type="button"
          onClick={() => onToggleUnderstood(point.id)}
          aria-pressed={understood}
          className={`px-5 py-3 rounded-xl font-medium border-2 transition ${
            understood ? "bg-jade border-jade text-white" : "border-jade text-jade hover:bg-jade-soft"
          }`}
        >
          {understood ? "Understood ✓" : "Mark as understood"}
        </button>
        <nav className="flex gap-2" aria-label="Grammar point navigation">
          <button
            type="button"
            disabled={!prev}
            onClick={() => prev && onOpen(prev.id)}
            className="px-4 py-3 rounded-xl border border-mist bg-sheet text-ink disabled:opacity-30"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={!next}
            onClick={() => next && onOpen(next.id)}
            className="px-4 py-3 rounded-xl bg-ink text-white disabled:opacity-30"
          >
            Next point
          </button>
        </nav>
      </footer>
    </article>
  );
}
