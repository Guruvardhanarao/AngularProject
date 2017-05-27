var application = angular.module("app", ["ui.router"]);

application.config(function($stateProvider) {
  $stateProvider
  .state("home", {
      url: "/home",
      template: "<h1>HOME</h1>",
      controller: "homeController",
      controllerAs: "homeCtrl"
  })
  .state("courses", {
      url: "/courses",
      template: "<h1>COURSES</h1>",
      controller: "coursesController",
      controllerAs: "coursesCtrl"
  })
    .state("students", {
      url: "/students",
      template: "<h1>STUDENTS</h1>",
      controller: "studentsController",
      controllerAs: "studentsCtrl"
  });
});