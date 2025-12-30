//Given an array of numbers, replace negative numbers with zero.

var array = [1,-1,2,-3,3,5,4]

var result=[]

for(ar of array){
    if (ar<0) {
        result.push(0)
        
    }
    else{
        result.push(ar)
    }
}

console.log(result);
