// Q.5 Write a function to reverse an array.
const array = [1,2,3,4,5,6,7,8,9];
function reverseArray() {
    let max = array.length-1
    for ( let i = max; i >= 0; i--){
        console.log(array[i]);
    }
}
reverseArray()