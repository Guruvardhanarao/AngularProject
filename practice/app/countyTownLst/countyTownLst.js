(function(){
    angular.module("myModule")
           .controller("countryLst", ['$scope', function($scope){
               $scope.countryLst = [{name:"India",
                                     cities:["Amaravathi","Hyderabad","Banglore","Mumbai"]},
                                   
                                    {name:"America",
                                     cities:["WashintonDC","Newyork","Newjersy","Huwai"]},
                                      
                                    {name:"England",
                                     cities:["Amaravathi","Hyderabad","Banglore","Mumbai"]}
                                   ];     
    }]);
})();