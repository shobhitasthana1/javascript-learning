var img = document.querySelector("img");
var love = document.querySelector("i");

img.addEventListener("click", function () {

    love.style.opacity = 1;
    love.style.transform =
        "translate(-50%, -50%) rotate(0deg) scale(1.2)";

    setTimeout(() => {
        love.style.opacity = 0;
        love.style.transform =
            "translate(-50%, -200%) rotate(-50deg) scale(0)";
    }, 700);

});