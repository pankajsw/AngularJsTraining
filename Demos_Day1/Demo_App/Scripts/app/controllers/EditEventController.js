/// <reference path="../app.js" />

trainingsApp.controller('EditEventController',
    function submit($scope) {
        $scope.saveEvent = function (frm, event) {
            if (frm.$valid) {
                alert("Save Called...");
            }
        }

        $scope.cancelEdit = function () {
            window.location = "/";
        }

    })