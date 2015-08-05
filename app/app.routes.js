
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'ui.router', 
  'ngAnimate',
  'myApp.controllers',
  'angularUtils.directives.uiBreadcrumbs'
])

// For Component users, it should look like this:
// var myApp = angular.module('myApp', [require('angular-ui-router')]);
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '^',
	  views: {
              'main@': {
                  templateUrl: 'components/home/home.html',
			  			}
              },
      data: {
        displayName: 'Home',
      }
	  
    })
    // new template
    .state('home.view2', {
      url: "/view2",
	  views: {
              'main@': {
                  templateUrl: 'components/etc/etcView.html',
			  			}
              },
	  controller: 'MyCtrl2',
      data: {
        displayName: 'Explore By Intrest',
      }
    })
   
     .state('home.view3', {
      url: "/view3",
	  views: {
              'main@': {
                  templateUrl: 'components/trails/trailsView.html',
			  			}
              },
	  controller: 'MyCtrl3',
      data: {
        displayName: 'Explore By Trail',
      }
    })
  .state('home.view3.view5', {
      url: "/view5",
	  views: {
              'main@': {
                  templateUrl: 'components/trails/trailDesc.html',
			  			}
              },
	  controller: 'MyCtrl5',
	  data: {
        displayName: 'Trail Description',
      },
	  
    })
  .state('home.view4', {
      url: "/view4",
	  views: {
              'main@': {
                  templateUrl: 'components/byInterest/byInterestView.html',
			  			}
              },
	  controller: 'MyCtrl4',
	  data: {
        displayName: 'Explore by Interest',
      }
	  
    })

    });





