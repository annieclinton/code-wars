function fakeBin(x){
  let arr = x.split('')
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 5){
      newArr.push(0)
    }
    else{
      newArr.push(1)
    }
  }
  return newArr.join('')
}

console.log(fakeBin('3333388888'))

