export default function() {
    return {
        restrict : 'EA',
        template : require('./team-display-directive.html'),
        scope : {
          team: '='
        },
        controller: function($scope){
            console.log('lolol');
            $scope.$watch('team', function(){
                console.log('woot');
            });
        },
        controllerAs : 'vm',
        bindToController: true
  };
}


