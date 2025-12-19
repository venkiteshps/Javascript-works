var array=[1,2,3,4,5,6,7,8,9]

var oddCount = 0

var evenCount = 0

for(let ar of array){
    if (ar%2==0) {
        evenCount++
        
    }
    else{
        oddCount++
    }
}

console.log("Even Count : ",evenCount);
console.log("Odd Count : ",oddCount);
