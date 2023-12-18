// take in number, return true if used with plural, or false if not
//PREP
// num not string, integer, whole, float, positive, zero
// return true or false
//

function plural(n){
//conditional 1 false, else true
return n === 1 ? false : true
}

console.log(plural(0)) // true
console.log(plural(1)) // false
console.log(plural(1.5)) //true
console.log(plural(2)) //true 