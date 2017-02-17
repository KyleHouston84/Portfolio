import angular from 'angular';

class ScrollerDirective {
  /* @ngInject */
  constructor() {
    this.restrict = 'A';
    this.scope = true;
  }

  link(scope, elem, $rootScope) {
    let winHeight = 0;

    function setHeight() {
      winHeight = window.innerHeight;
      checkPos();
    }

    function checkPos() {
      const scrollPos = window.pageYOffset;
      if (scrollPos < (winHeight / 2)) {
        elem.removeClass('light');
        elem.addClass('dark');
      } else if (scrollPos < winHeight * 2) {
        elem.removeClass('dark');
        elem.addClass('light');
      } else if (scrollPos < (winHeight * 2)) {
        $rootScope.section = "about";
      }
    }

    // set the viewport height
    angular.element(window).bind('load', setHeight);
    angular.element(window).bind('scroll', checkPos);
  }
}

export const scroller = 'scroller';

angular
  .module('scroller', [])
  .directive('scrollHandler', ['$window', '$rootScope', () => new ScrollerDirective()]);
