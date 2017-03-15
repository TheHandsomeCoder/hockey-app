routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('teamBuilder', {
      url: '/team-builder',
      template: require('../team-builder.html'),
      controller: 'TeamBuilderController',
      controllerAs: 'vm'
    });
}