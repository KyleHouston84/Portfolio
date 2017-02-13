import angular from 'angular';
import 'angular-mocks';
import {footer} from './footer';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('portfolioFooter', ['app/footer.html'])
      .component('portfolioFooter', footer);
    angular.mock.module('portfolioFooter');
  });

  it('should render \'Kyle Houston\'', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<portfolio-footer></portfolio-footer>')($rootScope);
    $rootScope.$digest();
    const footer = element.find('a');
    expect(footer.html().trim()).toEqual('');
  }));
});
