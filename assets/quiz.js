var card = document.getElementById("card");
var clickBtn = document.getElementById("button");
var index = 0;

var startScreen = [
  {
    instructions: "Please click the below to start the game.",
    button: "Start Game",
  },
];

var quizQuestions = [
  {
    question:
      "What is today's date?",
    answers: ["Right", "Wrong", "Wrong", "Wrong"],
  },
  {
    question:
      "Who won the Super Bowl last year?",
    answers: ["Right", "Wrong", "Wrong", "Wrong"],
  },
  {
    question:
      "When did the Fat Boys bereak up?",
    answers: ["Right", "Wrong", "Wrong", "Wrong"],
  },
  {
    question:
      "Happy ____ , Happy Life",
    answers: ["Right", "Wrong", "Wrong", "Wrong"],
  },
  {
    question:
      "How much was this boot camp?",
    answers: ["Right", "Wrong", "Wrong", "Wrong"],
  },
];

function startGame() {
  var p = document.createElement("p");

  p.textContent = startScreen[0].instructions;

  card.append(p);

  var btn = document.createElement("button");
  btn.textContent = startScreen[0].button;
  btn.addEventListener("click", renderQuestion);
  btn.setAttribute("id", "start-button");
  p.append(btn);
}

function renderQuestion() {
  card.innerHTML = "";
  var p = document.createElement("p");

  p.textContent = quizQuestions[index].question;
  card.append(p);
  for (var i = 0; i < quizQuestions[index].answers.length; i++) {
    var btn = document.createElement("button");
    btn.textContent = quizQuestions[index].answers[i];
    btn.setAttribute("id", "button");
    btn.addEventListener("click", click);
    card.append(btn);
  }
  console.log(index);
}

function click() {
  index++;

  renderQuestion();
}

startGame();
