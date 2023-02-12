//  1.
function maxOfTwoNumbers(x, y) {
    return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(20, 6));

//2. Define a function, as a function expression,
//  maxOfThree that takes three numbers as arguments 
//  and returns the largest of them.

const maxOfThree = function(x, y, z){
    if(x > y && x > z){
        return x; 
    } else if(y > x && y > z){
        return y; 
    } else if(z > y && z > x) {
        return z;}
    
}
console.log(maxOfThree(25, 20 , 5)); 

//3. Define a function, as a function declaration, 
// isCharAVowelthat takes a character as an argument and 
// returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return true;    
    } else {
        return false;
    }
    
}
console.log(isCharAVowel('b'));

//4.Define a function, as a function expression, sumArray that 
// takes an array of numbers and returns the sum of those numbers. 
// For example, sumArray([2, 4, 5]);would return 11.

const sumArray = function([a,b,c]) {
    return a + b + c;
}

console.log(sumArray([6, 7, 5]));


//5. Define a function, as a function declaration, multiplyArraythat 
// takes an array of numbers and returns the product those numbers. For 
// example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray([d, e, f]) {
 return d * e * f;  
}

console.log(multiplyArray([5, 5, 5]));



// 6. Define a function, as a function expression, numArgs that returns 
// the number of arguments passed to the function when called.

const numArgs = function(a,b,c,d) {
    return numArgs.length;
}

console.log(numArgs()); 

// 7.Define a function, as a function declaration, reverseStringthat takes 
// a string, reverses the characters, and returns it. For example, reverseString('rockstar');
// would return the string "ratskcor".

function reverseString() {
    return 
}
reverseString()

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of 
// strings as an argument and returns the length of the longest string.

// 9. Define a function, as a function declaration, 
// stringsLongerThanthat takes an array of strings and 
// a number as arguments; and returns an array of the strings 
// that are longer than the number passed in. For example, 
// stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
// would return ["hello", "morning"].