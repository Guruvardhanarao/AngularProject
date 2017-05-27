application.controller('myController', function($scope) {
    var employees = [
        {
            name:"Guruvardhanarao",
            gender:"Male",
            salary:75000
        },
        
        {
            name:"veeru",
            gender:"Male",
            salary:65000
        },
        
        {
            name:"chiru",
            gender:"Male",
            salary:15000
        },
        
        {
            name:"ravi",
            gender:"Male",
            salary:25000
        },
    ];
    
    $scope.employees =employees;
    $scope.tableView ="table.html";

});