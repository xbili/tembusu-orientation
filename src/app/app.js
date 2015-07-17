angular.module( 'ngVn', [
  'templates-app',
  'templates-common',
  'ngVn.home',
  'ngVn.og',
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
  }).state('og',
  {
    url: '/og',
    controller: 'OGCtrl',
    templateUrl: 'og/og.tpl.html',
    data: { pageTitle: 'Orientation Groups' }
    // resolve: {
    //   timeline: ['$http', function($http){
    //     return $http.get('api/timeline.json').then(function(response){
    //         return response.data;
    //  })  JSON URL
    //   }]
    // }
  });
}])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess',
  function(event, toState, toParams, fromState, fromParams) {
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Tembusu Orientation Week' ;
    }
  });
});
