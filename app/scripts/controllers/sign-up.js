'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # SignUpCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('SignUpCtrl', ['$scope', '$location','UserService', function ($scope, $location, UserService) {
       $scope.addUser = function(){
      console.log("user creatation is called")
         if($scope.name == undefined || $scope.password == undefined)
            return;
         console.log("name "+ $scope.name + " password " + $scope.password)
         UserService.create($scope.name, $scope.password).success(function(data){
            console.log("returned message" + data.message)
            $location.url('/portfolios/');
        
         }).error(function(data, status, headers, config) {
            console.log("error in creating user")
       });

    };

      //TODO: 

    }
  ]);
