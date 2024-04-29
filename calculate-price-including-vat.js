//return price without vat
function excludingVatPrice(price){
  if(price === null){
    return -1
  }
  return Number((price/1.15).toFixed(2))
}

console.log(excludingVatPrice(230)) //200.00
console.log(excludingVatPrice(230.65)) 