angular.module( 'ngVn', [
  'templates-app',
  'templates-common',
  'ngVn.home',
  'ngVn.og',
  'ngVn.about',
  'ngVn.updates',
  'ngVn.info',
  'ngAnimate',
  'ui.router',
  'ngSanitize',
  'ngStorage'
])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('home',
  {
    url: '/home',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.tpl.html',
    data: { pageTitle: 'Home', routeClass: 'home' }
  })
  .state('updates',
  {
    url: '/updates',
    controller: 'UpdatesCtrl',
    templateUrl: 'updates/updates.tpl.html',
    data: { pageTitle: 'Latest Updates', routeClass: 'updates' }
  })
  .state('about',
  {
    url: '/about',
    controller: 'AboutCtrl',
    templateUrl: 'about/about.tpl.html',
    data: { pageTitle: 'About', routeClass: 'about' }
  }).state('og',
  {
    url: '/og',
    controller: 'OGCtrl',
    templateUrl: 'og/og.tpl.html',
    data: { pageTitle: 'Orientation Groups', routeClass: 'og' }
    // resolve: {
    //   timeline: ['$http', function($http){
    //     return $http.get('api/timeline.json').then(function(response){
    //         return response.data;
    //  })  JSON URL
    //   }]
    // }
  }).state('info',
  {
    url: '/info',
    controller: 'InfoCtrl',
    templateUrl: 'info/info.tpl.html',
    data: { pageTitle: 'Info' }
  });
}])

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess',
  function(event, toState, toParams, fromState, fromParams) {
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Tembusu Orientation Week' ;
    }
    $scope.routeClass = toState.data.routeClass;
  });
});
