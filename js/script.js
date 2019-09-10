jQuery(document).ready(function(){
  var params = {
    changedEl: "#select-age",
    visRows: 13,
    scrollArrows: true
  }
  cuSel(params);

  var month = {
    changedEl: "#select-month",
    visRows: 7,
    scrollArrows: true
  }
  cuSel(month);

  var year = {
    changedEl: "#select-year",
    visRows: 7,
    scrollArrows: true
  }
  cuSel(year);
});


"use strict";

(function () {

  var age = document.querySelector('.age');
  var main = document.querySelector('.main');

  function ageCheck() {
    age.classList.remove('visually-hidden');
    main.classList.add('main--blur');
  }

  setTimeout(ageCheck, 5000);

  var buttonIn = document.querySelector('.age__button');

  buttonIn.addEventListener('click', function () {
    age.classList.add('visually-hidden');
    main.classList.remove('main--blur');
  });

})();

(function () {

  var requestSecond = document.querySelector('.request__second');
  var requestSecondContainer = document.querySelector('.request__second-container');
  var secondGuestLink = document.querySelector('.request__second-link');
  var requestSecondLabel = document.querySelector('.request__accept-label');
  var requestButton = document.querySelector('.request__accept-button');
  var requestButtonClose = document.querySelector('.request__second-close');

  secondGuestLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    requestSecondContainer.classList.remove('visually-hidden');
    requestSecond.classList.remove('request__second--closed');
    requestSecond.classList.add('request__second--open');
    secondGuestLink.classList.add('request__second-link--open');
    requestSecondLabel.classList.add('request__accept-label--second');
    requestButton.classList.add('request__accept-button--open');
    requestButtonClose.classList.remove('visually-hidden');
  });

  requestButtonClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    requestSecondContainer.classList.add('visually-hidden');
    requestSecond.classList.add('request__second--closed');
    requestSecond.classList.remove('request__second--open');
    secondGuestLink.classList.remove('request__second-link--open');
    requestSecondLabel.classList.remove('request__accept-label--second');
    requestButton.classList.remove('request__accept-button--open');
    requestButtonClose.classList.add('visually-hidden');
  });

})();