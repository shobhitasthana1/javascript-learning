var btn = document.querySelector("button");

btn.addEventListener("click", function(){
    setInterval(function(){
        var h1 = document.createElement('h1');
        h1.innerHTML = "Hello"
        document.body.append(h1)
        console.log(h1)
    },1000)
})