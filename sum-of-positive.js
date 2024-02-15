function positiveSum(arr) {
    let total = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        total += arr[i]
      }
    }
    return total
  }

  console.log(positiveSum([1,-4,7,12]))