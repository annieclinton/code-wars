function oddOrEven(array) {
  //determine the sum
  let sum = array.reduce((acc, c) => acc + c, 0)
  //return "odd" or "even"
  if(sum % 2 === 0){
    return "even"
  }else{
    return "odd"
  }
}

console.log(oddOrEven([0, 1, 4]), "odd")
console.log(oddOrEven([0]), "even")