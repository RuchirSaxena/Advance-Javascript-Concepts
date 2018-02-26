//Arrays 

var jhon = ['jhon','Smith',1990,'teacher',false];

jhon.unshift("Mr.");
jhon.pop();
jhon.shift();
var index=jhon.indexOf('Smith');

console.log(jhon);
console.log(index)

//Objects

var jhonObj={
    name:"Jhon",
    dob:1990,
    profesion:"Teacher"
}

//OR we can 


jhonObj.address="104 Street NY"
console.log(jhonObj);
console.log("Object Keys:"+Object.keys(jhonObj));
console.log("Length of Keys in Jhon object :"+Object.keys(jhonObj).length);


