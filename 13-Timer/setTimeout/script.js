var btn = document.querySelector('button');

btn.addEventListener("click", function(){
    setTimeout(() => {
        var h1 = document.createElement("h1");
        h1.innerHTML = "Hello"
        console.log(h1);
        document.body.append(h1)
    }, 5000);
})