// mobile navbar

// Mobile Hamburger Navbar
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  header.classList.toggle("active");
})

document.querySelectorAll(".nav-item-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}))