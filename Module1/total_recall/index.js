
// I. Variables & Data Types
// A. Q + A
//1. Let or Const 2. with let 3. create new variable with new name = old variable 4. declare=create new var name assign=give var definition define=declare and assign 5. make a plan for what you will code 6. Plan for as much time as you need  
// B. Strings

let firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable; //store variable??
// console.log(secondVariable);
secondVariable = "This is a string"; 

// console.log(firstVariable);
// console.log(secondVariable);

let myName = "Shoshana";
// console.log(`Hello my name is ${myName}`);


// C. Booleans 
//should all log true in console

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

//   console.log(a < b);
//   console.log(c !== d);
//   console.log('Kevin' === 'Kevin');
  // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false && false && false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log((a + b) === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log((a * a) === d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');


// D. The Farm
let animal = "cow"; 
animal = "cat";

if (animal === "duck") {
    console.log("Quack");
}   else {
    console.log("Hey! You're not a duck!");
}

// E. Driver's Ed

const age = 16;

if(age >= 16) {
    console.log("Here are the keys!");
} else if (age < 16) {
    console.log("Sorry, you're too young.");
} 

//_____________________________________________________________






// II. Loops
// A. The Basics

//loop 0-10
// for (let i = 0; i <= 10; i++) {
//     console.log(i);    
// }

//loop 10-400
// for(let i = 10; i <= 400; i++){
//     console.log(i);
// }

//loop print every 3rd number 12-4000

// for(let i = 12; i <= 4000; i += 3){
//     console.log(i);
// }

// B. Get even

//print number 1-100, message next to even numbers "-- is an even number"

// for(let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is an even number`);
//     } else {
//         console.log(i);
//     }
// }


// C. Give me Five

//print 1-100, multiple of 5, multiple of 3
//  for(let i = 0; i <= 100; i++){
//     if(i % 5 === 0 ){
//         console.log(`${i} High five!`);
//     } if (i % 3 === 0) {
//         console.log(`I found a ${i}. Three is a crowd`);
//     }   
//  } 

// D. Savings account


//bank_account = sum of number 1-10

// bank_account = 0;

// for(let i = 1; i <= 100; i++) {
//     bank_account += i * 2;

// }
//  console.log(bank_account);

//_____________________________________________________________


// III. Arrays & Control Flow
// A. Talk about it:
//1. items 2. yes 3. hobbies, movie list, book list

// B. Easy Does It
const quotes = ["If opportunity doesn't knock build a door", "If you dream you can do it", "The road to success is always under construction"];
// console.log(quotes);

// C. Accessing elements
// const randomThings = [1, 10, "Hello", true];
// console.log([1]);

//splice
// randomThings.splice(2, 1, "World");
// console.log(randomThings);


// D. Change values

// ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// console.log(ourClass[2]);

// ourClass.splice(4,1, "Octocat");
// ourClass.push("Cloud City");

// console.log(ourClass);

// E. Mix It Up

// const myArray = [5, 10, 500, 20]

// myArray.push("Aegon", "Valerian");
// myArray.shift(5);
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse();
// //yes, mutate = changing the array, reverse = reverses the array
// console.log(myArray);

// F. Biggie Smalls

let integer = 25;
integer = 100;

// if(integer < 100) {
//     console.log("little number");
// } else if (integer >= 100){
//     console.log("big number");
// }

// G. Monkey in the Middle
integer = 11

// if(integer < 5){
//     console.log("little number");
// } else if(integer > 10){
//     console.log("big number");
// } else {
//     console.log("monkey");
// }

// H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];


//_____________________________________________________________








// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________