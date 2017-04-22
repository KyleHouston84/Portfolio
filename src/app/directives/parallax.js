import angular from 'angular';

class ParallaxDirective {
  /* @ngInject */
  constructor() {
    this.restrict = 'A';
    this.transclude = true;
    this.template = '<div class="text" ng-transclude></div>';
    this.scope = {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@'
    };
  }

  link(scope, elem) {
    const setPosition = function () {
      const calcValY = (elem.prop('offsetTop') - window.pageYOffset) * (scope.parallaxRatio ? scope.parallaxRatio : 1.1) - (scope.parallaxVerticalOffset || 0);
      const val = `50% ${calcValY}px`;

      // horizontal positioning
      angular.element(elem).css('background-position', val);
    };

    // set our initial position - fixes webkit background render bug
    angular.element(window).bind('load', setPosition);
    angular.element(window).bind('scroll', setPosition);
  }
}

export const parallax = 'parallax';

angular
  .module('parallax', [])
  .directive('parallaxBackground', ['$window', () => new ParallaxDirective()]);
