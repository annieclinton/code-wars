function sumTwoSmallestNumbers(numbers) {  
  //grab the two lowest positive numbers. sort, grab [0], [1]
  let sorted = numbers.sort((a,b) => a-b)
  // console.log(sorted)
  return numbers[0] + numbers[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) //7 