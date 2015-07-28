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
angular.module( 'ngVn.info', [
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
.controller( 'InfoCtrl', function InfoController($scope) {
  // //menu
  // $scope.selection = "home";
  //
  // $scope.setHome = function(){
  //   $scope.selection = "home";
  // };
  //
  // $scope.setCampList = function(){
  //   $scope.selection = "camp list";
  // };
  //
  // $scope.setFaq = function(){
  //   $scope.selection = "faq";
  // };

  $scope.campDetails = ["Check-in on 30th July at 8pm in the Tembusu College Multipurpose Hall (located next to the Tembusu College drop-off point).",
  "The 4D4N camp would take place from 31st July to the 3rd August in Tembusu College."];

  //Forms
  $scope.indemnityForm = "assets/forms/indemnityForm.pdf";
  $scope.swimmingForm = "assets/forms/swimForm.pdf";

  //Camp List
  $scope.basics = [
    "3 - 4 sets of clothing and 1 set of formal attire",
    "Appropriate amount of undergarment",
    "Beach wear", 
    "Towel",
    "Slippers",
    "Shoes",
    "Socks", 
    "Bed sheets (single) or Sleeping bag",
    "Phone charger", 
    "Toiletries",
    "Toothbrush + Toothpaste" 
  ];

  $scope.essentials = [
    "Money (~ $50)", 
    "Ez-link card (With at least $10 value inside)",
    "Water bottle", 
    "Personal medication", 
    "Small bag (for daily carry)"
  ];

  $scope.optionals = [
    "Sunscreen/ Sunblock",
    "Jacket", 
    "Hats/ Sunglasses",
    "Hair dryer", 
    "Deodorant",
    "Pillow",
    "Laptop"
  ];

  //faq
  $scope.faq = {
    "Will there be a briefing on CORS bidding matters?": "Yes, due to an overwhelming number of questions we've been receiving on CORS bidding matters, the organizing committee has set aside some time on the first day to brief you on this.",
    "How formal must our formal wear be?": "Not so formal. Smart casual can suffice as well. Blazers are not required for girls and optional for guys.",
    "Do we check in on 2nd of August?": "The organizing committee will be making special arrangements for the freshmen to check-in which will be conveyed during the camp itself.",
    "Will we be moving into our own rooms?": "It is not confirmed if you will be moving into your own rooms, hence please bring the items required for the camp only."
  };
});
