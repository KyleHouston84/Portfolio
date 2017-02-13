import angular from 'angular';

import {work} from './work';
import {works} from './works';

export const worksModule = 'works';

angular
  .module(worksModule, [])
  .component('portfolioWork', work)
  .component('portfolioWorks', works);
