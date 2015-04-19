'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .service('StocksService', ['$http', function ($http) {

    this.get = function(symbol, start, end) {

      start = (typeof start !== 'undefined')?start:'2012-02-18';
      end = (typeof end !== 'undefined')?end:'2014-02-18';

      var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22YHOO%22%20and%20startDate%20=%20%222014-02-11%22%20and%20endDate%20=%20%222014-02-18%22&diagnostics=true&format=json&env=store://datatables.org/alltableswithkeys';
      
      var val = $http.get(url);
      return $http.get(url);
    };

  }]);
