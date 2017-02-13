class WorksController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/work/works.json')
      .then(response => {
        this.works = response.data;
      });
  }
}

export const works = {
  template: require('./works.html'),
  controller: WorksController
};
