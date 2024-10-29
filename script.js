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

for(let i = 1; i<=8; i++){
  const icon = document.querySelector(`.i${i}`);
  const desc = document.querySelector(`.desc${i}`);
  icon.addEventListener('click', () => {
    if(desc.style.opacity == 1){
      desc.style.opacity = 0;
    }
    else{
      desc.style.opacity = 1;
    }
    icon.classList.toggle('rotate');
  });
}