// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
  let good_count = (x.filter(idea => idea.includes('good'))).length
  if(good_count > 0 && good_count < 3){
    return 'Publish!'
  }else if(good_count > 2){
    return 'I smell a series!'
  }else{
    return 'Fail!'
  }
}

console.log(well(['good', 'good']))
console.log(well(['good', 'good', 'good']))
console.log(well(['bad', 'bad', 'bad']))