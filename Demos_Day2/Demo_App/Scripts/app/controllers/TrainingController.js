/// <reference path="../app.js" />

trainingsApp.controller('TrainingController',
    function TrainingController($scope, trainingDataService) {
        $scope.sortorder = "name";

        //For Step 4 - $resource
        //$scope.event = trainingDataService.get();

        //Step 3 - With $http and $q
        //trainingDataService.training().then(
        //    function (data) { $scope.event = data; },
        //    function (sCode) { console.log(sCode); });

        //Step 2 - With $http
        var dataPromise = trainingDataService.training();
        dataPromise.success(function (data) { $scope.event = data; });

        //$scope.event = trainingDataService.training;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });