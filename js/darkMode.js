// const para = [...document.querySelectorAll("p")];
// const h2 = [...document.querySelectorAll("h2")];
// const h3 = [...document.querySelectorAll("h3")];
// const h4 = [...document.querySelectorAll("h4")];
// const span = [...document.querySelectorAll("span")];
// const link = [...document.querySelectorAll("a")];

const button = [...document.querySelectorAll("button")];
const input = [...document.querySelectorAll("input")];
const textarea = [...document.querySelectorAll("textarea")];

const img = document.querySelector("img");

let textElems = [input, button, textarea];

const body = document.querySelector("body");

let darkTheme = false;

const bodyTxtDark = () => {
  otherTextDark(textElems);
  if (darkTheme == false) {
    body.classList.add("t--dark");
    body.style.color = "#653e22";
    img.classList.add("t--dark-img");

    return (darkTheme = true);
  } else body.style.color = "#333";
  body.classList.remove("t--dark");
  img.classList.remove("t--dark-img");
  return (darkTheme = false);
};

const otherTextDark = el => {
  el.forEach(elem =>
    elem.forEach(element => {
      if (darkTheme == false) {
        element.style.color = "#653e22";
      } else element.style.color = "#333";
    })
  );
};

const dev = document.querySelector(".dev");
dev.addEventListener("click", bodyTxtDark);
