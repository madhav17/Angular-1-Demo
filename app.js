var things = [1,2,3,4,5];
var things1 = ['1',2,'3',4,50.2];

var things2 = [1,'2',function(){
    
    alert("Hello");
}]

console.log(things);
console.log(things1);

things2[2]();

console.log(things2);