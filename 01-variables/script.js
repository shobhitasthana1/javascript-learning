// Variables in JavaScript
// Variables are used to store values

// using var
var name = "Shobhit";
console.log("My name is:", name);

// var can be changed
name = "Shobhit Asthana";
console.log("Now my name is:", name);


// using let
let age = 20;
console.log("My age is:", age);

// let can also be changed
age = 21;
console.log("Now my age is:", age);


// using const
const country = "India";
console.log("I live in:", country);

// const cannot be changed
// country = "USA"; // this will give error


// declaring variable without value
let city;
console.log("City is:", city); // undefined

city = "Delhi";
console.log("Now city is:", city);


// multiple variables
let a = 10;
let b = 20;

console.log("Value of a is:", a);
console.log("Value of b is:", b);


// best practice
// use let and const mostly, avoid var
