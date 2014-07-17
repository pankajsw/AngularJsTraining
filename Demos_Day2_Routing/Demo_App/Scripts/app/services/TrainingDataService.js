trainingsApp.factory('trainingDataService', function ($http, $q) {
    return {
        get: function (eventId)
        {
            return $http.get("/data/GetById/" + eventId);
        },

        save: function (tevent)
        {
            var deferred = $q.defer();

            $http.post("/data/add", tevent)
                .success(function () { deferred.resolve(); })
                .error(function () { deferred.reject(); });

            return deferred.promise;
        },

        getAllEvents: function () {
            return $http.get("/data/GetAll");
        }
    };
});