(function(){
    angular.module("headerctrl").controller("headerctrl",[headerctrl]);

    function headerctrl(){
        var vm = this;
        vm.navitems = [
        {"key":"home", "value":"Home"},
        {"key":"products","value":"Products"},
        {"key":"register","value":"Register"},
        {"key":"login","value":"Login"}
        ];
    }  
})();