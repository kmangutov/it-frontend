'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .service('NameService', ['$http', function ($http) {
    
    var data = "kirill";

    this.set = function(value) {
      data = value;
    }

    this.get = function() {
      return data;
    }

  }]);
