"use strict";

document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    primaryMenu();
  }
});

function primaryMenu() {
  /** get all the buttons and add "click" event on them */
  var arrayOfdropdownBtns = document.querySelectorAll("[data-js-dropdown-btn]");
  arrayOfdropdownBtns.forEach(function (dropdown) {
    dropdown.addEventListener("click", function (event) {
      var currentDropdown = event.target.closest("[data-js-dropdown]");
      currentDropdown.classList.toggle("-active");
      /** remove "active" state of the other dropdowns
       * except for the current dropdown
      */

      var arrayOfOtherDropdownBtns = document.querySelectorAll("[data-js-dropdown].-active");
      arrayOfOtherDropdownBtns.forEach(function (otherDropdown) {
        if (otherDropdown === currentDropdown) {
          return;
        }

        otherDropdown.classList.remove("-active");
      });
    });
  });
}