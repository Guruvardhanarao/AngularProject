(function(){
    var app = angular.module("myApp", ['ui.router']);
    
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('homeState', {
            url: "/",
            templateUrl: "home.tpl.html",
            controller: "myController"
            
        })
        
        .state('productsState', {
            url: "/products",
            templateUrl: "products.tpl.html",
            controller: "productsCtrl"
        })
        
        
        .state('servicesState', {
            url: '/services/:x/:y',
            templateUrl: "services.tpl.html",
            controller: "servicesCtrl"
        })
        
        .state('contactState', {
            url: "/contact",
            templateUrl: "contact.tpl.html",
            controller: "contactCtrl"
        })
        
        //.state('noRoute', {
          //  url:'*path',
            //template:'<strong>no route available ......  pls click on the links</strong>'
        //});
        
        $urlRouterProvider.otherwise('/');
        
    }]);

//       app .controller("servicesCtrl",['$scope','$stateParams', function($scope,$stateParams){
//        $scope.services = ['services1', 'services2', 'services3', 'services4'];
//        $scope.servicesLst  = 'MY services LIST';
//        $scope.x = $stateParams.x;
//        $scope.y = $stateParams.y;
//    }]);
    
    
    
    
})();