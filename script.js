const nav = document.querySelector(".nav-icon");
const menuClose = document.querySelector(".menu-close");
const aboutLines = document.querySelectorAll(".content-line");
const aboutSection = document.querySelector(".about");
// const

const loadingFinished = function () {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
    document.querySelector(".loading-effect").classList.add("display");
  }, 4000);
};

loadingFinished();
const toggleMenu = function () {
  if (nav.nextElementSibling.getAttribute("display").includes("off")) {
    console.log(nav.getBoundingClientRect().right);
    nav.nextElementSibling.style.right = "0";
    nav.nextElementSibling.setAttribute("display", "on");

    nav.style.right = `${
      nav.nextElementSibling.getBoundingClientRect().width -
      nav.getBoundingClientRect().width
    }px`;
    document.body.classList.add("stop-scrolling");
  } else {
    nav.nextElementSibling.style.right = "-100%";
    document.body.classList.remove("stop-scrolling");
    nav.nextElementSibling.setAttribute("display", "off");
    nav.style.right = `${nav.getBoundingClientRect().width}px`;
  }
};
const aboutObject = {
  root: null,
  rootMargin: "-300px",
};
const aboutFallback = function (aboutObject, observer) {
  console.log(aboutLines);
  const [options] = aboutObject;
  if (!options.isIntersecting) return;
  aboutLines.forEach((elem) => (elem.style.width = "9vw"));
};

menuClose.addEventListener("click", toggleMenu);
nav.addEventListener("click", toggleMenu);
aboutObserver = new IntersectionObserver(aboutFallback, aboutObject);
aboutObserver.observe(aboutSection);
