(function(){
    angular.module("myApp")
        .controller("myController", function($scope){
        $scope.a = 10;
        $scope.b = 20;
        $scope.heading  = 'HOME PAGE';
    }) 
})();