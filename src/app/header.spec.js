import angular from 'angular';
import 'angular-mocks';
import {header} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('portfolioHeader', ['app/header.html'])
      .component('portfolioHeader', header);
    angular.mock.module('portfolioHeader');
  });

  it('should render \'Kyle Houston\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<portfolio-header></portfolio-header>')($rootScope);
    $rootScope.$digest();
    const header = element.find('a');
    expect(header.html().trim()).toEqual('');
  }));
});
