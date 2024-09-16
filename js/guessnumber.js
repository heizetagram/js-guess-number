const labelMessage = document.querySelector(".message");

const labelNumber = document.querySelector(".number");

const actScore = document.querySelector(".score");

const inputGuess = document.querySelector(".guess");

const againButton = document.querySelector(".again");
const checkButton = document.querySelector(".check");

///////////////////////////////////////////////////////////////////////
let randomNumber = 0;
generateNumber();
function generateNumber() {
    randomNumber = Math.trunc(Math.random() * 20);
    labelMessage.textContent = 'Start guessing';
}

againButton.addEventListener('click', generateNumber);

///////////////////////////////////////////////////////////////////////
let score = document.querySelector(".score");
function plusScore() {
    score.value = score++;
    actScore.textContent = score.textContent;
}

///////////////////////////////////////////////////////////////////////

function checkResult() {
    let inpGuess = Number(inputGuess.value);
    if (inpGuess === randomNumber) {
        labelMessage.textContent = 'Du har gættet tallet';
        labelNumber.textContent = randomNumber;
        plusScore();
    } else if (inpGuess > randomNumber) {
        labelMessage.textContent = 'For højt';
        score.value = score--;
    } else if (inpGuess < randomNumber) {
        labelMessage.textContent = 'For lavt';
        score.value = score--;
    }
}

checkButton.addEventListener('click', checkResult);

///////////////////////////////////////////////////////////////////////