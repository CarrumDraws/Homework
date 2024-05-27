class Vehicle {
  constructor(engine = "Diesel", speed = 25) {
    console.log("Vehicle Call: ");
    console.log(this); // When Car is created, 'this' refers to car!
    this.engine = engine;
    this.speed = speed;
  }

  info() {
    console.log("Engine: ", this.engine, " | Speed: ", this.speed);
  }
}

class Car extends Vehicle {
  constructor(engine = "Diesel", speed = 25, wheels = 4, brake = false) {
    super(engine, speed);
    console.log("Car Call: ");
    console.log(this);
    this.wheels = wheels;
    this.brake = brake;
  }

  honk() {
    console.log("Honk!");
  }

  static isTesla(car) {
    console.log(car.brake ? "This is a Tesla" : "This isn't a Tesla");
    return car.brake;
  }
}

let myCar = new Car("Horse", 10, 4, true);
myCar.info();
Car.isTesla(myCar);
