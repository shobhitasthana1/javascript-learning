var allelem = document.querySelectorAll("button");

allelem.forEach(function (element) {
    console.log(element.childNodes)
    element.addEventListener("click", function () {
        if (element.innerHTML === "Show Info") {
            element.innerHTML = "Hide Info"
            let h3 = document.createElement("h3");
            h3.textContent = "MCA";
            h3.style.color = "white"
            element.appendChild(h3);
        }
        else {
            element.textContent = "Show Info";
        }
    });
});