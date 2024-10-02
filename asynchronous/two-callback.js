function sum(a,b){
    return a + b;
}
function multy(a,b){
    return a * b;
}
function calc(a,b,callback){
    return callback(a,b)
}
let r1 = calc(1,2,sum)
let r2 = calc(1,2,multy)

console.log(r1);
console.log(r2);