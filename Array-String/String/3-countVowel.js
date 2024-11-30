// Q.3 Write a function to count the number of vowels in a string.
// const vowel = 'aeiouAEIOU';
const vowel = ['a','e','i','o','u']
function vowelCount(str){
    let count = 0;
    for ( let i = 0; i < str.length; i++){
        if(vowel.includes(str[i].toLowerCase())){
            count++
        }
    }
    return count
}
console.log(vowelCount("Hello this is geetesh aheriya!"))
