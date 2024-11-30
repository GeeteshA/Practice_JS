// Q. 4 Write a function to calculate the average of an array of numbers.
let array  = [1,2,3,4,5,6,7,8,8,9];
const avrageOfArray = () => {
    let length = array.length;
    let sum = 0
    for( let i = 0; i < length; i++){
            sum += array[i]
    }

    console.log('Avrage of this array is : ' + sum/length)
}
avrageOfArray()