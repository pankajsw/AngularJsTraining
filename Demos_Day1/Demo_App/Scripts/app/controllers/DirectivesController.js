/// <reference path="../app.js" />

trainingsApp.controller('TrainingController',
    function TrainingController($scope) {

        $scope.myList = [1, 2, 3];
        $scope.snippet = '<span style="color:red">Hi There</span>';

        $scope.boolValue = true;

        $scope.myStyle = { color: 'red' };
        $scope.myClass = "blue";

        $scope.buttonDisabled = true;


        $scope.event = {
            name: 'Angular JS Fundamentals',
            date: new Date(2014, 7, 10),
            time: '9:00 am',
        }
    });