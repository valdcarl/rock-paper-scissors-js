// alert("Test rockpaperscissors.js");
// console.log("test success");

/*
 Created by Carlos A. Valdez
*/

const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choices) {
    /**
     * randomly selects an option between 'Rock', 'Paper', or 'Scissors'
     */
    const randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}

function playerChoice() {
    /**
     * prompts the user to select an option between 'Rock', 'Paper', or 'Scissors'
     * effectively removes extra spaces
     * effectively converts string to all lowercase
     */
    let playerChooses = prompt("Please select Rock, Paper, or Scissors").toLowerCase().trim();

    while (playerChooses !== 'rock' && playerChooses !== 'paper' && playerChooses !== 'scissors') {
        playerChooses = prompt("Invalid Option.  Please retry and select Rock, Paper, or Scissors").toLowerCase().trim();
    }
    return playerChooses;
}

function playSingleRound(playerSelection, computerSelection) {
    /**
     * Plays a single round of Rock, Paper, Scissors
     */
    playerSelection = playerChoice();
    computerSelection = getComputerChoice(choices);
    
}

