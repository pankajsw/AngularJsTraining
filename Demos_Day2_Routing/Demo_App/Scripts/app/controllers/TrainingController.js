/// <reference path="../app.js" />

trainingsApp.controller('TrainingController',
    function TrainingController($scope, trainingDataService, $routeParams) {
        $scope.sortorder = "name";

        var dataPromise = trainingDataService.get($routeParams.eventId);
        dataPromise.success(function (data) { $scope.event = data;})

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });