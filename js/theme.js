const button = document.getElementById("themeButton");

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    button.innerHTML = "☀️ Mode jour";
  } else {
    button.innerHTML = "🌙 Mode sombre";
  }

}
