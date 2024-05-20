function abbrevName(name){

  let names = name.split(' ')
  return (names[0][0]+ '.' + names[1][0]).toUpperCase()

}

console.log(abbrevName('Sam Harris'))