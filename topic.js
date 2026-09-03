/* ============================================================
   Alltags-Deutsch — topic.js (topic page)
   Reads ?id=... from the URL, looks the topic up in TOPICS
   (from data.js), and renders its header, vocabulary tickets,
   and dialogue cards. Every German word/line is clickable to
   hear it pronounced via the Web Speech API (see speakGerman
   and speakDialogue in data.js).
   ============================================================ */

function speakerIconSVG() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/>
    <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M19 6a9 9 0 0 1 0 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6"/>
  </svg>`;
}

function renderNotFound() {
  document.getElementById("topic-root").innerHTML = `
    <div class="empty-state wrap">
      <h1>Topic not found</h1>
      <p>That signboard must have blown away. <a class="back-link" href="topics.html" style="color:var(--brick)">← Back to all topics</a></p>
    </div>
  `;
}

function renderTopic(topic) {
  document.title = `${topic.en} · Alltags-Deutsch`;

  const root = document.getElementById("topic-root");
  root.innerHTML = `
    <header class="topic-hero">
      <div class="wrap">
        <span class="topic-icon" aria-hidden="true">${topic.icon}</span>
        <div class="topic-heading-group">
          <p class="topic-eyebrow">Thema ${topic.number}</p>
          <div class="topic-h1-row">
            <h1 id="topic-h1" tabindex="0" title="Click to hear it pronounced">${topic.de}</h1>
            <button class="speaker-btn" id="topic-h1-btn" aria-label="Pronounce ${topic.de}">${speakerIconSVG()}</button>
          </div>
          <p class="topic-tagline">${topic.en} — ${topic.tagline}</p>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="wrap">
        <div class="section-heading">
          <span class="num">A</span>
          <h2>Key words &amp; phrases</h2>
        </div>
        <p class="section-hint">Click any word, or its speaker icon, to hear it pronounced in German.</p>
        <div class="vocab-grid" id="vocab-grid"></div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-heading">
          <span class="num">B</span>
          <h2>Everyday dialogues</h2>
        </div>
        <p class="section-hint">Click a line to hear it, or "Play dialogue" to hear the whole conversation in order.</p>
        <div id="dialogue-list"></div>
      </div>
    </section>

    <p class="footer-note wrap"><a class="back-link" href="topics.html" style="color:var(--brick); border-color: var(--brick);">← Back to all topics</a></p>
  `;

  // Topic h1 pronunciation
  const h1 = document.getElementById("topic-h1");
  const h1Btn = document.getElementById("topic-h1-btn");
  const pronounceTopic = () => speakGerman(topic.de);
  h1.addEventListener("click", pronounceTopic);
  h1.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pronounceTopic(); } });
  h1Btn.addEventListener("click", pronounceTopic);

  // Vocabulary tickets
  const vocabGrid = document.getElementById("vocab-grid");
  vocabGrid.innerHTML = topic.vocab.map((item, i) => `
    <button class="ticket" type="button" data-de="${escapeAttr(item.de)}" aria-label="Pronounce ${escapeAttr(item.de)}">
      <span class="ticket-text">
        <span class="ticket-de">${item.de}</span>
        <span class="ticket-en">${item.en}</span>
      </span>
      <span class="speaker-btn" aria-hidden="true">${speakerIconSVG()}</span>
    </button>
  `).join("");
  vocabGrid.querySelectorAll(".ticket").forEach(el => {
    el.addEventListener("click", () => speakGerman(el.dataset.de));
  });

  // Dialogues
  const dialogueList = document.getElementById("dialogue-list");
  dialogueList.innerHTML = topic.dialogues.map((dlg, dIdx) => `
    <article class="dialogue-card">
      <div class="dialogue-card-head">
        <h3>${dlg.title}</h3>
        <button class="play-all-btn" type="button" data-dialogue="${dIdx}">
          ${speakerIconSVG()} Play dialogue
        </button>
      </div>
      ${dlg.lines.map((line, lIdx) => `
        <div class="dialogue-line">
          <span class="dialogue-speaker">${line.speaker}</span>
          <div class="dialogue-text">
            <span class="dialogue-de" role="button" tabindex="0" data-dialogue="${dIdx}" data-line="${lIdx}">
              <span class="dialogue-de-label">${line.de}</span>
              <span class="speaker-btn" aria-hidden="true">${speakerIconSVG()}</span>
            </span>
            <div class="dialogue-en">${line.en}</div>
          </div>
        </div>
      `).join("")}
    </article>
  `).join("");

  dialogueList.querySelectorAll(".dialogue-de").forEach(el => {
    const dIdx = Number(el.dataset.dialogue);
    const lIdx = Number(el.dataset.line);
    const say = () => speakGerman(topic.dialogues[dIdx].lines[lIdx].de);
    el.addEventListener("click", say);
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); say(); } });
  });

  dialogueList.querySelectorAll(".play-all-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const dIdx = Number(btn.dataset.dialogue);
      speakDialogue(topic.dialogues[dIdx].lines);
    });
  });
}

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

function initTopicPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const topic = id ? getTopicById(id) : null;

  if (!topic) {
    renderNotFound();
    return;
  }
  renderTopic(topic);
}

document.addEventListener("DOMContentLoaded", initTopicPage);
