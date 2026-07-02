// =====================================
// JAVASCRIPT LOOPS - FINAL CLEAN VERSION
// =====================================


// ------------------------------
// BASIC LOOP EXAMPLES

// 1. for loop (1 to 100)
for (let i = 1; i <= 100; i++) {
  console.log(i);
}


// 2. while loop (1 to 100)
let i1 = 1;
while (i1 <= 100) {
  console.log(i1);
  i1++;
}


// 3. do-while loop (1 to 100)
let i2 = 1;
do {
  console.log(i2);
  i2++;
} while (i2 <= 100);


// 4. continue example (skip 50)
for (let i = 1; i <= 100; i++) {
  if (i === 50) continue;
  console.log(i);
}


// =====================================
// PRACTICE QUESTIONS
// =====================================


// Q1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// Q2. Print numbers from 10 to 1
let i3 = 10;
while (i3 >= 1) {
  console.log(i3);
  i3--;
}


// Q3. Print even numbers from 1 to 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}


// Q4. Print odd numbers from 1 to 15
let i4 = 1;
while (i4 <= 15) {
  console.log(i4);
  i4 += 2;
}


// Q5. Multiplication table of 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 × ${i} = ${5 * i}`);
}


// Q6. Sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum:", sum);


// Q7. Numbers between 1 to 50 divisible by 3
for (let i = 3; i <= 50; i += 3) {
  console.log(i);
}


// Q8. Even/Odd from 1 to user input
let num = Number(prompt("Enter a number:"));

if (!isNaN(num) && num > 0) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
  }
} else {
  console.log("Invalid input");
}


// Q9. Count numbers between 1–100 divisible by both 3 and 5
let count1 = 0;

for (let i = 15; i <= 100; i += 15) {
  console.log(i);
  count1++;
}

console.log("Total count:", count1);


// Q10. Stop at first multiple of 7
for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 7 === 0) {
    console.log("Stopped at:", i);
    break;
  }
}


// Q11. Skip multiples of 3 (1 to 20)
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}


// Q12. Print first 5 odd numbers only
let count2 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) continue; // skip even numbers

  console.log(i);
  count2++;

  if (count2 === 5) break;
}