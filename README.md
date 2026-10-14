# HSK Study

One app for HSK 1–3: flashcards for every character and word, plus the grammar of *HSK Standard Course 2* and *3*. It works on phone and laptop, can be added to your home screen, and opens offline once you've used it.

## What's in it

| Section | What it does |
| --- | --- |
| **Flashcards** | 630 characters and 634 words (HSK 1–3, textbook extras and names). **Study** uses spaced repetition with cards in random order. **Shuffle** is a quick drill of 20 random cards that doesn't change your schedule. |
| **Characters** | Every character in a grid, coloured by progress. Search by 字, by pinyin without tones (`zhong`) or by English. Tap a card for its words, stroke order and handwriting practice. |
| **Grammar** | All 84 grammar points from Standard Course 2 and 3, with pattern tiles, textbook examples, audio and practice questions. |
| **Grammar quiz** | Random questions from either or both levels, with a review list at the end. |

Progress is saved on each device. Use the download icon in the top bar to save your progress to a file and load it on another device.



## Editing content

- `src/data/words.js`: vocabulary, one line per word: `汉字|pīnyīn|meaning`
- `src/data/chars.js`: one line per character: `字|reading(s)|meaning`
- `src/data/grammar/hsk2.js` and `hsk3.js`: grammar points, examples and quiz questions

## Notes

- Audio uses your device's built-in Chinese voice. Most phones have one; on a laptop, Chrome and Edge work best.
- Stroke order data downloads per character from the Hanzi Writer CDN the first time you open it, then works offline.

Built with Vite, React 18, Tailwind CSS v4, hanzi-writer and plain JavaScript.
# hsk-study
