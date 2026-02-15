// Write a program:
// If marks >= 90 → “A grade”
// Else if marks >= 75 → “B grade”
// Else if marks >= 50 → “C grade”
// Else → “Fail”

let marks = Number(prompt("Enter marks:"));

if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 75) {
    console.log("B Grade");
}
else if (marks >= 50) {
    console.log("C Grade");
}
else {
    console.log("Fail");
}
