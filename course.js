/* ============================================================
   Alltags-Deutsch — course.js (course.html)
   Reads ?level=... from the URL, looks the course up in COURSES
   (from courses-data.js), and renders its topics: an English
   explanation, optional comparison table(s), an optional tip
   callout, and clickable example sentences (pronounced via
   speakGerman, shared with the topic & words pages).
   ============================================================ */

function escapeAttr(str) {
  return String(str).replace(/"/g, "&quot;");
}

function renderCourseNotFound() {
  document.getElementById("course-root").innerHTML = `
    <div class="empty-state wrap">
      <h1>Course not found</h1>
      <p>That course must have blown away. <a class="back-link" href="courses.html" style="color:var(--brick)">← Back to all courses</a></p>
    </div>
  `;
}

function renderCourseComingSoon(course) {
  document.title = `${course.title} · Alltags-Deutsch`;
  document.getElementById("course-root").innerHTML = `
    <header class="course-hero">
      <div class="wrap">
        <span class="level-pill" data-level="${course.level}">${course.level}</span>
        <h1>${course.title}</h1>
        <p class="course-hero-sub">${course.subtitle}</p>
      </div>
    </header>
    <div class="wrap">
      <div class="stories-coming-soon" style="margin: 40px 0 70px;">
        <span class="hand">Kommt bald!</span>
        <p>The ${course.level} course is on its way. In the meantime, try the <a href="course.html?level=a1" style="color:var(--brick)">A1 course</a> or browse <a href="words.html" style="color:var(--brick)">all vocabulary</a>.</p>
      </div>
    </div>
    <p class="footer-note wrap"><a class="back-link" href="courses.html" style="color:var(--brick); border-color: var(--brick);">← Back to all courses</a></p>
  `;
}

function courseTable(table) {
  return `
    <div class="course-table-wrap">
      ${table.caption ? `<p class="course-table-caption">${table.caption}</p>` : ""}
      <table class="course-table">
        <thead>
          <tr>${table.headers.map(h => `<th>${h}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${table.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function courseExampleTicket(ex, i) {
  return `
    <button class="ticket" type="button" data-de="${escapeAttr(ex.de)}" aria-label="Pronounce ${escapeAttr(ex.de)}">
      <span class="ticket-text">
        <span class="ticket-de">${ex.de}</span>
        <span class="ticket-en">${ex.en}</span>
      </span>
      <span class="speaker-btn" aria-hidden="true">${speakerIconSVG()}</span>
    </button>
  `;
}

function courseTopicSection(topic) {
  return `
    <section class="section course-topic" id="${topic.id}">
      <div class="wrap">
        <div class="section-heading">
          <span class="num">${topic.number}</span>
          <h2>${topic.en}</h2>
        </div>
        <p class="course-topic-de">${topic.de}</p>

        ${(topic.intro || []).map(p => `<p class="course-topic-p">${p}</p>`).join("")}

        ${(topic.tables || []).map(courseTable).join("")}

        ${topic.tip ? `
          <div class="course-tip">
            <span class="course-tip-label">💡 Tip</span>
            <p>${topic.tip}</p>
          </div>
        ` : ""}

        <p class="section-hint">Click any example, or its speaker icon, to hear it pronounced in German.</p>
        <div class="vocab-grid course-examples">${(topic.examples || []).map(courseExampleTicket).join("")}</div>
      </div>
    </section>
  `;
}

function renderCourse(course) {
  document.title = `${course.title} · Alltags-Deutsch`;

  const root = document.getElementById("course-root");
  root.innerHTML = `
    <header class="course-hero">
      <div class="wrap">
        <span class="level-pill" data-level="${course.level}">${course.level}</span>
        <h1>${course.title}</h1>
        <p class="course-hero-sub">${course.subtitle}</p>
        <p class="course-hero-tagline">${course.tagline}</p>
      </div>
    </header>

    <nav class="course-toc">
      <div class="wrap">
        <p class="course-toc-label">On this page</p>
        <div class="course-toc-links">
          ${course.topics.map(t => `<a href="#${t.id}">${t.number} · ${t.en}</a>`).join("")}
        </div>
      </div>
    </nav>

    ${course.topics.map(courseTopicSection).join("")}

    <p class="footer-note wrap"><a class="back-link" href="courses.html" style="color:var(--brick); border-color: var(--brick);">← Back to all courses</a></p>
  `;

  root.querySelectorAll(".ticket").forEach(el => {
    el.addEventListener("click", () => speakGerman(el.dataset.de));
  });
}

function initCoursePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("level");
  const course = id ? getCourseById(id) : null;

  if (!course) {
    renderCourseNotFound();
    return;
  }
  if (course.status !== "available") {
    renderCourseComingSoon(course);
    return;
  }
  renderCourse(course);
}

document.addEventListener("DOMContentLoaded", initCoursePage);
