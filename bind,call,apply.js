/*
 Bind, call, apply
*/

var john={
    name:'Jhon',
    age:26,
    job:"Developer",
    presentation:function(style , timeOfDay){
        if(style==='formal'){
      return "Good "+timeOfDay+ " everyone.I am "+this.name 
                 +" and I am "+this.job +
                 "and I am "+this.age +" years old.";
        }else if(style==='Informal'){
         return "Hey everyone.This is " + this.name
                + " and I am " + this.job +
                "and I am " + this.age + " years old.Have a good "+timeOfDay;
        }
    }
};

console.log(john.presentation('formal','Morning'));

var emily={
    name:'Emily',
    age:35,
    job:'designer'

}
//Call Method usage
//Below we are using 'call' method for Method borrwing
console.log(john.presentation.call(emily,'Informal','afternoon'));

//Apply Method usage
//Below we are using 'apply' method for Method borrwing
console.log(john.presentation.apply(emily,['formal','afternoon']));

//Bind Method usage
//Now 'bind' method stores the function inside a variable and passing only 1 parameter to a function and later we can pass other parameters
var jhonFirendly = john.presentation.bind(john,'formal');

//using jhonFirendly and passing the 2nd parameter
console.log(jhonFirendly('Morning'));
console.log(jhonFirendly('Night'));

//Now you can see the advantage of 'bind' method where we pass the arguments first partially and then store that function 
//in  a seperate variable and later on use this further when we receive the other arguments of that function 

//Curring
//The above concept is also call as 'curring' in javascript , where we can we create a function based on the other function but with some preset arguments exactly we implented above.

//Another example with different object  ie. emily
var emilyInFormal = john.presentation.bind(emily, 'Informal');
console.log(emilyInFormal('afternoon'));


//NOTE : bind can be worked with functions as well
