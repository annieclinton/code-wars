function century(year) {
  return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
}

console.log(century(1705))
console.log(century(1900))
console.log(century(1601))
console.log(century(2000))
console.log(century(2742))

