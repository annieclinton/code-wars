function removeRotten(bagOfFruits){
  if(bagOfFruits == null || bagOfFruits.length === 0){
    return []
  }else{
    return bagOfFruits.map(fruit => fruit.includes('rotten') ? (fruit.split('rotten').join('')).toLowerCase() : fruit.toLowerCase())
  } 
}
console.log(removeRotten(["apple","rottenBanana","apple"]))
console.log(removeRotten(["apple","banana","kiwi","melone","orange"]), ["apple","banana","kiwi","melone","orange"])
console.log(removeRotten([]), [])





