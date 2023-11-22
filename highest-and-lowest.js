function highAndLow(numbers){
  let numsArr = numbers.split(' ')
  let sorted = numsArr.sort((a,b) => a - b, 0)
  return sorted[sorted.length-1] + ' ' + sorted[0]  
}

console.log(highAndLow("1 2 3 4 5")) // return "5 1")