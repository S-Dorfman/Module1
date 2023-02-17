//creating classes and factories
//hamster class

// class Hamster {
//     constructor(name){
//       this.owner = ''
//       this.name = name
//       this.price = 15
//     }
//     wheelRun(){
//       console.log('squeak squeak')
//     }
//     eatFood(){
//       console.log('nibble nibble')
//     }
//     getPrice(){
//       return this.price
//     }
//   } 

//   //person class

//   class Person {
//     constructor(name){
//       this.name = name
//       this.age = 0
//       this.height = 0
//       this.weight = 0
//       this.mood = 0
//       this.hamsters = []
//       this.bankAccount = 0
//     }
//     getName(){
//       return this.name
//     }
//     getAge(){
//       return this.age
//     }
//     getWeight(){
//       return this.weight
//     }
//     greet(){
//       console.log(`I am ${this.name} hello`)
//     }
//     eat(){
//         this.weight++
//         this.mood++
//     }
    
//     exercise(){
//       this.weight--
//     }
//     ageUp(){
//       this.age++
//       this.height++
//       this.weight++
//       this.mood--
//       this.bankAccount+=10
//     }
//     buyHamster(hamster){
//       this.hamsters.push(hamster)
//       this.mood+=10
//       this.bankAccount-=hamster.getPrice()
//     }
//   }

//   const timmy = new Person("Timmy"); 
//   //age timmy 5 years
//   timmy.age+=5
//   //run eat method 5X
//   for (let i = 0; i < 5; i++) {
//     timmy.eat() 
//   }
//   //run exercise method 5X
//   for (let i = 0; i < 5; i++) {
//     timmy.exercise() 
//   }

//   //age timmy 9 years
//   timmy.age+=9
//   console.log(timmy);
//   const gus = new Hamster('Gus');
//   gus.owner = "Timmy"
//   timmy.buyHamster(gus)
//   timmy.age+=15
//   timmy.eat()
//   timmy.eat()
//   timmy.exercise()
//   timmy.exercise()
//   console.log(gus);

  class Dinner {
    constructor (appetizer, entree, dessert){
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  class Chef {
    //method cooks dinner
    cooksDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert)
    }
  }
    //instance method cooks dinner with appetizer entre and dessert
  
  let chef1 = new Chef()
  let firstDinner = chef1.cooksDinner("spring rolls", "Pizza", "Ice Cream")
  let secondDinner = chef1.cooksDinner("salad", "Pasta", "cake")
  let thirdDinner = chef1.cooksDinner("pasta", "Fish", "Cannoli")
  
  //log 3 instances of dinners
  console.log(firstDinner);  
  console.log(secondDinner);
  console.log(thirdDinner);