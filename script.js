let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Draw. Play again.";
    msg.style.backgroundColor = "rgb(170 170 0)";
}

const userWin = (userChoice, compChoice) => {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
}

const compWin = (userChoice, compChoice) => {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } else if (userChoice === "rock" && compChoice === "paper") {
        compWin(userChoice, compChoice);
    } else if (userChoice === "rock" && compChoice === "scissors") {
        userWin(userChoice, compChoice);
    } else if (userChoice === "paper" && compChoice === "rock") {
        userWin(userChoice, compChoice);
    } else if (userChoice === "paper" && compChoice === "scissors") {
        compWin(userChoice, compChoice);
    } else if (userChoice === "scissors" && compChoice === "rock") {
        compWin(userChoice, compChoice);
    } else if (userChoice === "scissors" && compChoice === "paper") {
        userWin(userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})