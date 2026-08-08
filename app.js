/* ============================================================
   Alltags-Deutsch — app.js (home page)
   Renders one hanging "signboard" card per topic in TOPICS
   (from data.js) and links each one to topic.html?id=...
   ============================================================ */

function renderTopicGrid() {
  const grid = document.getElementById("topic-grid");
  if (!grid) return;

  grid.innerHTML = TOPICS.map(topic => `
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
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTopicGrid);
