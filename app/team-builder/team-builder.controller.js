import players from './data/players';

export default class LiveScoringController{
  constructor($scope, $http){
    this.players = players;
  }


}
LiveScoringController.$inject = ['$scope', '$http'];
