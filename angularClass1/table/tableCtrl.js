(function(){
    angular.module("tableModule").controller("tableCtrl",tableFn($scope))
    
    
    function tableFn(){
        var vm = this;
        this.employees= [
          {id:101, name:"raju", salary:10000},
          {id:102, name:"triveni", salary:12000},
          {id:103, name:"naveen", salary:13000},
          {id:104, name:"gopi", salary:9000}
        ];
    
    }
})();