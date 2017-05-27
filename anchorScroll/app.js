var application = angular.module("app", []);


application.controller('myCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScorll) {
    $scope.scroll = function(loc) {
         $location.hash(loc);
        $anchorScorll.yOffset = 140;
        $anchorScorll();
    };
}]);