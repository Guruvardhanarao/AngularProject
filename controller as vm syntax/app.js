var application = angular.module("app", []);

application.controller('countryController', function() {
    this.name = "India";
});

application.controller('stateController', function() {
    this.name = "Andhra Pradesh";
});

application.controller('cityController', function() {
    this.name = "Amaravati";
})