function generateRange(min, max, step){
  let arr = []
  for(let i = min; i <= max; i += step){
    arr.push(i)
  }
  return arr
}
console.log(generateRange(1,10,3))


// let arr = []

// arr.push(1)
// arr.push(2)
// console.log(arr)