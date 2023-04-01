const lightMode = document.querySelector(".light-mode");
const blackMode = document.querySelector(".dark-mode");
const contrastMode = document.querySelector(".high-contrast-mode");
const body = document.querySelector("body");

lightMode.addEventListener("click", function () {
  setBackgroundColor("lite-mode");
});
blackMode.addEventListener("click", function () {
  setBackgroundColor("dark-mode");
});
contrastMode.addEventListener("click", function () {
  setBackgroundColor("contrast-mode");
});

// Set the background color of an element
function setBackgroundColor(color) {
  localStorage.setItem("themeMode", color);
  switch (color) {
    case "dark-mode":
      document.body.classList.remove("contrast-mode");
      document.body.classList.remove("lite-mode");
      document.body.classList.add("dark-mode");
      break;
    case "contrast-mode":
      document.body.classList.remove("lite-mode");
      document.body.classList.remove("dark-mode");
      document.body.classList.add("contrast-mode");
      break;
    default:
      document.body.classList.remove("dark-mode");
      document.body.classList.remove("contrast-mode");
      break;
  }
}

// Retrieve the background color from localStorage
const storedColor = localStorage.getItem("themeMode");
// Set the background color to the stored value (if it exists)
if (storedColor) {
  setBackgroundColor(storedColor);
}
