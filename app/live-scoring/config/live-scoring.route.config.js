routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('liveScoring', {
      url: '/live-scoring',
      template: require('../live-scoring.html'),
      controller: 'LiveScoringController',
      controllerAs: 'vm'
    });
}