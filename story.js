/* ============================================================
   Alltags-Deutsch — story.js (story.html)
   Reads ?id=... from the URL, looks the story up in STORIES
   (from stories-data.js), and renders it as clickable text:
   click any German word to see its translation and hear it
   pronounced (via speakGerman, shared with the topic pages).
   ============================================================ */

function speakerIconSVG() {
  return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor"/>
    <path d="M16.5 8.5a5 5 0 0 1 0 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M19 6a9 9 0 0 1 0 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" fill="none" opacity="0.6"/>
  </svg>`;
}

function renderStoryNotFound() {
  document.getElementById("story-root").innerHTML = `
    <div class="empty-state wrap">
      <h1>Story not found</h1>
      <p>That page must have blown away. <a class="back-link" href="stories.html" style="color:var(--brick)">← Back to all stories</a></p>
    </div>
  `;
}

function renderStory(story) {
  document.title = `${story.title.en} · Alltags-Deutsch`;

  const root = document.getElementById("story-root");
  const wordCount = storyWordCount(story);

  root.innerHTML = `
    <header class="story-hero">
      <div class="wrap">
        <span class="story-hero-icon" aria-hidden="true">${story.icon}</span>
        <div class="story-hero-group">
          <div class="story-hero-meta">
            <span class="level-pill" data-level="${story.level}">${story.level}</span>
            <span class="story-card-meta">${wordCount} words</span>
          </div>
          <h1>${story.title.en}</h1>
          <span class="story-hero-de">${story.title.de}</span>
          <p class="story-hero-tagline">${story.taglineEn}</p>
        </div>
      </div>
      <div class="wrap story-controls">
        <button class="play-all-btn" type="button" id="play-story-btn">
          ${speakerIconSVG()} Read story aloud
        </button>
      </div>
    </header>

    <section class="story-hint">
      <div class="wrap">
        <p class="section-hint">Click any German word for its translation — it's read aloud too.</p>
      </div>
    </section>

    <section class="story-body">
      <div class="wrap">
        <article class="story-text" id="story-text">
          ${story.paragraphs.map(p => `<p>${renderClickableParagraph(p)}</p>`).join("")}
        </article>
        <div class="word-popover" id="word-popover">
          <span class="word-popover-de" id="word-popover-de"></span>
          <span class="word-popover-en" id="word-popover-en"></span>
        </div>
      </div>
    </section>

    <p class="footer-note wrap"><a class="back-link" href="stories.html" style="color:var(--brick); border-color: var(--brick);">← Back to all stories</a></p>
  `;

  // Read whole story aloud
  document.getElementById("play-story-btn").addEventListener("click", () => {
    speakDialogue(story.paragraphs.map(de => ({ de })));
  });

  // Word click -> popover + pronunciation
  const storyText = document.getElementById("story-text");
  const popover = document.getElementById("word-popover");
  const popoverDe = document.getElementById("word-popover-de");
  const popoverEn = document.getElementById("word-popover-en");
  let activeWord = null;

  function hidePopover() {
    popover.classList.remove("is-visible");
    if (activeWord) activeWord.classList.remove("is-active");
    activeWord = null;
  }

  async function showWord(span) {
    if (activeWord) activeWord.classList.remove("is-active");
    activeWord = span;
    span.classList.add("is-active");

    const original = span.textContent;
    const wordKey = span.dataset.word;
    const gloss = lookupGloss(wordKey);

    popoverDe.textContent = original;

    if (gloss) {
      popoverEn.textContent = gloss;
    } else {
      popoverEn.textContent = "Translating...";
      try {
        const fetchedGloss = await fetchFreeTranslation(wordKey);
        if (activeWord === span) {
          popoverEn.textContent = fetchedGloss || "Translation unavailable";
        }
      } catch (err) {
        if (activeWord === span) {
          popoverEn.textContent = "Translation unavailable";
        }
      }
    }

    const containerRect = storyText.getBoundingClientRect();
    const spanRect = span.getBoundingClientRect();
    const left = spanRect.left - containerRect.left + spanRect.width / 2;
    const top = spanRect.top - containerRect.top;
    popover.style.left = `${left}px`;
    popover.style.top = `${top}px`;
    popover.classList.add("is-visible");

    speakGerman(original);
  }

  storyText.querySelectorAll(".story-word").forEach(span => {
    span.addEventListener("click", e => {
      e.stopPropagation();
      showWord(span);
    });
    span.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        showWord(span);
      }
    });
  });

  document.addEventListener("click", hidePopover);
  document.addEventListener("keydown", e => { if (e.key === "Escape") hidePopover(); });
  storyText.addEventListener("click", e => e.stopPropagation());
}

function initStoryPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const story = id ? getStoryById(id) : null;

  if (!story) {
    renderStoryNotFound();
    return;
  }
  renderStory(story);
}

document.addEventListener("DOMContentLoaded", initStoryPage);
