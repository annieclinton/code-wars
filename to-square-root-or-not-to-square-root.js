// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.


// Parameters, returns, examples, pseudo code 
// loop through every number and return new array. if number has an integer square root ()multipled by a number by itself (ex 3*3) to equal itself), print that number, else multiply the number by itself
// P: positive, whole numbers, never empty or null, in the form of an array
// R: Return a new array
// E: 

function squareOrSquareRoot(array) {
    //loop through the array
    //conditional integer square root
    //return integer square root or square the number
    return array.map(num => Math.floor(Math.sqrt(num)) === Math.sqrt(num)? Math.sqrt(num) : num * num)
  }

  console.log(squareOrSquareRoot([3,5,7,9])) // [9,25,49,3]
  console.log(squareOrSquareRoot([16,2,36,100]))// [4,4,6,10]
  console.log(squareOrSquareRoot([4,3,9,7,2,1]))//[2,9,3,49,4,1]
