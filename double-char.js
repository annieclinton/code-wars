function doubleChar(str) {
  return str.split('').map(letter => letter + letter).join('')
}

console.log(doubleChar('String'))