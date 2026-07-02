const para = document.querySelector("p");
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

para.addEventListener("mouseenter", function(mouse){

    var iteration = 0

setInterval(() => {
     const str = text.split("").map((char, index)=>{
        if(index < iteration){
            return char
        }
        return character.split("")[Math.floor(Math.random () * 53)]
    }).join("")

    iteration += 0.2;
    
    console.log(iteration)

    // console.log(str)

    para.innerText = str
}, 50);

})