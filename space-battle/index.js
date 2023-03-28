//*Game round
//ou attack the first alien ship
// If the ship survives, it attacks you
// If you survive, you attack the ship again
// If it survives, it attacks you again ... etc

//*If you destroy the ship, you have the option to attack the next ship or to retreat
//If you retreat, the game is over
//if you destroy all of the aliens You win the game 
//if you are destroyed You lose the game 

//*Ship Properties
// hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target

//*Your spaceship, the USS Assembly 
//hull - 20
// firepower - 5
// accuracy - .7

//*The alien ships should each have the following ranged properties determined randomly:
//hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
    //example accuracy 
    // if (Math.random() < alien[0].accuracy) {
	// console.log('You have been hit!');
    // }


//Spaceship class
class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}
console.log(Spaceship);

//My ship 
class myShip extends Spaceship {

     }

console.log(myShip);
     
    //new instance my spaceship UssAssembly 
     const ussAssembly = new myShip('USS-Assembly', 20, 5, 0.7);
     
     console.log(ussAssembly);
     
//Alien ship
 class Alienship extends Spaceship {
        hull = (Math.floor(Math.random()*3) + 6) / 10;               
        firepower = (Math.floor(Math.random()*3) + 6) / 10;
        accuracy = (Math.floor(Math.random()*3) + 6) / 10;
    constructor(name) {
        super(name)
    }
 }
 console.log(Alienship);


//new instance of Alien spaceship - determine props randomly
const alienShip1 = new Alienship('AlienShip1')
console.log(alienShip1, 3);

const alienShip2 = new Alienship('AlienShip2')
console.log(alienShip2);

//BAttle

//classmate code
// * EQUATION
            // value between min and max = randomNum (from 0 to 1) * (max - min) + min
            // * Explanation
            // randomNum * (max - min) = number between 0 and (max - min ) -> 0 to difference in range of numbers
            // add min to bring make sure number is at least min
            // * DEMO
            // randomNum = 0.5
            // min = 3, max = 6
            // value = 0.5 * (6 - 3)
            // value = 1.5
            // value + min = 1.5 + 3 = 4.5
            // then use round to get an integer if desired
            let rand = Math.random()
            let difference = val.max - val.min
            let valInRange = (rand * difference) + val.min
            // round if need be...