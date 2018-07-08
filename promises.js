
/*ES*/

var isMomHappy=true;

//Promise creation
var willGetNewPhone=new Promise(
    function(resolve,reject){
        if(isMomHappy){
            var phone={
                brand:"Apple",
                color:"black"
            };
            resolve(phone);
        }else{
            var reason=new Error('mom is not happy');
            reject(reason);
        }

    }
);

//Calling Promise
var askMom=function(){
    willGetNewPhone
        .then(function(result){
            console.log(`You will get ${result.brand} of color ${result.color} ` )
        })
        .catch(function (error){
           console.log(error.message);
        });
}

askMom();


