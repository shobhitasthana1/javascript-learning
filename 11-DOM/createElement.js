var button = document.querySelector('button');

button.addEventListener('click', function () {
    var h1 = document.createElement('h1');

    h1.textContent = 'Welcome to JavaScript';

    document.querySelector('main').appendChild(h1);

    console.log(h1);
});