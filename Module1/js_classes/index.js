
//Create a new class
//Constructor is used to add values to class
class Vehicle {
    constructor(vin, make, model, year) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.year = year;
        this.runnning = false;
    }
    //instance method: will start the vehicle
    start() {
        this.runnning = true;
        console.log("Vehicle running....");
    }
    toString() {
        return `Vehicle ${this.vin} is a ${this.make}, model ${this.model}.`
    }

    //static method
    static vehicleInfo(){
        console.log("Vehicle class...");
    }
}

//create an instance of the vehicle class
const car1 = new Vehicle("75gh47rh", "Honda", "Civic", "2010");
const car2 = new Vehicle("543fjd", "Toyota", "Prius", "2022");

//Create a Subclass or extend a parent class
class Electric extends Vehicle {
    //add new properties
    battery = 300
}

const car3 = new Electric();
console.log(car3);

console.log(car1);
console.log(car2);

//calling an instance method of vehicle
car1.start()

//calling a static method of vehicle
Vehicle.vehicleInfo()

console.log(car1.toString());

// instance method
const color = []
// color.forEach()

//static method
Math.random();

