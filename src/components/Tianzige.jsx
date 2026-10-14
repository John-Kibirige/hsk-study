// The 田字格 practice grid: a square with a dashed cross and diagonals.
export function GridLines() {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 size-full" aria-hidden="true" preserveAspectRatio="none">
      <rect x="1" y="1" width="98" height="98" fill="none" stroke="var(--color-cinnabar)" strokeOpacity="0.55" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      <g stroke="var(--color-cinnabar)" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke">
        <line x1="50" y1="0" x2="50" y2="100" />
        <line x1="0" y1="50" x2="100" y2="50" />
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </g>
    </svg>
  );
}

// Draws one grid square per character.
export default function Tianzige({ text, size = "lg" }) {
  const box = size === "lg" ? "size-36 sm:size-44 text-[6.5rem] sm:text-[8rem]" : size === "md" ? "size-20 text-6xl" : "size-12 text-3xl";
  const many = [...text].length > 2 && size === "lg";
  return (
    <div className="flex flex-wrap justify-center gap-1.5" lang="zh-CN">
      {[...text].map((ch, i) => (
        <span
          key={i}
          className={`relative grid place-items-center bg-white font-zh text-ink leading-none ${many ? "size-24 sm:size-32 text-[4.2rem] sm:text-[5.6rem]" : box}`}
        >
          <GridLines />
          <span className="relative">{ch}</span>
        </span>
      ))}
    </div>
  );
}
