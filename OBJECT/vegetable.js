var vegetable={
    onion:305,
    potato:50,
    brinjal:305,
    carrot:15,
    beans:200,
    garlic:230
}
let greatest=0

for (let veg in vegetable){
    if (vegetable[veg]>greatest) {
        greatest=vegetable[veg]
        
    }
    
    
}
// console.log(greatest);

for(let key in vegetable){
    if (greatest==vegetable[key]) {
        console.log(key,vegetable[key]);
        
        
    }
}