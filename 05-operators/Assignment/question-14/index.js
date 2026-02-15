// Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.

// take input from user
let day = Number(prompt("Enter day number (1-7):"));

// switch case
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

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}
