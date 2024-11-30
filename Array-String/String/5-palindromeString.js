const str = 'DAD'
let array = []
let slice = str.toLowerCase().split('')
function palindromeStr(){
    for( let i = slice.length-1; i >= 0; i--){
        array.push(slice[i])
    }
    array = array.join('')
    if ( array == str.toLowerCase()){
        console.log('it is palindrome')
    }
    else console.log('not palindrome')
    console.log(array)
}
palindromeStr()