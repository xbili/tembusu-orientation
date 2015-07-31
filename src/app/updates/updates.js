angular.module( 'ngVn.updates', [
  'ui.router'
])

.controller( 'UpdatesCtrl', function UpdatesController( $scope, $http, $sce ) {
    $(".home").fadeIn(600);
    $http.get('assets/data/updates/updates.json')
        .then(function(res) {
            $scope.updates = res.data;
            $scope.updates.forEach(function(update) {
                update.title = update.title.toUpperCase();
                update.content = $sce.trustAsHtml(update.content);

                if (update.attachments.length === 0) {
                    update.hasAttachment = false;
                } else {
                    update.hasAttachment = true;
                }
            });
        });
});

