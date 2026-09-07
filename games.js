/* ============================================================
   Alltags-Deutsch — games.js (games.html)
   Three practice games built on the site's own vocabulary
   (WORDS from words-data.js): Multiple Choice, Type It and
   Match It. Includes an adaptive "learning" system (spaced
   repetition-ish word weighting), a difficulty ramp, lives,
   streaks, a local scoreboard, and a wrong-words review list.
   Ported from a standalone prototype and reskinned to the
   Alltags-Deutsch market-stall look.
   ============================================================ */

(function () {
"use strict";

/* ────────────────────────────────────────
   LEARNING SYSTEM
   Tracks per-word weight (how often a word should resurface),
   picks the next word to ask, and keeps a running wrong-word list.
   ──────────────────────────────────────── */
class LearningSystem {
  constructor(storageKey, wrongKey) {
    this.storageKey = storageKey;
    this.wrongKey = wrongKey;
    this.wordRecords = {};
    this.wrongWords = [];
    this.rate = 1.0;
    this.load();
  }

  setRate(rate) { this.rate = rate || 1.0; }

  getKey(de, en) { return `${de}|${en}`; }

  initWord(de, en) {
    const key = this.getKey(de, en);
    if (!this.wordRecords[key]) {
      this.wordRecords[key] = { weight: 1.0, seen: false, lastSeen: 0, correctCount: 0, wrongCount: 0, streak: 0 };
    }
    return this.wordRecords[key];
  }

  recordCorrect(de, en) {
    const rec = this.initWord(de, en);
    rec.correctCount++;
    rec.streak = Math.min(rec.streak + 1, 5);
    rec.weight = Math.max(0.1, rec.weight - 0.15 * this.rate);
    rec.seen = true;
    rec.lastSeen = Date.now();
    this.save();
    return rec;
  }

  recordWrong(de, en) {
    const rec = this.initWord(de, en);
    rec.wrongCount++;
    rec.streak = Math.max(0, rec.streak - 2);
    rec.weight = Math.min(3.0, rec.weight + 0.25 * this.rate);
    rec.seen = true;
    rec.lastSeen = Date.now();
    this.addWrongWord(de, en);
    this.save();
    return rec;
  }

  recordSkipped(de, en) {
    const rec = this.initWord(de, en);
    rec.weight = Math.min(3.0, rec.weight + 0.1 * this.rate);
    rec.seen = true;
    rec.lastSeen = Date.now();
    this.save();
    return rec;
  }

  addWrongWord(de, en) {
    if (!this.wrongWords.some(w => w.de === de && w.en === en)) {
      this.wrongWords.push({ de, en });
    }
  }

  getWrongWords() { return this.wrongWords; }
  clearWrongWords() { this.wrongWords = []; }

  getNextWordWeight(de, en) {
    const rec = this.wordRecords[this.getKey(de, en)];
    return rec ? rec.weight : 1.0;
  }

  getStats(pool) {
    let total = 0, seen = 0;
    for (const w of pool) {
      const rec = this.wordRecords[this.getKey(w.de, w.en)];
      total++;
      if (rec && rec.seen) seen++;
    }
    return { total, seen };
  }

  isComplete(pool) {
    const stats = this.getStats(pool);
    return stats.total > 0 && stats.seen >= stats.total;
  }

  reset() {
    this.wordRecords = {};
    this.wrongWords = [];
    this.save();
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.wordRecords));
      localStorage.setItem(this.wrongKey, JSON.stringify(this.wrongWords));
    } catch (_) {}
  }

  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) this.wordRecords = JSON.parse(data);
      const wrongData = localStorage.getItem(this.wrongKey);
      if (wrongData) this.wrongWords = JSON.parse(wrongData);
    } catch (_) {}
  }
}

const learning = new LearningSystem("ad_game_learning_v1", "ad_game_wrong_v1");

/* ────────────────────────────────────────
   STATE
   ──────────────────────────────────────── */
let setupDir = "de-en";
let setupLetters = ["all"];   // multi-select letters, or ['all']
let setupGameMode = "mc";
let setupLearningRate = 1.0;
let setupLevel = "A1";
const MAX_LETTERS = 6;

let pool = [], lives = 3, score = 0, streak = 0, questionCount = 0;
let sessionQueue = [], sessionIndex = 0;
let answered = false, gameOver = false;
let currentQ = null;
let correctIdx = -1;

const MAX_DIFFICULTY = 5;
const DIFFICULTY_STEP = 4;
let difficultyLevel = 1;
let difficultyProgress = 0;
let recentCorrectWords = [];

let matchPairs = [], matchSelected = null, matchMatchedCount = 0, matchMistakes = 0;
let matchTimerInterval = null, matchElapsed = 0;
const MATCH_PAIR_COUNT = 6;

/* ────────────────────────────────────────
   SOUND EFFECTS (Web Audio, no assets needed)
   ──────────────────────────────────────── */
let actx = null;
function getActx() {
  if (!actx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) actx = new AC();
  }
  if (actx && actx.state === "suspended") actx.resume();
  return actx;
}
function tone(ctx, freq, startAt, dur, type, peakGain) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(peakGain || 0.18, startAt + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(startAt);
  osc.stop(startAt + dur + 0.02);
}
function playCorrectSound() {
  const ctx = getActx();
  if (!ctx) return;
  const t0 = ctx.currentTime;
  tone(ctx, 523.25, t0, 0.14, "triangle", 0.16);
  tone(ctx, 659.25, t0 + 0.09, 0.14, "triangle", 0.16);
  tone(ctx, 783.99, t0 + 0.18, 0.22, "triangle", 0.18);
}
function playWrongSound() {
  const ctx = getActx();
  if (!ctx) return;
  const t0 = ctx.currentTime;
  tone(ctx, 220, t0, 0.16, "sawtooth", 0.13);
  tone(ctx, 164.81, t0 + 0.11, 0.22, "sawtooth", 0.13);
}
function playWinSound() {
  const ctx = getActx();
  if (!ctx) return;
  const t0 = ctx.currentTime;
  tone(ctx, 523.25, t0, 0.12, "triangle", 0.15);
  tone(ctx, 659.25, t0 + 0.10, 0.12, "triangle", 0.15);
  tone(ctx, 783.99, t0 + 0.20, 0.12, "triangle", 0.15);
  tone(ctx, 1046.5, t0 + 0.30, 0.25, "triangle", 0.18);
}

/* ────────────────────────────────────────
   FEEDBACK ANIMATIONS
   ──────────────────────────────────────── */
const fxLayer = document.getElementById("fx-layer");
function flashScreen(kind) {
  const el = document.createElement("div");
  el.className = "game-flash-overlay " + (kind === "good" ? "flash-good" : "flash-bad");
  fxLayer.appendChild(el);
  setTimeout(() => el.remove(), 600);
}
const CONFETTI_EMOJI = ["🎉", "✨", "⭐", "🌿", "🥨", "✅"];
function burstConfetti() {
  const count = 16;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.textContent = CONFETTI_EMOJI[Math.floor(Math.random() * CONFETTI_EMOJI.length)];
    const startX = 15 + Math.random() * 70;
    const dx = (Math.random() - 0.5) * 220;
    const dur = 0.9 + Math.random() * 0.6;
    const size = 14 + Math.random() * 14;
    const rot = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 360);
    piece.style.left = startX + "vw";
    piece.style.setProperty("--dx", dx + "px");
    piece.style.setProperty("--dur", dur + "s");
    piece.style.setProperty("--size", size + "px");
    piece.style.setProperty("--rot", rot + "deg");
    fxLayer.appendChild(piece);
    setTimeout(() => piece.remove(), dur * 1000 + 100);
  }
}
function celebrateCorrect(targetEl) {
  playCorrectSound();
  flashScreen("good");
  burstConfetti();
  if (targetEl) {
    targetEl.classList.remove("correct-pop");
    void targetEl.offsetWidth;
    targetEl.classList.add("correct-pop");
    setTimeout(() => targetEl.classList.remove("correct-pop"), 550);
  }
}
function shakeWrong(targetEl) {
  playWrongSound();
  flashScreen("bad");
  if (targetEl) {
    targetEl.classList.remove("wrong-shudder");
    void targetEl.offsetWidth;
    targetEl.classList.add("wrong-shudder");
    setTimeout(() => targetEl.classList.remove("wrong-shudder"), 550);
  }
}

/* ────────────────────────────────────────
   SPEECH — German words use the site's speakGerman (data.js);
   English words use a small local helper of the same shape.
   ──────────────────────────────────────── */
function speakEnglish(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-GB";
  utter.rate = 0.95;
  window.speechSynthesis.speak(utter);
}
function speakWord(text, lang) {
  if (lang === "de-DE") speakGerman(text);
  else speakEnglish(text);
}

/* ────────────────────────────────────────
   DOM REFS
   ──────────────────────────────────────── */
const setupScreen   = document.getElementById("setup-screen");
const gameScreen    = document.getElementById("game-screen");
const startBtn      = document.getElementById("start-btn");
const backBtn       = document.getElementById("back-btn");
const scoreVal      = document.getElementById("score-val");
const progressFill  = document.getElementById("progress-fill");
const sessionTag    = document.getElementById("session-tag");
const qCard         = document.getElementById("q-card");
const qDir          = document.getElementById("q-dir");
const qWord         = document.getElementById("q-word");
const qCatTag       = document.getElementById("q-cat-tag");
const quizSection   = document.getElementById("quiz-section");
const mcSection     = document.getElementById("mc-section");
const typeSection   = document.getElementById("type-section");
const matchSection  = document.getElementById("match-section");
const optBtns       = document.querySelectorAll(".opt-btn");
const typeInput     = document.getElementById("type-input");
const submitBtn     = document.getElementById("submit-btn");
const spellFeedback = document.getElementById("spell-feedback");
const specialChars  = document.getElementById("special-chars");
const statusMsg     = document.getElementById("status-msg");
const nextBtn       = document.getElementById("next-btn");
const skipBtn       = document.getElementById("skip-btn");
const sbList        = document.getElementById("sb-list");
const resetBtn      = document.getElementById("reset-btn");
const resetLearningBtn = document.getElementById("reset-learning-btn");
const goOverlay     = document.getElementById("gameover-overlay");
const goIcon        = document.getElementById("go-icon");
const goTitle       = document.getElementById("go-title");
const goSub         = document.getElementById("go-sub");
const goScore       = document.getElementById("go-score");
const goRetry       = document.getElementById("go-retry");
const goMenu        = document.getElementById("go-menu");
const streakPill    = document.getElementById("streak-pill");
const streakNum     = document.getElementById("streak-num");
const hearts        = ["h1", "h2", "h3"].map(id => document.getElementById(id));
const livesWrap     = document.getElementById("lives-wrap");
const matchGrid     = document.getElementById("match-grid");
const matchTimer    = document.getElementById("match-timer");
const matchMatchedEl = document.getElementById("match-matched");
const matchMistakesEl = document.getElementById("match-mistakes");
const dirSection    = document.getElementById("dir-section");
const wrongWordsContainer = document.getElementById("wrong-words-container");
const wrongWordsItems = document.getElementById("wrong-words-items");
const gamesHeroSub  = document.getElementById("games-hero-sub");
const levelTabsEl   = document.getElementById("game-level-tabs");
const catWrap       = document.getElementById("cat-wrap");
const catCountEl    = document.getElementById("cat-count");
const catClearBtn   = document.getElementById("cat-clear");

/* ────────────────────────────────────────
   SETUP UI — mode, direction, learning speed
   ──────────────────────────────────────── */
document.querySelectorAll(".mode-card").forEach(c => {
  c.addEventListener("click", () => {
    document.querySelectorAll(".mode-card").forEach(x => x.classList.remove("selected"));
    c.classList.add("selected");
    setupGameMode = c.dataset.gamemode;
    dirSection.style.display = setupGameMode === "match" ? "none" : "";
  });
});

document.querySelectorAll(".dir-btn").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".dir-btn").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    setupDir = b.dataset.val;
  });
});

document.querySelectorAll(".rate-btn").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".rate-btn").forEach(x => x.classList.remove("selected"));
    b.classList.add("selected");
    setupLearningRate = parseFloat(b.dataset.val);
  });
});

/* ────────────────────────────────────────
   SETUP UI — level tabs (reuses WORD_LEVELS from words-data.js)
   ──────────────────────────────────────── */
function renderLevelTabs() {
  levelTabsEl.innerHTML = WORD_LEVELS.map(lvl => `
    <button type="button" class="level-tab${lvl.id === setupLevel ? " is-active" : ""}" data-level="${lvl.id}">
      ${lvl.sublabel} · ${lvl.label}
    </button>
  `).join("");

  levelTabsEl.querySelectorAll(".level-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      setupLevel = btn.dataset.level;
      renderLevelTabs();
      setupLetters = ["all"];
      renderLetterPills();
      updateHeroSub();
    });
  });
}

/* ────────────────────────────────────────
   SETUP UI — letter pills (built from the active level's own words,
   so this always reflects whatever vocabulary the site actually has)
   ──────────────────────────────────────── */
function availableLetters() {
  const words = getWordsByLevel(setupLevel);
  const letters = [...new Set(words.map(w => w.letter))].sort();
  return letters;
}

function renderLetterPills() {
  const letters = availableLetters();
  const allPill = `<div class="cat-pill" data-val="all">📚 All</div>`;
  const letterPills = letters.map(l => `<div class="cat-pill" data-val="${l}">${l}</div>`).join("");
  catWrap.innerHTML = allPill + letterPills;
  wireLetterPills();
  renderLetterSelection();
}

function wireLetterPills() {
  catWrap.querySelectorAll(".cat-pill").forEach(p => {
    p.addEventListener("click", () => {
      const val = p.dataset.val;
      if (val === "all") {
        setupLetters = ["all"];
      } else if (setupLetters.includes(val)) {
        setupLetters = setupLetters.filter(c => c !== val);
        if (setupLetters.length === 0) setupLetters = ["all"];
      } else {
        if (setupLetters[0] === "all") setupLetters = [];
        if (setupLetters.length >= MAX_LETTERS) setupLetters.shift();
        setupLetters.push(val);
      }
      renderLetterSelection();
      updateHeroSub();
    });
  });
}

function renderLetterSelection() {
  catWrap.querySelectorAll(".cat-pill").forEach(p => {
    const on = setupLetters.includes(p.dataset.val) || (p.dataset.val === "all" && setupLetters[0] === "all");
    p.classList.toggle("selected", on);
  });
  const n = setupLetters.length;
  catCountEl.textContent = setupLetters[0] === "all"
    ? "All words"
    : `${n} letter${n === 1 ? "" : "s"} selected${n < MAX_LETTERS ? ` · up to ${MAX_LETTERS}` : " · max"}`;
  catCountEl.classList.toggle("at-limit", n >= MAX_LETTERS && setupLetters[0] !== "all");
}

catClearBtn.addEventListener("click", () => {
  setupLetters = ["all"];
  renderLetterSelection();
  updateHeroSub();
});

function letterLabel(letters) {
  if (letters[0] === "all") return "all letters";
  return "letters " + letters.join(", ");
}

function updateHeroSub() {
  const words = getWordsByLevel(setupLevel);
  gamesHeroSub.textContent = words.length
    ? `${words.length} ${setupLevel} words · choose your game`
    : `${setupLevel} words are coming soon — try A1 in the meantime`;
}

/* ────────────────────────────────────────
   BUTTONS
   ──────────────────────────────────────── */
startBtn.addEventListener("click", () => { getActx(); startGame(); });
backBtn.addEventListener("click", goToMenu);
goMenu.addEventListener("click", goToMenu);
goRetry.addEventListener("click", () => { goOverlay.style.display = "none"; startGame(); });
resetBtn.addEventListener("click", () => {
  if (confirm("Clear all scores?")) { saveScores([]); renderScoreboard(); }
});
resetLearningBtn.addEventListener("click", () => {
  if (confirm("Reset all learning progress? This will reset word difficulty tracking and the wrong-word list.")) {
    learning.reset();
    renderScoreboard();
    alert("Learning data has been reset!");
  }
});

document.querySelectorAll(".char-btn").forEach(b => {
  b.addEventListener("click", () => {
    const s = typeInput.selectionStart, e = typeInput.selectionEnd;
    typeInput.value = typeInput.value.slice(0, s) + b.dataset.char + typeInput.value.slice(e);
    typeInput.focus();
    typeInput.setSelectionRange(s + 1, s + 1);
  });
});

qCard.addEventListener("click", () => {
  if (setupGameMode === "match" || !currentQ) return;
  const lang = setupDir === "de-en" ? "de-DE" : "en-GB";
  speakWord(currentQ.prompt, lang);
  qCard.classList.add("speaking");
  setTimeout(() => qCard.classList.remove("speaking"), 1200);
});

document.addEventListener("keydown", e => {
  if (setupGameMode === "mc" && gameScreen.style.display !== "none") {
    const map = { KeyA: 0, KeyB: 1, KeyC: 2, KeyD: 3 };
    if (map[e.code] !== undefined && !answered && !gameOver) {
      optBtns[map[e.code]].click();
      return;
    }
  }
  if ((e.key === "Enter" || e.key === "ArrowRight") && !nextBtn.disabled && setupGameMode !== "match") {
    nextBtn.click();
  }
});
typeInput.addEventListener("keydown", e => {
  if (e.key === "Enter") { e.preventDefault(); submitBtn.click(); }
});

/* ────────────────────────────────────────
   START
   ──────────────────────────────────────── */
function startGame() {
  pool = buildPool(setupLevel, setupLetters);
  if (pool.length < 4) {
    alert('Not enough words in this selection. Try adding another letter or select "All".');
    return;
  }

  lives = 3; score = 0; streak = 0; questionCount = 0; gameOver = false;
  sessionQueue = buildSessionQueue(pool);
  sessionIndex = 0;
  scoreVal.textContent = "0";
  progressFill.style.width = "0%";
  setupScreen.style.display = "none";
  gameScreen.style.display = "block";

  learning.setRate(setupLearningRate);
  difficultyLevel = 1;
  difficultyProgress = 0;
  recentCorrectWords = [];
  updateDifficultyUI();

  learning.clearWrongWords();

  const stats = learning.getStats(pool);
  const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;

  if (setupGameMode === "match") {
    quizSection.style.display = "none";
    matchSection.style.display = "block";
    livesWrap.style.display = "none";
    streakPill.style.display = "none";
    startMatchRound();
  } else {
    quizSection.style.display = "block";
    matchSection.style.display = "none";
    livesWrap.style.display = "flex";
    mcSection.style.display = setupGameMode === "mc" ? "block" : "none";
    typeSection.style.display = setupGameMode === "type" ? "block" : "none";
    specialChars.style.display = (setupGameMode === "type" && setupDir === "en-de") ? "flex" : "none";
    updateLives();
    renderScoreboard();
    sessionTag.textContent = `${pool.length} words · ${letterLabel(setupLetters)} · 📚 lifetime ${progress}% (${stats.seen}/${stats.total})`;
    nextQuestion();
  }
}

function goToMenu() {
  clearMatchTimer();
  goOverlay.style.display = "none";
  gameScreen.style.display = "none";
  setupScreen.style.display = "block";
  livesWrap.style.display = "flex";
}

/* ────────────────────────────────────────
   POOL — sourced straight from words-data.js
   ──────────────────────────────────────── */
function buildPool(level, letters) {
  const words = getWordsByLevel(level);
  if (letters[0] === "all") return words;
  return words.filter(w => letters.includes(w.letter));
}

/** Build this session's question order: every word in the pool exactly
 *  once (so nothing repeats within a session), weighted-shuffled so
 *  words you've historically gotten wrong tend to surface earlier —
 *  that's the "difficulty" learning system actually doing something
 *  visible, instead of only nudging a score multiplier. */
function buildSessionQueue(wordPool) {
  return wordPool
    .map(w => ({ w, score: Math.random() * learning.getNextWordWeight(w.de, w.en) }))
    .sort((a, b) => b.score - a.score)
    .map(x => x.w);
}

/* ────────────────────────────────────────
   COMPLETION / NEXT QUESTION
   ──────────────────────────────────────── */
function showCompletion() {
  gameOver = true;
  clearMatchTimer();
  optBtns.forEach(b => b.disabled = true);
  submitBtn.disabled = true;
  nextBtn.disabled = true;

  insertScore(score);
  playWinSound();

  const wrongWords = learning.getWrongWords();

  goIcon.textContent = "🏆";
  goTitle.textContent = "🎉 Round complete!";
  goSub.textContent = `You went through all ${sessionQueue.length} word${sessionQueue.length !== 1 ? "s" : ""} in this round — nothing repeated. 🎊`;
  goScore.innerHTML = `${score}<small>points</small>`;
  renderWrongWords(wrongWords, true);
  goOverlay.style.display = "flex";
}

function nextQuestion() {
  if (sessionIndex >= sessionQueue.length && !gameOver) { showCompletion(); return; }

  answered = false;
  spellFeedback.innerHTML = "";
  typeInput.value = "";
  typeInput.className = "type-input";
  statusMsg.textContent = setupGameMode === "mc" ? "Pick the right answer" : "Type your answer";
  statusMsg.className = "status-msg";
  nextBtn.disabled = true;
  submitBtn.disabled = false;

  const selection = sessionQueue[sessionIndex];
  sessionIndex++;
  learning.initWord(selection.de, selection.en);

  currentQ = {
    prompt: setupDir === "de-en" ? selection.de : selection.en,
    answer: setupDir === "de-en" ? selection.en : selection.de,
    letter: selection.letter,
    de: selection.de,
    en: selection.en,
    sentence: selection.sentence,
    sentenceEn: selection.sentenceEn
  };

  qDir.innerHTML = setupDir === "de-en"
    ? '<span class="flag-chip">🇩🇪</span> → <span class="flag-chip">🇬🇧</span>'
    : '<span class="flag-chip">🇬🇧</span> → <span class="flag-chip">🇩🇪</span>';
  qWord.textContent = currentQ.prompt;
  qCatTag.textContent = "Letter " + currentQ.letter;

  const wrongCount = learning.getWrongWords().length;
  sessionTag.textContent = `${pool.length} words · ${letterLabel(setupLetters)} · Q${sessionIndex}/${sessionQueue.length} ${wrongCount > 0 ? "· ❌ " + wrongCount + " wrong" : ""}`;
  progressFill.style.width = Math.round((sessionIndex / sessionQueue.length) * 100) + "%";

  const lang = setupDir === "de-en" ? "de-DE" : "en-GB";
  speakWord(currentQ.prompt, lang);

  if (setupGameMode === "mc") buildMC(currentQ.answer);
  else typeInput.focus();
}

/* ────────────────────────────────────────
   MULTIPLE CHOICE
   ──────────────────────────────────────── */
function buildMC(correct) {
  const allAnswers = pool.map(w => setupDir === "de-en" ? w.en : w.de).filter(w => w !== correct);
  const sameLetterAnswers = pool
    .filter(w => w.letter === currentQ.letter)
    .map(w => setupDir === "de-en" ? w.en : w.de)
    .filter(w => w !== correct);

  let candidates;
  if (difficultyLevel >= 3 && sameLetterAnswers.length > 0) {
    const fromLetter = shuffle(sameLetterAnswers);
    const rest = shuffle(allAnswers.filter(w => !fromLetter.includes(w)));
    candidates = [...fromLetter, ...rest].slice(0, 3);
  } else {
    candidates = shuffle(allAnswers).slice(0, 3);
  }
  while (candidates.length < 3) candidates.push("—");
  const opts = shuffle([correct, ...candidates]);
  correctIdx = opts.indexOf(correct);
  optBtns.forEach((btn, i) => {
    btn.innerHTML = `<span class="key-hint">${["A", "B", "C", "D"][i]}</span>${opts[i]}`;
    btn.className = "opt-btn";
    btn.disabled = false;
    btn.dataset.opt = opts[i];
  });
}

optBtns.forEach(btn => btn.addEventListener("click", handleMCClick));

function handleMCClick(e) {
  if (answered || gameOver) return;
  const btn = e.currentTarget;
  answered = true;
  optBtns.forEach(b => b.disabled = true);
  const isCorrect = btn.dataset.opt === currentQ.answer;
  const answerLang = setupDir === "de-en" ? "en-GB" : "de-DE";
  if (isCorrect) {
    btn.classList.add("correct");
    speakWord(currentQ.answer, answerLang);
    handleCorrect();
  } else {
    btn.classList.add("wrong");
    optBtns.forEach(b => { if (b.dataset.opt === currentQ.answer) b.classList.add("correct"); });
    speakWord(currentQ.answer, answerLang);
    handleWrong();
  }
}

/* ────────────────────────────────────────
   TYPE IT
   ──────────────────────────────────────── */
submitBtn.addEventListener("click", handleTypeSubmit);

function handleTypeSubmit() {
  if (answered || gameOver) return;
  const raw = typeInput.value.trim();
  if (!raw) { typeInput.focus(); return; }
  answered = true;
  submitBtn.disabled = true;
  const isGermanAnswer = setupDir === "en-de";
  const result = checkTypedAnswer(raw, currentQ.answer, isGermanAnswer);
  const answerLang = setupDir === "de-en" ? "en-GB" : "de-DE";

  if (result.exact) {
    typeInput.classList.add("correct-input");
    spellFeedback.innerHTML = "";
    speakWord(currentQ.answer, answerLang);
    handleCorrect();
  } else if (result.close) {
    typeInput.classList.add("wrong-input");
    const diffHtml = buildDiffHtml(raw, currentQ.answer);
    spellFeedback.innerHTML = `<span class="spell-close">Almost!</span> Correct: <strong>${escHtml(currentQ.answer)}</strong><br>${diffHtml}`;
    qCard.classList.add("shake"); setTimeout(() => qCard.classList.remove("shake"), 400);
    speakWord(currentQ.answer, answerLang);
    handleWrong();
  } else {
    typeInput.classList.add("wrong-input");
    spellFeedback.innerHTML = `Correct answer: <strong>${escHtml(currentQ.answer)}</strong>`;
    qCard.classList.add("shake"); setTimeout(() => qCard.classList.remove("shake"), 400);
    speakWord(currentQ.answer, answerLang);
    handleWrong();
  }
}

function normalise(s) { return s.toLowerCase().replace(/\s+/g, " ").trim(); }
function checkTypedAnswer(input, answer, isGerman) {
  const ni = normalise(input), na = normalise(answer);
  if (ni === na) return { exact: true };
  if (isGerman && foldUmlauts(ni) === foldUmlauts(na)) return { exact: true };
  const dist = levenshtein(ni, na);
  const baseThreshold = Math.max(2, Math.floor(na.replace(/\s/g, "").length / 5));
  const threshold = Math.max(1, baseThreshold - Math.floor((difficultyLevel - 1) / 2));
  if (dist <= threshold) return { close: true, dist };
  return { exact: false, close: false };
}
function foldUmlauts(s) {
  return s.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")
          .replace(/Ä/g, "ae").replace(/Ö/g, "oe").replace(/Ü/g, "ue").replace(/ß/g, "ss");
}
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) => Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
  }
  return dp[m][n];
}
function buildDiffHtml(input, correct) {
  const a = normalise(input), b = normalise(correct);
  let html = "You typed: ";
  for (let i = 0; i < a.length; i++) {
    html += i < b.length && a[i] === b[i]
      ? `<span class="diff-right">${escHtml(a[i])}</span>`
      : `<span class="diff-wrong">${escHtml(a[i])}</span>`;
  }
  return html;
}

/* ────────────────────────────────────────
   OUTCOMES
   ──────────────────────────────────────── */
function handleCorrect() {
  learning.recordCorrect(currentQ.de, currentQ.en);
  registerCorrectForDifficulty(currentQ.de, currentQ.en);

  streak++;
  questionCount++;
  const bonus = (streak >= 5 ? 20 : streak >= 3 ? 15 : 10) + (difficultyLevel - 1) * 3;
  score += bonus;
  scoreVal.textContent = score;
  qCard.classList.add("bounce");
  setTimeout(() => qCard.classList.remove("bounce"), 400);
  celebrateCorrect(qCard);

  const stats = learning.getStats(pool);
  const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
  setStatus(`✓ Correct! +${bonus}${streak >= 3 ? " 🔥" : ""} · 📊 ${progress}% covered`, "ok");
  updateStreak();
  nextBtn.disabled = false;
}

function handleWrong() {
  learning.recordWrong(currentQ.de, currentQ.en);
  registerWrongForDifficulty();

  streak = 0;
  updateStreak();
  lives--;
  updateLives();
  questionCount++;
  shakeWrong(qCard);

  const stats = learning.getStats(pool);
  const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
  const wrongCount = learning.getWrongWords().length;
  if (setupGameMode === "mc") setStatus(`✗ Wrong — correct: "${currentQ.answer}" · 📊 ${progress}% covered · ❌ ${wrongCount} wrong`, "bad");
  else setStatus("✗ Wrong", "bad");

  if (lives <= 0) { endGame(); return; }
  nextBtn.disabled = false;
}

skipBtn.addEventListener("click", () => {
  if (gameOver) return;
  learning.recordSkipped(currentQ.de, currentQ.en);
  streak = 0;
  updateStreak();
  const stats = learning.getStats(pool);
  const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
  setStatus(`Skipped — answer: "${currentQ.answer}" · 📊 ${progress}% covered`, "");
  speakWord(currentQ.answer, setupDir === "de-en" ? "en-GB" : "de-DE");
  nextBtn.disabled = false;
  answered = true;
  submitBtn.disabled = true;
  if (setupGameMode === "mc") optBtns.forEach(b => b.disabled = true);
});

nextBtn.addEventListener("click", () => { if (!gameOver) nextQuestion(); });

/* ────────────────────────────────────────
   MATCH IT
   ──────────────────────────────────────── */
function startMatchRound() {
  clearMatchTimer();
  matchMatchedCount = 0;
  matchMistakes = 0;
  matchSelected = null;
  matchMatchedEl.textContent = "0";
  matchMistakesEl.textContent = "0";

  const allWords = [...pool];
  const unseenWords = allWords.filter(w => {
    const rec = learning.wordRecords[learning.getKey(w.de, w.en)];
    return !rec || !rec.seen;
  });
  const seenWords = allWords.filter(w => {
    const rec = learning.wordRecords[learning.getKey(w.de, w.en)];
    return rec && rec.seen;
  });

  const combined = [...shuffle(unseenWords), ...shuffle(seenWords)];
  const used = new Set();
  const selectedPairs = [];
  for (const w of combined) {
    const key = learning.getKey(w.de, w.en);
    if (!used.has(key)) {
      used.add(key);
      selectedPairs.push({ de: w.de, en: w.en, letter: w.letter });
      if (selectedPairs.length >= MATCH_PAIR_COUNT) break;
    }
  }
  while (selectedPairs.length < MATCH_PAIR_COUNT && allWords.length > 0) {
    const idx = Math.floor(Math.random() * allWords.length);
    const w = allWords[idx];
    const key = learning.getKey(w.de, w.en);
    if (!selectedPairs.some(p => learning.getKey(p.de, p.en) === key)) {
      selectedPairs.push({ de: w.de, en: w.en, letter: w.letter });
    }
  }

  matchPairs = selectedPairs;

  const deCards = shuffle(matchPairs.map((p, i) => ({ text: p.de, lang: "de", pairId: i })));
  const enCards = shuffle(matchPairs.map((p, i) => ({ text: p.en, lang: "en", pairId: i })));
  const allCards = shuffle([...deCards, ...enCards]);

  matchGrid.innerHTML = "";
  allCards.forEach(card => {
    const el = document.createElement("div");
    el.className = "match-card";
    el.dataset.lang = card.lang;
    el.dataset.pairid = card.pairId;
    el.dataset.text = card.text;
    el.innerHTML = `${escHtml(card.text)}<span class="lang-badge">${card.lang === "de" ? "🇩🇪" : "🇬🇧"}</span>`;
    el.addEventListener("click", () => handleMatchClick(el));
    matchGrid.appendChild(el);
  });

  const stats = learning.getStats(pool);
  const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
  const wrongCount = learning.getWrongWords().length;
  sessionTag.textContent = `${pool.length} words · ${letterLabel(setupLetters)} · Match · 📚 ${progress}% covered ${wrongCount > 0 ? "· ❌ " + wrongCount + " wrong" : ""}`;

  matchElapsed = 0;
  matchTimerInterval = setInterval(() => {
    matchElapsed++;
    const m = Math.floor(matchElapsed / 60);
    const s = matchElapsed % 60;
    matchTimer.textContent = `${m}:${s.toString().padStart(2, "0")}`;
  }, 1000);

  progressFill.style.width = "0%";
}

function handleMatchClick(el) {
  if (el.classList.contains("matched") || el.classList.contains("wrong-flash")) return;

  speakWord(el.dataset.text, el.dataset.lang === "de" ? "de-DE" : "en-GB");

  if (!matchSelected) { matchSelected = el; el.classList.add("selected"); return; }
  if (matchSelected === el) { el.classList.remove("selected"); matchSelected = null; return; }
  if (matchSelected.dataset.lang === el.dataset.lang) {
    matchSelected.classList.remove("selected");
    matchSelected = el;
    el.classList.add("selected");
    return;
  }

  if (matchSelected.dataset.pairid === el.dataset.pairid) {
    matchSelected.classList.remove("selected");
    matchSelected.classList.add("matched");
    el.classList.add("matched");

    const pair = matchPairs[parseInt(el.dataset.pairid, 10)];
    if (pair) {
      learning.recordCorrect(pair.de, pair.en);
      registerCorrectForDifficulty(pair.de, pair.en);
    }

    celebrateCorrect(el);
    matchMatchedCount++;
    matchMatchedEl.textContent = matchMatchedCount;
    score += 15;
    scoreVal.textContent = score;
    matchSelected = null;

    if (matchMatchedCount === MATCH_PAIR_COUNT) {
      clearMatchTimer();
      const timeBonus = Math.max(0, 60 - matchElapsed) * 2;
      score += timeBonus;
      scoreVal.textContent = score;

      const stats = learning.getStats(pool);
      const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
      setTimeout(() => {
        insertScore(score);
        goIcon.textContent = "🎉";
        goTitle.textContent = "Matched!";
        goSub.textContent = `All ${MATCH_PAIR_COUNT} pairs in ${matchTimer.textContent}${timeBonus > 0 ? ` · +${timeBonus} speed bonus` : ""} · 📚 lifetime ${progress}% (${stats.seen}/${stats.total})`;
        goScore.innerHTML = `${score}<small>points</small>`;
        renderWrongWords(learning.getWrongWords(), true);
        goOverlay.style.display = "flex";
      }, 400);
    }
  } else {
    const pair = matchPairs[parseInt(el.dataset.pairid, 10)];
    if (pair) {
      learning.recordWrong(pair.de, pair.en);
      registerWrongForDifficulty();
    }
    matchMistakes++;
    matchMistakesEl.textContent = matchMistakes;
    const prev = matchSelected;
    prev.classList.remove("selected");
    prev.classList.add("wrong-flash");
    el.classList.add("wrong-flash");
    shakeWrong(null);
    score = Math.max(0, score - 3);
    scoreVal.textContent = score;
    setTimeout(() => {
      prev.classList.remove("wrong-flash");
      el.classList.remove("wrong-flash");
    }, 600);
    matchSelected = null;
  }
}

function clearMatchTimer() {
  if (matchTimerInterval) { clearInterval(matchTimerInterval); matchTimerInterval = null; }
}

/* ────────────────────────────────────────
   HELPERS
   ──────────────────────────────────────── */
function updateLives() {
  hearts.forEach((h, i) => {
    if (i < lives) { h.className = "heart"; h.textContent = "❤️"; }
    else { h.className = "heart lost"; h.textContent = "🖤"; }
  });
}
function updateStreak() {
  if (streak >= 2) {
    streakNum.textContent = streak;
    streakPill.style.display = "flex";
  } else {
    streakPill.style.display = "none";
  }
}

const diffBadge = document.getElementById("diff-badge");
const diffLevelEl = document.getElementById("diff-level");
const diffDotsEl = document.getElementById("diff-dots");

function updateDifficultyUI() {
  if (!diffLevelEl) return;
  diffLevelEl.textContent = difficultyLevel;
  diffDotsEl.innerHTML = "";
  for (let i = 1; i <= MAX_DIFFICULTY; i++) {
    const dot = document.createElement("span");
    dot.className = "diff-dot" + (i <= difficultyLevel ? " filled" : "");
    diffDotsEl.appendChild(dot);
  }
}

function showLevelToast(text) {
  const toast = document.createElement("div");
  toast.className = "level-toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1900);
}

function registerCorrectForDifficulty(de, en) {
  const key = de + "|" + en;
  const isRepeat = recentCorrectWords.includes(key);

  recentCorrectWords.push(key);
  if (recentCorrectWords.length > DIFFICULTY_STEP) recentCorrectWords.shift();

  if (isRepeat || difficultyLevel >= MAX_DIFFICULTY) { updateDifficultyUI(); return; }

  difficultyProgress++;
  if (difficultyProgress >= DIFFICULTY_STEP) {
    difficultyProgress = 0;
    difficultyLevel = Math.min(MAX_DIFFICULTY, difficultyLevel + 1);
    updateDifficultyUI();
    diffBadge.classList.remove("level-up-flash");
    void diffBadge.offsetWidth;
    diffBadge.classList.add("level-up-flash");
    setTimeout(() => diffBadge.classList.remove("level-up-flash"), 650);
    showLevelToast(`⚡ Level ${difficultyLevel}! Questions get tougher`);
  } else {
    updateDifficultyUI();
  }
}

function registerWrongForDifficulty() {
  difficultyProgress = 0;
  if (difficultyLevel > 1) { difficultyLevel--; updateDifficultyUI(); }
}

function setStatus(msg, cls) {
  statusMsg.textContent = msg;
  statusMsg.className = "status-msg" + (cls ? " " + cls : "");
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderWrongWords(wrongWords, showPerfectMsg) {
  if (wrongWords.length > 0) {
    wrongWordsContainer.style.display = "block";
    wrongWordsItems.innerHTML = wrongWords.map(w =>
      `<div class="wrong-word-item">
        <span class="ww-de">${escHtml(w.de)}</span>
        <span class="ww-en">${escHtml(w.en)}</span>
      </div>`
    ).join("");
  } else if (showPerfectMsg) {
    wrongWordsContainer.style.display = "block";
    wrongWordsItems.innerHTML = '<div class="ww-perfect">✨ No wrong answers! ✨</div>';
  } else {
    wrongWordsContainer.style.display = "none";
  }
}

/* ────────────────────────────────────────
   GAME OVER
   ──────────────────────────────────────── */
function endGame() {
  gameOver = true;
  clearMatchTimer();
  optBtns.forEach(b => b.disabled = true);
  submitBtn.disabled = true;
  nextBtn.disabled = true;
  insertScore(score);

  const stats = learning.getStats(pool);
  const progress = stats.total > 0 ? Math.round((stats.seen / stats.total) * 100) : 0;
  const wrongWords = learning.getWrongWords();

  goIcon.textContent = score >= 100 ? "🏆" : score >= 50 ? "🎉" : "💔";
  goTitle.textContent = score >= 100 ? "Well done!" : score >= 50 ? "Good effort!" : "Game Over";
  goSub.textContent = `${questionCount} question${questionCount !== 1 ? "s" : ""} answered · 📚 ${progress}% of vocabulary covered (${stats.seen}/${stats.total})`;
  goScore.innerHTML = `${score}<small>points</small>`;
  renderWrongWords(wrongWords, true);
  goOverlay.style.display = "flex";
}

/* ────────────────────────────────────────
   SCORES
   ──────────────────────────────────────── */
function loadScores() {
  try { const r = localStorage.getItem("ad_game_scores_v1"); if (r) return JSON.parse(r); } catch (_) {}
  return [];
}
function saveScores(s) { try { localStorage.setItem("ad_game_scores_v1", JSON.stringify(s)); } catch (_) {} }
function insertScore(s) {
  if (s <= 0) return;
  const scores = loadScores();
  const modeLabel = setupGameMode === "mc" ? "MC" : setupGameMode === "type" ? "Type" : "Match";
  const dirLabel = setupGameMode === "match" ? "DE↔EN" : setupDir === "de-en" ? "DE→EN" : "EN→DE";
  scores.push({ score: s, cat: letterLabel(setupLetters), dir: dirLabel, mode: modeLabel, level: setupLevel });
  scores.sort((a, b) => b.score - a.score);
  saveScores(scores.slice(0, 10));
  renderScoreboard();
}
function renderScoreboard() {
  const scores = loadScores();
  sbList.innerHTML = "";
  if (!scores.length) {
    sbList.innerHTML = '<div class="sb-empty">No scores yet — play to set one!</div>';
    return;
  }
  scores.slice(0, 5).forEach((s, i) => {
    const row = document.createElement("div");
    row.className = "sb-row" + (i === 0 ? " gold" : i === 1 ? " silver" : i === 2 ? " bronze" : "");
    row.innerHTML = `<span class="rank">${["🥇", "🥈", "🥉", "4.", "5."][i]}</span>
      <span>${s.level || "A1"} · ${escHtml(s.cat)} · ${s.dir} · ${s.mode}</span>
      <span class="sb-score">${s.score}</span>`;
    sbList.appendChild(row);
  });
}

/* ────────────────────────────────────────
   INIT
   ──────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderLevelTabs();
  renderLetterPills();
  updateHeroSub();
  renderScoreboard();
  applyModeFromQuery();
});

/** If the page was opened as games.html?mode=mc|type|match (e.g. from the
 *  homepage teaser), pre-select that mode card so Start Game is one tap away. */
function applyModeFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  if (!mode) return;
  const card = document.querySelector(`.mode-card[data-gamemode="${mode}"]`);
  if (!card) return;
  document.querySelectorAll(".mode-card").forEach(x => x.classList.remove("selected"));
  card.classList.add("selected");
  setupGameMode = mode;
  dirSection.style.display = setupGameMode === "match" ? "none" : "";
}

})();
