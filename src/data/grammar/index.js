import hsk2 from "./hsk2.js";
import hsk3 from "./hsk3.js";

const raw = [
  { id: "hsk2", name: "HSK 2", lessons: hsk2 },
  { id: "hsk3", name: "HSK 3", lessons: hsk3 },
];

// Give every grammar point a stable id and a pointer back to its level and lesson.
export const levels = raw.map((level) => ({
  ...level,
  lessons: level.lessons.map((lesson) => ({
    ...lesson,
    points: lesson.points.map((point, i) => ({
      ...point,
      id: `${level.id}-${lesson.n}-${i + 1}`,
      levelId: level.id,
      levelName: level.name,
      lessonNumber: lesson.n,
      lessonTitle: lesson.title,
    })),
  })),
}));

export const allPoints = levels.flatMap((l) => l.lessons.flatMap((ls) => ls.points));

export const pointById = Object.fromEntries(allPoints.map((p) => [p.id, p]));
