import '../styles/main.scss';
import angular from 'angular';
import liveScoring from './live-scoring/';
import home from './home/';
import teamBuilder from './team-builder/';
import uirouter from 'angular-ui-router';
import routes from './config/route.config.js';

angular.module('app', [home, liveScoring, teamBuilder])
.config(routes);