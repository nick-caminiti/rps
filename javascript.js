const buttonArea = document.querySelector('#buttonArea')

const userSelectionDisplay = document.getElementById("userSelection")
const CompSelectionDisplay = document.getElementById("CompSelection")
const finalMessage = document.getElementById("finalMessage")
const message = document.getElementById("message")
const userScoreDisplay = document.getElementById("userScore")
const compScoreDisplay = document.getElementById("compScore")

let userScore = 0
let computerScore = 0


buttonArea.addEventListener('click', function (e) {
    if (e.target.id == "rock" || e.target.id == "paper" || e.target.id == "scissors") {
        if ((userScore + computerScore) == 5) {
            userScore = 0
            computerScore = 0
            finalMessage.textContent = ''
        }

        let computerChoice = getComputerChoice()
        let roundResult = playRound(e.target.id, computerChoice)
        userSelectionDisplay.textContent = "You picked: " + e.target.id
        CompSelectionDisplay.textContent = "The computer picked: " + computerChoice
        userScoreDisplay.textContent = `Your Score: ${userScore}`;
        compScoreDisplay.textContent =`Computer Score: ${computerScore}`;

        if (roundResult == "userwin") {
            userScore +=1;
            userScoreDisplay.textContent = `Your Score: ${userScore}`;
        } else if (roundResult == "userloss") {
            computerScore +=1;
            compScoreDisplay.textContent =`Computer Score: ${computerScore}`;
        }
        if ((userScore + computerScore) == 5) {
            if (userScore > computerScore) {
            finalMessage.textContent = `Game over! You Win!`;
            } else {
            finalMessage.textContent = `Game over! You Lose :(`;
            }
        }
    }
})
// create function game() that calls playRound()
function playGame() {
    //debugger
    let userScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
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
            return tie();
        } else if (computerSelection == "paper") {
            message.textContent = "You lose this round!"
            return "userloss";
        } else {
            message.textContent = "You win this round!"
            return "userwin";
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "rock") {
            message.textContent = "You win this round!"
            return "userwin";
        } else if (computerSelection == "paper") {
            return tie();
        } else {
            message.textContent = "You lose this round!"
            return "userloss";
        }
    } else {
        if (computerSelection == "rock") {
            message.textContent = "You lose this round!"
            return "userloss";
        } else if (computerSelection == "paper") {
            message.textContent = "You win this round!"
            return "userwin";
        } else {
            return tie();
        }
    }
}

function tie() {
    // let computerSelection = getComputerChoice();
    message.textContent = "Tie! Shoot again!"
    // testPlayerSelection(playerSelection);
    // console.log("comp: " + computerSelection);
    // console.log("user: " + playerSelection);
    // return playRound (playerSelection, computerSelection);
}





//  loop through the round 5 times
//   store result in playerScore and computerScore
//   print result and score at the end of each round
//  print final score