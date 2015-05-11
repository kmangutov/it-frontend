'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .service('UserService', ['$http', function ($http) {
    var baseUrl = 'http://localhost:3000/api';



    this.create = function(vname, vpass) {

      var data = {
        name: vname,
        password: vpass
      }

      return $http.post(baseUrl + '/signup', data);
    }

    this.delete = function(id) {

      var data = {
        _id: id
      }

      return $http.post(baseUrl + '/portfolio', data);
    }


  }]);
