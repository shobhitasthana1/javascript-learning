var arr = ["Shobhit", "Anshika", "Abhay", "Abhishek", "Amber", "Anmol", "Suyash", "Priya", "Ujjwal"];
var h1 = document.querySelector('h1')
var name = document.querySelector('#name');

changeName.addEventListener('click', function() {
    let c = Math.floor(Math.random() * arr.length);

    var names = arr[c];
    console.log(names);
    h1.innerHTML = "My Name is : " + names;
});