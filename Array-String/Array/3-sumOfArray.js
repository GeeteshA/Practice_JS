// Q.3 Write a function to calculate the sum of all elements in an array.
const array = [9,8,7,6,5,4,3,2];

function sumOfArray(){
    let sum = 0;
    for(let i = 0; i <= array.length - 1; i++){
        sum += array[i]
    }
    console.log('Sum of all elements in this array is: ' + sum)
}
sumOfArray()