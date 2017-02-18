import angular from 'angular';

class ScrollerDirective {
  /* @ngInject */
  constructor() {
    this.restrict = 'A';
    this.scope = true;
  }

  link(scope, elem, $rootScope) {
    let winHeight = 0;
    let offset = 0;

    function setHeight() {
      winHeight = window.innerHeight;
      offset = winHeight / 2;
      checkPos();
      console.log("skrollr root:", $rootScope);
    }

    function checkPos() {
      const scrollPos = window.pageYOffset;
      if (scrollPos < (winHeight / 2)) {
        scope.shade = 'dark';
        scope.section = 'section-intro';
        console.log(scope.shade);
      } else if (scrollPos < (winHeight * 2) - offset) {
        scope.shade = 'light';
        scope.section = 'section-about';
        console.log(scope.shade);
      } else if (scrollPos < (winHeight * 3) - offset) {
        scope.section = 'section-skills';
      } else if (scrollPos < (winHeight * 4) - offset) {
        scope.section = 'section-portfolio';
      } else if (scrollPos < (winHeight * 5) - offset) {
        scope.section = 'section-contact';
      }
      scope.$apply();
    }

    scope.test = function (text) {
      console.log(text);
    };

    // set the viewport height
    angular.element(window).bind('load', setHeight);
    angular.element(window).bind('scroll', checkPos);
  }
}

export const scroller = 'scroller';

angular
  .module('scroller', [])
  .directive('scrollHandler', [() => new ScrollerDirective()]);
