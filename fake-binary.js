function fakeBin(x){
    let arr = x.split('')
    return arr.map(num => num < 5 ? 0 : 1).join('')
    
  }
  
  console.log(fakeBin('234287897'))