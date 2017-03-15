import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/team-builder.route.config';
import TeamBuilderController from './team-builder.controller';

export default angular.module('app.team-builder', [uirouter])
    .config(routes)
    .controller('TeamBuilderController', TeamBuilderController)
    .name;  //export the name of the module so we can register it the parent app