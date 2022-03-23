// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


function maps(x){
    let doubled = []
    for(let i = 0; i < x.length; i++){
      let double = x[i] * 2
      doubled.push(double)
    }
    return doubled
  }

  // probably best solution 
  function maps(x){
  return x.map(n => n * 2);
}