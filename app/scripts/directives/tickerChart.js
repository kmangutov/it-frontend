'use strict';


angular.module('frontendApp')
  .directive('tickerChart', function () {
    
    return {
      restrict: 'E',
      templateUrl: 'views/directives/tickerChart.html',
      controller: ['$scope', 'StocksService', function($scope, StocksService) {

        // Set the dimensions of the graph
        var margin = {top: 30, right: 40, bottom: 30, left: 50},
            width = 600 - margin.left - margin.right,
            height = 270 - margin.top - margin.bottom;

        // Parse the date / time
        var parseDate = d3.time.format("%Y-%m-%d").parse;

        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);

        var    yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);

        var valueline = d3.svg.line()
            .x(function(d) { return x(d.date); })
            .y(function(d) { return y(d.high); });


        var updateChart = function(data) {

          var svg = d3.select('svg')
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
        }

        StocksService.get().success(function(data) {
          updateChart(data);
        });

      }]
    }
  });
