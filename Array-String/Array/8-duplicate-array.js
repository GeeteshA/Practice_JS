// Q. 8 Write a function to remove duplicates from an array.
const array = [1,2,3,4,5,6,7,2,3];
function removeDupli(){
    let uniqueArray = []
    for(let i = 0; i < array.length; i++){
        if (!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i])
        }

    }
    return uniqueArray
}
console.log(removeDupli())