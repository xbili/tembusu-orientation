/**
* Each section of the site has its own module. It probably also has
* submodules, though this boilerplate is too simple to demonstrate it. Within
* `src/app/home`, however, could exist several additional folders representing
* additional modules that would then be listed as dependencies of this one.
* For example, a `note` section could have the submodules `note.create`,
* `note.delete`, `note.edit`, etc.
*
* Regardless, so long as dependencies are managed correctly, the build process
* will automatically take take of the rest.
*
* The dependencies block here is also where component dependencies should be
* specified, as shown below.
*/
angular.module( 'ngVn.og.ogSubView', [
  'ui.router'
])

/**
* Each section or module of the site can also have its own routes. AngularJS
* will handle ensuring they are all available at run-time, but splitting it
* this way makes each module more "self-contained".
*/
.config(function config( $stateProvider ) {
  // Only insert sub-routes in here, not main routes

})

/**
* And of course we define a controller for our route.
*/
.controller( 'OGSubViewCtrl', function OGSubViewController( $scope, $localStorage ) {
  $('.og').fadeIn(600);

  //Auto-scroll up on phones
  if($(window).width() <= 667){
    $(document).ready(function () {
        window.scrollTo(0,0);
    });
  }

  $scope.imgLink = $scope.ogLogoCollection[$localStorage.currentIndex];
  $scope.currentName = $localStorage.currentName;
  $scope.quote = $localStorage.quote;
  $scope.by = $localStorage.by;
  $scope.desc = $localStorage.desc;
  $scope.headOGL = $localStorage.headOGL;
  $scope.ogls = $localStorage.ogls;
  // alert($scope.ogls);

  $scope.goBack = function(){
    window.history.back();
  };
});
