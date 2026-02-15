// JavaScript Type System
// JavaScript is a dynamically typed language
// It means you don't need to define the data type

let data = "Hello";
console.log("Value:", data);
console.log("Type:", typeof data);


// changing type automatically
data = 100;
console.log("Value:", data);
console.log("Type:", typeof data);


data = true;
console.log("Value:", data);
console.log("Type:", typeof data);


// JavaScript decides type at runtime
let value;

value = "Shobhit";
console.log(value, typeof value);

value = 20;
console.log(value, typeof value);

value = false;
console.log(value, typeof value);


// example
let result = 10 + "5";
console.log("Result:", result);
console.log("Type:", typeof result);


// another example
let result2 = 10 + 5;
console.log("Result:", result2);
console.log("Type:", typeof result2);


// conclusion
console.log("JavaScript is dynamically typed");
