angular.module('app', [])
    .controller('myCtrl', function($scope) {
   $scope.employees = [
       {
           name:"Guruvardhanarao",
           gender:"Male",
           disignation:"Senior Developer",
           salary:45000
       },
       
       {
           name:"Veerababu",
           gender:"Male",
           disignation:"Senior Tester",
           salary:35000
       },
       
       {
           name:"Poornima",
           gender:"Female",
           disignation:"Senior Sales Executive",
           salary:25000
       },
       
       {
           name:"Chiranjeevi",
           gender:"Male",
           disignation:"Junior Attender",
           salary:15000
       }
   ]; 
$scope.reverseSort = false;
$scope.sortValue = 'name';
    
$scope.sortByName = function(column) {
    $scope.sortValue = column;
    
};
    
    
});