var array=[1,3,5,6,7]

var left=0
var right=1

while (left<array.length-1) {
     let difference=array[right]-array[left]

    if (difference!=1) {
        array.splice(left+1,0,array[left]+1)
        
        
        
    }

    left=right
    right++
}
console.log(array);

    
