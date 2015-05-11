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
  .controller('PortfolioDetailCtrl', ['$scope', 'StocksService', '$routeParams', 'PortfolioService', 'AssetService', 
    function ($scope, StocksService, $routeParams, PortfolioService, AssetService) {

    $scope.id = $routeParams.id;
    var portfolioId = $routeParams.id;

    $scope.init = function() {

      PortfolioService.getOne(portfolioId).success(function(data) {

        $scope.portfolio = data.data;
      });

      AssetService.get(portfolioId).success(function(data) {
        $scope.assets = data.data;

        $scope.sigma = 0;
        data.data.forEach(function(asset) {
          $scope.sigma += asset.upvotes.length - asset.downvotes.length;
        });

      })
      .error(function(data) {
        $scope.assets = assets;
      });
    };

    $scope.addAsset = function() {
      var symbol = $scope.symbol;
      var user = "_kirill_dude_";

      console.log("add asset " + symbol + "," + user);

      AssetService.post($routeParams.id, user, symbol).success(function(data) {
        console.log("response: " + JSON.stringify(data));
        $scope.assets.push(data.data);
        $scope.sigma += 1;
      })
      .error(function(data) {
        console.log("error: " + JSON.stringify(data));
      });
    }


    $scope.vote = function(type, id) {
      var up_data = '{"asset":\"' +id+ '\","user":"_kirill_dude_"}';
      
      var func = AssetService.upvote;
      if(type === 'down')
        func = AssetService.downvote;

      console.log(type + 'vote called for _id: ' + id);
      func(portfolioId, up_data).success(function(data) {
        data = data.data;
        console.log('Received ' + type + ' vote response: ' + JSON.stringify(data));



        for(var i = 0; i < $scope.assets.length; i++) {

          var asset = $scope.assets[i];

          if(asset._id === data._id) {
            console.log("Found asset _id: " + asset._id);

            if(data.action === 'delete') {
              $scope.assets.splice(i, 1);
              $scope.sigma -= 1;
              return;
            }

            var sumBefore = $scope.assets[i].upvotes - $scope.assets[i].downvotes;

            $scope.assets[i].upvotes = data.upvotes;
            $scope.assets[i].downvotes = data.downvotes;

            var sumNow = $scope.assets[i].upvotes - $scope.assets[i].downvotes;
            var delta = sumNow - sumBefore;
            $scope.sigma += delta;
          }
        }
      })
    };

  }]);
