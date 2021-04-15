'use strict';

/* global IMask */
(function () {
  var buttonCallback = document.querySelector('.page-header__button');
  var modal = document.querySelector('.modal');
  var modalClose = document.querySelector('.modal__close');
  var form = modal.querySelector('form');
  var nameInput = form.querySelector('[name=\'name\']');
  var telInput = form.querySelector('[name=\'tel\']');

  var feedbackForm = document.querySelector('.feedback__form form');
  var feedbackTelInput = feedbackForm.querySelector('[name=\'tel\']');

  if (!buttonCallback || !modal || !form || !nameInput || !telInput || !feedbackForm || !feedbackTelInput) {
    return;
  }

  var phoneMask = new IMask(telInput, {
    mask: '+{7}(000)000-00-00',
  });

  var feedbackPhoneMask = new IMask(feedbackTelInput, {
    mask: '+{7}(000)000-00-00',
  });


  var closeModal = function () {
    modal.classList.remove('modal--open');
    document.body.style.overflowY = '';
  };

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      closeModal();
    }
  });

  telInput.addEventListener('focus', function () {
    phoneMask.updateOptions({lazy: false});
  });

  feedbackTelInput.addEventListener('focus', function () {
    feedbackPhoneMask.updateOptions({lazy: false});
  });

  buttonCallback.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('modal--open');
    nameInput.focus();
    document.body.style.overflowY = 'hidden';
  });

  modal.addEventListener('click', function (e) {
    if (!e.target.closest('.modal__form')) {
      closeModal();
    }
  });

  phoneMask.on('accept', function () {
    if (phoneMask.unmaskedValue.length !== 11) {
      telInput.setCustomValidity('Введите валидный телефон');
    } else {
      telInput.setCustomValidity('');
    }
  });

  feedbackPhoneMask.on('accept', function () {
    if (feedbackPhoneMask.unmaskedValue.length !== 11) {
      feedbackTelInput.setCustomValidity('Введите валидный телефон');
    } else {
      feedbackTelInput.setCustomValidity('');
    }
  });

  modalClose.addEventListener('click', closeModal);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    localStorage.setItem('form-name', form.name.value);
    localStorage.setItem('form-tel', phoneMask.unmaskedValue);
    localStorage.setItem('form-question', form.question.value);

    form.reset();
  });

  var smoothLinks = document.querySelectorAll('.main-banner__info-link--desktop, .main-banner__scroll');
  smoothLinks.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var id = el.getAttribute('href');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });

  var toggleFooter = document.querySelectorAll('.toggle-footer');
  toggleFooter.forEach(function (el, idx) {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      toggleFooter.forEach(function (el2, idx2) {
        if (idx === idx2) {
          el2.classList.toggle('toggle-footer--open');
        } else {
          el2.classList.remove('toggle-footer--open');
        }
      });
    });

    el.classList.remove('toggle-footer--open');
  });


})();
