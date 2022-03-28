// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with
//  a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
    sheep = []
    for (let i = 0; i < num; i++) {
        sheep.push(i)
    }
    counted = sheep.map((num,) => {
        return (num + 1) + ' sheep...'
    }).join('')
    return counted
}

//solution I liked better
var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }


