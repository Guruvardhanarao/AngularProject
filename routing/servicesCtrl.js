(function(){
    angular.module("myApp")
        .controller("servicesCtrl",'$stateParams', function($scope,$stateParams){
        $scope.services = ['services1', 'services2', 'services3', 'services4'];
        $scope.servicesLst  = 'MY services LIST';
        $scope.x = $stateParams.x;
        $scope.y = $stateParams.y;
    }) 
})();