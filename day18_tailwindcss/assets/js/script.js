const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let scrollAmount = 0;
const cardWidth = carousel.querySelector("div").offsetWidth + 20;

nextBtn.addEventListener("click", () => {
  scrollAmount += cardWidth;
  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

prevBtn.addEventListener("click", () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) {
    scrollAmount = carousel.scrollWidth - carousel.clientWidth;
  }
  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const topBar = document.getElementById("top-bar");
  const topBarHeight = topBar.offsetHeight;

  if (window.scrollY > topBarHeight) {
    navbar.classList.add("fixed", "top-0", "left-0", "w-full", "bg-white", "shadow-lg");
  } else {
    navbar.classList.remove("fixed", "top-0", "left-0", "w-full", "bg-white", "shadow-lg");
  }
});

