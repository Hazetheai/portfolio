const copyEmailBtn = document.querySelector(".js-emailcopybtn");
const tooltip = document.querySelector(".tooltiptext");

const showTip = () => {
  tooltip.classList.add("showtip");
  setTimeout(() => tooltip.classList.remove("showtip"), 1500);
};

// const copyEmail = (event) => {
//   // Select the email link anchor text
//   //   event.preventDefault();
//   emailAddress = "contact@jakeriordan.dev";
//   const emailLink = document.querySelector(".js-emaillink");
//   const range = document.createRange();
//   range.selectNode(emailLink);
//   window.getSelection().addRange(range);

//   try {
//     // Now that we've selected the anchor text, execute the copy command
//     const successful = document.execCommand("copy");
//     const msg = successful ? "successful" : "unsuccessful";
//     console.log("Copy email command was " + msg);
//     showTip();
//   } catch (err) {
//     console.log("Oops, unable to copy");
//   }

//   // Remove the selections - NOTE: Should use
//   // removeRange(range) when it is supported
//   window.getSelection().removeAllRanges();
// }

const toClipboard = str => {
  let el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", opacity: "0", visibility: "hidden" };
  try {
    document.body.appendChild(el);
    el.select();
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";

    console.log("Copy email command was " + msg);
    document.body.removeChild(el);
    showTip();
  } catch {
    console.log("Oops, unable to copy");
  }
};

// copyEmailBtn.addEventListener("click", copyEmail);
// copyEmailBtn.addEventListener("touchend", copyEmail);

copyEmailBtn.addEventListener("click", () =>
  toClipboard("contact@jakeriordan.dev")
);
copyEmailBtn.addEventListener("touchend", () =>
  toClipboard("contact@jakeriordan.dev")
);
