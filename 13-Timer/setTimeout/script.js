var btn = document.querySelector('button');

btn.addEventListener('click', function(){
    setTimeout(() => {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Hello'
    console.log(h1)
    document.querySelector('main').appendChild(h1)
}, 4000);
})