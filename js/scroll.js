const projectNav = document.querySelector("#projectNav");
const projects = document.querySelector("#section-projects");

projectNav.addEventListener("click", () =>
  projects.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  })
);

// window.addEventListener("scroll", () => console.log(pageYOffset));
