/* ============================================================
   Alltags-Deutsch — words.js (words.html)
   Renders the level tabs (A1 / A2 / B1) and, for the active
   level, either an alphabet-grouped grid of vocabulary tickets
   (alphabetized within each letter) or a "coming soon" note if
   that level has no words yet. Clicking a ticket's speaker icon
   pronounces the word; clicking the rest of the ticket opens a
   popup with an example sentence and its English translation.
   Also wires up the search box that filters the active level's
   words.
   ============================================================ */

function speakerIconSVG() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/>
    <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M19 6a9 9 0 0 1 0 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6"/>
  </svg>`;
}

let activeWordLevel = "ALL";
let wordQuery = "";
let activeWordType = "ALL";

/* ---------- Word-type subfilter (Noun / Verb / Adjective / …) ---------- */
/* Uses analyzeWordGrammar() from word-grammar.js to classify each word,
   then lets the visitor narrow the current level down to just one
   part of speech. */

const WORD_TYPE_FILTERS = [
  { id: "ALL", label: "All types" },
  { id: "noun", label: "Nouns" },
  { id: "verb", label: "Verbs" },
  { id: "adjective", label: "Adjectives/Adverbs" },
  { id: "pronoun", label: "Pronouns" },
  { id: "preposition", label: "Prepositions" },
  { id: "conjunction", label: "Conjunctions" },
  { id: "number", label: "Numbers" },
  { id: "interjection", label: "Interjections" },
  { id: "phrase", label: "Phrases" }
];

function wordTypeOf(word) {
  return typeof analyzeWordGrammar === "function" ? analyzeWordGrammar(word).type : null;
}

function renderWordSubfilters() {
  const wrap = document.getElementById("word-subfilters");
  if (!wrap) return;

  const levelWords = getWordsByLevel(activeWordLevel);
  const counts = {};
  levelWords.forEach(w => {
    const t = wordTypeOf(w);
    if (t) counts[t] = (counts[t] || 0) + 1;
  });

  // If the previously-active subfilter has no matches at this level
  // (e.g. switching levels), fall back to showing everything.
  if (activeWordType !== "ALL" && !counts[activeWordType]) activeWordType = "ALL";

  wrap.innerHTML = WORD_TYPE_FILTERS
    .filter(f => f.id === "ALL" || counts[f.id])
    .map(f => `
      <button type="button" class="subfilter-pill${f.id === activeWordType ? " is-active" : ""}" data-type="${f.id}">
        ${f.label}${f.id !== "ALL" ? `<span class="subfilter-count">${counts[f.id]}</span>` : ""}
      </button>
    `).join("");

  wrap.querySelectorAll(".subfilter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.dataset.type === activeWordType) return;
      activeWordType = btn.dataset.type;
      renderWordSubfilters();
      renderWordsForLevel();
    });
  });
}

function renderWordLevelTabs() {
  const tabs = document.getElementById("word-level-tabs");
  tabs.innerHTML = WORD_LEVELS.map(lvl => `
    <button type="button" class="level-tab${lvl.id === activeWordLevel ? " is-active" : ""}" data-level="${lvl.id}">
      ${lvl.sublabel} · ${lvl.label}
    </button>
  `).join("");

  tabs.querySelectorAll(".level-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeWordLevel = btn.dataset.level;
      wordQuery = "";
      const search = document.getElementById("word-search");
      if (search) search.value = "";
      renderWordLevelTabs();
      renderWordSubfilters();
      renderWordsForLevel();
    });
  });
}

function wordTicket(word) {
  return `
    <button class="ticket" type="button" data-de="${escapeAttr(word.de)}" data-en="${escapeAttr(word.en)}" data-sentence="${escapeAttr(word.sentence || "")}" data-sentence-en="${escapeAttr(word.sentenceEn || "")}" aria-label="Show example for ${escapeAttr(word.de)}">
      <span class="ticket-text">
        <span class="ticket-de">${word.de}</span>
        <span class="ticket-en">${word.en}</span>
      </span>
      <span class="speaker-btn" aria-hidden="true">${speakerIconSVG()}</span>
    </button>
  `;
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

/* ---------- Example-sentence popup ---------- */

function ensureWordPopup() {
  let popup = document.getElementById("word-popup");
  if (popup) return popup;

  popup = document.createElement("div");
  popup.id = "word-popup";
  popup.className = "word-popup";
  popup.innerHTML = `
    <div class="word-popup-backdrop" data-close></div>
    <div class="word-popup-card" role="dialog" aria-modal="true" aria-labelledby="word-popup-de">
      <button type="button" class="word-popup-close" data-close aria-label="Close">&times;</button>
      <div class="word-popup-head">
        <span class="word-popup-de" id="word-popup-de"></span>
        <span class="word-popup-speaker speaker-btn" aria-hidden="true">${speakerIconSVG()}</span>
      </div>
      <div class="word-popup-en"></div>
      <div class="word-popup-type-badge"></div>
      <div class="word-popup-sentence">
        <p class="word-popup-sentence-de"></p>
        <p class="word-popup-sentence-en"></p>
      </div>
      <div class="word-popup-grammar"></div>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => closeWordPopup());
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeWordPopup();
  });
  popup.querySelector(".word-popup-speaker").addEventListener("click", () => {
    speakGerman(popup.dataset.currentDe || "");
  });

  return popup;
}

function openWordPopup(word) {
  const popup = ensureWordPopup();
  popup.dataset.currentDe = word.de;
  popup.querySelector("#word-popup-de").textContent = word.de;
  popup.querySelector(".word-popup-en").textContent = word.en;
  const sentenceDeEl = popup.querySelector(".word-popup-sentence-de");
  const sentenceEnEl = popup.querySelector(".word-popup-sentence-en");
  if (word.sentence) {
    sentenceDeEl.textContent = word.sentence;
    sentenceEnEl.textContent = word.sentenceEn || "";
    sentenceDeEl.style.display = "";
    sentenceEnEl.style.display = word.sentenceEn ? "" : "none";
  } else {
    sentenceDeEl.textContent = "No example sentence yet for this word.";
    sentenceEnEl.textContent = "";
    sentenceDeEl.style.display = "";
    sentenceEnEl.style.display = "none";
  }

  const badgeEl = popup.querySelector(".word-popup-type-badge");
  const grammarEl = popup.querySelector(".word-popup-grammar");
  if (typeof analyzeWordGrammar === "function") {
    const info = analyzeWordGrammar(word);
    badgeEl.innerHTML = renderTypeBadges(info);
    grammarEl.innerHTML = renderGrammarPanel(info);
  } else {
    badgeEl.innerHTML = "";
    grammarEl.innerHTML = "";
  }

  popup.classList.add("is-open");
  document.body.classList.add("word-popup-lock");
}

/* ---------- Grammar panel rendering ---------- */

function gramEsc(str) {
  return String(str == null ? "" : str).replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function renderTypeBadges(info) {
  const badges = [`<span class="word-type-badge word-type-${info.type}">${gramEsc(info.typeLabel)}</span>`];
  if (info.type === "noun" && info.genderWord) {
    badges.push(`<span class="word-type-badge word-type-gender">${gramEsc(info.genderWord)}</span>`);
  }
  if (info.type === "verb") {
    if (info.modal) badges.push(`<span class="word-type-badge word-type-flag">Modalverb</span>`);
    if (info.separable) badges.push(`<span class="word-type-badge word-type-flag">Trennbar \u00b7 Separable (${gramEsc(info.prefix)})</span>`);
    if (info.reflexive) badges.push(`<span class="word-type-badge word-type-flag">Reflexiv</span>`);
  }
  return badges.join("");
}

function conjRow(label, forms) {
  return `
    <div class="conj-row">
      <span class="conj-pronoun">${label}</span>
      <span class="conj-form">${gramEsc(forms)}</span>
    </div>`;
}

function renderConjTable(title, table) {
  return `
    <div class="conj-block">
      <h4 class="conj-title">${title}</h4>
      <div class="conj-grid">
        ${conjRow("ich", table.ich)}
        ${conjRow("du", table.du)}
        ${conjRow("er/sie/es", table.er)}
        ${conjRow("wir", table.wir)}
        ${conjRow("ihr", table.ihr)}
        ${conjRow("sie/Sie", table.sie)}
      </div>
    </div>`;
}

function renderSynAnt(info) {
  if (!info.synAnt) return "";
  const rows = [];
  if (info.synAnt.syn && info.synAnt.syn.length) {
    rows.push(`<div class="synant-row"><span class="synant-label">Similar \u00b7 Synonym</span><span class="synant-words">${info.synAnt.syn.map(gramEsc).join(", ")}</span></div>`);
  }
  if (info.synAnt.ant && info.synAnt.ant.length) {
    rows.push(`<div class="synant-row"><span class="synant-label">Opposite \u00b7 Antonym</span><span class="synant-words">${info.synAnt.ant.map(gramEsc).join(", ")}</span></div>`);
  }
  if (!rows.length) return "";
  return `<div class="word-popup-synant">${rows.join("")}</div>`;
}

function renderGrammarPanel(info) {
  let html = "";

  if (info.type === "noun") {
    if (info.plural) {
      html += `<div class="grammar-fact"><strong>Plural:</strong> ${gramEsc(info.plural)}</div>`;
    }
    html += renderSynAnt(info);
    if (!info.plural && !info.synAnt) {
      html += `<div class="grammar-fact grammar-fact-muted">No plural or synonym/antonym data on file yet for this word.</div>`;
    }
  } else if (info.type === "verb") {
    html += `<div class="grammar-fact"><strong>Infinitive:</strong> ${gramEsc(info.infinitive)}</div>`;
    html += renderConjTable("Pr\u00e4sens \u00b7 Present tense", info.present);
    html += renderConjTable("Pr\u00e4teritum \u00b7 Simple past", info.past);
    if (info.past.note) {
      html += `<div class="grammar-fact grammar-fact-muted">${gramEsc(info.past.note)}</div>`;
    }
    html += `<div class="grammar-fact"><strong>Perfekt:</strong> ich ${gramEsc(info.aux === "sein" ? "bin" : "habe")} ${gramEsc(info.participle)} (${gramEsc(info.aux)} + Partizip II)</div>`;
    html += renderSynAnt(info);
  } else if (info.type === "adjective") {
    html += renderSynAnt(info);
    if (!info.synAnt) {
      html += `<div class="grammar-fact grammar-fact-muted">In German, most adjectives (like this one) can also be used as adverbs unchanged \u2014 e.g. "Das ist schnell" (adjective) vs. "Er l\u00e4uft schnell" (adverb).</div>`;
    }
  } else {
    html += renderSynAnt(info);
  }

  return html;
}



function closeWordPopup() {
  const popup = document.getElementById("word-popup");
  if (!popup) return;
  popup.classList.remove("is-open");
  document.body.classList.remove("word-popup-lock");
}

function renderWordsForLevel() {
  const root = document.getElementById("words-root");
  const searchWrap = document.getElementById("word-search-wrap");
  const subfilterWrap = document.getElementById("word-subfilter-wrap");
  const allWords = getWordsByLevel(activeWordLevel);

  if (!allWords.length) {
    if (searchWrap) searchWrap.style.display = "none";
    if (subfilterWrap) subfilterWrap.style.display = "none";
    root.innerHTML = `
      <div class="stories-coming-soon">
        <span class="hand">Kommt bald!</span>
        <p>${activeWordLevel} words are on their way. Try the <strong>All</strong> or <strong>A1</strong> tab in the meantime.</p>
      </div>
    `;
    return;
  }

  if (searchWrap) searchWrap.style.display = "";
  if (subfilterWrap) subfilterWrap.style.display = "";

  let words = wordQuery ? searchWords(activeWordLevel, wordQuery) : allWords;
  if (activeWordType !== "ALL") {
    words = words.filter(w => wordTypeOf(w) === activeWordType);
  }

  if (!words.length) {
    root.innerHTML = `
      <div class="stories-coming-soon">
        <span class="hand">Nichts gefunden</span>
        <p>No words match${wordQuery ? ` "${wordQuery}"` : ""}${activeWordType !== "ALL" ? ` in this word-type filter` : ""}. Try a different search or filter.</p>
      </div>
    `;
    return;
  }

  const groups = groupWordsByLetter(words);
  root.innerHTML = groups.map(group => `
    <div class="topic-group word-group">
      <div class="section-heading">
        <span class="num">${group.letter}</span>
        <h2>${group.letter}</h2>
      </div>
      <div class="vocab-grid">${group.words.map(wordTicket).join("")}</div>
    </div>
  `).join("");

  root.querySelectorAll(".ticket").forEach(el => {
    el.addEventListener("click", e => {
      if (e.target.closest(".speaker-btn")) {
        e.stopPropagation();
        speakGerman(el.dataset.de);
        return;
      }
      openWordPopup({
        de: el.dataset.de,
        en: el.dataset.en,
        sentence: el.dataset.sentence,
        sentenceEn: el.dataset.sentenceEn
      });
    });
  });
}

function initWordSearch() {
  const search = document.getElementById("word-search");
  if (!search) return;
  search.addEventListener("input", () => {
    wordQuery = search.value;
    renderWordsForLevel();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderWordLevelTabs();
  renderWordSubfilters();
  renderWordsForLevel();
  initWordSearch();
});
