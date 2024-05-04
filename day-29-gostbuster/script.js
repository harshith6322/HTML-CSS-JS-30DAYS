window.addEventListener("load", () => {
  const tl = gsap.timeline();
  tl.from(".loader img", {
    scale: 20,
    duration: 1.6,
    ease: "slow(0.7,0.7,false)",
  });
  tl.to(".loader img", {
    rotate: "-50deg",
    duration: 0.3,
  });
  tl.to(".loader img", {
    top: "48px",
    left: "90px",
    width: "120px",
    height: "120px",
    rotate: "0deg",
    duration: 0.5,
  });
  tl.to(".loader", {
    height: "0%",
    opacity: "0",
    display: "none",
    duration: 0.5,
  });
  tl.from("nav", {
    opacity: 1,
    duration: 0.1,
  });
  tl.call(callgsap);
});

function callgsap() {
  gsap.from(".page1 .tree-left", {
    x: -50,
    opacity: 0,
    duration: 2,
  });
  gsap.from(".page1 .tree-right", {
    x: 50,
    opacity: 0,
    duration: 2,
  });
  gsap.from(".page1 .gate-left", {
    x: -100,
    opacity: 0,
    duration: 4,
  });
  gsap.from(".page1 .gate-right", {
    x: 100,
    opacity: 0,
    duration: 4,
  });
  gsap.from(".page1 .grass", {
    y: 100,
    opacity: 0,
    duration: 4,
  });
}
const tl2 = gsap.timeline({ yoyo: true, repeat: -1 });
tl2.fromTo(
  "nav .nav-bat",
  { rotate: "-11deg" },
  {
    rotate: "10deg",
    duration: 0.6,
    ease: "slow(0.7,0.7,false)",
  }
);
