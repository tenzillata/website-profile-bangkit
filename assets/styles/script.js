window.addEventListener("scroll", function () {
    const header = document.querySelector("header.navbar-container");
    header.classList.toggle("scroll", window.scrollY > 0);
  });