'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PortfoliosCtrl', ['$scope', '$location', 'StocksService', 'PortfolioService', function ($scope, $location, StocksService, PortfolioService) {

    $scope.name = '';
    $scope.capital = 0;

    $scope.init = function() {
      PortfolioService.get().success(function(data) {
        $scope.portfolios = data.data;
      });

    }

    $scope.addPortfolio = function() {

      var name = $scope.name;
      var capital = $scope.capital;

      console.log('Add portfolio ' + name + ',' + capital);

      PortfolioService.create(name, capital).success(function(data) {

        $scope.portfolios.push(data.data);
      });
    }

    $scope.openPortfolio = function(id) {

      $location.path("/portfolios/" + id);
    }

  }]);
