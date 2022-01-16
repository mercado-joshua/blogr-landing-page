"use strict";

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    navSection();
  }
});

function navSection() {
  var openBtn = document.querySelector("[data-js-open-btn]");
  var closeBtn = document.querySelector("[data-js-close-btn]");
  var navSection = document.querySelector("[data-js-nav-section]");
  openBtn.addEventListener("click", function () {
    openBtn.classList.remove("-active");
    closeBtn.classList.add("-active");
    navSection.classList.add("-active");
  });
  closeBtn.addEventListener("click", function () {
    openBtn.classList.add("-active");
    closeBtn.classList.remove("-active");
    navSection.classList.remove("-active");
  });
}