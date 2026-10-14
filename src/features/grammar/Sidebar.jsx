import { useMemo, useState } from "react";

export default function Sidebar({ level, currentId, understood, onOpen }) {
  const [query, setQuery] = useState("");

  const lessons = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return level.lessons;
    return level.lessons
      .map((lesson) => ({
        ...lesson,
        points: lesson.points.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.pattern.toLowerCase().includes(q) ||
            lesson.title.includes(query.trim()) ||
            String(lesson.n) === q
        ),
      }))
      .filter((lesson) => lesson.points.length);
  }, [level, query]);

  const total = level.lessons.reduce((n, l) => n + l.points.length, 0);
  const done = level.lessons.reduce((n, l) => n + l.points.filter((p) => understood[p.id]).length, 0);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-4 pb-3 border-b border-mist">
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-ink/70">
            {done} of {total} understood
          </span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-mist overflow-hidden" aria-hidden="true">
          <div className="h-full bg-jade transition-all" style={{ width: `${total ? (done / total) * 100 : 0}%` }} />
        </div>
        <label className="block mt-4">
          <span className="sr-only">Search grammar</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search: 把, comparison, 12…"
            className="w-full rounded-lg border border-mist bg-white px-3 py-2 text-sm placeholder:text-ink/40"
          />
        </label>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label={`${level.name} lessons`}>
        {lessons.length === 0 && <p className="px-3 py-6 text-sm text-ink/60">No grammar point matches “{query}”. Try a Chinese keyword or a lesson number.</p>}
        {lessons.map((lesson) => (
          <div key={lesson.n} className="mb-4">
            <p className="px-3 py-1 text-xs text-ink/60">
              Lesson {lesson.n} <span className="font-zh">{lesson.title}</span>
            </p>
            <ul>
              {lesson.points.map((p) => {
                const active = p.id === currentId;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => onOpen(p.id)}
                      aria-current={active ? "page" : undefined}
                      className={`w-full text-left flex items-start gap-2 px-3 py-2 rounded-lg text-sm transition ${
                        active ? "bg-ink text-white" : "text-ink hover:bg-jade-soft"
                      }`}
                    >
                      <span
                        className={`mt-1 size-2.5 shrink-0 rounded-full ${
                          understood[p.id] ? (active ? "bg-white" : "bg-jade") : active ? "border border-white/60" : "border border-ink/30"
                        }`}
                        aria-label={understood[p.id] ? "Understood" : "Not yet"}
                      />
                      <span>{p.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
