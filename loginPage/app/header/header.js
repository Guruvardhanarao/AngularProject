(function() {
    angular.module('header', [])
    .config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/login/login.tpl.html'
        })
        
        .when('/userPage', {
            templateUrl: 'app/login/welcome.html'
        })
    });
})();