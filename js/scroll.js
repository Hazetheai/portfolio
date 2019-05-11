const projectNav = document.querySelector("#projectNav");
const projects = document.querySelector("#section-projects");

function scrollTo(to, duration) {
  //if to == 0 return
  if (document.body.scrollTop == to) return;
  //diff is the difference between
  let diff = to - document.body.scrollTop;
  const scrollStep = Math.PI / (duration / 10);
  let count = 0,
    currPos;
  start = window.pageXOffset;
  scrollInterval = setInterval(function() {
    if (document.body.scrollTop != to) {
      count = count + 1;
      currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
      document.body.scrollTop = currPos;
    } else {
      clearInterval(scrollInterval);
    }
  }, 10);
}

function test(elID) {
  var dest = document.getElementById(elID);
  scrollTo(dest.offsetTop, 500);
}

window.addEventListener("scroll", () => console.log(projects.scrollTop));