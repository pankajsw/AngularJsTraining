/// <reference path="../app.js" />
/// <reference path="../TEvent.js" />

trainingsApp.controller('TrainingController',
    function TrainingController($scope) {

        //$scope.tEvent = new TEvent(1, 'AngularJS');

        $scope.sortorder = "name";
        //$scope.sortorder = "-upVoteCount";

        $scope.event = {
            name: 'Angular JS Fundamentals',
            date: new Date(),
            time: '9:00 am',
            location: {
                address: 'Synechron',
                city: 'Pune',
                state: 'Maharashtra'
            },
            imageUrl: '../../Images/angularjs-logo.png',
            sessions: [
                {
                    name: 'Introductory Directives',
                    creatorName: 'Manish Sharma',
                    duration: 2,
                    level: 'Advance',
                    summary: 'In this sesison you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Angular Services',
                    creatorName: 'Manish Sharma',
                    duration: 1,
                    level: 'Introductory',
                    summary: 'This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.',
                    upVoteCount: 0
                },
                {
                    name: 'Controllers',
                    creatorName: 'Jane Doe',
                    duration: 3,
                    level: 'Intermediate',
                    summary: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.',
                    upVoteCount: 0
                },
                {
                    name: 'Angular UI',
                    creatorName: 'John Doe',
                    duration: 4,
                    level: 'Advance',
                    summary: 'Learn Angular UI that will win the respect of your friends and neighbors.',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    });