/// <reference path="../app.js" />

trainingsApp.controller('EventListController',
    function EditEventController($scope, trainingDataService) {
        
        var datapromise = trainingDataService.getAllEvents();
        datapromise.success(function (data) {
            $scope.events = data;
        });
    })