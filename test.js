/* ============================================================
   Alltags-Deutsch — test.js (test.html)
   A "Vocabulary Test" tab: procedurally generates a fresh, 30-mark
   exam every time it's opened — Fill in the Blanks, Multiple Choice
   (meaning), Choose the Correct Sentence, Match German ↔ English,
   Translation and True/False — all pulled live from WORDS in
   words-data.js, so it's never the same test twice.

   Levels: only A1 has a full, sentence-checked word list today, so
   only A1 is enabled here. A2 and B1 are wired into the level tabs
   already (see buildTestPlan / LEVELS_READY below) and will switch
   on automatically once their data is ready — see that constant.
   ============================================================ */

(function () {
  const LEVELS_READY = ["A1"]; // add "A2", "B1" here once their sentences are verified for this test

  const MARKS_PER_SECTION = 5;
  const MAX_LETTERS = 6;
  const PASS_MARK = 65;

  /* ────────────────────────────────────────
     DOM
     ──────────────────────────────────────── */
  const setupScreen   = document.getElementById("test-setup-screen");
  const examScreen    = document.getElementById("test-exam-screen");
  const heroSub       = document.getElementById("test-hero-sub");
  const levelTabsEl   = document.getElementById("test-level-tabs");
  const catWrap       = document.getElementById("test-cat-wrap");
  const catCountEl    = document.getElementById("test-cat-count");
  const catClearBtn   = document.getElementById("test-cat-clear");
  const startBtn      = document.getElementById("test-start-btn");
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
  let testLetters = ["random"]; // ['random'] | ['all'] | ['B','C',...]
  let currentTest = null;
  let graded = false;

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
  function pick(arr, n) { return shuffle(arr).slice(0, n); }
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

  /* The "de" field carries gender articles + plural shorthand for the
     Words page ("die Adresse, -n"). Strip that down to the word a
     learner would actually write/find in a sentence. */
  function germanCore(de) {
    let x = String(de || "").replace(/,.*$/, "").trim();
    x = x.replace(/^(der|die|das)\s+/i, "");
    x = x.replace(/-$/, "");
    return x.trim();
  }
  function answerCore(s, isGerman) {
    let x = String(s || "").replace(/\([^)]*\)/g, " ");
    if (isGerman) x = x.replace(/,.*$/, "");
    else x = x.replace(/^\s*to\s+/i, "").replace(/^\s*(the|a|an)\s+/i, "");
    return x.replace(/\s+/g, " ").trim();
  }
  /* Lenient grading for typed answers — accepts the same word with or
     without its gender article/plural shorthand, minor typos, and
     natural English filler ("to ", "the "). */
  function isAnswerCorrect(typed, correct, isGerman) {
    const ni = normalise(typed), na = normalise(correct);
    if (!ni) return false;
    if (ni === na) return true;
    if (isGerman && foldUmlauts(ni) === foldUmlauts(na)) return true;
    const niCore = normalise(answerCore(typed, isGerman));
    const naCore = normalise(answerCore(correct, isGerman));
    if (niCore === naCore) return true;
    if (isGerman && foldUmlauts(niCore) === foldUmlauts(naCore)) return true;
    const cmpA = niCore || ni, cmpB = naCore || na;
    const dist = levenshtein(cmpA, cmpB);
    const threshold = Math.max(1, Math.floor(cmpB.replace(/\s/g, "").length / 5));
    return dist <= threshold;
  }
  function firstSentence(s) {
    if (!s) return "";
    const m = s.match(/^[^.!?]*[.!?]/);
    return (m ? m[0] : s).trim();
  }
  /* Finds the word inside its own example sentence and blanks it out.
     Returns null if the word can't be reliably located (so the caller
     can skip it and pick a different word instead). */
  const WORD_BOUNDARY = "A-Za-zÀ-ÖØ-öø-ÿ";
  function findBlankSentence(word) {
    const sentence = firstSentence(word.sentence);
    if (!sentence) return null;
    const core = germanCore(word.de);
    if (!core || core.length < 2) return null;
    const escaped = core.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(^|[^${WORD_BOUNDARY}])(${escaped})([^${WORD_BOUNDARY}]|$)`, "i");
    const m = sentence.match(re);
    if (!m) return null;
    return {
      blanked: sentence.replace(re, (full, pre, matched, post) => `${pre}______________${post}`),
      answer: core
    };
  }

  function quizStatusFor(pct) {
    if (pct >= 90) return { label: "Excellent", emoji: "🏆", cls: "excellent" };
    if (pct >= 75) return { label: "Above Average", emoji: "🌟", cls: "above" };
    if (pct >= PASS_MARK) return { label: "Good", emoji: "✅", cls: "good" };
    if (pct >= 50) return { label: "Average", emoji: "😐", cls: "average" };
    return { label: "Needs Improvement", emoji: "📉", cls: "poor" };
  }

  /* ────────────────────────────────────────
     TEST GENERATION ALGORITHM
     Builds six 5-mark sections from a word pool, never reusing the
     same word twice within one test, and reshuffling every option
     order and every word selection on each call — so pressing
     "Generate Test" (or "New random test") never gives the same
     paper twice.
     ──────────────────────────────────────── */
  function buildPool(level, letters) {
    const words = typeof getWordsByLevel === "function" ? getWordsByLevel(level) : [];
    if (letters[0] === "all" || letters[0] === "random") return words;
    return words.filter(w => letters.includes(w.letter));
  }

  function resolveLetters(level, letters) {
    if (letters[0] !== "random") return letters;
    const allWords = getWordsByLevel(level);
    const available = [...new Set(allWords.map(w => w.letter))].sort();
    if (available.length <= 3) return ["all"];
    const span = 3 + Math.floor(Math.random() * 2); // 3 or 4 consecutive letters
    const startMax = Math.max(1, available.length - span);
    const start = Math.floor(Math.random() * startMax);
    return available.slice(start, start + span);
  }

  function buildFillBlanks(pool, used) {
    const candidates = shuffle(pool.filter(w => !used.has(w.de)))
      .map(w => ({ w, fb: findBlankSentence(w) }))
      .filter(x => x.fb);
    const chosen = candidates.slice(0, MARKS_PER_SECTION);
    chosen.forEach(c => used.add(c.w.de));
    return chosen.map((c, i) => ({
      id: `fill_${i}`, kind: "fill",
      prompt: c.fb.blanked, answer: c.fb.answer, word: c.w
    }));
  }

  function buildMeaningMC(pool, used) {
    const candidates = shuffle(pool.filter(w => !used.has(w.de)));
    const chosen = candidates.slice(0, MARKS_PER_SECTION);
    chosen.forEach(w => used.add(w.de));
    return chosen.map((w, i) => {
      const distractorPool = shuffle(pool.filter(x => x.de !== w.de && normalise(x.en) !== normalise(w.en)));
      const distractors = distractorPool.slice(0, 2).map(x => x.en);
      const options = shuffle([w.en, ...distractors]);
      return { id: `mc_${i}`, kind: "mc", prompt: w.de, options, answer: w.en, word: w };
    });
  }

  function buildSentenceChoice(pool, used) {
    const candidates = shuffle(pool.filter(w => !used.has(w.de) && firstSentence(w.sentence)));
    const chosen = candidates.slice(0, MARKS_PER_SECTION);
    chosen.forEach(w => used.add(w.de));
    return chosen.map((w, i) => {
      const correct = firstSentence(w.sentence);
      const distractorPool = shuffle(pool.filter(x => x.de !== w.de && firstSentence(x.sentence) && firstSentence(x.sentence) !== correct));
      const distractors = distractorPool.slice(0, 2).map(x => firstSentence(x.sentence));
      const options = shuffle([correct, ...distractors]);
      return { id: `sent_${i}`, kind: "sent", prompt: w.de, options, answer: correct, word: w };
    });
  }

  function buildMatch(pool, used) {
    const candidates = shuffle(pool.filter(w => !used.has(w.de)));
    const chosen = candidates.slice(0, MARKS_PER_SECTION);
    chosen.forEach(w => used.add(w.de));
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"].slice(0, chosen.length);
    const englishShuffled = shuffle(chosen.map(w => w.en));
    const optionMap = letters.map((L, i) => ({ letter: L, text: englishShuffled[i] }));
    return {
      id: "match", kind: "match",
      items: chosen.map((w, i) => ({ id: `match_${i}`, prompt: w.de, answer: w.en, word: w })),
      options: optionMap
    };
  }

  function buildTranslation(pool, used) {
    const candidates = shuffle(pool.filter(w => !used.has(w.de)));
    const chosen = candidates.slice(0, MARKS_PER_SECTION);
    chosen.forEach(w => used.add(w.de));
    return chosen.map((w, i) => ({ id: `trans_${i}`, kind: "trans", prompt: w.en, answer: germanCore(w.de), word: w }));
  }

  function buildTrueFalse(pool, used) {
    const candidates = shuffle(pool.filter(w => !used.has(w.de)));
    const chosen = candidates.slice(0, MARKS_PER_SECTION);
    chosen.forEach(w => used.add(w.de));
    return chosen.map((w, i) => {
      const isTrue = Math.random() < 0.5;
      let shownMeaning = w.en;
      if (!isTrue) {
        const others = pool.filter(x => x.de !== w.de && normalise(x.en) !== normalise(w.en));
        if (others.length) shownMeaning = others[Math.floor(Math.random() * others.length)].en;
        else return { id: `tf_${i}`, kind: "tf", prompt: `"${germanCore(w.de)}" means "${w.en}".`, answer: true, word: w };
      }
      return { id: `tf_${i}`, kind: "tf", prompt: `"${germanCore(w.de)}" means "${shownMeaning}".`, answer: isTrue, word: w };
    });
  }

  function buildTestPlan(level, letters) {
    const resolved = resolveLetters(level, letters);
    let pool = buildPool(level, resolved);
    // Guarantee enough material; widen to the whole level if the chosen
    // letter range is too thin to fill every section without repeats.
    if (pool.length < 34) pool = getWordsByLevel(level);

    const used = new Set();
    const fill = buildFillBlanks(pool, used);
    const mc = buildMeaningMC(pool, used);
    const sent = buildSentenceChoice(pool, used);
    const match = buildMatch(pool, used);
    const trans = buildTranslation(pool, used);
    const tf = buildTrueFalse(pool, used);

    return { level, letters: resolved, fill, mc, sent, match, trans, tf, generatedAt: Date.now() };
  }

  function letterLabel(letters) {
    if (letters[0] === "all") return "all letters";
    return "letters " + letters.join(", ");
  }

  /* ────────────────────────────────────────
     RENDERING
     ──────────────────────────────────────── */
  function renderOptionsGroup(name, options, correctIrrelevantHere) {
    return `<div class="exam-opts" data-name="${escHtml(name)}">${options.map((opt, i) => `
      <div class="exam-opt" data-value="${escHtml(opt)}" role="button" tabindex="0">
        <span class="exam-opt-letter">${String.fromCharCode(65 + i)}</span>
        <span class="exam-opt-text">${escHtml(opt)}</span>
      </div>`).join("")}</div>`;
  }

  function renderTest(test) {
    const parts = [];

    // Part 1 — Fill in the Blanks
    parts.push(`
      <div class="exam-part">
        <h2 class="exam-part-title">Part 1 &middot; Fill in the Blanks <span class="exam-part-marks">${test.fill.length} marks</span></h2>
        <p class="exam-instruction">Complete each sentence with the correct German word.</p>
        <div class="word-bank">${shuffle(test.fill.map(q => q.answer)).map(w => `<span class="word-bank-chip">${escHtml(w)}</span>`).join("")}</div>
        ${test.fill.map((q, i) => `
          <div class="exam-q" data-qid="${q.id}">
            <div class="exam-q-num">${i + 1}.</div>
            <div class="exam-q-body">
              <p class="exam-q-text">${escHtml(q.prompt)}</p>
              <input type="text" class="exam-text-input" data-qid="${q.id}" placeholder="Type the German word…" autocomplete="off" autocapitalize="off" spellcheck="false">
            </div>
          </div>`).join("")}
      </div>`);

    // Part 2 — Multiple Choice (meaning)
    parts.push(`
      <div class="exam-part">
        <h2 class="exam-part-title">Part 2 &middot; Multiple Choice <span class="exam-part-marks">${test.mc.length} marks</span></h2>
        <p class="exam-instruction">Choose the correct English meaning of the German word.</p>
        ${test.mc.map((q, i) => `
          <div class="exam-q" data-qid="${q.id}">
            <div class="exam-q-num">${i + 6}.</div>
            <div class="exam-q-body">
              <p class="exam-q-text">What does <strong>&ldquo;${escHtml(q.word.de)}&rdquo;</strong> mean?</p>
              ${renderOptionsGroup(q.id, q.options)}
            </div>
          </div>`).join("")}
      </div>`);

    // Part 3 — Choose the Correct Sentence
    parts.push(`
      <div class="exam-part">
        <h2 class="exam-part-title">Part 3 &middot; Choose the Correct Sentence <span class="exam-part-marks">${test.sent.length} marks</span></h2>
        <p class="exam-instruction">Which sentence correctly uses this word?</p>
        ${test.sent.map((q, i) => `
          <div class="exam-q" data-qid="${q.id}">
            <div class="exam-q-num">${i + 11}.</div>
            <div class="exam-q-body">
              <p class="exam-q-text">Choose the correct sentence for <strong>&ldquo;${escHtml(q.word.de)}&rdquo;</strong>:</p>
              ${renderOptionsGroup(q.id, q.options)}
            </div>
          </div>`).join("")}
      </div>`);

    // Part 4 — Match German ↔ English
    parts.push(`
      <div class="exam-part">
        <h2 class="exam-part-title">Part 4 &middot; Match the Words <span class="exam-part-marks">${test.match.items.length} marks</span></h2>
        <p class="exam-instruction">Match each German word with its English meaning.</p>
        <div class="exam-match-key">${test.match.options.map(o => `<span><strong>${o.letter}.</strong> ${escHtml(o.text)}</span>`).join("")}</div>
        ${test.match.items.map((q, i) => `
          <div class="exam-q exam-match-row" data-qid="${q.id}">
            <div class="exam-q-num">${i + 16}.</div>
            <div class="exam-q-body exam-match-body">
              <p class="exam-q-text">${escHtml(q.word.de)}</p>
              <select class="exam-select" data-qid="${q.id}">
                <option value="">— choose —</option>
                ${test.match.options.map(o => `<option value="${escHtml(o.letter)}">${o.letter}</option>`).join("")}
              </select>
            </div>
          </div>`).join("")}
      </div>`);

    // Part 5 — Translation
    parts.push(`
      <div class="exam-part">
        <h2 class="exam-part-title">Part 5 &middot; Translation <span class="exam-part-marks">${test.trans.length} marks</span></h2>
        <p class="exam-instruction">Translate the following English words into German.</p>
        ${test.trans.map((q, i) => `
          <div class="exam-q" data-qid="${q.id}">
            <div class="exam-q-num">${i + 21}.</div>
            <div class="exam-q-body">
              <p class="exam-q-text">${escHtml(q.prompt)}</p>
              <input type="text" class="exam-text-input" data-qid="${q.id}" placeholder="Type the German word…" autocomplete="off" autocapitalize="off" spellcheck="false">
            </div>
          </div>`).join("")}
      </div>`);

    // Part 6 — True or False
    parts.push(`
      <div class="exam-part">
        <h2 class="exam-part-title">Part 6 &middot; True or False <span class="exam-part-marks">${test.tf.length} marks</span></h2>
        <p class="exam-instruction">Read each statement and mark it Richtig (True) or Falsch (False).</p>
        ${test.tf.map((q, i) => `
          <div class="exam-q" data-qid="${q.id}">
            <div class="exam-q-num">${i + 26}.</div>
            <div class="exam-q-body">
              <p class="exam-q-text">${escHtml(q.prompt)}</p>
              <div class="exam-tf" data-qid="${q.id}">
                <button type="button" class="exam-tf-btn" data-value="true">Richtig (True)</button>
                <button type="button" class="exam-tf-btn" data-value="false">Falsch (False)</button>
              </div>
            </div>
          </div>`).join("")}
      </div>`);

    examBody.innerHTML = parts.join("");
    examResults.innerHTML = "";
    examResults.style.display = "none";
    wireExamControls();
  }

  function wireExamControls() {
    examBody.querySelectorAll(".exam-opts").forEach(group => {
      group.querySelectorAll(".exam-opt").forEach(opt => {
        opt.addEventListener("click", () => {
          if (graded) return;
          group.querySelectorAll(".exam-opt").forEach(o => o.classList.remove("selected"));
          opt.classList.add("selected");
        });
      });
    });
    examBody.querySelectorAll(".exam-tf-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (graded) return;
        const wrap = btn.closest(".exam-tf");
        wrap.querySelectorAll(".exam-tf-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
    });
  }

  /* ────────────────────────────────────────
     GRADING
     ──────────────────────────────────────── */
  function collectAllQuestions(test) {
    return [...test.fill, ...test.mc, ...test.sent, ...test.match.items, ...test.trans, ...test.tf];
  }

  function gradeTest() {
    if (!currentTest || graded) return;
    graded = true;

    const results = [];

    // Fill + Translation (typed, lenient German match)
    [...currentTest.fill, ...currentTest.trans].forEach(q => {
      const input = examBody.querySelector(`.exam-text-input[data-qid="${q.id}"]`);
      const typed = input ? input.value.trim() : "";
      const ok = isAnswerCorrect(typed, q.answer, true);
      input.classList.add(ok ? "is-correct" : "is-wrong");
      if (!ok) showInlineAnswer(input.closest(".exam-q"), q.answer);
      results.push({ ...q, userAnswer: typed, isCorrect: ok });
    });

    // MC + Sentence choice
    [...currentTest.mc, ...currentTest.sent].forEach(q => {
      const group = examBody.querySelector(`.exam-opts[data-name="${q.id}"]`);
      const selected = group ? group.querySelector(".exam-opt.selected") : null;
      const userAnswer = selected ? selected.dataset.value : "";
      const ok = normalise(userAnswer) === normalise(q.answer);
      group.querySelectorAll(".exam-opt").forEach(o => {
        if (normalise(o.dataset.value) === normalise(q.answer)) o.classList.add("is-correct");
        else if (o === selected) o.classList.add("is-wrong");
        o.setAttribute("tabindex", "-1");
      });
      results.push({ ...q, userAnswer, isCorrect: ok });
    });

    // Match
    currentTest.match.items.forEach(q => {
      const select = examBody.querySelector(`.exam-select[data-qid="${q.id}"]`);
      const chosenLetter = select ? select.value : "";
      const chosenText = (currentTest.match.options.find(o => o.letter === chosenLetter) || {}).text || "";
      const ok = normalise(chosenText) === normalise(q.answer);
      select.disabled = true;
      select.classList.add(ok ? "is-correct" : "is-wrong");
      if (!ok) showInlineAnswer(select.closest(".exam-q"), `${q.answer}`);
      results.push({ ...q, userAnswer: chosenText, isCorrect: ok });
    });

    // True/False
    currentTest.tf.forEach(q => {
      const wrap = examBody.querySelector(`.exam-tf[data-qid="${q.id}"]`);
      const selected = wrap ? wrap.querySelector(".exam-tf-btn.selected") : null;
      const userVal = selected ? selected.dataset.value === "true" : null;
      const ok = userVal === q.answer;
      wrap.querySelectorAll(".exam-tf-btn").forEach(b => {
        const bVal = b.dataset.value === "true";
        if (bVal === q.answer) b.classList.add("is-correct");
        else if (b === selected) b.classList.add("is-wrong");
        b.disabled = true;
      });
      results.push({ ...q, userAnswer: userVal, isCorrect: ok });
    });

    examBody.querySelectorAll(".exam-text-input").forEach(i => i.disabled = true);

    const total = results.length;
    const correct = results.filter(r => r.isCorrect).length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    const pass = percent >= PASS_MARK;
    const status = quizStatusFor(percent);

    insertTestScore({
      correct, total, percent, pass,
      status: status.label, statusCls: status.cls,
      level: currentTest.level, cat: letterLabel(currentTest.letters),
      date: Date.now()
    });

    renderResultsBanner({ correct, total, percent, pass, status });
    submitBtn.style.display = "none";
    regenBtn.style.display = "";
    try { examResults.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (_) {}
  }

  function showInlineAnswer(qEl, answer) {
    if (!qEl) return;
    const note = document.createElement("div");
    note.className = "exam-correct-note";
    note.innerHTML = `Correct answer: <strong>${escHtml(answer)}</strong>`;
    qEl.appendChild(note);
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
        <p class="erb-hint">Scroll up to see every correct answer marked in green, and the right answer shown wherever you missed one.</p>
      </div>`;
  }

  /* ────────────────────────────────────────
     SCOREBOARD
     ──────────────────────────────────────── */
  function loadTestScores() {
    try { const r = localStorage.getItem("ad_vocab_test_scores_v1"); if (r) return JSON.parse(r); } catch (_) {}
    return [];
  }
  function saveTestScores(s) { try { localStorage.setItem("ad_vocab_test_scores_v1", JSON.stringify(s)); } catch (_) {} }
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
        <span>${escHtml(s.level || "A1")} · ${escHtml(s.cat)} · ${s.correct}/${s.total}
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

  function availableLetters() {
    const words = getWordsByLevel(testLevel);
    return [...new Set(words.map(w => w.letter))].sort();
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
      const on = testLetters.includes(p.dataset.val);
      p.classList.toggle("selected", on);
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
    const words = getWordsByLevel(testLevel);
    heroSub.textContent = words.length
      ? `${words.length} ${testLevel} words in the bank · a different 30-mark test every time`
      : `${testLevel} isn't ready yet — try A1 in the meantime`;
  }

  /* ────────────────────────────────────────
     SCREEN FLOW
     ──────────────────────────────────────── */
  function startTest() {
    currentTest = buildTestPlan(testLevel, testLetters);
    graded = false;
    examTitle.textContent = `${currentTest.level} German Vocabulary Test`;
    const totalMarks = collectAllQuestions(currentTest).length;
    examMeta.textContent = `Total Marks: ${totalMarks} · ${letterLabel(currentTest.letters)} · a new test every time`;
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

  document.addEventListener("DOMContentLoaded", () => {
    renderLevelTabs();
    renderLetterPills();
    updateHeroSub();
    renderTestScoreboard();
  });
})();
