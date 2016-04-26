// in globlal namespace
//var person="Priya";

//function logPerson(){
//    console.log(person);
//}

// creating a namespace or global variable

var objectApp = {};

objectApp.person = "Priya";
objectApp.logPerson = function(){
    console.log(objectApp.person);
}


