const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');
const body = document.querySelector('body');
function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('scroll-lock');
}
hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.nav-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.classList.remove('scroll-lock');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));
