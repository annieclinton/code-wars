function arrayMadness(a, b) {
    //sum the squares in a
    let aSum = a.reduce((acc,c) => acc + c**2, 0)

    //sum the cubes in b
    let bSum = b.reduce((acc, c) => acc + c**3, 0)

    //check if sum of a > sum of b
    return aSum > bSum
  }

  console.log(arrayMadness([4, 5, 6], [1, 2, 3]))