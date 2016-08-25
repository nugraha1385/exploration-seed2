'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.test-cards',
  'myApp.test-session',
  'checklist-model',
  'testServiceModule'

]).
config(['$locationProvider', '$routeProvider', '$logProvider', function($locationProvider, $routeProvider, $logProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view/test-session'});
  $logProvider.debugEnabled(false);
}]);
