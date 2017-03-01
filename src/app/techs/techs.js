class TechsController {
  /** @ngInject */
  constructor($http, $scope) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
    $scope.currentView = '';
    $scope.filter = function (view) {
      if (view === 'all') {
        $scope.currentView = '';
      } else {
        $scope.currentView = view;
      }
    };
    $scope.getRadius = function (percent) {
      console.log("here", percent);
      return 180 * (percent / 100);
    };
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};
