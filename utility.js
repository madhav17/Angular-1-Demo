// in globlal namespace
//var person="Priya";

//function logPerson(){
//    console.log(person);
//}

// creating a namespace or global scope,container

var objectApp = {};

objectApp.person = "Priya";
objectApp.logPerson = function(){
    console.log(objectApp.person);
}


