angular.module( 'ngVn', [
  'templates-app',
  'templates-common',
  'ngVn.home',
  'ngVn.about',
  'ngVn.updates',
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home',
        {
            url: '/home',
            templateUrl: '../src/app/home/home.tpl.html'
        })
    .state('updates',
        {
            url: '/updates',
            templateUrl: '../src/app/updates/updates.tpl.html'
        })
    .state('about',
        {
            url: '/about',
            templateUrl: '../src/app/about/about.tpl.html'
        });
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngVn' ;
    }
  });
})

;
