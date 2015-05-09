'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.username = '';
    $scope.password = '';
    $scope.auth = function(username, password) {

      //TODO: 

    }
  });
