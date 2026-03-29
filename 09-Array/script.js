// =====================================
// JAVASCRIPT ARRAYS - COMPLETE GUIDE
// =====================================


// ------------------------------
// 1. CREATE ARRAY

const arr = [1, 2, 3, 4, 5, 6];


// ------------------------------
// 2. ACCESSING ELEMENTS

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);


// ------------------------------
// 3. MODIFYING ARRAY

arr[5] = 10;
console.log(arr[5]);


// ------------------------------
// 4. ARRAY METHODS


// PUSH (add at end)
arr.push(11);
console.log(arr);


// POP (remove last)
const popArr = [1, 2, 3, 4, 5, 6];
popArr.pop();
console.log(popArr);


// SHIFT (remove first)
const shiftArr = [1, 2, 3, 4, 5, 6];
shiftArr.shift();
console.log(shiftArr);


// UNSHIFT (add at start)
const unshiftArr = [1, 2, 3, 4, 5, 6];
unshiftArr.unshift(0);
console.log(unshiftArr);


// SPLICE (modify original array)
const spliceArr = [1, 2, 3, 4, 5, 6];
// remove 2 elements from index 3
spliceArr.splice(3, 2);
console.log(spliceArr);


// SLICE (returns new array)
const sliceArr = [1, 2, 3, 4, 5];
const newSliceArr = sliceArr.slice(1, 3);
console.log(newSliceArr);


// REVERSE
const reverseArr = [1, 2, 3, 4, 5];
reverseArr.reverse();
console.log(reverseArr);


// SORT (Ascending)
const numbers1 = [11, 55, 35, 99, 100, 69];
numbers1.sort((a, b) => a - b);
console.log("Ascending:", numbers1);


// SORT (Descending)
const numbers2 = [11, 55, 35, 99, 100, 69];
numbers2.sort((a, b) => b - a);
console.log("Descending:", numbers2);


// ------------------------------
// 5. LOOPING METHODS


// forEach (no return)
const forEachArr = [10, 30, 20, 40, 50];

forEachArr.forEach((val) => {
  console.log(val + 5);
});


// MAP (returns new array)
const mapArr = [50, 60, 40, 30, 20, 10];

// Example 1: constant transformation
const mapResult1 = mapArr.map(() => 69);
console.log(mapResult1);

// Example 2: conditional mapping
const mapResult2 = mapArr.map((val) => {
  return val > 25 ? val : null;
});
console.log(mapResult2);