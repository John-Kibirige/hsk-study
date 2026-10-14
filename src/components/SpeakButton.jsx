import { canSpeak, speak } from "../utils.js";

export default function SpeakButton({ text, label = "Listen" }) {
  if (!canSpeak()) return null;
  return (
    <button
      type="button"
      onClick={() => speak(text)}
      aria-label={`${label}: ${text}`}
      title={label}
      className="shrink-0 grid place-items-center size-9 rounded-full text-jade hover:bg-jade-soft active:scale-95 transition"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 5 6 9H3v6h3l5 4V5z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M18.5 5.5a9 9 0 0 1 0 13" />
      </svg>
    </button>
  );
}
