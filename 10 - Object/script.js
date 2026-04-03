let obj = {
    name: "Shobhit",
    class: "MCA",
    crn: "25MCA004",
    rollNumber: 22027069463,
};

// Accessing object values
console.log(obj['name']);
console.log(obj.class);
console.log(obj.crn);
console.log(obj['rollNumber']); 

// Dynamic access
let Naam = "name";
console.log(obj[Naam]);

// Nested object
let nestedObj = {
    name: {
        firstname: "shobhit",
        Lastname: "Asthana",
    },
    address: {
        Country: "india", 
        State: "UP",
        City: "Kanpur",
        location: {
            lan: 22.0,
            lag: 25.6,
        }
    }
};

// Access nested values
console.log(nestedObj.name.firstname);
console.log(nestedObj.name.Lastname);
console.log(nestedObj.address.Country);
console.log(nestedObj.address.State);
console.log(nestedObj.address.City);
console.log(nestedObj.address.location.lan);
console.log(nestedObj.address.location.lag);

// Correct destructuring
let { lag, lan } = nestedObj.address.location;

console.log(lag);
console.log(lan);

// looping for-in, object.keys, object.enetries

// forin 

let forinobj = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
}

for(let key in forinobj){
    console.log(key, forinobj[key]);
}

// Object.keys 

let objKey = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
}

console.log(Object.keys(objKey));

// Object.entries

let objEnt = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
}

console.log(Object.entries(objEnt));


// copying objects : Spread , Object Assign, deep Clone

// Spread object 

let objspr = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
}

let obj2spr = {...objspr}
console.log(obj2spr)

// object assign 

let objasn = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
}

let ObjAsnAns = Object.assign({crn: "25MCA004"}, objasn);

console.log(ObjAsnAns);


// deep cloning

let objecln = {
    name: {
        firstname: "shobhit",
        Lastname: "Asthana",
    },
    address: {
        Country: "india", 
        State: "UP",
        City: "Kanpur",
        location: {
            lan: 22.0,
            lag: 25.6,
        }
    }
};

console.log("Original before:", objecln.address.City);

// Deep clone
let objclnAns = JSON.parse(JSON.stringify(objecln));

// Change ONLY cloned object
objclnAns.address.City = "Lucknow";

// Now print both
console.log("Original:", objecln.address.City);   // Kanpur
console.log("Cloned:", objclnAns.address.City);  // Lucknow

// optional chaining
let optionalObj = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
    address: {
        Country: "india", 
        State: "UP",
        City: "Kanpur",
    }
}

console.log(optionalObj.address?.City); // Kanpur
console.log(optionalObj.address?.Pincode); // undefined 

// computed Property names
let role = "Admin";

let compObj = {
    name: "Shobhit",
    email: "shobhitasthana123@gmail.com",
    phoneNum: 6388095158,
    [role]: "Shobhit is admin", 
}   

console.log(compObj);


//Create a object for a student with name age and isEnrolled

let ObjStudent = {
    name: "Shobhit",
    age: 21,
    isEnrolled: true,
}

//Acces the value of Firstname from the given object

let demoobj = {
    "FirstName": "Shobhit",
    lastname: "Asthana",
};

console.log(demoobj['FirstName']);

// Destructure the key "first-name" as a variable called "firstname" 
const user = {
    "first-name": "shobhit",
    lastname: "Asthana",
}

let {"first-name": firstname} = user

console.log(firstname);

// Use Object.Entries() to print all key value pair as:
// title: Javascript
// duration: 4 Weeks

const course = {
   title: "Javascript",
   duration: "4 Week",
};

Object.entries(course).forEach(function (val){
  console.log(val[0] + ": " + val[1]);
});