//Prompt user for input
var userName = prompt("What's your name?");

//Prompt user for favorite color

var favColor = prompt("Hello " + userName + "!" + " What's your favorite color?");

//prompt user for favorite food

var favFood = prompt(`What's you're favorite food?`);

//ask for number\
var favNum = prompt(`${userName} what's your favorite number?`);

//alert user with funny message

//alert(userName + " don't eat " + favColor + " " + favFood + "!");

//template string

alert(`${userName} don't eat ${favNum} ${favColor} ${favFood} !`);