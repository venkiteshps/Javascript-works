var arr = [20,40,10,50,30,80,100]

var largest=0

for(let ar of arr){
    if (ar>largest) {
        largest=ar
        
    }
    
}
console.log("Largest : ",largest);

var smallest=largest

for(let ar of arr){
    if (ar<smallest) {
        smallest=ar
        
    }
}
console.log("Smallest : ",smallest);
