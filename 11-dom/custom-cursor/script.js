var main = document.querySelector('main');
var crsr = document.querySelector("#crsr")

main.addEventListener("mousemove", function(move){
    console.log(move.x)
    console.log(move.y)
    crsr.style.left = move.x+"px";
    crsr.style.top = move.y+"px";
})