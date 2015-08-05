'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('MyCtrl1', function($scope){
		 $scope.firstName = "home";
		  })
	.controller("MyCtrl2", function($scope){
            $scope.firstName = "etc";
        })
	.controller("MyCtrl3", function($scope){
            $scope.firstName = "trails";
        })
	.controller("MyCtrl4", function($scope){
            $scope.firstName = "byIntrest";
        })
	.controller("MyCtrl5", function($scope){
            $scope.firstName = "trailDesc";
        });
	
