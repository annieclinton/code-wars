function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }
  
  return name;
}

// function getPlanetName(id){
  
//   switch(id){
//     case 1:
//       return 'Mercury'
//     case 2:
//       return'Venus'
//     case 3:
//       return'Earth'
//     case 4:
//       return'Mars'
//     case 5:
//       return 'Jupiter'
//     case 6:
//       return 'Saturn'
//     case 7:
//       return 'Uranus'
//     case 8:
//       return 'Neptune' 
//   }
// }

console.log(getPlanetName(3))