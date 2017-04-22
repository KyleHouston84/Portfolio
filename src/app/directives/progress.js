import angular from 'angular';

class ProgressBarDirective {
  /* @ngInject */
  constructor() {
    this.restrict = 'E';
    this.template = '<div class="progress-label">{{ progressPercent }}%</div>';
    this.scope = {
      progressPercent: '@'
    };
  }

  link(scope, element) {
    const style = {
      '-webkit-transform': `rotate(${180 * (scope.progressPercent / 100)}deg)`,
      'transform': `rotate(${180 * (scope.progressPercent / 100)}deg)`
    };
    const styleReverse = {
      '-webkit-transform': `rotate(-${180 * (scope.progressPercent / 100)}deg)`,
      'transform': `rotate(-${180 * (scope.progressPercent / 100)}deg)`
    };
    angular.element(element).css(style);
    angular.element(element).children('progress-label').css(styleReverse);
  }
}

export const progress = 'progress';

angular
  .module('progress', [])
  .directive('progressLevel', ['$compile', () => new ProgressBarDirective()]);
