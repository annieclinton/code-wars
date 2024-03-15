// Wolves have been reintroduced to Great Britain. You are a sheep farmer, 
// and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. 
// Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
// Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" 
// where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

//SOLUTION OPTION 1
function warnTheSheep(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
  }

  //SOLUTION OPTION 2
// function warnTheSheep(queue) {
// let reversedQueue = queue.reverse()
// console.log(reversedQueue)
// if(reversedQueue[0] === "wolf"){
//     return "Pls go away and stop eating my sheep"
// }else{
//     let wolf = reversedQueue.indexOf('wolf') + 1
//     console.log(`The wolf is at position ${wolf}`)
//     let endangeredSheep = wolf - 1
//     console.log(`The sheep is at position ${endangeredSheep}`)

//     return `Oi! Sheep number ${endangeredSheep}! You are about to be eaten by a wolf!`

// }
// }
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])) // sheep number 1


