playGame();

function playGame() {
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
                console.log("Your Score: " + humanScore);
                console.log("Computer Score: " + computerScore);
            }
            else {
                console.log("You win! Rock beats Scissors.")
                humanScore++;
                console.log("Your Score: " + humanScore);
                console.log("Computer Score: " + computerScore);
            }
        }
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.")
                humanScore++;
                console.log("Your Score: " + humanScore);
                console.log("Computer Score: " + computerScore);
            }
            else {
                console.log("You lose! Scissors beats Paper.")
                computerScore++;
                console.log("Your Score: " + humanScore);
                console.log("Computer Score: " + computerScore);
            }
        }
        else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.")
                computerScore++;
                console.log("Your Score: " + humanScore);
                console.log("Computer Score: " + computerScore);
            }
            else {
                console.log("You win! Scissors beats Paper.")
                humanScore++;
                console.log("Your Score: " + humanScore);
                console.log("Computer Score: " + computerScore);
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        console.log("YOU WIN!")
    }
    else {
        console.log("YOU LOSE")
    }
    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
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
    return prompt("Please enter Rock, Paper, or Scissors: ").toLowerCase();
}