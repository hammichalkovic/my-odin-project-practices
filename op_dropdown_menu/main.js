let navBody = document.querySelector(".nav_body"),
  navOpener = document.querySelector("#nav_open"),
  navCloser = document.querySelector(".nav_close"),
  threeDotsMenu = document.querySelector(".threedots_menu"),
  threeDotsToggler = document.querySelector(".threedots_toggler"),
  carouselMovingPart = document.querySelector(".carousel_moving");

function toToggle(clicked, transformed, cls) {
  clicked.addEventListener("click", () => {
    transformed.classList.toggle(cls);
  });
}

toToggle(navOpener, navBody, "hidden_nav");
toToggle(navCloser, navBody, "hidden_nav");
toToggle(threeDotsToggler, threeDotsMenu, "hidden_threedots");

function toRepeatFunction(func, inteval) {
  func();

  return setInterval(func, inteval);
}

function translateCarousel() {
  carouselMovingPart.style.cssText = "transform: translateX(-100vw);";
  setTimeout(() => {
    carouselMovingPart.style.cssText = "transform: translateX(-200vw);";
  }, 4000);
  setTimeout(() => {
    carouselMovingPart.style.cssText = "transform: translateX(0vw);";
  }, 8000);
}

toRepeatFunction(translateCarousel, 12000);
