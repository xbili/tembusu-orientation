angular.module( 'ngVn', [
  'templates-app',
  'templates-common',
  'ngVn.home',
  'ngVn.about',
  'ngVn.updates',
  'ui.router'
])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home',
        {
            url: '/home',
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html',
            data: { pageTitle: 'Home' }
        })
    .state('updates',
        {
            url: '/updates',
            controller: 'UpdatesCtrl',
            templateUrl: 'updates/updates.tpl.html',
            data: { pageTitle: 'Latest Updates' }
        })
    .state('about',
        {
            url: '/about',
            controller: 'AboutCtrl',
            templateUrl: 'about/about.tpl.html',
            data: { pageTitle: 'About' }
        });
}])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess',
             function(event, toState, toParams, fromState, fromParams) {
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Tembusu Orientation Week' ;
    }
  });
})

;
