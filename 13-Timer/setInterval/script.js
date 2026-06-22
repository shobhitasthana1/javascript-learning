var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var int;

btn1.addEventListener("click", function(){
 
    var count = 0;

   int = setInterval(function(){
        var h1 = document.createElement('h1');
        h1.innerHTML = count;
        document.body.append(h1)
        count++
    },1000)
})

btn2.addEventListener("click", function(){
    setTimeout(() => {
        clearInterval(int);
    }, 10);
})