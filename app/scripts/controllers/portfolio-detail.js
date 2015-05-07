'use strict';

var data = {
  assets: [
    {symbol: 'AAPL', votes: 13},
    {symbol: 'TWTR', votes: 21}
  ]
};

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PortfolioDetailCtrl', ['$scope', 'StocksService', '$routeParams', function ($scope, StocksService, $routeParams) {

    StocksService.get().success(function(data) {
      $scope.title = data;
    });

    $scope.id = $routeParams.id;
    $scope.test = 'test';

  }]);
