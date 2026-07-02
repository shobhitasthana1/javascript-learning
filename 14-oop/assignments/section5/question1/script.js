// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object

// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

function User(){
    console.log(this.name);
}

let obj = {
    name: "Shobhit",
}

User.call(obj);


// Use apply to run the function using the object
function User1(a, b, c){
    console.log(this.name, a,b,c);
}

let obj1 = {
    name: "Shobhit",
}

User1.apply(obj1, [1,2,3]);


// Use bind to create a new function and then call it
function User2(){
    console.log(this.name);
}

let obj2 = {
    name: "Shobhit",
}

User2.bind(obj2)();

