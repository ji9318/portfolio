"use strict";

// navbar fade out
const navbar = document.querySelector(".navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});

// side-navbar open
const sideNavbar = document.querySelector(".side-navbar");
const menuButton = document.querySelector(".menu-button");
const gnb = document.querySelector(".gnb");
const body = document.querySelector("body");
const button1 = document.querySelector(".menu-button-bar:nth-child(1)");
const button2 = document.querySelector(".menu-button-bar:nth-child(2)");
const button3 = document.querySelector(".menu-button-bar:nth-child(3)");

menuButton.addEventListener("click", () => {
  sideNavbar.classList.toggle("active");
  gnb.classList.toggle("hide");
  body.classList.toggle("prevent");
  button1.classList.toggle("rotate-pos");
  button2.classList.toggle("opacity");
  button3.classList.toggle("rotate-neg");
});

// scrolling when tapping menu
gnb.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

const sideNavbarList = document.querySelector(".side-navbar-list");
sideNavbarList.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  sideNavbar.classList.remove("active");
  gnb.classList.remove("hide");
  body.classList.remove("prevent");
  scrollIntoView(link);
});

const scrollButton = document.querySelector(".scroll-button");
scrollButton.addEventListener("click", () => {
  scrollIntoView("#about");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
