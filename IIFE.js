/*IIFE =>Immidieatly Invoked Function Expression
IIFE can only be called once 
IIFE is not used to create a reusable code ,it creates a new scope which is hidden from outside scope
It helps us in creation of data privacy and also dont interfer with other variables and dont conflict with our
global execution context , so if that is our goal than we should use IIFE


*/

(function(){
   var score=Math.random()*10;
       console.log(score);
   if(score>=5){
       console.log("You Won");
   }else{
       console.log("You Lost");
   }
})();

    
