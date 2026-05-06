const button = document.getElementById("themeButton");

/* ---------- Chargement du thème ---------- */

if (localStorage.getItem("theme") === "light") {

  document.body.classList.remove("dark-mode");
  button.innerHTML = "🌙 Mode sombre";

} else {

  document.body.classList.add("dark-mode");
  button.innerHTML = "☀️ Mode jour";

}

/* ---------- Changement de thème ---------- */

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {

    localStorage.setItem("theme", "dark");
    button.innerHTML = "☀️ Mode jour";

  } else {

    localStorage.setItem("theme", "light");
    button.innerHTML = "🌙 Mode sombre";

  }

}
