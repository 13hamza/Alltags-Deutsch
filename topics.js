/* ============================================================
   Alltags-Deutsch — topics.js (topics.html)
   Renders one hanging "signboard" card per topic in TOPICS
   (from data.js), organised by CEFR level and then by theme:

     A1 · Most common   — everyday essentials
     A2 · Less common   — weekly / monthly situations
     B1 · Intermediate  — life admin, work & longer conversations

   Level tabs (All / A1 / A2 / B1) filter the page. Each topic's
   level and theme come from TOPIC_ORGANISATION in data.js.
   The homepage only teases 3 topics (see renderTopicsTeaser in app.js).
   ============================================================ */

let activeTopicLevel = "ALL";

function signboardCard(topic) {
  return `
    <a class="signboard" href="topic.html?id=${encodeURIComponent(topic.id)}">
      <div class="signboard-peg"></div>
      <div class="signboard-string"></div>
      <div class="signboard-card">
        <span class="signboard-number">${topic.number}</span>
        ${topic.level ? `<span class="level-pill signboard-level" data-level="${topic.level}">${topic.level}</span>` : ""}
        <span class="signboard-icon" aria-hidden="true">${topic.icon}</span>
        <h2>${topic.en}</h2>
        <span class="signboard-de">${topic.de}</span>
        <p class="signboard-tagline">${topic.tagline}</p>
      </div>
    </a>
  `;
}

function renderTopicLevelTabs() {
  const tabs = document.getElementById("topic-level-tabs");
  if (!tabs) return;
  const levels = [{ id: "ALL", label: "A1, A2 & B1", sublabel: "All" }]
    .concat(TOPIC_LEVELS.map(l => ({ id: l.id, label: l.label, sublabel: l.id })));
  tabs.innerHTML = levels.map(lvl => `
    <button type="button" class="level-tab${lvl.id === activeTopicLevel ? " is-active" : ""}" data-level="${lvl.id}">
      ${lvl.sublabel} · ${lvl.label}
    </button>
  `).join("");
  tabs.querySelectorAll(".level-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeTopicLevel = btn.dataset.level;
      renderTopicLevelTabs();
      renderTopicGrid();
    });
  });
}

function renderLevelSection(container, lvl) {
  const topics = getTopicsByLevel(lvl.id);
  const section = document.createElement("div");
  section.className = "topic-group topic-level-group";

  const themes = [];
  topics.forEach(t => {
    let g = themes.find(x => x.theme === t.theme);
    if (!g) { g = { theme: t.theme, topics: [] }; themes.push(g); }
    g.topics.push(t);
  });

  section.innerHTML = `
    <div class="section-heading">
      <span class="num">${lvl.id}</span>
      <h2>${lvl.label} <span class="topic-level-count">· ${topics.length} topics</span></h2>
    </div>
    <p class="section-hint topic-level-desc">${lvl.desc}</p>
    ${topics.length ? themes.map(g => `
      <h3 class="topic-theme-title">${g.theme}</h3>
      <div class="signboard-grid">${g.topics.map(signboardCard).join("")}</div>
    `).join("") : `<p class="section-hint">Themen kommen bald — topics coming soon.</p>`}
  `;
  container.appendChild(section);
}

function renderTopicGrid() {
  const grid = document.getElementById("topic-grid");
  if (!grid) return;
  grid.innerHTML = "";
  TOPIC_LEVELS
    .filter(lvl => activeTopicLevel === "ALL" || lvl.id === activeTopicLevel)
    .forEach(lvl => renderLevelSection(grid, lvl));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTopicLevelTabs();
  renderTopicGrid();
});
