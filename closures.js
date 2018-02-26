/*Closures
In closure inside function has access to outside fuction parameters and variables.
It helps us in creating more generic function ,
which can help us to divide a complex logic into multiple parts.
*/


function retirement(retirementAge){
    var a=' years left until retirement';
    return function(yearOfBirth){
        var age=2018 -yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS=retirement(60);
var retirementIndia=retirement(65);
console.log(retirementUS(1968));
console.log(retirementIndia(1984));

//OR we can call in below way also
retirement(60)(1968);




