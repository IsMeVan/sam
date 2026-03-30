var typed = new Typed(".typing", {
  strings: ["Data Scientist", "Web Developer", "AI Engineer"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}