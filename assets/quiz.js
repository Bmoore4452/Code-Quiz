var card = document.getElementById("card");
var clickBtn = document.getElementById("button");
var timerElement = document.querySelector("#countdown");
var index = 0;
var countdown = 60;
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

    var correct = document.querySelector("#button0");

    // prevents loop from looking for another question after final element of the question
    btn.addEventListener("click", function () {
      if (index < quizQuestions[i].answers.length) {
        click();
      }
      console.log(quizQuestions[index - 1].answers[0]);
    });
    card.append(btn);
  }
  //   var correct = quizQuestions[index].answers[0];
  // Sets button with id of button0 to correct and listens for click to confirm correct click
  //   var correct = document.querySelector("#button0");
  //   correct === "correct";
  //   correct.addEventListener("click", function () {
  //     if (!correct) {
  //         countdown = countdown - 3;
  //     }
  //   });
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

startGame();
