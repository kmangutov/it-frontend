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

      var today = function(delta){
        var date = new Date();
        date.setDate(date.getDate() - (1.0 + delta));
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      }

      symbol = (typeof symbol !== 'undefined')?symbol:'AAPL';
      start = (typeof start !== 'undefined')?start:today(7);//'2014-01-11';
      end = (typeof end !== 'undefined')?end:today(0);//'2014-02-18';

      start = '2015-01-11';
      end = '2015-01-18';

      var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + symbol + '%22%20and%20startDate%20=%20%22' + start + '%22%20and%20endDate%20=%20%22' + end + '%22&diagnostics=true&format=json&env=http://datatables.org/alltables.env';
      
      console.log('symbol: ' + symbol + ', start: ' + start + ', end: ' + end);
      console.log(url);

      //var val = $http.get(url);
      return $http.get(url);
    };

  }]);
