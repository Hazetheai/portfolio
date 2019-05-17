const form = document.querySelector(".form");
const name = document.querySelector("#Name");
const email = document.querySelector("#Email");

// const textarea = document.querySelector("#Message");
const nextBtn = document.querySelector(".form__element--btn");
let formFilled = false;

//check if the inputs have been filled and enable/disable button
const poller = () => {
  if ((name.value === "") | (email.value === "") | (textarea[0].value === "")) {
    console.log("false");
    nextBtn.setAttribute("disabled", "");
    nextBtn.classList.add("disabled");

    return false;
  } else console.log("true");
  nextBtn.removeAttribute("disabled");
  nextBtn.classList.remove("disabled");

  formFilled = true;
  return true;
};

// called via html once user enters form
// used to poll forms to detect if auto complete has been used

const formEnter = () => {
  let formTimer = setTimeout(function pollTimer() {
    if (formFilled === true) {
      clearTimeout(formTimer);
      return;
    }
    poller();
    formTimer = setTimeout(pollTimer, 500);
  }, 500);
};

// if inputs have content -> stop the poller;

name.addEventListener("onchange", formEnter);
email.addEventListener("onchange", formEnter);
