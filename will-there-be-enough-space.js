function enough(cap, on, wait) {
  return cap >= on + wait ? 0 : Math.abs(cap - on - wait)
}

console.log(enough(10, 5, 5)) // 0
console.log(enough(100, 60, 50)) // 10
console.log(enough(84, 80, 19)) // 15