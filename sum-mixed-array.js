function sumMix(x){
  return x.reduce((acc,c) => acc + +c, 0)
}

function sumMix(x){
  return x.map(element => +element).reduce((acc,c) => acc + c, 0)
}