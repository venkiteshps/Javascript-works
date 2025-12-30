var fruits={
    apple:250,
    orange:100,
    mango:120,
    cherry:220,
    guva:90,
    banana:70
}

// for(let [k,v] of Object.entries(fruits)){
//     if(v>100){
//         console.log(k,v);
        
//     }
// }

// for(let [k,v] of Object.entries(fruits)){
//     if(v>50 && v<150){
//         console.log(k,v);
        
//     }
// }
var costlyProduct=Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)
// console.log(costlyProduct);

var cheapestProduct=Object.entries(fruits).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2)
console.log(cheapestProduct);

