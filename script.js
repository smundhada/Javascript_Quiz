var startQuizEl = document.getElementById("start-quiz");
var WelcomeEl = document.querySelector(".Welcome");
var javaQuizEl = document.querySelector(".javaQuiz");
var questionEl = document.getElementById("question");
var answeroneEl = document.getElementById("answerone");
var answertwoEl = document.getElementById("answertwo");
var answerthreeEl = document.getElementById("answerthree");
var answerfourEl = document.getElementById("answerfour");
var answerAccurracyEl = document.querySelector(".answer-accurracy");
var timeEl = document.querySelector(".time");
var endEl = document.querySelector(".End");
var highscoreEl = document.querySelector(".highscore");
var userInput = document.querySelector("#intials");
var submitScoreEl = document.getElementById("submit-score");
var highscoreboardEl = document.querySelector(".highscoreboard");
var highscoreListEl = document.querySelector(".highscoreList");
var clearcoreboardEl = document.getElementById("clear-board");
var retakeEl = document.getElementById("retake");

var questionObj = {
    '1' : {
        'ques' : 'What is the right way to create a function in Javascript?',
        'ans1' : 'blink function(){}',
        'ans2' : 'function blink(){}',
        'ans3' : 'function(blink){}',
        'ans4' : 'function{(blink)}',
        'ansCor' : 'function blink(){}',
    },
    '2' : {
        'ques' : 'What is the right way to find out if variable i is NOT equal to 5?',
        'ans1' : 'if(i === 5){}',
        'ans2' : 'if(i *** 5){}',
        'ans3' : 'if(i ==! 5){}',
        'ans4' : 'if(i !== 5){}',
        'ansCor' : 'if(i !== 5){}',
    },
    '3' : {
        'ques' : 'How do you call a function named setTime?',
        'ans1' : 'setTime();',
        'ans2' : 'func setTime();',
        'ans3' : 'call setTime;',
        'ans4' : 'setTime;',
        'ansCor' : 'setTime();',
    },
    '4' : {
        'ques' : 'How to display text in an alert box?',
        'ans1' : 'alt("text");',
        'ans2' : 'alert(+"text"+);',
        'ans3' : 'alert("text");',
        'ans4' : 'show.alert("text");',
        'ansCor' : 'alert("text");',
    },
    '5' : {
        'ques' : 'Which HTML element tag does Javascript code get placed?',
        'ans1' : 'style',
        'ans2' : 'script',
        'ans3' : 'meta',
        'ans4' : 'body',
        'ansCor' : 'script',
    }
};

var userScore = []; 
var currentScore = 0;
var quesNum = 1;

startQuizEl.addEventListener("click", function() {
    setTime();
    WelcomeEl.setAttribute("style", "display: none;");
    javaQuizEl.setAttribute("style", "display: block;");
    var userScoreCheck = JSON.parse(localStorage.getItem("userScore"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (userScoreCheck !== null) {
        userScore = userScoreCheck;
    }
    displayQues();
});

function displayQues(){
    if(quesNum < 6){
        questionEl.textContent = questionObj[quesNum]['ques'];
        answeroneEl.textContent = questionObj[quesNum]['ans1'];
        answertwoEl.textContent = questionObj[quesNum]['ans2'];
        answerthreeEl.textContent = questionObj[quesNum]['ans3'];
        answerfourEl.textContent = questionObj[quesNum]['ans4'];    
    }else{
        javaQuizEl.setAttribute("style", "display: none;");
        highscoreEl.textContent = "You scored: " + currentScore;
        endEl.setAttribute("style", "display: block;");
        secondsLeft = 0;
    }
}

answeroneEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answeroneEl.innerHTML){
        answerAccurracyEl.setAttribute("src", "images/correct.png");
        answerAccurracyEl.setAttribute("style", "display: block; max-width: 20%;");
        currentScore = currentScore + 20;
        quesNum++;
        displayQues();
    } else{
        answerAccurracyEl.setAttribute("src", "images/wrong.png");
        answerAccurracyEl.setAttribute("style", "display: block;");
        secondsLeft = secondsLeft - 15;
    }
    
});

answertwoEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answertwoEl.innerHTML){
        answerAccurracyEl.setAttribute("src", "images/correct.png");
        answerAccurracyEl.setAttribute("style", "display: block; max-width: 20%;");
        currentScore = currentScore + 20;
        quesNum++;
        displayQues();
    } else{
        answerAccurracyEl.setAttribute("src", "images/wrong.png");
        answerAccurracyEl.setAttribute("style", "display: block;");
        secondsLeft = secondsLeft - 15;
    }
    
});

answerthreeEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answerthreeEl.innerHTML){
        answerAccurracyEl.setAttribute("src", "images/correct.png");
        answerAccurracyEl.setAttribute("style", "display: block; max-width: 20%;");
        currentScore = currentScore + 20;
        quesNum++;
        displayQues();
    } else{
        answerAccurracyEl.setAttribute("src", "images/wrong.png");
        answerAccurracyEl.setAttribute("style", "display: block;");
        secondsLeft = secondsLeft - 15;
    }
    
});

answerfourEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answerfourEl.innerHTML){
        answerAccurracyEl.setAttribute("src", "images/correct.png");
        answerAccurracyEl.setAttribute("style", "display: block; max-width: 20%;");
        currentScore = currentScore + 20;
        quesNum++;
        displayQues();
    } else{
        answerAccurracyEl.setAttribute("src", "images/wrong.png");
        answerAccurracyEl.setAttribute("style", "display: block; ");
        secondsLeft = secondsLeft - 15;
    }
    
});

var secondsLeft = 90;
function setTime() {
    timeEl.textContent = secondsLeft;
    var timerInterval = setInterval(function() { 
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        javaQuizEl.setAttribute("style", "display: none;");
        highscoreEl.textContent = "You scored: " + currentScore;
        endEl.setAttribute("style", "display: block;");
      }
  
    }, 1000);
}

function storeUserScore(){
    localStorage.setItem("userScore", JSON.stringify(userScore));
    highscore();
}

submitScoreEl.addEventListener("click", function() {

    var indexRepeat = "";
    for (var i = 0; i < userScore.length; i++){
        if(userScore[i][0].includes(userInput.value.trim())){
            indexRepeat = i; 
        }
    }
    if (indexRepeat !== ""){
        userScore[indexRepeat][1] = currentScore;
    }else{
        userScore.push([userInput.value.trim(), currentScore])
    }
    storeUserScore();
});

function highscore(){
    endEl.setAttribute("style", "display: none;");
    highscoreboardEl.setAttribute("style", "display: block;");
    for (var i = 0; i < userScore.length; i++){
        var tag = document.createElement("li");
        tag.textContent = userScore[i][0] + " - " + userScore[i][1];
        tag.setAttribute("style", "font-size: 20px; font-family: 'Lora', serif;")
        highscoreListEl.appendChild(tag);
    }
}

clearcoreboardEl.addEventListener("click", function() { 
    window.localStorage.clear();
    userScore = [];
    highscoreListEl.innerHTML = "";
    highscore();
});

retakeEl.addEventListener("click", function() { 
    location.reload();
});
