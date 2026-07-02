class Animal{
    constructor(){
        this.name = "DOG"
        this.color = "Black"
        this.hands = 2;
        this.legs = 2;
    }
    breath(){}
    eat(){}
}

let an1 = new Animal
console.log(an1)

class kekda extends Animal{
    constructor(){
        super();
        this.name = "Kekda"
        this.color = "Red"
        this.hands = 0;
        this.legs = 8;
    }
    susu(){}
}

let k1 = new kekda
console.log(k1)
