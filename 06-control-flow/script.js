// ==============================
// JAVASCRIPT CONTROL FLOW GUIDE
// ==============================

// 1. BASIC IF
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}


// ------------------------------
// 2. IF - ELSE
let number = 7;

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}


// ------------------------------
// 3. ELSE IF LADDER
let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 50) {
  console.log("Grade D");
} else {
  console.log("Fail");
}


// ------------------------------
// 4. SWITCH CASE
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid day");
}


// ------------------------------
// 5. EARLY RETURN PATTERN

// ❌ BAD (Nested)
function getAccessBad(user) {
  if (user) {
    if (user.isActive) {
      if (user.role === "admin") {
        return "Full Access";
      } else {
        return "Limited Access";
      }
    } else {
      return "User not active";
    }
  } else {
    return "No user found";
  }
}


// ✅ GOOD (Early Return)
function getAccess(user) {
  if (!user) return "No user found";
  if (!user.isActive) return "User not active";

  if (user.role === "admin") return "Full Access";

  return "Limited Access";
}


// ------------------------------
// 6. PRACTICAL FUNCTION EXAMPLE

function getGrade(score) {
  if (score < 0 || score > 100) return "Invalid Score";

  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 50) return "D";

  return "F";
}

console.log(getGrade(85)); // B


// ------------------------------
// 7. EXTRA: SWITCH WITH STRING

let role = "admin";

switch (role) {
  case "admin":
    console.log("Full control");
    break;
  case "editor":
    console.log("Edit content");
    break;
  case "viewer":
    console.log("View only");
    break;
  default:
    console.log("Unknown role");
}