trainingsApp.filter('mvcToJSDate', function () {
    return function (incomingDate) {
        return new Date(parseInt(incomingDate.substr(6)));
    }
});