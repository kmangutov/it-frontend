'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PortfoliosCtrl', ['$scope', 'StocksService', function ($scope, StocksService) {

    StocksService.get().success(function(data) {
      $scope.title = data;
    });
  }]);
