/* ============================================================
   Alltags-Deutsch — common.js
   Shared UI functionality across all pages.
   ============================================================ */

(function () {
  function initScrollToTop() {
    if (document.getElementById("back-to-top")) return;

    const btn = document.createElement("button");
    btn.id = "back-to-top";
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Go to top");
    btn.setAttribute("title", "Go to top");
    btn.innerHTML = `<span class="back-to-top-icon" aria-hidden="true">↑</span><span class="back-to-top-text">Go to Top</span>`;
    document.body.appendChild(btn);

    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        btn.classList.add("is-visible");
      } else {
        btn.classList.remove("is-visible");
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    toggleVisibility();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollToTop);
  } else {
    initScrollToTop();
  }
})();

/* ------------------------------------------------------------
   Redirect popup — asks visitors to move to the new website.
   Shown on every page load and every time the tab becomes
   visible again (e.g. after switching tabs).
   ------------------------------------------------------------ */
(function () {
  const NEW_SITE = "https://www.alltags-deutsch.de/";

  // Never show the popup on the new site itself.
  if (/(^|\.)alltags-deutsch\.de$/i.test(location.hostname)) return;

  function injectStyles() {
    if (document.getElementById("redirect-popup-styles")) return;
    const style = document.createElement("style");
    style.id = "redirect-popup-styles";
    style.textContent = `
      .redirect-overlay {
        position: fixed; inset: 0; z-index: 99999;
        display: flex; align-items: center; justify-content: center;
        padding: 16px;
        background: rgba(20, 39, 32, 0.75);
        backdrop-filter: blur(3px);
      }
      .redirect-modal {
        width: 100%; max-width: 520px;
        background: var(--chalk, #F6F1E2);
        color: var(--ink, #24291F);
        border-top: 8px solid var(--mustard, #E3A72F);
        border-radius: var(--radius, 10px);
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        padding: 36px 28px 28px;
        text-align: center;
        font-family: var(--font-body, "Segoe UI", sans-serif);
        animation: redirect-pop 0.25s ease-out;
      }
      @keyframes redirect-pop {
        from { transform: scale(0.92); opacity: 0; }
        to   { transform: scale(1);    opacity: 1; }
      }
      .redirect-modal h2 {
        margin: 0 0 12px;
        font-family: var(--font-display, Georgia, serif);
        font-size: clamp(1.6rem, 5vw, 2.2rem);
        color: var(--pine, #1F3A2E);
      }
      .redirect-modal p { margin: 0 0 24px; font-size: 1.1rem; line-height: 1.5; }
      .redirect-modal a.redirect-url { color: var(--brick, #B5482A); font-weight: 700; word-break: break-all; }
      .redirect-actions { display: flex; flex-direction: column; gap: 10px; }
      .redirect-go, .redirect-stay {
        display: block; width: 100%;
        padding: 14px 18px; border-radius: var(--radius, 10px);
        font: inherit; font-size: 1.1rem; font-weight: 700;
        cursor: pointer; text-decoration: none; border: 2px solid var(--pine, #1F3A2E);
      }
      .redirect-go { background: var(--pine, #1F3A2E); color: var(--chalk, #F6F1E2); }
      .redirect-go:hover { background: var(--pine-deep, #142720); }
      .redirect-stay { background: transparent; color: var(--pine, #1F3A2E); font-weight: 500; font-size: 0.95rem; }
      .redirect-stay:hover { background: rgba(31, 58, 46, 0.08); }
      body.redirect-open { overflow: hidden; }
    `;
    document.head.appendChild(style);
  }

  function closePopup() {
    const overlay = document.getElementById("redirect-overlay");
    if (overlay) overlay.remove();
    document.body.classList.remove("redirect-open");
  }

  function showPopup() {
    if (document.getElementById("redirect-overlay")) return;
    injectStyles();

    const overlay = document.createElement("div");
    overlay.id = "redirect-overlay";
    overlay.className = "redirect-overlay";
    overlay.innerHTML = `
      <div class="redirect-modal" role="dialog" aria-modal="true" aria-labelledby="redirect-title">
        <h2 id="redirect-title">We have moved!</h2>
        <p>Alltags-Deutsch has a new home. Please continue on our new website:<br>
          <a class="redirect-url" href="${NEW_SITE}">www.alltags-deutsch.de</a></p>
        <div class="redirect-actions">
          <a class="redirect-go" href="${NEW_SITE}">Go to the new website →</a>
          <button type="button" class="redirect-stay">Stay on this page</button>
        </div>
      </div>`;

    overlay.querySelector(".redirect-stay").addEventListener("click", closePopup);
    document.body.appendChild(overlay);
    document.body.classList.add("redirect-open");
    overlay.querySelector(".redirect-go").focus();
  }

  // Show again every time the user comes back to this tab.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") showPopup();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showPopup);
  } else {
    showPopup();
  }
})();
