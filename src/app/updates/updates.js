angular.module( 'ngVn.updates', [
  'ui.router'
])

.config(function config( $stateProvider ) {
    // Only include sub routes in here
})

.controller( 'UpdatesCtrl', function UpdatesController( $scope, $http, $sce ) {
    $http.get('assets/data/updates/updates.json')
        .then(function(res) {
            $scope.updates = res.data;
            $scope.updates.forEach(function(update) {
                update.content = $sce.trustAsHtml(update.content);
            });
        });
})

;

