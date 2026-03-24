function run(){
    console.log("Function declaration");
}

run();


let print = function(){
    console.log("Function expression");
}
print();

let abcd = ()=>{
    console.log("Fat Arrow Function")
}

abcd();


// parameter and argument

function dance(name){
    console.log(`${name} is dancing`);
}

dance("Shobhit")
dance("Abhay")
dance("Anshika")

function sum(value1, value2){
    console.log(`The sum of value one and value two is: ${value1 + value2}`);
}

sum(5, 10);
sum(2, 4);


function add(val1, val2){
    console.log(val1, val2);
}

// 1, undifined
add(1,);
// undefined undifined
add();


function nanadd(val1, val2){
    console.log(val1 + val2);
}
// Not a Number 
nanadd(1);
nanadd();


// default parameter

function defaultParameter(val1 = 0, val2 = 1){
console.log(val1, val2);
}

defaultParameter()
defaultParameter(2,4)



// Rest operator
function nums(...val){
    console.log(val);
}

nums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// return

function returnValue(){
    return 12;
}

let retVal1 = returnValue();
console.log(retVal1);

function returnValue2(retVal2){
    return 12 + retVal2;
}

let retVal2 = returnValue2(12);
console.log(retVal2)
