
//Reference types
const colors = ["red", "blue", "white"]

const copyOfColors = colors.slice(0);

copyOfColors.push("purple");

console.log(colors);
console.log(copyOfColors);

const carArr = ["Blue", 4000, 1989]
const userArr = ["user1", 34, true]

// Objects
const car = {
    color: "Blue",
    hp: 4000,
    year: 1989
};
console.log(car);
console.log(car.year);

const user = {
    username: "user1",
    id: "34",
    isAdmin: true,
    address: {
        street: "123 Main st",
        apt: 122,
        state: "NY",
        zipcode: 10033,
    },
    hobbies: ["running", "reading"]
}

// console.log(car);
// console.log(car.year);
// console.log(user);
// console.log(user.id);
// console.log(user.isAdmin);
// console.log(user.address.state);
// console.log(user.address.zipcode);
// console.log(user.hobbies)
// console.log(user.hobbies[1])

const house = {
    address: {
        street: "123 MainSt",
        apt: 122,
        state: "NY",
        zipcode: 10033
    },
};
//add key pair values later on
house.rooms = 4
house.hasPool = true;

house.address.state = "NJ"

console.log(house);

//check values inside array
console.log(user);
user.isAdmin = false;

if (user.isAdmin || user.age > 18) {
    console.log("Hello Admin");
} else {
    console.log("Hello Guest");
}

//pet object 
const pet = {
    pet: "amber",
    color: "orange",
    eyes: "green",
    paws: 4,
    hobbies: ['sleeping', 'eating', 'purring']
};

console.log(pet);

const adventurer = {
    name: "Tim",
    hitPoints: 10,
    belongings: ["sword", "potion", "cloak"]
}

//

for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}

for (item of adventurer.belongings) {
    // console.log(item);
}

for (prop in adventurer) {
    console.log(prop);
}

const propName = "points"
console.log("hitPoints" in adventurer);

adventurer.health = 1000;

adventurer.sayHi = function() {
    console.log("Hi there!");
}

adventurer.isHungry = true;

// deletes a property
delete adventurer.isHungry;

// create a property using square brackets
adventurer["companion"] = {
    name: "Velma",
    type: "Bat"
}

adventurer.companion.belongings = ["bugs", "sunglasses"]

console.log(adventurer);
adventurer.sayHi()

//

const movies = [
    {title:"Tokyo Story", minutes: 190},
    {title:"Paul Blart: Mall cop", minutes: 190},
    {title:"L'Aventura", minutes: 190}
];

// console.log(movies);
// console.log(movies[2].title);

for(let i = 0; i < movies.length; i++) {
console.log(movies[i].title);
}
 

const player = {
    playerName: "Josh",
    health: 1000,
    power: 500,
    stamina: 300,
    sayHi: function() {
        console.log(`Hello I'm ${this.playerName}`);
    }
}
//'this' keyword points to object

const enemy = {
    enemyName: "Colt",
    health: 10000,
    power: 5000,
    stamina: 100000,
    sayHi: function() {
        console.log(`Hi my name is ${this.enemyName} my power is ${this.power}`);
    }
}
console.log(player);
player.sayHi()

console.log(enemy);
enemy.sayHi()


