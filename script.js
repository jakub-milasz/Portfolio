const mobileNav = document.querySelector('.menu__items');
const burgerIcon = document.querySelector('.burger');
const links = document.querySelectorAll('.menu__link');

burgerIcon.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  links.forEach(link => {
    link.classList.toggle('active');
  });
  burgerIcon.classList.toggle('active');
});