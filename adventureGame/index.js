
//Declare a new class
class Player {
    legs = 2;
    arms = 2;
    eyes = 2;
    #hair //creates a private prop 
    health = 500;
    damage = 100;


    //declare specific properties
    constructor(name, age, hair) {
        this.name = name;
        this.age = age;
        this.#hair = hair;
        this.lovesPizza = true;
    }

        //instance method- function living in class
    greet(otherCharacter = "friend") {
        // console.log(`Hello ${otherCharacter}`);
    }

    
    attack() {
        // console.log(`${this.name} is attacking`);
    }


    //damage function 
    takeDamage(damageLevel) {
        this.health -= damageLevel;
        // console.log(`${this.name} now has a 
        // health level of: ${this.health}`);
    }

    
    //setter method update values in class
    setHair(newHairColor) {
        this.#hair = newHairColor;
    }

    //getter method
    getHair() {
        // console.log(this.#hair);
    }
}


//create new instance of class & initialize
const mario = new Player("Mario", 32, "Black");
const luigi = new Player("Luigi", 30, "Purple");
// console.log(mario);

mario.greet("Luigi");
luigi.greet("Mario");

mario.attack();
luigi.attack();


//check if object is instance class
// console.log(mario instanceof Player);

//access a private property
console.log(mario.hair);

//create a new prop (hair) which is not equal to #hair
mario.hair = "yellow"

//getter & setter to protect property 
mario.setHair("red");
mario.getHair();

//inherits values from Player class- it's child/sub class
class Friend extends Player {
    constructor(name, age, hair, ...skills){  //....rest operator, creates array
        super(name, age, hair);  //send values to super class
        this.skill = skills;  //new Array of skills
     }

    fly() {
        // console.log(`${this.name} is flying..`);
    }
    attack() {
    //     console.log(`Fireball!!`);
    }
    doubleAttack() {
        super.attack(); //calling attack method from parent/super class
        this.attack(); //attack method defined in this child class
    }
}

class Enemy extends Player {

}

const toad = new Friend("Toad", 18, "mushroom", "builder", "jumper", "runner");
const bowser = new Enemy("Bowser", 38, "red");

// console.log(mario);
// console.log(luigi);
// console.log(toad);
// console.log(bowser);
// toad.doubleAttack();

// mario.attack()
// toad.fly()
// toad.attack()

const randomNum = Math.floor(Math.random() * 2)
// console.log(randomNum);

if (randomNum < 1) {
    bowser.takeDamage(mario.damage)
} else {
    luigi.takeDamage(bowser.damage);
}