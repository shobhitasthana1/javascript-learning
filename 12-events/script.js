// Click event - runs when the button is clicked
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("Button clicked");
});


// Double click event
btn.addEventListener("dblclick", () => {
    console.log("Button double clicked");
});


// Mouse enters the box
const box = document.querySelector(".box");

box.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
});

// Mouse leaves the box
box.addEventListener("mouseleave", () => {
    console.log("Mouse left");
});


// Detect keyboard input
const input = document.querySelector("#input");

input.addEventListener("keydown", (e) => {
    console.log(e.key);
});


// Get current input value
input.addEventListener("input", (e) => {
    console.log(e.target.value);
});


// Prevent page refresh on form submit
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
});


// Event object contains useful details
btn.addEventListener("click", (e) => {
    console.log(e);
});


// Target = element that triggered the event
btn.addEventListener("click", (e) => {
    console.log(e.target);
});


// Event bubbling: Child -> Parent
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => {
    console.log("Child clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});


// Event capturing: Parent -> Child
parent.addEventListener(
    "click",
    () => {
        console.log("Parent capturing");
    },
    true
);


// Event delegation - one listener for multiple items
const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }
});


// Remove an event listener
function handleClick() {
    console.log("Clicked");
}

btn.addEventListener("click", handleClick);

// btn.removeEventListener("click", handleClick);