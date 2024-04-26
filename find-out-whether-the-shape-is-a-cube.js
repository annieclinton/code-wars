function cubeChecker(volume, side){
  if((volume <= 0) || (side <= 0)){
    return false
  }
  return volume === side * side * side 
};


console.log(cubeChecker(64,4)) // 


console.log(cubeChecker(25,5))
console.log(cubeChecker(0,5))