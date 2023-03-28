
sayHello()
// sayBye() - error! cannot be hoisted


//function declaration (hoisting to top)
function sayHello() { 
   console.log("Hello");
} 

//function expression (no hoisting)
const sayBye = function() {
    console.log("Bye!");
} 
sayBye() 

// Arrow function (concise) 
const sayHelloWorld = () => console.log('Hello World!');

sayHelloWorld()

//
const addTwo = (a,b) => a + b;

// Return addition on two numbers
function add(num1, num2) {
    console.log("From function", num1, num2);
    return num1 + num2; 
}

const result = add(3, 5)
console.log(result);

// check typeof in function to ensure user input correct

function areBothEven(n1, n2){
    if (typeof(n1) !== "number" || typeof(n2) !== "number"){
        console.log("Arguments must be of type number!");
        return;
    }
    
    return !(n1 % 2) && !(n2 % 2);
}

const isEven = areBothEven(2, 4);
console.log(isEven);

//New Approach to call array with function

function setColor(bike, color = "purple", size = 20) {
    return {
        bikeType: bike,
        bikeColor: color,
        bikeSize: size
        }
    } 
    const bikeObj = setColor("bmx", "red")
    console.log(bikeObj);

// Old approach to call array with function

// function getDevObject(name, lastName) {
//     // ["Maria", "Smith" ,"html", "css", "js"]
//     const skills = [];
//     console.log(arguments);

//     for (let i = 1; i < arguments.length; i++){
//         skills.push(arguments[i])
//     }
//     return {
//         devName: name,
//         devLastName: lastName,
//         jobSkills: skills
//     }
// }
// const devObj = getDevObject("Maria", "Smith" ,"html", "css", "js", "react");
// console.log(devObj);



