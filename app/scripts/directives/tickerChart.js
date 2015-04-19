'use strict';


angular.module('frontendApp')
  .directive('tickerChart', function () {
    
    return {
      restrict: 'E',
      templateUrl: 'views/directives/tickerChart.html',
      controller: function($scope) {
        
      }
    }
  });
