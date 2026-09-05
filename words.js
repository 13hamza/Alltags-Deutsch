/* ============================================================
   Alltags-Deutsch — words.js (words.html)
   Renders the level tabs (A1 / A2 / B1 / B2) and, for the active
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

let activeWordLevel = "A1";
let wordQuery = "";

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
      <div class="word-popup-sentence">
        <p class="word-popup-sentence-de"></p>
        <p class="word-popup-sentence-en"></p>
      </div>
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
  popup.classList.add("is-open");
  document.body.classList.add("word-popup-lock");
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
  const allWords = getWordsByLevel(activeWordLevel);

  if (!allWords.length) {
    if (searchWrap) searchWrap.style.display = "none";
    root.innerHTML = `
      <div class="stories-coming-soon">
        <span class="hand">Kommt bald!</span>
        <p>${activeWordLevel} words are on their way. Try the A1 list in the meantime.</p>
      </div>
    `;
    return;
  }

  if (searchWrap) searchWrap.style.display = "";

  const words = wordQuery ? searchWords(activeWordLevel, wordQuery) : allWords;

  if (!words.length) {
    root.innerHTML = `
      <div class="stories-coming-soon">
        <span class="hand">Nichts gefunden</span>
        <p>No words match "${wordQuery}". Try a different search.</p>
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
  renderWordsForLevel();
  initWordSearch();
});
