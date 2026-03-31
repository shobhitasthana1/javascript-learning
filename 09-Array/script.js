// =====================================
// JAVASCRIPT ARRAYS - COMPLETE GUIDE
// =====================================


// ------------------------------
// 1. CREATE ARRAY

const arr = [1, 2, 3, 4, 5, 6];


// ------------------------------
// 2. ACCESSING ELEMENTS

console.log("Accessing Elements:");
arr.forEach((_, index) => console.log(arr[index]));


// ------------------------------
// 3. MODIFYING ARRAY

arr[5] = 10;
console.log("Modified Array:", arr);


// ------------------------------
// 4. ARRAY METHODS


// PUSH (Add at end)
arr.push(11);
console.log("After push:", arr);


// POP (Remove last)
const popArr = [1, 2, 3, 4, 5, 6];
popArr.pop();
console.log("After pop:", popArr);


// SHIFT (Remove first)
const shiftArr = [1, 2, 3, 4, 5, 6];
shiftArr.shift();
console.log("After shift:", shiftArr);


// UNSHIFT (Add at start)
const unshiftArr = [1, 2, 3, 4, 5, 6];
unshiftArr.unshift(0);
console.log("After unshift:", unshiftArr);


// SPLICE (Modify original array)
const spliceArr = [1, 2, 3, 4, 5, 6];
// Remove 2 elements starting from index 3
spliceArr.splice(3, 2);
console.log("After splice:", spliceArr);


// SLICE (Returns new array)
const sliceArr = [1, 2, 3, 4, 5];
const newSliceArr = sliceArr.slice(1, 3);
console.log("Slice result:", newSliceArr);


// REVERSE
const reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse();
console.log("Reversed:", reverseArr);


// SORT (Ascending)
const numbersAsc = [11, 55, 35, 99, 100, 69];
numbersAsc.sort((a, b) => a - b);
console.log("Ascending:", numbersAsc);


// SORT (Descending)
const numbersDesc = [11, 55, 35, 99, 100, 69];
numbersDesc.sort((a, b) => b - a);
console.log("Descending:", numbersDesc);


// ------------------------------
// 5. LOOPING METHODS


// forEach (No return)
const forEachArr = [10, 30, 20, 40, 50];
console.log("forEach result:");
forEachArr.forEach((val) => console.log(val + 5));


// ------------------------------
// MAP (Returns new array)

const mapArr = [50, 60, 40, 30, 20, 10];

// Constant transformation
const mapResult1 = mapArr.map(() => 69);
console.log("Map (constant):", mapResult1);

// Conditional mapping
const mapResult2 = mapArr.map((val) => (val > 25 ? val : null));
console.log("Map (conditional):", mapResult2);


// ------------------------------
// FILTER

const filterArr = [20, 25, 35, 45, 65, 85, 95, 21, 33, 69];
const filtered = filterArr.filter((val) => val > 40);
console.log("Filtered (>40):", filtered);


// ------------------------------
// REDUCE

const reduceArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = reduceArr.reduce((accumulator, val) => accumulator + val, 0);
console.log("Sum using reduce:", sum);


// ------------------------------
// FIND

const findArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const found = findArr.find((val) => val < 5);
console.log("First value < 5:", found);


// ------------------------------
// SOME

const someArr = [1, 2, 3, 4, 5];
const hasLessThanTwo = someArr.some((val) => val < 2);
console.log("Any value < 2:", hasLessThanTwo);


// ------------------------------
// EVERY (Check all even)

const evenNumArr = [2, 4, 6, 8, 10];
const allEven = evenNumArr.every((val) => val % 2 === 0);
console.log("All numbers are even:", allEven);


// ------------------------------
// DESTRUCTURING

const fullName = ["Shobhit", "Asthana"];
const [firstName, lastName] = fullName;

console.log("First Name:", firstName);
console.log("Last Name:", lastName);


// ------------------------------
// MERGE ARRAYS (Spread Operator)

const a = [1, 2, 3];
const b = [4, 5, 6];

const mergedArray = [...a, ...b];
console.log("Merged Array:", mergedArray);


// ------------------------------
// ADD ELEMENT USING SPREAD

const countries = ["UK", "USA", "Pakistan"];
const updatedCountries = ["India", ...countries];
console.log("Updated Countries:", updatedCountries);


// ------------------------------
// CLONE ARRAY (No reference issue)

const originalArr = [1, 2, 3, 4, 5];
const clonedArr = [...originalArr];

console.log("Cloned Array:", clonedArr);