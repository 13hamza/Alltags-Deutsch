# Alltags-Deutsch

A small static website for learning everyday German, topic by topic. Each
topic gets its own page of key vocabulary and real-life dialogues, with
click-to-hear pronunciation powered by the browser's built-in text-to-speech.

No build step, no backend, no dependencies — just open `index.html`.

## Features

- **Home page** — every topic shown as a "hanging signboard" card (icon,
  English name, German name, one-line reason it's useful daily).
- **Topic page** — for the selected topic:
  - A vocabulary list ("tickets") of German words/phrases with their
    English translation.
  - Several everyday dialogues, each line shown in German + English.
  - Click the topic `<h1>`, any single word, or any dialogue line to hear
    it spoken aloud in German (Web Speech API, `lang="de-DE"`).
  - A "Play dialogue" button reads an entire conversation line by line.
- **One data file** — all content lives in `js/data.js`. Adding a topic
  needs no HTML/CSS changes.

## Project structure

```
deutsch-alltag/
├── index.html        Home page — lists all topics
├── topic.html         Topic page shell — reads ?id=... and fills itself in
├── css/
│   └── style.css      All styling (design tokens at the top as CSS vars)
├── js/
│   ├── data.js         Topic content (vocab + dialogues) + speech helpers
│   ├── app.js           Renders the topic grid on index.html
│   └── topic.js          Renders vocab/dialogues on topic.html
└── README.md
```

## Running it

This is a plain static site — no npm install, no server required.

- **Quickest:** double-click `index.html` to open it in your browser.
- **Recommended:** serve it locally so relative paths and any future
  fetch-based features behave exactly like on a real host, e.g.:
  ```bash
  cd deutsch-alltag
  python3 -m http.server 8000
  # then open http://localhost:8000
  ```

To publish it, upload the whole `deutsch-alltag/` folder as-is to any
static host (GitHub Pages, Netlify, Vercel, S3, etc.).

## How the pages connect

`index.html` and `topic.html` are both "dumb" shells — all the markup for
topic cards, vocab tickets, and dialogue cards is generated in JavaScript
at page load:

1. `js/data.js` defines a `TOPICS` array and loads first on every page.
2. `index.html` also loads `js/app.js`, which reads `TOPICS` and renders
   one card per topic into `#topic-grid`. Each card links to
   `topic.html?id=<topic-id>`.
3. `topic.html` also loads `js/topic.js`, which reads the `id` query
   parameter, finds the matching topic in `TOPICS`, and renders its
   vocabulary and dialogues into `#topic-root`.

## Adding a new topic

Open `js/data.js` and add a new object to the `TOPICS` array, following
the shape of the existing ones:

```js
{
  id: "pharmacy",              // used in the URL: topic.html?id=pharmacy
  icon: "💊",                   // emoji shown on the card and topic page
  en: "Pharmacy",
  de: "Apotheke",
  tagline: "Buying medicine & asking for advice",
  number: "04",                 // display label, e.g. "04"
  vocab: [
    { de: "das Medikament", en: "the medicine" },
    // ...more words
  ],
  dialogues: [
    {
      title: "Asking for something for a headache",
      lines: [
        { speaker: "Kunde", de: "Haben Sie etwas gegen Kopfschmerzen?", en: "Do you have something for a headache?" },
        // ...more lines
      ]
    }
  ]
}
```

That's it — no other file needs to change. The card appears on the home
page automatically, and `topic.html?id=pharmacy` renders it.

## Pronunciation (Web Speech API)

Pronunciation uses `window.speechSynthesis`, which is built into modern
browsers — no API key or external service involved. Helper functions live
in `js/data.js`:

- `speakGerman(text)` — speaks a single word or sentence in German.
- `speakDialogue(lines)` — speaks a full dialogue's lines in order.

Notes:
- Voice quality and availability depend on the visitor's OS/browser. The
  code prefers a `de-DE` voice if one is installed, and falls back to any
  German-language voice, or the browser's default voice otherwise.
- Requires a browser that supports the Web Speech API (all current
  versions of Chrome, Edge, Safari, and Firefox do).

## Tech stack

- Plain HTML, CSS, and vanilla JavaScript — no frameworks or build tools.
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings),
  [Karla](https://fonts.google.com/specimen/Karla) (body text), and
  [Caveat](https://fonts.google.com/specimen/Caveat) (handwritten accents),
  loaded from Google Fonts. Requires an internet connection to load; swap
  in system fonts in `css/style.css` if you need a fully offline version.

## Known limitations / ideas for later

- Currently 100 topics (Restaurant/Café, Supermarket, Bakery) — more can be
  added anytime via `js/data.js`.
- No search or filtering across topics yet.
- No progress tracking (e.g. marking words as learned).
- Pronunciation relies entirely on the browser's installed voices rather
  than a hosted audio service, so pronunciation quality will vary by
  device.
