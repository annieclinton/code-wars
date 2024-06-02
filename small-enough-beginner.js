function smallEnough(a, limit){
  for(let i = 0; i < a.length; i++){
    if(a[i] > limit){
      return false
    }
  }
  return true
}

console.log(smallEnough([1,2,3,4,5], 7)) // true
console.log(smallEnough([1,2,3], 4)) //true
console.log(smallEnough([66, 101], 200)) // true
console.log(smallEnough([78, 117, 110], 100)) //false 



//P num
//R true or false 