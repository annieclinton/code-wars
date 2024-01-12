// function greet(name){
//   if(name === "Johnny"){
//     return "Hello, my love!";
//   }
//   return "Hello, " + name + "!";

// }

function greet(name){
  return "Hello, " + (name === "Johnny" ? "my love" : name) + "!"
}

console.log(greet("Johnny"))
console.log(greet("Rachel"))