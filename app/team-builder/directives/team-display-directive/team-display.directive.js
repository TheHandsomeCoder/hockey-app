export default class TeamDisplayDirective {
  constructor() {
    this.restrict = 'EA';
    this.template = require('./team-display-directive.html');
    this.scope = {
      team: '='
    };
  }
}

