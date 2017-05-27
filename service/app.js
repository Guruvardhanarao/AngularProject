var appliction = angular.module('app', []);

appliction.controller('processStr', ['$scope',  'putSpaceSvc',function($scope, putSpaceSvc) {
    $scope.strng = "";
    $scope.getSpace = function() {
        $scope.res = putSpaceSvc.putSpace($scope.strng)
    };
}]);


appliction.service('putSpaceSvc', [function() {
    var str="";
    var spc = " ";
    this.putSpace = function(txt) {
        for(var i=0; i<txt.length; i++) {
           if((i>0) && (txt[i] == txt[i].toUpperCase())) {
               str = str + spc;
           } 
            str = str + txt.charAt(i);
        }
        return str;
    };
    
}]);