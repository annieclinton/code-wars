function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

console.log(derive(7,8)) // 56x^7
