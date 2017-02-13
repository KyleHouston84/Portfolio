import angular from 'angular';
import 'angular-mocks';
import {title} from './title';

describe('title component', () => {
  beforeEach(() => {
    angular
      .module('portfolioTitle', ['app/title.html'])
      .component('portfolioTitle', title);
    angular.mock.module('portfolioTitle');
  });

  it('should render \'Kyle Houston', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<portfolio-title></portfolio-title>')($rootScope);
    $rootScope.$digest();
    const title = element.find('h1');
    expect(title.html().trim()).toEqual('');
  }));
});
