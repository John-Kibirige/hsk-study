import { useEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { GridLines } from "../../components/Tianzige.jsx";

// Stroke-order animation and handwriting practice for one character.
// Stroke data is downloaded per character from the hanzi-writer CDN, so this needs internet.
export default function StrokeWriter({ hanzi, size = 180 }) {
  const target = useRef(null);
  const writer = useRef(null);
  const [state, setState] = useState("loading"); // loading | ready | error | quiz | done
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    if (!target.current) return;
    target.current.innerHTML = "";
    setState("loading");
    setMistakes(0);
    writer.current = HanziWriter.create(target.current, hanzi, {
      width: size,
      height: size,
      padding: 10,
      showOutline: true,
      strokeColor: "#1d3832",
      outlineColor: "#d3ddd4",
      drawingColor: "#b5402c",
      highlightColor: "#3a8273",
      radicalColor: "#3a8273",
      strokeAnimationSpeed: 1,
      delayBetweenStrokes: 250,
      onLoadCharDataSuccess: () => setState("ready"),
      onLoadCharDataError: () => setState("error"),
    });
    return () => {
      writer.current = null;
      if (target.current) target.current.innerHTML = "";
    };
  }, [hanzi, size]);

  function animate() {
    if (!writer.current) return;
    writer.current.cancelQuiz?.();
    writer.current.showCharacter();
    setState("ready");
    writer.current.animateCharacter();
  }

  function practise() {
    if (!writer.current) return;
    setMistakes(0);
    setState("quiz");
    writer.current.quiz({
      showHintAfterMisses: 2,
      onMistake: () => setMistakes((m) => m + 1),
      onComplete: (summary) => {
        setMistakes(summary.totalMistakes);
        setState("done");
      },
    });
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative bg-white touch-none" style={{ width: size, height: size }}>
        <GridLines />
        <div ref={target} className="relative" />
        {state === "error" && (
          <p className="absolute inset-0 grid place-items-center p-3 text-center text-sm text-ink/70">
            Stroke data needs an internet connection.
          </p>
        )}
      </div>
      {state !== "error" && (
        <div className="flex gap-2">
          <button type="button" onClick={animate} disabled={state === "loading"} className="px-3 py-1.5 rounded-lg border-2 border-jade text-jade text-sm font-medium disabled:opacity-40">
            Show strokes
          </button>
          <button type="button" onClick={practise} disabled={state === "loading"} className="px-3 py-1.5 rounded-lg bg-jade text-white text-sm font-medium disabled:opacity-40">
            Write it
          </button>
        </div>
      )}
      <p className="h-5 text-sm text-ink/70" role="status">
        {state === "quiz" && "Draw each stroke in order inside the box."}
        {state === "done" && (mistakes === 0 ? "Perfect, no mistakes." : `Done with ${mistakes} mistake${mistakes === 1 ? "" : "s"}.`)}
      </p>
    </div>
  );
}
