export default class TeamDisplayDirective {
    constructor() {
        this.restrict = 'EA';
        this.template = require('./team-display-directive.html');
        this.scope = {
          team: '='
        };
        this.controller = TeamDisplayDirectiveController;
        this.controllerAs = 'vm';
        this.bindToController = true;
    }
};

class TeamDisplayDirectiveController {
    constructor() {
         console.log('lolol');
    }
};


