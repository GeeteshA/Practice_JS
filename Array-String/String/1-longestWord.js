// Q.1 Write a function to find the length of the longest word in a string.
const str = 'Hello this is Geetesh aheriya'
const longestWord = () => {
    let split = str.split(' ');
    let max = 0;
    let maxElem = ''
    for ( let i = 0; i < split.length; i++){
        if ( split[i].length > max ){
            max = split[i].length
            maxElem = split[i]
        }
    }  
    console.log(max)  
    console.log(maxElem)

}
longestWord()