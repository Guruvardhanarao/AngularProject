(function(){
    angular.module("myModule")
           .controller("filters", ['$scope', function($scope){
               employees = [
                   {
                       name:"Guruvardhanarao",
                       dateOfBirth:new Date("March 1, 1990"),
                       gender:"Male",
                       salary:45000,
                       salary:45000
                   },
                   
                   {
                       name:"Veerababu",
                       dateOfBirth:new Date("05-08-1991"),
                       gender:"Male",
                       salary:35000.87,
                       salary:35000
                   },
                   
                   {
                       name:"Aneel",
                       dateOfBirth:new Date("01-09-1990"),
                       gender:"Male",
                       salary:40000,
                       salary:40000
                   },
                   
                   {
                       name:"Nayan",
                       dateOfBirth:new Date("07-03-1995"),
                       gender:"Male",
                       salary:25000,
                       salary:25000
                   },
                   
                   {
                       name:"Ravi",
                       dateOfBirth:new Date("01-02-1990"),
                       gender:"Male",
                       salary:32000,
                       salary:32000
                   },
               ];  
               $scope.employees = employees;
               $scope.rowLimit = 3;
               $scope.sortColumn = "name";
    }]);
})();