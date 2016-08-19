'use strict';

angular.module('myApp.test-directive', [])

.directive('testDirective', [function(version) {
  return {
    scope:{
        //send the value
        message: "@"
    },
    templateUrl:"components/custom/test-directive/test-directive-template.html",

    link:function(scope, elm, attrs) {
        console.log("test testDirective");
    }
  };
}]);
