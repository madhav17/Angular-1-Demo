var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope){

    $scope.firstName="Madhav";
    $scope.lastName="Khanna";
    $scope.occupation="Code";
    
    
    $scope.getFullName =  function(){
        return $scope.firstName + " " + $scope.lastName;
    }
    console.log($scope);
    console.log($scope.getFullName());
});