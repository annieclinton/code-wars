//PREP
//Is it ok if I write down a few notes just to make sure I understand the question? 
//summarize the question - print 1 to num, if divisible by 3, print fizz, if divisible by 5, print buzz, if both, print fizzbuzz
//is that correct?
//is it ok if I ask a few more questions before I jump into solving the problem to make sure I understand it?


//you mentioned that I'm taking in a number. Will this number always be a number? So it will never be a string, a boolean, undefined, another function, I can assume it will always be a number? If yes, can I assume it will always be a whole number, or will it ever be a floated value with decimal places? Will it ever be negative? Is there anything else that might be passed in that I haven't clarified here?
//P: num, whole, +
//Ok great. I feel pretty confident what I'll be taking in 
//Can I clarify with you what I'm returning? When you say I should print the values, is it ok if I console.log() them?
//R: console.log()
//Ok great
//Do you mind if I give you an example before I jump into solving this problem? Ok great, I'm just gonna go ahead and set up this function first. So I know that i'm taking in a number, so I'm gonna go ahead and use num as my parameter. Now i'll just set up some test cases. Explain them and what they print. For each one ask, does this look correct to you?
//E:
//P: Write your psuedo code inside the function body. Does this seem like a good direction to go in solving this problem? (if not, they will give me a hint here)

function fizzBuzz(num){
	//loop
	//conditionals using % 3, % 5 % 3&5 (explain that you need to check % 3&5 first)
	//console.log num or fizz,buzz,fizzBuzz
}

fizzBuzz(5) // 1,2, fizz, 4, buzz
fizzBuzz(3) // 1,2, fizz
fizzBuzz(15) // 1,2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzBuzz