(function(){
    var app = angular.module("mainModule", ["header","blog","register"]);
    
    
    app.controller("mainController", [mainControllerFn]);
    
    function mainControllerFn(){
        
        var vm = this;
        vm.appName = "Bit Blogger";
        vm.headerTmplt = "app/header/header.tpl.html";
        vm.comments="app/header/comments/comment.tpl.html";
        vm.registerTmplt = "app/register/register.tpl.html";
    }
})();