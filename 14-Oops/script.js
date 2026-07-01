class Biscuitmaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showDetails() {
        console.log(`${this.name} costs ${this.price}`);
    }
}

let parleg = new Biscuitmaker("ParleG", "5rs");
console.log(parleg);
parleg.showDetails();

let oreo = new Biscuitmaker("Oreo", "10rs");
console.log(oreo)
oreo.showDetails();