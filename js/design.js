const design = document.querySelector(".design");

const makeover = () => {
  design.classList.toggle("fixed");
  design.classList.toggle("broken");
};

design.addEventListener("click", makeover);
