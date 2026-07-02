// Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

function User(){
    this.name = "Shobhit";
    this.login = function(){
       console.log("Logged In")
    }
}

User.prototype.loggedin = function(){
    console.log("Logged In")
}

user1 = new User;
console.log(user1)