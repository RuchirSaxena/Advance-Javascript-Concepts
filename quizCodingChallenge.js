
/*Coding Challnge
Create a small quiz using just Javascript in OOP approach
1.Use constructor function.
2.Use closures 
3.other concepts .... 
*/
(function(){
var Question = function (question, answers, correctAnswer){
    this.question=question;
    this.answers=answers;
    this.correctAnswer = correctAnswer;
}

Question.prototype.displyQuestion=function() {
   console.log(this.question);
    this.answers.forEach((answer, index) => {
        console.log((index + 1) + ". " + answer);
    });
};

Question.prototype.checkAnswer=function(answer,keepScore){
    var correctAnswer = this.correctAnswer;
    var _score;
    if (correctAnswer === (answer - 1)) {
        console.log("Correct !");
        _score= keepScore(true);
    } else {
        console.log("Incorrect !");
        _score = keepScore(false);
    }
    this.displayScore(_score);
};

Question.prototype.displayScore=function(score){
    console.log("Your current score is: "+score);
    console.log('--------------------------------------------------');
};
var question1=new Question("Which is the best scripting language ?",["Java","Javascript","Python"],1);
var question2 = new Question("Which is your Favroite language ?", ["CSharp", "Javascript", "Python"], 1);
var question3 = new Question("Which is your Favroite FrontEnd Framework ?", ["Angular", "React.js", "Vue.js"], 2);

var questionsCollection=[question1,question2,question3];

function score(){
    var _score=0;
    return function(correct){
        if(correct){
            _score++;
        }
        return _score;
    }
}

var keepScore=score();
function nextQuestion(){
    var randomQuestion = Math.floor(Math.random() * questionsCollection.length);
    questionsCollection[randomQuestion].displyQuestion();
    
    var answer = prompt("What is the answer to this question?");
    if(answer!=='exit'){
        questionsCollection[randomQuestion].checkAnswer(parseInt(answer),keepScore);
        nextQuestion();
    }else{
        console.log("Exited!");
    }
}

    nextQuestion();

})();
