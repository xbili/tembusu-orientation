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
.controller( 'OGSubViewCtrl', function OGSubViewController( $scope ) {
  $scope.test = "marks the spot";

  $scope.back = function(){
    window.history.back();
  };

  $scope.ogInfo = {
    "centaur":{
      "quote":"Even so the half-brute Centaur leaps down into the vale from the airy height of Ossa: at himself the lofty forests quake in fear, at the horse the plain shakes.",
      "by":"Thebaid VII, Publius Papinius Statius",
      "desc":"The soft twinkling of stars in the night sky finds itself burning wildly in the dark hard eyes of the Centaurs. Augurs of the highest order, they are vouchsafed visions of things yet to be, vistas of the future lighted by the fiercest starfire. Adept in the secret ways of nature, they imparted their vast worldly knowledge to the earliest men, from the herbalist’s art of mending and healing to the fashioning of slender bows for hunting and killing. Part human, part beast, these liminal beings are also creatures of unbridled feral strength, evident in their prowess on the battlefield: with breaths hot and heavy, the Centaurs stride into battle with a bacchanalian frenzy, paving their warpath with slain corpses. With the winds always at their backs, their arrows fly ever true, striking terror into their enemies’ hearts. Few survive the onslaught of the Centaurs."
    }
  };
});
