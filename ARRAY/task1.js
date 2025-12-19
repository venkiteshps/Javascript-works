var arr= [-1,0,-1,0,0,-1,0,0,-1,10,2]

var zeroCount = 0


var arrCopy=[]

for(let ar of arr){
    if (ar==0) {
        zeroCount++
        
    }
    else{
        arrCopy.push(ar)
        
    }
}

while(zeroCount>0){
    arrCopy.push(0)
    zeroCount--
}
console.log(arrCopy);


