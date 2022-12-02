// getComputerChoice randomly picks rock, paper, or scissor and stores in computerSelection

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}
const computerSelection = getComputerChoice();
console.log(computerSelection)

// ask for user input and store choice in variable playerSelection
let playerSelection = prompt("Let's play Rock, Paper, Scissors.")
//  use if statement to test if entry is valid
testPlayerSelection()
function testPlayerSelection(){
    var regex = /^(rock|paper|scissors)$/i;
    if (regex.test(playerSelection)) {

    } else {
        playerSelection = prompt("Invalid entry! Please enter Rock, Paper, or Scissors to play!");
        testPlayerSelection();
    }
}

// creat function playRound with inputs playerSelection and computerSelection
//  find winner, return result i.e. "You Lose! Paper beats Rock"
//  print result

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "rock") {
            return "Tie!"
        } else if (computerSelection == "paper") {
            return "You Lose! Paper covers rock."
        } else {
            return "You Win! Rock smashes scissors."
        }
    } else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "rock") {
            return "You Win! Paper covers rock."
        } else if (computerSelection == "paper") {
            return "Tie!"
        } else {
            return "You lose! Scissors cuts paper."
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose! Rock smashes scissors."
        } else if (computerSelection == "paper") {
            return "You win! Scissors cuts paper."
        } else {
            return "Tie!"
        }
    }
}
console.log(playRound(playerSelection,computerSelection))

// create function game() that calls playRound()
//  loop through the round 5 times
//   store result in playerScore and computerScore
//   print result and score at the end of each round
//  print final score