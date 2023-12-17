function pipeFix(numbers){
    // find the min and max number and then loop from min to max, increase 1 each time
    //return the array of numbers
    let arr = []
    let min = numbers[0]
    let max = numbers[numbers.length-1]
    for(let i = min; i <= max; i++){
        arr.push(i)
    }
    return arr
}

console.log(pipeFix([1,3,5,6,7,8])) // Output: 1,2,3,4,5,6,7,8
console.log(pipeFix([3,5,6,7,8,9])) // Output: 3,4,5,6,7,8,9

