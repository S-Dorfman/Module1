// // iterator; condition; incrementor  
for (let i = 10; i >= 1; i--) {
    // console.log(i);   
}

for (let i = 0; i <= 10; i = i + 2) {
//     console.log(i);
}

for (let i = 1; i <= 9; i = i + 2) {
//     console.log(i);
}
    
for (let i = 2; i <=10; i = i + 2) {
//     console.log(i);
}

for (let i = 1; i <= 9; i = i + 2 ){

}

for (let i = 6; i <= 60; i = i + 3) {
    // console.log(i);
}

let i = "#";

for (let i = 1; i <= 7; i = i + 1) {
//     console.log("#");
}

let string = "";

for (let i = 1; i <= 5; i++) {
    
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  
  string += "\n";
}
// console.log(string);

for (let i = 1; i <= 20; i++) {
    // console.log(i);

    if (i % 2 === 0) {
        // console.log(i + " is even");

    } else if (i % 2 !== 0) {
        // console.log(i + " is odd");
    }
}

// Nested loop
for (let i = 0; i <= 3; i ++) {
    // console.log(i + "Outer loop");

    for (let j = 0; j <= 3; j++){
        // console.log(j, " Inner loop");
    }
}

// While Loops
let counter = 0;

while(counter <= 5) {
    console.log(counter);
    counter++
}

// Countdown

let countdown = 10;

while(countdown >= 0) {
    console.log(countdown);

    countdown--
}

// Lab 1

let num = 3;

while(num < 35){
    console.log(num);

    num +=3
}

// Lab 2

let integer = 5;

while (integer < 100){
    console.log(integer);

    integer += 5;
}

//Lab3: Using a while loop print integers between 0 and 20. 
// All numbers divisible by 2 should be multiplied by 3 before they are output. 
// All other integers should not be output.

let number = 0;

while (number <= 20){
    
        if(number % 2 === 0) {
            number1 = number * 3;
            console.log(number1);
        }

        number1 ++;
}
