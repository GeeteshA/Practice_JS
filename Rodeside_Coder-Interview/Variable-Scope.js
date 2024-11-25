// let, var and const scoping & variable and illegal shadowing & re-initilization & Execution context & TDZ(hoisiting)   

// let and const are block or function scope variable 
// var have global scope so it supports Global scope

// variable Shadowing
var a = 'a in global';
function hello() {
    // console.log(a)
    let a = "a in function";
    if (true) {
        let a = "a in conditional"
        console.log(a)
    }
    console.log(a)
}
hello()
console.log(a)

// illegal shadowing
function illegal() {
    let a = "let variable"
    if (true) {
        // var a = "var shadow";
        console.log(a);
    }
    console.log(a)
}
// illegal()

function tdz(){
    console.log(a)  // hoisted so o/p: undefined
    console.log(b) // not access before initilazed but hoisted in TDZ
    console.log(c) // not access before initilazed but hoisted in TDZ
    var a = 10;  
    let b = 20;
    const c = 30;
}
tdz()