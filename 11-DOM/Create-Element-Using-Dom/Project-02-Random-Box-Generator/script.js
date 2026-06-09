var btn = document.querySelector('#btn');


btn.style.width = '200px';
btn.style.height = '100px';
btn.style.backgroundColor = 'red';
btn.style.borderRadius = '20px';

btn.addEventListener('click', function () {
    var box = document.createElement('div')

    var topPos = Math.random() * 80;
    var leftPos = Math.random() * 80;

    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = 'red';
    box.style.position = 'fixed';
    box.style.top = `${topPos}%`;
    box.style.left = `${leftPos}%`;
    box.style.zIndex = '2';
    document.querySelector('main').append(box)
    console.log(box)
})