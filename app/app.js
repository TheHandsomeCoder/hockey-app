import '../styles/main.scss';
import angular from 'angular';
import liveScoring from './live-scoring/';
import uirouter from 'angular-ui-router';
import routes from './config/route.config.js';

angular.module('app', [home])
.config(routes);