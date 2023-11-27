function check(a, x) {
  let result = false
  for(let i = 0; i < a.length; i++){
    if(a[i] === x){
      return true
    }
  }
  return result
}

console.log(check([1,2,3],5))