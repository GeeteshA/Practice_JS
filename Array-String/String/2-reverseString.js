// Q.2 Write a function to reverse a string.
const str = 'Geetesh';
let reverse = str.split('').reverse().join('')
console.log('Using buitin methods: ' + reverse)
let split = str.split('')
let rev = ''
for (let i = split.length-1; i >= 0; i--){
    rev += split[i]
    
}
console.log('using loop: ' + rev)