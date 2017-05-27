(function(){
    angular.module("myModule")
           .controller("technologies", ['$scope', function($scope){
              var technologies = [
                  {name:"Angular",likes:0,disLikes:0},
                  {name:"JavaScript",likes:0,disLikes:0},
                  {name:"Jquery",likes:0,disLikes:0},
                  {name:"BootStrap",likes:0,disLikes:0}
              ];
               $scope.technologies =technologies;
               $scope.incrementLikes = function(technology){
                    technology.likes++;
               }
               
               $scope.incrementdislikes = function(technology){
                   technology.disLikes++;
               }
    }]);
})();