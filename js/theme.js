document.body.classList.add("js-enabled");

const button = document.getElementById("themeButton");

/* ---------- Chargement du thème ---------- */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

  document.body.classList.remove("dark-mode");
  button.innerHTML = "🌙 Mode sombre";

} else {

  document.body.classList.add("dark-mode");
  button.innerHTML = "☀️ Mode jour";

}

/* ---------- Toggle thème ---------- */

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

  const isDark =
    document.body.classList.contains("dark-mode");

  if (isDark) {

    localStorage.setItem("theme", "dark");
    button.innerHTML = "☀️ Mode jour";

  } else {

    localStorage.setItem("theme", "light");
    button.innerHTML = "🌙 Mode sombre";

  }

}

/* ---------- Reveal animations ---------- */

const reveals =
  document.querySelectorAll(".card");

function revealOnScroll() {

  const windowHeight =
    window.innerHeight;

  reveals.forEach((element) => {

    const elementTop =
      element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {

      element.classList.add("active");

    }

  });

}

reveals.forEach((card) => {
  card.classList.add("reveal");
});

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* ---------- Lightbox images ---------- */

const images =
  document.querySelectorAll(
    ".project-image, .gallery img"
  );

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
