const pre = document.getElementById("prev");
const next = document.getElementById("next");
const progres = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentnum = 1;
next.addEventListener("click", () => {
  currentnum++;
  if (currentnum > circles.length) currentnum = circles.length;
  update();
});
pre.addEventListener("click", () => {
  currentnum--;
  if (currentnum < 1) currentnum = 1;
  update();
});

function update() {
  circles.forEach((cir, idx) => {
    if (idx < currentnum) {
      cir.classList.add("active");
    } else {
      cir.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".active");
  console.log(active.length);
  progres.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentnum === 1) {
    pre.disabled = true;
  } else if (currentnum === circles.length) {
    next.disabled = true;
  } else {
    pre.disabled = false;
    next.disabled = false;
  }
}
