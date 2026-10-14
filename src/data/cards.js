import words from "./words.js";
import charList from "./chars.js";

export const LEVELS = [
  { id: "hsk1", name: "HSK 1" },
  { id: "hsk2", name: "HSK 2" },
  { id: "hsk3", name: "HSK 3" },
  { id: "extra", name: "Textbook extras" },
  { id: "names", name: "Names" },
];

const levelRank = Object.fromEntries(LEVELS.map((l, i) => [l.id, i]));

// Character cards: each character gets the lowest level it appears at, plus every word that uses it.
const charMap = new Map(charList.map((c) => [c.hanzi, { ...c, id: `c:${c.hanzi}`, kind: "char", level: null, words: [] }]));

for (const word of words) {
  for (const ch of word.hanzi) {
    const card = charMap.get(ch);
    if (!card) continue;
    if (!card.words.some((w) => w.id === word.id)) card.words.push(word);
    if (card.level === null || levelRank[word.level] < levelRank[card.level]) card.level = word.level;
  }
}

export const characters = [...charMap.values()].sort((a, b) => levelRank[a.level] - levelRank[b.level]);

export const wordCards = words.map((w) => ({
  ...w,
  id: `w:${w.hanzi}:${w.pinyin}`,
  kind: "word",
  chars: [...w.hanzi].map((ch) => charMap.get(ch)).filter(Boolean),
}));

export const charByHanzi = Object.fromEntries(characters.map((c) => [c.hanzi, c]));
