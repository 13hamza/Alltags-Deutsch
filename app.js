/* ============================================================
   Alltags-Deutsch — app.js (home page)
   The homepage is a short landing page: a hero, then four small
   teasers — words, stories, topics, games — each linking through
   to its own full page (words.html / stories.html / topics.html /
   games.html). No full lists live here anymore.
   ============================================================ */

const GAME_MODES = [
  { id: "mc", icon: "🃏", title: "Multiple Choice", tagline: "Pick the right answer from 4 options." },
  { id: "type", icon: "⌨️", title: "Type It", tagline: "Spell the translation yourself." },
  { id: "match", icon: "🔗", title: "Match It", tagline: "Pair German with English words." }
];

function gameTeaserCard(mode) {
  return `
    <a class="game-teaser-card" href="games.html?mode=${encodeURIComponent(mode.id)}">
      <span class="game-teaser-icon" aria-hidden="true">${mode.icon}</span>
      <h3>${mode.title}</h3>
      <p class="story-card-tagline">${mode.tagline}</p>
      <span class="game-teaser-cta">Play →</span>
    </a>
  `;
}

function renderGamesTeaser() {
  const grid = document.getElementById("games-teaser-grid");
  if (!grid) return;
  grid.innerHTML = GAME_MODES.map(gameTeaserCard).join("");
}

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

function renderTopicsTeaser() {
  const grid = document.getElementById("topics-teaser-grid");
  if (!grid || typeof TOPICS === "undefined") return;
  grid.innerHTML = TOPICS.slice(0, 3).map(signboardCard).join("");
}

function storyTeaserCard(story) {
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

function renderStoriesTeaser() {
  const grid = document.getElementById("stories-teaser-grid");
  if (!grid || typeof STORIES === "undefined") return;
  grid.innerHTML = STORIES.slice(0, 3).map(storyTeaserCard).join("");
}

function courseTeaserCard(course) {
  if (course.status !== "available") {
    return `
      <div class="course-card course-card--soon" data-level="${course.level}">
        <span class="level-pill" data-level="${course.level}">${course.level}</span>
        <h3>${course.title}</h3>
        <span class="course-card-badge-soon">Kommt bald</span>
      </div>
    `;
  }
  return `
    <a class="course-card" data-level="${course.level}" href="course.html?level=${encodeURIComponent(course.id)}">
      <span class="level-pill" data-level="${course.level}">${course.level}</span>
      <h3>${course.title}</h3>
      <span class="course-card-sub">${course.subtitle}</span>
      <span class="story-card-meta">${course.topics.length} topics · start course →</span>
    </a>
  `;
}

function renderCoursesTeaser() {
  const grid = document.getElementById("courses-teaser-grid");
  if (!grid || typeof COURSES === "undefined") return;
  grid.innerHTML = COURSES.slice(0, 3).map(courseTeaserCard).join("");
}

function teaserSpeakerIconSVG() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/>
    <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M19 6a9 9 0 0 1 0 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6"/>
  </svg>`;
}

function wordTeaserTicket(word) {
  const safeDe = String(word.de).replace(/"/g, "&quot;");
  return `
    <button class="ticket" type="button" data-de="${safeDe}" aria-label="Pronounce ${safeDe}">
      <span class="ticket-text">
        <span class="ticket-de">${word.de}</span>
        <span class="ticket-en">${word.en}</span>
      </span>
      <span class="speaker-btn" aria-hidden="true">${teaserSpeakerIconSVG()}</span>
    </button>
  `;
}

function renderWordsTeaser() {
  const grid = document.getElementById("words-teaser-grid");
  if (!grid || typeof getFeaturedWords === "undefined") return;
  const words = getFeaturedWords();
  grid.innerHTML = words.map(wordTeaserTicket).join("");
  grid.querySelectorAll(".ticket").forEach(el => {
    el.addEventListener("click", () => speakGerman(el.dataset.de));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCoursesTeaser();
  renderWordsTeaser();
  renderGamesTeaser();
  renderStoriesTeaser();
  renderTopicsTeaser();
});
