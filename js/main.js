// ganti warna navbar on scroll
const navbar = document.querySelector(".navbar");
const navToggler = document.querySelector(".navbar-toggler");
if (navbar.classList.contains("katalog")) {
  navbar.style.cssText += "background-color: #04030f";
}
window.onscroll = function () {
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-dark", "bg-richblack");
    navbar.classList.remove("pt-5");
    navToggler.style.cssText += "filter: invert(0) !important; border: none !important";
  } else {
    navbar.classList.remove("navbar-dark", "bg-richblack");
    navbar.classList.add("pt-5");
    navToggler.style.cssText += "filter: invert(1) !important; border: none !important";
  }
};

// typed JS
const typed = document.querySelector(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}
