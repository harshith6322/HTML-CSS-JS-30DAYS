const bar = document.querySelector(".bi-list");
const close = document.querySelector(".bi-x-lg");
const body = document.querySelector("body");
const left = document.querySelector(".nav-left");
bar.addEventListener("click", () => {
  left.classList.add("addleft");
  body.classList.add("body");
});
close.addEventListener("click", () => {
  left.classList.remove("addleft");
  body.classList.remove("body");
});
