// A small spaced-repetition scheduler in the spirit of SM-2.
// Each card's record: { reps, interval (days), ease, due (ms timestamp), lapses }

const MINUTE = 60 * 1000;
const DAY = 24 * 60 * MINUTE;

export const GRADES = [
  { id: "again", label: "Again", key: "1", hint: "Forgot it" },
  { id: "hard", label: "Hard", key: "2", hint: "Got it slowly" },
  { id: "good", label: "Good", key: "3", hint: "Got it" },
  { id: "easy", label: "Easy", key: "4", hint: "Instant" },
];

export function schedule(record, grade, now = Date.now()) {
  const r = record ?? { reps: 0, interval: 0, ease: 2.5, due: now, lapses: 0 };
  let { reps, interval, ease, lapses } = r;

  if (grade === "again") {
    return { reps: 0, interval: 0, ease: Math.max(1.3, ease - 0.2), due: now + MINUTE, lapses: lapses + 1 };
  }
  if (grade === "hard") {
    interval = reps === 0 ? 1 : Math.max(1, Math.round(interval * 1.2));
    ease = Math.max(1.3, ease - 0.15);
  } else if (grade === "good") {
    interval = reps === 0 ? 1 : reps === 1 ? 3 : Math.round(interval * ease);
  } else if (grade === "easy") {
    interval = reps === 0 ? 4 : Math.round(Math.max(interval, 1) * ease * 1.3);
    ease = ease + 0.15;
  }
  return { reps: reps + 1, interval, ease, due: now + interval * DAY, lapses };
}

export function statusOf(record) {
  if (!record) return "new";
  if (record.interval >= 21) return "known";
  return "learning";
}

export function describeInterval(record, grade) {
  const next = schedule(record, grade);
  if (next.interval === 0) return "1 min";
  if (next.interval === 1) return "1 day";
  if (next.interval < 31) return `${next.interval} days`;
  return `${Math.round(next.interval / 30)} mo`;
}
