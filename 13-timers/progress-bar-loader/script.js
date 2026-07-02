var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var inner = document.querySelector('.inner');

var grow = 0;

btn.addEventListener("click", function () {

    var interval = setInterval(() => {

        h1.innerHTML = grow + "%";
        inner.style.width = grow + "%";

        grow++;

        if (grow > 100) {
            clearInterval(interval);
            btn.innerHTML = "Downloded"
            btn.style.pointerEvents = "none"
            btn.style.backgroundColor = "red"
        }

    }, 100);

});