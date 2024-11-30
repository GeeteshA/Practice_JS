// Q.1 Find maximum element in an array ?
let array = [1,2,3,4,5,4,3];

const maximumArray = () => {
    let max = 0;
for(let i = 0; i <= array.length-1; i++){
    if( array[i] > max){
        max = array[i]
    }
}
console.log('maximum element in this array is: '+max)
}
maximumArray()
