// =====================================
// JAVASCRIPT FUNCTIONS - CLEAN VERSION
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

const abcd = () => {
  console.log("Arrow Function");
};

abcd();


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

function sum(value1, value2) {
  console.log(`Sum: ${value1 + value2}`);
}

sum(5, 10);
sum(2, 4);


// ------------------------------
// 6. MISSING ARGUMENTS

function add(val1, val2) {
  console.log(val1, val2);
}

// 1, undefined
add(1);

// undefined, undefined
add();


// ------------------------------
// 7. NaN EXAMPLES

function nanAdd(val1, val2) {
  console.log(val1 + val2);
}

// NaN cases
nanAdd(1);      // NaN
nanAdd();       // NaN


// ------------------------------
// 8. DEFAULT PARAMETERS

function defaultParameter(val1 = 0, val2 = 1) {
  console.log(val1, val2);
}

defaultParameter();       // 0 1
defaultParameter(2, 4);   // 2 4


// ------------------------------
// 9. REST OPERATOR

function nums(...values) {
  console.log(values);
}

nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// ------------------------------
// 10. RETURN VALUES

function returnValue() {
  return 12;
}

const result1 = returnValue();
console.log(result1);


function returnValue2(value) {
  return 12 + value;
}

const result2 = returnValue2(12);
console.log(result2);