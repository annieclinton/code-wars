//PREP
//number of hotdogs, find total cost of hot dogs based on variable pricing 
//P: num, pos, whole, cents 
//R: num, cents, return 
//E:
//

function saleHotdogs(n){
    if(n < 5){
        return n * 100
    }else if(n >= 5 && n <10){
        return n * 95
    }else if(n >= 10){
        return n * 90
    }
  }

  console.log(saleHotdogs(1)) // 100 = 1.00
  console.log(saleHotdogs(5)) // 475 = .95*5 = 4.75
  console.log(saleHotdogs(10)) // 455 = .90*5 = 4.55 