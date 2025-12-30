var array=[10,11,12,12,13,14,15,15]

var left=0
var right=1

while (left<array.length) {
    let difference=array[right]-array[left]

    if (difference==0) {
        console.log(`${array[left]}is duplicate`);
        
        
    }
    left++
    right++
    
}