function mergeArrays(a, b) {
  //declare empty
  let combined = []
  //check which array is longer
  let longerArray
  if(a.length > b.length){
    longerArray = a.length
  }else{
    longerArray = b.length
  }
  //check if element is undefined
  //grab element from first array, grab element from 2nd array, push into empty array 
  for(let i = 0; i < longerArray; i++){
    if(a[i] == undefined){
      combined.push(b[i])
    }else if(b[i] == undefined){
      combined.push(a[i])
    }else{
      combined.push(a[i], b[i])
    }
  }
  return combined
}

console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5])) // becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e', 'f', 'g'], [1, 2, 3, 4, 5])) // becomes  [a, 1, b, 2, c, 3, d, 4, e, 5, f, g]
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5, 6, 7])) // becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]