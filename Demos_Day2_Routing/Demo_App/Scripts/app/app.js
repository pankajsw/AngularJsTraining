var trainingsApp = angular.module('tApp', ['ui.bootstrap', 'ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider.when("/events",
            {
                templateUrl: 'Home/EventList',
                controller: 'EventListController'
            });

        $routeProvider.when("/event/:eventId",
            {
                templateUrl: 'Home/EventDetails',
                controller: 'TrainingController'
            });

        $routeProvider.when("/newEvent",
            {
                templateUrl: 'Home/NewEvent',
                controller: 'EditEventController'
            });


        $routeProvider.otherwise({ redirectTo: "/events" });
    });