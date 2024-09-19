const labelMessage = document.querySelector(".message");
const labelNumber = document.querySelector(".number");
const actScore = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const inputGuess = document.querySelector(".guess");
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const bdy = document.querySelector("body");

///////////////////////////////////////////////////////////////////////

let randomNumber;
let hsNum = 0;

// Start the round by generating a random number
generateNumber();
// Generate an integer between 1-20
function generateNumber() {
    randomNumber = Math.trunc(Math.random() * 20 + 1);
}

// Reset game
function newGame() {
    generateNumber()
    labelMessage.textContent = 'Start guessing...';
    bdy.style.background = "#222";
}

againButton.addEventListener('click', newGame);

///////////////////////////////////////////////////////////////////////

let score = parseInt(actScore.textContent);

// Check if current score is 0
function checkScoreZero() {
    if (score === 0) {
        youLose();
    }
}

function plusScore() {
    score++;
    actScore.textContent = score.toString();
    checkScoreZero();
}

function minusScore() {
    score--;
    actScore.textContent = score.toString();
    checkScoreZero();
    resetScreen()
}

function checkHighScore(score) {
    if (score > hsNum) {
        hsNum = score;
        highscore.textContent = hsNum;
    }
}

///////////////////////////////////////////////////////////////////////

function checkResult() {
    let inpGuess = parseInt(inputGuess.value);

    if (score === 0) {
        checkScoreZero();
    } else if (inpGuess === randomNumber) {
        labelMessage.textContent = 'Du har gættet tallet!';
        labelNumber.textContent = randomNumber;
        plusScore();
        checkHighScore(score)
        youWin();
    } else if (inpGuess === (randomNumber - 1) || inpGuess === (randomNumber + 1)) {
        labelMessage.textContent = 'Tæt på'
        minusScore()
        youreClose()
    } else if (inpGuess > randomNumber) {
        labelMessage.textContent = 'For højt';
        minusScore();
    } else if (inpGuess < randomNumber) {
        labelMessage.textContent = 'For lavt';
        minusScore();
    }
}

checkButton.addEventListener('click', checkResult);

///////////////////////////////////////////////////////////////////////

function youWin() {
    bdy.style.background = "green";
    generateNumber()
}

function youreClose() {
    bdy.style.background = "orange"
}

function youLose() {
    actScore.textContent = "0";
    bdy.style.background = "red";
}

///////////////////////////////////////////////////////////////////////

function resetScreen() {
    labelNumber.textContent = "?";
    bdy.style.background = "#222";
}