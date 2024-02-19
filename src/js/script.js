"use strict";
const nav = document.querySelector(".nav");
const btnMenu = document.querySelectorAll(".btn-menu");
const navMenu = document.querySelector(".nav-menu");
const currentYear = document.querySelector('.current-year');

nav.addEventListener("click", function (e) {
  const navLink = e.target.closest(".nav-link");
  if (!navLink) return;
  console.log(navLink);
});

btnMenu.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target);
    navMenu.classList.toggle('hidden');
  });
});

const displayYear = function() {
    const year = new Date().getFullYear();
    return year;
}
currentYear.textContent = displayYear();