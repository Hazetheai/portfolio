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
  otherTextDark(textElems);
  if (darkTheme == false) {
    body.classList.add("t--dark");
    body.style.color = "#653e22";
    img.forEach(im => im.classList.add("t--dark-img"));

    return (darkTheme = true);
  } else body.style.color = "#333";
  body.classList.remove("t--dark");
  img.forEach(im => im.classList.remove("t--dark-img"));
  return (darkTheme = false);
};

const otherTextDark = arr => {
  arr.forEach(elem => {
    if (darkTheme === false) {
      elem.classList.add("t--dark-txt");
    } else elem.classlist.remove("t--dark-txt");
  });
};

const dev = document.querySelector(".dev");
dev.addEventListener("click", bodyTxtDark);
