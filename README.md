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

## Put it on GitHub and publish it

### 1. Create the repository

1. Sign in to [github.com](https://github.com) and click **New repository**.
2. Name it, for example `hsk-study`. Make it **Public** (free GitHub Pages needs a public repository).
3. Don't add a README, .gitignore or license, because the project already has them. Click **Create repository**.

### 2. Upload the code

**With Git** (in a terminal, inside this folder):

```bash
git init
git add .
git commit -m "HSK Study app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hsk-study.git
git push -u origin main
```

**Without Git:** install [GitHub Desktop](https://desktop.github.com), choose *File → Add local repository*, pick this folder, then *Publish repository*.

Make sure the hidden `.github` folder is uploaded; it holds the instructions that publish the site. Dragging files into the GitHub web page often skips hidden folders, which is why Git or GitHub Desktop is recommended.

### 3. Turn on GitHub Pages

1. In your repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. The *Deploy to GitHub Pages* workflow runs on every push (re-run it from there if it ran before you changed the setting). It takes about a minute.
4. Your app is now live at **https://YOUR-USERNAME.github.io/hsk-study/**

Every time you push a change to `main`, the site updates itself.

### 4. Install it on your phone

- **iPhone (Safari):** open the link, tap **Share → Add to Home Screen**.
- **Android (Chrome):** open the link, tap **⋮ → Add to Home screen** (or **Install app**).
- **Laptop (Chrome or Edge):** click the install icon at the right of the address bar.

## Run it on your computer

You need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

## Editing content

- `src/data/words.js`: vocabulary, one line per word: `汉字|pīnyīn|meaning`
- `src/data/chars.js`: one line per character: `字|reading(s)|meaning`
- `src/data/grammar/hsk2.js` and `hsk3.js`: grammar points, examples and quiz questions

## Notes

- Audio uses your device's built-in Chinese voice. Most phones have one; on a laptop, Chrome and Edge work best.
- Stroke order data downloads per character from the Hanzi Writer CDN the first time you open it, then works offline.

Built with Vite, React 18, Tailwind CSS v4, hanzi-writer and plain JavaScript.
# hsk-study
