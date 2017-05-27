var application = angular.module("app", []);

application.controller("custDirective", ['$scope','$http', function($scope, $http) {
    var vm = this;
    vm.msg = "this is custom directive";
    vm.countriesList = [];
    $http
        .get("myService.json")
        .then(function(response) {
            console.log(response);
            vm.countriesList = response.data.countries;
            //console.log(countriesList);
        }, 
    function(response) {
            window.alert(response.error);
        });
}]);

application.directive("myInfoMsg", function() {
    return {
        templateUrl: "my-info-msg.html"
    };
});