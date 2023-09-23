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

    // function game() {
    //     /**
    //      * A game is successfully completed when the player or computer reaches 5 wins
    //      */
    //     let playerCounter = 0;
    //     let computerCounter = 0;

    //     while (playerCounter < 5 && computerCounter < 5) {
    //         // then the game should continue on
    //         const computerChoice = getComputerChoice(choices);
    //         const userChoice = playerChoice();
            
    //         const result = playSingleRound(userChoice, computerChoice);
    //         console.log(result);

    //         if (result.includes("YOU WIN!")) {
    //             playerCounter++;
    //         } else if (result.includes("YOU LOSE!")) {
    //             computerCounter++;
    //         }
            
    //         console.log(`Player Score: ${playerCounter}`);
    //         console.log(`Computer Score: ${computerCounter}`);
    //     }

    //     if (playerCounter >= 5) {
    //         console.log("PLAYER WINS THE GAME!")
    //     } else if (computerCounter >= 5) {
    //         console.log("COMPUTER WINS THE GAME!")
    //     }
    //     console.log("GOOD GAME!");
    // }
    
    // TESTING OUTPUTS
    //game();
    
// END rockpaperscissors.js
