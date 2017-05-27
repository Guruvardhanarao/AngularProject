(function(){
    angular.module("myApp").controller("myController", function($scope, randomService){
                $scope.getRandom = function(){
                    $scope.RanNum = randomService.generateRandom();
                  
                }
    })
    

})();