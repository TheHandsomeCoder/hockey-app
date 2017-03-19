import _ from 'lodash';
import players from './data/players';
const teams = _(players).map(player => player.team).uniqBy(team => team.ID).value();

export default class TeamBuilderController{
  constructor($scope, $http, clipboard) {
    this.players = players;
    this.teams = teams;
    this.clipboard = clipboard;

    this.positions = [
      'forwards',
      'defenders',
      'goalies'
    ];

    this.lineup = {
      'forwards' : [],
      'defenders' : [],
      'goalies' : null
    };

    this.activePosition = this.positions[0];
  }

  addPlayerToLineUp(player, activePosition) {
    this.lineup[activePosition].push(player);
  }

  addTeamToLineUp(team){
    this.lineup.goalies = team;
  }

  copyLineupToClipboardAsJSON(lineup, pretty){
    this.clipboard.copyText(angular.toJson(lineup, pretty));
  }
}
TeamBuilderController.$inject = ['$scope', '$http', 'clipboard'];
