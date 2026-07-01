// Global -> Window

console.log(this); // Window

// Function -> window

function f() {
    console.log(this); // Window
}

f();

// Es5 function inside object -> object

let obj = {
    name: "Shobhit",
    fnc: function () {
        console.log(this); // obj
    }
};
obj.fnc();

// Arrow function inside object -> window

let obj2 = {
    name: "Shobhit",
    fnc: () => {
        console.log(this); // window
    }
};
obj2.fnc();

// Es5 function inside Es5 function inside object -> window

let obj3 = {
    name: "Shobhit",
    fnc: function () {
        function f() {
            console.log(this); // window
        }
        f();
    }
};
obj3.fnc();


