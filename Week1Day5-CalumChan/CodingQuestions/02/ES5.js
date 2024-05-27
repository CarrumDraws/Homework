// Vehicle Constructor Function: A way to simulate OOP before ES6.
const Vehicle = function (engine = "Diesel", speed = 25) {
  this.engine = engine;
  this.speed = speed;
};

// Define Vehicle Method
Vehicle.prototype.info = function () {
  console.log("Engine: ", this.engine, " | Speed: ", this.speed);
};

// Car Constructor Function that utilizes Vehicle via .call()
function Car(engine = "Diesel", speed = 25, wheels = 4, brake = false) {
  Vehicle.call(this, engine, speed); // Calls "Vehicle" with 'this' (the Car instance) scope, passing engine and speed as params. Like super().
  this.wheels = wheels;
  this.brake = brake;
}

// Set up Inheritance (Car < Vehicle) ------
Car.prototype = Object.create(Vehicle.prototype); // Set Car prototype = Vehicle prototype
// Car.prototype's constructor is now wrongly set to Vehicle.
Car.prototype.constructor = Car; // Fix it.

Car.prototype.honk = function () {
  console.log("Honk!");
};

// Constructor Function Static Methods are attatched directly to function
Car.isTesla = function (car) {
  console.log(car.brake ? "This is a Tesla" : "This isn't a Tesla");
  return car.brake;
};

let myCar = new Car("Horse", 10, 4, true);
myCar.info();
Car.isTesla(myCar);
