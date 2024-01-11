function sumArray(array) {
  if(array == null || array.length <= 1){
    return 0
  }else{
    return array.reduce((acc,c) => acc + c, 0) - Math.min(...array) - Math.max(...array)
  }
  
}
console.log(sumArray([6, 2, 1, 8, 10])) // 16
console.log(sumArray([1, 1, 11, 2, 3])) // 6
console.log(sumArray([null])) // 0
console.log(sumArray([])) // 0
console.log(sumArray([3])) // 0
console.log(sumArray([3,5])) // 0
console.log(sumArray([0, 1, 6, 10, 10])) // 17
console.log(sumArray([-6, -20, -1, -10, -12])) // -28
console.log(sumArray([ -6, 20, -1, 10, -12 ])) // 3
