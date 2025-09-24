const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__controllers");
const navs = document.querySelectorAll(".headerMenu a");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  document.querySelector(".header").classList.toggle("is-active");
  if (burger.classList.contains("is-active")) {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  } else {
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  }
});

navs.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("is-active");
    nav.classList.remove("is-active");
    document.querySelector(".header").classList.remove("is-active");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
});
