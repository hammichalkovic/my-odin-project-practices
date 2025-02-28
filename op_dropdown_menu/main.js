let navBody = document.querySelector(".nav_body"),
  navOpener = document.querySelector("#nav_open"),
  navCloser = document.querySelector(".nav_close"),
  threeDotsMenu = document.querySelector(".threedots_menu"),
  threeDotsToggler = document.querySelector(".threedots_toggler"),
  carouselMovingPart = document.querySelector(".carousel_moving"),
  carousel_arr = [0, 1, 2],
  picDiv = document.querySelector(".pic"),
  num = 0;

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

function chooseCarouselBd(num) {
  switch (num) {
    case 0:
      picDiv.classList.remove("female", "store");
      picDiv.classList.add("cake");
      break;
    case 1:
      picDiv.classList.remove("cake", "store");
      picDiv.classList.add("female");
      break;
    case 2:
      picDiv.classList.remove("female", "cake");
      picDiv.classList.add("store");
      break;
  }
}

function carouselAutoturn() {
  if (num == 2) {
    chooseCarouselBd(num);
    num = 0;
  } else {
    chooseCarouselBd(num);
    ++num;
  }
}

// function shiftFirstAndPush() {
// let elementToManupulate = carouselMovingPart.firstElementChild;

// carouselMovingPart.classList.add("move");
// carouselMovingPart.firstElementChild.remove();
// carouselMovingPart.appendChild(elementToManupulate);

// let;
// return elementToManupulate;
// }

function translateCarousel() {
  // carouselMovingPart.style.cssText = "transform: translateX(-100vw);";
  // setTimeout(() => {
  //   shiftFirstAndPush();
  // }, 1200);
  // carouselMovingPart.style.cssText = "transform: translateX(0vw);";
  // setTimeout(() => {
  //   carouselMovingPart.classList.remove("move");
  // }, 1500);
  // setTimeout(() => {
  //   carouselMovingPart.style.cssText = "transform: translateX(0vw);";
  // }, 8000);
}

toRepeatFunction(carouselAutoturn, 5000);
