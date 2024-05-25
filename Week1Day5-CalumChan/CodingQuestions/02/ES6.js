class Vehicle {
  constructor(engine = "Diesel", speed = 25) {
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
    this.wheels = wheels;
    this.brake = brake;
  }

  honk() {
    console.log("Honk!");
  }
  // How does "this" work?
  static isTesla(car) {
    console.log(car.brake ? "This is a Tesla" : "This isn't a Tesla");
    return car.brake;
  }
}

let myCar = new Car("Horse", 10, 4, true);
myCar.info();
Car.isTesla(myCar);
