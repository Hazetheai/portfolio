// const para = [...document.querySelectorAll("p")];
// const h2 = [...document.querySelectorAll("h2")];
// const h3 = [...document.querySelectorAll("h3")];
// const h4 = [...document.querySelectorAll("h4")];
// const span = [...document.querySelectorAll("span")];
// const link = [...document.querySelectorAll("a")];

const input = [...document.querySelectorAll("input")];
const button = [...document.querySelectorAll("button")];
const textarea = [...document.querySelectorAll("textarea")];

const img = [...document.querySelectorAll("img")];

let textElems = [input, button, textarea].flat();

const body = document.querySelector("body");

let darkTheme = false;

const bodyTxtDark = () => {
  //fire fn to change color of form txt
  otherTextDark(textElems);
  if (darkTheme == false) {
    //if dark theme inactive make necessary additions + changes and change value of theme
    body.classList.add("t--dark");
    body.style.color = "#653e22";
    img.forEach(im => im.classList.add("t--dark-img"));
    localStorage.setItem("theme", "dark");
    return (darkTheme = true);
  } else body.style.color = "#333";
  body.classList.remove("t--dark");
  img.forEach(im => im.classList.remove("t--dark-img"));
  localStorage.removeItem("theme", "dark");
  return (darkTheme = false);
};

const otherTextDark = arr => {
  arr.forEach(elem => {
    if (darkTheme === false) {
      elem.style.color = "#653e22";
    } else elem.style.color = "#333";
  });
};

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.body.classList.add("t--dark", currentTheme);

  if (currentTheme == "dark") {
    darkTheme = true;
  }
}

const dev = document.querySelector(".dev");
dev.addEventListener("click", bodyTxtDark);
