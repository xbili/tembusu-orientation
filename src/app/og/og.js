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
angular.module( 'ngVn.og', [
  'ngVn.og.ogSubView',
  'ui.router'
])

/**
* Each section or module of the site can also have its own routes. AngularJS
* will handle ensuring they are all available at run-time, but splitting it
* this way makes each module more "self-contained".
*/
.config(function config( $stateProvider ) {
  // Only insert sub-routes in here, not main routes

  $stateProvider
  .state('og.ogSubView',
  {
    url: '/ogSubView',
    controller: 'OGSubViewCtrl',
    templateUrl: 'og/ogSubView/ogSubView.tpl.html',
    parent: 'og'
    // onEnter: function(){
    //   // $('.slide').fadeIn("slow");
    //   // $('.slide').fadeIn();
    // }//,onExit: function(){
    //   $('.container-fluid').fadeOut();
    // }
  });
})

/**
* And of course we define a controller for our route.
*/
.controller( 'OGCtrl', function OGController( $scope, $rootScope, $http ) {
  // JS Variables
  imgPrefixPath = "assets/img/ogLogos/";
  imgFormat = ".jpeg";

  imgNameCollection = [
    "basilisk",
    "centaur",
    "dragon",
    "dwarf",
    "elf",
    "giant",
    "goblin",
    "hippogriff",
    "lycanthrope",
    "merfolk",
    "phoenix",
    "pixie",
    "troll",
    "unicorn",
    "vampire",
    "yeti"
  ];

  //Scope Variables
  $scope.ogLogoCollection = imgNameCollection.map(function(imgName){
    return imgPrefixPath + imgName + imgFormat;
  });

  iconPrefixPath = "assets/img/ogIcons/";
  iconFormat = ".png";

  $scope.iconCollection = imgNameCollection.map(function(imgName){
    return iconPrefixPath + imgName + "Icon" + iconFormat;
  });

  // $scope.ogLogoCollection.push("assets/img/ogIcons/basiliskInvis.png");

 $scope.imgNameCollection = imgNameCollection;
  //Load OG Info
  $http.get('assets/data/ogSubView/ogSubView.json').
    then(function(res){
      $scope.ogInfo = res.data;
  });

  //To track index of image clicked
  $rootScope.currentIndex = null;
  $scope.currentName = null;

  $scope.setIndex = function(val){
    $rootScope.currentIndex = val;
    $scope.currentName = imgNameCollection[val];
    $(document).ready(function () {
        window.scrollTo(0,0);
    });
  };
});
