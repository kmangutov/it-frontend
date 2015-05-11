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

    this.create = function(vname, vcapital) {

      var data = {
        name: vname,
        capital: vcapital
      }

      return $http.post(baseUrl + '/portfolio', data);
    }

    this.delete = function(id) {

      var data = {
        _id: id
      }

      return $http.post(baseUrl + '/portfolio', data);
    }


  }]);
