// JavaScript Declaration
// Declaration means creating a variable

// var declaration
var name;
name = "Shobhit";
console.log("Name:", name);


// let declaration
let age;
age = 20;
console.log("Age:", age);


// const declaration
const country = "India";
console.log("Country:", country);


// declaration and assignment together
let city = "Delhi";
console.log("City:", city);


// redeclaration difference

var a = 10;
var a = 20; // allowed in var
console.log("var a:", a);


let b = 30;
// let b = 40; // not allowed (error)
b = 40; // allowed (update)
console.log("let b:", b);


const pi = 3.14;
// pi = 3.141; // not allowed
console.log("const pi:", pi);


// best practice
let userName = "Shobhit";
const userCountry = "India";

console.log(userName);
console.log(userCountry);
