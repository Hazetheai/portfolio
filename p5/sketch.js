// ======================= Boid Vars =======================

const flock = [];
let canvas;
let bg;
let showBoids = false;
let alignSlider, cohesionSlider, seperationSlider, opacitySlider;
let opac = 0;
let slidVal;

let socialLinks = [...document.querySelectorAll(".social__list-item")];

const main = document.querySelector("main");
const cCoder = document.querySelector(".cCoder");

// ======================= Switch Vars =======================

var restX, restY, vel, drag, strength, currentX, currentY, ballWidth, showText;

const warning1 = `If you keep going, you're going to break it........`;
const warning2 = `See?......\n This is why you can't have nice things\n Good thing I got a spare bulb around lying around here somewhere... `;

let numClicks = 1;
let dragging,
  hover = false;

let offsetX, offsetY;

// ======================= Setup & Draw combining both animations =======================

function setup() {
  // ======================= Boid
  canvas = createCanvas(main.clientWidth, main.clientHeight);
  canvas.position(0, 0);
  canvas.style("z-index", 0);
  canvas.style("opacity", 1);
  // canvas.style("pointer-events", "none");

  bg = color("#f7f7f7");

  alignSlider = createSlider(0, 2, 1.5, 0.1);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  separationSlider = createSlider(0, 2, 2, 0.1);

  opacitySlider = createSlider(0, 0.6, 0, 0.05);

  // Hide sliders for now
  alignSlider.style("display", "none");
  cohesionSlider.style("display", "none");
  separationSlider.style("display", "none");
  opacitySlider.style("display", "none");

  for (let i = 0; i <= 10; i++) {
    flock.push(new Boid());
  }

  // ======================= Spring
  vel = 0; // velocity
  restX = 20;
  restY = 100;

  currentX = restX;
  currentY = restY;
  ballWidth = 40;
  ellipse(currentX, currentY, ballWidth);

  drag = 0.75; //need to take some force away, 1 = no drag
  strength = 0.3; // the "strength" of the spring, out of 1
}

function windowResized() {
  resizeCanvas(main.clientWidth, main.clientHeight);
}

function draw() {
  // ======================= Boid
  slidVal = opacitySlider.value();
  // canvas.style("opacity", slidVal);
  background(bg, [0]);

  for (let boid of flock) {
    boid.edges();
    boid.flock(flock);
    boid.update();
    // boid.show();
    if (showBoids == true) {
      boid.render();
    }
  }
  //================== Spring
  if (numClicks % 4 === 0) {
    console.log(numClicks);
    text(warning1, 100, 350);
  }
  // draw our circle
  line(
    20 + ballWidth / 2,
    0,
    currentX + ballWidth / 2,
    currentY + ballWidth / 2
  );

  strokeWeight(2);
  fill(214, 71, 150);
  ellipse(currentX, currentY, ballWidth);
  ellipseMode(CORNER);
  var force = restY - (currentX + currentY) / 2; //how far "stretched"
  force *= strength; // the "strength" of our "spring"
  vel *= drag; // reduce the existing velocity a bit with drag
  vel += force; // add this frame's force to the velocity
  currentY += vel; // update the position with the adjusted velocity
  if (
    mouseX > currentX &&
    mouseX < currentX + ballWidth &&
    mouseY > currentY &&
    mouseY < currentY + ballWidth
  ) {
    cursor("grab");
    rollover = true;
    // console.log("Rollover Baby!");
  } else {
    rollover = false;
  }

  if (dragging) {
    currentX = mouseX + offsetX;
    currentY = mouseY + offsetY;
  }
}

// ======================= Boids =======================

const handleBoids = () => {
  if (showBoids == false) {
    opacitySlider.value(0.2);
    for (let i = 0; i <= 10; i++) {
      addBoids();
      // console.log("working");
    }
    return (showBoids = true);
  } else if (showBoids == true) {
    opacitySlider.value(0);
    showBoids = false;
  }

  flock.splice(1);
};

const addBoids = () => {
  // console.log("Draggin");
  if (flock.length > 100) return;
  flock.push(new Boid(mouseX, mouseY));
};

function mouseDragged() {
  if (showBoids == true) {
    addBoids();
  }
}

socialLinks.map(el => {
  el.addEventListener("mouseover", handleBoids);
});
cCoder.addEventListener("mouseover", handleBoids);
cCoder.addEventListener("touchend", handleBoids);

// cCoder.addEventListener("click", handleBoids);

// document.addEventListener("mousedown", mouseDrag);
// cCoder.addEventListener("mouseover", handleBoids);

// ======================= Spring =======================

// ========= Typewriter =========

// if (numClicks % 4 === 0) {
//   console.log(numClicks);
//   typeWriter(warning1, 0, 200, 200, 100);
// } else if (numClicks % 9 === 0) {
//   typeWriter(warning2, 0, 300, 200, 100);
// }
function typeWriter(sentence, n, x, y, speed) {
  if (n < sentence.length) {
    text(sentence.substring(0, n + 1), x, y);
    n++;
    setTimeout(function() {
      typeWriter(sentence, n, x, y, speed);
    }, speed);
  }
}

function mousePressed() {
  // Did I click on the rectangle?
  if (
    mouseX > currentX &&
    mouseX < currentX + ballWidth &&
    mouseY > currentY &&
    mouseY < currentY + ballWidth
  ) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = currentX - mouseX;
    offsetY = currentY - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
  // If the ball has been moved from it's resting place(pulled on)
  // Then reset the values to rest and activate/deactivate Dark Mode
  if (currentY > 279) {
    currentX = restX;
    currentY = restY;
    htmTxtDark();
    numClicks++;
    // Effects to simulate broken gear.

    if (numClicks % 9 === 0) {
      typeWriter(warning2, 0, 300, 300, 50);
      canvas.style("z-index", 5);
      canvas.style("pointer-events", "none");

      noLoop();
      noCursor();
      if (darkTheme === false) {
        htmTxtDark();
      }
      setTimeout(() => {
        canvas.style("z-index", 0);
        canvas.style("pointer-events", "");
        cursor();
        loop();
        handleBoids();
        if (darkTheme === true) {
          htmTxtDark();
        }
      }, 7000);
    }
  }
}

// mouseReleased();

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// =====================================================================
