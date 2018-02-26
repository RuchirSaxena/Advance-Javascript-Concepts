
// Primitives VS Objects

//Primitives
var a= 23;
var b =a;
a=40;
console.log(a);
console.log(b);

//Objects
var obj1={
    name:'Jhon',
    age:26
};

var obj2=obj1;
obj1.age=34;

console.log(obj1);
console.log(obj2);

//Basically Primitives are value Type and Objects are Reference Type

//Functions =>Functions are also Objects
var age=27;
var obj={
    name:"Jonas",
    city:"London"
};

function change(a,b) {
    a=30;
    b.city='San Francisco';
}

change(age,obj);

console.log(age);
console.log(obj);



