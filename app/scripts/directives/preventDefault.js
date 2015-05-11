'use strict';

//lots of help from https://gist.github.com/d3noob/9576689

angular.module('frontendApp')
  .directive('preventDefault', function () {
    
    var linkFn = function (scope, element, attrs) {
        $(element).on("click", function (event){
            event.preventDefault();
        });
    };

    return {
      restrict: 'A',
      link: linkFn
    }

  });
