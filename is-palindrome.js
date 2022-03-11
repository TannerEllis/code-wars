//Write a function that checks if a given string (case insensitive) is a palindrome.


let testString = 'abcde'

function isPalindrome (str) {
   let palindrome = str.toLowerCase()
    return palindrome == palindrome.split('').reverse().join('');
}  

console.log(isPalindrome(testString))
console.log(isPalindrome(`Abba`))

// function isPalindrome(str){
// let characters  = str.split('');
// let firstLetter = characters.shift();
// let lastLetter  = characters.pop();

// if (firstLetter !== lastLetter) {
// return false;
// }

// if (characters.length < 2) {
// return true;
// }

// return isPalindrome(characters.join(''));

// }
    


