let navBody = document.querySelector(".nav_body"),
  navOpener = document.querySelector("#nav_open"),
  navCloser = document.querySelector(".nav_close"),
  threeDotsMenu = document.querySelector(".threedots_menu"),
  threeDotsToggler = document.querySelector(".threedots_toggler");

function toToggle(clicked, transformed, cls) {
  clicked.addEventListener("click", () => {
    transformed.classList.toggle(cls);
  });
}

toToggle(navOpener, navBody, "hidden_nav");
toToggle(navCloser, navBody, "hidden_nav");
toToggle(threeDotsToggler, threeDotsMenu, "hidden_threedots");
