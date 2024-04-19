//PREP
//check if exactly a or b is true, then return true, else return false 
//P - expression (string, a number, a comparison that evaluates to a number or string, or true or false, or null or undefined)
//R - return true or false
//E

function xor(a, b) {
  // conditional
  //return true or false
  return a == true && b == false || b == true && a == false 
}

console.log(xor(3,4)) // false 
console.log(xor("hello", "bye")) //false
console.log(xor("hello" === "hello", 1 === "1")) //true
console.log(xor(undefined, null)) //false

