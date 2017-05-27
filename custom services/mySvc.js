(function(){
    angular.module("myApp").service("randomService", function(){
        var num = Math.random();
        this.generateRandom = function(){
            
            return num;
        }
    })
})();