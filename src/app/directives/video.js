import angular from 'angular';

class VideoBackground {
  /* @ngInject */
  constructor() {
    this.restrict = 'E';
    this.replace = true;
    this.template = '<video id="video-bg" width="100%" loop autoplay preload="auto" class="contact-bg"><source id="video-src" src="{{ videoReady }}" type="video/mp4"></video>';
    this.scope = {
      videoSource: '@'
    };
  }

  link(scope, element) {
    function setSource() {
      console.log("Load Video", element);
      scope.videoReady = scope.videoSource;
      element[0].load();
      element[0].play();
    }
    angular.element(window).bind('load', setSource);
  }
}

export const video = 'video';

angular
  .module('video', [])
  .directive('videoLoad', ['$compile', () => new VideoBackground()]);
