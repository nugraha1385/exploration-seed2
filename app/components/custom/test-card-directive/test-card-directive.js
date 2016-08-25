'use strict';
//try to utilize directive for view component
//other options is using include
angular.module('myApp.test-card-directive', [])


.directive('testCardDirective', ['$log', function($log) {
  return {
    //valid as: A=attribute, C=class, E=Element
    restrict:'ACE',
    //isolate the scope, except mapped outer scope with inner directive scope
    scope:{
        //mapping happens here
        testCards: "=testCards"
    },
    //could use templateUrl for longer template or template for sorter one
    templateUrl:"components/custom/test-card-directive/test-card-directive-template.html",
    //if we need to manipulate the DOM, use link function
    link:function(scope, elm, attrs) {

        //define behaviour on directive
        scope.toggleAnswerView = function(index){
            scope.testCards[index].showAnswerView = ! (scope.testCards[index].showAnswerView);
        };

        scope.nextTestCard = function(index){
            //get showTestCard index, then operate on it
            var currentActiveTestCard = _.find(scope.testCards, function(checkingTestCard){
                return (checkingTestCard.showTestCard);
            });
            var testCardLength = scope.testCards.length
            scope.testCards[currentActiveTestCard.index].showTestCard = false;
            if (currentActiveTestCard.index < (testCardLength - 1)){
                scope.testCards[currentActiveTestCard.index + 1 ].showTestCard = true
            }else{
                scope.testCards[0].showTestCard = true;
            }
        };

        scope.checkCurrentTestCardAnswer = function(index){
            var currentActiveTestCard = _.find(scope.testCards, function(checkingTestCard){
                return (checkingTestCard.showTestCard);
            });

            checkTestCardAnswer(currentActiveTestCard);
        }

        scope.checkAllTestCardAnswer = function(){
            var point = 0;
            _.each(scope.testCards,function(testCard){
                point = point + checkTestCardAnswer(testCard);
            });
            scope.point = point;
        }

        //generic one
        function checkTestCardAnswer(testCard){
            testCard.answerPoint = 0;
            //check the answer on multi and single
            _.each(testCard.correctAnswer, function(correctAnswer){
                if (testCard.type == "MULTI_ANSWER"){
                    _.each(testCard.userAnswer, function(userAnswer){
                        if(correctAnswer.optionId == userAnswer.optionId){
                            testCard.answerPoint = testCard.answerPoint
                                + (1/testCard.correctAnswer.length);
                        }
                    });
                }else{
                    if(correctAnswer.optionId == testCard.userAnswer.optionId){
                        testCard.answerPoint = 1;
                    }
                }
            });

            return testCard.answerPoint;
        };




    }
  };
}]);
