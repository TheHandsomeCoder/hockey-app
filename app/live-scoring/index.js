import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/live-scoring.route.config';
import LiveScoringController from './live-scoring.controller';

export default angular.module('app.home', [uirouter])
    .config(routes)
    .controller('LiveScoringController', LiveScoringController)
    .name;  //export the name of the module so we can register it the parent app