(function() {
   application.controller('myCtrl', function($scope, $http) {
        $http.get("database.json")
       .success(function(response) {
            $scope.employees = response.records;
        });
    }); 
})();

