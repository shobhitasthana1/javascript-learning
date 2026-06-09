var btn = document.querySelector('#btn');


btn.style.width = '200px';
btn.style.height = '100px';
btn.style.backgroundColor = 'red';
btn.style.borderRadius = '20px';

btn.addEventListener('click', function () {
    var box = document.createElement('div')

    var topPos = Math.random() * 80;
    var leftPos = Math.random() * 80;

      var c1 = Math.random() * 256
    var c2 = Math.random() * 256
    var c3 = Math.random() * 256

    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

    box.style.position = 'fixed';
    box.style.top = `${topPos}%`;
    box.style.left = `${leftPos}%`;
    box.style.zIndex = '2';

    document.querySelector('main').append(box)
    console.log(box)
})