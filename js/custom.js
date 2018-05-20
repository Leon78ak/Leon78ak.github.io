'use strict';

// $(function () {
//   alert('works!');
// });

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
