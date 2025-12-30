var expense={
    jazeel:780,
    nazim:680,
    arun:1000,
    amal:750,
    mahin:500,
    thushar:1500
}

//total expense
var total=0

for (let ex in expense){
    total+=expense[ex]

}
// console.log(total);

//greatest expense

var greatest=0
for(let ex in expense){
    if (greatest<expense[ex]) {
        greatest=expense[ex]
        
    }
}

for(let ex in expense){
    if (greatest==expense[ex]){
        // console.log(ex,expense[ex]);
        
    }
}

//split

var split=total/Object.entries(expense).length
// console.log(split);

//splitwise

var splitwise={}

for (let  ex in expense){
  
        splitwise[ex]=split-expense[ex]
    }


console.log(splitwise);

