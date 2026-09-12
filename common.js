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
