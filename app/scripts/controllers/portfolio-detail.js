'use strict';

var assets = [
    {symbol: 'YELP', votes: 13},
    {symbol: 'GOOG', votes: 8},
    {symbol: 'AAPL', votes: 4},
    {symbol: 'NFLX', votes: 3}
];

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PortfolioDetailCtrl', ['$scope', 'StocksService', '$routeParams', function ($scope, StocksService, $routeParams) {


    $scope.id = $routeParams.id;
    $scope.assets = assets;

  }]);
