import $ from 'jquery';
window.jQuery = $;
import angular from 'angular';

class NavigationDirective {
  /* @ngInject */
  constructor($scope) {
    this.restrict = 'A';
    this.scope = true;
    console.log("constructor root", $scope);
  }

  link(scope, elem, rootScope) {
    rootScope.currentSection = 'intro';

    scope.navTo = function (section) {
      rootScope.currentSection = section;
      const target = document.getElementById(section).offsetTop;
      console.log("target", target);
      $("html, body").animate({scrollTop: target}, 1000);
    };

    // angular.element(window).bind('load', sectionHeight);
  }
}

export const nav = 'nav';

angular
  .module('nav', [])
  .directive('navigation', ['$window', () => new NavigationDirective()]);
