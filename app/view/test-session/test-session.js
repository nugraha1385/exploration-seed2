'use strict';

angular.module('myApp.test-session', ['ngRoute',])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/test-session', {
    templateUrl: 'view/test-session/test-session.html',
    controller: 'testSessionCtrl'
  });
}])

.controller('testSessionCtrl',['$scope',function($scope){
    $scope.testCards = getTestCard();

    function getTestCard(){

        var testCard = {
            testCardId:"T1",
            question:"",
            options:[],
            correctAnswer:"",
            result:0,
            type:"SINGLE_ANSWER",
            userAnswer:"",
            testGroupId:"G1"
        };

        testCard.number =1;
        testCard.question = "Are you alone";
        testCard.correctAnswer =  [
            {optionId:"T1-O1",option:"Yes",explanation:"See your surroundings"}
        ];
        testCard.options = [
            {optionId:"T1-O1",option:"Yes"},
            {optionId:"T1-O2",option:"No"},
            {optionId:"T1-O3",option:"Not Sure"},
            {optionId:"T1-O4",option:"Maybe"}
        ];
        testCard.showTestCard=true;


        var testCard2 = {
            testCardId:"T2",
            question:"",
            options:[],
            correctAnswer:"",
            result:0,
            type:"MULTI_ANSWER",
            userAnswer:"",
            testGroupId:"G1"
        };

        testCard2.number =1;
        testCard2.question = "Are you alone";
        testCard2.correctAnswer =  [
            {optionId:"T2-O1",option:"Yes",explanation:"See your surroundings"},
            {optionId:"T2-O2",option:"No",explanation:"At the end, you are only one tiny things in universe"}
        ];
        testCard2.options = [
            {optionId:"T2-O1",option:"Yes"},
            {optionId:"T2-O2",option:"No"},
            {optionId:"T2-O3",option:"Not Sure"},
            {optionId:"T2-O4",option:"Maybe"}
        ];
        testCard2.showTestCard=false;
        return [testCard,testCard2];

    }
}])
