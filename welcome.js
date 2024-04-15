let langs = {

"english" : "Welcome",
"czech" : "Vitejte",
"danish" : "Velkomst",
"dutch" : "Welkom",
"estonian" : "Tere tulemast",
"finnish" : "Tervetuloa",
"flemish" : "Welgekomen",
"french" : "Bienvenue",
"german" : "Willkommen",
"irish" : "Failte",
"italian" : "Benvenuto",
"latvian" : "Gaidits",
"lithuanian" : "Laukiamas",
"polish" : "Witamy",
"spanish" : "Bienvenido",
"swedish" : "Valkommen",
"welsh" : "Croeso"
}

function greet(language) {
	return langs[language] || langs[english]
}

console.log(greet("czech"))
console.log(greet("english"))