// =====================================
// JAVASCRIPT FUNCTIONS - COMPLETE GUIDE
// =====================================


// ------------------------------
// 1. FUNCTION DECLARATION

function run() {
  console.log("Function Declaration");
}

run();


// ------------------------------
// 2. FUNCTION EXPRESSION

const print = function () {
  console.log("Function Expression");
};

print();


// ------------------------------
// 3. ARROW FUNCTION

const arrowFn = () => {
  console.log("Arrow Function");
};

arrowFn();


// ------------------------------
// 4. PARAMETERS & ARGUMENTS

function dance(name) {
  console.log(`${name} is dancing`);
}

dance("Shobhit");
dance("Abhay");
dance("Anshika");


// ------------------------------
// 5. SUM FUNCTION

function sum(a, b) {
  console.log(`Sum: ${a + b}`);
}

sum(5, 10);
sum(2, 4);


// ------------------------------
// 6. MISSING ARGUMENTS

function add(a, b) {
  console.log(a, b);
}

add(1);   // 1 undefined
add();    // undefined undefined


// ------------------------------
// 7. NaN EXAMPLES

function nanAdd(a, b) {
  console.log(a + b);
}

nanAdd(1);   // NaN
nanAdd();    // NaN


// ------------------------------
// 8. DEFAULT PARAMETERS

function defaultParams(a = 0, b = 1) {
  console.log(a, b);
}

defaultParams();       // 0 1
defaultParams(2, 4);   // 2 4


// ------------------------------
// 9. REST OPERATOR

function collect(...values) {
  console.log(values);
}

collect(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// ------------------------------
// 10. RETURN VALUES

function getValue() {
  return 12;
}

const result1 = getValue();
console.log(result1);


function addToValue(value) {
  return 12 + value;
}

const result2 = addToValue(12);
console.log(result2);


// ------------------------------
// 11. FIRST CLASS FUNCTIONS (FIFA)
// Functions can be passed as values

function execute(fn) {
  fn();
}

execute(function () {
  console.log("First Class Function");
});


// ------------------------------
// 12. HIGHER ORDER FUNCTIONS (HOF)
// Function that accepts or returns another function

function hof(fn) {
  fn();
}

hof(() => console.log("HOF Example"));


// Returning a function
function hofReturn() {
  return function () {
    console.log("Returned Function");
  };
}

const returnedFn = hofReturn();
returnedFn();


// ------------------------------
// 13. PURE vs IMPURE FUNCTION

let x = 12;

// Pure (no external state change)
function pureFunction() {
  return x * 2;
}

console.log(pureFunction());


// Impure (modifies external state)
function impureFunction() {
  x++;
  console.log(x);
}

impureFunction();


// ------------------------------
// 14. CLOSURE

function closureExample() {
  let a = 15;

  return function () {
    console.log(a);
  };
}

const closureFn = closureExample();
closureFn();


// ------------------------------
// 15. LEXICAL SCOPING

function lexical() {
  let a = 12;

  function second() {
    let b = 13;

    function third() {
      let c = 14;
      console.log(a, b, c); // Access to outer scopes
    }

    third();
  }

  second();
}

lexical();


// ------------------------------
// 16. IIFE (Immediately Invoked Function Expression)

(function () {
  console.log("IIFE executed");
})();


// ------------------------------
// 17. HOISTING

// Function Declaration → Hoisted
hoistedFunction();

function hoistedFunction() {
  console.log("Function Declaration Hoisted");
}


// Function Expression → Not Hoisted
// hoistedExpr(); ❌ Error

const hoistedExpr = function () {
  console.log("Function Expression Not Hoisted");
};

hoistedExpr();


// ------------------------------
// 18. BMI CALCULATOR

function bmi(weight, height) {
  return weight / (height * height);
}

console.log("BMI:", bmi(65, 1.7).toFixed(2));