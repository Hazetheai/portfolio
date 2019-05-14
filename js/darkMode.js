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

const body = document.querySelector("html");

let darkTheme = false;

const bodyTxtDark = () => {
  //fire fn to change color of form txt
  otherTextDark(textElems);
  if (darkTheme == false) {
    //if dark theme inactive make necessary changes
    body.classList.add("t--dark");
    body.style.color = "#653e22";
    img.forEach(im => im.classList.add("t--dark-img"));
    // add to local storage
    localStorage.setItem("theme", "dark");
    //change value of theme
    return (darkTheme = true);
    // if dark theme is already active, deactivate
  } else body.style.color = "#333";
  body.classList.remove("t--dark");
  img.forEach(im => im.classList.remove("t--dark-img"));
  localStorage.removeItem("theme", "dark");
  return (darkTheme = false);
};

//fn to change color of form txt
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
  bodyTxtDark();

  if (currentTheme == "dark") {
    darkTheme = true;
  }
}

const dev = document.querySelector(".dev");
dev.addEventListener("click", bodyTxtDark);
