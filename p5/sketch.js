const flock = [];
var canvas;
var bg;
var showBoids = false;
let alignSlider, cohesionSlider, seperationSlider, opacitySlider;
let opac = 0;
var slidVal;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", 0);
  canvas.style("opacity", 0);
  canvas.style("pointer-events", "none");

  bg = color("#f7f7f7");

  alignSlider = createSlider(0, 2, 1.5, 0.1);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  separationSlider = createSlider(0, 2, 2, 0.1);

  opacitySlider = createSlider(0, 0.6, 0, 0.05);

  for (let i = 0; i <= 10; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  slidVal = opacitySlider.value();
  canvas.style("opacity", slidVal);
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
}

const cCoder = document.querySelector(".cCoder");

const handleBoids = () => {
  if (showBoids == false) {
    opacitySlider.value(0.2);
    for (let i = 0; i <= 10; i++) {
      addBoids();
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
  flock.push(new Boid(mouseX, mouseY));
};

function mouseDragged() {
  if (showBoids == true) {
    addBoids();
  }
}

cCoder.addEventListener("click", handleBoids);

// document.addEventListener("mousedown", mouseDrag);
// cCoder.addEventListener("mouseover", handleBoids);
