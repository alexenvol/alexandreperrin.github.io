const translations = {

  fr: {

    nav_about: "À propos",
    nav_projects: "Projets",
    nav_podcast: "Podcast",
    nav_contact: "Contact",

    hero_subtitle:
      "Élève ingénieur<br>Conception mécanique • Systèmes embarqués • Aéronautique",

    vision_title: "Vision",

  },

  en: {

    nav_about: "About",
    nav_projects: "Projects",
    nav_podcast: "Podcast",
    nav_contact: "Contact",

    hero_subtitle:
      "Engineering student<br>Mechanical design • Embedded systems • Aerospace",

    vision_title: "Vision",

  }

};

let currentLang = localStorage.getItem("language") || "fr";

function applyLanguage(lang) {

  document.querySelectorAll("[data-lang]").forEach(element => {

    const key = element.getAttribute("data-lang");

    if (translations[lang][key]) {

      element.innerHTML = translations[lang][key];

    }

  });

  const button = document.getElementById("langButton");

  button.textContent = lang === "fr" ? "EN" : "FR";

  localStorage.setItem("language", lang);

}

function toggleLanguage() {

  currentLang = currentLang === "fr" ? "en" : "fr";

  applyLanguage(currentLang);

}

document.addEventListener("DOMContentLoaded", () => {

  applyLanguage(currentLang);

  document
    .getElementById("langButton")
    .addEventListener("click", toggleLanguage);

});
