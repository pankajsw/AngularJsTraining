var trainingsApp = angular.module('tApp', ['ui.bootstrap', 'ngRoute'])
    .config(function ($routeProvider) {

        $routeProvider.when("/events",
            {
                templateUrl: 'EventList.html',
                controller: 'EventListController'
            });

        $routeProvider.when("/event/:eventId",
            {
                templateUrl: 'EventDetails.html',
                controller: 'TrainingController'
            });

        $routeProvider.when("/newEvent",
            {
                templateUrl: 'NewEvent.html',
                controller: 'EditEventController'
            });


        $routeProvider.otherwise({ redirectTo: "/events" });
    });