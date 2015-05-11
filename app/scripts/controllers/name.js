'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('NameCtrl', ['NameService', '$scope', '$location', function (NameService, $scope, $location) {
    
    console.log("val: " + NameService.get());

    $scope.go = function() {

      var name = $scope.name;
      NameService.set(name);
      $location.path("/portfolios");
      //$scope.$apply();
    }
  }]);
