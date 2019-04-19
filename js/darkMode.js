// const para = [...document.querySelectorAll("p")];
// const h2 = [...document.querySelectorAll("h2")];
// const h3 = [...document.querySelectorAll("h3")];
// const h4 = [...document.querySelectorAll("h4")];
// const span = [...document.querySelectorAll("span")];
// const link = [...document.querySelectorAll("a")];

// console.log(link.style);

const button = [...document.querySelectorAll("button")];
const input = [...document.querySelectorAll("input")];
const textarea = [...document.querySelectorAll("textarea")];

let textElems = [input, button, textarea];

const body = document.querySelector("body");

// const bodyTxtDark = () => {
//   body.classList.toggle("t--dark");
//   if (body.classList.contains("t--dark")) {
//     body.style.color = "#653e22";
//   } else body.style.color = "#333";
// };

// const otherTextDark = el => {
//   el.forEach(elem =>
//     elem.forEach(element => (element.style.color = "#653e22"))
//   );
// };

// otherTextDark(textElems);

// bodyTxtDark(body);

let darkTheme = false;

const bodyTxtDark = () => {
  if (darkTheme == false) {
    body.classList.add("t--dark");
    body.style.color = "#653e22";
    otherTextDark(textElems);

    return (darkTheme = true);
  } else body.style.color = "#333";
  body.classList.remove("t--dark");
  return (darkTheme = false);
};

const otherTextDark = el => {
  if (darkTheme == false) {
    el.forEach(elem =>
      elem.forEach(element => (element.style.color = "#653e22"))
    );
  }
};

// bodyTxtDark(body);
