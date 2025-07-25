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