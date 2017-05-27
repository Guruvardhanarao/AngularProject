(function(){
    angular.module("header").controller("headerCtrl", [appendLstItms]);
    
    function appendLstItms(){
        var vm=this;
        
        vm.navBar=[{"key":"index.html","value":"Home"},
                  {"key":"products.html","value":"Products"},
                  {"key":"contact.html","value":"Contact"}];
    }
    
})();