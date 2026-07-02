var button = document.querySelector('button');

button.addEventListener('click', function () {
    var h1 = document.createElement('h1');
    h1.textContent = 'Welcome to JavaScript';
    document.querySelector('main').appendChild(h1);
    console.log(h1);


    var box = document.createElement('div');
    box.textContent = "hey";
    console.log(box)

    box.style.width = '100px'
    box.style.height = '100px'
    box.style.backgroundColor = 'red'

    document.querySelector('main').appendChild(box);
});