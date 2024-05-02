const tl = gsap.timeline();

window.addEventListener("load", (e) => {
  tl.to(".loader i", {
    rotate: "360deg",
    duration: 2,
    ease: "none",
  });
  tl.to(".loader h1 ", {
    top: "40px",
    left: "10.2%",
    duration: 0.5,
    fontSize: "2.3rem",
    fontweight: 800,
  });
  tl.to(".loader i", {
    rotate: "150deg",
    duration: 0.5,
    ease: "none",
  });
  tl.to(".loader", {
    height: "0vh",
    opacity: 0,
    display: "none",
    duration: 0.5,
  });
  tl.to(".link1 a", {
    x: 30,
    opacity: 1,
    duration: 0.5,
  });
});

gsap.to(".move", {
  transform: "translateX(-90%)",
  duration: 4,
  repeat: -1,
  ease: "none",
});

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to(".move", {
      transform: "translateX(-200%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  } else {
    gsap.to(".move", {
      transform: "translateX(0%)",
      duration: 4,
      repeat: -1,
      ease: "none",
    });
  }
});
