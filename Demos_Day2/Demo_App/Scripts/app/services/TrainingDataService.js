/// <reference path="../app.js" />

//Step 4 - Use $resource
//trainingsApp.factory('trainingDataService', function ($resource) {
//    return {
//        get: function () {
//            return $resource("api/just/1").get();
//        }
//    };
//});


//Step 3 - Use $http & $q
//trainingsApp.factory('trainingDataService', function ($http, $q) {
//    return {
//        training: function () {
//            var deferred = $q.defer();

//            $http({ method: 'GET', url: 'api/just/1' }).
//                success(function (data, status, headers, config) {
//                    deferred.resolve(data);
//                }).
//                error(function (data, status, headers, config) {
//                    deferred.reject(status);
//                });

//            return deferred.promise;
//        }
//    };
//});

//Step 2 - Use $http
trainingsApp.factory('trainingDataService', function ($http) {
    return {
        training: function () {
            return $http.get("/data/get/1");
            //return $http.get("/api/just/1");
        }
    };
});


//Step 1
//trainingsApp.factory('trainingDataService', function () {
//    return {
//        training: {
//            name: 'Angular JS Fundamentals',
//            date: new Date(),
//            time: '9:00 am',
//            location: {
//                address: 'Synechron',
//                city: 'Pune',
//                state: 'Maharashtra'
//            },
//            imageUrl: '/Images/angularjs-logo.png',
//            sessions: [
//                {
//                    name: 'Introductory Directives',
//                    creatorName: 'Manish Sharma',
//                    duration: 2,
//                    level: 'Advance',
//                    summary: 'In this sesison you will learn the ins and outs of directives!',
//                    upVoteCount: 0
//                },
//                {
//                    name: 'Angular Services',
//                    creatorName: 'Manish Sharma',
//                    duration: 1,
//                    level: 'Introductory',
//                    summary: 'This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.',
//                    upVoteCount: 0
//                },
//                {
//                    name: 'Controllers',
//                    creatorName: 'Jane Doe',
//                    duration: 3,
//                    level: 'Intermediate',
//                    summary: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.',
//                    upVoteCount: 0
//                }
//            ]
//        }
//    };
//});