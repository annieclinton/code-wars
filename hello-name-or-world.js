function hello(name) {
  if(name === null || name === undefined || name === ''){
    return 'Hello, World!'
  }
  name = name.toLowerCase()
  let firstLetter = name[0].toUpperCase()
  let arr = name.split('')
  arr.shift()
  return 'Hello, ' + firstLetter + arr.join('') + '!'
}

console.log(hello("annie"))
console.log(hello("annIe"))
console.log(hello("ANNIE"))
console.log(hello(""))
console.log(hello())

