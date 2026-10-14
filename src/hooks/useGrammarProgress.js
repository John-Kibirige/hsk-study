import { useCallback, useEffect, useState } from "react";

const KEY = "hsk-grammar-progress-v1";
const empty = { understood: {}, attempts: {} };

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    return saved && typeof saved === "object" ? { ...empty, ...saved } : empty;
  } catch {
    return empty;
  }
}

export default function useProgress() {
  const [progress, setProgress] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
      // Storage can be full or blocked; progress just won't persist.
    }
  }, [progress]);

  const toggleUnderstood = useCallback((id) => {
    setProgress((p) => {
      const understood = { ...p.understood };
      if (understood[id]) delete understood[id];
      else understood[id] = true;
      return { ...p, understood };
    });
  }, []);

  const recordAnswer = useCallback((id, correct) => {
    setProgress((p) => {
      const prev = p.attempts[id] || { right: 0, wrong: 0 };
      const next = correct ? { ...prev, right: prev.right + 1 } : { ...prev, wrong: prev.wrong + 1 };
      return { ...p, attempts: { ...p.attempts, [id]: next } };
    });
  }, []);

  const reset = useCallback(() => setProgress(empty), []);

  return { progress, toggleUnderstood, recordAnswer, reset };
}
