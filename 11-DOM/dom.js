let h1 = document.querySelector('h1');
console.log(h1);
h1.style.color = 'red';

let h2 = document.querySelector('h2');
h2.innerText = 'Changed by JavaScript!';

let box = document.querySelector('#myDiv');

box.addEventListener('click', function() {
    console.log("Box");
});

let h3 = document.querySelector('h3');

let button = document.querySelector('button');

button.addEventListener('click', function(){
 h3.innerHTML = "<h1>Text Changed Successfully</h1>"
 h3.style.color = 'Red'
})