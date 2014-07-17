/// <reference path="../app.js" />

trainingsApp.controller('EditEventController',
    function EditEventController($scope, trainingDataService) {
        $scope.saveEvent = function (frm, event) {
            if (frm.$valid) {
                trainingDataService.save(event);
                window.location = "/";
            }
        }

        $scope.cancelEdit = function () {
            window.location = "/";
        }

    })