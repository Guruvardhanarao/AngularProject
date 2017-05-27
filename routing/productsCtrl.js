(function(){
    angular.module("myApp")
        .controller("productsCtrl", function($scope){
        $scope.products = ['apple', 'orange', 'banana', 'grapes'];
        $scope.productsLst  = 'MY PRODUCTS LIST';
    }) 
})();