'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
// var pageHeader = document.querySelector('.page-header');
// var portfolioButton = document.querySelector('.main-nav__item a[href="#portfolio"]');
var portfolioTitle = document.querySelector('.portfolio__title');
var aboutTitle = document.querySelector('.about__title');
var modal = document.querySelector('.modal');
var feedbackButton = document.querySelector('.contacts__feed-back')
var overlay = document.querySelector(".overlay");
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.blur();
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.blur();
  }
});

if (feedbackButton) {
  feedbackButton.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
}

window.addEventListener("keydown", function (event) {
  if (event.keyCode === ESC_KEYCODE) {
    if ((modal.classList.contains("modal--show")) && (overlay.classList.contains("overlay--show"))) {
      modal.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

// window.onscroll = function () {
//   var wScroll = window.pageYOffset;

//   console.log(wScroll);
// }
