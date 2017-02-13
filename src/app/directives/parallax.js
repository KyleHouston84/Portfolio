import angular from 'angular';

function parallax($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@'
    },
    link($scope, elem) {
      const setPosition = function () {
        const calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1) - ($scope.parallaxVerticalOffset || 0);
        // horizontal positioning
        // console.log("here");
        elem.css('background-position', `50% ${calcValY} px`);
      };

      // set our initial position - fixes webkit background render bug
      angular.element($window).bind('load', () => {
        setPosition();
        $scope.$apply();
      });

      angular.element($window).bind("scroll", setPosition);
      angular.element($window).bind("touchmove", setPosition);
    }  // link function
  };
}

angular
  .module('parallaxDirective', [])
  .directive('parallaxBackground', ['$window', parallax]);
