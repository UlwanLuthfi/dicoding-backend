const car = {
  // Properties
  brand: "Toyota",
  color: "red",
  maxSpeed: 200,
  chassisNumber: "f-1",

  // Method
  drive: () => {
    console.log("driving");
  },

  reverse: () => {
    console.log("reversing");
  },

  turn: () => {
    console.log("turning");
  },
};

console.log(car.brand);
console.log(car.color);
console.log(car.maxSpeed);
console.log(car.chassisNumber);

car.drive();
car.reverse();
car.turn();
