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

//