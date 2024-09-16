const labelMessage = document.querySelector(".message");
const labelNumber = document.querySelector(".number");
const actScore = document.querySelector(".score");
const inputGuess = document.querySelector(".guess");
const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");
const bdy = document.querySelector("body");

///////////////////////////////////////////////////////////////////////
let randomNumber;
generateNumber();
function generateNumber() {
    randomNumber = Math.trunc(Math.random() * 20);
    labelMessage.textContent = 'Start guessing...';
    bdy.style.background = "#222";
}

againButton.addEventListener('click', generateNumber);

///////////////////////////////////////////////////////////////////////
let score = parseInt(actScore.textContent);

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
        youWin();
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
}

function youLose() {
    actScore.textContent = "0";
    bdy.style.background = "red";
}