(function(){
    angular.module("bitblogger",["login","register","header"]);
    
    angular.module("bitblogger").config([function(){
        console.log("config:bitblogger");
    }]);


angular.module("bitblogger").controller("mainctrl",[mainctrl]);

function mainctrl(){
    var vm =this;
    vm.appname = "bitBlogger";
    vm.headerTemplate = "app/header/header.tpl.html";
    
    vm.showAppname = function(){
        vm.show = true;
    };
    
    vm.hideAppname = function(){
        vm.show = false;
    };
}
    
})();