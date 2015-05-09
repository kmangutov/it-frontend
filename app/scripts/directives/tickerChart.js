'use strict';

//lots of help from https://gist.github.com/d3noob/9576689

angular.module('frontendApp')
  .directive('tickerChart', function () {
    
    return {
      restrict: 'E',
      templateUrl: 'views/directives/tickerChart.html',
      scope: {
        symbol: '@',
        width: '@',
        height: '@',
        start: '@',
        end: '@',
        legend: '=',
        close: '=?',
        id: '@'
      },
      /*link: function(scope, element) {
        scope.$watch(function() {
          return element.width();
        },
        function(newVal) {
          scope.width = newVal;
        }
      },*/
      link: function(scope, element) {

        var graphElem = element[0].querySelector('.graph');

        var rngString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5); 

        graphElem.id = rngString;
        scope.graphId = graphElem.id;
        
        //console.log("tagName: " + graphElem.tagName);
        /*for(var key in element[0]) {
          console.log("key: " + key);
        }*/
      },

      controller: ['$scope', 'StocksService', function($scope, StocksService) {

        $scope.close = $scope.close || false;
        //$scope.string-ticker = $scope.symbol;
        //$scope.string-close = '$243.21';

        /*console.log("width: " + $scope.width);
        console.log("symbol: " + $scope.symbol);
        console.log("start: " + $scope.start);*/

        // Set the dimensions of the graph
        var margin = {top: 10, right: 10, bottom: 10, left: 40},
            width = $scope.width - margin.left - margin.right,
            height = $scope.height - margin.top - margin.bottom;

        // Parse the date / time
        var parseDate = d3.time.format('%Y-%m-%d').parse;

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        var xAxis = d3.svg.axis().scale(x)
            .orient('bottom').ticks(5);

        var    yAxis = d3.svg.axis().scale(y)
            .orient('left').ticks(5);

        var valueline = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.high); });


        var updateClose = function(data) {

          var array = data.query.results.quote;
          $scope.close = array[array.length - 1].Close;
        }

        var updateChart = function(data) {

          var svg = //$scope.graphElem
            d3.select('#' + $scope.graphId)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ")");
        
          data.query.results.quote.forEach(function(d) {
            d.date = parseDate(d.Date);
            d.high = +d.High;
            d.low = +d.Low;
          });

          x.domain(d3.extent(data.query.results.quote, function(d) {
            return d.date; }));
          y.domain([
            d3.min(data.query.results.quote, function(d) { return d.low; }), 
            d3.max(data.query.results.quote, function(d) { return d.high; })
          ]);

          svg.append('path')
            .attr('class', 'line')
            .attr('d', valueline(data.query.results.quote));

          if($scope.legend) {

            /*svg.append('g')
              .attr('class', 'x axis')
              .attr('transform', 'translate(0, ' + height + ')')
              .call(xAxis);*/

            svg.append('g')
              .attr('class', 'y axis')
              .call(yAxis);

            /*svg.append('text')
              .attr('class', 'stock')
              .attr('x', width / 2)
              .attr('y', margin.top / 2)
              .attr('text-anchor', 'middle')
              .style('font-size', '16px')
              .text($scope.symbol);*/
          }
        }

        console.log('SYMBOL: ' + $scope.symbol);
        StocksService.get($scope.symbol, $scope.start, $scope.end).success(function(data) {
          updateChart(data);
          updateClose(data);
        });

      }]
    }
  });
