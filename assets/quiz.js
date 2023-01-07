var startScreen = [
    {
        instructions: 'Please click the below to start the game.',
        button: 'Start Game'
    }
];

var quizContent = [
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula.',
        correct: 'Right Answer',
        wrongOne: 'Wrong One',
        wrongTwo: 'Wrong Two',
        wrongThree: 'Wrong Three'
    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula.',
        correct: 'Right Answer',
        wrongOne: 'Wrong One',
        wrongTwo: 'Wrong Two',
        wrongThree: 'Wrong Three'

    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula.',
        correct: 'Right Answer',
        wrongOne: 'Wrong One',
        wrongTwo: 'Wrong Two',
        wrongThree: 'Wrong Three'

    },
    {
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula.',
        correct: 'Right Answer',
        wrongOne: 'Wrong One',
        wrongTwo: 'Wrong Two',
        wrongThree: 'Wrong Three'

    },
];

var para = document.createElement('p')
var startButton = document.createElement('button');

function startGameScreen(){
    para.innerHTML = startScreen[0].instructions;
    document.getElementById('question-area').appendChild(para);
    startButton.innerHTML = startScreen[0].button;
    document.getElementById('question-area').appendChild(startButton);
}

startGameScreen();

document.getElementsByClassName('card');

var timer = document.getElementById('countdown');

