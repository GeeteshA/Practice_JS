const a = [1,2,3,4,5];
const b = [5,6,7,8,9];
function mergeRemove(){
    let c = new Set([...a,...b])
    console.log(c)
}
console.log('Using rest and set functions : ' + mergeRemove()) 

function mergeRemoveLoop(){
    let mergeArray = []
    for( let i = 0; i < a.length; i++ ){
        mergeArray.push(a[i]);
    }
    for(let i = 0; i < b.length; i++){
        if(!mergeArray.includes(b[i])){
            mergeArray.push(b[i])
        }
    }
    return mergeArray
}
console.log('Using Looping : ' + mergeRemoveLoop())