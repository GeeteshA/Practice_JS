// Q.2 Write a function to find the minimum value in an array.
let array = [1,2,3,0,4,5,6,7]
const minimumArray = () => {
    let min = 0;
    for(let i = 0; i <= array.length - 1; i++){
        if( array[i] <= min){
            min = array[i]
        }
    }
    console.log('Minimum element in ths array is : ' + min)
}
minimumArray();