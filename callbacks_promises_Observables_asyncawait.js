/*So what are all these things about ? Handling asynchronous code! But what is asynchronous(async) code to begin with? Consider this example */

const getUser=()=>{
    setTimeout(()=>{
        return {name:'Ruchir'}
    },20000);
};

const user=getUser(); //assingning a function to a user variable
//console.log(user.name); //calling a function ,
// but it wont work as javascript is asynchronous and code will be executed and will not wait for the timeout function 

//Callback
//To solve the above problem we can use => callbacks
const getUserData=(callback)=>{
    setTimeout(()=>{
        callback({name:'Ruchir'});
    },2000);
}

getUserData((user)=>{
    console.log(user.name);
});
//The above code is working because we are passing the callback when calling getUserData
/*So ...callbacks are pretty awesome, right ? We can postpone code execution and work with data once we actually got it.And we don't even block the execution of our main program.*/

//Callback Hell
//Below is an example of callback Hell where if we get the data from server and then the result 
//of that callback we be an input to another server request and so on.... resulting in callback inside callback
//which is hard to debug and maintain
const checkAuth = (cb) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    setTimeout(() => {
        cb({ isAuth: true });
    }, 2000);
};
const getUserFromServer = (authInfo, cb) => {
    if (!authInfo.isAuth) {
        cb(null);
        return;
    }
    setTimeout(() => {
        cb({ name: 'Max' });
    }, 2000);
};
checkAuth((authInfo) => {
    getUserFromServer(authInfo, (user) => {
        console.log(user.name);
    });
});

//Promises
/*To avoid the above issue of callback Hell we can use Promises */

const getUserFromServerUsingPromises=()=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({name:'Adam'});
        },2000);
    });
};

getUserFromServerUsingPromises().then(user=>{
    console.log(user.name);
}).catch(error=>{
   console.log(error);
});

