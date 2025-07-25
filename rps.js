let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! Try again.")
        playRound(getHumanChoice, computerChoice);
    }
    else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.")
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissors.")
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.")
            humanScore++;
        }
        else {
            console.log("You lose! Scissors beats Paper.")
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats Scissors.")
            computerScore++;
        }
        else {
            console.log("You win! Scissors beats Paper.")
            humanScore++;
        }
    }
}

function getComputerChoice() {
    let randNum = Math.random();

    if (randNum >= 0.667) {
        return "rock";
    }
    else if (randNum >= 0.333 && randNum < 0.667) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    return toLowerCase(prompt("Please enter Rock, Paper, or Scissors: "));
}