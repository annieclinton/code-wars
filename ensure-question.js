function ensureQuestion(s) {
  return s[s.length - 1] === '?' ? s : s + '?'
}

console.log(ensureQuestion("Yes?"))
console.log(ensureQuestion("No"))