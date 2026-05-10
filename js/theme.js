/* ===================================================== */
/* JS ACTIVÉ */
/* ===================================================== */

document.body.classList.add("js-enabled");

/* ===================================================== */
/* THEME */
/* ===================================================== */

const button =
  document.getElementById("themeButton") || null;

const savedTheme =
  localStorage.getItem("theme");

/* ---------- Apply saved theme ---------- */

if (savedTheme === "light") {

  document.body.classList.remove("dark-mode");

} else {

  document.body.classList.add("dark-mode");

}

/* ---------- Toggle theme ---------- */

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

  const isDark =
    document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );

}

/* ===================================================== */
/* REVEAL PROJECTS */
/* ===================================================== */

const projectSections =
  document.querySelectorAll(".project-section");

function revealProjects() {

  const trigger =
    window.innerHeight * 0.85;

  projectSections.forEach((section) => {

    const top =
      section.getBoundingClientRect().top;

    if (top < trigger) {

      section.classList.add("visible");

    }

  });

}

window.addEventListener(
  "scroll",
  revealProjects
);

revealProjects();

/* ===================================================== */
/* LIGHTBOX */
/* ===================================================== */

const images =
  document.querySelectorAll(
    ".project-image, .gallery img"
  );

if (images.length > 0) {

  const lightbox =
    document.createElement("div");

  lightbox.classList.add("lightbox");

  document.body.appendChild(lightbox);

  const lightboxImage =
    document.createElement("img");

  lightbox.appendChild(lightboxImage);

  images.forEach((image) => {

    image.addEventListener("click", () => {

      lightbox.classList.add("active");

      lightboxImage.src = image.src;

    });

  });

  lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

  });

}

/* ===================================================== */
/* ECO IMPACT */
/* ===================================================== */

function calculateCarbonFootprint() {

  const resources =
    performance.getEntriesByType("resource");

  let totalBytes = 0;

  resources.forEach((resource) => {

    const size =
      resource.transferSize ||
      resource.encodedBodySize ||
      0;

    totalBytes += size;

  });

  const totalMB =
    totalBytes / (1024 * 1024);

  const carbon =
    totalMB * 0.5;

  const requests =
    resources.length;

  const carbonElement =
    document.getElementById("carbonValue");

  if (!carbonElement) return;

  const lang =
    localStorage.getItem("language") || "fr";

  /* ---------- Fallback ---------- */

  if (totalBytes <= 0) {

    carbonElement.innerHTML =
      lang === "en"
        ? "Analysis unavailable"
        : "Analyse indisponible";

    return;

  }

  /* ---------- Eco score ---------- */

  let ecoScore = "";
  let ecoClass = "";

  if (carbon < 0.10) {

    ecoScore =
      lang === "en"
        ? "🟢 Excellent"
        : "🟢 Excellent";

    ecoClass = "excellent";

  } else if (carbon < 0.50) {

    ecoScore =
      lang === "en"
        ? "🟡 Good"
        : "🟡 Correct";

    ecoClass = "correct";

  } else if (carbon < 1.00) {

    ecoScore =
      lang === "en"
        ? "🟠 Average"
        : "🟠 Moyen";

    ecoClass = "medium";

  } else {

    ecoScore =
      lang === "en"
        ? "🔴 High"
        : "🔴 Élevé";

    ecoClass = "bad";

  }

  /* ---------- Display ---------- */

  carbonElement.innerHTML = `

    ${carbon.toFixed(2)} g CO₂ / visit<br>

    ${totalMB.toFixed(2)} MB • ${requests} requests

    <div class="eco-score ${ecoClass}">
      ${ecoScore}
    </div>

    <div class="eco-reference">

      ${
        lang === "en"

          ? "Reference inspired by European eco-design practices. Estimation based on resources loaded by this page."

          : "Référence inspirée des pratiques européennes d’éco-conception web. Estimation basée sur les ressources chargées par cette page."
      }

    </div>

  `;

}

/* ===================================================== */
/* PAGE LOAD */
/* ===================================================== */

window.addEventListener("load", () => {

  setTimeout(() => {

    calculateCarbonFootprint();

  }, 1200);

});

/* ===================================================== */
/* COPYRIGHT YEAR */
/* ===================================================== */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}

/* ===================================================== */
/* TIMELINE REVEAL */
/* ===================================================== */

const timelineSections =
  document.querySelectorAll(".timeline-section");

function revealTimeline() {

  const trigger =
    window.innerHeight * 0.88;

  timelineSections.forEach((section) => {

    const top =
      section.getBoundingClientRect().top;

    if (top < trigger) {

      section.classList.add("visible");

    }

  });

}

window.addEventListener(
  "scroll",
  revealTimeline
);

revealTimeline();

/* ---------- Burger menu ---------- */

const menuToggle =
  document.getElementById("menuToggle");

const fullscreenMenu =
  document.getElementById("fullscreenMenu");

if (menuToggle && fullscreenMenu) {

  menuToggle.addEventListener(
    "click",
    () => {

      menuToggle.classList.toggle("active");

      fullscreenMenu.classList.toggle("active");

    }
  );

}
