const vowel = [ 'a', 'e', 'i', 'o', 'u'];
function countConsonent(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        let char = str[i].toLowerCase()
        if (str[i] > 'a' && str[i] < 'z' && !vowel.includes(char)){
            count++
        }
    }
    return count
}
let result = countConsonent('Hello this is geetesh aheriya here')
console.log(result)