'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .service('PortfolioService', ['$http', function ($http) {
    var baseUrl = 'http://localhost:3000/api';
    this.get = function() {
      return $http.get(baseUrl+'/portfolio');
    }

    this.post = function(symbol) {
      return $http.post(baseUrl+'/portfolio', symbol);
    }

    this.upvote = function(up_data) {
      return $http.post(baseUrl+'/portfolio/upvote', up_data);
    }

    this.downvote = function(down_data) {
      return $http.post(baseUrl+'/portfolio/downvote', down_data);
    }


  }]);
