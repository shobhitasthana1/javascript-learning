// Global -> Window

console.log(this); // Window

// Function -> window

function f() {
    console.log(this); // Window
}

f();

