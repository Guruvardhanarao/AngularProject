(function(){
    angular.module("header").controller("headerCtrl", function($scope,$state) {
        $scope.students = [
            {key:"StudentDetails", value:"Student Details"},
            {key:"StudentRegister", value:"Student Register"}
            
            ];
            
    })



    
})();