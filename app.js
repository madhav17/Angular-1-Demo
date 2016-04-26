var Person = function(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

function logPerson(john){
    // it dependency 
    // so we use dependency injection
//    var john = new Person("John","Doe");
    console.log(john);
}

var john = new Person("John","Doe");
// now this dependency injection becoz we are passing it and it is not dependent
logPerson(john);