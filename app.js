var myApp = angular.module('myApp',[]);

myApp.controller('mainController', function($scope){

});

var searchPeople = function (firstName,lastName,height,age,occupation){
    
    
    return "Madhav"
}

console.log(searchPeople());
console.log(searchPeople(1,2,3,4));
console.log(searchPeople(1,2,3,4,5));
console.log(searchPeople);
var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);