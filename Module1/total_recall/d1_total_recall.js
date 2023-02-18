
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
// let animal = "cow"; 
// animal = "cat";

// if (animal === "duck") {
//     console.log("Quack");
// }   else {
//     console.log("Hey! You're not a duck!");
// }

// E. Driver's Ed

// const age = 16;

// if(age >= 16) {
//     console.log("Here are the keys!");
// } else if (age < 16) {
//     console.log("Sorry, you're too young.");
// } 

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

// console.log(`Krystyn is rocking that ${kristynsCloset[3]} today`);
// kristynsCloset.splice(6, 0, "raybans"); 
// kristynsCloset[5] = "stained knit hat";

// console.log(kristynsCloset);

// console.log(`Thom is looking smart in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][2]}.`);
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset);

//_____________________________________________________________



// IV. Functions

// A. 
// B.
// function printCool(name) {
//   console.log(`${name} is cool`);
// }

//  printCool("Captain Reynolds"); 

// C.

// function calculateCube(a) {
//   return a * a * a;
// }
// console.log(calculateCube(5));

// D.

// function isVowel(x) {
//   x = x.toUpperCase()
//   if (x === "A" || x === "E"  || x === "I"  || x === "O"  || x === "U"){
//     return true;
// } else {
//   return false;
// }  
// }
// console.log(isVowel("i"));


//! D. Different method, more efficient function need to fix
// function isVowel(letters){
//   let vowels = ["a", "e", "i", "o", "u"]
//   for (let i = 0; i < vowels.length; i++) {
//     console.log(i);
//     if(letters !== vowels[i]){
//       return false;
//     } else{
//       return true;
//     }
    
//   }
// }
// console.log(isVowel("i"));

// E.
// function getTwoLengths([a,b]) {
//   console.log([a.length, b.length]);
// }

// getTwoLengths(["string1", "string223344"]);  //7,12

//  F.  //gets length of each string in array

function getMultipleLengths(arr) {
  let arrayOfNumbers = [];               //*new array to store strings

  for (let i = 0; i < arr.length; i++) {              
     arrayOfNumbers.push(arr[i].length)     //*push elements to array
    }
  return arrayOfNumbers;
}

// console.log(getMultipleLengths(["we", "went", "to", "the", "mall"]));
 //2,4,2,3,4

// G. //
function maxOfThree(a,b,c) {
  if (a === b && a === c && b === c) {
    return a;
  } else if (a >= b && a >= c){
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else if (c >= a && c >= b) {
    return c;
  } 

}

// console.log(maxOfThree(25, 35, 35));  //returns largest #




// H. print longest word in array, if tie return first 

function printLongestWord(arg) {
  let longestWord = arg[0]
  let longestWordLength = arg[0].length
  console.log(longestWord);
  arg.forEach(currentElement => {
    previousLength = longestWordLength
    // console.log(previousLength);
    // console.log(longestWord);
    longestWordLength = Math.max(longestWord.length, currentElement.length)
    if (previousLength !== longestWordLength) {
        longestWord = currentElement      
    }
  });
  return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"])); //return longest string -Peanut Butter

//_____________________________________________________________


// V. Objects

// A. //user object

const user = {
  name: "Joan",
  email: "Joan84@gmail.com",
  age: 53,
  purchased: []
}

// B.

user.email = "Joansmith@yahoo.com"
user.age++

console.log(user);

// C.
user.location = "Canada"

// D.

user.purchased.push(["carbohydrates", "peace of mind", "Merino jodhpurs"])

console.log(user.purchased[0][2]); 

// E.
user.friend = {
  name: "Deb",
  age: 56,
  location: "Toronto",
  purchased: []
}

// console.log(user.friend.name);
// console.log(user.friend.location);

user.friend.age = 55; 
user.friend.purchased.push(['The One Ring'])
user.friend.purchased.push(['A Latte'])

// console.log(user.friend);
// console.log(user.friend.purchased[1]);


// F.  loop print array elements to console 
for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);   
}

//for each loop
user.purchased.forEach(element =>  console.log(element));
  


for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]); 
}
//  G. function updateUser, increment age by 1, uppercase 

function updateUser() {
  user.age = user.age++
  user.name = user.name.toUpperCase()
}

// updateUser(user); 
// console.log(user.name);
// console.log(user.age);


//function old and loud 
function oldAndLoud(person) {
  person.age+=5
  person.name = person.name.toUpperCase()
}

// oldAndLoud(user); 
// console.log(user.name);
// console.log(user.age);



//_____________________________________________________________