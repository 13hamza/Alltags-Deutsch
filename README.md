# Alltags-Deutsch — Learn German for Daily Life

A lightweight, zero-dependency static website for learning everyday German. Experience practical German through vocabulary tickets, graded short stories, and topic-based real-life dialogues — all with click-to-hear pronunciation powered by the browser's built-in Web Speech API.

No build step, no backend, no dependencies — just open `index.html` in your browser.

---

## Features

- **Home page (`index.html`)** — Quick teasers presented in three sequential sections:
  1. **Words** — A sampling of essential vocabulary tickets with click-to-hear pronunciation.
  2. **Stories** — Featured graded-reader stories with level badges (A1–B1).
  3. **Topics** — Hanging market-stall signboard cards for real-world scenarios.
- **Words page (`words.html`)** — Comprehensive vocabulary directory grouped alphabetically (A–Z) with CEFR level filters (A1–B2) and live search.
- **Stories & Story reader (`stories.html` & `story.html`)** — Graded German short stories with an interactive word lookup glossary. Click any word in a story to see its translation and hear it pronounced.
- **Topics & Topic page (`topics.html` & `topic.html`)** — Topic-by-topic breakdowns featuring vocabulary tickets and interactive real-life dialogues line-by-line with a full dialogue playback feature.
- **Games page (`games.html` & `games.js`)** — Interactive vocabulary practice games including Multiple Choice, Type It (with German special character input), and Match It pairing cards, powered by an adaptive learning system with difficulty scaling, lives, streaks, local scoreboards, and wrong-word review.
- **Zero build system** — Pure HTML5, CSS3, and modern vanilla JavaScript.

---

## Project Structure

```
Alltags-Deutsch v1/
├── index.html        # Home landing page (Words -> Stories -> Topics teasers)
├── topics.html       # All topics overview page
├── topic.html        # Topic page shell (reads ?id=...)
├── stories.html      # Short stories directory page (A1–B1)
├── story.html        # Story reader page shell (reads ?id=... with glossary lookup)
├── words.html        # Vocabulary page (A–Z grouped, level filter, search)
├── games.html        # Interactive vocabulary practice games page
├── style.css         # Unified stylesheet (CSS custom properties, market-stall theme)
├── data.js           # Topic content (vocab + dialogues) + Web Speech API engine
├── stories-data.js   # Short story texts & word glossary dictionary
├── words-data.js     # Vocabulary dataset (Goethe-Institut Wortliste)
├── app.js            # Home page logic (renders Words, Stories, & Topics teasers)
├── topics.js         # Renders topic grid on topics.html
├── topic.js          # Renders topic details & dialogues on topic.html
├── stories.js        # Renders stories list grid on stories.html
├── story.js          # Renders story reader & interactive glossary on story.html
├── words.js          # Renders vocabulary cards, search, & filters on words.html
├── games.js          # Games logic, quiz modes, and adaptive weight system
└── README.md
```

---

## Running Locally

Because this is a static project, you can run it immediately without any `npm install` or setup step:

- **Option 1 (Quickest):** Double-click `index.html` to open directly in any Web browser.
- **Option 2 (Local Server):** Serve via HTTP server to emulate a production environment:
  ```bash
  python3 -m http.server 8000
  # Then navigate to http://localhost:8000
  ```

To publish online, upload the project directory as-is to any static hosting service (GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3, etc.).

---

## How Content is Organized

1. **Topics & Dialogues (`data.js`)**
   - Contains `TOPICS` array with `id`, `icon`, `en`, `de`, `tagline`, `vocab`, and `dialogues`.
   - Houses global speech synthesis functions (`speakGerman`, `speakDialogue`).

2. **Stories & Glossary (`stories-data.js`)**
   - Contains `STORIES` array with `id`, `level`, `icon`, `title`, `paragraphs`.
   - Contains `GLOSSARY` dictionary mapping lowercase German words to English translations.

3. **Vocabulary List (`words-data.js`)**
   - Contains `WORDS` array with `{ level, letter, de, en }` entries (e.g. A1 Goethe-Institut Start Deutsch 1 Wortliste).

---

## Adding Content

### 1. Adding a Topic
Edit `data.js` and push a new topic object to the `TOPICS` array:
```js
{
  id: "pharmacy",
  icon: "💊",
  en: "Pharmacy",
  de: "Apotheke",
  tagline: "Buying medicine & asking for advice",
  number: "04",
  vocab: [
    { de: "das Medikament", en: "the medicine" }
  ],
  dialogues: [
    {
      title: "Asking for headache relief",
      lines: [
        { speaker: "Kunde", de: "Haben Sie etwas gegen Kopfschmerzen?", en: "Do you have something for a headache?" }
      ]
    }
  ]
}
```

### 2. Adding a Story
Edit `stories-data.js` and append a story object to `STORIES`. Ensure any new words in your paragraphs are added to `GLOSSARY`:
```js
{
  id: "mein-neuer-nachbar",
  level: "A1",
  icon: "🏡",
  number: "04",
  title: { de: "Mein neuer Nachbar", en: "My New Neighbor" },
  taglineEn: "A friendly encounter in the hallway.",
  paragraphs: [
    "Heute zieht ein neuer Nachbar ein..."
  ]
}
```

### 3. Adding Words
Edit `words-data.js` and add word items to `WORDS`:
```js
{ level: "A1", letter: "B", de: "der Bäcker", en: "baker" }
```

---

## Pronunciation (Web Speech API)

Audio playback relies on native browser `window.speechSynthesis` (Web Speech API `de-DE` locale):
- No external audio APIs, keys, or external sound downloads required.
- Automatically selects the best available German voice installed on the user's OS/device.
- Click any German word ticket, dialogue line, or story word to trigger pronunciation.

---

## Tech Stack & Design Concept

- **HTML5 / CSS3 / Vanilla JS (ES6+)**
- **Typography:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings), [Karla](https://fonts.google.com/specimen/Karla) (body text), [Caveat](https://fonts.google.com/specimen/Caveat) (accents).
- **Theme:** German market-stall signage aesthetic with painted wood cards, ticket stubs, and pinboard elements.
