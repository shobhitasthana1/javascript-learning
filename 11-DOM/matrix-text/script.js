const para = document.querySelector("p");
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

para.addEventListener("mouseenter", function(mouse){

setInterval(() => {
     const str = text.split("").map((char, index)=>{
        return character.split("")[Math.floor(Math.random () * 53)]
    }).join("")
    console.log(str)

    para.innerText = str
}, 100);

})