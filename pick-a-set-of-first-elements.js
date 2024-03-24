// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) 
// will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples

function first(arr, n = 1) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if (i < arr.length) { 
      newArr.push(arr[i])
    }
  }
  return newArr;
}


console.log(first(['a', 'b', 'c', 'd', 'e'], 0)) //=> [];
console.log(first(['a', 'b', 'c', 'd', 'e'], 3)) //=> ['a', 'b', 'c'];
console.log(first(['a', 'b', 'c', 'd', 'e'])) // => ['a']

