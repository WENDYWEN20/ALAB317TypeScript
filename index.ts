//@ts-check
// With error checking enabled, fix all of the errors that are present in the base ﬁﬁle by ﬁﬁxing syntax or 
//adding type annotations where relevant, as follows:


class Vehicle <T> {
  type Status = "stopped"|"started";
  make: T;
  model: T;
  wheels: T;
    constructor(make:T, model:T, wheels:T) {
      this.make=make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.Status = "started";
    }
    stop() {
      this.Status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, "four");
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle.Status) {
    if (vehicle.status === "running") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  

  class NCycle extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, "four");
    }
  }
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUppercase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.mdl);
  