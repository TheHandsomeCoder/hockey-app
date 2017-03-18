import players from './data/players';

export default class TeamBuilderController{
  constructor($scope, $http) {
    this.players = players;

    this.positions = [
      'forwards',
      'defenders',
      'goalies'
    ];

    this.lineup = {
      'forwards' : [],
      'defenders' : [],
      'goalies' : []
    };

    this.activePosition = this.positions[0];
  }

  addPlayerToLineUp(player, activePosition) {
    this.lineup[activePosition].push(player);
  }
}
TeamBuilderController.$inject = ['$scope', '$http'];
