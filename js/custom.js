'use strict';

var animateBlocks = (function () {
  var items = $('.project');
  var counter = 0;

  function each () {
    var item = items.eq(counter).find('.project');

    item.css({
      'opacity': '0'
    });

    counter++;

    setTimeout(each, 100);
  }

  each();

})();

var animateCss = (function () {
  var checkDistance = function(scrollTop, elem) {
    var offset = elem.offset().top;
    var windowMargin = Math.ceil($(window).height() / 1);
    var topBorder = offset - scrollTop - windowMargin;
    var bottomEdge = elem.outerHeight(true) + offset;
    var bottomBorder = scrollTop + windowMargin - bottomEdge;

    return topBorder <= 0 && bottomBorder <= 0;
  }

  var animationActions = {
    toRight: function () {
      $(this).addClass('toRight');
    },
    toLeft: function () {
      $(this).addClass('toLeft');
    }
  }
    return {
      init: function () {
        $(window).on('scroll', function () {
          var scrollTop = $(window).scrollTop();
          var elems = $('.animate');

          elems.each(function () {
            var $this = $(this);

            if (checkDistance(scrollTop, $this)) {
              var animationType = $this.data('animation');
              animationActions[animationType].call($this);
            }
          });
        });
      }
    }
})();

animateCss.init();


$(document).ready(function() {

  $('.main-nav__link').on('click', function(e) {
    e.preventDefault();

    var section = $(this).attr('href');
    var mainNav = $('.main-nav');


    mainNav.removeClass('main-nav--opened');
    mainNav.addClass('main-nav--closed');
    showSection(section);
  });

  $('.page-header__btn').on('click', function(e) {
    e.preventDefault();

    var section = $(this).attr('href');

    showSection(section);
  })
});

$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var headerHeight = $('.page-header').height();
  var elems = $('.animate');

  elems.each(function () {
    var $this = $(this);

    if (checkDistance(scrollTop, $this)) {
      var animationType = $this.data('animation');
      animationActions[animationType].call($this);
    }
  })

  checkSection();
});

function showSection(section) {
  var direction = section.replace(/#/, '');
  var reqSection = $('.section').filter('[data-section="' + direction + '"]');
  var reqSectionPos = reqSection.offset().top;

  $('body, html').animate({scrollTop: reqSectionPos}, 500);
}

function checkSection() {
  $('.section').each(function() {
    var
      $this = $(this),
      topEdge = $this.offset().top - 400,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();

    if (topEdge < wScroll && bottomEdge > wScroll) {
      var
        currentId = $this.data('section');
        reqLink = $('.main-nav__link').filter('[href="#' + currentId + '"]');

        reqLink.closest('.main-nav__item').addClass('active')
          .siblings().removeClass('active');
    }
  })
}

function checkDistance(scrollTop, elem) {
  var
    offset = elem.offset().top,
    windowMargin = Math.ceil($(window).height() / 3),
    topBorder = offset - scrollTop - windowMargin,
    bottomEdge = elem.outerHeight(true) + offset,
    bottomBorder = scrollTop + windowMargin - bottomEdge;

    return topBorder <= 0 && bottomBorder <= 0;
}

// function fixMenu(scrollTop) {
//   var headerHeight = $('.page-header').height();
//   var mainNav = $('.main-nav');

//   if (scrollTop > headerHeight - 60) {
//     mainNav.addClass('fixed');
//   } else {
//     mainNav.removeClass('fixed');
//   }
// }
