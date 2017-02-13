import angular from 'angular';

import {techsModule} from './app/techs/index';
import {worksModule} from './app/work/index';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {about} from './app/about';
import {contact} from './app/contact';
import {footer} from './app/footer';

import './stylesheets/index.scss';

angular
  .module('app', [techsModule, worksModule])
  .component('app', main)
  .component('portfolioHeader', header)
  .component('portfolioTitle', title)
  .component('portfolioAbout', about)
  .component('portfolioContact', contact)
  .component('portfolioFooter', footer);
