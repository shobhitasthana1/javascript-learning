let box = document.querySelector('div');
let button = document.querySelector('button')


button.addEventListener("click", function () {
    let a = Math.floor(Math.random() * 256);
    console.log(a);
    let b = Math.floor(Math.random() * 256);
    console.log(b);
    let c = Math.floor(Math.random() * 256);
    console.log(c);
    box.style.backgroundColor = `rgb(${a}, ${b}, ${c}`;
    console.log(box);

})



