'use strict';

(function () {
  var buttonCallback = document.querySelector('.main-nav__button');
  var modal = document.querySelector('.modal');

  buttonCallback.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--open');
  });

})();
