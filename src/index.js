import angular from 'angular';

import {techsModule} from './app/techs/index';
import {worksModule} from './app/work/index';

import {parallax} from './app/directives/parallax';
import {scroller} from './app/directives/scroller';
import {nav} from './app/directives/navigation';
import {progress} from './app/directives/progress';

import {main} from './app/main';
import {header} from './app/header';
import {title} from './app/title';
import {about} from './app/about';
import {contact} from './app/contact';
import {footer} from './app/footer';

import './stylesheets/index.scss';

angular
  .module('app', [techsModule, worksModule, parallax, scroller, nav, progress])
  .component('app', main)
  .component('portfolioHeader', header)
  .component('portfolioTitle', title)
  .component('portfolioAbout', about)
  .component('portfolioContact', contact)
  .component('portfolioFooter', footer);
