// JavaScript Data Types
// Data types define what kind of value a variable holds

// 1. String (text)
let name = "Shobhit";
console.log("Name:", name);
console.log("Type of name:", typeof name);


// 2. Number
let age = 20;
console.log("Age:", age);
console.log("Type of age:", typeof age);


// 3. Boolean (true or false)
let isStudent = true;
console.log("Is student:", isStudent);
console.log("Type of isStudent:", typeof isStudent);


// 4. Undefined
let city;
console.log("City:", city);
console.log("Type of city:", typeof city);


// 5. Null
let value = null;
console.log("Value:", value);
console.log("Type of value:", typeof value); // object (this is a known JS bug)


// 6. Object
let person = {
    firstName: "Shobhit",
    age: 20
};
console.log("Person:", person);
console.log("Type of person:", typeof person);


// 7. Array (special type of object)
let numbers = [10, 20, 30];
console.log("Numbers:", numbers);
console.log("Type of numbers:", typeof numbers);


// 8. Changing data type
let data = "Hello";
console.log("Data:", data, "| Type:", typeof data);

data = 100;
console.log("Data:", data, "| Type:", typeof data);


// summary
console.log("JavaScript supports multiple data types");
