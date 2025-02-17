let navBody = document.querySelector(".nav_body"),
  navOpener = document.querySelector("#nav_open"),
  navCloser = document.querySelector(".nav_close"),
  threeDotsMenu = document.querySelector(".threedots_menu"),
  threeDotsToggler = document.querySelector(".threedots_toggler");

navOpener.addEventListener("click", () => {
  console.log("clicked!");
  navBody.classList.toggle("hidden_nav");
});

navCloser.addEventListener("click", () => {
  console.log("clicked!");
  navBody.classList.toggle("hidden_nav");
});
threeDotsToggler.addEventListener("click", () => {
  threeDotsMenu.classList.toggle("hidden_threedots");
});
