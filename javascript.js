game()

// create function game() that calls playRound()
function game() {
    //debugger
    let userScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Let's play Rock, Paper, Scissors.")
        if (testPlayerSelection(playerSelection)) {

        } else {
            playerSelection = prompt("Invalid entry! Please enter Rock, Paper, or Scissors to play!");
        }
        console.log("comp: " + computerSelection)
        console.log("user: " + playerSelection)
        let roundResult = playRound(playerSelection,computerSelection)
        
        if (roundResult == "userwin") {
            userScore +=1;
            console.log("You win this round!");
        } else {
            computerScore +=1;
            console.log("You lose this round!");
        }
        if (i < 4) {
        console.log(`Current score is User: ${userScore} to Computer: ${computerScore}`);
        } else if (userScore > computerScore) {
            console.log(`Game over! You Win! Final score is User: ${userScore} to Computer: ${computerScore}`);
        } else {
            console.log(`Game over! You Lose :( Final score is User: ${userScore} to Computer: ${computerScore}`);
        }

    }
    //return "gameover"
}

// getComputerChoice randomly picks rock, paper, or scissor and stores in computerSelection
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum <= 1/3) {
        return "rock";
    } else if (randomNum <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}
//  use if statement to test if entry is valid
function testPlayerSelection(playerSelection) {
    var regex = /^(rock|paper|scissors)$/i;
    if (regex.test(playerSelection)) {
        return true
    } else {
        
        return false
    }
}
    // ask for user input and store choice in variable playerSelection
// create function playRound with inputs playerSelection and computerSelection
//  find winner, return result i.e. "You Lose! Paper beats Rock"
//  print result

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "rock") {
            console.log("tie!");
            return tie();
        } else if (computerSelection == "paper") {
            return "userloss";
        } else {
            return "userwin";
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "rock") {
            return "userwin";
        } else if (computerSelection == "paper") {
            console.log("tie!");
            return tie();
        } else {
            return "userloss";
        }
    } else {
        if (computerSelection == "rock") {
            return "userloss";
        } else if (computerSelection == "paper") {
            return "userwin";
        } else {
            console.log("tie!");
            return tie();
        }
    }
}

function tie() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Tie! Shoot again!");
    testPlayerSelection(playerSelection);
    console.log("comp: " + computerSelection);
    console.log("user: " + playerSelection);
    return playRound (playerSelection, computerSelection);
}


//  loop through the round 5 times
//   store result in playerScore and computerScore
//   print result and score at the end of each round
//  print final score