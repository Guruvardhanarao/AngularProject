(function(){
    angular.module("myModule")
           .controller("myCtrl", ['$scope', function($scope){
               $scope.country = {
                   name:'India',
                   capital:'Delhi',
                   flag:'app/images/flag.png'
               }      
    }]);
})();