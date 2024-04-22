function replace(string){
  return string.replace(/[aeiouAEIOU]/g, '!')    
  
}

console.log(replace("Hi "))
console.log(replace("!Hi! Hi!"))
console.log(replace("aeiou"))
console.log(replace("ABCDE"))
