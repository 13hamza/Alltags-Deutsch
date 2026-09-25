/* ============================================================
   Alltags-Deutsch — test.js (test.html)
   "Vocabulary Test": procedurally generates a fresh exam every
   time — for A1, A2 and B1 — in three lengths (30, 50 or 100
   marks). All questions are pulled live from WORDS in
   words-data.js.

   Question types (the order of the parts is shuffled per test):
     • Fill in the Blanks (with word bank)
     • Multiple Choice — German → English
     • Reverse Choice  — English → German
     • der / die / das — the right article
     • Choose the Correct Sentence
     • Sentence Meaning — German sentence → English
     • Match the Words
     • Translation (typed)
     • True or False

   Anti-pattern rules (so no two papers "feel" the same):
     • True/False answers are balanced (≈ half true), never run
       more than 2 the same in a row, and never repeat the exact
       Richtig/Falsch sequence of the previous test.
     • In every multiple-choice part the correct option is spread
       evenly over A/B/C/D and never sits in the same slot three
       times in a row.
     • der/die/das items are balanced across the three genders.

   A2 and B1 word lists came from PDF extraction and contain some
   noisy rows. buildBank() cleans every entry (articles, plural
   shorthand, verb-form lists, regional notes, numbered example
   sentences) and silently drops rows that can't be trusted, so
   only clean words ever reach a test.
   ============================================================ */

(function () {
  const LEVELS_READY = ["A1", "A2", "B1"];
  const MARK_OPTIONS = [30, 50, 100];
  const MAX_LETTERS = 6;
  const PASS_MARK = 65;

  /* How many questions each part gets, per paper size. Every plan sums
     exactly to its mark total. */
  const PLANS = {
    30:  { fill: 5,  mc: 5,  rev: 0,  art: 4,  sent: 4,  mean: 0, match: 4,  trans: 4,  tf: 4 },
    50:  { fill: 8,  mc: 7,  rev: 6,  art: 5,  sent: 5,  mean: 4, match: 5,  trans: 5,  tf: 5 },
    100: { fill: 14, mc: 12, rev: 11, art: 10, sent: 10, mean: 8, match: 10, trans: 12, tf: 13 }
  };

  const PART_META = {
    fill:  { title: "Fill in the Blanks",          instr: "Complete each sentence with the correct German word from the word bank." },
    mc:    { title: "Multiple Choice",             instr: "Choose the correct English meaning of the German word." },
    rev:   { title: "Reverse Choice",              instr: "Choose the correct German word for the English meaning." },
    art:   { title: "der, die oder das?",          instr: "Choose the correct article for each noun." },
    sent:  { title: "Choose the Correct Sentence", instr: "Which sentence correctly uses this word?" },
    mean:  { title: "Sentence Meaning",            instr: "Choose the correct English translation of the German sentence." },
    match: { title: "Match the Words",             instr: "Match each German word with its English meaning." },
    trans: { title: "Translation",                 instr: "Translate the English word into German (for nouns the article is optional)." },
    tf:    { title: "True or False",               instr: "Read each statement and mark it Richtig (True) or Falsch (False)." }
  };

  /* ────────────────────────────────────────
     DOM
     ──────────────────────────────────────── */
  const setupScreen    = document.getElementById("test-setup-screen");
  const examScreen     = document.getElementById("test-exam-screen");
  const heroSub        = document.getElementById("test-hero-sub");
  const levelTabsEl    = document.getElementById("test-level-tabs");
  const marksToggleEl  = document.getElementById("test-marks-toggle");
  const catWrap        = document.getElementById("test-cat-wrap");
  const catCountEl     = document.getElementById("test-cat-count");
  const catClearBtn    = document.getElementById("test-cat-clear");
  const startBtn       = document.getElementById("test-start-btn");
  const sbList         = document.getElementById("test-sb-list");
  const resetScoresBtn = document.getElementById("test-reset-btn");

  const examTitle   = document.getElementById("exam-title");
  const examMeta    = document.getElementById("exam-meta");
  const examBody    = document.getElementById("exam-body");
  const examResults = document.getElementById("exam-results");
  const submitBtn   = document.getElementById("exam-submit-btn");
  const backBtn     = document.getElementById("exam-back-btn");
  const regenBtn    = document.getElementById("exam-regen-btn");

  /* ────────────────────────────────────────
     STATE
     ──────────────────────────────────────── */
  let testLevel = "A1";
  let testMarks = 30;
  let testLetters = ["random"]; // ['random'] | ['all'] | ['B','C',...]
  let currentTest = null;
  let graded = false;
  const bankCache = {};

  /* ────────────────────────────────────────
     SMALL UTILITIES
     ──────────────────────────────────────── */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function escHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }
  function normalise(s) { return String(s || "").toLowerCase().replace(/\s+/g, " ").trim(); }
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
  function storageGet(key, fallback) {
    try { const r = localStorage.getItem(key); if (r) return JSON.parse(r); } catch (_) {}
    return fallback;
  }
  function storageSet(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (_) {} }

  /* ────────────────────────────────────────
     ANTI-PATTERN HELPERS
     ──────────────────────────────────────── */
  function maxRun(seq) {
    let best = 0, run = 0;
    for (let i = 0; i < seq.length; i++) {
      run = i > 0 && seq[i] === seq[i - 1] ? run + 1 : 1;
      if (run > best) best = run;
    }
    return best;
  }

  /* Shuffle until no value repeats 3+ times in a row (best effort). */
  function shuffleNoRuns(arr, keyFn, maxAllowed) {
    const limit = maxAllowed || 2;
    let best = shuffle(arr);
    for (let t = 0; t < 120 && maxRun(best.map(keyFn)) > limit; t++) best = shuffle(arr);
    return best;
  }

  /* n correct-answer slots spread evenly over k options (0..k-1),
     shuffled, with no slot used 3+ times in a row. */
  function balancedPositions(n, k) {
    const offset = Math.floor(Math.random() * k);
    const base = Array.from({ length: n }, (_, i) => (i + offset) % k);
    return shuffleNoRuns(base, x => x, 2);
  }

  /* Balanced true/false sequence: ≈ half true, no run of 3+ identical
     answers, and different from the previous paper's sequence. */
  function balancedTrueFalse(n) {
    const lastKey = "ad_vocab_test_last_tf_v2";
    const last = storageGet(lastKey, "");
    const trueCount = n % 2 === 0 ? n / 2 : (Math.random() < 0.5 ? Math.floor(n / 2) : Math.ceil(n / 2));
    const base = Array.from({ length: n }, (_, i) => i < trueCount);
    const sig = seq => seq.map(b => (b ? "T" : "F")).join("");
    let seq = shuffle(base);
    for (let t = 0; t < 300 && (maxRun(seq) > 2 || sig(seq) === last); t++) seq = shuffle(base);
    storageSet(lastKey, sig(seq));
    return seq;
  }

  /* Put `correct` into slot `pos` and fill the other slots with distractors. */
  function placeOptions(correct, distractors, pos) {
    const opts = shuffle(distractors);
    opts.splice(Math.min(pos, opts.length), 0, correct);
    return opts;
  }

  /* ────────────────────────────────────────
     WORD BANK — CLEANING A LEVEL'S WORD LIST
     ──────────────────────────────────────── */
  const LETTER_RE = "A-Za-zÀ-ÖØ-öø-ÿß";
  const GERMAN_ONLY = /[äöüßÄÖÜ]/;

  function umlautLast(word) {
    const m = word.match(/^(.*?)(au|Au|a|o|u|A|O|U)([^aeiouäöüAEIOUÄÖÜ]*)$/);
    if (!m) return null;
    const map = { a: "ä", o: "ö", u: "ü", au: "äu", A: "Ä", O: "Ö", U: "Ü", Au: "Äu" };
    return map[m[2]] ? m[1] + map[m[2]] + m[3] : null;
  }

  function splitSentences(text) {
    const parts = String(text || "").match(/[^.!?]+[.!?]+["“”„']*/g);
    return parts ? parts.map(s => s.trim()).filter(Boolean) : [];
  }

  /* Strip "1. … 2. …" numbering and return the sentences of the first
     numbered item (or of the whole text if it isn't numbered). */
  function sentenceList(text) {
    let s = String(text || "").trim();
    if (!s) return [];
    if (/^\d+\.\s/.test(s)) {
      const items = s.split(/(?:^|\s)\d+\.\s+/).map(x => x.trim()).filter(Boolean);
      s = items[0] || "";
    }
    return splitSentences(s);
  }

  function goodSentence(s) {
    if (!s) return false;
    if (!/[.!?]["“”„']*$/.test(s)) return false;
    const words = s.split(/\s+/);
    return words.length >= 3 && words.length <= 22 && s.length <= 160;
  }

  function parseDe(rawDe) {
    let s = String(rawDe || "").trim();
    s = s.split("→")[0];
    const plural = /\(Pl\.?\)/i.test(s);
    s = s.replace(/\((?:D|A|CH|D, A|D, CH|A, CH|Sg\.?|Pl\.?)\)/gi, " ")
         .replace(/;.*$/, "")
         .replace(/\s+/g, " ").trim();
    s = s.replace(/^\(sich\)\s*/i, "").replace(/^sich\s+/i, "");

    let article = null;
    const dual = s.match(/^(der|die|das)\/(der|die|das)\s+/i);
    if (dual) {
      s = s.slice(dual[0].length);
      article = "mixed";
    } else {
      const am = s.match(/^(der|die|das)\s+/i);
      if (am) { article = am[1].toLowerCase(); s = s.slice(am[0].length); }
    }
    // "der Sportler, -/die Sportlerin, -nen" → keep the first form
    s = s.split(/\s*\/\s*(?:der|die|das)\s+/i)[0];
    const parts = s.split(",").map(x => x.trim()).filter(Boolean);
    let head = (parts[0] || "").replace(/\s*\(sich\)\s*/i, " ").trim();
    head = head.split("/")[0].trim();
    const extras = parts.slice(1);

    const hasPerfect = extras.some(x => /^(hat|ist|ist\/hat|hat\/ist)\s/i.test(x));
    const isNoun = !!article;
    const isVerb = !isNoun && /^[a-zäöü]/.test(head) && head.split(" ").length === 1 &&
      (hasPerfect || (/(en|ern|eln)$/.test(head) && head.length > 3 && extras.length >= 1));

    const forms = [];
    if (isVerb) {
      extras.forEach(x => {
        x.replace(/^(hat|ist|ist\/hat|hat\/ist)\s+/i, "").replace(/\bsich\b/g, " ")
          .split(/\s+/).forEach(t => { if (t && /^[a-zäöüß]+$/i.test(t) && t.length > 2) forms.push(t); });
      });
    }
    return { head, article, isNoun, isVerb, plural, extras, hasPerfect, forms };
  }

  function validHead(info) {
    const h = info.head;
    if (!h || h.length < 2 || h.length > 30) return false;
    if (!new RegExp(`^[${LETTER_RE}][${LETTER_RE} \\-]*[${LETTER_RE}]$`).test(h)) return false;
    if (h.split(" ").length > 3) return false;
    if (info.isNoun && !/^[A-ZÄÖÜ]/.test(h)) return false;
    // a verb-form list whose head isn't an infinitive ("träumt, hat geträumt")
    if (info.hasPerfect && (!/n$/.test(h) || h.includes(" "))) return false;
    // hyphenation fragments from the PDF source ("setzung", "tung")
    if (!info.isNoun && /^[a-zäöü]+(ung|heit|keit|schaft|tät|ion)$/.test(h)) return false;
    return true;
  }

  function cleanEn(rawEn, info) {
    const e = String(rawEn || "").replace(/\([^)]*\)/g, " ").replace(/¨.*$/, "").replace(/\s+/g, " ").trim();
    const segs = e.split(/[,;]/).map(x => x.trim()).filter(x => x && !/^[-¨]/.test(x));
    if (!segs.length) return "";
    if (info.isVerb || info.hasPerfect) {
      const first = segs[0].replace(/^to\s+/i, "");
      return first ? "to " + first : "";
    }
    return segs.slice(0, 2).join(", ");
  }

  function wordKind(info) {
    if (info.isNoun) return "noun";
    if (info.isVerb) return "verb";
    if (/^[a-zäöü]+(en|ern|eln)$/.test(info.head) && info.head.length > 4) return "verb";
    return "other";
  }

  /* All plausible surface forms of the word, longest first — used to find
     (and blank out) the word inside its example sentence. */
  function surfaceForms(entry) {
    const set = new Set([entry.core]);
    const core = entry.core;
    if (entry.kind === "noun") {
      const um = umlautLast(core);
      ["", "e", "en", "n", "s", "er", "es", "ern", "nen", "se"].forEach(suf => {
        set.add(core + suf);
        if (um) set.add(um + suf);
      });
    } else if (entry.kind === "verb" && core.split(" ").length === 1) {
      const stem = core.replace(/(en|n)$/, "");
      if (stem.length >= 2) {
        ["e", "st", "t", "en", "et", "est", "te", "test", "ten", "tet"].forEach(suf => set.add(stem + suf));
        if (stem.length >= 3) set.add("ge" + stem + "t");
      }
      entry.forms.forEach(f => set.add(f));
    } else if (entry.kind === "other" && /^[a-zäöü]+$/.test(core)) {
      ["e", "en", "er", "es", "em"].forEach(suf => set.add(core + suf));
    }
    return [...set].filter(f => f.length >= 2).sort((a, b) => b.length - a.length);
  }

  function findFormIn(sentence, entry) {
    for (const form of entry.surface) {
      const esc = form.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(`(^|[^${LETTER_RE}])(${esc})(?=[^${LETTER_RE}]|$)`, "i");
      const m = sentence.match(re);
      if (m) return { re, matched: m[2] };
    }
    return null;
  }

  function buildBank(level) {
    if (bankCache[level]) return bankCache[level];
    const raw = typeof getWordsByLevel === "function" ? getWordsByLevel(level) : [];

    // Verified A1 meanings are used to correct noisy A2/B1 translations.
    const a1Meaning = {};
    if (level !== "A1" && typeof getWordsByLevel === "function") {
      getWordsByLevel("A1").forEach(w => {
        const info = parseDe(w.de);
        if (validHead(info)) a1Meaning[info.head.toLowerCase()] = cleanEn(w.en, info);
      });
    }

    const seen = new Set();
    const bank = [];
    raw.forEach(w => {
      const info = parseDe(w.de);
      if (!validHead(info)) return;
      const key = info.head.toLowerCase();
      if (seen.has(key)) return;

      const en = a1Meaning[key] || cleanEn(w.en, info);
      if (!en || en.length < 2 || en.length > 42) return;
      if (en.split(/\s+/).length > 6) return;
      if (GERMAN_ONLY.test(en)) return;
      if (normalise(en) === normalise(info.head)) return;
      if (/[\/-]\s*$|\/-|\bwas jogging\b/.test(en)) return;
      if (["der", "die", "das", "ist", "hat", "sind", "war"].includes(key)) return;
      if (level !== "A1" && !a1Meaning[key] && en.replace(/^to /, "").length < 3) return;

      const deSents = sentenceList(w.sentence);
      const enSents = sentenceList(w.sentenceEn);
      const sentence = deSents.find(goodSentence) || "";
      let pairDe = "", pairEn = "";
      if (deSents.length && deSents.length === enSents.length &&
          goodSentence(deSents[0]) && goodSentence(enSents[0]) &&
          normalise(deSents[0]) !== normalise(enSents[0]) && !GERMAN_ONLY.test(enSents[0])) {
        pairDe = deSents[0]; pairEn = enSents[0];
      }

      const hasArticle = info.isNoun && info.article !== "mixed";
      const entry = {
        id: `${level}_${bank.length}`,
        level,
        letter: w.letter,
        core: info.head,
        article: hasArticle && !info.plural ? info.article : null,
        display: hasArticle ? `${info.article} ${info.head}` : info.head,
        kind: wordKind(info),
        forms: info.forms,
        en, sentence, pairDe, pairEn
      };
      entry.surface = surfaceForms(entry);
      seen.add(key);
      bank.push(entry);
    });

    bankCache[level] = bank;
    return bank;
  }

  /* ────────────────────────────────────────
     ANSWER CHECKING (typed answers)
     ──────────────────────────────────────── */
  function answerCore(s) {
    return String(s || "").replace(/\([^)]*\)/g, " ").replace(/,.*$/, "")
      .replace(/^\s*(der|die|das|den|dem)\s+/i, "").replace(/\s+/g, " ").trim();
  }
  function isAnswerCorrect(typed, correct) {
    const ni = normalise(typed), na = normalise(correct);
    if (!ni) return false;
    if (ni === na || foldUmlauts(ni) === foldUmlauts(na)) return true;
    const a = normalise(answerCore(typed)), b = normalise(answerCore(correct));
    if (!a) return false;
    if (a === b || foldUmlauts(a) === foldUmlauts(b)) return true;
    const threshold = Math.max(1, Math.floor(b.replace(/\s/g, "").length / 6));
    return levenshtein(foldUmlauts(a), foldUmlauts(b)) <= threshold;
  }

  function quizStatusFor(pct) {
    if (pct >= 90) return { label: "Excellent", emoji: "🏆", cls: "excellent" };
    if (pct >= 75) return { label: "Above Average", emoji: "🌟", cls: "above" };
    if (pct >= PASS_MARK) return { label: "Good", emoji: "✅", cls: "good" };
    if (pct >= 50) return { label: "Average", emoji: "😐", cls: "average" };
    return { label: "Needs Improvement", emoji: "📉", cls: "poor" };
  }

  /* ────────────────────────────────────────
     TEST GENERATION
     ──────────────────────────────────────── */
  function resolveLetters(bank, letters, needed) {
    if (letters[0] === "all") return ["all"];
    if (letters[0] !== "random") return letters;
    const available = [...new Set(bank.map(w => w.letter))].sort();
    if (available.length <= 3) return ["all"];
    // Grow a random run of consecutive letters until it holds enough words.
    const start = Math.floor(Math.random() * available.length);
    const chosen = [];
    let count = 0;
    for (let i = 0; i < available.length && (chosen.length < 3 || count < needed); i++) {
      const L = available[(start + i) % available.length];
      chosen.push(L);
      count += bank.filter(w => w.letter === L).length;
    }
    return chosen.length >= available.length ? ["all"] : chosen.sort();
  }

  function takeWords(pool, used, n, filter) {
    const out = [];
    for (const w of shuffle(pool)) {
      if (out.length >= n) break;
      if (used.has(w.id) || (filter && !filter(w))) continue;
      out.push(w);
    }
    out.forEach(w => used.add(w.id));
    return out;
  }

  /* Wrong options, preferring words of the same kind (noun/verb/other)
     so the right answer can't be spotted by its shape alone. */
  function distractorsFor(word, bank, n, field) {
    const same = shuffle(bank.filter(x => x.id !== word.id && x.kind === word.kind));
    const other = shuffle(bank.filter(x => x.id !== word.id && x.kind !== word.kind));
    const out = [];
    const seenVals = new Set([normalise(word[field]), normalise(word.en)]);
    for (const x of same.concat(other)) {
      if (out.length >= n) break;
      const v = normalise(x[field]);
      if (!v || seenVals.has(v) || normalise(x.en) === normalise(word.en)) continue;
      seenVals.add(v);
      out.push(x[field]);
    }
    return out;
  }

  const builders = {
    fill(pool, bank, used, n) {
      const picked = [];
      for (const w of shuffle(pool)) {
        if (picked.length >= n) break;
        if (used.has(w.id) || !w.sentence) continue;
        const hit = findFormIn(w.sentence, w);
        if (!hit) continue;
        used.add(w.id);
        picked.push({
          kind: "fill", word: w, answer: hit.matched,
          prompt: w.sentence.replace(hit.re, (full, pre) => `${pre}______________`)
        });
      }
      return picked;
    },

    mc(pool, bank, used, n) {
      const words = takeWords(pool, used, n);
      const pos = balancedPositions(words.length, 4);
      return words.map((w, i) => ({
        kind: "mc", word: w, answer: w.en,
        prompt: `What does <strong>&ldquo;${escHtml(w.display)}&rdquo;</strong> mean?`,
        options: placeOptions(w.en, distractorsFor(w, bank, 3, "en"), pos[i])
      }));
    },

    rev(pool, bank, used, n) {
      const words = takeWords(pool, used, n);
      const pos = balancedPositions(words.length, 4);
      return words.map((w, i) => ({
        kind: "rev", word: w, answer: w.display,
        prompt: `Which German word means <strong>&ldquo;${escHtml(w.en)}&rdquo;</strong>?`,
        options: placeOptions(w.display, distractorsFor(w, bank, 3, "display"), pos[i])
      }));
    },

    art(pool, bank, used, n) {
      const byGender = { der: [], die: [], das: [] };
      const add = w => { if (!used.has(w.id) && w.article && byGender[w.article] && !byGender[w.article].includes(w)) byGender[w.article].push(w); };
      shuffle(pool).forEach(add);
      if (byGender.der.length + byGender.die.length + byGender.das.length < n) shuffle(bank).forEach(add);
      // round-robin over the three genders so they stay balanced
      const genders = shuffle(["der", "die", "das"]);
      const picked = [];
      for (let i = 0; picked.length < n && genders.some(g => byGender[g].length); i++) {
        const w = byGender[genders[i % 3]].shift();
        if (w) { used.add(w.id); picked.push(w); }
      }
      return shuffleNoRuns(picked, w => w.article, 2).map(w => ({
        kind: "art", word: w, answer: w.article,
        prompt: `___ <strong>${escHtml(w.core)}</strong> <span class="exam-q-hint">(${escHtml(w.en)})</span>`,
        options: ["der", "die", "das"]
      }));
    },

    sent(pool, bank, used, n) {
      const words = takeWords(pool, used, n, w => !!w.sentence);
      const pos = balancedPositions(words.length, 3);
      return words.map((w, i) => {
        const distract = [];
        for (const x of shuffle(bank)) {
          if (distract.length >= 2) break;
          if (x.id === w.id || !x.sentence || x.sentence === w.sentence) continue;
          if (findFormIn(x.sentence, w)) continue; // must not also contain the word
          distract.push(x.sentence);
        }
        return {
          kind: "sent", word: w, answer: w.sentence,
          prompt: `Choose the sentence that correctly uses <strong>&ldquo;${escHtml(w.display)}&rdquo;</strong>:`,
          options: placeOptions(w.sentence, distract, pos[i])
        };
      });
    },

    mean(pool, bank, used, n) {
      let words = takeWords(pool, used, n, w => !!w.pairDe);
      if (words.length < n) words = words.concat(takeWords(bank, used, n - words.length, w => !!w.pairDe));
      const pos = balancedPositions(words.length, 4);
      return words.map((w, i) => {
        const distract = shuffle(bank.filter(x => x.id !== w.id && x.pairEn && x.pairEn !== w.pairEn))
          .slice(0, 3).map(x => x.pairEn);
        return {
          kind: "mean", word: w, answer: w.pairEn,
          prompt: `What does this sentence mean?<br><strong>&ldquo;${escHtml(w.pairDe)}&rdquo;</strong>`,
          options: placeOptions(w.pairEn, distract, pos[i])
        };
      });
    },

    match(pool, bank, used, n) {
      // Matching is split into blocks of 5 so each key stays readable.
      const words = takeWords(pool, used, n);
      const blocks = [];
      for (let b = 0; b < words.length; b += 5) {
        const chunk = words.slice(b, b + 5);
        const letters = ["A", "B", "C", "D", "E"].slice(0, chunk.length);
        let enOrder = shuffle(chunk.map(w => w.en));
        // don't let the key line up 1:1 with the question order
        for (let t = 0; t < 20 && chunk.length > 1 && enOrder.some((e, i) => e === chunk[i].en); t++) enOrder = shuffle(enOrder);
        blocks.push({
          key: letters.map((L, i) => ({ letter: L, text: enOrder[i] })),
          items: chunk.map(w => ({ kind: "match", word: w, answer: w.en, prompt: w.display }))
        });
      }
      return blocks;
    },

    trans(pool, bank, used, n) {
      return takeWords(pool, used, n).map(w => ({
        kind: "trans", word: w, answer: w.core,
        prompt: `${escHtml(w.en)}${w.kind === "noun" ? ' <span class="exam-q-hint">(noun)</span>' : w.kind === "verb" ? ' <span class="exam-q-hint">(verb)</span>' : ""}`,
        // any other bank word with exactly the same meaning also counts
        alts: bank.filter(x => x.id !== w.id && normalise(x.en) === normalise(w.en)).map(x => x.core)
      }));
    },

    tf(pool, bank, used, n) {
      const words = takeWords(pool, used, n);
      const truth = balancedTrueFalse(words.length);
      return words.map((w, i) => {
        let shown = w.en, isTrue = truth[i];
        if (!isTrue) {
          const d = distractorsFor(w, bank, 1, "en")[0];
          if (d) shown = d; else isTrue = true;
        }
        return {
          kind: "tf", word: w, answer: isTrue,
          prompt: `&ldquo;${escHtml(w.display)}&rdquo; means &ldquo;${escHtml(shown)}&rdquo;.`
        };
      });
    }
  };

  function countQuestions(part) {
    return part.kind === "match" ? part.blocks.reduce((a, b) => a + b.items.length, 0) : part.questions.length;
  }

  function buildTestPlan(level, letters, marks) {
    const bank = buildBank(level);
    const plan = PLANS[marks] || PLANS[30];
    const needed = Math.round(marks * 1.6);
    const resolved = resolveLetters(bank, letters, needed);
    let pool = resolved[0] === "all" ? bank : bank.filter(w => resolved.includes(w.letter));
    let widened = false;
    if (pool.length < needed) { pool = bank; widened = resolved[0] !== "all"; }

    const used = new Set();
    const parts = [];
    // Build the most constrained parts first.
    ["fill", "art", "mean", "sent", "match", "rev", "trans", "mc", "tf"].forEach(kind => {
      const n = plan[kind];
      if (!n) return;
      const out = builders[kind](pool, bank, used, n);
      if (!out.length) return;
      parts.push(kind === "match" ? { kind, blocks: out } : { kind, questions: out });
    });

    // Top up to the exact mark total if any part came up short.
    let total = parts.reduce((a, p) => a + countQuestions(p), 0);
    const topUpOrder = ["mc", "rev", "trans"];
    for (let t = 0; total < marks && t < 30; t++) {
      const kind = topUpOrder[t % topUpOrder.length];
      const extra = builders[kind](bank, bank, used, Math.min(marks - total, 5));
      if (!extra.length) continue;
      let part = parts.find(p => p.kind === kind);
      if (!part) { part = { kind, questions: [] }; parts.push(part); }
      part.questions = part.questions.concat(extra);
      if (kind !== "trans") {
        // re-balance the correct-answer slots across the merged list
        const pos = balancedPositions(part.questions.length, 4);
        part.questions.forEach((q, i) => {
          q.options = placeOptions(q.answer, q.options.filter(o => o !== q.answer), pos[i]);
        });
      }
      total = parts.reduce((a, p) => a + countQuestions(p), 0);
    }

    // Shuffle the order of the parts so every paper is laid out differently.
    const ordered = shuffle(parts);
    let num = 0;
    ordered.forEach((p, pi) => {
      const qs = p.kind === "match" ? p.blocks.flatMap(b => b.items) : p.questions;
      qs.forEach((q, qi) => { q.id = `${p.kind}_${pi}_${qi}`; q.num = ++num; });
    });

    return { level, marks, letters: resolved, widened, parts: ordered, total: num, generatedAt: Date.now() };
  }

  function letterLabel(letters) {
    if (letters[0] === "all") return "all letters";
    return "letters " + letters.join(", ");
  }

  /* ────────────────────────────────────────
     RENDERING
     ──────────────────────────────────────── */
  function renderOptionsGroup(q) {
    return `<div class="exam-opts" data-name="${escHtml(q.id)}">${q.options.map((opt, i) => `
      <div class="exam-opt" data-value="${escHtml(opt)}" role="button" tabindex="0">
        <span class="exam-opt-letter">${String.fromCharCode(65 + i)}</span>
        <span class="exam-opt-text">${escHtml(opt)}</span>
      </div>`).join("")}</div>`;
  }

  function qWrap(q, inner, extraCls) {
    return `
      <div class="exam-q${extraCls ? " " + extraCls : ""}" data-qid="${q.id}">
        <div class="exam-q-num">${q.num}.</div>
        <div class="exam-q-body">${inner}</div>
      </div>`;
  }

  const TEXT_INPUT = id => `<input type="text" class="exam-text-input" data-qid="${id}" placeholder="Type the German word…" autocomplete="off" autocapitalize="off" spellcheck="false">`;

  function renderPart(part, index) {
    const meta = PART_META[part.kind];
    const count = countQuestions(part);
    let body = "";

    if (part.kind === "fill") {
      body += `<div class="word-bank">${shuffle(part.questions.map(q => q.answer)).map(w => `<span class="word-bank-chip">${escHtml(w)}</span>`).join("")}</div>`;
      body += part.questions.map(q => qWrap(q, `<p class="exam-q-text">${escHtml(q.prompt)}</p>${TEXT_INPUT(q.id)}`)).join("");
    } else if (part.kind === "trans") {
      body += part.questions.map(q => qWrap(q, `<p class="exam-q-text">${q.prompt}</p>${TEXT_INPUT(q.id)}`)).join("");
    } else if (["mc", "rev", "sent", "mean"].includes(part.kind)) {
      body += part.questions.map(q => qWrap(q, `<p class="exam-q-text">${q.prompt}</p>${renderOptionsGroup(q)}`)).join("");
    } else if (part.kind === "art") {
      body += part.questions.map(q => qWrap(q, `
        <p class="exam-q-text">${q.prompt}</p>
        <div class="exam-tf exam-choice" data-qid="${q.id}">
          ${q.options.map(o => `<button type="button" class="exam-tf-btn" data-value="${o}">${o}</button>`).join("")}
        </div>`)).join("");
    } else if (part.kind === "tf") {
      body += part.questions.map(q => qWrap(q, `
        <p class="exam-q-text">${q.prompt}</p>
        <div class="exam-tf exam-choice" data-qid="${q.id}">
          <button type="button" class="exam-tf-btn" data-value="true">Richtig (True)</button>
          <button type="button" class="exam-tf-btn" data-value="false">Falsch (False)</button>
        </div>`)).join("");
    } else if (part.kind === "match") {
      body += part.blocks.map(block => `
        <div class="exam-match-block">
          <div class="exam-match-key">${block.key.map(o => `<span><strong>${o.letter}.</strong> ${escHtml(o.text)}</span>`).join("")}</div>
          ${block.items.map(q => qWrap(q, `
            <div class="exam-match-body">
              <p class="exam-q-text">${escHtml(q.prompt)}</p>
              <select class="exam-select" data-qid="${q.id}">
                <option value="">— choose —</option>
                ${block.key.map(o => `<option value="${escHtml(o.letter)}">${o.letter}</option>`).join("")}
              </select>
            </div>`, "exam-match-row")).join("")}
        </div>`).join("");
    }

    return `
      <div class="exam-part" data-kind="${part.kind}">
        <h2 class="exam-part-title">Part ${index + 1} &middot; ${meta.title} <span class="exam-part-marks">${count} mark${count === 1 ? "" : "s"}</span></h2>
        <p class="exam-instruction">${meta.instr}</p>
        ${body}
      </div>`;
  }

  function renderTest(test) {
    examBody.innerHTML = test.parts.map(renderPart).join("");
    examResults.innerHTML = "";
    examResults.style.display = "none";
    wireExamControls();
  }

  function wireExamControls() {
    examBody.querySelectorAll(".exam-opts").forEach(group => {
      group.querySelectorAll(".exam-opt").forEach(opt => {
        const choose = () => {
          if (graded) return;
          group.querySelectorAll(".exam-opt").forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");
        };
        opt.addEventListener("click", choose);
        opt.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); } });
      });
    });
    examBody.querySelectorAll(".exam-choice .exam-tf-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (graded) return;
        const wrap = btn.closest(".exam-choice");
        wrap.querySelectorAll(".exam-tf-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  }

  /* ────────────────────────────────────────
     GRADING
     ──────────────────────────────────────── */
  function showInlineAnswer(qEl, answer) {
    if (!qEl) return;
    const note = document.createElement("div");
    note.className = "exam-correct-note";
    note.innerHTML = `Correct answer: <strong>${escHtml(answer)}</strong>`;
    qEl.appendChild(note);
  }

  function gradeQuestion(part, q, block) {
    const qEl = examBody.querySelector(`.exam-q[data-qid="${q.id}"]`);
    if (part.kind === "fill" || part.kind === "trans") {
      const input = examBody.querySelector(`.exam-text-input[data-qid="${q.id}"]`);
      const typed = input ? input.value.trim() : "";
      const ok = isAnswerCorrect(typed, q.answer) || (q.alts || []).some(a => isAnswerCorrect(typed, a));
      input.classList.add(ok ? "is-correct" : "is-wrong");
      input.disabled = true;
      if (!ok) showInlineAnswer(qEl, part.kind === "trans" ? q.word.display : q.answer);
      return ok;
    }
    if (["mc", "rev", "sent", "mean"].includes(part.kind)) {
      const group = examBody.querySelector(`.exam-opts[data-name="${q.id}"]`);
      const selected = group.querySelector(".exam-opt.selected");
      const val = selected ? selected.dataset.value : "";
      const ok = normalise(val) === normalise(q.answer);
      group.querySelectorAll(".exam-opt").forEach(o => {
        if (normalise(o.dataset.value) === normalise(q.answer)) o.classList.add("is-correct");
        else if (o === selected) o.classList.add("is-wrong");
        o.setAttribute("tabindex", "-1");
      });
      return ok;
    }
    if (part.kind === "art" || part.kind === "tf") {
      const wrap = examBody.querySelector(`.exam-choice[data-qid="${q.id}"]`);
      const selected = wrap.querySelector(".exam-tf-btn.selected");
      const toVal = v => (part.kind === "tf" ? v === "true" : v);
      const val = selected ? toVal(selected.dataset.value) : null;
      const ok = val === q.answer;
      wrap.querySelectorAll(".exam-tf-btn").forEach(b => {
        if (toVal(b.dataset.value) === q.answer) b.classList.add("is-correct");
        else if (b === selected) b.classList.add("is-wrong");
        b.disabled = true;
      });
      return ok;
    }
    if (part.kind === "match") {
      const select = examBody.querySelector(`.exam-select[data-qid="${q.id}"]`);
      const chosen = (block.key.find(o => o.letter === select.value) || {}).text || "";
      const ok = normalise(chosen) === normalise(q.answer);
      select.disabled = true;
      select.classList.add(ok ? "is-correct" : "is-wrong");
      if (!ok) {
        const letter = (block.key.find(o => normalise(o.text) === normalise(q.answer)) || {}).letter;
        showInlineAnswer(qEl, `${letter ? letter + ". " : ""}${q.answer}`);
      }
      return ok;
    }
    return false;
  }

  function gradeTest() {
    if (!currentTest || graded) return;
    graded = true;

    const breakdown = [];
    let correct = 0, total = 0;
    currentTest.parts.forEach((part, i) => {
      let pc = 0, pt = 0;
      if (part.kind === "match") {
        part.blocks.forEach(block => block.items.forEach(q => { pt++; if (gradeQuestion(part, q, block)) pc++; }));
      } else {
        part.questions.forEach(q => { pt++; if (gradeQuestion(part, q)) pc++; });
      }
      correct += pc; total += pt;
      breakdown.push({ label: `Part ${i + 1} · ${PART_META[part.kind].title}`, correct: pc, total: pt });
    });

    const percent = total ? Math.round((correct / total) * 100) : 0;
    const pass = percent >= PASS_MARK;
    const status = quizStatusFor(percent);

    insertTestScore({
      correct, total, percent, pass,
      status: status.label, statusCls: status.cls,
      level: currentTest.level, marks: currentTest.total, cat: letterLabel(currentTest.letters),
      date: Date.now()
    });

    renderResultsBanner({ correct, total, percent, pass, status, breakdown });
    submitBtn.style.display = "none";
    regenBtn.style.display = "";
    try { examResults.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (_) {}
  }

  function renderResultsBanner(r) {
    examResults.style.display = "block";
    examResults.innerHTML = `
      <div class="exam-results-banner ${r.status.cls}">
        <div class="erb-icon">${r.status.emoji}</div>
        <h2>Test complete!</h2>
        <div class="erb-badge">${escHtml(r.status.label)}</div>
        <div class="erb-score-row">
          <div class="erb-score">${r.correct}<small>/${r.total} marks</small></div>
          <div class="erb-percent">${r.percent}%</div>
        </div>
        <p class="erb-pass ${r.pass ? "pass" : "fail"}">${r.pass ? "✅ Passed" : "❌ Not passed"} &mdash; ${PASS_MARK}% needed to pass</p>
        <div class="erb-breakdown">
          ${r.breakdown.map(b => `<div class="erb-breakdown-row"><span>${escHtml(b.label)}</span><strong>${b.correct}/${b.total}</strong></div>`).join("")}
        </div>
        <p class="erb-hint">Scroll up to see every correct answer marked in green, and the right answer shown wherever you missed one.</p>
      </div>`;
  }

  /* ────────────────────────────────────────
     SCOREBOARD
     ──────────────────────────────────────── */
  const SCORE_KEY = "ad_vocab_test_scores_v1";
  function loadTestScores() { return storageGet(SCORE_KEY, []); }
  function saveTestScores(s) { storageSet(SCORE_KEY, s); }
  function insertTestScore(entry) {
    const scores = loadTestScores();
    scores.push(entry);
    scores.sort((a, b) => b.percent - a.percent || b.correct - a.correct);
    saveTestScores(scores.slice(0, 10));
    renderTestScoreboard();
  }
  function renderTestScoreboard() {
    const scores = loadTestScores();
    sbList.innerHTML = "";
    if (!scores.length) {
      sbList.innerHTML = '<div class="sb-empty">No tests taken yet — generate one to set your first score!</div>';
      return;
    }
    scores.slice(0, 5).forEach((s, i) => {
      const row = document.createElement("div");
      row.className = "sb-row" + (i === 0 ? " gold" : i === 1 ? " silver" : i === 2 ? " bronze" : "");
      row.innerHTML = `<span class="rank">${["🥇", "🥈", "🥉", "4.", "5."][i]}</span>
        <span>${escHtml(s.level || "A1")} · ${escHtml(String(s.marks || s.total))} marks · ${escHtml(s.cat)} · ${s.correct}/${s.total}
          <span class="sb-status ${s.statusCls || ""}">${escHtml(s.status || "")}${s.pass === false ? " · fail" : ""}</span>
        </span>
        <span class="sb-score">${s.percent}%</span>`;
      sbList.appendChild(row);
    });
  }

  /* ────────────────────────────────────────
     SETUP SCREEN UI
     ──────────────────────────────────────── */
  function renderLevelTabs() {
    levelTabsEl.innerHTML = WORD_LEVELS.filter(l => l.id !== "ALL").map(lvl => {
      const ready = LEVELS_READY.includes(lvl.id);
      return `
        <button type="button" class="level-tab${lvl.id === testLevel ? " is-active" : ""}${ready ? "" : " is-disabled"}"
          data-level="${lvl.id}" ${ready ? "" : "disabled"}>
          ${lvl.sublabel} · ${lvl.label}${ready ? "" : " <span class=\"soon-badge\">soon</span>"}
        </button>`;
    }).join("");

    levelTabsEl.querySelectorAll(".level-tab:not(.is-disabled)").forEach(btn => {
      btn.addEventListener("click", () => {
        testLevel = btn.dataset.level;
        renderLevelTabs();
        testLetters = ["random"];
        renderLetterPills();
        updateHeroSub();
      });
    });
  }

  function renderMarksToggle() {
    if (!marksToggleEl) return;
    const desc = { 30: "Quick test", 50: "Standard test", 100: "Full exam" };
    marksToggleEl.innerHTML = MARK_OPTIONS.map(m => `
      <div class="rate-btn${m === testMarks ? " selected" : ""}" data-val="${m}" role="button" tabindex="0">
        <div class="rt-name">${m} marks</div>
        <div class="rt-desc">${desc[m]}</div>
      </div>`).join("");
    marksToggleEl.querySelectorAll(".rate-btn").forEach(btn => {
      const choose = () => { testMarks = Number(btn.dataset.val); renderMarksToggle(); updateHeroSub(); };
      btn.addEventListener("click", choose);
      btn.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); } });
    });
  }

  function availableLetters() {
    return [...new Set(buildBank(testLevel).map(w => w.letter))].sort();
  }

  function renderLetterPills() {
    const letters = availableLetters();
    const randomPill = `<div class="cat-pill" data-val="random">🎲 Random</div>`;
    const allPill = `<div class="cat-pill" data-val="all">📚 All</div>`;
    const letterPills = letters.map(l => `<div class="cat-pill" data-val="${l}">${l}</div>`).join("");
    catWrap.innerHTML = randomPill + allPill + letterPills;
    wireLetterPills();
    renderLetterSelection();
  }

  function wireLetterPills() {
    catWrap.querySelectorAll(".cat-pill").forEach(p => {
      p.addEventListener("click", () => {
        const val = p.dataset.val;
        if (val === "random" || val === "all") {
          testLetters = [val];
        } else if (testLetters.includes(val)) {
          testLetters = testLetters.filter(c => c !== val);
          if (testLetters.length === 0) testLetters = ["random"];
        } else {
          if (testLetters[0] === "random" || testLetters[0] === "all") testLetters = [];
          if (testLetters.length >= MAX_LETTERS) testLetters.shift();
          testLetters.push(val);
        }
        renderLetterSelection();
      });
    });
  }

  function renderLetterSelection() {
    catWrap.querySelectorAll(".cat-pill").forEach(p => {
      p.classList.toggle("selected", testLetters.includes(p.dataset.val));
    });
    catCountEl.textContent = testLetters[0] === "random"
      ? "A fresh random letter range each time"
      : testLetters[0] === "all"
        ? "All words"
        : `${testLetters.length} letter${testLetters.length === 1 ? "" : "s"} selected`;
  }

  catClearBtn.addEventListener("click", () => {
    testLetters = ["random"];
    renderLetterSelection();
  });

  function updateHeroSub() {
    const n = buildBank(testLevel).length;
    heroSub.textContent = n
      ? `${n} ${testLevel} words in the bank · a different ${testMarks}-mark test every time`
      : `${testLevel} isn't ready yet — try A1 in the meantime`;
  }

  /* ────────────────────────────────────────
     SCREEN FLOW
     ──────────────────────────────────────── */
  function startTest() {
    currentTest = buildTestPlan(testLevel, testLetters, testMarks);
    graded = false;
    examTitle.textContent = `${currentTest.level} German Vocabulary Test`;
    examMeta.textContent = `Total Marks: ${currentTest.total} · ${currentTest.widened ? "all letters (your letter choice had too few words)" : letterLabel(currentTest.letters)} · a new test every time`;
    submitBtn.style.display = "";
    submitBtn.disabled = false;
    regenBtn.style.display = "none";
    renderTest(currentTest);
    setupScreen.style.display = "none";
    examScreen.style.display = "block";
    try { window.scrollTo({ top: 0, behavior: "auto" }); } catch (_) {}
  }

  function backToSetup() {
    examScreen.style.display = "none";
    setupScreen.style.display = "block";
    renderTestScoreboard();
  }

  startBtn.addEventListener("click", startTest);
  submitBtn.addEventListener("click", gradeTest);
  backBtn.addEventListener("click", backToSetup);
  regenBtn.addEventListener("click", startTest);
  resetScoresBtn.addEventListener("click", () => { saveTestScores([]); renderTestScoreboard(); });

  // Exposed for debugging / automated checks.
  window.__vocabTest = { buildBank, buildTestPlan, balancedPositions, balancedTrueFalse, get current() { return currentTest; } };

  document.addEventListener("DOMContentLoaded", () => {
    renderLevelTabs();
    renderMarksToggle();
    renderLetterPills();
    updateHeroSub();
    renderTestScoreboard();
  });
})();
