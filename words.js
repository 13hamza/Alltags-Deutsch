/* ============================================================
   Alltags-Deutsch — words.js (words.html)
   Renders the level tabs (A1 / A2 / B1 / B2) and, for the active
   level, either an alphabet-grouped grid of vocabulary tickets
   (click one, or its speaker icon, to hear it pronounced) or a
   "coming soon" note if that level has no words yet. Also wires
   up the search box that filters the active level's words.
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
    <button class="ticket" type="button" data-de="${escapeAttr(word.de)}" aria-label="Pronounce ${escapeAttr(word.de)}">
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
    el.addEventListener("click", () => speakGerman(el.dataset.de));
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
