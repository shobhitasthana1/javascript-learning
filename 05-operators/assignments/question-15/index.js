// Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”

// take input from user
let age = Number(prompt("Enter your age:"));
let country = prompt("Enter your country:");

// check eligibility
if (age > 18 && country === "India") {
    console.log("Eligible for Vote");
} else {
    console.log("Not Eligible");
}
