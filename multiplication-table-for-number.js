function multiTable(number) {
  let str = ''
  for(let i = 1; i <= 10; i++){
    str = str + `${i} * ${number} = ${i * number}\n`
  }
  return str
}

console.log(multiTable(5))