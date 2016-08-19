'use strict';

angular.module('myApp.test-cards', ['ngRoute','checklist-model','myApp.custom-directive'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view/test-cards', {
    templateUrl: 'view/test-cards/test-cards.html',
    controller: 'testCardCtrl'
  });
}])

.controller('testCardCtrl', ['$scope','$log',function($scope,$log) {

        $scope.testCard = getTestCard();

        $scope.nextTestCard = function(){
            $scope.testCard = getTestCard2();
            $scope.showAnswerView = false;
        }
        $scope.showAnswerView = false;
        $scope.toggleAnswerView = function(){
            $log.debug("before; event=toggleAnswerView; showAnswerView=",$scope.showAnswerView);
            $scope.showAnswerView = !$scope.showAnswerView;
            $log.debug("after event=toggleAnswerView; showAnswerView=",$scope.showAnswerView);
        }

        $scope.nextTestCard = function(){
            if ($scope.testCard.testCardId == "T1"){
                $scope.testCard = getTestCard2();
            }else{
                $scope.testCard = getTestCard();
            }

        }

        //todo:only mock of test card, must get it from service
        function getTestCards(){
            return [getTestCard(),getTestCard2()];
        }

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
                {correctAnswerId:"T1-CA1",option:"Yes",explanation:"See your surroundings"}
            ];
            testCard.options = [
                {optionId:"T1-O1",option:"Yes"},
                {optionId:"T1-O2",option:"No"},
                {optionId:"T1-O3",option:"Not Sure"},
                {optionId:"T1-O4",option:"Maybe"}
            ];
            testCard.showTestCard=true;
            return testCard;

        }


        function getTestCard2(){

            var testCard = {
                testCardId:"T2",
                question:"",
                options:[],
                correctAnswer:"",
                result:0,
                type:"MULTI_ANSWER",
                userAnswer:"",
                testGroupId:"G1"
            };

            testCard.number =1;
            testCard.question = "Are you alone";
            testCard.correctAnswer =  [
                {correctAnswerId:"T2-CA1",option:"Yes",explanation:"See your surroundings"},
                {correctAnswerId:"T2-CA2",option:"No",explanation:"Void"}
            ];
            testCard.options = [
                {optionId:"T2-O1",option:"Yes"},
                {optionId:"T2-O2",option:"No"},
                {optionId:"T2-O3",option:"Not Sure"},
                {optionId:"T2-O4",option:"Maybe"}
            ];
            testCard.showTestCard=false;
            return testCard;

        }






}]);