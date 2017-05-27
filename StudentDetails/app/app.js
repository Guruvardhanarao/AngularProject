(function(){
    angular.module("app", ["ui.router", "header"]);
    angular.module("app").config(["$stateProvider", function($stateProvider){
    
  
    
    
    $stateProvider.state("index",{
        url : "",
        views : {
            "header" : {
                templateUrl : "app/header/header.tpl.html"
            },
            "footer" : {
                template: ""
            }
        }
    })
    
 
}]);
})();