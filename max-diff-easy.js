function maxDiff(list) {
  if(list.length == 0 || list.length == 1){
    return 0
  }
  else{
    let sorted = list.sort((a,b) => a-b)
    return sorted[sorted.length-1] - sorted[0]
  }
};

console.log(maxDiff([1, 2, 3, 4]))