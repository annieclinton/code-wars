function abbrevName(name){
    let arr = name.split(' ')
    return (arr[0][0] + '.' + arr[1][0]).toUpperCase()
}

console.log(abbrevName('sam Harris'))