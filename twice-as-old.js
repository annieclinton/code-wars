// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   let twice = sonYearsOld * 2
//   let difference = dadYearsOld - twice
//   if(difference < 0){
//     return -difference
//   }else{
//     return difference
//   }
// }

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld * 2))
}


console.log(twiceAsOld(50,20)) // 10
console.log(twiceAsOld(55,20)) // 15
console.log(twiceAsOld(50,10)) // 30
console.log(twiceAsOld(45,25)) // 5