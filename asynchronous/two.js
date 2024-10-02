function calc(a,b,opr){
    if( opr == "sum"){
        return a + b;
    }
    if( opr == "multy"){
        return a * b ;
    }
}
let r1 = calc(10,20,"sum");
let r2 = calc(10,20,"multy");
console.log(r1);
console.log(r2);
