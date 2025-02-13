let navBody = document.querySelector(".nav_body"),
  navOpener = document.querySelector("#nav_open"),
  navCloser = document.querySelector(".nav_close");

navOpener.addEventListener("click", () => {
  console.log("clicked!");
  navBody.classList.toggle("hidden");
});

navCloser.addEventListener("click", () => {
  console.log("clicked!");
  navBody.classList.toggle("hidden");
});
