class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return `${this._name} ${this.age}`;
    }

    set name(value) {
        this._name = value;
    }
}

const person = new Person("John", 30);

console.log(person);

person.name = "Shobhit";
person.age = 21;

console.log(person);

console.log(person.name); // Shobhit 21
