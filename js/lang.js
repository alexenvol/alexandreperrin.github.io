const translations = {

  fr: {

    nav_about: "À propos",
    nav_projects: "Projets",
    nav_podcast: "Podcast",
    nav_contact: "Contact",

    hero_subtitle:
      "Élève ingénieur<br>Conception mécanique • Systèmes embarqués • Aéronautique",

    timeline_enib_title: "ENIB",
    timeline_enib_text:
      "Je débute ma formation d’ingénieur généraliste orientée mécatronique, systèmes embarqués, électronique et conception mécanique.",

    timeline_germany_title:
      "Expérience internationale",

    timeline_germany_text:
      "Je renforce mon anglais technique en environnement industriel allemand et développe mon adaptation multiculturelle.",

    timeline_ariane_title: "ArianeGroup",

    timeline_ariane_text:
      "Je réalise mon stage assistant ingénieur dans le domaine spatial : mécanique, prototypage et essais techniques.",

    vision_title: "Vision",

    vision_text:
      "Passionné par les systèmes complexes, l’innovation industrielle et l’aéronautique.",

    projects_title: "Projets",

    projects_subtitle:
      "Conception mécanique, systèmes embarqués et prototypage.",

    podcast_title: "Podcast",

    podcast_text:
      "Vous souhaitez en savoir plus sur l’éco-conception à l'ENIB ? C'est par ici !",

    contact_title: "Contact",

    footer_text:
      "© <span id='year'></span> Alexandre Perrin — Tous droits réservés",

    carbon_title: "Impact estimé",

    carbon_loading: "Calcul..."

  },

  en: {

    nav_about: "About",
    nav_projects: "Projects",
    nav_podcast: "Podcast",
    nav_contact: "Contact",

    hero_subtitle:
      "Engineering student<br>Mechanical design • Embedded systems • Aerospace",

    timeline_enib_title: "ENIB",

    timeline_enib_text:
      "General engineering studies focused on mechatronics and embedded systems.",

    timeline_germany_title:
      "International Experience",

    timeline_germany_text:
      "Technical English development in a German industrial environment.",

    timeline_ariane_title: "ArianeGroup",

    timeline_ariane_text:
      "Engineering internship in the space industry.",

    vision_title: "Vision",

    vision_text:
      "Passionate about complex systems, aerospace and industrial innovation.",

    projects_title: "Projects",

    projects_subtitle:
      "Mechanical design, embedded systems and prototyping.",

    podcast_title: "Podcast",

    podcast_text:
      "Want to learn more about eco-design at ENIB? Right this way!",

    contact_title: "Contact",

    footer_text:
      "© <span id='year'></span> Alexandre Perrin — All rights reserved",

    carbon_title: "Estimated impact",

    carbon_loading: "Calculating..."

  }

};

let currentLang =
  localStorage.getItem("language") || "fr";

function applyLanguage(lang) {

  document
    .querySelectorAll("[data-lang]")
    .forEach(el => {

      const key =
        el.getAttribute("data-lang");

      if (translations[lang][key]) {

        el.innerHTML =
          translations[lang][key];

      }

    });

  document.getElementById("langButton")
    .innerHTML =
      lang === "fr" ? "EN" : "FR";

  document.documentElement.lang = lang;

  localStorage.setItem("language", lang);

}

function toggleLanguage() {

  currentLang =
    currentLang === "fr"
      ? "en"
      : "fr";

  applyLanguage(currentLang);

}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    applyLanguage(currentLang);

    document
      .getElementById("langButton")
      .addEventListener(
        "click",
        toggleLanguage
      );

  }
);
