//static class
class Governor {
    //static methods and properties 
    //log and test don't instatiate ???
    static title = "Governor";
    static location = "Capital_Office";
    static outfit = "suit";


    static governing() {
        console.log(`${this.title} is working at the ${this.location}`);
    }

}

//how to call static method??.governing();
console.log(Governor.title);

// let brad = new Governor("Governor", "Albany", "Blue_suit");
// console.log(brad);

Governor.governing();

//Parent class
class Person {
    species = "human";
    eyes = 2;
    fingers = 10;

    constructor(name, age, job,) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.wearsGlasses = false;
    }

    walk() {
        console.log(`${this.name} is walking`);
    }

    work(coWorker = "person") {
        console.log(`${this.name} is working as a ${this.job} with ${coWorker}.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    
}


//child class postal worker
class PostalWorker extends Person {
    constructor(name, age, job, ...supplies){
        super(name, age, job);
        super.wearsGlasses = false;  //how to apply to one instance?
        this.supplies = supplies;

    }

    delivers() {
        console.log(`${this.name} delivers the mail`);
    }
    
}

//child class chef
class Chef extends Person {
        constructor(name, age, job, ...ingredients) {
            super(name, age, job);
            this.ingredients = ingredients;
        }
    
    recipe(dish = "meal") {
        console.log(`${this.name} is using the following ingredients: ${this.ingredients} to make ${dish}.`);
    }

    plans() {
        console.log(`${this.name} plans the menu of the day.`);
    }
}


//2 instances of PostalWorkers, log and test methods

const joyMail = new PostalWorker("Joy", 52, "Package_Distribution", wearsGlasses = true, "Stamps", "Tape", "Route");
const robertMail = new PostalWorker("Robert", 40, "Mail_Man", "Truck", "Rubber_bands", "Wagon");

console.log(joyMail);
joyMail.delivers();
joyMail.walk();

console.log(robertMail);
robertMail.work("Joy");
robertMail.walk();
//2 instances of Chefs, log and test methods

const antonioCook = new Chef("Antonio", 60, "Pastry_Chef", "Flour", "Butter", "Sugar");
const tiffanyCook = new Chef("Tiffany", 30, "Vegan_Chef", "Kale", "Broccoli", "Flax_Seeds");

console.log(antonioCook);
antonioCook.recipe("Croissants");
antonioCook.plans();
console.log(tiffanyCook);
tiffanyCook.plans();
tiffanyCook.recipe("Salad"); 


