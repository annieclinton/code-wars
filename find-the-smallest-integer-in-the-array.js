class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

console.log(new SmallestIntegerFinder().findSmallestInt([3,6,9,8]))