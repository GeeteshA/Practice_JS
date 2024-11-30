// Q.6 Write a function to count the occurrences of a specific element in an array.
const array = [1,2,2,2,3,3,4,4,4,4,4,4,4,4];
function occurCount(elem){
    let count = 0;
    for (let i = 0; i <= array.length-1; i++){
        if(array[i] == elem ){
            count++;
        }
    }
    return count
}
console.log(occurCount(4))