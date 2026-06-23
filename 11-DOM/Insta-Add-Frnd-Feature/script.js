var add = document.querySelector("#Addfrnd");
var remove = document.querySelector("#Remove");
var h4 = document.querySelector("h4");

add.addEventListener("click", function () {
    h4.innerHTML = "Friends";
    h4.style.color = "green";
});

remove.addEventListener("click", function () {
    h4.innerHTML = "Stranger";
    h4.style.color = "red";
});