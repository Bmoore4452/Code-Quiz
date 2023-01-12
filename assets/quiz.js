var card = document.getElementById("card");
var clickBtn = document.getElementById("button");
var timerElement = document.querySelector("#countdown");
var index = 0;
var countdown = 60;
var count = 0;
var startScreen = [
  {
    instructions: "Please click the below to start the game.",
    button: "Start Game",
  },
];

var quizQuestions = [
  {
    question: "What team does Lamar Jackson play for?",
    answers: [
      "Baltimore Ravens",
      "Seattle Seahawks",
      "Chicago Bulls",
      "Boston Bruins",
    ],
  },
  {
    question: "Who won the Super Bowl last year?",
    answers: [
      "Los Angeles Rams",
      "Tampa Bay Buccaneers",
      "New Orleans Saints",
      "Cincinnati Bengals",
    ],
  },
  {
    question: 'What year did the "Fat Boys" break up?',
    answers: ["1991", "2015", "1970", "2002"],
  },
  {
    question: '"Happy ____ , Happy Life"',
    answers: ["Wife", "Birthday", "Dog", "Kids"],
  },
  {
    question: "How much was this boot camp?",
    answers: ["$10,000", "$200", "$3,000", "$4,000"],
  },
];

highScores = [];

function startGame() {
  var p = document.createElement("p");

  p.textContent = startScreen[0].instructions;

  card.append(p);

  var btn = document.createElement("button");
  btn.textContent = startScreen[0].button;

  // render the first question
  btn.addEventListener("click", renderQuestion);

  // Start the timer on first click
  btn.addEventListener("click", startTime);
  btn.setAttribute("id", "start-button");
  card.append(btn);
}

function renderQuestion() {
  // erase previous card
  card.innerHTML = "";

  // create paragarah tag
  var p = document.createElement("p");

  // add the content from the question key in the quizQuestions Object Array
  p.textContent = quizQuestions[index].question;

  // append to the card
  card.append(p);

  // for loop to create, add text to, and append the buttons
  for (var i = 0; i < quizQuestions[index].answers.length; i++) {
    // creates the button
    var btn = document.createElement("button");

    // adds the text from the answers key Array
    btn.textContent = quizQuestions[index].answers[i];

    // gives each button an id and data type
    btn.setAttribute("id", "button" + i);
    btn.setAttribute("data-answer", "correct" + i);

    // var correct = document.querySelector("#button0");

    // prevents loop from looking for another question after final element of the question
    btn.addEventListener("click", function (event) {
      var element = event.target;
      var correct = element.getAttribute("data-answer");
      if (
        correct === "correct0" &&
        index < quizQuestions[index].answers.length
      ) {
        click();
        var reaction = document.createElement("p");
        reaction.textContent = "correct";
        reaction.setAttribute("id", "reaction");
        card.appendChild(reaction);
        console.log("correct answer");
      } else if (
        correct !== "correct0" &&
        index < quizQuestions[index].answers.length
      ) {
        countdown = countdown - 3;
        click();
        var reaction2 = document.createElement("p");
        reaction2.textContent = "wrong";
        reaction2.setAttribute("id", "reaction2");
        card.appendChild(reaction2);
        console.log("wrong answer");
      }
      if (count === 4 || countdown === 0) {
        gameOver();
      }
      count++;
      console.log(index);
      console.log(count);
    });
    card.append(btn);
  }
}

function startTime() {
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

function click() {
  index++;
  renderQuestion();
}

function printScores() {
  var highName = localStorage.getItem("name");
  var score = localStorage.getItem("score");

  var p = document.createElement("div");
  var p2 = document.createElement("div");
  p.setAttribute("id", "high-scores");
  p2.setAttribute("id", "high-scores");
  p.textContent = highName;
  p2.textContent = score;

  card.appendChild(p);
  card.append(p2);
}

function init() {
  card.innerHTML = "";
  index = 0;
  countdown = 60;
  count = 0;
  startGame();
  timerElement.textContent = countdown;
}

function gameOver() {
  clearInterval(time);
  // erase previous card
  card.innerHTML = "";
  // create tags
  var p = document.createElement("p");
  var name = document.createElement("input");
  name.setAttribute("id", "name");
  var submit = document.createElement("button");
  submit.setAttribute("id", "submit");
  name.type = "text";
  name.id = "name";
  var restart = document.createElement("button");
  restart.setAttribute("id", "restart");

  // add the content from the question key in the quizQuestions Object Array
  p.textContent = "Game Over! Please enter your name!";
  submit.textContent = "Submit!";
  restart.textContent = "Restart";

  submit.addEventListener("click", function (event2) {
    event2.preventDefault();
    var highName = document.querySelector("#name").value;
    localStorage.setItem("name", highName);
    localStorage.setItem("score", countdown);
    console.log(highName);
    printScores();
  });

  restart.addEventListener("click", function (event) {
    init();
  });

  // append to the card
  card.append(p);
  card.appendChild(name);
  card.append(submit);
  card.append(restart);
}

startGame();
