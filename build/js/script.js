let menu = document.querySelector('.main-nav__toggle');
let subMenu = document.querySelector('.main-nav__list');

const clickMenu = () => {
  menu.classList.toggle('main-nav__toggle--open');
  subMenu.classList.toggle('main-nav__list--close');
};
menu.addEventListener('click', clickMenu);
clickMenu();
