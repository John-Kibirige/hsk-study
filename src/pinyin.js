const TONE_MARKS = {
  1: "āēīōūǖĀĒĪŌŪǕ",
  2: "áéíóúǘÁÉÍÓÚǗ",
  3: "ǎěǐǒǔǚǍĚǏǑǓǙ",
  4: "àèìòùǜÀÈÌÒÙǛ",
};

const V = "aeiouüvāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜAEIOUÜĀÁǍÀĒÉĚÈĪÍǏÌŌÓǑÒŪÚǓÙǕǗǙǛ";
// One syllable: optional initial, a run of vowels, then an optional ending
// (ng / n / r) that is only taken when no vowel follows it.
const SYLLABLE = new RegExp(
  `(?:zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?[${V}]+(?:ng(?![${V}])|n(?![${V}])|r(?![${V}]))?`,
  "gi"
);

export function toneOf(syllable) {
  for (const [tone, marks] of Object.entries(TONE_MARKS)) {
    if ([...syllable].some((ch) => marks.includes(ch))) return Number(tone);
  }
  return 5;
}

// Splits pinyin into [{ text, tone }] pieces; anything that is not a syllable keeps tone 0.
export function splitPinyin(pinyin) {
  const parts = [];
  let last = 0;
  for (const match of pinyin.matchAll(SYLLABLE)) {
    if (match.index > last) parts.push({ text: pinyin.slice(last, match.index), tone: 0 });
    parts.push({ text: match[0], tone: toneOf(match[0]) });
    last = match.index + match[0].length;
  }
  if (last < pinyin.length) parts.push({ text: pinyin.slice(last), tone: 0 });
  return parts;
}

const PLAIN = { ā: "a", á: "a", ǎ: "a", à: "a", ē: "e", é: "e", ě: "e", è: "e", ī: "i", í: "i", ǐ: "i", ì: "i", ō: "o", ó: "o", ǒ: "o", ò: "o", ū: "u", ú: "u", ǔ: "u", ù: "u", ǖ: "u", ǘ: "u", ǚ: "u", ǜ: "u", ü: "u" };

// "Zhōngguó" -> "zhongguo", so search works without typing tone marks.
export function plainPinyin(pinyin) {
  return pinyin
    .toLowerCase()
    .replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/g, (c) => PLAIN[c])
    .replace(/[^a-z]/g, "");
}
