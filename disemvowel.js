function disemvowel(str) {
	return str.split('').filter(el => el.toLowerCase() == 'a' || el.toLowerCase() == 'e' || el.toLowerCase() == 'i' || el.toLowerCase() == 'o' || el.toLowerCase() == 'u' ? '' : el).join('')
  }

  console.log(disemvowel("this website is for losers. LOL"))
