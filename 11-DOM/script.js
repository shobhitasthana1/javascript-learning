let h1 = document.querySelector("h1");
h1.innerHTML = "<i>I am Not Shobhit</i>";
h1.hidden = false;
console.dir(h1);


// set attribute 
let img = document.querySelector("img");
img.setAttribute("src", "shobhit.png");


let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");
// Get Attribute 
console.log(a.getAttribute("href"));
console.log(img.getAttribute("src"));

// Remove Attribute 
 let color = document.querySelector('h2');
 color.removeAttribute("style");


//  Dynamic Dom Manipulation 

// ---Create Element--- 

let h3 = document.createElement("h3");
h3.textContent = "Hello ji i created this Element using javascript"
document.querySelector("body").prepend(h3)
// document.querySelector("body").append(h3)

// remove element 

h3.remove()

// css using javascript 

h1.style.color = "Red"
h1.style.backgroundColor = "Yellow"

// adding class using Javascript 

let h4 = document.createElement("h4");
h4.textContent = "This is h4 heading and i have added css class in it using javascript"
document.querySelector("body").prepend(h4);
//  add 
h4.classList.add("h4-style")

// remove
h4.classList.remove("h4-style") 

// toggle
h4.classList.toggle("h4-style") // add 
h4.classList.toggle("h4-style") // remove   


// select all li elements and print their text content 

let list = document.querySelectorAll("li");
list.forEach(function(val){
console.log(val.textContent)
});
// create a new list item <li> NEW TASK </li>  
let newli = document.createElement("li")
newli.textContent = "NEW TASK"

document.querySelector("ul").appendChild(newli)




// select a paragraph and replace its content with
//  <b> Updated by javascript <b>

let para = document.querySelector("p");
para.innerHTML = "<b>Updated by javascript</b>";
// set title attribute in para
para.setAttribute("title", "This in para")


// can u remove element using removechild method

let child = document.querySelector("div h1");
child.remove();

