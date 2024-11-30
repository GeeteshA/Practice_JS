let array = [12, 32, 67, 32, 12];
function palindromeArray(){
    let reverse = [];
    for(let i = array.length-1; i >= 0; i--){
        reverse.push(array[i])
    }
    let isPalindrome = true;
    for(let i = 0; i < array.length; i++){
        if( array[i] !== reverse[i]){
            isPalindrome = false;
            break
        }
    }
    if(isPalindrome){
        console.log('It is Plaindrome')
    }
    else console.log('Not Palindrome')
}
palindromeArray()