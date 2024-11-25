// Funcion declaration or Initialization 

function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4))  // Supports Hoistig

// ---------------------------------------------------------------------------------------------------------------
// Function Expression: Store function in variable
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3)) // do not support Hoisting 

// -------------------------------------------------------------------------------------------------------------------
// Anonymus Function: an un-named function can be assigned to a variable or callback
const multiAdd = (a, b) => {
    let add = a + b;
    console.log('Addition is:' + add)
    return function () {
        let multi = a * b;
        console.log('Multiplication is:' + multi)

    }
}
const innerFunc = multiAdd(2, 3)
innerFunc()
// ----------------------------------------------------------------------------------------------------------------
// First Class Function : When fnction passed as an argument inside an function or they are treated as a variable
let plus = (a,b)=>{return a+b}
let minus = (a,b)=>{return a-b}
let guna = (a,b)=>{return a*b}
let bhaag = (a,b)=>{
    if(b == 0){
        return Infinity
    }
    else return a/b
}

const operation = (operType,a,b) => {
    if ( operType == 'plus'){
        return plus(a,b)
    }
    else if ( operType == 'minus'){
        return minus(a,b)
    }
    else if ( operType == 'guna') {
        return guna(a,b)
    }
    else if( operType == 'bhaag') {
        return bhaag(a,b)
    }
}
// let opr = prompt('Enter operation:');
// let a = parseFloat(prompt('First number'))
// let b = parseFloat(prompt('Second number'))
// const result = operation(opr,a,b)
// console.log('result is: ' + result)

// -------------------------------------------------------------------------------------------------------------------
// IIFE : Immediate Invoked Function Expression which do not need to call
 const counterModulr = (function(){
    let count = 0;
    return {
        increment: function(){
            count++;
            console.log(count)
        },
        decrement: function(){
            count--;
            console.log(count)
        },
        getCount(){
            return count
        }
    }
 })();
counterModulr.increment()
counterModulr.increment()
counterModulr.increment()
counterModulr.decrement()
console.log(counterModulr.getCount())

// -------------------------------------------------------------------------------------------------------------------
// Closure: Accessing values from Parent or outer Function to inner or Child

// Function Scopes: Block of Function
var age = 23;
function show(){
    console.log("global age" + age)
}
console.log(show())         
console.log('scope end')
// -------------------------------------------------------------------------------------------------------------------
// Function Hoisting:
console.log(myName('Geetesh'))
function myName(name){
    console.log(name)
}

// -------------------------------------------------------------------------------------------------------------------
// Params vs Args:


// -------------------------------------------------------------------------------------------------------------------
// Spread vs Rest operators:

// -------------------------------------------------------------------------------------------------------------------
// Callback Functions:

// -------------------------------------------------------------------------------------------------------------------
// Arrow Functions:
const addNum = (a,b,c) => {
    return a * b * c
}
console.log(addNum(2,3,2))
