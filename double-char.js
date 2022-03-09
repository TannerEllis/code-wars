/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/

function doubleChar(str) {
    array = []
    for(let i = 0; i < str.length; i++){
    let doubled = str[i] + str[i]
    array.push(doubled)
    }
    return array.join('')
  }
  console.log(doubleChar(test))