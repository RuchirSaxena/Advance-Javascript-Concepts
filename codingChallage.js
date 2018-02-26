

function printFullAge(arr){
    var result=[];
    var tempArr=[];
    arr.forEach(age=>{tempArr.push(age)});
    tempArr.forEach(age=>{
        var tempAge=2018-age;
        if(tempAge>=18){
            result.push(true);
        }else{
            result.push(false);
        }
    });
    return result;
    
}

console.log(printFullAge([1985,2000,2010]));


