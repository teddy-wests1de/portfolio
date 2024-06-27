"use strict";
const nav = document.querySelector(".nav");
const btnMenu = document.querySelectorAll(".btn-menu");
const navMenu = document.querySelector(".nav-menu");
const currentYear = document.querySelector(".current-year");
const projects = document.querySelectorAll(".project-item");
const detailsModal = document.querySelector(".details-modal");
const detailScreen = document.querySelector(".details-screen");
const closeModal = document.querySelector(".close-modal");
const projectList = [
    {
        id: 1,
        image: "./src/img/Rustic-Momentum-Desktop.png",
        title: "Project 1"
    },
    {
        id: 2,
        image: "./src/img/Jetty's-Barbershop-Desktop.png",
        title: "Project 2"
    },
    {
        id: 3,
        image: "./src/img/Frontend Mentor Age calculator app - Desktop.png",
        title: "Project 3"
    }
];
nav.addEventListener("click", function(e) {
    const navLink = e.target.closest(".nav-link");
    if (!navLink) return;
    console.log(navLink);
});
btnMenu.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        console.log(e.target);
        navMenu.classList.toggle("hidden");
    });
});
const displayYear = function() {
    const year = new Date().getFullYear();
    return year;
};
currentYear.textContent = displayYear();
projects.forEach((project)=>{
    project.addEventListener("click", function(e) {
        const selected = e.target.closest(".project-item");
        const index = +selected.dataset.index - 1;
        console.log(index);
        renderProjectDetail(projectList[index]);
        detailsModal.classList.remove("hidden");
    });
});
closeModal.addEventListener("click", ()=>detailsModal.classList.add("hidden"));
const renderProjectDetail = function(index) {
    const markup = generateHTML(index);
    detailScreen.innerHTML = "";
    detailScreen.insertAdjacentHTML("afterbegin", markup);
};
const generateHTML = function(index) {
    console.log(index);
    return `
  <div class="project-item" data-index="1">
    <div class="project-image">
      <picture>
        <img
          src="${index.image}"
          target="_blank"
          alt="Gym App Page"
        />
      </picture>
    </div>
      <div class="project-title">
          <small class="superscript">${index.title}</small>
          <h3 class="project-name"><a href="https://teddy-wests1de.github.io/gym-site/"
            class="project-link">${index.title}</a></h3>
      </div>
      <div class="project-description">
        <!-- <p class="description">
            One of my first full scale projects, demonstrating the use of grid and Javascript classes to incorporate user objects. The site is still under development, however the Register and login features are nearly done and can be seen in action in this version.
        </p> -->
      </div>
      <div class="project-buttons">
        <a href="#" class="btn-cta btn-cta">Live Site</a>
        <a href="#" class="btn-cta btn-cta-ghost">Code Repo</a>
      </div>
      <div class="tag-list"></div>
  </div>
  `;
} // renderProjectDetail(2);
;

//# sourceMappingURL=index2.09c24910.js.map
