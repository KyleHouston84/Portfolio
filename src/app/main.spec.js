import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('app', ['app/main.html'])
      .component('app', main);
    angular.mock.module('app');
  });

  it('should render the header, title, techsm works and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('portfolio-header').length).toEqual(1);
    expect(element.find('portfolio-title').length).toEqual(1);
    expect(element.find('portfolio-techs').length).toEqual(1);
    expect(element.find('portfolio-works').length).toEqual(1);
    expect(element.find('portfolio-footer').length).toEqual(1);
  }));
});
