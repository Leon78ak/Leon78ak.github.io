'use strict';

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
// var pageHeader = document.querySelector('.page-header');
// var portfolioButton = document.querySelector('.main-nav__item a[href="#portfolio"]');
var portfolioTitle = document.querySelector('.portfolio__title');
var aboutTitle = document.querySelector('.about__title');
var y;

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

window.onscroll = function () {
  var wScroll = window.pageYOffset;

  console.log(wScroll);
}
