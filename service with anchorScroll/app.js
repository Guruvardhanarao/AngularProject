var application = angular.module("app", []);

application.controller('countryCtrl', ['$scope', '$http', '$location', '$anchorScroll', function($scope, $http, $location, $anchorScroll) {
    $http.get("countries.json")
    .success(function(response) {
        $scope.coun = response.countires;
    });
    
    $scope.goToLocation = function(locat) {
        $location.hash(locat);
        $anchorScroll();
    };
}]);