(function() {
    angular.module('login').controller('loginCtrl', ['$scope', function($scope) {
        $scope.userName;
        $scope.pwd;
        var submit = function() {
            if($scope.userName == 'admin' && $scope.pwd == 'admin') {
                $location.path('/welcome');
            }
            
            else{
                alert('incorrect logins');
            }
        }
    }])
})();