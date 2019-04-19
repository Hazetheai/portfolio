const flock = [];
var canvas;
var bg;
var showBoids = false;
let alignSlider, cohesionSlider, seperationSlider;

function windowResized() {
  resizeCanvas();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", -1);

  bg = color("#f7f7f7");

  alignSlider = createSlider(0, 2, 1.5, 0.1);
  cohesionSlider = createSlider(0, 2, 1, 0.1);
  separationSlider = createSlider(0, 2, 2, 0.1);

  for (let i = 0; i <= 100; i++) {
    flock.push(new Boid());
  }
}

const cCoder = document.querySelector(".cCoder");

const handleBoids = () => {
  if (showBoids == false) {
    showBoids = true;
  } else showBoids = false;
};

cCoder.addEventListener("click", handleBoids);

function draw() {
  background(bg, [0.5]);
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
