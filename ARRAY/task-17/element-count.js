var arr = [1,2,2,3,1]

var count1=0
var count2=0
var count3=0

for(let ar of arr){
    if (ar==1) {
        count1++
        
    }
    else if (ar==2) {
        count2++
        
    }
    else if (ar==3) {
        count3++
        
    }
}
console.log(`1:${count1} 2:${count2} 3:${count3}`);

