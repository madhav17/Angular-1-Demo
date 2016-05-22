var myApp = angular.module('myApp',['ngMessages','ngResource']);
//var myApp = angular.module('myApp',['ngMessages']);

myApp.controller('mainController', function($log,$scope,$http,$filter,$resource){

    $scope.name="Madhav";
    $scope.formattedName=$filter('uppercase')($scope.name);
    
    console.log($scope);
    console.log($log);
    console.log($http);
    
    $log.log("Hello");
    $log.info("Hello");
    $log.warn("Hello");
    $log.debug("Hello");
    
    console.log($http);
    console.log($resource);
    $log.info($scope.formattedName);
    
    

});

