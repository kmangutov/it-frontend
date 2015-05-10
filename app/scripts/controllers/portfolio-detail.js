'use strict';

var assets = [
    {_id:1, symbol: 'YELP', value: 13},
    {_id:2, symbol: 'GOOG', value: 8},
    {_id:3, symbol: 'AAPL', value: 4},
    {_id:4, symbol: 'NFLX', value: 3}
];

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PortfolioDetailCtrl', ['$scope', 'StocksService', '$routeParams', 'PortfolioService', function ($scope, StocksService, $routeParams, PortfolioService) {

    $scope.id = $routeParams.id;

    $scope.init = function() {
      PortfolioService.get().success(function(data) {
        $scope.assets = data.data;
      })
      .error(function(data) {
        $scope.assets = assets;
      })
    };

    $scope.addSymbol = function(symbol) {
      var symbol_data = '{"symbol":\"' +asset.symbol+ '\"}';
      PortfolioService.post(symbol_data).success(function(data) {
        $scope.init();
      })
    }

    $scope.upvote = function(id) {
      var up_data = '{"asset":\"' +id+ '\","user":"_kirill_dude_"}';
      console.log(id);
      PortfolioService.upvote(up_data).success(function(data) {

      })
    };

    $scope.downvote = function(id) {
      var down_data = '{"asset":\"' +id+ '\","user":"_kirill_dude_"}';
      console.log(id);
      PortfolioService.downvote(down_data).success(function(data) {

      })
    };

  }]);
