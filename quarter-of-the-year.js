const quarterOf = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
  
}


// const quarterOf = (month) => {
//   switch(month){
//     case 1:
//       return 1
//     case 2: 
//       return 1
//     case 3: 
//       return 1
//     case 4:
//       return 2
//     case 5:
//       return 2
//     case 6: 
//       return 2
//     case 7: 
//       return 3
//     case 8: 
//       return 3
//     case 9:
//       return 3
//     case 10:
//       return 4
//     case 11:
//       return 4
//     case 12:
//       return 4
//   }
// }

console.log(quarterOf(5))