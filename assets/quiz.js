var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".countdown");
var time;
var countdown;
var answers;
var getPara = document.querySelector("#question");
var highScores;
var score;
var correctAnswer = 0;


function startGame() {
    var elem = document.getElementById("start-button");
    elem.parentNode.removeChild(elem);
    questionOne();
}

function questionOne(){
    document.getElementsByClassName(".start-button").innerHTML;
    document.getElementById("question").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin non ante malesuada, varius massa sollicitudin, faucibus lacus. Donec at varius.";
    
}

function startTime() {
    countdown = 60;
    time = setInterval(function () {
        countdown--;
        timerElement.textContent = countdown;
        if (countdown === 0) {
            // Clears interval
            clearInterval(time);
            // countdown = 60;
        }
    }, 1000);
}
console.log(countdown);

startButton.addEventListener("click", startTime);
startButton.addEventListener("click", startGame);

