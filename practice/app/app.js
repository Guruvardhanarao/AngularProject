
(function(){
    angular.module("myModule",["ui.router"]);
    
    angular.module("myModule").config(["$stateProvider",function($stateProvider){
         $stateProvider.state("first-msg",{
             url:"/home",
             template:"hi"
         });  
        }
    ]);

})();