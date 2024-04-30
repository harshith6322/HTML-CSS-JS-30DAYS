gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

const mouse = document.querySelector(".mouse");
const page1con = document.querySelector(".page1-contenet");
const page3h2 = document.querySelector(".underline");

var tl = gsap.timeline();
tl.from(".page-1-h1 div", {
  y: 50,
  opacity: 1,
  stagger: 0.6, // Adjust the stagger value to control the delay between animations
  duration: 1,
});

page1con.addEventListener("mousemove", (e) => {
  gsap.to(mouse, {
    x: e.x,
    y: e.y,
    duration: 0.8,
    ease: "slow(0.1,0.1,false)",
  });
});
page1con.addEventListener("mouseleave", (e) => {
  gsap.to(mouse, {
    opacity: 0,
    duration: 0.5,
  });
});
page1con.addEventListener("mouseenter", (e) => {
  gsap.to(mouse, {
    opacity: 1,
  });
});

gsap.from(".page-2 .pop1 p, .page-2 .pop2 p, .p", {
  opacity: 0,
  y: 60,
  stagger: 0.6,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".page-2",
    scroller: ".main",
    start: "top 90%",
    end: "top 50%",
    // markers: true,
    scrub: 3,
  },
});
gsap.to(".width", {
  width: "100%",
  opacity: 1,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".page-2",
    scroller: ".main",
    start: "top 90%",
    end: "top 50%",
    // markers: true,
    scrub: 3,
  },
});
gsap.from(".page-3-con p, .page-3-con h2", {
  opacity: 0,
  y: 80,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".page-3",
    scroller: ".main",
    start: "top 120%",
    end: "top 90%",
    // markers: true,
    scrub: 3,
  },
});
const imgvids = document.querySelectorAll(".imgvid");
imgvids.forEach((imgvid) => {
  const img = imgvid.querySelector(".img");
  const video = imgvid.querySelector(".video");

  imgvid.addEventListener("mouseenter", () => {
    gsap.to(img, { duration: 0.5, zIndex: -10, opacity: 0 });
    gsap.to(video, { duration: 0.5, zIndex: 10, opacity: 1 });
    video.play(); // Start playing the video
  });

  imgvid.addEventListener("mouseleave", () => {
    gsap.to(img, { duration: 0.5, zIndex: 10, opacity: 1 });
    gsap.to(video, { duration: 0.5, zIndex: -10, opacity: 0 });
    video.pause(); // Pause the video
  });
});
gsap.from(".nav5 p, .p5", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    start: "top 250%",
    end: "top 230%",
    markers: true,
    scrub: 3,
  },
});
gsap.to(".width-5", {
  width: "100%",
  opacity: 1,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".page-5",
    scroller: ".main",
    start: "top 250%",
    end: "top 230%",
    // markers: true,
    scrub: 3,
  },
});

const page6 = document.querySelector(".page-6");
const mous = document.querySelector(".mouse6");

page6.addEventListener("mousemove", (e) => {
  const result1 = (mous.style.left = e.pageX + "px");
  const result2 = (mous.style.top = e.pageY + "px");
  mous.style.transform = "translate(-50%,-50%)";
  gsap.to(mous, {
    left: result1,
    right: result2,
    duration: 0.6,
    transform: "translate(-50%,-50%)",
    ease: "slow(0.1,0.1,false)",
    zIndex: 100,
  });
});

page6.addEventListener("mouseleave", (e) => {
  gsap.to(mous, {
    opacity: 0,
    duration: 0.5,
    scale: 0.5,
    ease: "slow(0.1,0.1,false)",
    rotate: "-120deg",
  });
});

page6.addEventListener("mouseenter", (e) => {
  gsap.to(mous, {
    opacity: 1,
    scale: 1.1,
    ease: "slow(0.1,0.1,false)",
    rotate: "0deg",
  });
});
