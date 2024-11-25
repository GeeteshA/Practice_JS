// How do you reverse a string?
// first Using Loop 
function reverseString(str) {
    let strRev = "";
    for( let i = str.length - 1; i >= 0; i--){
    strRev += str[i];
    }
    return strRev
}
let String = prompt('Enter a string: ');

const Result = reverseString(String);
console.log(Result);

// Second using Metods 
function reverse(str){
    let arraySplit = str.split("");
    let arrayReverse = arraySplit.reverse();
    let arrayJoin = arrayReverse.join("");
    return arrayJoin;
};
let string = prompt('Enter a string: ');
let result = reverse(string)
console.log(result)
