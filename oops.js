

//Basic object creation
var jhon = {
    name: 'jhon',
    yearOfBirth: 1998,
    job: 'teacher'
}

//Function Constructor way of creating object
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}

Person.prototype.caculateage = function () {
    console.log(2018 - this.yearOfBirth);
}

var john = new Person('jhon', 1998, 'teacher');



var jane = new Person('jane', 1987, 'devloper');
var travis = new Person('travis', 1967, 'teacher');


console.log(john);
console.log(jane);
console.log(travis);

john.caculateage();
jane.caculateage();
travis.caculateage();

//Object.create methof for creating object
var personProto={
    caculateAge:function () {
        console.log(2018-this.yearOfBirth);
    }
};

var johnNew=Object.create(personProto);
console.log(johnNew); 
johnNew.name='John';
johnNew.yearOfBirth=1998;
johnNew.job='teacher';
console.log(johnNew)

//OR Another way below

var jane=Object.create(personProto,{
    name:{value:'jane'},
    yearOfBirth:{value:1978},
    job:{value:'developer'}
});

console.log(jane);

/*The difference between Object.create and function constructor is that
 Object.create builds an object from the object that is being passed in it as the first argument where as
function contructor creates an object form the newly created object from constructor prototype property.
The benefit of using object.create is to implement complex inheritance
BUT in most of the cases Function Constructor will be used as its easy to create and understand
*/






