'use strict';

var menu = document.querySelector('.main-nav__toggle');
var subMenu = document.querySelector('.main-nav__list');

function clickMenu() {
  menu.classList.toggle('main-nav__toggle--open');
  subMenu.classList.toggle('main-nav__list--close');
}

if (menu && subMenu) {
  subMenu.classList.remove('main-nav__list--nojs');
  menu.addEventListener('click', clickMenu);
  clickMenu();
}
