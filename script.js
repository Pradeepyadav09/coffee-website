document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  // Open menu
  if (menuOpenButton) {
    menuOpenButton.addEventListener("click", () => {
      document.body.classList.add("show-mobile-menu");
    });
  }

  // Close menu
  if (menuCloseButton) {
    menuCloseButton.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  }

  // Close menu when link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  });

});