'use strict';

angular.module('myApp.test-session', ['ngRoute','testServiceModule'])

.config(['$routeProvider','$logProvider', function($routeProvider, $logProvider) {
  $routeProvider.when('/view/test-session', {
    templateUrl: 'view/test-session/test-session.html',
    controller: 'testSessionCtrl'
  });

  $logProvider.debugEnabled(false);
}])

.controller('testSessionCtrl',['$scope','$log','testCardService',function($scope,$log,testCardService){


    $log.info("should log");
    testCardService.log("hello");
    $scope.testCards = testCardService.getTestCard();

}])
