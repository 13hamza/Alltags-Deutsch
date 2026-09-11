# Alltags-Deutsch — Learn German for Daily Life

A lightweight static website for learning everyday German. Experience practical German through vocabulary tickets, graded short stories, topic-based real-life dialogues, structured grammar courses, and practice games — all with click-to-hear pronunciation powered by the browser's built-in Web Speech API.

No build step, no backend — just open `index.html` in your browser. (The one exception is noted in [Pronunciation & Translation](#pronunciation--translation-web-speech-api) below: unlisted story words fall back to a free public translation API.)

---

## Features

- **Home page (`index.html`)** — Quick teasers presented in five sequential sections, in the same order as the navbar:
  1. **Courses** — A1, A2, and B1 course cards (A1 live, A2/B1 "coming soon").
  2. **Words** — A sampling of essential vocabulary tickets with click-to-hear pronunciation.
  3. **Games** — Teasers for the practice games.
  4. **Stories** — Featured graded-reader stories with level badges (A1–B1).
  5. **Topics** — Hanging market-stall signboard cards for real-world scenarios.
- **Navbar order (all pages):** Home → Courses → Words → Games → Stories → Topics.
- **Courses & Course page (`courses.html` & `course.html`)** — Structured CEFR grammar courses, one per level. **A1 is complete**: 18 topics (nouns/articles, verb conjugation, pronouns, sentence structure, questions, negation, Akkusativ, possessives, modal verbs, separable verbs, prepositions, numbers & time, plurals, Dativ, Perfekt/past tense, imperative, conjunctions & word order, and time expressions), each with an English explanation, comparison tables, a tip callout, and clickable example sentences. **A2, B1, and B2 are placeholders** ("Kommt bald") until written.
- **Words page (`words.html`)** — Comprehensive vocabulary directory grouped alphabetically (A–Z) with CEFR level filters (A1–B2) and live search.
- **Games page (`games.html`)** — Vocabulary practice games (multiple choice, typed answers, etc.) built on the same word/topic data, with sound effects and a scoreboard.
- **Stories & Story reader (`stories.html` & `story.html`)** — Graded German short stories with an interactive word lookup glossary. Click any word in a story to see its translation and hear it pronounced.
- **Topics & Topic page (`topics.html` & `topic.html`)** — Topic-by-topic breakdowns featuring vocabulary tickets and interactive real-life dialogues line-by-line with a full dialogue playback feature.
- **No build system** — Pure HTML5, CSS3, and modern vanilla JavaScript throughout.

---

## Project Structure

```
Alltags-Deutsch v1/
├── index.html        # Home landing page (Courses -> Words -> Games -> Stories -> Topics teasers)
├── courses.html      # All courses overview page (A1/A2/B1/B2 level cards)
├── course.html       # Course page shell (reads ?level=...), renders one CEFR level's topics
├── topics.html       # All topics overview page
├── topic.html        # Topic page shell (reads ?id=...)
├── stories.html      # Short stories directory page (A1–B1)
├── story.html        # Story reader page shell (reads ?id=... with glossary lookup)
├── words.html        # Vocabulary page (A–Z grouped, level filter, search)
├── games.html        # Vocabulary practice games page
├── style.css         # Unified stylesheet (CSS custom properties, market-stall theme)
├── data.js           # Topic content (vocab + dialogues) + Web Speech API engine + shared speaker icon
├── courses-data.js   # Grammar course content (COURSES array, one entry per CEFR level)
├── stories-data.js   # Short story texts, word glossary dictionary & free-translation fallback
├── words-data.js     # Vocabulary dataset (Goethe-Institut Wortliste)
├── app.js            # Home page logic (renders all five teaser sections)
├── courses.js        # Renders the course-level grid on courses.html
├── course.js         # Renders one course's topics, tables & examples on course.html
├── topics.js         # Renders topic grid on topics.html
├── topic.js          # Renders topic details & dialogues on topic.html
├── stories.js        # Renders stories list grid on stories.html
├── story.js          # Renders story reader & interactive glossary on story.html
├── words.js          # Renders vocabulary cards, search, & filters on words.html
├── games.js          # Game engine, scoring & UI for games.html
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

1. **Courses (`courses-data.js`)**
   - Contains `COURSES` array — one object per CEFR level (`a1`, `a2`, `b1`, `b2`) with `id`, `level`, `title`, `subtitle`, `tagline`, and `status` (`"available"` or `"soon"`).
   - Available courses additionally have a `topics` array; each topic has `number`, `id`, `en`, `de`, `intro` (paragraphs), optional `tables`, an optional `tip`, and an `examples` array of `{ de, en }` sentence pairs.
   - `getCourseById(id)` looks up a course by its `id` for `course.html`.

2. **Topics & Dialogues (`data.js`)**
   - Contains `TOPICS` array with `id`, `icon`, `en`, `de`, `tagline`, `vocab`, and `dialogues`.
   - Houses global speech synthesis functions (`speakGerman`, `speakDialogue`) and the shared `speakerIconSVG()` helper.

3. **Stories & Glossary (`stories-data.js`)**
   - Contains `STORIES` array with `id`, `level`, `icon`, `title`, `paragraphs`.
   - Contains `GLOSSARY` dictionary mapping lowercase German words to English translations.
   - Words not found in `GLOSSARY` fall back to `fetchFreeTranslation()`, which calls a public translation API (see [Pronunciation & Translation](#pronunciation--translation-web-speech-api)) and caches the result in `localStorage`.

4. **Vocabulary List (`words-data.js`)**
   - Contains `WORDS` array with `{ level, letter, de, en }` entries (e.g. A1 Goethe-Institut Start Deutsch 1 Wortliste).

---

## Adding Content

### 1. Adding a Course Topic
Edit `courses-data.js` and push a new topic object into the relevant course's `topics` array (currently only `a1` has content):
```js
{
  number: "19",
  id: "adjective-endings",
  en: "Adjective Endings",
  de: "Adjektivendungen",
  intro: [
    "A short English explanation of the grammar point goes here."
  ],
  tables: [
    { caption: "Optional comparison table", headers: ["A", "B"], rows: [["x", "y"]] }
  ],
  tip: "An optional one-line tip or common mistake to watch for.",
  examples: [
    { de: "Ein Beispielsatz.", en: "An example sentence." }
  ]
}
```
To start a new level, set that course's `status` to `"available"` and add a `topics` array in the same shape.

### 2. Adding a Topic
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

### 3. Adding a Story
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

### 4. Adding Words
Edit `words-data.js` and add word items to `WORDS`:
```js
{ level: "A1", letter: "B", de: "der Bäcker", en: "baker" }
```

---

## Pronunciation & Translation (Web Speech API)

Audio playback relies on native browser `window.speechSynthesis` (Web Speech API `de-DE` locale):
- No external audio APIs, keys, or external sound downloads required.
- Automatically selects the best available German voice installed on the user's OS/device.
- Click any German word ticket, dialogue line, course example, or story word to trigger pronunciation.

One feature does call out to the network: on the story reader page, clicking a word that isn't already in `GLOSSARY` triggers `fetchFreeTranslation()` in `stories-data.js`, which queries a free public translation endpoint (with a fallback to a second provider) and caches the result in `localStorage` so it's only fetched once per word/browser. This requires an internet connection and depends on a third-party service staying available — everything else on the site works fully offline.

---

## Tech Stack & Design Concept

- **HTML5 / CSS3 / Vanilla JS (ES6+)**
- **Typography:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings), [Karla](https://fonts.google.com/specimen/Karla) (body text), [Caveat](https://fonts.google.com/specimen/Caveat) (accents).
- **Theme:** German market-stall signage aesthetic with painted wood cards, ticket stubs, and pinboard elements.
