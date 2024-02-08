// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: 
// the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, 
// but these will not appear at the beginning or end of the string. They will not contain numerals.
// Parameters, returns, examples, pseudo code 

//dish must have same first and last letter as animal name 
// lowercase strings with at least 2 letters. no hypens or spaces where it matters 
// return true or false 
//
//

function feast(name, dish){
  //conditional first letter and last letter of name === first letter and last letter of dish
  //return true or false 
  if((name[0] === dish[0]) && (name[name.length-1] === dish[dish.length-1])){
    return true
  }else{
    return false
  }
}

function feast2(name, dish){
  //conditional first letter and last letter of name === first letter and last letter of dish
  //return true or false 
return (name[0] === dish[0]) && (name[name.length-1] === dish[dish.length-1]) 

}


console.log(feast('great blue heron', 'garlic naan'))//true
console.log(feast('chickadee', 'chocolate cake'))//true
console.log(feast('dog', 'bone'))

console.log(feast2('great blue heron', 'garlic naan'))//true
console.log(feast2('chickadee', 'chocolate cake'))//true
console.log(feast2('dog', 'bone'))