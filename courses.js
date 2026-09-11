/* ============================================================
   Alltags-Deutsch — courses.js (courses.html)
   Renders one card per CEFR level from COURSES (courses-data.js).
   Available courses link through to course.html?level=...;
   courses whose status is "soon" render as a muted, unclickable
   "Kommt bald" card, same pattern as words.js's empty-level state.
   ============================================================ */

function courseCard(course) {
  if (course.status !== "available") {
    return `
      <div class="course-card course-card--soon" data-level="${course.level}">
        <span class="level-pill" data-level="${course.level}">${course.level}</span>
        <h3>${course.title}</h3>
        <span class="course-card-badge-soon">Kommt bald</span>
        <p class="story-card-tagline">${course.subtitle} — this course is on its way.</p>
      </div>
    `;
  }

  const topicCount = course.topics ? course.topics.length : 0;
  return `
    <a class="course-card" data-level="${course.level}" href="course.html?level=${encodeURIComponent(course.id)}">
      <span class="level-pill" data-level="${course.level}">${course.level}</span>
      <h3>${course.title}</h3>
      <span class="course-card-sub">${course.subtitle}</span>
      <p class="story-card-tagline">${course.tagline}</p>
      <span class="story-card-meta">${topicCount} topics · start course →</span>
    </a>
  `;
}

function renderCourseGrid() {
  const grid = document.getElementById("course-grid");
  if (!grid || typeof COURSES === "undefined") return;
  grid.innerHTML = COURSES.map(courseCard).join("");
}

document.addEventListener("DOMContentLoaded", renderCourseGrid);
