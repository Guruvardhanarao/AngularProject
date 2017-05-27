var application = angular.module("app", []);


application.controller("calC", ['$scope', 'calCFactory', function($scope, calCFactory) {
    $scope.a;
    $scope.b;
    
    $scope.doAddition = function() {
        calCFactory.doSum($scope.a, $scope.b, function(response) {
            $scope.res = response;
        });
    };
    
}]);


application.factory('calCFactory', ['$log', function($log) {
    $log.log("Factory Instantiated..");
    var getSumObj = {};
    getSumObj.doSum = function(a,b, sumFun) {
        return sumFun((parseInt(a) + parseInt(b)));
    };
    
    return getSumObj;
}]);