let elems = [...document.getElementsByTagName("*")];
const dev = document.querySelector(".dev");
// if (elems[0] == `<main>`) console.log("html");

const goDark = () => {
  elems.map(el => {
    console.log(window.getComputedStyle(el).backgroundColor);
    if (
      window.getComputedStyle(el).backgroundColor ==
      ("rgba(247, 247, 247, 0.7)" || "rgb(247, 247, 247)")
    ) {
      el.style.backgroundColor = "rgb(8, 8, 8)";
    } else if (
      window.getComputedStyle(el).color ==
      ("rgba(247, 247, 247, 0.7)" || "rgb(247, 247, 247)")
    ) {
      el.style.color = "rgb(8, 8, 8)";
    } else if (
      //color-grey-dark-1
      window.getComputedStyle(el).color == "rgb(196, 196, 196)"
    ) {
      el.style.color = "rgb(59, 59, 59)";
    } else if (
      window.getComputedStyle(el).backgroundColor == "rgba(247, 247, 247, 0.7)"
    ) {
      el.style.color = "rgb(51, 51, 51)";
    } else if (
      //color-grey-dark-2
      window.getComputedStyle(el).color == "rgba(213, 218, 223, 0.7)"
    ) {
      el.style.color = "rgb(59, 55, 51)";
    } else if (
      window.getComputedStyle(el).backgroundColor == "rgba(213, 218, 223, 0.7)"
    ) {
      el.style.color = "rgb(59, 55, 51)";
    } else if (
      //color-grey-dark-3
      window.getComputedStyle(el).color == "rgb(51, 51, 51)"
    ) {
      el.style.color = "rgb(204, 204, 204)";
    } else if (
      window.getComputedStyle(el).backgroundColor == "rgb(51, 51, 51)"
    ) {
      el.style.color = "rgb(204, 204, 204)";
    } else if (
      //color-white
      window.getComputedStyle(el).color == "rgb(240, 255, 255)"
    ) {
      el.style.color = "rgb(15, 0, 0)";
    } else if (
      window.getComputedStyle(el).backgroundColor == "rgb(240, 255, 255)"
    ) {
      el.style.color = "rgb(15, 0, 0)";
    } else if (
      //color-dark
      window.getComputedStyle(el).color == "rgb(17, 17, 17)"
    ) {
      el.style.color = "rgb(238, 238, 238)";
    } else if (
      window.getComputedStyle(el).backgroundColor == "rgb(17, 17, 17)"
    ) {
      el.style.color = "rgb(238, 238, 238)";
    }
  });
};

dev.addEventListener("click", goDark);
console.log(document.body.style);
