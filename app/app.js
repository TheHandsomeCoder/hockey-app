import angular from 'angular';
import HomeController from './home/home.controller.js';
import uirouter from 'angular-ui-router';

angular.module('app', [])
.controller('HomeController', HomeController);

