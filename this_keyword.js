/*
THIS Keyword
=============
1.Regular function call :The 'this' Keyword points at the Global Object (the window object in the browser).
2.Method call:The 'this' variable points to the object that is calling the method.

Note: The this Keyword is not assigned a value until a function where it is defined is actually called.
*/

console.log(this); //this will point to the window object as that is the global object here
function add(no1,no2) {
    return no1 +no2;
    console.log(this);  //this will also point to the window object as that is the global object here
}
console.log(add(10,40));

var jhon={
    name:'jhon',
    dob:1978,
    calculateAge:function () {
        var currentAge = 2018 - this.dob;
        console.log(this); //Here this will point to the jhon object
        return currentAge;
    }
}

console.log(jhon.calculateAge());

//We can also borrow the calculateAge from jhon object in a new object

var shown = {
    name: 'shown',
    dob: 1958
}

shown.calculateAge=jhon.calculateAge; //Method Borrowing

console.log(shown.calculateAge());