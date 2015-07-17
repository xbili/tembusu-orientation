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
            templateUrl: '../src/app/home/home.tpl.html',
            controller: 'homeCtrl'

        }).state('og',
            {
                url: '/og',
                templateUrl: '../src/app/og/og.tpl.html',
                controller: 'ogCtrl'
                // resolve: {
                //   timeline: ['$http', function($http){
                //     return $http.get('api/timeline.json').then(function(response){
              //         return response.data;
            //  })  JSON URL
                //   }]
                // }
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
}])
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
