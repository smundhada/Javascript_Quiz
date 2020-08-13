var startQuizEl = document.getElementById("start-quiz");
var WelcomeEl = document.querySelector(".Welcome");
var javaQuizEl = document.querySelector(".javaQuiz");
var questionEl = document.getElementById("question");
var answeroneEl = document.getElementById("answerone");
var answertwoEl = document.getElementById("answertwo");
var answerthreeEl = document.getElementById("answerthree");
var answerfourEl = document.getElementById("answerfour");
var timeEl = document.querySelector(".time");
var endEl = document.querySelector(".End");

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

var quesNum = 1;

startQuizEl.addEventListener("click", function() {
    setTime();
    WelcomeEl.setAttribute("style", "display: none;");
    javaQuizEl.setAttribute("style", "display: block;");
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
        endEl.textContent = "End of Quiz";
        javaQuizEl.setAttribute("style", "display: none;");
        endEl.setAttribute("style", "display: block;");
    }
}

answeroneEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answeroneEl.innerHTML){
        alert("CORRECT");
        quesNum++;
        displayQues();
    } else{
        alert("INCORRECT");
        secondsLeft = secondsLeft - 15;
    }
    
});

answertwoEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answertwoEl.innerHTML){
        alert("CORRECT");
        quesNum++;
        displayQues();
    } else{
        alert("INCORRECT");
        secondsLeft = secondsLeft - 15;
    }
    
});

answerthreeEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answerthreeEl.innerHTML){
        alert("CORRECT");
        quesNum++;
        displayQues();
    } else{
        alert("INCORRECT");
        secondsLeft = secondsLeft - 15;
    }
    
});

answerfourEl.addEventListener("click", function() {
    if (questionObj[quesNum]['ansCor'] === answerfourEl.innerHTML){
        alert("CORRECT");
        quesNum++;
        displayQues();
    } else{
        alert("INCORRECT");
        secondsLeft = secondsLeft - 15;
    }
    
});

var secondsLeft = 90;
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert("TIME UP");
        endEl.textContent = "End of Quiz";
        javaQuizEl.setAttribute("style", "display: none;");
        endEl.setAttribute("style", "display: block;");
      }
  
    }, 1000);
}


