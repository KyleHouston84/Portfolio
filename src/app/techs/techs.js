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
      console.log("filter");
      if (view === 'all') {
        $scope.currentView = '';
      } else {
        $scope.currentView = view;
      }
    };
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};
