(function() {
    angular.module('login',[])
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'login.tpl.html',
            controller: 'loginCtrl'
        })
        
         .when('/welcome', {
            templateUrl: 'welcome.html',
            controller: 'loginCtrl'
        })
    })
})();