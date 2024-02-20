// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
  return numbers.reduce((acc,c) => acc + c, 0)
}

// function sum(numbers) {
//   let total = 0
//     for(let i = 0; i < numbers.length; i++){
//       if(numbers.length === 0){
//         total = total + 0
//       }else{
//         total = total + numbers[i]
//       }
//   }
//   return total
// }

