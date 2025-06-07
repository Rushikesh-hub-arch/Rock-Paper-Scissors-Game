let userScore = 0;
let compScore = 0;

const chocies = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    // rock, paper, scissor
    const options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random() * 3);
    return options[randInd]
};

// Draw Game
const drawGame = () => {
    msg.innerText = "Game Draw"
    msg.style.backgroundColor = "black";

};

const showWin = (userWin, userChoice, CompChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${CompChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";

    }
}

const playGame = (userChoice) => {
    //computer choice
    const CompChoice = genCompChoice();

    if (userChoice === CompChoice) {
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = CompChoice === "scissors" ? false : true
        } else {
            // rock, paper
            userWin = CompChoice === "rock" ? false : true
        }

        showWin(userWin, userChoice, CompChoice);
    }
};

chocies.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
