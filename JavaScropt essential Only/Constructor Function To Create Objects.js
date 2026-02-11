// creating Objects using Prototype

// contructor function
function Car(name, model){
    this.name = name
    this.model = model
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("BMW", "X1");
console.log(bmwCar);
console.log(audiCar);

console.log(bmwCar instanceof Car);