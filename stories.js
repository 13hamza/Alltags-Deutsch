/* ============================================================
   Alltags-Deutsch — stories.js (stories.html)
   Renders the level tabs (A1 / A2 / B1) and, for the active
   level, either a grid of story cards or a "coming soon" note
   if that level has no stories yet.
   ============================================================ */

let activeLevel = "A1";

function storyCard(story) {
  const count = storyWordCount(story);
  return `
    <a class="story-card" data-level="${story.level}" href="story.html?id=${encodeURIComponent(story.id)}">
      <div class="story-card-top">
        <span class="story-card-icon" aria-hidden="true">${story.icon}</span>
        <span class="level-pill" data-level="${story.level}">${story.level}</span>
      </div>
      <div>
        <h3>${story.title.en}</h3>
        <span class="story-card-de">${story.title.de}</span>
      </div>
      <p class="story-card-tagline">${story.taglineEn}</p>
      <span class="story-card-meta">${count} words</span>
    </a>
  `;
}

function renderLevelTabs() {
  const tabs = document.getElementById("level-tabs");
  tabs.innerHTML = STORY_LEVELS.map(lvl => `
    <button type="button" class="level-tab${lvl.id === activeLevel ? " is-active" : ""}" data-level="${lvl.id}">
      ${lvl.sublabel} · ${lvl.label}
    </button>
  `).join("");

  tabs.querySelectorAll(".level-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      activeLevel = btn.dataset.level;
      renderLevelTabs();
      renderStoriesForLevel();
    });
  });
}

function renderStoriesForLevel() {
  const root = document.getElementById("stories-root");
  const stories = getStoriesByLevel(activeLevel);

  if (!stories.length) {
    root.innerHTML = `
      <div class="stories-coming-soon">
        <span class="hand">Kommt bald!</span>
        <p>${activeLevel} stories are on their way. Try the A1 stories in the meantime.</p>
      </div>
    `;
    return;
  }

  root.innerHTML = `<div class="story-grid">${stories.map(storyCard).join("")}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderLevelTabs();
  renderStoriesForLevel();
});
