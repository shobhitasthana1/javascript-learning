// 7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

class Student {
    constructor(name, rollno){
        this.name = name;
        this.rollno = rollno;
    }

    introduce(){
        return this.name + " - " + this.rollno;
    }
}

let stu1 = new Student("Shobhit", "25MCA004");
console.log(stu1.introduce());