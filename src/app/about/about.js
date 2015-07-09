angular.module( 'ngVn.about', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
    $scope.teamMembers = ['amit', 'bili'];
})

;

