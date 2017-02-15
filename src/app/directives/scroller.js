import angular from 'angular';

class ScrollerDirective {
  /* @ngInject */
  constructor() {
    this.restrict = 'A';
    this.scope = true;
  }

  controller() {}

  link(scope, elem, $rootScope) {
    let winHeight = 0;
    // const sections = 5;

    function setHeight() {
      winHeight = window.innerHeight;
      console.log(winHeight, elem);
      console.log("root", $rootScope);
      checkPos();
    }

    function checkPos() {
      const scrollPos = window.pageYOffset;
      console.log("scrollPos", scrollPos);
      if (scrollPos < (winHeight / 2)) {
        elem.removeClass('light');
        elem.addClass('dark');
      } else if (scrollPos < winHeight) {
        $rootScope.section = "intro";
      } else if (scrollPos < ((winHeight * 2) - (winHeight / 2))) {
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
