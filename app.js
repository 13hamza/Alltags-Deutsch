/* ============================================================
   Alltags-Deutsch — app.js (home page)
   Renders one hanging "signboard" card per topic in TOPICS
   (from data.js), grouped by topic.category into headed
   sections, and links each one to topic.html?id=...
   ============================================================ */

function signboardCard(topic) {
  return `
    <a class="signboard" href="topic.html?id=${encodeURIComponent(topic.id)}">
      <div class="signboard-peg"></div>
      <div class="signboard-string"></div>
      <div class="signboard-card">
        <span class="signboard-number">${topic.number}</span>
        <span class="signboard-icon" aria-hidden="true">${topic.icon}</span>
        <h2>${topic.en}</h2>
        <span class="signboard-de">${topic.de}</span>
        <p class="signboard-tagline">${topic.tagline}</p>
      </div>
    </a>
  `;
}

function renderTopicGroup(container, letter, title, topics) {
  const section = document.createElement("div");
  section.className = "topic-group";

  const heading = `
    <div class="section-heading">
      <span class="num">${letter}</span>
      <h2>${title}</h2>
    </div>
  `;

  const body = topics.length
    ? `<div class="signboard-grid">${topics.map(signboardCard).join("")}</div>`
    : `<p class="section-hint">Themen kommen bald — topics coming soon.</p>`;

  section.innerHTML = heading + body;
  container.appendChild(section);
}

function renderTopicGrid() {
  const grid = document.getElementById("topic-grid");
  if (!grid) return;

  const daily = TOPICS.filter(t => t.category === "daily");
  const weekly = TOPICS.filter(t => t.category === "weekly-monthly");

  grid.innerHTML = "";
  renderTopicGroup(grid, "A", "Daily Use", daily);
  renderTopicGroup(grid, "B", "LESS COMMON – Use Weekly/Monthly", weekly);
}

document.addEventListener("DOMContentLoaded", renderTopicGrid);
