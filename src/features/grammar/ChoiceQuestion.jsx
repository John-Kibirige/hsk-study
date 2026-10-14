import { useMemo, useState } from "react";
import { shuffle } from "../../utils.js";
import SpeakButton from "../../components/SpeakButton.jsx";

export default function ChoiceQuestion({ item, onAnswer }) {
  const options = useMemo(() => shuffle(item.options), [item]);
  const [chosen, setChosen] = useState(null);
  const [counted, setCounted] = useState(false);
  const answered = chosen !== null;
  const correct = chosen === item.answer;
  const [before, after = ""] = item.q.split("___");

  function choose(option) {
    if (answered) return;
    setChosen(option);
    if (!counted) {
      setCounted(true);
      onAnswer?.(option === item.answer);
    }
  }

  return (
    <div>
      <p className="text-sm text-ink/70">Choose the word that fits the blank.</p>
      <p className="mt-2 font-zh text-2xl leading-loose text-ink">
        {before}
        <span
          className={`inline-block min-w-16 mx-1 px-2 text-center border-b-2 ${
            !answered ? "border-ink/40 text-transparent" : correct ? "border-jade text-jade" : "border-cinnabar text-cinnabar"
          }`}
        >
          {answered ? chosen : "＿"}
        </span>
        {after}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => {
          const isAnswer = option === item.answer;
          const isChosen = option === chosen;
          let style = "bg-sheet border-mist hover:border-jade text-ink";
          if (answered && isAnswer) style = "bg-jade text-white border-jade";
          else if (answered && isChosen) style = "bg-cinnabar-soft border-cinnabar text-cinnabar line-through";
          else if (answered) style = "bg-sheet border-mist text-ink/40";
          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => choose(option)}
              className={`font-zh text-xl px-5 py-2 rounded-lg border-2 transition ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 flex flex-wrap items-center gap-3" role="status">
          <span className={`font-medium ${correct ? "text-jade" : "text-cinnabar"}`}>
            {correct ? "Correct." : `Not quite. The answer is ${item.answer}.`}
          </span>
          <SpeakButton text={item.q.replace("___", item.answer)} label="Hear the full sentence" />
          {!correct && (
            <button type="button" onClick={() => setChosen(null)} className="text-sm font-medium text-jade underline underline-offset-4">
              Try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}
