// console.log('Rock paper scissors Game:');

//Class code

const choices = ["rock", "paper", "scissors"];
const randomNum = Math.floor(Math.random() * 3);
const computerChoice = choices[randomNum];

let userChoice = "";
let isNotValid = true;

while (isNotValid) {
    userChoice = prompt("Please choose rock, paper, or scissors");
    userChoice = userChoice.trim().toLowerCase(); //trim takes off extra spaces 

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        isNotValid = false;  //loop ends when isNotValid is false 
    }
}

console.log(`User Choice: ${userChoice} || Computer Choice ${computerChoice}`);

if (userChoice === computerChoice) {
    console.log("It's a tie!")
} else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("You score!");
} else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("You score!");
} else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("You score!");
} else {
    console.log("Computer score!");
}











//my code
// let userChoice = prompt('Choose rock, paper or scissors');

// let computerChoice = Math.floor(Math.random() * 3) + 1;
// console.log(computerChoice);

// if (computerChoice = 1) {
//     computerChoice = "rock";
// } else if (computerChoice = 2) {
//     computerChoice = "paper"; 
// } else {
//     computerChoice = "scissors";
// }

// console.log(computerChoice);
// function rockPaperScissors() 