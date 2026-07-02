// SECTION 1: Objects and OOPS Thinking (Foundation) 
// 1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// 2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.


// let user1 = {
//     name: "Shobhit",
//     email: "shobhitasthana123@gmail.com",
//     login: function(){
//      console.log("User logged in")
//     }
// }

// let user2 = {
//     name: "Shobhit",
//     email: "shobhitasthana123@gmail.com",
//     login: function(){
//      console.log("User logged in")
//     }
// }

// let user3 = {
//     name: "Shobhit",
//     email: "shobhitasthana123@gmail.com",
//     login: function(){
//      console.log("User logged in")
//     }
// }

// let user4 = {
//     name: "Shobhit",
//     email: "shobhitasthana123@gmail.com",
//     login: function(){
//      console.log("User logged in")
//     }
// }

// let user5 = {
//     name: "Shobhit",
//     email: "shobhitasthana123@gmail.com",
//     login: function(){
//      console.log("User logged in")
//     }
// }

// user1.login();
// user2.login();
// user3.login();
// user4.login();
// user5.login();

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
        }
        loggedin = function(){
            console.log("User is logged in");
    }
}

let user1 = new user("Shobhit", "shobhitasthana123@gmail.com");
let user2 = new user("Anshika Gupta", "anshikagupta@gmail.com");
let user3 = new user("Anshini Yadav", "anshiniyadav@gmail.com");
let user4 = new user("Abhay", "abhay@gmail.com");
let user5 = new user("Gymbroh", "gymbroh@gmail.com");

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

user1.loggedin();
user2.loggedin();
user3.loggedin();
user4.loggedin();
user5.loggedin();


