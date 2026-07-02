let obj = {
    name: "John",
    class: "MCA"
};

function greet(a, b, c) {
    console.log(this, `Hello, my name is ${this.name}`);
}

greet();       // Without call()
greet.call(obj); // With call()