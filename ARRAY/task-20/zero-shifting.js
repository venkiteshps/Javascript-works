//11. Given an array, shift all zero values to the end without changing the order of other elements.
var  array=[1,0,0,2,5,0,0,4]

var result=[]
var count=0

for(let ar of array){
    if (ar!=0) {
        result.push(ar)
        
    }
    else{
        count++
    }
}

while (count>0) {
    result.push(0)
    count--
    
}
console.log(result);
