function noSpace(x){
  return x.split('').filter(el => el === ' ' ? '' : el).join('')
}

console.log(noSpace(' 9 8 7 9 9 9'))