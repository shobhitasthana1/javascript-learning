// Create an object with two methods:
// One method using a normal function
// One method using an arrow function

let obj = {
    name: "Shobhit",
    fun1 : function(){
        console.log(this);
    },

    fun2 : ()=>{
        console.log(this)
    }
}

console.log(obj.fun1())
console.log(obj.fun2())