var number = [3,4,5,6,7,8,9,11,13]

var oddCount = 0

var evenCount = 0

for(let nu of number){
    if (nu%2==0) {
        evenCount++
        
    }
    else{
        oddCount++
    }
}

console.log("No of Even : ",evenCount);
console.log("No of Odd : ",oddCount);
