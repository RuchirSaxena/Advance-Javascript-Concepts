
//Passing functions as Argument

var years=[1990,1965,1937,2005,2015];

function arrayCalc(arr,fn) {
    var arrRes=[];
    for (let i = 0; i < arr.length; i++) {
          arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018-el;
}

function isAdult(el){
    return el>=18;
}

var ages=arrayCalc(years,calculateAge);
console.log(ages);
var adults = arrayCalc(ages,isAdult);
console.log(adults);

//We can see the advantage of using functions as Arguments in above example

//Returning functions from functions

function interviewQuestions(job){
    if(job==='designer'){
        return function(name){
            console.log(name + ' , can you explain what UX design is?');
        }
    }
    else if(job==='teacher'){
        return function(name){
            console.log('What subject do you teach, '+name +'?');
        }
    }else{
        return function(name){
            console.log('Hello '+name + ', what do you do?');
        }
    }
}

var teacherQuestions=interviewQuestions('teacher');
teacherQuestions('John');

var designerQuestions=interviewQuestions('designer');
designerQuestions('Mark');

//You can see the advantage of Returning functions , it gives us modularity


