angular.module( 'ngVn.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.controller( 'AboutCtrl', function AboutCtrl( $scope, $http ) {
    $http.get('assets/data/team/team.json')
        .then(function(res) {
            $scope.mainTeam = res.data[0];
            $scope.subComm = res.data.slice(1, -1);
            $scope.finComm = res.data.slice(-1)[0];
        });
})

;

