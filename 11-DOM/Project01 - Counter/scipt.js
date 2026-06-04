let button1 = document.querySelector('#inc');
let button2 = document.querySelector('#dec');
let h2 = document.querySelector('h2');

var a = 0;
button1.addEventListener('click', function(){
 a++;
 h2.innerHTML = a;
})

button2.addEventListener('click', function(){
 a--;
 h2.innerHTML = a;
})