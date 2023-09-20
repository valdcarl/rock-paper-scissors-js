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
        return choices[randIndex].toLowerCase();
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
        // should consider the possibility that both player and computer select the same choice
        if (playerSelection == computerSelection) {
            return "DRAW!";
        }
        // only a few potential outcomes exist, rock beats paper, paper beats rock, scissors beats paper
        else if (computerSelection == 'rock') {
            return (playerSelection == 'paper') ? "YOU WIN!" : "YOU LOSE!";
        }
        else if (computerSelection == 'paper') {
            return (playerSelection == 'scissors') ? "YOU WIN!" : "YOU LOSE!";
        }
        else if (computerSelection == 'scissors') {
            return (playerSelection == 'rock') ? "YOU WIN!" : "YOU LOSE!";
        }
    }
    
    // TESTING OUTPUTS
    const computerChoice = getComputerChoice(choices);
    console.log(computerChoice);
    const userChoice = playerChoice();
    console.log(userChoice);

    const result = playSingleRound(userChoice, computerChoice);
    console.log(result);
    
// END rockpaperscissors.js
