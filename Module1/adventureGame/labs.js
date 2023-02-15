// console.log("Labs Classes");

// //Parent class
// class Cat {
//     legs = 4;
//     eyes = 2;
//     fur = true;
//     treats = 50;

//     constructor(name, color, breed) {
//         this.name = name;
//         this.color = color;
//         this.breed = breed;
//         this.lovesTreats = true;
//     }

//     meow(otherCat = "furrFriends") {
//         console.log(`Meow ${otherCat}!`);
//     } 
    
//     hunt() {
//         console.log(`${this.name} is hunting`);
//     }

//     eatTreat(treatsAmount){
//         if (treatsAmount <= this.treats) {
//         this.treats -= treatsAmount; 
//         console.log(`${this.treats} treats left`);
//         } else {
//             console.log("Sorry not enough treats");
//         }

//     }

//     //setter method update values in class
//     //update treats
//     setTreats(newNumTreats) {
//         this.treats = newNumTreats;
//     }
    

// }



// const amber = new Cat("Amber", "orange", "tabby");
// const kyte = new Cat("Kyte","white", "Maine_coon");


// console.log(amber);
// console.log(kyte);

// amber.meow("kyte");
// kyte.meow("amber");

// amber.hunt("amber");
// kyte.hunt("kyte");

// amber.eatTreat(5);


// amber.setTreats(45);

// //child class
// class Mouse extends Cat {
//     constructor(name, color, breed, ...items){
//         super(name, color, breed)
//         this.items = items; 
//     }

//     hide() {
//         console.log(`${this.name} is hiding..`);
//     }

// }

// const fig = new Mouse("Fig", "gray", "mouse", "cheese", "cat deterrent", "slingshot");

// console.log(fig);

// fig.hide()

