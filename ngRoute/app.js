var application = angular.module("app", ['ngRoute']);

application.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeCtrl"
    })
    .when("/courses", {
        templateUrl: "templates/courses.html",
        controller: "coursesCtrl"
    })
    .when("/students", {
        templateUrl: "templates/students.html",
        controller: "studentsCtrl"
    })
    .when("/students/:id", {
        templateUrl: "templates/studentDetails.html",
        controller: "studentsCtrl"
    })
    .otherwise({
               redirectTo: "/home"
               });
    
    $locationProvider.html5Mode(true);
    
    
});

application.controller("homeCtrl", function($scope) {
    $scope.message = "Cloud Computing";
});

application.controller("coursesCtrl", function($scope) {
    $scope.courses = ["AngularJS", "Java", "Oracle", "Phython"];
});

application.controller("studentsCtrl", function($scope, $routeParams, $http) {
    $scope.students = [
        {
            name: "Guru",
            id: 101,
            gender: "Male",
            age: "27"
         },
        {
            name: "Veeru",
            id: 102,
            gender: "Male",
            age: "25"
         },
        {
            name: "Chiru",
            id: 103,
            gender: "Male",
            age: "20"
         },
        {
            name: "Raju",
            id: 104,
            gender: "Male",
            age: "26"
         }
    ];
    
    //$http({
     //   params: {id:$routeParams.id}
    //})
});