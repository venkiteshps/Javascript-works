var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0

}

for(let [k,v] of Object.entries(expenses)){
    if(v==0){
        // console.log(k);
    }
}

for(let [k,v] of Object.entries(expenses)){
    if (v>0) {
        // console.log(k);
        
        
    }
}

for(let [k,v] of Object.entries(expenses)){
    if (v>250) {
        // console.log(k);
        
        
    }
}



var total=Object.values(expenses).reduce((sum,ex)=>sum+ex,0)
// console.log(total);

var split=total/Object.entries(expenses).length
// console.log(split);

var individual={}

for(let ex in expenses){
    individual[ex]=split-expenses[ex]
}

console.log(individual);



