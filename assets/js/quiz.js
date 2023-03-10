var card = document.getElementById("card");
var clickBtn = document.getElementById("button");
var timerElement = document.querySelector("#countdown");
var countdown = 60;
var count = 0;
var index = 0;
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
    correctAnswer: "Baltimore Ravens",
  },
  {
    question: "Who won the Super Bowl last year?",
    answers: [
      "Los Angeles Rams",
      "Tampa Bay Buccaneers",
      "New Orleans Saints",
      "Cincinnati Bengals",
    ],
    correctAnswer: "Los Angeles Rams",
  },
  {
    question: 'What year did the "Fat Boys" break up?',
    answers: ["1991", "2015", "1970", "2002"],
    correctAnswer: "1991",
  },
  {
    question: '"Happy ____ , Happy Life"',
    answers: ["Wife", "Birthday", "Dog", "Kids"],
    correctAnswer: "Wife",
  },
  {
    question: "How much was this boot camp?",
    answers: ["$10,000", "$200", "$3,000", "$4,000"],
    correctAnswer: "$10,000",
  },
];

var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

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
  p.textContent = quizQuestions[count].question;

  // append to the card
  card.append(p);

  // for loop to create, add text to, and append the buttons
  for (var i = 0; i < quizQuestions[count].answers.length; i++) {
    // creates the button
    var btn = document.createElement("button");

    // adds the text from the answers key Array
    btn.textContent = quizQuestions[count].answers[i];

    // gives each button an id and data type
    btn.setAttribute("id", "button" + i);
    // btn.setAttribute("value", quizQuestions[index].answers[i]);

    // var correct = document.querySelector("#button0");

    // prevents loop from looking for another question after final element of the question
    btn.addEventListener("click", clickButton);
    card.append(btn);
  }
}

// Checks for the corrects answer
function clickButton() {
  if (this.textContent !== quizQuestions[count].correctAnswer) {
    countdown -= 3;
    timerElement.textContent = countdown;
  }

  count++;

  // checks if the last question has been answer and at the end of the game runs the gameOver function
  if (index === quizQuestions[index].answers.length) {
    gameOver();
  } else {
    click();
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
      gameOver();
    }
  }, 1000);
}

function click() {
  renderQuestion();
  index++;
}

function printScores() {
  var highScore = document.createElement("h2");
  highScores.forEach((element) => {
    highScore.textContent = `${element.name} ${element.score}`;
    card.append(highScore);
  });
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
  p.textContent =
    "Game Over! Please enter your name! Click High Scores to see all scores";
  submit.textContent = "Submit!";
  restart.textContent = "Restart";

  submit.addEventListener("click", function (event) {
    event.preventDefault();
    var highName = document.querySelector("#name").value;

    var obj = {
      name: highName,
      score: countdown,
    };
    highScores.push(obj);

    localStorage.setItem("highscores", JSON.stringify(highScores));

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

// Prints all of the high scores to the screen from local storage
function allScores() {
  var highScoresPage = document.getElementById("all-scores");
  highScoresPage.addEventListener("click", function (event) {
    card.innerHTML = "";
    clearInterval(time);
    var highTitle = document.createElement("h1");
    highTitle.textContent = "High Scores";
    highTitle.style.textDecoration = "underline";
    card.append(highTitle);
    highScores.forEach((element) => {
      var highScore = document.createElement("h4");
      highScore.textContent = `${element.name} ${element.score}`;
      card.append(highScore);
    });
    var restart = document.createElement("button");
    restart.setAttribute("id", "restart");
    restart.textContent = "Restart";
    card.append(restart);
    restart.addEventListener("click", function (event) {
      init();
    });
  });
}

startGame();
allScores();
