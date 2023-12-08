function tripleTrouble(one, two, three){
  let str = ''
  for(let i = 0; i < one.length; i++){
    str = str + one[i] + two[i] + three[i]
  }
  return str
 }
 console.log(tripleTrouble('aa','bb','cc')) // 'abcabc'
 console.log(tripleTrouble('aaa','bbb','ccc'))