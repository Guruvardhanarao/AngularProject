(function(){
    
    angular.module("register").controller("registerCtrl", ["registerSvc",registerCtrl]);
    
    function registerCtrl(registerSvc){
        var vm=this;
        registerSvc.getCountries()
            .then(function(response){
            console.log(response);
            vm.countries=response.data.countries;
        })
        .catch(function(response){
            console.log(response);
        })
        .finally(function(response){
           console.log(response);  
        })
    }
    
})();