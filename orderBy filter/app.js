(function() {
    var application = angular.module('myApp', []);
    
    application.filter("sex", function() {
        return function(sex) {
            switch(sex){
                case 1:
                    return "male";
                case 2:
                    return "female";
                case 3:
                    return "not disclosed";
                      }
        };
    });
    
    application.controller('myCtrl', function($scope) {
            var emp = [
              { name: "Guruvardhanarao",
              sex: 1,
              age: 27},
                
              { name: "veerababu",
              sex: 1,
              age: 25},
                
              { name: "chiru",
              sex: 3,
              age: 19},
                
              { name: "poori",
              sex: 2,
              age: 25},
            ];
            $scope.emp= emp;
            $scope.sortColumn = "name";
        });
    
    
})();