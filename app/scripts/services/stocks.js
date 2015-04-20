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

      symbol = (typeof symbol !== 'undefined')?symbol:'AAPL';
      start = (typeof start !== 'undefined')?start:'2014-01-11';
      end = (typeof end !== 'undefined')?end:'2014-02-18';

      var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + symbol + '%22%20and%20startDate%20=%20%22' + start + '%22%20and%20endDate%20=%20%22' + end + '%22&diagnostics=true&format=json&env=store://datatables.org/alltableswithkeys';
      
      var val = $http.get(url);
      return $http.get(url);
    };

  }]);
