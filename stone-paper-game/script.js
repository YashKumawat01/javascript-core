const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");

const resultText = document.querySelector("#result");
const roundInfo = document.querySelector("#round-info");
const resetBtn = document.querySelector("#reset-btn");


let userScore = 0;
let compScore = 0;
let gameOver = false;

const choices = ["stone", "paper", "scissors"];

/* -------------------- Computer Choice -------------------- */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* -------------------- Determine Winner -------------------- */
function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return "draw";
    }

    if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "user";
    } else {
        return "computer";
    }
}

/* -------------------- Play One Round -------------------- */
function playGame(userChoice) {

    if (gameOver) return;

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    // Show choices
    roundInfo.innerText = `You chose: ${userChoice} | Computer chose: ${computerChoice}`;

    if (result === "user") {
        userScore++;
        userScoreElement.innerText = userScore;
        resultText.innerText = "You Win This Round!";
    } 
    else if (result === "computer") {
        compScore++;
        compScoreElement.innerText = compScore;
        resultText.innerText = "Computer Wins This Round!";
    } 
    else {
        resultText.innerText = "It's a Draw!";
    }

    // First to 5 wins
    if (userScore === 5) {
        endGame("user");
    } 
    else if (compScore === 5) {
        endGame("computer");
    }
}

/* -------------------- End Game -------------------- */
function endGame(winner) {
    gameOver = true;

    if (winner === "user") {
        resultText.innerText = "You Won The Game!";
    } else {
        resultText.innerText = "Computer Won The Game!";
    }
}

/* -------------------- Reset Game -------------------- */
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    userScore = 0;
    compScore = 0;
    gameOver = false;

    userScoreElement.innerText = 0;
    compScoreElement.innerText = 0;
    resultText.innerText = "Play Your Move";
    roundInfo.innerText = "";
}

/* -------------------- Event Listeners -------------------- */
rockBtn.addEventListener("click", () => {
    playGame("stone");
});

paperBtn.addEventListener("click", () => {
    playGame("paper");
});

scissorBtn.addEventListener("click", () => {
    playGame("scissors");
});
