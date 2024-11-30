// Q. 7 Write a function to check if an array is sorted in ascending order.
const array = [1,2,3,4,5,6,7,8,9];
function isSorted(){
    for(let i = 0; i < array.length; i++){
        if(array[i] > array[i+1]){
            return console.log(false)
        }
        else console.log(true)
    }
}
isSorted()