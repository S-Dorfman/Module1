//================ Task 1 ==============================
// Create a function (rollDice)
// Roll Two "dice" one for the player and one for the computer
// Use one variables for the (player) and one for the (computer)
// (use a random number from 1-6 to represent a dice)

// If the player's dice roll is higher than the computer dice roll;
// PLAYER scores one point
// otherwise, COMPUTER scores one point

// if a player reaches 5 points that player wins the game

//Class Code
// console.log(Math.floor(Math.random() * 6) + 1) 

let playerScore = 0;
let computerScore = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

while(playerScore < 5 && computerScore < 5) {
    const playerRoll = rollDice();
    const computerRoll = rollDice();
    console.log("Player Roll: " + playerRoll);
    console.log("Computer Roll: " + computerRoll);

    if (playerRoll > computerRoll) {
    playerScore += 1;
    console.log("Player Score: " + playerScore);

    } else if (computerRoll > playerRoll)  {
    computerScore += 1;
    console.log("Computer Score: " + computerScore);

    } else if (computerRoll === playerRoll) {
    console.log("It's a draw!");
    }
}

//My Code
// console.log('Roll Dice Game!');

// rollDice()

// function rollDice() {
//     const playerDice = Math.floor(Math.random() * 6) + 1;
//     const computerDice = Math.floor(Math.random() * 6) + 1; 
   
//     console.log(`Player score: ${playerDice}`);
//     console.log(`Computer score: ${computerDice}`);

//     if (playerDice > computerDice){
//         console.log('You Score a point!');
//     } else if (playerDice < computerDice) {
//         console.log('Computer scores a point');
//     } else {
//         console.log("It's a tie both score a point!");
//     }   
// }






















