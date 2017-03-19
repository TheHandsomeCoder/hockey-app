import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './config/team-builder.route.config';
import TeamBuilderController from './team-builder.controller';
import TeamDisplayDirective from './directives/team-display-directive/team-display.directive';

export default angular.module('app.teamBuilder', [uirouter])
    .config(routes)
    .controller('TeamBuilderController', TeamBuilderController)
    .directive('teamDisplayDirective', TeamDisplayDirective)
    .name;  //export the name of the module so we can register it the parent app