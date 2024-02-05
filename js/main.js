window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}

let burgerMenu = document.querySelector(".burger");
let bars = document.querySelector(".bars");
// let burger = document.querySelector(".burger");

bars.addEventListener("click", () => {
  burgerMenu.classList.toggle("hideBurger");
});
