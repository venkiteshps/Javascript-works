var numbers =[1,0,2,0,3,0,4]

var count = 0
var newNumbers=[]

for(let nu of numbers){
    if (nu==0) {
        count++
        
    }
    else{
        newNumbers.push(nu)
    }
}
while(count>0){
    newNumbers.push(0)
    count--
}

console.log(newNumbers);

