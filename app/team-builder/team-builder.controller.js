import _ from 'lodash';
import players from './data/players';
const teams = _(players).map(player => player.team).uniqBy(team => team.ID).value();

export default class TeamBuilderController{
  constructor($scope, $http) {
    this.players = players;
    this.teams = teams;

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

  addTeamToLineUp(team){
    this.lineup.goalies.push(team);
  }
}
TeamBuilderController.$inject = ['$scope', '$http'];
