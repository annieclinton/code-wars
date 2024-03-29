function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}


function past(h, m, s){
  if(s >= 0 || s <=59){
    secondsTotal = s
  }
  if(m>=0 || m<=59){
    minutesTotal =  (m * 60)
  }
  if(h >= 0 || h <=23){
    hoursTotal = h * 60 * 60
  }
  let milliseconds = (secondsTotal + minutesTotal + hoursTotal) * 1000
  return milliseconds 
}

console.log(past(0,1,1))
console.log(past(1,1,1))
console.log(past(5,59,8))

