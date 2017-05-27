(function() {
    angular.module('myApp', [])
            .controller('searchCtrl', function($scope) {
      var employees = [
          {firstName:"Guruvardhanarao",
          lastName:"Panidam",
          age:"27",
          salary:"25000",
          location:"Hyderabad"},
          
          {firstName:"Veerababu",
          lastName:"Panidam",
          age:"25",
          salary:"20000",
          location:"Guntur"},
          
          {firstName:"Chiru",
          lastName:"Kattamuri",
          age:"20",
          salary:"15000",
          location:"Vijayawada"},
          
          {firstName:"Poornima",
          lastName:"Kanukurthi",
          age:"25",
          salary:"18000",
          location:"Guntur"}
      ];  
        
        $scope.employees = employees;
        $scope.search = function(employees) {
            if($scope.searchTxt == undefined) {
                return true;
            }
            
            else {
                if((employees.firstName.toLowerCase().indexOf($scope.searchTxt.toLowerCase()) != -1) || (employees.location.toLowerCase().indexOf($scope.searchTxt.toLowerCase()) != -1)) {
                    return true;
                }
                return false;
            }
        }
    });
})();