// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

class Car {
   constructor(brand, speed){
    this.brand = brand;
    this.speed = speed
   } 

   drive(){
    return this.brand + " - " + this.brand;
   }
}

let car1 = new Car("TATA NENO", 250);
let car2 = new Car("BMW M4", 350);

// 5.	Create two different car objects from the same class and verify that their data is different.
console.log(car1.drive());
console.log(car2.drive());