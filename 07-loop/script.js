// ==============================
// JAVASCRIPT LOOPS - CLEAN CODE
// ==============================


// ------------------------------
// BASIC LOOP EXAMPLES

// 1. for loop (1 to 100)
for (let i = 1; i <= 100; i++) {
  console.log(i);
}


// 2. while loop (1 to 100)
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}


// 3. do-while loop (1 to 100)
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 100);


// 4. continue example (skip 50)
for (let i = 1; i <= 100; i++) {
  if (i === 50) continue;
  console.log(i);
}


// ==============================
// PRACTICE QUESTIONS
// ==============================


// Q1. Print numbers from 1 to 10 (for loop)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// Q2. Print numbers from 10 to 1 (while loop)
let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}


// Q3. Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Q4. Print odd numbers from 1 to 15
let m = 1;
while (m <= 15) {
  if (m % 2 !== 0) {
    console.log(m);
  }
  m++;
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
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// Q8. Even/Odd from 1 to user input
let num = Number(prompt("Enter a number:"));

for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}


// Q9. Count numbers between 1–100 divisible by both 3 and 5
let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
    count++;
  }
}

console.log("Total count:", count);