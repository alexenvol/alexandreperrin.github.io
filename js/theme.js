/* ---------- JS activé ---------- */

document.body.classList.add("js-enabled");

/* ---------- Bouton thème ---------- */

const button =
  document.getElementById("themeButton") || null;

/* ---------- Chargement du thème ---------- */

const savedTheme =
  localStorage.getItem("theme");

/* ---------- Application du thème ---------- */

if (savedTheme === "light") {

  document.body.classList.remove("dark-mode");

  if (button) {
    button.innerHTML = "🌙 Mode sombre";
  }

} else {

  document.body.classList.add("dark-mode");

  if (button) {
    button.innerHTML = "☀️ Mode jour";
  }

}

/* ---------- Toggle thème ---------- */

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

  const isDark =
    document.body.classList.contains("dark-mode");

  if (isDark) {

    localStorage.setItem("theme", "dark");

    if (button) {
      button.innerHTML = "☀️ Mode jour";
    }

  } else {

    localStorage.setItem("theme", "light");

    if (button) {
      button.innerHTML = "🌙 Mode sombre";
    }

  }

}

/* ---------- Reveal animations ---------- */

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

/* ---------- Lightbox images ---------- */

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

/* ---------- Eco impact estimation ---------- */

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

  /* ---------- Fallback ---------- */

  if (totalBytes <= 0) {

    carbonElement.innerHTML =
      "Analyse indisponible";

    return;

  }

  /* ---------- Affichage ---------- */

/* ---------- Eco score ---------- */

let ecoScore = "";
let ecoClass = "";

if (carbon < 0.10) {

  ecoScore = "🟢 Excellent";
  ecoClass = "excellent";

} else if (carbon < 0.50) {

  ecoScore = "🟡 Correct";
  ecoClass = "correct";

} else if (carbon < 1.00) {

  ecoScore = "🟠 Moyen";
  ecoClass = "medium";

} else {

  ecoScore = "🔴 Élevé";
  ecoClass = "bad";

}

/* ---------- Affichage ---------- */

carbonElement.innerHTML = `

  ${carbon.toFixed(2)} g CO₂ / visite<br>

  ${totalMB.toFixed(2)} MB • ${requests} requêtes

  <div class="eco-score ${ecoClass}">
    ${ecoScore}
  </div>

  <div class="eco-reference">
    Référence inspirée des pratiques européennes d’éco-conception web.<br>
    Estimation basée sur les ressources chargées par cette page.
  </div>

`;

}

/* ---------- Chargement page ---------- */

window.addEventListener("load", () => {

  /*
    Petit délai pour laisser
    toutes les ressources charger
  */

  setTimeout(() => {

    calculateCarbonFootprint();

  }, 1200);

});

/* ---------- Copyright year ---------- */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
